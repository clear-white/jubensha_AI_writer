// 审核工作流 - 对已完成的剧本进行多维度审核
// 用法: Workflow({scriptPath: "scripts/review-workflow.js", args: {scriptDir: "output/<剧本名称>"}})

export const meta = {
  name: 'script-review',
  description: '多维度剧本审核工作流，并行执行多个审核维度并汇总报告',
  phases: [
    { title: 'Read Script', detail: '读取剧本文件' },
    { title: 'Parallel Reviews', detail: '多维度并行审核' },
    { title: 'Synthesize', detail: '汇总审核报告' },
  ],
}

phase('Read Script')

const scriptDir = `${args.scriptDir}`

// 读取所有需要审核的文件
const files = ['synopsis.md', 'timeline.md', 'characters', 'clues', 'scripts/script.md', 'tricks.md']

const scriptContent = await agent(
  `请读取目录 ${scriptDir} 下的所有创作文件，包括：
- synopsis.md (剧情大纲)
- timeline.md (时间线)
- characters/ 目录中的所有角色文件
- clues/ 目录中的所有线索文件
- scripts/script.md (剧本正文)
- tricks.md (核心诡计)

汇总每个文件的核心内容。`,
  {
    label: 'reader: 读取所有剧本文件',
    phase: 'Read Script',
    model: 'claude-haiku-4-5-20251001',
  }
)

// ============================================================
// Phase 2: 多维度并行审核
// ============================================================
phase('Parallel Reviews')

const [logicReview, fairnessReview, gameplayReview, emotionReview] = await parallel([
  () => agent(
    `你是一个严格的逻辑审核专家。请审核以下剧本的逻辑一致性：

${scriptContent}

重点检查：
1. 时间线是否存在冲突
2. 事件链是否有断裂
3. 核心诡计是否自洽
4. 是否存在物理规则矛盾
5. 角色行为是否符合设定

输出格式：列出所有问题，用 🔴/🟡 标注严重等级，并给出修复建议。`,
    {
      label: 'reviewer: 逻辑一致性审核',
      phase: 'Parallel Reviews',
      model: 'claude-opus-4-8',
    }
  ),
  () => agent(
    `你是一个推理公平性审核专家。请审核以下剧本的推理公平性：

${scriptContent}

重点检查：
1. 所有关键线索是否可以被玩家发现
2. 误导信息是否有足够的依据
3. 是否存在无法推理的死胡同
4. 凶手是否有合理的作案条件
5. 推理路径是否多样性
6. 信息是否在角色间公平分配

输出格式：列出所有问题，用 🔴/🟡 标注严重等级，并给出修复建议。`,
    {
      label: 'reviewer: 推理公平性审核',
      phase: 'Parallel Reviews',
      model: 'claude-opus-4-8',
    }
  ),
  () => agent(
    `你是一个游戏体验审核专家。请审核以下剧本的游戏体验：

${scriptContent}

重点检查：
1. 是否有边缘角色（某个角色戏份太少）
2. 游戏节奏是否合理
3. 难度是否与标记的匹配
4. 角色间是否有足够的互动空间
5. 总时长是否在合理范围内

输出格式：列出所有问题，用 🔴/🟡 标注严重等级，并给出修复建议。`,
    {
      label: 'reviewer: 游戏体验审核',
      phase: 'Parallel Reviews',
      model: 'claude-sonnet-5',
    }
  ),
  () => agent(
    `你是一个情感体验审核专家。请审核以下剧本的情感沉浸度：

${scriptContent}

重点检查：
1. 故事是否引人入胜
2. 角色命运是否触动人心
3. 氛围描写是否到位
4. 结局是否合理且有滿足感
5. 剧情反转是否震撼且合理

输出格式：列出所有问题和改进建议，用 🔴/🟡 标注严重等级。`,
    {
      label: 'reviewer: 情感体验审核',
      phase: 'Parallel Reviews',
      model: 'claude-sonnet-5',
    }
  ),
])

// ============================================================
// Phase 3: 汇总报告
// ============================================================
phase('Synthesize')

const summary = await agent(
  `请汇总以下四个维度的审核结果，生成完整的审核报告：

## 逻辑一致性审核
${logicReview}

## 推理公平性审核
${fairnessReview}

## 游戏体验审核
${gameplayReview}

## 情感体验审核
${emotionReview}

请汇总输出：
1. 总览摘要（剧本的整体评价、综合评分）
2. 按严重等级排序的问题清单（修复建议）
3. 剧本质量等级（S/A/B/C/D）
4. 最终结论（通过/有条件通过/不通过）
5. 改进建议汇总`,
  {
    label: 'reviewer: 汇总审核报告',
    phase: 'Synthesize',
    model: 'claude-opus-4-8',
  }
)

return {
  scriptDir: args.scriptDir,
  summary,
  reviews: {
    logic: logicReview,
    fairness: fairnessReview,
    gameplay: gameplayReview,
    emotion: emotionReview,
  },
}
