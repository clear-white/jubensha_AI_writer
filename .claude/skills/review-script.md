---
name: review-script
description: ✅ 对剧本进行多维度审核，检查逻辑漏洞、一致性和质量
---

# /review-script — 审核剧本

## 描述
对已完成或进行中的剧本进行多维度审核。包括逻辑一致性检查、推理公平性评估、游戏性评估、情感体验评估和合规性检查。

## 用法
```
/review-script
/review-script "完整"   # 全面审核（所有维度）
/review-script "快速"   # 快速检查（仅严重问题）
/review-script "逻辑"   # 仅逻辑检查
/review-script "公平"   # 仅推理公平性检查
```

## 审核维度

### 1. 逻辑一致性
- 时间线冲突检测
- 因果关系验证
- 物理规则合理性
- 角色行为一致性

### 2. 推理公平性
- 线索可达性
- 误导适当性
- 推理路径完整性
- 凶手可行性

### 3. 游戏体验
- 角色参与度
- 难度匹配度
- 节奏感
- 互动空间

### 4. 情感体验
- 沉浸感
- 情感共鸣
- 氛围营造
- 结局满意度

### 5. 合规检查
- 敏感内容标注
- 法律合规
- 内容分级

## Agent 编排

```yaml
parallel:
  - agent: reviewer
    task: 逻辑一致性检查
    dimension: logic
  - agent: reviewer
    task: 推理公平性评估
    dimension: fairness
  - agent: reviewer
    task: 游戏体验评估
    dimension: gameplay
  - agent: reviewer
    task: 情感体验评估
    dimension: emotion
  - agent: continuity-engine
    task: 自动化一致性扫描

pipeline:
  - agent: reviewer
    task: 汇总审核报告
    depends_on: [all-reviews]
```

## 输出
- `review/review-report.md` — 完整审核报告
- `review/issues.md` — 问题清单（严重等级排序）
- `review/fix-suggestions.md` — 修复建议
