# Serein Restaurant Ordering Application

A premium, responsive restaurant ordering experience created for client presentation and future production development.

**Developer:** Afaq Ahmad  
**Project:** Serein — Kitchen & Table  
**Repository:** `restaurant-ordering-application`

---

## Project Overview

Serein is a full-stack restaurant platform prototype designed to bring the public restaurant website, customer ordering journey, customer account area, kitchen workflow, and administration workspace into one cohesive product.

The current implementation focuses on the complete user experience and presentation layer using realistic mock data. It is structured so the mock services can later be replaced with real database queries, authentication, payments, and APIs without rebuilding the interface.

The visual direction is deliberately restrained and premium: warm neutrals, sage accents, compact typography, elegant display type, refined spacing, and small interface icons across every portal.

---

## What Has Been Built

### Public website

- Premium Serein restaurant landing page
- Restaurant introduction and seasonal positioning
- Responsive menu browsing experience
- Menu categories and filtering
- Food imagery, descriptions, prices, availability, and tags
- Quick add-to-order interactions
- Public navigation for:
  - Home
  - Our story
  - Visit us
  - Customer sign in
  - Order online
- Responsive mobile navigation and floating order prompt

### Customer portal

- Separate customer login page at `/customer/login`
- Mock customer authentication flow
- Customer account page at `/account`
- Current order status tracker
- Recent order summary
- Customer profile presentation
- Order history page at `/account/orders`
- Collection checkout page at `/checkout`
- Mock collection time selection
- Mock payment-name field
- Demo order confirmation flow

### Admin portal

- Separate admin login page at `/admin/login`
- Dedicated admin workspace at `/admin`
- Professional dark sidebar navigation
- Responsive admin toolbar
- Admin profile area branded with Afaq Ahmad
- Dashboard overview with:
  - Revenue summary
  - Orders summary
  - Average order value
  - Customer count
  - Revenue chart
  - Recent activity feed
- Dedicated admin routes/pages for:
  - `/admin/menu`
  - `/admin/orders`
  - `/admin/kitchen`
  - `/admin/customers`
  - `/admin/staff`
  - `/admin/settings`
  - `/admin/audit`

### Kitchen workspace

- Kitchen board accessible from the admin portal
- Order columns for:
  - New
  - Preparing
  - Ready
  - Completed
- Mock order cards
- Status progression interactions
- Order timing and item details
- Visual status labels and preparation workflow

### Menu administration

- Menu item table
- Dish images and categories
- Pricing and availability states
- Availability toggle interactions
- Mock menu-management presentation

### Branding and presentation

- Afaq Ahmad included throughout the mock customer, admin, staff, and order data
- Browser title and metadata updated for Afaq Ahmad
- PWA manifest updated with project branding
- Default v0/Vercel favicon assets removed
- Vercel Analytics removed from the application
- Consistent Serein visual system across all portals

---

## Current Demo Credentials

These credentials are mock-only and are intended for preview and client presentation.

### Customer

```text
Email: afaq@serein.test
Password: afaq-welcome
```

### Admin

```text
Email: afaq.admin@serein.test
Password: afaq-admin
```

Do not use these credentials for a production deployment. The current login behavior is client-side demo logic and does not provide real account security.

---

## Routes

| Route | Purpose |
|---|---|
| `/` | Public restaurant website and menu |
| `/story` | Restaurant story and kitchen philosophy |
| `/visit` | Restaurant address and opening hours |
| `/customer/login` | Customer login |
| `/account` | Customer account dashboard |
| `/account/orders` | Customer order history |
| `/checkout` | Mock order checkout |
| `/admin/login` | Admin login |
| `/admin` | Admin overview dashboard |
| `/admin/menu` | Menu management |
| `/admin/orders` | Order management |
| `/admin/kitchen` | Kitchen order board |
| `/admin/customers` | Customer management placeholder |
| `/admin/staff` | Staff management placeholder |
| `/admin/settings` | Restaurant settings placeholder |
| `/admin/audit` | Audit records placeholder |

---

## Technology Stack

- Next.js 16
- React 19
- TypeScript
- App Router
- Tailwind CSS v4
- CSS design tokens and responsive CSS
- Lucide React icons
- Next Font
  - Cormorant Garamond for premium display headings
  - DM Sans for interface and body text
- PWA manifest support
- Mock data and client-side interaction state for the prototype

---

## Project Structure

```text
app/
├── globals.css          # Global design system and responsive portal styles
├── layout.tsx           # Root layout, fonts, metadata, viewport settings
├── manifest.ts          # PWA metadata
└── page.tsx             # Public site, customer portal, admin portal, and mock interactions

public/
└── images/              # Restaurant and menu imagery used by the interface

next.config.mjs          # Next.js configuration and portal route rewrites
package.json             # Scripts and dependencies
eslint.config.mjs        # ESLint configuration
```

