# Local Development Workflow for Shopify Theme

**Problem:** Changes made locally aren't showing up in Shopify.

**Solution:** Use the proper Shopify CLI workflow with live preview.

---

## The Correct Workflow

### Step 1: Start Development Server

```bash
shopify theme dev
```

**What this does:**
- Creates/uses a development theme in your Shopify store
- Starts a local server that syncs files to Shopify in real-time
- Provides a **preview URL** you can open in your browser
- Hot-reloads changes automatically as you edit files

**You'll see output like:**
```
✔ Synced theme #15302603594 on your-store.myshopify.com

Preview your theme:
http://127.0.0.1:9292

Customize your theme in the Theme Editor:
https://your-store.myshopify.com/admin/themes/15302603594/editor

Share this theme preview:
https://your-store.myshopify.com?preview_theme_id=15302603594
```

### Step 2: Open the Preview URL

Open `http://127.0.0.1:9292` in your browser. This shows your store using the development theme.

**Important:**
- This is a **live preview** connected to Shopify
- Changes you make locally will sync and reload automatically
- You can navigate the site just like the real store
- Other people can't see this - it's only visible to you

### Step 3: Edit Files Locally

Make changes to your theme files (in VS Code or any editor):
- Edit `.liquid` files in `sections/`, `snippets/`, `layout/`, `templates/`
- Edit CSS files in `assets/`
- Edit JavaScript files in `assets/`

**The preview will automatically reload** when you save files.

### Step 4: View Changes Instantly

Your browser preview will refresh automatically to show the changes. No manual push needed!

---

## Current Theme Setup

From `shopify theme list`, you have:

**Live Theme:**
- Name: "SH25 - Flow - Updated"
- ID: #14607361661 2
- Status: [live] (this is what customers see)

**Holiday Development Theme:**
- Name: "Hive for the Holidays"
- ID: #15300195146
- Status: [unpublished] (prepared for holiday campaign)

**Your Active Development Theme:**
- Name: "Development (7f2771-Gavins-Mac-Studio)"
- ID: #15302603594
- Status: [development] [yours]
- This is the theme `shopify theme dev` will use by default

---

## Development Strategy for This Project

### Option A: Work in Your Current Development Theme (RECOMMENDED)

```bash
# Start dev server (uses your development theme automatically)
shopify theme dev
```

**Pros:**
- Fast iteration - see changes instantly
- Safe - doesn't touch live site
- Can test thoroughly before deploying

**When ready to deploy:**
```bash
# Push to the "Hive for the Holidays" theme
shopify theme push --theme=15300195146
```

### Option B: Work Directly in "Hive for the Holidays" Theme

```bash
# Start dev server using the holiday theme specifically
shopify theme dev --theme=15300195146
```

**Pros:**
- Changes go directly to the holiday theme
- One less step when deploying

**Cons:**
- Slightly riskier (though still unpublished)

---

## Common Issues & Solutions

### Issue: "I made changes but don't see them"

**Solution:**
1. Make sure `shopify theme dev` is running
2. Check that you saved the file
3. Refresh the browser (should auto-refresh but try manual)
4. Check the terminal for sync errors

### Issue: "Preview shows old/cached version"

**Solution:**
1. Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
2. Or open in incognito/private window
3. Or add `?preview_theme_id=YOUR_THEME_ID` to force theme

### Issue: "Changes synced but look wrong"

**Solution:**
1. Check browser console for JavaScript errors (F12 → Console tab)
2. Check if CSS is cached - hard refresh
3. Verify you're editing the correct file (sections vs snippets)

### Issue: "Command says 'theme not found'"

**Solution:**
```bash
# Ensure you're logged in
shopify auth status

# Re-login if needed
shopify auth login
```

---

## File Structure Quick Reference

```
/spirited-hive/
├── layout/
│   └── theme.liquid          # Main layout wrapper
├── sections/
│   ├── slideshow.liquid      # Homepage hero/slideshow
│   ├── featured-product.liquid
│   └── ...
├── snippets/
│   ├── card-product.liquid   # Reusable product card
│   └── ...
├── templates/
│   ├── index.json            # Homepage template
│   ├── product.json          # Default product template
│   └── ...
├── assets/
│   ├── component-*.js        # JavaScript modules
│   ├── *.css                 # Stylesheets
│   └── *.png/jpg/svg         # Images
└── config/
    └── settings_schema.json  # Theme settings
```

---

## Workflow for Holiday Campaign

### Day 1: Setup & Structure (TODAY)

```bash
# 1. Start development server
shopify theme dev

# 2. Open preview URL in browser (shown in terminal output)

# 3. Identify files to edit:
#    - Homepage: sections/slideshow.liquid (or whichever section is the hero)
#    - Product page: templates/product.json + sections/main-product.liquid
#    - Styles: assets/ (CSS files)

# 4. Make changes, see them live instantly

# 5. When ready to show Jack, push to holiday theme:
shopify theme push --theme=15300195146
```

### Tomorrow's Gut-Check Meeting (3:00 PM)

By then, have:
- [ ] Red background implemented
- [ ] Snowfall effect working
- [ ] Basic structure in place
- [ ] Shareable preview link ready

**Share the preview URL with Jack:**
```
https://spiritedhive.com?preview_theme_id=15300195146
```

---

## Key Shopify CLI Commands

```bash
# Start dev server with hot reload
shopify theme dev

# List all themes in store
shopify theme list

# Push local changes to specific theme
shopify theme push --theme=THEME_ID

# Pull theme from Shopify to local
shopify theme pull --theme=THEME_ID

# Check auth status
shopify auth status

# Open theme in Shopify admin
shopify theme open
```

---

## Why This Workflow Matters

**Before (Not Working):**
- Edit files locally
- Files just sit on your computer
- No way to preview them in context
- Have to manually upload/push to see anything

**After (Correct Workflow):**
- Run `shopify theme dev`
- Edit files locally
- See changes instantly in browser preview
- Test thoroughly before deploying
- Push to production when ready

---

## Next Steps

1. **Run this command NOW:**
   ```bash
   shopify theme dev
   ```

2. **Open the preview URL** shown in terminal output

3. **Start editing** - begin with:
   - Finding the slideshow/hero section for the homepage
   - Finding the product page template
   - Adding red background CSS

4. **Watch changes appear** instantly in browser

5. **Tomorrow:** Show Jack the preview link at 3:00 PM meeting

---

## Questions or Issues?

If `shopify theme dev` doesn't work or you get errors, check:
- Are you in the correct directory? (`pwd` should show `/Users/gmac/Dev/spirited-hive`)
- Is Shopify CLI authenticated? (`shopify auth status`)
- Is the terminal showing any specific error messages?

**The key insight:** You're not just editing files - you're running a live development server that syncs with Shopify. This is how you'll see your changes!
