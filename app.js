const ui = {
  zh: {
    appTitle: "各国热点话题日报",
    copySummary: "复制分享摘要",
    rawReport: "查看原始报告",
    reportDate: "报告日期",
    countryFilter: "国家筛选",
    methodTitle: "今日口径",
    methodText: "每国读取前 30 条 X 趋势，过滤泛词和低转化词，保留更可能在 TikTok/Threads 有内容响应的选题，并标记政治、灾害、争议等风险。",
    heroTitle: "六国热点选题池",
    heroText: "覆盖印尼、泰国、菲律宾、沙特、土耳其、越南。泰国、菲律宾、印尼的娱乐和品牌活动转化潜力最高；土耳其风险话题密度较高；越南需要本地语言关键词补强。",
    keptTopics: "保留选题",
    riskWatch: "风险观察",
    targetCountries: "目标国家",
    all: "全部",
    lowRisk: "低风险",
    search: "搜索",
    searchPlaceholder: "话题、国家、类型",
    reportSelect: "选择日期",
    reportSelectedMeta: "当前：{date}（{title}）",
    typeLabel: "分类",
    priorityTitle: "优先深挖",
    riskPoolTitle: "风险观察池",
    shareNoteTitle: "分享说明",
    shareNote: "分享网页时，建议附上原始报告文件。TikTok/Threads 的逐条热门视频仍需要登录态确认。",
    source: "来源",
    topics: "个选题",
    noMatches: "当前筛选下没有匹配选题。",
    copied: "已复制摘要",
    copyFailed: "复制失败，请手动选择摘要",
    reportPage: "报告网页：index.html",
    summaryTitle: "2026-06-24 六国热点话题日报",
    summaryPriority: "优先深挖：泰国由 LV 男装秀、LingOrm 系列合作、生日应援和剧集更新主导；菲律宾集中在 Jungkook、PRADAxENHYPEN、YMFSPilotWeek 与 BINI；印尼是香水品牌、K-pop 发布和球星词；沙特基本是足球赛况加少量品牌词；土耳其可用词集中在 BTS 饭圈、Erzurumspor 与 Canbay；越南以 LingOrm、剧集 EP、Prada 联动和球星词最稳。",
    summaryRisk: "风险观察：印尼前排混入 BUMN/志愿者政治口号与投机币圈词；沙特出现社会求助标签与体育部长公共议题；土耳其榜单以政党、教师诉求和议会司法口号为主；越南夹杂按摩广告与交易所投机词。"
  },
  en: {
    appTitle: "Global Trend Brief",
    copySummary: "Copy Summary",
    rawReport: "Raw Report",
    reportDate: "Report Date",
    countryFilter: "Country Filter",
    methodTitle: "Method",
    methodText: "The workflow scans the top 30 X trends for each country, removes broad or low-signal terms, keeps topics more likely to have TikTok/Threads responses, and flags political, disaster, or controversial risks.",
    heroTitle: "Six-Country Topic Pool",
    heroText: "Coverage includes Indonesia, Thailand, the Philippines, Saudi Arabia, Turkey, and Vietnam. Thailand, the Philippines, and Indonesia have the strongest entertainment and brand-event potential; Turkey has denser risk topics; Vietnam needs local-language keyword enrichment.",
    keptTopics: "Kept Topics",
    riskWatch: "Risk Watch",
    targetCountries: "Countries",
    all: "All",
    lowRisk: "Low Risk",
    search: "Search",
    searchPlaceholder: "Topic, country, or category",
    reportSelect: "Select Date",
    reportSelectedMeta: "Now: {date} ({title})",
    typeLabel: "Category",
    priorityTitle: "Priority Deep Dives",
    riskPoolTitle: "Risk Watch Pool",
    shareNoteTitle: "Sharing Note",
    shareNote: "When sharing the page, include the raw report if needed. Individual TikTok/Threads hot videos still need confirmation in a logged-in session.",
    source: "Source",
    topics: "topics",
    noMatches: "No matching topics under the current filters.",
    copied: "Summary copied",
    copyFailed: "Copy failed; please select the summary manually",
    reportPage: "Report page: index.html",
    summaryTitle: "2026-06-24 Six-Country Trend Brief",
    summaryPriority: "Priority: Thailand is led by LV menswear, LingOrm tie-ins, birthday fandom pushes, and episode drops; the Philippines clusters around Jungkook, PRADAxENHYPEN, YMFSPilotWeek, and BINI; Indonesia is fragrance, K-pop releases, and football names; Saudi is mostly football with a light brand layer; Turkey narrows to BTS fandom, Erzurumspor, and Canbay; Vietnam is strongest on LingOrm, episode tags, Prada tie-ins, and football names.",
    summaryRisk: "Risk watch: Indonesia mixes BUMN/volunteer political slogans with crypto-shill language; Saudi surfaces a civic-help hashtag and ministerial wording; Turkey is dominated by party, teacher-demand, and parliament/legal slogans; Vietnam includes massage spam and exchange-speculation terms."
  }
};

const reports = [
  {
    date: "2026-06-24",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#MrKillSeries", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MrKillSeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesEP8", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP8", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JunePaintedBySUNOO", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JunePaintedBySUNOO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LVMenSS27xFourth", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LVMenSS27xFourth", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOURTH SHINES AT LVSS27 SHOW", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "FOURTH SHINES AT LVSS27 SHOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#dewtee", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "dewtee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Taufik Hidayat", "体育/赛事", "Sports / Event", "低", "Low", "Taufik Hidayat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Messi", "体育/赛事", "Sports / Event", "低", "Low", "Messi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ronaldo", "体育/赛事", "Sports / Event", "低", "Low", "Ronaldo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NFC Pay", "体育/赛事", "Sports / Event", "低", "Low", "NFC Pay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Madueke", "体育/赛事", "Sports / Event", "低", "Low", "Madueke", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JSCEAN WITH TOY STORY5", "品牌活动/消费", "Brand / Consumer", "低", "Low", "JSCEAN WITH TOY STORY5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kane", "体育/赛事", "Sports / Event", "低", "Low", "Kane", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tuchel", "体育/赛事", "Sports / Event", "低", "Low", "Tuchel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HBD JJRCP 26th LAEWJA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HBD JJRCP 26th LAEWJA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nuno Mendes", "体育/赛事", "Sports / Event", "低", "Low", "Nuno Mendes", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAEHYUN EMBODIES PRADA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "JAEHYUN EMBODIES PRADA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BND ADIOS MV OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BND ADIOS MV OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rafael Leão", "体育/赛事", "Sports / Event", "低", "Low", "Rafael Leão", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#BamBamxLVMenSS27", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BamBamxLVMenSS27", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesEP8", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP8", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#vava", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "vava", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วาวา", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "วาวา", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TeeTeePorOfficialLightStick", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TeeTeePorOfficialLightStick", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BEST WISHES TO WAR 32nd", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BEST WISHES TO WAR 32nd", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY24", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGFA THE LEGACY24", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JSCEAN WITH TOY STORY5", "品牌活动/消费", "Brand / Consumer", "低", "Low", "JSCEAN WITH TOY STORY5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mille Clear Skin TTP", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Mille Clear Skin TTP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MR FANBOY Q18", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MR FANBOY Q18", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PRAEW MAGAZINE X LINGORM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PRAEW MAGAZINE X LINGORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRAB THAI RARES LINGORM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GRAB THAI RARES LINGORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHERMCHEY ON FIRE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CHERMCHEY ON FIRE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Your Third Q15", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Your Third Q15", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM PRESENTER THE TOUCH", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LINGORM PRESENTER THE TOUCH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNSET IN WINTER EP10", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUNSET IN WINTER EP10", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HBD JJRCP 26th LAEWJA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HBD JJRCP 26th LAEWJA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Real Shine is ZeePruk", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Real Shine is ZeePruk", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("The Grim Lover Q4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "The Grim Lover Q4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE23", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHINING PRIDE CHARLOTTE23", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#JunePaintedBySUNOO", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JunePaintedBySUNOO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#엔하이픈_선우", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "엔하이픈_선우", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SEATED FOR DUSTBIA", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SEATED FOR DUSTBIA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ANGELs 1STDAY AT BRIGHTON", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ANGELs 1STDAY AT BRIGHTON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHOWTIME WITH GELEX", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SHOWTIME WITH GELEX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ANGUEL MULING PAGKIKITA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ANGUEL MULING PAGKIKITA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RHENSEPH AT LUIS LISTEN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RHENSEPH AT LUIS LISTEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#YMFSPilotWeek", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "YMFSPilotWeek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MEET MIGUEL MIRAFLOR", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MEET MIGUEL MIRAFLOR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ShowtimeLarongWitty", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ShowtimeLarongWitty", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DearAzriel", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DearAzriel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MIGUEL VS EXPECTATIONS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MIGUEL VS EXPECTATIONS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KOLETTE JOINS LEGENDS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "KOLETTE JOINS LEGENDS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HBD JJRCP 26th LAEWJA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HBD JJRCP 26th LAEWJA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GELIX CHEMISTRY UNFOLDS", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GELIX CHEMISTRY UNFOLDS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA LAST RESERVATION", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GIOLUNA LAST RESERVATION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHARLOTTE SUPERGIRL GALA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CHARLOTTE SUPERGIRL GALA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NALLY NA MV RELEASE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NALLY NA MV RELEASE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("D-1 DOYOUNG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "D-1 DOYOUNG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Giannis", "体育/赛事", "Sports / Event", "低", "Low", "Giannis", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#كلام_من_القلب", "生活方式/社区", "Lifestyle / Community", "低", "Low", "كلام_من_القلب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Messi39", "体育/赛事", "Sports / Event", "低", "Low", "Messi39", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("توخيل", "体育/赛事", "Sports / Event", "低", "Low", "توخيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("رونالدو", "体育/赛事", "Sports / Event", "低", "Low", "رونالدو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#انجلترا_غانا", "体育/赛事", "Sports / Event", "低", "Low", "انجلترا_غانا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#السعوديه_الراس_الاخضر", "体育/赛事", "Sports / Event", "低", "Low", "السعوديه_الراس_الاخضر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الوتر_جنه_القلوب", "生活方式/社区", "Lifestyle / Community", "低", "Low", "الوتر_جنه_القلوب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("هاري", "体育/赛事", "Sports / Event", "低", "Low", "هاري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البرتغال", "体育/赛事", "Sports / Event", "低", "Low", "البرتغال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("لوكا مودريتش", "体育/赛事", "Sports / Event", "低", "Low", "لوكا مودريتش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الدون", "体育/赛事", "Sports / Event", "低", "Low", "الدون", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("زلاتان", "体育/赛事", "Sports / Event", "低", "Low", "زلاتان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("صالح الاعمال", "生活方式/社区", "Lifestyle / Community", "低", "Low", "صالح الاعمال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايفان توني", "体育/赛事", "Sports / Event", "低", "Low", "ايفان توني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("توماس بارتي", "体育/赛事", "Sports / Event", "低", "Low", "توماس بارتي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("برونو", "体育/赛事", "Sports / Event", "低", "Low", "برونو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الانتر", "体育/赛事", "Sports / Event", "低", "Low", "الانتر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فضل صيام", "生活方式/社区", "Lifestyle / Community", "低", "Low", "فضل صيام", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("جبل عمر", "旅行/本地活动", "Travel / Local Event", "低", "Low", "جبل عمر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cristiano Ronaldo", "体育/赛事", "Sports / Event", "低", "Low", "Cristiano Ronaldo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("#SEVEN_IN_AETERNUM", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SEVEN_IN_AETERNUM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#7WALKING_AS_ONE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "7WALKING_AS_ONE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#trtsporstüdyosu", "体育/赛事", "Sports / Event", "低", "Low", "trtsporstüdyosu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aleyna Kalaycıoğlu", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Aleyna Kalaycıoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Erzurumspor", "体育/赛事", "Sports / Event", "低", "Low", "Erzurumspor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fatih Sultan Mehmet Köprüsü", "旅行/本地活动", "Travel / Local Event", "低", "Low", "Fatih Sultan Mehmet Köprüsü", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Canbay", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Canbay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Meryem", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Meryem", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İbrahim Hacıosmanoğlu", "体育/赛事", "Sports / Event", "低", "Low", "İbrahim Hacıosmanoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AVM'de", "生活方式/社区", "Lifestyle / Community", "低", "Low", "AVM'de", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#JAMESxSaintLaurent", "品牌活动/消费", "Brand / Consumer", "低", "Low", "JAMESxSaintLaurent", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAMES ASCENDS IN YSL GAZE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "JAMES ASCENDS IN YSL GAZE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRAB THAI RARES LINGORM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GRAB THAI RARES LINGORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LingOrmTheTouchWellnessTea", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LingOrmTheTouchWellnessTea", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM PRESENTER THE TOUCH", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LINGORM PRESENTER THE TOUCH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesEP8", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP8", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNOO OUR BRIGHTEST HUE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SUNOO OUR BRIGHTEST HUE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JunePaintedBySUNOO", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JunePaintedBySUNOO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Messi", "体育/赛事", "Sports / Event", "低", "Low", "Messi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHARLOTTE SUPERGIRL GALA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CHARLOTTE SUPERGIRL GALA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DearMySelfxLingOrm", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "DearMySelfxLingOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PRAEW MAGAZINE X LINGORM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PRAEW MAGAZINE X LINGORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Portugal", "体育/赛事", "Sports / Event", "低", "Low", "Portugal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Haaland", "体育/赛事", "Sports / Event", "低", "Low", "Haaland", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB EIGHTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB EIGHTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Giannis", "体育/赛事", "Sports / Event", "低", "Low", "Giannis", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  {
    date: "2026-06-23",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#NCOParfumnyaGenZ", "品牌活动/消费", "Brand / Consumer", "低", "Low", "NCOParfumnyaGenZ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Messi", "体育/赛事", "Sports / Event", "低", "Low", "Messi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mbappe", "体育/赛事", "Sports / Event", "低", "Low", "Mbappe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LemonTangOutNow", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LemonTangOutNow", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#레몬탱탱탱_Heart2Heart", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "레몬탱탱탱_Heart2Heart", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RIDE_OR_DIE_OutNow", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "RIDE_OR_DIE_OutNow", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAVE A SAFE FLIGHT BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HAVE A SAFE FLIGHT BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dembele", "体育/赛事", "Sports / Event", "低", "Low", "Dembele", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NALLY NA MV RELEASE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NALLY NA MV RELEASE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jungkook", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Jungkook", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("6th LI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "6th LI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ariel Tatum", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Ariel Tatum", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ronaldo", "体育/赛事", "Sports / Event", "低", "Low", "Ronaldo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Álvarez", "体育/赛事", "Sports / Event", "低", "Low", "Álvarez", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Shakira", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Shakira", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#vava", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "vava", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วาวา", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "วาวา", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LVMenSS27", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LVMenSS27", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY23", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGFA THE LEGACY23", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#32ndHappyWARday", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "32ndHappyWARday", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE23", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHINING PRIDE CHARLOTTE23", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LouisVuittonMenSS27", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LouisVuittonMenSS27", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BEST WISHES TO WAR 32nd", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BEST WISHES TO WAR 32nd", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB EIGHTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB EIGHTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NANON AT FIFA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NANON AT FIFA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PRAEW MAGAZINE X LINGORM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PRAEW MAGAZINE X LINGORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUTDAN SOLO TASTY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NUTDAN SOLO TASTY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEE 2M ON IG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEETEE 2M ON IG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM PRESENTER THE TOUCH", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LINGORM PRESENTER THE TOUCH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TTP FRESH UP PARTY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "TTP FRESH UP PARTY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOURTH PARIS MOMENTS WITH LV", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FOURTH PARIS MOMENTS WITH LV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Your Third Q15", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Your Third Q15", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("20th BD AA BUS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "20th BD AA BUS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNSET IN WINTER EP9", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUNSET IN WINTER EP9", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKY WONGRAVEE X FINO", "品牌活动/消费", "Brand / Consumer", "低", "Low", "SKY WONGRAVEE X FINO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("Jungkook", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Jungkook", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HYUNHAYO", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HYUNHAYO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NALLY NA MV RELEASE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NALLY NA MV RELEASE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PRADAxENHYPEN", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PRADAxENHYPEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RIDE_OR_DIE_OutNow", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "RIDE_OR_DIE_OutNow", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#YMFSPilotWeek", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "YMFSPilotWeek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ANGELs STORY BEGINS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ANGELs STORY BEGINS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EVAN_1stDigitalSingle", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "EVAN_1stDigitalSingle", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENTER THE ANGUEL ERA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENTER THE ANGUEL ERA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MEET MIGUEL MIRAFLOR", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MEET MIGUEL MIRAFLOR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINI SIGNALS MOA UNLOCKED", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BINI SIGNALS MOA UNLOCKED", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ITS BRENT MONALOVER TIME", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ITS BRENT MONALOVER TIME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CAPFORD CAMPUS MEET UP", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CAPFORD CAMPUS MEET UP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Seventeen", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Seventeen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNOO SPARKS KINDNESS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SUNOO SPARKS KINDNESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("D-2 DOYOUNG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "D-2 DOYOUNG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB EIGHTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB EIGHTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RABGEL F1ST RISEAds", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RABGEL F1ST RISEAds", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Messi", "体育/赛事", "Sports / Event", "低", "Low", "Messi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("6th LI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "6th LI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("العراق", "体育/赛事", "Sports / Event", "低", "Low", "العراق", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("النرويج", "体育/赛事", "Sports / Event", "低", "Low", "النرويج", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الحارس النرويجي", "体育/赛事", "Sports / Event", "低", "Low", "الحارس النرويجي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("صيام الاثنين", "生活方式/社区", "Lifestyle / Community", "低", "Low", "صيام الاثنين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الارجنتين_النمسا", "体育/赛事", "Sports / Event", "低", "Low", "الارجنتين_النمسا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("زيد تحسين", "体育/赛事", "Sports / Event", "低", "Low", "زيد تحسين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("هدفه", "体育/赛事", "Sports / Event", "低", "Low", "هدفه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("المباراه القادمه", "体育/赛事", "Sports / Event", "低", "Low", "المباراه القادمه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الهدف الثاني", "体育/赛事", "Sports / Event", "低", "Low", "الهدف الثاني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("وليد الركراكي", "体育/赛事", "Sports / Event", "低", "Low", "وليد الركراكي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الهدف التاريخي", "体育/赛事", "Sports / Event", "低", "Low", "الهدف التاريخي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس اسيا", "体育/赛事", "Sports / Event", "低", "Low", "كاس اسيا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ميسي", "体育/赛事", "Sports / Event", "低", "Low", "ميسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بروين", "体育/赛事", "Sports / Event", "低", "Low", "بروين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("احمد باسل", "体育/赛事", "Sports / Event", "低", "Low", "احمد باسل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#urpay_يضبطك", "品牌活动/消费", "Brand / Consumer", "低", "Low", "urpay_يضبطك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الجبل الاخضر", "旅行/本地活动", "Travel / Local Event", "低", "Low", "الجبل الاخضر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كره قدم", "体育/赛事", "Sports / Event", "低", "Low", "كره قدم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العرب", "体育/赛事", "Sports / Event", "低", "Low", "كاس العرب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تيري", "体育/赛事", "Sports / Event", "低", "Low", "تيري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("#SEVEN_IN_AETERNUM", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SEVEN_IN_AETERNUM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#7WALKING_AS_ONE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "7WALKING_AS_ONE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#trtsporstüdyosu", "体育/赛事", "Sports / Event", "低", "Low", "trtsporstüdyosu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aleyna Kalaycıoğlu", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Aleyna Kalaycıoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Erzurumspor", "体育/赛事", "Sports / Event", "低", "Low", "Erzurumspor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fatih Sultan Mehmet Köprüsü", "旅行/本地活动", "Travel / Local Event", "低", "Low", "Fatih Sultan Mehmet Köprüsü", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Canbay", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Canbay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Meryem", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Meryem", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İbrahim Hacıosmanoğlu", "体育/赛事", "Sports / Event", "低", "Low", "İbrahim Hacıosmanoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#LingOrmTheTouchWellnessTea", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LingOrmTheTouchWellnessTea", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Messi", "体育/赛事", "Sports / Event", "低", "Low", "Messi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DearMySelfxLingOrm", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "DearMySelfxLingOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB EIGHTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB EIGHTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PRAEW MAGAZINE X LINGORM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PRAEW MAGAZINE X LINGORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("England", "体育/赛事", "Sports / Event", "低", "Low", "England", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EnemiesWithBenefitsEP8", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EnemiesWithBenefitsEP8", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วาดฝันวันวิวาห์EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "วาดฝันวันวิวาห์EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM ILF EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LINGORM ILF EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM 1ST FM MADRID", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NAMTANFILM 1ST FM MADRID", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA ELEGANT IN SCENT", "品牌活动/消费", "Brand / Consumer", "低", "Low", "APASRA ELEGANT IN SCENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Argentina", "体育/赛事", "Sports / Event", "低", "Low", "Argentina", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("POND PRADA SS27 IN MILAN", "品牌活动/消费", "Brand / Consumer", "低", "Low", "POND PRADA SS27 IN MILAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Austria", "体育/赛事", "Sports / Event", "低", "Low", "Austria", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  {
    date: "2026-06-22",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#PradaSS27", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PradaSS27", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TicketToHeavenEP4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BARTHTANRAK HEAVENLY SECRET", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BARTHTANRAK HEAVENLY SECRET", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST MADRID VIBES", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "WILLIAMEST MADRID VIBES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAN AT TODS MFW", "品牌活动/消费", "Brand / Consumer", "低", "Low", "HAN AT TODS MFW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JJ BIRTHDAY MERIT 2026", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JJ BIRTHDAY MERIT 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM 1ST FM MADRID", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NAMTANFILM 1ST FM MADRID", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("lamine yamal", "体育/赛事", "Sports / Event", "低", "Low", "lamine yamal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BOY MEETS GIRL OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BOY MEETS GIRL OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Muslera", "体育/赛事", "Sports / Event", "低", "Low", "Muslera", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB EIGHTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB EIGHTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TOGETHER IN JS DREAMS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TOGETHER IN JS DREAMS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOURTH FOH LV OFF TO PARIS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FOURTH FOH LV OFF TO PARIS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Darwin Núñez", "体育/赛事", "Sports / Event", "低", "Low", "Darwin Núñez", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Oyarzabal", "体育/赛事", "Sports / Event", "低", "Low", "Oyarzabal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA RETURNS OUT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA RETURNS OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NANI WITH MYBACIN", "品牌活动/消费", "Brand / Consumer", "低", "Low", "NANI WITH MYBACIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#WatchingULPilotwithTMK", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WatchingULPilotwithTMK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ANWARBLUE IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ANWARBLUE IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PradaSS27", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PradaSS27", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#THETITANSCONCERT_D2", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "THETITANSCONCERT_D2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EnemiesWithBenefitsEP8", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EnemiesWithBenefitsEP8", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LOVEx3จะมาแล้วนะ", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVEx3จะมาแล้วนะ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB EIGHTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB EIGHTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY22", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGFA THE LEGACY22", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEE 2M ON IG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEETEE 2M ON IG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE22", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHINING PRIDE CHARLOTTE22", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MAXKYBAS DESTINY PINKLAO", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MAXKYBAS DESTINY PINKLAO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE AIR CONFESSED HEART", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "THE AIR CONFESSED HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOURTH FOH LV OFF TO PARIS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FOURTH FOH LV OFF TO PARIS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JNNRRS 1M KING OF TIKTOK", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JNNRRS 1M KING OF TIKTOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TWO YEARS OF DUJUPSORN", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TWO YEARS OF DUJUPSORN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Patrick As ZhengYan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Patrick As ZhengYan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JJ BIRTHDAY MERIT 2026", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JJ BIRTHDAY MERIT 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("20th BD AA BUS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "20th BD AA BUS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KHEMJIRA CHIANGMAI TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "KHEMJIRA CHIANGMAI TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NANI WITH MYBACIN", "品牌活动/消费", "Brand / Consumer", "低", "Low", "NANI WITH MYBACIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#BINI_SIGNALS_WORLDTOUR_2026", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BINI_SIGNALS_WORLDTOUR_2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PRADAxENHYPEN", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PRADAxENHYPEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EnemiesWithBenefitsEP8", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EnemiesWithBenefitsEP8", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Wonwoo", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Wonwoo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ANWARBLUE IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ANWARBLUE IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WatchingULPilotwithTMK", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WatchingULPilotwithTMK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB EIGHTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB EIGHTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Seventeen", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Seventeen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE AIR CONFESSED HEART", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "THE AIR CONFESSED HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Seungkwan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Seungkwan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CAPFORD CAMPUS MEET UP", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CAPFORD CAMPUS MEET UP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YMFS ANGUEL BUKAS NA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "YMFS ANGUEL BUKAS NA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RABGEL DuawTa DAVAO", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RABGEL DuawTa DAVAO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GELEXplosive KILIG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GELEXplosive KILIG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM 1ST FM MADRID", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NAMTANFILM 1ST FM MADRID", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Halsey", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Halsey", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("D-2 DOYOUNG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "D-2 DOYOUNG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA ELEGANT IN SCENT", "品牌活动/消费", "Brand / Consumer", "低", "Low", "APASRA ELEGANT IN SCENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BACK TO PAMUS WITH WILBERT", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BACK TO PAMUS WITH WILBERT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRAND CORONATION WITH WILBERT", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GRAND CORONATION WITH WILBERT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("الراس الاخضر", "体育/赛事", "Sports / Event", "低", "Low", "الراس الاخضر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البليهي", "体育/赛事", "Sports / Event", "低", "Low", "البليهي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HouseOfTheDragon", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "HouseOfTheDragon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HOTD", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "HOTD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#مصر_نيوزيلندا", "体育/赛事", "Sports / Event", "低", "Low", "مصر_نيوزيلندا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاب فيردي", "体育/赛事", "Sports / Event", "低", "Low", "كاب فيردي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("حارس ايران", "体育/赛事", "Sports / Event", "低", "Low", "حارس ايران", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عيشوا_المونديال", "体育/赛事", "Sports / Event", "低", "Low", "عيشوا_المونديال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس اسيا", "体育/赛事", "Sports / Event", "低", "Low", "كاس اسيا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ياسر المسحل", "体育/赛事", "Sports / Event", "低", "Low", "ياسر المسحل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بروين", "体育/赛事", "Sports / Event", "低", "Low", "بروين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كره قدم", "体育/赛事", "Sports / Event", "低", "Low", "كره قدم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("#FileninSultanları", "体育/赛事", "Sports / Event", "低", "Low", "FileninSultanları", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Teoman", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Teoman", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vargas", "体育/赛事", "Sports / Event", "低", "Low", "Vargas", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Lukaku", "体育/赛事", "Sports / Event", "低", "Low", "Lukaku", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Leyla", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Leyla", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Serkan Reçber", "体育/赛事", "Sports / Event", "低", "Low", "Serkan Reçber", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Şebnem", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Şebnem", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("lamine yamal", "体育/赛事", "Sports / Event", "低", "Low", "lamine yamal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Oyarzabal", "体育/赛事", "Sports / Event", "低", "Low", "Oyarzabal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ofsayt", "体育/赛事", "Sports / Event", "低", "Low", "Ofsayt", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Santarelli", "体育/赛事", "Sports / Event", "低", "Low", "Santarelli", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#วาดฝันวันวิวาห์EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "วาดฝันวันวิวาห์EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CORTISInJakarta", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CORTISInJakarta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bvlgari", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Bvlgari", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("REBECCA X KISF2026", "品牌活动/消费", "Brand / Consumer", "低", "Low", "REBECCA X KISF2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BeckyxKISF2026", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BeckyxKISF2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SEONGHYEONatAlloFest", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "SEONGHYEONatAlloFest", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YOKO IN HER MCM ERA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "YOKO IN HER MCM ERA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA RETURNS OUT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA RETURNS OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARTIN HYPE ALLO FESTIVAL UP", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "MARTIN HYPE ALLO FESTIVAL UP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAMES TAKES OVER ALLOFEST", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JAMES TAKES OVER ALLOFEST", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA NEXT CHAPTER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "APASRA NEXT CHAPTER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tết Đoan Ngọ", "生活方式/社区", "Lifestyle / Community", "低", "Low", "Tết Đoan Ngọ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JJUAKARTA ALLOFEST ON FIRE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JJUAKARTA ALLOFEST ON FIRE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DISCOVER CHARLOTTE X SINEHA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DISCOVER CHARLOTTE X SINEHA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  

  {
    date: "2026-06-20",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#GopayPromoPointCoffee", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GopayPromoPointCoffee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DMDLINEUP2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMDLINEUP2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PradaSS27", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PradaSS27", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM ILF EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LINGORM ILF EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ronaldo", "体育/赛事", "Sports / Event", "低", "Low", "Ronaldo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST FRANKFURT D1", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "WILLIAMEST FRANKFURT D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LEMON TANG MV TEASER", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LEMON TANG MV TEASER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Saibari", "体育/赛事", "Sports / Event", "低", "Low", "Saibari", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Caramel Macchiato", "生活方式/美食", "Lifestyle / Food", "低", "Low", "Caramel Macchiato", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alex Freeman", "体育/赛事", "Sports / Event", "低", "Low", "Alex Freeman", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD LINEUP WITH NETJJ 2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMD LINEUP WITH NETJJ 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DEWTEE STILL SHINING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "DEWTEE STILL SHINING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEEPOR NEW JOURNEY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEETEEPOR NEW JOURNEY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#วาดฝันวันวิวาห์EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "วาดฝันวันวิวาห์EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM ILF EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LINGORM ILF EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DMDLINEUP2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMDLINEUP2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ตี๋ตี๋ป๋อไลน์อัพ2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ตี๋ตี๋ป๋อไลน์อัพ2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#สนิทแค่เพื่อนTheSeries", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "สนิทแค่เพื่อนTheSeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NCTJNJM_FANMEETING_TOUR", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NCTJNJM_FANMEETING_TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEEPOR NEW JOURNEY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEETEEPOR NEW JOURNEY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TLEFIRSTONE THE NEXT RISE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TLEFIRSTONE THE NEXT RISE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KENGNAMPING TO THE NEXT PAGE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "KENGNAMPING TO THE NEXT PAGE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD THE RISE CONTINUES", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMD THE RISE CONTINUES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FORCEBOOK WITH DEMOSANA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "FORCEBOOK WITH DEMOSANA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("UNKNOWN LOVER PILOT", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "UNKNOWN LOVER PILOT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ZEENUNEW ERA ASCENDS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ZEENUNEW ERA ASCENDS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THOMASKONG NEW CHAPTER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "THOMASKONG NEW CHAPTER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NH AT DESTINY PINKLAO", "品牌活动/消费", "Brand / Consumer", "低", "Low", "NH AT DESTINY PINKLAO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY19", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGFA THE LEGACY19", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SANTA RICE CRACKER LIVE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "SANTA RICE CRACKER LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Orm Kornnaphat", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Orm Kornnaphat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE19", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHINING PRIDE CHARLOTTE19", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TTP KONVY MIDYEAR SALE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "TTP KONVY MIDYEAR SALE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD LINEUP WITH NETJJ 2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMD LINEUP WITH NETJJ 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("3Y3M MEENBABE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "3Y3M MEENBABE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TUTORYIM LINE UP 2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TUTORYIM LINE UP 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AUAUSAVE RISE BRIGHTER 2026", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "AUAUSAVE RISE BRIGHTER 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Silom Distance Lovers", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Silom Distance Lovers", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BOATOAT KNOT BLESSING CEREMONY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BOATOAT KNOT BLESSING CEREMONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HONG AT LANCOME EVEANDBOY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "HONG AT LANCOME EVEANDBOY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Runch and Neen", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Runch and Neen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#วาดฝันวันวิวาห์EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "วาดฝันวันวิวาห์EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM ILF EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LINGORM ILF EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARTSARI FATED BY UNIVERSE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MARTSARI FATED BY UNIVERSE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DMDLINEUP2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMDLINEUP2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#justindahon", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "justindahon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JADEWARD SOULM88S FOREVER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JADEWARD SOULM88S FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA LOVE FOR A LIFETIME", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GIOLUNA LOVE FOR A LIFETIME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#THE_FIRST_SPARK_IN_MANILA", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "THE_FIRST_SPARK_IN_MANILA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alex Eala", "体育/赛事", "Sports / Event", "低", "Low", "Alex Eala", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BINI_Gwen", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BINI_Gwen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RHENSEPH BBQ FOREVER", "生活方式/美食", "Lifestyle / Food", "低", "Low", "RHENSEPH BBQ FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Svitolina", "体育/赛事", "Sports / Event", "低", "Low", "Svitolina", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORM FRIEND OF BVLGARI", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ORM FRIEND OF BVLGARI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("XIAOMI DAY WITH DUSTBIA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "XIAOMI DAY WITH DUSTBIA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BRENT MANALOVER SA SHOWTIME", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BRENT MANALOVER SA SHOWTIME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEEPOR NEW JOURNEY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEETEEPOR NEW JOURNEY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FORGOTTEN ISLAND", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "FORGOTTEN ISLAND", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DRALYS FINALLY 2GETHER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "DRALYS FINALLY 2GETHER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EVERY ANGUEL LEADS TO CAPEATH", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "EVERY ANGUEL LEADS TO CAPEATH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MIGUEL IS CAPTAIN SERENADE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MIGUEL IS CAPTAIN SERENADE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD THE RISE CONTINUES", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMD THE RISE CONTINUES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JM SAILS WITH FYANG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JM SAILS WITH FYANG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD LINEUP WITH NETJJ 2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMD LINEUP WITH NETJJ 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AEZEKE IN LOVE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "AEZEKE IN LOVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#المغرب_اسكتلندا", "体育/赛事", "Sports / Event", "低", "Low", "المغرب اسكتلندا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#شجع_مع_فيحا", "体育/赛事", "Sports / Event", "低", "Low", "شجع مع فيحا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اسماعيل صيباري", "体育/赛事", "Sports / Event", "低", "Low", "اسماعيل صيباري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#اصاله_في_جده", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "اصاله في جده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البايرن", "体育/赛事", "Sports / Event", "低", "Low", "البايرن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عيسي ديوب", "体育/赛事", "Sports / Event", "低", "Low", "عيسي ديوب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ابراهيم دياز", "体育/赛事", "Sports / Event", "低", "Low", "ابراهيم دياز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("منتخب امريكا", "体育/赛事", "Sports / Event", "低", "Low", "منتخب امريكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فوز المغرب", "体育/赛事", "Sports / Event", "低", "Low", "فوز المغرب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#يوم_الاب", "生活方式/社区", "Lifestyle / Community", "低", "Low", "يوم الاب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ديما بونو", "体育/赛事", "Sports / Event", "低", "Low", "ديما بونو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("غوارديولا", "体育/赛事", "Sports / Event", "低", "Low", "غوارديولا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Scotland", "体育/赛事", "Sports / Event", "低", "Low", "Scotland", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("نيفيز", "体育/赛事", "Sports / Event", "低", "Low", "نيفيز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بورتو", "体育/赛事", "Sports / Event", "低", "Low", "بورتو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Harry Kane", "体育/赛事", "Sports / Event", "低", "Low", "Harry Kane", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İngiltere", "体育/赛事", "Sports / Event", "低", "Low", "İngiltere", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ronaldo", "体育/赛事", "Sports / Event", "低", "Low", "Ronaldo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Livakovic", "体育/赛事", "Sports / Event", "低", "Low", "Livakovic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Survivor2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Survivor2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Portekiz", "体育/赛事", "Sports / Event", "低", "Low", "Portekiz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("rashford", "体育/赛事", "Sports / Event", "低", "Low", "rashford", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tuchel", "体育/赛事", "Sports / Event", "低", "Low", "Tuchel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Modric", "体育/赛事", "Sports / Event", "低", "Low", "Modric", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Baturina", "体育/赛事", "Sports / Event", "低", "Low", "Baturina", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Petar Musa", "体育/赛事", "Sports / Event", "低", "Low", "Petar Musa", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fenerbahçe Beko", "体育/赛事", "Sports / Event", "低", "Low", "Fenerbahçe Beko", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dusan", "体育/赛事", "Sports / Event", "低", "Low", "Dusan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("LINGORM ILF WORSHIP", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "LINGORM ILF WORSHIP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#บวงสรวงซีรีส์วาดฝันวันวิวาห์", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "บวงสรวงซีรีส์วาดฝันวันวิวาห์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVOuting2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GMMTVOuting2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA ESCAPE OUTING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA ESCAPE OUTING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM DAY OUT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NAMTANFILM DAY OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SMILE WITH XUNING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SMILE WITH XUNING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB SEVENTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB SEVENTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM MOONLIT NIGHT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NAMTANFILM MOONLIT NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JANJINGJING FOREVER BLOOM", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JANJINGJING FOREVER BLOOM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Racerz", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Racerz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "首播 EP、CP 物料、品牌联名与明星应援词优先"],
        ["菲律宾", "Justin、BINI、DMD 与综艺/粉丝向内容优先"],
        ["印尼", "品牌促销、泰娱外溢与球星解说切片优先"],
        ["沙特", "足球赛果、球员讨论与演唱会词优先"],
        ["土耳其", "足球国家队/转会与 Survivor 综艺词优先"],
        ["越南", "泰娱外溢仍最强，需继续过滤阿语广告和币圈噪音"]
      ],
      en: [
        ["Thailand", "Premiere tags, CP fandom material, brand tie-ins, and celebrity pushes first"],
        ["Philippines", "Justin, BINI, DMD, and variety/fandom responses first"],
        ["Indonesia", "Brand promos, Thai-ent spillover, and football commentary clips first"],
        ["Saudi Arabia", "Football results, player chatter, and concert hooks first"],
        ["Turkey", "National-team football, transfer chatter, and Survivor TV tags first"],
        ["Vietnam", "Thai-ent spillover remains strongest; keep filtering Arabic ads and crypto noise"]
      ]
    }
  },
  {
    date: "2026-06-19",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#GopayPromoPointCoffee", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GopayPromoPointCoffee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DMDLINEUP2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMDLINEUP2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JUMAVVA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JUMAVVA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jonathan David", "体育/赛事", "Sports / Event", "低", "Low", "Jonathan David", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD THE RISE CONTINUES", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMD THE RISE CONTINUES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEEPOR NEW JOURNEY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEETEEPOR NEW JOURNEY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cerita Lila", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Cerita Lila", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ronaldo", "体育/赛事", "Sports / Event", "低", "Low", "Ronaldo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD LINEUP WITH NETJJ 2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMD LINEUP WITH NETJJ 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("1 di XXI", "品牌活动/消费", "Brand / Consumer", "低", "Low", "1 di XXI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KENGNAMPING TO THE NEXT PAGE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "KENGNAMPING TO THE NEXT PAGE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ZEENUNEW ERA ASCENDS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ZEENUNEW ERA ASCENDS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BELI 1 GRATIS 1 Tiket", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BELI 1 GRATIS 1 Tiket", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vaseline Pro Derma", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Vaseline Pro Derma", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SANTA RICE CRACKER LIVE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "SANTA RICE CRACKER LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("UNKNOWN LOVER PILOT", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "UNKNOWN LOVER PILOT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TLEFIRSTONE THE NEXT RISE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TLEFIRSTONE THE NEXT RISE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FRIENDS OF GRAB OPEN HOUSE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FRIENDS OF GRAB OPEN HOUSE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORM FRIEND OF BVLGARI", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ORM FRIEND OF BVLGARI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("TEAM TAYNEW SEA THE WILD", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEAM TAYNEW SEA THE WILD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORM FRIEND OF BVLGARI", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ORM FRIEND OF BVLGARI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DMDLINEUP2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMDLINEUP2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#หลิงหลิงเฟิสต์แฟนมีตที่โฮจิมินห์", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "หลิงหลิงเฟิสต์แฟนมีตที่โฮจิมินห์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MATE THE DREAMERSคืนนี้", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MATE THE DREAMERSคืนนี้", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RACERZ READY TO RACE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "RACERZ READY TO RACE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NaniMeLoveThe1stFMinTaipei", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NaniMeLoveThe1stFMinTaipei", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เจมีไนน์โฟร์ทxPondsSkinInstitute", "品牌活动/消费", "Brand / Consumer", "低", "Low", "เจมีไนน์โฟร์ทxPondsSkinInstitute", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BunnyPondPDontSayNoToRedBull", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BunnyPondPDontSayNoToRedBull", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARTSARI ROAD TO FOREVER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MARTSARI ROAD TO FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BUSbecauseofyouiShinexELIXIR", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BUSbecauseofyouiShinexELIXIR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD THE RISE CONTINUES", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMD THE RISE CONTINUES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KENGNAMPING TO THE NEXT PAGE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "KENGNAMPING TO THE NEXT PAGE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KFCxPEEMTANANxBLYTHE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KFCxPEEMTANANxBLYTHE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOOTBALL VIBES WITH SEA", "体育/赛事", "Sports / Event", "低", "Low", "FOOTBALL VIBES WITH SEA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD LINEUP WITH NETJJ 2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMD LINEUP WITH NETJJ 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SaveTheSeries1stEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SaveTheSeries1stEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JUNGTANAWINBDxMario", "品牌活动/消费", "Brand / Consumer", "低", "Low", "JUNGTANAWINBDxMario", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LUMIERE EMBRACES LOVE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LUMIERE EMBRACES LOVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OUR LOVE ON THE ROAD", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "OUR LOVE ON THE ROAD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEEPOR NEW JOURNEY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEETEEPOR NEW JOURNEY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TLEFIRSTONE THE NEXT RISE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TLEFIRSTONE THE NEXT RISE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#DMDLINEUP2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMDLINEUP2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD THE RISE CONTINUES", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMD THE RISE CONTINUES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ListenTodahonbyjustin", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ListenTodahonbyjustin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEEPOR NEW JOURNEY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEETEEPOR NEW JOURNEY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BINI_Gwen", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BINI_Gwen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TheFirstWish", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TheFirstWish", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORM FRIEND OF BVLGARI", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ORM FRIEND OF BVLGARI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JM SAILS WITH FYANG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JM SAILS WITH FYANG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THOMASKONG NEW CHAPTER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "THOMASKONG NEW CHAPTER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA NEXT CHAPTER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "APASRA NEXT CHAPTER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ZEENUNEW ERA ASCENDS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ZEENUNEW ERA ASCENDS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EVERY ANGUEL LEADS TO CAPEATH", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "EVERY ANGUEL LEADS TO CAPEATH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARTSARI ROAD TO FOREVER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MARTSARI ROAD TO FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DRALYS FINALLY 2GETHER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "DRALYS FINALLY 2GETHER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD LINEUP WITH NETJJ 2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DMD LINEUP WITH NETJJ 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("UNVEILING ANGELS STORY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "UNVEILING ANGELS STORY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KENGNAMPING TO THE NEXT PAGE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "KENGNAMPING TO THE NEXT PAGE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("UNKNOWN LOVER PILOT", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "UNKNOWN LOVER PILOT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EVERYWHERE WITH SUNOO", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "EVERYWHERE WITH SUNOO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYEATOM PERU FANMEET", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "FAYEATOM PERU FANMEET", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TLEFIRSTONE THE NEXT RISE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TLEFIRSTONE THE NEXT RISE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WINRI SA SPECIAL SESSION", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "WINRI SA SPECIAL SESSION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SASAMA Kay GRACIA ANDRE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SASAMA Kay GRACIA ANDRE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rybakina", "体育/赛事", "Sports / Event", "低", "Low", "Rybakina", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("ميسي", "体育/赛事", "Sports / Event", "低", "Low", "ميسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("رونالدو", "体育/赛事", "Sports / Event", "低", "Low", "رونالدو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الطلب_المسبق", "品牌活动/消费", "Brand / Consumer", "低", "Low", "الطلب المسبق", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#اجازه_سعيده", "生活方式/社区", "Lifestyle / Community", "低", "Low", "اجازه سعيده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("هاري_كين", "体育/赛事", "Sports / Event", "低", "Low", "هاري كين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("إنجلترا", "体育/赛事", "Sports / Event", "低", "Low", "إنجلترا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("توتشل", "体育/赛事", "Sports / Event", "低", "Low", "توتشل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سالم", "体育/赛事", "Sports / Event", "低", "Low", "سالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العويس", "体育/赛事", "Sports / Event", "低", "Low", "العويس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GTA 6", "游戏/数码", "Gaming / Digital", "低", "Low", "GTA 6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بنك_البلاد", "品牌活动/消费", "Brand / Consumer", "低", "Low", "بنك البلاد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("لويس_دياز", "体育/赛事", "Sports / Event", "低", "Low", "لويس دياز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("مودريتش", "体育/赛事", "Sports / Event", "低", "Low", "مودريتش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("برونو_فرنانديز", "体育/赛事", "Sports / Event", "低", "Low", "برونو فرنانديز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("جواو_فيليكس", "体育/赛事", "Sports / Event", "低", "Low", "جواو فيليكس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تشيلسي", "体育/赛事", "Sports / Event", "低", "Low", "تشيلسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#فنربخشة_بيكو", "体育/赛事", "Sports / Event", "低", "Low", "فنربخشة بيكو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("رسميًا مودريتش", "体育/赛事", "Sports / Event", "低", "Low", "رسميًا مودريتش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الأهلي_ضد_ميامي", "体育/赛事", "Sports / Event", "低", "Low", "الأهلي ضد ميامي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تشافي سيمونز", "体育/赛事", "Sports / Event", "低", "Low", "تشافي سيمونز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Harry Kane", "体育/赛事", "Sports / Event", "低", "Low", "Harry Kane", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İngiltere", "体育/赛事", "Sports / Event", "低", "Low", "İngiltere", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ronaldo", "体育/赛事", "Sports / Event", "低", "Low", "Ronaldo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Livakovic", "体育/赛事", "Sports / Event", "低", "Low", "Livakovic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Survivor2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Survivor2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Portekiz", "体育/赛事", "Sports / Event", "低", "Low", "Portekiz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("rashford", "体育/赛事", "Sports / Event", "低", "Low", "rashford", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tuchel", "体育/赛事", "Sports / Event", "低", "Low", "Tuchel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Modric", "体育/赛事", "Sports / Event", "低", "Low", "Modric", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Petar Musa", "体育/赛事", "Sports / Event", "低", "Low", "Petar Musa", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fenerbahçe Beko", "体育/赛事", "Sports / Event", "低", "Low", "Fenerbahçe Beko", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dusan", "体育/赛事", "Sports / Event", "低", "Low", "Dusan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Gelin Takımı 2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Gelin Takımı 2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kerem Aktürkoğlu", "体育/赛事", "Sports / Event", "低", "Low", "Kerem Aktürkoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hakan Çalhanoğlu", "体育/赛事", "Sports / Event", "低", "Low", "Hakan Çalhanoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rıdvan Dilmen", "体育/赛事", "Sports / Event", "低", "Low", "Rıdvan Dilmen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Orkun Kökçü", "体育/赛事", "Sports / Event", "低", "Low", "Orkun Kökçü", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("LINGORM ILF WORSHIP", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "LINGORM ILF WORSHIP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#บวงสรวงซีรีส์วาดฝันวันวิวาห์", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "บวงสรวงซีรีส์วาดฝันวันวิวาห์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVOuting2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GMMTVOuting2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA ESCAPE OUTING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA ESCAPE OUTING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM DAY OUT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NAMTANFILM DAY OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#18JUNEFMJK1D1inVietNam", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "18JUNEFMJK1D1inVietNam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KRDinDanangxUniverseISawU", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KRDinDanangxUniverseISawU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SMILE WITH XUNING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SMILE WITH XUNING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB SEVENTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB SEVENTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM MOONLIT NIGHT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NAMTANFILM MOONLIT NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HalongBay", "旅行/本地活动", "Travel / Local Event", "低", "Low", "HalongBay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JANJINGJING FOREVER BLOOM", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JANJINGJING FOREVER BLOOM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RACERZ", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "RACERZ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MHSMSxHCMUSSH2026", "品牌活动/消费", "Brand / Consumer", "低", "Low", "MHSMSxHCMUSSH2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LUMIERE EMBRACES LOVE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LUMIERE EMBRACES LOVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JMN MIDNIGHT AURA D2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "JMN MIDNIGHT AURA D2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#FiveStarRelaxingStayxNaniFourever", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FiveStarRelaxingStayxNaniFourever", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MARTSARIinKUALALUMPUR", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MARTSARIinKUALALUMPUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "泰娱 CP、品牌联动与新 EP/首映内容优先"],
        ["菲律宾", "DMD、BINI、Justin 音乐与粉丝向内容优先"],
        ["印尼", "品牌促销、泰娱外溢与体育球星话题优先"],
        ["沙特", "足球球星与游戏/消费词优先，避开婚恋和国家叙事"],
        ["土耳其", "足球转会、国家队与综艺词优先，规避政策争议"],
        ["越南", "泰娱/粉丝见面会外溢最强，币圈与阿语噪音需剔除"]
      ],
      en: [
        ["Thailand", "Thai fandom pairings, brand tie-ins, and new-episode tags first"],
        ["Philippines", "DMD, BINI, Justin music, and fandom response first"],
        ["Indonesia", "Brand promos, Thai-ent spillover, and football stars first"],
        ["Saudi Arabia", "Football stars and gaming/consumer terms first; avoid dating and civic cues"],
        ["Turkey", "Transfer chatter, national-team football, and TV entertainment first"],
        ["Vietnam", "Thai-ent spillover strongest; strip crypto and Arabic noise"]
      ]
    }
  },
  {
    date: "2026-06-18",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("Pevita", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Pevita", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ILONA X AQUA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ILONA X AQUA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dota", "体育/赛事", "Sports / Event", "低", "Low", "Dota", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tzuyang", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Tzuyang", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Seventeen", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Seventeen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hannah Al Rashid", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Hannah Al Rashid", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kim Dan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Kim Dan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Indosat", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Indosat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mekdi", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Mekdi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sarwendah", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Sarwendah", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("MYSTERY BEHIND THE VEIL", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MYSTERY BEHIND THE VEIL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHARLOTTE KEEP THE STAGE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "CHARLOTTE KEEP THE STAGE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIRL RULES NEW ERA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GIRL RULES NEW ERA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alyn Wee X NNN 2nd liveย้อนหลัง", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Alyn Wee X NNN 2nd liveย้อนหลัง", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN PIANO DAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PONDPHUWIN PIANO DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MABELZ BRIGHTER VISION", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MABELZ BRIGHTER VISION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOONGDUNK SURPRISE MAGIC", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JOONGDUNK SURPRISE MAGIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SIXSIDED SERENDIPITY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SIXSIDED SERENDIPITY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BUS 7th Anniversary", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BUS 7th Anniversary", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mint Awardคืนนี้", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "Mint Awardคืนนี้", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LOrealParisxBUSbecauseofyouiShine", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LOrealParisxBUSbecauseofyouiShine", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PRIMExBUSGLOWYDAY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PRIMExBUSGLOWYDAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SaveTheSeriesfinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SaveTheSeriesfinalEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#READYROSEESTCOLA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "READYROSEESTCOLA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DICE 4YEARS 4OURSIDE IN TOKYO", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DICE 4YEARS 4OURSIDE IN TOKYO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA ROMANCE VOLUME", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA ROMANCE VOLUME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PP MYSTERY BOX", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "PP MYSTERY BOX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JUNGTANAWINBDxMario", "品牌活动/消费", "Brand / Consumer", "低", "Low", "JUNGTANAWINBDxMario", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DOMUNDI LINEUP 2026", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DOMUNDI LINEUP 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TANTAN LOVE LIKE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TANTAN LOVE LIKE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#PageAtATimeforSB19PABLO", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PageAtATimeforSB19PABLO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ali King Of Love", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Ali King Of Love", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PondPhuwinPianoDay", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PondPhuwinPianoDay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PHIToPondPhuwin", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PHIToPondPhuwin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KFCxSB19PABLO", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KFCxSB19PABLO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALI BREEZE OF LOVE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ALI BREEZE OF LOVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MYSTERY BEHIND THE VEIL", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MYSTERY BEHIND THE VEIL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Red Bull Dance Your Style", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Red Bull Dance Your Style", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PP MYSTERY BOX", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "PP MYSTERY BOX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINI MIKHA MEGA DRAGON", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BINI MIKHA MEGA DRAGON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PLEASURExSB19", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PLEASURExSB19", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAPPIEST PABLO DAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HAPPIEST PABLO DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OUR FOURTH IN MANILA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "OUR FOURTH IN MANILA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ASTRO REUNITED DURING DUSK", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ASTRO REUNITED DURING DUSK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SEUNGKWAN WAVE YOUR FLAG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SEUNGKWAN WAVE YOUR FLAG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SaveTheSeriesfinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SaveTheSeriesfinalEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#وين_تسافر_الصيف", "生活方式/社区", "Lifestyle / Community", "低", "Low", "وين_تسافر_الصيف", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#بنك_البلاد_في_خدمتكم", "品牌活动/消费", "Brand / Consumer", "低", "Low", "بنك_البلاد_في_خدمتكم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الاهلي_انتر_ميامي", "体育/赛事", "Sports / Event", "低", "Low", "الاهلي_انتر_ميامي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الأهلي", "体育/赛事", "Sports / Event", "低", "Low", "الأهلي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عمر مرموش", "体育/赛事", "Sports / Event", "低", "Low", "عمر مرموش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الهلال", "体育/赛事", "Sports / Event", "低", "Low", "الهلال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("رونالدو", "体育/赛事", "Sports / Event", "低", "Low", "رونالدو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كورتوا", "体育/赛事", "Sports / Event", "低", "Low", "كورتوا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بوتافوغو", "体育/赛事", "Sports / Event", "低", "Low", "بوتافوغو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Göztepe", "体育/赛事", "Sports / Event", "低", "Low", "Göztepe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mabel Matiz", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Mabel Matiz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cedi Osman", "体育/赛事", "Sports / Event", "低", "Low", "Cedi Osman", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ece Seçkin", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Ece Seçkin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nazan Öncel", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Nazan Öncel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arda Turan", "体育/赛事", "Sports / Event", "低", "Low", "Arda Turan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aleyna Tilki", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Aleyna Tilki", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mourinho", "体育/赛事", "Sports / Event", "低", "Low", "Mourinho", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hande Erçel", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Hande Erçel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Şevval Sam", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Şevval Sam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sefo", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Sefo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Seda Sayan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Seda Sayan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sıla Türkoğlu", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Sıla Türkoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sinan Akçıl", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Sinan Akçıl", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Neslihan Atagül", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Neslihan Atagül", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sivasspor", "体育/赛事", "Sports / Event", "低", "Low", "Sivasspor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cenk Tosun", "体育/赛事", "Sports / Event", "低", "Low", "Cenk Tosun", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kerem Aktürkoğlu", "体育/赛事", "Sports / Event", "低", "Low", "Kerem Aktürkoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alperen Şengün", "体育/赛事", "Sports / Event", "低", "Low", "Alperen Şengün", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mert Müldür", "体育/赛事", "Sports / Event", "低", "Low", "Mert Müldür", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("RHYDER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RHYDER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DANGRANGTO X RHYDER", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DANGRANGTO X RHYDER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HIEUTHUHAI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HIEUTHUHAI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tăng Duy Tân", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Tăng Duy Tân", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ERIK", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ERIK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DABEME POPUP STARS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DABEME POPUP STARS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Miu Lê", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Miu Lê", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mỹ Tâm", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Mỹ Tâm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mỹ Anh", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Mỹ Anh", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mlee", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Mlee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vũ Cát Tường", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Vũ Cát Tường", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bích Phương", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Bích Phương", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CAPTAIN BOY", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "CAPTAIN BOY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AMEE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "AMEE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS FESTA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS FESTA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MONO", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "MONO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BÔNG HỒNG ĐẸP NHẤT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BÔNG HỒNG ĐẸP NHẤT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Anh Trai Say Hi", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Anh Trai Say Hi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THIÊN THẦN CỦA BÉ", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "THIÊN THẦN CỦA BÉ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NEGAV", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NEGAV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  {
    date: "2026-06-17",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("Dota", "体育/赛事", "Sports / Event", "低", "Low", "Dota", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ILONA X AQUA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ILONA X AQUA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALVOL27 IN JAKARTA", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ALVOL27 IN JAKARTA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hannah Al Rashid", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Hannah Al Rashid", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kim Dan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Kim Dan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tzuyang", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Tzuyang", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Pevita", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Pevita", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("PERTHSANTA ROMANCE VOLUME", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA ROMANCE VOLUME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SAVEtheseriesfinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SAVEtheseriesfinalEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OSCARxMUSIC IN TOKYO", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "OSCARxMUSIC IN TOKYO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alyn Wee X NNN 2nd liveย้อนหลัง", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Alyn Wee X NNN 2nd liveย้อนหลัง", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHARLOTTE KEEP THE STAGE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "CHARLOTTE KEEP THE STAGE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN PIANO DAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PONDPHUWIN PIANO DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LOrealParisxBUSbecauseofyouiShine", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LOrealParisxBUSbecauseofyouiShine", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mint Awardคืนนี้", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "Mint Awardคืนนี้", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เพราะแฟนเก่าเปลี่ยนแปลงบ่อยfinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "เพราะแฟนเก่าเปลี่ยนแปลงบ่อยfinalEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#ThankYouLolites", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ThankYouLolites", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PageAtATimeforSB19PABLO", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PageAtATimeforSB19PABLO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PondPhuwinPianoDay", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PondPhuwinPianoDay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PLEASURExSB19", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PLEASURExSB19", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LAZADA MIDYEAR MEGA PARTY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LAZADA MIDYEAR MEGA PARTY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PP MYSTERY BOX", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "PP MYSTERY BOX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MYSTERY BEHIND THE VEIL", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MYSTERY BEHIND THE VEIL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SB19 GENTO AMBASSADORS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "SB19 GENTO AMBASSADORS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OUR FOURTH IN MANILA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "OUR FOURTH IN MANILA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ASTRO REUNITED DURING DUSK", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ASTRO REUNITED DURING DUSK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#ساندوتش_جربته_وما_ندمت", "生活方式/社区", "Lifestyle / Community", "低", "Low", "ساندوتش_جربته_وما_ندمت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("رونالدو", "体育/赛事", "Sports / Event", "低", "Low", "رونالدو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العالمي", "体育/赛事", "Sports / Event", "低", "Low", "العالمي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فالفيردي", "体育/赛事", "Sports / Event", "低", "Low", "فالفيردي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("jeddah massage", "生活方式/社区", "Lifestyle / Community", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "jeddah massage", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("هاكاثون", "生活方式/社区", "Lifestyle / Community", "低", "Low", "هاكاثون", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فهد المولد", "体育/赛事", "Sports / Event", "低", "Low", "فهد المولد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كورتوا", "体育/赛事", "Sports / Event", "低", "Low", "كورتوا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فوز كوريا الجنوبية", "体育/赛事", "Sports / Event", "低", "Low", "فوز كوريا الجنوبية", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Cedi Osman", "体育/赛事", "Sports / Event", "低", "Low", "Cedi Osman", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aleyna Tilki", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Aleyna Tilki", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arda Turan", "体育/赛事", "Sports / Event", "低", "Low", "Arda Turan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mourinho", "体育/赛事", "Sports / Event", "低", "Low", "Mourinho", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ece Seçkin", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Ece Seçkin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sıla Türkoğlu", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Sıla Türkoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mabel Matiz", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Mabel Matiz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cenk Tosun", "体育/赛事", "Sports / Event", "低", "Low", "Cenk Tosun", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Seda Sayan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Seda Sayan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sefo", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Sefo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Şevval Sam", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Şevval Sam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hande Erçel", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Hande Erçel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kerem Aktürkoğlu", "体育/赛事", "Sports / Event", "低", "Low", "Kerem Aktürkoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nazan Öncel", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Nazan Öncel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Afra Saraçoğlu", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Afra Saraçoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sivasspor", "体育/赛事", "Sports / Event", "低", "Low", "Sivasspor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("Miu Lê", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Miu Lê", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BÔNG HỒNG ĐẸP NHẤT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BÔNG HỒNG ĐẸP NHẤT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DABEME POPUP STARS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DABEME POPUP STARS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARAT 5TH FANMEETING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CARAT 5TH FANMEETING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DANGRANGTO X RHYDER", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DANGRANGTO X RHYDER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THIÊN THẦN CỦA BÉ", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "THIÊN THẦN CỦA BÉ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mỹ Tâm", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Mỹ Tâm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Anh Trai Say Hi", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Anh Trai Say Hi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tăng Duy Tân", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Tăng Duy Tân", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("IVE SWITCH ON", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "IVE SWITCH ON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mlee", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Mlee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mỹ Anh", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Mỹ Anh", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bích Phương", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Bích Phương", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("B Ray", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "B Ray", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS FESTA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS FESTA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RHYDER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RHYDER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MONO", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "MONO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ERIK", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ERIK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NEGAV", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NEGAV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AMEE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "AMEE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  {
    date: "2026-06-16",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#PondPhuwinConcert", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PondPhuwinConcert", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KepercayaanInvestorGlobal", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "政治/争议", "Political / Controversy", "KepercayaanInvestorGlobal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEE POR FANDOM DAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEETEE POR FANDOM DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GoPay Treasure Hunt", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GoPay Treasure Hunt", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA SUN SHIELD ON", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA SUN SHIELD ON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("TEETEE POR FANDOM DAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEETEE POR FANDOM DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PondPhuwinConcert", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PondPhuwinConcert", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA SUN SHIELD ON", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA SUN SHIELD ON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNSET IN WINTER EP7", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUNSET IN WINTER EP7", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KENG AT GDH CONCERT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "KENG AT GDH CONCERT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB SEVENTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB SEVENTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUNEW X GDH ORCHESTRA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "NUNEW X GDH ORCHESTRA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH LKN X KIJSADA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GEMINIFOURTH LKN X KIJSADA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TWO FACES OF THATRI EP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TWO FACES OF THATRI EP3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUPALAI MY STAYCATION BOY EP33", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUPALAI MY STAYCATION BOY EP33", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("TEETEE POR FANDOM DAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TEETEE POR FANDOM DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA SUN SHIELD ON", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA SUN SHIELD ON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#بودكاست_10", "生活方式/社区", "Lifestyle / Community", "低", "Low", "بودكاست_10", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("المنتخب السعودي", "体育/赛事", "Sports / Event", "低", "Low", "المنتخب السعودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("المنتخب اليوم", "体育/赛事", "Sports / Event", "低", "Low", "المنتخب اليوم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [

      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("PERTHSANTA SUN SHIELD ON", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA SUN SHIELD ON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CeraVeSunClubxPerthSanta", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CeraVeSunClubxPerthSanta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB SEVENTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB SEVENTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PGA Tour Rise", "体育/赛事", "Sports / Event", "低", "Low", "PGA Tour Rise", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  {
    date: "2026-06-15",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#TicketToHeavenEP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA SUN SHIELD ON", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA SUN SHIELD ON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKY HOMECOMING GDH CONCERT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "SKY HOMECOMING GDH CONCERT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CERAVE X DEWTEE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CERAVE X DEWTEE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH LKN X KIJSADA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GEMINIFOURTH LKN X KIJSADA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#CeraVeSunClubxPerthSanta", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CeraVeSunClubxPerthSanta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeries", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KENG AT GDH CONCERT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "KENG AT GDH CONCERT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUNEW X GDH ORCHESTRA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "NUNEW X GDH ORCHESTRA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKY HOMECOMING GDH CONCERT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "SKY HOMECOMING GDH CONCERT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KHEMJIRA HATYAI TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "KHEMJIRA HATYAI TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH LKN X KIJSADA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GEMINIFOURTH LKN X KIJSADA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB SEVENTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB SEVENTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BILLKIN X GDH CONCERT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BILLKIN X GDH CONCERT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PP KRIT X CARTIER IN MELBOURNE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PP KRIT X CARTIER IN MELBOURNE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CERAVE X DEWTEE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CERAVE X DEWTEE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FLOWER BOY FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "FLOWER BOY FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#TicketToHeavenEP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA SUN SHIELD ON", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA SUN SHIELD ON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB SEVENTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB SEVENTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [

      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("World Cup", "体育/赛事", "Sports / Event", "低", "Low", "World Cup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OOMBAM FULFILL FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "OOMBAM FULFILL FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-06-14",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("AFF U-19", "体育/赛事", "Sports / Event", "低", "Low", "AFF U-19", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ASEANBoysChamp2026", "体育/赛事", "Sports / Event", "低", "Low", "ASEANBoysChamp2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TicketToHeavenEP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BBFanFest2026D1", "线下活动/娱乐", "Event / Entertainment", "低", "Low", "BBFanFest2026D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BARTHTANRAK HEARTS DESIRE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BARTHTANRAK HEARTS DESIRE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RequestHourJKT48", "音乐/粉丝应援", "Music / Fandom", "低", "Low", "RequestHourJKT48", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Magic Shop", "音乐/粉丝应援", "Music / Fandom", "低", "Low", "Magic Shop", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RENJUNShowcaseInChangsha", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "RENJUNShowcaseInChangsha", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Garuda Muda Mendunia", "体育/赛事", "Sports / Event", "低", "Low", "Garuda Muda Mendunia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MILKLOVE MAGIC MOMENT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MILKLOVE MAGIC MOMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM DOKMAI RATRI", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "NAMTANFILM DOKMAI RATRI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fajar Sang Idola", "娱乐/人物", "Entertainment / Personality", "低", "Low", "Fajar Sang Idola", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JANJINGJING FIRST BLOOM", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JANJINGJING FIRST BLOOM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EMIBONNIE DANDELION NIGHT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "EMIBONNIE DANDELION NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Namjoon", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Namjoon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JMN MIDNIGHT AURA D1", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JMN MIDNIGHT AURA D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ddaeng", "音乐/粉丝应援", "Music / Fandom", "低", "Low", "Ddaeng", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SANTA WITH HEART LOGIC", "品牌活动/明星联动", "Brand / Celebrity Tie-In", "低", "Low", "SANTA WITH HEART LOGIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#BBFanFest2026D1", "线下活动/娱乐", "Event / Entertainment", "低", "Low", "BBFanFest2026D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JuniorMarkConcert", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JuniorMarkConcert", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TicketToHeavenEP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BUS_LIGHTASONE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BUS_LIGHTASONE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KhemjiraInHatyai", "旅行/剧集联动", "Travel / Drama Tie-In", "低", "Low", "KhemjiraInHatyai", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KHEMJIRA HATYAI TOUR", "旅行/线下活动", "Travel / Local Event", "低", "Low", "KHEMJIRA HATYAI TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EMIBONNIE DANDELION NIGHT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "EMIBONNIE DANDELION NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM DOKMAI RATRI", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "NAMTANFILM DOKMAI RATRI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY14", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGFA THE LEGACY14", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MILKLOVE MAGIC MOMENT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MILKLOVE MAGIC MOMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE14", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHINING PRIDE CHARLOTTE14", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JANJINGJING FIRST BLOOM", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JANJINGJING FIRST BLOOM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SANTA WITH HEART LOGIC", "品牌活动/明星联动", "Brand / Celebrity Tie-In", "低", "Low", "SANTA WITH HEART LOGIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("22ND MIRACLE BOY GEMINI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "22ND MIRACLE BOY GEMINI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE UPON A TIME FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE UPON A TIME FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FLOWER BOY FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "FLOWER BOY FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYE ATOM BRAZIL FANMEET", "明星/线下活动", "Celebrity / Local Event", "低", "Low", "FAYE ATOM BRAZIL FANMEET", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN RENDEZV HK", "明星/线下活动", "Celebrity / Local Event", "低", "Low", "PONDPHUWIN RENDEZV HK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAPPY PAW WITH AVOCEAN", "品牌活动/宠物生活方式", "Brand / Pet Lifestyle", "低", "Low", "HAPPY PAW WITH AVOCEAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OOMBAM FULFILL FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "OOMBAM FULFILL FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BPP COLONY MOVIE", "电影/娱乐", "Film / Entertainment", "低", "Low", "BPP COLONY MOVIE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LUKEMICK WITH CERAVE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LUKEMICK WITH CERAVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DICE BUSKING AT TRANG", "音乐/线下活动", "Music / Local Event", "低", "Low", "DICE BUSKING AT TRANG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO DEBUT SHOWCASE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TFO DEBUT SHOWCASE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#TicketToHeavenEP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BBFanFest2026D1", "线下活动/娱乐", "Event / Entertainment", "低", "Low", "BBFanFest2026D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WelcometoTzutopia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "WelcometoTzutopia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#나비처럼_피어날_쯔위에게", "明星/生日应援", "Celebrity / Birthday Support", "低", "Low", "나비처럼_피어날_쯔위에게", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BARTHTANRAK HEARTS DESIRE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BARTHTANRAK HEARTS DESIRE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("tzuyu", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "tzuyu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เสน่หาวาโยตอนที่5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "เสน่หาวาโยตอนที่5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Namjoon", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Namjoon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILBERT STAYS IN DAVAO", "明星/本地活动", "Celebrity / Local Event", "低", "Low", "WILBERT STAYS IN DAVAO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JANJINGJING FIRST BLOOM", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JANJINGJING FIRST BLOOM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EMIBONNIE DANDELION NIGHT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "EMIBONNIE DANDELION NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM DOKMAI RATRI", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "NAMTANFILM DOKMAI RATRI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MILKLOVE MAGIC MOMENT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MILKLOVE MAGIC MOMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUSTIN DO THE DEW", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DUSTIN DO THE DEW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AZRALPH DOUBLEMINT ELYU DATE", "品牌活动/明星联动", "Brand / Celebrity Tie-In", "低", "Low", "AZRALPH DOUBLEMINT ELYU DATE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Magic Shop", "音乐/粉丝应援", "Music / Fandom", "低", "Low", "Magic Shop", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("thank you bts", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "thank you bts", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNOO GOLDEN MOMENTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SUNOO GOLDEN MOMENTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JMN MIDNIGHT AURA D1", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JMN MIDNIGHT AURA D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jungkook", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Jungkook", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Taekook", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Taekook", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MessengerDown", "平台故障/争议", "Platform / Outage", "争议/平台故障", "Controversy / Platform Outage", "MessengerDown", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#facebookdown", "平台故障/争议", "Platform / Outage", "争议/平台故障", "Controversy / Platform Outage", "facebookdown", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#اقتباس_اعجبني", "生活方式/社区", "Lifestyle / Community", "低", "Low", "اقتباس_اعجبني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عطنا_صوره_من_البومك", "生活方式/UGC 互动", "Lifestyle / UGC Prompt", "低", "Low", "عطنا_صوره_من_البومك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#وقتك_استغله_بالاستغفار", "生活方式/社区", "Lifestyle / Community", "低", "Low", "وقتك_استغله_بالاستغفار", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عامر عبدالله", "体育/赛事", "Sports / Event", "低", "Low", "عامر عبدالله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("السليق السعودي", "美食/生活方式", "Food / Lifestyle", "低", "Low", "السليق السعودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ميسي", "体育/赛事", "Sports / Event", "低", "Low", "ميسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("منتخب مصر", "体育/赛事", "Sports / Event", "低", "Low", "منتخب مصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العالمي الاول", "体育/赛事", "Sports / Event", "低", "Low", "العالمي الاول", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KDK - YU50X", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KDK YU50X", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#حاله_ابو__فهد_احسان", "综合/待复核", "General / Manual Review", "争议/需人工复核", "Controversy / Manual Review", "حاله_ابو__فهد_احسان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#سداد_قروض_О57Ч72З72Ч", "低质广告/导流", "Low-Quality Ad / Lead Gen", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "سداد_قروض_О57Ч72З72Ч", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العماله الوافده", "法律/社会议题", "Legal / Social Issue", "法律/争议", "Legal / Controversy", "العماله الوافده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الطيران المجهول", "公共议题", "Public Affairs", "政治/争议", "Political / Controversy", "الطيران المجهول", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("#SevEN_Deserve_Support", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SevEN_Deserve_Support", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HYBE_BELIFT_Lab_Boycott", "饭圈争议", "Fandom Controversy", "争议/饭圈", "Controversy / Fandom", "HYBE_BELIFT_Lab_Boycott", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EmegeSaygıDUSaSaygı", "社会议题", "Social Issue", "政治/争议", "Political / Controversy", "EmegeSaygıDUSaSaygı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Filistin'i Yaşat", "公共议题", "Public Affairs", "政治/争议", "Political / Controversy", "Filistin'i Yaşat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GAZZE BİTİYOR", "公共议题", "Public Affairs", "政治/争议", "Political / Controversy", "GAZZE BİTİYOR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Toyota", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Toyota", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Elon Musk", "科技/人物", "Tech / Personality", "低", "Low", "Elon Musk", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Edin Dzeko", "体育/赛事", "Sports / Event", "低", "Low", "Edin Dzeko", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Selimiye Camii", "旅行/文化", "Travel / Culture", "低", "Low", "Selimiye Camii", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MüstakilDeğil GenelAf", "法律/公共议题", "Legal / Public Affairs", "法律/争议", "Legal / Controversy", "MüstakilDeğil GenelAf", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE UPON A TIME FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE UPON A TIME FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Elden Ring Nightreign", "游戏/娱乐", "Gaming / Entertainment", "低", "Low", "Elden Ring Nightreign", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Göztepe", "体育/赛事", "Sports / Event", "低", "Low", "Göztepe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hyundai", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Hyundai", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ZAM GELİYOR", "生活成本/社会议题", "Cost of Living / Social Issue", "社会/争议", "Social / Controversy", "ZAM GELİYOR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#BBFanFest2026D1", "线下活动/娱乐", "Event / Entertainment", "低", "Low", "BBFanFest2026D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM DOKMAI RATRI", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "NAMTANFILM DOKMAI RATRI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JANJINGJING FIRST BLOOM", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JANJINGJING FIRST BLOOM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CORTIS_DanceYourStyle", "品牌活动/舞蹈挑战", "Brand / Dance Challenge", "低", "Low", "CORTIS_DanceYourStyle", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JMN MIDNIGHT AURA D1", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JMN MIDNIGHT AURA D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JuneMewnich", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JuneMewnich", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MILKLOVE MAGIC MOMENT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MILKLOVE MAGIC MOMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("World Cup", "体育/赛事", "Sports / Event", "低", "Low", "World Cup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SEONGHYEON", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SEONGHYEON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EMIBONNIE DANDELION NIGHT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "EMIBONNIE DANDELION NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#มิ้ลค์เลิฟ", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "มิ้ลค์เลิฟ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("STAGE GENIUS KEONHO ON REDBULL", "品牌活动/音乐联动", "Brand / Music Tie-In", "低", "Low", "STAGE GENIUS KEONHO ON REDBULL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SANTA WITH HEART LOGIC", "品牌活动/明星联动", "Brand / Celebrity Tie-In", "低", "Low", "SANTA WITH HEART LOGIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BARTHTANRAK HEARTS DESIRE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BARTHTANRAK HEARTS DESIRE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OOMBAM FULFILL FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "OOMBAM FULFILL FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fable 5", "游戏/娱乐", "Gaming / Entertainment", "低", "Low", "Fable 5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KHEMJIRA HATYAI TOUR", "旅行/线下活动", "Travel / Local Event", "低", "Low", "KHEMJIRA HATYAI TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY12", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGFA THE LEGACY12", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "泰娱演出、剧集大结局、明星应援和品牌联动优先"],
        ["菲律宾", "韩娱粉丝词、明星路演和品牌约会词优先"],
        ["印尼", "足球青年赛、JKT48 和 BTS 相关词优先"],
        ["沙特", "体育、美食和品牌词可做，广告导流词需剔除"],
        ["土耳其", "体育、品牌、游戏可做，公共议题与法律词谨慎"],
        ["越南", "娱乐、舞蹈挑战、韩娱粉丝词和品牌联动优先"]
      ],
      en: [
        ["Thailand", "Thai entertainment, finales, fandom, and brand tie-ins first"],
        ["Philippines", "K-pop fandom, local appearances, and brand-date terms first"],
        ["Indonesia", "Youth football, JKT48, and BTS-related terms first"],
        ["Saudi Arabia", "Sports, food, and brand terms are usable; strip ad bait"],
        ["Turkey", "Sports, brands, and gaming first; watch civic and legal items"],
        ["Vietnam", "Entertainment, dance challenges, fandom, and brand tie-ins first"]
      ]
    }
  },

  {
    date: "2026-06-13",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#LISAxFIFAWorldCup", "体育/赛事", "Sports / Event", "低", "Low", "LISAxFIFAWorldCup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Balogun", "体育/赛事", "Sports / Event", "低", "Low", "Balogun", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Pulisic", "体育/赛事", "Sports / Event", "低", "Low", "Pulisic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#22ndGEMINIDay", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "22ndGEMINIDay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("22ND MIRACLE BOY GEMINI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "22ND MIRACLE BOY GEMINI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE UPON A TIME FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE UPON A TIME FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAPPY ANNIVERSARY BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HAPPY ANNIVERSARY BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WE STAYED BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "WE STAYED BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Thankyou BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Thankyou BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS ARIRANG in Jakarta", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BTS ARIRANG in Jakarta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Neymar", "体育/赛事", "Sports / Event", "低", "Low", "Neymar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAPPY FESTA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HAPPY FESTA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LUCKY CLOVER SUNG HANBIN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "LUCKY CLOVER SUNG HANBIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bangtan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Bangtan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#LISAxFIFAWorldCup", "体育/赛事", "Sports / Event", "低", "Low", "LISAxFIFAWorldCup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BUS_LIGHTASONE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BUS_LIGHTASONE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เฟสล่ม", "平台故障/争议", "Lifestyle / Community", "争议/平台故障", "Controversy / Platform Outage", "เฟสล่ม", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ไอจีล่ม", "平台故障/争议", "Lifestyle / Community", "争议/平台故障", "Controversy / Platform Outage", "ไอจีล่ม", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ภพเธอตอนจบ", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ภพเธอตอนจบ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE UPON A TIME FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE UPON A TIME FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY13", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGFA THE LEGACY13", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE13", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHINING PRIDE CHARLOTTE13", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("22ND MIRACLE BOY GEMINI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "22ND MIRACLE BOY GEMINI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OOMBAM FULFILL FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "OOMBAM FULFILL FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BPP COLONY MOVIE", "电影/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BPP COLONY MOVIE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALWAYS WONDER WASH", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ALWAYS WONDER WASH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP X UNIF", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KNP X UNIF", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TIMELESS EMBRACE ENGLOT13", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TIMELESS EMBRACE ENGLOT13", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SANTA WITH BURBERRY SUMMER", "品牌活动/消费", "Brand / Consumer", "低", "Low", "SANTA WITH BURBERRY SUMMER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FKMU x SFCOLONY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "FKMU x SFCOLONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYEATOM NO BRASIL", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "FAYEATOM NO BRASIL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CONGRATULATIONS TREASURE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CONGRATULATIONS TREASURE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK CONCERT PRESS", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JUNIORMARK CONCERT PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OFFROAD UNIQLO SIAM PARAGON", "品牌活动/消费", "Brand / Consumer", "低", "Low", "OFFROAD UNIQLO SIAM PARAGON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#facebookdown", "平台故障/争议", "Lifestyle / Community", "争议/平台故障", "Controversy / Platform Outage", "facebookdown", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MessengerDown", "平台故障/争议", "Lifestyle / Community", "争议/平台故障", "Controversy / Platform Outage", "MessengerDown", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#YMFSTargetLocked", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "YMFSTargetLocked", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ภพเธอตอนจบ", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ภพเธอตอนจบ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AZRALPH DAZZLING IN MOTION", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "AZRALPH DAZZLING IN MOTION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CAPEATH MAIN LEADS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CAPEATH MAIN LEADS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE UPON A TIME FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE UPON A TIME FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jikook", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Jikook", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUSTBIA MEGAMAZING MOMENT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "DUSTBIA MEGAMAZING MOMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#instagramdown", "平台故障/争议", "Lifestyle / Community", "争议/平台故障", "Controversy / Platform Outage", "instagramdown", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("brownlee", "体育/赛事", "Sports / Event", "低", "Low", "brownlee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KANSILAY FESTIVAL WITH ANTON", "旅行/本地活动", "Travel / Local Event", "低", "Low", "KANSILAY FESTIVAL WITH ANTON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OOMBAM FULFILL FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "OOMBAM FULFILL FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BGYO AGSUR RETURNS", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BGYO AGSUR RETURNS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TONIGHTs AZhining QUEEN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TONIGHTs AZhining QUEEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILBERT ROSS AT PAMUS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "WILBERT ROSS AT PAMUS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHUVEE SHINE TONIGHT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHUVEE SHINE TONIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ginebra", "体育/赛事", "Sports / Event", "低", "Low", "Ginebra", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LELQUIN ULTIMATE MEGADATE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "LELQUIN ULTIMATE MEGADATE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CITYHOOD CONCERT WITH AUBREY", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "CITYHOOD CONCERT WITH AUBREY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#حاله_ابو__فهد_احسان", "综合/待分类", "Lifestyle / Community", "争议/需人工复核", "Controversy / Manual Review", "حاله_ابو__فهد_احسان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#سداد_قروض_О57Ч72З72Ч", "低质广告/导流", "Lifestyle / Community", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "سداد_قروض_О57Ч72З72Ч", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عامر عبدالله", "体育/赛事", "Sports / Event", "低", "Low", "عامر عبدالله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("السليق السعودي", "生活方式/社区", "Lifestyle / Community", "低", "Low", "السليق السعودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ميسي", "体育/赛事", "Sports / Event", "低", "Low", "ميسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("منتخب مصر", "体育/赛事", "Sports / Event", "低", "Low", "منتخب مصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العالمي الاول", "体育/赛事", "Sports / Event", "低", "Low", "العالمي الاول", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KDK - YU50X", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KDK - YU50X", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("#YusufZiyaHocayaAdalet", "社会争议/公共议题", "Lifestyle / Community", "政治/争议", "Political / Controversy", "YusufZiyaHocayaAdalet", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TürkHaberTV", "媒体/公共议题", "Lifestyle / Community", "政治/争议", "Political / Controversy", "TürkHaberTV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SevEN_Deserve_Support", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SevEN_Deserve_Support", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HYBE_BELIFT_Lab_Boycott", "明星/粉丝争议", "Celebrity / Fandom", "争议/饭圈", "Controversy / Fandom", "HYBE_BELIFT_Lab_Boycott", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Yarın LGS'ye", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Yarın LGS'ye", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Filistin'i Yaşat", "公共议题", "Lifestyle / Community", "政治/争议", "Political / Controversy", "Filistin'i Yaşat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GAZZE BİTİYOR", "公共议题", "Lifestyle / Community", "政治/争议", "Political / Controversy", "GAZZE BİTİYOR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Toyota", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Toyota", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Edin Dzeko", "体育/赛事", "Sports / Event", "低", "Low", "Edin Dzeko", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tanju Özcan", "政治人物", "Lifestyle / Community", "政治/争议", "Political / Controversy", "Tanju Özcan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MüstakilDeğil GenelAf", "法律/公共议题", "Lifestyle / Community", "法律/争议", "Legal / Controversy", "MüstakilDeğil GenelAf", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Erkan Baş", "政治人物", "Lifestyle / Community", "政治/争议", "Political / Controversy", "Erkan Baş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE UPON A TIME FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE UPON A TIME FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kayyum", "公共议题", "Lifestyle / Community", "政治/争议", "Political / Controversy", "Kayyum", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Berat Albayrak", "政治人物", "Lifestyle / Community", "政治/争议", "Political / Controversy", "Berat Albayrak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#KARINAXFIFAWorldCup", "体育/赛事", "Sports / Event", "低", "Low", "KARINAXFIFAWorldCup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#윈터토레타", "品牌活动/消费", "Brand / Consumer", "低", "Low", "윈터토레타", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BBFanFest2026LIVE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BBFanFest2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BurberryXSanta", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BurberryXSanta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesLIVE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesLIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKYNANI WU DESTINY PRESS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SKYNANI WU DESTINY PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sleepagotchi", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Sleepagotchi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fable 5", "游戏/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Fable 5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Iran", "公共议题", "Lifestyle / Community", "政治/争议", "Political / Controversy", "Iran", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP X UNIF", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KNP X UNIF", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-06-12",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#BolaGembiraMAXStreamTV", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BolaGembiraMAXStreamTV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KARINA FOR WORLD CUP", "体育/赛事", "Sports / Event", "低", "Low", "KARINA FOR WORLD CUP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("raffi ahmad", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "raffi ahmad", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Piala Dunia 2026", "体育/赛事", "Sports / Event", "低", "Low", "Piala Dunia 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Olivia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Olivia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Shakira", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Shakira", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKYNANI WU DESTINY PRESS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SKYNANI WU DESTINY PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("KNP X UNIF", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KNP X UNIF", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY12", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGFA THE LEGACY12", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO DEBUT SHOWCASE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TFO DEBUT SHOWCASE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE12", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHINING PRIDE CHARLOTTE12", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK CONCERT PRESS", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JUNIORMARK CONCERT PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST EXCLUSIVE NIGHT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "WILLIAMEST EXCLUSIVE NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TWNPICH 2M TIKTOK", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TWNPICH 2M TIKTOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TIMELESS EMBRACE ENGLOT12", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TIMELESS EMBRACE ENGLOT12", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKYNANI WU DESTINY PRESS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SKYNANI WU DESTINY PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TONSOM 5TH EPISODE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TONSOM 5TH EPISODE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE BKK RED OPERA EP16", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "THE BKK RED OPERA EP16", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LATELY ITS WINTER SEASON EP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LATELY ITS WINTER SEASON EP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAYNA KLOSET ACS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "JAYNA KLOSET ACS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA TALK WITH KATANYU", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA TALK WITH KATANYU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DAOU CHACHA TPOPSTAGE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DAOU CHACHA TPOPSTAGE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NEWWIEE POLCASAN X SAMSUNG", "品牌活动/消费", "Brand / Consumer", "低", "Low", "NEWWIEE POLCASAN X SAMSUNG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GINNY JAYNA AFair ICONSIAM", "旅行/本地活动", "Travel / Local Event", "低", "Low", "GINNY JAYNA AFair ICONSIAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUPALAI MY STAYCATION BOY EP32", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUPALAI MY STAYCATION BOY EP32", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#TREASURE4thWin", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TREASURE4thWin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HighFiveForBINI", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "HighFiveForBINI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Independence Day", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Independence Day", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTS_WORLDTOUR_ARIRANG_BULACAN", "旅行/本地活动", "Travel / Local Event", "低", "Low", "BTS_WORLDTOUR_ARIRANG_BULACAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KARINA FOR WORLD CUP", "体育/赛事", "Sports / Event", "低", "Low", "KARINA FOR WORLD CUP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MANG INASAL BEYBEYQ", "品牌活动/消费", "Brand / Consumer", "低", "Low", "MANG INASAL BEYBEYQ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KOLETTE'S HOT TAKES", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KOLETTE'S HOT TAKES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST EXCLUSIVE NIGHT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "WILLIAMEST EXCLUSIVE NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA MENDING HEARTS", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GIOLUNA MENDING HEARTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RONNIExRAYA WALANG IWANAN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RONNIExRAYA WALANG IWANAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("UNENDING HISTORY WITH JIN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "UNENDING HISTORY WITH JIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MAGIC HANGOUT WITH AUBREY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MAGIC HANGOUT WITH AUBREY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عامر عبدالله", "体育/赛事", "Sports / Event", "低", "Low", "عامر عبدالله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("السليق السعودي", "生活方式/社区", "Lifestyle / Community", "低", "Low", "السليق السعودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ميسي", "体育/赛事", "Sports / Event", "低", "Low", "ميسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("منتخب مصر", "体育/赛事", "Sports / Event", "低", "Low", "منتخب مصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KDK - YU50X", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KDK - YU50X", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Kenan Doğulu", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Kenan Doğulu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Beren Saat", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Beren Saat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Enis Arıkan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Enis Arıkan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ayşe Hatun Önal", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Ayşe Hatun Önal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kerimcan Durmaz", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Kerimcan Durmaz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Berdan Mardini", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Berdan Mardini", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KimseBilmiyor", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KimseBilmiyor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ozan Doğulu", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Ozan Doğulu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tolga ÇAM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Tolga ÇAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("New York Knicks", "体育/赛事", "Sports / Event", "低", "Low", "New York Knicks", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ferit", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Ferit", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#KARINAXFIFAWorldCup", "体育/赛事", "Sports / Event", "低", "Low", "KARINAXFIFAWorldCup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BBFanFest2026LIVE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BBFanFest2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BurberryXSanta", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BurberryXSanta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesLIVE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesLIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKYNANI WU DESTINY PRESS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SKYNANI WU DESTINY PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sleepagotchi", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Sleepagotchi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP X UNIF", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KNP X UNIF", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  {
    date: "2026-06-11",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#armybantuarmy", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "armybantuarmy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTS_ARIRANG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BTS_ARIRANG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dorong Percepatan Transformasi", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Dorong Percepatan Transformasi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#bottegaveneta", "品牌活动/消费", "Brand / Consumer", "低", "Low", "bottegaveneta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WeavingMatterAndMemory", "旅行/本地活动", "Travel / Local Event", "低", "Low", "WeavingMatterAndMemory", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BangkokKunsthalle", "旅行/本地活动", "Travel / Local Event", "低", "Low", "BangkokKunsthalle", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Knicks", "体育/赛事", "Sports / Event", "低", "Low", "Knicks", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BIGBANG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BIGBANG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("H2H LEMON CLUB OPENS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "H2H LEMON CLUB OPENS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Piala Dunia", "体育/赛事", "Sports / Event", "低", "Low", "Piala Dunia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Maxstream", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Maxstream", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARK LEE GANTENG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MARK LEE GANTENG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ronaldo", "体育/赛事", "Sports / Event", "低", "Low", "Ronaldo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Portugal", "体育/赛事", "Sports / Event", "低", "Low", "Portugal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Brunson", "体育/赛事", "Sports / Event", "低", "Low", "Brunson", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#BBFanFest2026LIVE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BBFanFest2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTS_WORLDTOUR_BANGKOK", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BTS_WORLDTOUR_BANGKOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Flex1045xBUS_ดีใจที่ไม่มีเธอ", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Flex1045xBUS_ดีใจที่ไม่มีเธอ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#jewel", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "jewel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#โหนกระแส", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "โหนกระแส", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SECRET OF JOSEON X SEA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "SECRET OF JOSEON X SEA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK CONCERT PRESS", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JUNIORMARK CONCERT PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAYNA KLOSET ACS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "JAYNA KLOSET ACS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("IG TAKEOVER WITH COPPER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "IG TAKEOVER WITH COPPER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE11", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHINING PRIDE CHARLOTTE11", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY11", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGFA THE LEGACY11", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JanJingjing", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JanJingjing", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WeavingMatterAndMemory", "旅行/本地活动", "Travel / Local Event", "低", "Low", "WeavingMatterAndMemory", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BangkokKunsthalle", "旅行/本地活动", "Travel / Local Event", "低", "Low", "BangkokKunsthalle", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BeautyofJoseonxSeatawinan", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BeautyofJoseonxSeatawinan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ติณติณ", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ติณติณ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#มุ่ยเฟย", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "มุ่ยเฟย", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ฟาริดา", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ฟาริดา", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Muifei", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Muifei", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CharlottexOandB", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CharlottexOandB", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#BTS_WORLDTOUR_ARIRANG_BULACAN", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BTS_WORLDTOUR_ARIRANG_BULACAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Knicks", "体育/赛事", "Sports / Event", "低", "Low", "Knicks", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("spurs", "体育/赛事", "Sports / Event", "低", "Low", "spurs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HighFiveForBINI", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "HighFiveForBINI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OG Anunoby", "体育/赛事", "Sports / Event", "低", "Low", "OG Anunoby", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LaVieEnBELLEin24", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "LaVieEnBELLEin24", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NBAFinals", "体育/赛事", "Sports / Event", "低", "Low", "NBAFinals", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ITS DUSTBIA TIME", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ITS DUSTBIA TIME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MANG INASAL BEYBEYQ", "品牌活动/消费", "Brand / Consumer", "低", "Low", "MANG INASAL BEYBEYQ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#OurMoonlightJUNday", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "OurMoonlightJUNday", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BIGBANG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BIGBANG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Junhui", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Junhui", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MISS BEHAVE EP2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MISS BEHAVE EP2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RONNIExRAYA WALANG IWANAN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RONNIExRAYA WALANG IWANAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA ON ITS SHOWTIME", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GIOLUNA ON ITS SHOWTIME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("René", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "René", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("XONARA WISH BUS DEBUT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "XONARA WISH BUS DEBUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SheeCey", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SheeCey", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KOLETTE'S HOT TAKES", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KOLETTE'S HOT TAKES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ITS GAME TIME RALPH", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ITS GAME TIME RALPH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#حاله_ابو__فهد_احسان", "生活方式/社区", "Lifestyle / Community", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "حاله_ابو__فهد_احسان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#سداد_قروض_О57Ч72З72Ч", "生活方式/社区", "Lifestyle / Community", "法律/诈骗", "Legal / Fraud", "سداد_قروض_О57Ч72З72Ч", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#اقتباس_اعجبني", "生活方式/社区", "Lifestyle / Community", "低", "Low", "اقتباس_اعجبني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عطنا_صوره_من_البومك", "生活方式/社区", "Lifestyle / Community", "低", "Low", "عطنا_صوره_من_البومك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#وقتك_استغله_بالاستغفار", "生活方式/社区", "Lifestyle / Community", "低", "Low", "وقتك_استغله_بالاستغفار", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عامر عبدالله", "体育/赛事", "Sports / Event", "低", "Low", "عامر عبدالله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("السليق السعودي", "生活方式/社区", "Lifestyle / Community", "低", "Low", "السليق السعودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ميسي", "体育/赛事", "Sports / Event", "低", "Low", "ميسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("منتخب مصر", "体育/赛事", "Sports / Event", "低", "Low", "منتخب مصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العالمي الاول", "体育/赛事", "Sports / Event", "低", "Low", "العالمي الاول", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KDK - YU50X", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KDK - YU50X", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Kenan Doğulu", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Kenan Doğulu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Beren Saat", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Beren Saat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Enis Arıkan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Enis Arıkan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ayşe Hatun Önal", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Ayşe Hatun Önal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kerimcan Durmaz", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Kerimcan Durmaz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Berdan Mardini", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Berdan Mardini", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KimseBilmiyor", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KimseBilmiyor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ozan Doğulu", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Ozan Doğulu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tolga ÇAM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Tolga ÇAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("New York Knicks", "体育/赛事", "Sports / Event", "低", "Low", "New York Knicks", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ferit", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Ferit", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#GlowCloserwithJOONG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GlowCloserwithJOONG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PSDFAMILY MOVIE TIME COLONY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "PSDFAMILY MOVIE TIME COLONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WE MISS YOU SEONGHYEON", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "WE MISS YOU SEONGHYEON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LoveForSeonghyeon", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "LoveForSeonghyeon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เขมจิราตอนพิเศษถ่ายละเด้อ", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "เขมจิราตอนพิเศษถ่ายละเด้อ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ASMR", "生活方式/社区", "Lifestyle / Community", "低", "Low", "ASMR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("World Cup", "体育/赛事", "Sports / Event", "低", "Low", "World Cup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-06-10",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#WUTheSeriesEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RabOline", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RabOline", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Beckham", "体育/赛事", "Sports / Event", "低", "Low", "Beckham", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#BTS_WORLDTOUR_BANGKOK", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BTS_WORLDTOUR_BANGKOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ทรายสมุทร", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ทรายสมุทร", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ทรายสก๊อต", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ทรายสก๊อต", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JUNIORwith4HOURSLIFE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "JUNIORwith4HOURSLIFE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("4 HOURS LIFE x JUNIOR", "品牌活动/消费", "Brand / Consumer", "低", "Low", "4 HOURS LIFE x JUNIOR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY10", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGFA THE LEGACY10", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE10", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHINING PRIDE CHARLOTTE10", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGLING STILL RISING10", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "LINGLING STILL RISING10", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BEHIND THE SCENE BOL Q4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BEHIND THE SCENE BOL Q4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#สกายนานิ", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "สกายนานิ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#YouManiacSeriesQ18", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "YouManiacSeriesQ18", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#skynani", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "skynani", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WhenItRainsMerch", "品牌活动/消费", "Brand / Consumer", "低", "Low", "WhenItRainsMerch", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TleFirstOneDuoDebut", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TleFirstOneDuoDebut", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTS_WORLDTOUR_ARIRANG_BANGKOK", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BTS_WORLDTOUR_ARIRANG_BANGKOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#กฤษดาพาราไดซ์", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "กฤษดาพาราไดซ์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KijsadaParadise", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KijsadaParadise", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SkinPressTour", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SkinPressTour", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วอลเลย์บอลชาย", "体育/赛事", "Sports / Event", "低", "Low", "วอลเลย์บอลชาย", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GDHโตมาด้วยกันคอนเสิร์ต", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GDHโตมาด้วยกันคอนเสิร์ต", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#BTS_WORLDTOUR_ARIRANG_BULACAN", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BTS_WORLDTOUR_ARIRANG_BULACAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ITS DUSTBIA TIME", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ITS DUSTBIA TIME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#OurMoonlightJUNday", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "OurMoonlightJUNday", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JonaxxMOSKab43", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "JonaxxMOSKab43", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LaVieEnBELLEin24", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "LaVieEnBELLEin24", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Junhui", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Junhui", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TNT10Bumoboses", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TNT10Bumoboses", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARTON BUHAY PA", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "CARTON BUHAY PA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PSDFAMILY MOVIE TIME COLONY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "PSDFAMILY MOVIE TIME COLONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TIK-TALK WITH RAVE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TIK-TALK WITH RAVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA ON ITS SHOWTIME", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GIOLUNA ON ITS SHOWTIME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUSTIN COOL EYEMOment", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "DUSTIN COOL EYEMOment", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BGYO OnDEMAND MEDIACON", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BGYO OnDEMAND MEDIACON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sooyoung", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Sooyoung", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ITS GAME TIME RALPH", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ITS GAME TIME RALPH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RAVLEYS PALABOY ERA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RAVLEYS PALABOY ERA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARTON ERA CONTINUES", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "CARTON ERA CONTINUES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("STAY SAFE MARTSARI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "STAY SAFE MARTSARI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#اقتباس_اعجبني", "生活方式/社区", "Lifestyle / Community", "低", "Low", "اقتباس_اعجبني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عطنا_صوره_من_البومك", "生活方式/社区", "Lifestyle / Community", "低", "Low", "عطنا_صوره_من_البومك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عامر عبدالله", "体育/赛事", "Sports / Event", "低", "Low", "عامر عبدالله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("السليق السعودي", "生活方式/社区", "Lifestyle / Community", "低", "Low", "السليق السعودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ميسي", "体育/赛事", "Sports / Event", "低", "Low", "ميسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("منتخب مصر", "体育/赛事", "Sports / Event", "低", "Low", "منتخب مصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KDK - YU50X", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KDK - YU50X", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("#MehmedFetihlerSultanı", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MehmedFetihlerSultanı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Güneş", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Güneş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aziz Yıldırım", "体育/赛事", "Sports / Event", "低", "Low", "Aziz Yıldırım", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alkın Solmaz", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Alkın Solmaz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Atlas Çağlayan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Atlas Çağlayan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İyiKiDoğdun OzanAkbaba", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "İyiKiDoğdun OzanAkbaba", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Shomurodov", "体育/赛事", "Sports / Event", "低", "Low", "Shomurodov", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FIFA", "体育/赛事", "Sports / Event", "低", "Low", "FIFA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Adeyemi", "体育/赛事", "Sports / Event", "低", "Low", "Adeyemi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#ORMxLolaneNatureCodeBotanic", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ORMxLolaneNatureCodeBotanic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EnemiesWithBenefitsEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EnemiesWithBenefitsEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB SIXTH EP", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "EWB SIXTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PSDFAMILY MOVIE TIME COLONY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "PSDFAMILY MOVIE TIME COLONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LoveAndPawWithOrmkornnaphat", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LoveAndPawWithOrmkornnaphat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE AND PAW X ORM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LOVE AND PAW X ORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cafe", "生活方式/社区", "Lifestyle / Community", "低", "Low", "Cafe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tình 1đem", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Tình 1đem", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-06-09",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("Spill Outfit Murah", "生活方式/穿搭", "Lifestyle / Fashion", "低", "Low", "Spill Outfit Murah"),
        t("PSDFAMILY MOVIE TIME COLONY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "PSDFAMILY MOVIE TIME COLONY"),
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia"),
        t("BOYNEXTDOOR HOME OUT NOW", "音乐/发布", "Music / Release", "低", "Low", "BOYNEXTDOOR HOME OUT NOW"),
        t("CHENLE ON BEGIN AGAIN", "音乐/明星内容", "Music / Celebrity", "低", "Low", "CHENLE ON BEGIN AGAIN"),
        t("Persija", "体育/赛事", "Sports / Event", "低", "Low", "Persija"),
        t("#TheHouseofCreed", "品牌活动/消费", "Brand / Consumer", "低", "Low", "TheHouseofCreed"),
        t("#DuangGoRoundConcert", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DuangGoRoundConcert"),
        t("Tolak Angin", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Tolak Angin"),
        t("DUANG CONCERT AT IMPACT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DUANG CONCERT AT IMPACT"),
        t("Pempek", "生活方式/美食", "Lifestyle / Food", "低", "Low", "Pempek"),
        t("IZNA TAKES CONTROL", "音乐/发布", "Music / Release", "低", "Low", "IZNA TAKES CONTROL"),
        t("Lazada 6.6 Super WOW Sale", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Lazada 6.6 Super WOW Sale"),
        t("Shin Tae-yong", "体育/人物", "Sports / Figure", "低", "Low", "Shin Tae-yong"),
        t("Gacoan", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Gacoan")
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#BTS_WORLDTOUR_BANGKOK", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BTS_WORLDTOUR_BANGKOK"),
        t("#เขมจิราตอนพิเศษถ่ายละเด้อ", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "เขมจิราตอนพิเศษถ่ายละเด้อ"),
        t("#CATDOGnjoyxDaouOffroad", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CATDOGnjoyxDaouOffroad"),
        t("#SkinRebeccaArmstrong", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SkinRebeccaArmstrong"),
        t("ENGFA THE LEGACY09", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGFA THE LEGACY09"),
        t("4M OST BY TLE", "音乐/原声带", "Music / OST", "低", "Low", "4M OST BY TLE"),
        t("SHINING PRIDE CHARLOTTE09", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHINING PRIDE CHARLOTTE09"),
        t("HONGSEN KLOOKFOON Q5", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HONGSEN KLOOKFOON Q5"),
        t("HONGSHI Let's Go 3M", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HONGSHI Let's Go 3M"),
        t("#LGxMINHO", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LGxMINHO"),
        t("#BUS_LIGHTASONE_TEASER", "音乐/发布", "Music / Release", "低", "Low", "BUS_LIGHTASONE_TEASER"),
        t("#SHINee", "音乐/粉丝内容", "Music / Fandom", "低", "Low", "SHINee"),
        t("#CATDOGnjoyFunFest", "明星/粉丝活动", "Celebrity / Fan Event", "低", "Low", "CATDOGnjoyFunFest"),
        t("#ShootingPlsLove", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ShootingPlsLove"),
        t("#KijsadaParadise", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KijsadaParadise"),
        t("#ARIRANGINBANGKOK", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ARIRANGINBANGKOK"),
        t("#PRADAxWIN", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PRADAxWIN"),
        t("#BeckyEntertainment", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BeckyEntertainment"),
        t("#THETITANSCONCERT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "THETITANSCONCERT")
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#BTS_WORLDTOUR_ARIRANG_BULACAN", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BTS_WORLDTOUR_ARIRANG_BULACAN"),
        t("CARTON ERA CONTINUES", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "CARTON ERA CONTINUES"),
        t("Sooyoung", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Sooyoung"),
        t("Bangtan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Bangtan"),
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia"),
        t("#TNT10AngLakas", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TNT10AngLakas"),
        t("PSDFAMILY MOVIE TIME COLONY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "PSDFAMILY MOVIE TIME COLONY"),
        t("THE BIANCHELLA XPERIENCE", "明星/粉丝活动", "Celebrity / Fan Event", "低", "Low", "THE BIANCHELLA XPERIENCE"),
        t("#เขมจิราตอนพิเศษถ่ายละเด้อ", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "เขมจิราตอนพิเศษถ่ายละเด้อ"),
        t("#TNT10FinaleWeek", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TNT10FinaleWeek"),
        t("WINRI SA LEGIT BLUE RIBBON", "品牌活动/消费", "Brand / Consumer", "低", "Low", "WINRI SA LEGIT BLUE RIBBON"),
        t("The Secret Library", "图书/IP/粉丝社区", "Book IP / Fan Community", "低", "Low", "The Secret Library"),
        t("Jennie", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Jennie"),
        t("Bench", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Bench"),
        t("AT LAST WE MEET CAPEATH", "明星/粉丝活动", "Celebrity / Fan Event", "低", "Low", "AT LAST WE MEET CAPEATH"),
        t("MARTSARI INTENSE MYSTERY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MARTSARI INTENSE MYSTERY"),
        t("AYAN NA ANG KAIA", "音乐/团体内容", "Music / Group Content", "低", "Low", "AYAN NA ANG KAIA"),
        t("ORM FACE OF LOLANE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ORM FACE OF LOLANE")
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#اليوم_العالمي_للصديق_المفضل", "生活方式/UGC", "Lifestyle / UGC", "低", "Low", "اليوم العالمي للصديق المفضل"),
        t("#تحدي_الالقاء_للاطفال٥", "生活方式/亲子活动", "Lifestyle / Kids Activity", "低", "Low", "تحدي الالقاء للاطفال"),
        t("راشد", "明星/人物", "Celebrity / Figure", "低", "Low", "راشد"),
        t("السبيرز", "体育/赛事", "Sports / Event", "低", "Low", "السبيرز"),
        t("نادي الشباب", "体育/俱乐部", "Sports / Club", "低", "Low", "نادي الشباب"),
        t("كافو", "体育/明星", "Sports / Celebrity", "低", "Low", "كافو"),
        t("الفيفا", "体育/赛事", "Sports / Event", "低", "Low", "الفيفا"),
        t("ادريانو", "体育/明星", "Sports / Celebrity", "低", "Low", "ادريانو"),
        t("حسن معاذ", "体育/人物", "Sports / Figure", "低", "Low", "حسن معاذ"),
        t("الفتح", "体育/俱乐部", "Sports / Club", "低", "Low", "الفتح")
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Alkın Solmaz", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Alkın Solmaz"),
        t("İyiKiDoğdun OzanAkbaba", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "İyiKiDoğdun OzanAkbaba"),
        t("Beşiktaş GAİN", "体育/赛事", "Sports / Event", "低", "Low", "Beşiktaş GAİN"),
        t("iOS 27", "科技/发布", "Tech / Release", "低", "Low", "iOS 27"),
        t("iPhone 11", "科技/消费", "Tech / Consumer", "低", "Low", "iPhone 11"),
        t("Michael Olise", "体育/赛事", "Sports / Event", "低", "Low", "Michael Olise"),
        t("Noah Saviolo", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Noah Saviolo"),
        t("Dusan", "体育/赛事", "Sports / Event", "低", "Low", "Dusan"),
        t("Edis", "音乐/明星内容", "Music / Celebrity", "低", "Low", "Edis")
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#ORMxLolaneNatureCodeBotanic", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ORMxLolaneNatureCodeBotanic"),
        t("#EnemiesWithBenefitsEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EnemiesWithBenefitsEP6"),
        t("EWB SIXTH EP", "音乐/发布", "Music / Release", "低", "Low", "EWB SIXTH EP"),
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia"),
        t("PSDFAMILY MOVIE TIME COLONY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "PSDFAMILY MOVIE TIME COLONY"),
        t("#LoveAndPawWithOrmkornnaphat", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LoveAndPawWithOrmkornnaphat"),
        t("LOVE AND PAW X ORM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LOVE AND PAW X ORM"),
        t("APASRA TALKS TILFF 2026", "电影节/红毯/盛典", "Film Festival / Red Carpet / Ceremony", "低", "Low", "APASRA TALKS TILFF 2026"),
        t("#BKKPRIDExYoko", "明星/粉丝活动", "Celebrity / Fan Event", "低", "Low", "BKKPRIDExYoko")
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "BTS、DaouOffroad、Rebecca Armstrong、Prada x Win 与演唱会词优先"],
        ["越南", "ORM x Lolane、Enemies With Benefits、Love And Paw 与 Yoko/TILFF 词优先"],
        ["菲律宾", "BTS、TNT、KAIA、Bench、Bianchella 与泰娱外溢词优先"],
        ["印尼", "BOYNEXTDOOR、Creed、IZNA、Lazada 与餐饮消费词优先"],
        ["沙特", "仅保留体育和少量 UGC/亲子词，金融导流和国际议题全部回避"],
        ["土耳其", "体育、消费电子和娱乐人物可用，司法党派词需严格隔离"]
      ],
      en: [
        ["Thailand", "Prioritize BTS, DaouOffroad, Rebecca Armstrong, Prada x Win, and concert terms"],
        ["Vietnam", "Prioritize ORM x Lolane, Enemies With Benefits, Love And Paw, and Yoko/TILFF terms"],
        ["Philippines", "Prioritize BTS, TNT, KAIA, Bench, Bianchella, and Thai-entertainment spillover terms"],
        ["Indonesia", "Prioritize BOYNEXTDOOR, Creed, IZNA, Lazada, and food-consumer terms"],
        ["Saudi Arabia", "Keep only sports plus a few UGC/kids terms; avoid finance-shill and geopolitical topics"],
        ["Turkey", "Sports, consumer tech, and entertainment figures are usable; isolate legal and partisan trends"]
      ]
    }
  },

  {
    date: "2026-06-05",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/1/", [
        t("#GirlRulesSeriesEP2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KlubMalamBali", "旅行/本地活动", "Travel / Local Event", "低", "Low", "KlubMalamBali", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("lany", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "lany", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Windah Basudara VS Sheggario", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Windah Basudara VS Sheggario", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GFPS PRESSTOUR LOL2026", "旅行/本地活动", "Travel / Local Event", "低", "Low", "GFPS PRESSTOUR LOL2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS THE RETURN IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS THE RETURN IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SBOC STREAMING BATTLE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SBOC STREAMING BATTLE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GF MEGA GALE X SKYNANI", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GF MEGA GALE X SKYNANI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dian Sastro VS Wasa Wirman", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Dian Sastro VS Wasa Wirman", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dilan", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Dilan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/1/", [
        t("#LOLFANFEST2026XDICE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LOLFANFEST2026XDICE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ออมกรณ์นภัสxCandylab", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ออมกรณ์นภัสxCandylab", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เนเน่PreReleaseCrushOnMe", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "เนเน่PreReleaseCrushOnMe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTSxRalphLauren", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BTSxRalphLauren", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA SOTY 2026", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA SOTY 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE04", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SHINING PRIDE CHARLOTTE04", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MABELzNEX", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "MABELzNEX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("COME TO BLESSED UP CONCERT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "COME TO BLESSED UP CONCERT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DICE New Mini Album", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DICE New Mini Album", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JacksonหวังMagicMan2", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JacksonหวังMagicMan2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Orm Kornnaphat", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Orm Kornnaphat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS FOREVER WITH ARMY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS FOREVER WITH ARMY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LOLFANFEST2026XATLAS", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LOLFANFEST2026XATLAS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BETTER TOGETHER VICTORIA", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BETTER TOGETHER VICTORIA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MABEL WISHLIST VIDEO CALL", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MABEL WISHLIST VIDEO CALL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MarckrisinLOVEisForever", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MarckrisinLOVEisForever", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PIXXIE_AH", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "PIXXIE_AH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ด้อมไดซ์อยู่ในlolfanfest", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ด้อมไดซ์อยู่ในlolfanfest", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ARMYs READY FOR BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ARMYs READY FOR BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("The Weeknd", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "The Weeknd", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/1/", [
        t("ENHYPEN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENHYPEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesEP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGENE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGENE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Always_together", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Always_together", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AlwaysWithYou", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "AlwaysWithYou", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PRESAVE WAKASatSIMULA ALBUM", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "PRESAVE WAKASatSIMULA ALBUM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JLForYMagazine", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JLForYMagazine", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JL CAPTURED IN Y PAGES", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JL CAPTURED IN Y PAGES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SAROCHA FLY TO FW 2026", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "SAROCHA FLY TO FW 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PABLO WaS CONCEPT PHOTOS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PABLO WaS CONCEPT PHOTOS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HEATH PROMISING MALE STAR", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HEATH PROMISING MALE STAR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINIKiligFeels OnItsShowtime", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BINIKiligFeels OnItsShowtime", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Marcoleta", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Marcoleta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SO READY FOR MARTSARI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SO READY FOR MARTSARI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OUR STEJAY OUR PRIDE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "OUR STEJAY OUR PRIDE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ASH NEW HAIRKADA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ASH NEW HAIRKADA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINI ALL OUT KILIG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BINI ALL OUT KILIG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/1/", [
        t("#نرفض_استمرار_لودي", "体育/赛事", "Sports / Event", "政治/争议", "Political / Controversy", "نرفض_استمرار_لودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليمن", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "اليمن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الحديده", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "الحديده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AiShow_1M", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "AiShow_1M", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اسرائيل", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "اسرائيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايران", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "ايران", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البحر الاحمر", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "البحر الاحمر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تاليسكا", "体育/赛事", "Sports / Event", "低", "Low", "تاليسكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("لبنان", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "لبنان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تركي المالكي", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "تركي المالكي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البيشي", "体育/赛事", "Sports / Event", "低", "Low", "البيشي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("مالديني", "体育/赛事", "Sports / Event", "低", "Low", "مالديني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("طيور الجنه", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "طيور الجنه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("دفاع جوي", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "دفاع جوي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فلسطين", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "فلسطين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/1/", [
        t("#AlayınızaYunusAkgün", "体育/赛事", "Sports / Event", "低", "Low", "AlayınızaYunusAkgün", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#12DevAdam", "体育/赛事", "Sports / Event", "低", "Low", "12DevAdam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alperen", "体育/赛事", "Sports / Event", "低", "Low", "Alperen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ercan Kayhan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Ercan Kayhan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ergin Ataman", "体育/赛事", "Sports / Event", "低", "Low", "Ergin Ataman", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("cedi", "体育/赛事", "Sports / Event", "低", "Low", "cedi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jokic", "体育/赛事", "Sports / Event", "低", "Low", "Jokic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ÜmitÇapkınYalnızDeğildir", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "ÜmitÇapkınYalnızDeğildir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Larkin", "体育/赛事", "Sports / Event", "低", "Low", "Larkin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KatilTellerKimin", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "KatilTellerKimin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ReseneİptalAileyeHuzur", "综合/待分类", "General / To Classify", "法律/诈骗", "Legal / Fraud", "ReseneİptalAileyeHuzur", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ak Gençlik", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Ak Gençlik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İstanbul Adliyesi'nde", "综合/待分类", "General / To Classify", "法律/诈骗", "Legal / Fraud", "İstanbul Adliyesi'nde", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ARTIK YETER", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "ARTIK YETER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Barış Yarkadaş", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Barış Yarkadaş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("10AylıkEfe Cezaevinde", "综合/待分类", "General / To Classify", "法律/诈骗", "Legal / Fraud", "10AylıkEfe Cezaevinde", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mevlid Kandili", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Mevlid Kandili", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/1/", [
        t("#MayaTVLivexBBFanFest", "品牌活动/消费", "Brand / Consumer", "低", "Low", "MayaTVLivexBBFanFest", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MILKLOVE BB PRESSTOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "MILKLOVE BB PRESSTOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เพลงจนนิรันดร์", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "เพลงจนนิรันดร์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORMKORN MV FOREVER", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ORMKORN MV FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ซิงเกิล5ของนุนิว", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ซิงเกิล5ของนุนิว", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORMKORNNAPHAT FOREVER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ORMKORNNAPHAT FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NINESTAR SHOW IS OVER", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "NINESTAR SHOW IS OVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("The BTC", "综合/待分类", "General / To Classify", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "The BTC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("When Bitcoin", "综合/待分类", "General / To Classify", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "When Bitcoin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUNEW FOREVER IS OUT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NUNEW FOREVER IS OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nhóm Book Đào", "生活方式/社区", "Lifestyle / Community", "低", "Low", "Nhóm Book Đào", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUN SAND AND SECRETS", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUN SAND AND SECRETS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOYOUS CELEBRATION ENGFA16", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JOYOUS CELEBRATION ENGFA16", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Richard Heart", "综合/待分类", "General / To Classify", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "Richard Heart", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Centralized", "综合/待分类", "General / To Classify", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "Centralized", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENDLESS JOY CHARLOTTE16", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENDLESS JOY CHARLOTTE16", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  

  {
    date: "2026-06-04",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/1/", [
        t("#GirlRulesSeriesEP2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KlubMalamBali", "旅行/本地活动", "Travel / Local Event", "低", "Low", "KlubMalamBali", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("lany", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "lany", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Windah Basudara VS Sheggario", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Windah Basudara VS Sheggario", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GFPS PRESSTOUR LOL2026", "旅行/本地活动", "Travel / Local Event", "低", "Low", "GFPS PRESSTOUR LOL2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS THE RETURN IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS THE RETURN IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SBOC STREAMING BATTLE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SBOC STREAMING BATTLE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GF MEGA GALE X SKYNANI", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GF MEGA GALE X SKYNANI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dian Sastro VS Wasa Wirman", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Dian Sastro VS Wasa Wirman", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dilan", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Dilan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/1/", [
        t("#ฉลองนี้มีฮุนได", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ฉลองนี้มีฮุนได", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วุ้นแปลภาษาโบว์เมลดา", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "วุ้นแปลภาษาโบว์เมลดา", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#พิซซ่าที่เดอะมอลล์ไลฟ์สโตร์", "品牌活动/消费", "Brand / Consumer", "低", "Low", "พิซซ่าที่เดอะมอลล์ไลฟ์สโตร์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOLFANFEST2026xDENTISTE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LOLFANFEST2026xDENTISTE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("12AUGUST", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "12AUGUST", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YOURMAGICALLY1stFANMEET", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "YOURMAGICALLY1stFANMEET", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("IIU", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "IIU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THAI1STMEETwithYUNIJ", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "THAI1STMEETwithYUNIJ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MarvelStudios", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MarvelStudios", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Realme14Series5GxBUS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Realme14Series5GxBUS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOLFANFEST2026XPPKRIT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "LOLFANFEST2026XPPKRIT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("วิ่งนี้กับน้องโบว์", "生活方式/社区", "Lifestyle / Community", "低", "Low", "วิ่งนี้กับน้องโบว์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASP.ER TERMINATOR CONCEPT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASP.ER TERMINATOR CONCEPT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOLFANFEST2026XJEFFSATUR", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "LOLFANFEST2026XJEFFSATUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jackson Wang Magic Man 2", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "Jackson Wang Magic Man 2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BLACKLIST PROJECT START", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BLACKLIST PROJECT START", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เนเน่PreReleaseCrushOnMe", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "เนเน่PreReleaseCrushOnMe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOLFANFEST2026XATLAS", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LOLFANFEST2026XATLAS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("แจ็คสันหวัง", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "แจ็คสันหวัง", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ป๊ายปายโอริโอ้", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ป๊ายปายโอริโอ้", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/1/", [
        t("ENHYPEN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENHYPEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesEP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGENE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGENE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Always_together", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Always_together", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AlwaysWithYou", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "AlwaysWithYou", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PRESAVE WAKASatSIMULA ALBUM", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "PRESAVE WAKASatSIMULA ALBUM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JLForYMagazine", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JLForYMagazine", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JL CAPTURED IN Y PAGES", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JL CAPTURED IN Y PAGES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SAROCHA FLY TO FW 2026", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "SAROCHA FLY TO FW 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PABLO WaS CONCEPT PHOTOS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PABLO WaS CONCEPT PHOTOS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HEATH PROMISING MALE STAR", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HEATH PROMISING MALE STAR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINIKiligFeels OnItsShowtime", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BINIKiligFeels OnItsShowtime", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Marcoleta", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Marcoleta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SO READY FOR MARTSARI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SO READY FOR MARTSARI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OUR STEJAY OUR PRIDE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "OUR STEJAY OUR PRIDE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ASH NEW HAIRKADA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ASH NEW HAIRKADA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINI ALL OUT KILIG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BINI ALL OUT KILIG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/1/", [
        t("#نرفض_استمرار_لودي", "体育/赛事", "Sports / Event", "政治/争议", "Political / Controversy", "نرفض_استمرار_لودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليمن", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "اليمن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الحديده", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "الحديده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AiShow_1M", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "AiShow_1M", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اسرائيل", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "اسرائيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايران", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "ايران", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البحر الاحمر", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "البحر الاحمر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تاليسكا", "体育/赛事", "Sports / Event", "低", "Low", "تاليسكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("لبنان", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "لبنان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تركي المالكي", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "تركي المالكي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البيشي", "体育/赛事", "Sports / Event", "低", "Low", "البيشي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("مالديني", "体育/赛事", "Sports / Event", "低", "Low", "مالديني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("طيور الجنه", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "طيور الجنه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("دفاع جوي", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "دفاع جوي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فلسطين", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "فلسطين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/1/", [
        t("#AlayınızaYunusAkgün", "体育/赛事", "Sports / Event", "低", "Low", "AlayınızaYunusAkgün", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#12DevAdam", "体育/赛事", "Sports / Event", "低", "Low", "12DevAdam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alperen", "体育/赛事", "Sports / Event", "低", "Low", "Alperen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ercan Kayhan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Ercan Kayhan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("cedi", "体育/赛事", "Sports / Event", "低", "Low", "cedi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ÜmitÇapkınYalnızDeğildir", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "ÜmitÇapkınYalnızDeğildir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KatilTellerKimin", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "KatilTellerKimin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ReseneİptalAileyeHuzur", "综合/待分类", "General / To Classify", "法律/诈骗", "Legal / Fraud", "ReseneİptalAileyeHuzur", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ak Gençlik", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Ak Gençlik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İstanbul Adliyesi'nde", "综合/待分类", "General / To Classify", "法律/诈骗", "Legal / Fraud", "İstanbul Adliyesi'nde", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ARTIK YETER", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "ARTIK YETER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Barış Yarkadaş", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Barış Yarkadaş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("10AylıkEfe Cezaevinde", "综合/待分类", "General / To Classify", "法律/诈骗", "Legal / Fraud", "10AylıkEfe Cezaevinde", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mevlid Kandili", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Mevlid Kandili", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/1/", [
        t("MILKLOVE BB PRESSTOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "MILKLOVE BB PRESSTOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORMKORN MV FOREVER", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ORMKORN MV FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORMKORNNAPHAT FOREVER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ORMKORNNAPHAT FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NINESTAR SHOW IS OVER", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "NINESTAR SHOW IS OVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("The BTC", "综合/待分类", "General / To Classify", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "The BTC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("When Bitcoin", "综合/待分类", "General / To Classify", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "When Bitcoin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUNEW FOREVER IS OUT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NUNEW FOREVER IS OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nhóm Book Đào", "生活方式/社区", "Lifestyle / Community", "低", "Low", "Nhóm Book Đào", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUN SAND AND SECRETS", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUN SAND AND SECRETS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOYOUS CELEBRATION ENGFA16", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JOYOUS CELEBRATION ENGFA16", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Richard Heart", "综合/待分类", "General / To Classify", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "Richard Heart", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Centralized", "综合/待分类", "General / To Classify", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "Centralized", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENDLESS JOY CHARLOTTE16", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENDLESS JOY CHARLOTTE16", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  

  {
    date: "2026-06-02",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/1/", [
        t("#GirlRulesSeriesEP2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KlubMalamBali", "旅行/本地活动", "Travel / Local Event", "低", "Low", "KlubMalamBali", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GFPS PRESSTOUR LOL2026", "旅行/本地活动", "Travel / Local Event", "低", "Low", "GFPS PRESSTOUR LOL2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS THE RETURN IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS THE RETURN IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/1/", [
        t("#LOLFanFest2026D3", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เก่งไม่พอGOODnotENOUGH_MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "เก่งไม่พอGOODnotENOUGH_MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ไทยช่วยไทยพลัส", "综合/待分类", "General / To Classify", "低", "Low", "ไทยช่วยไทยพลัส", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTSonAMAs", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTSonAMAs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesEP11", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP11", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE MAGNIFICENT26", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE MAGNIFICENT26", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP LIVE BEAUTILAB", "综合/待分类", "General / To Classify", "低", "Low", "KNP LIVE BEAUTILAB", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGLING MV GOOD NOT ENOUGH", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LINGLING MV GOOD NOT ENOUGH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO KATE JELLY FISH", "综合/待分类", "General / To Classify", "低", "Low", "TFO KATE JELLY FISH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN SOLO IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN SOLO IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS PAVED THE WAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS PAVED THE WAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("1ST DUO OF DMD MUSIC", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "1ST DUO OF DMD MUSIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FREE SOUL CHARLOTTE26", "综合/待分类", "General / To Classify", "低", "Low", "FREE SOUL CHARLOTTE26", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA CHEQUERED FLAG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA CHEQUERED FLAG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LYKN MIX FUN", "综合/待分类", "General / To Classify", "低", "Low", "LYKN MIX FUN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN FINISH LINE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PONDPHUWIN FINISH LINE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO DUO DEBUT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TFO DUO DEBUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNSET IN WINTER EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUNSET IN WINTER EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GENTLEMONSTER2026", "综合/待分类", "General / To Classify", "低", "Low", "GENTLEMONSTER2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RENJUN_同谋者的默契", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN_同谋者的默契", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/1/", [
        t("ENHYPEN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENHYPEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesEP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LENAMIU AT CHANEL PFW", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "LENAMIU AT CHANEL PFW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGENE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ENGENE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Always_together", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Always_together", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AlwaysWithYou", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "AlwaysWithYou", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PRESAVE WAKASatSIMULA ALBUM", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "PRESAVE WAKASatSIMULA ALBUM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ChanelFW26xLenaMiu", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ChanelFW26xLenaMiu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("i-land", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "i-land", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA SAME OLD STORY", "综合/待分类", "General / To Classify", "低", "Low", "GIOLUNA SAME OLD STORY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JADEWARD UNSPOKEN TENSION", "综合/待分类", "General / To Classify", "低", "Low", "JADEWARD UNSPOKEN TENSION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Enha", "综合/待分类", "General / To Classify", "低", "Low", "Enha", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JLForYMagazine", "综合/待分类", "General / To Classify", "低", "Low", "JLForYMagazine", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JL CAPTURED IN Y PAGES", "综合/待分类", "General / To Classify", "低", "Low", "JL CAPTURED IN Y PAGES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SAROCHA FLY TO FW 2026", "综合/待分类", "General / To Classify", "低", "Low", "SAROCHA FLY TO FW 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jake", "综合/待分类", "General / To Classify", "低", "Low", "Jake", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PABLO WaS CONCEPT PHOTOS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PABLO WaS CONCEPT PHOTOS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUSTIN PBB ANN1VERSARY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DUSTIN PBB ANN1VERSARY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HEATH PROMISING MALE STAR", "综合/待分类", "General / To Classify", "低", "Low", "HEATH PROMISING MALE STAR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAIR GOALS WITH KAI", "品牌活动/消费", "Brand / Consumer", "低", "Low", "HAIR GOALS WITH KAI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/1/", [
        t("#شي_ودك_فيه", "综合/待分类", "General / To Classify", "低", "Low", "شي_ودك_فيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#نرفض_استمرار_لودي", "体育/赛事", "Sports / Event", "政治/争议", "Political / Controversy", "نرفض_استمرار_لودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليمن", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "اليمن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الحديده", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "الحديده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AiShow_1M", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "AiShow_1M", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#غرد_بشي_تتمناه", "综合/待分类", "General / To Classify", "低", "Low", "غرد_بشي_تتمناه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اسرائيل", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "اسرائيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايران", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "ايران", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد", "综合/待分类", "General / To Classify", "低", "Low", "محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البحر الاحمر", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "البحر الاحمر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تاليسكا", "体育/赛事", "Sports / Event", "低", "Low", "تاليسكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الاحد", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الاحد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("لبنان", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "لبنان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الضرط الصوتي", "综合/待分类", "General / To Classify", "低", "Low", "الضرط الصوتي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("جامعه تبوك", "综合/待分类", "General / To Classify", "低", "Low", "جامعه تبوك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم السبت", "综合/待分类", "General / To Classify", "低", "Low", "اليوم السبت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تركي المالكي", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "تركي المالكي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الدول العربيه", "综合/待分类", "General / To Classify", "低", "Low", "الدول العربيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البيشي", "综合/待分类", "General / To Classify", "低", "Low", "البيشي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("مالديني", "体育/赛事", "Sports / Event", "低", "Low", "مالديني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/1/", [
        t("#AlayınızaYunusAkgün", "体育/赛事", "Sports / Event", "低", "Low", "AlayınızaYunusAkgün", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#12DevAdam", "体育/赛事", "Sports / Event", "低", "Low", "12DevAdam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alperen", "综合/待分类", "General / To Classify", "低", "Low", "Alperen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ercan Kayhan", "综合/待分类", "General / To Classify", "低", "Low", "Ercan Kayhan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ergin Ataman", "体育/赛事", "Sports / Event", "低", "Low", "Ergin Ataman", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("cedi", "体育/赛事", "Sports / Event", "低", "Low", "cedi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jokic", "体育/赛事", "Sports / Event", "低", "Low", "Jokic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ÜmitÇapkınYalnızDeğildir", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "ÜmitÇapkınYalnızDeğildir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Larkin", "体育/赛事", "Sports / Event", "低", "Low", "Larkin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İmparator", "综合/待分类", "General / To Classify", "低", "Low", "İmparator", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KatilTellerKimin", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "KatilTellerKimin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ReseneİptalAileyeHuzur", "综合/待分类", "General / To Classify", "法律/诈骗", "Legal / Fraud", "ReseneİptalAileyeHuzur", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mustafa Can Gül", "综合/待分类", "General / To Classify", "低", "Low", "Mustafa Can Gül", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Berna", "综合/待分类", "General / To Classify", "低", "Low", "Berna", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sırbistan", "体育/赛事", "Sports / Event", "低", "Low", "Sırbistan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alpi", "综合/待分类", "General / To Classify", "低", "Low", "Alpi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Şeytan", "综合/待分类", "General / To Classify", "低", "Low", "Şeytan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İsveç", "综合/待分类", "General / To Classify", "低", "Low", "İsveç", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("milli", "综合/待分类", "General / To Classify", "低", "Low", "milli", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ak Gençlik", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Ak Gençlik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/1/", [
        t("#MayaTVLivexBBFanFest", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MayaTVLivexBBFanFest", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Success", "综合/待分类", "General / To Classify", "低", "Low", "Success", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MILKLOVE BB PRESSTOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "MILKLOVE BB PRESSTOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เพลงจนนิรันดร์", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "เพลงจนนิรันดร์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORMKORN MV FOREVER", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ORMKORN MV FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ซิงเกิล5ของนุนิว", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ซิงเกิล5ของนุนิว", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORMKORNNAPHAT FOREVER", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "ORMKORNNAPHAT FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NINESTAR SHOW IS OVER", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "NINESTAR SHOW IS OVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("The BTC", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "The BTC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("When Bitcoin", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "When Bitcoin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kudos", "综合/待分类", "General / To Classify", "低", "Low", "Kudos", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Greece", "综合/待分类", "General / To Classify", "低", "Low", "Greece", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUNEW FOREVER IS OUT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NUNEW FOREVER IS OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PlanetMojo", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PlanetMojo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MojoMelee", "品牌活动/消费", "Brand / Consumer", "低", "Low", "MojoMelee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nhóm Book Đào", "生活方式/社区", "Lifestyle / Community", "低", "Low", "Nhóm Book Đào", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Switzerland", "综合/待分类", "General / To Classify", "低", "Low", "Switzerland", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUN SAND AND SECRETS", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUN SAND AND SECRETS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOYOUS CELEBRATION ENGFA16", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JOYOUS CELEBRATION ENGFA16", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("United Kingdom", "综合/待分类", "General / To Classify", "低", "Low", "United Kingdom", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  {
    date: "2026-06-01",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/1/", [
        t("#GirlRulesSeriesEP2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KlubMalamBali", "旅行/本地活动", "Travel / Local Event", "低", "Low", "KlubMalamBali", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GFPS PRESSTOUR LOL2026", "旅行/本地活动", "Travel / Local Event", "低", "Low", "GFPS PRESSTOUR LOL2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS THE RETURN IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS THE RETURN IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/1/", [
        t("#LOLFanFest2026D3", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เก่งไม่พอGOODnotENOUGH_MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "เก่งไม่พอGOODnotENOUGH_MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ไทยช่วยไทยพลัส", "综合/待分类", "General / To Classify", "低", "Low", "ไทยช่วยไทยพลัส", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTSonAMAs", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTSonAMAs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesEP11", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP11", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE MAGNIFICENT26", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE MAGNIFICENT26", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP LIVE BEAUTILAB", "综合/待分类", "General / To Classify", "低", "Low", "KNP LIVE BEAUTILAB", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGLING MV GOOD NOT ENOUGH", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LINGLING MV GOOD NOT ENOUGH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO KATE JELLY FISH", "综合/待分类", "General / To Classify", "低", "Low", "TFO KATE JELLY FISH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN SOLO IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN SOLO IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS PAVED THE WAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS PAVED THE WAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("1ST DUO OF DMD MUSIC", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "1ST DUO OF DMD MUSIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FREE SOUL CHARLOTTE26", "综合/待分类", "General / To Classify", "低", "Low", "FREE SOUL CHARLOTTE26", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA CHEQUERED FLAG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA CHEQUERED FLAG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LYKN MIX FUN", "综合/待分类", "General / To Classify", "低", "Low", "LYKN MIX FUN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN FINISH LINE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PONDPHUWIN FINISH LINE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO DUO DEBUT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TFO DUO DEBUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNSET IN WINTER EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUNSET IN WINTER EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GENTLEMONSTER2026", "综合/待分类", "General / To Classify", "低", "Low", "GENTLEMONSTER2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RENJUN_同谋者的默契", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN_同谋者的默契", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/1/", [
        t("ENHYPEN", "综合/待分类", "General / To Classify", "低", "Low", "ENHYPEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesEP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LENAMIU AT CHANEL PFW", "综合/待分类", "General / To Classify", "低", "Low", "LENAMIU AT CHANEL PFW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGENE", "综合/待分类", "General / To Classify", "低", "Low", "ENGENE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Always_together", "综合/待分类", "General / To Classify", "低", "Low", "Always_together", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AlwaysWithYou", "综合/待分类", "General / To Classify", "低", "Low", "AlwaysWithYou", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PRESAVE WAKASatSIMULA ALBUM", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "PRESAVE WAKASatSIMULA ALBUM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ChanelFW26xLenaMiu", "综合/待分类", "General / To Classify", "低", "Low", "ChanelFW26xLenaMiu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("i-land", "综合/待分类", "General / To Classify", "低", "Low", "i-land", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA SAME OLD STORY", "综合/待分类", "General / To Classify", "低", "Low", "GIOLUNA SAME OLD STORY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JADEWARD UNSPOKEN TENSION", "综合/待分类", "General / To Classify", "低", "Low", "JADEWARD UNSPOKEN TENSION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Enha", "综合/待分类", "General / To Classify", "低", "Low", "Enha", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JLForYMagazine", "综合/待分类", "General / To Classify", "低", "Low", "JLForYMagazine", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JL CAPTURED IN Y PAGES", "综合/待分类", "General / To Classify", "低", "Low", "JL CAPTURED IN Y PAGES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SAROCHA FLY TO FW 2026", "综合/待分类", "General / To Classify", "低", "Low", "SAROCHA FLY TO FW 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jake", "综合/待分类", "General / To Classify", "低", "Low", "Jake", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PABLO WaS CONCEPT PHOTOS", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "PABLO WaS CONCEPT PHOTOS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUSTIN PBB ANN1VERSARY", "综合/待分类", "General / To Classify", "低", "Low", "DUSTIN PBB ANN1VERSARY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HEATH PROMISING MALE STAR", "综合/待分类", "General / To Classify", "低", "Low", "HEATH PROMISING MALE STAR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAIR GOALS WITH KAI", "综合/待分类", "General / To Classify", "低", "Low", "HAIR GOALS WITH KAI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/1/", [
        t("#شي_ودك_فيه", "综合/待分类", "General / To Classify", "低", "Low", "شي_ودك_فيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#نرفض_استمرار_لودي", "综合/待分类", "General / To Classify", "低", "Low", "نرفض_استمرار_لودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليمن", "综合/待分类", "General / To Classify", "低", "Low", "اليمن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الحديده", "综合/待分类", "General / To Classify", "低", "Low", "الحديده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AiShow_1M", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "AiShow_1M", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#غرد_بشي_تتمناه", "综合/待分类", "General / To Classify", "低", "Low", "غرد_بشي_تتمناه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اسرائيل", "综合/待分类", "General / To Classify", "低", "Low", "اسرائيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايران", "综合/待分类", "General / To Classify", "低", "Low", "ايران", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد", "综合/待分类", "General / To Classify", "低", "Low", "محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البحر الاحمر", "综合/待分类", "General / To Classify", "低", "Low", "البحر الاحمر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تاليسكا", "综合/待分类", "General / To Classify", "低", "Low", "تاليسكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الاحد", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الاحد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("لبنان", "综合/待分类", "General / To Classify", "低", "Low", "لبنان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الضرط الصوتي", "综合/待分类", "General / To Classify", "低", "Low", "الضرط الصوتي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("جامعه تبوك", "综合/待分类", "General / To Classify", "低", "Low", "جامعه تبوك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم السبت", "综合/待分类", "General / To Classify", "低", "Low", "اليوم السبت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تركي المالكي", "综合/待分类", "General / To Classify", "低", "Low", "تركي المالكي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الدول العربيه", "综合/待分类", "General / To Classify", "低", "Low", "الدول العربيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البيشي", "综合/待分类", "General / To Classify", "低", "Low", "البيشي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("مالديني", "综合/待分类", "General / To Classify", "低", "Low", "مالديني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/1/", [
        t("#AlayınızaYunusAkgün", "综合/待分类", "General / To Classify", "低", "Low", "AlayınızaYunusAkgün", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#12DevAdam", "综合/待分类", "General / To Classify", "低", "Low", "12DevAdam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alperen", "综合/待分类", "General / To Classify", "低", "Low", "Alperen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ercan Kayhan", "综合/待分类", "General / To Classify", "低", "Low", "Ercan Kayhan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ergin Ataman", "综合/待分类", "General / To Classify", "低", "Low", "Ergin Ataman", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("cedi", "综合/待分类", "General / To Classify", "低", "Low", "cedi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jokic", "综合/待分类", "General / To Classify", "低", "Low", "Jokic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ÜmitÇapkınYalnızDeğildir", "综合/待分类", "General / To Classify", "低", "Low", "ÜmitÇapkınYalnızDeğildir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Larkin", "综合/待分类", "General / To Classify", "低", "Low", "Larkin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İmparator", "综合/待分类", "General / To Classify", "低", "Low", "İmparator", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KatilTellerKimin", "综合/待分类", "General / To Classify", "低", "Low", "KatilTellerKimin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ReseneİptalAileyeHuzur", "综合/待分类", "General / To Classify", "低", "Low", "ReseneİptalAileyeHuzur", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mustafa Can Gül", "综合/待分类", "General / To Classify", "低", "Low", "Mustafa Can Gül", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Berna", "综合/待分类", "General / To Classify", "低", "Low", "Berna", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sırbistan", "综合/待分类", "General / To Classify", "低", "Low", "Sırbistan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alpi", "综合/待分类", "General / To Classify", "低", "Low", "Alpi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Şeytan", "综合/待分类", "General / To Classify", "低", "Low", "Şeytan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İsveç", "综合/待分类", "General / To Classify", "低", "Low", "İsveç", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("milli", "综合/待分类", "General / To Classify", "低", "Low", "milli", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ak Gençlik", "综合/待分类", "General / To Classify", "低", "Low", "Ak Gençlik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/1/", [
        t("#MayaTVLivexBBFanFest", "综合/待分类", "General / To Classify", "低", "Low", "MayaTVLivexBBFanFest", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Success", "综合/待分类", "General / To Classify", "低", "Low", "Success", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MILKLOVE BB PRESSTOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "MILKLOVE BB PRESSTOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เพลงจนนิรันดร์", "综合/待分类", "General / To Classify", "低", "Low", "เพลงจนนิรันดร์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORMKORN MV FOREVER", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ORMKORN MV FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ซิงเกิล5ของนุนิว", "综合/待分类", "General / To Classify", "低", "Low", "ซิงเกิล5ของนุนิว", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORMKORNNAPHAT FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "ORMKORNNAPHAT FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NINESTAR SHOW IS OVER", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "NINESTAR SHOW IS OVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("The BTC", "综合/待分类", "General / To Classify", "低", "Low", "The BTC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("When Bitcoin", "综合/待分类", "General / To Classify", "低", "Low", "When Bitcoin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kudos", "综合/待分类", "General / To Classify", "低", "Low", "Kudos", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Greece", "综合/待分类", "General / To Classify", "低", "Low", "Greece", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUNEW FOREVER IS OUT", "综合/待分类", "General / To Classify", "低", "Low", "NUNEW FOREVER IS OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PlanetMojo", "综合/待分类", "General / To Classify", "低", "Low", "PlanetMojo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MojoMelee", "综合/待分类", "General / To Classify", "低", "Low", "MojoMelee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nhóm Book Đào", "综合/待分类", "General / To Classify", "低", "Low", "Nhóm Book Đào", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Switzerland", "综合/待分类", "General / To Classify", "低", "Low", "Switzerland", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUN SAND AND SECRETS", "综合/待分类", "General / To Classify", "低", "Low", "SUN SAND AND SECRETS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOYOUS CELEBRATION ENGFA16", "综合/待分类", "General / To Classify", "低", "Low", "JOYOUS CELEBRATION ENGFA16", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("United Kingdom", "综合/待分类", "General / To Classify", "低", "Low", "United Kingdom", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-05-31",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("Arsenal", "综合/待分类", "General / To Classify", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TicketToHeavenEP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arteta", "综合/待分类", "General / To Classify", "低", "Low", "Arteta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH TTH PREMIERE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GEMINIFOURTH TTH PREMIERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#ทําบุญขึ้นบ้านใหม่นุนิว", "综合/待分类", "General / To Classify", "低", "Low", "ทําบุญขึ้นบ้านใหม่นุนิว", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RoyalMirageNgernOat", "综合/待分类", "General / To Classify", "低", "Low", "RoyalMirageNgernOat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#OFFROADSONGDIARYFANSIGN", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "OFFROADSONGDIARYFANSIGN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SHEEPxPOLCASAN", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SHEEPxPOLCASAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SR_YINWAR2NDFANSIGN", "综合/待分类", "General / To Classify", "低", "Low", "SR_YINWAR2NDFANSIGN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER DIRECT OUR MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER DIRECT OUR MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MR FANBOY Q16", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MR FANBOY Q16", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE AIR HIDDEN HEART", "综合/待分类", "General / To Classify", "低", "Low", "THE AIR HIDDEN HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WALK AND RUN WITH APO", "综合/待分类", "General / To Classify", "低", "Low", "WALK AND RUN WITH APO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WIN WITH SIAN RANG", "综合/待分类", "General / To Classify", "低", "Low", "WIN WITH SIAN RANG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE MAGNIFICENT31", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE MAGNIFICENT31", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("París", "综合/待分类", "General / To Classify", "低", "Low", "París", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FLOWER BOY EP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "FLOWER BOY EP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MADAME FIN X FAYEATOM LIVE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "MADAME FIN X FAYEATOM LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Crazy Love MooMoo EP4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Crazy Love MooMoo EP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVMUSICONSINGAPOREDAY2", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREDAY2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NuNew", "综合/待分类", "General / To Classify", "低", "Low", "NuNew", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MAXKY1stFANSIGN", "综合/待分类", "General / To Classify", "低", "Low", "MAXKY1stFANSIGN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LINGORMBirthdayFanParty", "综合/待分类", "General / To Classify", "低", "Low", "LINGORMBirthdayFanParty", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#FriendlyMexKonginHKTD2", "综合/待分类", "General / To Classify", "低", "Low", "FriendlyMexKonginHKTD2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#MGIAllStars", "综合/待分类", "General / To Classify", "低", "Low", "MGIAllStars", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("spurs", "综合/待分类", "General / To Classify", "低", "Low", "spurs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Gazini", "综合/待分类", "General / To Classify", "低", "Low", "Gazini", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TicketToHeavenEP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KAOGMAhanWithBINI", "综合/待分类", "General / To Classify", "低", "Low", "KAOGMAhanWithBINI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRAND SUITE TIME WITH AZRALPH", "综合/待分类", "General / To Classify", "低", "Low", "GRAND SUITE TIME WITH AZRALPH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SULFUR UNLEASHES LIVE", "综合/待分类", "General / To Classify", "低", "Low", "SULFUR UNLEASHES LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SulfurByFELIP", "综合/待分类", "General / To Classify", "低", "Low", "SulfurByFELIP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SecretsOfRazzlesHotelRevealed", "综合/待分类", "General / To Classify", "低", "Low", "SecretsOfRazzlesHotelRevealed", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE AIR HIDDEN HEART", "综合/待分类", "General / To Classify", "低", "Low", "THE AIR HIDDEN HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Lupita", "综合/待分类", "General / To Classify", "低", "Low", "Lupita", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH TTH PREMIERE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GEMINIFOURTH TTH PREMIERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHET", "综合/待分类", "General / To Classify", "低", "Low", "CHET", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OWN THE MOMENT SB19", "综合/待分类", "General / To Classify", "低", "Low", "OWN THE MOMENT SB19", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ghana", "综合/待分类", "General / To Classify", "低", "Low", "Ghana", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SULFUR RISING", "综合/待分类", "General / To Classify", "低", "Low", "SULFUR RISING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARMELLE FIRST HONOR SERIES", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "CARMELLE FIRST HONOR SERIES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NEW WAV D-1 POSTER", "综合/待分类", "General / To Classify", "低", "Low", "NEW WAV D-1 POSTER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arsenal", "综合/待分类", "General / To Classify", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MADAME FIN X FAYEATOM LIVE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "MADAME FIN X FAYEATOM LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#وقتك_بالاستغفار", "综合/待分类", "General / To Classify", "低", "Low", "وقتك_بالاستغفار", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ExtendJaissleUntil2o30", "综合/待分类", "General / To Classify", "低", "Low", "ExtendJaissleUntil2o30", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#نجاح_موسم_الحج", "综合/待分类", "General / To Classify", "低", "Low", "نجاح_موسم_الحج", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#خروج_سندي_مطلب_الجمهور", "综合/待分类", "General / To Classify", "低", "Low", "خروج_سندي_مطلب_الجمهور", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#اطلب_من_التشاليح__والورش", "综合/待分类", "General / To Classify", "低", "Low", "اطلب_من_التشاليح__والورش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كلوب", "综合/待分类", "General / To Classify", "低", "Low", "كلوب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد", "综合/待分类", "General / To Classify", "低", "Low", "محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("نجاح موسم", "综合/待分类", "General / To Classify", "低", "Low", "نجاح موسم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("برنامج الزواج", "综合/待分类", "General / To Classify", "低", "Low", "برنامج الزواج", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("باريس", "综合/待分类", "General / To Classify", "低", "Low", "باريس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("برشلونة", "综合/待分类", "General / To Classify", "低", "Low", "برشلونة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التميز المالي", "综合/待分类", "General / To Classify", "低", "Low", "التميز المالي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بخاخ النشا", "综合/待分类", "General / To Classify", "低", "Low", "بخاخ النشا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التفوق الاقتصادي", "综合/待分类", "General / To Classify", "低", "Low", "التفوق الاقتصادي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عمان", "综合/待分类", "General / To Classify", "低", "Low", "عمان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاعمال المزدهره", "综合/待分类", "General / To Classify", "低", "Low", "الاعمال المزدهره", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الفاريز", "综合/待分类", "General / To Classify", "低", "Low", "الفاريز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الخطط الرابحه", "综合/待分类", "General / To Classify", "低", "Low", "الخطط الرابحه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاتحاد", "综合/待分类", "General / To Classify", "低", "Low", "الاتحاد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اتلتيكو", "综合/待分类", "General / To Classify", "低", "Low", "اتلتيكو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Crystal Palace", "综合/待分类", "General / To Classify", "低", "Low", "Crystal Palace", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MedyaKritik", "综合/待分类", "General / To Classify", "低", "Low", "MedyaKritik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Treat_SevEN_With_Dignity", "综合/待分类", "General / To Classify", "低", "Low", "Treat_SevEN_With_Dignity", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BELIFT_Boycott_Continues", "综合/待分类", "General / To Classify", "低", "Low", "BELIFT_Boycott_Continues", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ÇYDD", "综合/待分类", "General / To Classify", "低", "Low", "ÇYDD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fenerbahçe Başkanı", "综合/待分类", "General / To Classify", "低", "Low", "Fenerbahçe Başkanı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rayo Vallecano'yu 1-0", "综合/待分类", "General / To Classify", "低", "Low", "Rayo Vallecano'yu 1-0", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sembolik", "综合/待分类", "General / To Classify", "低", "Low", "Sembolik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Oliver Glasner", "综合/待分类", "General / To Classify", "低", "Low", "Oliver Glasner", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Necati Özel", "综合/待分类", "General / To Classify", "低", "Low", "Necati Özel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nadir", "综合/待分类", "General / To Classify", "低", "Low", "Nadir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("UEFA Konferans Ligi", "综合/待分类", "General / To Classify", "低", "Low", "UEFA Konferans Ligi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aziz İhsan Aktaş", "综合/待分类", "General / To Classify", "低", "Low", "Aziz İhsan Aktaş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sokak Röportajı", "综合/待分类", "General / To Classify", "低", "Low", "Sokak Röportajı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hülya Avşar", "综合/待分类", "General / To Classify", "低", "Low", "Hülya Avşar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#UECLfinal", "综合/待分类", "General / To Classify", "低", "Low", "UECLfinal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TCK158TekSeferlikUzlaşmaŞart", "综合/待分类", "General / To Classify", "法律/诈骗", "Legal / Fraud", "TCK158TekSeferlikUzlaşmaŞart", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nedim", "综合/待分类", "General / To Classify", "低", "Low", "Nedim", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Haram", "综合/待分类", "General / To Classify", "低", "Low", "Haram", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("gordon", "综合/待分类", "General / To Classify", "低", "Low", "gordon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("Chủ Nhật", "综合/待分类", "General / To Classify", "低", "Low", "Chủ Nhật", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cười", "综合/待分类", "General / To Classify", "低", "Low", "Cười", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arsenal", "综合/待分类", "General / To Classify", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVMUSICONSINGAPOREDAY1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREDAY1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Chao", "综合/待分类", "General / To Classify", "低", "Low", "Chao", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER 1ST MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER 1ST MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NTF 1ST ANNIV BIOACTIVE", "综合/待分类", "General / To Classify", "低", "Low", "NTF 1ST ANNIV BIOACTIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BioActivexNamtanFilm", "综合/待分类", "General / To Classify", "低", "Low", "BioActivexNamtanFilm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KhemjirainVietnam", "综合/待分类", "General / To Classify", "低", "Low", "KhemjirainVietnam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#FREENinVietnam2026", "综合/待分类", "General / To Classify", "低", "Low", "FREENinVietnam2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AQUA PRINCE KEONHO", "综合/待分类", "General / To Classify", "低", "Low", "AQUA PRINCE KEONHO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAMES RADIATES IN PRADA", "综合/待分类", "General / To Classify", "低", "Low", "JAMES RADIATES IN PRADA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เสน่หาวาโยตอนที่3", "综合/待分类", "General / To Classify", "低", "Low", "เสน่หาวาโยตอนที่3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE AIR HIDDEN HEART", "综合/待分类", "General / To Classify", "低", "Low", "THE AIR HIDDEN HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Intelligence Card", "综合/待分类", "General / To Classify", "低", "Low", "Intelligence Card", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SAROCHA FAN MEETING IN VN", "综合/待分类", "General / To Classify", "低", "Low", "SAROCHA FAN MEETING IN VN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM IN LOVE FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM IN LOVE FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MC MARTIN ON THE MIC", "综合/待分类", "General / To Classify", "低", "Low", "MC MARTIN ON THE MIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tron", "综合/待分类", "General / To Classify", "低", "Low", "Tron", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("París", "综合/待分类", "General / To Classify", "低", "Low", "París", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-05-30",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#TicketToHeavenEP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH TTH PREMIERE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GEMINIFOURTH TTH PREMIERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVMUSICONSINGAPOREDAY1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREDAY1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER 1ST MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER 1ST MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arsenal", "综合/待分类", "General / To Classify", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GAWIN MUSICON IN SG D1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GAWIN MUSICON IN SG D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LYKN MUSICON SG D1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LYKN MUSICON SG D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#TicketToHeavenEP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVMUSICONSINGAPOREDAY1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREDAY1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PaseoTHwithCharlotte", "综合/待分类", "General / To Classify", "低", "Low", "PaseoTHwithCharlotte", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BUS_THEFIRSTLIGHTinTOKYO", "综合/待分类", "General / To Classify", "低", "Low", "BUS_THEFIRSTLIGHTinTOKYO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BirdyBaristaxPHUWIN", "综合/待分类", "General / To Classify", "低", "Low", "BirdyBaristaxPHUWIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TOPSHOME BABYFAIR W CL", "旅行/本地活动", "Travel / Local Event", "低", "Low", "TOPSHOME BABYFAIR W CL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BIOACTIVE 1ST ANNIVERSARY", "综合/待分类", "General / To Classify", "低", "Low", "BIOACTIVE 1ST ANNIVERSARY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER 1ST MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER 1ST MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TTP HAPPY KATSUYA BY UOB", "综合/待分类", "General / To Classify", "低", "Low", "TTP HAPPY KATSUYA BY UOB", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PAPANONGSEA AVOCEAN DANCING", "综合/待分类", "General / To Classify", "低", "Low", "PAPANONGSEA AVOCEAN DANCING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LYKN MUSICON SG D1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LYKN MUSICON SG D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BOOK X URANUS CNX", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BOOK X URANUS CNX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUUI WITH DUNK", "综合/待分类", "General / To Classify", "低", "Low", "NUUI WITH DUNK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH TTH PREMIERE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GEMINIFOURTH TTH PREMIERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GAWIN MUSICON IN SG D1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GAWIN MUSICON IN SG D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BUS 1ST FANCON JP", "综合/待分类", "General / To Classify", "低", "Low", "BUS 1ST FANCON JP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHUAHAHSENG X TRE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CHUAHAHSENG X TRE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAM IN HOCHIMINH", "综合/待分类", "General / To Classify", "低", "Low", "JAM IN HOCHIMINH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DAOU LIMITLESS EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DAOU LIMITLESS EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mandalorian X DEWTEE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Mandalorian X DEWTEE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("LINGORM IN LOVE FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM IN LOVE FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วาดฝันวันวิวาห์OfficialTeaser", "综合/待分类", "General / To Classify", "低", "Low", "วาดฝันวันวิวาห์OfficialTeaser", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CentralPattanaxLenaMiu", "综合/待分类", "General / To Classify", "低", "Low", "CentralPattanaxLenaMiu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Namjoon", "综合/待分类", "General / To Classify", "低", "Low", "Namjoon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("2 DAYS TO NEW WAV", "综合/待分类", "General / To Classify", "低", "Low", "2 DAYS TO NEW WAV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Hiraya", "综合/待分类", "General / To Classify", "低", "Low", "Hiraya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BingoPlus", "综合/待分类", "General / To Classify", "低", "Low", "BingoPlus", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TAGNATIONwithALDEN", "综合/待分类", "General / To Classify", "低", "Low", "TAGNATIONwithALDEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALDEN MAROON 5K", "综合/待分类", "General / To Classify", "低", "Low", "ALDEN MAROON 5K", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PBBGen11", "综合/待分类", "General / To Classify", "低", "Low", "PBBGen11", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Samahan", "综合/待分类", "General / To Classify", "低", "Low", "Samahan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TIN", "综合/待分类", "General / To Classify", "低", "Low", "TIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AdiosDuliTaping", "综合/待分类", "General / To Classify", "低", "Low", "AdiosDuliTaping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ELDEN", "综合/待分类", "General / To Classify", "低", "Low", "ELDEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KapoPeroKarylle", "综合/待分类", "General / To Classify", "低", "Low", "KapoPeroKarylle", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WAVE TO EARTH MANILA", "综合/待分类", "General / To Classify", "低", "Low", "WAVE TO EARTH MANILA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CBKMiming", "综合/待分类", "General / To Classify", "低", "Low", "CBKMiming", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SADBOYSFORREAL", "综合/待分类", "General / To Classify", "低", "Low", "SADBOYSFORREAL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PrincessCharming", "综合/待分类", "General / To Classify", "低", "Low", "PrincessCharming", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KCLAWARDS2026xYOKO", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "KCLAWARDS2026xYOKO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#وقتك_بالاستغفار", "综合/待分类", "General / To Classify", "低", "Low", "وقتك_بالاستغفار", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#جمعة_مباركة", "综合/待分类", "General / To Classify", "低", "Low", "جمعة_مباركة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#رابطة_الهلال", "综合/待分类", "General / To Classify", "低", "Low", "رابطة_الهلال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#سوريا", "综合/待分类", "General / To Classify", "低", "Low", "سوريا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#القمة", "综合/待分类", "General / To Classify", "低", "Low", "القمة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الرابط", "综合/待分类", "General / To Classify", "低", "Low", "الرابط", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الخيل", "综合/待分类", "General / To Classify", "低", "Low", "الخيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ساعة_استجابة", "综合/待分类", "General / To Classify", "低", "Low", "ساعة_استجابة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#صباح_الخير", "综合/待分类", "General / To Classify", "低", "Low", "صباح_الخير", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تكنولوجيا", "综合/待分类", "General / To Classify", "低", "Low", "تكنولوجيا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#جدة", "综合/待分类", "General / To Classify", "低", "Low", "جدة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#مقالات", "综合/待分类", "General / To Classify", "低", "Low", "مقالات", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#سحر", "综合/待分类", "General / To Classify", "低", "Low", "سحر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عيد_الاضحي_المبارك", "综合/待分类", "General / To Classify", "低", "Low", "عيد_الاضحي_المبارك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#فضفضة", "综合/待分类", "General / To Classify", "低", "Low", "فضفضة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("استغفار", "综合/待分类", "General / To Classify", "低", "Low", "استغفار", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اللهم صل وسلم على نبينا محمد", "综合/待分类", "General / To Classify", "低", "Low", "اللهم صل وسلم على نبينا محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("يارب", "综合/待分类", "General / To Classify", "低", "Low", "يارب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("دعاء", "综合/待分类", "General / To Classify", "低", "Low", "دعاء", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اذكار", "综合/待分类", "General / To Classify", "低", "Low", "اذكار", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Crystal Palace", "综合/待分类", "General / To Classify", "低", "Low", "Crystal Palace", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MedyaKritik", "综合/待分类", "General / To Classify", "低", "Low", "MedyaKritik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Treat_SevEN_With_Dignity", "综合/待分类", "General / To Classify", "低", "Low", "Treat_SevEN_With_Dignity", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BELIFT_Boycott_Continues", "综合/待分类", "General / To Classify", "低", "Low", "BELIFT_Boycott_Continues", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ÇYDD", "综合/待分类", "General / To Classify", "低", "Low", "ÇYDD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fenerbahçe Başkanı", "综合/待分类", "General / To Classify", "低", "Low", "Fenerbahçe Başkanı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rayo Vallecano'yu 1-0", "综合/待分类", "General / To Classify", "低", "Low", "Rayo Vallecano'yu 1-0", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sembolik", "综合/待分类", "General / To Classify", "低", "Low", "Sembolik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Oliver Glasner", "综合/待分类", "General / To Classify", "低", "Low", "Oliver Glasner", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Necati Özel", "综合/待分类", "General / To Classify", "低", "Low", "Necati Özel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nadir", "综合/待分类", "General / To Classify", "低", "Low", "Nadir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("UEFA Konferans Ligi", "综合/待分类", "General / To Classify", "低", "Low", "UEFA Konferans Ligi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aziz İhsan Aktaş", "综合/待分类", "General / To Classify", "低", "Low", "Aziz İhsan Aktaş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sokak Röportajı", "综合/待分类", "General / To Classify", "低", "Low", "Sokak Röportajı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hülya Avşar", "综合/待分类", "General / To Classify", "低", "Low", "Hülya Avşar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#UECLfinal", "综合/待分类", "General / To Classify", "低", "Low", "UECLfinal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TCK158TekSeferlikUzlaşmaŞart", "综合/待分类", "General / To Classify", "法律/诈骗", "Legal / Fraud", "TCK158TekSeferlikUzlaşmaŞart", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nedim", "综合/待分类", "General / To Classify", "低", "Low", "Nedim", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Haram", "综合/待分类", "General / To Classify", "低", "Low", "Haram", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("gordon", "综合/待分类", "General / To Classify", "低", "Low", "gordon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("Luận", "综合/待分类", "General / To Classify", "低", "Low", "Luận", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mach", "综合/待分类", "General / To Classify", "低", "Low", "Mach", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Eid Mubarak", "综合/待分类", "General / To Classify", "低", "Low", "Eid Mubarak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TwentyFourRisingOrm", "综合/待分类", "General / To Classify", "低", "Low", "TwentyFourRisingOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KEEP THE LIGHT ORM", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KEEP THE LIGHT ORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DAOU CHACHA KV", "综合/待分类", "General / To Classify", "低", "Low", "DAOU CHACHA KV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ช้าช้าต้าห์อู๋", "综合/待分类", "General / To Classify", "低", "Low", "ช้าช้าต้าห์อู๋", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KCLAWARDS2026xYOKO", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "KCLAWARDS2026xYOKO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#24thBDwishForOrm", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "24thBDwishForOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YOUTHFUL CHARM AHN KEONHO", "综合/待分类", "General / To Classify", "低", "Low", "YOUTHFUL CHARM AHN KEONHO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kickstart", "综合/待分类", "General / To Classify", "低", "Low", "Kickstart", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#sasiKaoPROXIEKengNamping", "综合/待分类", "General / To Classify", "低", "Low", "sasiKaoPROXIEKengNamping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("M-TP ERA BEGINS", "综合/待分类", "General / To Classify", "低", "Low", "M-TP ERA BEGINS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("COME MY WAY OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "COME MY WAY OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARTIN SERVES YSL LOOKS", "综合/待分类", "General / To Classify", "低", "Low", "MARTIN SERVES YSL LOOKS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRAND GRAND SALES LENA MIU", "综合/待分类", "General / To Classify", "低", "Low", "GRAND GRAND SALES LENA MIU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP FACE OF SASI", "综合/待分类", "General / To Classify", "低", "Low", "KNP FACE OF SASI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cách", "综合/待分类", "General / To Classify", "低", "Low", "Cách", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("STO Chain", "综合/待分类", "General / To Classify", "低", "Low", "STO Chain", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP AT KCLA2026", "综合/待分类", "General / To Classify", "低", "Low", "KNP AT KCLA2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },


  {
    date: "2026-05-29",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#DiveIntoJossGawinConcert", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "DiveIntoJossGawinConcert", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cetak Leader Masa Depan", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Cetak Leader Masa Depan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN SOLO OUT NOW", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN SOLO OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKY TRAVEL WITH DYSON", "旅行/本地活动", "Travel / Local Event", "低", "Low", "SKY TRAVEL WITH DYSON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#TENCORE0110iscalling", "综合/待分类", "General / To Classify", "低", "Low", "TENCORE0110iscalling", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#sasiKaoPROXIEKengNamping", "综合/待分类", "General / To Classify", "低", "Low", "sasiKaoPROXIEKengNamping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE MAGNIFICENT29", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE MAGNIFICENT29", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KCL2026xTleFirstone", "综合/待分类", "General / To Classify", "低", "Low", "KCL2026xTleFirstone", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO AT KCLAWARDS26", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "TFO AT KCLAWARDS26", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP FACE OF SASI", "综合/待分类", "General / To Classify", "低", "Low", "KNP FACE OF SASI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#สอดสร้อยมาลาEP12", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "สอดสร้อยมาลาEP12", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เก่งน้ําปิงคมชัดลึกครั้งที่22", "综合/待分类", "General / To Classify", "低", "Low", "เก่งน้ําปิงคมชัดลึกครั้งที่22", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FREE SOUL CHARLOTTE29", "综合/待分类", "General / To Classify", "低", "Low", "FREE SOUL CHARLOTTE29", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP AT KCLA2026", "综合/待分类", "General / To Classify", "低", "Low", "KNP AT KCLA2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CLEAR MISSION WITH TFO", "综合/待分类", "General / To Classify", "低", "Low", "CLEAR MISSION WITH TFO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUBU JUB MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JUBU JUB MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO MUSIC SPOILER", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TFO MUSIC SPOILER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EVERLASTING BLOOM ENGLOT29", "综合/待分类", "General / To Classify", "低", "Low", "EVERLASTING BLOOM ENGLOT29", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BE MY PLAYER TWO Q13", "综合/待分类", "General / To Classify", "低", "Low", "BE MY PLAYER TWO Q13", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GROGU with NUTHONG", "综合/待分类", "General / To Classify", "低", "Low", "GROGU with NUTHONG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DAOU CHACHA KV", "综合/待分类", "General / To Classify", "低", "Low", "DAOU CHACHA KV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEEPOR NIGHT ICON KCL", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TEETEEPOR NIGHT ICON KCL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LATELY ITS WINTER SEASON EP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LATELY ITS WINTER SEASON EP3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRAND GRAND SALES LENA MIU", "综合/待分类", "General / To Classify", "低", "Low", "GRAND GRAND SALES LENA MIU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("LINGORM IN LOVE FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM IN LOVE FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วาดฝันวันวิวาห์OfficialTeaser", "综合/待分类", "General / To Classify", "低", "Low", "วาดฝันวันวิวาห์OfficialTeaser", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CentralPattanaxLenaMiu", "综合/待分类", "General / To Classify", "低", "Low", "CentralPattanaxLenaMiu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Namjoon", "综合/待分类", "General / To Classify", "低", "Low", "Namjoon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("3 DAYS TO NEW WAV", "综合/待分类", "General / To Classify", "低", "Low", "3 DAYS TO NEW WAV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BGYO_ForeverTonight", "综合/待分类", "General / To Classify", "低", "Low", "BGYO_ForeverTonight", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOREVER TONIGHT GELO", "综合/待分类", "General / To Classify", "低", "Low", "FOREVER TONIGHT GELO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MAHIKA ALBUM OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "MAHIKA ALBUM OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NIKE X BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "NIKE X BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DatingAlysPerezMediaCon", "综合/待分类", "General / To Classify", "低", "Low", "DatingAlysPerezMediaCon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ANGELA CEO DAY", "综合/待分类", "General / To Classify", "低", "Low", "ANGELA CEO DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MGIAllStars", "综合/待分类", "General / To Classify", "低", "Low", "MGIAllStars", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Azzi", "综合/待分类", "General / To Classify", "低", "Low", "Azzi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARTSARI IKAW ANG PAHINGA", "综合/待分类", "General / To Classify", "低", "Low", "MARTSARI IKAW ANG PAHINGA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILBERT AT KAOGMA FESTIVAL", "旅行/本地活动", "Travel / Local Event", "低", "Low", "WILBERT AT KAOGMA FESTIVAL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GINNY JAYNA", "综合/待分类", "General / To Classify", "低", "Low", "GINNY JAYNA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DRALY2 FlipTheScript", "综合/待分类", "General / To Classify", "低", "Low", "DRALY2 FlipTheScript", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bangtan", "综合/待分类", "General / To Classify", "低", "Low", "Bangtan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jess", "综合/待分类", "General / To Classify", "低", "Low", "Jess", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINE MAN x Wave", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LINE MAN x Wave", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#عيد_مبارك", "综合/待分类", "General / To Classify", "低", "Low", "عيد_مبارك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#خادم_الحرمين_الشريفين", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "خادم_الحرمين_الشريفين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ولي_العهد", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "ولي_العهد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عيد_الاضحي_المبارك", "综合/待分类", "General / To Classify", "低", "Low", "عيد_الاضحي_المبارك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#كل_عام_وانتم_بخير", "综合/待分类", "General / To Classify", "低", "Low", "كل_عام_وانتم_بخير", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("صالح الاعمال", "综合/待分类", "General / To Classify", "低", "Low", "صالح الاعمال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("شباب البومب", "综合/待分类", "General / To Classify", "低", "Low", "شباب البومب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عيد سعيد", "综合/待分类", "General / To Classify", "低", "Low", "عيد سعيد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العايدين الفايزين", "综合/待分类", "General / To Classify", "低", "Low", "العايدين الفايزين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("علي التمام", "综合/待分类", "General / To Classify", "低", "Low", "علي التمام", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("لويس ميلا", "综合/待分类", "General / To Classify", "低", "Low", "لويس ميلا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الامه الاسلاميه", "综合/待分类", "General / To Classify", "低", "Low", "الامه الاسلاميه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الفضيل", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الفضيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الفردوس الاعلي", "综合/待分类", "General / To Classify", "低", "Low", "الفردوس الاعلي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم العظيم", "综合/待分类", "General / To Classify", "低", "Low", "اليوم العظيم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("والي الشعب السعودي الكريم", "综合/待分类", "General / To Classify", "低", "Low", "والي الشعب السعودي الكريم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("حجاج الداخل", "综合/待分类", "General / To Classify", "低", "Low", "حجاج الداخل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عيد فرح", "综合/待分类", "General / To Classify", "低", "Low", "عيد فرح", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("رياض الجنه", "综合/待分类", "General / To Classify", "低", "Low", "رياض الجنه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("القهوه السعوديه", "综合/待分类", "General / To Classify", "低", "Low", "القهوه السعوديه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Crystal Palace", "综合/待分类", "General / To Classify", "低", "Low", "Crystal Palace", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MedyaKritik", "综合/待分类", "General / To Classify", "低", "Low", "MedyaKritik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Treat_SevEN_With_Dignity", "综合/待分类", "General / To Classify", "低", "Low", "Treat_SevEN_With_Dignity", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BELIFT_Boycott_Continues", "综合/待分类", "General / To Classify", "低", "Low", "BELIFT_Boycott_Continues", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ÇYDD", "综合/待分类", "General / To Classify", "低", "Low", "ÇYDD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fenerbahçe Başkanı", "综合/待分类", "General / To Classify", "低", "Low", "Fenerbahçe Başkanı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rayo Vallecano'yu 1-0", "综合/待分类", "General / To Classify", "低", "Low", "Rayo Vallecano'yu 1-0", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sembolik", "综合/待分类", "General / To Classify", "低", "Low", "Sembolik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Oliver Glasner", "综合/待分类", "General / To Classify", "低", "Low", "Oliver Glasner", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Necati Özel", "综合/待分类", "General / To Classify", "低", "Low", "Necati Özel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nadir", "综合/待分类", "General / To Classify", "低", "Low", "Nadir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("UEFA Konferans Ligi", "综合/待分类", "General / To Classify", "低", "Low", "UEFA Konferans Ligi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aziz İhsan Aktaş", "综合/待分类", "General / To Classify", "低", "Low", "Aziz İhsan Aktaş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sokak Röportajı", "综合/待分类", "General / To Classify", "低", "Low", "Sokak Röportajı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hülya Avşar", "综合/待分类", "General / To Classify", "低", "Low", "Hülya Avşar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#UECLfinal", "综合/待分类", "General / To Classify", "低", "Low", "UECLfinal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TCK158TekSeferlikUzlaşmaŞart", "综合/待分类", "General / To Classify", "法律/诈骗", "Legal / Fraud", "TCK158TekSeferlikUzlaşmaŞart", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nedim", "综合/待分类", "General / To Classify", "低", "Low", "Nedim", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Haram", "综合/待分类", "General / To Classify", "低", "Low", "Haram", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("gordon", "综合/待分类", "General / To Classify", "低", "Low", "gordon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("Luận", "综合/待分类", "General / To Classify", "低", "Low", "Luận", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mach", "综合/待分类", "General / To Classify", "低", "Low", "Mach", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Eid Mubarak", "综合/待分类", "General / To Classify", "低", "Low", "Eid Mubarak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TwentyFourRisingOrm", "综合/待分类", "General / To Classify", "低", "Low", "TwentyFourRisingOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KEEP THE LIGHT ORM", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KEEP THE LIGHT ORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DAOU CHACHA KV", "综合/待分类", "General / To Classify", "低", "Low", "DAOU CHACHA KV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ช้าช้าต้าห์อู๋", "综合/待分类", "General / To Classify", "低", "Low", "ช้าช้าต้าห์อู๋", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KCLAWARDS2026xYOKO", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "KCLAWARDS2026xYOKO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#24thBDwishForOrm", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "24thBDwishForOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YOUTHFUL CHARM AHN KEONHO", "综合/待分类", "General / To Classify", "低", "Low", "YOUTHFUL CHARM AHN KEONHO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kickstart", "综合/待分类", "General / To Classify", "低", "Low", "Kickstart", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#sasiKaoPROXIEKengNamping", "综合/待分类", "General / To Classify", "低", "Low", "sasiKaoPROXIEKengNamping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("M-TP ERA BEGINS", "综合/待分类", "General / To Classify", "低", "Low", "M-TP ERA BEGINS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("COME MY WAY OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "COME MY WAY OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARTIN SERVES YSL LOOKS", "综合/待分类", "General / To Classify", "低", "Low", "MARTIN SERVES YSL LOOKS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRAND GRAND SALES LENA MIU", "综合/待分类", "General / To Classify", "低", "Low", "GRAND GRAND SALES LENA MIU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP FACE OF SASI", "综合/待分类", "General / To Classify", "低", "Low", "KNP FACE OF SASI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cách", "综合/待分类", "General / To Classify", "低", "Low", "Cách", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("STO Chain", "综合/待分类", "General / To Classify", "低", "Low", "STO Chain", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP AT KCLA2026", "综合/待分类", "General / To Classify", "低", "Low", "KNP AT KCLA2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-05-27",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#RENJUN_同谋者的默契", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN_同谋者的默契", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesEP4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN SOLO OUT NOW", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN SOLO OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TREASURE_NEW_WAV_D5", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TREASURE_NEW_WAV_D5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKYNANI SMYLENEONA X GROGU", "品牌活动/消费", "Brand / Consumer", "低", "Low", "SKYNANI SMYLENEONA X GROGU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN SOLO IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN SOLO IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NEW WAV MV TRAILER", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NEW WAV MV TRAILER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CONGRATULATIONS BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CONGRATULATIONS BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS PAVED THE WAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS PAVED THE WAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OMG ALD1 COMEBACK IS HERE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "OMG ALD1 COMEBACK IS HERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOONGDUNK FS EYESONYOU", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JOONGDUNK FS EYESONYOU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#24thBDwishForOrm", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "24thBDwishForOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesEP4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ormkornnaphat", "综合/待分类", "General / To Classify", "低", "Low", "ormkornnaphat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ออมกรณ์นภัส", "综合/待分类", "General / To Classify", "低", "Low", "ออมกรณ์นภัส", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TeeTeePorVlogxICONSIAM", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TeeTeePorVlogxICONSIAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO PURE HAPPY", "综合/待分类", "General / To Classify", "低", "Low", "TFO PURE HAPPY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE MAGNIFICENT27", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE MAGNIFICENT27", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN SOLO OUT NOW", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN SOLO OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("1ST DUO DEBUT SINGLE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "1ST DUO DEBUT SINGLE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKYNANI SMYLENEONA X GROGU", "品牌活动/消费", "Brand / Consumer", "低", "Low", "SKYNANI SMYLENEONA X GROGU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FREE SOUL CHARLOTTE27", "综合/待分类", "General / To Classify", "低", "Low", "FREE SOUL CHARLOTTE27", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO DUO DEBUT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TFO DUO DEBUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNSET IN WINTER EP2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUNSET IN WINTER EP2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRABFOOD X AlmondProgress", "综合/待分类", "General / To Classify", "低", "Low", "GRABFOOD X AlmondProgress", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGLING MV GOOD NOT ENOUGH", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LINGLING MV GOOD NOT ENOUGH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP LIVE BEAUTILAB", "综合/待分类", "General / To Classify", "低", "Low", "KNP LIVE BEAUTILAB", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYE ATOM VOGUE WOMEN NOW 2026", "综合/待分类", "General / To Classify", "低", "Low", "FAYE ATOM VOGUE WOMEN NOW 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THOMAS X ESQUIRE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "THOMAS X ESQUIRE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Chermchey Hello Mama", "综合/待分类", "General / To Classify", "低", "Low", "Chermchey Hello Mama", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("V TRAILER", "综合/待分类", "General / To Classify", "低", "Low", "V TRAILER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#Happy4thBINIversary", "综合/待分类", "General / To Classify", "低", "Low", "Happy4thBINIversary", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BINIverseInAnNFT", "综合/待分类", "General / To Classify", "低", "Low", "BINIverseInAnNFT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINI PH", "综合/待分类", "General / To Classify", "低", "Low", "BINI PH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy 4th BINIversary", "综合/待分类", "General / To Classify", "低", "Low", "Happy 4th BINIversary", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#4thBINIversary", "综合/待分类", "General / To Classify", "低", "Low", "4thBINIversary", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINI", "综合/待分类", "General / To Classify", "低", "Low", "BINI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Pantropiko", "综合/待分类", "General / To Classify", "低", "Low", "Pantropiko", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Born To Win", "综合/待分类", "General / To Classify", "低", "Low", "Born To Win", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINI VIBE", "综合/待分类", "General / To Classify", "低", "Low", "BINI VIBE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ALDUBWORLDCONCERT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ALDUBWORLDCONCERT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AlDub World Concert", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "AlDub World Concert", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALDUB WORLD CONCERT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ALDUB WORLD CONCERT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RENJUN_同谋者的默契", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN_同谋者的默契", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTSonAMAs", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTSonAMAs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS PAVED THE WAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS PAVED THE WAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ClassOf2026", "综合/待分类", "General / To Classify", "低", "Low", "ClassOf2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN SOLO OUT NOW", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN SOLO OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CONGRATULATIONS BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CONGRATULATIONS BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TOP SOCIAL ARTIST BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TOP SOCIAL ARTIST BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS IS BACK", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS IS BACK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#سقيا_الحجاج__في_يوم_الترويه", "综合/待分类", "General / To Classify", "低", "Low", "سقيا_الحجاج__في_يوم_الترويه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#مبادره_لست_وحدك", "综合/待分类", "General / To Classify", "低", "Low", "مبادره_لست_وحدك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#مبادرة_لست_وحدك", "综合/待分类", "General / To Classify", "低", "Low", "مبادرة_لست_وحدك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ايسف2026", "综合/待分类", "General / To Classify", "低", "Low", "ايسف2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WWERAW", "综合/待分类", "General / To Classify", "低", "Low", "WWERAW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ترامب", "综合/待分类", "General / To Classify", "低", "Low", "ترامب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بروك ليسنر", "综合/待分类", "General / To Classify", "低", "Low", "بروك ليسنر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("باريس", "综合/待分类", "General / To Classify", "低", "Low", "باريس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("منتخب البرازيل", "综合/待分类", "General / To Classify", "低", "Low", "منتخب البرازيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عبود عنتر", "综合/待分类", "General / To Classify", "低", "Low", "عبود عنتر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ماجد الشمراني", "综合/待分类", "General / To Classify", "低", "Low", "ماجد الشمراني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاهلي المصري", "综合/待分类", "General / To Classify", "低", "Low", "الاهلي المصري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بيب غوارديولا", "综合/待分类", "General / To Classify", "低", "Low", "بيب غوارديولا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عمل المراه", "综合/待分类", "General / To Classify", "低", "Low", "عمل المراه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الغاء الهدف", "综合/待分类", "General / To Classify", "低", "Low", "الغاء الهدف", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس عالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس عالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاهلي السعودي", "综合/待分类", "General / To Classify", "低", "Low", "الاهلي السعودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الهلال السعودي", "综合/待分类", "General / To Classify", "低", "Low", "الهلال السعودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("World Cup", "体育/赛事", "Sports / Event", "低", "Low", "World Cup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("رياض محرز", "综合/待分类", "General / To Classify", "低", "Low", "رياض محرز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("#Luney", "综合/待分类", "General / To Classify", "低", "Low", "Luney", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#VakitİsmailKartal", "综合/待分类", "General / To Classify", "低", "Low", "VakitİsmailKartal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ArdaGüler", "综合/待分类", "General / To Classify", "低", "Low", "ArdaGüler", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#1HazirandaAnkaradayız", "综合/待分类", "General / To Classify", "低", "Low", "1HazirandaAnkaradayız", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#iremdericioğlu", "综合/待分类", "General / To Classify", "低", "Low", "iremdericioğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İsmail Kartal", "综合/待分类", "General / To Classify", "低", "Low", "İsmail Kartal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bu Bir Son Değil", "综合/待分类", "General / To Classify", "低", "Low", "Bu Bir Son Değil", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jimnastik", "综合/待分类", "General / To Classify", "低", "Low", "Jimnastik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aykut Kocaman", "综合/待分类", "General / To Classify", "低", "Low", "Aykut Kocaman", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ömer Çelik", "综合/待分类", "General / To Classify", "低", "Low", "Ömer Çelik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fazıl Kısakürek", "综合/待分类", "General / To Classify", "低", "Low", "Fazıl Kısakürek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Burak Yörük", "综合/待分类", "General / To Classify", "低", "Low", "Burak Yörük", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MahkumAileleri AFBekliyor", "综合/待分类", "General / To Classify", "低", "Low", "MahkumAileleri AFBekliyor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bayramlaşma", "综合/待分类", "General / To Classify", "低", "Low", "Bayramlaşma", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sultangazi", "综合/待分类", "General / To Classify", "低", "Low", "Sultangazi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Özgür Özel", "综合/待分类", "General / To Classify", "低", "Low", "Özgür Özel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Toral Bayramov", "综合/待分类", "General / To Classify", "低", "Low", "Toral Bayramov", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bassey", "综合/待分类", "General / To Classify", "低", "Low", "Bassey", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kanye", "综合/待分类", "General / To Classify", "低", "Low", "Kanye", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arafat", "综合/待分类", "General / To Classify", "低", "Low", "Arafat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#WUTheSeriesEP4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUMP", "综合/待分类", "General / To Classify", "低", "Low", "WUMP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#1win", "综合/待分类", "General / To Classify", "低", "Low", "1win", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#trump", "综合/待分类", "General / To Classify", "低", "Low", "trump", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RENJUN_同谋者的默契", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN_同谋者的默契", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Trump", "综合/待分类", "General / To Classify", "低", "Low", "Trump", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#iremdericioğlu", "综合/待分类", "General / To Classify", "低", "Low", "iremdericioğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WWERAW", "综合/待分类", "General / To Classify", "低", "Low", "WWERAW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Đức", "综合/待分类", "General / To Classify", "低", "Low", "Đức", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Germany", "综合/待分类", "General / To Classify", "低", "Low", "Germany", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Chuyển", "综合/待分类", "General / To Classify", "低", "Low", "Chuyển", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kanye", "综合/待分类", "General / To Classify", "低", "Low", "Kanye", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Korea", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Korea", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#1HazirandaAnkaradayız", "综合/待分类", "General / To Classify", "低", "Low", "1HazirandaAnkaradayız", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTSonAMAs", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTSonAMAs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS PAVED THE WAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS PAVED THE WAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CONGRATULATIONS BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CONGRATULATIONS BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TOP SOCIAL ARTIST BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TOP SOCIAL ARTIST BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ısa", "综合/待分类", "General / To Classify", "低", "Low", "ısa", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("World Cup", "体育/赛事", "Sports / Event", "低", "Low", "World Cup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-05-26",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#RENJUN_同谋者的默契", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN_同谋者的默契", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTSonAMAs", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTSonAMAs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS PAVED THE WAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS PAVED THE WAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#11YearsWithSEVENTEEN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "11YearsWithSEVENTEEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BTS IS BACK", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS IS BACK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN FINISH LINE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PONDPHUWIN FINISH LINE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOSSGAWIN FINAL LAP", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JOSSGAWIN FINAL LAP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA CHEQUERED FLAG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA CHEQUERED FLAG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOONGDUNK RACE TO LOVE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "JOONGDUNK RACE TO LOVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#LOLFanFest2026D3", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เก่งไม่พอGOODnotENOUGH_MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "เก่งไม่พอGOODnotENOUGH_MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ไทยช่วยไทยพลัส", "综合/待分类", "General / To Classify", "低", "Low", "ไทยช่วยไทยพลัส", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GENTLEMONSTER2026", "综合/待分类", "General / To Classify", "低", "Low", "GENTLEMONSTER2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesEP11", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP11", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP LIVE BEAUTILAB", "综合/待分类", "General / To Classify", "低", "Low", "KNP LIVE BEAUTILAB", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGLING MV GOOD NOT ENOUGH", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LINGLING MV GOOD NOT ENOUGH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO KATE JELLY FISH", "综合/待分类", "General / To Classify", "低", "Low", "TFO KATE JELLY FISH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN SOLO IS COMING", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN SOLO IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("1ST DUO OF DMD MUSIC", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "1ST DUO OF DMD MUSIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA CHEQUERED FLAG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA CHEQUERED FLAG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN FINISH LINE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PONDPHUWIN FINISH LINE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB FOURTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB FOURTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNSET IN WINTER EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUNSET IN WINTER EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PP KRIT GOOD NOT ENOUGH", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PP KRIT GOOD NOT ENOUGH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST REDLINE LUV", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST REDLINE LUV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DEER SECRET LIVE X TTP", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DEER SECRET LIVE X TTP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK FINAL RACE D3", "综合/待分类", "General / To Classify", "低", "Low", "JUNIORMARK FINAL RACE D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH RACE TO LOVE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GEMINIFOURTH RACE TO LOVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JSCEAN HEART NEVER FADE", "综合/待分类", "General / To Classify", "低", "Low", "JSCEAN HEART NEVER FADE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#11YearsWithSEVENTEEN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "11YearsWithSEVENTEEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#돌고돌아_11주년_영원할_세븐틴캐럿", "综合/待分类", "General / To Classify", "低", "Low", "돌고돌아_11주년_영원할_세븐틴캐럿", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DIAMOND LIFE IS FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "DIAMOND LIFE IS FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy 11th Anniversary", "综合/待分类", "General / To Classify", "低", "Low", "Happy 11th Anniversary", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SVT_11th_Anniversary", "综合/待分类", "General / To Classify", "低", "Low", "SVT_11th_Anniversary", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("6 DAYS TO NEW WAV", "综合/待分类", "General / To Classify", "低", "Low", "6 DAYS TO NEW WAV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#11Years_with_CARAT", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "11Years_with_CARAT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesEP11", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP11", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MISS BEHAVE TRAILER", "综合/待分类", "General / To Classify", "低", "Low", "MISS BEHAVE TRAILER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MORENA MV OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "MORENA MV OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HWANGderful YEJI DAY", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HWANGderful YEJI DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("STARTED WITH JL", "综合/待分类", "General / To Classify", "低", "Low", "STARTED WITH JL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jeonghan", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Jeonghan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BGYO ON DEMAND GROUP", "综合/待分类", "General / To Classify", "低", "Low", "BGYO ON DEMAND GROUP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGLING MV GOOD", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LINGLING MV GOOD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHUVEEsa GMA PRIME", "综合/待分类", "General / To Classify", "低", "Low", "SHUVEEsa GMA PRIME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA RIDE OR DIE", "综合/待分类", "General / To Classify", "低", "Low", "GIOLUNA RIDE OR DIE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Imee", "综合/待分类", "General / To Classify", "低", "Low", "Imee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ASIntadong PANAGINIP", "综合/待分类", "General / To Classify", "低", "Low", "ASIntadong PANAGINIP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DEER SECRET LIVE X TTP", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DEER SECRET LIVE X TTP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#سقيا_الحجاج__في_يوم_الترويه", "综合/待分类", "General / To Classify", "低", "Low", "سقيا_الحجاج__في_يوم_الترويه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#مبادره_لست_وحدك", "综合/待分类", "General / To Classify", "低", "Low", "مبادره_لست_وحدك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ايسف2026", "综合/待分类", "General / To Classify", "低", "Low", "ايسف2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WWERAW", "综合/待分类", "General / To Classify", "低", "Low", "WWERAW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بروك ليسنر", "综合/待分类", "General / To Classify", "低", "Low", "بروك ليسنر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ام__احمد_تنااشدكم_احسان", "综合/待分类", "General / To Classify", "低", "Low", "ام__احمد_تنااشدكم_احسان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الانستا الجديد", "综合/待分类", "General / To Classify", "低", "Low", "الانستا الجديد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("جواو بيدرو", "综合/待分类", "General / To Classify", "低", "Low", "جواو بيدرو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سعود العلي", "综合/待分类", "General / To Classify", "低", "Low", "سعود العلي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("منتخب البرازيل", "综合/待分类", "General / To Classify", "低", "Low", "منتخب البرازيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عبود عنتر", "综合/待分类", "General / To Classify", "低", "Low", "عبود عنتر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الايام الفضيله", "综合/待分类", "General / To Classify", "低", "Low", "الايام الفضيله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الرقصه الاخيره", "综合/待分类", "General / To Classify", "低", "Low", "الرقصه الاخيره", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("مساعد الرشيدي", "综合/待分类", "General / To Classify", "低", "Low", "مساعد الرشيدي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ماجد الشمراني", "综合/待分类", "General / To Classify", "低", "Low", "ماجد الشمراني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاهلي المصري", "综合/待分类", "General / To Classify", "低", "Low", "الاهلي المصري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بيب غوارديولا", "综合/待分类", "General / To Classify", "低", "Low", "بيب غوارديولا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عمل المراه", "综合/待分类", "General / To Classify", "低", "Low", "عمل المراه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الغاء الهدف", "综合/待分类", "General / To Classify", "低", "Low", "الغاء الهدف", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس عالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس عالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("#Respect_For_SevEN", "综合/待分类", "General / To Classify", "低", "Low", "Respect_For_SevEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Boycott_BELIFT_Lab", "综合/待分类", "General / To Classify", "低", "Low", "Boycott_BELIFT_Lab", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#VakitİsmailKartal", "综合/待分类", "General / To Classify", "低", "Low", "VakitİsmailKartal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#1HazirandaAnkaradayız", "综合/待分类", "General / To Classify", "低", "Low", "1HazirandaAnkaradayız", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ailedişhekimliği", "综合/待分类", "General / To Classify", "低", "Low", "ailedişhekimliği", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BU OCAK SÖNMEZ", "综合/待分类", "General / To Classify", "低", "Low", "BU OCAK SÖNMEZ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aykut Kocaman", "综合/待分类", "General / To Classify", "低", "Low", "Aykut Kocaman", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ömer Çelik", "综合/待分类", "General / To Classify", "低", "Low", "Ömer Çelik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fazıl Kısakürek", "综合/待分类", "General / To Classify", "低", "Low", "Fazıl Kısakürek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Burak Yörük", "综合/待分类", "General / To Classify", "低", "Low", "Burak Yörük", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MahkumAileleri AFBekliyor", "综合/待分类", "General / To Classify", "低", "Low", "MahkumAileleri AFBekliyor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bayramlaşma", "综合/待分类", "General / To Classify", "低", "Low", "Bayramlaşma", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tomanın", "综合/待分类", "General / To Classify", "低", "Low", "Tomanın", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Toral Bayramov", "综合/待分类", "General / To Classify", "低", "Low", "Toral Bayramov", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bassey", "综合/待分类", "General / To Classify", "低", "Low", "Bassey", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kanye", "综合/待分类", "General / To Classify", "低", "Low", "Kanye", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arafat", "综合/待分类", "General / To Classify", "低", "Low", "Arafat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kämpa", "综合/待分类", "General / To Classify", "低", "Low", "Kämpa", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ertuğrul Doğan", "综合/待分类", "General / To Classify", "低", "Low", "Ertuğrul Doğan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Yusuf Tekin", "综合/待分类", "General / To Classify", "低", "Low", "Yusuf Tekin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#เก่งไม่พอGOODnotENOUGH_MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "เก่งไม่พอGOODnotENOUGH_MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LOLFanFest2026D3", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGLING MV GOOD NOT ENOUGH", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LINGLING MV GOOD NOT ENOUGH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DustSwap", "综合/待分类", "General / To Classify", "低", "Low", "DustSwap", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesEP11", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP11", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#UnitFlowFinance", "综合/待分类", "General / To Classify", "低", "Low", "UnitFlowFinance", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("nong", "综合/待分类", "General / To Classify", "低", "Low", "nong", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PP KRIT X LLK GOOD NOT ENOUGH", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PP KRIT X LLK GOOD NOT ENOUGH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA CHEQUERED FLAG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PERTHSANTA CHEQUERED FLAG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vietnam", "综合/待分类", "General / To Classify", "低", "Low", "Vietnam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("tuấn", "综合/待分类", "General / To Classify", "低", "Low", "tuấn", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nang", "综合/待分类", "General / To Classify", "低", "Low", "Nang", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Trump", "综合/待分类", "General / To Classify", "低", "Low", "Trump", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Iran", "综合/待分类", "General / To Classify", "低", "Low", "Iran", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN FINISH LINE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "PONDPHUWIN FINISH LINE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Prim", "综合/待分类", "General / To Classify", "低", "Low", "Prim", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("sUSDD", "综合/待分类", "General / To Classify", "低", "Low", "sUSDD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("joong", "综合/待分类", "General / To Classify", "低", "Low", "joong", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Base", "综合/待分类", "General / To Classify", "低", "Low", "Base", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST REDLINE LUV", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST REDLINE LUV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  

  {
    date: "2026-05-25",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("LUAT PRESS TOUR R2", "旅行/本地活动", "Travel / Local Event", "低", "Low", "LUAT PRESS TOUR R2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#GENTLEMONSTER2026", "综合/待分类", "General / To Classify", "低", "Low", "GENTLEMONSTER2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TeeteePor", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TeeteePor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP LIVE BEAUTILAB", "综合/待分类", "General / To Classify", "低", "Low", "KNP LIVE BEAUTILAB", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BEAUTILABxKENGNAMPING", "综合/待分类", "General / To Classify", "低", "Low", "BEAUTILABxKENGNAMPING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KATEJellyFishxTleFirstone", "综合/待分类", "General / To Classify", "低", "Low", "KATEJellyFishxTleFirstone", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO KATE JELLY FISH", "综合/待分类", "General / To Classify", "低", "Low", "TFO KATE JELLY FISH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DutchMillxLYKN", "综合/待分类", "General / To Classify", "低", "Low", "DutchMillxLYKN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LYKN MIX FUN", "综合/待分类", "General / To Classify", "低", "Low", "LYKN MIX FUN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DEER SECRET LIVE X TTP", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DEER SECRET LIVE X TTP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("POOHPAVEL ON JOOX MUSIC", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "POOHPAVEL ON JOOX MUSIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNSET IN WINTER EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUNSET IN WINTER EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BY YOUR SIDE PILOT", "综合/待分类", "General / To Classify", "低", "Low", "BY YOUR SIDE PILOT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGLING MV GOOD", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LINGLING MV GOOD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN SOLO IS COMING", "综合/待分类", "General / To Classify", "低", "Low", "RENJUN SOLO IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OFF X SUPERSPORTS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "OFF X SUPERSPORTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUPERSPORTS X PIE NGERN", "品牌活动/消费", "Brand / Consumer", "低", "Low", "SUPERSPORTS X PIE NGERN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAY B 3rd MINI ALBUM", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JAY B 3rd MINI ALBUM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DICE BUSKING AT CHIANG RAI", "综合/待分类", "General / To Classify", "低", "Low", "DICE BUSKING AT CHIANG RAI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LUAT PRESS TOUR R2", "旅行/本地活动", "Travel / Local Event", "低", "Low", "LUAT PRESS TOUR R2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SATANG SPOTTED BY 1MLOVES", "综合/待分类", "General / To Classify", "低", "Low", "SATANG SPOTTED BY 1MLOVES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#MorenaMV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "MorenaMV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MISS BEHAVE TRAILER", "综合/待分类", "General / To Classify", "低", "Low", "MISS BEHAVE TRAILER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CarmelleCollado", "综合/待分类", "General / To Classify", "低", "Low", "CarmelleCollado", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("XONARA LEI DAY", "综合/待分类", "General / To Classify", "低", "Low", "XONARA LEI DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BirthdayGirlLei", "综合/待分类", "General / To Classify", "低", "Low", "BirthdayGirlLei", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Imee", "综合/待分类", "General / To Classify", "低", "Low", "Imee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("STARTED WITH JL", "综合/待分类", "General / To Classify", "低", "Low", "STARTED WITH JL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CaughtByJL", "综合/待分类", "General / To Classify", "低", "Low", "CaughtByJL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BGYO ON DEMAND GROUP", "综合/待分类", "General / To Classify", "低", "Low", "BGYO ON DEMAND GROUP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GENTLEMONSTER2026", "综合/待分类", "General / To Classify", "低", "Low", "GENTLEMONSTER2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Haruto", "综合/待分类", "General / To Classify", "低", "Low", "Haruto", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ytang", "综合/待分类", "General / To Classify", "低", "Low", "Ytang", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Junkyu and Asahi", "综合/待分类", "General / To Classify", "低", "Low", "Junkyu and Asahi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Galeries", "综合/待分类", "General / To Classify", "低", "Low", "Galeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Solomon", "综合/待分类", "General / To Classify", "低", "Low", "Solomon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Lamina", "综合/待分类", "General / To Classify", "低", "Low", "Lamina", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("jungkook", "综合/待分类", "General / To Classify", "低", "Low", "jungkook", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LUAT PRESS TOUR R2", "旅行/本地活动", "Travel / Local Event", "低", "Low", "LUAT PRESS TOUR R2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BGYO BTSHINE GUESTING", "综合/待分类", "General / To Classify", "低", "Low", "BGYO BTSHINE GUESTING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ANTON AS MAKMAK", "综合/待分类", "General / To Classify", "低", "Low", "ANTON AS MAKMAK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#يوم_الترويه", "综合/待分类", "General / To Classify", "低", "Low", "يوم_الترويه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تبرع_في_سقيا__الحجاج_يوم_عرفه", "综合/待分类", "General / To Classify", "低", "Low", "تبرع_في_سقيا__الحجاج_يوم_عرفه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الداعم_الخفي", "综合/待分类", "General / To Classify", "低", "Low", "الداعم_الخفي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اسبانيا", "综合/待分类", "General / To Classify", "低", "Low", "اسبانيا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#اطلب_من_التشاليح_والورش", "综合/待分类", "General / To Classify", "低", "Low", "اطلب_من_التشاليح_والورش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("هولندا", "综合/待分类", "General / To Classify", "低", "Low", "هولندا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاقدار السعيده", "综合/待分类", "General / To Classify", "低", "Low", "الاقدار السعيده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تنظيم الحركه", "综合/待分类", "General / To Classify", "低", "Low", "تنظيم الحركه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("المنتخب الاسباني", "体育/赛事", "Sports / Event", "低", "Low", "المنتخب الاسباني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الثامن", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الثامن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العطش الاكبر", "综合/待分类", "General / To Classify", "低", "Low", "العطش الاكبر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عيد_الاضحي", "综合/待分类", "General / To Classify", "低", "Low", "عيد_الاضحي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("غونزالو", "综合/待分类", "General / To Classify", "低", "Low", "غونزالو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم المبارك", "综合/待分类", "General / To Classify", "低", "Low", "اليوم المبارك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("برشلونة", "综合/待分类", "General / To Classify", "低", "Low", "برشلونة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الايام الجميله", "综合/待分类", "General / To Classify", "低", "Low", "الايام الجميله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("مدريد", "综合/待分类", "General / To Classify", "低", "Low", "مدريد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("توريس", "综合/待分类", "General / To Classify", "低", "Low", "توريس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("غارسيا", "综合/待分类", "General / To Classify", "低", "Low", "غارسيا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايريك", "综合/待分类", "General / To Classify", "低", "Low", "ايريك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#MilliAileHaftası", "综合/待分类", "General / To Classify", "低", "Low", "MilliAileHaftası", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AdaletinBayramıKademe", "体育/赛事", "Sports / Event", "低", "Low", "AdaletinBayramıKademe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fazıl Kısakürek", "综合/待分类", "General / To Classify", "低", "Low", "Fazıl Kısakürek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ömer Çelik", "综合/待分类", "General / To Classify", "低", "Low", "Ömer Çelik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ÇareGüneş", "综合/待分类", "General / To Classify", "低", "Low", "ÇareGüneş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Serenay Sarıkaya", "综合/待分类", "General / To Classify", "低", "Low", "Serenay Sarıkaya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#pazartesi", "综合/待分类", "General / To Classify", "低", "Low", "pazartesi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Farioli", "综合/待分类", "General / To Classify", "低", "Low", "Farioli", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Üstad Necip", "综合/待分类", "General / To Classify", "低", "Low", "Üstad Necip", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tuncer Bakırhan", "综合/待分类", "General / To Classify", "低", "Low", "Tuncer Bakırhan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sibel Kekilli", "综合/待分类", "General / To Classify", "低", "Low", "Sibel Kekilli", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HakkımıVerKiremitçi", "综合/待分类", "General / To Classify", "低", "Low", "HakkımıVerKiremitçi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Zeynep Sönmez", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Zeynep Sönmez", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Çingene Kızı", "综合/待分类", "General / To Classify", "低", "Low", "Çingene Kızı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kalkınma Biziz", "综合/待分类", "General / To Classify", "低", "Low", "Kalkınma Biziz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Feti Yıldız", "综合/待分类", "General / To Classify", "低", "Low", "Feti Yıldız", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Muhittin Çolak", "综合/待分类", "General / To Classify", "低", "Low", "Muhittin Çolak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İlay", "综合/待分类", "General / To Classify", "低", "Low", "İlay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tomanın", "综合/待分类", "General / To Classify", "低", "Low", "Tomanın", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TBMM&#39;deki", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "TBMM&#39;deki", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#LOLFanFest2026D3", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA CHEQUERED FLAG", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA CHEQUERED FLAG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PP KRIT X LLK GOOD NOT ENOUGH", "品牌活动/消费", "Brand / Consumer", "低", "Low", "PP KRIT X LLK GOOD NOT ENOUGH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nóng", "综合/待分类", "General / To Classify", "低", "Low", "Nóng", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tuần", "综合/待分类", "General / To Classify", "低", "Low", "Tuần", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vietnam", "综合/待分类", "General / To Classify", "低", "Low", "Vietnam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nắng", "综合/待分类", "General / To Classify", "低", "Low", "Nắng", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Trump", "综合/待分类", "General / To Classify", "低", "Low", "Trump", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Iran", "综合/待分类", "General / To Classify", "低", "Low", "Iran", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN FINISH LINE", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN FINISH LINE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SO PROUD OF BOUNPREM", "综合/待分类", "General / To Classify", "低", "Low", "SO PROUD OF BOUNPREM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("China", "综合/待分类", "General / To Classify", "低", "Low", "China", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("joong", "综合/待分类", "General / To Classify", "低", "Low", "joong", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK FINAL RACE D3", "综合/待分类", "General / To Classify", "低", "Low", "JUNIORMARK FINAL RACE D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Japan", "综合/待分类", "General / To Classify", "低", "Low", "Japan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EnemiesWithBenefitsEP4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EnemiesWithBenefitsEP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST REDLINE LUV", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST REDLINE LUV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB FOURTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB FOURTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Afternoon CT", "综合/待分类", "General / To Classify", "低", "Low", "Afternoon CT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("belief - $belief", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "belief - $belief", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  {
    date: "2026-05-24",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("1ST DUO OF DMD MUSIC", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "1ST DUO OF DMD MUSIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#LOLFanFest2026D3", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TleFirstOneDuoDebut", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TleFirstOneDuoDebut", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("1ST DUO OF DMD MUSIC", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "1ST DUO OF DMD MUSIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA CHEQUERED FLAG", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA CHEQUERED FLAG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN FINISH LINE", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN FINISH LINE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST REDLINE LUV", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST REDLINE LUV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("24MAY CHEER FORCEBOOK", "综合/待分类", "General / To Classify", "低", "Low", "24MAY CHEER FORCEBOOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOSSGAWIN FINAL LAP", "综合/待分类", "General / To Classify", "低", "Low", "JOSSGAWIN FINAL LAP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH RACE TO LOVE", "综合/待分类", "General / To Classify", "低", "Low", "GEMINIFOURTH RACE TO LOVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JSCEAN HEART NEVER FADE", "综合/待分类", "General / To Classify", "低", "Low", "JSCEAN HEART NEVER FADE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SO PROUD OF BOUNPREM", "综合/待分类", "General / To Classify", "低", "Low", "SO PROUD OF BOUNPREM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK FINAL RACE D3", "综合/待分类", "General / To Classify", "低", "Low", "JUNIORMARK FINAL RACE D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LINGORMBirthdayFanParty", "综合/待分类", "General / To Classify", "低", "Low", "LINGORMBirthdayFanParty", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LenaMiuFMinManilaDay2", "综合/待分类", "General / To Classify", "低", "Low", "LenaMiuFMinManilaDay2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#900DaysWithTHAINEX", "综合/待分类", "General / To Classify", "低", "Low", "900DaysWithTHAINEX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LENAMIU SHINES IN MNL", "综合/待分类", "General / To Classify", "低", "Low", "LENAMIU SHINES IN MNL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("REMAIN WORSHIP", "综合/待分类", "General / To Classify", "低", "Low", "REMAIN WORSHIP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SPRING MOMENTS WITH FAYE", "综合/待分类", "General / To Classify", "低", "Low", "SPRING MOMENTS WITH FAYE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ONE HARMONY", "综合/待分类", "General / To Classify", "低", "Low", "ONE HARMONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TWO NOTES", "综合/待分类", "General / To Classify", "低", "Low", "TWO NOTES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#LOLFanFest2026D3", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DONBELLE ROAD TO CAVITE", "综合/待分类", "General / To Classify", "低", "Low", "DONBELLE ROAD TO CAVITE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARMELLE OPENS PALARO", "综合/待分类", "General / To Classify", "低", "Low", "CARMELLE OPENS PALARO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HEATHs STARRY NIGHT", "综合/待分类", "General / To Classify", "低", "Low", "HEATHs STARRY NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HMJSeventeenthBdayCeleb", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HMJSeventeenthBdayCeleb", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LenaMiuFMinManilaDay1", "综合/待分类", "General / To Classify", "低", "Low", "LenaMiuFMinManilaDay1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PalarongPambansa", "综合/待分类", "General / To Classify", "低", "Low", "PalarongPambansa", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เสน่หาวาโยตอนที่2", "综合/待分类", "General / To Classify", "低", "Low", "เสน่หาวาโยตอนที่2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE AIR CLOSER DISTANCE", "综合/待分类", "General / To Classify", "低", "Low", "THE AIR CLOSER DISTANCE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA CHEQUERED FLAG", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA CHEQUERED FLAG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ANTON KAMAO BUKAS NA", "综合/待分类", "General / To Classify", "低", "Low", "ANTON KAMAO BUKAS NA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Philippines", "综合/待分类", "General / To Classify", "低", "Low", "Philippines", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST REDLINE LUV", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST REDLINE LUV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PAMPANGAS RABEST", "综合/待分类", "General / To Classify", "低", "Low", "PAMPANGAS RABEST", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN FINISH LINE", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN FINISH LINE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("xiaomi welcomes dustbia", "综合/待分类", "General / To Classify", "低", "Low", "xiaomi welcomes dustbia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("jungkook", "综合/待分类", "General / To Classify", "低", "Low", "jungkook", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYEATOM THE LAST PROMISE", "综合/待分类", "General / To Classify", "低", "Low", "FAYEATOM THE LAST PROMISE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("kaluguran daka pu donbelle", "综合/待分类", "General / To Classify", "低", "Low", "kaluguran daka pu donbelle", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOSSGAWIN FINAL LAP", "综合/待分类", "General / To Classify", "低", "Low", "JOSSGAWIN FINAL LAP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("النصر", "综合/待分类", "General / To Classify", "低", "Low", "النصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("النصر", "综合/待分类", "General / To Classify", "低", "Low", "النصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تشليح_بارت_صيانه_وتشاليح", "综合/待分类", "General / To Classify", "低", "Low", "تشليح_بارت_صيانه_وتشاليح", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الهلال", "综合/待分类", "General / To Classify", "低", "Low", "الهلال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تشليح_بارت_تشاليح_وورش", "综合/待分类", "General / To Classify", "低", "Low", "تشليح_بارت_تشاليح_وورش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاهلي", "综合/待分类", "General / To Classify", "低", "Low", "الاهلي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JaissleTo2o30", "综合/待分类", "General / To Classify", "低", "Low", "JaissleTo2o30", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الرياض", "综合/待分类", "General / To Classify", "低", "Low", "الرياض", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#يايسله_حتي_2030", "综合/待分类", "General / To Classify", "低", "Low", "يايسله_حتي_2030", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاتحاد", "综合/待分类", "General / To Classify", "低", "Low", "الاتحاد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد", "综合/待分类", "General / To Classify", "低", "Low", "محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("رونالدو", "综合/待分类", "General / To Classify", "低", "Low", "رونالدو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تويتر", "综合/待分类", "General / To Classify", "低", "Low", "تويتر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عتق_رقبه_ماجد_المالكي", "综合/待分类", "General / To Classify", "低", "Low", "عتق_رقبه_ماجد_المالكي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايران", "综合/待分类", "General / To Classify", "低", "Low", "ايران", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("انزاغي", "综合/待分类", "General / To Classify", "低", "Low", "انزاغي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("جواو", "综合/待分类", "General / To Classify", "低", "Low", "جواو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليمن", "综合/待分类", "General / To Classify", "低", "Low", "اليمن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("جيسوس", "综合/待分类", "General / To Classify", "低", "Low", "جيسوس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("امريكا", "综合/待分类", "General / To Classify", "低", "Low", "امريكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#pazar", "综合/待分类", "General / To Classify", "低", "Low", "pazar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHP Genel Merkezi", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "CHP Genel Merkezi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mahmut Tanal", "综合/待分类", "General / To Classify", "低", "Low", "Mahmut Tanal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ankara Valiliği", "综合/待分类", "General / To Classify", "低", "Low", "Ankara Valiliği", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kılıçdaroğlu", "综合/待分类", "General / To Classify", "低", "Low", "Kılıçdaroğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mafya", "综合/待分类", "General / To Classify", "低", "Low", "Mafya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mahir Polat", "综合/待分类", "General / To Classify", "低", "Low", "Mahir Polat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Celal Çelik", "综合/待分类", "General / To Classify", "低", "Low", "Celal Çelik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Emniyet&#39;e", "综合/待分类", "General / To Classify", "低", "Low", "Emniyet&#39;e", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tiplere", "综合/待分类", "General / To Classify", "低", "Low", "Tiplere", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Orhan Sarıbal", "综合/待分类", "General / To Classify", "低", "Low", "Orhan Sarıbal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Anlaşılan", "综合/待分类", "General / To Classify", "低", "Low", "Anlaşılan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Erdoğan", "综合/待分类", "General / To Classify", "低", "Low", "Erdoğan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LOLFanFest2026D3", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ali Mahir Başarır", "综合/待分类", "General / To Classify", "低", "Low", "Ali Mahir Başarır", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Murat Emir", "综合/待分类", "General / To Classify", "低", "Low", "Murat Emir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nurhayat", "综合/待分类", "General / To Classify", "低", "Low", "Nurhayat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Yiyin", "综合/待分类", "General / To Classify", "低", "Low", "Yiyin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Çubuklu", "综合/待分类", "General / To Classify", "低", "Low", "Çubuklu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Adana", "综合/待分类", "General / To Classify", "低", "Low", "Adana", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#LOLFanFest2026D3", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA CHEQUERED FLAG", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA CHEQUERED FLAG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOONGDUNK RACING CHAMPION", "综合/待分类", "General / To Classify", "低", "Low", "JOONGDUNK RACING CHAMPION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Questioning", "综合/待分类", "General / To Classify", "低", "Low", "Questioning", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Unexpected", "综合/待分类", "General / To Classify", "低", "Low", "Unexpected", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Biased", "综合/待分类", "General / To Classify", "低", "Low", "Biased", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN FINISH LINE", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN FINISH LINE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Familiar", "综合/待分类", "General / To Classify", "低", "Low", "Familiar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Timely", "综合/待分类", "General / To Classify", "低", "Low", "Timely", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Extended", "综合/待分类", "General / To Classify", "低", "Low", "Extended", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Routine", "综合/待分类", "General / To Classify", "低", "Low", "Routine", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("evaluating", "综合/待分类", "General / To Classify", "低", "Low", "evaluating", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Casual", "综合/待分类", "General / To Classify", "低", "Low", "Casual", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Formal", "综合/待分类", "General / To Classify", "低", "Low", "Formal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LenaMiuFMinManilaDay2", "综合/待分类", "General / To Classify", "低", "Low", "LenaMiuFMinManilaDay2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Uncertain", "综合/待分类", "General / To Classify", "低", "Low", "Uncertain", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vietnam", "综合/待分类", "General / To Classify", "低", "Low", "Vietnam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tense", "综合/待分类", "General / To Classify", "低", "Low", "Tense", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Neutral", "综合/待分类", "General / To Classify", "低", "Low", "Neutral", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Wandering", "综合/待分类", "General / To Classify", "低", "Low", "Wandering", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-05-23",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [

      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#LOLFanFest2026D2", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CLUB30CONCERT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "CLUB30CONCERT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TENxAnimeAwards26", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "TENxAnimeAwards26", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN FULL THROTTLE", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN FULL THROTTLE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA LIGHTS OUT", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA LIGHTS OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TheMakingOfTreFanMeeting", "综合/待分类", "General / To Classify", "低", "Low", "TheMakingOfTreFanMeeting", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HAECHANatSJF26", "综合/待分类", "General / To Classify", "低", "Low", "HAECHANatSJF26", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAZZ UP WITH HAECHAN", "综合/待分类", "General / To Classify", "低", "Low", "JAZZ UP WITH HAECHAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("23MAY HEY FORCEBOOK", "综合/待分类", "General / To Classify", "低", "Low", "23MAY HEY FORCEBOOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH HEART RACE", "综合/待分类", "General / To Classify", "低", "Low", "GEMINIFOURTH HEART RACE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST FULL SPEED", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST FULL SPEED", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYEATOM THE LAST PROMISE", "综合/待分类", "General / To Classify", "低", "Low", "FAYEATOM THE LAST PROMISE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKY WITH LENSKART IN SG", "综合/待分类", "General / To Classify", "低", "Low", "SKY WITH LENSKART IN SG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JSCEAN LOVE FULLSPEED", "综合/待分类", "General / To Classify", "低", "Low", "JSCEAN LOVE FULLSPEED", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LENAMIU LIGHTS UP MANILA", "综合/待分类", "General / To Classify", "低", "Low", "LENAMIU LIGHTS UP MANILA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BOUNPREM GROW UP TOGETHER", "综合/待分类", "General / To Classify", "低", "Low", "BOUNPREM GROW UP TOGETHER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK IN THE RACE D2", "综合/待分类", "General / To Classify", "低", "Low", "JUNIORMARK IN THE RACE D2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YINWAR 2ND FANSIGN KHONKAEN", "综合/待分类", "General / To Classify", "低", "Low", "YINWAR 2ND FANSIGN KHONKAEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHANGAN NEVO Q05", "综合/待分类", "General / To Classify", "低", "Low", "CHANGAN NEVO Q05", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BILLKIN", "综合/待分类", "General / To Classify", "低", "Low", "BILLKIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#LOLFanFest2026D2", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LenaMiuFMinManilaDay1", "综合/待分类", "General / To Classify", "低", "Low", "LenaMiuFMinManilaDay1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KARMIL SUPPORTS MAKMAK", "综合/待分类", "General / To Classify", "低", "Low", "KARMIL SUPPORTS MAKMAK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CartonBatiNa", "体育/赛事", "Sports / Event", "低", "Low", "CartonBatiNa", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KALUGURAN DAKA PU DONBELLE", "综合/待分类", "General / To Classify", "低", "Low", "KALUGURAN DAKA PU DONBELLE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTSYUMIxBGYO", "综合/待分类", "General / To Classify", "低", "Low", "BTSYUMIxBGYO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BGYO AS ACTORS", "综合/待分类", "General / To Classify", "低", "Low", "BGYO AS ACTORS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Kamao", "综合/待分类", "General / To Classify", "低", "Low", "Kamao", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYEATOM THE LAST PROMISE", "综合/待分类", "General / To Classify", "低", "Low", "FAYEATOM THE LAST PROMISE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("haechan", "综合/待分类", "General / To Classify", "低", "Low", "haechan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HIESSENCE WITH KAI", "综合/待分类", "General / To Classify", "低", "Low", "HIESSENCE WITH KAI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN FULL THROTTLE", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN FULL THROTTLE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA LIGHTS OUT", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA LIGHTS OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tito", "综合/待分类", "General / To Classify", "低", "Low", "Tito", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST FULL SPEED", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST FULL SPEED", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Philippines", "综合/待分类", "General / To Classify", "低", "Low", "Philippines", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAPEE KAIA GOES TO CEBU", "综合/待分类", "General / To Classify", "低", "Low", "HAPEE KAIA GOES TO CEBU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LIZGUEL ACTING COMEBACK", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LIZGUEL ACTING COMEBACK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Japan", "综合/待分类", "General / To Classify", "低", "Low", "Japan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BULACAN", "综合/待分类", "General / To Classify", "低", "Low", "BULACAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("النصر", "综合/待分类", "General / To Classify", "低", "Low", "النصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("النصر", "综合/待分类", "General / To Classify", "低", "Low", "النصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فكرت يوما", "综合/待分类", "General / To Classify", "低", "Low", "فكرت يوما", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#سقيا__الحجيج_يوم_الترويه", "综合/待分类", "General / To Classify", "低", "Low", "سقيا__الحجيج_يوم_الترويه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الهلال", "综合/待分类", "General / To Classify", "低", "Low", "الهلال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ورث_مصحفا_للحجاج__يوم_عرفه", "综合/待分类", "General / To Classify", "低", "Low", "ورث_مصحفا_للحجاج__يوم_عرفه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاهلي", "综合/待分类", "General / To Classify", "低", "Low", "الاهلي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#غادر_النادي_ياسندي", "综合/待分类", "General / To Classify", "低", "Low", "غادر_النادي_ياسندي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد", "综合/待分类", "General / To Classify", "低", "Low", "محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("رونالدو", "综合/待分类", "General / To Classify", "低", "Low", "رونالدو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الرياض", "综合/待分类", "General / To Classify", "低", "Low", "الرياض", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاتحاد", "综合/待分类", "General / To Classify", "低", "Low", "الاتحاد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايران", "综合/待分类", "General / To Classify", "低", "Low", "ايران", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عيديات_عماره_نجد", "综合/待分类", "General / To Classify", "低", "Low", "عيديات_عماره_نجد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليمن", "综合/待分类", "General / To Classify", "低", "Low", "اليمن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تويتر", "综合/待分类", "General / To Classify", "低", "Low", "تويتر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("امريكا", "综合/待分类", "General / To Classify", "低", "Low", "امريكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العراق", "综合/待分类", "General / To Classify", "低", "Low", "العراق", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بنزيما", "综合/待分类", "General / To Classify", "低", "Low", "بنزيما", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كريستيانو", "综合/待分类", "General / To Classify", "低", "Low", "كريستيانو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#cumartesi", "综合/待分类", "General / To Classify", "低", "Low", "cumartesi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ankara Gar", "综合/待分类", "General / To Classify", "低", "Low", "Ankara Gar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("10 DEAŞ&#39;lı", "综合/待分类", "General / To Classify", "低", "Low", "10 DEAŞ&#39;lı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kılıçdaroğlu", "综合/待分类", "General / To Classify", "低", "Low", "Kılıçdaroğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Erdoğan", "综合/待分类", "General / To Classify", "低", "Low", "Erdoğan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#FinaliEmekliYazacak", "综合/待分类", "General / To Classify", "低", "Low", "FinaliEmekliYazacak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHP Kurultayı", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "CHP Kurultayı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İzmir", "综合/待分类", "General / To Classify", "低", "Low", "İzmir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İsrail", "综合/待分类", "General / To Classify", "低", "Low", "İsrail", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#haftasonu", "综合/待分类", "General / To Classify", "低", "Low", "haftasonu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Yiğidim", "综合/待分类", "General / To Classify", "低", "Low", "Yiğidim", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İstanbul", "综合/待分类", "General / To Classify", "低", "Low", "İstanbul", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Veli Ağbaba", "综合/待分类", "General / To Classify", "低", "Low", "Veli Ağbaba", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Stajyer Çırak Mağdur", "综合/待分类", "General / To Classify", "低", "Low", "Stajyer Çırak Mağdur", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Trump", "综合/待分类", "General / To Classify", "低", "Low", "Trump", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ekrem İmamoğlu", "综合/待分类", "General / To Classify", "低", "Low", "Ekrem İmamoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İslam", "综合/待分类", "General / To Classify", "低", "Low", "İslam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sedat Peker", "综合/待分类", "General / To Classify", "低", "Low", "Sedat Peker", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aziz Yıldırım", "综合/待分类", "General / To Classify", "低", "Low", "Aziz Yıldırım", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İran", "综合/待分类", "General / To Classify", "低", "Low", "İran", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#LOLFanFest2026D2", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#OrmMatterMakersWorkshop", "综合/待分类", "General / To Classify", "低", "Low", "OrmMatterMakersWorkshop", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA LIGHTS OUT", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA LIGHTS OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dacc Chain", "综合/待分类", "General / To Classify", "低", "Low", "Dacc Chain", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOONGDUNK RACING CHAMPION", "综合/待分类", "General / To Classify", "低", "Low", "JOONGDUNK RACING CHAMPION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("1 Power Cell", "综合/待分类", "General / To Classify", "低", "Low", "1 Power Cell", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LenaMiuFMinManilaDay1", "综合/待分类", "General / To Classify", "低", "Low", "LenaMiuFMinManilaDay1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RaxFinance", "综合/待分类", "General / To Classify", "低", "Low", "RaxFinance", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BrokenOfLoveFinalEPinMacau", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BrokenOfLoveFinalEPinMacau", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYEATOM THE LAST PROMISE", "综合/待分类", "General / To Classify", "低", "Low", "FAYEATOM THE LAST PROMISE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN HEARTRACE START", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN HEARTRACE START", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Trump", "综合/待分类", "General / To Classify", "低", "Low", "Trump", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Pizza", "综合/待分类", "General / To Classify", "低", "Low", "Pizza", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("All The Money - $ATM", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "All The Money - $ATM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jackpotter", "综合/待分类", "General / To Classify", "低", "Low", "Jackpotter", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING BOUNPREM", "综合/待分类", "General / To Classify", "低", "Low", "SHINING BOUNPREM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vietnam", "综合/待分类", "General / To Classify", "低", "Low", "Vietnam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("China", "综合/待分类", "General / To Classify", "低", "Low", "China", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("sphere sdk", "综合/待分类", "General / To Classify", "低", "Low", "sphere sdk", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("10,000 BTC", "综合/待分类", "General / To Classify", "低", "Low", "10,000 BTC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-05-22",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [

      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#LOLFanFest2026D1", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTS_WORLDTOUR_BANGKOK", "旅行/本地活动", "Travel / Local Event", "低", "Low", "BTS_WORLDTOUR_BANGKOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN HEARTRACE START", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN HEARTRACE START", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA ENGINE ON", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA ENGINE ON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("22MAY SAY FORCEBOOK", "综合/待分类", "General / To Classify", "低", "Low", "22MAY SAY FORCEBOOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KarismaxKengNamping", "综合/待分类", "General / To Classify", "低", "Low", "KarismaxKengNamping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH SPEED CODED", "综合/待分类", "General / To Classify", "低", "Low", "GEMINIFOURTH SPEED CODED", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOSSGAWIN ROOKIE RACE", "综合/待分类", "General / To Classify", "低", "Low", "JOSSGAWIN ROOKIE RACE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP JOURNEY WITH KARISMA", "综合/待分类", "General / To Classify", "低", "Low", "KNP JOURNEY WITH KARISMA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ARIRANGINBANGKOK", "体育/赛事", "Sports / Event", "低", "Low", "ARIRANGINBANGKOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Thychefxkengnamping", "综合/待分类", "General / To Classify", "低", "Low", "Thychefxkengnamping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK RACE START D1", "综合/待分类", "General / To Classify", "低", "Low", "JUNIORMARK RACE START D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOONGDUNK RACING CHAMPION", "综合/待分类", "General / To Classify", "低", "Low", "JOONGDUNK RACING CHAMPION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING BOUNPREM", "综合/待分类", "General / To Classify", "低", "Low", "SHINING BOUNPREM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MR FANBOY Q13", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MR FANBOY Q13", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HOMETOWN ROMANCE FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "HOMETOWN ROMANCE FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EARTHMIX SPEED HEART RACING D1", "综合/待分类", "General / To Classify", "低", "Low", "EARTHMIX SPEED HEART RACING D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SATANG SAMRUAY AT", "综合/待分类", "General / To Classify", "低", "Low", "SATANG SAMRUAY AT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ARMY MEMBERSHIP", "综合/待分类", "General / To Classify", "低", "Low", "ARMY MEMBERSHIP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ANDA OCEAN EMBRACE 22", "综合/待分类", "General / To Classify", "低", "Low", "ANDA OCEAN EMBRACE 22", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#LOLFanFest2026D1", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUSTIN CLOVER DAY", "综合/待分类", "General / To Classify", "低", "Low", "DUSTIN CLOVER DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ILoveAboutYU", "综合/待分类", "General / To Classify", "低", "Low", "ILoveAboutYU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DONBELLE TAMAN SA TAMAN", "综合/待分类", "General / To Classify", "低", "Low", "DONBELLE TAMAN SA TAMAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINIVERSE AND CHORUS EP 2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BINIVERSE AND CHORUS EP 2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN HEARTRACE START", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN HEARTRACE START", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Xiaomi17TSeries", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Xiaomi17TSeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILL ASHLEY DELIVERY BOI", "综合/待分类", "General / To Classify", "低", "Low", "WILL ASHLEY DELIVERY BOI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVER BRENT AT SKYDOME", "综合/待分类", "General / To Classify", "低", "Low", "LOVER BRENT AT SKYDOME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST HEART RACE", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST HEART RACE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ReactionBrokenOfLoveEP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ReactionBrokenOfLoveEP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYEATOM BOL REACT EP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "FAYEATOM BOL REACT EP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH SPEED CODED", "综合/待分类", "General / To Classify", "低", "Low", "GEMINIFOURTH SPEED CODED", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOONGDUNK RACING CHAMPION", "综合/待分类", "General / To Classify", "低", "Low", "JOONGDUNK RACING CHAMPION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA ENGINE ON", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA ENGINE ON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Team Blue", "综合/待分类", "General / To Classify", "低", "Low", "Team Blue", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SVT_UnityTournamentWithNaPD", "旅行/本地活动", "Travel / Local Event", "低", "Low", "SVT_UnityTournamentWithNaPD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SEVENTEEN UNITY TOURNAMENT", "旅行/本地活动", "Travel / Local Event", "低", "Low", "SEVENTEEN UNITY TOURNAMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOSSGAWIN ROOKIE RACE", "综合/待分类", "General / To Classify", "低", "Low", "JOSSGAWIN ROOKIE RACE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DXS AT SEOUL JAZZ FESTIVAL", "旅行/本地活动", "Travel / Local Event", "低", "Low", "DXS AT SEOUL JAZZ FESTIVAL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#النصر_ضمك", "综合/待分类", "General / To Classify", "低", "Low", "النصر_ضمك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#يوم_الجمعه", "综合/待分类", "General / To Classify", "低", "Low", "يوم_الجمعه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تبي_الدوري_ياهلالي_معصي", "综合/待分类", "General / To Classify", "低", "Low", "تبي_الدوري_ياهلالي_معصي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عتق_رقبه_بدر_مفلح4", "综合/待分类", "General / To Classify", "低", "Low", "عتق_رقبه_بدر_مفلح4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ار_خم", "综合/待分类", "General / To Classify", "低", "Low", "ار_خم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("علي النبي", "综合/待分类", "General / To Classify", "低", "Low", "علي النبي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الموسم القادم", "综合/待分类", "General / To Classify", "低", "Low", "الموسم القادم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("علي محمد", "综合/待分类", "General / To Classify", "低", "Low", "علي محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كريستيانو رونالدو", "综合/待分类", "General / To Classify", "低", "Low", "كريستيانو رونالدو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("غيبس وايت", "综合/待分类", "General / To Classify", "低", "Low", "غيبس وايت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الموسم الجاي", "综合/待分类", "General / To Classify", "低", "Low", "الموسم الجاي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("علي يلو", "综合/待分类", "General / To Classify", "低", "Low", "علي يلو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("دوري جورجينا", "综合/待分类", "General / To Classify", "低", "Low", "دوري جورجينا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الفضيل", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الفضيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("باس الشعار", "综合/待分类", "General / To Classify", "低", "Low", "باس الشعار", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بيب غوارديولا", "综合/待分类", "General / To Classify", "低", "Low", "بيب غوارديولا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الحكم المحلي", "综合/待分类", "General / To Classify", "低", "Low", "الحكم المحلي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الدوري الاصعب", "综合/待分类", "General / To Classify", "低", "Low", "الدوري الاصعب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الفردوس الاعلي", "综合/待分类", "General / To Classify", "低", "Low", "الفردوس الاعلي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الايام المباركه", "综合/待分类", "General / To Classify", "低", "Low", "الايام المباركه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#ButlanKararı", "综合/待分类", "General / To Classify", "低", "Low", "ButlanKararı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hayırlı Cumalar", "综合/待分类", "General / To Classify", "低", "Low", "Hayırlı Cumalar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#22mayıs", "综合/待分类", "General / To Classify", "低", "Low", "22mayıs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bilgi Üniversitesi", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Bilgi Üniversitesi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kurban Bayramı", "综合/待分类", "General / To Classify", "低", "Low", "Kurban Bayramı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SürücüSandıkBekliyor", "综合/待分类", "General / To Classify", "低", "Low", "SürücüSandıkBekliyor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AnketDeğil MağduriyetBelirler", "综合/待分类", "General / To Classify", "低", "Low", "AnketDeğil MağduriyetBelirler", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ChpBaşkanıÖzeldir", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "ChpBaşkanıÖzeldir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Çağlar Çağlayan", "综合/待分类", "General / To Classify", "低", "Low", "Çağlar Çağlayan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İbrahim Kahveci", "综合/待分类", "General / To Classify", "低", "Low", "İbrahim Kahveci", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LOLFanFest2026D1", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHP&#39;nin 3", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "CHP&#39;nin 3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hain", "综合/待分类", "General / To Classify", "低", "Low", "Hain", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cihan Kamer", "综合/待分类", "General / To Classify", "低", "Low", "Cihan Kamer", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hafsanur Sancaktutan", "综合/待分类", "General / To Classify", "低", "Low", "Hafsanur Sancaktutan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kubilay Aka", "综合/待分类", "General / To Classify", "低", "Low", "Kubilay Aka", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHP Kurultayı&#39;na", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "CHP Kurultayı&#39;na", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mustafa Çağlar", "综合/待分类", "General / To Classify", "低", "Low", "Mustafa Çağlar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Batuhan Özdemir", "综合/待分类", "General / To Classify", "低", "Low", "Batuhan Özdemir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHP Genel Merkezi&#39;ne", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "CHP Genel Merkezi&#39;ne", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#LOLFanFest2026D1", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#OrmMatterMakersWorkshop", "综合/待分类", "General / To Classify", "低", "Low", "OrmMatterMakersWorkshop", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA ENGINE ON", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA ENGINE ON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGLING BA DIOR FRAGRANCE", "综合/待分类", "General / To Classify", "低", "Low", "LINGLING BA DIOR FRAGRANCE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOONGDUNK RACING CHAMPION", "综合/待分类", "General / To Classify", "低", "Low", "JOONGDUNK RACING CHAMPION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("hắc vô thường", "综合/待分类", "General / To Classify", "低", "Low", "hắc vô thường", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN HEARTRACE START", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN HEARTRACE START", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$WALL", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$WALL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sphere SDK", "综合/待分类", "General / To Classify", "低", "Low", "Sphere SDK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Pizza", "综合/待分类", "General / To Classify", "低", "Low", "Pizza", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Auraa", "综合/待分类", "General / To Classify", "低", "Low", "Auraa", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FIRSTKHAOTUNG HEART RACE D1", "综合/待分类", "General / To Classify", "低", "Low", "FIRSTKHAOTUNG HEART RACE D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING BOUNPREM", "综合/待分类", "General / To Classify", "低", "Low", "SHINING BOUNPREM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ออมกรณ์นภัส", "综合/待分类", "General / To Classify", "低", "Low", "ออมกรณ์นภัส", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#OrmKornnaphat", "综合/待分类", "General / To Classify", "低", "Low", "OrmKornnaphat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Chuột", "综合/待分类", "General / To Classify", "低", "Low", "Chuột", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Quantum Echoes", "综合/待分类", "General / To Classify", "低", "Low", "Quantum Echoes", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Unicity", "综合/待分类", "General / To Classify", "低", "Low", "Unicity", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Lingling Kwong", "综合/待分类", "General / To Classify", "低", "Low", "Lingling Kwong", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK RACE START D1", "综合/待分类", "General / To Classify", "低", "Low", "JUNIORMARK RACE START D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-05-21",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("Arsenal", "综合/待分类", "General / To Classify", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#OrmMatterMakersWorkshop", "综合/待分类", "General / To Classify", "低", "Low", "OrmMatterMakersWorkshop", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORM MUSE MATTER MAKERS", "综合/待分类", "General / To Classify", "低", "Low", "ORM MUSE MATTER MAKERS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เก่งไม่พอGOODnotENOUGH", "综合/待分类", "General / To Classify", "低", "Low", "เก่งไม่พอGOODnotENOUGH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PPKritEntertainment", "综合/待分类", "General / To Classify", "低", "Low", "PPKritEntertainment", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LoveUponATimeSeries", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LoveUponATimeSeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PPKritt", "综合/待分类", "General / To Classify", "低", "Low", "PPKritt", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MAJOR X YINWAR MANDALORIAN", "品牌活动/消费", "Brand / Consumer", "低", "Low", "MAJOR X YINWAR MANDALORIAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("XIAO ZHAN GOLDEN PETREL AWARDS", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "XIAO ZHAN GOLDEN PETREL AWARDS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MAXKYRP 200K ON X", "综合/待分类", "General / To Classify", "低", "Low", "MAXKYRP 200K ON X", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("REBECCA OPPO X9 Ultra UNBOX", "综合/待分类", "General / To Classify", "低", "Low", "REBECCA OPPO X9 Ultra UNBOX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sugar Daddy", "综合/待分类", "General / To Classify", "低", "Low", "Sugar Daddy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BE MY PLAYER TWO Q11 Q12", "综合/待分类", "General / To Classify", "低", "Low", "BE MY PLAYER TWO Q11 Q12", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("3YEARS WITH JAM", "综合/待分类", "General / To Classify", "低", "Low", "3YEARS WITH JAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("INGU LIVE WITH EST", "综合/待分类", "General / To Classify", "低", "Low", "INGU LIVE WITH EST", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD BOYS AT BEST SELLING AWARD", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "DMD BOYS AT BEST SELLING AWARD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Volvo", "综合/待分类", "General / To Classify", "低", "Low", "Volvo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FREE SOUL CHARLOTTE21", "综合/待分类", "General / To Classify", "低", "Low", "FREE SOUL CHARLOTTE21", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Impact Arena", "综合/待分类", "General / To Classify", "低", "Low", "Impact Arena", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE MAGNIFICENT21", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE MAGNIFICENT21", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYE NEW PRESENTER MADAME FIN", "综合/待分类", "General / To Classify", "低", "Low", "FAYE NEW PRESENTER MADAME FIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#BINICoachellaInChorus", "综合/待分类", "General / To Classify", "低", "Low", "BINICoachellaInChorus", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BINIKapamilyaTogetherForever", "综合/待分类", "General / To Classify", "低", "Low", "BINIKapamilyaTogetherForever", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THURSDATE WITH BINI", "综合/待分类", "General / To Classify", "低", "Low", "THURSDATE WITH BINI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARMELLE AT BOHOL", "综合/待分类", "General / To Classify", "低", "Low", "CARMELLE AT BOHOL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WE LOVE YOU CARTON", "综合/待分类", "General / To Classify", "低", "Low", "WE LOVE YOU CARTON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BGYO ON DEMAND MIKKI", "综合/待分类", "General / To Classify", "低", "Low", "BGYO ON DEMAND MIKKI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORM MUSE MATTER MAKERS", "综合/待分类", "General / To Classify", "低", "Low", "ORM MUSE MATTER MAKERS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TREASURE_NEW_WAV_D11", "综合/待分类", "General / To Classify", "低", "Low", "TREASURE_NEW_WAV_D11", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ormmattermakersworkshop", "综合/待分类", "General / To Classify", "低", "Low", "ormmattermakersworkshop", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KAIA EP SOON", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KAIA EP SOON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TechLifeFam Plus ASHRAVE", "综合/待分类", "General / To Classify", "低", "Low", "TechLifeFam Plus ASHRAVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#OUR_GLOW_IS_SEVEN", "综合/待分类", "General / To Classify", "低", "Low", "OUR_GLOW_IS_SEVEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA SEARCH CONTINUES", "综合/待分类", "General / To Classify", "低", "Low", "GIOLUNA SEARCH CONTINUES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JMFYANG LING CODED DAY", "综合/待分类", "General / To Classify", "低", "Low", "JMFYANG LING CODED DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILBERT OFF THE RECORD", "综合/待分类", "General / To Classify", "低", "Low", "WILBERT OFF THE RECORD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TAYO SA WAKAS TRAILER 2", "综合/待分类", "General / To Classify", "低", "Low", "TAYO SA WAKAS TRAILER 2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILBEA FOR PUREGOLD", "综合/待分类", "General / To Classify", "低", "Low", "WILBEA FOR PUREGOLD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Pia Cayetano", "综合/待分类", "General / To Classify", "低", "Low", "Pia Cayetano", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TO JL WITH LOVE", "综合/待分类", "General / To Classify", "低", "Low", "TO JL WITH LOVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGLING BA DIOR FRAGRANCE", "综合/待分类", "General / To Classify", "低", "Low", "LINGLING BA DIOR FRAGRANCE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#ار_خم", "综合/待分类", "General / To Classify", "低", "Low", "ار_خم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#يوم_الخميس", "综合/待分类", "General / To Classify", "低", "Low", "يوم_الخميس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#النصر_ضمك", "综合/待分类", "General / To Classify", "低", "Low", "النصر_ضمك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الاستغفار_معه_تطيب_الحياه", "综合/待分类", "General / To Classify", "低", "Low", "الاستغفار_معه_تطيب_الحياه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#سعود_السويلم", "综合/待分类", "General / To Classify", "低", "Low", "سعود_السويلم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("احمد الرميخاني", "综合/待分类", "General / To Classify", "低", "Low", "احمد الرميخاني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الدوري المصري", "综合/待分类", "General / To Classify", "低", "Low", "الدوري المصري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الايام المباركه", "综合/待分类", "General / To Classify", "低", "Low", "الايام المباركه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الخميس", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الخميس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الايام الفضيله", "综合/待分类", "General / To Classify", "低", "Low", "الايام الفضيله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الدوري اليوم", "综合/待分类", "General / To Classify", "低", "Low", "الدوري اليوم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العبور المحدده", "综合/待分类", "General / To Classify", "低", "Low", "العبور المحدده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("علي يزيد", "综合/待分类", "General / To Classify", "低", "Low", "علي يزيد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ضيوف الرحمن", "综合/待分类", "General / To Classify", "低", "Low", "ضيوف الرحمن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عرض جديد", "综合/待分类", "General / To Classify", "低", "Low", "عرض جديد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عرض جميل", "综合/待分类", "General / To Classify", "低", "Low", "عرض جميل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("خالد الطريس", "综合/待分类", "General / To Classify", "低", "Low", "خالد الطريس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عرض سريع النهارده", "综合/待分类", "General / To Classify", "低", "Low", "عرض سريع النهارده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الكعبه المشرفه", "综合/待分类", "General / To Classify", "低", "Low", "الكعبه المشرفه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الدوري الليله", "综合/待分类", "General / To Classify", "低", "Low", "الدوري الليله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#TürkMutfağıHaftası", "综合/待分类", "General / To Classify", "低", "Low", "TürkMutfağıHaftası", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Samandağ", "综合/待分类", "General / To Classify", "低", "Low", "Samandağ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#perşembe", "综合/待分类", "General / To Classify", "低", "Low", "perşembe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Tokat", "综合/待分类", "General / To Classify", "低", "Low", "Tokat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#hatay", "综合/待分类", "General / To Classify", "低", "Low", "hatay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Efes 2026", "综合/待分类", "General / To Classify", "低", "Low", "Efes 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Özgür Peker", "综合/待分类", "General / To Classify", "低", "Low", "Özgür Peker", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Muharrem İnce", "综合/待分类", "General / To Classify", "低", "Low", "Muharrem İnce", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Serenay Sarıkaya", "综合/待分类", "General / To Classify", "低", "Low", "Serenay Sarıkaya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bir Sofrada Miras", "综合/待分类", "General / To Classify", "低", "Low", "Bir Sofrada Miras", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Çerkes", "综合/待分类", "General / To Classify", "低", "Low", "Çerkes", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aytun", "综合/待分类", "General / To Classify", "低", "Low", "Aytun", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ümit Özdağ", "综合/待分类", "General / To Classify", "低", "Low", "Ümit Özdağ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mabel Matiz", "综合/待分类", "General / To Classify", "低", "Low", "Mabel Matiz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Karamürsel", "综合/待分类", "General / To Classify", "低", "Low", "Karamürsel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tan Taşçı", "综合/待分类", "General / To Classify", "低", "Low", "Tan Taşçı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Etnospor Kültür Festivali", "旅行/本地活动", "Travel / Local Event", "低", "Low", "Etnospor Kültür Festivali", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hakan Şükür", "综合/待分类", "General / To Classify", "低", "Low", "Hakan Şükür", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Feyza Civelek", "综合/待分类", "General / To Classify", "低", "Low", "Feyza Civelek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dorukhan Büyükışık", "综合/待分类", "General / To Classify", "低", "Low", "Dorukhan Büyükışık", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#OrmMatterMakersWorkshop", "综合/待分类", "General / To Classify", "低", "Low", "OrmMatterMakersWorkshop", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LingDiorParfumsDinner", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LingDiorParfumsDinner", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("hắc vô thường", "综合/待分类", "General / To Classify", "低", "Low", "hắc vô thường", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Orm Kornnaphat", "综合/待分类", "General / To Classify", "低", "Low", "Orm Kornnaphat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ออมกรณ์นภัส", "综合/待分类", "General / To Classify", "低", "Low", "ออมกรณ์นภัส", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SpaceX Cup", "体育/赛事", "Sports / Event", "低", "Low", "SpaceX Cup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LOLFanFest2026LIVE", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AAFF2026xXiaoZhan", "综合/待分类", "General / To Classify", "低", "Low", "AAFF2026xXiaoZhan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AllScale", "综合/待分类", "General / To Classify", "低", "Low", "AllScale", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA HIT THE TRACK", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA HIT THE TRACK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HYPE", "综合/待分类", "General / To Classify", "低", "Low", "HYPE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Pizza", "综合/待分类", "General / To Classify", "低", "Low", "Pizza", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA TAKES FRANCE", "综合/待分类", "General / To Classify", "低", "Low", "APASRA TAKES FRANCE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bitget Holderyield", "综合/待分类", "General / To Classify", "低", "Low", "Bitget Holderyield", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("nha hang dinh hung", "综合/待分类", "General / To Classify", "低", "Low", "nha hang dinh hung", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ARC Intelligence", "综合/待分类", "General / To Classify", "低", "Low", "ARC Intelligence", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Quantum Echoes", "综合/待分类", "General / To Classify", "低", "Low", "Quantum Echoes", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Balanced", "综合/待分类", "General / To Classify", "低", "Low", "Balanced", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$NEX", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$NEX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Obvious", "综合/待分类", "General / To Classify", "低", "Low", "Obvious", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  
  {
    date: "2026-05-20",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("FKMUMU x LOL2026LIVE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FKMUMU x LOL2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#LOLFanFest2026LIVE", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO IN KHONKAEN CAMPUS", "综合/待分类", "General / To Classify", "低", "Low", "TFO IN KHONKAEN CAMPUS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เพลงปักใจByNuNew", "综合/待分类", "General / To Classify", "低", "Low", "เพลงปักใจByNuNew", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUNEW STILL OST LUAT", "综合/待分类", "General / To Classify", "低", "Low", "NUNEW STILL OST LUAT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#OneDayWithKengNamping", "综合/待分类", "General / To Classify", "低", "Low", "OneDayWithKengNamping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#VogueTHxKengNamping", "综合/待分类", "General / To Classify", "低", "Low", "VogueTHxKengNamping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ซอโซ่ล่ามธีร์Q11Q12", "综合/待分类", "General / To Classify", "低", "Low", "ซอโซ่ล่ามธีร์Q11Q12", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BE MY PLAYER TWO Q11 Q12", "综合/待分类", "General / To Classify", "低", "Low", "BE MY PLAYER TWO Q11 Q12", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST LOL 2026", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST LOL 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN LOL2026 LIVE", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN LOL2026 LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA HIT THE TRACK", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA HIT THE TRACK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FORCEBOOK MAFOX READY2RACE", "综合/待分类", "General / To Classify", "低", "Low", "FORCEBOOK MAFOX READY2RACE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARKMO LOL26 LIVE", "综合/待分类", "General / To Classify", "低", "Low", "JUNIORMARKMO LOL26 LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JIMMYSEA AVOCEAN RACING", "综合/待分类", "General / To Classify", "低", "Low", "JIMMYSEA AVOCEAN RACING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JOSSGAWIN LOL2026 LIVE", "综合/待分类", "General / To Classify", "低", "Low", "JOSSGAWIN LOL2026 LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH LKN LOL26 LIVE", "综合/待分类", "General / To Classify", "低", "Low", "GEMINIFOURTH LKN LOL26 LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DICE BUSKING AT UBON", "综合/待分类", "General / To Classify", "低", "Low", "DICE BUSKING AT UBON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KENG LOVE LUX", "综合/待分类", "General / To Classify", "低", "Low", "KENG LOVE LUX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vogue Thailand", "综合/待分类", "General / To Classify", "低", "Low", "Vogue Thailand", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BABE We", "综合/待分类", "General / To Classify", "低", "Low", "BABE We", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#LOLFanFest2026LIVE", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MNL48_PFC2026MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "MNL48_PFC2026MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TIKTALK WITH CARMELLE", "综合/待分类", "General / To Classify", "低", "Low", "TIKTALK WITH CARMELLE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#RabGelRealMoments", "综合/待分类", "General / To Classify", "低", "Low", "RabGelRealMoments", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BINIFromPHToTheWorld", "综合/待分类", "General / To Classify", "低", "Low", "BINIFromPHToTheWorld", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#YOKOxCannes2026", "综合/待分类", "General / To Classify", "低", "Low", "YOKOxCannes2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA TAKES FRANCE", "综合/待分类", "General / To Classify", "低", "Low", "APASRA TAKES FRANCE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINIxBLOOMS HANGGANG GLOBAL", "综合/待分类", "General / To Classify", "低", "Low", "BINIxBLOOMS HANGGANG GLOBAL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Pia Cayetano", "综合/待分类", "General / To Classify", "低", "Low", "Pia Cayetano", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BGYO ON DEMAND GELO", "综合/待分类", "General / To Classify", "低", "Low", "BGYO ON DEMAND GELO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("XONARA AT WISH BUS", "综合/待分类", "General / To Classify", "低", "Low", "XONARA AT WISH BUS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGLING BA DIOR FRAGRANCE", "综合/待分类", "General / To Classify", "低", "Low", "LINGLING BA DIOR FRAGRANCE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA HIT THE TRACK", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA HIT THE TRACK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GENTOuring For 3Years", "旅行/本地活动", "Travel / Local Event", "低", "Low", "GENTOuring For 3Years", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NEW WAV VISUAL PHOTO", "综合/待分类", "General / To Classify", "低", "Low", "NEW WAV VISUAL PHOTO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KAMAO FULL TRAILER", "综合/待分类", "General / To Classify", "低", "Low", "KAMAO FULL TRAILER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SB19 G3NTO THE WORLD", "综合/待分类", "General / To Classify", "低", "Low", "SB19 G3NTO THE WORLD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FREDCESS X DANIEL CAESAR", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FREDCESS X DANIEL CAESAR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST LOL 2026", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST LOL 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("gioluna guided by love", "综合/待分类", "General / To Classify", "低", "Low", "gioluna guided by love", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#ام_احمد_تنخاكم_احسان", "综合/待分类", "General / To Classify", "低", "Low", "ام_احمد_تنخاكم_احسان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الباقيات_الصالحات_في_ذي_الحجه", "综合/待分类", "General / To Classify", "低", "Low", "الباقيات_الصالحات_في_ذي_الحجه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#معسر_لديه5اطفال_منصه_احسان", "综合/待分类", "General / To Classify", "低", "Low", "معسر_لديه5اطفال_منصه_احسان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#مال_خا", "综合/待分类", "General / To Classify", "低", "Low", "مال_خا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#باند_تذاكر_webook", "综合/待分类", "General / To Classify", "低", "Low", "باند_تذاكر_webook", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الايام المباركه", "综合/待分类", "General / To Classify", "低", "Low", "الايام المباركه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الايام الفضيله", "综合/待分类", "General / To Classify", "低", "Low", "الايام الفضيله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عمل المراه", "综合/待分类", "General / To Classify", "低", "Low", "عمل المراه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الاربعاء", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الاربعاء", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("توفيق تونسي", "综合/待分类", "General / To Classify", "低", "Low", "توفيق تونسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ضيوف الرحمن", "综合/待分类", "General / To Classify", "低", "Low", "ضيوف الرحمن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("مشاري القرني", "综合/待分类", "General / To Classify", "低", "Low", "مشاري القرني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عرض جميل", "综合/待分类", "General / To Classify", "低", "Low", "عرض جميل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عرض جديد", "综合/待分类", "General / To Classify", "低", "Low", "عرض جديد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عرض سريع النهارده", "综合/待分类", "General / To Classify", "低", "Low", "عرض سريع النهارده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("غاريث بيل", "综合/待分类", "General / To Classify", "低", "Low", "غاريث بيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فارس عوض", "综合/待分类", "General / To Classify", "低", "Low", "فارس عوض", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عنان السماء", "综合/待分类", "General / To Classify", "低", "Low", "عنان السماء", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("خالد الطريس", "综合/待分类", "General / To Classify", "低", "Low", "خالد الطريس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#deprem", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "deprem", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KademeHakkımıVer", "综合/待分类", "General / To Classify", "低", "Low", "KademeHakkımıVer", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#sallandık", "综合/待分类", "General / To Classify", "低", "Low", "sallandık", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Malatya", "综合/待分类", "General / To Classify", "低", "Low", "Malatya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kemal Kılıçdaroğlu", "综合/待分类", "General / To Classify", "低", "Low", "Kemal Kılıçdaroğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bay Kemal", "综合/待分类", "General / To Classify", "低", "Low", "Bay Kemal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#kahramanmaraş", "综合/待分类", "General / To Classify", "低", "Low", "kahramanmaraş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KTK48Zulmü Bitsin", "综合/待分类", "General / To Classify", "低", "Low", "KTK48Zulmü Bitsin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Muhalefeti Dinleyin", "综合/待分类", "General / To Classify", "低", "Low", "Muhalefeti Dinleyin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("The Boys", "综合/待分类", "General / To Classify", "低", "Low", "The Boys", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bale", "综合/待分类", "General / To Classify", "低", "Low", "Bale", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Genel Başkanımız", "综合/待分类", "General / To Classify", "低", "Low", "Genel Başkanımız", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Şener Üşümezsoy", "综合/待分类", "General / To Classify", "低", "Low", "Şener Üşümezsoy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("UEFA Başkanı Ceferin", "综合/待分类", "General / To Classify", "低", "Low", "UEFA Başkanı Ceferin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Uludağ İçecek", "综合/待分类", "General / To Classify", "低", "Low", "Uludağ İçecek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Butcher", "综合/待分类", "General / To Classify", "低", "Low", "Butcher", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Yavuz Bingöl", "综合/待分类", "General / To Classify", "低", "Low", "Yavuz Bingöl", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İhraç", "综合/待分类", "General / To Classify", "低", "Low", "İhraç", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("6 Şubat", "综合/待分类", "General / To Classify", "低", "Low", "6 Şubat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HÜRJET&#39;in 3", "综合/待分类", "General / To Classify", "低", "Low", "HÜRJET&#39;in 3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#LingDiorParfumsDinner", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LingDiorParfumsDinner", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LOLFanFest2026LIVE", "综合/待分类", "General / To Classify", "低", "Low", "LOLFanFest2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#YOKOxCannes2026", "综合/待分类", "General / To Classify", "低", "Low", "YOKOxCannes2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#หลิงหลิงคอง", "综合/待分类", "General / To Classify", "低", "Low", "หลิงหลิงคอง", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA TAKES FRANCE", "综合/待分类", "General / To Classify", "低", "Low", "APASRA TAKES FRANCE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PERTHSANTA HIT THE TRACK", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA HIT THE TRACK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA XAGA AWARDS", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "APASRA XAGA AWARDS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PONDPHUWIN LOL2026 LIVE", "综合/待分类", "General / To Classify", "低", "Low", "PONDPHUWIN LOL2026 LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hedgy the Hedgehog", "综合/待分类", "General / To Classify", "低", "Low", "Hedgy the Hedgehog", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALWAYS BE WITH JAMES", "综合/待分类", "General / To Classify", "低", "Low", "ALWAYS BE WITH JAMES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CORTIS_FOREVER_5", "综合/待分类", "General / To Classify", "低", "Low", "CORTIS_FOREVER_5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arsenal", "综合/待分类", "General / To Classify", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Miiang", "综合/待分类", "General / To Classify", "低", "Low", "Miiang", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FKMUMU x LOL2026LIVE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FKMUMU x LOL2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$xmark", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$xmark", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Pizza Day", "综合/待分类", "General / To Classify", "低", "Low", "Pizza Day", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("behind the scene bol q1", "综合/待分类", "General / To Classify", "低", "Low", "behind the scene bol q1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ziyu beyond all peaks", "综合/待分类", "General / To Classify", "低", "Low", "ziyu beyond all peaks", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ZKURT", "综合/待分类", "General / To Classify", "低", "Low", "ZKURT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("bác hồ", "综合/待分类", "General / To Classify", "低", "Low", "bác hồ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  

  

  

  

  

  

  

  {
    date: "2026-05-19",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("QRIS GoPay", "综合/待分类", "General / To Classify", "低", "Low", "QRIS GoPay"),
        t("Himalayan Butterscotch", "综合/待分类", "General / To Classify", "低", "Low", "Himalayan Butterscotch"),
        t("#WUTheSeriesEP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP3"),
        t("Tonggak Penguatan Negeri", "综合/待分类", "General / To Classify", "低", "Low", "Tonggak Penguatan Negeri"),
        t("Trade $SPC", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "Trade $SPC"),
        t("Indomaret", "综合/待分类", "General / To Classify", "低", "Low", "Indomaret"),
        t("#DestinyClinicxAouBoom", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "DestinyClinicxAouBoom"),
        t("AOUBOOM WITH DESTINY", "综合/待分类", "General / To Classify", "低", "Low", "AOUBOOM WITH DESTINY"),
        t("STILL LUAT TEASER", "综合/待分类", "General / To Classify", "低", "Low", "STILL LUAT TEASER"),
        t("#Teaserเพลงปักใจ", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "Teaserเพลงปักใจ"),
        t("MAY NANI BE WITH GROGU", "综合/待分类", "General / To Classify", "低", "Low", "MAY NANI BE WITH GROGU"),
        t("Tanggal 19", "综合/待分类", "General / To Classify", "低", "Low", "Tanggal 19"),
        t("#NaniAndGroguInTokyo", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "NaniAndGroguInTokyo"),
        t("#SMARTFREN", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "SMARTFREN"),
        t("Chermchey Open Now", "综合/待分类", "General / To Classify", "低", "Low", "Chermchey Open Now"),
        t("EST SUPHA BD 2026", "综合/待分类", "General / To Classify", "低", "Low", "EST SUPHA BD 2026"),
        t("Jagoan 2", "综合/待分类", "General / To Classify", "低", "Low", "Jagoan 2"),
        t("Point Coffee", "综合/待分类", "General / To Classify", "低", "Low", "Point Coffee"),
        t("Ciptakan Rasa Damai", "综合/待分类", "General / To Classify", "低", "Low", "Ciptakan Rasa Damai"),
        t("IHSG", "综合/待分类", "General / To Classify", "低", "Low", "IHSG")
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#WUTheSeriesEP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP3"),
        t("#TENCORE0110Concert_PressCon", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TENCORE0110Concert_PressCon"),
        t("#ChermcheyGrandOpening", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ChermcheyGrandOpening"),
        t("#AllselectxKengharit", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "AllselectxKengharit"),
        t("TTP X CLEAR WATSONS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "TTP X CLEAR WATSONS"),
        t("#Clearscalpproxteeteepor", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Clearscalpproxteeteepor"),
        t("Chermchey Open Now", "综合/待分类", "General / To Classify", "低", "Low", "Chermchey Open Now"),
        t("STILL LUAT TEASER", "综合/待分类", "General / To Classify", "低", "Low", "STILL LUAT TEASER"),
        t("GRABFOOD X POOHPAVEL", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GRABFOOD X POOHPAVEL"),
        t("BUS 1ST FANCON KL", "综合/待分类", "General / To Classify", "低", "Low", "BUS 1ST FANCON KL"),
        t("BEHIND THE SCENE BOL Q1", "综合/待分类", "General / To Classify", "低", "Low", "BEHIND THE SCENE BOL Q1"),
        t("MAY NANI BE WITH GROGU", "综合/待分类", "General / To Classify", "低", "Low", "MAY NANI BE WITH GROGU"),
        t("EST SUPHA BD 2026", "综合/待分类", "General / To Classify", "低", "Low", "EST SUPHA BD 2026"),
        t("AOUBOOM WITH DESTINY", "综合/待分类", "General / To Classify", "低", "Low", "AOUBOOM WITH DESTINY"),
        t("GALA POSSESSED X OOMEIS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GALA POSSESSED X OOMEIS"),
        t("DESTINED TO GET 9M", "综合/待分类", "General / To Classify", "低", "Low", "DESTINED TO GET 9M"),
        t("DICE BUSKING AT BURIRAM", "综合/待分类", "General / To Classify", "低", "Low", "DICE BUSKING AT BURIRAM"),
        t("JAMESSU 2M IG ERA", "综合/待分类", "General / To Classify", "低", "Low", "JAMESSU 2M IG ERA"),
        t("ENGFA THE MAGNIFICENT19", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE MAGNIFICENT19"),
        t("CONGRATS CL IG1M900K", "综合/待分类", "General / To Classify", "低", "Low", "CONGRATS CL IG1M900K")
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("GENTOuring For 3Years", "旅行/本地活动", "Travel / Local Event", "低", "Low", "GENTOuring For 3Years"),
        t("#BINIFromPHToTheWorld", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "BINIFromPHToTheWorld"),
        t("SB19 G3NTO THE WORLD", "综合/待分类", "General / To Classify", "低", "Low", "SB19 G3NTO THE WORLD"),
        t("BINIxBLOOMS HANGGANG GLOBAL", "综合/待分类", "General / To Classify", "低", "Low", "BINIxBLOOMS HANGGANG GLOBAL"),
        t("XONARA AT WISH BUS", "综合/待分类", "General / To Classify", "低", "Low", "XONARA AT WISH BUS"),
        t("#TABIonWISH", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "TABIonWISH"),
        t("#TABIxHalftimeShow", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TABIxHalftimeShow"),
        t("#STILL_HERE_STILL_SEVEN", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "STILL_HERE_STILL_SEVEN"),
        t("#GREY_IS_NOT_THE_END", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "GREY_IS_NOT_THE_END"),
        t("BGYO ON DEMAND AKIRA", "综合/待分类", "General / To Classify", "低", "Low", "BGYO ON DEMAND AKIRA"),
        t("APASRA XAGA AWARDS", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "APASRA XAGA AWARDS"),
        t("NEW WAV VISUAL PHOTO", "综合/待分类", "General / To Classify", "低", "Low", "NEW WAV VISUAL PHOTO"),
        t("BEHIND THE SCENE BOL Q1", "综合/待分类", "General / To Classify", "低", "Low", "BEHIND THE SCENE BOL Q1"),
        t("last day to register 2026", "综合/待分类", "General / To Classify", "低", "Low", "last day to register 2026"),
        t("Christmas", "综合/待分类", "General / To Classify", "低", "Low", "Christmas"),
        t("EST SUPHA BD 2026", "综合/待分类", "General / To Classify", "低", "Low", "EST SUPHA BD 2026"),
        t("LIZGUEL FOR TAMAMALI MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LIZGUEL FOR TAMAMALI MV"),
        t("bini house recognition", "综合/待分类", "General / To Classify", "低", "Low", "bini house recognition"),
        t("Chermchey Open Now", "综合/待分类", "General / To Classify", "低", "Low", "Chermchey Open Now"),
        t("rabgel 4llday kilig", "综合/待分类", "General / To Classify", "低", "Low", "rabgel 4llday kilig")
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#لا_تعجز_عن_الباقيات_الصالحات", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "لا_تعجز_عن_الباقيات_الصالحات"),
        t("#سقيا_الحجاج__في_يوم_الترويه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "سقيا_الحجاج__في_يوم_الترويه"),
        t("#اوقف__مصحفا__للحجاج_يوم_عرفه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "اوقف__مصحفا__للحجاج_يوم_عرفه"),
        t("#ايسف2026", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ايسف2026"),
        t("#مبادره_لست_وحدك", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "مبادره_لست_وحدك"),
        t("التفوق الاقتصادي", "综合/待分类", "General / To Classify", "低", "Low", "التفوق الاقتصادي"),
        t("التميز المالي", "综合/待分类", "General / To Classify", "低", "Low", "التميز المالي"),
        t("الخطط الرابحه", "综合/待分类", "General / To Classify", "低", "Low", "الخطط الرابحه"),
        t("المبادرات المتميزه", "综合/待分类", "General / To Classify", "低", "Low", "المبادرات المتميزه"),
        t("الايام المباركه", "综合/待分类", "General / To Classify", "低", "Low", "الايام المباركه"),
        t("الايام الفضيله", "综合/待分类", "General / To Classify", "低", "Low", "الايام الفضيله"),
        t("المشاريع العظيمه", "综合/待分类", "General / To Classify", "低", "Low", "المشاريع العظيمه"),
        t("رضا العملاء", "综合/待分类", "General / To Classify", "低", "Low", "رضا العملاء"),
        t("العمل الصالح", "综合/待分类", "General / To Classify", "低", "Low", "العمل الصالح"),
        t("المبادرات الصلبه", "综合/待分类", "General / To Classify", "低", "Low", "المبادرات الصلبه"),
        t("القرارات الماليه السليمه", "综合/待分类", "General / To Classify", "低", "Low", "القرارات الماليه السليمه"),
        t("العشر الاوايل", "综合/待分类", "General / To Classify", "低", "Low", "العشر الاوايل"),
        t("الاعمال المتينه", "综合/待分类", "General / To Classify", "低", "Low", "الاعمال المتينه"),
        t("الشركات الرايده", "综合/待分类", "General / To Classify", "低", "Low", "الشركات الرايده"),
        t("الشركات القويه", "综合/待分类", "General / To Classify", "低", "Low", "الشركات القويه")
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#19Mayıs", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "19Mayıs"),
        t("Spor Bayramı", "综合/待分类", "General / To Classify", "低", "Low", "Spor Bayramı"),
        t("Conte", "综合/待分类", "General / To Classify", "低", "Low", "Conte"),
        t("#salı", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "salı"),
        t("ASELSAN", "综合/待分类", "General / To Classify", "低", "Low", "ASELSAN"),
        t("#TürkGençliğiBüyükKurultayı", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "TürkGençliğiBüyükKurultayı"),
        t("#EmeklilerdenOyBeklemeyin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "EmeklilerdenOyBeklemeyin"),
        t("Direksiyonu", "综合/待分类", "General / To Classify", "低", "Low", "Direksiyonu"),
        t("Atam", "综合/待分类", "General / To Classify", "低", "Low", "Atam"),
        t("Ne Mutlu Türküm Diyene", "综合/待分类", "General / To Classify", "低", "Low", "Ne Mutlu Türküm Diyene"),
        t("Devlet Bahçeli", "综合/待分类", "General / To Classify", "低", "Low", "Devlet Bahçeli"),
        t("#5000KısmidenOyBeklemeyin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "5000KısmidenOyBeklemeyin"),
        t("Mersin&#39;de 6", "综合/待分类", "General / To Classify", "低", "Low", "Mersin&#39;de 6"),
        t("Mogan Gölü&#39;ne", "综合/待分类", "General / To Classify", "低", "Low", "Mogan Gölü&#39;ne"),
        t("Bahis", "综合/待分类", "General / To Classify", "低", "Low", "Bahis"),
        t("Yaşasın 19", "综合/待分类", "General / To Classify", "低", "Low", "Yaşasın 19"),
        t("fifa&#39;ya", "综合/待分类", "General / To Classify", "低", "Low", "fifa&#39;ya"),
        t("Samsun&#39;da", "综合/待分类", "General / To Classify", "低", "Low", "Samsun&#39;da"),
        t("Batuhan Karadeniz", "综合/待分类", "General / To Classify", "低", "Low", "Batuhan Karadeniz"),
        t("Küme", "综合/待分类", "General / To Classify", "低", "Low", "Küme")
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#YOKOxXPEDITION", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "YOKOxXPEDITION"),
        t("APASRA XAGA AWARDS", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "APASRA XAGA AWARDS"),
        t("#WUTheSeriesEP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP3"),
        t("FWB - ONS", "综合/待分类", "General / To Classify", "低", "Low", "FWB - ONS"),
        t("BEHIND THE SCENE BOL Q1", "综合/待分类", "General / To Classify", "低", "Low", "BEHIND THE SCENE BOL Q1"),
        t("#BTSBrokenOfLoveQ1", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "BTSBrokenOfLoveQ1"),
        t("we love mc juhoon", "综合/待分类", "General / To Classify", "低", "Low", "we love mc juhoon"),
        t("Bác Hồ", "综合/待分类", "General / To Classify", "低", "Low", "Bác Hồ"),
        t("#주훈_mc로_빛나다", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "주훈_mc로_빛나다"),
        t("#mcjuhoonshines", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "mcjuhoonshines"),
        t("bạch vô thường", "综合/待分类", "General / To Classify", "低", "Low", "bạch vô thường"),
        t("Taco Tuesday", "综合/待分类", "General / To Classify", "低", "Low", "Taco Tuesday"),
        t("ZKURT", "综合/待分类", "General / To Classify", "低", "Low", "ZKURT"),
        t("Questioning", "综合/待分类", "General / To Classify", "低", "Low", "Questioning"),
        t("MarketCat - $MC", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "MarketCat - $MC"),
        t("$XMARK", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$XMARK"),
        t("Pact", "综合/待分类", "General / To Classify", "低", "Low", "Pact"),
        t("Timely", "综合/待分类", "General / To Classify", "低", "Low", "Timely"),
        t("Hồ Chí Minh", "综合/待分类", "General / To Classify", "低", "Low", "Hồ Chí Minh"),
        t("$PULSE", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$PULSE")
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  {
    date: "2026-05-18",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("LazTech Diskon Setengah Harga", "综合/待分类", "General / To Classify", "低", "Low", "LazTech Diskon Setengah Harga"),
        t("#LaguLamaRasaBaru", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "LaguLamaRasaBaru"),
        t("#DuaSuaraSatuKarya", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "DuaSuaraSatuKarya"),
        t("#21พฤษภามาดูโกรกู", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "21พฤษภามาดูโกรกู"),
        t("#TheMandalorianAndGroguTH", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "TheMandalorianAndGroguTH"),
        t("NANI 1ST PRESENT MANDALORIAN", "综合/待分类", "General / To Classify", "低", "Low", "NANI 1ST PRESENT MANDALORIAN"),
        t("#GirlRulesSeriesEP10", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP10"),
        t("Trade $GENIUS", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "Trade $GENIUS"),
        t("BND HOME TRAILER FILM OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BND HOME TRAILER FILM OUT NOW"),
        t("Lazada", "综合/待分类", "General / To Classify", "低", "Low", "Lazada"),
        t("APASRA XAGA AWARDS", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "APASRA XAGA AWARDS"),
        t("KOE PREMIERES AT CDTV", "综合/待分类", "General / To Classify", "低", "Low", "KOE PREMIERES AT CDTV"),
        t("MOYA", "综合/待分类", "General / To Classify", "低", "Low", "MOYA"),
        t("Gubernur BI", "综合/待分类", "General / To Classify", "低", "Low", "Gubernur BI"),
        t("YEAH YEAH", "综合/待分类", "General / To Classify", "低", "Low", "YEAH YEAH"),
        t("Banyuwangi", "综合/待分类", "General / To Classify", "低", "Low", "Banyuwangi"),
        t("ITZY", "综合/待分类", "General / To Classify", "低", "Low", "ITZY"),
        t("Mojokerto", "综合/待分类", "General / To Classify", "低", "Low", "Mojokerto"),
        t("TNI Siap Bekerja", "综合/待分类", "General / To Classify", "低", "Low", "TNI Siap Bekerja"),
        t("RUN IT UP", "综合/待分类", "General / To Classify", "低", "Low", "RUN IT UP")
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#True5GxTeeTeePor", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "True5GxTeeTeePor"),
        t("#GirlRulesSeriesEP10", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP10"),
        t("#สกุณาซ่อนรักEP7", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "สกุณาซ่อนรักEP7"),
        t("#21พฤษภามาดูโกรกู", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "21พฤษภามาดูโกรกู"),
        t("NANI 1ST PRESENT MANDALORIAN", "综合/待分类", "General / To Classify", "低", "Low", "NANI 1ST PRESENT MANDALORIAN"),
        t("#TheMandalorianAndGroguTH", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "TheMandalorianAndGroguTH"),
        t("APASRA XAGA AWARDS", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "APASRA XAGA AWARDS"),
        t("DICE BUSKING AT KORAT", "综合/待分类", "General / To Classify", "低", "Low", "DICE BUSKING AT KORAT"),
        t("PRANGLY 3M TOGETHER", "综合/待分类", "General / To Classify", "低", "Low", "PRANGLY 3M TOGETHER"),
        t("SUPALAI MY STAYCATION BOY EP14", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUPALAI MY STAYCATION BOY EP14"),
        t("ZANG HAI LEGENDARY ANNIVERSARY", "综合/待分类", "General / To Classify", "低", "Low", "ZANG HAI LEGENDARY ANNIVERSARY"),
        t("REACT KIJSADA PARADISE", "综合/待分类", "General / To Classify", "低", "Low", "REACT KIJSADA PARADISE"),
        t("KISSME HEROINE MAKE X TTP", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KISSME HEROINE MAKE X TTP"),
        t("#ATLASBUSKINGATICONSIAM", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ATLASBUSKINGATICONSIAM"),
        t("#รักหักหลังEP14", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "รักหักหลังEP14"),
        t("#GalaxyxTayNew", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "GalaxyxTayNew"),
        t("#TAEYONGgoesWYLD", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "TAEYONGgoesWYLD"),
        t("#DICEบัสกิ้งโคราช", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "DICEบัสกิ้งโคราช"),
        t("#YOKOxXPEDITION", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "YOKOxXPEDITION"),
        t("#KEEPSILENT_WISHLESSPARTY", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KEEPSILENT_WISHLESSPARTY")
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#BGYO_OnDemandEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BGYO_OnDemandEP"),
        t("#GirlRulesSeriesEP10", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP10"),
        t("#YOKOxXPEDITION", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "YOKOxXPEDITION"),
        t("APASRA XAGA AWARDS", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "APASRA XAGA AWARDS"),
        t("WILBEA FOR ENSHOP MINDANAO", "综合/待分类", "General / To Classify", "低", "Low", "WILBEA FOR ENSHOP MINDANAO"),
        t("MARTSARI CLOSE TO YOU", "综合/待分类", "General / To Classify", "低", "Low", "MARTSARI CLOSE TO YOU"),
        t("#True5GxTeeTeePor", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "True5GxTeeTeePor"),
        t("KDEALING WITH PARIS MIKI", "综合/待分类", "General / To Classify", "低", "Low", "KDEALING WITH PARIS MIKI"),
        t("#KDMoscot", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "KDMoscot"),
        t("MB GOLDEN SEAT ANNIVERSARY", "综合/待分类", "General / To Classify", "低", "Low", "MB GOLDEN SEAT ANNIVERSARY"),
        t("JAZ GROOVE ON TEASER", "综合/待分类", "General / To Classify", "低", "Low", "JAZ GROOVE ON TEASER"),
        t("KOE PREMIERES AT CDTV", "综合/待分类", "General / To Classify", "低", "Low", "KOE PREMIERES AT CDTV"),
        t("OOTD RAVEdy WithHONOR", "综合/待分类", "General / To Classify", "低", "Low", "OOTD RAVEdy WithHONOR"),
        t("4SHOVILLE OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "4SHOVILLE OUT NOW"),
        t("TAEYONG WYLD Out Now", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TAEYONG WYLD Out Now"),
        t("UnderKoVer TONIGHT", "综合/待分类", "General / To Classify", "低", "Low", "UnderKoVer TONIGHT"),
        t("RABGEL YOGORISTARS", "综合/待分类", "General / To Classify", "低", "Low", "RABGEL YOGORISTARS"),
        t("Evan", "综合/待分类", "General / To Classify", "低", "Low", "Evan"),
        t("BINI HOUSE RECOGNITION", "综合/待分类", "General / To Classify", "低", "Low", "BINI HOUSE RECOGNITION"),
        t("LING X DIOR BEAUTY FRANCE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LING X DIOR BEAUTY FRANCE")
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#سقيا_الحجاج_في__يوم_الترويه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "سقيا_الحجاج_في__يوم_الترويه"),
        t("#اوقف_مصحفا___للحجاج_يوم_عرفه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "اوقف_مصحفا___للحجاج_يوم_عرفه"),
        t("#جمال_خاشقجي", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "جمال_خاشقجي"),
        t("#انقاذ_الطفله_جوانا", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "انقاذ_الطفله_جوانا"),
        t("#العشر_المباركه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "العشر_المباركه"),
        t("العمل الصالح", "综合/待分类", "General / To Classify", "低", "Low", "العمل الصالح"),
        t("الايام المباركه", "综合/待分类", "General / To Classify", "低", "Low", "الايام المباركه"),
        t("صالح الاعمال", "综合/待分类", "General / To Classify", "低", "Low", "صالح الاعمال"),
        t("العشر الاوايل", "综合/待分类", "General / To Classify", "低", "Low", "العشر الاوايل"),
        t("نادي الخليج", "综合/待分类", "General / To Classify", "低", "Low", "نادي الخليج"),
        t("الايام العشر", "综合/待分类", "General / To Classify", "低", "Low", "الايام العشر"),
        t("كبير الشرقيه", "综合/待分类", "General / To Classify", "低", "Low", "كبير الشرقيه"),
        t("التكبير المطلق", "综合/待分类", "General / To Classify", "低", "Low", "التكبير المطلق"),
        t("عنان السماء", "综合/待分类", "General / To Classify", "低", "Low", "عنان السماء"),
        t("الايام الفضيله", "综合/待分类", "General / To Classify", "低", "Low", "الايام الفضيله"),
        t("مصعب الجوير", "综合/待分类", "General / To Classify", "低", "Low", "مصعب الجوير"),
        t("اليوم الاثنين", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الاثنين"),
        t("خالد الغنام", "综合/待分类", "General / To Classify", "低", "Low", "خالد الغنام"),
        t("عرفه لعام", "综合/待分类", "General / To Classify", "低", "Low", "عرفه لعام"),
        t("الاعمال الصالحه", "综合/待分类", "General / To Classify", "低", "Low", "الاعمال الصالحه")
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("Sergen Yalçın", "综合/待分类", "General / To Classify", "低", "Low", "Sergen Yalçın"),
        t("Şenol Güneş", "综合/待分类", "General / To Classify", "低", "Low", "Şenol Güneş"),
        t("#SumudFilosunaSaldırı", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "SumudFilosunaSaldırı"),
        t("#KademeyiGetirin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "KademeyiGetirin"),
        t("Orman Benim", "综合/待分类", "General / To Classify", "低", "Low", "Orman Benim"),
        t("Glasner", "综合/待分类", "General / To Classify", "低", "Low", "Glasner"),
        t("#izindeiyiyiz", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "izindeiyiyiz"),
        t("GözünAydınEsme KızınYaşıyor", "综合/待分类", "General / To Classify", "低", "Low", "GözünAydınEsme KızınYaşıyor"),
        t("Razvan", "综合/待分类", "General / To Classify", "低", "Low", "Razvan"),
        t("#ErdenTimuraÖzgürlük", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ErdenTimuraÖzgürlük"),
        t("Graf", "综合/待分类", "General / To Classify", "低", "Low", "Graf"),
        t("Nuri Şahin", "综合/待分类", "General / To Classify", "低", "Low", "Nuri Şahin"),
        t("İlyas Salman", "综合/待分类", "General / To Classify", "低", "Low", "İlyas Salman"),
        t("#TeknOcak", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "TeknOcak"),
        t("Serdal Adalı", "综合/待分类", "General / To Classify", "低", "Low", "Serdal Adalı"),
        t("Spor Bayramı", "综合/待分类", "General / To Classify", "低", "Low", "Spor Bayramı"),
        t("GenelAf HerkesinTalebi", "综合/待分类", "General / To Classify", "低", "Low", "GenelAf HerkesinTalebi"),
        t("Yabancı", "综合/待分类", "General / To Classify", "低", "Low", "Yabancı"),
        t("Dino Toppmöller", "综合/待分类", "General / To Classify", "低", "Low", "Dino Toppmöller"),
        t("Conte", "综合/待分类", "General / To Classify", "低", "Low", "Conte")
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("APASRA XAGA AWARDS", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "APASRA XAGA AWARDS"),
        t("#YOKOxXPEDITION", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "YOKOxXPEDITION"),
        t("#GirlRulesSeriesEP10", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesEP10"),
        t("bạch vô thường", "综合/待分类", "General / To Classify", "低", "Low", "bạch vô thường"),
        t("WE LOVE MC JUHOON", "综合/待分类", "General / To Classify", "低", "Low", "WE LOVE MC JUHOON"),
        t("#주훈_MC로_빛나다", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "주훈_MC로_빛나다"),
        t("#LingDiorParfumsAPTLook", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LingDiorParfumsAPTLook"),
        t("OUR TALENTED SEONGHYEON", "综合/待分类", "General / To Classify", "低", "Low", "OUR TALENTED SEONGHYEON"),
        t("#ACEOMonTOP", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ACEOMonTOP"),
        t("Questioning", "综合/待分类", "General / To Classify", "低", "Low", "Questioning"),
        t("Evaluating", "综合/待分类", "General / To Classify", "低", "Low", "Evaluating"),
        t("Timely", "综合/待分类", "General / To Classify", "低", "Low", "Timely"),
        t("Durable", "综合/待分类", "General / To Classify", "低", "Low", "Durable"),
        t("Casual", "综合/待分类", "General / To Classify", "低", "Low", "Casual"),
        t("Formal", "综合/待分类", "General / To Classify", "低", "Low", "Formal"),
        t("Swift", "综合/待分类", "General / To Classify", "低", "Low", "Swift"),
        t("Neutral", "综合/待分类", "General / To Classify", "低", "Low", "Neutral"),
        t("visible", "综合/待分类", "General / To Classify", "低", "Low", "visible"),
        t("Biased", "综合/待分类", "General / To Classify", "低", "Low", "Biased"),
        t("Complex", "综合/待分类", "General / To Classify", "低", "Low", "Complex")
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  

  
  {
    date: "2026-05-17",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#CORTIS7thWin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "CORTIS7thWin"),
        t("#REDRED7thWin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "REDRED7thWin"),
        t("#REDRED_SeeingAllKindsOfWin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "REDRED_SeeingAllKindsOfWin"),
        t("#TicketToHeaven", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "TicketToHeaven"),
        t("FRESH DAY WITH EST", "综合/待分类", "General / To Classify", "低", "Low", "FRESH DAY WITH EST"),
        t("#코르티스", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "코르티스"),
        t("CORTIS GRAND SLAM", "综合/待分类", "General / To Classify", "低", "Low", "CORTIS GRAND SLAM"),
        t("NETJJ 2 YEARS OF LOVE", "综合/待分类", "General / To Classify", "低", "Low", "NETJJ 2 YEARS OF LOVE"),
        t("Daniel", "综合/待分类", "General / To Classify", "低", "Low", "Daniel"),
        t("Bapak", "综合/待分类", "General / To Classify", "低", "Low", "Bapak"),
        t("Waspada Propaganda Asing", "综合/待分类", "General / To Classify", "低", "Low", "Waspada Propaganda Asing"),
        t("iPhone", "综合/待分类", "General / To Classify", "低", "Low", "iPhone"),
        t("Selamat Hari Buku Nasional", "综合/待分类", "General / To Classify", "低", "Low", "Selamat Hari Buku Nasional"),
        t("Andro", "综合/待分类", "General / To Classify", "低", "Low", "Andro"),
        t("Xabi", "综合/待分类", "General / To Classify", "低", "Low", "Xabi"),
        t("The Economist", "综合/待分类", "General / To Classify", "低", "Low", "The Economist"),
        t("Jawa Timur", "综合/待分类", "General / To Classify", "低", "Low", "Jawa Timur"),
        t("Anies", "综合/待分类", "General / To Classify", "低", "Low", "Anies"),
        t("Makan Bergizi Gratis", "综合/待分类", "General / To Classify", "低", "Low", "Makan Bergizi Gratis"),
        t("Presiden Prabowo Subianto", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Presiden Prabowo Subianto")
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#MINISOxBamBam", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "MINISOxBamBam"),
        t("TEETEEPOR B2S WORKSHOP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TEETEEPOR B2S WORKSHOP"),
        t("#B2Sxตี๋ตี๋ป๋อ", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "B2Sxตี๋ตี๋ป๋อ"),
        t("#EXhOrizoninBKK_D2", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "EXhOrizoninBKK_D2"),
        t("#PerthSantaConcert", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "PerthSantaConcert"),
        t("#TicketToHeaven", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "TicketToHeaven"),
        t("FRESH DAY WITH EST", "综合/待分类", "General / To Classify", "低", "Low", "FRESH DAY WITH EST"),
        t("TAYStayCool WITH TAY TAWAN", "综合/待分类", "General / To Classify", "低", "Low", "TAYStayCool WITH TAY TAWAN"),
        t("NETJJ 2 YEARS OF LOVE", "综合/待分类", "General / To Classify", "低", "Low", "NETJJ 2 YEARS OF LOVE"),
        t("PERFECT CHOICE WITH EMI CHOYU", "综合/待分类", "General / To Classify", "低", "Low", "PERFECT CHOICE WITH EMI CHOYU"),
        t("AAS AT THAITASTE TRIP D2", "综合/待分类", "General / To Classify", "低", "Low", "AAS AT THAITASTE TRIP D2"),
        t("TONLIEW AT ROBINSON SAKON", "综合/待分类", "General / To Classify", "低", "Low", "TONLIEW AT ROBINSON SAKON"),
        t("CROWN THE KING", "综合/待分类", "General / To Classify", "低", "Low", "CROWN THE KING"),
        t("FREE SOUL CHARLOTTE17", "综合/待分类", "General / To Classify", "低", "Low", "FREE SOUL CHARLOTTE17"),
        t("WEIRDO 101 Q2", "综合/待分类", "General / To Classify", "低", "Low", "WEIRDO 101 Q2"),
        t("HAPPY EVER OURS", "综合/待分类", "General / To Classify", "低", "Low", "HAPPY EVER OURS"),
        t("#7selectNesteakyohoxEst", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "7selectNesteakyohoxEst"),
        t("#LaurierxTaytawan", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "LaurierxTaytawan"),
        t("#BUS_ดีใจที่ไม่มีเธอ_PhotoOfUs", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "BUS_ดีใจที่ไม่มีเธอ_PhotoOfUs"),
        t("#GeminiFourth", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "GeminiFourth")
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("DONBELLE BULAcan SA WAKAS", "综合/待分类", "General / To Classify", "低", "Low", "DONBELLE BULAcan SA WAKAS"),
        t("#LoveYouTeacherSeriesFinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LoveYouTeacherSeriesFinalEP"),
        t("WELCOME TO THE AIR", "综合/待分类", "General / To Classify", "低", "Low", "WELCOME TO THE AIR"),
        t("#XONARAatESCOLTA", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "XONARAatESCOLTA"),
        t("#เสน่หาวาโยตอนที่1", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "เสน่หาวาโยตอนที่1"),
        t("GELEX DREAM PAIR", "综合/待分类", "General / To Classify", "低", "Low", "GELEX DREAM PAIR"),
        t("#GeLexOnASAPXP", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "GeLexOnASAPXP"),
        t("#BelleMarianoAsCheska", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "BelleMarianoAsCheska"),
        t("dyson azupersonic event", "综合/待分类", "General / To Classify", "低", "Low", "dyson azupersonic event"),
        t("MIKA SMBAGUIO BUSKING", "综合/待分类", "General / To Classify", "低", "Low", "MIKA SMBAGUIO BUSKING"),
        t("KAIA", "综合/待分类", "General / To Classify", "低", "Low", "KAIA"),
        t("TABI MUSIC VIDEO RELEASE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TABI MUSIC VIDEO RELEASE"),
        t("HEATH SERENADES AyOSKADA", "综合/待分类", "General / To Classify", "低", "Low", "HEATH SERENADES AyOSKADA"),
        t("caprice coketime na", "品牌活动/消费", "Brand / Consumer", "低", "Low", "caprice coketime na"),
        t("HAPPY EVER OURS", "综合/待分类", "General / To Classify", "低", "Low", "HAPPY EVER OURS"),
        t("FRESH DAY WITH EST", "综合/待分类", "General / To Classify", "低", "Low", "FRESH DAY WITH EST"),
        t("BGYO SPRITE SUMMER FEST", "综合/待分类", "General / To Classify", "低", "Low", "BGYO SPRITE SUMMER FEST"),
        t("WRIVE AT CARMELLE LIVE", "综合/待分类", "General / To Classify", "低", "Low", "WRIVE AT CARMELLE LIVE"),
        t("HAPPY BIRTHDAY JULIE ANNE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HAPPY BIRTHDAY JULIE ANNE"),
        t("mika cozy cove", "综合/待分类", "General / To Classify", "低", "Low", "mika cozy cove")
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#الاستغفار_يغير_حياتك", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "الاستغفار_يغير_حياتك"),
        t("#النصر_غامبا_اوساكا", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "النصر_غامبا_اوساكا"),
        t("#دوري_ابطال_اسيا_2", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "دوري_ابطال_اسيا_2"),
        t("#الهلال_نيوم", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "الهلال_نيوم"),
        t("#اوقف_مصحفا_للحجاج_يوم__عرفه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "اوقف_مصحفا_للحجاج_يوم__عرفه"),
        t("يلو اسيا", "综合/待分类", "General / To Classify", "低", "Low", "يلو اسيا"),
        t("الفريق الياباني", "综合/待分类", "General / To Classify", "低", "Low", "الفريق الياباني"),
        t("سعد الناصر", "综合/待分类", "General / To Classify", "低", "Low", "سعد الناصر"),
        t("الاتحاد الاسيوي", "综合/待分类", "General / To Classify", "低", "Low", "الاتحاد الاسيوي"),
        t("علي يزيد", "综合/待分类", "General / To Classify", "低", "Low", "علي يزيد"),
        t("باقي الدوري", "综合/待分类", "General / To Classify", "低", "Low", "باقي الدوري"),
        t("الصداقات الحقيقيه", "综合/待分类", "General / To Classify", "低", "Low", "الصداقات الحقيقيه"),
        t("قول مندش", "综合/待分类", "General / To Classify", "低", "Low", "قول مندش"),
        t("اليوم الاحد", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الاحد"),
        t("الرقيه الشرعيه", "综合/待分类", "General / To Classify", "低", "Low", "الرقيه الشرعيه"),
        t("نادي صغير", "综合/待分类", "General / To Classify", "低", "Low", "نادي صغير"),
        t("الحكم الكويتي", "综合/待分类", "General / To Classify", "低", "Low", "الحكم الكويتي"),
        t("اليوم السبت", "综合/待分类", "General / To Classify", "低", "Low", "اليوم السبت"),
        t("فريق ياباني", "综合/待分类", "General / To Classify", "低", "Low", "فريق ياباني"),
        t("نادي الفتح", "综合/待分类", "General / To Classify", "低", "Low", "نادي الفتح")
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#pazar", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "pazar"),
        t("#HuzurArıyoruz", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "HuzurArıyoruz"),
        t("#cumartesi", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "cumartesi"),
        t("#17Mayıs", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "17Mayıs"),
        t("#BirGençlikŞöleni", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "BirGençlikŞöleni"),
        t("Türk Günü", "综合/待分类", "General / To Classify", "低", "Low", "Türk Günü"),
        t("Teşekkürler Türkiye", "综合/待分类", "General / To Classify", "低", "Low", "Teşekkürler Türkiye"),
        t("Kurbanım SevapKapısına", "综合/待分类", "General / To Classify", "低", "Low", "Kurbanım SevapKapısına"),
        t("Jesus", "综合/待分类", "General / To Classify", "低", "Low", "Jesus"),
        t("Dara", "综合/待分类", "General / To Classify", "低", "Low", "Dara"),
        t("Aşık Mahzuni Şerif", "综合/待分类", "General / To Classify", "低", "Low", "Aşık Mahzuni Şerif"),
        t("Hearts", "综合/待分类", "General / To Classify", "低", "Low", "Hearts"),
        t("Bira", "综合/待分类", "General / To Classify", "低", "Low", "Bira"),
        t("Kaan Sekban", "综合/待分类", "General / To Classify", "低", "Low", "Kaan Sekban"),
        t("Mem Ararat", "综合/待分类", "General / To Classify", "低", "Low", "Mem Ararat"),
        t("Yaz Medya Yaz", "综合/待分类", "General / To Classify", "低", "Low", "Yaz Medya Yaz"),
        t("Çorum", "综合/待分类", "General / To Classify", "低", "Low", "Çorum"),
        t("Ticaret Bakanlığı", "综合/待分类", "General / To Classify", "低", "Low", "Ticaret Bakanlığı"),
        t("İcardi", "综合/待分类", "General / To Classify", "低", "Low", "İcardi"),
        t("sendengecemiyorum benhala", "综合/待分类", "General / To Classify", "低", "Low", "sendengecemiyorum benhala")
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#LoveYouTeacherSeriesFinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LoveYouTeacherSeriesFinalEP"),
        t("#ORMkornnaphatxBlossomin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ORMkornnaphatxBlossomin"),
        t("FLAWLESS MC JUHOON", "综合/待分类", "General / To Classify", "法律/诈骗", "Legal / Fraud", "FLAWLESS MC JUHOON"),
        t("Bạch Vô Thường", "综合/待分类", "General / To Classify", "低", "Low", "Bạch Vô Thường"),
        t("LINGLING KWONG BA DIOR", "综合/待分类", "General / To Classify", "低", "Low", "LINGLING KWONG BA DIOR"),
        t("#JUSTGASFREE", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "JUSTGASFREE"),
        t("Cuối", "综合/待分类", "General / To Classify", "低", "Low", "Cuối"),
        t("WELCOME TO THE AIR", "综合/待分类", "General / To Classify", "低", "Low", "WELCOME TO THE AIR"),
        t("#เสน่หาวาโยตอนที่1", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "เสน่หาวาโยตอนที่1"),
        t("#BangkokBankMPartyXLingLing", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "BangkokBankMPartyXLingLing"),
        t("LINGLING X THE MALL GROUP", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LINGLING X THE MALL GROUP"),
        t("Epoch 2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Epoch 2"),
        t("Powell Bye Bye Bye", "综合/待分类", "General / To Classify", "低", "Low", "Powell Bye Bye Bye"),
        t("Fixed", "综合/待分类", "General / To Classify", "低", "Low", "Fixed"),
        t("WARM LOVE FOR DUNK", "综合/待分类", "General / To Classify", "低", "Low", "WARM LOVE FOR DUNK"),
        t("Solar", "综合/待分类", "General / To Classify", "低", "Low", "Solar"),
        t("Rita", "综合/待分类", "General / To Classify", "低", "Low", "Rita"),
        t("Perth", "综合/待分类", "General / To Classify", "低", "Low", "Perth"),
        t("Chủ Nhật", "综合/待分类", "General / To Classify", "低", "Low", "Chủ Nhật"),
        t("Mùng 1", "综合/待分类", "General / To Classify", "低", "Low", "Mùng 1")
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-05-16",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#PenuhiGiziBangsa", "话题标签/待分类", "Hashtag / To Classify", "法律/诈骗", "Legal / Fraud", "PenuhiGiziBangsa"),
        t("Maksimalkan Kemajuan Indonesia", "综合/待分类", "General / To Classify", "低", "Low", "Maksimalkan Kemajuan Indonesia"),
        t("#REDRED6thWin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "REDRED6thWin"),
        t("#CORTIS6thWin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "CORTIS6thWin"),
        t("#KolaborasiBUMDesaKDMP", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "KolaborasiBUMDesaKDMP"),
        t("#KerjaTPPBerdampak", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "KerjaTPPBerdampak"),
        t("Desa Lifuleo", "综合/待分类", "General / To Classify", "低", "Low", "Desa Lifuleo"),
        t("Ekonomi", "综合/待分类", "General / To Classify", "低", "Low", "Ekonomi"),
        t("JJ LIGHT UP THE DAY", "综合/待分类", "General / To Classify", "低", "Low", "JJ LIGHT UP THE DAY"),
        t("ENHYPEN&#39;S POWER ECHOES IN ASEA", "综合/待分类", "General / To Classify", "低", "Low", "ENHYPEN&#39;S POWER ECHOES IN ASEA"),
        t("WEIRDO 101 LETS START", "综合/待分类", "General / To Classify", "低", "Low", "WEIRDO 101 LETS START"),
        t("Goldfish", "综合/待分类", "General / To Classify", "低", "Low", "Goldfish"),
        t("BTS IS 7", "综合/待分类", "General / To Classify", "低", "Low", "BTS IS 7"),
        t("LOVE UPON A TIME EP8", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE UPON A TIME EP8"),
        t("Marsinah", "综合/待分类", "General / To Classify", "低", "Low", "Marsinah"),
        t("Jagung", "综合/待分类", "General / To Classify", "低", "Low", "Jagung"),
        t("Program Makan Bergizi Gratis", "综合/待分类", "General / To Classify", "低", "Low", "Program Makan Bergizi Gratis"),
        t("Ga Ribet", "综合/待分类", "General / To Classify", "低", "Low", "Ga Ribet"),
        t("Liverpool", "综合/待分类", "General / To Classify", "低", "Low", "Liverpool"),
        t("Klopp", "综合/待分类", "General / To Classify", "低", "Low", "Klopp")
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#ORMkornnaphatxBlossomin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ORMkornnaphatxBlossomin"),
        t("ORM BLOSSOMIN BODY CARE", "综合/待分类", "General / To Classify", "低", "Low", "ORM BLOSSOMIN BODY CARE"),
        t("#PraewMeetAndReadXTeeTeePor", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "PraewMeetAndReadXTeeTeePor"),
        t("#LingDiorEyewearSS26", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "LingDiorEyewearSS26"),
        t("PRAEW PARTY WITH TTP", "综合/待分类", "General / To Classify", "低", "Low", "PRAEW PARTY WITH TTP"),
        t("LINGLING KWONG BA DIOR", "综合/待分类", "General / To Classify", "低", "Low", "LINGLING KWONG BA DIOR"),
        t("#EXhOrizon_in_BANGKOK", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "EXhOrizon_in_BANGKOK"),
        t("#WEIRDO101Series", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WEIRDO101Series"),
        t("WEIRDO 101 LETS START", "综合/待分类", "General / To Classify", "低", "Low", "WEIRDO 101 LETS START"),
        t("WARM LOVE FOR DUNK", "综合/待分类", "General / To Classify", "低", "Low", "WARM LOVE FOR DUNK"),
        t("THE MOST PRECIOUS GEM IS S2", "综合/待分类", "General / To Classify", "低", "Low", "THE MOST PRECIOUS GEM IS S2"),
        t("GULF KORHAEW​ CAPT", "综合/待分类", "General / To Classify", "低", "Low", "GULF KORHAEW​ CAPT"),
        t("BVTL LOVE DIARY", "综合/待分类", "General / To Classify", "低", "Low", "BVTL LOVE DIARY"),
        t("MAXNAT HEARTDISK 4TH", "综合/待分类", "General / To Classify", "低", "Low", "MAXNAT HEARTDISK 4TH"),
        t("TAY X SKY ON 2 STORIES", "品牌活动/消费", "Brand / Consumer", "低", "Low", "TAY X SKY ON 2 STORIES"),
        t("ONE-DAY MANAGERS WITH NT1", "综合/待分类", "General / To Classify", "低", "Low", "ONE-DAY MANAGERS WITH NT1"),
        t("POOM BD PARTY", "综合/待分类", "General / To Classify", "低", "Low", "POOM BD PARTY"),
        t("RYUJINPATJI 4M UNLOCKED", "综合/待分类", "General / To Classify", "低", "Low", "RYUJINPATJI 4M UNLOCKED"),
        t("1ST TPJS FS IN SHANGHAI", "综合/待分类", "General / To Classify", "低", "Low", "1ST TPJS FS IN SHANGHAI"),
        t("AAS AT THAITASTE TRIP D1", "综合/待分类", "General / To Classify", "低", "Low", "AAS AT THAITASTE TRIP D1")
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#XONARAatESCOLTA", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "XONARAatESCOLTA"),
        t("DONBELLE ROAD TO ANTIPS", "综合/待分类", "General / To Classify", "低", "Low", "DONBELLE ROAD TO ANTIPS"),
        t("PANALO SA CAPEATH", "综合/待分类", "General / To Classify", "低", "Low", "PANALO SA CAPEATH"),
        t("#ChillTimeWithCH", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ChillTimeWithCH"),
        t("#BINI_Signals", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "BINI_Signals"),
        t("#SipWithCapCola", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "SipWithCapCola"),
        t("CAPRICE COKETIME NA", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CAPRICE COKETIME NA"),
        t("BGYO SPRITE SUMMER FEST", "综合/待分类", "General / To Classify", "低", "Low", "BGYO SPRITE SUMMER FEST"),
        t("#ภพเธอEP8", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ภพเธอEP8"),
        t("ORM BLOSSOMIN BODY CARE", "综合/待分类", "General / To Classify", "低", "Low", "ORM BLOSSOMIN BODY CARE"),
        t("LOVE UPON A TIME EP8", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE UPON A TIME EP8"),
        t("HEATHs COCACOLA MOMENT", "综合/待分类", "General / To Classify", "低", "Low", "HEATHs COCACOLA MOMENT"),
        t("SB19 TOKYO TO OSAKA", "综合/待分类", "General / To Classify", "低", "Low", "SB19 TOKYO TO OSAKA"),
        t("THE LAST PROMISE", "综合/待分类", "General / To Classify", "低", "Low", "THE LAST PROMISE"),
        t("LOREAL BA REBECCA X CANNES26", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LOREAL BA REBECCA X CANNES26"),
        t("DYSON AZuperSONIC EVENT", "综合/待分类", "General / To Classify", "低", "Low", "DYSON AZuperSONIC EVENT"),
        t("HAPPY BIRTHDAY IU", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HAPPY BIRTHDAY IU"),
        t("LINGLING KWONG BA DIOR", "综合/待分类", "General / To Classify", "低", "Low", "LINGLING KWONG BA DIOR"),
        t("TABI OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TABI OUT NOW"),
        t("BORN TO BE YOXI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BORN TO BE YOXI")
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#ام_احمد_تنااشدكم_احسان", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ام_احمد_تنااشدكم_احسان"),
        t("#اوقف_مصحفا_للحجاج__يوم_عرفه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "اوقف_مصحفا_للحجاج__يوم_عرفه"),
        t("#صباح_الاشياء_المشرقه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "صباح_الاشياء_المشرقه"),
        t("#النصر_غامبا_اوساكا", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "النصر_غامبا_اوساكا"),
        t("#ساعه_استجابه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ساعه_استجابه"),
        t("التميز المالي", "综合/待分类", "General / To Classify", "低", "Low", "التميز المالي"),
        t("التفوق الاقتصادي", "综合/待分类", "General / To Classify", "低", "Low", "التفوق الاقتصادي"),
        t("يلو اسيا", "综合/待分类", "General / To Classify", "低", "Low", "يلو اسيا"),
        t("الخطط الرابحه", "综合/待分类", "General / To Classify", "低", "Low", "الخطط الرابحه"),
        t("المبادرات المتميزه", "综合/待分类", "General / To Classify", "低", "Low", "المبادرات المتميزه"),
        t("المبادرات الصلبه", "综合/待分类", "General / To Classify", "低", "Low", "المبادرات الصلبه"),
        t("القرارات الماليه الحكيمه", "综合/待分类", "General / To Classify", "低", "Low", "القرارات الماليه الحكيمه"),
        t("الاعمال المزدهره", "综合/待分类", "General / To Classify", "低", "Low", "الاعمال المزدهره"),
        t("علي النبي", "综合/待分类", "General / To Classify", "低", "Low", "علي النبي"),
        t("الاعمال المتينه", "综合/待分类", "General / To Classify", "低", "Low", "الاعمال المتينه"),
        t("اليوم الفضيل", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الفضيل"),
        t("المشاريع العظيمه", "综合/待分类", "General / To Classify", "低", "Low", "المشاريع العظيمه"),
        t("الفريق الياباني", "综合/待分类", "General / To Classify", "低", "Low", "الفريق الياباني"),
        t("الشركات الرايده", "综合/待分类", "General / To Classify", "低", "Low", "الشركات الرايده"),
        t("علي الاخدود", "综合/待分类", "General / To Classify", "低", "Low", "علي الاخدود")
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#cumartesi", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "cumartesi"),
        t("#izahıYok", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "izahıYok"),
        t("#DOMİN4SYON", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "DOMİN4SYON"),
        t("hayırlı cumalar", "综合/待分类", "General / To Classify", "低", "Low", "hayırlı cumalar"),
        t("#RİZvBJK", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "RİZvBJK"),
        t("#tudors", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "tudors"),
        t("Tarkan", "综合/待分类", "General / To Classify", "低", "Low", "Tarkan"),
        t("Çorum", "综合/待分类", "General / To Classify", "低", "Low", "Çorum"),
        t("Metin Öztürk", "综合/待分类", "General / To Classify", "低", "Low", "Metin Öztürk"),
        t("Jesus", "综合/待分类", "General / To Classify", "低", "Low", "Jesus"),
        t("Cengiz", "综合/待分类", "General / To Classify", "低", "Low", "Cengiz"),
        t("Hasan Tahsin", "综合/待分类", "General / To Classify", "低", "Low", "Hasan Tahsin"),
        t("Rasim Ozan Kütahyalı", "综合/待分类", "General / To Classify", "低", "Low", "Rasim Ozan Kütahyalı"),
        t("Stajyeri Çırağı", "综合/待分类", "General / To Classify", "低", "Low", "Stajyeri Çırağı"),
        t("Maldini", "综合/待分类", "General / To Classify", "低", "Low", "Maldini"),
        t("Örgütlü Kötülük", "综合/待分类", "General / To Classify", "低", "Low", "Örgütlü Kötülük"),
        t("denklikyoksa gelecekyok", "综合/待分类", "General / To Classify", "低", "Low", "denklikyoksa gelecekyok"),
        t("Sayın Genel Müdürüm", "综合/待分类", "General / To Classify", "低", "Low", "Sayın Genel Müdürüm"),
        t("eflatunmnrch", "综合/待分类", "General / To Classify", "低", "Low", "eflatunmnrch"),
        t("Mem Ararat", "综合/待分类", "General / To Classify", "低", "Low", "Mem Ararat")
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("ORM BLOSSOMIN BODY CARE", "综合/待分类", "General / To Classify", "低", "Low", "ORM BLOSSOMIN BODY CARE"),
        t("#ORMkornnaphatxBlossomin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ORMkornnaphatxBlossomin"),
        t("lụm lúa", "综合/待分类", "General / To Classify", "低", "Low", "lụm lúa"),
        t("#LingDiorEyewearSS26", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "LingDiorEyewearSS26"),
        t("#JUSTGASFREE", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "JUSTGASFREE"),
        t("hắc vô thường", "综合/待分类", "General / To Classify", "低", "Low", "hắc vô thường"),
        t("Epoch 2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Epoch 2"),
        t("Cuối", "综合/待分类", "General / To Classify", "低", "Low", "Cuối"),
        t("Gently Used Lada", "综合/待分类", "General / To Classify", "低", "Low", "Gently Used Lada"),
        t("Thứ 7", "综合/待分类", "General / To Classify", "低", "Low", "Thứ 7"),
        t("#ออมกรณ์นภัส", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ออมกรณ์นภัส"),
        t("#OnlyFriendsDreamOnFinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "OnlyFriendsDreamOnFinalEP"),
        t("Obvious", "综合/待分类", "General / To Classify", "低", "Low", "Obvious"),
        t("Balanced", "综合/待分类", "General / To Classify", "低", "Low", "Balanced"),
        t("Questioning", "综合/待分类", "General / To Classify", "低", "Low", "Questioning"),
        t("Timely", "综合/待分类", "General / To Classify", "低", "Low", "Timely"),
        t("Uncertain", "综合/待分类", "General / To Classify", "低", "Low", "Uncertain"),
        t("Fragile", "综合/待分类", "General / To Classify", "低", "Low", "Fragile"),
        t("evaluating", "综合/待分类", "General / To Classify", "低", "Low", "evaluating"),
        t("Durable", "综合/待分类", "General / To Classify", "低", "Low", "Durable")
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  {
    date: "2026-05-15",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#PertemuanXiTrump", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "PertemuanXiTrump"),
        t("Kompak Perkuat Negeri", "综合/待分类", "General / To Classify", "低", "Low", "Kompak Perkuat Negeri"),
        t("#Sk8erBoiYoshiDay", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "Sk8erBoiYoshiDay"),
        t("#요시를_사랑하는_515가지이유", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "요시를_사랑하는_515가지이유"),
        t("BORN TO BE YOXI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BORN TO BE YOXI"),
        t("#満天の想いが降り注ぐYOSHI_DAY", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "満天の想いが降り注ぐYOSHI_DAY"),
        t("Nadiem", "综合/待分类", "General / To Classify", "低", "Low", "Nadiem"),
        t("#KAZZAWARDS2026xWilliamEst", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "KAZZAWARDS2026xWilliamEst"),
        t("PPP FAMILY KAZZAWARDS", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "PPP FAMILY KAZZAWARDS"),
        t("KOE OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "KOE OUT NOW"),
        t("Trade $KAIO", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "Trade $KAIO"),
        t("GRABFOOD X JOONGDUNK", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GRABFOOD X JOONGDUNK"),
        t("Gibran Majukan Wisata Daerah", "旅行/本地活动", "Travel / Local Event", "低", "Low", "Gibran Majukan Wisata Daerah"),
        t("Canton", "综合/待分类", "General / To Classify", "低", "Low", "Canton"),
        t("PERTH DOMIIA ENGAGE IN KAZZ", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "PERTH DOMIIA ENGAGE IN KAZZ"),
        t("NP GLOW WITH AMUSE", "综合/待分类", "General / To Classify", "低", "Low", "NP GLOW WITH AMUSE"),
        t("Beckham", "综合/待分类", "General / To Classify", "低", "Low", "Beckham"),
        t("Zaka", "综合/待分类", "General / To Classify", "低", "Low", "Zaka"),
        t("Revan", "综合/待分类", "General / To Classify", "低", "Low", "Revan"),
        t("RACHA LUNAR X KAZZAWARDS26", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "RACHA LUNAR X KAZZAWARDS26")
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#AMUSExNamping", "话题标签/待分类", "Hashtag / To Classify", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "AMUSExNamping"),
        t("NP GLOW WITH AMUSE", "综合/待分类", "General / To Classify", "低", "Low", "NP GLOW WITH AMUSE"),
        t("#asicsthxfilm", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "asicsthxfilm"),
        t("FILM ASICS OPENING", "综合/待分类", "General / To Classify", "低", "Low", "FILM ASICS OPENING"),
        t("#GISMOWxTeeTeePor", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GISMOWxTeeTeePor"),
        t("#AsicsxNutLYKN", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "AsicsxNutLYKN"),
        t("#AsicsthxTRE", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "AsicsthxTRE"),
        t("ASICS WITH NUT", "综合/待分类", "General / To Classify", "低", "Low", "ASICS WITH NUT"),
        t("TRE AT ASICS SQ1", "综合/待分类", "General / To Classify", "低", "Low", "TRE AT ASICS SQ1"),
        t("GISMOW CUTE DAY X TTP", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GISMOW CUTE DAY X TTP"),
        t("THE LAST PROMISE", "综合/待分类", "General / To Classify", "低", "Low", "THE LAST PROMISE"),
        t("FREE SOUL CHARLOTTE15", "综合/待分类", "General / To Classify", "低", "Low", "FREE SOUL CHARLOTTE15"),
        t("OOMBAM FULFILL PROMOTE", "综合/待分类", "General / To Classify", "低", "Low", "OOMBAM FULFILL PROMOTE"),
        t("KengHarit", "综合/待分类", "General / To Classify", "低", "Low", "KengHarit"),
        t("Winter Season EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Winter Season EP1"),
        t("#BrokenOfLoveFinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BrokenOfLoveFinalEP"),
        t("#3CEGummyxNuNew", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "3CEGummyxNuNew"),
        t("#OnlyFriendsDreamOn", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "OnlyFriendsDreamOn"),
        t("#nnutdan", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "nnutdan"),
        t("#NespressoCannesxBecky", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "NespressoCannesxBecky")
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#SummerSonic2026", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "SummerSonic2026"),
        t("#SummerSonic2026", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "SummerSonic2026"),
        t("DONBELLE PARA SIEMPRE", "综合/待分类", "General / To Classify", "低", "Low", "DONBELLE PARA SIEMPRE"),
        t("TABI OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TABI OUT NOW"),
        t("#DonnyPangilinanAsCisco", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "DonnyPangilinanAsCisco"),
        t("#BelleMarianoAsCheska", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "BelleMarianoAsCheska"),
        t("#Sk8erBoiYoshiDay", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "Sk8erBoiYoshiDay"),
        t("BORN TO BE YOXI", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BORN TO BE YOXI"),
        t("Bato", "综合/待分类", "General / To Classify", "低", "Low", "Bato"),
        t("THE LAST PROMISE", "综合/待分类", "General / To Classify", "低", "Low", "THE LAST PROMISE"),
        t("RALPH JOINS PUREGOLD FUN", "综合/待分类", "General / To Classify", "低", "Low", "RALPH JOINS PUREGOLD FUN"),
        t("RALPH JOINS PUREGOLD FUN", "综合/待分类", "General / To Classify", "低", "Low", "RALPH JOINS PUREGOLD FUN"),
        t("GSIS", "综合/待分类", "General / To Classify", "低", "Low", "GSIS"),
        t("KOE OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "KOE OUT NOW"),
        t("Senate", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Senate"),
        t("WILBEA WITH HONOR600", "综合/待分类", "General / To Classify", "低", "Low", "WILBEA WITH HONOR600"),
        t("ASHLEY FOR PALMOLIVE", "综合/待分类", "General / To Classify", "低", "Low", "ASHLEY FOR PALMOLIVE"),
        t("Cayetano", "综合/待分类", "General / To Classify", "低", "Low", "Cayetano"),
        t("Aplasca", "综合/待分类", "General / To Classify", "低", "Low", "Aplasca"),
        t("GINJAY CELEBRATE 20TH KAZZ", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "GINJAY CELEBRATE 20TH KAZZ")
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#الاستغفار_فيه_بركه_لكل_حياتك", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "الاستغفار_فيه_بركه_لكل_حياتك"),
        t("#امواتكم_يفرحون_بالدعاء_لهم", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "امواتكم_يفرحون_بالدعاء_لهم"),
        t("#يوم_الجمعه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "يوم_الجمعه"),
        t("#يوم_الجمعه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "يوم_الجمعه"),
        t("#اوقف_مصحفا__للحجاج_يوم_عرفه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "اوقف_مصحفا__للحجاج_يوم_عرفه"),
        t("علي محمد", "综合/待分类", "General / To Classify", "低", "Low", "علي محمد"),
        t("الصداقات الحقيقيه", "综合/待分类", "General / To Classify", "低", "Low", "الصداقات الحقيقيه"),
        t("عنابي سدير", "综合/待分类", "General / To Classify", "低", "Low", "عنابي سدير"),
        t("اليوم المبارك", "综合/待分类", "General / To Classify", "低", "Low", "اليوم المبارك"),
        t("النسخه الاضعف", "综合/待分类", "General / To Classify", "低", "Low", "النسخه الاضعف"),
        t("الفلفل الوردي", "综合/待分类", "General / To Classify", "低", "Low", "الفلفل الوردي"),
        t("التفكير الايجابي", "综合/待分类", "General / To Classify", "低", "Low", "التفكير الايجابي"),
        t("جزر القمر", "综合/待分类", "General / To Classify", "低", "Low", "جزر القمر"),
        t("القلب النقي", "综合/待分类", "General / To Classify", "低", "Low", "القلب النقي"),
        t("رياض الجنه", "综合/待分类", "General / To Classify", "低", "Low", "رياض الجنه"),
        t("موتي المسلمين", "综合/待分类", "General / To Classify", "低", "Low", "موتي المسلمين"),
        t("يلو اسيا", "综合/待分类", "General / To Classify", "低", "Low", "يلو اسيا"),
        t("الضاحكين المستبشرين", "综合/待分类", "General / To Classify", "低", "Low", "الضاحكين المستبشرين"),
        t("نور مابين الجمعتين", "综合/待分类", "General / To Classify", "低", "Low", "نور مابين الجمعتين"),
        t("سلم علي", "综合/待分类", "General / To Classify", "低", "Low", "سلم علي")
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("Hayırlı Cumalar", "综合/待分类", "General / To Classify", "低", "Low", "Hayırlı Cumalar"),
        t("Maldini", "综合/待分类", "General / To Classify", "低", "Low", "Maldini"),
        t("#KimiKandırıyorsunuz", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "KimiKandırıyorsunuz"),
        t("İsmail Yüksek", "综合/待分类", "General / To Classify", "低", "Low", "İsmail Yüksek"),
        t("#CumamızMübarekOlsun", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "CumamızMübarekOlsun"),
        t("#KulHakkıEmeklininHakkı", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "KulHakkıEmeklininHakkı"),
        t("#Emeklilik5000KısmininHakkı", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "Emeklilik5000KısmininHakkı"),
        t("#SüreCezamaİndirim", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "SüreCezamaİndirim"),
        t("Üsküdar Belediyesi&#39;ne", "综合/待分类", "General / To Classify", "低", "Low", "Üsküdar Belediyesi&#39;ne"),
        t("Gürsel Tekin", "综合/待分类", "General / To Classify", "低", "Low", "Gürsel Tekin"),
        t("Stajyeri Çırağı", "综合/待分类", "General / To Classify", "低", "Low", "Stajyeri Çırağı"),
        t("Yusuf Sarı", "综合/待分类", "General / To Classify", "低", "Low", "Yusuf Sarı"),
        t("Kazakistan&#39;ın Türkistan", "综合/待分类", "General / To Classify", "低", "Low", "Kazakistan&#39;ın Türkistan"),
        t("Gençlik Haftası", "综合/待分类", "General / To Classify", "低", "Low", "Gençlik Haftası"),
        t("Oğuz Aydın", "综合/待分类", "General / To Classify", "低", "Low", "Oğuz Aydın"),
        t("Ülkeyi CHP&#39;ye", "综合/待分类", "General / To Classify", "低", "Low", "Ülkeyi CHP&#39;ye"),
        t("Çince", "综合/待分类", "General / To Classify", "低", "Low", "Çince"),
        t("Sevigen", "综合/待分类", "General / To Classify", "低", "Low", "Sevigen"),
        t("Drake", "综合/待分类", "General / To Classify", "低", "Low", "Drake"),
        t("Tarkan", "综合/待分类", "General / To Classify", "低", "Low", "Tarkan")
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("Lụm Lúa", "综合/待分类", "General / To Classify", "低", "Low", "Lụm Lúa"),
        t("THE LAST PROMISE", "综合/待分类", "General / To Classify", "低", "Low", "THE LAST PROMISE"),
        t("#BrokenOfLoveFinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BrokenOfLoveFinalEP"),
        t("#KAZZAWARDS2026xPerth", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "KAZZAWARDS2026xPerth"),
        t("PERTH DOMIIA ENGAGE IN KAZZ", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "PERTH DOMIIA ENGAGE IN KAZZ"),
        t("#AMUSExNamping", "话题标签/待分类", "Hashtag / To Classify", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "AMUSExNamping"),
        t("NP GLOW WITH AMUSE", "综合/待分类", "General / To Classify", "低", "Low", "NP GLOW WITH AMUSE"),
        t("Biased", "综合/待分类", "General / To Classify", "低", "Low", "Biased"),
        t("Obvious", "综合/待分类", "General / To Classify", "低", "Low", "Obvious"),
        t("Timely", "综合/待分类", "General / To Classify", "低", "Low", "Timely"),
        t("Lasting", "综合/待分类", "General / To Classify", "低", "Low", "Lasting"),
        t("Questioning", "综合/待分类", "General / To Classify", "低", "Low", "Questioning"),
        t("Minor", "综合/待分类", "General / To Classify", "低", "Low", "Minor"),
        t("Extended", "综合/待分类", "General / To Classify", "低", "Low", "Extended"),
        t("Balanced", "综合/待分类", "General / To Classify", "低", "Low", "Balanced"),
        t("Formal", "综合/待分类", "General / To Classify", "低", "Low", "Formal"),
        t("#JAMESxPRADA", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "JAMESxPRADA"),
        t("china take over", "综合/待分类", "General / To Classify", "低", "Low", "china take over"),
        t("#JAMESonWKOREA", "话题标签/待分类", "Hashtag / To Classify", "政治/争议", "Political / Controversy", "JAMESonWKOREA"),
        t("Neutral", "综合/待分类", "General / To Classify", "低", "Low", "Neutral")
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "娱乐/明星/品牌活动优先"],
        ["菲律宾", "明星生日/演唱会/品牌联动优先"],
        ["印尼", "娱乐/K-pop/品牌活动优先"],
        ["沙特", "体育/生活方式/品牌优先"],
        ["土耳其", "体育/音乐优先，政治法律谨慎"],
        ["越南", "需要本地语言关键词补强"]
      ],
      en: [
        ["Thailand", "Entertainment / celebrity / brand events"],
        ["Philippines", "Celebrity / concerts / brand campaigns"],
        ["Indonesia", "Entertainment / K-pop / brand topics"],
        ["Saudi Arabia", "Sports / lifestyle / brand topics"],
        ["Turkey", "Sports/music first; watch political/legal"],
        ["Vietnam", "Needs local-language keyword enrichment"]
      ]
    }
  },

  

  

  

  

  

  









  {
    date: "2026-05-14",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#XLBagiBagiBonus", "品牌活动/福利传播", "Brand Campaign / Giveaway", "低", "Low", "XLBagiBagiBonus"),
        t("#WUTheSeriesEP2", "剧集/娱乐", "Drama / Entertainment", "低", "Low", "WUTheSeriesEP2"),
        t("PERTHSANTA DEVIL KISS PT", "泰娱/明星粉丝向", "Thai Entertainment / Celebrity Fandom", "低", "Low", "PERTHSANTA DEVIL KISS PT"),
        t("A. LG QNED", "品牌/消费电子", "Brand / Consumer Electronics", "低", "Low", "A. LG QNED"),
        t("KNOCK ON Vol", "音乐/演出/粉丝活动", "Music / Show / Fandom", "低", "Low", "KNOCK ON Vol"),
        t("WHOLE DIFFERENT AESPA", "K-pop/粉丝内容", "K-pop / Fandom", "低", "Low", "WHOLE DIFFERENT AESPA"),
        t("SKYNANI GIVING AND SHARING", "泰娱/明星粉丝向", "Thai Entertainment / Celebrity Fandom", "低", "Low", "SKYNANI GIVING AND SHARING"),
        t("JJ COVER SONG", "音乐翻唱/短视频内容", "Music Covers / Short-Form Content", "低", "Low", "JJ COVER SONG"),
        t("#AntiMafiaTanah", "社会议题", "Social Issue", "争议/公共议题", "Controversy / Public Issue", "AntiMafiaTanah"),
        t("TNI Kita", "军方/国家机构相关", "Military / Public Institution", "政治/公共机构", "Political / Public Institution", "TNI Kita"),
        t("Prabowo Jaga Energi Nasional", "总统/能源政策相关", "President / Energy Policy", "政治", "Political", "Prabowo Jaga Energi Nasional"),
        t("AIDS", "医疗/公共健康", "Medical / Public Health", "医疗/敏感", "Medical / Sensitive", "AIDS")
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#ทรายสก๊อต", "生活方式/梗/人物话题（需二次确认语境）", "Lifestyle / Meme / Person Topic (Needs Context Check)", "低/需确认", "Low / Needs Check", "#ทรายสก๊อต"),
        t("#WUTheSeriesEP2", "剧集/娱乐", "Drama / Entertainment", "低", "Low", "WUTheSeriesEP2"),
        t("#WoodyxTeeTeePor", "节目/明星访谈", "Show / Celebrity Interview", "低", "Low", "WoodyxTeeTeePor"),
        t("TTP ON WOODY WORLD", "明星访谈/节目", "Celebrity Interview / Show", "低", "Low", "TTP ON WOODY WORLD"),
        t("PERTHSANTA DEVIL KISS PT", "泰娱/明星粉丝向", "Thai Entertainment / Celebrity Fandom", "低", "Low", "PERTHSANTA DEVIL KISS PT"),
        t("FOURTH X KIJSADA PARADISE", "明星联动/活动", "Celebrity Collaboration / Event", "低", "Low", "FOURTH X KIJSADA PARADISE"),
        t("LINGLING BORN TO BLOOM", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "LINGLING BORN TO BLOOM"),
        t("MAYBELLINE CANDY ENGFA", "美妆品牌活动/代言传播", "Beauty Brand Campaign", "低", "Low", "MAYBELLINE CANDY ENGFA"),
        t("ZEENUNEW AIMA SHOW", "节目/艺人现场", "Show / Live Appearance", "低", "Low", "ZEENUNEW AIMA SHOW"),
        t("D-5 TAEYONG 1ST ALBUM", "K-pop/专辑倒计时", "K-pop / Album Countdown", "低", "Low", "D-5 TAEYONG 1ST ALBUM")
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("LOLLA MO ALLIANZ SB19", "音乐节/男团 SB19", "Music / SB19", "低", "Low", "LOLLA MO ALLIANZ SB19"),
        t("WRTEN CONCERT PRESS CONFERENCE", "演唱会/发布会", "Concert / Press Conference", "低", "Low", "WRTEN CONCERT PRESS CONFERENCE"),
        t("DUSTIN YU AT TWENTYFIVE", "明星生日/粉丝活动", "Celebrity Birthday / Fandom", "低", "Low", "DUSTIN YU AT TWENTYFIVE"),
        t("#JonaxxMOSKab21", "小说/剧集/粉丝活动", "Fiction / Drama / Fandom", "低", "Low", "JonaxxMOSKab21"),
        t("HAPPY BIRTHDAY FYANG", "明星/网红生日", "Celebrity / Influencer Birthday", "低", "Low", "HAPPY BIRTHDAY FYANG"),
        t("#MeetAnghel", "娱乐/人物见面活动", "Entertainment / Meet-up", "低", "Low", "MeetAnghel"),
        t("#WeichanglixFaye", "明星/粉丝联动", "Celebrity / Fandom", "低", "Low", "WeichanglixFaye"),
        t("BOSS PAULO BLESSED YEARS", "明星生日/粉丝向", "Celebrity Birthday / Fandom", "低", "Low", "BOSS PAULO BLESSED YEARS"),
        t("#PauloAvelinoAtThirtyEight", "明星生日/粉丝向", "Celebrity Birthday / Fandom", "低", "Low", "PauloAvelinoAtThirtyEight"),
        t("CAPRICE AS ANGEL", "影视/角色宣传", "Film/TV / Character Promotion", "低", "Low", "CAPRICE AS ANGEL"),
        t("#TheSummerFyangTurned20", "明星/网红生日", "Celebrity / Influencer Birthday", "低", "Low", "TheSummerFyangTurned20"),
        t("BEAT THE HEATH WITH NESCAFE", "品牌活动/饮品", "Brand Campaign / Beverage", "低", "Low", "BEAT THE HEATH WITH NESCAFE"),
        t("JADEWARD LOVE ON THE EDGE", "剧集/CP/粉丝内容", "Drama / Ship / Fandom", "低", "Low", "JADEWARD LOVE ON THE EDGE"),
        t("COKE and CHILL with ASHLEY", "品牌/明星活动", "Brand / Celebrity Campaign", "低", "Low", "COKE and CHILL with ASHLEY"),
        t("GIOLUNA PERFECT MATCH", "CP/粉丝内容", "Ship / Fandom", "低", "Low", "GIOLUNA PERFECT MATCH"),
        t("GINNY AT CHLOE PARFUMS STORE", "香水/品牌线下活动", "Perfume / Offline Brand Event", "低", "Low", "GINNY AT CHLOE PARFUMS STORE"),
        t("MARTSARI THROUGH UPS AND DOWNS", "剧集/CP/粉丝内容", "Drama / Ship / Fandom", "低", "Low", "MARTSARI THROUGH UPS AND DOWNS"),
        t("Senate", "政治机构", "Political Institution", "政治", "Political", "Senate Philippines"),
        t("The Hague", "国际司法/政治新闻", "International Justice / Politics", "政治/争议", "Political / Controversy", "The Hague Philippines"),
        t("Duterte", "政治人物", "Political Figure", "政治/争议", "Political / Controversy", "Duterte")
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#قرعه_كاس_اسيا", "亚洲杯抽签/体育", "Asian Cup Draw / Sports", "低", "Low", "قرعه_كاس_اسيا"),
        t("#قهوه_المساء", "生活方式/晚间咖啡", "Lifestyle / Evening Coffee", "低", "Low", "قهوه_المساء"),
        t("#برنامج_شاشتنا", "电视节目/娱乐", "TV Program / Entertainment", "低", "Low", "برنامج_شاشتنا"),
        t("المنتخب السعودي", "沙特国家队/体育", "Saudi National Team / Sports", "低", "Low", "المنتخب السعودي"),
        t("#اهلا_اسيا", "亚洲杯/体育欢迎话题", "Asian Cup / Sports", "低", "Low", "اهلا_اسيا"),
        t("المباراه الافتتاحيه", "开幕战/体育", "Opening Match / Sports", "低", "Low", "المباراه الافتتاحيه"),
        t("ملعب ارامكو", "体育场/赛事场馆", "Stadium / Venue", "低", "Low", "ملعب ارامكو"),
        t("كاس الخليج", "海湾杯/体育", "Gulf Cup / Sports", "低", "Low", "كاس الخليج"),
        t("كاس العرب", "阿拉伯杯/体育", "Arab Cup / Sports", "低", "Low", "كاس العرب"),
        t("عبد الصمد القرشي", "香水/品牌", "Perfume / Brand", "低", "Low", "عبد الصمد القرشي"),
        t("شحن سوا", "通信充值/生活服务", "Telecom Top-Up / Service", "低", "Low", "شحن سوا"),
        t("بنت الناس", "歌曲/影视/日常表达（需二次确认）", "Song / TV / Phrase (Needs Check)", "低", "Low", "بنت الناس"),
        t("#AsianCup2027", "亚洲杯 2027/体育", "Asian Cup 2027 / Sports", "低", "Low", "AsianCup2027"),
        t("كوريا الشماليه", "朝鲜相关", "North Korea-Related", "政治/国际议题", "Political / International Issue", "كوريا الشماليه")
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Lucas Torreira", "足球运动员", "Football Player", "低", "Low", "Lucas Torreira"),
        t("GSyeLİNELazım", "加拉塔萨雷足球相关", "Galatasaray Football-Related", "低", "Low", "GSyeLİNELazım"),
        t("Şenol Güneş", "足球教练", "Football Coach", "低", "Low", "Şenol Güneş"),
        t("#Galatasaray", "俱乐部/球迷内容", "Club / Fandom", "低", "Low", "Galatasaray"),
        t("KavinskyVeAttack", "音乐/艺人/演出相关", "Music / Artist / Show", "低", "Low", "KavinskyVeAttack"),
        t("Demans", "医疗/老年健康（可做科普但需谨慎）", "Medical / Senior Health (Handle Carefully)", "医疗/敏感", "Medical / Sensitive", "Demans"),
        t("#200Lirayla", "物价/生活成本梗", "Cost-of-Living Meme", "经济/社会议题", "Economic / Social Issue", "200Lirayla"),
        t("#soma", "灾害纪念/灾难事件", "Disaster Memorial / Incident", "灾害/纪念", "Disaster / Memorial", "soma turkey"),
        t("Kurdistan", "地缘政治/民族议题", "Geopolitical / Identity Issue", "政治/敏感", "Political / Sensitive", "Kurdistan"),
        t("TCK158 İban", "法律/诈骗相关", "Legal / Fraud-Related", "法律/诈骗", "Legal / Fraud", "TCK158 İban"),
        t("AK Parti'ye", "执政党相关", "Ruling Party-Related", "政治", "Political", "AK Parti'ye")
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#WUTheSeriesEP2", "剧集/娱乐", "Drama / Entertainment", "低", "Low", "WUTheSeriesEP2"),
        t("#TheDayOfLinglingKwong", "明星生日/粉丝应援", "Celebrity Birthday / Fandom", "低", "Low", "TheDayOfLinglingKwong"),
        t("#Riyadh", "城市/旅行/活动，也可能是地区话题串入", "City / Travel / Event; Region Relevance Needs Check", "低/需确认", "Low / Needs Check", "Riyadh"),
        t("#jeddahmassage", "本地服务/按摩", "Local Service / Massage", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "jeddahmassage")
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "#WUTheSeriesEP2、LINGLING BORN TO BLOOM、MAYBELLINE CANDY ENGFA"],
        ["菲律宾", "LOLLA MO ALLIANZ SB19、HAPPY BIRTHDAY FYANG、COKE and CHILL with ASHLEY"],
        ["印尼", "WHOLE DIFFERENT AESPA、JJ COVER SONG、PERTHSANTA DEVIL KISS PT"],
        ["沙特", "#AsianCup2027、المنتخب السعودي、#قهوه_المساء"],
        ["土耳其", "Lucas Torreira、GSyeLİNELazım、Şenol Güneş"],
        ["越南", "#WUTheSeriesEP2、#TheDayOfLinglingKwong"]
      ],
      en: [
        ["Thailand", "#WUTheSeriesEP2, LINGLING BORN TO BLOOM, MAYBELLINE CANDY ENGFA"],
        ["Philippines", "LOLLA MO ALLIANZ SB19, HAPPY BIRTHDAY FYANG, COKE and CHILL with ASHLEY"],
        ["Indonesia", "WHOLE DIFFERENT AESPA, JJ COVER SONG, PERTHSANTA DEVIL KISS PT"],
        ["Saudi Arabia", "#AsianCup2027, المنتخب السعودي, #قهوه_المساء"],
        ["Turkey", "Lucas Torreira, GSyeLİNELazım, Şenol Güneş"],
        ["Vietnam", "#WUTheSeriesEP2, #TheDayOfLinglingKwong"]
      ]
    }
  },
  {
    date: "2026-05-13",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#WUTheSeriesEP2", "剧集/娱乐", "Drama / Entertainment", "低", "Low", "WUTheSeriesEP2"),
        t("WHOLE DIFFERENT AESPA", "K-pop/粉丝内容", "K-pop / Fandom", "低", "Low", "WHOLE DIFFERENT AESPA"),
        t("JJ COVER SONG", "音乐翻唱/短视频内容", "Music Covers / Short-Form Content", "低", "Low", "JJ COVER SONG"),
        t("PERTHSANTA DEVIL KISS PT", "泰娱/明星粉丝向", "Thai Entertainment / Celebrity Fandom", "低", "Low", "PERTHSANTA DEVIL KISS PT"),
        t("#XLBagiBagiBonus", "品牌活动/福利传播", "Brand Campaign / Giveaway", "低", "Low", "XLBagiBagiBonus"),
        t("TNI Kita", "军方/国家机构相关", "Military / Public Institution", "政治/公共机构", "Political / Public Institution", "TNI Kita"),
        t("Prabowo Jaga Energi Nasional", "总统/能源政策相关", "President / Energy Policy", "政治", "Political", "Prabowo Jaga Energi Nasional"),
        t("AIDS", "医疗/公共健康", "Medical / Public Health", "医疗/敏感", "Medical / Sensitive", "AIDS")
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#WUTheSeriesEP2", "剧集/娱乐", "Drama / Entertainment", "低", "Low", "WUTheSeriesEP2"),
        t("LINGLING BORN TO BLOOM", "明星生日/粉丝应援", "Celebrity Birthday / Fandom", "低", "Low", "LINGLING BORN TO BLOOM"),
        t("MAYBELLINE CANDY ENGFA", "美妆品牌/明星代言", "Beauty Brand / Celebrity Endorsement", "低", "Low", "MAYBELLINE CANDY ENGFA"),
        t("ZEENUNEW AIMA SHOW", "明星/活动", "Celebrity / Event", "低", "Low", "ZEENUNEW AIMA SHOW"),
        t("D-5 TAEYONG 1ST ALBUM", "K-pop/新专预热", "K-pop / Album Teaser", "低", "Low", "D-5 TAEYONG 1ST ALBUM"),
        t("PERTHSANTA DEVIL KISS PT", "泰娱/剧集/CP 向", "Thai Entertainment / Drama CP", "低", "Low", "PERTHSANTA DEVIL KISS PT"),
        t("FOURTH X KIJSADA PARADISE", "明星/品牌或活动联动", "Celebrity / Brand or Event Collaboration", "低", "Low", "FOURTH X KIJSADA PARADISE"),
        t("SKYNANI GIVING AND SHARING", "明星/公益或粉丝活动", "Celebrity / Charity or Fan Event", "低", "Low", "SKYNANI GIVING AND SHARING"),
        t("WHOLE DIFFERENT AESPA", "K-pop/粉丝内容", "K-pop / Fandom", "低", "Low", "WHOLE DIFFERENT AESPA"),
        t("CHENGYI NEW GBA OF USMILE", "明星/品牌代言", "Celebrity / Brand Endorsement", "低", "Low", "CHENGYI NEW GBA OF USMILE")
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("LOLLA MO ALLIANZ SB19", "音乐节/男团 SB19", "Music Festival / SB19", "低", "Low", "LOLLA MO ALLIANZ SB19"),
        t("HAPPY BIRTHDAY FYANG", "明星/网红生日", "Celebrity / Creator Birthday", "低", "Low", "HAPPY BIRTHDAY FYANG"),
        t("#PauloAvelinoAtThirtyEight", "明星生日/粉丝向", "Celebrity Birthday / Fandom", "低", "Low", "PauloAvelinoAtThirtyEight"),
        t("COKE and CHILL with ASHLEY", "品牌/明星活动", "Brand / Celebrity Event", "低", "Low", "COKE and CHILL with ASHLEY"),
        t("DUSTIN YU AT TWENTYFIVE", "明星生日/粉丝活动", "Celebrity Birthday / Fan Event", "低", "Low", "DUSTIN YU AT TWENTYFIVE"),
        t("JADEWARD LOVE ON THE EDGE", "剧集/CP/粉丝内容", "Drama / CP Fandom", "低", "Low", "JADEWARD LOVE ON THE EDGE"),
        t("GINNY AT CHLOE PARFUMS STORE", "香水/品牌线下活动", "Fragrance / Offline Brand Event", "低", "Low", "GINNY AT CHLOE PARFUMS STORE"),
        t("Senate", "政治机构", "Political Institution", "政治", "Political", "Senate Philippines"),
        t("The Hague", "国际司法/政治新闻", "International Justice / Political News", "政治/争议", "Political / Controversial", "The Hague Philippines"),
        t("Duterte", "政治人物", "Political Figure", "政治/争议", "Political / Controversial", "Duterte")
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#AsianCup2027", "亚洲杯 2027/体育", "Asian Cup 2027 / Sports", "低", "Low", "AsianCup2027"),
        t("المنتخب السعودي", "沙特国家队/体育", "Saudi National Team / Sports", "低", "Low", "المنتخب السعودي"),
        t("#قهوه_المساء", "生活方式/晚间咖啡", "Lifestyle / Evening Coffee", "低", "Low", "قهوه المساء"),
        t("عبد الصمد القرشي", "香水/品牌", "Fragrance / Brand", "低", "Low", "عبد الصمد القرشي"),
        t("#قرعه_كاس_اسيا", "亚洲杯抽签/体育", "Asian Cup Draw / Sports", "低", "Low", "قرعه كاس اسيا"),
        t("#برنامج_شاشتنا", "电视节目/娱乐", "TV Program / Entertainment", "低", "Low", "برنامج شاشتنا"),
        t("كوريا الشماليه", "朝鲜相关", "North Korea-Related", "政治/国际议题", "Political / International Issue", "كوريا الشماليه")
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Lucas Torreira", "足球运动员", "Football Player", "低", "Low", "Lucas Torreira"),
        t("GSyeLİNELazım", "加拉塔萨雷足球相关", "Galatasaray Football-Related", "低", "Low", "GSyeLİNELazım"),
        t("Şenol Güneş", "足球教练", "Football Coach", "低", "Low", "Şenol Güneş"),
        t("KavinskyVeAttack", "音乐/艺人/演出相关", "Music / Artist / Show", "低", "Low", "KavinskyVeAttack"),
        t("#200Lirayla", "物价/生活成本梗", "Cost-of-Living Meme", "经济/社会议题", "Economic / Social Issue", "200Lirayla"),
        t("#soma", "矿难纪念/灾害或地名相关", "Mining Disaster Memorial or Place-Related", "灾害/纪念", "Disaster / Memorial", "soma turkey"),
        t("Kurdistan", "地缘政治/民族议题", "Geopolitical / Identity Issue", "政治/敏感", "Political / Sensitive", "Kurdistan"),
        t("AK Parti'ye", "执政党相关", "Ruling Party-Related", "政治", "Political", "AK Parti'ye"),
        t("TCK158 İban", "法律/诈骗相关", "Legal / Fraud-Related", "法律/诈骗", "Legal / Fraud", "TCK158 İban")
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("#WUTheSeriesEP2", "剧集/娱乐", "Drama / Entertainment", "低", "Low", "WUTheSeriesEP2"),
        t("#TheDayOfLinglingKwong", "明星生日/粉丝应援", "Celebrity Birthday / Fandom", "低", "Low", "TheDayOfLinglingKwong"),
        t("#Riyadh", "城市/旅行/活动，需确认地区相关性", "City / Travel / Event; Region Relevance Needs Check", "低/需确认", "Low / Needs Check", "Riyadh"),
        t("#jeddahmassage", "本地服务/按摩", "Local Service / Massage", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "jeddahmassage")
      ])
    ],
    priorities: {
      zh: [
        ["泰国", "#WUTheSeriesEP2、LINGLING BORN TO BLOOM、MAYBELLINE CANDY ENGFA"],
        ["菲律宾", "LOLLA MO ALLIANZ SB19、HAPPY BIRTHDAY FYANG、COKE and CHILL with ASHLEY"],
        ["印尼", "WHOLE DIFFERENT AESPA、JJ COVER SONG、PERTHSANTA DEVIL KISS PT"],
        ["沙特", "#AsianCup2027、المنتخب السعودي、#قهوه_المساء"],
        ["土耳其", "Lucas Torreira、GSyeLİNELazım、Şenol Güneş"],
        ["越南", "#WUTheSeriesEP2、#TheDayOfLinglingKwong"]
      ],
      en: [
        ["Thailand", "#WUTheSeriesEP2, LINGLING BORN TO BLOOM, MAYBELLINE CANDY ENGFA"],
        ["Philippines", "LOLLA MO ALLIANZ SB19, HAPPY BIRTHDAY FYANG, COKE and CHILL with ASHLEY"],
        ["Indonesia", "WHOLE DIFFERENT AESPA, JJ COVER SONG, PERTHSANTA DEVIL KISS PT"],
        ["Saudi Arabia", "#AsianCup2027, المنتخب السعودي, #قهوه_المساء"],
        ["Turkey", "Lucas Torreira, GSyeLİNELazım, Şenol Güneş"],
        ["Vietnam", "#WUTheSeriesEP2, #TheDayOfLinglingKwong"]
      ]
    }
  }
];

// Expose reports for auxiliary pages (e.g. preview.html) without duplicating data.
window.__TREND_REPORTS__ = reports;

function country(id, zh, en, sourceUrl, topics) {
  return { id, name: { zh, en }, sourceUrl, topics };
}

function normalizeSignals(input) {
  const s = input && typeof input === "object" ? input : null;
  if (!s) {
    return { threadsTop: [], threadsRecent: [], tiktokTop: [], tiktokRecent: [], verifiedAt: "", verifier: "" };
  }
  return {
    threadsTop: Array.isArray(s.threadsTop) ? s.threadsTop : [],
    threadsRecent: Array.isArray(s.threadsRecent) ? s.threadsRecent : [],
    tiktokTop: Array.isArray(s.tiktokTop) ? s.tiktokTop : [],
    tiktokRecent: Array.isArray(s.tiktokRecent) ? s.tiktokRecent : [],
    verifiedAt: typeof s.verifiedAt === "string" ? s.verifiedAt : "",
    verifier: typeof s.verifier === "string" ? s.verifier : ""
  };
}

function t(topic, typeZh, typeEn, riskZh, riskEn, query, signals) {
  const encoded = encodeURIComponent(query);
  return {
    topic,
    type: { zh: typeZh, en: typeEn },
    risk: { zh: riskZh, en: riskEn },
    riskKey: riskEn === "Low" || riskEn.startsWith("Low /") ? "low" : "watch",
    query,
    tiktok: `https://www.tiktok.com/search?q=${encoded}`,
    threads: `https://www.threads.com/search?q=${encoded}`,
    signals: normalizeSignals(signals)
  };
}

const state = {
  reportIndex: 0,
  report: reports[0],
  country: "all",
  risk: "all",
  search: "",
  lang: localStorage.getItem("trendReportLang") || "zh"
};

const text = (key) => ui[state.lang][key];
const localized = (value) => (typeof value === "string" ? value : value[state.lang]);
const lowRisk = (topic) => topic.riskKey === "low";
const watchRisk = (topic) => topic.riskKey === "watch";

const STATUS_URL = "./status.json";
const ACTIONS_URL = "https://github.com/tuntunjo95-ui/trending-topic/actions/workflows/daily-trend-report.yml";
const reportMarkdownPath = (date) => `./${date}-六国X热点30条扩展筛选报告.md`;

function cacheBuster() {
  const script = document.querySelector("script[src*=\"app.js\"]");
  const m = script?.src?.match(/[?&]v=(\d+)/);
  return m ? m[1] : String(Date.now());
}

async function loadStatus() {
  try {
    const res = await fetch(`${STATUS_URL}?v=${cacheBuster()}`, { cache: "no-store" });
    if (!res.ok) throw new Error(`status.json ${res.status}`);
    return await res.json();
  } catch {
    return null;
  }
}

function renderStatusBanner(status) {
  const banner = document.querySelector("#statusBanner");
  if (!banner) return;

  if (!status) {
    banner.hidden = true;
    return;
  }

  const isOk = Boolean(status.ok);
  const date = status.date || state.report?.date || "";
  const msg = status.message || (isOk ? "OK" : "FAILED");
  banner.classList.toggle("warn", !isOk);
  banner.hidden = false;
  banner.innerHTML = `
    <div><strong>${isOk ? "Status" : "Warning"}</strong> ${date} · ${msg}</div>
    <div class="status-actions"><a href="${ACTIONS_URL}" target="_blank" rel="noreferrer">Actions</a></div>
  `;
}

function updateRawReportLink(dateOverride) {
  const link = document.querySelector("#rawReportLink");
  if (!link) return;
  const date = dateOverride || state.report?.date || reports[0]?.date;
  link.href = reportMarkdownPath(date);
  link.title = `Raw report: ${date}`;
}

function applyStaticText() {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.title = state.lang === "zh" ? "各国热点话题日报" : "Global Trend Brief";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = text(node.dataset.i18n);
  });
  document.querySelector("#searchInput").placeholder = text("searchPlaceholder");
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
  updateRawReportLink();
}

function selectReportByIndex(index) {
  state.reportIndex = index;
  state.report = reports[state.reportIndex];
  updateRawReportLink(state.report?.date);
  state.country = "all";
  state.risk = "all";
  state.search = "";
  document.querySelector("#searchInput").value = "";
  document.querySelectorAll("[data-risk]").forEach((item) =>
    item.classList.toggle("active", item.dataset.risk === "all"),
  );
  render();
}

function renderReportList() {
  const select = document.querySelector("#reportSelect");
  const meta = document.querySelector("#reportSelectMeta");
  if (!select) return;

  select.innerHTML = reports
    .map((report, index) => {
      // Keep dropdown compact; show title below.
      const label = report.date;
      return `<option value="${index}">${label}</option>`;
    })
    .join("");

  select.value = String(state.reportIndex);

  if (meta) {
    const report = reports[state.reportIndex] || reports[0];
    const template = text("reportSelectedMeta");
    meta.textContent = template
      .replace("{date}", report?.date || "")
      .replace("{title}", localized(report?.title || ""));
  }
}

function renderFilters() {
  const wrap = document.querySelector("#countryFilters");
  const countries = [{ id: "all", name: { zh: "全部", en: "All" } }, ...state.report.countries];
  wrap.innerHTML = countries
    .map((country) => `<button class="filter-chip ${state.country === country.id ? "active" : ""}" data-country="${country.id}" type="button">${localized(country.name)}</button>`)
    .join("");
  wrap.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.country = button.dataset.country;
      render();
    });
  });
}

function filteredCountries() {
  return state.report.countries
    .filter((country) => state.country === "all" || country.id === state.country)
    .map((country) => ({
      ...country,
      topics: country.topics.filter((topic) => {
        const matchesRisk =
          state.risk === "all" ||
          (state.risk === "low" && lowRisk(topic)) ||
          (state.risk === "watch" && watchRisk(topic));
        const haystack = `${localized(country.name)} ${topic.topic} ${localized(topic.type)} ${localized(topic.risk)}`.toLowerCase();
        return matchesRisk && haystack.includes(state.search.toLowerCase().trim());
      })
    }))
    .filter((country) => country.topics.length > 0);
}

function renderCountries() {
  const sections = document.querySelector("#countrySections");
  const countries = filteredCountries();
  sections.innerHTML = countries
    .map((countryItem) => {
      const low = countryItem.topics.filter((topic) => lowRisk(topic)).length;
      const watch = countryItem.topics.length - low;
      return `
        <article class="country-card">
          <header class="country-head">
            <div>
              <h3>${localized(countryItem.name)}</h3>
              <p>${text("source")}：<a href="${countryItem.sourceUrl}" target="_blank" rel="noreferrer">${countryItem.sourceUrl}</a></p>
            </div>
            <div class="country-meta">
              <span class="badge">${countryItem.topics.length} ${text("topics")}</span>
              <span class="badge low">${low} ${text("lowRisk")}</span>
              <span class="badge watch">${watch} ${text("riskWatch")}</span>
            </div>
          </header>
          <div class="topic-grid">
            ${countryItem.topics.map(renderTopic).join("")}
          </div>
        </article>
      `;
    })
    .join("");

  if (!countries.length) {
    sections.innerHTML = `<article class="panel compact"><p>${text("noMatches")}</p></article>`;
  }
}

function renderTopic(topic) {
  const riskClass = lowRisk(topic) ? "low" : "watch";
  const hasSignals =
    (topic.signals?.threadsTop?.length || 0) +
      (topic.signals?.threadsRecent?.length || 0) +
      (topic.signals?.tiktokTop?.length || 0) +
      (topic.signals?.tiktokRecent?.length || 0) >
    0;
  return `
    <article class="topic-card ${riskClass}">
      <div class="topic-title">
        <strong>${topic.topic}</strong>
        <span class="badge ${riskClass}">${localized(topic.risk)}</span>
      </div>
      <p>${text("typeLabel")}：${localized(topic.type)}</p>
      <div class="links">
        <a href="${topic.tiktok}" target="_blank" rel="noreferrer">TikTok</a>
        <a href="${topic.threads}" target="_blank" rel="noreferrer">Threads</a>
      </div>
      ${hasSignals ? `<div class="signal-row"><span class="signal-badge">已确认</span></div>` : ""}
    </article>
  `;
}

function renderSidebars() {
  const priority = document.querySelector("#priorityList");
  priority.innerHTML = state.report.priorities[state.lang]
    .map(([countryName, topics]) => `<li><strong>${countryName}</strong><span>${topics}</span></li>`)
    .join("");

  const risks = state.report.countries.flatMap((countryItem) =>
    countryItem.topics.filter((topic) => watchRisk(topic)).map((topic) => ({ country: localized(countryItem.name), ...topic }))
  );
  document.querySelector("#riskList").innerHTML = risks
    .map((item) => `<div class="risk-item"><strong>${item.topic}</strong><span>${item.country} · ${localized(item.risk)}</span></div>`)
    .join("");
}

function renderMetrics() {
  const allTopics = state.report.countries.flatMap((countryItem) => countryItem.topics);
  document.querySelector("#topicCount").textContent = allTopics.length;
  document.querySelector("#riskCount").textContent = allTopics.filter((topic) => watchRisk(topic)).length;
}

function bindToolbar() {
  document.querySelectorAll("[data-risk]").forEach((button) => {
    button.addEventListener("click", () => {
      state.risk = button.dataset.risk;
      document.querySelectorAll("[data-risk]").forEach((item) => item.classList.toggle("active", item === button));
      renderCountries();
    });
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      localStorage.setItem("trendReportLang", state.lang);
      render();
    });
  });

  document.querySelector("#searchInput").addEventListener("input", (event) => {
    state.search = event.target.value;
    renderCountries();
  });

  const reportSelect = document.querySelector("#reportSelect");
  if (reportSelect) {
    reportSelect.addEventListener("change", () => {
      selectReportByIndex(Number(reportSelect.value));
    });
  }

  document.querySelector("#copySummary").addEventListener("click", async () => {
    const summary = [text("summaryTitle"), text("summaryPriority"), text("summaryRisk"), text("reportPage")].join("\n");
    try {
      await navigator.clipboard.writeText(summary);
      showToast(text("copied"));
    } catch {
      showToast(text("copyFailed"));
    }
  });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1800);
}

function render() {
  applyStaticText();
  updateRawReportLink(state.report?.date);
  renderReportList();
  renderFilters();
  renderCountries();
  renderSidebars();
  renderMetrics();
}

bindToolbar();
(async () => {
  renderStatusBanner(await loadStatus());
  render();
})();
