# Youper

A collaborative project repository for planning and building the Youper product.

## Collaboration setup

This repository is ready for GitHub-based teamwork with the basics already in place:

- default branch workflow using pull requests
- CODEOWNERS to auto-request reviews
- issue and PR templates for consistent collaboration
- CI workflow placeholder for future checks
- architecture and delivery notes for the project plan

## Quick start

1. Clone the repo:

   git clone git@github.com:TIMOTHY-glitch-hash/youper.git
   cd youper

2. Create a feature branch:

   git checkout -b feature/short-description

3. Make changes, validate them, and commit:

   git add .
   git commit -m "feat: add ..."
   git push -u origin feature/short-description

4. Open a pull request and request reviews from CODEOWNERS.

## Repository structure

- .github/: GitHub issue templates, PR template, workflows, and automation config
- apps/web/: React + TypeScript frontend
- apps/api/: Express + TypeScript API and Prisma schema
- docs/: architecture and implementation plan
- README.md: project overview and local workflow
- LICENSE: MIT license
- CONTRIBUTING.md: contribution guidelines

## Local development

Requirements: Node.js 22+, npm 11+, and Docker Desktop.

```bash
cp .env.example .env
npm install
docker compose up -d
npm run db:generate
npm run db:push
npm run dev
```

The frontend runs at `http://localhost:5173` and the API runs at
`http://localhost:3001`. Stop the local database with `docker compose down`.

## Project blueprint

See [docs/architecture.md](docs/architecture.md) for the proposed stack, architecture, role split, and phased delivery plan.

## Maintainers

- @TIMOTHY-glitch-hash

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution workflow.
