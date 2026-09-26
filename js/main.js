/* =========================================================
   Matias Seitlinger — Portfolio
   Lógica de interacción: idioma, nav, scroll reveal,
   starfield, intro crawl, typewriter, droid, contacto.
   ========================================================= */

(function () {
  "use strict";

  var LANG_KEY = "ms-portfolio-lang";
  var CRAWL_KEY = "ms-portfolio-crawl-seen";

  var state = {
    lang: localStorage.getItem(LANG_KEY) || "es"
  };

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    document.getElementById("year").textContent = new Date().getFullYear();

    setupStarfield();
    setupLoader();
    setupCrawl();
    setupLangToggle();
    applyTranslations(state.lang);
    setupNav();
    setupReveal();
    setupTypedRole();
    setupLangMeters();
    setupContactForm();
    setupDroid();
  }

  /* ---------------------------------------------------------
     Loader
     --------------------------------------------------------- */
  function setupLoader() {
    var loader = document.getElementById("loader");
    window.addEventListener("load", function () {
      setTimeout(function () {
        loader.classList.add("hidden");
      }, 450);
    });
    // Fallback en caso de que 'load' ya haya disparado
    setTimeout(function () {
      loader.classList.add("hidden");
    }, 2500);
  }

  /* ---------------------------------------------------------
     Intro / opening crawl — solo una vez por sesión
     --------------------------------------------------------- */
  function setupCrawl() {
    var crawl = document.getElementById("crawl");
    var skipBtn = document.getElementById("skipCrawl");
    var seen = sessionStorage.getItem(CRAWL_KEY);
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduceMotion) {
      crawl.classList.add("hidden");
      crawl.setAttribute("aria-hidden", "true");
      sessionStorage.setItem(CRAWL_KEY, "1");
      return;
    }

    document.body.classList.add("no-scroll");

    function closeCrawl() {
      crawl.classList.add("hidden");
      crawl.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
      sessionStorage.setItem(CRAWL_KEY, "1");
    }

    skipBtn.addEventListener("click", closeCrawl);

    // Cierra sola cuando termina la animación (26s, ver CSS)
    setTimeout(closeCrawl, 26500);
  }

  /* ---------------------------------------------------------
     Idioma (ES/EN)
     --------------------------------------------------------- */
  function setupLangToggle() {
    var btnEs = document.getElementById("langEs");
    var btnEn = document.getElementById("langEn");

    function setLang(lang) {
      state.lang = lang;
      localStorage.setItem(LANG_KEY, lang);
      btnEs.classList.toggle("active", lang === "es");
      btnEn.classList.toggle("active", lang === "en");
      applyTranslations(lang);
      restartTypedRole();
    }

    btnEs.addEventListener("click", function () {
      setLang("es");
    });
    btnEn.addEventListener("click", function () {
      setLang("en");
    });

    btnEs.classList.toggle("active", state.lang === "es");
    btnEn.classList.toggle("active", state.lang === "en");
  }

  function applyTranslations(lang) {
    var dict = window.I18N[lang] || window.I18N.es;
    document.documentElement.setAttribute("lang", lang);
    document.title = dict["meta.title"];
    var metaDesc = document.getElementById("metaDesc");
    if (metaDesc) metaDesc.setAttribute("content", dict["meta.desc"]);

    // Texto simple
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    // HTML (permite <strong>)
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // Listas (arrays -> <li> o <span class="tag">)
    document.querySelectorAll("[data-i18n-list]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-list");
      var items = dict[key];
      if (!items) return;
      el.innerHTML = "";
      var tagName = el.tagName === "UL" && el.classList.contains("project-sublist") ? "li" : (el.tagName === "UL" ? "li" : "span");
      items.forEach(function (text) {
        var node = document.createElement(tagName);
        if (el.classList.contains("tag-row")) node.className = "tag";
        node.textContent = text;
        el.appendChild(node);
      });
    });

    // Tags "Sobre mí"
    var aboutTags = document.getElementById("aboutTags");
    if (aboutTags && dict["about.tags"]) {
      aboutTags.innerHTML = "";
      dict["about.tags"].forEach(function (t) {
        var span = document.createElement("span");
        span.className = "tag";
        span.textContent = t;
        aboutTags.appendChild(span);
      });
    }

    // Botones de descarga de CV según idioma activo
    var heroCv = document.getElementById("heroCvLink");
    if (heroCv) {
      heroCv.setAttribute(
        "href",
        lang === "en" ? "assets/cv/Matias-Seitlinger-CV-EN.pdf" : "assets/cv/Matias-Seitlinger-CV-ES.pdf"
      );
    }
  }

  /* ---------------------------------------------------------
     Navbar: menú móvil, ocultar al bajar, link activo
     --------------------------------------------------------- */
  function setupNav() {
    var navbar = document.getElementById("navbar");
    var navLinks = document.getElementById("navLinks");
    var navToggle = document.getElementById("navToggle");
    var lastScroll = 0;

    navToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    window.addEventListener(
      "scroll",
      throttle(function () {
        var current = window.scrollY;
        if (current > lastScroll && current > 140) {
          navbar.classList.add("nav-hidden");
        } else {
          navbar.classList.remove("nav-hidden");
        }
        lastScroll = current;
      }, 120)
    );

    // Resaltar link activo según sección visible
    var sections = document.querySelectorAll("main section[id]");
    var links = navLinks.querySelectorAll("a");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            links.forEach(function (l) {
              l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (s) {
      observer.observe(s);
    });
  }

  /* ---------------------------------------------------------
     Scroll reveal
     --------------------------------------------------------- */
  function setupReveal() {
    var items = document.querySelectorAll(".reveal");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ---------------------------------------------------------
     Typewriter de roles en el hero
     --------------------------------------------------------- */
  var typedTimer = null;

  function setupTypedRole() {
    restartTypedRole();
  }

  function restartTypedRole() {
    if (typedTimer) clearTimeout(typedTimer);
    var el = document.getElementById("typedRole");
    if (!el) return;
    var roles = (window.I18N[state.lang] || window.I18N.es)["hero.roles"] || [];
    if (!roles.length) return;

    var roleIndex = 0;
    var charIndex = 0;
    var deleting = false;

    function tick() {
      var full = roles[roleIndex];

      if (!deleting) {
        charIndex++;
        el.textContent = full.slice(0, charIndex);
        if (charIndex === full.length) {
          deleting = true;
          typedTimer = setTimeout(tick, 1600);
          return;
        }
        typedTimer = setTimeout(tick, 55);
      } else {
        charIndex--;
        el.textContent = full.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          typedTimer = setTimeout(tick, 300);
          return;
        }
        typedTimer = setTimeout(tick, 28);
      }
    }

    tick();
  }

  /* ---------------------------------------------------------
     Barras de idiomas (animación de ancho al entrar en vista)
     --------------------------------------------------------- */
  function setupLangMeters() {
    var meters = document.querySelectorAll(".meter > span");
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var span = entry.target;
            var fill = span.getAttribute("data-fill") || "0";
            requestAnimationFrame(function () {
              span.style.width = fill + "%";
            });
            observer.unobserve(span);
          }
        });
      },
      { threshold: 0.4 }
    );
    meters.forEach(function (m) {
      observer.observe(m);
    });
  }

  /* ---------------------------------------------------------
     Formulario de contacto (sin backend -> abre el cliente de mail)
     --------------------------------------------------------- */
  function setupContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#cName").value.trim();
      var email = form.querySelector("#cEmail").value.trim();
      var message = form.querySelector("#cMessage").value.trim();

      var subject = encodeURIComponent("Contacto desde el portfolio — " + name);
      var body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
      window.location.href = "mailto:matiaseitlin@gmail.com?subject=" + subject + "&body=" + body;
    });
  }

  /* ---------------------------------------------------------
     Droid — easter egg
     --------------------------------------------------------- */
  function setupDroid() {
    var droid = document.getElementById("droid");
    var bubble = document.getElementById("droid-bubble");
    if (!droid || !bubble) return;

    var hideTimer = null;

    droid.addEventListener("click", function () {
      bubble.classList.toggle("show");
      if (bubble.classList.contains("show")) {
        clearTimeout(hideTimer);
        hideTimer = setTimeout(function () {
          bubble.classList.remove("show");
        }, 4500);
      }
    });
  }

  /* ---------------------------------------------------------
     Starfield — canvas ligero, sin dependencias
     --------------------------------------------------------- */
  function setupStarfield() {
    var canvas = document.getElementById("starfield");
    if (!canvas || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var stars = [];
    var w, h;
    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      var count = Math.min(180, Math.floor((w * h) / 9000));
      stars = [];
      for (var i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.3 + 0.2,
          s: Math.random() * 0.35 + 0.05,
          a: Math.random()
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < stars.length; i++) {
        var st = stars[i];
        st.a += st.s * 0.02;
        var alpha = 0.35 + Math.abs(Math.sin(st.a)) * 0.65;
        ctx.beginPath();
        ctx.fillStyle = "rgba(210, 226, 255," + alpha.toFixed(2) + ")";
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduceMotion) requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", throttle(resize, 200));
    draw();
  }

  /* ---------------------------------------------------------
     Utilidad: throttle
     --------------------------------------------------------- */
  function throttle(fn, wait) {
    var last = 0;
    var timer = null;
    return function () {
      var now = Date.now();
      var args = arguments;
      if (now - last >= wait) {
        last = now;
        fn.apply(null, args);
      } else {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = Date.now();
          fn.apply(null, args);
        }, wait - (now - last));
      }
    };
  }
})();
