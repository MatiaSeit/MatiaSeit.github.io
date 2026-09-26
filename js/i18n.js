/* =========================================================
   Matias Seitlinger — Portfolio
   Diccionario de traducciones ES / EN
   Todo el contenido está basado en el CV real de Matias.
   ========================================================= */

const I18N = {
  es: {
    "meta.title": "Matias Seitlinger — Desarrollador Backend Junior",
    "meta.desc":
      "Portfolio de Matias Seitlinger, desarrollador backend junior especializado en Java, Spring Boot, Python y Django. Basado en Barcelona.",

    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.education": "Formación",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    "crawl.title": "TRANSMISIÓN ENTRANTE",
    "crawl.p1":
      "En una galaxia hecha de terminales, commits y despliegues nocturnos, un desarrollador completó su entrenamiento en el Máster de Desarrollo Web Full Stack.",
    "crawl.p2":
      "Tras años operando sistemas críticos en tierra, mar y aire — de caballerizas en Buenos Aires a control de calidad en Frankfurt — Matias Seitlinger redirigió toda su disciplina operativa hacia el código.",
    "crawl.p3":
      "Ahora, desde Barcelona, busca unirse a una tripulación donde construir APIs sólidas, sistemas que no fallen bajo presión, y resolver problemas reales junto a un buen equipo.",
    "crawl.skip": "Saltar transmisión",

    "loader.text": "Iniciando hipermotor…",

    "hero.kicker": "Disponible para nuevas misiones",
    "hero.title.pre": "Hola, soy",
    "hero.title.accent": "Matias Seitlinger",
    "hero.roles": [
      "Desarrollador Backend Junior",
      "Java · Spring Boot",
      "Python · Django",
      "React · JavaScript",
      "Listo para producción"
    ],
    "hero.desc":
      "Desarrollador backend junior egresado del Máster en Desarrollo Web Full Stack de Conquer Blocks. Construyo APIs REST con Java y Spring Boot, además de proyectos full stack con Django, React y despliegue real en producción.",
    "hero.cta.projects": "Ver proyectos",
    "hero.cta.cv": "Descargar CV",
    "hero.stat1.num": "24/24",
    "hero.stat1.label": "Evaluaciones superadas",
    "hero.stat2.num": "8+",
    "hero.stat2.label": "Proyectos construidos",
    "hero.stat3.num": "3",
    "hero.stat3.label": "Idiomas",
    "hero.scroll": "Desplazar",
    "hero.tag": "// perfil_backend.json",

    "about.eyebrow": "Ficha del piloto",
    "about.title": "Sobre mí",
    "about.p1":
      "Soy desarrollador backend junior especializado en <strong>Java y Spring Boot</strong>, egresado del Máster en Desarrollo Web Full Stack de Conquer Blocks. Tengo experiencia práctica construyendo APIs REST con arquitectura en capas, Spring Data JPA/Hibernate, bases de datos relacionales y documentación con Swagger/OpenAPI.",
    "about.p2":
      "También sumo proyectos full stack con <strong>Django, React y despliegue en producción</strong> — incluyendo un proyecto final de máster completo, con control de concurrencia, tareas asíncronas y tests automatizados.",
    "about.p3":
      "Antes de dedicarme al desarrollo, pasé años en gestión operativa y control de calidad en entornos internacionales — Buenos Aires, Frankfurt, Sídney. Esa disciplina para seguir procesos, cuidar los detalles y no romper nada bajo presión es la que ahora aplico al código.",
    "about.tags": [
      "Analítico",
      "Autónomo",
      "Orientado a detalle",
      "Buen compañero de equipo",
      "Entornos internacionales"
    ],
    "about.card.location": "Ubicación",
    "about.card.location.val": "Barcelona, España",
    "about.card.focus": "Foco actual",
    "about.card.focus.val": "Backend Java / Spring Boot",
    "about.card.status": "Disponibilidad",
    "about.card.status.val": "15 días de preaviso",
    "about.card.langs": "Idiomas",
    "about.card.langs.val": "Español · Inglés · Alemán",

    "skills.eyebrow": "Arsenal técnico",
    "skills.title": "Habilidades",
    "skills.lead":
      "El equipo con el que construyo, pruebo y despliego software de punta a punta.",
    "skills.backend.title": "Backend",
    "skills.backend.items": [
      "Java (Spring Boot)",
      "Spring Data JPA / Hibernate",
      "Python (Django, DRF)",
      "Node.js",
      "REST APIs",
      "JWT",
      "Celery / Redis"
    ],
    "skills.db.title": "Bases de datos",
    "skills.db.items": ["PostgreSQL", "MySQL", "SQL"],
    "skills.frontend.title": "Frontend",
    "skills.frontend.items": [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML",
      "CSS / SCSS"
    ],
    "skills.tools.title": "Herramientas",
    "skills.tools.items": [
      "Docker",
      "Git / GitHub",
      "CI/CD (GitHub Actions)",
      "Swagger / OpenAPI",
      "Django test",
      "Playwright",
      "Vitest"
    ],
    "skills.method.title": "Metodologías",
    "skills.method.items": ["Scrum", "Ágil"],

    "projects.eyebrow": "Bitácora de misiones",
    "projects.title": "Proyectos",
    "projects.lead":
      "Proyectos reales, con código público y, en varios casos, demo desplegada en producción.",

    "projects.apis.tagline": "Backend · Java",
    "projects.apis.title": "APIs REST en Java — Spring Boot",
    "projects.apis.desc":
      "Tres APIs construidas con Spring Boot 3, Spring Data JPA/Hibernate, MySQL/PostgreSQL y documentación interactiva con Swagger/OpenAPI.",
    "projects.apis.list": [
      "Order Management API — productos, clientes y pedidos; DTOs y manejo centralizado de errores.",
      "Inventory Management API — gestión de inventario con relaciones @ManyToOne y detección automática de stock bajo.",
      "Hotel Reserva API — gestión de reservas con validaciones y control de estados."
    ],

    "projects.pfm.tagline": "Proyecto Final de Máster",
    "projects.pfm.title": "Alliance Supply Command",
    "projects.pfm.desc":
      "Sistema de gestión de inventario para múltiples bases con control de stock atómico bajo concurrencia, generación asíncrona de manifiestos PDF y digest de stock bajo por email. API con permisos por rol, throttling de login, tests de concurrencia y test end-to-end con Playwright. Desplegado en Render + Neon.",

    "projects.django.tagline": "Full Stack · Django",
    "projects.django.title": "Biblioteca Digital & Gestor de Tareas",
    "projects.django.desc":
      "Dos aplicaciones Django completas: sistema de préstamos de biblioteca (reseñas, buscador avanzado) y gestor de tareas tipo Trello (drag & drop, control de acceso por roles). 23 tests automatizados entre ambas, todos superados.",

    "projects.react.tagline": "Frontend · React",
    "projects.react.title": "4 mini-apps en React",
    "projects.react.desc":
      "Buscaminas, Sudoku Solver (backtracking), CatGallery y Rick and Morty Explorer, consumiendo APIs públicas con React (hooks).",

    "projects.link.repo": "Repo",
    "projects.link.demo": "Demo",
    "projects.link.repos": "Repos",

    "education.eyebrow": "Entrenamiento",
    "education.title": "Formación",
    "education.item.title": "Máster en Desarrollo Web Full Stack",
    "education.item.org": "Conquer Blocks",
    "education.item.date": "2025 — 2026",
    "education.item.desc":
      "Programa finalizado; título en trámite de emisión. 24/24 evaluaciones internas superadas: HTML, CSS, JavaScript, TypeScript, SQL, Python, Java, VueJS, Git, entre otras.",
    "education.item.badge": "Programa completado",

    "experience.eyebrow": "Registro de servicio",
    "experience.title": "Experiencia previa",
    "experience.lead":
      "Antes del código: años de disciplina operativa en entornos internacionales de alta exigencia — la base sobre la que construyo hoy.",
    "experience.item1.title": "Encargado del Área Ecuestre",
    "experience.item1.org": "Fundación Al Reparo · Buenos Aires",
    "experience.item1.date": "2016 — 2020",
    "experience.item1.desc":
      "Gestión operativa de 14 caballos, coordinación con veterinarios y formación de personal nuevo.",
    "experience.item2.title": "Gestión de Documentación y Control de Calidad",
    "experience.item2.org": "Everest Travel GmbH · Frankfurt",
    "experience.item2.date": "2015 — 2016",
    "experience.item2.desc":
      "Verificación de información crítica y gestión de documentación sensible bajo protocolo.",
    "experience.item3.title": "Bartender",
    "experience.item3.org": "Velero Restaurante · Sídney",
    "experience.item3.date": "2010 — 2011",
    "experience.item3.desc":
      "Atención al público y preparación de bebidas en un entorno internacional de alto ritmo.",

    "languages.eyebrow": "Protocolos de comunicación",
    "languages.title": "Idiomas",
    "languages.es": "Español",
    "languages.es.level": "Nativo",
    "languages.en": "Inglés",
    "languages.en.level": "Avanzado",
    "languages.de": "Alemán",
    "languages.de.level": "Básico",

    "contact.eyebrow": "Abrir canal",
    "contact.title": "Contacto",
    "contact.lead":
      "¿Un puesto, un proyecto o simplemente charlar de tecnología? Escribime, respondo rápido.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.cv.es": "CV en español",
    "contact.cv.en": "CV en inglés",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.message": "Mensaje",
    "contact.form.submit": "Enviar transmisión",
    "contact.form.note":
      "Este formulario envía el mensaje directo a mi correo — no se almacena en ningún servidor.",

    "footer.quote": "“Que el código te acompañe.”",
    "footer.rights": "Todos los derechos reservados.",
    "footer.built": "Construido con HTML, CSS y JavaScript — sin frameworks.",

    "droid.hello": "Bip. ¿Buscás algo? Probá el botón de idioma arriba a la derecha."
  },

  en: {
    "meta.title": "Matias Seitlinger — Junior Backend Developer",
    "meta.desc":
      "Portfolio of Matias Seitlinger, junior backend developer specialized in Java, Spring Boot, Python and Django. Based in Barcelona.",

    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "crawl.title": "INCOMING TRANSMISSION",
    "crawl.p1":
      "In a galaxy made of terminals, commits and late-night deployments, a developer completed his training in the Full Stack Web Development Master's program.",
    "crawl.p2":
      "After years operating critical systems on land, sea and air — from stables in Buenos Aires to quality control in Frankfurt — Matias Seitlinger redirected all that operational discipline into code.",
    "crawl.p3":
      "Now, from Barcelona, he seeks to join a crew where he can build solid APIs, systems that don't fail under pressure, and solve real problems alongside a good team.",
    "crawl.skip": "Skip transmission",

    "loader.text": "Engaging hyperdrive…",

    "hero.kicker": "Available for new missions",
    "hero.title.pre": "Hi, I'm",
    "hero.title.accent": "Matias Seitlinger",
    "hero.roles": [
      "Junior Backend Developer",
      "Java · Spring Boot",
      "Python · Django",
      "React · JavaScript",
      "Production ready"
    ],
    "hero.desc":
      "Junior backend developer, graduate of Conquer Blocks' Full Stack Web Development Master's program. I build REST APIs with Java and Spring Boot, plus full-stack projects with Django, React and real production deployment.",
    "hero.cta.projects": "View projects",
    "hero.cta.cv": "Download CV",
    "hero.stat1.num": "24/24",
    "hero.stat1.label": "Assessments passed",
    "hero.stat2.num": "8+",
    "hero.stat2.label": "Projects built",
    "hero.stat3.num": "3",
    "hero.stat3.label": "Languages",
    "hero.scroll": "Scroll",
    "hero.tag": "// backend_profile.json",

    "about.eyebrow": "Pilot record",
    "about.title": "About me",
    "about.p1":
      "I'm a junior backend developer specialized in <strong>Java and Spring Boot</strong>, graduate of Conquer Blocks' Full Stack Web Development Master's program. I have hands-on experience building layered REST APIs with Spring Data JPA/Hibernate, relational databases and Swagger/OpenAPI documentation.",
    "about.p2":
      "I also bring full-stack projects with <strong>Django, React and production deployment</strong> — including a complete final master's project with concurrency control, async tasks and automated testing.",
    "about.p3":
      "Before development, I spent years in operations management and quality control across international environments — Buenos Aires, Frankfurt, Sydney. That discipline for following process, minding detail, and not breaking things under pressure is what I now bring to code.",
    "about.tags": [
      "Analytical",
      "Self-driven",
      "Detail-oriented",
      "Good team player",
      "International environments"
    ],
    "about.card.location": "Location",
    "about.card.location.val": "Barcelona, Spain",
    "about.card.focus": "Current focus",
    "about.card.focus.val": "Backend Java / Spring Boot",
    "about.card.status": "Availability",
    "about.card.status.val": "15 days' notice",
    "about.card.langs": "Languages",
    "about.card.langs.val": "Spanish · English · German",

    "skills.eyebrow": "Technical arsenal",
    "skills.title": "Skills",
    "skills.lead":
      "The toolkit I use to build, test and ship software end to end.",
    "skills.backend.title": "Backend",
    "skills.backend.items": [
      "Java (Spring Boot)",
      "Spring Data JPA / Hibernate",
      "Python (Django, DRF)",
      "Node.js",
      "REST APIs",
      "JWT",
      "Celery / Redis"
    ],
    "skills.db.title": "Databases",
    "skills.db.items": ["PostgreSQL", "MySQL", "SQL"],
    "skills.frontend.title": "Frontend",
    "skills.frontend.items": [
      "JavaScript",
      "TypeScript",
      "React",
      "HTML",
      "CSS / SCSS"
    ],
    "skills.tools.title": "Tools",
    "skills.tools.items": [
      "Docker",
      "Git / GitHub",
      "CI/CD (GitHub Actions)",
      "Swagger / OpenAPI",
      "Django test",
      "Playwright",
      "Vitest"
    ],
    "skills.method.title": "Methodologies",
    "skills.method.items": ["Scrum", "Agile"],

    "projects.eyebrow": "Mission log",
    "projects.title": "Projects",
    "projects.lead":
      "Real projects, with public code and, in several cases, a live demo deployed to production.",

    "projects.apis.tagline": "Backend · Java",
    "projects.apis.title": "Java REST APIs — Spring Boot",
    "projects.apis.desc":
      "Three APIs built with Spring Boot 3, Spring Data JPA/Hibernate, MySQL/PostgreSQL and interactive Swagger/OpenAPI documentation.",
    "projects.apis.list": [
      "Order Management API — products, customers and orders; DTOs and centralized error handling.",
      "Inventory Management API — inventory management with @ManyToOne relations and automatic low-stock detection.",
      "Hotel Reserva API — reservation management with validation and status control."
    ],

    "projects.pfm.tagline": "Final Master's Project",
    "projects.pfm.title": "Alliance Supply Command",
    "projects.pfm.desc":
      "Multi-base inventory management system with atomic, concurrency-safe stock operations, async PDF manifest generation and a low-stock email digest. Role-based permissions, login throttling, concurrency tests and an end-to-end test with Playwright. Deployed on Render + Neon.",

    "projects.django.tagline": "Full Stack · Django",
    "projects.django.title": "Digital Library & Task Manager",
    "projects.django.desc":
      "Two full Django applications: a library loan system (reviews, advanced search) and a Trello-style task manager (drag & drop, role-based access control). 23 automated tests across both, all passing.",

    "projects.react.tagline": "Frontend · React",
    "projects.react.title": "4 React Mini-Apps",
    "projects.react.desc":
      "Minesweeper, Sudoku Solver (backtracking), CatGallery and Rick and Morty Explorer, consuming public APIs with React (hooks).",

    "projects.link.repo": "Repo",
    "projects.link.demo": "Demo",
    "projects.link.repos": "Repos",

    "education.eyebrow": "Training",
    "education.title": "Education",
    "education.item.title": "Full Stack Web Development Master's Degree",
    "education.item.org": "Conquer Blocks",
    "education.item.date": "2025 — 2026",
    "education.item.desc":
      "Program completed; diploma pending issuance. Passed 24/24 internal assessments: HTML, CSS, JavaScript, TypeScript, SQL, Python, Java, VueJS, Git, among others.",
    "education.item.badge": "Program completed",

    "experience.eyebrow": "Service record",
    "experience.title": "Prior experience",
    "experience.lead":
      "Before the code: years of operational discipline in demanding international environments — the foundation I build on today.",
    "experience.item1.title": "Equestrian Area Manager",
    "experience.item1.org": "Fundación Al Reparo · Buenos Aires",
    "experience.item1.date": "2016 — 2020",
    "experience.item1.desc":
      "Operational management of 14 horses, coordination with veterinarians and training of new staff.",
    "experience.item2.title": "Documentation & Quality Control",
    "experience.item2.org": "Everest Travel GmbH · Frankfurt",
    "experience.item2.date": "2015 — 2016",
    "experience.item2.desc":
      "Verification of critical information and management of sensitive documentation under internal protocol.",
    "experience.item3.title": "Bartender",
    "experience.item3.org": "Velero Restaurante · Sydney",
    "experience.item3.date": "2010 — 2011",
    "experience.item3.desc":
      "Customer service and drink preparation in a fast-paced international environment.",

    "languages.eyebrow": "Communication protocols",
    "languages.title": "Languages",
    "languages.es": "Spanish",
    "languages.es.level": "Native",
    "languages.en": "English",
    "languages.en.level": "Advanced",
    "languages.de": "German",
    "languages.de.level": "Basic",

    "contact.eyebrow": "Open channel",
    "contact.title": "Contact",
    "contact.lead":
      "A role, a project, or just want to talk tech? Write to me, I reply fast.",
    "contact.email": "Email",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.cv.es": "Spanish CV",
    "contact.cv.en": "English CV",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.submit": "Send transmission",
    "contact.form.note":
      "This form sends your message straight to my inbox — nothing is stored on any server.",

    "footer.quote": "“May the code be with you.”",
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with HTML, CSS and JavaScript — no frameworks.",

    "droid.hello": "Beep. Looking for something? Try the language switch, top right."
  }
};

// Exponer explícitamente en window: las declaraciones `const`/`let` de nivel
// superior NO se cuelgan automáticamente de window (a diferencia de `var`),
// y main.js necesita acceder a este diccionario como window.I18N.
window.I18N = I18N;

if (typeof module !== "undefined") {
  module.exports = I18N;
}
