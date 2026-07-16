---
name: export-script
description: 📦 将完成的剧本导出为多种格式（PDF、DOCX、TXT、JSON等）
---

# /export-script — 导出剧本

## 描述
将已完成的剧本杀剧本导出为多种可用格式。支持导出完整剧本包、单文件合集、打印版和在线版。

## 用法
```
/export-script              # 交互式选择导出格式
/export-script "pdf"        # 导出为 PDF
/export-script "all"        # 导出所有格式
/export-script "json"       # 导出为 JSON 数据格式
```

## 导出格式

| 格式 | 用途 | 说明 |
|------|------|------|
| `pdf` | 打印/分发 | 带排版的专业 PDF |
| `docx` | 编辑 | Word 文档格式 |
| `txt` | 纯文本 | 无格式纯文本 |
| `html` | 在线预览 | 浏览器可读的 HTML |
| `json` | 数据交换 | 结构化数据格式 |
| `zip` | 完整包 | 包含所有物证图片和附件的压缩包 |

## 执行流程

```yaml
pipeline:
  - parallel:
    - task: 整理剧本正文
    - task: 整理角色剧本
    - task: 整理线索卡
    - task: 整理物证卡片
    - task: 整理 DM 指南

  - parallel:
    - task: 生成目标格式
      format: user-specified
    - task: 生成目录和索引

  - task: 输出到 output/export/
```

## 输出
- `output/export/<剧本名称>-<格式>/` 或
- `output/export/<剧本名称>-<格式>.zip`
