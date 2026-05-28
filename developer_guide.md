# Developer Guide — School Website Sections & Scroll Techniques

A complete technical reference for developers explaining **how each section was built**, the **CSS/JavaScript patterns** used, and — most importantly — a full explanation of the "website sliding down" scroll effect and all related scroll-driven visual techniques.

---

## Table of Contents

1. [What Is "Website Sliding Down"? — Scroll Animation Glossary](#1-what-is-website-sliding-down--scroll-animation-glossary)
2. [Smooth Scrolling](#2-smooth-scrolling)
3. [Parallax Scrolling](#3-parallax-scrolling)
4. [Sticky Positioning](#4-sticky-positioning)
5. [CSS Keyframe Animations](#5-css-keyframe-animations)
6. [Intersection Observer API](#6-intersection-observer-api)
7. [CSS Transitions vs Animations](#7-css-transitions-vs-animations)
8. [How Each Section Was Built — Developer Breakdown](#8-how-each-section-was-built--developer-breakdown)
9. [Reusable Design Patterns Used](#9-reusable-design-patterns-used)
10. [Full Technology Stack Summary](#10-full-technology-stack-summary)

---

## 1. What Is "Website Sliding Down"? — Scroll Animation Glossary

When you scroll a website and elements **slide in, fade in, zoom, or animate as you move down the page**, this is a broad concept covered by several technical terms:

---

### 🔹 Scroll-Triggered Animation
**What it is:** Elements that are initially hidden (off-screen or invisible) and animate into view **only when the user scrolls to them**.

**Developer term:** `scroll-triggered animation` or `on-scroll animation`

**How it works (native CSS):**
```css
/* Element starts invisible and shifted down */
.section-card {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

/* When JavaScript adds this class on scroll, it animates */
.section-card.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**How it works (JavaScript trigger):**
```js
// Using the Intersection Observer API (see section 6)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.section-card').forEach(el => observer.observe(el));
```

---

### 🔹 Parallax Scrolling
**What it is:** The background moves at a **slower speed** than the foreground as you scroll, creating a 3D depth illusion.

**Developer term:** `parallax scrolling` or `parallax effect`

**Used in this project:** The Admission CTA banner uses CSS parallax:

```css
/* The background image stays fixed relative to the viewport while the
   section container scrolls normally. This creates the parallax illusion. */
.cta-background {
  background-image: url('/hero3.png');
  background-attachment: fixed; /* <-- This is the CSS parallax trick */
  background-size: cover;
  background-position: center;
}
```

> ⚠️ **Note for developers:** `background-attachment: fixed` is a **CSS-only parallax** technique. It is simple and performant but does not work on iOS Safari. For cross-browser parallax, use JavaScript with `transform: translateY()` tied to scroll position.

---

### 🔹 Hero Slider / Image Carousel
**What it is:** A full-screen slideshow where content **automatically advances** (or is manually navigated) across multiple "slides."

**Developer term:** `carousel`, `slider`, `image rotator`, or `hero banner`

**Used in this project:** The Hero section is a **React-powered auto-advancing carousel**:

```jsx
// Auto-advance every 5 seconds
useEffect(() => {
  const interval = setInterval(nextSlide, 5000);
  return () => clearInterval(interval); // Cleanup on unmount
}, [nextSlide]);
```

The transition between slides is driven by CSS opacity:

```css
.hero__bg {
  opacity: 0;                         /* All slides invisible by default */
  transition: opacity 0.9s ease;      /* Smooth crossfade */
  transform: scale(1.08);             /* Slightly zoomed to start */
  transition: transform 6s ease;      /* Slowly zooms out = Ken Burns effect */
}

.hero__bg--active {
  opacity: 1;          /* Only the active slide is visible */
  transform: scale(1); /* Zooms back to normal over 6 seconds */
}
```

The **zooming effect on the background image** is called the **Ken Burns Effect** — named after the documentary filmmaker known for slowly panning and zooming still photographs.

---

### 🔹 Fade In / Slide In on Scroll
**What it is:** As sections enter the viewport when scrolling down, they appear to slide up from below while fading in.

**Developer terms:** `fade-in animation`, `reveal on scroll`, `entrance animation`, `scroll reveal`

**Example from the Hero content animation:**

```css
@keyframes contentEnter {
  from {
    opacity: 0;
    transform: translateY(30px); /* Starts 30px below its final position */
  }
  to {
    opacity: 1;
    transform: translateY(0);    /* Slides up to its natural position */
  }
}

.hero__content--enter {
  animation: contentEnter 0.7s ease forwards;
}
```

**What `forwards` means:** The element retains the final animation state (fully visible) after the animation ends.

---

### 🔹 CSS Transition (Hover Effects)
**What it is:** When you hover over a card or button and it smoothly **lifts, changes color, or expands**, that is a CSS transition.

**Developer term:** `CSS transition`, `micro-animation`, `hover state`

```css
/* Feature card lifts when hovered */
.feature-card {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.feature-card:hover {
  transform: translateY(-8px);    /* Lifts 8px upward */
  box-shadow: 0 15px 30px rgba(0,0,0,0.25); /* Shadow deepens */
}
```

**`cubic-bezier`** is a custom easing curve for the speed of the transition (acceleration/deceleration profile). `ease-in-out` is the common default.

---

### 🔹 Glassmorphism
**What it is:** A UI effect where elements appear frosted/blurred like glass, showing content underneath.

**Developer term:** `glassmorphism`

**Used in the Navbar on scroll and the Hero stats bar:**

```css
.hero__stat {
  background: rgba(10, 36, 99, 0.45); /* Semi-transparent colored background */
  backdrop-filter: blur(10px);        /* Blurs whatever is behind the element */
}

.navbar--scrolled {
  backdrop-filter: blur(16px);
  background: rgba(10, 36, 99, 0.75);
}
```

---

## 2. Smooth Scrolling

When you click a navigation link (e.g., "About Us") and the page **glides smoothly** to that section instead of jumping instantly, that is **smooth scrolling**.

**Developer term:** `smooth scrolling`

**Implementation in this project — one CSS line in `index.css`:**

```css
html {
  scroll-behavior: smooth; /* All anchor link clicks (#about, #gallery etc.) now scroll smoothly */
}
```

**How anchor links work:**
```html
<!-- Clicking this link... -->
<a href="#gallery">Gallery</a>

<!-- ...scrolls to this element -->
<section id="gallery">...</section>
```

---

## 3. Parallax Scrolling

Already covered in Section 1. Here is a deeper technical view:

### CSS Parallax (Used in AdmissionCTA.jsx)
```css
.cta-background {
  position: absolute;
  inset: 0;
  background-image: url('/hero3.png');
  background-attachment: fixed;   /* Key: background stays fixed to viewport */
  background-size: cover;
  background-position: center;
}
```

### JavaScript Parallax (Advanced — not used here but important to know)
```js
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  // Move background at half the scroll speed for depth illusion
  document.querySelector('.parallax-bg').style.transform = 
    `translateY(${scrollY * 0.5}px)`;
});
```

---

## 4. Sticky Positioning

When an element **sticks to the viewport** as you scroll past it (like a sidebar that follows your scroll), this is `position: sticky`.

**Developer term:** `sticky element`, `sticky sidebar`, `CSS sticky`

**Used in WelcomeFacilities — the right column card stays visible while you scroll the left column:**

```css
.wf-right {
  position: sticky;
  top: 110px; /* Sticks 110px from the top of the viewport */
}
```

**How it works:** The element scrolls normally until it reaches `top: 110px` from the viewport edge — then it "sticks" and remains at that position until its parent container scrolls out of view.

---

## 5. CSS Keyframe Animations

A **keyframe animation** defines an animation sequence with explicit start and end states (and optional intermediate steps).

**Developer term:** `@keyframes`, `CSS animation`, `entrance animation`

### Syntax:
```css
@keyframes myAnimation {
  from { /* Starting state */ }
  to   { /* Ending state */   }
}

/* Or with percentage steps: */
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-20px); }
  100% { transform: translateY(0); }
}
```

### Used in the Hero Section:
```css
/* Slide in from below when a slide activates */
@keyframes contentEnter {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0);    }
}

/* Slide out upward when a slide deactivates */
@keyframes contentExit {
  from { opacity: 1; transform: translateY(0);    }
  to   { opacity: 0; transform: translateY(-20px); }
}
```

### Key Animation Properties:
| Property | What it does |
|---|---|
| `animation-duration` | How long the animation takes (e.g., `0.7s`) |
| `animation-timing-function` | Speed curve (`ease`, `ease-in-out`, `cubic-bezier(...)`) |
| `animation-fill-mode: forwards` | Keep the final state after animation ends |
| `animation-delay` | Wait before starting (e.g., `0.2s`) |

---

## 6. Intersection Observer API

The **Intersection Observer API** is the modern JavaScript way to detect when an element **enters or exits the viewport** — perfect for scroll-triggered animations.

**Developer term:** `Intersection Observer`, `scroll reveal`, `lazy reveal`

```js
// Create an observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Element is visible in the viewport
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target); // Stop watching after first trigger
      }
    });
  },
  {
    threshold: 0.15, // Trigger when 15% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger 50px before the bottom of viewport
  }
);

