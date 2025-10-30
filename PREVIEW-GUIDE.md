# 🎄 How to Preview Your Holiday Campaign

## Quick Access Guide

### Option 1: Get Store Access (RECOMMENDED - 5 minutes)

**You need:** Staff account on `spirited-hive.myshopify.com`

**Steps:**
1. Ask Jack to add you as a staff member:
   - Shopify Admin → Settings → Users and permissions
   - Click "Add staff"
   - Enter your email
   - Permissions: At minimum "Themes" access

2. Once invited, accept the email invitation

3. Authenticate Shopify CLI:
   ```bash
   shopify auth login
   ```

4. Start dev server:
   ```bash
   shopify theme dev
   ```

5. Open the URL it provides (usually `http://127.0.0.1:9292`)

**Time to preview:** 5 minutes after getting access

---

### Option 2: Push to Development Theme (NO LOCAL NEEDED)

**If you have store access but don't want to run locally:**

1. Push this branch to a development theme:
   ```bash
   shopify theme push --development
   ```

2. Go to Shopify Admin → Themes

3. Find the development theme (will be named with timestamp)

4. Click "Customize" to see it live in the theme editor

5. Preview the pages we built:
   - Holiday Landing Page (create page with holiday-landing template)
   - Holiday Product Page (apply holiday template to a product)

**Time to preview:** 2 minutes with store access

---

### Option 3: Create Pages in Shopify Admin (FULL PREVIEW)

**Best way to see the final result:**

1. Go to Shopify Admin → Pages → Add page

2. Title: "Hive for the Holidays"

3. In right sidebar → Template: Select **"holiday-landing"**

4. Click **Customize** - You'll see:
   - ✨ Holiday Hero with Christmas lights
   - 🎬 Video Carousel (needs videos uploaded)
   - 🍹 Recipe Card
   - 🎅 Holiday Reviews
   - 🎁 Final CTA

5. For product page:
   - Go to Products → Select Vodka Cranberry
   - In right sidebar → Template: Select **"holiday"**
   - Save and click "View"

**Time to preview:** 10 minutes with content

---

## What You'll See (Visual Description)

### Holiday Landing Page:
```
┌─────────────────────────────────────┐
│   🎄 HOLIDAY HERO 🎄                │
│   "Hive for the Holidays"          │
│   [Christmas lights twinkling]      │
│   ❄ Snow falling animation ❄       │
│   [Shop Vodka Cranberry Button]    │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   🎬 VIDEO CAROUSEL                 │
│   ┌──────────┐  ┌──────────────┐   │
│   │  Video   │  │ Recipe Card  │   │
│   │  Player  │  │              │   │
│   │ [▶ Play] │  │ Ingredients  │   │
│   │          │  │ Instructions │   │
│   └──────────┘  └──────────────┘   │
│   [← Prev]  1 of 3  [Next →]       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   🎅 HOLIDAY REVIEWS 🎅             │
│   ┌──────┐ ┌──────┐ ┌──────┐       │
│   │Grinch│ │Santa │ │Rudolph       │
│   │ ⭐   │ │⭐⭐⭐⭐⭐│ │⭐⭐⭐⭐⭐      │
│   │Review│ │Review│ │Review│       │
│   └──────┘ └──────┘ └──────┘       │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   🎁 READY TO CELEBRATE? 🎁         │
│   [Shop Now Button]                 │
└─────────────────────────────────────┘
```

### Holiday Product Page:
```
┌─────────────────────────────────────┐
│   🎄 Holiday Special Banner         │
│   [Christmas lights decoration]     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   Product Images  │  Product Info   │
│   [Carousel]      │  Title          │
│                   │  Price          │
│                   │  [Add to Cart]  │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   Holiday Serving Suggestions       │
│   Recipe ideas and garnish tips     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│   🎅 Holiday Reviews                │
│   (Same as landing page)            │
└─────────────────────────────────────┘
```

---

## Interactive Features You'll Experience

### 1. Christmas Lights
- Twinkling animation (color-changing)
- Smooth transitions between colors
- Can toggle on/off in admin

### 2. Snow Effect
- Falling snowflakes
- Different speeds and sizes
- GPU-accelerated (smooth 60fps)
- Can toggle on/off in admin

### 3. Video Carousel
**Desktop:**
- Click ← → arrows to navigate
- Use keyboard arrow keys
- Click progress bar to seek
- Click thumbnails to jump to video

**Mobile:**
- Swipe left/right (TikTok-style)
- Tap to play/pause
- Tap controls for volume/seek

### 4. Holiday Reviews
- Will show character reviews during Nov 1-Dec 31
- Automatically switches to real reviews Jan 1
- Test with "Force Holiday Mode" toggle in admin

---

## Files Created (For Reference)

```
sections/
├── holiday-hero.liquid (516 lines)
├── holiday-video-carousel.liquid (877 lines)
└── holiday-reviews.liquid (519 lines)

snippets/
└── holiday-recipe-card.liquid (268 lines)

templates/
├── page.holiday-landing.json (209 lines)
└── product.holiday.json (337 lines)

Total: 2,726 lines of production code
```

---

## Testing Checklist

Once you can preview, test these:

**Holiday Hero:**
- [ ] Christmas lights are twinkling
- [ ] Snow is falling (if enabled)
- [ ] Headline displays correctly
- [ ] CTA button works (links to product)
- [ ] Responsive on mobile

**Video Carousel:**
- [ ] Videos load and play
- [ ] Desktop: Arrow navigation works
- [ ] Mobile: Swipe gestures work
- [ ] Recipe card displays correctly
- [ ] Progress bar is interactive

**Holiday Reviews:**
- [ ] Character reviews show (if forced on)
- [ ] Star ratings display
- [ ] Holiday badge shows
- [ ] Reviews are formatted correctly

**Product Page:**
- [ ] Holiday banner shows at top
- [ ] Add to cart works
- [ ] Product images display
- [ ] Reviews section shows

---

## Need Help?

**If Shopify CLI authentication fails:**
```bash
shopify logout
shopify auth login
```

**If dev server won't start:**
- Make sure you have store staff access
- Check you're in the right directory: `/Users/gmac/Dev/spirited-hive`
- Try: `shopify theme dev --store spirited-hive.myshopify.com`

**If pages don't show:**
- Make sure you selected the right template
- Try creating a NEW page instead of editing existing
- Check theme is published or in preview mode

---

## Contact Store Owner

**To get access, ask Jack to:**
1. Go to Shopify Admin
2. Settings → Users and permissions
3. Add staff with your email
4. Grant "Themes" permission (minimum)
5. You'll get an email to accept

**Once you have access, you can:**
- Run `shopify theme dev` locally
- Push to development themes
- Preview in theme editor
- Customize all sections

---

**Ready to see your holiday campaign come to life! 🎄**
