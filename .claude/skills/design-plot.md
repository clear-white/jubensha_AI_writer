---
name: design-plot
description: 📖 设计剧本杀的剧情架构，包括核心诡计、时间线、事件链和反转
---

# /design-plot — 设计剧情架构

## 描述
设计剧本杀的剧情架构。包括核心诡计设计、时间线规划、事件链编织和反转设计。此命令会启动 story-architect 和 plot-weaver 两个 Agent 协作完成。

## 用法
```
/design-plot
/design-plot "剧本标题"
```

## 执行流程

### Step 1: 创意确认
- 如果已有世界观设定，加载并参考
- 引导确认核心诡计方向

### Step 2: Agent 编排

```yaml
parallel:
  - agent: story-architect
    task: 设计核心诡计
    depends_on: []
  - agent: plot-weaver
    task: 设计时间线框架
    depends_on: []

pipeline:
  - agent: story-architect
    task: 完善剧情大纲
    depends_on: [core-trick]
  - agent: plot-weaver
    task: 详细时间线和事件链
    depends_on: [synopsis]
  - agent: continuity-engine
    task: 验证剧情一致性
    depends_on: [timeline, synopsis]
```

### Step 3: 输出文件
- `synopsis.md` — 剧情大纲
- `timeline.md` — 绝对时间线
- `tricks.md` — 核心诡计说明
- `plot-structure.md` — 剧情结构图

## 输出
生成剧情架构相关文档到 `output/<剧本名称>/`。
