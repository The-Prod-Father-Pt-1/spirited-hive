# Spirited Hive: "Hive for the Holidays" Campaign - Product Requirements Document

## Overview
- **Project:** Spirited Hive
- **Campaign:** Hive for the Holidays
- **Priority:** P0 (CRITICAL)
- **Launch Deadline:** November 1, 2025
- **Content Ready:** Friday/Saturday, October 25-26, 2025
- **Shooting Schedule:** Tuesday/Wednesday, October 22-23, 2025
- **Estimated Effort:** 7-8 days (tight timeline, only 10 days total)

## Business Objective

Create a holiday-themed landing page campaign to:
1. Drive engagement during traditionally slow RTD alcohol season (holidays see shift to traditional cocktails)
2. Feature cranberry lime vodka flavor as signature holiday drink
3. Keep fans engaged with comedic holiday content throughout November/December
4. Establish foundation for annual holiday campaigns (first year doing this)
5. Convert visitors to vodka cranberry product purchase with festive CTA

**Key Theme:** "Make the Spirits Bright" (play on word "spirits" - both cocktails and holiday cheer)

## User Stories

### Primary User Flow
As a **Spirited Hive fan visiting during holidays**, I want to **experience festive holiday content and discover holiday cocktail recipes** so that **I can celebrate with Hive products and be entertained by creative comedy skits**.

### Secondary User Flow
As a **new visitor seeing holiday ads on social**, I want to **watch longer-form holiday comedy content and learn about vodka cranberry cocktails** so that **I can purchase the featured flavor and join the holiday celebration**.

## Functional Requirements

### Must Have (P0) - November 1 Launch

#### Homepage Holiday Transformation
- [ ] Replace "It's 5 O'Clock" hero section with "Hive for the Holidays" messaging
- [ ] Update hero copy: Focus on vodka cranberry cocktail + "100% sweetened with organic wildflower honey"
- [ ] Change hero CTA button: Direct link to vodka cranberry product (not flavor selector)
- [ ] Apply festive holiday theme to hero section (see Design Requirements)
- [ ] Update scroll-down section copy to be holiday-themed
- [ ] Mobile responsive hero with holiday theme intact

#### Holiday Landing Page Structure
- [ ] Create dedicated landing page for "Hive for the Holidays" campaign
- [ ] Feature cranberry lime and honey vodka flavor prominently
- [ ] Display cocktail recipe cards alongside videos
- [ ] Integrate video carousel/feed system (see Video Carousel section)
- [ ] Maintain brand consistency with site (use existing Flow theme)
- [ ] Full mobile/tablet/desktop responsive layout

#### Video Carousel System
- [ ] Implement scrollable video carousel (desktop: next/previous buttons, mobile: swipe)
- [ ] First video: Jack making the cocktail (Hive-inspired recipe)
- [ ] Display cocktail recipe details adjacent to first video
- [ ] Support multiple video episodes (Jack playing different holiday characters)
- [ ] Video player controls: play/pause, volume, progress bar
- [ ] Social media feed aesthetic (TikTok-like experience, especially on mobile)
- [ ] Videos should be longer-form content (cut-down versions go to social)
- [ ] Ability to add videos progressively (Gavin can add later as content becomes available)

#### Character Skits (Content Planning)
Jack will portray multiple characters:
- [ ] "Funkle Jack" (Fun Uncle Jack) - Jack Griswold Funk persona
- [ ] "I Love Lucy" take - Take 12 style (getting progressively drunker each take)
- [ ] Jack Frost (new idea from meeting - to be confirmed)
- [ ] Other festive personalities TBD during shoot

#### Holiday Reviews Section
- [ ] Archive existing real reviews for November/December
- [ ] Restore real reviews on January 1, 2026
- [ ] Create fake holiday-themed reviews from characters:
  - **The Grinch:** 1-star review ("I drank too many of these")
  - **Santa Claus:** Review about elves drinking these
  - **Other holiday characters:** TBD during creative process
- [ ] Style reviews to match existing review component
- [ ] Make reviews feel authentic but humorous

### Should Have (P1) - Launch Window (Nov 1-7)

- [ ] Animations for holiday elements (Christmas lights twinkling, etc.)
- [ ] Hover effects on cocktail recipe cards
- [ ] "Play next video" auto-advance functionality
- [ ] Video progress indicators (1 of 5, etc.)
- [ ] Share buttons for individual video skits
- [ ] Enhanced mobile swipe gestures with visual feedback

