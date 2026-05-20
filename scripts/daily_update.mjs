import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();

const TARGETS = [
  {
    id: "id",
    zh: "印尼",
    en: "Indonesia",
    sources: [
      "https://trends24.in/indonesia/",
      "https://getdaytrends.com/indonesia/",
    ],
  },
  {
    id: "th",
    zh: "泰国",
    en: "Thailand",
    sources: [
      "https://trends24.in/thailand/",
      "https://getdaytrends.com/thailand/",
    ],
  },
  {
    id: "ph",
    zh: "菲律宾",
    en: "Philippines",
    sources: [
      "https://trends24.in/philippines/",
      "https://getdaytrends.com/philippines/",
    ],
  },
  {
    id: "sa",
    zh: "沙特",
    en: "Saudi Arabia",
    sources: [
      "https://trends24.in/saudi-arabia/",
      "https://getdaytrends.com/saudi-arabia/",
    ],
  },
  {
    id: "tr",
    zh: "土耳其",
    en: "Turkey",
    sources: [
      "https://trends24.in/turkey/",
      "https://getdaytrends.com/turkey/",
    ],
  },
  {
    id: "vn",
    zh: "越南",
    en: "Vietnam",
    sources: [
      "https://trends24.in/vietnam/",
      "https://getdaytrends.com/vietnam/",
    ],
  },
];

function todayInShanghai() {
  // YYYY-MM-DD
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Shanghai" });
}

function yyyymmdd(dateStr) {
  return dateStr.replaceAll("-", "");
}

async function writeStatus({ ok, dateStr, message }) {
  const statusPath = path.join(ROOT, "status.json");
  const payload = {
    ok: Boolean(ok),
    date: dateStr,
    updatedAt: new Date().toISOString(),
    message: String(message || (ok ? "OK" : "FAILED")),
  };
  await fs.writeFile(statusPath, JSON.stringify(payload, null, 2) + "\n");
}

function encode(q) {
  return encodeURIComponent(q);
}

function stripHtml(input) {
  return input.replace(/<[^>]+>/g, "").trim();
}

function normalizeTopic(topic) {
  return topic.replace(/\s+/g, " ").trim();
}

function parseTrends24Top30(html) {
  const olMatch = html.match(/<ol[^>]*>([\s\S]*?)<\/ol>/i);
  if (!olMatch) return [];
  const inner = olMatch[1];
  const re = /<a[^>]*class="?trend-link"?[^>]*>([\s\S]*?)<\/a>/gi;
  const out = [];
  let m;
  while ((m = re.exec(inner)) && out.length < 30) {
    const text = normalizeTopic(stripHtml(m[1]));
    if (text) out.push(text);
  }
  return out;
}

function parseGetDayTrendsTop30(html) {
  // getdaytrends usually exposes an ordered list of trends; keep parsing tolerant.
  const olMatch = html.match(/<ol[^>]*>([\s\S]*?)<\/ol>/i);
  if (!olMatch) return [];
  const inner = olMatch[1];
  const re = /<a[^>]*>([\s\S]*?)<\/a>/gi;
  const out = [];
  let m;
  while ((m = re.exec(inner)) && out.length < 30) {
    const text = normalizeTopic(stripHtml(m[1]));
    if (text) out.push(text);
  }
  return out;
}

