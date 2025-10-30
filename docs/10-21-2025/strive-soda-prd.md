# Strive Soda: Website Improvements & Fixes - Product Requirements Document

## Overview
- **Project:** Strive Soda Website (strivesoda.com)
- **Priority:** P0/P1 Mixed (See individual features)
- **Target Completion:** End of October / Early November 2025
- **Theme:** Flow Theme (Shopify)
- **Estimated Effort:** 10-12 days (multiple work streams)

## Business Objective

Polish and complete the Strive Soda website to achieve:
1. **Brand consistency** across all pages (fonts, buttons, colors, spacing)
2. **Mobile responsiveness** fixes for optimal user experience across devices
3. **Functionality completeness** (working sections, no half-finished pages)
4. **Retail preparedness** with store locator feature (critical for growth strategy)
5. **SEO/AEO optimization** through proper image usage, content structure
6. **Scientific credibility** with brand-appropriate typography on nutrition elements

**Strategic Context:** Retail sales expected to outpace DTC within 12 months. Currently San Diego only, but scaling retail is long-term priority.

## User Stories

### Current Customer
As a **repeat Strive customer**, I want to **easily navigate the site, read consistent information, and find products on mobile** so that **I can make informed purchases and find Strive in stores near me**.

### New Visitor (Mobile)
As a **first-time visitor on mobile**, I want to **view the homepage video without weird white space and read product details that aren't cut off** so that **I understand the brand and can purchase confidently**.

### Retail Partner/Consumer
As a **potential retail customer**, I want to **quickly find where Strive is sold near me** so that **I can purchase at my local store instead of waiting for shipping**.

### Science-Curious Consumer
As a **health-conscious shopper**, I want to **see scientific credibility in nutrition information with clear, readable typography** so that **I trust Strive's hydration claims**.

## Functional Requirements

## CRITICAL FIXES (P0) - Must Ship ASAP

### 1. Product Page Responsiveness Issues
**Priority:** P0
**Effort:** 2-3 hours

