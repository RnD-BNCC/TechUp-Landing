# TechUp 2026 Landing Page

![Bun](https://img.shields.io/badge/Bun-%5E1.0.0-black)
![React](https://img.shields.io/badge/React-%5E19.0.0-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-%5E5.6.2-3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-%5E4.0.0-38B2AC)
![License](https://img.shields.io/badge/license-MIT-blue)

Frontend landing page for the BNCC Tech Up 2026 event. Built with React, TypeScript, Tailwind CSS (Neo-Brutalist design), and Framer Motion. Features a fully responsive hybrid talkshow registration interface and dynamic web animations.

**Repository:** <https://github.com/RnD-BNCC/TechUp-Landing>

## Features

- Dark Neo-Brutalist UI/UX aesthetic
- Dynamic meteor shower and cyber-terminal animations
- Fully responsive layout for mobile, tablet, and desktop
- Graceful image fallbacks and lazy loading
- Highly optimized production builds via Vite and Bun
- Pre-configured Security Headers for 'A' Grade compliance
- Containerized for rapid deployment via Docker & Caddy

## Tech Stack

- **Runtime & Package Manager:** Bun
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Hugeicons
- **Web Server:** Caddy (in Docker)

## Prerequisites

- Bun v1.0+
- Docker (optional, for containerized environments)

## Installation

Clone the repository:

```bash
git clone https://github.com/RnD-BNCC/TechUp-Landing.git
cd TechUp-Landing
```

Install dependencies using Bun:

```bash
bun install
```

## Running the Application

### Development Mode

Start the development server with hot-reloading:

```bash
bun run dev
```

### Production Build

Compile TypeScript and build the project:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

## Docker Support

### Build locally

```bash
docker build -t techup-landing .
```

Run the container:

```bash
docker run -p 8080:80 techup-landing
```

Or use Docker Compose:

```bash
docker compose up -d --build
```

### Pull from GHCR

Pre-built images are published to GitHub Container Registry on every release:

```bash
docker pull ghcr.io/RnD-BNCC/techup-landing:latest
# or a specific version
docker pull ghcr.io/RnD-BNCC/techup-landing:v1.0.0
```

## Deployment

Docker images are automatically built and pushed to GHCR when a version tag is pushed.

### Creating a new release

```bash
# Tag the commit you want to release
git tag v1.0.0

# Push the tag to trigger the CI pipeline
git push origin v1.0.0
```

The CI pipeline (`.github/workflows/ci.yml`) will:

1. Build the Docker image
2. Push it to `ghcr.io/RnD-BNCC/techup-landing` with two tags:
    - The version number (e.g., `v1.0.0`)
    - `latest`

### Versioning convention

Follow Semantic Versioning:

- `v<MAJOR>.<MINOR>.<PATCH>` — e.g., `v1.0.0`
- **PATCH** — bug fixes
- **MINOR** — new features, backward-compatible
- **MAJOR** — breaking changes

## Security Features

The Docker/Caddy setup automatically applies strict security headers to achieve an 'A' grade on SecurityHeaders.com:

- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- Strict HSTS
- Strict Content Security Policy (CSP)

## Scripts

| Script             | Description                                     |
| ------------------ | ----------------------------------------------- |
| `bun run dev`      | Start development server with hot reload        |
| `bun run build`    | Compile TypeScript and bundle with Vite         |
| `bun run preview`  | Locally preview the production build            |
| `bun run lint`     | Run ESLint                                      |

## License

MIT

## Owner

Maintained by RnD BNCC Alam Sutera

## Contributors

![Contributors](https://contrib.rocks/image?repo=RnD-BNCC/TechUp-Landing)

#
