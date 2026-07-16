#!/bin/bash
# 剧本杀项目初始化脚本
# 用法: ./init-project.sh <剧本名称> <类型> <人数>

set -e

if [ $# -lt 3 ]; then
    echo "用法: $0 <剧本名称> <类型> <人数> [难度]"
    echo "示例: $0 黄昏之馆 本格推理 6 进阶"
    exit 1
fi

NAME=$1
TYPE=$2
PLAYERS=$3
DIFFICULTY=${4:-进阶}

# 创建项目目录
BASE_DIR="output/$NAME"
mkdir -p "$BASE_DIR/characters"
mkdir -p "$BASE_DIR/clues"
mkdir -p "$BASE_DIR/scripts"
mkdir -p "$BASE_DIR/props/evidence"
mkdir -p "$BASE_DIR/dm-guide"
mkdir -p "$BASE_DIR/review"
mkdir -p "$BASE_DIR/brainstorm"

echo "✅ 创建剧本项目: $NAME"

# 创建基础信息文件
cat > "$BASE_DIR/info.md" << EOF
# $NAME

- **类型：** $TYPE
- **人数：** $PLAYERS 人
- **难度：** $DIFFICULTY
- **创建日期：** $(date +%Y-%m-%d)
- **状态：** 创作中
EOF

# 创建空白模板文件
touch "$BASE_DIR/world.md"
touch "$BASE_DIR/synopsis.md"
touch "$BASE_DIR/timeline.md"
touch "$BASE_DIR/tricks.md"
touch "$BASE_DIR/scripts/script.md"
touch "$BASE_DIR/dm-guide.md"

echo "✅ 创建目录结构"
echo "📁 $BASE_DIR/"
echo "  ├── info.md"
echo "  ├── world.md (待填充)"
echo "  ├── synopsis.md (待填充)"
echo "  ├── timeline.md (待填充)"
echo "  ├── tricks.md (待填充)"
echo "  ├── characters/ (待填充)"
echo "  ├── clues/ (待填充)"
echo "  ├── scripts/ (待填充)"
echo "  ├── props/ (待填充)"
echo "  ├── dm-guide/ (待填充)"
echo "  └── review/ (待填充)"
echo ""
echo "🎯 下一步：使用 /design-plot 开始创作！"
