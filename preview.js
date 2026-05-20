/* global window */

function $(sel) {
  return document.querySelector(sel);
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function encode(q) {
  return encodeURIComponent(q);
}

function localized(value, lang) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value[lang] || value.zh || value.en || "";
}

function riskKey(topic) {
  return topic?.riskKey || (topic?.risk?.en === "Low" ? "low" : "watch");
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

function buildThreadsProbes(countryId, topics) {
  const seeds = THREADS_PROBE_SEEDS[countryId] || {};
  const top = (topics || []).slice(0, 6).map((t) => t.topic);
  const queries = uniq([
    ...top,
    ...((seeds.cities || []).map((c) => `${c} viral`)),
    ...((seeds.media || []).slice(0, 4)),
    ...((seeds.pop || []).slice(0, 4)),
    ...((seeds.langHints || []).slice(0, 4))
  ]).slice(0, 12);
  return queries.map((q) => ({ q, url: `https://www.threads.com/search?q=${encode(q)}` }));
}

function buildIgProxy(countryId, topics) {
  const seeds = THREADS_PROBE_SEEDS[countryId] || {};
  const kept = (topics || []).slice(0, 6).map((t) => (t.query || t.topic || "").replace(/^#/, ""));
  const tagCandidates = uniq([
    ...kept,
    ...(seeds.cities || []).map((c) => c.replace(/\s+/g, "")),
    ...(seeds.pop || []).map((p) => p.replace(/\s+/g, ""))
  ]).slice(0, 10);

  return tagCandidates.map((tag) => {
    const safe = String(tag).replace(/[^\p{L}\p{N}_]/gu, "");
    return {
      tag: `#${safe}`,
      ig: `https://www.instagram.com/explore/tags/${encodeURIComponent(safe)}/`,
      threads: `https://www.threads.com/search?q=${encode(safe)}`
    };
  });
}

const state = {
  lang: localStorage.getItem("trendReportLang") || "zh",
  reportIndex: 0,
  country: "all",
  tab: "topics",
  risk: "all",
  search: "",
  editMode: false,
  editTarget: { date: "", countryId: "", topic: "" }
};

function draftKey(date) {
  return `pvManualDraft:${date}`;
}

function loadDraft(date) {
  try {
    const raw = localStorage.getItem(draftKey(date));
    return raw ? JSON.parse(raw) : { overrides: {}, signals: {} };
  } catch {
    return { overrides: {}, signals: {} };
  }
}

function saveDraft(date, draft) {
  localStorage.setItem(draftKey(date), JSON.stringify(draft));
}

function ensurePath(obj, pathParts) {
  let cur = obj;
  for (const p of pathParts) {
    if (!cur[p] || typeof cur[p] !== "object") cur[p] = {};
    cur = cur[p];
  }
  return cur;
}

function splitLines(text) {
  return String(text || "")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}

function getReports() {
  return window.__TREND_REPORTS__ || [];
}

function currentReport() {
  const reports = getReports();
  return reports[state.reportIndex] || reports[0];
}

function getCountries(report) {
  return report?.countries || [];
}

function allTopics(report) {
  return getCountries(report).flatMap((c) => c.topics.map((t) => ({ country: c, topic: t })));
}

function matchesSearch(haystack, query) {
  const q = String(query || "").trim().toLowerCase();
  if (!q) return true;
  return String(haystack || "").toLowerCase().includes(q);
}

function applyMetrics(report) {
  const items = allTopics(report);
  const low = items.filter((i) => riskKey(i.topic) === "low").length;
  const watch = items.length - low;
  $("#pvTopicCount").textContent = String(items.length);
  $("#pvLowCount").textContent = String(low);
  $("#pvWatchCount").textContent = String(watch);
}

function renderHero(report) {
  $("#pvEyebrow").textContent = report?.date || "—";
  $("#pvTitle").textContent = localized(report?.title, state.lang) || "—";
  $("#pvSubtitle").textContent =
    state.country === "all"
      ? "六国汇总预览（选题卡片 / Threads 探针 / IG 代理）"
      : `国家：${localized(getCountries(report).find((c) => c.id === state.country)?.name, state.lang)}`;
}

function renderPriority(report) {
  const list = $("#pvPriority");
  const pri = report?.priorities?.[state.lang] || [];
  list.innerHTML = pri.map(([c, t]) => `<li><strong>${escapeHtml(c)}</strong><span>${escapeHtml(t)}</span></li>`).join("");
}

function renderRiskPool(report) {
  const wrap = $("#pvRiskPool");
  const risks = getCountries(report).flatMap((c) =>
    c.topics
      .filter((t) => riskKey(t) !== "low")
      .map((t) => ({ country: localized(c.name, state.lang), topic: t }))
  );
  wrap.innerHTML = risks
    .map((r) => `<div class="risk-item"><strong>${escapeHtml(r.topic.topic)}</strong><span>${escapeHtml(r.country)} · ${escapeHtml(localized(r.topic.risk, state.lang))}</span></div>`)
    .join("");
}

function filterCountryCountries(report) {
  const countries = getCountries(report);
  if (state.country === "all") return countries;
  return countries.filter((c) => c.id === state.country);
}

function filterTopics(topics, countryName) {
  return topics
    .filter((t) => {
      const rk = riskKey(t);
      if (state.risk === "low" && rk !== "low") return false;
      if (state.risk === "watch" && rk === "low") return false;
      const hay = `${countryName} ${t.topic} ${localized(t.type, state.lang)} ${localized(t.risk, state.lang)}`;
      return matchesSearch(hay, state.search);
    });
}

function renderTopicsTab(report) {
  const content = $("#pvContent");
  const countries = filterCountryCountries(report);
  content.innerHTML = countries
    .map((c) => {
      const cn = localized(c.name, state.lang);
      const topics = filterTopics(c.topics, cn);
      if (topics.length === 0) return "";
      return `
        <article class="country-card">
          <header class="country-head">
            <div>
              <h3>${escapeHtml(cn)}</h3>
              <p>来源：<a href="${escapeHtml(c.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(c.sourceUrl)}</a></p>
            </div>
          </header>
          <div class="topic-grid">
            ${topics
              .map((t) => {
                const rk = riskKey(t);
                const riskClass = rk === "low" ? "low" : "watch";
                const hasSignals =
                  (t.signals?.threadsTop?.length || 0) +
                    (t.signals?.threadsRecent?.length || 0) +
                    (t.signals?.tiktokTop?.length || 0) +
                    (t.signals?.tiktokRecent?.length || 0) >
                  0;
                return `
                  <article class="topic-card ${riskClass}">
                    <div class="topic-title">
                      <strong>${escapeHtml(t.topic)}</strong>
                      <span class="badge ${riskClass}">${escapeHtml(localized(t.risk, state.lang))}</span>
                    </div>
                    <p>分类：${escapeHtml(localized(t.type, state.lang))}</p>
                    <div class="links">
                      <a href="${escapeHtml(t.tiktok)}" target="_blank" rel="noreferrer">TikTok</a>
                      <a href="${escapeHtml(t.threads)}" target="_blank" rel="noreferrer">Threads</a>
                    </div>
                    <div class="links">
                      ${hasSignals ? `<span class="signal-badge">已确认</span>` : ""}
                      ${state.editMode ? `<button class="button" data-pv-edit="${escapeHtml(c.id)}::${escapeHtml(t.topic)}" type="button">编辑</button>` : ""}
                    </div>
                  </article>
                `;
              })
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");

  if (!content.innerHTML.trim()) {
    content.innerHTML = `<article class="panel compact"><p>当前筛选下没有匹配内容。</p></article>`;
  }

  if (state.editMode) {
    content.querySelectorAll("[data-pv-edit]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const [countryId, topic] = String(btn.dataset.pvEdit || "").split("::");
        openEditor({ date: report.date, countryId, topic });
      });
    });
  }
}

function renderThreadsTab(report) {
  const content = $("#pvContent");
  const countries = filterCountryCountries(report);
  content.innerHTML = countries
    .map((c) => {
      const cn = localized(c.name, state.lang);
      const probes = buildThreadsProbes(c.id, c.topics);
      return `
        <article class="country-card">
          <header class="country-head">
            <div><h3>${escapeHtml(cn)}</h3><p>探针：地理/语言/媒体/娱乐信号</p></div>
          </header>
          <div style="padding: 18px;">
            <table style="width:100%; border-collapse: collapse;">
              <thead>
                <tr>
                  <th style="text-align:left; padding:8px 0; border-bottom: 1px solid var(--line);">关键词</th>
                  <th style="text-align:left; padding:8px 0; border-bottom: 1px solid var(--line);">Threads 搜索</th>
                </tr>
              </thead>
              <tbody>
                ${probes
                  .map(
                    (p) => `
                  <tr>
                    <td style="padding:10px 0; border-bottom: 1px solid rgba(15,23,42,0.06);">${escapeHtml(p.q)}</td>
                    <td style="padding:10px 0; border-bottom: 1px solid rgba(15,23,42,0.06);"><a href="${escapeHtml(p.url)}" target="_blank" rel="noreferrer">${escapeHtml(p.url)}</a></td>
                  </tr>
                `,
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderIgTab(report) {
  const content = $("#pvContent");
  const countries = filterCountryCountries(report);
  content.innerHTML = countries
    .map((c) => {
      const cn = localized(c.name, state.lang);
      const ig = buildIgProxy(c.id, c.topics);
      return `
        <article class="country-card">
          <header class="country-head">
            <div><h3>${escapeHtml(cn)}</h3><p>Instagram 标签页代理信号（可选）</p></div>
          </header>
          <div style="padding: 18px;">
            <table style="width:100%; border-collapse: collapse;">
              <thead>
                <tr>
                  <th style="text-align:left; padding:8px 0; border-bottom: 1px solid var(--line);">IG 标签</th>
                  <th style="text-align:left; padding:8px 0; border-bottom: 1px solid var(--line);">Instagram</th>
                  <th style="text-align:left; padding:8px 0; border-bottom: 1px solid var(--line);">Threads 验证</th>
                </tr>
              </thead>
              <tbody>
                ${ig
                  .map(
                    (h) => `
                  <tr>
                    <td style="padding:10px 0; border-bottom: 1px solid rgba(15,23,42,0.06);">${escapeHtml(h.tag)}</td>
                    <td style="padding:10px 0; border-bottom: 1px solid rgba(15,23,42,0.06);"><a href="${escapeHtml(h.ig)}" target="_blank" rel="noreferrer">${escapeHtml(h.ig)}</a></td>
                    <td style="padding:10px 0; border-bottom: 1px solid rgba(15,23,42,0.06);"><a href="${escapeHtml(h.threads)}" target="_blank" rel="noreferrer">${escapeHtml(h.threads)}</a></td>
                  </tr>
                `,
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderContent(report) {
  if (state.tab === "topics") return renderTopicsTab(report);
  if (state.tab === "threads") return renderThreadsTab(report);
  return renderIgTab(report);
}

function renderAll() {
  const reports = getReports();
  if (!reports.length) {
    $("#pvContent").innerHTML = `<article class="panel compact"><p>未找到报告数据。请先打开 index.html 生成并加载 app.js。</p></article>`;
    return;
  }
  const report = currentReport();
  applyMetrics(report);
  renderHero(report);
  renderPriority(report);
  renderRiskPool(report);
  renderContent(report);
  $("#pvReportMeta").textContent = `当前报告：${report.date}`;
}

function setEditMode(enabled) {
  state.editMode = Boolean(enabled);
  const toggle = $("#pvEditToggle");
  if (toggle) toggle.classList.toggle("active", state.editMode);
  if (toggle) toggle.textContent = state.editMode ? "退出编辑" : "进入编辑";
  renderAll();
}

function openEditor({ date, countryId, topic }) {
  const dialog = $("#pvEditor");
  if (!dialog) return;
  state.editTarget = { date, countryId, topic };

  const report = currentReport();
  const country = getCountries(report).find((c) => c.id === countryId);
  $("#pvEditorTitle").textContent = topic;
  $("#pvEditorMeta").textContent = `${report.date} · ${localized(country?.name, state.lang)} (${countryId})`;

  const draft = loadDraft(date);
  const o = draft?.overrides?.[countryId]?.[topic] || {};
  const s = draft?.signals?.[countryId]?.[topic] || {};

  $("#pvEditorType").value = o.typeEn || "";
  $("#pvEditorRisk").value = o.riskEn || "";
  $("#pvEditorThreadsTop").value = (s.threadsTop || []).join("\n");
  $("#pvEditorThreadsRecent").value = (s.threadsRecent || []).join("\n");
  $("#pvEditorTikTokTop").value = (s.tiktokTop || []).join("\n");
  $("#pvEditorTikTokRecent").value = (s.tiktokRecent || []).join("\n");
  $("#pvEditorNote").value = o.reason || s.note || "";

  dialog.showModal();
}

function closeEditor() {
  $("#pvEditor")?.close();
}

function saveEditor() {
  const { date, countryId, topic } = state.editTarget;
  if (!date || !countryId || !topic) return;

  const draft = loadDraft(date);
  const overridesCountry = ensurePath(draft, ["overrides", countryId]);
  const signalsCountry = ensurePath(draft, ["signals", countryId]);

  const typeEn = $("#pvEditorType").value.trim();
  const riskEn = $("#pvEditorRisk").value.trim();
  const note = $("#pvEditorNote").value.trim();

  if (typeEn || riskEn || note) {
    overridesCountry[topic] = {
      typeEn: typeEn || "",
      riskEn: riskEn || "",
      reason: note || "",
      source: "manual"
    };
  } else {
    delete overridesCountry[topic];
  }

  const threadsTop = splitLines($("#pvEditorThreadsTop").value);
  const threadsRecent = splitLines($("#pvEditorThreadsRecent").value);
  const tiktokTop = splitLines($("#pvEditorTikTokTop").value);
  const tiktokRecent = splitLines($("#pvEditorTikTokRecent").value);

  if (threadsTop.length || threadsRecent.length || tiktokTop.length || tiktokRecent.length) {
    signalsCountry[topic] = {
      threadsTop,
      threadsRecent,
      tiktokTop,
      tiktokRecent,
      verifiedAt: new Date().toISOString(),
      verifier: "manual",
      note
    };
  } else {
    delete signalsCountry[topic];
  }

  saveDraft(date, draft);
  closeEditor();
  renderAll();
}

function clearEditorEntry() {
  const { date, countryId, topic } = state.editTarget;
  if (!date || !countryId || !topic) return;
  const draft = loadDraft(date);
  if (draft?.overrides?.[countryId]) delete draft.overrides[countryId][topic];
  if (draft?.signals?.[countryId]) delete draft.signals[countryId][topic];
  saveDraft(date, draft);
  closeEditor();
  renderAll();
}

function downloadJson(filename, obj) {
  const blob = new Blob([JSON.stringify(obj, null, 2) + "\n"], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function exportSignals() {
  const report = currentReport();
  const draft = loadDraft(report.date);
  const out = { date: report.date, note: "exported from preview.html", countries: {} };
  Object.entries(draft.signals || {}).forEach(([countryId, topics]) => {
    out.countries[countryId] = { topics: {} };
    Object.entries(topics || {}).forEach(([topic, s]) => {
      out.countries[countryId].topics[topic] = {
        categoryZh: "",
        categoryEn: "",
        threadsTop: s.threadsTop || [],
        threadsRecent: s.threadsRecent || [],
        tiktokTop: s.tiktokTop || [],
        tiktokRecent: s.tiktokRecent || [],
        verifiedAt: s.verifiedAt || "",
        verifier: s.verifier || "manual"
      };
    });
  });
  downloadJson(`content_signals_${report.date}.json`, out);
}

function exportOverrides() {
  const report = currentReport();
  const draft = loadDraft(report.date);
  const out = { date: report.date, note: "exported from preview.html", countries: {} };
  Object.entries(draft.overrides || {}).forEach(([countryId, topics]) => {
    out.countries[countryId] = { topics: {} };
    Object.entries(topics || {}).forEach(([topic, o]) => {
      out.countries[countryId].topics[topic] = {
        typeZh: "",
        typeEn: o.typeEn || "",
        riskZh: "",
        riskEn: o.riskEn || "",
        reason: o.reason || "",
        source: o.source || "manual"
      };
    });
  });
  downloadJson(`classification_overrides_${report.date}.json`, out);
}

function init() {
  const reports = getReports();
  const reportSel = $("#pvReportSelect");
  reportSel.innerHTML = reports.map((r, i) => `<option value="${i}">${r.date}</option>`).join("");
  reportSel.value = "0";
  reportSel.addEventListener("change", () => {
    state.reportIndex = Number(reportSel.value);
    state.country = "all";
    $("#pvCountrySelect").value = "all";
    renderAll();
  });

  const countrySel = $("#pvCountrySelect");
  const buildCountryOptions = () => {
    const report = currentReport();
    const options = [
      `<option value="all">全部</option>`,
      ...getCountries(report).map((c) => `<option value="${c.id}">${escapeHtml(localized(c.name, state.lang))}</option>`)
    ];
    countrySel.innerHTML = options.join("");
    countrySel.value = state.country;
  };
  buildCountryOptions();
  countrySel.addEventListener("change", () => {
    state.country = countrySel.value;
    renderAll();
  });

  document.querySelectorAll("[data-pv-tab]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.tab = btn.dataset.pvTab;
      document.querySelectorAll("[data-pv-tab]").forEach((b) => b.classList.toggle("active", b === btn));
      renderAll();
    });
  });

  document.querySelectorAll("[data-pv-risk]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.risk = btn.dataset.pvRisk;
      document.querySelectorAll("[data-pv-risk]").forEach((b) => b.classList.toggle("active", b === btn));
      renderAll();
    });
  });

  $("#pvSearch").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderAll();
  });

  $("#pvEditToggle")?.addEventListener("click", () => setEditMode(!state.editMode));
  $("#pvExportSignals")?.addEventListener("click", () => exportSignals());
  $("#pvExportOverrides")?.addEventListener("click", () => exportOverrides());

  $("#pvEditorSave")?.addEventListener("click", (e) => {
    e.preventDefault();
    saveEditor();
  });
  $("#pvEditorClear")?.addEventListener("click", () => clearEditorEntry());

  // Keep country options in sync with language switch from main app (if any).
  window.addEventListener("storage", (e) => {
    if (e.key !== "trendReportLang") return;
    state.lang = localStorage.getItem("trendReportLang") || "zh";
    buildCountryOptions();
    renderAll();
  });

  renderAll();
}

init();
