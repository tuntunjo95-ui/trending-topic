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
    summaryTitle: "2026-05-15 六国热点话题日报",
    summaryPriority: "优先深挖：泰国、菲律宾、印尼的娱乐/明星/剧集/品牌活动。",
    summaryRisk: "风险观察：土耳其政治/司法/民族议题较多；菲律宾和印尼有政治公共议题；越南需补本地语言关键词。"
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
    summaryTitle: "2026-05-15 Six-Country Trend Brief",
    summaryPriority: "Priority: entertainment, celebrity, drama, and brand-event topics in Thailand, the Philippines, and Indonesia.",
    summaryRisk: "Risk watch: Turkey has more political, legal, and identity topics; the Philippines and Indonesia include public-political issues; Vietnam needs local-language enrichment."
  }
};

const reports = [
  {
    date: "2026-05-15",
    title: {
      zh: "六国 X 热点 30 条扩展筛选",
      en: "Six-Country X Trends: Top 30 Expanded Screening"
    },
    countries: [
      country("id", "印尼", "Indonesia", undefined, [
        t("Gibran Majukan Wisata Daerah", "综合/待分类", "General / To Classify", "低", "Low", "Gibran Majukan Wisata Daerah"),
        t("BBTF 2026", "综合/待分类", "General / To Classify", "低", "Low", "BBTF 2026"),
        t("#KAZZAWARDS2026xPondPhuwin", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "KAZZAWARDS2026xPondPhuwin"),
        t("PPP FAMILY KAZZAWARDS", "综合/待分类", "General / To Classify", "低", "Low", "PPP FAMILY KAZZAWARDS"),
        t("#Sk8erBoiYoshiDay", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "Sk8erBoiYoshiDay"),
        t("#요시를_사랑하는_515가지이유", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "요시를_사랑하는_515가지이유"),
        t("Nadiem", "综合/待分类", "General / To Classify", "低", "Low", "Nadiem"),
        t("#満天の想いが降り注ぐYOSHI_DAY", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "満天の想いが降り注ぐYOSHI_DAY"),
        t("BORN TO BE YOXI", "综合/待分类", "General / To Classify", "低", "Low", "BORN TO BE YOXI"),
        t("Bedrock", "综合/待分类", "General / To Classify", "低", "Low", "Bedrock"),
        t("Wapres Gibran", "综合/待分类", "General / To Classify", "低", "Low", "Wapres Gibran"),
        t("#山下智久xJUNGWON", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "山下智久xJUNGWON"),
        t("GRABFOOD X JOONGDUNK", "综合/待分类", "General / To Classify", "低", "Low", "GRABFOOD X JOONGDUNK"),
        t("Trade $KAIO", "综合/待分类", "General / To Classify", "低", "Low", "Trade $KAIO"),
        t("KOE OUT NOW", "综合/待分类", "General / To Classify", "低", "Low", "KOE OUT NOW"),
        t("kembalikan aset negara", "综合/待分类", "General / To Classify", "低", "Low", "kembalikan aset negara"),
        t("PERTH DOMIIA ENGAGE IN KAZZ", "综合/待分类", "General / To Classify", "低", "Low", "PERTH DOMIIA ENGAGE IN KAZZ"),
        t("Canton", "综合/待分类", "General / To Classify", "低", "Low", "Canton"),
        t("Revan", "综合/待分类", "General / To Classify", "低", "Low", "Revan"),
        t("Pagiii", "综合/待分类", "General / To Classify", "低", "Low", "Pagiii")
      ]),
      country("th", "泰国", "Thailand", undefined, [
        t("#KAZZAWARDS2026xDMD", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "KAZZAWARDS2026xDMD"),
        t("#ตฟวมารับรางวัลด้วยกันแล้วนะ", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ตฟวมารับรางวัลด้วยกันแล้วนะ"),
        t("#PerthSantaGlowTogether", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "PerthSantaGlowTogether"),
        t("PERTHSANTA BORN2SHINE", "综合/待分类", "General / To Classify", "低", "Low", "PERTHSANTA BORN2SHINE"),
        t("#แคสอวอร์ด2026Xอิงล็อต", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "แคสอวอร์ด2026Xอิงล็อต"),
        t("#BamBamXCannes2026", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "BamBamXCannes2026"),
        t("BE MY PLAYER TWO Q9 Q10", "综合/待分类", "General / To Classify", "低", "Low", "BE MY PLAYER TWO Q9 Q10"),
        t("CANNES CALLING HARIT", "综合/待分类", "General / To Classify", "低", "Low", "CANNES CALLING HARIT"),
        t("GRABFOOD X JOONGDUNK", "综合/待分类", "General / To Classify", "低", "Low", "GRABFOOD X JOONGDUNK"),
        t("NAMPING LIVE WITH LOREAL", "综合/待分类", "General / To Classify", "低", "Low", "NAMPING LIVE WITH LOREAL"),
        t("MR FANBOY Q12", "综合/待分类", "General / To Classify", "低", "Low", "MR FANBOY Q12"),
        t("knp x linearzdensity", "综合/待分类", "General / To Classify", "低", "Low", "knp x linearzdensity"),
        t("BECKY X CANNES FF26", "综合/待分类", "General / To Classify", "低", "Low", "BECKY X CANNES FF26"),
        t("ENGFA THE MAGNIFICENT15", "综合/待分类", "General / To Classify", "低", "Low", "ENGFA THE MAGNIFICENT15"),
        t("FORCEBOOK 1ST THEWALLSONG", "音乐/演出/粉丝内容", "Music / Show / Fandom", "低", "Low", "FORCEBOOK 1ST THEWALLSONG"),
        t("EMROBIC WITH FORCE", "综合/待分类", "General / To Classify", "低", "Low", "EMROBIC WITH FORCE"),
        t("WIN GLOWS IN CANNES", "综合/待分类", "General / To Classify", "低", "Low", "WIN GLOWS IN CANNES"),
        t("GEMINI IN CANNES FILM FEST26", "综合/待分类", "General / To Classify", "低", "Low", "GEMINI IN CANNES FILM FEST26"),
        t("TURNING OUR LIGHT INTO TKNUR", "综合/待分类", "General / To Classify", "低", "Low", "TURNING OUR LIGHT INTO TKNUR"),
        t("Winter Season EP1", "剧集/娱乐", "Drama / Entertainment", "低", "Low", "Winter Season EP1")
      ]),
      country("ph", "菲律宾", "Philippines", undefined, [
        t("TABI OUT NOW", "综合/待分类", "General / To Classify", "低", "Low", "TABI OUT NOW"),
        t("Bato", "综合/待分类", "General / To Classify", "低", "Low", "Bato"),
        t("#Sk8erBoiYoshiDay", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "Sk8erBoiYoshiDay"),
        t("#요시를_사랑하는_515가지이유", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "요시를_사랑하는_515가지이유"),
        t("BORN TO BE YOXI", "综合/待分类", "General / To Classify", "低", "Low", "BORN TO BE YOXI"),
        t("WILBEA WITH HONOR600", "综合/待分类", "General / To Classify", "低", "Low", "WILBEA WITH HONOR600"),
        t("#KAZZAWARDS2026", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "KAZZAWARDS2026"),
        t("Senate", "综合/待分类", "General / To Classify", "政治/争议", "Political / Controversy", "Senate"),
        t("#山下智久xJUNGWON", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "山下智久xJUNGWON"),
        t("#ジョンウォン", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "ジョンウォン"),
        t("Cayetano", "综合/待分类", "General / To Classify", "低", "Low", "Cayetano"),
        t("Senado", "综合/待分类", "General / To Classify", "低", "Low", "Senado"),
        t("GSIS", "综合/待分类", "General / To Classify", "低", "Low", "GSIS"),
        t("OSAA", "综合/待分类", "General / To Classify", "低", "Low", "OSAA"),
        t("Pilipinas", "综合/待分类", "General / To Classify", "低", "Low", "Pilipinas"),
        t("vote wilbert for juancast", "综合/待分类", "General / To Classify", "低", "Low", "vote wilbert for juancast"),
        t("Pananabik", "综合/待分类", "General / To Classify", "低", "Low", "Pananabik"),
        t("Robin", "综合/待分类", "General / To Classify", "低", "Low", "Robin"),
        t("BECKY X CANNES FF26", "综合/待分类", "General / To Classify", "低", "Low", "BECKY X CANNES FF26"),
        t("Pilipino", "综合/待分类", "General / To Classify", "低", "Low", "Pilipino")
      ]),
      country("sa", "沙特", "Saudi Arabia", undefined, [
        t("#اوقف_مصحفا_للحجاج_يوم_عرفه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "اوقف_مصحفا_للحجاج_يوم_عرفه"),
        t("#يوم_الجمعه", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "يوم_الجمعه"),
        t("#الاتحاد_الاتفاق", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "الاتحاد_الاتفاق"),
        t("علي النبي", "综合/待分类", "General / To Classify", "低", "Low", "علي النبي"),
        t("#قنوات_عين", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "قنوات_عين"),
        t("#الاصلي_يفرق", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "الاصلي_يفرق"),
        t("عنابي سدير", "综合/待分类", "General / To Classify", "低", "Low", "عنابي سدير"),
        t("النسخه الاضعف", "综合/待分类", "General / To Classify", "低", "Low", "النسخه الاضعف"),
        t("علي محمد", "综合/待分类", "General / To Classify", "低", "Low", "علي محمد"),
        t("الفلفل الوردي", "综合/待分类", "General / To Classify", "低", "Low", "الفلفل الوردي"),
        t("جزر القمر", "综合/待分类", "General / To Classify", "低", "Low", "جزر القمر"),
        t("موسي ديابي", "综合/待分类", "General / To Classify", "低", "Low", "موسي ديابي"),
        t("اليوم الفضيل", "综合/待分类", "General / To Classify", "低", "Low", "اليوم الفضيل"),
        t("نور مابين الجمعتين", "综合/待分类", "General / To Classify", "低", "Low", "نور مابين الجمعتين"),
        t("الرييس الصيني", "综合/待分类", "General / To Classify", "低", "Low", "الرييس الصيني"),
        t("علي العروض القويه", "综合/待分类", "General / To Classify", "低", "Low", "علي العروض القويه"),
        t("اللهم الخلود", "综合/待分类", "General / To Classify", "低", "Low", "اللهم الخلود"),
        t("يلو اسيا", "综合/待分类", "General / To Classify", "低", "Low", "يلو اسيا"),
        t("الاسعار الجديده", "综合/待分类", "General / To Classify", "低", "Low", "الاسعار الجديده"),
        t("سلم علي", "综合/待分类", "General / To Classify", "低", "Low", "سلم علي")
      ]),
      country("tr", "土耳其", "Turkey", undefined, [
        t("#SeçimiKademeBelirler", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "SeçimiKademeBelirler"),
        t("Rasim Ozan Kütahyalı", "综合/待分类", "General / To Classify", "低", "Low", "Rasim Ozan Kütahyalı"),
        t("#perşembe", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "perşembe"),
        t("Kim Özleyecek", "综合/待分类", "General / To Classify", "低", "Low", "Kim Özleyecek"),
        t("Hayırlı Cumalar", "综合/待分类", "General / To Classify", "低", "Low", "Hayırlı Cumalar"),
        t("#EsnafıDeğilFaiziBitir", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "EsnafıDeğilFaiziBitir"),
        t("Tarkan", "综合/待分类", "General / To Classify", "低", "Low", "Tarkan"),
        t("#AKGençlikGeliyor", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "AKGençlikGeliyor"),
        t("#tamartutuklansın", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "tamartutuklansın"),
        t("DenklikYoksa GelecekYok", "综合/待分类", "General / To Classify", "低", "Low", "DenklikYoksa GelecekYok"),
        t("Özgür Çelik", "综合/待分类", "General / To Classify", "低", "Low", "Özgür Çelik"),
        t("Sinan Akçıl", "综合/待分类", "General / To Classify", "低", "Low", "Sinan Akçıl"),
        t("AlparslanHoca AnkarayaGeliyor", "综合/待分类", "General / To Classify", "低", "Low", "AlparslanHoca AnkarayaGeliyor"),
        t("Emine Erdoğan", "综合/待分类", "General / To Classify", "低", "Low", "Emine Erdoğan"),
        t("kadın milletvekilleri", "综合/待分类", "General / To Classify", "低", "Low", "kadın milletvekilleri"),
        t("Bakanlık Randevusu Alın", "综合/待分类", "General / To Classify", "低", "Low", "Bakanlık Randevusu Alın"),
        t("Merkez Bankası", "综合/待分类", "General / To Classify", "低", "Low", "Merkez Bankası"),
        t("kadın belediye başkanları", "综合/待分类", "General / To Classify", "低", "Low", "kadın belediye başkanları"),
        t("Muçi", "综合/待分类", "General / To Classify", "低", "Low", "Muçi"),
        t("Bir Gençlik Şöleni", "综合/待分类", "General / To Classify", "低", "Low", "Bir Gençlik Şöleni")
      ]),
      country("vn", "越南", "Vietnam", undefined, [
        t("Lụm Lúa", "综合/待分类", "General / To Classify", "低", "Low", "Lụm Lúa"),
        t("#jeddahMassage", "话题标签/待分类", "Hashtag / To Classify", "成人/低质广告风险", "Adult / Low-Quality Ad Risk", "jeddahMassage"),
        t("#riyadh", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "riyadh"),
        t("mạch", "综合/待分类", "General / To Classify", "低", "Low", "mạch"),
        t("luận", "综合/待分类", "General / To Classify", "低", "Low", "luận"),
        t("Thứ 6", "综合/待分类", "General / To Classify", "低", "Low", "Thứ 6"),
        t("#KAZZAWARDS2026xPerth", "话题标签/待分类", "Hashtag / To Classify", "低", "Low", "KAZZAWARDS2026xPerth"),
        t("PERTH DOMIIA ENGAGE IN KAZZ", "综合/待分类", "General / To Classify", "低", "Low", "PERTH DOMIIA ENGAGE IN KAZZ"),
        t("Extended", "综合/待分类", "General / To Classify", "低", "Low", "Extended"),
        t("Chào", "综合/待分类", "General / To Classify", "低", "Low", "Chào"),
        t("Biased", "综合/待分类", "General / To Classify", "低", "Low", "Biased"),
        t("Evaluating", "综合/待分类", "General / To Classify", "低", "Low", "Evaluating"),
        t("Ngày", "综合/待分类", "General / To Classify", "低", "Low", "Ngày"),
        t("Obvious", "综合/待分类", "General / To Classify", "低", "Low", "Obvious"),
        t("Timely", "综合/待分类", "General / To Classify", "低", "Low", "Timely"),
        t("Lasting", "综合/待分类", "General / To Classify", "低", "Low", "Lasting"),
        t("Questioning", "综合/待分类", "General / To Classify", "低", "Low", "Questioning"),
        t("Uncertain", "综合/待分类", "General / To Classify", "低", "Low", "Uncertain"),
        t("Minor", "综合/待分类", "General / To Classify", "低", "Low", "Minor")
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

function country(id, zh, en, sourceUrl, topics) {
  return { id, name: { zh, en }, sourceUrl, topics };
}

function t(topic, typeZh, typeEn, riskZh, riskEn, query) {
  const encoded = encodeURIComponent(query);
  return {
    topic,
    type: { zh: typeZh, en: typeEn },
    risk: { zh: riskZh, en: riskEn },
    riskKey: riskEn === "Low" || riskEn.startsWith("Low /") ? "low" : "watch",
    query,
    tiktok: `https://www.tiktok.com/search?q=${encoded}`,
    threads: `https://www.threads.com/search?q=${encoded}`
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
}

function renderReportList() {
  const wrap = document.querySelector("#reportList");
  wrap.innerHTML = reports
    .map((report, index) => `
      <button class="report-item ${index === state.reportIndex ? "active" : ""}" data-report-index="${index}" type="button">
        <span>${report.date}</span>
        <small>${localized(report.title)}</small>
      </button>
    `)
    .join("");

  wrap.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.reportIndex = Number(button.dataset.reportIndex);
      state.report = reports[state.reportIndex];
      state.country = "all";
      state.risk = "all";
      state.search = "";
      document.querySelector("#searchInput").value = "";
      document.querySelectorAll("[data-risk]").forEach((item) => item.classList.toggle("active", item.dataset.risk === "all"));
      render();
    });
  });
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
