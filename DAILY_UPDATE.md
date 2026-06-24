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

- 2026-06-24：已生成 `2026-06-24-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号；由于执行环境无法直接抓外网，本次改用公开趋势页手工注入的前 30 条结果生成。
- 2026-06-23：已生成 `2026-06-23-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案与 `index.html` 资源版本号。
- 2026-06-22：已生成 `2026-06-22-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页摘要文案、`index.html` 资源版本号，以及 `scripts/daily_update.mjs` 的风险观察输出逻辑。
- 2026-06-20：已生成 `2026-06-20-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页默认原始报告链接与 `index.html` 资源版本号。
- 2026-06-19：已生成 `2026-06-19-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首条日报数据、首页原始报告链接与 `index.html` 资源版本号。
- 2026-06-18：已生成 `2026-06-18-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 报告数组、首页摘要文案与 `index.html` 资源版本号。
- 2026-06-17：已生成 `2026-06-17-六国X热点30条扩展筛选报告.md`，并更新 `app.js` 首页数据、摘要文案与 GitHub Pages 资源版本号。
