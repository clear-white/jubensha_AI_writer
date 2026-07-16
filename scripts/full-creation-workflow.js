// 完整剧本创作工作流
// 用法: Workflow({scriptPath: "scripts/full-creation-workflow.js", args: {title, type, players, difficulty, premise}})

export const meta = {
  name: 'full-script-creation',
  description: '从创意到成品，一站式完成剧本杀完整创作的全流程工作流',
  phases: [
    { title: 'Brainstorm & World', detail: '创意构思和世界观构建' },
    { title: 'Plot & Characters', detail: '剧情架构和角色设计' },
    { title: 'Clues & Timeline', detail: '线索系统和时间线设计' },
    { title: 'Script Writing', detail: '剧本正文撰写' },
    { title: 'Review & Polish', detail: '审核优化和DM指南' },
    { title: 'Export', detail: '成品导出' },
  ],
}

// ============================================================
// Phase 1: 创意构思和世界观构建
// ============================================================
phase('Brainstorm & World')

const world = await agent(
  `你是一个剧本杀世界观构建专家。请为以下剧本创建详细的世界观设定：

标题：${args.title}
类型：${args.type}
玩家人数：${args.players}
核心创意：${args.premise || '待确定'}

请输出完整的世界观设定，包括：
1. 时代背景和地点
2. 社会结构和文化体系
3. 核心场景（至少3个）
4. 氛围和视觉风格
5. 特殊设定（如果有）

输出格式为完整的 Markdown 文档。`,
  {
    label: 'worldbuilder: 世界观构建',
    phase: 'Brainstorm & World',
    model: 'claude-sonnet-5',
  }
)

const synopsis = await agent(
  `你是一个剧本杀故事架构师。请基于以下信息设计核心诡计和剧情大纲：

标题：${args.title}
类型：${args.type}
玩家人数：${args.players}

世界观设定：
${world}

请输出：
1. 故事摘要（300-500字）
2. 核心诡计详细说明
3. 三幕式剧情结构
4. 关键反转点设计
5. 角色定位方案（每个角色的基本定位）

输出格式为完整的 Markdown 文档。`,
  {
    label: 'story-architect: 剧情大纲和诡计设计',
    phase: 'Brainstorm & World',
    model: 'claude-opus-4-8',
  }
)

// ============================================================
// Phase 2: 剧情架构和角色设计
// ============================================================
phase('Plot & Characters')

const characters = await agent(
  `你是一个剧本杀角色设计师。请基于以下剧情设计完整的角色体系：

${synopsis}

请为 ${args.players} 个角色分别创建完整的角色档案，包括：
1. 角色基本信息（姓名、年龄、职业、外貌、性格）
2. 完整背景故事
3. 三层动机系统（表面/深层/隐藏）
4. 核心秘密和次要秘密
5. 角色间关系网络
6. 角色语言风格

每个角色的档案要详细、有深度、有秘密。
注意：确保没有边缘角色，每个角色都至关重要。`,
  {
    label: 'character-designer: 角色体系创建',
    phase: 'Plot & Characters',
    model: 'claude-sonnet-5',
  }
)

const timeline = await agent(
  `你是一个剧本杀剧情编织专家。请基于以下信息设计精确的时间线和事件链：

剧情大纲：
${synopsis}

角色体系：
${characters}

请输出：
1. 绝对时间线（案发前 → 案发时 → 案发后，精确到分钟）
2. 每个角色的相对时间线
3. 因果事件链
4. 伏笔和铺垫清单
5. 反转触发条件和时机
6. 分幕结构设计（每幕的信息释放节奏）

时间线必须严格自洽！`,
  {
    label: 'plot-weaver: 时间线和事件链',
    phase: 'Plot & Characters',
    model: 'claude-opus-4-8',
  }
)

// ============================================================
// Phase 3: 线索系统和时间线设计
// ============================================================
phase('Clues & Timeline')

const clues = await agent(
  `你是一个剧本杀线索设计专家。请基于以下设计创建完整的线索系统：

剧情大纲：
${synopsis}

时间线：
${timeline}

角色体系：
${characters}

请输出：
1. 完整线索总表（每条线索的编号、名称、类型、公开度）
2. 每条线索的详细卡片（描述、关键信息、可能解读）
3. 证据链关联图谱
4. 推理路径图（多条路径通向真相）
5. 每轮线索投放计划
6. 误导线索设计（必须有据可循）

难度：${args.difficulty || '进阶'}
确保线索量适中，推理路径完整！`,
  {
    label: 'clue-designer: 线索系统设计',
    phase: 'Clues & Timeline',
    model: 'claude-sonnet-5',
  }
)