The current prototype keeps the portal experience in one main client entry to make the mock demonstration easy to run. Before production, the portals should be split into route-level layouts and feature components for maintainability, permissions, and server-side data loading.

---

## Local Development

### Requirements

- Node.js 20 or newer
- pnpm recommended, or npm/yarn

### Install dependencies

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Run linting

```bash
pnpm lint
```

### Create a production build

```bash
pnpm build
```

### Start the production server

```bash
pnpm start
```

---

## What Remains for Production

This repository currently delivers a polished mock-data prototype. The following work is still required before it should be used for real customers or live restaurant operations.

### Database and backend

- Connect Neon PostgreSQL
- Add Drizzle ORM schema and migrations
- Create tables for:
  - Users
  - Roles and permissions
  - Restaurants and locations
  - Menu categories
  - Menu items
  - Options and extras
  - Orders and order items
  - Payments
  - Reviews
  - Staff accounts
  - Audit events
- Replace all mock arrays and client state with server-side data access
- Add typed server actions or route handlers
- Add transactional order creation and inventory-safe availability updates

### Authentication and authorization

- Replace mock login checks with secure authentication
- Add customer registration, password reset, and session management
- Add separate staff/admin authentication and session handling
- Add role-based access control for customer, staff, manager, and admin roles
- Protect admin and kitchen routes on the server, not only in the UI
- Hash passwords and secure cookies
- Add CSRF, rate limiting, validation, and session expiry policies

### Payments

- Connect Stripe Checkout or Payment Element
- Create server-side payment intents or checkout sessions
- Validate prices and quantities on the server
- Add webhook handling for successful and failed payments
- Store payment status against orders
- Add refunds, cancellations, and payment reconciliation

### Ordering operations

- Persist baskets and orders
- Add delivery, collection, and dine-in order types
- Add kitchen preparation times
- Add real-time order updates for staff and customers
- Add order notifications through email or another approved provider
- Add order cancellation and refund rules
- Add restaurant opening-hours validation

### Admin features

- Build full menu CRUD
- Upload and manage menu images
- Manage categories, extras, allergens, and dietary labels
- Manage restaurant locations, hours, tax, and service settings
- Manage customer and staff accounts
- Add searchable and filterable order tables
- Add reporting data from real orders
- Persist audit records for every sensitive change

### Customer features

- Customer registration and profile editing
- Saved addresses and preferences
- Previous order details and reorder action
- Order-eligible review submission
- Review moderation and management
- Real order tracking based on server events

### Quality and deployment

- Add automated unit and integration tests
- Add end-to-end tests for login, ordering, checkout, admin, and kitchen flows
- Add error boundaries and production logging
- Add security headers and a production CSP
- Optimize remote image loading and image sizes
- Add accessibility audit and keyboard-only testing
- Add production environment variables
- Deploy with a client-owned hosting account
- Configure a custom domain and HTTPS
- Add database backups and monitoring

---

## Suggested Production Architecture

```text
Public Next.js pages
        │
Customer and admin route groups
        │
Server actions / route handlers
        │
Better Auth sessions + role checks
        │
Drizzle ORM
        │
Neon PostgreSQL
        │
Stripe webhooks and payment events
        │
Kitchen and customer real-time order updates
```

Recommended production route grouping:

```text
app/
├── (public)/
├── (customer)/
├── (admin)/
├── api/
├── actions/
├── db/
├── lib/
└── components/
```

---

## Design System

The design should remain consistent across public, customer, kitchen, and admin experiences.

### Palette

- Warm background: `#f6f5f0`
- White surface: `#ffffff`
- Espresso text and admin shell: `#292a25`
- Sage brand accent: `#65705d`
- Champagne highlight: `#d8c39a`

### Typography

- **Cormorant Garamond:** display headings and restaurant identity
- **DM Sans:** navigation, labels, forms, tables, and body copy

### Design principles

- Premium but approachable hospitality feel
- Small, readable interface typography
- Restrained use of color
- Compact Lucide icons instead of decorative symbols
- Responsive layouts designed mobile-first
- Clear distinction between public, customer, and administrative workspaces
- Avoid generic dashboard gradients and unnecessary decorative elements

---

## Client Handover Notes

This prototype is ready for presentation as a complete restaurant platform concept. The public site, customer journey, admin dashboard, and kitchen workflow are all represented with realistic interactions and mock records.

For the production handover, the next engineering milestone should be the database and authentication foundation. After that, Stripe payments, real order persistence, admin CRUD, and real-time kitchen updates can be introduced incrementally while keeping the existing visual system intact.

---

## Developer

Built and designed by **Afaq Ahmad** for client presentation and future production implementation.

© 2026 Afaq Ahmad. All rights reserved.
