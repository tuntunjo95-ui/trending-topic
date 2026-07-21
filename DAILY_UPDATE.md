# 每日更新说明

这个网页已经支持按日期查看报告。

## 每天需要更新的内容

每天生成新报告后，在 `app.js` 的 `reports` 数组最前面追加一条新的日报数据。

建议规则：

- 最新日期放在数组最前面。
- 每条日报保留 `date`、`title`、`countries`、`priorities`。
- 每个国家保留筛选后的选题，不需要把 30 条原始趋势全部放进网页。
- 原始完整报告继续单独保存成 Markdown 文件，方便下载或审计。

## 发布到外部网址

如果用 Netlify Drop：

1. 每天更新本地文件。
2. 把整个文件夹重新拖到 Netlify Drop。
3. 如果使用同一个 Netlify 站点，需要在 Netlify 后台重新部署该站点。

如果用 GitHub Pages：

1. 把这个文件夹放进一个 GitHub 仓库。
2. 每天更新后提交并推送。
3. GitHub Pages 会自动更新同一个外部网址。

长期建议使用 GitHub Pages 或 Netlify Git 部署，因为它们能保留同一个网址并自动更新。

## GitHub Pages 自动推送

当前站点地址：

```text
https://tuntunjo95-ui.github.io/trending-topic/
```

本地仓库已连接到：

```text
git@github-trending-topic:tuntunjo95-ui/trending-topic.git
```

每日自动任务会在生成报告后执行：

```text
git pull --rebase origin main
git add index.html app.js styles.css DAILY_UPDATE.md *.md
git commit -m "Update trend report YYYY-MM-DD"
git push origin main
```

要让自动推送生效，需要在 GitHub 仓库中添加本机生成的 Deploy Key，并勾选写入权限。

## 最新执行

