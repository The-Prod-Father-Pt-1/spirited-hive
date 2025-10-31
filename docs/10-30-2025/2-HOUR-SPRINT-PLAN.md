# 2-Hour Sprint Plan - Ready for Jack's 3pm Meeting

**Current Time:** ~1:00 PM
**Meeting Time:** 3:00 PM
**Time Available:** 2 hours

---

## ✅ COMPLETED

1. **Red background working** - Shows on both landing page and product page
2. **Dev server running** - http://127.0.0.1:9292
3. **Files identified** - Know exactly what to edit
4. **Plan documented** - Complete roadmap created

---

## 🎯 SPRINT GOALS (Next 2 Hours)

**Goal:** Show Jack a festive preview with:
- ✅ Red background (DONE)
- ❄️ Falling snow animation
- 🎄 Christmas lights at top
- 🎅 "HOT FOR THE HOLIDAYS" heading

**Timeline Breakdown:**
- **1:00 - 1:30 PM** (30 min) - Snowfall effect
- **1:30 - 2:00 PM** (30 min) - Christmas lights
- **2:00 - 2:05 PM** (5 min) - Update heading text
- **2:05 - 2:15 PM** (10 min) - Test everything
- **2:15 - 2:30 PM** (15 min) - Buffer time for fixes
- **2:30 - 3:00 PM** (30 min) - Final prep, screenshot, notes

---

## TASK 1: Snowfall Effect (30 minutes)

**Status:** 🔄 IN PROGRESS

### Files to Create:

**1. `/assets/holiday-snow.css`**
```css
/* Holiday Snowfall Effect */
.holiday-snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.snowflake {
  position: absolute;
  top: -10px;
  color: white;
  font-size: 1em;
  user-select: none;
  animation: snowfall linear infinite;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

@keyframes snowfall {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0.8;
  }
}

/* Randomize snowflake positions and speeds using nth-child */
.snowflake:nth-child(1) { left: 10%; animation-duration: 10s; animation-delay: 0s; font-size: 0.8em; }
.snowflake:nth-child(2) { left: 20%; animation-duration: 12s; animation-delay: 1s; font-size: 1.2em; }
.snowflake:nth-child(3) { left: 30%; animation-duration: 9s; animation-delay: 2s; font-size: 1em; }
.snowflake:nth-child(4) { left: 40%; animation-duration: 11s; animation-delay: 0.5s; font-size: 0.9em; }
.snowflake:nth-child(5) { left: 50%; animation-duration: 13s; animation-delay: 1.5s; font-size: 1.1em; }
.snowflake:nth-child(6) { left: 60%; animation-duration: 10s; animation-delay: 0s; font-size: 1em; }
.snowflake:nth-child(7) { left: 70%; animation-duration: 11s; animation-delay: 2s; font-size: 0.8em; }
.snowflake:nth-child(8) { left: 80%; animation-duration: 12s; animation-delay: 1s; font-size: 1.2em; }
.snowflake:nth-child(9) { left: 90%; animation-duration: 10s; animation-delay: 0.5s; font-size: 0.9em; }
.snowflake:nth-child(10) { left: 15%; animation-duration: 13s; animation-delay: 1.5s; font-size: 1.1em; }
.snowflake:nth-child(11) { left: 25%; animation-duration: 11s; animation-delay: 0s; font-size: 1em; }
.snowflake:nth-child(12) { left: 35%; animation-duration: 12s; animation-delay: 2s; font-size: 0.8em; }
.snowflake:nth-child(13) { left: 45%; animation-duration: 10s; animation-delay: 1s; font-size: 1.2em; }
.snowflake:nth-child(14) { left: 55%; animation-duration: 11s; animation-delay: 0.5s; font-size: 0.9em; }
.snowflake:nth-child(15) { left: 65%; animation-duration: 13s; animation-delay: 1.5s; font-size: 1.1em; }
.snowflake:nth-child(16) { left: 75%; animation-duration: 10s; animation-delay: 0s; font-size: 1em; }
.snowflake:nth-child(17) { left: 85%; animation-duration: 12s; animation-delay: 2s; font-size: 0.8em; }
.snowflake:nth-child(18) { left: 95%; animation-duration: 11s; animation-delay: 1s; font-size: 1.2em; }
.snowflake:nth-child(19) { left: 5%; animation-duration: 10s; animation-delay: 0.5s; font-size: 0.9em; }
.snowflake:nth-child(20) { left: 12%; animation-duration: 13s; animation-delay: 1.5s; font-size: 1.1em; }
.snowflake:nth-child(21) { left: 22%; animation-duration: 11s; animation-delay: 0s; font-size: 1em; }
.snowflake:nth-child(22) { left: 32%; animation-duration: 12s; animation-delay: 2s; font-size: 0.8em; }
.snowflake:nth-child(23) { left: 42%; animation-duration: 10s; animation-delay: 1s; font-size: 1.2em; }
.snowflake:nth-child(24) { left: 52%; animation-duration: 11s; animation-delay: 0.5s; font-size: 0.9em; }
.snowflake:nth-child(25) { left: 62%; animation-duration: 13s; animation-delay: 1.5s; font-size: 1.1em; }
.snowflake:nth-child(26) { left: 72%; animation-duration: 10s; animation-delay: 0s; font-size: 1em; }
.snowflake:nth-child(27) { left: 82%; animation-duration: 12s; animation-delay: 2s; font-size: 0.8em; }
.snowflake:nth-child(28) { left: 92%; animation-duration: 11s; animation-delay: 1s; font-size: 1.2em; }
.snowflake:nth-child(29) { left: 8%; animation-duration: 10s; animation-delay: 0.5s; font-size: 0.9em; }
.snowflake:nth-child(30) { left: 18%; animation-duration: 13s; animation-delay: 1.5s; font-size: 1.1em; }

/* Mobile: Fewer snowflakes */
@media (max-width: 768px) {
  .snowflake:nth-child(n+16) {
    display: none;
  }
}
```

