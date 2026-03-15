# Three Princes Birthday Invitation

KakaoTalk-shareable mobile invitation microsite for `세 왕자님의 생일파티`.

This project is a frontend-first Next.js invitation site designed for a strong full-screen cover experience on mobile and a polished editorial presentation on desktop.

## Stack
- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4

## Current Sections
- Hero cover with countdown
- Invitation message
- Event info
- Location
- Timetable
- Archive
- RSVP preview interaction
- Footer

## Design Direction
- `Royal Night Editorial` + `Photo Club Princes`
- elegant invitation hierarchy
- Korean-first typography
- one long-scrolling page
- Kakao/mobile-first layout

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Repository Notes
- This repository is public.
- Never commit `.env`, `.env.local`, `.vercel`, tokens, OAuth secrets, or private addresses.
- Only commit `.env.example` templates if needed.

## Deployment Strategy
- First release: frontend-only invitation deploy
- Second release: minimal RSVP backend only if required
- Later releases: profile cards, gift interactions, message wall, post-event settlement helper

See:
- `docs/prd-final.md`
- `docs/implementation-design-spec.md`
- `docs/vercel-deploy-and-db-plan.md`
- `docs/figma-frame-spec.md`

## Supabase Direction
If backend work starts, Supabase is an acceptable option for:
- RSVP persistence
- message cards
- simple guest/profile-card state

Do not expose service-role keys to the client.

See:
- `docs/supabase-safe-setup.md`

## Deployment Goal
GitHub repo is intended to be connected to Vercel so pushes to `main` trigger deployments after the project is linked.
