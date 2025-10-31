# Holiday Reskin Plan - Hive for the Holidays

**Status:** Files identified, ready to begin implementation
**Timeline:** Complete by Monday/Tuesday (Nov 3-4)
**Gut-check meeting:** Tomorrow (Oct 31) @ 3:00 PM

---

## URLs Being Edited

1. **Landing Page (Homepage):** http://127.0.0.1:9292
2. **Cranberry Vodka Product Page:** http://127.0.0.1:9292/collections/all-products/products/spirited-hive-vodka-cranberry-lime

---

## File Map - What Controls Each Page

### Landing Page Files

**Template:**
- `templates/index.json` - Main homepage template

**Key Sections Used:**
- `sections/image-with-text-slideshow.liquid` - Hero section ("IT'S HIVE O'CLOCK")
- `sections/collage.liquid` - Grid collage (discover drinks, videos, images)
- `sections/featured-collection.liquid` - Product showcase
- `sections/accordion.liquid` - FAQ section
- `sections/scrolling-banner.liquid` - Scrolling text banners

**Global Styling:**
- `assets/custom.css` - Custom CSS overrides (currently has red test)
- `layout/theme.liquid` - Main layout wrapper
- `snippets/css-variables.liquid` - Theme color variables

### Product Page Files

**Template:**
- `templates/product.json` - Product page template

**Key Sections Used:**
- `sections/template--product.liquid` - Main product form (images, price, buy button)
- `sections/text-adverts.liquid` - Text banners ("PREMIUM SPIRITS", etc.)
- `sections/accordion-with-image.liquid` - FAQ with image
- `sections/animated-text.liquid` - Animated text section
- `sections/template--product--recommendations.liquid` - Product recommendations

**Global Styling:**
- `assets/custom.css` - Custom CSS overrides
- `assets/template-product.min.css` - Product page styles
- `layout/theme.liquid` - Main layout wrapper

---

## Holiday Reskin Tasks - Mapped to Files

### Task 1: Bright Red Background (BOTH PAGES)

**Status:** ✅ Test completed (red showing in preview)

**Files to Edit:**
1. `assets/custom.css` - Add proper red background styling
   - Apply to body and main containers
   - Ensure content remains readable
   - Use `#DC143C` (Crimson) as Jack suggested

**Current Test Code (in custom.css):**
```css
/* HOLIDAY THEME TEST - Bright Red Background */
body {
  background-color: #DC143C !important;
}

body, .shopify-section {
  background-color: #DC143C !important;
}
```

**Action:**
- Refine this to apply cleanly to both pages
- May need section-specific overrides for proper coverage
- Test readability of text on red background

---

### Task 2: Christmas String Lights (LANDING PAGE ONLY)

**Files to Create/Edit:**

**NEW FILES:**
1. `assets/holiday-lights.css` - CSS for string lights animation
2. `snippets/holiday-lights.liquid` - HTML for light elements

**EDIT:**
3. `layout/theme.liquid` - Include the new files

**Implementation Plan:**
```liquid
<!-- In layout/theme.liquid head section -->
{{ 'holiday-lights.css' | asset_url | stylesheet_tag }}

<!-- In layout/theme.liquid body, after opening <body> tag -->
{% render 'holiday-lights' %}
```

**CSS Approach:**
- Create repeating light elements (circles)
- Alternate colors: red, green, blue, yellow
- Add blinking animation
- Position at top of viewport (fixed position)
- Use CSS keyframes for animation

---

### Task 3: Snowfall Effect (BOTH PAGES)

**Files to Create/Edit:**

**NEW FILES:**
1. `assets/holiday-snow.css` - CSS for falling snow animation
2. `snippets/holiday-snow.liquid` - HTML for snowflake elements

**EDIT:**
3. `layout/theme.liquid` - Include the new files

**Implementation Plan:**
```liquid
<!-- In layout/theme.liquid head section -->
{{ 'holiday-snow.css' | asset_url | stylesheet_tag }}

<!-- In layout/theme.liquid body, after opening <body> tag -->
{% render 'holiday-snow' %}
```

**CSS Approach:**
- Create 30-50 snowflake elements (performance balance)
- Use Unicode snowflake character: ❄
- CSS animation: fall from top to bottom
- Randomize: horizontal position, animation delay, duration
- Use `position: fixed` and `z-index: 9999` to overlay entire page
- Mobile optimization: fewer flakes on small screens

---

### Task 4: Snow Mounds at Bottom (LANDING PAGE ONLY)

**Files to Create/Edit:**

