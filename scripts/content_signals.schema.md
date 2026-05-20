# content_signals.json 说明（人工填充）

目的：把 **Threads / TikTok 的“已确认内容”**（例如 Top/Recent 下你看到的热门帖/视频链接）写回到日报与网页，避免自动抓取登录态页面导致失败或不稳定。

## 文件命名

- 建议：`scripts/content_signals_YYYY-MM-DD.json`
- 例如：`scripts/content_signals_2026-05-20.json`

## JSON 结构

```json
{
  "date": "2026-05-20",
  "note": "可选备注",
  "countries": {
    "id": {
      "topics": {
        "Arsenal": {
          "categoryZh": "体育/赛事",
          "categoryEn": "Sports / Event",
          "threadsTop": [
            "https://www.threads.com/@xxx/post/XXXXXXXX"
          ],
          "threadsRecent": [],
          "tiktokTop": [
            "https://www.tiktok.com/@xxx/video/1234567890"
          ],
          "tiktokRecent": [],
          "verifiedAt": "2026-05-20T09:00:00Z",
          "verifier": "manual"
        }
      }
    }
  }
}
```

## 规则

- `countries` key 使用国家 id：`id|th|ph|sa|tr|vn`
- `topics` 的 key **必须与报告/网页中的 topic 文本完全一致**（例如 `"Arsenal"`、`"#BINIFromPHToTheWorld"`）。
- 链接字段可为空数组；只要存在就会写入网页与 Markdown。
- `categoryZh/categoryEn` 是“二次确认”分类；会覆盖自动猜测分类（优先级最高）。