function guessRisk(topic) {
  const t = topic.toLowerCase();

  const adult = ["massage", "escort", "porn", "sex", "onlyfans", "hookup"];
  if (adult.some((k) => t.includes(k)) || /#?jeddahmassage/i.test(topic)) {
    return { zh: "成人/低质广告风险", en: "Adult / Low-Quality Ad Risk", key: "watch" };
  }

  // Speculative finance / shill-like trends: low conversion and higher brand-safety risk.
  if (/\btrade\s+\$[a-z0-9]+\b/i.test(topic) || /\$[a-z0-9]{2,}\b/i.test(topic)) {
    return { zh: "投机/币圈/广告风险", en: "Speculation / Crypto-Shill Risk", key: "watch" };
  }

  const medical = ["aids", "covid", "cancer", "dementia", "demans", "virus"];
  if (medical.some((k) => t.includes(k))) {
    return { zh: "医疗/敏感", en: "Medical / Sensitive", key: "watch" };
  }

  const disaster = ["earthquake", "flood", "fire", "crash", "soma"];
  if (disaster.some((k) => t.includes(k)) || /#soma/i.test(topic)) {
    return { zh: "灾害/纪念", en: "Disaster / Memorial", key: "watch" };
  }

  const legal = ["iban", "tck", "law", "court", "hague", "trial", "judge"];
  if (legal.some((k) => t.includes(k))) {
    return { zh: "法律/诈骗", en: "Legal / Fraud", key: "watch" };
  }

  const political = [
    "prabowo",
    "anies",
    "duterte",
    "sara duterte",
    "vp sara",
    "marcos",
    "senate",
    "ak parti",
    "akparti",
    "erdogan",
    "imamoğlu",
    "imamoglu",
    "chp",
    "tbmm",
    "külliye",
    "kulliye",
    "diyanet",
    "kurdistan",
    "gazze",
    "gaza",
    "kudüs",
    "kudus",
    "filistin",
    "palestine",
    "north korea",
    "korea",
  ];
  if (political.some((k) => t.includes(k))) {
    return { zh: "政治/争议", en: "Political / Controversy", key: "watch" };
  }

  return { zh: "低", en: "Low", key: "low" };
}

function guessType(topic) {
  const t = topic.toLowerCase();
  const hasHashtag = topic.startsWith("#");

  // Travel / tourism / local event
  const travel = ["wisata", "travel", "tour", "festival", "fair", "expo", "bbtf", "bali"];
  if (travel.some((k) => t.includes(k))) {
    return { zh: "旅行/本地活动", en: "Travel / Local Event" };
  }

  // Awards / red carpet / ceremonies
  const awards = ["awards", "award", "kazzawards", "red carpet", "carpet", "ceremony"];
  if (awards.some((k) => t.includes(k)) || /\bkazz\b/i.test(topic)) {
    return { zh: "颁奖礼/红毯/盛典", en: "Awards / Red Carpet / Ceremony" };
  }

  // Music / concerts / releases
  const music = [
    "album",
    "concert",
    "song",
    "music",
    "k-pop",
    "kpop",
    "cover",
    "out now",
    "mv",
    "spotify",
    "debut",
    "comeback",
  ];
  if (music.some((k) => t.includes(k)) || /\bout\s+now\b/i.test(topic)) {
    return { zh: "音乐/演出/发布", en: "Music / Show / Release" };
  }

  // Drama / series / episodes / tv shows
  const entertainment = ["series", "ep", "episode", "show", "drama", "season", "the wall song"];
  if (entertainment.some((k) => t.includes(k)) || /\bep\d+\b/i.test(t)) {
    return { zh: "剧集/综艺/娱乐", en: "Drama / Variety / Entertainment" };
  }

  // Celebrity / fandom / birthday / rankings
  const fandom = ["hbd", "happy birthday", "born to be", "top3", "top 3", "fanboy", "fandom", "forever with"];
  if (fandom.some((k) => t.includes(k)) || /\bhbd\b/i.test(t)) {
    return { zh: "明星/粉丝应援", en: "Celebrity / Fandom" };
  }

  // Sports
  const sports = ["cup", "match", "fc", "league", "football", "basketball", "volley", "f1", "ufc", "nba"];
  if (sports.some((k) => t.includes(k)) || /كاس|المنتخب/i.test(topic)) {
    return { zh: "体育/赛事", en: "Sports / Event" };
  }

  // Brands / consumer campaigns / collabs
  const brand = [
    "maybelline",
    "coke",
    "nescafe",
    "chloe",
    "loreal",
    "l'oréal",
    "grabfood",
    "grab",
    "qned",
    "lg",
    "parfums",
    "store",
  ];
  if (brand.some((k) => t.includes(k)) || /\bx\s+[a-z0-9]/i.test(topic)) {
    return { zh: "品牌活动/消费", en: "Brand / Consumer" };
  }

  // Finance / crypto (often low conversion)
  if (/\btrade\s+\$[a-z0-9]+\b/i.test(topic) || /\$[a-z0-9]{2,}\b/i.test(topic)) {
    return { zh: "金融/加密（谨慎）", en: "Finance / Crypto (Watch)" };
  }

  if (hasHashtag) return { zh: "话题标签/待分类", en: "Hashtag / To Classify" };
  return { zh: "综合/待分类", en: "General / To Classify" };
}

