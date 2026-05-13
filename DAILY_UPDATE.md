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