// Observe all section cards
document.querySelectorAll('.section-card').forEach(el => observer.observe(el));
```

> **Popular libraries that use this under the hood:**
> - [AOS (Animate On Scroll)](https://michaelagreiter.github.io/aos/) — adds `data-aos="fade-up"` attributes
> - [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/) — powerful animation library
> - [Framer Motion](https://www.framer.com/motion/) — used in React projects

---

## 7. CSS Transitions vs Animations

| Feature | `transition` | `@keyframes animation` |
|---|---|---|
| **Triggered by** | A state change (`:hover`, class added) | Runs automatically or on class addition |
| **Control** | Start → End only | Full control with percentage steps |
| **Use case** | Hover effects, focus states | Entrance animations, looping effects |
| **Example** | Button lift on hover | Slide-in from bottom on page load |

```css
/* TRANSITION — hover triggered */
.btn { transition: transform 0.3s ease; }
.btn:hover { transform: translateY(-3px); }

/* ANIMATION — runs on class addition */
@keyframes slideUp {
  from { transform: translateY(40px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
.card.visible { animation: slideUp 0.6s ease forwards; }
```

---

## 8. How Each Section Was Built — Developer Breakdown

### Features Section (Overlapping Blocks)

**The tricky part:** Making icon circles overlap the top border of the card requires:

```css
/* Parent card — gives context for absolute positioning */
.feature-card {
  position: relative;
  padding-top: 4.5rem; /* Space for the icon that sticks out above */
}

/* Icon circle — positioned outside the card's top edge */
.feature-icon-wrapper {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%); /* Moves it UP by half its height */
}
```

**The card overlap on Hero:**
```css
.features-section {
  margin-top: -60px; /* Negative margin pulls it up over the Hero section */
  position: relative;
  z-index: 10;        /* Sits above the Hero */
}
```

---

### Testimonials Auto-Slide

**React pattern using `useEffect` + `useState`:**

```jsx
const [current, setCurrent] = useState(0);

useEffect(() => {
  // Timer advances the slide every 6 seconds
  const timer = setInterval(() => {
    setCurrent(prev => (prev + 1) % testimonials.length);
  }, 6000);

  return () => clearInterval(timer); // IMPORTANT: cleanup prevents memory leaks
}, [current]);
```

**Fade animation between slides:**
```jsx
// State controls which CSS class is applied
const [fadeState, setFadeState] = useState('fade-in');

const triggerChange = (nextIndex) => {
  setFadeState('fade-out');            // 1. Fade out current slide
  setTimeout(() => {
    setCurrent(nextIndex);             // 2. Switch content after 300ms
    setFadeState('fade-in');           // 3. Fade in new content
  }, 300);
};
```

---

### Gallery Hover Reveal Overlay

**Layered CSS stacking with `opacity` transition:**

```css
/* The overlay is always rendered but invisible */
.gallery-hover-overlay {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

/* On card hover, overlay becomes visible */
.gallery-card:hover .gallery-hover-overlay {
  opacity: 1;
}

/* Image zooms and slightly rotates */
.gallery-card:hover .gallery-image {
  transform: scale(1.1) rotate(1deg);
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
```

---

### Auto-advancing Hero Progress Bar

**The progress bar fills up over 5 seconds using JavaScript time math:**

```jsx
useEffect(() => {
  setProgress(0);           // Reset on each new slide
  const start = Date.now();

  const tick = setInterval(() => {
    const elapsed = Date.now() - start;
    // Convert elapsed time to a 0–100 percentage
    setProgress(Math.min((elapsed / 5000) * 100, 100));
  }, 50); // Update every 50ms for smooth visual

  return () => clearInterval(tick);
}, [current]); // Re-run whenever slide changes
```

**CSS renders it:**
```css
.hero__progress-bar {
  width: 0%;                         /* Starts empty */
  transition: width 0.1s linear;     /* Smoothly grows */
  background: linear-gradient(90deg, #e8a020, #f5c842);
}
```

---

## 9. Reusable Design Patterns Used

### Section Badge Pattern
Every section uses a consistent "section badge" label above the heading:
```css
.section-badge {
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #1ea5fc;
  letter-spacing: 1.5px;
  display: inline-block;
  margin-bottom: 0.5rem;
}
```

### Heading Underline Accent
Every major section heading has a short colored underline via `::after`:
```css
.section-title {
  position: relative;
}
.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 4px;
  background: #1ea5fc;
  border-radius: 2px;
}
```

### Pill Button
Rounded full-pill CTA buttons used throughout:
```css
.pill-btn {
  padding: 0.9rem 1.85rem;
  border-radius: 50px;     /* Makes it fully rounded */
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  transition: all 0.3s ease;
}
```

---

## 10. Full Technology Stack Summary

| Layer | Technology | Why Used |
|---|---|---|
| **UI Framework** | React (Vite) | Component-based architecture |
| **Styling** | Vanilla CSS (per-component) | Full control, no class conflicts |
| **Fonts** | Google Fonts — Inter + Playfair Display | Modern sans-serif + elegant serif combo |
| **Icons** | Inline SVG | Scalable, colorable, no external dependency |
| **Scroll Behavior** | CSS `scroll-behavior: smooth` | Native smooth scrolling without JS |
| **Parallax** | CSS `background-attachment: fixed` | Simple CSS-only parallax |
| **Carousel** | React `useState` + `setInterval` | Lightweight auto-advance logic |
| **Animations** | CSS `@keyframes` + `transition` | No library overhead |
| **Sticky Layout** | CSS `position: sticky` | Right-column card stays visible |
| **Responsive** | CSS Grid + Media Queries | Adapts from 4-col to 1-col layouts |
| **Glassmorphism** | `backdrop-filter: blur()` | Frosted glass Navbar & stats bar |

---

## Quick Reference: Scroll Effect Terms

| What You See | Developer Term |
|---|---|
| Page scrolls smoothly to a section | **Smooth Scrolling** (`scroll-behavior: smooth`) |
| Background moves slower than content | **Parallax Scrolling** (`background-attachment: fixed`) |
| Elements slide up into view on scroll | **Scroll-Triggered / Reveal Animation** |
| Cards zoom when you hover | **CSS Transition** (`transform: scale()`) |
| Slideshow that auto-advances | **Carousel / Slider** |
| Sidebar follows your scroll | **Sticky Positioning** (`position: sticky`) |
| Background blurs like frosted glass | **Glassmorphism** (`backdrop-filter: blur()`) |
| Images slowly zoom in/out | **Ken Burns Effect** |
| Element animates when it enters the screen | **Intersection Observer + CSS Animation** |
| Content lifts upward when page loads | **Entrance Animation** (`@keyframes slideUp`) |

---

*This guide was written for the Dallen Academy / Junior School-inspired school website project. All code examples are taken directly from the implementation files in `src/components/`.*