### Nice to Have (P2) - Post-Launch Iteration

- [ ] Multiple design variations (A/B/C options mentioned):
  - Option A: 50s retro vibe (current creative direction shown)
  - Option B: Grinch-inspired theme (Jim Carrey style, NOT animated)
  - Option C: TBD based on client feedback
- [ ] User voting/rating on favorite character skits
- [ ] Holiday cocktail recipe download/print feature
- [ ] Email capture for holiday recipe newsletter
- [ ] Integration with social media feeds (auto-pull TikTok/Instagram content)

## Technical Requirements

### Shopify Implementation
- **Template Type:** Custom landing page template or section-based page
- **Components Needed:**
  - Custom hero section (holiday variant)
  - Video carousel component (reusable)
  - Recipe card component
  - Holiday review component (toggleable real/fake reviews)
  - CTA button components with holiday styling

### Performance Targets
- Lighthouse Performance Score: > 90
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Video lazy loading (don't load all videos at once)
- Optimize video file sizes (target: < 10MB per video)
- Serve videos via CDN

### Browser/Device Support
- Chrome, Safari, Firefox, Edge (latest 2 versions)
- iOS Safari (iOS 14+)
- Android Chrome (latest version)
- Tablet landscape/portrait modes
- Mobile: 375px minimum width
- Desktop: up to 1920px standard, 4K considerations

### Video Technical Specs
- Format: MP4 (H.264 codec)
- Aspect ratio: 9:16 (vertical/mobile-first) OR 16:9 (landscape)
- Resolution: 1080p minimum
- Fallback poster images for each video
- Captions/subtitles support (accessibility)

## Admin Configuration

### Shopify Theme Customizer Settings

#### Hero Section Controls
- Toggle: Enable/Disable Holiday Mode (switch back to standard hero after holidays)
- Text field: Holiday headline text (default: "Hive for the Holidays")
- Rich text: Holiday subheadline/description
- URL picker: Holiday CTA destination (default: vodka cranberry product)
- Text field: CTA button text (default: "Shop Vodka Cranberry")
- Image uploader: Holiday hero background image
- Color pickers: Holiday theme colors (override brand colors temporarily)

#### Video Carousel Settings
- Video blocks (repeatable):
  - Video file uploader (Shopify Files or external URL)
  - Video title text field
  - Video description (rich text)
  - Poster image uploader
  - Optional: Recipe details (if applicable)
- Layout toggle: Grid view vs. Carousel view
- Toggle: Auto-play videos on scroll (yes/no)
- Toggle: Mute videos by default (yes/no)

#### Recipe Card Settings (per video)
- Recipe name text field
- Ingredients list (rich text or repeating text fields)
- Instructions (rich text)
- Prep time, servings (text fields)
- Recipe image uploader

#### Holiday Reviews Settings
- Toggle: Show Holiday Reviews (vs. Real Reviews)
- Holiday review blocks (repeatable):
  - Character name (text field)
  - Star rating (1-5 selector)
  - Review text (text area)
  - Character avatar uploader
  - Date display (text field or date picker)
- Date range: Auto-restore real reviews on specific date (date picker: default Jan 1)

#### Design Theme Variations
- Dropdown: Select holiday theme variant (50s Retro / Grinch Vibes / Classic Holiday)
- Each variant loads different color schemes and graphic elements

## Design Requirements

### Hero Section Holiday Theme
**Visual Elements:**
- Christmas lights wrapped around the cranberry lime can
- Red festive imagery (Christmas trees, ornaments, holly, etc.)
- Christmas lights border or background elements
- Festive color palette: Reds, greens, golds, white
- Snow effects or winter atmosphere (optional animation)

**Typography:**
- Hero headline: Large, bold, festive font (may use custom holiday font)
- Subheadline: Maintain brand font with holiday copy
- CTA button: High contrast, festive styling (rounded corners consistent with brand)

**Layout:**
- Desktop: Hero image left/right, content opposite side
- Mobile: Stacked, image above fold, content below
- Ensure can image is prominent and decorated

### Video Carousel Layout

**Desktop:**
- Video player: Main focus (60-70% width)
- Recipe card: Side panel (30-40% width) - appears for recipe videos
- Navigation: Arrow buttons (previous/next) below or beside video
- Episode indicators: Dots or thumbnails below main player

**Mobile:**
- Full-width vertical videos (TikTok-style)
- Swipe left/right to navigate
- Recipe details: Collapsible accordion below video OR swipe up drawer
- Episode progress: Small dots at bottom of video

**Tablet:**
- Hybrid approach, test both orientations
- Portrait: Mobile-like experience
- Landscape: Desktop-like experience (smaller)

### Holiday Reviews Design
- Match existing review component styling
- Character avatars: Holiday-themed (Grinch, Santa, etc.)
- Special badge or indicator: "Holiday Special Review" (optional, for humor)
- Star ratings: Use festive star icon (optional holiday variation)

### Interaction States
- **Video hover (desktop):** Show play button overlay, slight zoom effect
- **Recipe card hover:** Subtle lift effect, shadow increase
- **CTA button states:**
  - Default: Festive color (red or green, not standard brand)
  - Hover: Darken, add glow effect
  - Active: Slightly scale down
  - Focus: Outline for accessibility
- **Review cards hover:** Slight background color change

### Brand Consistency
- Use existing Flow theme font families (brand fonts)
- Maintain Spirited Hive logo and brand colors (except where overridden for holiday)
- Keep standard site navigation and footer (can add holiday accents)
- Ensure holiday landing page doesn't feel disconnected from main site

### Design Assets Needed from Client
- [ ] Final video files (5-10 videos expected, length TBD)
- [ ] Festive can images (Christmas lights wrapped, if custom shoot)
- [ ] Character avatars for holiday reviews (Grinch, Santa, etc. - may be stock or custom)
- [ ] Holiday-themed background images/patterns
- [ ] Cocktail recipe details (ingredients, measurements, instructions)
- [ ] Final copy for hero section and throughout landing page

## Edge Cases & Error Handling

### Video Playback Issues
- **No video loads:** Display poster image with "Video unavailable" message
- **Slow connection:** Show loading spinner, low-quality preview first
- **Autoplay blocked (iOS):** Show prominent play button, don't break layout
- **Video format unsupported:** Provide fallback format (WebM backup)

### Content Availability
- **Videos not ready by Nov 1:** Landing page structure launches with placeholder "Coming Soon" cards
- **Recipe details incomplete:** Hide recipe panel, show only video
- **Holiday reviews not finalized:** Keep real reviews visible until fake ones are approved

### Device/Browser Compatibility
- **Older browsers (IE11):** Graceful degradation, display static images instead of video carousel
- **Small screens (< 375px):** Reduce padding, simplify layout, ensure text readability
- **Landscape mobile:** Adjust video aspect ratio handling, test thoroughly

### Date-Based Behavior
- **Before November 1:** Landing page is draft/hidden (or password-protected preview)
- **November 1 - December 31:** Holiday mode active, show fake reviews
- **January 1 onwards:** Auto-revert to standard hero (if not manually toggled off), restore real reviews
- **Year-round access:** Landing page URL remains accessible as archive (optional setting)

### Empty States
- **No videos uploaded yet:** Show "Holiday content coming soon" message with countdown
- **No recipe for a video:** Just show video, hide recipe panel
- **Review archive empty:** Don't show reviews section at all

## Acceptance Criteria

### Functionality
- [ ] Holiday hero section displays correctly on all devices (mobile, tablet, desktop)
- [ ] CTA button directs to vodka cranberry product page (correct URL)
- [ ] Video carousel allows navigation through all videos (click arrows or swipe)
- [ ] Videos play/pause correctly with standard controls
- [ ] Recipe details display alongside first video (cocktail making video)
- [ ] Holiday reviews appear in place of real reviews during November/December
- [ ] Real reviews automatically restore on January 1, 2026
- [ ] All links functional (no 404 errors)

### Design & Branding
- [ ] Festive holiday theme consistent across entire landing page
- [ ] Christmas lights and red imagery visible on hero section
- [ ] Video carousel has social media feed aesthetic (TikTok-like on mobile)
- [ ] Recipe cards are styled consistently with site design
- [ ] Holiday reviews match existing review component styling
- [ ] Typography consistent with Spirited Hive brand
- [ ] Color scheme festive but not garish

### Performance & Technical
- [ ] Page load time < 3 seconds on 4G connection
- [ ] Lighthouse Performance score > 90
- [ ] Videos load progressively (not all at once)
- [ ] Mobile responsive: All content accessible and readable on 375px width
- [ ] No layout breaking on tablet landscape/portrait
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)

