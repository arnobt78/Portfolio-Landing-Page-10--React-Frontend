# Portfolio Landing Page 10 - React, Vite, JavaScript, TailwindCSS Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-green)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.19-38bdf8)](https://tailwindcss.com/)
[![ESLint](https://img.shields.io/badge/ESLint-9.15-4b32c3)](https://eslint.org/)

A single-page portfolio site built with React, Vite, JavaScript, and Tailwind CSS. It showcases a front-end developer profile with a hero section, tech stack, about section, and project cards—ideal for learning component composition, responsive layout, and Tailwind utility-first styling.

- **Live Demo:** [https://portfolio-ui-10.vercel.app/](https://portfolio-ui-10.vercel.app/)

![Screenshot 2025-02-25 at 16 09 38](https://github.com/user-attachments/assets/285d8ead-1fd4-4db6-a062-18146946ced3)
![Screenshot 2025-02-25 at 16 09 54](https://github.com/user-attachments/assets/dd7e6661-994a-441c-bdba-456ce42a52d6)
![Screenshot 2025-02-25 at 16 10 15](https://github.com/user-attachments/assets/ab5a7be3-200a-4ec3-b428-f647463c0a38)
![Screenshot 2025-02-25 at 16 10 47](https://github.com/user-attachments/assets/3461eef8-d4a3-4214-af37-b61323a09c69)

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Features & Functionality](#features--functionality)
- [Components Walkthrough](#components-walkthrough)
- [Data & Configuration](#data--configuration)
- [Reusing Components Elsewhere](#reusing-components-elsewhere)
- [Styling with Tailwind](#styling-with-tailwind)
- [SEO & Metadata](#seo--metadata)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Overview

This project is a **static, client-side only** portfolio landing page. There is no backend server or API—all content is driven by in-app data and component props. It demonstrates:

- React 18 function components and composition
- Vite for fast development and optimized production builds
- Tailwind CSS for responsive, utility-first styling
- Component-based architecture with reusable UI pieces
- Semantic HTML sections and anchor-based in-page navigation

---

## Tech Stack

| Technology           | Purpose                                 |
| -------------------- | --------------------------------------- |
| **React 18.3**       | UI components and rendering             |
| **Vite 6**           | Build tool, dev server, HMR             |
| **Tailwind CSS 3.4** | Utility-first CSS                       |
| **PostCSS**          | Tailwind processing, autoprefixer       |
| **ESLint 9**         | Linting (flat config)                   |
| **nanoid**           | Unique IDs for list items               |
| **react-icons**      | Icon set (e.g. FaGithubSquare, FaReact) |

---

## Project Structure

```bash
10-tailwind-portfolio/
├── index.html              # Entry HTML, SEO meta tags
├── package.json
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind content paths & theme
├── postcss.config.js       # PostCSS plugins (tailwind, autoprefixer)
├── eslint.config.js        # ESLint 9 flat config
├── public/
│   └── vite.svg            # Favicon
└── src/
    ├── main.jsx            # React root mount
    ├── App.jsx              # Top-level layout & section order
    ├── index.css            # Tailwind directives + custom .align-element
    ├── data.jsx             # links, skills, projects arrays
    ├── assets/
    │   ├── hero.svg
    │   └── about.svg
    └── components/
        ├── Navbar.jsx       # Site logo + navigation links
        ├── Hero.jsx         # Hero headline + social links
        ├── SectionTitle.jsx  # Reusable section heading
        ├── Skills.jsx       # Skills section container
        ├── SkillsCard.jsx   # Single skill card
        ├── About.jsx        # About section with image + text
        ├── Projects.jsx     # Projects section container
        └── ProjectsCard.jsx # Single project card
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: LTS)
- **npm** (comes with Node) or **yarn** / **pnpm**

### Installation

```bash
# Clone the repository (or download and extract)
git clone <your-repo-url>
cd 10-tailwind-portfolio

# Install dependencies
npm install
```

### Run locally

```bash
# Development server with hot reload (default: http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview

# Lint
npm run lint
```

---

## Environment Variables

This project **does not use any environment variables** in the current codebase. All content is defined in `src/data.jsx` and component props.

If you later add features that need config (e.g. analytics IDs, API base URLs), use Vite’s env system:

1. **Create a `.env` file** in the project root (do not commit secrets).

2. **Expose variables to the app** with the `VITE_` prefix:

   ```env
   VITE_APP_TITLE=My Portfolio
   VITE_API_BASE=https://api.example.com
   ```

3. **Use in code** via `import.meta.env`:

   ```js
   const title = import.meta.env.VITE_APP_TITLE;
   const apiBase = import.meta.env.VITE_API_BASE;
   ```

4. **Optional:** Add `.env.example` to the repo with placeholder values and document required variables in this README. Keep `.env` in `.gitignore` (it already is).

---

## Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Start Vite dev server (HMR)     |
| `npm run build`   | Production build → `dist/`      |
| `npm run preview` | Serve `dist/` locally           |
| `npm run lint`    | Run ESLint (0 warnings allowed) |

---

## Features & Functionality

- **Single-page layout:** All sections on one page; navigation uses anchor links (`#home`, `#skills`, `#about`, `#projects`).
- **Responsive design:** Breakpoints via Tailwind (`sm:`, `md:`, `lg:`, `xl:`) for navbar, hero grid, skills grid, and project grid.
- **Reusable section title:** `SectionTitle` provides a consistent heading style with bottom border.
- **Data-driven lists:** Navigation links, skills, and projects come from `src/data.jsx`; changing data updates the UI without changing component structure.
- **Icons:** [react-icons](https://react-icons.github.io/react-icons/) (e.g. Font Awesome, Tabler) for social and project links.
- **No routing library:** Only hash links; no React Router.

---

## Components Walkthrough

### App.jsx

Composes the page by rendering sections in order. No state or routing.

```jsx
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Projects />
    </>
  );
};
export default App;
```

---

### Navbar.jsx

- Renders a logo (“Web**Dev**”) and a list of links from `data.jsx` (`links`).
- Each link is an `<a href={href}>` pointing to `#home`, `#skills`, `#about`, `#projects`.
- Uses Tailwind for layout (flex, gap) and hover styles.

**Reuse idea:** Replace `links` with your own array or pass it as a prop for a generic header.

---

### Hero.jsx

- Headline (“I'm John Doe”), subtitle, tagline, and social icon links (GitHub, LinkedIn, Twitter).
- Optional hero image (hidden on small screens with `hidden md:block`).
- Imports `hero.svg` from `src/assets`.

**Reuse idea:** Accept `title`, `subtitle`, `socialLinks`, and `image` as props to make a generic hero.

---

### SectionTitle.jsx

- Single prop: `text`. Renders an `<h2>` with a bottom border.
- Used in Skills (“tech stack”), About (“code and coffee”), and Projects (“web creations”).

```jsx
<SectionTitle text="tech stack" />
```

**Reuse idea:** Use in any project that needs consistent section headings; optional props for tag (`h2`/`h3`) or className.

---

### Skills.jsx & SkillsCard.jsx

- **Skills:** Imports `skills` from `data.jsx`, renders a `SectionTitle` and a grid of `SkillsCard` components.
- **SkillsCard:** Receives `icon`, `title`, and `text`; displays icon (React element), title, and description.

**Reuse idea:** Keep the same props shape (`icon` as React node, `title`, `text`) and feed different data; or swap icons for images/emojis.

---

### About.jsx

- Two-column layout: image (`about.svg`) and a block of text with a `SectionTitle` (“code and coffee”).
- Section has `id="about"` for anchor navigation.

**Reuse idea:** Pass `image`, `title`, and `children` or `content` to make it content-agnostic.

---

### Projects.jsx & ProjectsCard.jsx

- **Projects:** Imports `projects` from `data.jsx`, renders a `SectionTitle` and a grid of `ProjectsCard` components.
- **ProjectsCard:** Receives `url`, `img`, `github`, `title`, `text`. Shows image, title, description, and links (live site + GitHub). Uses `TbWorldWww` and `FaGithubSquare` from react-icons.

**Reuse idea:** Reuse `ProjectsCard` in any “project gallery”; ensure each item has `url`, `img`, `github`, `title`, `text` (or map your API/model to this shape).

---

## Data & Configuration

### data.jsx

- **links:** `{ id, href, text }[]` — used by `Navbar`.
- **skills:** `{ id, title, icon, text }[]` — `icon` is a React element (e.g. `<FaReact className="..." />`).
- **projects:** `{ id, img, url, github, title, text }[]` — image URL, live link, repo link, title, description.

IDs are generated with `nanoid()`. To add/remove items, edit the arrays in `data.jsx`; no backend or API is involved.

---

## Reusing Components Elsewhere

1. **Copy the component file** (and any assets it imports, e.g. SVGs).
2. **Satisfy props:** Match the expected prop names or add a thin adapter (e.g. map your data to `{ icon, title, text }` for `SkillsCard`).
3. **Tailwind:** Ensure the new project uses Tailwind (or copy the same utility classes into your CSS).
4. **Icons:** Install `react-icons` if you use the same icon components, or replace with your own icon set.
5. **SectionTitle:** Only needs a `text` prop; use it in any sectioned layout.
6. **Layout class:** This app uses a shared `.align-element` class (see `src/index.css`) for max-width and padding; either reuse that or replace with your own container class.

---

## Styling with Tailwind

- **Global:** `src/index.css` imports Tailwind’s base, components, and utilities and defines a custom component:

  ```css
  @layer components {
    .align-element {
      @apply mx-auto max-w-7xl px-8;
    }
  }
  ```

- **Content:** `tailwind.config.js` sets `content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']` so Tailwind scans the right files.
- **Theme:** Emerald accent (`emerald-100`, `emerald-500`, `emerald-600`), slate for text; adjust in `tailwind.config.js` or replace classes in components.

---

## SEO & Metadata

`index.html` includes:

- Title: “John Doe's Portfolio”
- Meta description, author, keywords
- Canonical URL (production demo URL)
- Open Graph and Twitter Card tags
- Favicon: `/vite.svg`

Update the canonical URL, title, and description when deploying to your own domain.

---

## Keywords

Portfolio, React, Vite, Tailwind CSS, front-end developer, single-page application, component-based UI, responsive design, landing page, ESLint, PostCSS, nanoid, react-icons, educational project, open source.

---

## Conclusion

This repo is a small, self-contained portfolio template with no backend or API. You can run it with `npm install` and `npm run dev`, edit content in `src/data.jsx`, and reuse individual components (Navbar, Hero, SectionTitle, Skills/SkillsCard, About, Projects/ProjectsCard) in other React + Tailwind projects. For learning, it illustrates component composition, prop drilling, responsive grids, and Tailwind utility usage.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
