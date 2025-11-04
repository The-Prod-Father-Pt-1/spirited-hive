# Final QA Checklist - Holiday Campaign

**Date:** 2025-11-03
**Theme:** "Hive for the Holidays" (#153001951460)
**Testing URLs:**
- Homepage: https://spirited-hive.myshopify.com?preview_theme_id=153001951460
- Product: https://spirited-hive.myshopify.com/products/spirited-hive-vodka-cranberry-lime?preview_theme_id=153001951460

---

## ✅ VERIFIED - Links & CTAs

### Homepage Hero Section
- [x] **Hero CTA Button** → `/products/spirited-hive-vodka-cranberry-lime` ✅
- [x] **Button Text:** "Get Your Spirit" ✅
- [x] **Button Style:** Black background (#000000), white text (#ffffff) ✅
- [x] **Slide Link:** Also links to cranberry product ✅

### Other Homepage Links to Verify
- [ ] Navigation menu → All links work
- [ ] "Shop the Drinks" button → `/collections/drinks`
- [ ] "Shop Tequila Ginger & Lime" button → `/products/spirited-hive-tequila-ginger`
- [ ] "Store Locator" button → `/pages/find-hive-near-you`
- [ ] Footer links → All work
- [ ] Social media icons → All work

### Product Page Links to Verify
- [ ] "Add to Cart" button functional
- [ ] "Buy Now" button functional (if exists)
- [ ] Breadcrumb navigation works
- [ ] Related products links
- [ ] Back to collection link

---

## 🎨 STYLING CHECKS

### Desktop (≥1025px) - Homepage

#### Hero Section
- [ ] Background: Crimson red (#DC143C)
- [ ] Heading: "CHEERS, HIVE HERE!" in white
- [ ] Subtext: "Spiked. Your. Holiday." in white
- [ ] Button: Black with white text, good hover state (dark gray #333)
- [ ] Image displays correctly on left side
- [ ] Text centered vertically and horizontally
- [ ] No text overflow or wrapping issues

#### Video Carousel Section
- [ ] Background: Crimson red (#DC143C)
- [ ] Heading: "Holiday Spirits & Skits" in white
- [ ] Subheading: "Watch Jack's hilarious holiday character videos" in white
- [ ] Video aspect ratio: 16:9 (landscape)
- [ ] Left/right arrow buttons visible
- [ ] Arrow buttons work (click to change video)
- [ ] Thumbnail navigation at bottom
- [ ] Thumbnails scroll horizontally
- [ ] Active thumbnail highlighted
- [ ] Videos are centered
- [ ] Video titles and descriptions in white
- [ ] Placeholder message visible (no videos uploaded yet)

#### Character Reviews Section
- [ ] Background: Crimson red (#DC143C)
- [ ] Heading: "What Holiday Characters Are Saying" in white
- [ ] Grid layout: 2-3 columns (auto-fit)
- [ ] Review cards: Glassmorphism effect (semi-transparent white)
- [ ] Review text: BLACK on white cards ✅
- [ ] Character names: WHITE text in BLACK bubble badges ✅
- [ ] Holiday badges: BLACK text on white badges ✅
- [ ] Star ratings: WHITE on red background ✅
- [ ] Cards have hover effect (lift 4px, shadow increases)
- [ ] All 18 reviews visible
- [ ] No overflow or text cut-off

#### Holiday Effects
- [ ] Snowfall animation smooth (100 snowflakes)
- [ ] Christmas lights across top of page
- [ ] Snow mounds at bottom with trees and snowman
- [ ] Effects don't interfere with content
- [ ] No performance lag

### Tablet (769-1024px) - Homepage

#### Hero Section
- [ ] Still displays correctly
- [ ] Text readable
- [ ] Button tappable
- [ ] Image responsive

#### Video Carousel
- [ ] Videos maintain 16:9 aspect ratio
- [ ] Arrow buttons still visible
- [ ] Thumbnails work
- [ ] Touch targets large enough

#### Character Reviews
- [ ] Grid layout adjusts (probably 2 columns)
- [ ] Cards still readable
- [ ] Spacing appropriate
- [ ] No overlap

### Mobile (≤768px) - Homepage

#### Hero Section
- [ ] Background: Crimson red
- [ ] Image moves to TOP
- [ ] Text below image
- [ ] Text still white and readable
- [ ] Button: Black with white text
- [ ] Button large enough to tap easily
- [ ] No horizontal overflow

#### Video Carousel
- [ ] Videos switch to 9:16 (vertical/portrait)
- [ ] Arrow buttons HIDDEN (swipe-only)
- [ ] **SWIPE LEFT** changes to next video
- [ ] **SWIPE RIGHT** changes to previous video
- [ ] Swipe feels natural (velocity detection)
- [ ] Thumbnails scroll horizontally
- [ ] Thumbnails hidden scrollbar
- [ ] Videos fit within 85vh height
- [ ] No vertical overflow

#### Character Reviews
- [ ] Horizontal scroll (NOT grid)
- [ ] Cards are 85vw width
- [ ] Snap-to-center scrolling
- [ ] Smooth scroll animation
- [ ] Hidden scrollbar
- [ ] First card partially visible to hint at scroll
- [ ] Review text BLACK and readable
- [ ] Character names WHITE in black bubbles
- [ ] Holiday badges BLACK text on white

#### Holiday Effects
- [ ] Snowfall reduced to 40 snowflakes
- [ ] Still smooth performance
- [ ] Snow mounds height: 160px (shorter on mobile)
- [ ] Christmas lights still visible
- [ ] No lag when scrolling

---

## 📱 INTERACTIVE TESTING

### Video Carousel Interactions

**Desktop:**
- [ ] Click left arrow → Previous video
- [ ] Click right arrow → Next video
- [ ] Click thumbnail → Jump to that video
- [ ] Hover arrows → Hover state visible
- [ ] Keyboard accessible (Tab navigation)

**Mobile/Tablet:**
- [ ] Swipe left (fast) → Next video immediately
- [ ] Swipe left (slow) → Next video if > 50px
- [ ] Swipe right (fast) → Previous video immediately
- [ ] Swipe right (slow) → Previous video if > 50px
- [ ] Tap thumbnail → Jump to that video
- [ ] Thumbnail scroll smooth
- [ ] No accidental vertical scrolling during swipe

### Character Reviews Interactions

**Desktop:**
- [ ] Hover card → Lifts 4px with shadow
- [ ] Click character name → No action (just display)
- [ ] Scroll page → Reviews visible
- [ ] No horizontal scroll on page

**Mobile:**
- [ ] Swipe/scroll cards horizontally
- [ ] Cards snap to center
- [ ] Smooth momentum scrolling
- [ ] Can't scroll past first/last card
- [ ] No vertical scroll while swiping cards
- [ ] First card hints at horizontal scroll

### Button Hover States

**Desktop:**
- [ ] Hero button: Black → Dark gray #333 on hover
- [ ] Hero button: Cursor changes to pointer
- [ ] Other buttons: Proper hover states
- [ ] Links: Underline on hover

---

## 🏗️ PRODUCT PAGE - Holiday Theme

### Desktop Product Page

#### Hero/Header Section
- [ ] Background: Crimson red (#DC143C)
- [ ] Product title: White text
- [ ] Price: White text
- [ ] Description: White text
- [ ] "Add to Cart" button: Black with white text (matching homepage)
- [ ] Product images: Display correctly
- [ ] Breadcrumbs: White text with underlines
- [ ] Quantity selector: Visible and functional

#### Product Details
- [ ] Ingredients: White text on red or black on white cards
- [ ] Nutrition facts: Readable contrast
- [ ] Reviews section: Check text visibility
- [ ] Related products: Check styling

#### Holiday Effects (Optional)
- [ ] Snowfall animation (same as homepage)
- [ ] Christmas lights at top
- [ ] Snow mounds at bottom
- [ ] OR minimal holiday badge/banner

### Mobile Product Page
- [ ] All text readable
- [ ] Buttons tappable
- [ ] Images swipeable (product gallery)
- [ ] Add to cart button fixed at bottom (if design has this)
- [ ] No horizontal overflow

### Tablet Product Page
- [ ] Responsive layout
- [ ] All functionality works
- [ ] Text readable

---

## 🎯 TEXT VISIBILITY AUDIT

### White Text on Red Background (#DC143C)
- [ ] Homepage hero heading
- [ ] Homepage hero subtext
- [ ] Video carousel heading
- [ ] Video carousel subheading
- [ ] Video titles and descriptions
- [ ] Character reviews section heading
- [ ] Star ratings (white stars)
- [ ] Product page hero text (if red background)

### Black Text on White Background
- [ ] Character review text inside cards ✅
- [ ] Holiday badges "❄ Holiday Special Review" ✅
- [ ] Any body text sections

### White Text on Black Background
- [ ] Character names in bubble badges ✅
- [ ] Hero CTA button text ✅

### Contrast Ratios (WCAG AA Minimum: 4.5:1)
- [ ] White (#FFFFFF) on red (#DC143C) = ~4.5:1 ✅
- [ ] Black (#000000) on white (#FFFFFF) = 21:1 ✅ (perfect)
- [ ] White (#FFFFFF) on black (#000000) = 21:1 ✅ (perfect)

---

## 🚀 PERFORMANCE CHECKS

### Page Load Speed
- [ ] Homepage loads in < 3 seconds (desktop)
- [ ] Homepage loads in < 4 seconds (mobile)
- [ ] Product page loads in < 3 seconds (desktop)
- [ ] Product page loads in < 4 seconds (mobile)

### Animation Performance
- [ ] Snowfall smooth (no dropped frames)
- [ ] Video carousel transitions smooth
- [ ] Review card swipe smooth
- [ ] Hover animations smooth
- [ ] No janky scroll

### Console Errors
- [ ] **NO JavaScript errors** in console
- [ ] No CSS errors
- [ ] No 404 errors for missing assets
- [ ] No CORS errors

**Check Console:**
1. Open DevTools (F12 or Cmd+Option+I)
2. Go to Console tab
3. Refresh page
4. Look for red error messages
5. If errors exist: Document and fix

### Network Performance
- [ ] Videos load quickly (or show loading state)
- [ ] Images optimized (WebP format preferred)
- [ ] No unnecessarily large file downloads
- [ ] Fonts load without flash of unstyled text

---

## ♿ ACCESSIBILITY CHECKS

### Keyboard Navigation
- [ ] Tab key moves through all interactive elements
- [ ] Enter key activates buttons/links
- [ ] Arrow keys work in video carousel (optional)
- [ ] Esc key closes modals (if any)
- [ ] Focus indicators visible on all elements

### Screen Reader
- [ ] All images have alt text
- [ ] Buttons have descriptive labels
- [ ] Headings in logical order (H1, H2, H3)
- [ ] Links have descriptive text (not "click here")
- [ ] Form inputs have labels

### Color Contrast
- [ ] All text meets WCAG AA standards (4.5:1)
- [ ] Interactive elements distinguishable
- [ ] Focus indicators visible

### Touch Targets (Mobile)
- [ ] All buttons minimum 44x44px
- [ ] Adequate spacing between tappable elements
- [ ] No tiny links that are hard to tap

---

## 📊 BROWSER COMPATIBILITY

### Chrome (Latest)
- [ ] Homepage displays correctly
- [ ] Product page displays correctly
- [ ] All interactions work
- [ ] No console errors

### Safari (Latest)
- [ ] Homepage displays correctly
- [ ] Product page displays correctly
- [ ] All interactions work
- [ ] Video carousel works
- [ ] Swipe gestures work
- [ ] No console errors

### Firefox (Latest)
- [ ] Homepage displays correctly
- [ ] Product page displays correctly
- [ ] All interactions work
- [ ] No console errors

### Edge (Optional)
- [ ] Homepage displays correctly
- [ ] Product page displays correctly
- [ ] All interactions work

### Mobile Safari (iOS)
- [ ] Swipe gestures work naturally
- [ ] Videos play (tap to play)
- [ ] Smooth scrolling
- [ ] No zoom issues
- [ ] No text rendering issues

### Chrome Mobile (Android)
- [ ] Swipe gestures work
- [ ] Videos play
- [ ] Smooth scrolling
- [ ] No rendering issues

---

## 🔧 FUNCTIONAL TESTING

### Date-Based Review Switching
- [ ] Open Shopify Theme Editor
- [ ] Go to "Holiday Reviews" section
- [ ] **Currently:** "Force Holiday Mode" is ON → 18 character reviews display
- [ ] Toggle OFF "Force Holiday Mode"
- [ ] Toggle ON "Force Real Reviews"
- [ ] **Verify:** Switches to real customer review placeholders
- [ ] Toggle back to holiday mode
- [ ] **Verify:** 18 character reviews return

### Video Upload Test (When Videos Ready)
1. [ ] Upload video to Shopify Files (Content → Files)
2. [ ] Copy video URL from Shopify
3. [ ] Go to Theme Editor → Holiday Video Carousel
4. [ ] Click on "Video 1" block
5. [ ] Paste URL into "Video URL" field
6. [ ] Save
7. [ ] Refresh preview
8. [ ] **Verify:** Video plays on click/tap

### Form Functionality (Product Page)
- [ ] Variant selector works (if product has variants)
- [ ] Quantity selector increases/decreases
- [ ] Add to Cart adds product to cart
- [ ] Cart drawer opens (or navigates to cart page)
- [ ] Cart shows correct product and quantity

---

## 📸 VISUAL REGRESSION TESTING

### Screenshot Comparison
1. [ ] Take screenshots of current homepage
2. [ ] Take screenshots after any changes
3. [ ] Compare side-by-side
4. [ ] Look for unintended layout shifts
5. [ ] Verify all elements in correct positions

### Common Visual Bugs to Check
- [ ] Text not cut off or overflowing
- [ ] Images not distorted or stretched
- [ ] Spacing consistent between sections
- [ ] No white gaps or weird margins
- [ ] Colors match design (#DC143C red, #000 black, #FFF white)
- [ ] Fonts rendering correctly

---

## 📝 CONTENT ACCURACY

### Text Content
- [ ] Hero heading: "CHEERS, HIVE HERE!" ✅
- [ ] Hero subtext: "Spiked. Your. Holiday." ✅
- [ ] Hero body: Mentions honey and cranberry ✅
- [ ] CTA button: "Get Your Spirit" ✅
- [ ] Video section heading: "Holiday Spirits & Skits" ✅
- [ ] Reviews heading: "What Holiday Characters Are Saying" ✅
- [ ] All 18 character names correct ✅
- [ ] No typos in review text ✅

### Links Accuracy
- [ ] Hero CTA → `/products/spirited-hive-vodka-cranberry-lime` ✅
- [ ] No broken links (404 errors)
- [ ] External links open in new tab (if any)

---

## 🎬 PLACEHOLDER DOCUMENTATION

### Videos Needed (4 Total)

**When you have the videos, provide these details:**

1. **The Grinch Discovers Spirited Hive**
   - Video URL: [PASTE HERE]
   - Poster image URL: [PASTE HERE]
   - File size: [e.g., 8.5 MB]
   - Duration: [e.g., 0:45]

2. **Santa's Workshop Goes Wild**
   - Video URL: [PASTE HERE]
   - Poster image URL: [PASTE HERE]
   - File size: [e.g., 9.2 MB]
   - Duration: [e.g., 0:38]

3. **Rudolph's Night Off**
   - Video URL: [PASTE HERE]
   - Poster image URL: [PASTE HERE]
   - File size: [e.g., 7.8 MB]
   - Duration: [e.g., 0:42]

4. **Frosty's Meltdown (The Good Kind)**
   - Video URL: [PASTE HERE]
   - Poster image URL: [PASTE HERE]
   - File size: [e.g., 8.1 MB]
   - Duration: [e.g., 0:50]

**Video Specs:**
- Format: MP4 (H.264 codec)
- Resolution: 1080p (1920x1080)
- Aspect Ratio: Will adapt based on device
  - Mobile: 9:16 (vertical)
  - Desktop: 16:9 (landscape)
- Max file size: 25MB per video (10MB preferred for mobile)
- Frame rate: 30fps

**Poster Image Specs:**
- Format: JPG or PNG
- Size: 1920x1080px (16:9 ratio)
- Max file size: 500KB per image
- Content: Eye-catching still from video

### Character Avatars Needed (18 Total - Optional)

**If you want to add character images:**

1. The Grinch - Image URL: [PASTE HERE]
2. The Grinch (30 min later) - Image URL: [PASTE HERE]
3. Santa Claus - Image URL: [PASTE HERE]
4. Rudolph - Image URL: [PASTE HERE]
5. Frosty the Snowman - Image URL: [PASTE HERE]
6. Buddy the Elf - Image URL: [PASTE HERE]
7. Ebenezer Scrooge - Image URL: [PASTE HERE]
8. Jack Frost - Image URL: [PASTE HERE]
9. Abominable Snowman - Image URL: [PASTE HERE]
10. Mrs. Claus - Image URL: [PASTE HERE]
11. Elf on the Shelf - Image URL: [PASTE HERE]
12. Krampus - Image URL: [PASTE HERE]
13. Hermey the Elf - Image URL: [PASTE HERE]
14. Yukon Cornelius - Image URL: [PASTE HERE]
15. The Nutcracker - Image URL: [PASTE HERE]
16. Heat Miser - Image URL: [PASTE HERE]
17. Snow Miser - Image URL: [PASTE HERE]
18. Kevin McCallister - Image URL: [PASTE HERE]

**Avatar Specs:**
- Format: PNG with transparent background
- Size: 200x200px (square)
- Will display as circle (circular crop)
- Max file size: 100KB per image
- Style: Consistent illustration style across all

---

## ✅ FINAL SIGN-OFF

### Pre-Launch Approval

**Stakeholder:** Jack / Client Name
**Date:** [DATE]
**Status:** [ ] Approved / [ ] Changes Requested

**Comments:**
[Space for feedback]

**Developer Sign-Off:**
- [ ] All critical functionality tested
- [ ] All styling verified across devices
- [ ] No blocking bugs found
- [ ] Performance acceptable
- [ ] Ready for launch

**Date Signed Off:** [DATE]
**Signed By:** [YOUR NAME]

---

## 🚨 KNOWN ISSUES

**None at this time!** ✅

If issues arise during testing, document them here:

| Issue | Severity | Device | Browser | Status | Notes |
|-------|----------|--------|---------|--------|-------|
| Example: Button not clickable | High | Mobile | Safari | Fixed | Updated z-index |

---

## 📅 TESTING SCHEDULE

**Tonight (Nov 3):**
- [ ] Desktop testing (Chrome, Safari, Firefox)
- [ ] Mobile emulator testing (DevTools)
- [ ] Text visibility audit
- [ ] Product page holiday theme implementation

**Tomorrow Morning (Nov 4):**
- [ ] Real device testing (iPhone, Android)
- [ ] Tablet testing (iPad)
- [ ] Performance audit
- [ ] Final stakeholder review

**Tomorrow Afternoon:**
- [ ] Fix any last-minute issues
- [ ] 🚀 **LAUNCH!**

---

**Testing Started:** [DATE/TIME]
**Testing Completed:** [DATE/TIME]
**Total Time Spent:** [X hours]
**Issues Found:** [X]
**Issues Fixed:** [X]
**Issues Remaining:** [X]