### Accessibility
- [ ] All videos have poster images (for loading states)
- [ ] Keyboard navigation works for video carousel
- [ ] Focus states visible on all interactive elements
- [ ] Color contrast meets WCAG 2.1 AA standards (minimum 4.5:1)
- [ ] Screen reader announces video titles and recipe details
- [ ] Captions available for videos (if dialogue present)

### Admin/CMS
- [ ] Holiday mode can be toggled on/off from Shopify admin
- [ ] Videos can be added/removed without code changes
- [ ] Recipe details editable per video
- [ ] Holiday review characters can be customized
- [ ] Automatic date-based reversion to real reviews (Jan 1) works

## Dependencies

### Client-Side Dependencies
1. **Video Content:** All video files from Jack's shoot (Tuesday/Wednesday, Oct 22-23)
2. **Creative Assets:** Festive can images, holiday backgrounds, character avatars
3. **Copy/Content:** Final hero copy, recipe details, holiday review text
4. **Creative Direction Approval:** Theme variant choice (50s Retro vs. Grinch vs. other)

### Technical Dependencies
1. **Existing Spirited Hive Site:** Flow theme, brand colors, fonts already established
2. **Video Hosting:** Shopify Files or external CDN (determine in implementation)
3. **Review System:** Existing review functionality must be present (to override with holiday reviews)
4. **Product Pages:** Vodka cranberry product page must exist for CTA link

