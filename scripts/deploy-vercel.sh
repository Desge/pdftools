#!/usr/bin/env bash
set -euo pipefail

# ═══════════════════════════════════════════════════════════════
# PDF Toolconv — 一键打包提交 GitHub + 部署 Vercel
# 用法:
#   bash scripts/deploy-vercel.sh            # 完整流程
#   bash scripts/deploy-vercel.sh --skip-test  # 跳过构建测试
#   bash scripts/deploy-vercel.sh --dry-run    # 仅预览不执行
# ═══════════════════════════════════════════════════════════════

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

SKIP_TEST=false
DRY_RUN=false

for arg in "$@"; do
  case "$arg" in
    --skip-test) SKIP_TEST=true ;;
    --dry-run)   DRY_RUN=true ;;
    *) echo -e "${RED}未知参数: $arg${NC}"; exit 1 ;;
  esac
done

info()  { echo -e "${CYAN}[INFO]${NC} $1"; }
ok()    { echo -e "${GREEN}[ OK ]${NC} $1"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $1"; }
fail()  { echo -e "${RED}[FAIL]${NC} $1"; exit 1; }

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

BRANCH=$(git branch --show-current)
REMOTE=$(git remote get-url origin 2>/dev/null || echo "")

info "项目目录: $PROJECT_DIR"
info "当前分支: $BRANCH"
info "远程仓库: $REMOTE"
echo ""

# ─── Step 1: TypeScript 类型检查 ───
if [ "$SKIP_TEST" = false ]; then
  info "Step 1/5: TypeScript 类型检查..."
  if [ "$DRY_RUN" = true ]; then
    warn "[DRY RUN] 跳过 tsc --noEmit"
  else
    npx tsc --noEmit || fail "TypeScript 类型检查失败，请修复后重试"
    ok "TypeScript 零错误"
  fi
else
  info "Step 1/5: 跳过类型检查 (--skip-test)"
fi
echo ""

# ─── Step 2: Next.js 构建 ───
if [ "$SKIP_TEST" = false ]; then
  info "Step 2/5: Next.js 生产构建..."
  if [ "$DRY_RUN" = true ]; then
    warn "[DRY RUN] 跳过 next build"
  else
    npm run build || fail "构建失败，请检查错误日志"
    ok "构建成功"
  fi
else
  info "Step 2/5: 跳过构建 (--skip-test)"
fi
echo ""

# ─── Step 3: Git 提交 ───
info "Step 3/5: Git 暂存并提交..."
CHANGED=$(git status --porcelain | wc -l | tr -d ' ')

if [ "$CHANGED" -eq 0 ]; then
  warn "没有文件变更，跳过提交"
else
  info "变更文件数: $CHANGED"
  if [ "$DRY_RUN" = true ]; then
    warn "[DRY RUN] 将提交以下文件:"
    git status --short
  else
    git add -A
    # 生成提交消息：包含日期和变更摘要
    DATE=$(date '+%Y-%m-%d %H:%M')
    NEW_FILES=$(git diff --cached --name-only --diff-filter=A | wc -l | tr -d ' ')
    MOD_FILES=$(git diff --cached --name-only --diff-filter=M | wc -l | tr -d ' ')
    DEL_FILES=$(git diff --cached --name-only --diff-filter=D | wc -l | tr -d ' ')
    COMMIT_MSG="v2.0 全面迭代 (${DATE}) +${NEW_FILES} ~${MOD_FILES} -${DEL_FILES}"
    git commit -m "$COMMIT_MSG" || warn "提交失败（可能无实际变更）"
    ok "提交完成: $COMMIT_MSG"
  fi
fi
echo ""

# ─── Step 4: 推送 GitHub ───
info "Step 4/5: 推送到 GitHub..."
if [ "$DRY_RUN" = true ]; then
  warn "[DRY RUN] 将执行: git push origin $BRANCH"
else
  if [ -z "$REMOTE" ]; then
    fail "未配置 Git 远程仓库"
  fi
  git push origin "$BRANCH" || fail "推送到 GitHub 失败"
  ok "已推送到 $REMOTE ($BRANCH)"
fi
echo ""

# ─── Step 5: 部署 Vercel ───
info "Step 5/5: 部署到 Vercel..."
if [ "$DRY_RUN" = true ]; then
  warn "[DRY RUN] 将执行: vercel --prod --yes --archive=tgz"
else
  if ! command -v vercel &> /dev/null; then
    warn "未安装 vercel CLI，尝试 npx..."
    npx vercel --prod --yes --archive=tgz || fail "Vercel 部署失败"
  else
    vercel --prod --yes --archive=tgz || fail "Vercel 部署失败"
  fi
  ok "Vercel 部署成功！"
fi
echo ""

# ─── 完成 ───
if [ "$DRY_RUN" = true ]; then
  warn "═══ DRY RUN 完成 — 未做任何实际变更 ═══"
else
  ok "═══ 部署完成！═══"
  echo ""
  info "站点地址: https://pdf.toolconv.com/"
  info "GitHub:   $REMOTE"
  echo ""
  info "如需回滚: git revert HEAD && git push origin $BRANCH"
fi