// ============================================================
// Phase 4: 剧本正文撰写
// ============================================================
phase('Script Writing')

const script = await agent(
  `你是一个剧本杀剧本作家。请整合所有元素撰写完整的剧本正文：

世界观：
${world}

剧情大纲和核心诡计：
${synopsis}

时间线：
${timeline}

角色体系：
${characters}

线索系统：
${clues}

请输出完整的剧本正文，包括：
1. 开场白（DM口播）
2. 每个角色的独立剧本（背景故事、秘密、任务）
3. 分幕剧本（每幕的流程、主持话术、信息释放）
4. NPC对话脚本
5. 关键场景描写
6. 多结局演绎（至少2种结局）
7. 真相还原说明

角色剧本要生动有代入感，信息呈现要清晰。`,
  {
    label: 'script-writer: 剧本正文撰写',
    phase: 'Script Writing',
    model: 'claude-sonnet-5',
  }
)

const props = await agent(
  `你是一个剧本杀道具设计师。请为以下剧本设计所有物证和配套物料：

剧本：
${script}

线索系统：
${clues}

请输出：
1. 所有物证卡片的详细描述（外形、特征、关键细节）
2. 场景布置说明
3. 角色随身物品清单
4. 配套物料清单（地图、规则卡、记录纸等）
5. 视觉风格指南

输出格式为物证卡片集合。`,
  {
    label: 'props-designer: 道具和物证设计',
    phase: 'Script Writing',
    model: 'claude-haiku-4-5-20251001',
  }
)

// ============================================================
// Phase 5: 审核优化和 DM 指南
// ============================================================
phase('Review & Polish')

const review = await agent(
  `你是一个严格的剧本杀审核编辑。请对以下剧本进行多维度审核：

完整剧本：
${script}

线索系统：
${clues}

时间线：
${timeline}

角色体系：
${characters}

请从以下维度审核（用 🔴/🟡/🔵/🟢 标注严重等级）：
1. 逻辑一致性：时间线冲突、因果关系、物理规则
2. 推理公平性：线索可达性、误导适当性、推理路径
3. 游戏体验：角色参与度、难度匹配、节奏感
4. 情感体验：沉浸感、情感共鸣、结局满意度

输出格式为结构化审核报告，包含问题清单（按严重等级排序）和修复建议。`,
  {
    label: 'reviewer: 全维度审核',
    phase: 'Review & Polish',
    model: 'claude-opus-4-8',
  }
)

const dmGuide = await agent(
  `你是一个DM指南编写专家。请基于以下完整剧本编写主持人手册：

剧本：
${script}

线索系统：
${clues}

审核报告：
${review}

请输出完整的 DM 指南：
1. 游戏规则说明（基本信息、流程概览、胜负条件）
2. 分幕主持指南（每幕的准备、话术、时间控制）
3. 关键节点引导（玩家卡住时、跑偏时、线索被忽略时）
4. 时间管理表（建议时间分配、超时处理）
5. 角色管理指南（角色分配建议、秘密保护、掉线处理）
6. 结局管理（不同结局的触发、演绎话术）
7. 应急预案（各种突发情况的处理）

DM 指南要详细、可操作，让任何主持人都能顺利带本。`,
  {
    label: 'dm-guide-writer: DM指南',
    phase: 'Review & Polish',
    model: 'claude-sonnet-5',
  }
)

// ============================================================
// Phase 6: 输出汇总
// ============================================================
phase('Export')

const outputDir = `output/${args.title}`

// 输出汇总报告
return {
  title: args.title,
  type: args.type,
  players: args.players,
  difficulty: args.difficulty || '进阶',
  status: '创作完成',
  summary: {
    worldCreated: true,
    synopsisCreated: true,
    charactersCreated: true,
    timelineCreated: true,
    cluesCreated: true,
    scriptCreated: true,
    propsCreated: true,
    reviewCompleted: true,
    dmGuideCreated: true,
  },
  reviewSummary: review.slice(0, 2000),
  nextSteps: [
    '1. 查看审核报告，根据建议修改',
    '2. 打印测试版进行内部测试',
    '3. 根据测试反馈迭代优化',
    '4. 使用 /export-script 导出成品',
  ],
}
