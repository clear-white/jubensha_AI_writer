# 剧本杀 AI Agent 创作系统

> 基于 Claude Code 的多 Agent 协作系统，用于创作完整的剧本杀（谋杀之谜）剧本。

## 项目概述

本系统利用 Claude Code 的 Agent 编排能力和多智能体协作，自动化完成剧本杀剧本的完整创作流程：从世界观构建、核心诡计设计、角色塑造、线索链设计，到完整的剧本撰写、DM 指南生成和格式导出。

## 核心架构

```
Agent Orchestrator (工作流引擎)
├── story-architect      → 故事架构师：设计世界观、核心诡计、剧情大纲
├── character-designer   → 角色设计师：创建角色档案、动机、关系网
├── plot-weaver          → 剧情编织者：编织时间线、事件链、反转
├── clue-designer        → 线索设计师：设计线索系统、证据链、推理路径
├── dialogue-writer      → 对白作家：撰写角色对白、剧本台词
├── props-designer       → 道具设计师：设计物证、道具、场景
├── script-writer        → 剧本作家：整合输出完整剧本
├── reviewer             → 审核编辑：一致性检查、质量审核
├── dm-guide-writer      → DM 指南作家：编写主持人手册
└── continuity-engine    → 连续性引擎：自动检测剧情矛盾
```

## 创作流程

```
Phase 1: 创意构思
  /brainstorm         → 头脑风暴核心创意
  /design-world       → 构建世界观
  
Phase 2: 架构设计
  /design-plot        → 设计剧情架构
  /create-characters  → 创建角色体系
  
Phase 3: 详细创作
  /design-clues       → 设计线索系统
  /write-script       → 撰写完整剧本
  
Phase 4: 审核优化
  /review-script      → 多维度审核
  
Phase 5: 成品输出
  /generate-dm-guide  → 生成DM指南
  /export-script      → 导出成稿
  
Phase 6: 迭代复盘
  (基于反馈重新执行 Phase 1-5)
```

## 剧本杀剧本结构标准

本系统遵循以下剧本结构标准：

| 模块 | 说明 | 文件 |
|------|------|------|
| 世界观设定 | 时代背景、地点、核心设定 | `world.md` |
| 故事大纲 | 剧情摘要、核心诡计、反转 | `synopsis.md` |
| 角色手册 | 每个角色的完整档案 | `characters/` |
| 时间线 | 案发前后完整时间线 | `timeline.md` |
| 线索库 | 所有线索及其关联 | `clues/` |
| 道具清单 | 物证、场景道具、特殊道具 | `props.md` |
| 剧本正文 | 分幕剧本、对白、行动指令 | `script.md` |
| 真相还原 | 完整真相、凶手动机、手法 | `truth.md` |
| DM指南 | 主持人手册、游戏规则、提示 | `dm-guide.md` |

## 命令速查

| 命令 | 功能 | 对应阶段 |
|------|------|----------|
| `/brainstorm` | 头脑风暴创意点子 | Phase 1 |
| `/design-world` | 构建世界观设定 | Phase 1 |
| `/design-plot` | 设计剧情大纲和诡计 | Phase 2 |
| `/create-characters` | 创建角色体系 | Phase 2 |
| `/design-clues` | 设计线索系统 | Phase 3 |
| `/write-script` | 撰写完整剧本 | Phase 3 |
| `/review-script` | 审核优化剧本 | Phase 4 |
| `/generate-dm-guide` | 生成DM指南 | Phase 5 |
| `/export-script` | 导出成品剧本 | Phase 5 |
| `/create-script` | 一键创建完整剧本 | Phase 1-5 |

## 质量检查清单

- [ ] 核心诡计是否有逻辑漏洞
- [ ] 每个角色是否有合理的动机和秘密
- [ ] 线索链是否完整，没有死胡同
- [ ] 时间线是否一致无矛盾
- [ ] 每个角色是否有足够的信息量和参与感
- [ ] 真相还原是否清晰合理
- [ ] 难度是否适合目标玩家群体
- [ ] DM 指南是否完整可操作

## 目录结构

```
.claude/                  Claude Code 配置
├── agents/               自定义 Agent 定义
├── skills/               自定义命令技能
├── hooks/                生命周期钩子
├── rules/                项目规则
└── settings.json         配置文件
docs/                     文档体系
templates/                剧本模板
scripts/                  工具脚本
memory/                   持久化记忆
output/                   生成剧本输出
```

## 记忆系统

本系统利用 Claude Code 的记忆系统持久化项目状态。重要的创作决策、角色设定、剧情走向会记录在 `memory/` 目录中，以便跨会话保持一致性。

## 使用方式

```bash
# 进入项目
cd jubensha

# 初始化新剧本项目
/init-script "剧本标题" "类型" "玩家人数"

# 按顺序执行创作流程
/design-plot     # 先设计剧情
/create-characters  # 再创建角色
/design-clues    # 再设计线索
/write-script    # 再撰写剧本
/review-script   # 最后审核

# 或一键创建
/create-script   # 交互式引导完成全部流程
```

## 剧本类型支持

- 本格推理：注重逻辑推理和线索解谜
- 变格推理：注重氛围、心理和反转
- 情感沉浸：注重角色情感和故事体验
- 机制阵营：注重游戏机制和阵营对抗
- 恐怖悬疑：注重恐怖氛围和惊吓元素
- 欢乐喜剧：注重轻松欢乐和搞笑元素

## 相关文档

- [架构设计](docs/architecture.md) — 系统架构详解
- [快速开始](docs/get-started.md) — 快速上手指南
- [剧本格式](docs/script-format.md) — 剧本格式规范
- [Agent 指南](docs/agent-guide.md) — Agent 使用说明
- [工作流指南](docs/workflow-guide.md) — 创作工作流详解
