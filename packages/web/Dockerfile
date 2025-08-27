FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable && pnpm install --prod
COPY . .
RUN pnpm build
CMD ["pnpm", "preview", "--host", "0.0.0.0"]
