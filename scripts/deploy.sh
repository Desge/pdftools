#!/bin/bash
# PDFlikes 一键部署脚本
# 用法: ./scripts/deploy.sh ["commit message"]
# 功能: 构建 -> 测试 -> 提交 -> 推送 -> 触发 Vercel/CF Pages 自动部署

set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

COMMIT_MSG=${1:-"chore: auto deploy $(date '+%Y-%m-%d %H:%M')"}
BRANCH=$(git branch --show-current)

echo "🚀 PDFlikes 一键部署"
echo "   分支: $BRANCH"
echo "   消息: $COMMIT_MSG"
echo ""

# 1. 检查工作区状态
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  工作区有未提交的更改"
fi

# 2. 拉取最新代码
echo "📥 拉取远程更新..."
git pull origin "$BRANCH" --rebase || {
    echo "❌ 拉取失败，请手动解决冲突"
    exit 1
}

# 3. 安装依赖
echo "📦 安装依赖..."
npm install

# 4. 类型检查
echo "🔍 类型检查..."
npm run lint || {
    echo "❌ Lint 失败"
    exit 1
}

# 5. 构建
echo "🏗️  构建项目..."
npm run build || {
    echo "❌ 构建失败"
    exit 1
}

# 6. 提交更改
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 提交更改..."
    git add -A
    git commit -m "$COMMIT_MSG"
fi

# 7. 推送到远程
echo "🚀 推送到 $BRANCH..."
git push origin "$BRANCH"

echo ""
echo "✅ 部署完成！"
echo "   Vercel: https://pdftools-ashen.vercel.app"
echo "   CF Pages: https://pdftools-47z.pages.dev"
echo ""
echo "📊 查看部署状态:"
echo "   Vercel: npx vercel --token \$VERCEL_TOKEN ls"
echo "   GitHub: https://github.com/Desge/pdftools/actions"
