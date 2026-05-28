# Guide: Dot Navigation for Auto-Sliding Image Carousels

This guide explains **exactly how the sliding dots work** — what they are called, how they control images, and how to build one from scratch in both plain HTML/CSS/JS and React.

---

## What Are They Called?

The small dots at the bottom of a slideshow are called:

- **Dot Indicators** / **Dot Navigation**
- **Slide Indicators**
- **Pagination Dots**
- **Carousel Dots**

The entire sliding image component is called a:

- **Carousel**
- **Slider**
- **Image Rotator**
- **Slideshow**

The dots do two things:
1. **Show you which slide is active** (the active dot looks different — filled, wider, or coloured)
2. **Let you click to jump to any slide manually**

---

## How It Works — The Logic

Think of it like a TV remote. You have 4 channels (slides). The dots are the channel buttons. When the TV auto-switches channels every few seconds, the button for the current channel lights up.

```
Slides:   [ Image 1 ]  [ Image 2 ]  [ Image 3 ]  [ Image 4 ]
                            ↑ currently showing
Dots:         ○              ●              ○              ○
         (inactive)      (active)      (inactive)     (inactive)
```

The key state you need to track is simply: **"which index is currently active?"**

---

## Part 1: Plain HTML + CSS + JavaScript

### Step 1 — HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Image Carousel with Dots</title>
  <link rel="stylesheet" href="carousel.css" />
</head>
<body>

  <div class="carousel">

    <!-- The slides -->
    <div class="carousel__slides">
      <div class="slide active" style="background-image: url('image1.jpg')"></div>
      <div class="slide"        style="background-image: url('image2.jpg')"></div>
      <div class="slide"        style="background-image: url('image3.jpg')"></div>
    </div>

    <!-- The dots -->
    <div class="carousel__dots">
      <button class="dot active" data-index="0" aria-label="Go to slide 1"></button>
      <button class="dot"        data-index="1" aria-label="Go to slide 2"></button>
      <button class="dot"        data-index="2" aria-label="Go to slide 3"></button>
    </div>

  </div>

  <script src="carousel.js"></script>
</body>
</html>
```

---

### Step 2 — CSS Styling

```css
/* carousel.css */

/* Carousel wrapper */
.carousel {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 16px;
}

/* All slides stacked on top of each other */
.carousel__slides {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Individual slide */
.slide {
  position: absolute;       /* All slides are in the same spot */
  inset: 0;                 /* Fills the full carousel */
  background-size: cover;
  background-position: center;
  opacity: 0;               /* Hidden by default */
  transition: opacity 0.8s ease;  /* Smooth fade between slides */
}

/* Only the active slide is visible */
.slide.active {
  opacity: 1;
}

/* ===== DOT CONTAINER ===== */
.carousel__dots {
  position: absolute;
  bottom: 20px;             /* Sits near the bottom of the carousel */
  left: 50%;
  transform: translateX(-50%);  /* Centers the dot row horizontally */
  display: flex;
  gap: 10px;                /* Space between each dot */
  z-index: 10;
}

/* ===== INDIVIDUAL DOT ===== */
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;       /* Makes it a circle */
  background: rgba(255, 255, 255, 0.4);  /* Dim white when inactive */
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}

/* ===== ACTIVE DOT ===== */
.dot.active {
  background: #ffffff;      /* Bright white when active */
  width: 28px;              /* Elongates into a pill shape */
  border-radius: 5px;       /* Rounded pill instead of circle */
}
```

**What makes the active dot look different:**
- `background` changes from dim to bright
- `width` grows from `10px` to `28px`
- `border-radius` changes from `50%` (circle) to `5px` (pill)
- `transition: all 0.3s ease` — all these changes animate smoothly

---

### Step 3 — JavaScript Logic

```js
// carousel.js

// ── 1. Get all elements ──────────────────────────────────
const slides = document.querySelectorAll('.slide');
const dots   = document.querySelectorAll('.dot');