**NEW FILE:**
1. `snippets/holiday-snow-mounds.liquid` - SVG or image of snow mounds

**EDIT:**
2. `layout/theme.liquid` or `templates/index.json` - Add mounds to bottom

**Implementation Plan:**
- Create SVG wave pattern to simulate snow mounds
- Position at bottom of viewport (fixed or absolute)
- Potentially add hive/honeycomb imagery within mounds
- White/light color to contrast with red background

---

### Task 5: Holiday Photos (BOTH PAGES)

**Jack will provide these photos**

**Files to Edit:**

**Landing Page:**
1. `templates/index.json` - Update image URLs in:
   - Hero section (`image_with_text_slideshow_xWrVgU`)
   - Collage blocks (`collage_93cCG9`)

**Product Page:**
1. Update product images via Shopify admin OR
2. Update in `templates/product.json` if specific to holiday version

**Action:**
- Wait for Jack to provide holiday photos
- Upload to Shopify Files
- Replace image URLs in JSON files
- Test image loading

---

### Task 6: Update Copy to "Hot for the Holidays" (LANDING PAGE)

**Files to Edit:**
1. `templates/index.json`

**Specific Changes:**
- Hero section heading: Change from "IT'S HIVE O'CLOCK" to "HOT FOR THE HOLIDAYS"
- Hero section text: Update subheading to holiday messaging
- Line ~1 in index.json: Find `"heading":"<strong>IT'S HIVE O'CLOCK</strong>"`
- Replace with: `"heading":"<strong>HOT FOR THE HOLIDAYS</strong>"`

**Action:**
- Simple text find/replace in JSON
- Update call-to-action text if needed
- Keep "Shop the Vodka Cranberry" CTA or similar

---

### Task 7: Video Section for Character Skits (PRODUCT PAGE ONLY)

**NEW SECTION NEEDED**

**Files to Create:**
1. `sections/holiday-character-videos.liquid` - New section for video carousel

**Files to Edit:**
2. `templates/product.json` - Add new section to order array

**Section Requirements:**
- Horizontal scroll layout (4 videos side-by-side)
- Video thumbnails with play button overlay
- Title/description for each character:
  - "Jack Making Cocktails"
  - "Jack Griswold"
  - "Funcle Jack"
  - "I Love Lucy Character"
- Mobile: Swipe-able carousel
- Desktop: Horizontal scroll or grid
- Videos hosted on Shopify Files or YouTube/Vimeo embed

**Implementation:**
- Week 1: Show only first video
- Weeks 2-4: Add one video each week by editing section settings
- Use Liquid conditionals or Shopify metafields to control visibility

**Placement:**
- After main product form
- Before "THE DETAILS" section
- Position: between `product-form` and `text_adverts_637L9g` in order array

---

### Task 8: Fake Reviews Section (PRODUCT PAGE ONLY)

**Option A: Use Existing Reviews App (Loox)**
- Template already has Loox reviews: `loox_reviews_loox_dynamic_section_EgUG4m`
- Could manually add fake reviews via Loox admin
- Pros: Uses existing infrastructure
- Cons: May require paid app features

**Option B: Create Custom Reviews Section**

**NEW FILES:**
1. `sections/holiday-fake-reviews.liquid` - Custom review section

**EDIT:**
2. `templates/product.json` - Add section to order array

**Review Structure:**
```liquid
{% schema %}
{
  "name": "Holiday Reviews",
  "blocks": [
    {
      "type": "review",
      "name": "Review",
      "settings": [
        {"type": "text", "id": "reviewer_name", "label": "Reviewer Name"},
        {"type": "text", "id": "reviewer_title", "label": "Title"},
        {"type": "number", "id": "rating", "label": "Star Rating"},
        {"type": "textarea", "id": "review_text", "label": "Review Text"}
      ]
    }
  ]
}
{% endschema %}
```

**Sample Reviews:**
- **Santa Claus** - "Perfect for warming up at the North Pole! Mrs. Claus and I enjoy these after a long night. 🎅"
- **Rudolph** - "My red nose has competition! This cranberry vodka is the star of our holiday parties."
- **Frosty the Snowman** - "Keeps me cool even when I'm feeling the heat. Highly recommend! ☃️"
- **Buddy the Elf** - "The BEST cocktail! It's even better than syrup on spaghetti!"

**Placement:**
- Near existing reviews section
- Or replace existing Loox section temporarily

---

## Implementation Priority Order

