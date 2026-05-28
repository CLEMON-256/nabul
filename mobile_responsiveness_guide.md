# Mobile Responsiveness Guide — School Website

A complete breakdown of how the school website handles different screen sizes, what breakpoints are used, and what changes at each breakpoint.

---

## Is the Website Mobile Responsive? ✅ YES

Every section uses **CSS Media Queries** combined with **CSS Grid and Flexbox** to adapt the layout from large desktop monitors down to the smallest mobile phones (320px wide).

The critical foundation is the **viewport meta tag** in `index.html`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Without this line, mobile browsers would zoom out and render the desktop layout tiny. This single tag tells the browser to match its width to the device screen width.

---

## Breakpoint System Used

| Breakpoint | Target Device | CSS Rule |
|---|---|---|
| **Default (no query)** | Desktop / Large screens (1280px+) | Base styles |
| **≤ 1100px** | Laptops / Small desktops | `@media (max-width: 1100px)` |
| **≤ 1024px** | Tablets landscape / Small laptops | `@media (max-width: 1024px)` |
| **≤ 992px** | Large tablets | `@media (max-width: 992px)` |
| **≤ 900px** | Tablets portrait | `@media (max-width: 900px)` |
| **≤ 768px** | Tablets / Large phones | `@media (max-width: 768px)` |
| **≤ 600px** | Phones landscape | `@media (max-width: 600px)` |
| **≤ 480px** | Phones portrait (standard) | `@media (max-width: 480px)` |
| **≤ 400px** | Very small phones (iPhone SE) | `@media (max-width: 400px)` |

---

## What Changes at Each Section on Mobile

### 🔵 Navbar
| Breakpoint | Change |
|---|---|
| ≤ 1024px | Desktop links hidden → Hamburger menu appears |
| ≤ 600px | Top info bar stacks vertically, navbar padding reduced |
| ≤ 400px | Top info bar hidden entirely to save space |

### 🔵 Hero Slider
| Breakpoint | Change |
|---|---|
| ≤ 768px | Stats bar padding reduced, font sizes shrink |
| ≤ 480px | Stats bar wraps into 2×2 grid, arrows stay visible |

### 🔵 Features (4-Colour Cards)
| Breakpoint | Change |
|---|---|
| ≤ 1024px | 4-column grid → 2-column grid, negative margin removed |
| ≤ 600px | 2-column grid → single column stack |

### 🔵 Welcome & Facilities
| Breakpoint | Change |
|---|---|
| ≤ 1100px | 2-column layout → single column, sticky card becomes static |
| ≤ 768px | Facilities grid goes to 1 column, padding tightens |
| ≤ 480px | Heading shrinks, card padding reduces, buttons go full-width |

### 🔵 Admission CTA Banner
| Breakpoint | Change |
|---|---|
| ≤ 900px | 2-column layout → single column, button centres |
| ≤ 600px | Section padding reduces |
| ≤ 480px | Heading shrinks, button goes full-width |

### 🔵 Aims & Values
| Breakpoint | Change |
|---|---|
| ≤ 992px | 2-column grid → single column |
| ≤ 768px | Value cards padding reduces |
| ≤ 480px | Value cards stack number above text, heading shrinks |

### 🔵 Curriculum
| Breakpoint | Change |
|---|---|
| ≤ 1024px | 2-column layout → single column, image moves below text |
| ≤ 768px | Image border radius reduces, experience badge shrinks |
| ≤ 480px | Button goes full-width, badge repositions |

### 🔵 Testimonials
| Breakpoint | Change |
|---|---|
| ≤ 768px | Arrow buttons hidden (navigate by dots only), card padding reduces |
| ≤ 480px | Section title shrinks, quote text shrinks, card tighter |

### 🔵 Gallery
| Breakpoint | Change |
|---|---|
| ≤ 1024px | 4-column grid → 2-column grid |
| ≤ 600px | 2-column grid → single column |
| ≤ 480px | Overlay always visible (no hover on touch), zoom icon hidden, card info always shows |

### 🔵 Footer
| Breakpoint | Change |
|---|---|
| ≤ 1024px | 3-column grid → 2-column grid |
| ≤ 768px | 2-column → single column, bottom bar stacks vertically |
| ≤ 480px | Padding reduced, footer links stack vertically |

---

## Key CSS Techniques for Responsiveness

### 1. CSS Grid with `auto-fit` / Fixed Columns
```css
/* Desktop: 4 columns */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

/* Tablet: 2 columns */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile: 1 column */
@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
```

### 2. Fluid Font Sizes with `clamp()`
Used in the Hero section — font scales automatically between a minimum and maximum:
```css
.hero__title {
  /* Min: 2.4rem | Preferred: 5.5vw | Max: 4.2rem */
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
}
```
This means the title never gets too small on phones or too large on ultra-wide screens.

### 3. Mobile-First Touch Considerations
On the Gallery section, hover overlays always show on mobile because phones have no mouse hover:
```css
@media (max-width: 480px) {
  .gallery-hover-overlay {
    opacity: 1; /* Always visible on touch devices */
  }
  .gallery-icon-circle {
    display: none; /* Zoom icon unnecessary on touch */
  }
}
```

### 4. Full-Width Buttons on Mobile
Buttons that are inline on desktop become full-width on phones:
```css
@media (max-width: 480px) {
  .wf-btn {
    width: 100%;
    justify-content: center;
  }
}
```

### 5. Hamburger Menu Pattern
The desktop nav links hide completely on tablet/mobile, replaced by the hamburger:
```css
/* Desktop nav — visible on large screens */
.navbar__links { display: flex; }

/* On tablet/mobile — hidden */
@media (max-width: 1024px) {
  .navbar__links { display: none; }
  .navbar__hamburger { display: flex; } /* Show hamburger */
  .navbar__mobile { display: flex; }    /* Show mobile menu container */
}
```

---

## How to Test Responsiveness

### In Your Browser (Chrome / Edge / Firefox)
1. Open `http://localhost:5173`
2. Press **F12** to open Developer Tools
3. Click the **device/phone icon** (Toggle Device Toolbar) — shortcut: `Ctrl + Shift + M`
4. Select a device from the dropdown (iPhone SE, Galaxy S8, iPad, etc.)
5. The page will resize and simulate the chosen device's screen

### Common Test Devices
| Device | Width | Breakpoints Hit |
|---|---|---|
| iPhone SE | 375px | All (≤400px, ≤480px, ≤600px, ≤768px, ≤1024px) |
| iPhone 14 | 390px | ≤480px, ≤600px, ≤768px, ≤1024px |
| Samsung Galaxy S21 | 360px | All breakpoints |
| iPad Mini | 768px | ≤768px, ≤1024px |
| iPad Pro 11" | 834px | ≤1024px |
| Laptop 13" | 1280px | ≤1100px |
| Desktop 24" | 1920px | Base styles only |

---

*Generated for the Dallen Academy school website — May 2026.*