// ── 2. Track the current active slide index ──────────────
let currentIndex = 0;

// ── 3. Core function: switch to a specific slide ─────────
function goToSlide(index) {
  // Remove 'active' from the current slide and dot
  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');

  // Update the current index
  currentIndex = index;

  // Add 'active' to the new slide and dot
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

// ── 4. Make each dot clickable ───────────────────────────
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const targetIndex = Number(dot.dataset.index); // Read "data-index" attribute
    goToSlide(targetIndex);
    resetTimer(); // Restart the auto-timer when user clicks manually
  });
});

// ── 5. Auto-advance every 4 seconds ─────────────────────
let autoTimer;

function startTimer() {
  autoTimer = setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length; // Loop back to 0 after last slide
    goToSlide(nextIndex);
  }, 4000); // 4000 milliseconds = 4 seconds
}

function resetTimer() {
  clearInterval(autoTimer); // Stop current timer
  startTimer();             // Restart it fresh
}

// ── 6. Start the auto-timer when page loads ──────────────
startTimer();
```

**Key JavaScript concepts used:**
| Concept | What it does |
|---|---|
| `classList.add('active')` | Adds the active CSS class to an element |
| `classList.remove('active')` | Removes the active CSS class |
| `setInterval(fn, 4000)` | Calls a function every 4 seconds |
| `clearInterval(timer)` | Stops the repeating timer |
| `% slides.length` | The modulo operator — wraps index back to 0 after the last slide |
| `dataset.index` | Reads the `data-index="2"` attribute from HTML |

---

## Part 2: React Version (How This Website Does It)

In React, instead of manually adding/removing CSS classes, you use **`useState`** to track which slide is active. React re-renders the component automatically and applies the correct class.

### Full React Carousel Component

```jsx
import { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

// ── Data: your slides ──────────────────────────────────────────────────
const slides = [
  { image: '/image1.jpg', title: 'First Slide' },
  { image: '/image2.jpg', title: 'Second Slide' },
  { image: '/image3.jpg', title: 'Third Slide' },
];

const SLIDE_DURATION = 4000; // 4 seconds per slide

export default function Carousel() {
  // ── State: which slide index is active ──────────────────────────────
  const [current, setCurrent] = useState(0);
  // current = 0 means first slide is showing
  // current = 1 means second slide is showing
  // etc.

  // ── Function to go to a specific slide ──────────────────────────────
  const goToSlide = useCallback((index) => {
    setCurrent(index);
  }, []);

  // ── Function to advance to next slide ───────────────────────────────
  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    // (prev + 1) % slides.length wraps back to 0 after the last slide
  }, []);

  // ── Auto-advance with useEffect ──────────────────────────────────────
  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    
    // IMPORTANT: cleanup function — stops the timer when component unmounts
    // Without this, you get a memory leak (timer keeps running even when component is gone)
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="carousel">

      {/* ── Background slides ──────────────────────────────────────── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === current ? 'slide--active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        // i === current means: "is this slide the currently active one?"
        // If yes: apply 'slide--active' class → it becomes visible
        // If no:  no extra class → it stays hidden (opacity: 0)
      ))}

      {/* ── Dot navigation ─────────────────────────────────────────── */}
      <div className="carousel__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'dot--active' : ''}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
          // Same logic: i === current → active class → dot lights up/widens
        ))}
      </div>

    </div>
  );
}
```

### CSS for the React Version

```css
/* Carousel.css */

.carousel {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 16px;
}

/* All slides layered */
.slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.slide--active {
  opacity: 1;
}

/* Dot container */
.carousel__dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

/* Individual dot */
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.35s ease;
}

/* Active dot — wider pill shape */
.dot--active {
  background: #ffffff;
  width: 28px;
  border-radius: 5px;
}
```

---

## Part 3: Understanding the Modulo Operator `%`

This is the **secret to infinite looping**. Without it, the slider would reach the last slide and stop.

```js
// slides.length = 3  (indexes: 0, 1, 2)

