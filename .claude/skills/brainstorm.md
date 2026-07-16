---
name: brainstorm
description: 💡 进行创意头脑风暴，生成剧本杀的核心创意点子
---

# /brainstorm — 创意头脑风暴

## 描述
激发创意，生成剧本杀的核心创意点子。在正式开始创作前使用，帮助确定创作方向。

## 用法
```
/brainstorm                       # 自由头脑风暴
/brainstorm "古风"                # 指定类型的创意
/brainstorm "悬疑+情感" "6人"     # 指定类型和人数
/brainstorm "我想写一个民国背景的谍战本"  # 基于提示生成创意
```

## 创意维度

### 1. 核心诡计灵感
- 密室 / 身份互换 / 时间诡计 / 叙述诡计
- 心理诡计 / 机械装置 / 双胞胎 / 双面人生
- 循环 / 平行时空 / 梦境与现实

### 2. 故事背景灵感
- 古代宫廷 / 民国谍战 / 现代都市
- 赛博朋克 / 仙侠修真 / 末日废土
- 校园青春 / 家庭伦理 / 江湖武侠

### 3. 核心悬念点子
- "谁是凶手" 的基本悬念
- "为什么杀人" 的动机悬念
- "发生了什么" 的真相悬念
- "你究竟是谁" 的身份悬念

### 4. 反转点子
- 好人其实是幕后黑手
- 凶手不止一个人
- 受害者并非真正死亡
- 所有人都被骗了

## 执行流程

```yaml
parallel:
  - agent: story-architect
    task: 生成核心诡计点子 (5个)
  - agent: worldbuilder
    task: 生成世界观灵感 (5个)
  - agent: character-designer
    task: 生成角色设定灵感 (5组)
  - agent: plot-weaver
    task: 生成反转和悬念点子 (5个)

pipeline:
  - agent: story-architect
    task: 评估和整合创意
    depends_on: [all-brainstorms]
```

## 输出
- `brainstorm/concepts.md` — 创意点子合集
- `brainstorm/top-picks.md` — 推荐创意的详细扩展
