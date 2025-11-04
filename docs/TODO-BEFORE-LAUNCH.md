# To-Do List Before Holiday Campaign Launch

**Target Launch:** Tomorrow (2025-11-04)
**Theme:** "Hive for the Holidays" (#153001951460)
**Current Status:** Checkpoint v3 - Fully functional, needs content and final QA

---

## 🎥 CRITICAL - Video Content (Priority 1)

### 1. Upload Jack's 4 Holiday Character Videos
**Status:** ⏳ Waiting for content
**Owner:** Jack / Content Team

**Videos Needed:**
1. "The Grinch Discovers Spirited Hive"
2. "Santa's Workshop Goes Wild"
3. "Rudolph's Night Off"
4. "Frosty's Meltdown (The Good Kind)"

**Steps:**
```bash
# Option 1: Upload via Shopify Admin
1. Go to: Content → Files
2. Upload each video file
3. Copy the Shopify CDN URL for each video

# Option 2: Use Shopify CLI (if files are local)
shopify theme push --only assets/video-*.mp4
```

**After Upload:**
- Go to Shopify Theme Editor
- Find "Holiday Spirits & Skits" section
- Click on each video block
- Paste video URL into "Video URL" field
- Save changes

### 2. Create Video Poster/Thumbnail Images
**Status:** ⏳ Pending
**Owner:** Design Team

**Required:**
- 4 poster images (one per video)
- Recommended size: 1920x1080px (16:9)
- Format: JPG or PNG
- Should be eye-catching stills from each video

**Upload:**
- Upload to Shopify (Content → Files)
- Add URLs to "Poster Image" field in each video block

### 3. Optimize Video File Sizes
**Status:** ⏳ Pending
**Owner:** Tech Team

**Target:**
- Mobile: < 10MB per video
- Desktop: < 25MB per video
- Format: MP4 (H.264 codec)
- Resolution: 1080p max

**Tools:**
- Handbrake (free video compressor)
- FFmpeg command line
- Online tools: cloudconvert.com

---

## 🎨 OPTIONAL - Visual Enhancements (Priority 2)

### 4. Upload Character Avatar Images
**Status:** ⏳ Optional (Nice to have)
**Owner:** Design Team

**Characters needing avatars (18 total):**
- The Grinch, Santa, Rudolph, Frosty, Buddy the Elf
- Scrooge, Jack Frost, Abominable Snowman, Mrs. Claus
- Elf on the Shelf, Krampus, Hermey, Yukon Cornelius
- The Nutcracker, Heat Miser, Snow Miser, Kevin McCallister

**Specs:**
- Size: 200x200px (square, will be circular)
- Format: PNG with transparent background
- Style: Consistent illustration style across all characters

**Upload:**
- Upload to Shopify Files
- Edit each review block in Theme Editor
- Add image to "Character Avatar" field

### 5. Create Social Media Preview Images
**Status:** ⏳ Pending
**Owner:** Marketing Team

**Needed:**
- Open Graph image (1200x630px)
- Twitter Card image (1200x675px)
- Instagram story template (1080x1920px)

**Content Ideas:**
- "18 Holiday Characters Review Spirited Hive"
- Screenshot of The Grinch's reviews (1★ → 5★)
- Video carousel preview with "Watch Jack's Holiday Skits"

---

## 🏗️ TECHNICAL - Product Page Integration (Priority 2)

### 6. Add Holiday Theme to Cranberry Vodka Product Page
**Status:** ⏳ Pending
**Owner:** Dev Team

**Current Product Page:** `/products/spirited-hive-vodka-cranberry-lime`

**Options:**

**Option A: Quick - Add holiday banner section**
```liquid
# Add to templates/product.json or create product.cranberry.json
- Add holiday-themed banner at top
- Link back to homepage holiday campaign
- "Part of our Holiday Collection" badge
```

**Option B: Full - Create dedicated holiday product template**
```bash
# Create new template
cp templates/product.json templates/product.cranberry-holiday.json

# Add holiday sections:
- Red background hero
- Holiday character reviews
- Video carousel
- Gift messaging section
```

**Option C: Minimal - Just update hero background**
- Change product hero background to crimson red (#DC143C)
- Update text to white for visibility
- Add "Holiday Special" badge

**Recommendation:** Start with Option C (minimal), can enhance later.

### 7. Test Date-Based Review Switching
**Status:** ⏳ Pending
**Owner:** Dev Team

**Test Cases:**
1. **Force Holiday Mode (Currently ON)**
   - Go to Theme Editor → Holiday Reviews section
   - Check "Force Holiday Mode" setting (currently enabled)
   - Verify 18 character reviews display

2. **Test Real Reviews Mode**
   - Toggle OFF "Force Holiday Mode"
   - Toggle ON "Force Real Reviews"
   - Verify it switches to real customer reviews
   - Toggle back to holiday mode

3. **Test Date Logic (Jan 1, 2026)**
   - On January 1st, reviews should auto-switch to real reviews
   - Add manual test on calendar: Check site on Jan 1
   - Consider adding "Show Debug Info" toggle to verify dates

**Schema Settings Location:**
- Shopify Admin → Themes → Hive for the Holidays → Customize
- Scroll to "Holiday Reviews" section
- Settings appear in right sidebar

---

## 🧪 QUALITY ASSURANCE - Testing (Priority 1)

### 8. Mobile Device Testing (CRITICAL)
**Status:** ⏳ Pending
**Owner:** QA Team

**Test Devices:**
- iPhone (iOS 16+): Safari, Chrome
- Android (latest): Chrome, Firefox
- Tablet: iPad, Android tablet

**Test Checklist:**
- [ ] Homepage loads without errors
- [ ] Snowfall animation smooth (not laggy)
- [ ] Video carousel swipes left/right (Tinder-style)
- [ ] Swipe velocity detection feels natural
- [ ] Videos play when tapped
- [ ] Review cards scroll horizontally
- [ ] Review cards snap to center
- [ ] All text is readable (black on white, white on red)
- [ ] Character name bubbles visible
- [ ] Holiday badges readable
- [ ] CTA button tappable and links correctly
- [ ] Page scrolls smoothly without janky animations
- [ ] No horizontal overflow issues

### 9. Desktop Browser Testing
**Status:** ⏳ Pending
**Owner:** QA Team

**Browsers to Test:**
- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (optional)

**Test Checklist:**
- [ ] Homepage renders correctly
- [ ] Video carousel arrows work (left/right)
- [ ] Videos play on click
- [ ] Review cards in grid layout (2-3 columns)
- [ ] Hover states work (cards lift slightly)
- [ ] Text visibility perfect on all backgrounds
- [ ] Snowfall animation smooth
- [ ] Christmas lights visible at top
- [ ] Snow mounds visible at bottom
- [ ] CTA button hover state (black → dark gray)
- [ ] No console errors in DevTools

### 10. Tablet Testing
**Status:** ⏳ Pending
**Owner:** QA Team

**Devices:**
- iPad (portrait and landscape)
- Android tablet

**Test Checklist:**
- [ ] Video carousel uses 16:9 aspect ratio
- [ ] Arrow navigation works
- [ ] Reviews in grid layout
- [ ] Text readable at medium screen size
- [ ] Touch targets are large enough
- [ ] Landscape and portrait modes both work

### 11. Performance Testing
**Status:** ⏳ Pending
**Owner:** Dev Team

**Tools:**
- Google PageSpeed Insights
- Lighthouse (Chrome DevTools)
- GTmetrix

**Target Metrics:**
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Mobile Performance Score: > 80

**If scores are low:**
- Compress video files more
- Lazy load videos below fold
- Reduce snowflake count on mobile
- Optimize images (use WebP format)

### 12. Accessibility Testing
**Status:** ⏳ Pending
**Owner:** QA Team

**Tools:**
- WAVE browser extension
- axe DevTools
- Manual keyboard navigation

**Test Checklist:**
- [ ] All buttons keyboard accessible (Tab key)
- [ ] Skip to content link works
- [ ] Color contrast ratios pass WCAG AA
  - White on red: 4.5:1 minimum
  - Black on white: 21:1 (perfect)
- [ ] Videos have alt text descriptions
- [ ] Screen reader can read all content
- [ ] Focus indicators visible on all interactive elements

### 13. Link Testing
**Status:** ⏳ Pending
**Owner:** QA Team

**Critical Links to Verify:**
- [ ] Hero CTA button → `/products/spirited-hive-vodka-cranberry-lime` ✅
- [ ] "Shop Now" buttons work (if any)
- [ ] Navigation menu links
- [ ] Footer links
- [ ] Social media icons
- [ ] Store locator link
- [ ] All product links in collections

### 14. Text Visibility Final Check
**Status:** ⏳ Pending
**Owner:** QA Team

**Visual Audit:**
- [ ] Section headers: White on red ✅
- [ ] Hero button: Black with white text ✅
- [ ] Hero text: White on red ✅
- [ ] Review text: Black on white cards ✅
- [ ] Character names: White in black bubbles ✅
- [ ] Holiday badges: Black text on white ✅
- [ ] Star ratings: White on red ✅
- [ ] Video titles: White on red ✅
- [ ] Footer: Check text contrast
- [ ] Navigation: Check text contrast

**Do a Screen Recording:**
- Record a full scroll through homepage
- Review recording to catch any visibility issues
- Send to stakeholders for approval

---

## 🚀 DEPLOYMENT - Go Live (Priority 1)

### 15. Pre-Launch Checklist
**Status:** ⏳ Pending
**Owner:** Project Manager

**Before Publishing:**
- [ ] All videos uploaded and working
- [ ] Mobile testing complete (no blockers)
- [ ] Desktop testing complete
- [ ] Text visibility verified
- [ ] Links tested and working
- [ ] Performance acceptable (>80 mobile score)
- [ ] Stakeholder approval received
- [ ] Backup of current live theme created

### 16. Theme Publication Options

**Option A: Replace Current Live Theme**
```bash
# IN SHOPIFY ADMIN:
# 1. Go to: Online Store → Themes
# 2. Find "Hive for the Holidays" theme
# 3. Click "..." → Publish
# 4. Confirm publication
```

**Option B: Schedule Launch (Recommended)**
```bash
# Manual scheduling:
# 1. Set calendar reminder for launch time
# 2. Publish theme at exact time
# 3. Monitor for first 30 minutes

# OR use Shopify Scripts:
# Schedule publish via API (requires developer access)
```

**Option C: Gradual Rollout (Advanced)**
```bash
# Use Shopify's A/B testing or traffic splitting
# Show holiday theme to 50% of traffic first
# Monitor metrics, then increase to 100%
```

### 17. Post-Launch Monitoring
**Status:** ⏳ Pending
**Owner:** Tech Team

**First 30 Minutes:**
- [ ] Check homepage loads
- [ ] Monitor error logs
- [ ] Check mobile traffic
- [ ] Verify video playback
- [ ] Monitor page load times
- [ ] Watch for console errors
- [ ] Check social media mentions

**First 24 Hours:**
- [ ] Review analytics for unusual patterns
- [ ] Check bounce rate (should be low)
- [ ] Monitor video engagement
- [ ] Track CTA button clicks
- [ ] Check conversion rate
- [ ] Read customer feedback/comments

**Tools:**
- Shopify Analytics
- Google Analytics
- Hotjar (heatmaps)
- Social media monitoring

---

## 📊 ANALYTICS - Tracking Setup (Priority 3)

### 18. Set Up Event Tracking
**Status:** ⏳ Pending
**Owner:** Analytics Team

**Events to Track:**
- Video plays (which videos are most popular)
- Video completion rate
- CTA button clicks (hero → product)
- Review card swipes on mobile
- Character review clicks
- Time spent on page
- Scroll depth

**Implementation:**
```javascript
// Add to theme.liquid or holiday-video-carousel.liquid
<script>
  // Track video plays
  dataLayer.push({
    event: 'video_play',
    video_title: 'Grinch Video',
    video_position: 1
  });

  // Track CTA clicks
  dataLayer.push({
    event: 'cta_click',
    cta_location: 'hero',
    cta_destination: 'cranberry_product'
  });
</script>
```

---

## 🎯 MARKETING - Promotion Plan (Priority 2)

### 19. Social Media Launch Plan
**Status:** ⏳ Pending
**Owner:** Marketing Team

**Platforms:**
- Instagram: Carousel post + Stories
- TikTok: Repost Jack's character videos
- Facebook: Link to campaign page
- Twitter/X: Thread about the campaign
- Email: Newsletter announcement

**Content Ideas:**
- "🎄 Holiday Campaign is LIVE!"
- "Watch The Grinch try Spirited Hive (spoiler: he loves it)"
- "18 holiday characters reviewed our vodka cranberry... you won't believe what they said!"
- Behind-the-scenes of Jack filming character skits
- User-generated content: "Which character are you?"

### 20. Email Campaign
**Status:** ⏳ Pending
**Owner:** Marketing Team

**Email Sequence:**
1. **Launch Email (Day 1):** "🎅 Our Holiday Campaign is Here!"
2. **Video Spotlight (Day 3):** "You HAVE to see The Grinch's review..."
3. **Last Chance (Dec 20):** "Holiday cocktails selling out fast!"

**Content:**
- GIF of Tinder-style swipe
- Screenshots of funniest reviews
- CTA: "Shop Holiday Collection"
- Discount code: HOLIDAYHIVE (optional)

---

## 🔧 TECHNICAL - Future Enhancements (Priority 4)

### 21. Nice-to-Have Features (Post-Launch)
**Status:** 💡 Ideas for future iterations

**Video Enhancements:**
- [ ] Autoplay videos on scroll into view
- [ ] Video progress indicator
- [ ] Share individual videos to social media
- [ ] "Save for Later" video bookmarks
- [ ] Related videos suggestions

**Review Enhancements:**
- [ ] "Load More" reviews (if > 18)
- [ ] Filter reviews by star rating
- [ ] Search reviews by character name
- [ ] Share individual reviews
- [ ] Upvote/downvote system (for fun)

**Performance:**
- [ ] Lazy load videos below fold
- [ ] Preload next video in carousel
- [ ] WebP image format for posters
- [ ] CDN for faster global delivery

**Analytics:**
- [ ] Heatmap of most-swiped reviews
- [ ] A/B test different CTA copy
- [ ] Track which videos lead to purchases
- [ ] Conversion funnel analysis

---

## 📝 DOCUMENTATION - Post-Launch (Priority 3)

### 22. Create Campaign Performance Report
**Status:** ⏳ After 1 week of launch
**Owner:** Marketing Team

**Metrics to Track:**
- Total page views
- Unique visitors
- Video play rate
- Video completion rate
- CTA click-through rate
- Conversion rate (visits → purchases)
- Average order value
- Social media engagement
- Customer feedback/reviews

**Report Format:**
- Google Slides presentation
- Key insights and learnings
- What worked / what didn't
- Recommendations for next campaign

### 23. Update Client Documentation
**Status:** ⏳ Post-launch
**Owner:** Project Manager

**Documents to Create:**
- Campaign recap presentation
- User guide for editing holiday content
- Video replacement instructions
- FAQ for common issues
- Rollback procedure (if needed)

---

## ⚠️ CONTINGENCY - Backup Plans (Priority 1)

### 24. Rollback Plan (Just in Case)
**Status:** ✅ Already documented in Checkpoint v3

**If Something Breaks:**

**Quick Fix (< 5 minutes):**
```bash
# Revert to Checkpoint v3
git checkout 91f9d9f
shopify theme push --theme="Hive for the Holidays"
```

**Full Rollback (< 10 minutes):**
```bash
# Switch back to previous live theme
# IN SHOPIFY ADMIN:
# 1. Go to: Online Store → Themes
# 2. Find previous live theme
# 3. Click "..." → Publish
# 4. Confirm publication
```

**Emergency Contacts:**
- Dev Team: [Phone/Slack]
- Shopify Support: 24/7 support chat
- Client Contact: [Jack's phone/email]

### 25. Known Issues & Workarounds
**Status:** 📋 Document as discovered

**Current Known Issues:**
- None! (Checkpoint v3 is stable)

**If Issues Arise:**
- Document in `docs/KNOWN-ISSUES.md`
- Create GitHub issues for tracking
- Prioritize based on user impact
- Communicate to stakeholders

---

## 🎉 SUCCESS CRITERIA

**Campaign is considered successful if:**
- ✅ All 4 videos play smoothly on mobile & desktop
- ✅ Tinder-style swipe feels natural and fun
- ✅ No text visibility issues (all readable)
- ✅ Page load time < 3 seconds on mobile
- ✅ No console errors or broken links
- ✅ Positive customer feedback on social media
- ✅ Conversion rate increase vs. previous month
- ✅ Video engagement rate > 50% (people watch videos)
- ✅ Low bounce rate (< 40%)
- ✅ Client satisfaction (Jack's approval)

---

## 📅 TIMELINE ESTIMATE

**If Starting Now (Nov 3, Evening):**

**Tonight (2-3 hours):**
- Upload videos (when Jack provides them)
- Add video URLs to theme
- Create poster images
- Final QA testing on your devices

**Tomorrow Morning (1-2 hours):**
- Test on additional devices
- Get stakeholder approval
- Make any final tweaks
- Prepare launch announcement

**Tomorrow Afternoon (Launch!):**
- Publish theme (1 minute)
- Monitor for first 30 minutes
- Post social media announcements
- Send email campaign

**Total Time Needed:** ~4-6 hours of focused work

---

## 🚨 BLOCKERS TO WATCH FOR

**Potential Issues:**
1. **Videos not ready** → Campaign can't launch without them
2. **Video file sizes too large** → Slow loading, bad UX
3. **Browser compatibility issues** → Test early on all browsers
4. **Mobile performance poor** → Optimize before launch
5. **Stakeholder not available for approval** → Get approval timeline early

**Risk Mitigation:**
- Set hard deadlines for video delivery
- Have video compression tools ready
- Test early and often
- Keep stakeholders in loop
- Have rollback plan ready

---

## ✅ FINAL PRE-LAUNCH CHECKLIST

**The Ultimate Checklist (Print This Out!):**

- [ ] All 4 videos uploaded to Shopify
- [ ] Video URLs added to carousel blocks
- [ ] Poster images uploaded and set
- [ ] Videos play correctly on iPhone
- [ ] Videos play correctly on Android
- [ ] Swipe gesture works naturally
- [ ] Review cards scroll on mobile
- [ ] All text is readable (white on red, black on white)
- [ ] Character name bubbles visible
- [ ] Holiday badges readable
- [ ] CTA button links to correct product
- [ ] Desktop browser testing complete (Chrome, Safari, Firefox)
- [ ] Tablet testing complete
- [ ] Performance score > 80 on mobile
- [ ] No console errors
- [ ] All links tested and working
- [ ] Accessibility audit passed
- [ ] Stakeholder approval received
- [ ] Backup of current theme created
- [ ] Social media posts scheduled
- [ ] Email campaign ready
- [ ] Analytics tracking set up
- [ ] Emergency contacts ready
- [ ] Launch button pressed! 🚀

---

**Good luck with the launch! You've got this! 🎄✨**

**Questions? Refer to:**
- `docs/CHECKPOINT-GROUND-TRUTH-v3.md` - Full restoration guide
- `CLAUDE.md` - Development standards
- `time-spent/time-log.md` - Time tracking
