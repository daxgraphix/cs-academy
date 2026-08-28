# CS Academy Internationalization (i18n) & Localization Strategy

## Overview
CS Academy utilizes a **Swahili-first** internationalization strategy designed for SEO dominance and seamless user experience across East Africa. The architecture uses a hybrid approach to handle both static UI strings and dynamic domain-specific data.

## Architecture

### 1. UI Translations (`src/data/translations.ts`)
Static UI elements (Navbar, Footer, Section Headers, Buttons) are managed through a structured translation object.
- **`translations`**: The default English UI strings.
- **`translations_sw`**: The full Swahili counterpart, maintaining 1:1 key parity.
- **`Translations` Type**: Ensures type safety across both language objects.

### 2. Domain Data Localization (`src/data/`)
Domain-specific content (Programs, Blog, Pricing, Training) uses the **Localized Property Pattern (LPP)**. Instead of separate files, each data object contains both English and Swahili fields.

**Example Pattern:**
```typescript
{
  id: 'ai-mastery',
  title: 'AI Mastery',
  title_sw: 'Umahiri wa AI',
  description: 'Master prompt engineering...',
  description_sw: 'Bobea katika uhandisi wa amri...',
}
```
**Benefit**: This structure allows the `<SEO />` component to pull localized metadata directly from the data source, ensuring Swahili pages rank for Swahili search terms.

### 3. SEO & Metadata (`src/components/SEO.tsx`)
The `SEO` component uses `react-helmet-async` to dynamically inject localized metadata:
- **Language Attribute**: Sets `<html lang="...">` based on active state.
- **Dynamic Titles**: Automatically localized and appended with " | CS Academy".
- **Trust Signals**: Localized descriptions highlight regional relevance (e.g., mentioning M-Pesa/Tigo Pesa).

### 4. Performance & UX Optimization
- **React Suspense**: Pages are lazy-loaded (`lazy()`) to reduce initial bundle size, which is critical for users on low-bandwidth mobile networks in East Africa.
- **Dark Mode Transitions**: All localized components must use `transition-colors duration-300` to prevent visual "snapping" during theme or language toggles.

---

## Strategic Localization Focus

### The "Vibe Coding" Niche
We target high-intent, low-competition keywords in the African tech space. The academy provides dedicated localized content for "Vibe Coding in Swahili" to capture early-adopter traffic.

### Mobile Money Trust Signals
Localization extends beyond text. We prioritize the visibility of **M-Pesa**, **Tigo Pesa**, and **Airtel Money** logos in the Hero and Pricing sections to build immediate financial trust.

---

## Maintenance Guidelines

1. **Adding UI Strings**: Update the `Translations` interface in `src/data/translations.ts` and add both EN/SW values.
2. **Adding Domain Data**: When adding a Blog post or Program, the `_sw` fields are **mandatory**.
3. **Strict Parity Rule**: Every user-facing string must have a `_sw` version to prevent "language leaking."
4. **Context over Literal**: Technical terms (e.g., "Prompt Engineering") should be followed by their English equivalent in brackets if a direct Swahili translation is unclear to a professional audience.
