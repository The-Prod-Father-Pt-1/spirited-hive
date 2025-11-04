# Product Page Holiday Theme - Simple Instructions

**Goal:** Add holiday theming to the Cranberry Vodka product page to match the homepage campaign.

**Product URL:** `/products/spirited-hive-vodka-cranberry-lime`

---

## Option 1: Quick CSS Addition (Recommended - 5 minutes)

This adds holiday styling WITHOUT changing the product template. Just adds red background and white text.

### Step 1: Add Custom CSS to assets/custom.css

Add this code to the END of `assets/custom.css`:

```css
/* ============================================
   PRODUCT PAGE HOLIDAY THEME
   ============================================ */

/* Apply to Cranberry Vodka product page only */
body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form,
body.template-product[class*="cranberry"] .product-form {
  background: #DC143C !important; /* Crimson red */
  padding: 2rem;
  border-radius: 12px;
}

/* White text on product page */
body.template-product[class*="spirited-hive-vodka-cranberry"] .product__title,
body.template-product[class*="spirited-hive-vodka-cranberry"] .product__price,
body.template-product[class*="spirited-hive-vodka-cranberry"] .product__description,
body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form h1,
body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form h2,
body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form h3,
body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form p,
body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form label,
body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form span {
  color: #ffffff !important;
}

/* Black Add to Cart button with white text */
body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form .button,
body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form button[type="submit"] {
  background-color: #000000 !important;
  color: #ffffff !important;
  border-color: #000000 !important;
}

body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form .button:hover {
  background-color: #333333 !important;
}

/* Variant selector styling */
body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form select,
body.template-product[class*="spirited-hive-vodka-cranberry"] .product-form input {
  border: 2px solid #ffffff;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

/* Make sure price is visible */
body.template-product[class*="spirited-hive-vodka-cranberry"] .price {
  color: #ffffff !important;
}

/* Star ratings white */
body.template-product[class*="spirited-hive-vodka-cranberry"] .star-rating svg {
  fill: #ffffff !important;
  color: #ffffff !important;
}
```

### Step 2: Push to Shopify

```bash
shopify theme push --theme="Hive for the Holidays" --only assets/custom.css
```

### Step 3: Test

Visit: https://spirited-hive.myshopify.com/products/spirited-hive-vodka-cranberry-lime?preview_theme_id=153001951460

**Verify:**
- [ ] Product form has red background
- [ ] Text is white and readable
- [ ] Add to Cart button is black with white text
- [ ] Price is visible
- [ ] Variant selector (if any) is styled

---

## Option 2: Full Holiday Template (Advanced - 30 minutes)

This creates a dedicated holiday product template with all the holiday effects (snowfall, lights, etc.)

### Step 1: Create New Product Template

```bash
cp templates/product.json templates/product.cranberry-holiday.json
```

### Step 2: Edit the Template

Add these sections to the template's `order` array:

```json
{
  "sections": {
    // ... existing sections ...
    "holiday_banner": {
      "type": "image-with-text-overlay",
      "settings": {
        "text": "🎄 Holiday Special!",
        "background_color": "#DC143C"
      }
    }
  },
  "order": [
    "holiday_banner",  // Add at top
    "product-form",
    "text_adverts_637L9g",
    // ... rest of sections
  ]
}
```

### Step 3: Assign Template to Product

1. Go to Shopify Admin → Products
2. Find "Spirited Hive Vodka Cranberry Lime"
3. Scroll to "Theme templates"
4. Select "cranberry-holiday"
5. Save

### Step 4: Add Holiday Effects

Add to `layout/theme.liquid` (conditional based on product):

```liquid
{% if product.handle == 'spirited-hive-vodka-cranberry-lime' %}
  {% render 'holiday-snow' %}
  {% render 'holiday-lights' %}
  {% render 'holiday-snow-mounds' %}
{% endif %}
```

---

## Option 3: Minimal Holiday Badge (Quickest - 2 minutes)

Just add a holiday badge to the top of the product page.

### Add to theme.liquid or product template

```liquid
{% if product.handle == 'spirited-hive-vodka-cranberry-lime' %}
  <div style="background: #DC143C; color: #ffffff; text-align: center; padding: 1rem; font-weight: bold; font-size: 1.2rem;">
    🎄 Holiday Campaign Special - Part of our Holiday Collection!
  </div>
{% endif %}
```

---

## Recommended Approach

**For Quick Launch:**
Use **Option 1** (CSS only) - Takes 5 minutes, no template changes, easy to test.

**For Full Experience:**
Use **Option 2** after launch - Add full holiday effects when you have more time.

**For Immediate Visual:**
Use **Option 3** as a stopgap - Fastest way to show it's part of holiday campaign.

---

## Testing Checklist

After implementing, test:

### Desktop
- [ ] Product page loads
- [ ] Red background visible
- [ ] Text is white and readable
- [ ] Add to Cart button is black with white text
- [ ] Button hover state works (turns dark gray)
- [ ] Product images display correctly
- [ ] Price visible
- [ ] Variant selector works (if applicable)

### Mobile
- [ ] Product page loads
- [ ] All text readable
- [ ] Button tappable
- [ ] No horizontal scroll
- [ ] Images swipe correctly

### Tablet
- [ ] Responsive layout
- [ ] All functionality works

---

## Rollback Instructions

If something breaks:

### Remove CSS (Option 1)
1. Open `assets/custom.css`
2. Delete the "PRODUCT PAGE HOLIDAY THEME" section
3. Push to Shopify

### Remove Template (Option 2)
1. Go to Shopify Admin → Products
2. Find the Cranberry product
3. Change template back to "Default"
4. Save

### Remove Badge (Option 3)
1. Remove the added code from theme.liquid
2. Push to Shopify

---

## Current Status

**Implemented:** None yet (ready to implement)

**Recommendation:** Start with Option 1 (CSS only)

**Time Required:** 5 minutes

**Risk Level:** Low (just CSS, easy to remove)

---

## Next Steps

1. Choose your option (I recommend Option 1)
2. Make the changes
3. Test on preview URL
4. If approved, leave as-is
5. After launch, consider upgrading to Option 2

---

## Notes

- The CSS uses `class*="spirited-hive-vodka-cranberry"` to target the product page
- This will ONLY affect the Cranberry Vodka product, not other products
- If product handle changes, update the CSS selector
- Consider adding to other holiday products if you create more

---

## Questions?

- **Do we need holiday effects on product page?** Not critical - CSS styling is enough
- **What if customer visits from homepage?** They'll see consistent red theme
- **Will this affect other products?** No - CSS targets only cranberry product
- **Can we A/B test this?** Yes - can show to some traffic, not others

---

**Ready to implement!** Choose your option and let's make it happen. 🎄
