# Figma Frame Spec

## Goal
Translate the implemented invitation direction into Figma frames that match the current coded structure.

## Product Shape
- One primary mobile page
- Long scroll, not multi-page
- Frame width target: 390
- Primary review height slices: 844, then section-by-section continuation frames

## Global Frame Rules
- Base frame width: 390
- Horizontal padding: 20 to 24
- Section gap: 56 to 80
- Corner radius language: 24 / 28 / 32 / 36
- No hover-dependent states
- CTA touch height minimum: 48

## Visual Tokens
- Background: `#F7F3EC`
- Foreground: `#111827`
- Surface: `#FFFAF4`
- Surface Strong: `#EFE8DD`
- Accent Gold: `#D6B36A`
- Accent Wine: `#6E3B44`
- Accent Soft: `#E6D2A4`

## Typography Tokens
- Display serif: title and large schedule times
- Korean sans-serif: body, notes, CTA labels
- Hero title: 36 to 40
- Section title: 32
- Body: 15 to 17
- Meta labels: 11 to 13, uppercase tracking

## Frame 01 - Hero
### Height
- 920 to 1040 depending on review preference

### Layers
1. page background wash
2. hero card container
3. top glow radial
4. right-side wine glow
5. eyebrow row
6. concept chip
7. title block
8. names chip row
9. countdown panel
10. film note side card
11. venue preview CTA card

### Notes
- Keep title block in left-dominant composition
- Countdown must feel premium, not dashboard-like
- CTA card should look like invitation utility, not app footer

## Frame 02 - Invitation
- Section shell card
- eyebrow label
- section title
- body copy block
- pull quote block

## Frame 03 - Event Info
- 2x2 card grid
- each card contains label / value / note
- prioritize readability over decorative framing

## Frame 04 - Location
- dark feature card variation
- venue name + address
- transport note module
- two CTA buttons
- fallback note

## Frame 05 - Timetable
- light card background
- stacked timeline rows
- time column fixed width
- vertical connector line only where needed

## Frame 06 - RSVP
- title
- three option buttons
- helper text
- fallback contact line

## Frame 07 - Preview / Future Layer
- 3 teaser cards
- used only as continuation hint, not a main focus in MVP

## Prototype Flow
- Hero primary CTA -> RSVP section scroll
- Hero secondary CTA -> Invitation section scroll
- Location CTA -> placeholder external map action annotation

## Blend Rules
### Royal Night Editorial contributes
- hierarchy
- elegance
- spacing
- serif title treatment
- navy/gold structure

### Photo Club Princes contributes
- image treatment references
- film note card
- archival editorial mood
- Euljiro night texture cues

### Do not mix in
- cartoon crowns
- fantasy castle icons
- scrapbook clutter
- candy-color party graphics

## Delivery Suggestion
- Build one Figma page named `Invitation MVP`
- Add frames in order: Hero, Invitation, Event Info, Location, Timetable, RSVP
- Add a second page named `Future Interactions` for card customizer / gift box / message wall exploration