### Timeline Dependencies
- **October 22-23:** Video shoot happens (client responsibility)
- **October 24-25:** Video editing and asset prep (client + Gavin coordination)
- **October 26-28:** Development and implementation (Gavin)
- **October 29-30:** Testing, revisions, final polish
- **November 1:** LAUNCH (hard deadline)

## Open Questions

### Creative Direction
1. **Theme Variant:** Which design approach (50s Retro, Grinch Vibes, or other)? Need approval to proceed.
2. **Jack Frost Character:** Confirmed as one of the skits? (Mentioned as "amazing idea" in meeting)
3. **Number of Videos:** How many character skits total? (Estimate 5-10?)
4. **Video Length:** Target duration for each skit? (Affects file size/loading)

### Technical Implementation
5. **Video Hosting:** Use Shopify Files or external service (Vimeo, YouTube unlisted, CDN)?
6. **Auto-Play:** Should videos auto-play as user scrolls/swipes? (Mobile UX consideration)
7. **Video Format:** Vertical (9:16) for mobile-first or landscape (16:9) for traditional?
8. **Review Archive Method:** Manual toggle or automatic based on date? (Prefer automatic)

### Content Details
9. **Cocktail Recipes:** How many recipes to feature? (One main recipe or multiple variations?)
10. **Holiday Review Characters:** Final list of characters (Grinch, Santa, + who else?)
11. **Holiday Color Override:** Should we override standard brand colors temporarily, or integrate holiday theme within existing palette?
12. **Navigation:** Does "Hive for the Holidays" get a top-nav link, or only accessible via homepage CTA?

### Future Considerations
13. **Post-Holiday Access:** Keep landing page live year-round as archive, or take down after Dec 31?
14. **Next Year:** Build with reusability in mind for annual holiday campaigns?
15. **Social Integration:** Embed Instagram/TikTok posts alongside videos, or keep them separate?

---

## Notes

### Happy Accidents
- **Orange Color:** Gavin independently chose orange as secondary color for About Us page, which was coincidentally one of the original brand color finalists. Client loved it. Consider using orange accent in holiday theme.

### Meeting Context
- Jack expressed enthusiasm: "You're a wizard" when Gavin confirmed Nov 1 deadline achievable
- This is the FIRST time Spirited Hive is doing holiday content (establish strong foundation)
- Campaign goal: Combat seasonal slowdown in RTD alcohol by engaging existing fans
- Longer-form content on website, cut-down versions for social media shareability

### Related Projects
- This PRD is isolated to Spirited Hive holiday campaign
- Strive Soda has separate, parallel requirements (see strive-soda-prd.md)
- Gavin has 2 other projects this week, will dedicate full week starting Oct 28 to finish these

---

**Document Owner:** Why Not Us Labs (Gavin McNamara)
**Stakeholders:** Jack Espy, Chris Clark (Spirited Hive / Strive Soda)
**Last Updated:** October 21, 2025
**Next Review:** October 24, 2025 (post-shoot, asset handoff)
