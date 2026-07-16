---
name: generate-dm-guide
description: 🎲 为剧本杀生成完整的主持人手册（DM指南）
---

# /generate-dm-guide — 生成 DM 指南

## 描述
为剧本杀生成完整的主持人手册。基于完成的剧本，生成可操作的主持指南，包括游戏流程、主持话术、时间管理、应急预案等。

## 用法
```
/generate-dm-guide
```

## 执行流程

### Step 1: 加载完成剧本
- 读取所有剧本文件和相关设计

### Step 2: Agent 编排

```yaml
pipeline:
  - agent: dm-guide-writer
    task: 编写游戏规则和基本信息

  - agent: dm-guide-writer
    task: 编写分幕主持指南

  - parallel:
    - agent: dm-guide-writer
      task: 编写关键节点引导
    - agent: dm-guide-writer
      task: 编写角色管理指南

  - parallel:
    - agent: dm-guide-writer
      task: 编写时间管理指南
    - agent: dm-guide-writer
      task: 编写应急预案

  - agent: dm-guide-writer
    task: 编写结局管理指南

  - agent: dm-guide-writer
    task: 整合和排版
```

### Step 3: 输出文件
- `dm-guide.md` — 完整 DM 指南
- `dm-guide/quick-ref.md` — 话术速查卡
- `dm-guide/timeline-sheet.md` — 时间管理表
- `dm-guide/emergency.md` — 应急预案
