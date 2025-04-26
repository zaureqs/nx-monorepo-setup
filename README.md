# A-blazedrop Monorepo

This project is a basic Nx monorepo setup, designed to provide a modern full-stack development environment with the following technologies:

## Overview

- **Nx**: Powerful monorepo build system and task runner
- **Remix**: Frontend application for building fast, dynamic web UIs
- **Express**: Backend API for handling server-side logic and REST endpoints
- **TypeScript**: Type-safe development for both frontend and backend
- **Prisma**: Modern ORM for database access and migrations
- **shadcn/ui**: Beautiful, accessible React UI components

## Structure

- `apps/web` – Remix frontend application
- `apps/webapi` – Express backend API
- `libs/` – (Optional) Shared libraries for types, utilities, etc.

## Features

- Organized Nx monorepo for scalable development
- End-to-end type safety with TypeScript
- Database integration with Prisma
- Modern UI with shadcn/ui

---


## Initial Setup

### 1. Clone the repository:
```bash
git clone https://github.com/zaureqs/nx-monorepo-setup
cd nx-monorepo-setup
```

### 2. Install Packages:
```bash
pnpm install
```

### 3. Setup .env Files:

copy the `.env.example` in `.env` and configure the environment variables

### 4. Set up the database:

   - Generate Prisma client:
   ```bash
    pnpm prisma:generate
   ```
   - Apply database migrations:
   ```bash
   pnpm prisma:migrate --name mig_init
   ```

**OR**

- Push the database schema to the database:

```bash
pnpm run prisma:push
```

- (Optional) Start Prisma Studio to visualize your database:
```bash
pnpm prisma:studio
```

### 5 Start the Express backend API server.
```bash
pnpm dev:webapi
```

### 6 Start the Remix frontend development server.
```bash
pnpm dev:web
```

- **Note : For other script please chech package.json and nx doc.**
