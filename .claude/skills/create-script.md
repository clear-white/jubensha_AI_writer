---
name: create-script
description: 🔥 交互式引导创建完整剧本杀剧本，从创意到成品一站式完成
---

# /create-script — 一键创建完整剧本

## 描述
交互式引导创建完整的剧本杀剧本。从创意构思到成品输出，一站式完成全部创作流程。系统会引导你输入关键信息，然后自动编排多 Agent 协作完成创作。

## 用法
```
/create-script
/create-script "标题" "类型" "人数"
/create-script "标题" "类型" "人数" "难度"
```

## 参数
- `标题`（可选）：剧本名称
- `类型`（可选）：本格/变格/情感/机制/恐怖/欢乐
- `人数`（可选）：4-8 人
- `难度`（可选）：新手/进阶/硬核

## 执行流程

### Phase 1: 信息收集
1. 引导用户输入剧本基本信息
2. 确认核心创意方向和风格偏好
3. 记录到 memory 系统

### Phase 2: 世界观构建（Agent: worldbuilder）
1. 调用 worldbuilder agent 设计世界观
2. 生成 world.md
3. 连续性引擎初步验证

### Phase 3: 故事架构（Agent: story-architect）
1. 调用 story-architect agent 设计核心诡计
2. 生成 synopsis.md 和剧情大纲
3. 连续性引擎验证

### Phase 4: 角色设计（Agent: character-designer）
1. 调用 character-designer agent 创建角色
2. 生成 characters/ 目录下所有角色档案
3. 角色关系图谱

### Phase 5: 剧情编织（Agent: plot-weaver）
1. 调用 plot-weaver agent 编织时间线和事件链
2. 生成 timeline.md 和事件规划

### Phase 6: 线索设计（Agent: clue-designer）
1. 调用 clue-designer agent 设计线索系统
2. 生成 clues/ 目录下所有线索

### Phase 7: 剧本撰写（Agent: script-writer + dialogue-writer）
1. 调用 script-writer 撰写剧本正文
2. 调用 dialogue-writer 完善对白
3. 生成完整的 script.md 和角色剧本

### Phase 8: 道具设计（Agent: props-designer）
1. 调用 props-designer 设计物证和道具
2. 生成 props/ 目录下物料

### Phase 9: 审核优化（Agent: reviewer + continuity-engine）
1. 连续性引擎全量检查
2. reviewer 多维度审核
3. 修复发现问题

### Phase 10: DM 指南（Agent: dm-guide-writer）
1. 调用 dm-guide-writer 生成主持人手册
2. 生成 dm-guide.md

### Phase 11: 成品输出
1. 整理所有文件到 output/ 目录
2. 生成剧本概览 README
3. 输出完成报告

## 输出
在 `output/<剧本名称>/` 目录下生成完整的剧本包。
