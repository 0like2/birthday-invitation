# Playful Redesign and Kakao Share Plan

## 1. Current Diagnosis

### 1.1 Vercel access issue
The current production deployment is built successfully, but the mobile access issue is most likely caused by Vercel protection or protected access behavior on the default `vercel.app` domain.

Evidence gathered:
- deployment is `Ready`
- app build is valid
- direct fetch against the deployment returned `401`
- Vercel project settings showed protection-related configuration

### 1.2 What this means
This is not primarily a Next.js rendering issue.

It is an access-layer issue:
- protected deployment
- team/SSO protection
- or opening the wrong Vercel URL inside a mobile in-app browser

### 1.3 Recommended fix order
1. Use exactly one canonical public URL for sharing
2. Check Vercel project protection settings in dashboard
3. Disable protection for a public invitation site, or attach a custom domain
4. Re-test in Safari/Chrome first, then KakaoTalk in-app browser

## 2. Current Invitation Direction vs Desired Direction

### 2.1 Current direction
Current UI leans toward:
- elegant
- editorial
- refined invitation
- night + film mood

This came from the `Royal Night Editorial + Photo Club Princes` direction.

### 2.2 Desired direction
The user wants something closer to:
- playful
- funny
- celebratory
- "세 왕자님 파티" energy
- more like a birthday poster / placard / event banner than a luxury invitation

## 3. Reference-Like Direction to Follow

The best hybrid is:

### 3.1 Keep from mobile wedding invitation patterns
- long single scrolling page
- strong first screen cover
- clean info hierarchy
- location / timetable / RSVP sections below the fold
- Kakao-friendly OG preview

### 3.2 Replace from the current luxury tone
Reduce:
- formal invitation language
- heavy editorial seriousness
- overly premium navy/gold atmosphere

Increase:
- poster-like title energy
- birthday-banner feeling
- playful typography accents
- crown / ribbon / cake / sticker / placard motifs
- group-photo / friendship / party humor cues

## 4. Revised Visual Direction

### 4.1 Core concept
`세 왕자님의 생일파티` should feel like:
- a fun invitation made by close friends
- a birthday event poster turned into a mobile invitation
- a polished but playful party page

### 4.2 Recommended visual language
- base background can stay light and invitation-friendly
- stronger accent colors than the current refined palette
- more contrast and celebration cues in the hero
- use the placard image as a real visual focal point

### 4.3 Suggested palette shift
Instead of mostly navy + champagne gold, move toward:
- cream / ivory base
- royal blue or deep cobalt accent
- red or cherry accent
- gold only as playful highlight
- optional sticker colors in limited amounts

### 4.4 Suggested typography shift
- main title can stay bold/ceremonial
- supporting text should feel friendlier and less formal
- allow one playful display treatment for the hero headline or badges

## 5. Hero Redesign Recommendation

### 5.1 First screen goal
The first viewport should feel like a complete party cover.

It should contain:
- title
- names
- short playful subtitle
- countdown
- one big visual hook

### 5.2 Best visual hook
Use the planned placard/banner image in the hero.

Why:
- instantly communicates group-party energy
- differentiates from generic invitation sites
- makes the page feel personal and funny

### 5.3 Hero content recommendation
- Title: `세 왕자님의 생일파티`
- Subtitle: friendlier, more playful, less formal
- Use one big visual card containing either:
  - actual placard image
  - three-person party photo
  - poster-style collage treatment

## 6. Copy Direction Update

### 6.1 Current copy problem
The current writing is elegant but slightly too formal.

Examples of current tone:
- `정중히 초대합니다`
- `특별한 밤`

### 6.2 New tone goal
Move toward:
- affectionate
- playful
- confident
- slightly exaggerated for fun

### 6.3 Tone examples
Better tone directions:
- `세 왕자님의 성대한 생일잔치에 초대합니다`
- `같은 날 태어난 세 왕자님의 밤, 그냥 지나칠 수 없겠죠`
- `왕관은 준비됐고, 이제 사람만 오면 됩니다`

## 7. Kakao Share Requirements

### 7.1 Already present
- title
- description
- basic Open Graph structure

### 7.2 Missing and critical
- `og:image`
- final share-safe image design
- one canonical public share URL

### 7.3 Recommendation
For most mobile invitation behavior, OG tags are enough.

Add:
- `og:image`
- `og:url`
- `theme-color`

Then test in Kakao share debugger.

### 7.4 Suggested OG image direction
Create a 1200x630 image with:
- `세 왕자님의 생일파티`
- date/time
- one fun hero image or placard visual
- bright, readable center-safe layout

Do not use the current luxury mood as-is for OG.
The share card should communicate fun immediately.

## 8. PRD Update Recommendations

The PRD should be revised in these ways.

### 8.1 Design direction section
Change from:
- refined editorial invitation

To:
- playful birthday invitation poster
- friendship-driven event vibe
- placard/banner-inspired hero
- mobile wedding-invitation structure with party humor

### 8.2 Hero requirements
Add:
- placard image slot or hero poster image slot
- first viewport must feel like a complete cover screen
- hero must prioritize emotional recognition over formal elegance

### 8.3 Share requirements
Add:
- mandatory OG image creation
- canonical share URL policy
- Kakao debugger verification before launch

### 8.4 Content requirements
Update tone guidance:
- less ceremonial
- more humorous and group-centered
- still clean and readable

## 9. Recommended Implementation Order

1. Fix public access / canonical URL issue on Vercel
2. Redesign hero into playful `Three Princes Party` cover
3. Update copy tone across Hero / Invitation / Footer
4. Add OG image + `og:url`
5. Re-test in KakaoTalk mobile flow
6. Then continue with RSVP/backend planning

## 10. Final Recommendation

The project should no longer aim for a luxury invitation first.

It should aim for:
- `모바일 청첩장처럼 구조는 깔끔하게`
- `세 왕자님 파티처럼 분위기는 유쾌하게`
- `카카오톡에서 봤을 때 공유 카드도 재밌고 명확하게`

That combination is the best fit for this event.
