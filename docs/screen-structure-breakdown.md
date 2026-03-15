# Screen Structure Breakdown

## Overview
This project should use one primary mobile page with a long, elegant scroll. That is the right format for an invitation because it preserves the emotional flow from first impression to logistics to RSVP.

## Primary Page Flow

### Block 1 - First Impression
- Hero media layer
- Title cluster
- Countdown cluster
- Primary RSVP CTA

### Block 2 - Invitation Narrative
- invitation headline
- short body copy
- pull quote

### Block 3 - Event Facts
- date/time group
- venue group
- audience/context group

### Block 4 - Location Utility
- address text
- transport/support note
- map CTA row

### Block 5 - Time Flow
- schedule heading
- compact timeline list

### Block 6 - Photo Mood
- archive intro
- curated gallery
- short captions

### Block 7 - Conversion
- RSVP prompt
- status options
- contact fallback

### Block 8 - Future Play Layer
- profile card teaser
- gift-box teaser
- message-card teaser

### Block 9 - Closure
- closing line
- names
- repeated RSVP CTA

## Sticky Behavior
- Optional sticky bottom CTA after the hero: `참석 여부 전달하기`
- Hide or soften sticky bar when footer CTA enters view

## Recommended Build Components
- `HeroSection`
- `CountdownPanel`
- `InvitationSection`
- `EventInfoGrid`
- `LocationSection`
- `TimelineSection`
- `ArchiveSection`
- `RsvpSection`
- `FeaturePreviewSection`
- `FooterSection`

## Phase Separation

### MVP Components
- HeroSection
- CountdownPanel
- InvitationSection
- EventInfoGrid
- LocationSection
- TimelineSection
- ArchiveSection
- RsvpSection
- FooterSection

### Phase 1.5 Components
- ProfileCardCustomizer
- GiftBoxInteraction
- MessageRibbonWall

### Phase 2 Components
- ReceiptUploadPanel
- SettlementSummaryCard
- PostEventModeSwitch

## Product Guidance
- Keep the invitation as one coherent scroll page
- Let the page be long if needed, but keep the first three blocks extremely strong
- If a separate page is ever introduced, reserve it for post-event settlement only