function hasVietnameseLetters(input) {
  return /[À-ỹđĐ]/.test(input);
}

function shouldDrop(topic, countryId) {
  const t = topic.toLowerCase();
  if (!topic) return true;
  if (/^\d+$/.test(topic)) return true;
  if (topic.length <= 2) {
    // Vietnam: keep short Vietnamese tags/words if they contain Vietnamese letters,
    // because they can still map to meaningful local-language content on TikTok/Threads.
    if (countryId === "vn" && hasVietnameseLetters(topic)) return false;
    return true;
  }
  if (/^(hi|hello|good morning|good night|morning|night)$/i.test(topic)) return true;

  // Vietnam: keep Vietnamese hashtags/terms even if they look generic in English.
  // We still drop clearly empty/garbage above.
  if (countryId === "vn" && (topic.startsWith("#") || hasVietnameseLetters(topic))) {
    return false;
  }

  // Overly generic words (common across markets) – tends to be low-signal.
  const generic = [
    "today",
    "tomorrow",
    "yesterday",
    "now",
    "again",
    "major",
    "middle",
    "soft",
    "plain",
    "subtle",
    "sharp",
    "relaxed",
    "noticing",
    "reflecting",
    "hovering",
    "glancing",
    "skimming",
    "unfamiliar",
    "indirect",
    "pausing",
    "rechecking",
  ];
  if (generic.includes(t)) return true;

  return false;
}

function buildTopic(topic) {
  const risk = guessRisk(topic);
  const type = guessType(topic);
  const query = topic.startsWith("#") ? topic.slice(1) : topic;
  return {
    topic,
    typeZh: type.zh,
    typeEn: type.en,
    riskZh: risk.zh,
    riskEn: risk.en,
    riskKey: risk.key,
    query,
    tiktok: `https://www.tiktok.com/search?q=${encode(query)}`,
    threads: `https://www.threads.com/search?q=${encode(query)}`,
  };
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; daily-trend-bot/1.0)",
      accept: "text/html,*/*",
    },
  });
  if (!res.ok) throw new Error(`Fetch failed: ${url} (${res.status})`);
  return await res.text();
}

function parseTop30BySource(url, html) {
  if (url.includes("trends24.in")) return parseTrends24Top30(html);
  if (url.includes("getdaytrends.com")) return parseGetDayTrendsTop30(html);
  return [];
}

async function getTop30FromSources({ sources }) {
  const errors = [];
  for (const url of sources) {
    try {
      const html = await fetchText(url);
      const trends = parseTop30BySource(url, html);
      if (trends.length >= 10) return { sourceUrl: url, trends: trends.slice(0, 30), errors };
      errors.push(`Parse too few trends: ${url}`);
    } catch (err) {
      errors.push(`${url} -> ${err?.message || String(err)}`);
    }
  }
  const last = errors[errors.length - 1] || "Unknown error";
  throw new Error(last);
}

function mdTableRow(cells) {
  return `| ${cells.map((c) => String(c).replaceAll("\n", " ")).join(" | ")} |`;
}

