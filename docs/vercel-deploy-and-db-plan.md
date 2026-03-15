# Vercel Deploy and Database Plan

## Current Decision
Deploy the invitation as a frontend-only Vercel release first.

Do not force database integration into the same milestone unless real RSVP capture is immediately required.

This matches the product principle already used in this project:
- design approval first
- real logic after sign-off

## Current Project State
- Framework: Next.js 16 App Router
- Styling: Tailwind CSS v4
- Current app shape: single-page invitation microsite
- Build status: passing locally
- Lint status: passing locally
- Backend/API: none yet
- Database: none yet
- API routes: none yet
- Env files: none yet

## Why deployment is blocked here
- `vercel` CLI is not installed in this environment
- no verified Vercel auth/session in this environment
- project is being worked locally without deployment wiring completed
- DB requirements are not fully locked yet

## Recommended Release Sequence

### Release 1 - Static / Presentation Deployment
Ship the current invitation site as a read-only frontend.

Goal:
- get a live URL
- review on mobile devices
- test in KakaoTalk in-app browser
- confirm typography, spacing, and sharing metadata

Include in this release:
- hero
- invitation section
- event info
- location
- timetable
- archive
- RSVP preview UI only
- footer

Do not include in this release:
- persistent RSVP
- DB writes
- message wall
- gift interaction persistence
- receipt settlement

### Release 2 - Minimal RSVP Backend
Only if real RSVP collection is needed before the event.

Keep scope to:
- one DB table
- one write path
- optional one read path for organizer review

### Release 3 - Extended Event Features
- profile cards
- gift box outcomes
- message ribbon wall
- post-event receipt settlement helper

## Best Database Choice

### Recommended default
Use `Vercel Postgres` or `Neon + Prisma`.

Why:
- simple fit for Next.js on Vercel
- small invitation site does not need complex infra
- straightforward env variable setup
- good enough for RSVP and simple guest interactions

### If speed matters more than flexibility
Use `Vercel Postgres + Prisma`.

### If you want broader portability
Use `Neon + Prisma`.

### Not recommended as the first DB step here
- building custom SQL tooling before RSVP schema exists
- adding auth before RSVP requirements are final
- mixing message wall, receipt parsing, and RSVP in one schema pass

## Minimal RSVP Data Contract

### Table: `rsvps`
- `id`
- `name`
- `status` (`attending` | `maybe` | `late`)
- `note` nullable
- `created_at`
- `updated_at`

### Optional later fields
- `phone`
- `party_size`
- `profile_card_theme`
- `profile_card_message`

Do not add these yet unless required.

## Suggested API Scope

### First backend API
`POST /api/rsvp`

Payload:
```json
{
  "name": "홍길동",
  "status": "attending",
  "note": "조금 늦을 수 있어요"
}
```

### Optional organizer read API later
`GET /api/rsvp`

Only add if an organizer view is actually needed.

## Files to Add When Backend Work Starts

### Environment
- `.env.example`

Expected keys:
```bash
DATABASE_URL=
NEXT_PUBLIC_SITE_URL=
```

### Database / ORM
- `prisma/schema.prisma` or equivalent
- `src/lib/db.ts`

### API Routes
- `src/app/api/rsvp/route.ts`

### UI Integration
- connect `src/components/invitation/rsvp-section.tsx` to API

## Vercel Deployment Steps

### Option A - CLI deploy
If using local CLI:

```bash
npm i -g vercel
vercel login
vercel
```

Then for production:

```bash
vercel --prod
```

### Option B - Git-based deploy
Recommended if this project will continue to evolve.

Steps:
1. create git repo for `birthday`
2. push to GitHub
3. import repo in Vercel
4. set framework to Next.js if auto-detection does not do it
5. add environment variables when DB is introduced

## Kakao Sharing Checklist Before Deploy
- set Open Graph title
- set Open Graph description
- add a real Open Graph image
- confirm page title is polished
- test preview in KakaoTalk after deploy

## What Claude or OpenCode Should Do Next

### If doing frontend-only deploy now
1. ensure build passes
2. install or access Vercel CLI
3. deploy current app
4. test mobile URL in KakaoTalk
5. capture screenshots for review

### If adding DB right away
1. choose `Vercel Postgres` or `Neon`
2. install Prisma
3. create RSVP schema
4. add `.env.example`
5. create `POST /api/rsvp`
6. wire RSVP UI to submit to API
7. redeploy with env vars configured

## Recommended Prompt for Claude

```text
Continue the birthday invitation project in /Users/iyeonglag/PycharmProjects/birthday.

Current status:
- Next.js invitation microsite is implemented and builds successfully
- This release should first go live as a frontend-only Vercel deployment unless real RSVP storage is immediately necessary
- If deploying now, focus on Vercel deployment, KakaoTalk preview metadata, and mobile QA
- If DB is required, keep scope to a minimal RSVP table and POST /api/rsvp only

Read these docs first:
- docs/prd-final.md
- docs/implementation-design-spec.md
- docs/vercel-deploy-and-db-plan.md

If deploying:
- install/configure Vercel CLI or use GitHub import
- deploy safely
- report the live URL

If adding DB:
- choose Vercel Postgres or Neon + Prisma
- add minimal schema and env example
- do not implement extra event features yet
```

## Final Recommendation
For this project, the highest-value next step is:

1. frontend-only Vercel deployment
2. mobile and Kakao review
3. minimal RSVP database only if truly needed

That keeps the invitation elegant, reviewable, and low-risk.
