FROM node:22-alpine
WORKDIR /app

# Prisma 경고 억제용(Alpine)
RUN apk add --no-cache openssl libc6-compat

# 루트 메타 + 패키지 소스 복사
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY packages ./packages

# pnpm 활성화 및 워크스페이스 설치
RUN corepack enable \
    && pnpm install -w --frozen-lockfile

# Prisma Client 생성 (api 기준)
RUN pnpm --filter @empathy/api exec prisma generate

# shared -> api 순서로 빌드 (여기가 핵심)
RUN pnpm -r build --filter @empathy/shared --filter @empathy/api

# 실행은 api로
WORKDIR /app/packages/api
CMD ["node", "dist/main.js"]