const THREADS_PROBE_SEEDS = {
  id: {
    cities: ["Jakarta", "Bandung", "Surabaya", "Bali"],
    media: ["Kompas", "detik", "CNN Indonesia", "TRANS7"],
    pop: ["NCT", "JKT48", "Arsenal", "Premier League"],
    langHints: ["Indonesia", "Bahasa", "viral", "tren"]
  },
  th: {
    cities: ["Bangkok", "Chiang Mai", "Phuket", "Khon Kaen"],
    media: ["GMMTV", "Workpoint", "Thairath", "ช่อง 3"],
    pop: ["T-pop", "BL series", "The Weeknd", "GrabFood"],
    langHints: ["ไทย", "เทรนด์", "ไวรัล", "ซีรีส์"]
  },
  ph: {
    cities: ["Manila", "Cebu", "Davao", "Bacolod"],
    media: ["ABS-CBN", "GMA", "Inquirer", "Rappler"],
    pop: ["BINI", "PBB", "NBA", "F1"],
    langHints: ["Pinoy", "P-pop", "viral", "trend"]
  },
  sa: {
    cities: ["Riyadh", "Jeddah", "Mecca", "Dammam"],
    media: ["MBC", "Saudi League", "Al Nassr", "Al Hilal"],
    pop: ["World Cup", "football", "WWE", "Red Bull"],
    langHints: ["السعودية", "ترند", "الرياض", "جدة"]
  },
  tr: {
    cities: ["İstanbul", "Ankara", "İzmir", "Antalya"],
    media: ["TRT", "NTV", "Hurriyet", "beIN Sports"],
    pop: ["Galatasaray", "Fenerbahçe", "NBA", "iHeartAwards"],
    langHints: ["Türkiye", "gündem", "trend", "viral"]
  },
  vn: {
    cities: ["Hà Nội", "TP.HCM", "Đà Nẵng", "Cần Thơ"],
    media: ["VTV", "Zing", "Kenh14", "VnExpress"],
    pop: ["Sơn Tùng", "K-pop", "Netflix", "CapCut"],
    langHints: ["Việt Nam", "xu hướng", "viral", "hot trend"]
  }
};

function uniq(items) {
  return Array.from(new Set(items.filter(Boolean)));
}

function buildThreadsProbeQueries(countryId, keptTopics) {
  const seeds = THREADS_PROBE_SEEDS[countryId] || {};
  const kept = Array.isArray(keptTopics) ? keptTopics : [];
  const keptHeads = kept
    .map((k) => k?.topic || "")
    .filter(Boolean)
    .slice(0, 6);

  const queries = uniq([
    ...keptHeads,
    ...((seeds.cities || []).map((c) => `${c} viral`)),
    ...((seeds.media || []).slice(0, 4)),
    ...((seeds.pop || []).slice(0, 4)),
    ...((seeds.langHints || []).slice(0, 4))
  ]).slice(0, 12);

  return queries.map((q) => ({
    query: q,
    threads: `https://www.threads.com/search?q=${encode(q)}`
  }));
}

function buildInstagramProxyHashtags(countryId, keptTopics) {
  const seeds = THREADS_PROBE_SEEDS[countryId] || {};
  const kept = Array.isArray(keptTopics) ? keptTopics : [];
  const keptTags = kept
    .map((k) => (k?.query || "").replace(/^#/, ""))
    .filter(Boolean)
    .slice(0, 6);
  const tagCandidates = uniq([
    ...keptTags,
    ...(seeds.cities || []).map((c) => c.replace(/\s+/g, "")),
    ...(seeds.pop || []).map((p) => p.replace(/\s+/g, ""))
  ]).slice(0, 10);

  return tagCandidates.map((tag) => {
    const safe = tag.replace(/[^\p{L}\p{N}_]/gu, "");
    return {
      hashtag: `#${safe}`,
      instagram: `https://www.instagram.com/explore/tags/${encodeURIComponent(safe)}/`,
      threadsVerify: `https://www.threads.com/search?q=${encode(safe)}`
    };
  });
}

function parseKeptTypesFromMarkdown(markdown) {
  // Extract kept-topic tables:
  // | 话题 | 类型判断 | TikTok 搜索 | Threads 搜索 | 风险标签 |
  // | --- | --- | --- | --- | --- |
  // | topic | typeZh | ... | ... | riskZh |
  const out = new Map();
  const lines = markdown.split(/\r?\n/);
  let inTable = false;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (line === "| 话题 | 类型判断 | TikTok 搜索 | Threads 搜索 | 风险标签 |") {
      // skip separator line next
      inTable = true;
      i += 1;
      continue;
    }
    if (!inTable) continue;
    if (!line.startsWith("|") || line === "|" || line.startsWith("| 国家 |")) {
      inTable = false;
      continue;
    }
    const cells = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim());
    if (cells.length < 5) continue;
    const [topic, typeZh, , , riskZh] = cells;
    if (!topic || topic === "（无）") continue;
    out.set(topic, { typeZh, riskZh });
  }
  return out;
}