// When current = 0: next = (0 + 1) % 3 = 1  ✅ goes to slide 2
// When current = 1: next = (1 + 1) % 3 = 2  ✅ goes to slide 3
// When current = 2: next = (2 + 1) % 3 = 0  ✅ wraps BACK to slide 1 ← this is the magic
```

The `%` (modulo) operator returns the **remainder** of division. `3 % 3 = 0`, so it loops back to the start.

---

## Part 4: Adding a Progress Bar Under the Dots

A thin bar that fills up over time shows users how long until the next slide:

### HTML addition:
```html
<div class="progress-bar">
  <div class="progress-fill" id="progressFill"></div>
</div>
```

### CSS:
```css
.progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0.2);
}

.progress-fill {
  height: 100%;
  width: 0%;
  background: linear-gradient(90deg, #1ea5fc, #f5c842);
  transition: width 0.1s linear;
}
```

### JavaScript — animate it with time math:
```js
const progressFill = document.getElementById('progressFill');

function animateProgress() {
  progressFill.style.width = '0%'; // Reset to empty
  const start = Date.now();
  
  const tick = setInterval(() => {
    const elapsed = Date.now() - start;
    const percent = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
    progressFill.style.width = percent + '%';
    
    if (percent >= 100) clearInterval(tick); // Stop when full
  }, 50); // Update every 50ms for smooth animation
}
```

---

## Part 5: Accessibility Best Practices

```html
<!-- Add role and labels so screen readers understand this is a carousel -->
<div class="carousel" role="region" aria-label="Image Carousel">

  <div class="carousel__slides" aria-live="polite">
    <!-- aria-live="polite" announces slide changes to screen readers -->
    <div class="slide active" aria-hidden="false">...</div>
    <div class="slide"        aria-hidden="true">...</div>
  </div>

  <div class="carousel__dots" role="tablist" aria-label="Slide navigation">
    <button class="dot active" role="tab" aria-selected="true"  aria-label="Slide 1 of 3"></button>
    <button class="dot"        role="tab" aria-selected="false" aria-label="Slide 2 of 3"></button>
    <button class="dot"        role="tab" aria-selected="false" aria-label="Slide 3 of 3"></button>
  </div>

</div>
```

---

## Part 6: Quick Reference — Dot Style Variations

```css
/* Style 1: Classic dots (circles only) */
.dot        { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.4); }
.dot.active { background: white; }

/* Style 2: Pill expand (used in this project) */
.dot        { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.4); }
.dot.active { width: 28px; border-radius: 5px; background: white; }

/* Style 3: Outlined dots */
.dot        { width: 12px; height: 12px; border-radius: 50%; background: transparent; border: 2px solid rgba(255,255,255,0.5); }
.dot.active { border-color: white; background: white; }

/* Style 4: Coloured dots */
.dot        { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.3); }
.dot.active { background: #1ea5fc; transform: scale(1.3); }

/* Style 5: Square dots */
.dot        { width: 8px; height: 8px; border-radius: 2px; background: rgba(255,255,255,0.4); }
.dot.active { width: 24px; background: #f5c842; }
```

---

## Summary: The 5 Things You Need for Dot Slides

| # | What You Need | Purpose |
|---|---|---|
| 1 | **Array of slides** | The content to cycle through |
| 2 | **Current index state** | Tracks which slide is visible (`useState` in React / variable in JS) |
| 3 | **`goToSlide(index)` function** | Changes the active index when a dot is clicked |
| 4 | **`setInterval` timer** | Automatically advances the index every N seconds |
| 5 | **CSS active class** | Makes the current slide visible and the current dot highlighted |

That's the entire system. Everything else (progress bars, arrows, transitions, counters) is just an enhancement on top of these 5 fundamentals.