#### Issues Identified:
- [ ] **Peach product image too short** on product page (visual bug)
- [ ] **Cannot scroll to top** on product page on certain screen sizes (UX blocker)
- [ ] Fix componentized structure (Gavin mentioned it's already modular, just needs adjustment)

**Acceptance Criteria:**
- [ ] Peach product image displays at proper height (matches other flavors)
- [ ] Page scrolls to top without obstruction on all screen sizes
- [ ] Mobile (375px - 768px) displays correctly
- [ ] Tablet (768px - 1024px) displays correctly
- [ ] Desktop (1024px+) displays correctly

### 2. Homepage Video White Space Bug
**Priority:** P0
**Effort:** 2-3 hours

#### Issue:
- When window is resized/certain dimensions, video scrunches and creates large white space above it
- Issue present on desktop at specific widths
- Also appears on some mobile dimensions

**Technical Context:**
- Gavin fixed the "meat on the header" cropping issue
- Fix created unintended white space above video at specific breakpoints

**Acceptance Criteria:**
- [ ] No white space above video at any screen width (375px - 1920px)
- [ ] Video scales proportionally without scrunching
- [ ] Header copy remains properly positioned (don't break previous fix)
- [ ] Test on mobile portrait, mobile landscape, tablet portrait, tablet landscape, desktop

### 3. Font Consistency Across Site
**Priority:** P0
**Effort:** 4-6 hours

#### Issues Identified:
- Different heading font weights across pages (especially Science page)
- Inconsistent body text weights
- Science page: First heading looks great ("Over 75% of adults..."), subsequent headings totally different style
- "Why Honey?" section has mismatched font weight under heading
- "Not all sweeteners are created equal" lacks consistency with page

#### Font Family Reference:
Client provided Drive Soda toolkit with brand fonts:
- **Primary Brand Font:** (from "tropical recharge" on can - TBD from toolkit)
- **Scientific Font:** **Poly Sans Mono** (typewriter-style, for nutrition panels and scientific elements)
- **Body Font:** (standard Flow theme, TBD from brand book)

**Acceptance Criteria:**
- [ ] All H1 headings use same font family and weight site-wide
- [ ] All H2 headings use same font family and weight site-wide
- [ ] All H3 headings consistent
- [ ] All body copy uses same font weight
- [ ] Science page headings match style of "Over 75% of adults chronically dehydrated" (the good example)
- [ ] "Why Honey?" section body text matches weight of other sections
- [ ] Document font scale/hierarchy for future consistency

**Design Reference:**
Science page top section (75% adults + hydration bubbles + button) is the GOLD STANDARD for typography.

### 4. Button Shape Consistency
**Priority:** P0
**Effort:** 3-4 hours

#### Issues Identified:
- Some buttons have rounded/bubble corners (Shop Flavors on homepage)
- Some buttons have square corners (product page add to cart area)
- Multiple degrees of rounding across site:
  - Full bubbles (Shop Flavors)
  - Semi-rounded (nutrition panel boxes, one-time purchase)
  - Square (add to cart, buy with shop)
- Inconsistency hurts brand perception ("hurts my eyes to see" - Chris)

**Client Preference:** Rounded corners on all buttons (except Shopify native components if impossible)

**Technical Constraint:**
- Add to Cart and Buy with Shop buttons are Shopify components (may be limited)
- Gavin needs to check if rounding can be applied via extensions/custom CSS
- Everything outside purchase components is fully customizable

**Acceptance Criteria:**
- [ ] All custom buttons have consistent border-radius (decide on px value: 8px? 12px? 20px?)
- [ ] Shop Flavors, navigation CTAs, all custom buttons match
- [ ] One-time purchase / Subscription buttons match primary button style
- [ ] Nutrition panel boxes on product page match button rounding
- [ ] Add to Cart: Attempt to round corners (if technically possible via Shopify settings)
- [ ] Buy with Shop: Attempt to round corners (if technically possible)
- [ ] Document which buttons are customizable vs. Shopify-locked
- [ ] Consistent drop shadow on buttons (currently inconsistent)

**Test Cases:**
- [ ] Homepage: Shop Flavors button
- [ ] Product page: Add to cart, Buy with Shop, one-time purchase, subscription
- [ ] Science page: CTA buttons
- [ ] About Us: Any CTA buttons
- [ ] Navigation: Mobile menu buttons (if applicable)

## HIGH PRIORITY (P1) - Ship by Early November

### 5. Science Page Content & Visual Enhancements
**Priority:** P1
**Effort:** 6-8 hours

#### Content Updates:
- [ ] Add "75% of adults" section with stat and CTA on right side (partially done)
- [ ] Right side CTA: "This is why you go with Strive" (solution statement)
- [ ] Make "Why Honey?" section "look sexier" (more engaging visually)

#### Visual Enhancements for Why Honey Section:
Current state: Rich in antioxidants and Natural sweetness boxes are "really bland" - beige background, boring

**New Design Approach:**
- [ ] Add hover effects (similar to sodium/potassium/magnesium bubbles above)
- [ ] On hover: Display detailed info (e.g., "Honey is packed with flavonoids...")
- [ ] Change background color (less bland, more vibrant)
- [ ] Add images on hover OR use existing images more prominently
- [ ] Match visual style of hydration bubbles above (continuity)

**SEO/AEO Benefit:**
- Adding images on hover helps with search ranking (SEO)
- Supports AI-powered search (AEO - ChatGPT-style search optimization)
- More images = better indexing for "hydration soda" and related keywords

#### Nutrition Panel Boxes:
- [ ] Style consistency with bubble elements
- [ ] Consider hover states for interactivity
- [ ] Copy colors from June Shine (current) but customize with Strive brand colors
- [ ] Test different bubble colors (currently borrowed from June Shine example)

**Acceptance Criteria:**
- [ ] "75 of adults" section complete with stat + solution CTA
- [ ] Why Honey boxes have hover states with detailed info
- [ ] Background colors updated (not bland beige)
- [ ] Images integrated (either static or on hover)
- [ ] Hover effects smooth (CSS transitions, not jumpy)
- [ ] Mobile: Hover becomes tap interaction
- [ ] Sodium/potassium/magnesium bubbles also have hover descriptions working

### 6. Scientific Typography Implementation
**Priority:** P1
**Effort:** 4-5 hours

#### Objective:
Bring the "Poly Sans Mono" font (from can nutrition panel) into the website to create visual continuity between product packaging and digital experience.

**Current State:**
- Nutrition panel on product page is a screenshot from can artwork (static image)
- No use of scientific typeface elsewhere on site
- Lost opportunity for brand consistency

**Implementation Areas:**
- [ ] **Product Page Nutrition Facts:** Replace static image with web fonts (SVG/WEBP format)
- [ ] **Science Page Elements:** Use Poly Sans Mono for scientific stats, data points, nutrition info
- [ ] **Nutrition Panel Diagram:** Rebuild in Figma with web fonts, import as editable component

**Technical Approach:**
- Gavin created nutrition facts in Figma, then coded in WEBP/SVG format
- Text remains editable (not flattened image)
- Font files provided by client (Poly Sans Mono family)

**Legibility Check:**
- Poly Sans Mono works well for nutrition panels (short text, scientific context)
- Don't use for long-form body copy (would be illegible)
- Use selectively: stats, data labels, nutrition facts

**Acceptance Criteria:**
- [ ] Poly Sans Mono font files imported to Shopify theme
- [ ] Nutrition facts panel uses Poly Sans Mono (editable text, not image)
- [ ] Can manually edit "carbonated water" and other ingredients in code (proof it's text, not image)
- [ ] Science page uses Poly Sans Mono for key data points/stats
- [ ] Font renders correctly across browsers (web font format verified)
- [ ] Legibility tested on mobile (minimum 12px font size)
- [ ] Fallback font defined if Poly Sans Mono fails to load

### 7. Homepage Content Strategy Update
**Priority:** P1
**Effort:** 2-3 hours (implementation after content provided)

#### Old Approach:
- Lead with sodium, potassium, magnesium (hydration electrolytes)
- Science-first messaging

#### New Approach (Client Request):
- Lead with SODA first (product positioning)
- THEN transition into hydration benefits
- THEN link to Science page for deep dive

**Rationale:**
- Strive is a soda brand that happens to hydrate
- Don't lead with intimidating science
- More approachable for general consumers

**Implementation:**
- [ ] Update hero section copy (soda-first messaging)
- [ ] Rewrite transition section (soda -> hydration -> science)
- [ ] Add clear CTA to Science page ("Learn the science")
- [ ] Maintain visual hierarchy (don't bury hydration benefit)

**Acceptance Criteria:**
- [ ] Homepage leads with soda product benefits
- [ ] Hydration mentioned as secondary benefit (not primary)
- [ ] Clear path to Science page for interested users
- [ ] Mobile version maintains new content hierarchy

**BLOCKER:** Client needs to provide final copy (Jack and Chris to collaborate)

### 8. About Us Page Completion
**Priority:** P1
**Effort:** 6-8 hours (dependent on content)

#### Current State:
- Checkerboard layout with Tiffany blue and ORANGE (happy accident - loved by client)
- AI-generated placeholder content (needs replacement)
- Half-finished appearance (empty spaces)
- Missing "Our Story" narrative

#### Client Feedback:
- Love the checkerboard layout (keep it)
- Love the orange color (unexpected but great secondary color)
- Need real content: updated images, team photos, Strive story

**Content Needed from Client:**
- [ ] Our Story copy (Jack & Chris to create on follow-up call - Oct 22)
- [ ] Team photos from studio shoot (Chris has album, sending by end of week)
- [ ] Updated brand images (replacing AI placeholders)
- [ ] Any additional sections (mission, values, etc.)

**Layout Options:**
1. **Current:** Checkerboard with content blocks
2. **Video Integration:** Surf video (born and raised in San Diego vibe) + other brand video

**Implementation:**
- [ ] Replace AI content with real Strive story
- [ ] Swap placeholder images with studio photos
- [ ] Add "We Strive Together" section with team photos
- [ ] Integrate surf video (MP4, similar to homepage implementation)
- [ ] Consolidate empty spaces (don't leave half-finished sections visible)
- [ ] Match header styling to other pages (consistency)
- [ ] If content not ready: Remove empty sections temporarily (per Chris request)

**Acceptance Criteria:**
- [ ] No placeholder/AI-generated content visible
- [ ] All images are real Strive photos (team, product, lifestyle)
- [ ] Our Story section tells brand narrative (Google Doc to be created)
- [ ] Checkerboard layout maintained (Tiffany blue + orange)
- [ ] Header styling matches Science page (We Strive Together)
- [ ] Video(s) embedded and functional
- [ ] Mobile responsive (checkerboard stacks properly)
- [ ] No empty/half-built sections visible
- [ ] Page feels complete and professional

**Timeline Dependency:**
- Content creation call: Tomorrow (Oct 22) between Jack and Chris on the road
- Studio photos: By end of week (Oct 25)
- Implementation: Following week (Oct 28+)

### 9. Mobile Footer Optimization
**Priority:** P1
**Effort:** 1-2 hours

#### Current Design:
- iPhone graphic showing social media icons at bottom of page
- Looks "really sick" on desktop (client feedback)
- May be too bold/different for mobile

**Client Request:**
- Simplify for mobile: Just show social icons (remove iPhone graphic)
- Keep iPhone graphic on desktop (looks cool)
- Responsive variant

**Current Status:**
Jack said "I think it looks cool the way it is" - may not need change, but option available

**Implementation:**
- [ ] Test current mobile footer (get stakeholder approval)
- [ ] If change needed: Create mobile variant (icons only, no iPhone)
- [ ] If keeping current: Ensure iPhone scales properly on small screens
- [ ] Test social links work correctly (already verified in Shopify by Gavin)
- [ ] Ability to add new social platforms (Twitter, etc.) via Shopify admin

**Acceptance Criteria:**
- [ ] Social links functional on mobile and desktop
- [ ] Icons are tappable on mobile (sufficient touch target size: 44x44px minimum)
- [ ] iPhone graphic (if kept on mobile) doesn't break layout at 375px width
- [ ] Stakeholder approval on final mobile design

## MEDIUM PRIORITY (P2) - Post-Launch Iteration

### 10. Store Locator Feature
**Priority:** P2 (but CRITICAL for long-term strategy)
**Effort:** 8-10 hours

#### Business Context (CRITICAL):
- **Retail will outpace DTC in 12 months** (strategically most important feature long-term)
- Currently only in San Diego, but scaling retail is priority
- Reference brands: Unwell Hydration (directs to Target), June Shine (focuses on store locator over DTC)
- DTC is priority NOW, but retail is future (3-year vision: retail >> DTC)

#### Implementation Strategy:
- [ ] Create dedicated Store Locator page
- [ ] Add to top navigation (high visibility)
- [ ] Include as CTA on multiple pages:
  - Homepage (below product showcase)
  - Product pages (alternative to DTC purchase)
  - About Us page
  - Science page (optional)

#### Navigation Structure Options:
**Option 1: Dropdown Menu**
- About Us (parent)
  - Our Story
  - Store Locator

**Option 2: Separate Top-Level Link**
- About Us
- Store Locator (standalone)

**Client Preference:** Dropdown approach to consolidate navigation (avoid half-finished look)

#### Technical Requirements:
- [ ] Store locator functionality (map integration: Google Maps API or Shopify app)
- [ ] Location search (ZIP code or city entry)
- [ ] Display nearby retail partners:
  - Store name
  - Address
  - Distance from user
  - Store hours (optional)
  - Phone number (optional)
- [ ] Map view showing pins for each location
- [ ] List view as alternative to map
- [ ] Mobile responsive (map + list work on small screens)

#### Current Data:
- San Diego stores only (small dataset to start)
- Will scale as retail distribution grows

#### Admin Configuration:
- [ ] Add/edit/remove store locations from Shopify admin
- [ ] Fields per store:
  - Store name (text)
  - Address (text)
  - City, State, ZIP (text fields)
  - Latitude/Longitude (auto-generated or manual)
  - Phone number (optional)
  - Store hours (optional)
  - Website URL (optional)
- [ ] Bulk upload via CSV (for future scaling)

#### Acceptance Criteria:
- [ ] Store locator page accessible from navigation
- [ ] User can search by ZIP code or city
- [ ] Results show closest stores first (distance calculation)
- [ ] Map displays pins for all nearby stores (within X miles)
- [ ] List view shows store details
- [ ] Click on store: Show details (address, phone, hours)
- [ ] Directions link (open in Google Maps/Apple Maps)
- [ ] Mobile: Map and list both functional on small screens
- [ ] "Find in Store" CTA appears on homepage and product pages
- [ ] Admin can add/edit stores without code changes

#### Timeline:
- **Content Dependency:** Chris to send store locator data by Friday (Oct 25)
- **Implementation:** Following week (Oct 28+)
- **Priority:** P2 for launch, but make it EXCELLENT (builds foundation for 3-year retail strategy)

**Gavin's Note:** "Store locator is one of my specialties" - high confidence in implementation quality

### 11. 3D Can Update
**Priority:** P2
**Effort:** TBD (dependent on 3D asset availability)

#### Current Status:
- Mentioned as "still needs to get done"
- No specifics discussed in meeting

#### Assumption:
- 3D interactive can viewer on product pages or homepage
- Client may provide 3D models or Gavin to create

**Action:** Needs clarification on next call

**Acceptance Criteria:** TBD

### 12. Review System Functionality
**Priority:** P2
**Effort:** Included in other work

#### Current State:
- Reviews visible on product pages
- Gavin mentioned "reviews we want to get done too"

#### Assumption:
- Review styling/placement may need updates
- Ensure reviews match design consistency (fonts, spacing)
- Mobile responsive review cards

**Acceptance Criteria:**
- [ ] Reviews display correctly on all product pages
- [ ] Styling matches site design
- [ ] Mobile responsive review layout
- [ ] Review submission form functional (if enabled)

## Technical Requirements

### Shopify Theme
- **Theme:** Flow (current)
- **Customization Level:** Extensive custom sections and components
- **Structure:** Componentized (Gavin's architecture - easy to update)

### Performance Targets
- Lighthouse Performance Score: > 90
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Cumulative Layout Shift: < 0.1

### Browser/Device Support
- Chrome, Safari, Firefox, Edge (latest 2 versions)
- iOS Safari (iOS 14+)
- Android Chrome (latest version)
- Tablet: iPad (portrait/landscape), Android tablets
- Mobile: 375px minimum width (iPhone SE)
- Desktop: 1024px - 1920px standard, 4K scaling

### Font Loading
- Web font formats: WOFF2 (primary), WOFF (fallback)
- Font display: swap (prevent invisible text)
- Preload critical fonts
- Fallback stack defined for all font families

### Image Optimization
- Format: WEBP (primary), JPG/PNG (fallback)
- Lazy loading: Below-the-fold images
- Responsive images: srcset for multiple sizes
- Compression: Maintain quality while reducing file size

### Accessibility (WCAG 2.1 AA)
- Color contrast: 4.5:1 minimum for text
- Keyboard navigation: All interactive elements accessible
- Focus states: Visible on all buttons/links
- Alt text: All images have descriptive alt attributes
- ARIA labels: For icon buttons and interactive elements

## Admin Configuration

### Theme Customizer Settings

#### Typography Controls
- Font family selectors (per element type: H1, H2, H3, body)
- Font weight selectors
- Font size controls (with mobile/desktop variants)
- Line height controls
- Letter spacing (optional)

#### Button Settings
- Border radius (px value for consistency)
- Drop shadow toggle and values
- Color pickers (background, text, hover states)
- Padding controls

#### Store Locator Settings
- Toggle: Enable/Disable store locator
- API key input (Google Maps)
- Default search radius (miles)
- Map zoom level
- Store location blocks (repeatable):
  - All fields listed in Store Locator feature above

#### Homepage Settings
- Video upload (homepage hero)
- Content priority toggle (Soda-first vs. Science-first)
- Section reordering (drag-and-drop if Flow supports)

#### Footer Settings
- Social media icon toggles (show/hide per platform)
- Social media URL fields
- Mobile footer variant toggle (iPhone graphic vs. icons only)

## Design Requirements

### Brand Colors
- **Primary:** Tiffany Blue (hex value TBD from brand book)
- **Secondary:** Orange (happy accident, now official)
- **Accent:** (TBD from brand palette)
- **Background:** White, light gray variants
- **Text:** Dark gray/black for readability

### Typography Scale
**Establish consistent hierarchy:**
- **H1:** [Font family], [weight], [size]px (desktop) / [size]px (mobile)
- **H2:** [Font family], [weight], [size]px (desktop) / [size]px (mobile)
- **H3:** [Font family], [weight], [size]px (desktop) / [size]px (mobile)
- **Body:** [Font family], [weight], [size]px (desktop) / [size]px (mobile)
- **Scientific:** Poly Sans Mono, [weight], [size]px (selective use)

**Action:** Document final scale after implementation

### Button Styling Standard
- **Border radius:** [8px / 12px / 20px - TBD]
- **Padding:** [vertical]px [horizontal]px
- **Drop shadow:** [values TBD]
- **Hover state:** Darken by [%], scale [1.05?]
- **Active state:** Scale [0.95?]
- **Focus state:** Outline [color] [width]px

### Spacing System
- Consistent margin/padding increments (8px grid or 4px grid)
- Section spacing: Top/bottom padding consistent across pages
- Component spacing: Uniform gaps between elements

### Interaction Design
- **Hover effects:** Smooth transitions (0.2s - 0.3s)
- **Loading states:** Spinners or skeleton screens
- **Error states:** Inline validation messages
- **Success states:** Confirmation messages (toasts or inline)

## Edge Cases & Error Handling

### Responsive Breakpoints
- **< 375px:** Rare but handle gracefully (text scales down, no horizontal scroll)
- **375px - 767px:** Mobile portrait (primary mobile experience)
- **768px - 1023px:** Tablet portrait and large mobile landscape
- **1024px - 1439px:** Tablet landscape and small desktop
- **1440px+:** Desktop and large screens

### Font Loading Failures
- Fallback fonts render immediately (font-display: swap)
- System fonts as fallback: Arial, Helvetica, sans-serif
- Layout doesn't break if custom font fails

### Video Loading
- Poster image displays while video loads
- Autoplay disabled if data saver mode detected
- Fallback message if video fails to load

### Empty Content States
- About Us page: Hide empty sections if content not ready (per Chris request)
- Store locator: Show "Coming soon to your area" if no nearby stores
- Reviews: Show "No reviews yet" if product has no reviews

### Browser Compatibility
- **Safari:** Test video playback, font rendering
- **Firefox:** Test layout consistency
- **Edge:** Test Shopify component rendering
- **Older browsers:** Graceful degradation (no broken layout)

### Performance Degradation
- Slow network: Show loading indicators, don't break layout
- Large images: Compress aggressively, lazy load
- Multiple videos: Load on demand, not all at once

## Acceptance Criteria

### Critical Fixes (Must Pass)
- [ ] Product page: Peach image displays at full height
- [ ] Product page: Can scroll to top on all screen sizes
- [ ] Homepage: No white space above video at any width (375px - 1920px)
- [ ] All headings use consistent font family and weight site-wide
- [ ] All buttons have consistent border-radius (exact px value TBD)
- [ ] Add to Cart button rounded if technically possible

### High Priority (Should Pass)
- [ ] Why Honey section has hover effects with detailed info
- [ ] Poly Sans Mono font integrated into nutrition facts
- [ ] Science page "75% of adults" section complete with CTA
- [ ] About Us page has real content (no AI placeholders visible)
- [ ] Store locator functional with map and list view
- [ ] "Find in Store" CTA appears on homepage and product pages

### Design & Branding
- [ ] All pages feel visually consistent (fonts, colors, spacing)
- [ ] Button styling uniform across site (except Shopify-locked components)
- [ ] Tiffany blue + orange color scheme used consistently
- [ ] Poly Sans Mono used selectively for scientific elements (not overused)
- [ ] Typography hierarchy clear and readable on all devices

### Performance & Technical
- [ ] Lighthouse Performance > 90 on homepage
- [ ] Lighthouse Performance > 85 on product pages (acceptable due to Shopify overhead)
- [ ] Page load time < 3s on 4G connection
- [ ] No console errors on any page
- [ ] All images optimized (WEBP format with JPG fallback)
- [ ] Fonts load without FOIT (flash of invisible text)

### Accessibility
- [ ] Passes WAVE accessibility checker (0 errors)
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 minimum)
- [ ] Keyboard navigation works on all interactive elements
- [ ] Focus states visible and clear
- [ ] Alt text present on all images
- [ ] Screen reader testing: Major elements announced correctly

### Responsive Design
- [ ] Mobile (375px): All content readable, no horizontal scroll
- [ ] Mobile (414px): iPhone Pro Max, looks polished
- [ ] Tablet (768px): iPad portrait, layout adapts properly
- [ ] Tablet landscape (1024px): Content utilizes screen real estate
- [ ] Desktop (1440px): Optimal viewing experience
- [ ] Large desktop (1920px+): No excessive white space, content scales

### Admin/CMS
- [ ] Typography settings adjustable via theme customizer
- [ ] Button border-radius adjustable globally
- [ ] Store locations can be added/edited without code
- [ ] Social media links editable via admin
- [ ] Homepage content sections can be reordered (if possible in Flow)

## Dependencies

### Client Deliverables
1. **Font Files:** Poly Sans Mono and brand font family (DONE - sent in meeting via Dropbox)
2. **Studio Photos:** Team and product images (Due: End of week, Oct 25)
3. **About Us Content:** Our Story copy (Call scheduled: Oct 22, Jack + Chris)
4. **Store Locator Data:** San Diego store locations (Due: Friday, Oct 25)
5. **Homepage Copy:** Soda-first messaging (Due: TBD, Jack + Chris)
6. **3D Can Asset:** If needed for 3D can feature (Due: TBD)

### Technical Dependencies
1. **Shopify Theme:** Flow theme (current)
2. **Shopify Apps:** Store locator app or custom implementation (TBD)
3. **Google Maps API:** For store locator functionality
4. **Font Hosting:** Shopify theme fonts or external CDN
5. **Existing Components:** Gavin's componentized structure (already done)

### Timeline Dependencies
- **This Week (Oct 21-25):** Gavin focused on other 2 projects
- **Next Week (Oct 28+):** Gavin dedicates full week to Strive + Spirited Hive
- **November 1:** Spirited Hive holiday launch (parallel deadline)
- **Early November:** Strive improvements complete

## Open Questions

### Design Decisions
1. **Button Border Radius:** What exact px value? (8px, 12px, 16px, 20px, or full bubble?)
2. **Orange Color Usage:** How much orange throughout site? (Just About Us checkerboard or expand?)
3. **Scientific Font Usage:** Which exact elements beyond nutrition facts? (Headlines? Stats? Just data?)
4. **Mobile Footer:** Keep iPhone graphic or simplify to icons? (Jack said looks good as-is, confirm)

### Technical Implementation
5. **Store Locator:** Use Shopify app (which one?) or fully custom build?
6. **Font Fallbacks:** What system fonts for each brand font?
7. **Video Hosting:** Continue using Shopify Files or move to CDN for performance?
8. **Add to Cart Button:** Can rounding be achieved via Shopify theme settings, or need custom CSS injection?

### Content Clarification
9. **Homepage Hierarchy:** Final approval on soda-first vs. hydration-first approach?
10. **About Us Sections:** How many sections total? (Our Story, Team, + what else?)
11. **Store Count:** How many San Diego locations currently? (Need data for store locator)
12. **3D Can:** What exactly is needed? Interactive viewer? Just 3D render image?

### Admin/Configuration
13. **Theme Settings:** Should all typography be admin-configurable, or lock down for consistency?
14. **Button Customization:** Global button settings, or per-page control?
15. **Store Locator Admin:** Need training on how to add stores, or intuitive enough?

### Future Considerations
16. **Post-Launch:** Timeline for next round of iterations?
17. **Ongoing Maintenance:** What's the monthly retainer/hourly model after launch? (Discussed in meeting, to be finalized)
18. **Retail Scaling:** When to expect multi-state store data? (Affects store locator complexity)

---

## Notes

### Meeting Context & Quotes

**On Font Consistency:**
- Chris: "I love how that first one almost looks like an article... and then you go down to the next heading and it's like, totally different."
- Chris: "Just getting, like, across the board... across the board, like, hurt, hurts, hurt somebody from my perspective, like hurts my eyes to see like, oh, you know..."

**On Button Consistency:**
- Chris: "The buttons are sometimes rounded corners, sometimes square corners... just bringing a little bit of consistency across would be cool."
- Jack: "I think like the circle corners on everything looks really good in my opinion."

**On Scientific Typography:**
- Chris: "If there's any way to pull that [Poly Sans Mono] in to the design without making things illegible, it would really tie like the branding of the product branding, like our packaging design with the website."

**On Orange Color (Happy Accident):**
- Jack: "You know what's hilarious? I never told Gavin about orange... We were between this exact orange and this blue as our color for the brand. And we ended up going with the blue."
- Jack: "I think it looks really good having the orange be the other color, kind of like the secondary color."

**On Retail Strategy:**
- Chris: "Retail sales should outpace direct to consumer sales, like within the next 12 months... if we look like three years in the future, retail is going to destroy direct to consumer every day of the week."

**On Timeline & Commitment:**
- Gavin: "Next week what I can do, what I'll do is open up, you know, the entire week to work on this just because, you know, with the deadline coming up for November 1st..."
- Chris: "Really appreciate working with you, Gavin. This is great work so far. I feel like we're just getting warmed up."

### Quality Standards (From PM Instructions)
- Dual configurability: Code + Shopify admin (always both)
- Brand consistency: Exact fonts (Poly Sans Mono from toolkit), exact colors
- Complete features: All states (empty, error, loading, hover), all devices
- Shopify best practices: Performance, accessibility, security

### Related Projects
- Spirited Hive holiday campaign (parallel, Nov 1 deadline) - see spirited-hive-prd.md
- Compensation discussion deferred to tomorrow's call (Oct 22)

---

**Document Owner:** Why Not Us Labs (Gavin McNamara)
**Stakeholders:** Jack Espy, Chris Clark (Strive Soda / Spirited Hive)
**Last Updated:** October 21, 2025
**Next Review:** October 28, 2025 (when full-week sprint begins)
