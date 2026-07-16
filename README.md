# 剧本杀 AI Agent 创作系统

> 基于 Claude Code 的多 Agent 协作系统，用于自动化创作完整的剧本杀（谋杀之谜）剧本。

[![GitHub](https://img.shields.io/badge/GitHub-jubensha_AI_writer-181717?style=flat&logo=github)](https://github.com/clear-white/jubensha_AI_writer)
[![Claude Code](https://img.shields.io/badge/Claude%20Code-Agent%20Orchestration-8B5CFE?style=flat&logo=anthropic)](https://claude.ai/code)

---

## 📖 项目简介

本系统利用 Claude Code 的 Agent 编排能力和多智能体协作，自动化完成剧本杀剧本的完整创作流程。从世界观构建、核心诡计设计、角色塑造、线索链设计，到完整的剧本撰写、DM 指南生成和格式导出，全部由 AI Agent 协作完成。

### 系统演示

项目附带一个完整的示例剧本 —— **「梦境管理局：深层梦境」**（6人/进阶/4-5小时），位于 [`output/梦境管理局：深层梦境/`](output/梦境管理局：深层梦境/) 目录下，展示了系统的完整创作能力。

## 🏗️ 核心架构

```
Agent Orchestrator (工作流引擎)
├── story-architect      故事架构师：设计世界观、核心诡计、剧情大纲
├── character-designer   角色设计师：创建角色档案、动机、关系网
├── plot-weaver          剧情编织者：编织时间线、事件链、反转
├── clue-designer        线索设计师：设计线索系统、证据链、推理路径
├── dialogue-writer      对白作家：撰写角色对白、剧本台词
├── props-designer       道具设计师：设计物证、道具、场景
├── script-writer        剧本作家：整合输出完整剧本
├── reviewer             审核编辑：一致性检查、质量审核
├── dm-guide-writer      DM 指南作家：编写主持人手册
└── continuity-engine    连续性引擎：自动检测剧情矛盾
```

## 🎯 创作流程

```
Phase 1: 创意构思
  /brainstorm         头脑风暴核心创意
  /design-world       构建世界观

Phase 2: 架构设计
  /design-plot        设计剧情架构
  /create-characters  创建角色体系

Phase 3: 详细创作
  /design-clues       设计线索系统
  /write-script       撰写完整剧本

Phase 4: 审核优化
  /review-script      多维度审核

Phase 5: 成品输出
  /generate-dm-guide  生成DM指南
  /export-script      导出成稿
```

## 🚀 快速开始

### 环境要求

- [Claude Code](https://claude.ai/code)（命令行工具）
- Git

### 使用方式

```bash
# 进入项目
cd jubensha

# 初始化新剧本项目
/init-script "剧本标题" "类型" "玩家人数"
# 例如：
/init-script "梦境管理局：深层梦境" "变格推理" "6"

# 按顺序执行创作流程
/design-plot          # 设计剧情
/create-characters    # 创建角色
/design-clues         # 设计线索
/write-script         # 撰写剧本
/review-script        # 审核优化

# 或一键创建完整剧本
/create-script        # 交互式引导完成全部流程
```

### 命令行快捷命令

| 命令 | 功能 | 阶段 |
|------|------|------|
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

## 🎭 支持的剧本类型

| 类型 | 特点 |
|------|------|
| **本格推理** | 注重逻辑推理和线索解谜，追求"公平游戏" |
| **变格推理** | 注重氛围、心理描写和剧情反转，常有超现实元素 |
| **情感沉浸** | 注重角色情感羁绊和故事体验 |
| **机制阵营** | 注重游戏机制设计、阵营对抗和策略博弈 |
| **恐怖悬疑** | 注重恐怖氛围营造和惊吓元素设计 |
| **欢乐喜剧** | 注重轻松欢乐氛围和搞笑元素 |

## 📂 项目结构

```
jubensha/
├── .claude/                 Claude Code 配置
│   ├── agents/              自定义 Agent 定义
│   ├── skills/              自定义命令技能
│   ├── hooks/               生命周期钩子
│   └── rules/               项目规则
├── docs/                    文档体系
│   ├── architecture.md      系统架构详解
│   ├── get-started.md       快速上手指南
│   ├── script-format.md     剧本格式规范
│   ├── agent-guide.md       Agent 使用说明
│   └── workflow-guide.md    创作工作流详解
├── templates/               剧本模板
│   ├── story-template.md    故事模板
│   ├── character-template.md 角色模板
│   ├── clue-template.md     线索模板
│   └── script-template.md   剧本模板
├── scripts/                 工具脚本
├── memory/                  持久化记忆
├── output/                  生成剧本输出
│   └── 梦境管理局：深层梦境/  示例剧本
├── CLAUDE.md                项目配置文件
└── README.md                本文件
```

## 📜 剧本结构标准

每个剧本杀作品包含以下模块：

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

## ✅ 质量保证

系统内置多维度质量评估体系：

- **逻辑质量 (35%)** — 诡计自洽、时间一致、因果完整
- **推理质量 (25%)** — 线索充分、路径多样、公平性
- **游戏体验 (20%)** — 参与度、节奏感、互动性
- **情感体验 (15%)** — 沉浸感、情感共鸣、结局满意度
- **呈现质量 (5%)** — 文字流畅、格式规范

详细质量标准请参阅 [quality.md](.claude/rules/quality.md)。

## 🧠 记忆系统

系统利用 Claude Code 的持久化记忆系统，跨会话保持项目状态和创作上下文。所有重要创作决策、角色设定、剧情走向会记录在 `memory/` 目录中。

详见 [memory.md](.claude/rules/memory.md)。

## 📋 质量检查清单

- [ ] 核心诡计是否有逻辑漏洞
- [ ] 每个角色是否有合理的动机和秘密
- [ ] 线索链是否完整，没有死胡同
- [ ] 时间线是否一致无矛盾
- [ ] 每个角色是否有足够的信息量和参与感
- [ ] 真相还原是否清晰合理
- [ ] 难度是否适合目标玩家群体
- [ ] DM 指南是否完整可操作

## 📄 相关文档

- [架构设计](docs/architecture.md) — 系统架构详解
- [快速开始](docs/get-started.md) — 快速上手指南
- [剧本格式](docs/script-format.md) — 剧本格式规范
- [Agent 指南](docs/agent-guide.md) — Agent 使用说明
- [工作流指南](docs/workflow-guide.md) — 创作工作流详解
- [角色设计规则](.claude/rules/character-design.md)
- [线索设计规则](.claude/rules/clue-design.md)
- [一致性检查规则](.claude/rules/consistency.md)

## 🧪 示例剧本

> **「梦境管理局：深层梦境」** — 变格推理 / 科幻悬疑 / 心理惊悚
> 
> **6人（3男3女）| 进阶 | 4-5小时**

公元2089年，梦境管理局可通过提取死者梦境还原案件真相。六位梦境调查员进入已故富豪陆震霆的深层梦境，却揭开了一场关于意识操控、记忆篡改和数字意识存续的惊天秘密……

- [剧本详情](output/梦境管理局：深层梦境/README.md)
- 审核评分：**82分 / A-级**

---

*由 [Claude Code](https://claude.ai/code) Agent 编排系统驱动 · 2026年7月*
