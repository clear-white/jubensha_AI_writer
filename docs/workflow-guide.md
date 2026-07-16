# 工作流指南

## 什么是工作流

工作流是本系统的核心编排机制。通过 `Workflow` 工具，将多个 Agent 按照确定的顺序和依赖关系组织起来，自动完成复杂的创作任务。

## 工作流 vs 手动调用

| 特性 | 工作流 | 手动调用 |
|------|--------|---------|
| 自动化程度 | 全自动 | 半自动 |
| 执行效率 | 并行执行 | 串行执行 |
| 错误处理 | 内置重试和恢复 | 手动处理 |
| 适用场景 | 完整创作流程 | 单步操作 |

## 工作流类型

### 1. 全流程工作流
从创意到成品，一站式完成。

```javascript
// 伪代码示意
Phase 1: 并行创意生成
  - worldbuilder → 世界观创意
  - story-architect → 诡计创意

Phase 2: 串行架构设计
  - story-architect → 剧情大纲
  - character-designer → 角色体系

Phase 3: 并行详细设计
  - plot-weaver → 时间线
  - clue-designer → 线索系统

Phase 4: 剧本撰写
  - script-writer + dialogue-writer → 完整剧本

Phase 5: 审核
  - continuity-engine → 一致性检查
  - reviewer → 多维度评审

Phase 6: 收尾
  - dm-guide-writer → DM指南
  - 导出成品
```

### 2. 阶段工作流
只执行创作中的某一个阶段。

- `plot-design-workflow`：仅执行剧情设计阶段
- `character-creation-workflow`：仅执行角色创建阶段
- `clue-design-workflow`：仅执行线索设计阶段
- `review-workflow`：仅执行审核阶段

### 3. 自定义工作流
根据需求组合任意 Agent。

## 工作流编排原则

### 依赖管理
- 明确每个步骤的输入依赖（需要哪些前置文件）
- 明确每个步骤的输出产物（生成哪些新文件）
- 无依赖的步骤始终并行执行

### 检查点
- 每个阶段结束后设置检查点
- 关键节点自动触发连续性引擎
- 严重问题自动暂停并通知用户

### 错误恢复
- Agent 调用失败：自动重试 1 次
- 连续失败：跳过该步骤，记录到问题清单
- 检查点失败：暂停流程，等待用户处理

## 使用场景

### 场景1：快速创作标准剧本
```bash
/create-script "山村老宅" "恐怖悬疑" "6人" "进阶"
```
→ 自动执行全流程工作流，约2-3小时产出完整剧本

### 场景2：在已有剧本基础上迭代
```bash
/review-script
# 根据审核结果修改
/design-clues  # 重新设计线索系统
/write-script  # 重新撰写剧本
```

### 场景3：特定环节优化
```bash
# 只执行角色创建和审核
/create-characters "6"
/review-script "角色"
```
