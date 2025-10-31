# Immediate Next Steps - Hive Holiday Campaign

**Status:** Ready to start development
**Timeline:** Target Monday/Tuesday (Nov 3-4)
**Checkpoint:** Tomorrow (Oct 31) @ 3:00 PM with Jack

---

## THE MAIN ISSUE & SOLUTION

### Problem
You couldn't see local changes appearing in Shopify theme.

### Root Cause
Not using the Shopify development server workflow.

### Solution
Use `shopify theme dev` command - this creates a live preview that auto-syncs your local changes to a development theme in Shopify. You'll get a preview URL (like `http://127.0.0.1:9292`) that shows changes instantly as you edit files.

**Read the full workflow:** `LOCAL-DEVELOPMENT-WORKFLOW.md` in this folder.

---

## RIGHT NOW - Get Development Environment Working

### Step 1: Start the Development Server

```bash
cd /Users/gmac/Dev/spirited-hive
shopify theme dev
```

You should see output like:
```
✔ Synced theme #15302603594 on spiritedhive.myshopify.com

Preview your theme:
http://127.0.0.1:9292
```

### Step 2: Open Preview URL

Open `http://127.0.0.1:9292` in your browser. This is your live development preview!

### Step 3: Verify It's Working

Make a small test change:
1. Open `layout/theme.liquid`
2. Add a comment like `<!-- TEST CHANGE -->`
3. Save the file
4. Watch your browser preview auto-reload

**If you can see this change, you're good to go!**

---

## TODAY - First Sprint (4-6 hours)

### Goal: Have basic holiday structure ready for tomorrow's 3pm meeting

### Task 1: Identify & Document Key Files (30 min)

Find the files you need to edit:

**Homepage:**
```bash
# The homepage template
templates/index.json

# Find which sections are used (look in index.json)
# Likely candidates:
sections/slideshow.liquid
sections/featured-collection.liquid
```

**Product Page:**
```bash
# The product template
templates/product.json

# Main product section
sections/main-product.liquid
```

**Global Styles:**
```bash
# Find CSS files in assets/
ls -la assets/*.css

# Look for main theme CSS or component CSS
```

**Action:** Create a quick doc listing which files control what.

### Task 2: Implement Red Background (1 hour)

**Approach 1: Global CSS Override**
1. Find main CSS file in `assets/`
2. Add CSS variable or body background:
```css
body, .shopify-section {
  background-color: #CC0000; /* bright red */
}
```

**Approach 2: Section-Specific (Better)**
1. Edit individual section files
2. Add inline style or class
3. Use Shopify's color scheme system (see `snippets/css-variables.liquid`)

**Test:** Preview should show red background immediately

### Task 3: Implement Snowfall Effect (1-2 hours)

**Option A: CSS Animation**
Create `assets/holiday-snow.css`:
```css
.snowflake {
  position: fixed;
  top: -10px;
  z-index: 9999;
  user-select: none;
  cursor: default;
  animation: snowfall 10s linear infinite;
}

@keyframes snowfall {
  0% {
    transform: translateY(-10px) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
  }
}
```

Create `snippets/holiday-snow.liquid`:
```liquid
<div class="snow-container">
  {% for i in (1..50) %}
    <div class="snowflake" style="left: {{ i | times: 2 }}%; animation-delay: {{ i | times: 0.1 }}s;">❄</div>
  {% endfor %}
</div>
```

Add to `layout/theme.liquid`:
```liquid
{{ 'holiday-snow.css' | asset_url | stylesheet_tag }}
{% render 'holiday-snow' %}
```

**Option B: JavaScript Library**
Use a library like Snowstorm.js for more realistic snow.

**Test:** Preview should show falling snow

### Task 4: Add Christmas String Lights (1 hour)

**Option 1: CSS-only lights**
Create `assets/christmas-lights.css`:
```css
.christmas-lights {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 100;
}

.light {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 10px;
  animation: blink 1s infinite;
}

.light:nth-child(odd) { background: #ff0000; }
.light:nth-child(even) { background: #00ff00; }
.light:nth-child(3n) { background: #0000ff; }

@keyframes blink {
  0%, 49% { opacity: 0.8; }
  50%, 100% { opacity: 1; }
}
```

Create `snippets/christmas-lights.liquid`:
```liquid
<div class="christmas-lights">
  {% for i in (1..30) %}
    <span class="light"></span>
  {% endfor %}
</div>
```

**Option 2: SVG lights**
Use an SVG graphic of string lights, positioned at top of page.

**Test:** Preview should show lights at top

### Task 5: Update Homepage Section Layout (1 hour)

Edit the main homepage hero section:
1. Keep existing structure
2. Wrap content in holiday theme
3. Update any hardcoded text to "Hot for the Holidays"
4. Prepare image placeholders for Jack's photos

---

## TOMORROW - Gut Check Meeting (3:00 PM)

### Prepare Before Meeting

1. **Take screenshots** of what you've built
2. **Get shareable preview link** ready:
   ```bash
   # Push your dev changes to holiday theme
   shopify theme push --theme=15300195146

   # Share this URL with Jack:
   https://spiritedhive.com?preview_theme_id=15300195146
   ```

3. **Document what's done and what's remaining**

### Show Jack

- Red background ✓
- Snowfall effect ✓
- Christmas lights ✓
- Basic structure ✓
- Where his photos will go
- Where video section will be on product page

### Get Feedback

