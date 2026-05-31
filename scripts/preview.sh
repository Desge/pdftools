#!/bin/bash
# PDFlikes 快速构建预览脚本
# 用法: ./scripts/preview.sh [port]
# 功能: 本地构建并启动静态预览

set -e

PORT=${1:-3000}
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"

cd "$PROJECT_DIR"

echo "🏗️  构建生产版本..."
npm run build

echo ""
echo "🚀 启动生产服务器 (端口 $PORT)..."
npm run start -- -p "$PORT"
