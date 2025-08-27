FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-workspace.yaml tsconfig.base.json .eslintrc.cjs .prettierrc ./
RUN corepack enable && pnpm install
COPY . .
CMD ["pnpm", "-w", "build"]
