---
name: init-script
description: 🚀 初始化一个新剧本项目，创建目录结构和基础文件
---

# /init-script — 初始化剧本项目

## 描述
初始化一个新剧本杀项目。在 `output/` 目录下创建完整的项目结构，包括所有必需的模板文件和初始化文档。

## 用法
```
/init-script
/init-script "幽灵庄园" "本格推理" "6人"
/init-script "幽灵庄园" "本格推理" "6人" "进阶"
```

## 参数
- `标题`：剧本名称（必填）
- `类型`：剧本类型（必填）
- `人数`：玩家人数（必填，4-8人）
- `难度`：难度定位（可选，默认进阶）

## 输出结构
```yaml
output/<剧本名称>/
├── info.md                  # 剧本基本信息
├── world.md                 # 世界观（待填充）
├── synopsis.md              # 剧情大纲（待填充）
├── timeline.md              # 时间线（待填充）
├── tricks.md                # 核心诡计（待填充）
├── characters/              # 角色目录
│   ├── overview.md          # 角色概览
│   └── templates/           # 角色模板
├── clues/                   # 线索目录
│   ├── master-list.md       # 线索总表
│   └── templates/           # 线索模板
├── scripts/                 # 剧本目录
│   ├── script.md            # 剧本正文
│   └── player/              # 角色剧本
├── props/                   # 道具目录
│   └── evidence/            # 物证卡片
├── dm-guide/                # DM指南目录
├── review/                  # 审核记录
└── README.md                # 项目说明
