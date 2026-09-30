# byte-space

A responsive landing page for **ByteSpace**, an online course platform where learners discover courses and creators publish and manage their own. Built from the [Figma design](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website?node-id=0-1&p=f&t=eQOrqJmq6rMG5b6L-0) as part of a Jr. Software Engineer (Frontend) assessment for Doin Tech Limited.

- **Live:** _add the Vercel URL here after deployment_
- **Repository:** https://github.com/pervezmia/bytespace-landing

## Tech Stack

| Area | Choice |
| --- | --- |
| Framework | Next.js (App Router), JavaScript |
| Styling | Tailwind CSS |
| UI components | HeroUI |
| Animation | Motion (hover, buttons, hero entrance), AOS (scroll reveal) |
| Icons | Gravity UI Icons (`@gravity-ui/icons`) |
| Font | Poppins via `next/font/google` |
| Deployment | Vercel |

## Features

- Full landing page following the Figma design:
  - Navbar and Hero with search
  - Course discovery with category chips and course cards
  - Explore diverse learning paths (category cards)
  - Professional growth section with stats
  - Create and manage courses section
  - Creator call-to-action banner
  - Community testimonials
  - Footer
- Fully responsive (mobile, tablet, desktop)
- Server components for page and sections, small client components for interactivity
- Scroll and hover animations
- Semantic HTML, `alt` text and ARIA labels for accessibility
- Bonus: Login and Signup pages (UI with frontend validation only)

## Architecture

The project splits work between server and client components:

- **Server components** (`app/page.jsx`, `components/sections/*`) load static data from `src/data` and pass it down as props.
- **Client components** (`"use client"`) are small leaf components that hold state, handle events or run animations, for example the course category filter.
- Only serializable data (strings, numbers, arrays, objects) crosses the server-to-client boundary. Icons are passed by name and mapped inside the client component.
- AOS handles scroll reveal on sections and cards, while Motion handles hover, button and hero entrance animation, so the two never animate the same element.

## Project Structure

```
bytespace-landing/
├── public/
│   ├── images/
│   └── logo.svg
├── src/
│   ├── app/
│   │   ├── layout.jsx
│   │   ├── page.jsx
│   │   ├── globals.css
│   │   ├── not-found.jsx
│   │   └── (auth)/
│   │       ├── login/page.jsx
│   │       └── register/page.jsx
│   ├── components/
│   │   ├── ui/          # Button, SectionHeading, Rating
│   │   ├── layout/      # Navbar, Footer
│   │   ├── sections/    # Hero, Discover, Categories, Growth, CreatorTools, CreatorCTA, Testimonials
│   │   ├── cards/       # CourseCard, CategoryCard, TestimonialCard
│   │   └── providers/   # AosProvider, HeroUIProvider
│   ├── data/            # courses, categories, testimonials, navLinks
│   ├── lib/
│   │   └── utils.js     # cn() class name helper
│   └── hooks/
├── jsconfig.json
└── README.md
```

## Getting Started

**Prerequisites:** Node.js 18.18 or newer and npm.

```bash
# clone the repository
git clone https://github.com/pervezmia/bytespace-landing.git
cd bytespace-landing

# install dependencies
npm install

# start the development server
npm run dev
```

Open http://localhost:3000 in your browser.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |

## Conventions

- Components use PascalCase `.jsx` files, one component per file.
- Data and utility files use camelCase `.js`.
- Colors and fonts are defined once as tokens in `globals.css` and reused everywhere, with no hardcoded hex values in components.
- Images use `next/image`; the hero image is loaded with `priority`.
- Import alias `@/*` points to `src/*`.

## Git Workflow

- `main` holds the stable initial setup.
- All work is done on `feat/landing-page` and merged through a Pull Request.
- Commits are small and follow a conventional style, for example `feat: add hero section`.

## Status

- [ ] Project setup, fonts and design tokens
- [ ] Navbar and Hero
- [ ] Discover section (category chips and course cards)
- [ ] Explore Diverse Learning Paths
- [ ] Professional growth section
- [ ] Create and manage courses section
- [ ] Creator CTA banner
- [ ] Testimonials
- [ ] Footer
- [ ] Responsive pass (mobile and tablet)
- [ ] Login and Signup pages (bonus)
- [ ] Vercel deployment

## Notes for the Reviewer

- Course, category and testimonial content is static data in `src/data`. No backend is used, since the task is frontend only.
- Login and Signup, if present, are UI only with client-side validation and no real authentication.

## Author

**Md Pervez Mia**
GitHub: [pervezmia](https://github.com/pervezmia) · LinkedIn: [pervez-mia](https://linkedin.com/in/pervez-mia)