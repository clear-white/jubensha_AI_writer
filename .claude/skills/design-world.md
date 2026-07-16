---
name: design-world
description: 🌍 构建剧本杀的世界观设定，包括时代背景、地点、文化和社会体系
---

# /design-world — 设计世界观

## 描述
构建剧本杀的详细世界观设定。调用 worldbuilder 和 story-architect Agent 协作完成。

## 用法
```
/design-world
/design-world "古风" "唐朝"  # 指定时代和背景
/design-world "赛博朋克" "2087年" "新上海"
```

## 执行流程

### Step 1: 创意引导
- 引导用户设定世界类型
- 确认关键时间、地点、氛围

### Step 2: Agent 编排

```yaml
parallel:
  - agent: worldbuilder
    task: 构建时代和地域设定
  - agent: worldbuilder
    task: 设计场景和地点

pipeline:
  - agent: worldbuilder
    task: 扩展文化和社会体系
    depends_on: [era-setup]

  - parallel:
    - agent: worldbuilder
      task: 设计主要场景详情
    - agent: worldbuilder
      task: 设计次要场景详情

  - agent: worldbuilder
    task: 撰写氛围和风格指南

  - agent: story-architect
    task: 将世界观融入剧情框架
```

### Step 3: 输出文件
- `world/setting.md` — 世界观总览
- `world/scenes/` — 场景设计
- `world/culture.md` — 文化体系
- `world/atmosphere.md` — 氛围风格指南
