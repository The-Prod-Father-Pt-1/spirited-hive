# Local-First Development Workflow

## THE RULE: Everything Happens Locally, Push to Shopify

**NO MORE Shopify Admin edits. NO MORE split workflows. Everything controlled from code.**

---

## What Jack Saw (10-30-2025 Meeting)

Based on the meeting notes and plan, Jack expects:

### Landing Page (Homepage)
- ✅ Cherry red background (#DC143C)
- ✅ Christmas string lights at top (40 bulbs, 20 on mobile)
- ✅ Snowfall throughout page (50 flakes, 20 on mobile)
- 🔄 "HOT FOR THE HOLIDAYS" heading (update from "IT'S HIVE O'CLOCK")
- 🔄 Snow mounds at bottom (optional)
- 🔄 Holiday photos (waiting from Jack)

### Product Page (Cranberry Vodka)
- ✅ Cherry red background
- ✅ Snowfall effect
- 🔄 Holiday character videos section (4 videos, roll out weekly)
- 🔄 Fake reviews from Santa, Rudolph, Frosty, Buddy the Elf

### Timeline
- **By Monday/Tuesday:** "Somewhat done" holiday theme
- **Nov 1-2:** First video live
- **Weekly rollout:** One new video each week through Dec 15

### Budget
- **Project cost:** $800-$1,000
- **Time estimate:** 6-8 hours

---

## Current Ground Truth State

We're at commit `0cda0c8` (tagged as `GROUND-TRUTH-HOLIDAY-v1.0`) which has:
- ✅ Cherry red background in `assets/custom.css`
- ✅ Christmas lights in `snippets/holiday-lights.liquid` + `assets/holiday-lights.css`
- ✅ Snowfall in `snippets/holiday-snow.liquid` + `assets/holiday-snow.css`
- ✅ Integrated in `layout/theme.liquid`

**Missing from this commit:**
- Homepage heading still says "IT'S HIVE O'CLOCK" (needs "HOT FOR THE HOLIDAYS")
- No video section yet
- No fake reviews section yet
- No snow mounds yet
- Original photos (not holiday themed yet)

---

## Local-First Workflow

### 1. All Changes Happen in Local Files

**Section Visibility:** Control via `templates/*.json`
```json
{
  "sections": {
    "my_section_id": {
      "type": "my-section",
      "disabled": true,  // ← Hide section without deleting
      "settings": { ... }
    }
  },
  "order": [
    "my_section_id"  // ← Remove from order array to hide
  ]
}
```

**Adding New Sections:**
1. Create section file: `sections/my-new-section.liquid`
2. Add to template JSON: `templates/index.json` or `templates/product.json`
3. Configure settings in JSON
4. Push to Shopify

**Removing Sections:**
1. Set `"disabled": true` in template JSON, OR
2. Remove from `"order"` array in template JSON
3. Push to Shopify

**NEVER delete section files** - just disable them in JSON so we can re-enable later

---

### 2. Template JSON Structure

Every page is controlled by a JSON file in `templates/`:

```
templates/
├── index.json              ← Homepage
├── product.json            ← Default product page
├── product.cranberry-vodka.json  ← Specific product override
├── collection.json         ← Collection pages
├── page.about.json         ← About page
└── ...
```

Each JSON has this structure:
```json
{
  "sections": {
    "section_id_1": {
      "type": "section-file-name",
      "disabled": false,  // true = hidden
      "blocks": { ... },
      "block_order": [ ... ],
      "settings": { ... }
    }
  },
  "order": [
    "section_id_1",  // Controls display order
    "section_id_2"
  ]
}
```

---

### 3. How to Hide/Show Sections Locally

#### Method A: Disable in Place (Recommended)
```json
{
  "sections": {
    "old_hero": {
      "type": "hero",
      "disabled": true,  // ← Just add this, keep all settings
      "settings": { "headline": "..." }
    },
    "holiday_hero": {
      "type": "holiday-hero",
      "disabled": false,  // ← Active
      "settings": { "headline": "HOT FOR THE HOLIDAYS" }
    }
  },
  "order": [
    "holiday_hero"  // Only show this one
    // "old_hero" removed from order = hidden
  ]
}
```

#### Method B: Remove from Order Array
```json
{
  "sections": {
    "old_hero": { ... },  // Still in sections object
    "holiday_hero": { ... }
  },
  "order": [
    "holiday_hero"  // Only this shows on page
  ]
}
```

**When to use each:**
- **Method A:** When you want to completely disable (easier to search/find)
- **Method B:** When you might re-order later (keeps settings intact)

---

### 4. Development Workflow

```bash
# 1. Make ALL changes locally
# Edit files in:
# - assets/
# - sections/
# - snippets/
# - templates/
# - layout/

# 2. Test locally (optional, requires Shopify CLI dev server)
shopify theme dev --theme="Hive for the Holidays"
# Preview at: http://127.0.0.1:9292

# 3. Push EVERYTHING to Shopify
shopify theme push --theme="Hive for the Holidays"

# 4. Verify on Shopify preview
# https://spirited-hive.myshopify.com?preview_theme_id=153001951460

# 5. Commit to git
git add .
git commit -m "Description of changes"
git push origin feature/holiday-campaign-2025
```

---

### 5. Common Operations

#### Add a New Section to Homepage

```bash
# 1. Create section file
touch sections/my-new-section.liquid

# 2. Add content to section (with schema)
# Edit sections/my-new-section.liquid

# 3. Add to homepage template
# Edit templates/index.json
```

```json
{
  "sections": {
    // ... existing sections ...
    "my_new_section_abc123": {
      "type": "my-new-section",
      "settings": {
        "title": "My New Section",
        "background_color": "#ffffff"
      }
    }
  },
  "order": [
    "existing_section_1",
    "my_new_section_abc123",  // ← Add to order
    "existing_section_2"
  ]
}
```

```bash
# 4. Push to Shopify
shopify theme push --theme="Hive for the Holidays"
```

---

#### Hide an Existing Section

```bash
# Edit templates/index.json or templates/product.json
```

```json
{
  "sections": {
    "section_to_hide": {
      "type": "some-section",
      "disabled": true,  // ← Add this line
      "settings": { ... }
    }
  },
  "order": [
    // Remove "section_to_hide" from this array
    "other_section_1",
    "other_section_2"
  ]
}
```

```bash
# Push changes
shopify theme push --theme="Hive for the Holidays"
```

---

#### Swap Sections (Holiday vs Regular)

**Before (showing regular hero):**
```json
{
  "sections": {
    "regular_hero": {
      "type": "hero",
      "settings": { "headline": "IT'S HIVE O'CLOCK" }
    }
  },
  "order": ["regular_hero"]
}
```

**After (showing holiday hero):**
```json
{
  "sections": {
    "regular_hero": {
      "type": "hero",
      "disabled": true,  // ← Hide regular
      "settings": { "headline": "IT'S HIVE O'CLOCK" }
    },
    "holiday_hero": {
      "type": "holiday-hero",
      "settings": { "headline": "HOT FOR THE HOLIDAYS" }
    }
  },
  "order": ["holiday_hero"]  // ← Show holiday version
}
```

---

### 6. Asset Management

**CSS Files:**
```
assets/
├── custom.css              ← Global overrides (red background)
├── holiday-snow.css        ← Snowfall styles
├── holiday-lights.css      ← Christmas lights styles
└── theme.min.css           ← Base theme (don't edit)
```

**JavaScript Files:**
```
assets/
├── holiday-lights.js       ← Christmas lights logic
└── theme.min.js            ← Base theme (don't edit)
```

**Loading Assets in Layout:**
```liquid
<!-- In layout/theme.liquid <head> -->
{{ 'custom.css' | asset_url | stylesheet_tag }}
{{ 'holiday-snow.css' | asset_url | stylesheet_tag }}
{{ 'holiday-lights.css' | asset_url | stylesheet_tag }}

<!-- In layout/theme.liquid before </body> -->
{% render 'holiday-snow' %}
{% render 'holiday-lights' %}
```

---

### 7. Section Schema (For Settings in Shopify Admin)

Even though we're doing local-first, sections still need schemas for future admin edits:

```liquid
<!-- sections/my-section.liquid -->
<div class="my-section">
  <h2>{{ section.settings.title }}</h2>
</div>

{% schema %}
{
  "name": "My Section",
  "settings": [
    {
      "type": "text",
      "id": "title",
      "label": "Section Title",
      "default": "Default Title"
    }
  ],
  "presets": [
    {
      "name": "My Section"
    }
  ]
}
{% endschema %}
```

**Why include schema if we're local-first?**
- Future-proofing: Jack might want to edit text later
- Emergency edits: If we're unavailable, someone can use admin
- Best practice: All sections should be admin-editable

---

### 8. Git Workflow

```bash
# Before making changes
git status
git pull origin feature/holiday-campaign-2025

# Make changes locally
# Edit files...

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Add holiday video section to product page

- Created sections/holiday-character-videos.liquid
- Added to templates/product.json
- Configured 4 video blocks (Santa, Rudolph, Frosty, Buddy)
- Set disabled:true for videos 2-4 (roll out weekly)

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to GitHub
git push origin feature/holiday-campaign-2025

# Push to Shopify
shopify theme push --theme="Hive for the Holidays"
```

---

### 9. Rollback Strategy

**If something breaks:**

```bash
# Option 1: Git reset to previous commit
git log --oneline  # Find commit hash
git reset --hard abc1234  # Replace with actual hash

# Option 2: Use ground truth tag
git reset --hard GROUND-TRUTH-HOLIDAY-v1.0

# Option 3: Pull from backup branch
git checkout backup/ground-truth-holiday-v1.0

# Then re-push to Shopify
shopify theme push --theme="Hive for the Holidays"
```

**If Shopify theme is broken but git is fine:**

```bash
# Just re-push from git
shopify theme push --theme="Hive for the Holidays"
# This overwrites Shopify with your local files
```

---

### 10. Testing Before Push

**Local testing (optional but recommended):**
```bash
# Start dev server
shopify theme dev --theme="Hive for the Holidays"

# Visit: http://127.0.0.1:9292
# Test all pages, click all buttons, check console for errors
```

**After push testing (required):**
```bash
# Get preview URL from push output or use:
# https://spirited-hive.myshopify.com?preview_theme_id=153001951460

# Test:
# - Homepage loads correctly
# - Product page loads correctly
# - All sections visible/hidden as expected
# - No JavaScript errors (F12 → Console)
# - Mobile responsive (F12 → Device toolbar)
```

---

## Current Priority Tasks

Based on Jack's requirements, we need to add locally:

### 1. Update Homepage Heading
**File:** `templates/index.json`
**Change:** "IT'S HIVE O'CLOCK" → "HOT FOR THE HOLIDAYS"

### 2. Create Holiday Videos Section
**New file:** `sections/holiday-character-videos.liquid`
**Edit:** `templates/product.json`
**Content:** 4 video blocks, disable 3 until weekly rollout

### 3. Create Fake Reviews Section
**New file:** `sections/holiday-fake-reviews.liquid`
**Edit:** `templates/product.json`
**Content:** Reviews from Santa, Rudolph, Frosty, Buddy

### 4. Add Snow Mounds (Optional)
**New file:** `snippets/holiday-snow-mounds.liquid`
**New file:** `assets/holiday-snow-mounds.css`
**Edit:** `layout/theme.liquid`

### 5. Holiday Photos Placeholder
**Edit:** `templates/index.json` and `templates/product.json`
**Action:** Prepare image fields, wait for Jack's photos

---

## File Reference

**What we control locally:**

```
/Users/gmac/Dev/spirited-hive/
├── assets/
│   ├── custom.css                    ← Red background
│   ├── holiday-snow.css              ← Snowfall
│   ├── holiday-lights.css            ← Christmas lights
│   └── holiday-lights.js             ← Lights logic
├── layout/
│   └── theme.liquid                  ← Main layout (includes assets)
├── sections/
│   ├── holiday-character-videos.liquid  ← TODO: Create
│   ├── holiday-fake-reviews.liquid      ← TODO: Create
│   └── (existing sections)
├── snippets/
│   ├── holiday-snow.liquid           ← Snowfall HTML
│   ├── holiday-lights.liquid         ← Lights HTML
│   └── holiday-snow-mounds.liquid    ← TODO: Create (optional)
└── templates/
    ├── index.json                    ← Homepage config
    └── product.json                  ← Product page config
```

---

## Summary

**THE RULE:**
1. ✅ Make ALL changes in local files
2. ✅ Hide/show sections via JSON (disabled: true or remove from order)
3. ✅ Test locally if possible (shopify theme dev)
4. ✅ Push to Shopify (shopify theme push)
5. ✅ Verify on Shopify preview URL
6. ✅ Commit to git
7. ✅ NEVER edit in Shopify Admin

**Benefits:**
- Full version control
- Easy rollback
- No more lost work
- Consistent workflow
- Code review possible
- Reproducible builds

**Next Action:**
Review this workflow, then we'll implement the missing pieces (homepage heading, video section, fake reviews) ALL LOCALLY and push to Shopify.
