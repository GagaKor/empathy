# Empathy Monorepo

Empathy chat MVP built with a pnpm workspace using SvelteKit and NestJS.

## Packages

- `packages/web` – SvelteKit + Tailwind + PWA frontend
- `packages/api` – NestJS 11 backend with SSE chat
- `packages/shared` – shared types and utilities

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm -w build
pnpm -w test
```

## Docker

```bash
docker compose -f infra/docker-compose.dev.yml up --build
```

## License

MIT
