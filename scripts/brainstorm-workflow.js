// 创意头脑风暴工作流
// 用法: Workflow({scriptPath: "scripts/brainstorm-workflow.js", args: {type, players, keywords}})

export const meta = {
  name: 'brainstorm',
  description: '多角度创意头脑风暴工作流，从诡计、世界观、角色、反转四个维度激发创意',
  phases: [
    { title: 'Parallel Brainstorm', detail: '四维度并行创意生成' },
    { title: 'Evaluate & Pick', detail: '评估筛选最佳创意' },
  ],
}

phase('Parallel Brainstorm')

const [trickIdeas, worldIdeas, characterIdeas, twistIdeas] = await parallel([
  () => agent(
    `你是一个剧本杀诡计设计专家。请为以下条件的剧本生成5个核心诡计创意：

类型：${args.type || '不限'}
人数：${args.players || '6人'}
关键词：${args.keywords || '不限'}

每个创意需要包含：
1. 诡计名称
2. 诡计类型（密室/身份/时间/叙述/心理/装置）
3. 基本原理
4. 可行性评估
5. 精彩程度评分（1-10）
6. 适合的难度

请确保创意新颖、可执行！`,
    {
      label: 'story-architect: 诡计创意',
      phase: 'Parallel Brainstorm',
      model: 'claude-opus-4-8',
    }
  ),
  () => agent(
    `你是一个世界观构建专家。请为以下条件的剧本杀生成5个世界观灵感：

类型：${args.type || '不限'}
人数：${args.players || '6人'}
关键词：${args.keywords || '不限'}

每个灵感需要包含：
1. 时代背景
2. 核心场景（2-3个地点）
3. 独特设定
4. 氛围描述
5. 适合的故事类型
6. 创意评分（1-10）`,
    {
      label: 'worldbuilder: 世界观灵感',
      phase: 'Parallel Brainstorm',
      model: 'claude-sonnet-5',
    }
  ),
  () => agent(
    `你是一个角色设计专家。请为以下条件的剧本杀设计5组角色设定灵感（每组6个角色）：

类型：${args.type || '不限'}
人数：${args.players || '6人'}
关键词：${args.keywords || '不限'}

每组需要包含：
1. 角色代号和定位
2. 核心秘密方向
3. 角色间的关系亮点
4. 适合的故事类型
5. 创意评分（1-10）`,
    {
      label: 'character-designer: 角色设定灵感',
      phase: 'Parallel Brainstorm',
      model: 'claude-sonnet-5',
    }
  ),
  () => agent(
    `你是一个反转设计专家。请为剧本杀生成10个精彩的剧情反转点子：

类型：${args.type || '不限'}
关键词：${args.keywords || '不限'}

每个反转点子需要包含：
1. 反转类型（身份/动机/关系/真相/阵营/时间）
2. 反转描述
3. 前期铺垫方式
4. 冲击力评分（1-10）
5. 使用难度`,
    {
      label: 'plot-weaver: 反转创意',
      phase: 'Parallel Brainstorm',
      model: 'claude-sonnet-5',
    }
  ),
])

// ============================================================
// Phase 2: 评估筛选
// ============================================================
phase('Evaluate & Pick')

const topPicks = await agent(
  `请评估以下四个维度的创意，筛选出最佳组合：

## 核心诡计创意
${trickIdeas}

## 世界观灵感
${worldIdeas}

## 角色设定灵感
${characterIdeas}

## 反转创意
${twistIdeas}

请完成以下任务：
1. 从每个维度选出最优秀的1-2个创意
2. 评估这些创意的兼容性（是否可以组合成一个完整的剧本）
3. 推荐1-3个完整的剧本创意组合
4. 每个推荐组合包含：核心诡计+世界观+角色框架+关键反转
5. 给出推荐理由和可行性分析`,
  {
    label: 'story-architect: 创意评估和筛选',
    phase: 'Evaluate & Pick',
    model: 'claude-opus-4-8',
  }
)

return {
  allIdeas: {
    tricks: trickIdeas,
    worlds: worldIdeas,
    characters: characterIdeas,
    twists: twistIdeas,
  },
  topPicks,
}