function applyKeptOverridesFromMarkdown(byCountry, markdown) {
  const map = parseKeptTypesFromMarkdown(markdown);
  byCountry.forEach((c) => {
    c.kept = (c.kept || []).map((k) => {
      const o = map.get(k.topic);
      if (!o) return k;
      const updated = { ...k };
      if (o.typeZh) updated.typeZh = o.typeZh;
      if (o.riskZh) updated.riskZh = o.riskZh;
      // keep English fields from guess for now
      updated.riskKey = updated.riskZh === "低" ? "low" : "watch";
      return updated;
    });
  });
}

function renderCountryMarkdown(country, rawTop30, kept) {
  const lines = [];
  lines.push(`## ${country.index}. ${country.zh} ${country.en}`);
  lines.push("");
  lines.push(`来源：${country.sourceUrl || "（未获取到可用来源）"}`);
  lines.push("");

  if (country.error) {
    lines.push(`> 抓取失败：${country.error}`);
    if (Array.isArray(country.attempted) && country.attempted.length) {
      lines.push(`> 已尝试：${country.attempted.join("；")}`);
    }
    lines.push("");
  }

  lines.push("### 前 30 条 X 趋势扫描");
  lines.push("");
  if (!rawTop30 || rawTop30.length === 0) {
    lines.push("（本环境无法访问趋势源，未能抓取到当日前 30 条趋势）");
  } else {
    rawTop30.forEach((t, i) => lines.push(`${i + 1}. ${t}`));
  }
  lines.push("");
  lines.push("### 保留选题");
  lines.push("");
  lines.push(mdTableRow(["话题", "类型判断", "TikTok 搜索", "Threads 搜索", "风险标签"]));
  lines.push(mdTableRow(["---", "---", "---", "---", "---"]));
  if (!kept || kept.length === 0) {
    lines.push(mdTableRow(["（无）", "—", "—", "—", "—"]));
  } else {
    kept.forEach((k) => {
      lines.push(
        mdTableRow([k.topic, k.typeZh, k.tiktok, k.threads, k.riskZh]),
      );
    });
  }
  lines.push("");

  // Threads trend probe (regional signals) + IG proxy signals
  lines.push("### Threads 地区热点探针（试运行）");
  lines.push("");
  lines.push("说明：这不是 Threads 官方“趋势榜”，而是用地理/语言/媒体/娱乐词做探针，快速定位可能的地区热点内容入口。");
  lines.push("");

  const probes = buildThreadsProbeQueries(country.meta.id, kept);
  lines.push(mdTableRow(["探针关键词", "Threads 搜索"]));
  lines.push(mdTableRow(["---", "---"]));
  probes.forEach((p) => lines.push(mdTableRow([p.query, p.threads])));
  lines.push("");

  lines.push("#### Instagram 代理信号（可选）");
  lines.push("");
  lines.push("说明：用 Instagram 标签页观察是否有明显热度，再回到 Threads 搜索同词验证。部分地区可能需要登录才能查看。");
  lines.push("");
  const ig = buildInstagramProxyHashtags(country.meta.id, kept);
  lines.push(mdTableRow(["IG 标签", "Instagram 标签页", "Threads 验证"]));
  lines.push(mdTableRow(["---", "---", "---"]));
  ig.forEach((h) => lines.push(mdTableRow([h.hashtag, h.instagram, h.threadsVerify])));
  lines.push("");

  return lines.join("\n");
}