**2. `/snippets/holiday-snow.liquid`**
```liquid
<!-- Holiday Snowfall Effect -->
<div class="holiday-snow-container">
  {% for i in (1..30) %}
    <div class="snowflake">❄</div>
  {% endfor %}
</div>
```

**3. Edit `/layout/theme.liquid`**
- Add CSS link in `<head>` section
- Add snippet render after `<body>` tag

### Action Steps:
1. Create `assets/holiday-snow.css` file
2. Create `snippets/holiday-snow.liquid` file
3. Edit `layout/theme.liquid` to include both
4. Verify sync in terminal
5. Refresh preview - see falling snow!

---

## TASK 2: Christmas Lights (30 minutes)

**Status:** ⏳ PENDING

### Files to Create:

**1. `/assets/holiday-lights.css`**
```css
/* Christmas String Lights */
.holiday-lights {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 9998;
  pointer-events: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
}

.light-bulb {
  width: 12px;
  height: 18px;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  position: relative;
  animation: blink 1.5s infinite;
  box-shadow: 0 0 10px currentColor;
}

/* Color variations */
.light-bulb:nth-child(4n+1) {
  background-color: #ff0000;
  color: #ff0000;
  animation-delay: 0s;
}

.light-bulb:nth-child(4n+2) {
  background-color: #00ff00;
  color: #00ff00;
  animation-delay: 0.3s;
}

.light-bulb:nth-child(4n+3) {
  background-color: #0000ff;
  color: #0000ff;
  animation-delay: 0.6s;
}

.light-bulb:nth-child(4n) {
  background-color: #ffff00;
  color: #ffff00;
  animation-delay: 0.9s;
}

/* Blinking animation */
@keyframes blink {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 10px currentColor;
  }
  50% {
    opacity: 0.6;
    box-shadow: 0 0 5px currentColor;
  }
}

/* Wire/string connecting lights */
.holiday-lights::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right,
    rgba(255,255,255,0.3) 0%,
    rgba(255,255,255,0.5) 50%,
    rgba(255,255,255,0.3) 100%);
}

/* Mobile: Fewer lights */
@media (max-width: 768px) {
  .holiday-lights {
    height: 40px;
  }

  .light-bulb:nth-child(n+21) {
    display: none;
  }
}
```

**2. `/snippets/holiday-lights.liquid`**
```liquid
<!-- Christmas String Lights -->
<div class="holiday-lights">
  {% for i in (1..40) %}
    <div class="light-bulb"></div>
  {% endfor %}
</div>
```

**3. Edit `/layout/theme.liquid`**
- Add CSS link in `<head>` section
- Add snippet render after `<body>` tag

### Action Steps:
1. Create `assets/holiday-lights.css` file
2. Create `snippets/holiday-lights.liquid` file
3. Edit `layout/theme.liquid` to include both
4. Verify sync in terminal
5. Refresh preview - see twinkling lights!

---

## TASK 3: Update Heading (5 minutes)

**Status:** ⏳ PENDING

### File to Edit:
**`/templates/index.json`**

**Find this line (~line 1):**
```json
"heading":"<strong>IT'S HIVE O'CLOCK</strong>"
```

**Replace with:**
```json
"heading":"<strong>HOT FOR THE HOLIDAYS</strong>"
```