- 2026-07-21：已生成 `2026-07-21-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留印尼 Shopee/优惠券/SDC Fest/SF 影院联动/PerthSanta/世界杯足球词，泰国 KNP/TMK/ThomasKong/PerthSanta/SF/TFO/La Roche-Posay/LingOrm/Boots 等明星品牌活动，菲律宾 Dino/BTS/BINI/PerthSanta/Ashtine/Gelix/Marvel/Allstar Con 音乐剧综粉丝词，沙特 Argentina-Spain/World Cup/Messi/Torres/Yamal/Roshn League 体育词，土耳其 Galaxy/ESPvsARG/Galatasaray/Messi/Leao 等体育科技词，越南 LingOrm/JUHOON/CORTIS/PerthSanta/BTS/James Reigns 粉丝词，同时将印尼公共经济政策与司法争议、沙特金融代办广告和地区航运安全、土耳其历史政治/教育/博彩广告、越南 Web3 与地区议题放入风险观察。
- 2026-07-20：远端 `origin/main` 已包含 `2026-07-20-六国X热点30条扩展筛选报告.md` 和对应网页数据；本次 rebase 保留远端 7 月 20 日版本，仅把 2026-07-21 日报追加到历史最前面。
- 2026-07-19：已生成 `2026-07-19-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留印尼 GoPay/Point Coffee、France-England 足球和 PeachAndMe 话题，泰国 PeachAndMe/PerthSanta/TENCORE/LingOrm/品牌明星活动，菲律宾 PerthSanta/Jungkook/NCT127/Ashtine/BGYO/Kolette 等音乐剧综粉丝词，沙特 France-England/World Cup/Rashford/Arsenal/Mbappé 等体育词，土耳其 FRAENG/Fenerbahçe/Mbappé/Tuchel/Saka/Jungkook 等体育音乐词，越南 LingOrm/PerthSanta/PeachAndMe/PYPD/CORTIS/JAMES/Martin/Seonghyeon 巡演粉丝词，同时将印尼币圈广告、菲律宾政治公共政策、沙特贷款金融广告和公共公益口号、土耳其 Gaza 国际政治/劳工政策/地区议题放入风险观察。
- 2026-07-18：已生成 `2026-07-18-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留印尼 Kopi Kenangan x NCT Haechan、Motorola Razr Fold/Unfold Flawless、PerthSanta、A Dog and A Plane、LingOrm/Wonwoo 相关娱乐品牌话题，泰国剧集/演唱会/明星品牌活动，菲律宾 JWW/Wonwoo、NCT127 Manila、HEATHJORNALES、The Alibi、SB19 Ken 等音乐剧综粉丝词，沙特 Naqahwikum 应用和 Messi/Samu Costa/Benfica/Tuchel 等体育词，土耳其 Bruno/Beşiktaş/转会体育、媒体和音乐名人话题，越南 LingOrm ILF EP5 和 Chloé，同时将印尼公共口号、沙特宗教/刷榜广告/公共安全/地区政治、土耳其法律政治教育和犯罪争议放入风险观察。
- 2026-07-17：已生成 `2026-07-17-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留印尼 Motorola/Razr Fold、Wonwoo/K-pop、SF x JoongDunk/Phuwin 品牌粉丝活动，泰国 TENCORE/Engfa/Charlotte/LingOrm/Nespresso/True5G/GrabFood/剧集活动，菲律宾 Wonwoo/JWW、HEATHJORNALES、JolliBINI、Dustbia、SB19 Ken、Carmelle 等音乐剧综粉丝词，沙特 Qalamsi 应用和 Messi/Argentina-England/Tuchel/football 体育词，土耳其转会体育、音乐、名人话题，越南 LingOrm x Nespresso、JDJAIDEE x SF Moana 和 Chloé 品牌词，同时将印尼公共民生和政治人物、泰国福利政策、菲律宾政治口号、沙特广告/宗教公益/国际政治、土耳其法律政治和粉丝维权争议放入风险观察。
- 2026-07-16：已生成 `2026-07-16-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留印尼/沙特/土耳其/越南/菲律宾的 Argentina-England 世界杯、Messi/Tuchel/球员和俱乐部体育词、泰国剧集粉丝和品牌活动、菲律宾 JolliBINI/K-pop/SB19/剧综话题、越南 Ditto/MilkLove/TAG Heuer x Faye/粉丝应援，同时将菲律宾政治人物、沙特体育交易争议、土耳其政治公共议题、越南币圈和健康医疗相关应援放入风险观察。
- 2026-07-15：已生成 `2026-07-15-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留印尼/沙特/土耳其/菲律宾/越南的西班牙-法国足球赛事词、泰国剧集粉丝和品牌活动、菲律宾 JolliBINI/SB19/BIGBANG/剧综话题、越南 LingOrm/ITSSKIN/Sphere/粉丝应援，同时将菲律宾政治法律、沙特刷榜广告和地区政治、土耳其纪念政治/Gaza 议题、越南低语义和币圈词放入风险观察。
- 2026-07-14：已生成 `2026-07-14-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留印尼 PeachAndMe/影视明星/足球词、泰国 Hug E Lhee/PeachAndMe/Engfa/Charlotte/品牌粉丝活动、菲律宾 Aiah/SB19/ENHYPEN/SEVENTEEN/ALPHAS 音乐粉丝话题、沙特 WWE/Galaxy/体育和旅游词、土耳其 Fenerbahçe 转会体育词、越南 BYD/LingLing/Dior/Sphere/Louis Phạm/Filmracha 等品牌娱乐词，同时将印尼反腐司法和币圈词、泰国火灾、菲律宾 VP 审判、沙特婚恋广告与地缘军事词、土耳其政治劳工安全词、越南币圈和成人广告词放入风险观察。
- 2026-07-13：已生成 `2026-07-13-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留印尼 Galaxy/Fold/Oishi 品牌与足球词、泰国 BYD x LingLing/粉丝会/剧集/品牌活动、菲律宾 SB19/BINI/G22/OPM 音乐粉丝话题、沙特体育词、土耳其音乐/体育/剧集词和越南明星品牌/剧集/生活方式词，同时将印尼公共民生和币圈词、泰国火灾、沙特本地争议与法律公共政策、土耳其公共机构/政治/灾害/粉丝维权/赌博广告词放入风险观察。
- 2026-07-12：已生成 `2026-07-12-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留印尼英格兰/挪威足球池、泰国剧集/演唱会/品牌明星联动、菲律宾 SB19/BINI/OPM 与粉丝应援、沙特体育词、土耳其足球词和越南剧集/体育/明星词，同时将印尼粉丝维权、沙特法律公共政策词、土耳其历史纪念/政治安全/成人广告词放入风险观察。
- 2026-07-11：已生成 `2026-07-11-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留 Shopee/Samsung/Oishi 等品牌活动、泰国和菲律宾剧集粉丝话题、沙特/土耳其/印尼足球赛事词、土耳其音乐文化人物和越南剧集词，同时将印尼公共治理、沙特外交地区议题、土耳其国际政治与粉丝维权、越南币圈广告词放入风险观察。
- 2026-07-10：已生成 `2026-07-10-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留 Shopee/Jollibee 等品牌促销、泰国娱乐品牌联动、菲律宾粉丝音乐、法国/摩洛哥足球赛事和越南时尚品牌词，同时将印尼公共治理、土耳其劳工政治、沙特赛事争议和剧透争议放入风险观察。
- 2026-07-09：已生成 `2026-07-09-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留品牌促销、剧集音乐、明星粉丝、体育赛事和本地生活方式选题，同时将政治法律、地缘军事、低质广告、金融投机和争议话题放入风险观察。
- 2026-07-02：已生成 `2026-07-02-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次在提权网络环境中使用 Trends24 公开页面抓取六国前 30 条结果，并新增当天分类/风险覆盖文件，重点保留娱乐、体育、明星、品牌活动和生活方式选题，同时将政治、纪念、宗教/社会争议、低质刷量和金融投机词放入风险观察。
- 2026-07-01：已生成 `2026-07-01-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次本地 Node 抓取受限，改用 GetDayTrends 公开页面手工快照注入六国前 30 条结果，并新增当天分类/风险覆盖文件。
- 2026-06-30：已生成 `2026-06-30-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，新增当天分类/风险覆盖文件，并为保留选题增加去重与品牌明星活动过滤支持。
- 2026-06-29：已生成 `2026-06-29-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，新增当天分类/风险覆盖文件，并修正趋势文本 HTML 实体解码。
- 2026-06-28：已生成 `2026-06-28-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 Trends24 公开页面抓取六国前 30 条结果，新增当天分类/风险覆盖文件。
- 2026-06-27：已生成 `2026-06-27-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号和 `status.json`；本次使用 GetDayTrends 公开页面注入六国前 30 条结果，新增当天手工趋势快照和分类/风险覆盖文件。
- 2026-06-26：已生成 `2026-06-26-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号；本次使用 GetDayTrends 公开页面手工注入六国前 30 条结果，新增当天分类/风险覆盖文件，并调整生成脚本让人工分类先于跨国过滤生效。
- 2026-06-25：已生成 `2026-06-25-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号；本次使用 GetDayTrends 公开页面手工注入六国前 30 条结果，并增加当天分类/风险覆盖文件。
- 2026-06-24：已生成 `2026-06-24-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号；由于执行环境无法直接抓外网，本次改用公开趋势页手工注入的前 30 条结果生成。
- 2026-06-23：已生成 `2026-06-23-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案与 `index.html` 资源版本号。
- 2026-06-22：已生成 `2026-06-22-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号，以及 `scripts/daily_update.mjs` 的风险观察输出逻辑。
- 2026-06-20：已生成 `2026-06-20-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页默认原始报告链接与 `index.html` 资源版本号。
- 2026-06-19：已生成 `2026-06-19-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页原始报告链接与 `index.html` 资源版本号。
- 2026-06-18：已生成 `2026-06-18-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 报告数组、首页摘要文案与 `index.html` 资源版本号。
- 2026-06-17：已生成 `2026-06-17-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首页数据、摘要文案与 GitHub Pages 资源版本号。
