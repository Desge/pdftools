#!/bin/bash
# PDFlikes 停止脚本
# 用法: ./scripts/stop.sh

set -e

echo "🛑 停止 PDFlikes 服务..."

# 停止所有 Next.js 开发服务器
pkill -f "next dev" 2>/dev/null || true
pkill -f "next-server" 2>/dev/null || true

# 停止端口 3000 上的进程（默认端口）
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

echo "✅ 服务已停止"
