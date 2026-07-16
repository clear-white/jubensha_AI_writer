---
name: design-clues
description: 🔍 设计剧本杀的线索系统，包括证据链、推理路径和关卡设计
---

# /design-clues — 设计线索系统

## 描述
设计剧本杀的完整线索系统。基于剧情和角色设计，构建证据链、规划推理路径、控制线索投放节奏。

## 用法
```
/design-clues
/design-clues "难度"
```

## 执行流程

### Step 1: 加载已有设计
- 读取剧情、时间线、角色档案
- 确定线索密度和难度目标

### Step 2: Agent 编排

```yaml
pipeline:
  - agent: clue-designer
    task: 设计线索总表
    output: clues/master-list.md

  - parallel:
    - agent: clue-designer
      task: 设计物证线索
      context: "物证类"
    - agent: clue-designer
      task: 设计人证线索
      context: "人证类"
    - agent: clue-designer
      task: 设计场景线索
      context: "场景类"

  - agent: clue-designer
    task: 构建证据链关联
    depends_on: [all-clues]

  - agent: clue-designer
    task: 规划每轮线索投放
    depends_on: [clue-relationships]

  - agent: continuity-engine
    task: 验证线索完整性
```

### Step 3: 输出文件
- `clues/master-list.md` — 线索总表
- `clues/evidence-<n>.md` — 每个线索卡
- `clues/chains.md` — 证据链图谱
- `clues/investigation-paths.md` — 推理路径图
- `clues/round-distribution.md` — 每轮投放表

## 难度参考
| 难度 | 总线索数 | 误导比例 | 隐藏深度 |
|------|---------|---------|---------|
| 新手 | 15-20 | <20% | 浅 |
| 进阶 | 25-35 | 20-30% | 中 |
| 硬核 | 35-50 | 30-40% | 深 |
