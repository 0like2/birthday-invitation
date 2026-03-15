# Implementation Design Spec

## 1. Product Shape
- Form factor: one long-scrolling mobile page
- Reason: invitations benefit from emotional continuity and simple navigation
- Rule: keep page count minimal; extend downward rather than branching into multiple pages

## 2. Concept Blend Rules

### A - Royal Night Editorial
Use for:
- hierarchy
- typography tone
- color base
- spacing and elegance

### C - Photo Club Princes
Use for:
- image treatment
- gallery framing
- subtle texture
- editorial photo devices

### Forbidden
- cartoon prince icons
- cute fantasy castle motifs
- scrapbook chaos
- heavy neon nightlife visuals

## 3. Information Hierarchy
1. event title
2. date and time
3. honoree names
4. RSVP CTA
5. location / directions
6. timetable
7. archive imagery
8. future playful features

## 4. Visual System

### Color Palette
- Midnight Navy: #111827
- Deep Navy Surface: #1A2233
- Champagne Gold: #D6B36A
- Ivory: #F7F3EC
- Warm Gray: #C9C2B8
- Film Wine: #6E3B44
- Dusty Silver: #B8BEC7

### Color Usage
- 1 dominant background at a time: ivory or navy
- gold only as highlight
- image overlays should stay subtle

### Typography Direction
- Title: elegant serif
- Body: readable Korean sans-serif
- Max font families: 2

### Suggested Scale
- Hero title: 36-40
- Hero subcopy: 16-18
- Section eyebrow: 12-13
- Body: 15-17
- Caption: 12-13

## 5. Layout and Spacing
- Target width: 360-430 mobile
- Side padding: 20-24
- Section spacing: 56-80
- Card padding: 16-20
- Use safe-area aware footer / sticky CTA spacing

## 6. Component Spec

### Hero
- Height: 85-100vh
- Must include title, subcopy, names, countdown, and CTA above the fold
- Hero media can be a still image, layered photo frame, or abstract textured background

### Event Info Cards
- Format: two-column cards on large mobile, one-column fallback okay
- Each card contains label, value, optional note
- Keep each value to 1-2 lines

### Location Block
- Include venue name, address text, link buttons, fallback note
- Prioritize reliability over embedded complexity

### Timetable
- Vertical timeline or stacked list
- Each item = time + short label only

### Archive Section
- 3 or 6 curated images max in MVP
- Frame style: thin border, film strip, contact sheet, or editorial crop

### RSVP Block
- High-contrast CTA styling
- Consider sticky bottom RSVP shortcut on long pages
- Wording must remain invitation-native

## 7. Motion Rules
- Allowed: fade, soft rise, subtle reveal
- Avoid: bounce, flashy parallax, aggressive blur
- Must support reduced motion fallback

## 8. Image Rules
- Preferred ratios: 4:5, 3:4, or contact-sheet crops
- Hero crop must protect faces and title placement
- Grain and low-saturation texture okay, but avoid over-filtering

## 9. Screen Structure Breakdown

### Screen 1: Hero
- Eyebrow
- Title
- Subcopy
- Names
- Countdown
- Primary CTA
- Secondary CTA

### Screen 2: Invitation Copy
- Section title
- 2 short copy blocks
- pull quote

### Screen 3: Event Info
- Date card
- Time card
- Venue card
- Audience/context card

### Screen 4: Location
- Venue label
- address block
- transport note
- map CTA row

### Screen 5: Timetable
- section heading
- 5 schedule rows
- short timing disclaimer

### Screen 6: Archive
- intro copy
- image grid
- short captions

### Screen 7: RSVP
- title
- response prompt
- 3 option buttons
- fallback contact line

### Screen 8: Interaction Preview
- 3 teaser cards
- future-phase note

### Screen 9: Footer
- closing copy
- names
- RSVP CTA repeat

## 10. Metadata and Share Layer
- `og:title`: 세 왕자님의 생일파티에 초대합니다
- `og:description`: 이상욱, 고형빈, 이영락의 특별한 밤. 2026년 3월 20일 오후 8시, 을지로에서 만나요.
- `og:image`: 1200x630 with centered safe text zone
- `theme-color`: align to chosen hero background

## 11. Implementation Boundary

### Design-Only Approval Scope
- all static screens
- final copy
- final visual system
- share image design
- motion rules

### Post-Approval Logic Scope
- live countdown logic
- RSVP behavior
- map links and address copy utility
- future interactive cards and gift flows

## 12. Recommendation
The site should stay a single page. It is okay for it to be longer, because mobile invitation users naturally scroll, but every section should feel purposeful. Avoid splitting into several pages unless a later phase adds a clearly separate post-event tool such as settlement.
