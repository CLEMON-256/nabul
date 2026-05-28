# School Website — Sections Documentation

A comprehensive reference guide for all homepage sections created for the **Junior School** inspired school website. This document outlines each section's purpose, structure, content, design decisions, and technical implementation.

---

## Table of Contents

1. [Navbar](#1-navbar)
2. [Hero Slider](#2-hero-slider)
3. [Features — Key Highlights](#3-features--key-highlights)
4. [Welcome & Facilities](#4-welcome--facilities)
5. [Admission CTA Banner](#5-admission-cta-banner)
6. [Aims & Values](#6-aims--values)
7. [Curriculum Framework](#7-curriculum-framework)
8. [Testimonials Carousel](#8-testimonials-carousel)
9. [School Life Gallery](#9-school-life-gallery)
10. [Footer](#10-footer)

---

## 1. Navbar

**Files:** `Navbar.jsx` · `Navbar.css`

### Purpose
The top navigation bar provides instant access to all major sections of the school website. It includes a top information bar with contact details and opening hours, then transitions into the primary navigation.

### Structure
- **Top Info Bar** — Phone number, email, and school hours displayed in a slim strip above the nav.
- **Logo** — Initials badge (`D`) and school name with tagline.
- **Desktop Links** — Flat navigation items with dropdown support for *About Us*, *Academics*, and *Admissions*.
- **CTA Button** — "Apply Now" button linking to the admissions section.
- **Mobile Hamburger** — Collapsible menu for small screens with accordion-style dropdowns.

### Design Decisions
- The navbar becomes slightly opaque and elevated on scroll (glassmorphism effect via `navbar--scrolled` class).
- Color palette: deep navy `#0a2463` as the primary, with golden `#f5c842` accents.

---

## 2. Hero Slider

**Files:** `Hero.jsx` · `Hero.css`

### Purpose
A full-viewport image carousel that is the first visual impact a visitor experiences. It sets the tone of excellence and dynamism for the school.

### Structure
- **4 Background Slides** — Each paired with a hero image, badge label, title, subtitle, and two CTA buttons.
- **Overlay** — Gradient overlay from the left (dark navy) to the right (semi-transparent) for text legibility.
- **Stats Bar** — A glassmorphic bar anchored near the bottom showing: Students Enrolled, Expert Teachers, Years of Excellence, Pass Rate.
- **Dot Navigation** — Slide indicators at the bottom center; the active dot elongates.
- **Arrow Controls** — Previous/Next buttons on both sides.
- **Progress Bar** — A thin bar at the very bottom animates showing how much time is left before auto-advancing.
- **Slide Counter** — Current/total slide counter positioned at the bottom-right.

### Interactive Features
- **Auto-advance** every 5 seconds using `setInterval`.
- **Smooth animation** — slides enter from below (`translateY(30px) → 0`) and exit upward.
- **Ken Burns zoom** — background images scale from `1.08` to `1.0` while active.

---

## 3. Features — Key Highlights

**Files:** `Features.jsx` · `Features.css`

### Purpose
This is the signature section inspired directly by the Junior School reference design. It presents four core pillars of the school in visually distinct, colorful column cards positioned to **overlap the Hero section**, creating a layered, premium visual effect.

### Structure
A **4-column CSS Grid** — each card contains:
- **Circular White Icon Badge** — A white circle with a blue-stroke SVG icon that floats above the top edge of the card (positioned with `position: absolute; top: 0; transform: translate(-50%, -50%)`).
- **Card Title** — Bold serif text in white.
- **Card Description** — Smaller regular-weight paragraph in white.

### Cards
| Card | Color | Content |
|---|---|---|
| Certified Teachers | Sky Blue `#1ea5fc` | SVG people/users icon |
| Quality Education | Leaf Green `#7cb342` | SVG open book icon |
| School Library | Navy Blue `#002244` | SVG books/lines icon |
| Co-curricular Activities | Coral Red `#ef473a` | SVG circle/globe icon |

### Design Decisions
- **Negative margin** (`margin-top: -60px`) pulls the section to overlap slightly over the Hero stats bar on desktop.
- **Hover effect** — the entire card lifts upward (`translateY(-8px)`) with a deeper drop shadow.
- **Icon hover** — the circular icon translates upward a little more and scales to `1.05`.
- Grid collapses to **2-column** at ≤1024px and **1-column** at ≤600px.

---

## 4. Welcome & Facilities

**Files:** `WelcomeFacilities.jsx` · `WelcomeFacilities.css`

### Purpose
Introduces the school's history, identity, and campus breadth while simultaneously listing the physical facilities available to students.

### Structure
**Two-column layout (asymmetric grid: `1.1fr 0.9fr`):**

**Left Column — Facilities Grid:**
- Section badge ("Our Campus Assets") in blue
- Heading "School Facilities" with an underline accent
- **2-column icon grid** of 6 facilities: Modern Library, School Transport, Swimming Pool, Medical Clinic, Creative Arts & Music, Sports Fields
- Each facility card shows a rounded-rectangle icon box (hover fills with blue), title, and description text
- "View Important Documents" pill button at the bottom

**Right Column — Welcome Card:**
- Sticky-positioned card with soft shadow and rounded corners (`border-radius: 24px`)
- "FOUNDED IN 1986" badge in navy/gold
- Welcome heading with blue-highlighted school name
- Lead text + three informational paragraphs about history and campuses
- "Read Our Full Story" gold pill button

### Design Decisions
- Facility icons transition from blue-tinted background to solid blue with a shadow on hover, providing an engaging micro-interaction.
- The right column card is `position: sticky` on desktop so it stays visible as you scroll the left column.

---

## 5. Admission CTA Banner

**Files:** `AdmissionCTA.jsx` · `AdmissionCTA.css`

### Purpose
A mid-page, high-contrast conversion banner designed to drive enrollment inquiries. It uses a full-width background image with a deep color overlay to create urgency and visual energy.

### Structure
- **Background Image** — Uses the existing `hero3.png` with `background-attachment: fixed` for a parallax-style effect.
- **Gradient Overlay** — A multi-stop gradient from dark navy (`rgba(11,26,54,0.93)`) to teal-blue (`rgba(30,165,252,0.7)`) from left to right.
- **Two-column layout:**
  - Left: Gold badge "Enrollment Open", large heading, descriptive paragraph
  - Right: Large rounded "Get Admission Now" CTA button in gold

### Design Decisions
- The `background-attachment: fixed` creates a **parallax scrolling effect** making the section feel dynamic without JavaScript.
- CTA button transitions to white with blue text on hover, reversing the color scheme for a polished UX surprise.

---

## 6. Aims & Values

**Files:** `AimsValues.jsx` · `AimsValues.css`

### Purpose
Clearly communicates the school's educational philosophy — what it is aiming to achieve and what values guide its community.

### Structure
**Two-column equal grid (`1fr 1fr`):**

**Left Column — Aims & Objectives:**
- Section badge + serif heading with blue underline accent
- Lead paragraph explaining the overall mission
- **Bullet list** of 5 aims, each rendered as a flex row with a circular checkmark icon badge and descriptive text

**Right Column — School Values:**
- Three numbered value cards, each as a white-background rounded card (`border-radius: 16px`)
- Card contains: large colored number (`01`, `02`, `03`), bold title, and description paragraph
- Colors: Blue (Aiming High), Green (Doing Our Best), Red (Caring for Each Other)

### Design Decisions
- Value cards lift with `translateY(-5px)` on hover with a stronger shadow for interactive depth.
- The numbered style draws from editorial magazine layouts for a sophisticated feel.

---

## 7. Curriculum Framework

**Files:** `Curriculum.jsx` · `Curriculum.css`

### Purpose
Details the academic structure and educational programs available at the school, backed by a real-looking classroom image to add visual authenticity.

### Structure
**Two-column layout (`1fr 1fr`):**

**Left Column — Classroom Image:**
- A generated photograph of students in an active learning environment
- Overlapping badge in the bottom-right corner showing "PLE — 98% First Grade Pass Rate" (dark navy box with gold text)
- Decorative dot-pattern elements in the top-left and bottom-right corners
- Image has `border-radius: 24px` and a large box shadow

**Right Column — Curriculum Details:**
- Badge, serif heading with blue underline
- Introductory paragraph about the curriculum philosophy
- **Three curriculum pillar rows** — each with a circular icon box and title/description:
  1. Pre-School & Nursery (Ages 3–5)
  2. Primary Curriculum (P1–P7)
  3. ICT & Creative Projects
- "Download School Syllabus" pill button with download icon

### Design Decisions
- The overlapping badge creates a layered depth effect without JavaScript.
- On screens ≤1024px, the image moves **below** the text for a natural reading flow.

---

## 8. Testimonials Carousel

**Files:** `Testimonials.jsx` · `Testimonials.css`

### Purpose
Builds social trust and credibility by displaying authentic-style parent reviews in an interactive, auto-advancing carousel.

### Structure
- **Dark navy background** (`#0a1833`) for visual contrast from surrounding white sections
- Centered header with badge and serif title
- **Slider wrapper** with left/right arrow buttons flanking a single featured testimonial card
- **Testimonial Card** (white background):
  - Large decorative quote SVG mark (light blue, positioned absolutely at top)
  - Italic quote text
  - User profile row: colored initial avatar + name + role
- **Dot indicators** at the bottom; active dot elongates to a pill shape

### Interactive Features
- **Auto-advances** every 6 seconds via `setInterval`
- **Fade animation** — the card fades out (`opacity: 0; translateY(10px)`) then the next quote fades in
- Arrows hidden on mobile; users navigate via dots

---

## 9. School Life Gallery

**Files:** `Gallery.jsx` · `Gallery.css`

### Purpose
Provides a visual window into campus life, showing prospective families what the student experience looks like day-to-day.

### Structure
- Centered header (badge + title)
- **4-column responsive image grid**
- Each grid card:
  - Image with `aspect-ratio: 4/3` and `object-fit: cover`
  - On hover: overlay slides in (`opacity: 0 → 1`) with a gradient from transparent to dark navy
  - Overlay contains: a white circle with a zoom-plus icon (top-right), category label in gold, and card title in white

### Design Decisions
- Images **scale to `1.1` and rotate 1°** on hover for a luxurious zoom feel.
- The icon and card info animate separately using `translateY` transitions with slightly staggered delays.
- Grid collapses: 4-col → 2-col (≤1024px) → 1-col (≤600px).

---

## 10. Footer

**Files:** `Footer.jsx` · `Footer.css`

### Purpose
Provides all essential contact information, a media preview, and quick navigation links. It also anchors the page with legal and branding text.

### Structure
**Dark background (`#061022`) — 3-column grid:**

**Column 1 — Contact Details:**
- Heading "Have a Question?" with blue underline
- Three contact rows: Location (pin icon), Phone numbers (phone icon), Email (envelope icon)

**Column 2 — YouTube Channel Mockup:**
- Short descriptive text
- A mockup video card styled as a YouTube player:
  - Thumbnail with background image + dark overlay
  - Red play button that scales on hover
  - Duration badge overlay (`04:22`)
  - Video title and view count below

**Column 3 — Quick Navigation:**
- Heading with blue underline
- List of 7 page anchor links
- Each link has a `→` arrow that slides in on hover with a `translateX` animation

**Bottom Bar:**
- Full-width divider
- Copyright text (left) + Privacy Policy / Terms of Use links (right)

### Design Decisions
- The YouTube mockup avoids the need to embed an actual video while still communicating that the school has a media presence.
- Footer links use CSS pseudo-elements (`::before` with `→`) for a polished interactive effect without extra markup.

---

## Technical Architecture Summary

| Component | JSX File | CSS File | Key CSS Technique |
|---|---|---|---|
| Navbar | `Navbar.jsx` | `Navbar.css` | Scroll class toggle, glassmorphism |
| Hero | `Hero.jsx` | `Hero.css` | Ken Burns zoom, progress bar, stats glass |
| Features | `Features.jsx` | `Features.css` | Absolute-positioned icon, CSS grid, negative margin overlap |
| WelcomeFacilities | `WelcomeFacilities.jsx` | `WelcomeFacilities.css` | Sticky card column, asymmetric grid |
| AdmissionCTA | `AdmissionCTA.jsx` | `AdmissionCTA.css` | Fixed background parallax, gradient overlay |
| AimsValues | `AimsValues.jsx` | `AimsValues.css` | Editorial numbered cards, checklist bullets |
| Curriculum | `Curriculum.jsx` | `Curriculum.css` | Image with overlapping badge, decorative dots |
| Testimonials | `Testimonials.jsx` | `Testimonials.css` | Fade animation, auto-advance with useEffect |
| Gallery | `Gallery.jsx` | `Gallery.css` | Hover zoom + rotate + overlay reveal |
| Footer | `Footer.jsx` | `Footer.css` | YouTube mockup card, arrow link pseudo-elements |

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Primary Blue | `#1ea5fc` | Buttons, icons, accents |
| Deep Navy | `#002244` / `#0a1833` | Dark backgrounds, feature card |
| Gold/Yellow | `#f5c842` | CTA buttons, highlights, counter values |
| Leaf Green | `#7cb342` | Feature card |
| Coral Red | `#ef473a` | Feature card, value number |
| Body Font | `Inter` (Google Fonts) | All paragraph and UI text |
| Display Font | `Playfair Display` (Google Fonts) | All headings and titles |

---

*Documentation generated on: May 2026. School website built inspired by [junior-school.com](https://junior-school.com/).* 
