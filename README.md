# ByteSpace Landing

A pixel-close implementation of the **ByteSpace** online course platform, built from a Figma design as part of a Jr. Software Engineer (Frontend) assessment for Doin Tech Limited.

- **Live:** _add the Vercel URL here after deployment_
- **Repository:** https://github.com/pervezmia/bytespace-landing

---

## Tech Stack

| Area | Choice |
|---|---|
| Framework | Next.js 16 (App Router), JavaScript |
| Styling | Tailwind CSS v4 |
| UI Components | HeroUI v3 |
| Animation | Motion (hover, entrance), AOS (scroll reveal) |
| Icons | Gravity UI Icons (`@gravity-ui/icons`) |
| Font | Poppins via `next/font/google` |
| Deployment | Vercel |

---

## Pages Built

| Page | Route | Notes |
|---|---|---|
| Home (Landing) | `/` | Required — full Figma match |
| Courses | `/courses` | Filter, search, pagination |
| Course Details | `/courses/[id]` | About, Lessons, Reviews tabs |
| Creator Profile | `/creators/[id]` | Creator bio + course grid |
| Login | `/login` | Bonus — UI + validation only |
| Register | `/register` | Bonus — UI + validation only |
| 404 | `*` | Custom not-found page |

---

## Features

- Full landing page from Figma design:
  - Navbar with mobile hamburger menu
  - Hero with search bar and floating UI cards
  - Partner strip
  - Course discovery with category chip filter
  - Explore diverse learning paths (category cards)
  - Professional growth section with stats
  - Create & manage courses section
  - Creator CTA banner
  - Community testimonials
  - Footer with newsletter signup
- Course listing with category filter, level filter, and pagination
- Course details with About / Lessons / Reviews tabs
- Creator profile page
- Login and Register pages with client-side validation and password toggle
- Custom 404 page
- Fully responsive (mobile, tablet, desktop)
- Scroll reveal animations (AOS) and entrance/hover animations (Motion)
- Semantic HTML, `alt` text and ARIA labels throughout
- No backend — all data is static in `src/data`

---

## Architecture

**Server vs Client split:**
- `app/page.jsx` and `components/sections/*` are **server components** — they import static data and pass it as props
- `"use client"` components are small leaf nodes: category filter chips, search input, mobile menu, form inputs, animation wrappers
- Only serializable data (strings, numbers, arrays, plain objects) crosses the server → client boundary
- AOS handles scroll reveal on sections and cards; Motion handles hover, button press and hero entrance — never both on the same element

---

## Project Structure

```
bytespace-landing/
├── public/
│   ├── images/
│   │   ├── avatars/
│   │   ├── courses/
│   │   ├── growth/
│   │   ├── hero/
│   │   └── register/
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── globals.css
│   │   ├── not-found.jsx
│   │   ├── courses/
│   │   │   ├── page.jsx
│   │   │   └── [id]/page.jsx
│   │   ├── creators/
│   │   │   └── [id]/page.jsx
│   │   └── (auth)/
│   │       ├── login/page.jsx
│   │       └── register/page.jsx
│   ├── components/
│   │   ├── ui/               # Container, Button, AvatarStack, Float, Reveal
│   │   ├── layout/           # Navbar, Footer, NavLink, MobileMenu, CartButton
│   │   ├── sections/         # Hero, Partners, Discover, Categories, Growth, CreatorCTA, Testimonials
│   │   ├── hero/             # HeroSearch, HeroVisual
│   │   ├── cards/            # CourseCard, CategoryCard, TestimonialCard, ProgressCard, StudentsCard
│   │   ├── courses/          # CoursesClient, CourseCard, CategoryChips, FilterBar, Pagination
│   │   ├── course-details/   # CourseHero, CourseVideo, CourseTabs, CourseSidebar, CourseReviews
│   │   ├── creator/          # CreatorCourses
│   │   ├── auth/             # LoginForm, RegisterForm
│   │   └── providers/        # AosProvider
│   ├── data/
│   │   ├── courses.js
│   │   ├── categories.js
│   │   ├── creators.js
│   │   ├── discover.js
│   │   ├── footer.js
│   │   ├── growth.js
│   │   ├── hero.js
│   │   ├── navLinks.js
│   │   ├── partners.js
│   │   ├── testimonials.js
│   │   └── avatars.js
│   ├── lib/
│   │   └── utils.js          # cn() helper (clsx + tailwind-merge)
│   └── hooks/
├── jsconfig.json
└── README.md
```

---

## Getting Started

**Prerequisites:** Node.js 18.18+ and npm.

```bash
# clone
git clone https://github.com/pervezmia/bytespace-landing.git
cd bytespace-landing

# install
npm install

# dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

---

## Conventions

- Component files: PascalCase `.jsx`, one component per file
- Data and utility files: camelCase `.js`
- Color and font tokens defined once in `globals.css`, never hardcoded hex in components
- `next/image` everywhere; hero image uses `priority`
- Import alias `@/*` → `src/*`

---

## Git Workflow

- `main` — stable base
- `feat/landing-page` — all work done here
- PR from `feat/landing-page` → `main` for review
- Commits follow conventional style: `feat:`, `fix:`, `refactor:`, `docs:`

---

## Status

- [x] Project setup, fonts and design tokens
- [x] Navbar with responsive mobile menu
- [x] Hero section with search and floating cards
- [x] Partner strip
- [x] Discover section with category chip filter
- [x] Explore Diverse Learning Paths
- [x] Professional growth + Create & Manage section
- [x] Creator CTA banner
- [x] Community testimonials
- [x] Footer with newsletter
- [x] Courses listing page (filter + pagination)
- [x] Course details page (About / Lessons / Reviews)
- [x] Creator profile page
- [x] Custom 404 page
- [x] Login page (bonus)
- [x] Register page (bonus)
- [ ] Vercel deployment

---

## Notes for the Reviewer

- All course, category, testimonial, and creator data is static in `src/data` — no backend required for a frontend assessment
- Login and Register are UI-only with client-side validation; no real auth
- `getCourseDetail(id)` in `courses.js` returns a fallback for courses without dedicated detail entries so every card links to a working details page

---

## Author

**Md Pervez Mia**
GitHub: [pervezmia](https://github.com/pervezmia) · LinkedIn: [pervez-mia](https://linkedin.com/in/pervez-mia)