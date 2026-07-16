---
name: create-characters
description: 👥 创建剧本杀的角色体系，包括角色档案、动机、关系网和秘密
---

# /create-characters — 创建角色体系

## 描述
创建剧本杀的完整角色体系。基于已有的剧情架构，生成每个角色的详细档案、动机系统、关系网络和隐藏秘密。

## 用法
```
/create-characters
/create-characters "人数"
```

## 执行流程

### Step 1: 加载剧情架构
- 读取已有的 synopsis.md 和世界设定
- 确认角色数量

### Step 2: Agent 编排

```yaml
pipeline:
  - agent: character-designer
    task: 创建角色基础设定
    output: characters/overview.md

  - parallel:
    - agent: character-designer
      task: 创建角色1详细档案
      context: "角色1的定位和角色概述"
    - agent: character-designer
      task: 创建角色2详细档案
      context: "角色2的定位和角色概述"
    # ... 为每个角色创建

  - agent: character-designer
    task: 构建关系网络
    depends_on: [all-characters]

  - agent: plot-weaver
    task: 为角色分配时间线
    depends_on: [characters]

  - agent: continuity-engine
    task: 验证角色一致性
```

### Step 3: 输出文件
- `characters/role-<name1>.md` — 角色1档案
- `characters/role-<name2>.md` — 角色2档案
- `characters/relationships.md` — 关系图谱
- `characters/secrets.md` — 秘密清单

## 设计原则
- 无边缘角色
- 每个人都有秘密
- 动机充分合理
- 关系交织成网
