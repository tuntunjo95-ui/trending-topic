# classification_overrides.json 说明（人工二次确认）

目的：对趋势话题做“二次确认分类”，**不依赖原始 hashtag/文本猜测**。你可以通过翻译/搜索确认后，把结论写到这里，生成器会覆盖网页与 Markdown 的分类字段。

## 文件命名

- 建议：`scripts/classification_overrides_YYYY-MM-DD.json`
- 例如：`scripts/classification_overrides_2026-05-20.json`

## JSON 结构

```json
{
  "date": "2026-05-20",
  "note": "可选备注",
  "countries": {
    "id": {
      "topics": {
        "Arsenal": {
          "typeZh": "体育/赛事",
          "typeEn": "Sports / Event",
          "riskZh": "低",
          "riskEn": "Low",
          "reason": "英超相关；TikTok/Threads 有大量内容响应",
          "source": "manual-search"
        }
      }
    }
  }
}
```

## 规则

- `topics` key 必须与网页中的 topic 文本完全一致。
- 只写你确认过的条目；未出现的条目保持自动推断。