### TODAY (Oct 31) - Before 3pm Meeting
1. ✅ Red background (already done - showing in preview)
2. ⏳ Snowfall effect (create files, add to theme)
3. ⏳ Christmas lights (create files, add to theme)
4. ⏳ Update homepage heading to "Hot for the Holidays"

**Goal:** Show Jack red + snow + lights + updated heading by 3pm

### AFTER MEETING - Based on Feedback
5. Refine red background based on Jack's feedback
6. Adjust snow speed/density based on Jack's preference
7. Add snow mounds at bottom (if requested)
8. Create video section structure (placeholder ready for Week 1 video)
9. Create fake reviews section
10. Wait for Jack's holiday photos, then swap images

### THIS WEEKEND (Nov 1-2)
11. Integrate first video (Jack as himself making cocktails)
12. Add all fake reviews (Santa, Rudolph, etc.)
13. Replace with holiday photos (when received from Jack)
14. Mobile responsive testing
15. Performance optimization
16. Final polish

### MONDAY/TUESDAY (Nov 3-4)
17. Final testing across devices/browsers
18. Deploy to production (flip theme live or copy sections)
19. Monitor for any issues

---

## Quick Reference: Files to Edit

**Global (affects both pages):**
- `assets/custom.css` ← Red background
- `assets/holiday-snow.css` ← NEW: Snowfall
- `assets/holiday-lights.css` ← NEW: Christmas lights
- `snippets/holiday-snow.liquid` ← NEW: Snow elements
- `snippets/holiday-lights.liquid` ← NEW: Light elements
- `layout/theme.liquid` ← Include new assets

**Landing Page Specific:**
- `templates/index.json` ← Update text, images
- `snippets/holiday-snow-mounds.liquid` ← NEW: Snow mounds

**Product Page Specific:**
- `templates/product.json` ← Add new sections
- `sections/holiday-character-videos.liquid` ← NEW: Video carousel
- `sections/holiday-fake-reviews.liquid` ← NEW: Fake reviews

---

## Testing Checklist

**Before Tomorrow's Meeting:**
- [ ] Open http://127.0.0.1:9292 - see red + snow + lights
- [ ] Navigate to product page - see same effects
- [ ] Check mobile view (use browser dev tools)
- [ ] Verify cart/checkout still work
- [ ] No console errors (F12 → Console tab)

**Before Deployment:**
- [ ] Test on actual mobile device (iOS + Android)
- [ ] Test on desktop (Chrome, Safari, Firefox)
- [ ] Check page load speed (< 3 seconds)
- [ ] Verify all images load
- [ ] Test video playback
- [ ] Verify fake reviews show correctly
- [ ] Check that original pages are hidden but intact
- [ ] Test rollback process (can revert quickly if needed)

---

## Rollback Plan

**If Something Goes Wrong:**

1. **Stop dev server:** Kill the `shopify theme dev` process
2. **Check live theme:** Verify customers still see original (they should)
3. **Fix locally:** Make corrections in local files
4. **Restart dev server:** `shopify theme dev --theme="Hive for the Holidays"`
5. **Test again:** Verify fix in preview

**If Need to Revert Completely:**
- Simply don't publish the "Hive for the Holidays" theme
- Original theme remains live and untouched
- Can delete holiday theme and start over if needed

---

## Notes for Tomorrow's Meeting (3pm)

**What to Show Jack:**
1. Preview URL: http://127.0.0.1:9292
2. Shareable URL: https://spirited-hive.myshopify.com/?preview_theme_id=153001951460
3. Red background working ✅
4. Snowfall effect working (by then)
5. Christmas lights working (by then)
6. Updated "Hot for the Holidays" heading (by then)

**What to Ask Jack:**
1. Is the red the right shade? Too bright? Too dark?
2. Snow speed/density okay? More flakes? Fewer?
3. Lights style appropriate? Too much? Too little?
4. Any layout changes needed?
5. When will holiday photos be ready?
6. Confirm video hosting (Shopify Files, YouTube, or Vimeo)?
7. Approve sample fake reviews or need different ones?

---

## Budget & Time Tracking

**Project Budget:** $800
**Time Spent So Far:** ~2 hours (setup + analysis)
**Estimated Remaining:** 4-6 hours
**Total Estimated:** 6-8 hours (well within budget)

**Breakdown:**
- Setup & planning: 2 hours ✅
- Red + snow + lights: 2 hours ⏳
- Video section: 1 hour ⏳
- Fake reviews: 30 min ⏳
- Image swaps: 30 min ⏳
- Testing & polish: 1-2 hours ⏳

---

**Next Action:** Create snowfall and Christmas lights assets, then test in preview before 3pm meeting.
