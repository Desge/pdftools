#!/bin/bash
# PDFlikes 一键启动脚本
# 用法: ./scripts/start.sh [port]

set -e

PORT=${1:-3000}
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

cd "$PROJECT_DIR"

echo "🚀 启动 PDFlikes 开发服务器..."
echo "   端口: $PORT"
echo "   目录: $PROJECT_DIR"
echo ""

# 检查 node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 首次运行，安装依赖..."
    npm install
fi

# 启动开发服务器
npm run dev -- -p "$PORT"
