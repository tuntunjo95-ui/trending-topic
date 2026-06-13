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
    summaryTitle: "2026-06-13 六国热点话题日报",
    summaryPriority: "优先深挖：泰国与沙特的明星/剧集/品牌/音乐节；印尼与越南的体育（足球/F1）与数码话题。",
    summaryRisk: "风险观察：土耳其与菲律宾有政治/法律争议词；沙特含灾害救援与医疗/宗教敏感词；越南慈善类需核验。"
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
    summaryTitle: "2026-06-13 Six-Country Trend Brief",
    summaryPriority: "Priority: celebrity, drama, fashion, and festival topics in Thailand & Saudi; sports and consumer tech in Indonesia & Vietnam.",
    summaryRisk: "Risk watch: political/legal terms appear in Turkey & the Philippines; Saudi includes disaster/medical/religion-sensitive terms; Vietnam charity keywords need verification."
  }
};

const reports = [
  {
    date: "2026-06-13",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#JuniorMarkConcert", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JuniorMarkConcert", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("13 YEARS WITH BTS", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "13 YEARS WITH BTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE UPON A TIME FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE UPON A TIME FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#JuniorMarkConcert", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JuniorMarkConcert", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LISAxFIFAWorldCup", "体育/赛事", "Sports / Event", "低", "Low", "LISAxFIFAWorldCup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#FirstPremiereWithLingOrm", "综合/待分类", "General / To Classify", "低", "Low", "FirstPremiereWithLingOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BBFanFest2026D1", "综合/待分类", "General / To Classify", "低", "Low", "BBFanFest2026D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MAXKY1stFANSIGN", "综合/待分类", "General / To Classify", "低", "Low", "MAXKY1stFANSIGN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("22ND MIRACLE BOY GEMINI", "综合/待分类", "General / To Classify", "低", "Low", "22ND MIRACLE BOY GEMINI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM DOKMAI RATRI", "综合/待分类", "General / To Classify", "低", "Low", "NAMTANFILM DOKMAI RATRI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SOLD OUT", "综合/待分类", "General / To Classify", "低", "Low", "SOLD OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY13", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE LEGACY13", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MILKLOVE MAGIC MOMENT", "综合/待分类", "General / To Classify", "低", "Low", "MILKLOVE MAGIC MOMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EMIBONNIE DANDELION NIGHT", "综合/待分类", "General / To Classify", "低", "Low", "EMIBONNIE DANDELION NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("STORM CHASER TICKET DAY", "综合/待分类", "General / To Classify", "低", "Low", "STORM CHASER TICKET DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WEIRDO 101 Q8", "综合/待分类", "General / To Classify", "低", "Low", "WEIRDO 101 Q8", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE13", "综合/待分类", "General / To Classify", "低", "Low", "SHINING PRIDE CHARLOTTE13", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Anthropic", "综合/待分类", "General / To Classify", "低", "Low", "Anthropic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("3Plus Premium", "综合/待分类", "General / To Classify", "低", "Low", "3Plus Premium", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fable 5", "综合/待分类", "General / To Classify", "低", "Low", "Fable 5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Elon", "综合/待分类", "General / To Classify", "低", "Low", "Elon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#InLoveForeverTheSeries", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "InLoveForeverTheSeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วาดฝันวันวิวาห์", "综合/待分类", "General / To Classify", "低", "Low", "วาดฝันวันวิวาห์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#TNT10AngHulingTapatan", "综合/待分类", "General / To Classify", "低", "Low", "TNT10AngHulingTapatan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Facebookdown", "综合/待分类", "General / To Classify", "低", "Low", "Facebookdown", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTS13thAnniversary", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS13thAnniversary", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BBFanFest2026D1", "综合/待分类", "General / To Classify", "低", "Low", "BBFanFest2026D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUSTBIA MEGAMAZING MOMENT", "综合/待分类", "General / To Classify", "低", "Low", "DUSTBIA MEGAMAZING MOMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ภพเธอตอนจบ", "综合/待分类", "General / To Classify", "低", "Low", "ภพเธอตอนจบ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE UPON A TIME FINAL EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE UPON A TIME FINAL EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("azralph dazzling in motion", "综合/待分类", "General / To Classify", "低", "Low", "azralph dazzling in motion", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy 13th", "综合/待分类", "General / To Classify", "低", "Low", "Happy 13th", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BEANCA MOVE WITH CARE", "综合/待分类", "General / To Classify", "低", "Low", "BEANCA MOVE WITH CARE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy Festa", "综合/待分类", "General / To Classify", "低", "Low", "Happy Festa", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("olivia", "综合/待分类", "General / To Classify", "低", "Low", "olivia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Meta", "综合/待分类", "General / To Classify", "低", "Low", "Meta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARIELLE TNTHulingTapatan", "综合/待分类", "General / To Classify", "低", "Low", "MARIELLE TNTHulingTapatan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("IconicHURADO PopPRISTINE", "综合/待分类", "General / To Classify", "低", "Low", "IconicHURADO PopPRISTINE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ASHTINE SHINES IN MEGABALL", "综合/待分类", "General / To Classify", "低", "Low", "ASHTINE SHINES IN MEGABALL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kalayaan", "综合/待分类", "General / To Classify", "低", "Low", "Kalayaan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy JMDC Day", "综合/待分类", "General / To Classify", "低", "Low", "Happy JMDC Day", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("rhenseph star song mv", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "rhenseph star song mv", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM DOKMAI RATRI", "综合/待分类", "General / To Classify", "低", "Low", "NAMTANFILM DOKMAI RATRI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("امريكا", "综合/待分类", "General / To Classify", "低", "Low", "امريكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تبغي_رقم_مميز_حياك_θ5θθ55θ95θ", "综合/待分类", "General / To Classify", "低", "Low", "تبغي_رقم_مميز_حياك_θ5θθ55θ95θ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("المنتخب الامريكي", "体育/赛事", "Sports / Event", "低", "Low", "المنتخب الامريكي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عابر_سبيل", "综合/待分类", "General / To Classify", "低", "Low", "عابر_سبيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بوليسيتش", "综合/待分类", "General / To Classify", "低", "Low", "بوليسيتش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#حفل_النصر", "综合/待分类", "General / To Classify", "低", "Low", "حفل_النصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SmackDown", "综合/待分类", "General / To Classify", "低", "Low", "SmackDown", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("موناكو", "综合/待分类", "General / To Classify", "低", "Low", "موناكو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("علي محمد علي", "综合/待分类", "General / To Classify", "低", "Low", "علي محمد علي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الهدف الرابع", "综合/待分类", "General / To Classify", "低", "Low", "الهدف الرابع", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("زلاتان", "综合/待分类", "General / To Classify", "低", "Low", "زلاتان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الشوط الاول", "综合/待分类", "General / To Classify", "低", "Low", "الشوط الاول", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عامر الخوذيري", "综合/待分类", "General / To Classify", "低", "Low", "عامر الخوذيري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("توم كروز", "综合/待分类", "General / To Classify", "低", "Low", "توم كروز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الحكومه الامريكيه", "综合/待分类", "General / To Classify", "低", "Low", "الحكومه الامريكيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاتي بيري", "综合/待分类", "General / To Classify", "低", "Low", "كاتي بيري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سويسرا", "综合/待分类", "General / To Classify", "低", "Low", "سويسرا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#مي_فاروق", "综合/待分类", "General / To Classify", "低", "Low", "مي_فاروق", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الهدف الثالث", "综合/待分类", "General / To Classify", "低", "Low", "الهدف الثالث", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم السبت", "综合/待分类", "General / To Classify", "低", "Low", "اليوم السبت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#Cumartesi", "综合/待分类", "General / To Classify", "低", "Low", "Cumartesi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#YusufZiyaHocayaAdalet", "综合/待分类", "General / To Classify", "低", "Low", "YusufZiyaHocayaAdalet", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Paraguay", "综合/待分类", "General / To Classify", "低", "Low", "Paraguay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("rasyox", "综合/待分类", "General / To Classify", "低", "Low", "rasyox", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SevEN_Deserve_Support", "综合/待分类", "General / To Classify", "低", "Low", "SevEN_Deserve_Support", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LGS2026", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LGS2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HYBE_BELIFT_Lab_Boycott", "综合/待分类", "General / To Classify", "低", "Low", "HYBE_BELIFT_Lab_Boycott", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bosna Hersek", "综合/待分类", "General / To Classify", "低", "Low", "Bosna Hersek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hayırlı Cumalar", "综合/待分类", "General / To Classify", "低", "Low", "Hayırlı Cumalar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Liselere Geçiş Sistemi", "综合/待分类", "General / To Classify", "低", "Low", "Liselere Geçiş Sistemi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Balogun", "综合/待分类", "General / To Classify", "低", "Low", "Balogun", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Yarın LGS&#39;ye", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Yarın LGS&#39;ye", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Berat Albayrak", "综合/待分类", "General / To Classify", "低", "Low", "Berat Albayrak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mythos 5", "综合/待分类", "General / To Classify", "低", "Low", "Mythos 5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dünya Kupası", "综合/待分类", "General / To Classify", "低", "Low", "Dünya Kupası", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Pochettino", "综合/待分类", "General / To Classify", "低", "Low", "Pochettino", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tavuk", "综合/待分类", "General / To Classify", "低", "Low", "Tavuk", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GAZZE BİTİYOR", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "GAZZE BİTİYOR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Filistin&#39;i Yaşat", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Filistin&#39;i Yaşat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Erden Timur", "综合/待分类", "General / To Classify", "低", "Low", "Erden Timur", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#BBFanFest2026D1", "综合/待分类", "General / To Classify", "低", "Low", "BBFanFest2026D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cuối", "综合/待分类", "General / To Classify", "低", "Low", "Cuối", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NAMTANFILM DOKMAI RATRI", "综合/待分类", "General / To Classify", "低", "Low", "NAMTANFILM DOKMAI RATRI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#InLoveForeverTheSeries", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "InLoveForeverTheSeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Thứ 7", "综合/待分类", "General / To Classify", "低", "Low", "Thứ 7", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วาดฝันวันวิวาห์", "综合/待分类", "General / To Classify", "低", "Low", "วาดฝันวันวิวาห์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SpaceX", "综合/待分类", "General / To Classify", "低", "Low", "SpaceX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("World Cup", "体育/赛事", "Sports / Event", "低", "Low", "World Cup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Runch", "综合/待分类", "General / To Classify", "低", "Low", "Runch", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JANJINGJING FIRST BLOOM", "综合/待分类", "General / To Classify", "低", "Low", "JANJINGJING FIRST BLOOM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$SPCX", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$SPCX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Paraguay", "综合/待分类", "General / To Classify", "低", "Low", "Paraguay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LingOrm", "综合/待分类", "General / To Classify", "低", "Low", "LingOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Elon Musk", "综合/待分类", "General / To Classify", "低", "Low", "Elon Musk", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Soso", "综合/待分类", "General / To Classify", "低", "Low", "Soso", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("joong burberry summer26", "综合/待分类", "General / To Classify", "低", "Low", "joong burberry summer26", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sodex", "综合/待分类", "General / To Classify", "低", "Low", "Sodex", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Thứ 6", "综合/待分类", "General / To Classify", "低", "Low", "Thứ 6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LingPopUpStoreTheHotCycle", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LingPopUpStoreTheHotCycle", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALWAYS WONDER WASH", "综合/待分类", "General / To Classify", "低", "Low", "ALWAYS WONDER WASH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#BTS_WORLDTOUR_ARIRANG_BUSAN", "旅行/本地活动", "Travel / Local Event", "低", "Low", "BTS_WORLDTOUR_ARIRANG_BUSAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#BUS_LIGHTASONE", "综合/待分类", "General / To Classify", "低", "Low", "BUS_LIGHTASONE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ภพเธอนิรันดร์", "综合/待分类", "General / To Classify", "低", "Low", "ภพเธอนิรันดร์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTS_WORLDTOUR__BANGKOK", "旅行/本地活动", "Travel / Local Event", "低", "Low", "BTS_WORLDTOUR__BANGKOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ภพเธอTheSeries", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ภพเธอTheSeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#OffroadxUniqloUT26SS", "综合/待分类", "General / To Classify", "低", "Low", "OffroadxUniqloUT26SS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WEIRDO 101 Q7", "综合/待分类", "General / To Classify", "低", "Low", "WEIRDO 101 Q7", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALWAYS WONDER WASH", "综合/待分类", "General / To Classify", "低", "Low", "ALWAYS WONDER WASH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE12", "综合/待分类", "General / To Classify", "低", "Low", "SHINING PRIDE CHARLOTTE12", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("3Plus Premium", "综合/待分类", "General / To Classify", "低", "Low", "3Plus Premium", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SpaceX", "综合/待分类", "General / To Classify", "低", "Low", "SpaceX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY12", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE LEGACY12", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TOYOTAxFourth", "综合/待分类", "General / To Classify", "低", "Low", "TOYOTAxFourth", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TheMomentumxloverrukk", "综合/待分类", "General / To Classify", "低", "Low", "TheMomentumxloverrukk", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LoveUponATimeSeries", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LoveUponATimeSeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ใช้เพราะเก่งน้ําปิง", "综合/待分类", "General / To Classify", "低", "Low", "ใช้เพราะเก่งน้ําปิง", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JookKroo", "综合/待分类", "General / To Classify", "低", "Low", "JookKroo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DICEบัสกิ้งกระบี่", "综合/待分类", "General / To Classify", "低", "Low", "DICEบัสกิ้งกระบี่", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GOHAIR", "综合/待分类", "General / To Classify", "低", "Low", "GOHAIR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#UniqloThailand", "综合/待分类", "General / To Classify", "低", "Low", "UniqloThailand", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#โหวตนี้เพื่อน้องดรีม", "综合/待分类", "General / To Classify", "低", "Low", "โหวตนี้เพื่อน้องดรีม", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("DUSTBIA MEGAMAZING MOMENT", "综合/待分类", "General / To Classify", "低", "Low", "DUSTBIA MEGAMAZING MOMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AHOF_1stDigitalSingle", "综合/待分类", "General / To Classify", "低", "Low", "AHOF_1stDigitalSingle", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ASHTINE SHINES IN MEGABALL", "综合/待分类", "General / To Classify", "低", "Low", "ASHTINE SHINES IN MEGABALL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MEGABall2026", "综合/待分类", "General / To Classify", "低", "Low", "MEGABall2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MEGABallFashionAndFilm", "综合/待分类", "General / To Classify", "低", "Low", "MEGABallFashionAndFilm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AZRALPH DAZZLING IN MOTION", "综合/待分类", "General / To Classify", "低", "Low", "AZRALPH DAZZLING IN MOTION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RHENSEPH STAR SONG MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "RHENSEPH STAR SONG MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SWEET SLAYER JL", "综合/待分类", "General / To Classify", "低", "Low", "SWEET SLAYER JL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILBERT ROSS AT PAMUS", "综合/待分类", "General / To Classify", "低", "Low", "WILBERT ROSS AT PAMUS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TALA GOT MAGIC", "综合/待分类", "General / To Classify", "低", "Low", "TALA GOT MAGIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ANGEL IS COMING", "综合/待分类", "General / To Classify", "低", "Low", "ANGEL IS COMING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KrystaLovesMaggi", "综合/待分类", "General / To Classify", "低", "Low", "KrystaLovesMaggi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MEGABALL AZtonishing NIGHT", "综合/待分类", "General / To Classify", "低", "Low", "MEGABALL AZtonishing NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RDLight UP THE NIGHT", "综合/待分类", "General / To Classify", "低", "Low", "RDLight UP THE NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVER BRENT AT PRADERA VERDE", "综合/待分类", "General / To Classify", "低", "Low", "LOVER BRENT AT PRADERA VERDE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alon", "综合/待分类", "General / To Classify", "低", "Low", "Alon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUSTIN YU MEGA MOMENT", "综合/待分类", "General / To Classify", "低", "Low", "DUSTIN YU MEGA MOMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ภพเธอนิรันดร์", "综合/待分类", "General / To Classify", "低", "Low", "ภพเธอนิรันดร์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PIECES OF SUNOO", "综合/待分类", "General / To Classify", "低", "Low", "PIECES OF SUNOO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nadine", "综合/待分类", "General / To Classify", "低", "Low", "Nadine", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#هشتااقك_بسعر_مميز_0ち481б8201", "综合/待分类", "General / To Classify", "低", "Low", "هشتااقك_بسعر_مميز_0ち481б8201", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#يوم_الجمعه", "综合/待分类", "General / To Classify", "低", "Low", "يوم_الجمعه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#قمه1", "综合/待分类", "General / To Classify", "低", "Low", "قمه1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد", "综合/待分类", "General / To Classify", "低", "Low", "محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#اسواق_العثيم", "综合/待分类", "General / To Classify", "低", "Low", "اسواق_العثيم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("علي النبي", "综合/待分类", "General / To Classify", "低", "Low", "علي النبي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كندا", "综合/待分类", "General / To Classify", "低", "Low", "كندا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فييرا", "综合/待分类", "General / To Classify", "低", "Low", "فييرا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ابيل فيريرا", "综合/待分类", "General / To Classify", "低", "Low", "ابيل فيريرا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فوز سويسرا", "综合/待分类", "General / To Classify", "低", "Low", "فوز سويسرا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سلم علي", "综合/待分类", "General / To Classify", "低", "Low", "سلم علي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الفضيل", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الفضيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم المبارك", "综合/待分类", "General / To Classify", "低", "Low", "اليوم المبارك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#شماغ_البسام", "综合/待分类", "General / To Classify", "低", "Low", "شماغ_البسام", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العام الهجري", "综合/待分类", "General / To Classify", "低", "Low", "العام الهجري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البوسنة", "综合/待分类", "General / To Classify", "低", "Low", "البوسنة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("دكتور عبدالله", "综合/待分类", "General / To Classify", "低", "Low", "دكتور عبدالله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فيصل غزاوي", "综合/待分类", "General / To Classify", "低", "Low", "فيصل غزاوي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("نور مابين الجمعتين", "综合/待分类", "General / To Classify", "低", "Low", "نور مابين الجمعتين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("حميد مجيد", "综合/待分类", "General / To Classify", "低", "Low", "حميد مجيد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("Hayırlı Cumalar", "综合/待分类", "General / To Classify", "低", "Low", "Hayırlı Cumalar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tavuk", "综合/待分类", "General / To Classify", "低", "Low", "Tavuk", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kırmızı", "综合/待分类", "General / To Classify", "低", "Low", "Kırmızı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Topkapı Kültür Parkı", "综合/待分类", "General / To Classify", "低", "Low", "Topkapı Kültür Parkı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Banvit", "综合/待分类", "General / To Classify", "低", "Low", "Banvit", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Muharrem", "综合/待分类", "General / To Classify", "低", "Low", "Muharrem", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#lgs2026", "品牌活动/消费", "Brand / Consumer", "低", "Low", "lgs2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Muhsin Yazıcıoğlu", "综合/待分类", "General / To Classify", "低", "Low", "Muhsin Yazıcıoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#mügeanlı", "综合/待分类", "General / To Classify", "低", "Low", "mügeanlı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SağlıktaKadroAsmGruba", "综合/待分类", "General / To Classify", "低", "Low", "SağlıktaKadroAsmGruba", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Adalet Bakanı Akın Gürlek", "综合/待分类", "General / To Classify", "低", "Low", "Adalet Bakanı Akın Gürlek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Liselere Geçiş Sistemi", "综合/待分类", "General / To Classify", "低", "Low", "Liselere Geçiş Sistemi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Şenpiliç", "综合/待分类", "General / To Classify", "低", "Low", "Şenpiliç", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Gökhan Günaydın", "综合/待分类", "General / To Classify", "低", "Low", "Gökhan Günaydın", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Erkan Baş", "综合/待分类", "General / To Classify", "低", "Low", "Erkan Baş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Keskinoğlu", "综合/待分类", "General / To Classify", "低", "Low", "Keskinoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İşlemezdi", "综合/待分类", "General / To Classify", "低", "Low", "İşlemezdi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jandarma Teşkilatımızın 187", "综合/待分类", "General / To Classify", "低", "Low", "Jandarma Teşkilatımızın 187", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Savcı", "综合/待分类", "General / To Classify", "低", "Low", "Savcı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AçlıkSınırıEmekliyiYuttu", "综合/待分类", "General / To Classify", "低", "Low", "AçlıkSınırıEmekliyiYuttu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("Thứ 6", "综合/待分类", "General / To Classify", "低", "Low", "Thứ 6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("World Cup", "体育/赛事", "Sports / Event", "低", "Low", "World Cup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nhóm Leak Onlyfans", "综合/待分类", "General / To Classify", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "Nhóm Leak Onlyfans", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LingPopUpStoreTheHotCycle", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LingPopUpStoreTheHotCycle", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALWAYS WONDER WASH", "综合/待分类", "General / To Classify", "低", "Low", "ALWAYS WONDER WASH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Steve Jobs", "综合/待分类", "General / To Classify", "低", "Low", "Steve Jobs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Minor", "综合/待分类", "General / To Classify", "低", "Low", "Minor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Complex", "综合/待分类", "General / To Classify", "低", "Low", "Complex", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SpaceX", "综合/待分类", "General / To Classify", "低", "Low", "SpaceX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Canton", "综合/待分类", "General / To Classify", "低", "Low", "Canton", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hàn Quốc", "综合/待分类", "General / To Classify", "低", "Low", "Hàn Quốc", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#윈터토레타", "综合/待分类", "General / To Classify", "低", "Low", "윈터토레타", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("joong burberry summer26", "综合/待分类", "General / To Classify", "低", "Low", "joong burberry summer26", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Scanning", "综合/待分类", "General / To Classify", "低", "Low", "Scanning", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Assessing", "综合/待分类", "General / To Classify", "低", "Low", "Assessing", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CIP-105 and CIP-116", "综合/待分类", "General / To Classify", "低", "Low", "CIP-105 and CIP-116", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sumex", "综合/待分类", "General / To Classify", "低", "Low", "Sumex", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Uncertain", "综合/待分类", "General / To Classify", "低", "Low", "Uncertain", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("how the gun bed works", "综合/待分类", "General / To Classify", "低", "Low", "how the gun bed works", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Typical", "综合/待分类", "General / To Classify", "低", "Low", "Typical", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#TREASURE4thWin", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TREASURE4thWin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesLIVE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesLIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NEWWIEE POLCASAN X SAMSUNG", "品牌活动/消费", "Brand / Consumer", "低", "Low", "NEWWIEE POLCASAN X SAMSUNG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK CONCERT PRESS", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JUNIORMARK CONCERT PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#สอดสร้อยมาลาEP16", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "สอดสร้อยมาลาEP16", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WilliamEstxFoamdream", "综合/待分类", "General / To Classify", "低", "Low", "WilliamEstxFoamdream", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BurberryXSanta", "综合/待分类", "General / To Classify", "低", "Low", "BurberryXSanta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST EXCLUSIVE NIGHT", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST EXCLUSIVE NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#UnifFreshwithKengNamping", "综合/待分类", "General / To Classify", "低", "Low", "UnifFreshwithKengNamping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TREASURE4thWin", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TREASURE4thWin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP X UNIF", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KNP X UNIF", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKYNANI WU DESTINY PRESS", "综合/待分类", "General / To Classify", "低", "Low", "SKYNANI WU DESTINY PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PLUG AND MEET TFO", "综合/待分类", "General / To Classify", "低", "Low", "PLUG AND MEET TFO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE BKK RED OPERA EP16", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "THE BKK RED OPERA EP16", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUPALAI MY STAYCATION BOY EP32", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUPALAI MY STAYCATION BOY EP32", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK CONCERT PRESS", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JUNIORMARK CONCERT PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LATELY ITS WINTER SEASON EP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LATELY ITS WINTER SEASON EP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ON AIR WITH DJ JAEMIN", "综合/待分类", "General / To Classify", "低", "Low", "ON AIR WITH DJ JAEMIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Enjoy Your Daily With PERSES", "综合/待分类", "General / To Classify", "低", "Low", "Enjoy Your Daily With PERSES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE YOURSELF WITH ELIOT", "综合/待分类", "General / To Classify", "低", "Low", "LOVE YOURSELF WITH ELIOT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MOPEAR MICELLAR PUMP", "综合/待分类", "General / To Classify", "低", "Low", "MOPEAR MICELLAR PUMP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE SHATTERED EP18", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE SHATTERED EP18", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NO MORE HIDING OST LUAT", "综合/待分类", "General / To Classify", "低", "Low", "NO MORE HIDING OST LUAT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAEHYUN FOR CREED", "综合/待分类", "General / To Classify", "低", "Low", "JAEHYUN FOR CREED", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#BTS_WORLDTOUR_ARIRANG_BULACAN", "旅行/本地活动", "Travel / Local Event", "低", "Low", "BTS_WORLDTOUR_ARIRANG_BULACAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#IF_I_1stWin", "综合/待分类", "General / To Classify", "低", "Low", "IF_I_1stWin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TREASURE4thWin", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TREASURE4thWin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HighFiveForBINI", "综合/待分类", "General / To Classify", "低", "Low", "HighFiveForBINI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DAPComingHome", "综合/待分类", "General / To Classify", "低", "Low", "DAPComingHome", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DRALYS SINCE D1", "综合/待分类", "General / To Classify", "低", "Low", "DRALYS SINCE D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ateneo", "综合/待分类", "General / To Classify", "低", "Low", "Ateneo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("its dustbia time", "综合/待分类", "General / To Classify", "低", "Low", "its dustbia time", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Knicks", "综合/待分类", "General / To Classify", "低", "Low", "Knicks", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA MENDING HEARTS", "综合/待分类", "General / To Classify", "低", "Low", "GIOLUNA MENDING HEARTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("infinity for carton", "综合/待分类", "General / To Classify", "低", "Low", "infinity for carton", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("azralph doublemint ready", "综合/待分类", "General / To Classify", "低", "Low", "azralph doublemint ready", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("miss behave ep2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "miss behave ep2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rene", "综合/待分类", "General / To Classify", "低", "Low", "Rene", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SEATED FOR GELEX", "综合/待分类", "General / To Classify", "低", "Low", "SEATED FOR GELEX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("mang inasal beybeyq", "综合/待分类", "General / To Classify", "低", "Low", "mang inasal beybeyq", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KAIA COMEBACK IS HERE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "KAIA COMEBACK IS HERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Spurs", "综合/待分类", "General / To Classify", "低", "Low", "Spurs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("IWANT KAIREN MICRODRAMA", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "IWANT KAIREN MICRODRAMA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bleachers 2", "综合/待分类", "General / To Classify", "低", "Low", "Bleachers 2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#كاس_العالم_مع_جنوبكو", "体育/赛事", "Sports / Event", "低", "Low", "كاس_العالم_مع_جنوبكو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#افتتاح_فدركرز_الجديد_بجده", "综合/待分类", "General / To Classify", "低", "Low", "افتتاح_فدركرز_الجديد_بجده", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ارفعX_Xترند1_O56З2б8б79", "综合/待分类", "General / To Classify", "低", "Low", "ارفعX_Xترند1_O56З2б8б79", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تطبيق_تشليح_بارت_قطع_وصيانه", "综合/待分类", "General / To Classify", "低", "Low", "تطبيق_تشليح_بارت_قطع_وصيانه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#هشتاقك_بسعرر_مميز_0ち481б8201", "综合/待分类", "General / To Classify", "低", "Low", "هشتاقك_بسعرر_مميز_0ち481б8201", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("جنوب افريقيا", "综合/待分类", "General / To Classify", "低", "Low", "جنوب افريقيا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("السوبر الاوروبي", "综合/待分类", "General / To Classify", "低", "Low", "السوبر الاوروبي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاجابه الصحيحه", "综合/待分类", "General / To Classify", "低", "Low", "الاجابه الصحيحه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("المباراه الافتتاحيه", "综合/待分类", "General / To Classify", "低", "Low", "المباراه الافتتاحيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاتحاد الاوروبي", "综合/待分类", "General / To Classify", "低", "Low", "الاتحاد الاوروبي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عمل الخير", "综合/待分类", "General / To Classify", "低", "Low", "عمل الخير", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الخميس", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الخميس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الحكم الصومالي", "综合/待分类", "General / To Classify", "低", "Low", "الحكم الصومالي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عمر أرتان", "综合/待分类", "General / To Classify", "低", "Low", "عمر أرتان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم اليوم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم اليوم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("المنتخبات العربيه", "体育/赛事", "Sports / Event", "低", "Low", "المنتخبات العربيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كوريا الجنوبيه", "综合/待分类", "General / To Classify", "低", "Low", "كوريا الجنوبيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الحقيقه_توجع", "综合/待分类", "General / To Classify", "低", "Low", "الحقيقه_توجع", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#نينجا_معك_حتي_الكاس", "体育/赛事", "Sports / Event", "低", "Low", "نينجا_معك_حتي_الكاس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الكاس_بطعم_البيت", "体育/赛事", "Sports / Event", "低", "Low", "الكاس_بطعم_البيت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("Erden Timur", "综合/待分类", "General / To Classify", "低", "Low", "Erden Timur", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$NIXX", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$NIXX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TürkiyeHızlanıyor", "综合/待分类", "General / To Classify", "低", "Low", "TürkiyeHızlanıyor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BABA TAHLİYE", "综合/待分类", "General / To Classify", "低", "Low", "BABA TAHLİYE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Taha Çakmak", "综合/待分类", "General / To Classify", "低", "Low", "Taha Çakmak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("merkez bankası", "综合/待分类", "General / To Classify", "低", "Low", "merkez bankası", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Türk Kızılay Ödülleri", "综合/待分类", "General / To Classify", "低", "Low", "Türk Kızılay Ödülleri", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#faiz", "综合/待分类", "General / To Classify", "低", "Low", "faiz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#trhol", "综合/待分类", "General / To Classify", "低", "Low", "trhol", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TCMB", "综合/待分类", "General / To Classify", "低", "Low", "TCMB", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#yirmibirchallenge", "综合/待分类", "General / To Classify", "低", "Low", "yirmibirchallenge", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tedbir", "综合/待分类", "General / To Classify", "低", "Low", "Tedbir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EşitYasa EşitAf", "综合/待分类", "General / To Classify", "低", "Low", "EşitYasa EşitAf", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Başınız", "综合/待分类", "General / To Classify", "低", "Low", "Başınız", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SüreCezalari HayatıEtkiliyor", "综合/待分类", "General / To Classify", "低", "Low", "SüreCezalari HayatıEtkiliyor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Çeyrek Final", "综合/待分类", "General / To Classify", "低", "Low", "Çeyrek Final", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Altın", "综合/待分类", "General / To Classify", "低", "Low", "Altın", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Parti Meclisi", "综合/待分类", "General / To Classify", "低", "Low", "Parti Meclisi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Müslim Sarı", "综合/待分类", "General / To Classify", "低", "Low", "Müslim Sarı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mesut Eker", "综合/待分类", "General / To Classify", "低", "Low", "Mesut Eker", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#BurberryXSanta", "综合/待分类", "General / To Classify", "低", "Low", "BurberryXSanta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BBFanFest2026LIVE", "综合/待分类", "General / To Classify", "低", "Low", "BBFanFest2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("The Unicity Execution Layer", "综合/待分类", "General / To Classify", "低", "Low", "The Unicity Execution Layer", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("predicates and atomic swaps", "综合/待分类", "General / To Classify", "低", "Low", "predicates and atomic swaps", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("how the gun bed works", "综合/待分类", "General / To Classify", "低", "Low", "how the gun bed works", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesLIVE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesLIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKYNANI WU DESTINY PRESS", "综合/待分类", "General / To Classify", "低", "Low", "SKYNANI WU DESTINY PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("World Cup", "体育/赛事", "Sports / Event", "低", "Low", "World Cup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Steve Jobs", "综合/待分类", "General / To Classify", "低", "Low", "Steve Jobs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vàng", "综合/待分类", "General / To Classify", "低", "Low", "Vàng", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JanJingjing", "综合/待分类", "General / To Classify", "低", "Low", "JanJingjing", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fable 5", "综合/待分类", "General / To Classify", "低", "Low", "Fable 5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("thứ 5", "综合/待分类", "General / To Classify", "低", "Low", "thứ 5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Speedrun To 1 Billion", "综合/待分类", "General / To Classify", "低", "Low", "Speedrun To 1 Billion", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Chọn", "综合/待分类", "General / To Classify", "低", "Low", "Chọn", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("arXiv", "综合/待分类", "General / To Classify", "低", "Low", "arXiv", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ngày", "综合/待分类", "General / To Classify", "低", "Low", "Ngày", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("South Africa", "综合/待分类", "General / To Classify", "低", "Low", "South Africa", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PerX", "综合/待分类", "General / To Classify", "低", "Low", "PerX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#WUTheSeriesEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LONARK X JOONG", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LONARK X JOONG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#1stDuoTFOShowcaseDay", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "1stDuoTFOShowcaseDay", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO DEBUT SHOWCASE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TFO DEBUT SHOWCASE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NestlePureLifexBUSFreshTival", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "NestlePureLifexBUSFreshTival", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เก่งน้ําปิง", "综合/待分类", "General / To Classify", "低", "Low", "เก่งน้ําปิง", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#nampingster", "综合/待分类", "General / To Classify", "低", "Low", "nampingster", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LaybackUnderJAYBsTREE", "综合/待分类", "General / To Classify", "低", "Low", "LaybackUnderJAYBsTREE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TWNPICH 2M TIKTOK", "综合/待分类", "General / To Classify", "低", "Low", "TWNPICH 2M TIKTOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BE MY PLAYER TWO Q15 Q16 Q17", "综合/待分类", "General / To Classify", "低", "Low", "BE MY PLAYER TWO Q15 Q16 Q17", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAY B 3rd MINI ALBUM OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JAY B 3rd MINI ALBUM OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TONSOM 5TH EPISODE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TONSOM 5TH EPISODE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PHUWIN YEW LIVE SESSION", "综合/待分类", "General / To Classify", "低", "Low", "PHUWIN YEW LIVE SESSION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LONARK X JOONG", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LONARK X JOONG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Micellar with HONGSHI", "综合/待分类", "General / To Classify", "低", "Low", "Micellar with HONGSHI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GINNY JAYNA AFair ICONSIAM", "旅行/本地活动", "Travel / Local Event", "低", "Low", "GINNY JAYNA AFair ICONSIAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY10", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE LEGACY10", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE10", "综合/待分类", "General / To Classify", "低", "Low", "SHINING PRIDE CHARLOTTE10", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#2MillionForTeeTee", "综合/待分类", "General / To Classify", "低", "Low", "2MillionForTeeTee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WhenOrangesFallEP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WhenOrangesFallEP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ซอโซ่ล่ามธีร์Q15Q16Q17", "综合/待分类", "General / To Classify", "低", "Low", "ซอโซ่ล่ามธีร์Q15Q16Q17", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ทรายสก๊อต", "综合/待分类", "General / To Classify", "低", "Low", "ทรายสก๊อต", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#BTS_WORLDTOUR_ARIRANG_BULACAN", "旅行/本地活动", "Travel / Local Event", "低", "Low", "BTS_WORLDTOUR_ARIRANG_BULACAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#THISISFOR_ONCE", "综合/待分类", "General / To Classify", "低", "Low", "THISISFOR_ONCE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MISS BEHAVE EP2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "MISS BEHAVE EP2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#OurMoonlightJUNday", "综合/待分类", "General / To Classify", "低", "Low", "OurMoonlightJUNday", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LaVieEnBELLEin24", "综合/待分类", "General / To Classify", "低", "Low", "LaVieEnBELLEin24", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ITS DUSTBIA TIME", "综合/待分类", "General / To Classify", "低", "Low", "ITS DUSTBIA TIME", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TALIANShareHope", "综合/待分类", "General / To Classify", "低", "Low", "TALIANShareHope", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TALAGIVESaya BALIK ESKWELA", "旅行/本地活动", "Travel / Local Event", "低", "Low", "TALAGIVESaya BALIK ESKWELA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ateneo", "综合/待分类", "General / To Classify", "低", "Low", "Ateneo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("junhui", "综合/待分类", "General / To Classify", "低", "Low", "junhui", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GINNY JAYNA AFair ICONSIAM", "旅行/本地活动", "Travel / Local Event", "低", "Low", "GINNY JAYNA AFair ICONSIAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LELQUIN AT LOFFICIEL BALL", "综合/待分类", "General / To Classify", "低", "Low", "LELQUIN AT LOFFICIEL BALL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("XONARA WISH BUS DEBUT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "XONARA WISH BUS DEBUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LNPH", "综合/待分类", "General / To Classify", "低", "Low", "LNPH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rene", "综合/待分类", "General / To Classify", "低", "Low", "Rene", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MIndanao", "综合/待分类", "General / To Classify", "低", "Low", "MIndanao", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARTON BUHAY PA", "综合/待分类", "General / To Classify", "低", "Low", "CARTON BUHAY PA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("gioluna on its showtime", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "gioluna on its showtime", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jimmy Bondoc", "综合/待分类", "General / To Classify", "低", "Low", "Jimmy Bondoc", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jovic", "综合/待分类", "General / To Classify", "低", "Low", "Jovic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#حمدان_للاعلانات_О54О547О49", "综合/待分类", "General / To Classify", "低", "Low", "حمدان_للاعلانات_О54О547О49", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#احمر", "综合/待分类", "General / To Classify", "低", "Low", "احمر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#مدارس_براعم_الغد_الاهليه_نجران", "综合/待分类", "General / To Classify", "低", "Low", "مدارس_براعم_الغد_الاهليه_نجران", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ارسل_طلبك_للتشاليح__والورش", "综合/待分类", "General / To Classify", "低", "Low", "ارسل_طلبك_للتشاليح__والورش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#السعوديه_السنغال", "综合/待分类", "General / To Classify", "低", "Low", "السعوديه_السنغال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("راشفورد", "综合/待分类", "General / To Classify", "低", "Low", "راشفورد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الاربعاء", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الاربعاء", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("نظام الطيبات", "综合/待分类", "General / To Classify", "低", "Low", "نظام الطيبات", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اللاعب السعودي", "综合/待分类", "General / To Classify", "低", "Low", "اللاعب السعودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("وتركيا", "综合/待分类", "General / To Classify", "低", "Low", "وتركيا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الفضاء الملكيه السعوديه", "综合/待分类", "General / To Classify", "低", "Low", "الفضاء الملكيه السعوديه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بن هاربورغ", "综合/待分类", "General / To Classify", "低", "Low", "بن هاربورغ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد ابو الشامات", "综合/待分类", "General / To Classify", "低", "Low", "محمد ابو الشامات", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ميندي", "综合/待分类", "General / To Classify", "低", "Low", "ميندي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("السكك الحديديه", "综合/待分类", "General / To Classify", "低", "Low", "السكك الحديديه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الحكم الصومالي", "综合/待分类", "General / To Classify", "低", "Low", "الحكم الصومالي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("وعبدالله خالد", "综合/待分类", "General / To Classify", "低", "Low", "وعبدالله خالد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("المجلس الوزاري", "综合/待分类", "General / To Classify", "低", "Low", "المجلس الوزاري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("حسين الشمري", "综合/待分类", "General / To Classify", "低", "Low", "حسين الشمري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("لدول الخليج العربيه", "综合/待分类", "General / To Classify", "低", "Low", "لدول الخليج العربيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#ösym", "综合/待分类", "General / To Classify", "低", "Low", "ösym", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SonSözKademede", "综合/待分类", "General / To Classify", "低", "Low", "SonSözKademede", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#8milyonEvYıkılacak", "综合/待分类", "General / To Classify", "低", "Low", "8milyonEvYıkılacak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#sınav", "综合/待分类", "General / To Classify", "低", "Low", "sınav", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#çarşamba", "综合/待分类", "General / To Classify", "低", "Low", "çarşamba", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("El Bilal Toure", "旅行/本地活动", "Travel / Local Event", "低", "Low", "El Bilal Toure", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mustafa Bozbey", "综合/待分类", "General / To Classify", "低", "Low", "Mustafa Bozbey", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İYİ Parti&#39;den", "综合/待分类", "General / To Classify", "低", "Low", "İYİ Parti&#39;den", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Türkiye Hayat Emeklilik", "综合/待分类", "General / To Classify", "低", "Low", "Türkiye Hayat Emeklilik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Brahim Diaz", "综合/待分类", "General / To Classify", "低", "Low", "Brahim Diaz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Türkiye Sigorta", "综合/待分类", "General / To Classify", "低", "Low", "Türkiye Sigorta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ehliyetİçin SözSendeTBMM", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Ehliyetİçin SözSendeTBMM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ersin Beyaz", "综合/待分类", "General / To Classify", "低", "Low", "Ersin Beyaz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Prim İadeli Hayat Sigortası", "综合/待分类", "General / To Classify", "低", "Low", "Prim İadeli Hayat Sigortası", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Müsavat Dervişoğlu", "综合/待分类", "General / To Classify", "低", "Low", "Müsavat Dervişoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Zülfü Livaneli", "综合/待分类", "General / To Classify", "低", "Low", "Zülfü Livaneli", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cengiz Aytmatov", "综合/待分类", "General / To Classify", "低", "Low", "Cengiz Aytmatov", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bir Ay Bizden Kampanyası", "综合/待分类", "General / To Classify", "低", "Low", "Bir Ay Bizden Kampanyası", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hatay&#39;dan", "综合/待分类", "General / To Classify", "低", "Low", "Hatay&#39;dan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Yves Bissouma", "综合/待分类", "General / To Classify", "低", "Low", "Yves Bissouma", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#WUTheSeriesEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GlowCloserwithJOONG", "综合/待分类", "General / To Classify", "低", "Low", "GlowCloserwithJOONG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("The Unicity Execution Layer", "综合/待分类", "General / To Classify", "低", "Low", "The Unicity Execution Layer", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$YOM", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$YOM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PSDFAMILY MOVIE TIME COLONY", "综合/待分类", "General / To Classify", "低", "Low", "PSDFAMILY MOVIE TIME COLONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PerX", "综合/待分类", "General / To Classify", "低", "Low", "PerX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Claude Fable 5", "综合/待分类", "General / To Classify", "低", "Low", "Claude Fable 5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Predicates and Atomic Swaps", "综合/待分类", "General / To Classify", "低", "Low", "Predicates and Atomic Swaps", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#loveforseonghyeon", "综合/待分类", "General / To Classify", "低", "Low", "loveforseonghyeon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("we miss you seonghyeon", "综合/待分类", "General / To Classify", "低", "Low", "we miss you seonghyeon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Thứ 4", "综合/待分类", "General / To Classify", "低", "Low", "Thứ 4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bataso", "综合/待分类", "General / To Classify", "低", "Low", "Bataso", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Taco Tuesday", "综合/待分类", "General / To Classify", "低", "Low", "Taco Tuesday", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("howdy", "综合/待分类", "General / To Classify", "低", "Low", "howdy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mame Inu", "综合/待分类", "General / To Classify", "低", "Low", "Mame Inu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ngày", "综合/待分类", "General / To Classify", "低", "Low", "Ngày", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mythos", "综合/待分类", "General / To Classify", "低", "Low", "Mythos", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เขมจิราตอนพิเศษถ่ายละเด้อ", "综合/待分类", "General / To Classify", "低", "Low", "เขมจิราตอนพิเศษถ่ายละเด้อ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("thứ 3", "综合/待分类", "General / To Classify", "低", "Low", "thứ 3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#WUTheSeriesEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ACTOR FOURTH x GALA PREMIERE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ACTOR FOURTH x GALA PREMIERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTS_ARİRANG", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTS_ARİRANG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#WUTheSeriesEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTS_WORLDTOUR_BANGKOK", "旅行/本地活动", "Travel / Local Event", "低", "Low", "BTS_WORLDTOUR_BANGKOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#กฤษดาพาราไดซ์GALA", "综合/待分类", "General / To Classify", "低", "Low", "กฤษดาพาราไดซ์GALA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ACTOR FOURTH x GALA PREMIERE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ACTOR FOURTH x GALA PREMIERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เขมจิราตอนพิเศษถ่ายละเด้อ", "综合/待分类", "General / To Classify", "低", "Low", "เขมจิราตอนพิเศษถ่ายละเด้อ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CharlottexOandB", "综合/待分类", "General / To Classify", "低", "Low", "CharlottexOandB", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JUNIORMARK LENSKART POPMART", "综合/待分类", "General / To Classify", "低", "Low", "JUNIORMARK LENSKART POPMART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BEHIND THE SCENE BOL Q4", "综合/待分类", "General / To Classify", "低", "Low", "BEHIND THE SCENE BOL Q4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Membership", "综合/待分类", "General / To Classify", "低", "Low", "Membership", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE09", "综合/待分类", "General / To Classify", "低", "Low", "SHINING PRIDE CHARLOTTE09", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aheye&#39;s 21st Beginning", "综合/待分类", "General / To Classify", "低", "Low", "Aheye&#39;s 21st Beginning", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("VIP 2", "综合/待分类", "General / To Classify", "低", "Low", "VIP 2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HONGSEN KLOOKFOON Q5", "综合/待分类", "General / To Classify", "低", "Low", "HONGSEN KLOOKFOON Q5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("World Cup", "体育/赛事", "Sports / Event", "低", "Low", "World Cup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LenskartTHxJuniorMark", "综合/待分类", "General / To Classify", "低", "Low", "LenskartTHxJuniorMark", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JAYBThrowsTheFirstPitch", "综合/待分类", "General / To Classify", "低", "Low", "JAYBThrowsTheFirstPitch", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTSBrokenOfLoveQ4", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "BTSBrokenOfLoveQ4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GarnierKGlowxFourth", "综合/待分类", "General / To Classify", "低", "Low", "GarnierKGlowxFourth", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LINEMANWongnaiUsersChoicexBUS", "综合/待分类", "General / To Classify", "低", "Low", "LINEMANWongnaiUsersChoicexBUS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PisenXKengNamping", "综合/待分类", "General / To Classify", "低", "Low", "PisenXKengNamping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#BTS_WORLDTOUR_ARIRANG_BULACAN", "旅行/本地活动", "Travel / Local Event", "低", "Low", "BTS_WORLDTOUR_ARIRANG_BULACAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mindanao", "综合/待分类", "General / To Classify", "低", "Low", "Mindanao", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ateneo", "综合/待分类", "General / To Classify", "低", "Low", "Ateneo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Blessings", "综合/待分类", "General / To Classify", "低", "Low", "Blessings", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sooyoung", "综合/待分类", "General / To Classify", "低", "Low", "Sooyoung", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SIT TIGHT", "综合/待分类", "General / To Classify", "低", "Low", "SIT TIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#กฤษดาพาราไดซ์GALA", "综合/待分类", "General / To Classify", "低", "Low", "กฤษดาพาราไดซ์GALA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ACTOR FOURTH x GALA PREMIERE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ACTOR FOURTH x GALA PREMIERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TICKET SECURED", "综合/待分类", "General / To Classify", "低", "Low", "TICKET SECURED", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#tnt10anglakas", "综合/待分类", "General / To Classify", "低", "Low", "tnt10anglakas", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARTON ERA CONTINUES", "综合/待分类", "General / To Classify", "低", "Low", "CARTON ERA CONTINUES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bangtan", "综合/待分类", "General / To Classify", "低", "Low", "Bangtan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PSDFAMILY MOVIE TIME COLONY", "综合/待分类", "General / To Classify", "低", "Low", "PSDFAMILY MOVIE TIME COLONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNOO GOLDEN SONGCOVER", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "SUNOO GOLDEN SONGCOVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#모든색조의_사랑_선우_D15", "综合/待分类", "General / To Classify", "低", "Low", "모든색조의_사랑_선우_D15", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rene", "综合/待分类", "General / To Classify", "低", "Low", "Rene", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HYASERVING FOR VIVA BEAUTY", "综合/待分类", "General / To Classify", "低", "Low", "HYASERVING FOR VIVA BEAUTY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sarangani", "综合/待分类", "General / To Classify", "低", "Low", "Sarangani", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ADMU", "综合/待分类", "General / To Classify", "低", "Low", "ADMU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#معصي", "综合/待分类", "General / To Classify", "低", "Low", "معصي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#اجواء_الصيف", "综合/待分类", "General / To Classify", "低", "Low", "اجواء_الصيف", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#اليوم_العالمي_للصديق_المفضل", "综合/待分类", "General / To Classify", "低", "Low", "اليوم_العالمي_للصديق_المفضل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#صباحكم", "综合/待分类", "General / To Classify", "低", "Low", "صباحكم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تحدي_الالقاء_للاطفال٥", "综合/待分类", "General / To Classify", "低", "Low", "تحدي_الالقاء_للاطفال٥", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("نظام الطيبات", "综合/待分类", "General / To Classify", "低", "Low", "نظام الطيبات", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("السكك الحديديه", "综合/待分类", "General / To Classify", "低", "Low", "السكك الحديديه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايران", "综合/待分类", "General / To Classify", "低", "Low", "ايران", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("راشد", "综合/待分类", "General / To Classify", "低", "Low", "راشد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التميز المالي", "综合/待分类", "General / To Classify", "低", "Low", "التميز المالي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("وزارة الصحة", "综合/待分类", "General / To Classify", "低", "Low", "وزارة الصحة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الثلاثاء", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الثلاثاء", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("حسين الشمري", "综合/待分类", "General / To Classify", "低", "Low", "حسين الشمري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الاثنين", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الاثنين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التحول الوطني", "综合/待分类", "General / To Classify", "低", "Low", "التحول الوطني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("القبول النهايي", "综合/待分类", "General / To Classify", "低", "Low", "القبول النهايي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("حسن معاذ", "综合/待分类", "General / To Classify", "低", "Low", "حسن معاذ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("امريكا", "综合/待分类", "General / To Classify", "低", "Low", "امريكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاكا", "综合/待分类", "General / To Classify", "低", "Low", "كاكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("مطلق الغويري", "综合/待分类", "General / To Classify", "低", "Low", "مطلق الغويري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("Hain Kemal", "综合/待分类", "General / To Classify", "低", "Low", "Hain Kemal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#FerdiZeyrek", "综合/待分类", "General / To Classify", "低", "Low", "FerdiZeyrek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Salı", "综合/待分类", "General / To Classify", "低", "Low", "Salı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mansur Yavaş", "综合/待分类", "General / To Classify", "低", "Low", "Mansur Yavaş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Irmaköğretmeniçinadalet", "综合/待分类", "General / To Classify", "低", "Low", "Irmaköğretmeniçinadalet", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SağlıktaKadroAsmGruba", "综合/待分类", "General / To Classify", "低", "Low", "SağlıktaKadroAsmGruba", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EuroleagueWithBesiktas", "体育/赛事", "Sports / Event", "低", "Low", "EuroleagueWithBesiktas", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aybüke Yalçın", "综合/待分类", "General / To Classify", "低", "Low", "Aybüke Yalçın", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHP Grup Toplantısı", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "CHP Grup Toplantısı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EhliyetMağduryeti SonBulsun", "综合/待分类", "General / To Classify", "低", "Low", "EhliyetMağduryeti SonBulsun", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHP Genel Merkezi&#39;ne", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "CHP Genel Merkezi&#39;ne", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Manisa&#39;ya", "综合/待分类", "General / To Classify", "低", "Low", "Manisa&#39;ya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FETÖ&#39;cü Özgür", "综合/待分类", "General / To Classify", "低", "Low", "FETÖ&#39;cü Özgür", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Saat 14.00", "综合/待分类", "General / To Classify", "低", "Low", "Saat 14.00", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TBMM", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "TBMM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Meclise", "综合/待分类", "General / To Classify", "低", "Low", "Meclise", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Saniye", "综合/待分类", "General / To Classify", "低", "Low", "Saniye", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tiplere", "综合/待分类", "General / To Classify", "低", "Low", "Tiplere", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Simit", "综合/待分类", "General / To Classify", "低", "Low", "Simit", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Atlas Çağlayan", "综合/待分类", "General / To Classify", "低", "Low", "Atlas Çağlayan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#WUTheSeriesEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EnemiesWithBenefitsEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EnemiesWithBenefitsEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB SIXTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB SIXTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PSDFAMILY MOVIE TIME COLONY", "综合/待分类", "General / To Classify", "低", "Low", "PSDFAMILY MOVIE TIME COLONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PerX", "综合/待分类", "General / To Classify", "低", "Low", "PerX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Humanity Protocol", "综合/待分类", "General / To Classify", "低", "Low", "Humanity Protocol", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("czrex", "综合/待分类", "General / To Classify", "低", "Low", "czrex", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Thứ 3", "综合/待分类", "General / To Classify", "低", "Low", "Thứ 3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Taco Tuesday", "综合/待分类", "General / To Classify", "低", "Low", "Taco Tuesday", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Obvious", "综合/待分类", "General / To Classify", "低", "Low", "Obvious", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Neutral", "综合/待分类", "General / To Classify", "低", "Low", "Neutral", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ORMxLolaneNatureCodeBotanic", "综合/待分类", "General / To Classify", "低", "Low", "ORMxLolaneNatureCodeBotanic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$SAHARA", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$SAHARA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Delayed", "综合/待分类", "General / To Classify", "低", "Low", "Delayed", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Timely", "综合/待分类", "General / To Classify", "低", "Low", "Timely", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Durable", "综合/待分类", "General / To Classify", "低", "Low", "Durable", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AVLT", "综合/待分类", "General / To Classify", "低", "Low", "AVLT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Siri", "综合/待分类", "General / To Classify", "低", "Low", "Siri", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Uncertain", "综合/待分类", "General / To Classify", "低", "Low", "Uncertain", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
    date: "2026-06-08",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TerikatJanjiEp65", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TerikatJanjiEp65", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#f1twtselfieday", "体育/赛事", "Sports / Event", "低", "Low", "f1twtselfieday", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BOYNEXTDOOR HOME OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BOYNEXTDOOR HOME OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUANG CONCERT AT IMPACT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DUANG CONCERT AT IMPACT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#DuangGoRoundConcert", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DuangGoRoundConcert", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEEPOR", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TEETEEPOR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PSDFAMILY MOVIE TIME COLONY", "综合/待分类", "General / To Classify", "低", "Low", "PSDFAMILY MOVIE TIME COLONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เจอด้วงที่อิมแพคนะเธอ", "综合/待分类", "General / To Classify", "低", "Low", "เจอด้วงที่อิมแพคนะเธอ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUANG CONCERT SOON", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DUANG CONCERT SOON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#พ่อไก่ซิ่งแม่วิ้งก์แซ่บ", "综合/待分类", "General / To Classify", "低", "Low", "พ่อไก่ซิ่งแม่วิ้งก์แซ่บ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ด้วงกับเธอSeries", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ด้วงกับเธอSeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUANG CONCERT AT IMPACT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DUANG CONCERT AT IMPACT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THOMASKONG TGC VLOG", "综合/待分类", "General / To Classify", "低", "Low", "THOMASKONG TGC VLOG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNSET IN WINTER EP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUNSET IN WINTER EP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUPALAI MY STAYCATION BOY EP29", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUPALAI MY STAYCATION BOY EP29", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TWO FACES OF THATRI EP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TWO FACES OF THATRI EP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MABELZ x EARNEARN", "品牌活动/消费", "Brand / Consumer", "低", "Low", "MABELZ x EARNEARN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DICE BUSKING AT HUA HIN", "综合/待分类", "General / To Classify", "低", "Low", "DICE BUSKING AT HUA HIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CATHY DOLL X FAYE TIKTOK LIVE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CATHY DOLL X FAYE TIKTOK LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TKNur Optical Purple USmile", "综合/待分类", "General / To Classify", "低", "Low", "TKNur Optical Purple USmile", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAM X LGTH", "品牌活动/消费", "Brand / Consumer", "低", "Low", "JAM X LGTH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO 1ST DUO SINGLE PRESS", "综合/待分类", "General / To Classify", "低", "Low", "TFO 1ST DUO SINGLE PRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Your Third Q13", "综合/待分类", "General / To Classify", "低", "Low", "Your Third Q13", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("Mindanao", "综合/待分类", "General / To Classify", "低", "Low", "Mindanao", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rene", "综合/待分类", "General / To Classify", "低", "Low", "Rene", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PSDFAMILY MOVIE TIME COLONY", "综合/待分类", "General / To Classify", "低", "Low", "PSDFAMILY MOVIE TIME COLONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AYAN NA ANG KAIA", "综合/待分类", "General / To Classify", "低", "Low", "AYAN NA ANG KAIA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("COURIERS AWAIT CARTON", "综合/待分类", "General / To Classify", "低", "Low", "COURIERS AWAIT CARTON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Blessings", "综合/待分类", "General / To Classify", "低", "Low", "Blessings", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#alwaysforcarton", "综合/待分类", "General / To Classify", "低", "Low", "alwaysforcarton", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PlsLoveรักได้ไหม", "综合/待分类", "General / To Classify", "低", "Low", "PlsLoveรักได้ไหม", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ateneo", "综合/待分类", "General / To Classify", "低", "Low", "Ateneo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#dahon", "综合/待分类", "General / To Classify", "低", "Low", "dahon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sarangani", "综合/待分类", "General / To Classify", "低", "Low", "Sarangani", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("caprice shines again", "综合/待分类", "General / To Classify", "低", "Low", "caprice shines again", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#angelonstage", "综合/待分类", "General / To Classify", "低", "Low", "angelonstage", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("lover brent amon kasingkasing", "综合/待分类", "General / To Classify", "低", "Low", "lover brent amon kasingkasing", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AT LAST WE MEET CAPEATH", "综合/待分类", "General / To Classify", "低", "Low", "AT LAST WE MEET CAPEATH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RAVE UNLOCKS CJ MODE", "综合/待分类", "General / To Classify", "低", "Low", "RAVE UNLOCKS CJ MODE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE BIANCHELLA XPERIENCE", "综合/待分类", "General / To Classify", "低", "Low", "THE BIANCHELLA XPERIENCE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("General Santos City", "综合/待分类", "General / To Classify", "低", "Low", "General Santos City", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bench", "综合/待分类", "General / To Classify", "低", "Low", "Bench", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#التميز_في_العمل", "综合/待分类", "General / To Classify", "低", "Low", "التميز_في_العمل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#استثمر_في_عقلك", "综合/待分类", "General / To Classify", "低", "Low", "استثمر_في_عقلك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#اصنع_دخلك_بنفسك", "综合/待分类", "General / To Classify", "低", "Low", "اصنع_دخلك_بنفسك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تزوج_الان_من_تطبيق_استقرار", "综合/待分类", "General / To Classify", "低", "Low", "تزوج_الان_من_تطبيق_استقرار", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#بوح_الظهيره", "综合/待分类", "General / To Classify", "低", "Low", "بوح_الظهيره", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("نظام الطيبات", "综合/待分类", "General / To Classify", "低", "Low", "نظام الطيبات", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("وزارة الصحة", "综合/待分类", "General / To Classify", "低", "Low", "وزارة الصحة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("القبول النهايي", "综合/待分类", "General / To Classify", "低", "Low", "القبول النهايي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("حسين الشمري", "综合/待分类", "General / To Classify", "低", "Low", "حسين الشمري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("وزارة الرياضة", "综合/待分类", "General / To Classify", "低", "Low", "وزارة الرياضة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العنايه المركزه", "综合/待分类", "General / To Classify", "低", "Low", "العنايه المركزه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايران", "综合/待分类", "General / To Classify", "低", "Low", "ايران", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الاثنين", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الاثنين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ابراهيم المعيقل", "综合/待分类", "General / To Classify", "低", "Low", "ابراهيم المعيقل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الوكيل المساعد", "综合/待分类", "General / To Classify", "低", "Low", "الوكيل المساعد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("امريكا", "综合/待分类", "General / To Classify", "低", "Low", "امريكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التميز المالي", "综合/待分类", "General / To Classify", "低", "Low", "التميز المالي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("إسرائيل", "综合/待分类", "General / To Classify", "低", "Low", "إسرائيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سلطان الجويه", "综合/待分类", "General / To Classify", "低", "Low", "سلطان الجويه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الصحه السعوديه", "综合/待分类", "General / To Classify", "低", "Low", "الصحه السعوديه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("Faik", "综合/待分类", "General / To Classify", "低", "Low", "Faik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Karsitmedya", "综合/待分类", "General / To Classify", "低", "Low", "Karsitmedya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Lina Peker", "综合/待分类", "General / To Classify", "低", "Low", "Lina Peker", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#altın", "综合/待分类", "General / To Classify", "低", "Low", "altın", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Filipinler&#39;de 7.8", "综合/待分类", "General / To Classify", "低", "Low", "Filipinler&#39;de 7.8", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Asensio", "综合/待分类", "General / To Classify", "低", "Low", "Asensio", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Anayasa Öncesi", "综合/待分类", "General / To Classify", "低", "Low", "Anayasa Öncesi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MeclisGrup Başkanlarına", "综合/待分类", "General / To Classify", "低", "Low", "MeclisGrup Başkanlarına", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#deprem", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "deprem", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#pazartesi", "综合/待分类", "General / To Classify", "低", "Low", "pazartesi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MHP Konya İl Teşkilatı", "综合/待分类", "General / To Classify", "低", "Low", "MHP Konya İl Teşkilatı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EmekliyeDerhalSeyyanenZam", "综合/待分类", "General / To Classify", "低", "Low", "EmekliyeDerhalSeyyanenZam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("La Gazzetta dello Sport", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "La Gazzetta dello Sport", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#yirmibirchallenge", "综合/待分类", "General / To Classify", "低", "Low", "yirmibirchallenge", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Barella", "综合/待分类", "General / To Classify", "低", "Low", "Barella", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Yapı Kredi", "综合/待分类", "General / To Classify", "低", "Low", "Yapı Kredi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Adeyemi", "综合/待分类", "General / To Classify", "低", "Low", "Adeyemi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dusan Vlahovic", "综合/待分类", "General / To Classify", "低", "Low", "Dusan Vlahovic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("diyarbakır&#39;ın sur", "综合/待分类", "General / To Classify", "低", "Low", "diyarbakır&#39;ın sur", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("9 Haziran Salı", "综合/待分类", "General / To Classify", "低", "Low", "9 Haziran Salı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#ORMxLolaneNatureCodeBotanic", "综合/待分类", "General / To Classify", "低", "Low", "ORMxLolaneNatureCodeBotanic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Czrex", "综合/待分类", "General / To Classify", "低", "Low", "Czrex", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SFxPerthSantaDomiia", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "SFxPerthSantaDomiia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Lucky", "综合/待分类", "General / To Classify", "低", "Low", "Lucky", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PSDFAMILY MOVIE TIME COLONY", "综合/待分类", "General / To Classify", "低", "Low", "PSDFAMILY MOVIE TIME COLONY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tuần", "综合/待分类", "General / To Classify", "低", "Low", "Tuần", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EnemiesWithBenefitsEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EnemiesWithBenefitsEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB SIXTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB SIXTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CATHY DOLL X FAYE TIKTOK LIVE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CATHY DOLL X FAYE TIKTOK LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Howdy", "综合/待分类", "General / To Classify", "低", "Low", "Howdy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CathyDollxFayePeraya", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "CathyDollxFayePeraya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PerX", "综合/待分类", "General / To Classify", "低", "Low", "PerX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("thứ 2", "综合/待分类", "General / To Classify", "低", "Low", "thứ 2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#loveandpawwithormkornnaphat", "综合/待分类", "General / To Classify", "低", "Low", "loveandpawwithormkornnaphat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("love and paw x orm", "品牌活动/消费", "Brand / Consumer", "低", "Low", "love and paw x orm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Wishing", "综合/待分类", "General / To Classify", "低", "Low", "Wishing", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Casual", "综合/待分类", "General / To Classify", "低", "Low", "Casual", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hiya", "综合/待分类", "General / To Classify", "低", "Low", "Hiya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA TALKS TILFF 2026", "综合/待分类", "General / To Classify", "低", "Low", "APASRA TALKS TILFF 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("tình 1đem", "综合/待分类", "General / To Classify", "低", "Low", "tình 1đem", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
    date: "2026-06-07",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#TicketToHeavenEP2", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BARTHTANRAK ONE STEP CLOSER", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BARTHTANRAK ONE STEP CLOSER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN HALO LIVE CLIP", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN HALO LIVE CLIP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#MOVEONCONCERTxKengNamping", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "MOVEONCONCERTxKengNamping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP WITH BURNING EMPIRE", "综合/待分类", "General / To Classify", "低", "Low", "KNP WITH BURNING EMPIRE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO MOVEON CON 2026", "综合/待分类", "General / To Classify", "低", "Low", "TFO MOVEON CON 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CATTSHIRTxPHUWIN", "综合/待分类", "General / To Classify", "低", "Low", "CATTSHIRTxPHUWIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ORMxLolaneNatureCodeBotanic", "综合/待分类", "General / To Classify", "低", "Low", "ORMxLolaneNatureCodeBotanic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORM FACE OF LOLANE", "综合/待分类", "General / To Classify", "低", "Low", "ORM FACE OF LOLANE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LaurierxWilliamEst", "综合/待分类", "General / To Classify", "低", "Low", "LaurierxWilliamEst", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST COMFORT ZONE", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST COMFORT ZONE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PPV FANCON DDAY", "综合/待分类", "General / To Classify", "低", "Low", "PPV FANCON DDAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PoohPavelSecondDateFancon", "综合/待分类", "General / To Classify", "低", "Low", "PoohPavelSecondDateFancon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUTHONG AT MEOW CATPITAL", "综合/待分类", "General / To Classify", "低", "Low", "NUTHONG AT MEOW CATPITAL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TRE 1st FANMEETING", "综合/待分类", "General / To Classify", "低", "Low", "TRE 1st FANMEETING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BPFK x TUSONMHEE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BPFK x TUSONMHEE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BEVER AT UBON X NIYOMJEANS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BEVER AT UBON X NIYOMJEANS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FRIENDLY ME X SHINEE PREM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FRIENDLY ME X SHINEE PREM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NEX LOreal Lip Oil", "品牌活动/消费", "Brand / Consumer", "低", "Low", "NEX LOreal Lip Oil", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WEIRDO 101 Q6", "综合/待分类", "General / To Classify", "低", "Low", "WEIRDO 101 Q6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN HALO LIVE CLIP", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN HALO LIVE CLIP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KENGNAMPING WITH SIANRANG", "综合/待分类", "General / To Classify", "低", "Low", "KENGNAMPING WITH SIANRANG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SOLD OUT", "综合/待分类", "General / To Classify", "低", "Low", "SOLD OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#AVCWomensCup", "体育/赛事", "Sports / Event", "低", "Low", "AVCWomensCup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AT LAST WE MEET CAPEATH", "综合/待分类", "General / To Classify", "低", "Low", "AT LAST WE MEET CAPEATH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AlasPilipinas", "综合/待分类", "General / To Classify", "低", "Low", "AlasPilipinas", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MagicalMOYmentsWithCAPitans", "综合/待分类", "General / To Classify", "低", "Low", "MagicalMOYmentsWithCAPitans", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DONBELLE NGA PALANGGAON", "综合/待分类", "General / To Classify", "低", "Low", "DONBELLE NGA PALANGGAON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Australia", "综合/待分类", "General / To Classify", "低", "Low", "Australia", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tubino", "综合/待分类", "General / To Classify", "低", "Low", "Tubino", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Negrito", "综合/待分类", "General / To Classify", "低", "Low", "Negrito", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LaurierxWilliamEst", "综合/待分类", "General / To Classify", "低", "Low", "LaurierxWilliamEst", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILLIAMEST COMFORT ZONE", "综合/待分类", "General / To Classify", "低", "Low", "WILLIAMEST COMFORT ZONE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Solomon", "综合/待分类", "General / To Classify", "低", "Low", "Solomon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ASAPXPVictoriasCity", "综合/待分类", "General / To Classify", "低", "Low", "ASAPXPVictoriasCity", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORM FACE OF LOLANE", "综合/待分类", "General / To Classify", "低", "Low", "ORM FACE OF LOLANE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE BIANCHELLA XPERIENCE", "综合/待分类", "General / To Classify", "低", "Low", "THE BIANCHELLA XPERIENCE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ytang", "综合/待分类", "General / To Classify", "低", "Low", "Ytang", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MIGUELV CARAmazing DAY", "综合/待分类", "General / To Classify", "低", "Low", "MIGUELV CARAmazing DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA TALKS TILFF 2026", "综合/待分类", "General / To Classify", "低", "Low", "APASRA TALKS TILFF 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CAPRICE SHINES AGAIN", "综合/待分类", "General / To Classify", "低", "Low", "CAPRICE SHINES AGAIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KAI SIDLAK GID", "综合/待分类", "General / To Classify", "低", "Low", "KAI SIDLAK GID", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAPPY FOR KAIJARREN", "综合/待分类", "General / To Classify", "低", "Low", "HAPPY FOR KAIJARREN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#اقتباس_اعجبني", "综合/待分类", "General / To Classify", "低", "Low", "اقتباس_اعجبني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#خواطر", "综合/待分类", "General / To Classify", "低", "Low", "خواطر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#صباح_الورد", "综合/待分类", "General / To Classify", "低", "Low", "صباح_الورد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عطنا_صوره_من_البومك", "综合/待分类", "General / To Classify", "低", "Low", "عطنا_صوره_من_البومك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عتق_رقبه_بدر_مفلح9", "综合/待分类", "General / To Classify", "低", "Low", "عتق_رقبه_بدر_مفلح9", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عامر عبدالله", "综合/待分类", "General / To Classify", "低", "Low", "عامر عبدالله", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد", "综合/待分类", "General / To Classify", "低", "Low", "محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تاريخ اليوم", "综合/待分类", "General / To Classify", "低", "Low", "تاريخ اليوم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الفصل التدريبي الثاني", "综合/待分类", "General / To Classify", "低", "Low", "الفصل التدريبي الثاني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("السليق السعودي", "综合/待分类", "General / To Classify", "低", "Low", "السليق السعودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("امريكا", "综合/待分类", "General / To Classify", "低", "Low", "امريكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الاحد", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الاحد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الكويت", "综合/待分类", "General / To Classify", "低", "Low", "الكويت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التفوق الاقتصادي", "综合/待分类", "General / To Classify", "低", "Low", "التفوق الاقتصادي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الرسايل الخاصه", "综合/待分类", "General / To Classify", "低", "Low", "الرسايل الخاصه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التميز المالي", "综合/待分类", "General / To Classify", "低", "Low", "التميز المالي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("منتخب مصر", "综合/待分类", "General / To Classify", "低", "Low", "منتخب مصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم السبت", "综合/待分类", "General / To Classify", "低", "Low", "اليوم السبت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ميسي", "综合/待分类", "General / To Classify", "低", "Low", "ميسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#dünyakahvaltıgünü", "综合/待分类", "General / To Classify", "低", "Low", "dünyakahvaltıgünü", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#pazar", "综合/待分类", "General / To Classify", "低", "Low", "pazar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Otokoç Genel Müdürlüğü&#39;ne", "综合/待分类", "General / To Classify", "低", "Low", "Otokoç Genel Müdürlüğü&#39;ne", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DikYürüyenler", "综合/待分类", "General / To Classify", "低", "Low", "DikYürüyenler", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Gedson", "综合/待分类", "General / To Classify", "低", "Low", "Gedson", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ahmet Mekin", "综合/待分类", "General / To Classify", "低", "Low", "Ahmet Mekin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cahit Zarifoğlu", "综合/待分类", "General / To Classify", "低", "Low", "Cahit Zarifoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rambo Okan", "综合/待分类", "General / To Classify", "低", "Low", "Rambo Okan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Abdurrahim Karakoç", "综合/待分类", "General / To Classify", "低", "Low", "Abdurrahim Karakoç", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Koç Holding&#39;e", "综合/待分类", "General / To Classify", "低", "Low", "Koç Holding&#39;e", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HadiBuyrun", "综合/待分类", "General / To Classify", "低", "Low", "HadiBuyrun", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tiramisu", "综合/待分类", "General / To Classify", "低", "Low", "Tiramisu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SGKNerdesinAdaletSusmasın", "综合/待分类", "General / To Classify", "低", "Low", "SGKNerdesinAdaletSusmasın", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Biride Çıkıp Demiyorki", "综合/待分类", "General / To Classify", "低", "Low", "Biride Çıkıp Demiyorki", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mehmet Ali Aydınlar", "综合/待分类", "General / To Classify", "低", "Low", "Mehmet Ali Aydınlar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hakan Çalhanoğlu", "综合/待分类", "General / To Classify", "低", "Low", "Hakan Çalhanoğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ahmet Hakan", "综合/待分类", "General / To Classify", "低", "Low", "Ahmet Hakan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Şeref", "综合/待分类", "General / To Classify", "低", "Low", "Şeref", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ertuğrul Özkök", "综合/待分类", "General / To Classify", "低", "Low", "Ertuğrul Özkök", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kazanan Fenerbahçe", "综合/待分类", "General / To Classify", "低", "Low", "Kazanan Fenerbahçe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#ORMxLolaneNatureCodeBotanic", "综合/待分类", "General / To Classify", "低", "Low", "ORMxLolaneNatureCodeBotanic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LoveAndPawWithOrmkornnaphat", "综合/待分类", "General / To Classify", "低", "Low", "LoveAndPawWithOrmkornnaphat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM IN LOVE FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM IN LOVE FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cuối", "综合/待分类", "General / To Classify", "低", "Low", "Cuối", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BlondeJames", "综合/待分类", "General / To Classify", "低", "Low", "BlondeJames", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เสน่หาวาโยตอนที่4", "综合/待分类", "General / To Classify", "低", "Low", "เสน่หาวาโยตอนที่4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE AIR CROSSING THE LINE", "综合/待分类", "General / To Classify", "低", "Low", "THE AIR CROSSING THE LINE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("how the gun bed works", "综合/待分类", "General / To Classify", "低", "Low", "how the gun bed works", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ConENGFALegacyMahachon3", "综合/待分类", "General / To Classify", "低", "Low", "ConENGFALegacyMahachon3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA TALKS TILFF 2026", "综合/待分类", "General / To Classify", "低", "Low", "APASRA TALKS TILFF 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Chủ Nhật", "综合/待分类", "General / To Classify", "低", "Low", "Chủ Nhật", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA NEVER FADE", "综合/待分类", "General / To Classify", "低", "Low", "APASRA NEVER FADE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP WITH BURNING EMPIRE", "综合/待分类", "General / To Classify", "低", "Low", "KNP WITH BURNING EMPIRE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PerX", "综合/待分类", "General / To Classify", "低", "Low", "PerX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Crazy Love MooMoo EP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Crazy Love MooMoo EP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SimpleChain", "综合/待分类", "General / To Classify", "低", "Low", "SimpleChain", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER SHINE ON GOTCHAPOP4", "综合/待分类", "General / To Classify", "低", "Low", "JASPER SHINE ON GOTCHAPOP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nomizen ID", "综合/待分类", "General / To Classify", "低", "Low", "Nomizen ID", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("oombam fulfill 7th", "综合/待分类", "General / To Classify", "低", "Low", "oombam fulfill 7th", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PoUW", "综合/待分类", "General / To Classify", "低", "Low", "PoUW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
    date: "2026-06-06",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("bermanfaat tepat sasaran", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "bermanfaat tepat sasaran", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE UPON A TIME EP11", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LOVE UPON A TIME EP11", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SANTA BEAUTY BLACK CARPET", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "SANTA BEAUTY BLACK CARPET", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#MOVEONCONCERTxZeeNuNew", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "MOVEONCONCERTxZeeNuNew", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ConENGFALegacyMahachon3", "综合/待分类", "General / To Classify", "低", "Low", "ConENGFALegacyMahachon3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วอลเลย์บอลหญิง", "综合/待分类", "General / To Classify", "低", "Low", "วอลเลย์บอลหญิง", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GOTCHAPOP4", "综合/待分类", "General / To Classify", "低", "Low", "GOTCHAPOP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KhemjiraInSriracha", "综合/待分类", "General / To Classify", "低", "Low", "KhemjiraInSriracha", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVE AND PAW X ORM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LOVE AND PAW X ORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KHEMJIRA SRIRACHA TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "KHEMJIRA SRIRACHA TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PAPAJIM PUPPYCEAN FUN DAY", "综合/待分类", "General / To Classify", "低", "Low", "PAPAJIM PUPPYCEAN FUN DAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SANTA BEAUTY BLACK CARPET", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "SANTA BEAUTY BLACK CARPET", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LMSY FANCON DDAY", "综合/待分类", "General / To Classify", "低", "Low", "LMSY FANCON DDAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM IN LOVE FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM IN LOVE FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("POND VELVET CHOCO", "综合/待分类", "General / To Classify", "低", "Low", "POND VELVET CHOCO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENJOY PERCY ENJOY WITH SEA", "综合/待分类", "General / To Classify", "低", "Low", "ENJOY PERCY ENJOY WITH SEA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LYKN POP GOTCHA4", "综合/待分类", "General / To Classify", "低", "Low", "LYKN POP GOTCHA4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FLM BEAUTY WITH SJ", "综合/待分类", "General / To Classify", "低", "Low", "FLM BEAUTY WITH SJ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MAYBELLINE CANDY EST", "品牌活动/消费", "Brand / Consumer", "低", "Low", "MAYBELLINE CANDY EST", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MAXKY GARNIER SHOPEE LIVE", "综合/待分类", "General / To Classify", "低", "Low", "MAXKY GARNIER SHOPEE LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUMMER DATE WITH SAVEWRG", "综合/待分类", "General / To Classify", "低", "Low", "SUMMER DATE WITH SAVEWRG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA NEVER FADE", "综合/待分类", "General / To Classify", "低", "Low", "APASRA NEVER FADE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("INFINITE JOURNEY WITH NexT1DE", "综合/待分类", "General / To Classify", "低", "Low", "INFINITE JOURNEY WITH NexT1DE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#AlasPilipinas", "综合/待分类", "General / To Classify", "低", "Low", "AlasPilipinas", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AVCWomensCup", "体育/赛事", "Sports / Event", "低", "Low", "AVCWomensCup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#STELLarShowtimeHost", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "STELLarShowtimeHost", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DONBELLE PALANGGA NAMON", "综合/待分类", "General / To Classify", "低", "Low", "DONBELLE PALANGGA NAMON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OnDEMAND EP LAUNCH", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "OnDEMAND EP LAUNCH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA NEVER FADE", "综合/待分类", "General / To Classify", "低", "Low", "APASRA NEVER FADE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#YokoDebutShortFilm", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "YokoDebutShortFilm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ytang", "综合/待分类", "General / To Classify", "低", "Low", "Ytang", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LANCEBREY TAKES OVER", "综合/待分类", "General / To Classify", "低", "Low", "LANCEBREY TAKES OVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILBEA LOVE REPEAT", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WILBEA LOVE REPEAT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LanceBreyAtTheRepeat", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LanceBreyAtTheRepeat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TREASURE IF I ON MUSIC CORE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TREASURE IF I ON MUSIC CORE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ASHRAVE CHAPTER SEVEN", "综合/待分类", "General / To Classify", "低", "Low", "ASHRAVE CHAPTER SEVEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Candon", "综合/待分类", "General / To Classify", "低", "Low", "Candon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Uzbekistan", "综合/待分类", "General / To Classify", "低", "Low", "Uzbekistan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AHOF AT WEVERSE CON FEST", "综合/待分类", "General / To Classify", "低", "Low", "AHOF AT WEVERSE CON FEST", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Alyssa Valdez", "综合/待分类", "General / To Classify", "低", "Low", "Alyssa Valdez", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM IN LOVE FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM IN LOVE FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SANTA BEAUTY BLACK CARPET", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "SANTA BEAUTY BLACK CARPET", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALL EYES ON JL", "综合/待分类", "General / To Classify", "低", "Low", "ALL EYES ON JL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#السعوديه_بورتوريكو", "综合/待分类", "General / To Classify", "低", "Low", "السعوديه_بورتوريكو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تطبيق_تشليح_بارت_يفزع_لك", "综合/待分类", "General / To Classify", "低", "Low", "تطبيق_تشليح_بارت_يفزع_لك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ساعه_استجابه", "综合/待分类", "General / To Classify", "低", "Low", "ساعه_استجابه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد", "综合/待分类", "General / To Classify", "低", "Low", "محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#يوم_الجمعه", "综合/待分类", "General / To Classify", "低", "Low", "يوم_الجمعه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#موتاكم_يفرحون_بدعوه_منك", "综合/待分类", "General / To Classify", "低", "Low", "موتاكم_يفرحون_بدعوه_منك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الكويت", "综合/待分类", "General / To Classify", "低", "Low", "الكويت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاحوال الجويه", "综合/待分类", "General / To Classify", "低", "Low", "الاحوال الجويه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("علي النبي", "综合/待分类", "General / To Classify", "低", "Low", "علي النبي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بيريز", "综合/待分类", "General / To Classify", "低", "Low", "بيريز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تاريخ اليوم", "综合/待分类", "General / To Classify", "低", "Low", "تاريخ اليوم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("امريكا", "综合/待分类", "General / To Classify", "低", "Low", "امريكا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سلطان مندش", "综合/待分类", "General / To Classify", "低", "Low", "سلطان مندش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("نور مابين الجمعتين", "综合/待分类", "General / To Classify", "低", "Low", "نور مابين الجمعتين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم السبت", "综合/待分类", "General / To Classify", "低", "Low", "اليوم السبت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اللعب المالي النظيف", "综合/待分类", "General / To Classify", "低", "Low", "اللعب المالي النظيف", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الوليد بن طلال", "综合/待分类", "General / To Classify", "低", "Low", "الوليد بن طلال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البير العميق", "综合/待分类", "General / To Classify", "低", "Low", "البير العميق", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("لبس الجميل", "综合/待分类", "General / To Classify", "低", "Low", "لبس الجميل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#RahmiKoçÖzürDile", "综合/待分类", "General / To Classify", "低", "Low", "RahmiKoçÖzürDile", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#cumartesi", "综合/待分类", "General / To Classify", "低", "Low", "cumartesi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Binali", "综合/待分类", "General / To Classify", "低", "Low", "Binali", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DiyetisyenlerGünü", "综合/待分类", "General / To Classify", "低", "Low", "DiyetisyenlerGünü", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Atlet", "综合/待分类", "General / To Classify", "低", "Low", "Atlet", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hasan Can Kaya", "综合/待分类", "General / To Classify", "低", "Low", "Hasan Can Kaya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TümEmeklilereSeyyanen40Bin", "综合/待分类", "General / To Classify", "低", "Low", "TümEmeklilereSeyyanen40Bin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ömer Çelik", "综合/待分类", "General / To Classify", "低", "Low", "Ömer Çelik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Adalet Bakanı Akın Gürlek", "综合/待分类", "General / To Classify", "低", "Low", "Adalet Bakanı Akın Gürlek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NeDeğişti", "综合/待分类", "General / To Classify", "低", "Low", "NeDeğişti", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Duygu Karabaş", "综合/待分类", "General / To Classify", "低", "Low", "Duygu Karabaş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Haldun Simavi", "综合/待分类", "General / To Classify", "低", "Low", "Haldun Simavi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İstanbul Valiliği", "综合/待分类", "General / To Classify", "低", "Low", "İstanbul Valiliği", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fıkra", "综合/待分类", "General / To Classify", "低", "Low", "Fıkra", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("New York", "综合/待分类", "General / To Classify", "低", "Low", "New York", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Soruşturma", "综合/待分类", "General / To Classify", "低", "Low", "Soruşturma", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Çıksın", "综合/待分类", "General / To Classify", "低", "Low", "Çıksın", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fadime", "综合/待分类", "General / To Classify", "低", "Low", "Fadime", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sokağa", "综合/待分类", "General / To Classify", "低", "Low", "Sokağa", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hodri Meydan", "综合/待分类", "General / To Classify", "低", "Low", "Hodri Meydan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("LINGORM IN LOVE FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM IN LOVE FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORM VEGGIE POPUP ICONSIAM", "综合/待分类", "General / To Classify", "低", "Low", "ORM VEGGIE POPUP ICONSIAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#OrmxGentlemonsterICONSIAM", "综合/待分类", "General / To Classify", "低", "Low", "OrmxGentlemonsterICONSIAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APASRA NEVER FADE", "综合/待分类", "General / To Classify", "低", "Low", "APASRA NEVER FADE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#YokoDebutShortFilm", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "YokoDebutShortFilm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ConENGFALegacyMahachon3", "综合/待分类", "General / To Classify", "低", "Low", "ConENGFALegacyMahachon3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SANTA BEAUTY BLACK CARPET", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "SANTA BEAUTY BLACK CARPET", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#FriendlyMeBeautyxSanta", "综合/待分类", "General / To Classify", "低", "Low", "FriendlyMeBeautyxSanta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Thứ 7", "综合/待分类", "General / To Classify", "低", "Low", "Thứ 7", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EMBPFK FFF PRESS TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "EMBPFK FFF PRESS TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#FFFPartyConcert2026", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "FFFPartyConcert2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Neen", "综合/待分类", "General / To Classify", "低", "Low", "Neen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Knicks", "综合/待分类", "General / To Classify", "低", "Low", "Knicks", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Zcash", "综合/待分类", "General / To Classify", "低", "Low", "Zcash", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OOMBAM FULFILL 7TH", "综合/待分类", "General / To Classify", "低", "Low", "OOMBAM FULFILL 7TH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Runch", "综合/待分类", "General / To Classify", "低", "Low", "Runch", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PerX", "综合/待分类", "General / To Classify", "低", "Low", "PerX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Howdy", "综合/待分类", "General / To Classify", "低", "Low", "Howdy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kháng", "综合/待分类", "General / To Classify", "低", "Low", "Kháng", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hiya", "综合/待分类", "General / To Classify", "低", "Low", "Hiya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
    date: "2026-06-05",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("Bermanfaat Tepat Sasaran", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Bermanfaat Tepat Sasaran", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOURTH X PROGRESS STORY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FOURTH X PROGRESS STORY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOURTH X KITKAT F1", "体育/赛事", "Sports / Event", "低", "Low", "FOURTH X KITKAT F1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#TheMallBangkapixNuNew", "综合/待分类", "General / To Classify", "低", "Low", "TheMallBangkapixNuNew", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BKK SHOPPING FEST x CWR", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BKK SHOPPING FEST x CWR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#2ทุ่มนี้ช้อปLazada66", "综合/待分类", "General / To Classify", "低", "Low", "2ทุ่มนี้ช้อปLazada66", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LZD 66 SKY ALMOND PROGRESS", "综合/待分类", "General / To Classify", "低", "Low", "LZD 66 SKY ALMOND PROGRESS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#VETEMENTS", "综合/待分类", "General / To Classify", "低", "Low", "VETEMENTS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TILFF2026", "综合/待分类", "General / To Classify", "低", "Low", "TILFF2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SISODLOVEANDDREAMMISSION", "综合/待分类", "General / To Classify", "低", "Low", "SISODLOVEANDDREAMMISSION", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOURTH DRPONG LIVE", "综合/待分类", "General / To Classify", "低", "Low", "FOURTH DRPONG LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOURTH X PROGRESS STORY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FOURTH X PROGRESS STORY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOURTH X KITKAT F1", "体育/赛事", "Sports / Event", "低", "Low", "FOURTH X KITKAT F1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EMBPFK FFF PRESS TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "EMBPFK FFF PRESS TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NEX SLIP TO SLEEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "NEX SLIP TO SLEEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BN Check in Tokyo", "综合/待分类", "General / To Classify", "低", "Low", "BN Check in Tokyo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NANON WITH LENOVO", "综合/待分类", "General / To Classify", "低", "Low", "NANON WITH LENOVO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ready or Not", "综合/待分类", "General / To Classify", "低", "Low", "Ready or Not", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYEATOM BOL REACT EP7", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "FAYEATOM BOL REACT EP7", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OOMBAM FULFILL PROMOTE", "综合/待分类", "General / To Classify", "低", "Low", "OOMBAM FULFILL PROMOTE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DAOU CHACHA TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "DAOU CHACHA TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hyrox", "综合/待分类", "General / To Classify", "低", "Low", "Hyrox", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GLOW BACK WITH EST", "综合/待分类", "General / To Classify", "低", "Low", "GLOW BACK WITH EST", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("MARK LEE", "综合/待分类", "General / To Classify", "低", "Low", "MARK LEE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WINRI SA MANILA TIMES", "综合/待分类", "General / To Classify", "低", "Low", "WINRI SA MANILA TIMES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOREVER TONIGHT MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "FOREVER TONIGHT MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#HMJConcertOnJuly19", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "HMJConcertOnJuly19", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TheMallBangkapixNuNew", "综合/待分类", "General / To Classify", "低", "Low", "TheMallBangkapixNuNew", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("heaths time ticketselling", "综合/待分类", "General / To Classify", "低", "Low", "heaths time ticketselling", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EvaLeQueen", "综合/待分类", "General / To Classify", "低", "Low", "EvaLeQueen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARTON KAMAO POWER", "综合/待分类", "General / To Classify", "低", "Low", "CARTON KAMAO POWER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#PipolMgzn", "综合/待分类", "General / To Classify", "低", "Low", "PipolMgzn", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRABFOOD X FREENBECKY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GRABFOOD X FREENBECKY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BKK SHOPPING FEST x CWR", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BKK SHOPPING FEST x CWR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINIVERSE AND CHORUS EP 6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BINIVERSE AND CHORUS EP 6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("jadeward losing you", "综合/待分类", "General / To Classify", "低", "Low", "jadeward losing you", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("hyuna", "综合/待分类", "General / To Classify", "低", "Low", "hyuna", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("teka lang mv out now", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "teka lang mv out now", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#FindingComfortInJL", "综合/待分类", "General / To Classify", "低", "Low", "FindingComfortInJL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("lancebrey dark finale", "综合/待分类", "General / To Classify", "低", "Low", "lancebrey dark finale", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("gioluna keep you forever", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "gioluna keep you forever", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("martsari unrequited kiss", "综合/待分类", "General / To Classify", "低", "Low", "martsari unrequited kiss", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("evan", "综合/待分类", "General / To Classify", "低", "Low", "evan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#هشتاقك_بسعر_مميز_0ち481б8201", "综合/待分类", "General / To Classify", "低", "Low", "هشتاقك_بسعر_مميز_0ち481б8201", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#صلاتك_علي_النبي_تفرج_همك", "综合/待分类", "General / To Classify", "低", "Low", "صلاتك_علي_النبي_تفرج_همك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#موتاكم_يفرحون_بدعوه_منك", "综合/待分类", "General / To Classify", "低", "Low", "موتاكم_يفرحون_بدعوه_منك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تطبيق_تشليح_بارت_يفزع_لك", "综合/待分类", "General / To Classify", "低", "Low", "تطبيق_تشليح_بارت_يفزع_لك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#حمدان_للاعلانات_О54О547О49", "综合/待分类", "General / To Classify", "低", "Low", "حمدان_للاعلانات_О54О547О49", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد", "综合/待分类", "General / To Classify", "低", "Low", "محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("علي النبي", "综合/待分类", "General / To Classify", "低", "Low", "علي النبي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بيريز", "综合/待分类", "General / To Classify", "低", "Low", "بيريز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الصداقه الحقيقيه", "综合/待分类", "General / To Classify", "低", "Low", "الصداقه الحقيقيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("قوه الروح", "综合/待分类", "General / To Classify", "低", "Low", "قوه الروح", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الكويت", "综合/待分类", "General / To Classify", "低", "Low", "الكويت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ابو خالد", "综合/待分类", "General / To Classify", "低", "Low", "ابو خالد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الوليد بن طلال", "综合/待分类", "General / To Classify", "低", "Low", "الوليد بن طلال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الهدوء الداخلي", "综合/待分类", "General / To Classify", "低", "Low", "الهدوء الداخلي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سلم علي", "综合/待分类", "General / To Classify", "低", "Low", "سلم علي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كومان", "综合/待分类", "General / To Classify", "低", "Low", "كومان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("رياض الجنه", "综合/待分类", "General / To Classify", "低", "Low", "رياض الجنه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اليوم الفضيل", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الفضيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("جواو نيفيز", "综合/待分类", "General / To Classify", "低", "Low", "جواو نيفيز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#TheLiesOfIsrael", "综合/待分类", "General / To Classify", "低", "Low", "TheLiesOfIsrael", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DünyaBizeEmanet", "综合/待分类", "General / To Classify", "低", "Low", "DünyaBizeEmanet", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KademeyiArtıkÇıkarın", "综合/待分类", "General / To Classify", "低", "Low", "KademeyiArtıkÇıkarın", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DünyaÇevreGünü", "综合/待分类", "General / To Classify", "低", "Low", "DünyaÇevreGünü", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hayırlı Cumalar", "综合/待分类", "General / To Classify", "低", "Low", "Hayırlı Cumalar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#enflasyon", "综合/待分类", "General / To Classify", "低", "Low", "enflasyon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hakan Bilecen", "综合/待分类", "General / To Classify", "低", "Low", "Hakan Bilecen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Erman Toroğlu", "综合/待分类", "General / To Classify", "低", "Low", "Erman Toroğlu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vincenzo Italiano", "综合/待分类", "General / To Classify", "低", "Low", "Vincenzo Italiano", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SnÇiftçi ŞoförünSesiniDuy", "综合/待分类", "General / To Classify", "低", "Low", "SnÇiftçi ŞoförünSesiniDuy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İstiklal Partisi", "综合/待分类", "General / To Classify", "低", "Low", "İstiklal Partisi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ali Haydar Fırat", "综合/待分类", "General / To Classify", "低", "Low", "Ali Haydar Fırat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İsmail Arı", "综合/待分类", "General / To Classify", "低", "Low", "İsmail Arı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mehir", "综合/待分类", "General / To Classify", "低", "Low", "Mehir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rümeysa Eker", "综合/待分类", "General / To Classify", "低", "Low", "Rümeysa Eker", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tüketici Fiyat Endeksi", "综合/待分类", "General / To Classify", "低", "Low", "Tüketici Fiyat Endeksi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Atıf", "综合/待分类", "General / To Classify", "低", "Low", "Atıf", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İbrahim Tatlıses", "综合/待分类", "General / To Classify", "低", "Low", "İbrahim Tatlıses", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Özgür Özel Trabzon&#39;da", "综合/待分类", "General / To Classify", "低", "Low", "Özgür Özel Trabzon&#39;da", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İETT", "综合/待分类", "General / To Classify", "低", "Low", "İETT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("ORM VEGGIE POPUP ICONSIAM", "综合/待分类", "General / To Classify", "低", "Low", "ORM VEGGIE POPUP ICONSIAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JANJINGJING IN TILFF2026", "综合/待分类", "General / To Classify", "低", "Low", "JANJINGJING IN TILFF2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nhóm Leak Onlyfans", "综合/待分类", "General / To Classify", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "Nhóm Leak Onlyfans", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$ZEC", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$ZEC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRABFOOD X FREENBECKY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GRABFOOD X FREENBECKY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Thứ 6", "综合/待分类", "General / To Classify", "低", "Low", "Thứ 6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JANJINGJING DEBUT STAGE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JANJINGJING DEBUT STAGE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TpopStagexJanJingjing", "综合/待分类", "General / To Classify", "低", "Low", "TpopStagexJanJingjing", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TpopStagepresentedbyPEPSI", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TpopStagepresentedbyPEPSI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PerX", "综合/待分类", "General / To Classify", "低", "Low", "PerX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Casual", "综合/待分类", "General / To Classify", "低", "Low", "Casual", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Zcash", "综合/待分类", "General / To Classify", "低", "Low", "Zcash", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EMBPFK FFF PRESS TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "EMBPFK FFF PRESS TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Howdy", "综合/待分类", "General / To Classify", "低", "Low", "Howdy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hiya", "综合/待分类", "General / To Classify", "低", "Low", "Hiya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Proof of Quantum Work", "综合/待分类", "General / To Classify", "低", "Low", "Proof of Quantum Work", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arthur Hayes", "综合/待分类", "General / To Classify", "低", "Low", "Arthur Hayes", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Wassup", "综合/待分类", "General / To Classify", "低", "Low", "Wassup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("queen orm kornnaphat", "综合/待分类", "General / To Classify", "低", "Low", "queen orm kornnaphat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Unexpected", "综合/待分类", "General / To Classify", "低", "Low", "Unexpected", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("CSR WITH JOSSGAWIN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CSR WITH JOSSGAWIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Gibran Percepat Layanan Publik", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Gibran Percepat Layanan Publik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRABFOOD X FREENBECKY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GRABFOOD X FREENBECKY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#TTPxGentleMonsterICONSIAM", "综合/待分类", "General / To Classify", "低", "Low", "TTPxGentleMonsterICONSIAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRABFOOD X FREENBECKY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GRABFOOD X FREENBECKY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP 1ST PRESENTER KORIKO", "综合/待分类", "General / To Classify", "低", "Low", "KNP 1ST PRESENTER KORIKO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ช้าช้าต้าห์อู๋_MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ช้าช้าต้าห์อู๋_MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DAOU CHACHA", "综合/待分类", "General / To Classify", "低", "Low", "DAOU CHACHA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#มุ่ยเฟยTEASER", "综合/待分类", "General / To Classify", "低", "Low", "มุ่ยเฟยTEASER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ไทยช่วยไทยพลัสเลือกGrab", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ไทยช่วยไทยพลัสเลือกGrab", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ที่รักสารวัตรเธียร์", "综合/待分类", "General / To Classify", "低", "Low", "ที่รักสารวัตรเธียร์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNGCHAN ETERVIEW", "综合/待分类", "General / To Classify", "低", "Low", "SUNGCHAN ETERVIEW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CSR WITH JOSSGAWIN", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "CSR WITH JOSSGAWIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Orm Kornnaphat", "综合/待分类", "General / To Classify", "低", "Low", "Orm Kornnaphat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CONGRATS PATJI X 200K", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CONGRATS PATJI X 200K", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE04", "综合/待分类", "General / To Classify", "低", "Low", "SHINING PRIDE CHARLOTTE04", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BUILD LEVEL 32 UNLOCKED", "综合/待分类", "General / To Classify", "低", "Low", "BUILD LEVEL 32 UNLOCKED", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY04", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE LEGACY04", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NO ONE ELSE FEAT COPPER BUS", "综合/待分类", "General / To Classify", "低", "Low", "NO ONE ELSE FEAT COPPER BUS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TheDriverxTeeteePor", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TheDriverxTeeteePor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Muifei", "综合/待分类", "General / To Classify", "低", "Low", "Muifei", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#haircolor", "综合/待分类", "General / To Classify", "低", "Low", "haircolor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#รีวิวสีผมการ์นิเย่", "综合/待分类", "General / To Classify", "低", "Low", "รีวิวสีผมการ์นิเย่", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("FOREVER TONIGHT MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "FOREVER TONIGHT MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRABFOOD X FREENBECKY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GRABFOOD X FREENBECKY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BGYO_OnDemandEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BGYO_OnDemandEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("350K OF TEKALANG MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "350K OF TEKALANG MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("mark lee", "综合/待分类", "General / To Classify", "低", "Low", "mark lee", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TTPxGentleMonsterICONSIAM", "综合/待分类", "General / To Classify", "低", "Low", "TTPxGentleMonsterICONSIAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BINIverseAndChorus", "综合/待分类", "General / To Classify", "低", "Low", "BINIverseAndChorus", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORM VEGGIE POPUP ICONSIAM", "综合/待分类", "General / To Classify", "低", "Low", "ORM VEGGIE POPUP ICONSIAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#4FlowersOutNow", "综合/待分类", "General / To Classify", "低", "Low", "4FlowersOutNow", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#thestorycontinues", "综合/待分类", "General / To Classify", "低", "Low", "thestorycontinues", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Senate", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Senate", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KAIREN CONQUERS NEGROS", "综合/待分类", "General / To Classify", "低", "Low", "KAIREN CONQUERS NEGROS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAPPY BIRTHDAY SHUVEE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "HAPPY BIRTHDAY SHUVEE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Loren", "综合/待分类", "General / To Classify", "低", "Low", "Loren", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Marcoleta", "综合/待分类", "General / To Classify", "低", "Low", "Marcoleta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Chiz", "综合/待分类", "General / To Classify", "低", "Low", "Chiz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("2026 AHOF 1ST TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "2026 AHOF 1ST TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PSDFAM HOMEBABYFAIR AT TOPS", "旅行/本地活动", "Travel / Local Event", "低", "Low", "PSDFAM HOMEBABYFAIR AT TOPS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("kai xp tour", "旅行/本地活动", "Travel / Local Event", "低", "Low", "kai xp tour", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("woozi", "综合/待分类", "General / To Classify", "低", "Low", "woozi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#سدااد_قروض_O5З6бб5559", "综合/待分类", "General / To Classify", "低", "Low", "سدااد_قروض_O5З6бб5559", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الكويت", "综合/待分类", "General / To Classify", "低", "Low", "الكويت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#اعلانكX_ترند__O56З2б8б79", "综合/待分类", "General / To Classify", "低", "Low", "اعلانكX_ترند__O56З2б8б79", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("يابو خالد", "综合/待分类", "General / To Classify", "低", "Low", "يابو خالد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#تنبيه_عن_القرناس_التجاريه", "综合/待分类", "General / To Classify", "低", "Low", "تنبيه_عن_القرناس_التجاريه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الخميس_الونيس", "综合/待分类", "General / To Classify", "低", "Low", "الخميس_الونيس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#نسمو", "综合/待分类", "General / To Classify", "低", "Low", "نسمو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايران", "综合/待分类", "General / To Classify", "低", "Low", "ايران", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الخليج", "综合/待分类", "General / To Classify", "低", "Low", "الخليج", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الوليد بن طلال", "综合/待分类", "General / To Classify", "低", "Low", "الوليد بن طلال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الحصان الاسود", "综合/待分类", "General / To Classify", "低", "Low", "الحصان الاسود", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سعود عبدالحميد", "综合/待分类", "General / To Classify", "低", "Low", "سعود عبدالحميد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد القاسم", "综合/待分类", "General / To Classify", "低", "Low", "محمد القاسم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("نادي لانس الفرنسي", "综合/待分类", "General / To Classify", "低", "Low", "نادي لانس الفرنسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("منتخب عربي", "综合/待分类", "General / To Classify", "低", "Low", "منتخب عربي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("السجن الموبد", "综合/待分类", "General / To Classify", "低", "Low", "السجن الموبد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("والبحرين", "综合/待分类", "General / To Classify", "低", "Low", "والبحرين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("مالك النادي", "综合/待分类", "General / To Classify", "低", "Low", "مالك النادي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فرنسا", "综合/待分类", "General / To Classify", "低", "Low", "فرنسا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("Burhanettin Duran", "综合/待分类", "General / To Classify", "低", "Low", "Burhanettin Duran", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sadettin Saran", "综合/待分类", "General / To Classify", "低", "Low", "Sadettin Saran", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Boğa Temalı", "综合/待分类", "General / To Classify", "低", "Low", "Boğa Temalı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Muhittin Böcek", "综合/待分类", "General / To Classify", "低", "Low", "Muhittin Böcek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Anayasa Mahkemesi", "综合/待分类", "General / To Classify", "低", "Low", "Anayasa Mahkemesi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TOKİ", "综合/待分类", "General / To Classify", "低", "Low", "TOKİ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ferdi Zeyrek", "综合/待分类", "General / To Classify", "低", "Low", "Ferdi Zeyrek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#perşembe", "综合/待分类", "General / To Classify", "低", "Low", "perşembe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ölmüş", "综合/待分类", "General / To Classify", "低", "Low", "Ölmüş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nafaka", "综合/待分类", "General / To Classify", "低", "Low", "Nafaka", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Doruk Madencilik", "综合/待分类", "General / To Classify", "低", "Low", "Doruk Madencilik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TüikYazıyorEmekliBatıyor", "综合/待分类", "General / To Classify", "低", "Low", "TüikYazıyorEmekliBatıyor", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Marjane Satrapi", "综合/待分类", "General / To Classify", "低", "Low", "Marjane Satrapi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mahmut Orhan", "综合/待分类", "General / To Classify", "低", "Low", "Mahmut Orhan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Murat Kurum", "综合/待分类", "General / To Classify", "低", "Low", "Murat Kurum", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SevdiğimSensin", "综合/待分类", "General / To Classify", "低", "Low", "SevdiğimSensin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MutsuzuzÇünkü", "综合/待分类", "General / To Classify", "低", "Low", "MutsuzuzÇünkü", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bakan Kurum", "综合/待分类", "General / To Classify", "低", "Low", "Bakan Kurum", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TOBB Nefes Kredisi", "综合/待分类", "General / To Classify", "低", "Low", "TOBB Nefes Kredisi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MadencilerAyakta", "综合/待分类", "General / To Classify", "低", "Low", "MadencilerAyakta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("ORM VEGGIE POPUP ICONSIAM", "综合/待分类", "General / To Classify", "低", "Low", "ORM VEGGIE POPUP ICONSIAM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Username", "综合/待分类", "General / To Classify", "低", "Low", "Username", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRABFOOD X FREENBECKY", "品牌活动/消费", "Brand / Consumer", "低", "Low", "GRABFOOD X FREENBECKY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#glownightniveaxlinglingkwong", "综合/待分类", "General / To Classify", "低", "Low", "glownightniveaxlinglingkwong", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nhóm Leak Onlyfans", "综合/待分类", "General / To Classify", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "Nhóm Leak Onlyfans", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nhóm Onlyfans Leak", "综合/待分类", "General / To Classify", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "Nhóm Onlyfans Leak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DownyXPerthSanta", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "DownyXPerthSanta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PSDFAM HOMEBABYFAIR AT TOPS", "旅行/本地活动", "Travel / Local Event", "低", "Low", "PSDFAM HOMEBABYFAIR AT TOPS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Early Waver", "综合/待分类", "General / To Classify", "低", "Low", "Early Waver", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ช้าช้าต้าห์อู๋_MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ช้าช้าต้าห์อู๋_MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Howdy", "综合/待分类", "General / To Classify", "低", "Low", "Howdy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesEP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Wassup", "综合/待分类", "General / To Classify", "低", "Low", "Wassup", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DAOU CHACHA", "综合/待分类", "General / To Classify", "低", "Low", "DAOU CHACHA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Concrete Vaults", "综合/待分类", "General / To Classify", "低", "Low", "Concrete Vaults", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Wishing", "综合/待分类", "General / To Classify", "低", "Low", "Wishing", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ไทยช่วยไทยพลัสเลือกGrab", "品牌活动/消费", "Brand / Consumer", "低", "Low", "ไทยช่วยไทยพลัสเลือกGrab", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP 1ST PRESENTER KORIKO", "综合/待分类", "General / To Classify", "低", "Low", "KNP 1ST PRESENTER KORIKO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hiya", "综合/待分类", "General / To Classify", "低", "Low", "Hiya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Discord", "综合/待分类", "General / To Classify", "低", "Low", "Discord", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
    date: "2026-06-03",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#WUTheSeriesEP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WeAreOneMV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "WeAreOneMV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kepala BGN", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Kepala BGN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#YouManiacSeriesQ15", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "YouManiacSeriesQ15", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kepala Badan Gizi Nasional", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Kepala Badan Gizi Nasional", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JG CONCERT PRESS TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "JG CONCERT PRESS TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#WUTheSeriesEP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#กลิ่นฝนByTleFirstOne", "综合/待分类", "General / To Classify", "低", "Low", "กลิ่นฝนByTleFirstOne", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WHEN IT RAINS TFO", "综合/待分类", "General / To Classify", "低", "Low", "WHEN IT RAINS TFO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WeAreOneMV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "WeAreOneMV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#YouManiacSeriesQ15", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "YouManiacSeriesQ15", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#รักหักหลังตอนจบ", "综合/待分类", "General / To Classify", "低", "Low", "รักหักหลังตอนจบ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHERMCHEY ALL STAR", "综合/待分类", "General / To Classify", "低", "Low", "CHERMCHEY ALL STAR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TUI LEGO x MANDALORIAN", "品牌活动/消费", "Brand / Consumer", "低", "Low", "TUI LEGO x MANDALORIAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNSET IN WINTER EP4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUNSET IN WINTER EP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALWAYS 13ESIDE JENO", "综合/待分类", "General / To Classify", "低", "Low", "ALWAYS 13ESIDE JENO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LING NIVEA BRAND FRIEND", "综合/待分类", "General / To Classify", "低", "Low", "LING NIVEA BRAND FRIEND", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JG CONCERT PRESS TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "JG CONCERT PRESS TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GLOW UP WITH PIEGOLF", "综合/待分类", "General / To Classify", "低", "Low", "GLOW UP WITH PIEGOLF", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM MV TOUCH MY HEART", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LINGORM MV TOUCH MY HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DANCE PERFORMANCE VIDEO", "综合/待分类", "General / To Classify", "低", "Low", "DANCE PERFORMANCE VIDEO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("The WU", "综合/待分类", "General / To Classify", "低", "Low", "The WU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DAOU CHACHA TEASER", "综合/待分类", "General / To Classify", "低", "Low", "DAOU CHACHA TEASER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FIRST TIME HYROX X JBB", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FIRST TIME HYROX X JBB", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUPALAI MY STAYCATION BOY EP25", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUPALAI MY STAYCATION BOY EP25", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HONGSEN KLOOKFOON Q4", "综合/待分类", "General / To Classify", "低", "Low", "HONGSEN KLOOKFOON Q4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#CayetanoResign", "综合/待分类", "General / To Classify", "低", "Low", "CayetanoResign", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TREASURE_NEW_WAV", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TREASURE_NEW_WAV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NEW WAV IF I RELEASE", "综合/待分类", "General / To Classify", "低", "Low", "NEW WAV IF I RELEASE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NEWWAV_ALBUM_RELEASE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NEWWAV_ALBUM_RELEASE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#IF_I_PERFORMANCE_VIDEO", "综合/待分类", "General / To Classify", "低", "Low", "IF_I_PERFORMANCE_VIDEO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy Pride Month", "综合/待分类", "General / To Classify", "低", "Low", "Happy Pride Month", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JonaxxMOSKab35", "综合/待分类", "General / To Classify", "低", "Low", "JonaxxMOSKab35", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CPAs", "综合/待分类", "General / To Classify", "低", "Low", "CPAs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOREVER TONIGHT MVTEASER", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "FOREVER TONIGHT MVTEASER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARTSARI SAFE SPACE", "综合/待分类", "General / To Classify", "低", "Low", "MARTSARI SAFE SPACE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM MV TOUCH MY HEART", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LINGORM MV TOUCH MY HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JG CONCERT PRESS TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "JG CONCERT PRESS TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LING NIVEA BRAND FRIEND", "综合/待分类", "General / To Classify", "低", "Low", "LING NIVEA BRAND FRIEND", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CPA NA AKO", "综合/待分类", "General / To Classify", "低", "Low", "CPA NA AKO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sharmaine", "综合/待分类", "General / To Classify", "低", "Low", "Sharmaine", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("rhenseph on thedailydish", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "rhenseph on thedailydish", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA ENDLESS LONGING", "综合/待分类", "General / To Classify", "低", "Low", "GIOLUNA ENDLESS LONGING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jinggoy", "综合/待分类", "General / To Classify", "低", "Low", "Jinggoy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hera", "综合/待分类", "General / To Classify", "低", "Low", "Hera", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KAOHSIUNG", "综合/待分类", "General / To Classify", "低", "Low", "KAOHSIUNG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#بس__حبيت_اقول", "综合/待分类", "General / To Classify", "低", "Low", "بس__حبيت_اقول", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#صيانه_وقطع_سيارتك_تشليح_بارت", "综合/待分类", "General / To Classify", "低", "Low", "صيانه_وقطع_سيارتك_تشليح_بارت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#رجل_الاعمال_ياسر_الجعوان", "综合/待分类", "General / To Classify", "低", "Low", "رجل_الاعمال_ياسر_الجعوان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عودا_حميدا", "综合/待分类", "General / To Classify", "低", "Low", "عودا_حميدا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#كلام_من_القلب", "综合/待分类", "General / To Classify", "低", "Low", "كلام_من_القلب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("فرنسا", "综合/待分类", "General / To Classify", "低", "Low", "فرنسا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("اسبانيا", "综合/待分类", "General / To Classify", "低", "Low", "اسبانيا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البرتغال", "综合/待分类", "General / To Classify", "低", "Low", "البرتغال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("زكريا", "综合/待分类", "General / To Classify", "低", "Low", "زكريا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("انزاغي", "综合/待分类", "General / To Classify", "低", "Low", "انزاغي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الكويت", "综合/待分类", "General / To Classify", "低", "Low", "الكويت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("صالح ابو الشامات", "综合/待分类", "General / To Classify", "低", "Low", "صالح ابو الشامات", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("البرازيل", "综合/待分类", "General / To Classify", "低", "Low", "البرازيل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ارسنال", "综合/待分类", "General / To Classify", "低", "Low", "ارسنال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ميسي", "综合/待分类", "General / To Classify", "低", "Low", "ميسي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("المانيا", "综合/待分类", "General / To Classify", "低", "Low", "المانيا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الحصان الاسود", "综合/待分类", "General / To Classify", "低", "Low", "الحصان الاسود", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("باريس", "综合/待分类", "General / To Classify", "低", "Low", "باريس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("تويتر", "综合/待分类", "General / To Classify", "低", "Low", "تويتر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#SEVEN_UNDER_ONE_MOON", "综合/待分类", "General / To Classify", "低", "Low", "SEVEN_UNDER_ONE_MOON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#sevEN_Whispers_To_Moonlight", "综合/待分类", "General / To Classify", "低", "Low", "sevEN_Whispers_To_Moonlight", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#huzurhakkı", "综合/待分类", "General / To Classify", "低", "Low", "huzurhakkı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#nereyeböyle", "综合/待分类", "General / To Classify", "低", "Low", "nereyeböyle", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Dikiş", "综合/待分类", "General / To Classify", "低", "Low", "Dikiş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#gözgöregöre", "综合/待分类", "General / To Classify", "低", "Low", "gözgöregöre", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ümit Karan", "综合/待分类", "General / To Classify", "低", "Low", "Ümit Karan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Necdet Saraç", "综合/待分类", "General / To Classify", "低", "Low", "Necdet Saraç", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Müslim Sarı", "综合/待分类", "General / To Classify", "低", "Low", "Müslim Sarı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Selçuk Yılmaz", "综合/待分类", "General / To Classify", "低", "Low", "Selçuk Yılmaz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MüstakilDeğil AdilGenelAf", "品牌活动/消费", "Brand / Consumer", "低", "Low", "MüstakilDeğil AdilGenelAf", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHP Grup Toplantısı", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "CHP Grup Toplantısı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Adalet Bakanı Akın Gürlek", "综合/待分类", "General / To Classify", "低", "Low", "Adalet Bakanı Akın Gürlek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Selahattin Demirtaş", "综合/待分类", "General / To Classify", "低", "Low", "Selahattin Demirtaş", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ferdi Zeyrek", "综合/待分类", "General / To Classify", "低", "Low", "Ferdi Zeyrek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ali Şen", "综合/待分类", "General / To Classify", "低", "Low", "Ali Şen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aral", "综合/待分类", "General / To Classify", "低", "Low", "Aral", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Oğuz", "综合/待分类", "General / To Classify", "低", "Low", "Oğuz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hagi", "综合/待分类", "General / To Classify", "低", "Low", "Hagi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Marco Rubio", "综合/待分类", "General / To Classify", "低", "Low", "Marco Rubio", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#สัมผัสรักOSTวาดฝันวันวิวาห์", "综合/待分类", "General / To Classify", "低", "Low", "สัมผัสรักOSTวาดฝันวันวิวาห์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM MV TOUCH MY HEART", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LINGORM MV TOUCH MY HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM MV TOUCH MY HEART", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LINGORM MV TOUCH MY HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Concrete Vaults", "综合/待分类", "General / To Classify", "低", "Low", "Concrete Vaults", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesEP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#UnitFlowFinance", "综合/待分类", "General / To Classify", "低", "Low", "UnitFlowFinance", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NodeAndProud", "综合/待分类", "General / To Classify", "低", "Low", "NodeAndProud", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("QuipEdu", "综合/待分类", "General / To Classify", "低", "Low", "QuipEdu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Perceptron Network", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Perceptron Network", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Taco Tuesday", "综合/待分类", "General / To Classify", "低", "Low", "Taco Tuesday", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("32 BTC", "综合/待分类", "General / To Classify", "低", "Low", "32 BTC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("nhóm kín", "综合/待分类", "General / To Classify", "低", "Low", "nhóm kín", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Phase 2", "综合/待分类", "General / To Classify", "低", "Low", "Phase 2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesFinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesFinalEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Gram", "综合/待分类", "General / To Classify", "低", "Low", "Gram", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$wall", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$wall", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("One-click DeFi", "综合/待分类", "General / To Classify", "低", "Low", "One-click DeFi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("thứ 3", "综合/待分类", "General / To Classify", "低", "Low", "thứ 3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ForeGate", "综合/待分类", "General / To Classify", "低", "Low", "ForeGate", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$CLAR", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$CLAR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#TREASURE_NEW_WAV", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TREASURE_NEW_WAV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NEWWAV_ALBUM_RELEASE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NEWWAV_ALBUM_RELEASE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN ECHOES BETWEEN US", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN ECHOES BETWEEN US", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesFinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesFinalEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#GirlRulesSeriesFinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesFinalEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DMDLINEUP2026SOON", "综合/待分类", "General / To Classify", "低", "Low", "DMDLINEUP2026SOON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD LINEUP SOON", "综合/待分类", "General / To Classify", "低", "Low", "DMD LINEUP SOON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WhenItRainsTS2", "综合/待分类", "General / To Classify", "低", "Low", "WhenItRainsTS2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO IMAGE TEASER 2", "综合/待分类", "General / To Classify", "低", "Low", "TFO IMAGE TEASER 2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#IFIดิพี่NewWavดิว๊า", "综合/待分类", "General / To Classify", "低", "Low", "IFIดิพี่NewWavดิว๊า", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TREASURE_NEW_WAV", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TREASURE_NEW_WAV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RENJUN ECHOES BETWEEN US", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "RENJUN ECHOES BETWEEN US", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB FIFTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB FIFTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WHEN IT RAINS TEASER", "综合/待分类", "General / To Classify", "低", "Low", "WHEN IT RAINS TEASER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HONGSEN KLOOKFOON Q3", "综合/待分类", "General / To Classify", "低", "Low", "HONGSEN KLOOKFOON Q3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MERCI NUNEW GENTLE FORMULA", "综合/待分类", "General / To Classify", "低", "Low", "MERCI NUNEW GENTLE FORMULA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SUNSET IN WINTER EP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SUNSET IN WINTER EP3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("perth x vella sleepmask", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "perth x vella sleepmask", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy Pride Month", "综合/待分类", "General / To Classify", "低", "Low", "Happy Pride Month", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BUILD PROMOTE NAGARAJ", "综合/待分类", "General / To Classify", "低", "Low", "BUILD PROMOTE NAGARAJ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENGFA THE LEGACY01", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE LEGACY01", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SHINING PRIDE CHARLOTTE01", "综合/待分类", "General / To Classify", "低", "Low", "SHINING PRIDE CHARLOTTE01", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE AIR HIDDEN HEART", "综合/待分类", "General / To Classify", "低", "Low", "THE AIR HIDDEN HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ZOOM ZOOM", "综合/待分类", "General / To Classify", "低", "Low", "ZOOM ZOOM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#TREASURE_NEW_WAV", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "TREASURE_NEW_WAV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NEWWAV_ALBUM_RELEASE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NEWWAV_ALBUM_RELEASE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy Pride Month", "综合/待分类", "General / To Classify", "低", "Low", "Happy Pride Month", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesFinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesFinalEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OWN THE MOMENT SB19", "综合/待分类", "General / To Classify", "低", "Low", "OWN THE MOMENT SB19", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JonaxxMOSKab34", "综合/待分类", "General / To Classify", "低", "Low", "JonaxxMOSKab34", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("makmak meets morena", "综合/待分类", "General / To Classify", "低", "Low", "makmak meets morena", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("I Knew It", "综合/待分类", "General / To Classify", "低", "Low", "I Knew It", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MissBehaveMediaCon", "综合/待分类", "General / To Classify", "低", "Low", "MissBehaveMediaCon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("I Knew You", "综合/待分类", "General / To Classify", "低", "Low", "I Knew You", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ZOOM ZOOM", "综合/待分类", "General / To Classify", "低", "Low", "ZOOM ZOOM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MISS BEHAVE PREMIERE NIGHT", "综合/待分类", "General / To Classify", "低", "Low", "MISS BEHAVE PREMIERE NIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jinggoy", "综合/待分类", "General / To Classify", "低", "Low", "Jinggoy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM LOVE BD PARTY", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM LOVE BD PARTY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DMD LINEUP SOON", "综合/待分类", "General / To Classify", "低", "Low", "DMD LINEUP SOON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOREVER TONIGHT NATE", "综合/待分类", "General / To Classify", "低", "Low", "FOREVER TONIGHT NATE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("grand suite time with azralph", "综合/待分类", "General / To Classify", "低", "Low", "grand suite time with azralph", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ALWAYS PROUD OF YOU JL", "综合/待分类", "General / To Classify", "低", "Low", "ALWAYS PROUD OF YOU JL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("gioluna san tayo next", "综合/待分类", "General / To Classify", "低", "Low", "gioluna san tayo next", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEAM MISTER IOUS", "综合/待分类", "General / To Classify", "低", "Low", "TEAM MISTER IOUS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#رجل_الاعمال_الشيخ_ياسر_الجعوان", "综合/待分类", "General / To Classify", "低", "Low", "رجل_الاعمال_الشيخ_ياسر_الجعوان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#حادث_مروري_بين_عريسين", "综合/待分类", "General / To Classify", "低", "Low", "حادث_مروري_بين_عريسين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("زكريا", "综合/待分类", "General / To Classify", "低", "Low", "زكريا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#وقتك_استغله_بالاستغفار", "综合/待分类", "General / To Classify", "低", "Low", "وقتك_استغله_بالاستغفار", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#صيفنا_ونعرفه", "综合/待分类", "General / To Classify", "低", "Low", "صيفنا_ونعرفه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("صالح ابو الشامات", "综合/待分类", "General / To Classify", "低", "Low", "صالح ابو الشامات", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ارسل__طلبك_للتشاليح_والورش", "综合/待分类", "General / To Classify", "低", "Low", "ارسل__طلبك_للتشاليح_والورش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاس العالم", "体育/赛事", "Sports / Event", "低", "Low", "كاس العالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كاراسكو", "综合/待分类", "General / To Classify", "低", "Low", "كاراسكو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الكويت", "综合/待分类", "General / To Classify", "低", "Low", "الكويت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سالم", "综合/待分类", "General / To Classify", "低", "Low", "سالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سيرجيو كونسيساو", "综合/待分类", "General / To Classify", "低", "Low", "سيرجيو كونسيساو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("باقي سندي", "综合/待分类", "General / To Classify", "低", "Low", "باقي سندي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("كادش", "综合/待分类", "General / To Classify", "低", "Low", "كادش", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ايمن يحيى", "综合/待分类", "General / To Classify", "低", "Low", "ايمن يحيى", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ابو عبدالمجيد", "综合/待分类", "General / To Classify", "低", "Low", "ابو عبدالمجيد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("صالح الشهري", "综合/待分类", "General / To Classify", "低", "Low", "صالح الشهري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("باريس", "综合/待分类", "General / To Classify", "低", "Low", "باريس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("30 نوفمبر", "综合/待分类", "General / To Classify", "低", "Low", "30 نوفمبر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العلاقه التعاقديه", "综合/待分类", "General / To Classify", "低", "Low", "العلاقه التعاقديه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("Can Uzun", "综合/待分类", "General / To Classify", "低", "Low", "Can Uzun", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BizimÇocuklar", "综合/待分类", "General / To Classify", "低", "Low", "BizimÇocuklar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DenklikYoksaGelecekYok", "综合/待分类", "General / To Classify", "低", "Low", "DenklikYoksaGelecekYok", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KHKZulmüBitsin", "综合/待分类", "General / To Classify", "低", "Low", "KHKZulmüBitsin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BizVarsakHerşeyMümkün", "综合/待分类", "General / To Classify", "低", "Low", "BizVarsakHerşeyMümkün", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Deniz Gül", "综合/待分类", "General / To Classify", "低", "Low", "Deniz Gül", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TURMKD", "综合/待分类", "General / To Classify", "低", "Low", "TURMKD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EmniyetinMaaşıYetersiz", "综合/待分类", "General / To Classify", "低", "Low", "EmniyetinMaaşıYetersiz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Orkun Kökçü", "综合/待分类", "General / To Classify", "低", "Low", "Orkun Kökçü", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aral Şimşir", "综合/待分类", "General / To Classify", "低", "Low", "Aral Şimşir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MASAK", "综合/待分类", "General / To Classify", "低", "Low", "MASAK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fenerbahçe Beko", "综合/待分类", "General / To Classify", "低", "Low", "Fenerbahçe Beko", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ülkemİçin Adalet", "综合/待分类", "General / To Classify", "低", "Low", "Ülkemİçin Adalet", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHP&#39;li 111", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "CHP&#39;li 111", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Eren Elmalı", "综合/待分类", "General / To Classify", "低", "Low", "Eren Elmalı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kuzey Makedonya", "综合/待分类", "General / To Classify", "低", "Low", "Kuzey Makedonya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Montella", "综合/待分类", "General / To Classify", "低", "Low", "Montella", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Efes", "综合/待分类", "General / To Classify", "低", "Low", "Efes", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Barış Alper Yılmaz", "综合/待分类", "General / To Classify", "低", "Low", "Barış Alper Yılmaz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("12 Temmuz&#39;da", "综合/待分类", "General / To Classify", "低", "Low", "12 Temmuz&#39;da", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#LINGORMFanPartyBD2026", "综合/待分类", "General / To Classify", "低", "Low", "LINGORMFanPartyBD2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GirlRulesSeriesFinalEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GirlRulesSeriesFinalEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$WALL", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$WALL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TRONGlobalFriends", "综合/待分类", "General / To Classify", "低", "Low", "TRONGlobalFriends", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Concrete Vaults", "综合/待分类", "General / To Classify", "低", "Low", "Concrete Vaults", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tháng", "综合/待分类", "General / To Classify", "低", "Low", "Tháng", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เสน่หาวาโยตอนที่3", "综合/待分类", "General / To Classify", "低", "Low", "เสน่หาวาโยตอนที่3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EnemiesWithBenefitsEP5", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EnemiesWithBenefitsEP5", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE AIR HIDDEN HEART", "综合/待分类", "General / To Classify", "低", "Low", "THE AIR HIDDEN HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EWB FIFTH EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "EWB FIFTH EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tuần", "综合/待分类", "General / To Classify", "低", "Low", "Tuần", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy Pride Month", "综合/待分类", "General / To Classify", "低", "Low", "Happy Pride Month", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("32 BTC", "综合/待分类", "General / To Classify", "低", "Low", "32 BTC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BUILD PROMOTE NAGARAJ", "综合/待分类", "General / To Classify", "低", "Low", "BUILD PROMOTE NAGARAJ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("26 movies for adult", "综合/待分类", "General / To Classify", "低", "Low", "26 movies for adult", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("$CLAR", "金融/加密（谨慎）", "Finance / Crypto (Watch)", "投机/币圈/广告风险", "Speculation / Crypto-Shill Risk", "$CLAR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("nhóm kín", "综合/待分类", "General / To Classify", "低", "Low", "nhóm kín", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy New Month", "综合/待分类", "General / To Classify", "低", "Low", "Happy New Month", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUNK X URANUS PHITSANULOK", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DUNK X URANUS PHITSANULOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Xeffy", "综合/待分类", "General / To Classify", "低", "Low", "Xeffy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#GMMTVMUSICONSINGAPOREday2", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREday2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TicketToHeavenEP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GAWIN MUSICON IN SG D2", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GAWIN MUSICON IN SG D2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arsenal", "综合/待分类", "General / To Classify", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH TTH PREMIERE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GEMINIFOURTH TTH PREMIERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER DIRECT OUR MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER DIRECT OUR MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mandalorian X DEWTEE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Mandalorian X DEWTEE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUNK X URANUS PHITSANULOK", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DUNK X URANUS PHITSANULOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER 1ST MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER 1ST MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUANG CONCERT SOON", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DUANG CONCERT SOON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#DuangGoRoundConcert", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DuangGoRoundConcert", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เจอด้วงที่อิมแพคนะเธอ", "综合/待分类", "General / To Classify", "低", "Low", "เจอด้วงที่อิมแพคนะเธอ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUANG CONCERT SOON", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DUANG CONCERT SOON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LINGORMFanPartyBD2026", "综合/待分类", "General / To Classify", "低", "Low", "LINGORMFanPartyBD2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVMUSICONSINGAPOREday2", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREday2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#SHEEPxPOLCASAN", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "SHEEPxPOLCASAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FORCE X URANUS CNX", "品牌活动/消费", "Brand / Consumer", "低", "Low", "FORCE X URANUS CNX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GAWIN MUSICON IN SG D2", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GAWIN MUSICON IN SG D2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER DIRECT OUR MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER DIRECT OUR MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TOPS X LAURIER WITH LENAMIU", "品牌活动/消费", "Brand / Consumer", "低", "Low", "TOPS X LAURIER WITH LENAMIU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MR FANBOY Q16", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MR FANBOY Q16", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LYKN MUSICON SG D2", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "LYKN MUSICON SG D2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUNK X URANUS PHITSANULOK", "品牌活动/消费", "Brand / Consumer", "低", "Low", "DUNK X URANUS PHITSANULOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TAYNEWSAN WITH SHEEP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TAYNEWSAN WITH SHEEP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TONLIEW AT CENTRAL HATYAI", "综合/待分类", "General / To Classify", "低", "Low", "TONLIEW AT CENTRAL HATYAI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YINWAR 2ND FANSIGN SIRACHA", "综合/待分类", "General / To Classify", "低", "Low", "YINWAR 2ND FANSIGN SIRACHA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NETJJ AT BANGKOK PRIDE PARADE", "综合/待分类", "General / To Classify", "低", "Low", "NETJJ AT BANGKOK PRIDE PARADE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PAWS AND SHINE WITH SEA", "综合/待分类", "General / To Classify", "低", "Low", "PAWS AND SHINE WITH SEA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DORNTAO 1 DAY MANAGER MY", "综合/待分类", "General / To Classify", "低", "Low", "DORNTAO 1 DAY MANAGER MY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Crazy Love MooMoo EP4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Crazy Love MooMoo EP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#MGIAllStars", "综合/待分类", "General / To Classify", "低", "Low", "MGIAllStars", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Gazini", "综合/待分类", "General / To Classify", "低", "Low", "Gazini", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LINGORMFanPartyBD2026", "综合/待分类", "General / To Classify", "低", "Low", "LINGORMFanPartyBD2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TicketToHeavenEP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TicketToHeavenEP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Spurs", "综合/待分类", "General / To Classify", "低", "Low", "Spurs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TOPS X LAURIER WITH LENAMIU", "品牌活动/消费", "Brand / Consumer", "低", "Low", "TOPS X LAURIER WITH LENAMIU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#LaurierXLenaMiu", "综合/待分类", "General / To Classify", "低", "Low", "LaurierXLenaMiu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVMUSICONSINGAPOREday2", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREday2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRAND SUITE TIME WITH AZRALPH", "综合/待分类", "General / To Classify", "低", "Low", "GRAND SUITE TIME WITH AZRALPH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARMELLE MORENA AT NYC", "综合/待分类", "General / To Classify", "低", "Low", "CARMELLE MORENA AT NYC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINI LIVE AT KAOGMA FESTIVAL", "旅行/本地活动", "Travel / Local Event", "低", "Low", "BINI LIVE AT KAOGMA FESTIVAL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SULFUR UNLEASHES LIVE", "综合/待分类", "General / To Classify", "低", "Low", "SULFUR UNLEASHES LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OWN THE MOMENT SB19", "综合/待分类", "General / To Classify", "低", "Low", "OWN THE MOMENT SB19", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DUANG CONCERT SOON", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "DUANG CONCERT SOON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE AIR HIDDEN HEART", "综合/待分类", "General / To Classify", "低", "Low", "THE AIR HIDDEN HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH TTH PREMIERE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GEMINIFOURTH TTH PREMIERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("sulfur rising", "综合/待分类", "General / To Classify", "低", "Low", "sulfur rising", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TALA BAICON DAY TWO", "综合/待分类", "General / To Classify", "低", "Low", "TALA BAICON DAY TWO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("carmelle first honor series", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "carmelle first honor series", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Lupita", "综合/待分类", "General / To Classify", "低", "Low", "Lupita", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#وقتك_استغله_بالباقيات_الصالحات", "综合/待分类", "General / To Classify", "低", "Low", "وقتك_استغله_بالباقيات_الصالحات", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ارسنال", "综合/待分类", "General / To Classify", "低", "Low", "ارسنال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#السعوديه_الاكوادور", "综合/待分类", "General / To Classify", "低", "Low", "السعوديه_الاكوادور", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#extendjaissleuntil2o30", "综合/待分类", "General / To Classify", "低", "Low", "extendjaissleuntil2o30", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#نهايي_دوري_ابطال_اوروبا", "综合/待分类", "General / To Classify", "低", "Low", "نهايي_دوري_ابطال_اوروبا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#بوح_المشاعر", "综合/待分类", "General / To Classify", "低", "Low", "بوح_المشاعر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("انريكي", "综合/待分类", "General / To Classify", "低", "Low", "انريكي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("غابرييل", "综合/待分类", "General / To Classify", "低", "Low", "غابرييل", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الجمعيات الخيريه", "综合/待分类", "General / To Classify", "低", "Low", "الجمعيات الخيريه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("لندن", "综合/待分类", "General / To Classify", "低", "Low", "لندن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سالم", "综合/待分类", "General / To Classify", "低", "Low", "سالم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("برنامج الزواج", "综合/待分类", "General / To Classify", "低", "Low", "برنامج الزواج", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("نجاح موسم", "综合/待分类", "General / To Classify", "低", "Low", "نجاح موسم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العويس", "综合/待分类", "General / To Classify", "低", "Low", "العويس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الخيبري", "综合/待分类", "General / To Classify", "低", "Low", "الخيبري", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("دوري الابطال", "综合/待分类", "General / To Classify", "低", "Low", "دوري الابطال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("علي التوالي", "综合/待分类", "General / To Classify", "低", "Low", "علي التوالي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ليفربول", "综合/待分类", "General / To Classify", "低", "Low", "ليفربول", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التفكير الايجابي", "综合/待分类", "General / To Classify", "低", "Low", "التفكير الايجابي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ابو الشامات", "综合/待分类", "General / To Classify", "低", "Low", "ابو الشامات", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#PSGvARS", "综合/待分类", "General / To Classify", "低", "Low", "PSGvARS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#pazar", "综合/待分类", "General / To Classify", "低", "Low", "pazar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arsenal", "综合/待分类", "General / To Classify", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Anıtkabir", "综合/待分类", "General / To Classify", "低", "Low", "Anıtkabir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kanye West", "综合/待分类", "General / To Classify", "低", "Low", "Kanye West", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#UCLFinal", "综合/待分类", "General / To Classify", "低", "Low", "UCLFinal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ozan Güven", "综合/待分类", "General / To Classify", "低", "Low", "Ozan Güven", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Denizli&#39;nin Sarayköy", "综合/待分类", "General / To Classify", "低", "Low", "Denizli&#39;nin Sarayköy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fetö", "综合/待分类", "General / To Classify", "低", "Low", "Fetö", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#cumartesi", "综合/待分类", "General / To Classify", "低", "Low", "cumartesi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Şampiyonlar Ligi", "综合/待分类", "General / To Classify", "低", "Low", "Şampiyonlar Ligi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BLUE_MOON_BRINGS_SEVEN", "综合/待分类", "General / To Classify", "低", "Low", "BLUE_MOON_BRINGS_SEVEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arteta", "综合/待分类", "General / To Classify", "低", "Low", "Arteta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aykut", "综合/待分类", "General / To Classify", "低", "Low", "Aykut", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Luis Enrique", "综合/待分类", "General / To Classify", "低", "Low", "Luis Enrique", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İzmir-Antalya", "综合/待分类", "General / To Classify", "低", "Low", "İzmir-Antalya", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Gabriel", "综合/待分类", "General / To Classify", "低", "Low", "Gabriel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Oliver Glasner", "综合/待分类", "General / To Classify", "低", "Low", "Oliver Glasner", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TGRT", "综合/待分类", "General / To Classify", "低", "Low", "TGRT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Paris", "综合/待分类", "General / To Classify", "低", "Low", "Paris", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("LINGORM LOVE BD PARTY", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM LOVE BD PARTY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cuối", "综合/待分类", "General / To Classify", "低", "Low", "Cuối", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVMUSICONSINGAPOREday2", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREday2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เสน่หาวาโยตอนที่3", "综合/待分类", "General / To Classify", "低", "Low", "เสน่หาวาโยตอนที่3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("THE AIR HIDDEN HEART", "综合/待分类", "General / To Classify", "低", "Low", "THE AIR HIDDEN HEART", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Arsenal", "综合/待分类", "General / To Classify", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER DIRECT OUR MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER DIRECT OUR MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KIM MODEL KIM JUHOON", "综合/待分类", "General / To Classify", "低", "Low", "KIM MODEL KIM JUHOON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NUUIxThaifex2026", "综合/待分类", "General / To Classify", "低", "Low", "NUUIxThaifex2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#foryou", "综合/待分类", "General / To Classify", "低", "Low", "foryou", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Chủ Nhật", "综合/待分类", "General / To Classify", "低", "Low", "Chủ Nhật", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KhemjirainVietnam", "综合/待分类", "General / To Classify", "低", "Low", "KhemjirainVietnam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Paris", "综合/待分类", "General / To Classify", "低", "Low", "Paris", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("aqua prince keonho", "综合/待分类", "General / To Classify", "低", "Low", "aqua prince keonho", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("mc martin on the mic", "综合/待分类", "General / To Classify", "低", "Low", "mc martin on the mic", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SAROCHA FAN MEETING IN VN", "综合/待分类", "General / To Classify", "低", "Low", "SAROCHA FAN MEETING IN VN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Champions League", "体育/赛事", "Sports / Event", "低", "Low", "Champions League", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NTF 1ST ANNIV BIOACTIVE", "综合/待分类", "General / To Classify", "低", "Low", "NTF 1ST ANNIV BIOACTIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Intelligence Card", "综合/待分类", "General / To Classify", "低", "Low", "Intelligence Card", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Lolo", "综合/待分类", "General / To Classify", "低", "Low", "Lolo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#LulusanBebasDrama", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "LulusanBebasDrama", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVMUSICONSINGAPOREDAY1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREDAY1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER 1ST MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER 1ST MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GAWIN MUSICON IN SG D1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GAWIN MUSICON IN SG D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BESEVBOOM X URANUS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BESEVBOOM X URANUS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Final UEFA Champions League", "体育/赛事", "Sports / Event", "低", "Low", "Final UEFA Champions League", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#PaseoTHwithCharlotte", "综合/待分类", "General / To Classify", "低", "Low", "PaseoTHwithCharlotte", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TOPSHOME BABYFAIR W CL", "旅行/本地活动", "Travel / Local Event", "低", "Low", "TOPSHOME BABYFAIR W CL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KhemjirainVietnam", "综合/待分类", "General / To Classify", "低", "Low", "KhemjirainVietnam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVMUSICONSINGAPOREDAY1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREDAY1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER 1ST MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER 1ST MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TENCORE0110Concert", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TENCORE0110Concert", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#JARINYAxTEETEEPOR", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "JARINYAxTEETEEPOR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TTP CALL ME ANGEL", "综合/待分类", "General / To Classify", "低", "Low", "TTP CALL ME ANGEL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BOOK X URANUS CNX", "品牌活动/消费", "Brand / Consumer", "低", "Low", "BOOK X URANUS CNX", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUUI WITH DUNK", "综合/待分类", "General / To Classify", "低", "Low", "NUUI WITH DUNK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHACHA CONCEPT 01", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "CHACHA CONCEPT 01", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NT1 RISING TO THE TOP", "综合/待分类", "General / To Classify", "低", "Low", "NT1 RISING TO THE TOP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PAWTY WITH JOSS", "综合/待分类", "General / To Classify", "低", "Low", "PAWTY WITH JOSS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DAOU LIMITLESS EP", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "DAOU LIMITLESS EP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SAROCHA FAN MEETING IN VN", "综合/待分类", "General / To Classify", "低", "Low", "SAROCHA FAN MEETING IN VN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BOUN SWEET AFTERNOON TEA", "综合/待分类", "General / To Classify", "低", "Low", "BOUN SWEET AFTERNOON TEA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GAWIN MUSICON IN SG D1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GAWIN MUSICON IN SG D1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MR FANBOY Q15", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MR FANBOY Q15", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KAO X NUUIWORLD", "品牌活动/消费", "Brand / Consumer", "低", "Low", "KAO X NUUIWORLD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CLOSE TO MOMENTS WITH SATANG", "综合/待分类", "General / To Classify", "低", "Low", "CLOSE TO MOMENTS WITH SATANG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("ASHTINE LOVELIKEU MV OUT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "ASHTINE LOVELIKEU MV OUT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SULFUR RISING", "综合/待分类", "General / To Classify", "低", "Low", "SULFUR RISING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CAPEATH COKETIME FUNALO", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CAPEATH COKETIME FUNALO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AHOF1stTOUR_SEOUL", "旅行/本地活动", "Travel / Local Event", "低", "Low", "AHOF1stTOUR_SEOUL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MOYriendaBreakWithCAPcola", "综合/待分类", "General / To Classify", "低", "Low", "MOYriendaBreakWithCAPcola", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HONORed WITH ASHRAVE", "综合/待分类", "General / To Classify", "低", "Low", "HONORed WITH ASHRAVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#AshRaveGotTheHONOR", "综合/待分类", "General / To Classify", "低", "Low", "AshRaveGotTheHONOR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#FELIP", "综合/待分类", "General / To Classify", "低", "Low", "FELIP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVMUSICONSINGAPOREDAY1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREDAY1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SAROCHA FAN MEETING IN VN", "综合/待分类", "General / To Classify", "低", "Low", "SAROCHA FAN MEETING IN VN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GAFUN WITH RHENSEPH", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "GAFUN WITH RHENSEPH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GEMINIFOURTH TTH PREMIERE", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "GEMINIFOURTH TTH PREMIERE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER 1ST MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER 1ST MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TTP CALL ME ANGEL", "综合/待分类", "General / To Classify", "低", "Low", "TTP CALL ME ANGEL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TOPSHOME BABYFAIR W CL", "旅行/本地活动", "Travel / Local Event", "低", "Low", "TOPSHOME BABYFAIR W CL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KAIA PINANGGA SA BAICON", "综合/待分类", "General / To Classify", "低", "Low", "KAIA PINANGGA SA BAICON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARMELLE FIRST HONOR SERIES", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "CARMELLE FIRST HONOR SERIES", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MC MARTIN", "综合/待分类", "General / To Classify", "低", "Low", "MC MARTIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tito", "综合/待分类", "General / To Classify", "低", "Low", "Tito", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JMFYANG HITS 13B VIEWS", "综合/待分类", "General / To Classify", "低", "Low", "JMFYANG HITS 13B VIEWS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
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
        t("باريس", "综合/待分类", "General / To Classify", "低", "Low", "باريس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("برشلونة", "综合/待分类", "General / To Classify", "低", "Low", "برشلونة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التميز المالي", "综合/待分类", "General / To Classify", "低", "Low", "التميز المالي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("بخاخ النشا", "综合/待分类", "General / To Classify", "低", "Low", "بخاخ النشا", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التفوق الاقتصادي", "综合/待分类", "General / To Classify", "低", "Low", "التفوق الاقتصادي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عمان", "综合/待分类", "General / To Classify", "低", "Low", "عمان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاعمال المزدهره", "综合/待分类", "General / To Classify", "低", "Low", "الاعمال المزدهره", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الفاريز", "综合/待分类", "General / To Classify", "低", "Low", "الفاريز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الخطط الرابحه", "综合/待分类", "General / To Classify", "低", "Low", "الخطط الرابحه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاتحاد", "综合/待分类", "General / To Classify", "低", "Low", "الاتحاد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#İstanbulunFethi", "综合/待分类", "General / To Classify", "低", "Low", "İstanbulunFethi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#cumartesi", "综合/待分类", "General / To Classify", "低", "Low", "cumartesi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#29Mayıs1453", "综合/待分类", "General / To Classify", "低", "Low", "29Mayıs1453", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ozan Güven", "综合/待分类", "General / To Classify", "低", "Low", "Ozan Güven", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NeGünlereKaldık", "综合/待分类", "General / To Classify", "低", "Low", "NeGünlereKaldık", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TaşacakBuDeniz", "综合/待分类", "General / To Classify", "低", "Low", "TaşacakBuDeniz", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İletişim Başkanlığı", "综合/待分类", "General / To Classify", "低", "Low", "İletişim Başkanlığı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fatih Sultan Mehmet Han", "综合/待分类", "General / To Classify", "低", "Low", "Fatih Sultan Mehmet Han", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aykut", "综合/待分类", "General / To Classify", "低", "Low", "Aykut", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mehmet Aslantuğ", "综合/待分类", "General / To Classify", "低", "Low", "Mehmet Aslantuğ", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Günaydınlar", "综合/待分类", "General / To Classify", "低", "Low", "Günaydınlar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Curtis Jones", "综合/待分类", "General / To Classify", "低", "Low", "Curtis Jones", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İsmail Kartal", "综合/待分类", "General / To Classify", "低", "Low", "İsmail Kartal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AvaYamanın HakkınıVer", "综合/待分类", "General / To Classify", "低", "Low", "AvaYamanın HakkınıVer", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Şebnem Sönmez", "综合/待分类", "General / To Classify", "低", "Low", "Şebnem Sönmez", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kanye West", "综合/待分类", "General / To Classify", "低", "Low", "Kanye West", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Emanetleriniz Ehilellerde", "综合/待分类", "General / To Classify", "低", "Low", "Emanetleriniz Ehilellerde", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Fadime", "综合/待分类", "General / To Classify", "低", "Low", "Fadime", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Reha Muhtar", "综合/待分类", "General / To Classify", "低", "Low", "Reha Muhtar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Antonio Conte", "综合/待分类", "General / To Classify", "低", "Low", "Antonio Conte", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("LINGORM IN LOVE FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM IN LOVE FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วาดฝันวันวิวาห์OfficialTeaser", "综合/待分类", "General / To Classify", "低", "Low", "วาดฝันวันวิวาห์OfficialTeaser", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MC MARTIN ON THE MIC", "综合/待分类", "General / To Classify", "低", "Low", "MC MARTIN ON THE MIC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GMMTVMUSICONSINGAPOREDAY1", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "GMMTVMUSICONSINGAPOREDAY1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MARTINxShowMusicCore", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "MARTINxShowMusicCore", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JASPER 1ST MUSICONSG", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "JASPER 1ST MUSICONSG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cuối", "综合/待分类", "General / To Classify", "低", "Low", "Cuối", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NUUIxThaifex2026", "综合/待分类", "General / To Classify", "低", "Low", "NUUIxThaifex2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUUI WITH DUNK", "综合/待分类", "General / To Classify", "低", "Low", "NUUI WITH DUNK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KhemjirainVietnam", "综合/待分类", "General / To Classify", "低", "Low", "KhemjirainVietnam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Thứ 7", "综合/待分类", "General / To Classify", "低", "Low", "Thứ 7", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SAROCHA FAN MEETING IN VN", "综合/待分类", "General / To Classify", "低", "Low", "SAROCHA FAN MEETING IN VN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAMES RADIATES IN PRADA", "综合/待分类", "General / To Classify", "低", "Low", "JAMES RADIATES IN PRADA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("thứ 6", "综合/待分类", "General / To Classify", "低", "Low", "thứ 6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Stage 7", "综合/待分类", "General / To Classify", "低", "Low", "Stage 7", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Intelligence Card", "综合/待分类", "General / To Classify", "低", "Low", "Intelligence Card", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TOPSHOME BABYFAIR W CL", "旅行/本地活动", "Travel / Local Event", "低", "Low", "TOPSHOME BABYFAIR W CL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bitcoin", "综合/待分类", "General / To Classify", "低", "Low", "Bitcoin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Claude Opus 4.8", "综合/待分类", "General / To Classify", "低", "Low", "Claude Opus 4.8", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OOMBAM FULFILL 6TH", "综合/待分类", "General / To Classify", "低", "Low", "OOMBAM FULFILL 6TH", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#MizuMixPondPhuwin", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MizuMixPondPhuwin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ADogAndAPlaneEP1", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ADogAndAPlaneEP1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NoPrepareWithJUNGWON", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "NoPrepareWithJUNGWON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RUN IT UP MV OUT NOW", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "RUN IT UP MV OUT NOW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#WhenItRainsTS1", "综合/待分类", "General / To Classify", "低", "Low", "WhenItRainsTS1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO IMAGE TEASER 1", "综合/待分类", "General / To Classify", "低", "Low", "TFO IMAGE TEASER 1", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WYLD1stWin", "综合/待分类", "General / To Classify", "低", "Low", "WYLD1stWin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FBT LOVE BONCHON", "综合/待分类", "General / To Classify", "低", "Low", "FBT LOVE BONCHON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TAEYONG1stWin", "综合/待分类", "General / To Classify", "低", "Low", "TAEYONG1stWin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MizuMixPondPhuwin", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "MizuMixPondPhuwin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TheMallBangkapixThomasKong", "综合/待分类", "General / To Classify", "低", "Low", "TheMallBangkapixThomasKong", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TMK AT BLACK WEEKEND", "综合/待分类", "General / To Classify", "低", "Low", "TMK AT BLACK WEEKEND", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TAYNEW LOVE AT FIRST FLIGHT", "综合/待分类", "General / To Classify", "低", "Low", "TAYNEW LOVE AT FIRST FLIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("HAIER PLAY WITH BOUN", "综合/待分类", "General / To Classify", "低", "Low", "HAIER PLAY WITH BOUN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("POR WITH SISTAR MOMENT", "综合/待分类", "General / To Classify", "低", "Low", "POR WITH SISTAR MOMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYEATOM BOL REACT EP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "FAYEATOM BOL REACT EP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LOVERRUKK FAV MICELLAR", "综合/待分类", "General / To Classify", "低", "Low", "LOVERRUKK FAV MICELLAR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Silom Public Property", "综合/待分类", "General / To Classify", "低", "Low", "Silom Public Property", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINGORM IN LOVE FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM IN LOVE FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("URANUS PLK X GUN", "品牌活动/消费", "Brand / Consumer", "低", "Low", "URANUS PLK X GUN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BBAS GARNIER LIVE SHOPEE", "综合/待分类", "General / To Classify", "低", "Low", "BBAS GARNIER LIVE SHOPEE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARLYN STORE OPEN X EMIBONNIE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CARLYN STORE OPEN X EMIBONNIE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DENIED LOVE 1ST ANNIVERSARY", "综合/待分类", "General / To Classify", "低", "Low", "DENIED LOVE 1ST ANNIVERSARY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("AUAUTNP WITH EVERPINK", "综合/待分类", "General / To Classify", "低", "Low", "AUAUTNP WITH EVERPINK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("DUSTBIA JOINS XIAOMI", "综合/待分类", "General / To Classify", "低", "Low", "DUSTBIA JOINS XIAOMI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOREVER TONIGHT AKIRA", "综合/待分类", "General / To Classify", "低", "Low", "FOREVER TONIGHT AKIRA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ASHTINE LIVE ON VVB", "综合/待分类", "General / To Classify", "低", "Low", "ASHTINE LIVE ON VVB", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#VogueVacation", "综合/待分类", "General / To Classify", "低", "Low", "VogueVacation", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ReactionBrokenOfLoveEP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "ReactionBrokenOfLoveEP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BINIVERSE AND CHORUS EP 4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BINIVERSE AND CHORUS EP 4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FAYEATOM BOL REACT EP6", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "FAYEATOM BOL REACT EP6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#GalaxyATeam", "综合/待分类", "General / To Classify", "低", "Low", "GalaxyATeam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WYLD1stWin", "综合/待分类", "General / To Classify", "低", "Low", "WYLD1stWin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TAEYONG1stWin", "综合/待分类", "General / To Classify", "低", "Low", "TAEYONG1stWin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TMK AT BLACK WEEKEND", "综合/待分类", "General / To Classify", "低", "Low", "TMK AT BLACK WEEKEND", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jungwon", "综合/待分类", "General / To Classify", "低", "Low", "Jungwon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("JAY TAKES THE SPOTLIGHT", "综合/待分类", "General / To Classify", "低", "Low", "JAY TAKES THE SPOTLIGHT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MIKBRENT THE MOMENT", "综合/待分类", "General / To Classify", "低", "Low", "MIKBRENT THE MOMENT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("youngji", "综合/待分类", "General / To Classify", "低", "Low", "youngji", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("hobi", "综合/待分类", "General / To Classify", "低", "Low", "hobi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CAPEATH UNLOCK SEVENFINITY", "综合/待分类", "General / To Classify", "低", "Low", "CAPEATH UNLOCK SEVENFINITY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARLYN STORE OPEN X EMIBONNIE", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CARLYN STORE OPEN X EMIBONNIE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Karina", "综合/待分类", "General / To Classify", "低", "Low", "Karina", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jinggoy", "综合/待分类", "General / To Classify", "低", "Low", "Jinggoy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#قاصد_تودع_الحجاج", "综合/待分类", "General / To Classify", "低", "Low", "قاصد_تودع_الحجاج", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#وقتك_بالباقيات_الصالحات", "综合/待分类", "General / To Classify", "低", "Low", "وقتك_بالباقيات_الصالحات", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#خلصوا_مع_كلوب", "综合/待分类", "General / To Classify", "低", "Low", "خلصوا_مع_كلوب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("محمد", "综合/待分类", "General / To Classify", "低", "Low", "محمد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#امواتكم_يفرحون_بالدعاء_لهم", "综合/待分类", "General / To Classify", "低", "Low", "امواتكم_يفرحون_بالدعاء_لهم", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#يوم_الجمعه", "综合/待分类", "General / To Classify", "低", "Low", "يوم_الجمعه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التفوق الاقتصادي", "综合/待分类", "General / To Classify", "低", "Low", "التفوق الاقتصادي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("جيسوس", "综合/待分类", "General / To Classify", "低", "Low", "جيسوس", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عمان", "综合/待分类", "General / To Classify", "低", "Low", "عمان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("برشلونة", "综合/待分类", "General / To Classify", "低", "Low", "برشلونة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاتحاد", "综合/待分类", "General / To Classify", "低", "Low", "الاتحاد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("التميز المالي", "综合/待分类", "General / To Classify", "低", "Low", "التميز المالي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("النصر", "综合/待分类", "General / To Classify", "低", "Low", "النصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("النصر", "综合/待分类", "General / To Classify", "低", "Low", "النصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الفاريز", "综合/待分类", "General / To Classify", "低", "Low", "الفاريز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("علي النبي", "综合/待分类", "General / To Classify", "低", "Low", "علي النبي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("القياده الواعيه", "综合/待分类", "General / To Classify", "低", "Low", "القياده الواعيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاعمال المزدهره", "综合/待分类", "General / To Classify", "低", "Low", "الاعمال المزدهره", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الهلال", "综合/待分类", "General / To Classify", "低", "Low", "الهلال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الخطط الرابحه", "综合/待分类", "General / To Classify", "低", "Low", "الخطط الرابحه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#İstanbulunFethi", "综合/待分类", "General / To Classify", "低", "Low", "İstanbulunFethi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#İstanbulunFethi", "综合/待分类", "General / To Classify", "低", "Low", "İstanbulunFethi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#29Mayıs1453", "综合/待分类", "General / To Classify", "低", "Low", "29Mayıs1453", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hayırlı Cumalar", "综合/待分类", "General / To Classify", "低", "Low", "Hayırlı Cumalar", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Peygamber Efendimizin", "综合/待分类", "General / To Classify", "低", "Low", "Peygamber Efendimizin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Zulüm 1453", "综合/待分类", "General / To Classify", "低", "Low", "Zulüm 1453", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Zeynep Sönmez", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "Zeynep Sönmez", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vincenzo Montella", "综合/待分类", "General / To Classify", "低", "Low", "Vincenzo Montella", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Milletimizin Başı Sağ Olsun", "综合/待分类", "General / To Classify", "低", "Low", "Milletimizin Başı Sağ Olsun", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Aydın Üyenarık", "综合/待分类", "General / To Classify", "低", "Low", "Aydın Üyenarık", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Çaycılıktan", "综合/待分类", "General / To Classify", "低", "Low", "Çaycılıktan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Osmanlıca", "综合/待分类", "General / To Classify", "低", "Low", "Osmanlıca", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#THE_FUTURE_IS_SEVEN", "综合/待分类", "General / To Classify", "低", "Low", "THE_FUTURE_IS_SEVEN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#FATE_BROUGHT_7_TOGETHER", "综合/待分类", "General / To Classify", "低", "Low", "FATE_BROUGHT_7_TOGETHER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rus İHA", "综合/待分类", "General / To Classify", "低", "Low", "Rus İHA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kahraman Kemal", "综合/待分类", "General / To Classify", "低", "Low", "Kahraman Kemal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Domenico Tedesco", "综合/待分类", "General / To Classify", "低", "Low", "Domenico Tedesco", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cumamız", "综合/待分类", "General / To Classify", "低", "Low", "Cumamız", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bologna", "综合/待分类", "General / To Classify", "低", "Low", "Bologna", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Yozgat&#39;ın Çayıralan", "综合/待分类", "General / To Classify", "低", "Low", "Yozgat&#39;ın Çayıralan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("LINGORM IN LOVE FOREVER", "综合/待分类", "General / To Classify", "低", "Low", "LINGORM IN LOVE FOREVER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วาดฝันวันวิวาห์OfficialTeaser", "综合/待分类", "General / To Classify", "低", "Low", "วาดฝันวันวิวาห์OfficialTeaser", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Thứ 6", "综合/待分类", "General / To Classify", "低", "Low", "Thứ 6", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#claim_early_user", "综合/待分类", "General / To Classify", "低", "Low", "claim_early_user", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Neen", "综合/待分类", "General / To Classify", "低", "Low", "Neen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#loveyou", "综合/待分类", "General / To Classify", "低", "Low", "loveyou", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#foryou", "综合/待分类", "General / To Classify", "低", "Low", "foryou", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("youthful charm ahn keonho", "综合/待分类", "General / To Classify", "低", "Low", "youthful charm ahn keonho", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#idol", "综合/待分类", "General / To Classify", "低", "Low", "idol", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bitcoin", "综合/待分类", "General / To Classify", "低", "Low", "Bitcoin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YOKO AT KCL AWARDS 2026", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "YOKO AT KCL AWARDS 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("seonghyeon embodies loewe", "综合/待分类", "General / To Classify", "低", "Low", "seonghyeon embodies loewe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Runch", "综合/待分类", "General / To Classify", "低", "Low", "Runch", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nomisen IDs", "综合/待分类", "General / To Classify", "低", "Low", "Nomisen IDs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("luận", "综合/待分类", "General / To Classify", "低", "Low", "luận", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("REBECCA X RL POLO CUP", "体育/赛事", "Sports / Event", "低", "Low", "REBECCA X RL POLO CUP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Ngày", "综合/待分类", "General / To Classify", "低", "Low", "Ngày", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KEEP THE LIGHT ORM", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KEEP THE LIGHT ORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Opus 4.8", "综合/待分类", "General / To Classify", "低", "Low", "Opus 4.8", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Eid Mubarak", "综合/待分类", "General / To Classify", "低", "Low", "Eid Mubarak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
    date: "2026-05-28",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#SkyWithSupersonicTravel", "旅行/本地活动", "Travel / Local Event", "低", "Low", "SkyWithSupersonicTravel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKY TRAVEL WITH DYSON", "旅行/本地活动", "Travel / Local Event", "低", "Low", "SKY TRAVEL WITH DYSON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#TENCORE0110iscalling", "综合/待分类", "General / To Classify", "低", "Low", "TENCORE0110iscalling", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#sasiKaoPROXIEKengNamping", "综合/待分类", "General / To Classify", "低", "Low", "sasiKaoPROXIEKengNamping", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP FACE OF SASI", "综合/待分类", "General / To Classify", "低", "Low", "KNP FACE OF SASI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EliteCarexTleFirstone", "综合/待分类", "General / To Classify", "低", "Low", "EliteCarexTleFirstone", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CLEAR MISSION WITH TFO", "综合/待分类", "General / To Classify", "低", "Low", "CLEAR MISSION WITH TFO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TleFirstOneSpoiler", "综合/待分类", "General / To Classify", "低", "Low", "TleFirstOneSpoiler", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO MUSIC SPOILER", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "TFO MUSIC SPOILER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BUS_THEFIRSTLIGHTinTAIPEI", "综合/待分类", "General / To Classify", "低", "Low", "BUS_THEFIRSTLIGHTinTAIPEI", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ON AIR WITH DJ JAEMIN", "综合/待分类", "General / To Classify", "低", "Low", "ON AIR WITH DJ JAEMIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("SKY TRAVEL WITH DYSON", "旅行/本地活动", "Travel / Local Event", "低", "Low", "SKY TRAVEL WITH DYSON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GROGU with NUTHONG", "综合/待分类", "General / To Classify", "低", "Low", "GROGU with NUTHONG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINE MAN x Wave", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LINE MAN x Wave", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BUS 1ST FANCON TW", "综合/待分类", "General / To Classify", "低", "Low", "BUS 1ST FANCON TW", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("APPLEMIM AT FORUM AND AWARDS", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "APPLEMIM AT FORUM AND AWARDS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRAND GRAND SALES LENA MIU", "综合/待分类", "General / To Classify", "低", "Low", "GRAND GRAND SALES LENA MIU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tipme", "综合/待分类", "General / To Classify", "低", "Low", "Tipme", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YOGHURT PONYTAIL CONCEPT PHOTO", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "YOGHURT PONYTAIL CONCEPT PHOTO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LK HOME OF LOVE 28", "综合/待分类", "General / To Classify", "低", "Low", "LK HOME OF LOVE 28", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("EasyDonate", "综合/待分类", "General / To Classify", "低", "Low", "EasyDonate", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DICE BUSKING AT NAKHON SAWAN", "综合/待分类", "General / To Classify", "低", "Low", "DICE BUSKING AT NAKHON SAWAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#AskCaprice", "综合/待分类", "General / To Classify", "低", "Low", "AskCaprice", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BINIverseAndChorus", "综合/待分类", "General / To Classify", "低", "Low", "BINIverseAndChorus", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BGYO_ForeverTonight", "综合/待分类", "General / To Classify", "低", "Low", "BGYO_ForeverTonight", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FOREVER TONIGHT GELO", "综合/待分类", "General / To Classify", "低", "Low", "FOREVER TONIGHT GELO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#DatingAlysPerezMediaCon", "综合/待分类", "General / To Classify", "低", "Low", "DatingAlysPerezMediaCon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("DRALY2 FlipTheScript", "综合/待分类", "General / To Classify", "低", "Low", "DRALY2 FlipTheScript", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CentralPattanaxLenaMiu", "综合/待分类", "General / To Classify", "低", "Low", "CentralPattanaxLenaMiu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("namjoon", "综合/待分类", "General / To Classify", "低", "Low", "namjoon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WILBERT AT KAOGMA FESTIVAL", "旅行/本地活动", "Travel / Local Event", "低", "Low", "WILBERT AT KAOGMA FESTIVAL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("LINE MAN x Wave", "品牌活动/消费", "Brand / Consumer", "低", "Low", "LINE MAN x Wave", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BANGTAN", "综合/待分类", "General / To Classify", "低", "Low", "BANGTAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("luckychella season 24", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "luckychella season 24", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RISE WITH XONARA", "综合/待分类", "General / To Classify", "低", "Low", "RISE WITH XONARA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("wyfmm jmfyang on iwant", "综合/待分类", "General / To Classify", "低", "Low", "wyfmm jmfyang on iwant", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GINNY JAYNA AT 22ND KCL2026", "综合/待分类", "General / To Classify", "低", "Low", "GINNY JAYNA AT 22ND KCL2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("4 DAYS TO NEW WAV", "综合/待分类", "General / To Classify", "低", "Low", "4 DAYS TO NEW WAV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GIOLUNA SECRET LOVE", "综合/待分类", "General / To Classify", "低", "Low", "GIOLUNA SECRET LOVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ENHYPEN&#39;S GREAT AUSSIE GETAWAY", "综合/待分类", "General / To Classify", "低", "Low", "ENHYPEN&#39;S GREAT AUSSIE GETAWAY", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ZB1 SCORES SECOND WIN", "综合/待分类", "General / To Classify", "低", "Low", "ZB1 SCORES SECOND WIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARTSARI IKAW ANG PAHINGA", "综合/待分类", "General / To Classify", "低", "Low", "MARTSARI IKAW ANG PAHINGA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#عيد_الاضحي_المبارك", "综合/待分类", "General / To Classify", "低", "Low", "عيد_الاضحي_المبارك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عاد_عيدك_سيدي", "综合/待分类", "General / To Classify", "低", "Low", "عاد_عيدك_سيدي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ولي_العهد_يستقبل_المهنيين", "综合/待分类", "General / To Classify", "低", "Low", "ولي_العهد_يستقبل_المهنيين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("صالح الاعمال", "综合/待分类", "General / To Classify", "低", "Low", "صالح الاعمال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عيد_مبارك", "综合/待分类", "General / To Classify", "低", "Low", "عيد_مبارك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#NeshanXLeila", "综合/待分类", "General / To Classify", "低", "Low", "NeshanXLeila", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("منصور هادي", "综合/待分类", "General / To Classify", "低", "Low", "منصور هادي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("برشلونة", "综合/待分类", "General / To Classify", "低", "Low", "برشلونة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("رافينها", "综合/待分类", "General / To Classify", "低", "Low", "رافينها", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الفاريز", "综合/待分类", "General / To Classify", "低", "Low", "الفاريز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عيد سعيد", "综合/待分类", "General / To Classify", "低", "Low", "عيد سعيد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("السعودية", "综合/待分类", "General / To Classify", "低", "Low", "السعودية", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عمان", "综合/待分类", "General / To Classify", "低", "Low", "عمان", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("النصر", "综合/待分类", "General / To Classify", "低", "Low", "النصر", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الكويت", "综合/待分类", "General / To Classify", "低", "Low", "الكويت", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("راشفورد", "综合/待分类", "General / To Classify", "低", "Low", "راشفورد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العايدين الفايزين", "综合/待分类", "General / To Classify", "低", "Low", "العايدين الفايزين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("طواف الافاضه", "综合/待分类", "General / To Classify", "低", "Low", "طواف الافاضه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الهلال", "综合/待分类", "General / To Classify", "低", "Low", "الهلال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الرييس السابق", "综合/待分类", "General / To Classify", "低", "Low", "الرييس السابق", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#Yaşasınlarlasevdik", "综合/待分类", "General / To Classify", "低", "Low", "Yaşasınlarlasevdik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vedat", "综合/待分类", "General / To Classify", "低", "Low", "Vedat", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Gezi13Yaşında", "综合/待分类", "General / To Classify", "低", "Low", "Gezi13Yaşında", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Hamit", "综合/待分类", "General / To Classify", "低", "Low", "Hamit", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#perşembe", "综合/待分类", "General / To Classify", "低", "Low", "perşembe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Azerbaycan", "综合/待分类", "General / To Classify", "低", "Low", "Azerbaycan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Guirassy", "综合/待分类", "General / To Classify", "低", "Low", "Guirassy", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Forvet", "综合/待分类", "General / To Classify", "低", "Low", "Forvet", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mallorca", "综合/待分类", "General / To Classify", "低", "Low", "Mallorca", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bağımsızlık Günü", "综合/待分类", "General / To Classify", "低", "Low", "Bağımsızlık Günü", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Treat_SevEN_With_Dignity", "综合/待分类", "General / To Classify", "低", "Low", "Treat_SevEN_With_Dignity", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("namjoon", "综合/待分类", "General / To Classify", "低", "Low", "namjoon", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHP Parti Meclisi", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "CHP Parti Meclisi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sneijder", "综合/待分类", "General / To Classify", "低", "Low", "Sneijder", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Yaz Yıldırım", "综合/待分类", "General / To Classify", "低", "Low", "Yaz Yıldırım", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Mahmut Uslu", "综合/待分类", "General / To Classify", "低", "Low", "Mahmut Uslu", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Necati Özel", "综合/待分类", "General / To Classify", "低", "Low", "Necati Özel", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Barcelona", "综合/待分类", "General / To Classify", "低", "Low", "Barcelona", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Monaco", "综合/待分类", "General / To Classify", "低", "Low", "Monaco", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Şeyma Subaşı", "综合/待分类", "General / To Classify", "低", "Low", "Şeyma Subaşı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("how the gun bed works", "综合/待分类", "General / To Classify", "低", "Low", "how the gun bed works", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YOUTHFUL CHARM AHN KEONHO", "综合/待分类", "General / To Classify", "低", "Low", "YOUTHFUL CHARM AHN KEONHO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("luận", "综合/待分类", "General / To Classify", "低", "Low", "luận", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Eid Mubarak", "综合/待分类", "General / To Classify", "低", "Low", "Eid Mubarak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("mạch", "综合/待分类", "General / To Classify", "低", "Low", "mạch", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TwentyFourRisingOrm", "综合/待分类", "General / To Classify", "低", "Low", "TwentyFourRisingOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KEEP THE LIGHT ORM", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KEEP THE LIGHT ORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesEP4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YOKO AT KCL AWARDS 2026", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "YOKO AT KCL AWARDS 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#24thBDwishForOrm", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "24thBDwishForOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#InLoveForeverTheSeries", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "InLoveForeverTheSeries", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kickstart", "综合/待分类", "General / To Classify", "低", "Low", "Kickstart", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#วาดฝันวันวิวาห์", "综合/待分类", "General / To Classify", "低", "Low", "วาดฝันวันวิวาห์", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GRAND GRAND SALES LENA MIU", "综合/待分类", "General / To Classify", "低", "Low", "GRAND GRAND SALES LENA MIU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("MARTIN SERVES YSL LOOKS", "综合/待分类", "General / To Classify", "低", "Low", "MARTIN SERVES YSL LOOKS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("STO Chain", "综合/待分类", "General / To Classify", "低", "Low", "STO Chain", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Cách", "综合/待分类", "General / To Classify", "低", "Low", "Cách", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP AT KCLA2026", "综合/待分类", "General / To Classify", "低", "Low", "KNP AT KCLA2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KCLAWARDS X JANJINGJING", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "KCLAWARDS X JANJINGJING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("rip goslings", "综合/待分类", "General / To Classify", "低", "Low", "rip goslings", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
      country("id", "印尼", "Indonesia", "https://trends24.in/indonesia/", [
        t("#KCLAWARDS2026xDMD", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "KCLAWARDS2026xDMD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("th", "泰国", "Thailand", "https://trends24.in/thailand/", [
        t("#เก่งน้ําปิงคมชัดลึกครั้งที่22", "综合/待分类", "General / To Classify", "低", "Low", "เก่งน้ําปิงคมชัดลึกครั้งที่22", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP AT KCLA2026", "综合/待分类", "General / To Classify", "低", "Low", "KNP AT KCLA2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KCL2026xTleFirstone", "综合/待分类", "General / To Classify", "低", "Low", "KCL2026xTleFirstone", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TFO AT KCLAWARDS26", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "TFO AT KCLAWARDS26", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#KCLAWARDS2026xDMD", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "KCLAWARDS2026xDMD", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#ซีนุนิวที่คมชัดลึก2569", "综合/待分类", "General / To Classify", "低", "Low", "ซีนุนิวที่คมชัดลึก2569", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEEPOR NIGHT ICON KCL", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TEETEEPOR NIGHT ICON KCL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BTNuformulaxJimmyCean", "综合/待分类", "General / To Classify", "低", "Low", "BTNuformulaxJimmyCean", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BE MY PLAYER TWO Q13", "综合/待分类", "General / To Classify", "低", "Low", "BE MY PLAYER TWO Q13", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KOMCHADLUEK WITH LYKN", "综合/待分类", "General / To Classify", "低", "Low", "KOMCHADLUEK WITH LYKN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KCLAWARDS X JANJINGJING", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "KCLAWARDS X JANJINGJING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NUFORMULA JIMMY AVOCEAN", "综合/待分类", "General / To Classify", "低", "Low", "NUFORMULA JIMMY AVOCEAN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("1YEAR KHEMRIN WITH ENJOYJUNE", "综合/待分类", "General / To Classify", "低", "Low", "1YEAR KHEMRIN WITH ENJOYJUNE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("POOHPAVEL ELEGANT AT KCL22", "综合/待分类", "General / To Classify", "低", "Low", "POOHPAVEL ELEGANT AT KCL22", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KCLAWARDS X FOUREVERU2", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "KCLAWARDS X FOUREVERU2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("OOMBAM AT KOMCHADLUEK", "综合/待分类", "General / To Classify", "低", "Low", "OOMBAM AT KOMCHADLUEK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("PEARLPEAK SHINE AT KCLAWARDS", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "PEARLPEAK SHINE AT KCLAWARDS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TONSOM 3RD EPISODE", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TONSOM 3RD EPISODE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("NEWSAN X BEAUTRIUM", "品牌活动/消费", "Brand / Consumer", "低", "Low", "NEWSAN X BEAUTRIUM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KOMCHADLUEK WITH FM", "综合/待分类", "General / To Classify", "低", "Low", "KOMCHADLUEK WITH FM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("ph", "菲律宾", "Philippines", "https://trends24.in/philippines/", [
        t("#KCLAWARDS2026xYOKO", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "法律/诈骗", "Legal / Fraud", "KCLAWARDS2026xYOKO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("GINNY JAYNA AT 22ND KCL2026", "综合/待分类", "General / To Classify", "低", "Low", "GINNY JAYNA AT 22ND KCL2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("BGYO EP SAMPLER", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "BGYO EP SAMPLER", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WillYouFakeMarryMe", "综合/待分类", "General / To Classify", "低", "Low", "WillYouFakeMarryMe", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#TayoSaWakas", "综合/待分类", "General / To Classify", "低", "Low", "TayoSaWakas", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("WYFMM JMFYANG ON IWANT", "综合/待分类", "General / To Classify", "低", "Low", "WYFMM JMFYANG ON IWANT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#BayanNgROS", "综合/待分类", "General / To Classify", "低", "Low", "BayanNgROS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("TEETEEPOR NIGHT ICON KCL", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "TEETEEPOR NIGHT ICON KCL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Rain or Shine", "综合/待分类", "General / To Classify", "低", "Low", "Rain or Shine", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Jungkook", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "Jungkook", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#iKON_FOUREVER_TOUR", "旅行/本地活动", "Travel / Local Event", "低", "Low", "iKON_FOUREVER_TOUR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bert", "综合/待分类", "General / To Classify", "低", "Low", "Bert", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("RIKI JACKSON", "综合/待分类", "General / To Classify", "低", "Low", "RIKI JACKSON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("FORBES CROWNS JUNGWON", "综合/待分类", "General / To Classify", "低", "Low", "FORBES CROWNS JUNGWON", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CARTON DELIVERS EDUCARE", "综合/待分类", "General / To Classify", "低", "Low", "CARTON DELIVERS EDUCARE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ANTON MAKMAKikita NA", "综合/待分类", "General / To Classify", "低", "Low", "ANTON MAKMAKikita NA", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KEEP THE LIGHT ORM", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KEEP THE LIGHT ORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("REBECCA FLY TO BEIJING", "综合/待分类", "General / To Classify", "低", "Low", "REBECCA FLY TO BEIJING", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Eid Mubarak", "综合/待分类", "General / To Classify", "低", "Low", "Eid Mubarak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Iran", "综合/待分类", "General / To Classify", "低", "Low", "Iran", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://trends24.in/saudi-arabia/", [
        t("#نفخر_بخدمه_ضيوف_الرحمن", "综合/待分类", "General / To Classify", "低", "Low", "نفخر_بخدمه_ضيوف_الرحمن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#شفاك_الله_ابن_الذيب", "综合/待分类", "General / To Classify", "低", "Low", "شفاك_الله_ابن_الذيب", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#كشخه_العيد", "综合/待分类", "General / To Classify", "低", "Low", "كشخه_العيد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#الغيبوبه_الجماعيه", "综合/待分类", "General / To Classify", "低", "Low", "الغيبوبه_الجماعيه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#عيد_الاضحي_المبارك", "综合/待分类", "General / To Classify", "低", "Low", "عيد_الاضحي_المبارك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("صالح الاعمال", "综合/待分类", "General / To Classify", "低", "Low", "صالح الاعمال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عيد مبارك", "综合/待分类", "General / To Classify", "低", "Low", "عيد مبارك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("العايدين الفايزين", "综合/待分类", "General / To Classify", "低", "Low", "العايدين الفايزين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عيد سعيد", "综合/待分类", "General / To Classify", "低", "Low", "عيد سعيد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("خادم الحرمين الشريفين", "综合/待分类", "General / To Classify", "低", "Low", "خادم الحرمين الشريفين", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Eid Mubarak", "综合/待分类", "General / To Classify", "低", "Low", "Eid Mubarak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy Eid", "综合/待分类", "General / To Classify", "低", "Low", "Happy Eid", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الدنا الغالي", "综合/待分类", "General / To Classify", "低", "Low", "الدنا الغالي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("راشفورد", "综合/待分类", "General / To Classify", "低", "Low", "راشفورد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سلمان بن عبدالعزيز", "综合/待分类", "General / To Classify", "低", "Low", "سلمان بن عبدالعزيز", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الاسره الكريمه", "综合/待分类", "General / To Classify", "低", "Low", "الاسره الكريمه", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("عيد فرح", "综合/待分类", "General / To Classify", "低", "Low", "عيد فرح", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("الشعب السعودي", "综合/待分类", "General / To Classify", "低", "Low", "الشعب السعودي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("سيدي ولي العهد", "综合/待分类", "General / To Classify", "低", "Low", "سيدي ولي العهد", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("مبارك سيدي", "综合/待分类", "General / To Classify", "低", "Low", "مبارك سيدي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("tr", "土耳其", "Turkey", "https://trends24.in/turkey/", [
        t("#kurbanbayramınızmübarekolsun", "体育/赛事", "Sports / Event", "低", "Low", "kurbanbayramınızmübarekolsun", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Tedbir", "综合/待分类", "General / To Classify", "低", "Low", "Tedbir", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#EidMubarak", "综合/待分类", "General / To Classify", "低", "Low", "EidMubarak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Seninde", "综合/待分类", "General / To Classify", "低", "Low", "Seninde", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#27Mayıs", "综合/待分类", "General / To Classify", "低", "Low", "27Mayıs", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("4 Nisan", "综合/待分类", "General / To Classify", "低", "Low", "4 Nisan", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#Çarşamba", "综合/待分类", "General / To Classify", "低", "Low", "Çarşamba", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Akın Gürlek", "综合/待分类", "General / To Classify", "低", "Low", "Akın Gürlek", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Adnan Beker", "综合/待分类", "General / To Classify", "低", "Low", "Adnan Beker", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#MutlakGeçim", "综合/待分类", "General / To Classify", "低", "Low", "MutlakGeçim", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Leverkusen", "综合/待分类", "General / To Classify", "低", "Low", "Leverkusen", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Islam", "综合/待分类", "General / To Classify", "低", "Low", "Islam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sanada", "综合/待分类", "General / To Classify", "低", "Low", "Sanada", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Faik", "综合/待分类", "General / To Classify", "低", "Low", "Faik", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sizinde", "综合/待分类", "General / To Classify", "低", "Low", "Sizinde", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bağımsız", "综合/待分类", "General / To Classify", "低", "Low", "Bağımsız", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sevdiklerinizle", "综合/待分类", "General / To Classify", "低", "Low", "Sevdiklerinizle", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Bilmukabele", "综合/待分类", "General / To Classify", "低", "Low", "Bilmukabele", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("İstanbul Boğazı&#39;nda", "综合/待分类", "General / To Classify", "低", "Low", "İstanbul Boğazı&#39;nda", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Sağlıklı", "综合/待分类", "General / To Classify", "低", "Low", "Sağlıklı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
      ]),
      country("vn", "越南", "Vietnam", "https://trends24.in/vietnam/", [
        t("#TwentyFourRisingOrm", "综合/待分类", "General / To Classify", "低", "Low", "TwentyFourRisingOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KEEP THE LIGHT ORM", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "KEEP THE LIGHT ORM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#24thBDwishForOrm", "明星/粉丝应援", "Celebrity / Fandom", "低", "Low", "24thBDwishForOrm", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("YOKO AT KCL AWARDS 2026", "颁奖礼/红毯/盛典", "Awards / Red Carpet / Ceremony", "低", "Low", "YOKO AT KCL AWARDS 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#CharmissOrmazingParty", "综合/待分类", "General / To Classify", "低", "Low", "CharmissOrmazingParty", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("CHARMISS X ORM KORNNAPHAT", "品牌活动/消费", "Brand / Consumer", "低", "Low", "CHARMISS X ORM KORNNAPHAT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Eid Mubarak", "综合/待分类", "General / To Classify", "低", "Low", "Eid Mubarak", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Kickstart", "综合/待分类", "General / To Classify", "低", "Low", "Kickstart", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#WUTheSeriesEP4", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP4", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("#เก่งน้ําปิงคมชัดลึกครั้งที่22", "综合/待分类", "General / To Classify", "低", "Low", "เก่งน้ําปิงคมชัดลึกครั้งที่22", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KNP AT KCLA2026", "综合/待分类", "General / To Classify", "低", "Low", "KNP AT KCLA2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nóng", "综合/待分类", "General / To Classify", "低", "Low", "Nóng", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Nắng", "综合/待分类", "General / To Classify", "低", "Low", "Nắng", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("lingling mv good not enough", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "lingling mv good not enough", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Vietnam", "综合/待分类", "General / To Classify", "低", "Low", "Vietnam", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("ORIGINALS", "综合/待分类", "General / To Classify", "低", "Low", "ORIGINALS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("KOMCHADLUEK WITH FM", "综合/待分类", "General / To Classify", "低", "Low", "KOMCHADLUEK WITH FM", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Happy Eid", "综合/待分类", "General / To Classify", "低", "Low", "Happy Eid", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Unicity", "综合/待分类", "General / To Classify", "低", "Low", "Unicity", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""}),
        t("Base MCP", "综合/待分类", "General / To Classify", "低", "Low", "Base MCP", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":""})
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
