# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Shopify theme called **Flow** (version 39.8.0) developed by Eight Themes. It's a production e-commerce theme built using Shopify's Liquid templating language.

## Architecture

### Core Directory Structure

- **layout/** - Main theme layout templates
  - `theme.liquid` - Primary layout file that includes header, footer, and page content
  - `password.liquid` - Password-protected store layout
  - GemPages integration layouts (`theme.gempages.*`)

- **sections/** - Shopify sections (modular, reusable content blocks)
  - Homepage sections: `slideshow.liquid`, `featured-product.liquid`, `featured-collection.liquid`, etc.
  - Template sections: `collection-header.liquid`, `blog-posts.liquid`
  - Customer account sections: `customer-*.liquid`
  - Specialized sections: `countdown.liquid`, `events-calendar.liquid`, `collage.liquid`

- **snippets/** - Reusable code components
  - Product components: `card-color-swatch.liquid`, `badge.liquid`
  - UI components: `breadcrumb.liquid`, `back-to-top-button.liquid`, `cart-drawer.liquid`
  - Form inputs: `form-input.liquid`, `form-input--dropdown.liquid`, etc.
  - Utility snippets: `css-variables.liquid`, `button-color-overrides.liquid`

- **templates/** - Page templates
  - JSON-based templates for products, collections, pages, blog, etc.
  - Multiple template variations using suffixes (e.g., `product.basic.json`, `product.merch.json`)
  - GemPages builder templates (`*.gem-*-template.*`)

- **assets/** - Static assets (CSS, JavaScript, images)
  - Theme scripts use ES6 modules with `.js` extension
  - Minified CSS files with `.min.css` pattern
  - Component-based architecture: `component-*.js` files

- **config/** - Theme settings and configuration
  - `settings_schema.json` - Defines all theme customization options in the Shopify admin

- **locales/** - Internationalization files
  - Translation JSON files for multiple languages (bg, cs, da, de, etc.)

### Key Patterns

**Liquid Architecture:**
- Uses Liquid `{% render %}` for including snippets
- `{% sections %}` for section groups (header-group, footer-group, overlay-group)
- Extensive use of `{% liquid %}` blocks for multi-line logic
- Settings accessed via `settings.*` (e.g., `settings.cart_type`, `settings.color_primary`)

**JavaScript Architecture:**
- Web Components pattern using `<safe-load-scripts>` for lazy loading
- Custom element registry at `window.wetheme.webcomponentRegistry`
- Event-driven architecture using `eventBus.js`
- Module-based loading with `data-flow-load-key` attributes

**Color Schemes:**
- Four color schemes: Default (white), First (light), Second (accent), Third (dark)
- Applied via `color-scheme--{{ section.settings.color_scheme }}` classes
- CSS variables defined in `css-variables.liquid` snippet

**Product Variants:**
- Supports three variant display styles: dropdowns, buttons, swatches
- Combined listings support (products linking to other products via variant options)
- Color swatches can use images, metafield values, or file-based swatches
- Variant images driven by `settings.show_variant_image_for_options`

**Cart System:**
- Two cart types: drawer (slide-out) and page
- AJAX-based cart updates using `routes.cart_add_url`, `routes.cart_change_url`
- Cart recommendations powered by Shopify's product recommendations API

**GemPages Integration:**
- Third-party page builder integration
- Templates with `gem-*-template` pattern
- Special handling in layout files for GemPages scripts

## Development Commands

This is a Shopify theme, so development requires the Shopify CLI:

```bash
# Start local development server (requires Shopify CLI)
shopify theme dev

# Deploy to a Shopify store
shopify theme push

# Pull theme files from store
shopify theme pull
```

Note: This repository does not include package.json or build tools. Theme assets are pre-compiled.

## Settings Schema

The `config/settings_schema.json` defines extensive theme settings:
- Colors and typography
- Cart and product card configurations
- Animations and spacing
- Popup modals (newsletter, age verification)
- Social media links
- Search and navigation settings

When modifying theme settings, update this schema to expose controls in Shopify admin.

## Working with Sections

Sections are JSON files (in templates) or Liquid files (in sections/) that define:
- Schema for customization options
- Blocks for nested content
- Presets for quick insertion

Example section structure:
```liquid
{% schema %}
{
  "name": "Section Name",
  "settings": [...],
  "blocks": [...],
  "presets": [...]
}
{% endschema %}
```

## Translation System

All user-facing strings use the `{{ 't' }}` filter:
```liquid
{{ 'products.product.add_to_cart' | t }}
```

Translations stored in `locales/*.json` files with nested key structure.

## Important Metafields

- `shop.metafields.gempages` - GemPages configuration
- `value.swatch.image` and `value.swatch.color` - Variant swatch metafields
- Product metafields for custom badges and variants

## Theme Features

- Predictive search with AJAX results
- Quick shop modal for products
- Gift wrapping product integration
- Product comparison
- Store locator
- Events calendar
- Countdown timers
- Age verification popup
- Newsletter popup with customizable triggers
- Back-to-top button
- Breadcrumbs (optional)
- Animations (optional, with Ken Burns effect)
- Product recommendations in cart