function renderMarkdown(dateStr, byCountry) {
  const lines = [];
  lines.push(`# ${dateStr} 六国 X 热点 30 条扩展筛选报告`);
  lines.push("");
  lines.push(`执行日期：${dateStr}  `);
  lines.push("目标国家：印尼、泰国、菲律宾、沙特、土耳其、越南  ");
  lines.push("数据源：trends24.in（公开可访问 X/Twitter Trends 聚合页）  ");
  lines.push(
    "执行口径：每国读取前 30 条 X 趋势；过滤泛词、低语义词和明显无短视频转化价值的话题；保留更可能在 TikTok/Threads 找到内容响应的选题；政治、灾害、争议类单独打风险标签。",
  );
  lines.push("");
  lines.push(
    "> 说明：本轮是在公开网页可访问条件下的自动筛选。TikTok/Threads 的逐条热门视频或热门帖需要登录态进一步打开搜索结果页确认；本报告先输出可执行搜索入口和风险判断。",
  );
  lines.push("");
  lines.push(
    "> 访问限制：如果你看到“抓取失败/未能抓取到趋势”，通常是执行环境无法解析或访问外网域名（例如 DNS/网络策略限制）。请在可访问公网的环境重跑生成脚本，或依赖仓库内的 GitHub Actions 定时任务生成并推送。",
  );
  lines.push("");

  byCountry.forEach((c) => {
    lines.push(renderCountryMarkdown(c, c.rawTop30, c.kept));
  });

  lines.push("## 跨国优先级建议");
  lines.push("");
  lines.push("### 最适合进入下一步 TikTok/Threads 深挖");
  lines.push("");
  lines.push(mdTableRow(["国家", "优先话题"]));
  lines.push(mdTableRow(["---", "---"]));
  byCountry.forEach((c) => {
    const pri = c.kept
      .filter((k) => k.riskKey === "low")
      .slice(0, 5)
      .map((k) => k.topic)
      .join("、");
    lines.push(mdTableRow([c.zh, pri || "（无）"]));
  });
  lines.push("");
  lines.push("### 高风险/需人工复核");
  lines.push("");
  lines.push(mdTableRow(["国家", "风险话题", "风险类型"]));
  lines.push(mdTableRow(["---", "---", "---"]));
  byCountry.forEach((c) => {
    const watch = c.kept.filter((k) => k.riskKey !== "low");
    if (watch.length === 0) return;
    const topics = watch.slice(0, 8).map((k) => k.topic).join("、");
    const types = Array.from(new Set(watch.map((k) => k.riskZh))).slice(0, 4).join(" / ");
    lines.push(mdTableRow([c.zh, topics, types]));
  });
  lines.push("");
  lines.push("## 下一步执行规则");
  lines.push("");
  lines.push("1. 对“最适合深挖”的话题逐个打开 TikTok 搜索页。");
  lines.push("2. 只保留搜索结果第一页中发布时间在 48 小时内的视频。");
  lines.push("3. 每个话题选点赞量最高的 3 条视频链接。");
  lines.push("4. 打开 Threads 搜索页，进入热门 tab，抓取前 3 条帖子。");
  lines.push("5. 如果 TikTok 或 Threads 没有明显内容响应，则从最终日报中移除该话题。");
  lines.push("6. 高风险话题不自动进入内容选题池，只进入“风险观察池”。");
  lines.push("");
  return lines.join("\n");
}

function renderAppJsCountry(country, kept) {
  const topicLines = kept
    .map((k) => {
      const topicLiteral = JSON.stringify(k.topic);
      const typeZh = JSON.stringify(k.typeZh);
      const typeEn = JSON.stringify(k.typeEn);
      const riskZh = JSON.stringify(k.riskZh);
      const riskEn = JSON.stringify(k.riskEn);
      const query = JSON.stringify(k.query);
      return `        t(${topicLiteral}, ${typeZh}, ${typeEn}, ${riskZh}, ${riskEn}, ${query})`;
    })
    .join(",\n");

  return `      country(${JSON.stringify(country.id)}, ${JSON.stringify(country.zh)}, ${JSON.stringify(country.en)}, ${JSON.stringify(country.sourceUrl)}, [\n${topicLines}\n      ])`;
}

