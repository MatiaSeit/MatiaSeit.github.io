# Matias Seitlinger — Portfolio

Web personal de Matias Seitlinger: desarrollador backend junior (Java/Spring Boot, Python/Django, React). HTML, CSS y JavaScript puro, sin frameworks ni build step. Bilingüe (ES/EN) con selector.

## Estructura

```
web/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── i18n.js        # diccionario de textos ES/EN
│   └── main.js         # interacciones (idioma, nav, animaciones, contacto)
├── assets/
│   ├── img/
│   │   └── profile.jpg
│   └── cv/
│       ├── Matias-Seitlinger-CV-ES.pdf
│       └── Matias-Seitlinger-CV-EN.pdf
└── README.md
```

## Ver la web en tu computadora (antes de publicar)

Como es HTML/CSS/JS puro, no necesita instalar nada. Dos formas simples:

1. **Doble clic en `index.html`** — se abre directo en el navegador. Funciona para ver el diseño, pero algunos navegadores bloquean ciertas rutas relativas al abrir como archivo local.
2. **Recomendado — servidor local rápido** (evita ese problema):
   - Si tenés Python instalado, abrí una terminal en esta carpeta y corré:
     ```
     python -m http.server 8000
     ```
   - Abrí `http://localhost:8000` en el navegador.
   - Si tenés la extensión **Live Server** de VS Code, click derecho sobre `index.html` → "Open with Live Server".

## Publicar gratis con GitHub Pages (el link para tu CV/LinkedIn)

Para que el link sea lo más limpio posible (`https://matiaseit.github.io/`, sin nada más atrás), conviene crear un repositorio con un nombre especial: **`MatiaSeit.github.io`** (tiene que ser exactamente tu usuario + `.github.io`).

### Paso a paso

1. Entrá a GitHub y creá un repositorio nuevo llamado exactamente:
   ```
   MatiaSeit.github.io
   ```
   Público, sin README (para no pisar los archivos que ya tenés armados acá).

2. Abrí una terminal **en esta carpeta** (`web`) y corré:

   ```bash
   git init
   git add .
   git commit -m "Primera versión del portfolio"
   git branch -M main
   git remote add origin https://github.com/MatiaSeit/MatiaSeit.github.io.git
   git push -u origin main
   ```

3. En GitHub, andá a **Settings → Pages** del repo. En "Build and deployment" elegí:
   - Source: `Deploy from a branch`
   - Branch: `main` / `/ (root)`
   - Guardar.

4. Esperá 1-2 minutos. Tu web va a quedar publicada en:

   ```
   https://matiaseit.github.io/
   ```

5. Agregá ese link a tu CV, LinkedIn (sección "Destacados" o "Sitio web") y en las postulaciones.

### Actualizar la web más adelante

Cada vez que quieras cambiar algo (texto, proyecto nuevo, foto, etc.):

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

GitHub Pages se actualiza solo, en general en menos de un minuto.

## Cosas para revisar antes de compartir el link

- [ ] Confirmar que los links de "Demo" y "Repo" de cada proyecto abren bien.
- [ ] Revisar que la foto se vea bien recortada en el panel del hero (es `object-fit: cover`, si querés otro encuadre avisame).
- [ ] Probar el formulario de contacto: como es una web estática sin backend, al enviar abre tu cliente de correo con el mensaje precargado (no hay ningún servidor guardando nada). Si en algún momento querés que llegue directo a tu bandeja sin abrir el cliente de mail, se puede conectar a un servicio gratuito como [Formspree](https://formspree.io) — avisame y lo armamos.
- [ ] Revisar en el celular real (no solo achicando la ventana del navegador) que se vea bien.

## Nota sobre el tema visual

La estética está inspirada en el "alma" de ciencia ficción tipo space opera (paleta de colores, tipografía futurista, animación de intro estilo "transmisión"), pero **no usa ningún logo, personaje ni asset con copyright** de ninguna franquicia — todo el texto, colores y elementos son originales para que no haya ningún problema de derechos al mostrar la web a una empresa.