### Action Steps:
1. Open `templates/index.json`
2. Search for "IT'S HIVE O'CLOCK"
3. Replace with "HOT FOR THE HOLIDAYS"
4. Save file
5. Verify sync in terminal
6. Refresh preview - see new heading!

---

## TASK 4: Test Everything (10 minutes)

**Status:** ⏳ PENDING

### Test Checklist:

**Landing Page (http://127.0.0.1:9292):**
- [ ] Red background showing
- [ ] Snow falling throughout page
- [ ] Christmas lights at top
- [ ] Heading says "HOT FOR THE HOLIDAYS"
- [ ] All sections loading correctly
- [ ] No console errors (F12 → Console)
- [ ] Mobile view working (browser dev tools)

**Product Page (http://127.0.0.1:9292/collections/all-products/products/spirited-hive-vodka-cranberry-lime):**
- [ ] Red background showing
- [ ] Snow falling throughout page
- [ ] Christmas lights at top
- [ ] Product info still readable
- [ ] Buy button works
- [ ] No console errors
- [ ] Mobile view working

### Action Steps:
1. Navigate through both pages
2. Check browser console for errors
3. Test in mobile view (responsive design mode)
4. Click through to make sure nothing broke
5. Take screenshots if needed

---

## TASK 5: Prepare for Meeting (2 minutes)

**Status:** ⏳ PENDING

### Deliverables for Jack:

**1. Preview Links:**
- Local: http://127.0.0.1:9292
- Shareable: https://spirited-hive.myshopify.com/?preview_theme_id=153001951460

**2. Screenshots:**
- Landing page with red + snow + lights + new heading
- Product page with red + snow + lights
- Mobile views

**3. What to Show:**
- ✅ Bright red background throughout
- ✅ Falling snow animation
- ✅ Twinkling Christmas lights at top
- ✅ "HOT FOR THE HOLIDAYS" heading
- ✅ Both pages working perfectly

**4. What to Ask Jack:**
- Is the red the right shade?
- Snow speed/density okay?
- Lights style appropriate?
- Any layout adjustments needed?
- When will holiday photos be ready?

---

## BUFFER TIME (15 minutes)

**If something doesn't work:**

### Troubleshooting:
1. **Snow not showing?**
   - Check browser console for errors
   - Verify CSS file synced
   - Hard refresh (Cmd+Shift+R)
   - Check z-index conflicts

2. **Lights not showing?**
   - Same as above
   - Verify snippet is rendering
   - Check if header is covering lights

3. **Heading not updated?**
   - Verify JSON syntax is correct
   - Check file synced
   - Clear browser cache

4. **Dev server crashed?**
   - Restart: `shopify theme dev --theme="Hive for the Holidays"`
   - Check for syntax errors in files

---

## TIMELINE SUMMARY

| Time | Task | Duration | Status |
|------|------|----------|--------|
| 1:00 - 1:30 PM | Snowfall effect | 30 min | ⏳ Next |
| 1:30 - 2:00 PM | Christmas lights | 30 min | ⏳ Pending |
| 2:00 - 2:05 PM | Update heading | 5 min | ⏳ Pending |
| 2:05 - 2:15 PM | Test everything | 10 min | ⏳ Pending |
| 2:15 - 2:30 PM | Buffer / fixes | 15 min | ⏳ Pending |
| 2:30 - 3:00 PM | Prep & screenshots | 30 min | ⏳ Pending |
| **3:00 PM** | **MEETING WITH JACK** | - | 🎯 Goal |

---

## AFTER MEETING (Based on Feedback)

**Not today - wait for Jack's input:**
- Refine red background shade
- Adjust snow speed/density
- Add snow mounds at bottom
- Build video section structure
- Create fake reviews section
- Swap holiday photos (when received)

**Save these for this weekend after getting feedback!**

---

## SUCCESS CRITERIA

**By 3:00 PM, Jack should see:**
1. ✅ Festive red background on both pages
2. ❄️ Beautiful falling snow throughout
3. 🎄 Twinkling Christmas lights at top
4. 🎅 "HOT FOR THE HOLIDAYS" holiday messaging
5. 📱 Everything working on mobile
6. 🚀 No broken functionality

**This proves the concept and shows significant progress!**

---

## COMMANDS TO KEEP HANDY

**Dev server is running at:**
```
http://127.0.0.1:9292
```

**If you need to restart:**
```bash
# Kill existing process
lsof -ti:9292 | xargs kill -9

# Restart dev server
shopify theme dev --theme="Hive for the Holidays"
```

**Check sync status:**
- Watch terminal for "Synced » update [filename]"

**Hard refresh browser:**
- Mac: `Cmd + Shift + R`
- Windows: `Ctrl + Shift + R`

---

**LET'S DO THIS! 🎄❄️🎅**
