FROM node:22-alpine
WORKDIR /app

# Copy workspace manifest and install only api deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.base.json ./
COPY packages ./packages
RUN corepack enable && pnpm --filter @empathy/api... install

# Build the api package
WORKDIR /app/packages/api
RUN pnpm build

CMD ["node", "dist/main.js"]