- Is the red the right shade?
- Snow speed/density correct?
- Lights style appropriate?
- Any layout changes needed?

---

## THIS WEEKEND - Main Development Sprint

Based on tomorrow's feedback, complete:

### Homepage
- [ ] Final red background styling
- [ ] Snowfall polish (speed, density, performance)
- [ ] Christmas lights finalized
- [ ] Snow mounds at bottom with hive imagery
- [ ] Jack's holiday photos integrated
- [ ] Copy updated for holiday campaign
- [ ] Mobile responsive check

### Product Page (Cranberry Vodka)
- [ ] Red background
- [ ] Snowfall effect
- [ ] Holiday product photos integrated
- [ ] Video section layout built (horizontal scroll)
- [ ] First video embedded (Jack as himself)
- [ ] Fake reviews section with Santa/Rudolph characters
- [ ] Mobile responsive check

### Testing
- [ ] Test on desktop (Chrome, Safari, Firefox)
- [ ] Test on mobile (iOS, Android)
- [ ] Check performance (Lighthouse score)
- [ ] Verify cart/checkout still work
- [ ] Test all links and buttons

---

## MONDAY/TUESDAY - Final Polish & Deploy

### Final Checklist
- [ ] All holiday elements working perfectly
- [ ] No console errors
- [ ] Fast page load times
- [ ] Brand fonts maintained
- [ ] Color consistency
- [ ] Mobile perfection
- [ ] First video live and playing

### Deployment Process

1. **Final push to holiday theme:**
   ```bash
   shopify theme push --theme=15300195146
   ```

2. **Test holiday theme thoroughly** using preview link

3. **Hide current pages** (landing + product) in live theme

4. **Activate holiday theme** OR copy sections to live theme

5. **Verify live site** - test everything one more time

6. **Monitor** - watch for any issues first few hours

---

## File Organization

Keep work organized:

```
/spirited-hive/
├── assets/
│   ├── holiday-snow.css          # NEW
│   ├── holiday-theme.css         # NEW
│   ├── christmas-lights.css      # NEW
│   └── ...
├── snippets/
│   ├── holiday-snow.liquid       # NEW
│   ├── christmas-lights.liquid   # NEW
│   └── ...
├── sections/
│   ├── holiday-hero.liquid       # NEW or modify existing
│   └── ...
```

**Naming convention:** Prefix holiday-specific files with `holiday-` so they're easy to identify and remove after season.

---

## Key Technical Notes

### Color Scheme
**Bright Red:** Use `#DC143C` (Crimson) or `#CC0000` - test both with Jack

### Performance Considerations
- Snowfall: Limit to 30-50 flakes max
- Use CSS animations (GPU accelerated)
- Lazy load video content
- Optimize all images (WebP format)

### Mobile-First Approach
- Test mobile continuously
- Snow may need fewer flakes on mobile
- Lights should scale down appropriately
- Videos must be mobile-optimized

### Rollback Strategy
- Keep original pages hidden but intact
- Document every change in git commits
- Have "kill switch" to revert to standard theme
- Test rollback process before going live

---

## Success Metrics

By Monday/Tuesday, you should have:

✅ **Functionality**
- Holiday theme fully working
- All animations smooth
- First video playing
- Fake reviews showing

✅ **Quality**
- Looks professional (not cheesy)
- Maintains brand consistency
- Fast load times
- No errors

✅ **Completeness**
- Ready for Week 1 launch (Nov 1-2)
- Infrastructure ready for weekly video adds
- Easy to update throughout season

---

## Weekly Video Update Process (Dec 1-15)

Create a simple workflow for adding new videos each week:

**Week 2 (Dec 1):** Jack Griswold video
**Week 3 (Dec 8):** Funcle Jack video
**Week 4 (Dec 15):** I Love Lucy character video

**Process:**
1. Jack sends video file
2. Upload to Shopify Files or CDN
3. Edit product page section
4. Add new video to carousel/scroll
5. Push changes
6. Test
7. 5 minutes total

**Pre-build this:** Create the video section with placeholders so adding new videos is just swapping URLs.

---

## Also: Strive Final Edits

**Lower priority but don't forget:**
- [ ] Wait for Chris's edits (expected today)
- [ ] Implement changes (should be quick)
- [ ] **PRIORITY:** Fix comments/reviews display issue
- [ ] Close out Strive project
- [ ] Send Stripe invoice for $7,500

---

## Questions or Blockers?

**If something doesn't work:**
1. Check terminal for error messages
2. Check browser console (F12)
3. Try hard refresh (Cmd+Shift+R)
4. Restart `shopify theme dev`
5. Check file paths and syntax

**Common issues already solved:**
- ✅ Local changes not showing → Use `shopify theme dev`
- ✅ Theme not found → Already authenticated
- ✅ Don't know which files to edit → See Task 1 above

---

## The Path to Success

You've been successful on other projects. This will be successful too. The key difference here is understanding the Shopify development workflow.

**The workflow:**
1. Run `shopify theme dev` ← This is what you were missing!
2. Edit files locally
3. See changes instantly in preview
4. Push when ready
5. Deploy

**You have:**
- ✅ Shopify CLI installed and authenticated
- ✅ Theme cloned and ready ("Hive for the Holidays")
- ✅ Development theme active
- ✅ Clear requirements from Jack
- ✅ Realistic timeline
- ✅ Fair budget

**Now go make it happen!** 🎄❄️🎅

Start with: `shopify theme dev`
