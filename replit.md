# Replit.md - Personal Portfolio Website

## Overview

This is a full-stack personal portfolio website for Lalith Kumar J, a cybersecurity professional and student. The application is built with modern web technologies including React, TypeScript, Express.js, and PostgreSQL with Drizzle ORM. It features a dark cybersecurity-themed design with animations and interactive elements.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom cybersecurity theme
- **UI Components**: Radix UI primitives with shadcn/ui components
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Fonts**: Google Fonts (Orbitron, Inter, Fira Code) for cybersecurity aesthetic

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: Hot reload with Vite middleware in development

### Data Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized in `/shared/schema.ts` for code sharing
- **Migrations**: Managed through Drizzle Kit

## Key Components

### Frontend Components
- **Hero Section**: Animated landing page with cybersecurity theme
- **About Section**: Professional summary and current focus
- **Skills Section**: Technical skills categorized by domain
- **Experience Section**: Work history and internships
- **Education Section**: Academic background
- **Certifications Section**: Professional certifications and achievements
- **Languages Section**: Language proficiencies
- **Contact Section**: Contact information and availability

### Backend Components
- **Express Server**: RESTful API server with middleware
- **Storage Interface**: Abstracted storage layer with in-memory fallback
- **Route Registration**: Centralized route management
- **Error Handling**: Global error handling middleware

### Shared Components
- **Schema Definitions**: Type-safe database schema
- **Validation**: Zod schemas for data validation
- **Types**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Static Portfolio Data**: Content is currently hardcoded in React components
2. **User Management**: Basic user schema exists for future authentication
3. **Session Handling**: PostgreSQL-based session management ready for implementation
4. **API Communication**: TanStack Query handles client-server communication
5. **State Management**: Local component state and React Query for server state

## External Dependencies

### Core Dependencies
- **Database**: Neon serverless PostgreSQL
- **UI Framework**: Radix UI primitives
- **Animation**: Framer Motion
- **Forms**: React Hook Form with Hookform Resolvers
- **Styling**: Tailwind CSS with class-variance-authority
- **Date Handling**: date-fns

### Development Dependencies
- **Build**: Vite with React plugin
- **TypeScript**: Full TypeScript support
- **Database Tools**: Drizzle Kit for migrations
- **Development**: tsx for TypeScript execution

## Deployment Strategy

### Development Mode
- Vite dev server for frontend hot reload
- Express server with TypeScript execution via tsx
- Database migrations via Drizzle Kit

### Production Build
- Frontend: Vite build to `/dist/public`
- Backend: esbuild bundles server to `/dist/index.js`
- Database: PostgreSQL connection via environment variables

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment mode (development/production)
- **REPL_ID**: Replit-specific configuration

## Changelog

```
Changelog:
- July 03, 2025. Initial setup with cybersecurity portfolio
- July 03, 2025. Updated profile photo with user's actual photo
- July 03, 2025. Updated language proficiency (Tamil: Native → Intermediate 55%)
- July 03, 2025. Added GitHub Pages deployment configuration
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```