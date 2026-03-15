# Supabase Safe Setup

## Why Supabase is a Good Fit Here
Supabase is a reasonable backend choice for this project because the likely first backend needs are small:
- RSVP storage
- simple guest metadata
- lightweight message card persistence

It is not necessary yet for the frontend-only release, but it is a strong candidate for the first data-backed release.

## Public Repo Safety Rules

### Safe to expose in client code
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Never expose in client code
- `SUPABASE_SERVICE_ROLE_KEY`
- personal access tokens
- migration secrets
- admin credentials

### Never commit
- `.env`
- `.env.local`
- copied dashboard secrets
- SQL dumps containing private guest data

## Suggested Environment Layout

### `.env.example`
```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=
NEXT_PUBLIC_SITE_URL=
```

### Usage rule
- browser-facing code may only use `NEXT_PUBLIC_*`
- server-only route handlers may use service-role keys if truly necessary

## Recommended First Supabase Scope

### Table: `rsvps`
- `id`
- `name`
- `status`
- `note`
- `created_at`

Keep the first schema extremely small.

## Recommended Next.js Integration Shape
- `src/lib/supabase/client.ts` for browser client
- `src/lib/supabase/server.ts` for server-side usage
- `src/app/api/rsvp/route.ts` for minimal RSVP write path

## What Not to Build First
- auth
- storage buckets
- realtime features
- admin dashboards
- settlement tables mixed into the first RSVP schema

## Recommended Release Order
1. frontend-only Vercel deploy
2. content and Kakao/mobile QA
3. add minimal Supabase-backed RSVP only if needed

## Security Reminder
Because this repository is public, treat every committed file as world-readable.
