# Matias Seitlinger — Portfolio

Personal portfolio site for Matias Seitlinger, a junior backend developer specialized in **Java/Spring Boot** and **Python/Django**, with full-stack experience in **React** and production deployment. Graduate of Conquer Blocks' Full Stack Web Development Master's program.

**Live site:** https://matiaseit.github.io/

## About this project

Built as a single-page, fully static site — plain **HTML, CSS and JavaScript**, no frameworks, no build step, no dependencies. Bilingual (Spanish / English) with a language switcher that swaps all content on the fly.

### Features

- Responsive layout (mobile, tablet, desktop breakpoints)
- ES/EN language toggle, persisted across visits
- Lightweight canvas starfield background
- Scroll-reveal animations and an animated "typewriter" role rotator
- Sections: About, Skills, Projects, Education, Experience, Languages, Contact
- Downloadable CV in both languages
- Respects `prefers-reduced-motion` for accessibility

### Tech stack

`HTML5` · `CSS3` (custom properties, Grid/Flexbox) · `Vanilla JavaScript` (IntersectionObserver, Canvas API)

## Project structure

```
web/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── i18n.js      # ES/EN translation dictionary
│   └── main.js      # interactions: language, nav, animations, contact form
├── assets/
│   ├── img/
│   │   └── profile.jpg
│   └── cv/
│       ├── Matias-Seitlinger-CV-ES.pdf
│       └── Matias-Seitlinger-CV-EN.pdf
└── README.md
```

## Running it locally

No build step required. Any of these work:

- Open `index.html` directly, or
- Serve it with a local dev server (recommended, avoids relative-path quirks with `file://`):
  ```bash
  python -m http.server 8000
  ```
  then visit `http://localhost:8000`.

## Contact

- Email: matiaseitlin@gmail.com
- LinkedIn: [linkedin.com/in/matias-seitlinger](https://linkedin.com/in/matias-seitlinger)
- GitHub: [github.com/MatiaSeit](https://github.com/MatiaSeit)
