---
name: write-script
description: ✍️ 撰写剧本杀的完整剧本正文，包括分幕、对白、行动指令和角色剧本
---

# /write-script — 撰写剧本正文

## 描述
撰写剧本杀的完整剧本正文。基于已有的世界观、剧情、角色和线索设计，整合输出可供实际游玩的剧本。

## 用法
```
/write-script
/write-script "输出格式"
```

## 执行流程

### Step 1: 加载所有设计
- 读取世界观、剧情、角色、线索等所有设计文档

### Step 2: Agent 编排

```yaml
pipeline:
  - agent: script-writer
    task: 撰写开场白和背景引入

  - parallel:
    - agent: script-writer
      task: 撰写第一幕剧本
    - agent: script-writer
      task: 撰写角色1的独有剧本
    - agent: script-writer
      task: 撰写角色2的独有剧本

  - parallel:
    - agent: dialogue-writer
      task: 撰写NPC对话脚本
    - agent: dialogue-writer
      task: 撰写角色对白提示

  - parallel:
    - agent: script-writer
      task: 撰写第二幕剧本
    - agent: script-writer
      task: 更新各角色剧本（第二幕信息）

  - agent: script-writer
    task: 撰写多结局演绎

  - agent: props-designer
    task: 设计物证和配套物料

  - agent: continuity-engine
    task: 全量一致性检查

  - agent: reviewer
    task: 初版审核
```

### Step 3: 输出文件
- `scripts/script.md` — 完整剧本正文
- `scripts/player-<角色名>.md` — 每个角色的独有剧本
- `scripts/npc-dialogues.md` — NPC对话脚本
- `scripts/endings.md` — 多结局演绎脚本
