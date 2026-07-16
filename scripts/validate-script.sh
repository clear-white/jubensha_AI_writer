#!/bin/bash
# 剧本完整性验证脚本
# 用法: ./validate-script.sh <剧本目录>

if [ $# -eq 0 ]; then
    echo "用法: $0 <剧本目录>"
    echo "示例: $0 output/黄昏之馆"
    exit 1
fi

SCRIPT_DIR="$1"
ERRORS=0
WARNINGS=0

echo "========================================="
echo "  剧本完整性验证"
echo "  目录: $SCRIPT_DIR"
echo "========================================="

# 检查必需文件
echo ""
echo "📋 检查必需文件..."

REQUIRED_FILES=(
    "info.md"
    "world.md"
    "synopsis.md"
    "timeline.md"
    "tricks.md"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$SCRIPT_DIR/$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ $file (缺失)"
        ERRORS=$((ERRORS + 1))
    fi
done

# 检查角色目录
echo ""
echo "📋 检查角色档案..."

if [ -d "$SCRIPT_DIR/characters" ]; then
    CHAR_COUNT=$(ls "$SCRIPT_DIR/characters/"*.md 2>/dev/null | wc -l)
    echo "  找到 $CHAR_COUNT 个角色档案"
    if [ "$CHAR_COUNT" -eq 0 ]; then
        echo "  ⚠️  角色目录为空"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo "  ❌ characters/ 目录缺失"
    ERRORS=$((ERRORS + 1))
fi

# 检查线索目录
echo ""
echo "📋 检查线索系统..."

if [ -d "$SCRIPT_DIR/clues" ]; then
    CLUE_COUNT=$(ls "$SCRIPT_DIR/clues/"*.md 2>/dev/null | wc -l)
    echo "  找到 $CLUE_COUNT 个线索文件"
    if [ "$CLUE_COUNT" -eq 0 ]; then
        echo "  ⚠️  线索目录为空"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo "  ❌ clues/ 目录缺失"
    ERRORS=$((ERRORS + 1))
fi

# 检查剧本目录
echo ""
echo "📋 检查剧本正文..."

if [ -d "$SCRIPT_DIR/scripts" ]; then
    SCRIPT_COUNT=$(ls "$SCRIPT_DIR/scripts/"*.md 2>/dev/null | wc -l)
    echo "  找到 $SCRIPT_COUNT 个剧本文件"
    if [ "$SCRIPT_COUNT" -eq 0 ]; then
        echo "  ⚠️  剧本目录为空"
        WARNINGS=$((WARNINGS + 1))
    fi
else
    echo "  ❌ scripts/ 目录缺失"
    ERRORS=$((ERRORS + 1))
fi

# 检查 DM 指南
echo ""
echo "📋 检查 DM 指南..."

if [ -f "$SCRIPT_DIR/dm-guide.md" ]; then
    echo "  ✅ dm-guide.md"
else
    echo "  ⚠️  dm-guide.md 缺失 (可选)"
    WARNINGS=$((WARNINGS + 1))
fi

# 输出结果
echo ""
echo "========================================="
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo "  ✅ 剧本完整性验证通过！"
elif [ $ERRORS -eq 0 ]; then
    echo "  ⚠️  验证通过（$WARNINGS 个警告）"
else
    echo "  ❌ 验证失败（$ERRORS 个错误，$WARNINGS 个警告）"
fi
echo "========================================="

exit $ERRORS
