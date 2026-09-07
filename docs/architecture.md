# Project architecture and delivery plan

This repository is the collaboration space for the Youper project. The goal is to turn a concept into a low-friction, maintainable product with clear ownership.

## Initial scaffold

The first implementation uses a small npm workspaces monorepo:

```text
apps/
  web/       React + TypeScript + Vite frontend
  api/       Express + TypeScript HTTP API
           └─ prisma/schema.prisma
```

The API owns business rules and is the only application service that should
write to PostgreSQL. Prisma owns the schema and migrations. The frontend calls
the API rather than connecting directly to the database.

Local infrastructure is defined in `docker-compose.yml` and currently
provides PostgreSQL. The root scripts coordinate development, type checking,
building, and Prisma client generation.

## Recommended architecture

### Option 1: Fastest MVP

- Frontend: Vite + React + TypeScript
- Backend: Supabase or Firebase
- Database: Postgres managed by Supabase
- Auth: built-in auth from Supabase/Firebase
- Hosting: Vercel or Netlify
- Notifications: Twilio or WhatsApp integration for alerts and emergency links

This option is the fastest to ship because it minimizes backend plumbing and operational overhead.

### Option 2: Balanced production stack

- Frontend: Next.js or React + TypeScript SPA
- Backend: Node.js (Express/NestJS) + PostgreSQL
- Database: PostgreSQL with Prisma or TypeORM
- Auth: JWT or session-based auth with role checks
- Queue / async work: Redis + background jobs
- Hosting: Vercel for app, Railway / Render / Fly.io for API, Postgres managed service

This is the best fit when the product needs custom logic, clearer ownership, and more control over infra.

### Option 3: Full custom stack

- Frontend: React or Next.js
- API: Go, Java, or Node.js
- Database: PostgreSQL or MySQL
- Cache: Redis
- Observability: Prometheus + Grafana, Sentry, structured logs
- Infrastructure: Docker + Terraform or Kubernetes, CI/CD via GitHub Actions

This is the most scalable long-term option but requires the most operational maturity.

## Team / responsibility split

### Frontend

- Build the UI, screens, user journeys, and responsive layouts
- Validate UX flows and interaction states
- Connect the app to APIs and auth flows

### Backend

- Expose API endpoints and business logic
- Manage authentication, authorization, and validation
- Integrate third-party services for messaging and notifications

### Database / data model

- Design schema, indexes, and migrations
- Define ownership and access rules for data
- Keep backups and retention policies in place

### DevOps / QA

- Set up CI/CD, environment variables, and deployments
- Monitor errors, logs, and release health
- Maintain staging and production validation

## Suggested backlog phases

### Phase 1: Foundations

- Set up repository and GitHub collaboration rules
- Define the MVP feature set
- Create project board and issue labels
- Set up CI and review workflow

### Phase 2: Core product

- Build the main user-facing flows
- Implement authentication and user profile handling
- Add persistent storage for project data

### Phase 3: Integration and reliability

- Connect notification systems
- Add real-time updates if needed
- Harden security and error monitoring

### Phase 4: Scale and polish

- Add analytics and usage tracking
- Improve load handling and performance
- Formalize release and rollback procedures

## Development rules

- Always work from a feature branch.
- Open pull requests for all non-trivial changes.
- Require review and passing checks before merge.
- Keep documentation with the code.
- Use environment variables for secrets and config.

## Recommended starting approach

For a small, collaborative team, the selected starting point is:

- Frontend: React + TypeScript
- API: Node.js + Express + TypeScript
- Database: PostgreSQL + Prisma
- Local infrastructure: Docker Compose
- Hosting: Vercel for the web app and a managed Node.js/PostgreSQL service for the API and database

This balance keeps the boundaries clear between frontend, backend, and data
ownership while leaving room for authentication, queues, notifications, and
real-time features as the product requirements become clearer.
