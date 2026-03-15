# PRD - Three Princes Birthday Party

## 1. Document Info
- Project: Three Princes Birthday Party mobile invitation microsite
- Version: v1.0
- Primary channel: KakaoTalk-shared mobile web link
- Principle: design approval first, real logic after sign-off

## 2. Product Summary
Create a KakaoTalk-shareable, mobile-first birthday invitation microsite for three friends with the same birthday: Lee Sanguk, Go Hyeongbin, and Lee Yeongrak.

The site should feel like a refined mobile invitation rather than a generic landing page. It should combine an elegant invitation tone with a photo-club editorial mood inspired by Donggeurami and Euljiro night textures.

## 3. Core Goal
Let invitees understand the event, feel the tone of the party, and respond quickly on mobile.

## 4. Event Facts
- Event title: Three Princes Birthday Party
- Honorees: Lee Sanguk, Go Hyeongbin, Lee Yeongrak
- Date: 2026-03-20
- Time: 20:00 KST
- Venue: Euljiro party room
- Venue status: temporary placeholder, subject to update
- Audience context: Donggeurami photo club and close friends

## 5. Success Criteria
- Within the first 5 seconds, users understand who, when, and roughly where
- The first screen works well inside KakaoTalk in-app webview
- RSVP CTA is obvious and reachable without hunting
- Map and address fallback remain usable even if deep linking fails
- The page remains readable and attractive on common mobile widths

## 6. Product Scope

### 6.1 MVP
- Hero section with countdown
- Invitation copy
- Event info block
- Location and map link block
- Timetable
- Static gallery teaser
- RSVP CTA
- Kakao share metadata

### 6.2 Phase 1.5
- Simple attendee status flow
- Attendee profile card customization
- Gift-box interaction
- Message card wall

### 6.3 Phase 2
- Receipt-photo upload
- Settlement helper
- Shareable settlement summary
- Post-event memory mode

### 6.4 Out of Scope for MVP
- Authentication-heavy flows
- Large upload system
- Moderation-heavy community features
- Full OCR-driven settlement in the first release

## 7. UX Direction
- One long-scrolling mobile page, not a multi-page structure
- Clear information hierarchy before mood-only content
- Invitation-native CTAs instead of landing-page language
- Lightweight motion only
- Sticky or repeated RSVP path on mobile

## 8. Content Order
1. Hero + countdown
2. Invitation message
3. Event info
4. Location
5. Timetable
6. Gallery teaser
7. RSVP
8. Future interaction preview
9. Footer

## 9. Functional Requirements

### 9.1 Hero + Countdown
- Show event title, names, date/time, and countdown
- Countdown target must be 2026-03-20 20:00 KST
- After the target time, switch to a zero-state message

### 9.2 Event Info
- Must display date, time, venue label, and audience context
- Venue placeholder must be visibly marked as temporary

### 9.3 Location
- Provide plain-text address block
- Provide at least one reliable map handoff link
- Provide copy-address fallback

### 9.4 Timetable
- Show a simple mobile-readable time flow
- Each item should stay short enough to scan quickly

### 9.5 Gallery
- Static curated images only in MVP
- No upload requirement

### 9.6 RSVP
- Clear action labels such as attending / maybe / late arrival possible
- Define success, validation, and failure messaging

### 9.7 Future Interaction Features
- Profile card customization should stay lightweight first
- Gift-box interaction is optional and playful, not required to understand the invite
- Message card wall requires storage and moderation decisions before implementation

### 9.8 Receipt Settlement Helper
- Must live in a later phase or post-event mode
- Must not interfere with the invitation flow

## 10. Design Requirements
- Tone: elegant, warm, invitation-like
- Secondary mood: film, polaroid, contact-sheet, Euljiro night texture
- Avoid cartoon prince visuals
- Avoid heavy animation and hover-dependent behavior
- Use one-page section rhythm with generous spacing

## 11. Kakao-Specific Requirements
- Define `og:title`, `og:description`, and `og:image`
- Use a dedicated share image with crop-safe text placement
- Keep first-screen text concise
- Test for in-app browser readability and tap comfort

## 12. Operational Requirements
- Final venue update owner must be defined
- RSVP method must be selected before implementation
- Final photo set must be curated before UI polish
- Contact fallback must exist if RSVP or maps fail

## 13. Acceptance Criteria
- No horizontal scroll on common mobile widths
- First screen includes event title, date/time, and primary CTA
- Countdown behaves correctly in KST
- RSVP CTA remains easy to reach on mobile
- Address is readable even without map loading
- Placeholder venue state is visually explicit
- Kakao preview metadata is intentionally authored
- MVP excludes real upload/OCR/state-heavy logic before design approval

## 14. Delivery Stages

### Stage 0 - Planning
- Finalize PRD
- Finalize copy direction
- Finalize design spec

### Stage 1 - Design
- Wireframe
- Visual concept
- Share thumbnail concept
- Mobile-first review and sign-off

### Stage 2 - MVP Build
- Implement hero, info, location, timetable, gallery teaser, RSVP CTA
- Implement share metadata

### Stage 3 - Interactive Layer
- Add profile cards, gift box, and message wall if approved

### Stage 4 - Post-Event Tools
- Add receipt settlement helper in separate event-after mode

## 15. Product Recommendation
For mobile invitations, keep page count minimal. A single long-scrolling page is better than splitting into multiple pages, because invitations depend on emotional continuity and fast information access. The page can be long, but the section flow should stay clean and scannable.