function renderAppJsReport(dateStr, byCountry) {
  const countriesBlock = byCountry
    .map((c) =>
      renderAppJsCountry(
        { id: c.meta.id, zh: c.meta.zh, en: c.meta.en, sourceUrl: c.sourceUrl },
        c.kept,
      ),
    )
    .join(",\n");

  // Keep the same title format used in existing reports.
  return `  {\n    date: ${JSON.stringify(dateStr)},\n    title: {\n      zh: \"六国 X 热点 30 条扩展筛选\",\n      en: \"Six-Country X Trends: Top 30 Expanded Screening\"\n    },\n    countries: [\n${countriesBlock}\n    ],\n    priorities: {\n      zh: [\n        [\"泰国\", \"娱乐/明星/品牌活动优先\"],\n        [\"菲律宾\", \"明星生日/演唱会/品牌联动优先\"],\n        [\"印尼\", \"娱乐/K-pop/品牌活动优先\"],\n        [\"沙特\", \"体育/生活方式/品牌优先\"],\n        [\"土耳其\", \"体育/音乐优先，政治法律谨慎\"],\n        [\"越南\", \"需要本地语言关键词补强\"]\n      ],\n      en: [\n        [\"Thailand\", \"Entertainment / celebrity / brand events\"],\n        [\"Philippines\", \"Celebrity / concerts / brand campaigns\"],\n        [\"Indonesia\", \"Entertainment / K-pop / brand topics\"],\n        [\"Saudi Arabia\", \"Sports / lifestyle / brand topics\"],\n        [\"Turkey\", \"Sports/music first; watch political/legal\"],\n        [\"Vietnam\", \"Needs local-language keyword enrichment\"]\n      ]\n    }\n  }`;
}

async function updateAppJs({ dateStr, byCountry }) {
  const appPath = path.join(ROOT, "app.js");
  let app = await fs.readFile(appPath, "utf8");

  // Update summary title date (zh/en)
  app = app.replace(
    /summaryTitle:\s*"\d{4}-\d{2}-\d{2} 六国热点话题日报"/,
    `summaryTitle: "${dateStr} 六国热点话题日报"`,
  );
  app = app.replace(
    /summaryTitle:\s*"\d{4}-\d{2}-\d{2} Six-Country Trend Brief"/,
    `summaryTitle: "${dateStr} Six-Country Trend Brief"`,
  );

  function findReportRangeFrom(startHint, date) {
    const needle = `{\n    date: "${date}"`;
    const start = app.indexOf(needle, startHint);
    if (start === -1) return null;

    let depth = 0;
    let started = false;
    let inString = "";
    let escaped = false;
    let end = -1;

    for (let i = start; i < app.length; i += 1) {
      const ch = app[i];

      if (inString) {
        if (escaped) {
          escaped = false;
          continue;
        }
        if (ch === "\\") {
          escaped = true;
          continue;
        }
        if (ch === inString) {
          inString = "";
        }
        continue;
      }

      if (ch === "\"" || ch === "'" || ch === "`") {
        inString = ch;
        continue;
      }

      if (ch === "{") depth += 1;
      if (ch === "}") depth -= 1;

      if (ch === "{") started = true;

      if (started && depth === 0 && i > start) {
        end = i + 1;
        break;
      }
    }

    if (end === -1) return null;

    let endWithComma = end;
    while (endWithComma < app.length && /\s/.test(app[endWithComma])) endWithComma += 1;
    if (app[endWithComma] === ",") endWithComma += 1;
    return { start, end: endWithComma };
  }

  function findAllReportRanges(date) {
    const ranges = [];
    let cursor = 0;
    while (cursor < app.length) {
      const r = findReportRangeFrom(cursor, date);
      if (!r) break;
      ranges.push(r);
      cursor = r.end;
    }
    return ranges;
  }

  const reportBlock = renderAppJsReport(dateStr, byCountry);

  // Remove any existing entries for this date (avoid duplicates), then insert a fresh one at the top.
  const existingRanges = findAllReportRanges(dateStr);
  for (let i = existingRanges.length - 1; i >= 0; i -= 1) {
    const r = existingRanges[i];
    app = `${app.slice(0, r.start)}${app.slice(r.end)}`;
  }

  // Re-locate insert point after removals (indexes may shift).
  const insertPoint = app.indexOf("const reports = [");
  if (insertPoint === -1) throw new Error("Cannot find `const reports = [` in app.js");

  const openBracketIndex = app.indexOf("[", insertPoint);
  if (openBracketIndex === -1) throw new Error("Cannot find reports array bracket in app.js");

  const before = app.slice(0, openBracketIndex + 1);
  const after = app.slice(openBracketIndex + 1);
  app = `${before}\n${reportBlock},\n${after}`;

  await fs.writeFile(appPath, app);
}

