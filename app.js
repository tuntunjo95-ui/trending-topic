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
    summaryTitle: "2026-05-20 六国热点话题日报",
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
    summaryTitle: "2026-05-20 Six-Country Trend Brief",
    summaryPriority: "Priority: celebrity, drama, fashion, and festival topics in Thailand & Saudi; sports and consumer tech in Indonesia & Vietnam.",
    summaryRisk: "Risk watch: political/legal terms appear in Turkey & the Philippines; Saudi includes disaster/medical/religion-sensitive terms; Vietnam charity keywords need verification."
  }
};

const reports = [
  {
    date: "2026-05-21",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", "https://getdaytrends.com/indonesia/", [
        t("#MUFC", "体育/赛事", "Sports / Event", "低", "Low", "MUFC", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Bruno Fernandes", "体育/赛事", "Sports / Event", "低", "Low", "Bruno Fernandes", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Manchester United", "体育/赛事", "Sports / Event", "低", "Low", "Manchester United", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Arsenal", "体育/赛事", "Sports / Event", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Premier League", "体育/赛事", "Sports / Event", "低", "Low", "Premier League", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Champions League", "体育/赛事", "Sports / Event", "低", "Low", "Champions League", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Cristiano Ronaldo", "体育/赛事", "Sports / Event", "低", "Low", "Cristiano Ronaldo", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Messi", "体育/赛事", "Sports / Event", "低", "Low", "Messi", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#EXO", "音乐/明星", "Music / Celebrity", "低", "Low", "EXO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#JISUNG", "音乐/明星", "Music / Celebrity", "低", "Low", "JISUNG", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("AliExpress", "品牌活动/消费", "Brand / Consumer", "低", "Low", "AliExpress", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#RafahUnderAttack", "政治/冲突（谨慎）", "Politics / Conflict (Watch)", "关注", "Watch", "RafahUnderAttack", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Anies", "政治人物/公共议题（谨慎）", "Politics / Public Issue (Watch)", "关注", "Watch", "Anies", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"})
      ]),
      country("th", "泰国", "Thailand", "https://getdaytrends.com/thailand/", [
        t("#BUS_ดีใจที่ไม่มีเธอ_MV", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "BUS_ดีใจที่ไม่มีเธอ_MV", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#LOLFanFest2026LIVE", "游戏/电竞/活动", "Gaming / Esports / Event", "低", "Low", "LOLFanFest2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#LingDiorParfumsDinner", "品牌活动/时尚", "Brand / Fashion", "低", "Low", "LingDiorParfumsDinner", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("LINGLING BA DIOR FRAGRANCE", "品牌活动/时尚", "Brand / Fashion", "低", "Low", "LINGLING BA DIOR FRAGRANCE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#WUTheSeriesEP3", "剧集/综艺/娱乐", "Drama / Variety / Entertainment", "低", "Low", "WUTheSeriesEP3", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("NUNEW STILL OST LUAT", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "NUNEW STILL OST LUAT", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("PONDPHUWIN LOL2026 LIVE", "明星/艺人", "Celebrity / Artist", "低", "Low", "PONDPHUWIN LOL2026 LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("PERTHSANTA HIT THE TRACK", "明星/艺人", "Celebrity / Artist", "低", "Low", "PERTHSANTA HIT THE TRACK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("WILLIAMEST LOL 2026", "明星/艺人", "Celebrity / Artist", "低", "Low", "WILLIAMEST LOL 2026", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("FORCEBOOK MAFOX READY2RACE", "明星/艺人", "Celebrity / Artist", "低", "Low", "FORCEBOOK MAFOX READY2RACE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("TTP X CLEAR WATSONS", "品牌活动/消费", "Brand / Consumer", "低", "Low", "TTP X CLEAR WATSONS", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"})
      ]),
      country("ph", "菲律宾", "Philippines", "https://getdaytrends.com/philippines/", [
        t("#TREASURE_NEW_WAV_D11", "音乐/明星", "Music / Celebrity", "低", "Low", "TREASURE_NEW_WAV_D11", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("TAYO SA WAKAS TRAILER 2", "剧集/电影/预告", "Film / Drama / Trailer", "低", "Low", "TAYO SA WAKAS TRAILER 2", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#LOLFanFest2026LIVE", "游戏/电竞/活动", "Gaming / Esports / Event", "低", "Low", "LOLFanFest2026LIVE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("BGYO ON DEMAND GELO", "音乐/明星", "Music / Celebrity", "低", "Low", "BGYO ON DEMAND GELO", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("BINIxBLOOMS HANGGANG GLOBAL", "音乐/明星", "Music / Celebrity", "低", "Low", "BINIxBLOOMS HANGGANG GLOBAL", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("PFC2026 MV RELEASE", "音乐/演出/发布", "Music / Show / Release", "低", "Low", "PFC2026 MV RELEASE", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("FREDCESS X DANIEL CAESAR", "音乐/合作", "Music / Collab", "低", "Low", "FREDCESS DANIEL CAESAR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#CreamlineCoolSmashers", "体育/球队/联赛", "Sports / Team / League", "低", "Low", "CreamlineCoolSmashers", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#SSRMagazineCoverBiniverse", "明星/媒体/杂志", "Celebrity / Media / Magazine", "低", "Low", "SSRMagazineCoverBiniverse", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Pia Cayetano", "政治人物/公共议题（谨慎）", "Politics / Public Issue (Watch)", "关注", "Watch", "Pia Cayetano", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("DENR", "公共议题/政策机构（谨慎）", "Public Issue / Agency (Watch)", "关注", "Watch", "DENR", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"})
      ]),
      country("sa", "沙特", "Saudi Arabia", "https://getdaytrends.com/saudi-arabia/", [
        t("#السفر_مع_تركي", "生活方式/旅行", "Lifestyle / Travel", "低", "Low", "السفر_مع_تركي", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#دار_الاوبرا_الجديدة", "文化/演出/场馆", "Culture / Show / Venue", "低", "Low", "دار_الاوبرا_الجديدة", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#ساره_الودعاني", "明星/网红/生活方式", "Celebrity / Influencer", "低", "Low", "ساره_الودعاني", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#كتالوج_مايو", "购物/消费/促销", "Shopping / Consumer", "低", "Low", "كتالوج_مايو", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#التسوق_للصيف", "购物/消费/生活方式", "Shopping / Lifestyle", "低", "Low", "التسوق_للصيف", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#برسيل_اتوماتيك", "品牌/家居清洁", "Brand / Home Care", "低", "Low", "برسيل_اتوماتيك", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#العين_والهلال", "体育/赛事", "Sports / Event", "低", "Low", "العين_والهلال", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#جيش_اليمن", "政治/战争/争议（谨慎）", "Politics / Conflict (Watch)", "关注", "Watch", "جيش_اليمن", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"})
      ]),
      country("tr", "土耳其", "Turkey", "https://getdaytrends.com/turkey/", [
        t("Arsenal", "体育/赛事", "Sports / Event", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Arteta", "体育/赛事", "Sports / Event", "低", "Low", "Arteta", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Premier Lig", "体育/赛事", "Sports / Event", "低", "Low", "Premier Lig", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Manchester City", "体育/赛事", "Sports / Event", "低", "Low", "Manchester City", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("RESPECT JIMIN", "音乐/明星", "Music / Celebrity", "低", "Low", "RESPECT JIMIN", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#SüperLigTescilEdilmesin", "争议/体育判罚/对立（谨慎）", "Controversy / Sports (Watch)", "关注", "Watch", "SüperLigTescilEdilmesin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#TaksimMeydanı", "政治/社会议题（谨慎）", "Politics / Social (Watch)", "关注", "Watch", "TaksimMeydanı", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Muhalefeti Dinleyin", "政治/社会议题（谨慎）", "Politics / Social (Watch)", "关注", "Watch", "Muhalefeti Dinleyin", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Gazzeyi Unutma", "政治/战争/争议（谨慎）", "Politics / Conflict (Watch)", "关注", "Watch", "Gazzeyi Unutma", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("CHPYE OY MOY YOK", "政治/选举口号（谨慎）", "Politics / Election (Watch)", "关注", "Watch", "CHPYE OY MOY YOK", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"})
      ]),
      country("vn", "越南", "Vietnam", "https://getdaytrends.com/vietnam/", [
        t("Arsenal", "体育/赛事", "Sports / Event", "低", "Low", "Arsenal", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Manchester United", "体育/赛事", "Sports / Event", "低", "Low", "Manchester United", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Bruno Fernandes", "体育/赛事", "Sports / Event", "低", "Low", "Bruno Fernandes", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Premier League", "体育/赛事", "Sports / Event", "低", "Low", "Premier League", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Champions League", "体育/赛事", "Sports / Event", "低", "Low", "Champions League", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#BabyMonster", "音乐/明星", "Music / Celebrity", "低", "Low", "BabyMonster", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("#MINGYU", "音乐/明星", "Music / Celebrity", "低", "Low", "MINGYU", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"}),
        t("Nike", "品牌活动/消费", "Brand / Consumer", "低", "Low", "Nike", {"threadsTop":[],"threadsRecent":[],"tiktokTop":[],"tiktokRecent":[],"verifiedAt":"","verifier":"auto"})
      ])
    ]
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