async function updateIndexHtml(dateStr) {
  const htmlPath = path.join(ROOT, "index.html");
  let html = await fs.readFile(htmlPath, "utf8");
  const now = new Date();
  const hhmm = now
    .toLocaleTimeString("en-GB", {
      timeZone: "Asia/Shanghai",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(":", "");
  const v = `${yyyymmdd(dateStr)}${hhmm}`;
  html = html.replace(
    /<script\s+src="\.\/app\.js(\?v=\d+)?"><\/script>/,
    `<script src="./app.js?v=${v}"></script>`,
  );
  await fs.writeFile(htmlPath, html);
}

async function main() {
  const dateStr = todayInShanghai();
  const mdName = `${dateStr}-六国X热点30条扩展筛选报告.md`;
  const mdPath = path.join(ROOT, mdName);

  const argv = process.argv.slice(2);
  const manualIndex = argv.indexOf("--manual");
  const manualPath =
    manualIndex !== -1 && argv[manualIndex + 1]
      ? path.resolve(ROOT, argv[manualIndex + 1])
      : process.env.MANUAL_TRENDS_JSON
        ? path.resolve(ROOT, process.env.MANUAL_TRENDS_JSON)
        : "";
  let manualData = null;
  if (manualPath) {
    const raw = await fs.readFile(manualPath, "utf8");
    manualData = JSON.parse(raw);
  }

  const byCountry = [];
  for (let i = 0; i < TARGETS.length; i += 1) {
    const meta = TARGETS[i];
    let rawTop30 = [];
    let kept = [];
    let sourceUrl = meta.sources?.[0];
    let error = "";
    let attempted = meta.sources?.slice?.() || [];
    try {
      const manualCountry = manualData?.countries?.[meta.id];
      if (manualCountry && Array.isArray(manualCountry.rawTop30) && manualCountry.rawTop30.length) {
        rawTop30 = manualCountry.rawTop30.slice(0, 30).map(normalizeTopic);
        sourceUrl = manualCountry.sourceUrl || sourceUrl;
        attempted = attempted.length ? attempted : [sourceUrl].filter(Boolean);
      } else {
        const res = await getTop30FromSources(meta);
        rawTop30 = res.trends;
        sourceUrl = res.sourceUrl;
      }
      kept = rawTop30
        .map(normalizeTopic)
        .filter((t) => !shouldDrop(t, meta.id))
        .slice(0, 20) // keep a manageable number in the webpage
        .map(buildTopic);
    } catch (err) {
      error = err?.message || String(err);
    }
    byCountry.push({
      index: i + 1,
      meta,
      zh: meta.zh,
      en: meta.en,
      sourceUrl,
      rawTop30,
      kept,
      error,
      attempted,
    });
  }

  const markdown = renderMarkdown(dateStr, byCountry);
  await fs.writeFile(mdPath, markdown);
  // If the markdown is manually edited later (e.g. type judgments), rerunning the script will
  // reflect those judgments into the website because we re-apply the table values.
  applyKeptOverridesFromMarkdown(byCountry, markdown);

  const fetchedCountries = byCountry.filter((c) => Array.isArray(c.rawTop30) && c.rawTop30.length > 0);
  if (fetchedCountries.length === 0) {
    await writeStatus({
      ok: false,
      dateStr,
      message:
        "Fetch failed for all countries; site data not updated (see markdown for attempted sources).",
    });
    console.log(`Generated ${mdName} (no fetch; site not updated)`);
    return;
  }

  await writeStatus({ ok: true, dateStr, message: "OK" });
  await updateIndexHtml(dateStr);
  await updateAppJs({ dateStr, byCountry });

  console.log(`Generated ${mdName}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
