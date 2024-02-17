# Zeling Awards

Sitio que recopila los votos de la comunidad para los mejores momentos de Zeling.

## Ímagenes

**Página Inicial**
![Landing-page](assets/landing-page.png)

**Página de Categorías**
(Diseño UI Pendiente)

**Página de Votaciones**
(Diseño UI Pendiente)

**Página de Acerca de**
(Diseño UI Pendiente)

## Ruta de Proyecto

- [ ] **Setup del Proyecto:**
Integrar ESLint, Prettier, TailwindCSS, Firebase y otros

- [ ] **Diseño de base de datos y planificación de la solución:**
Diseñar, analizar y planificar como se persistirá la información considerando el login y votaciones

- [ ] **Planificación y Configuración de Tema:** Planificar tema de colores armónico, tipografía, configurar TailwindCSS

- [ ] **Diseño de página inicial:**
Diseñar y programar los componentes para la página inicial siguiendo el diseño

- [ ] **Diseño de página de votación cada categoría:**
Diseñar y programar los componentes para la página de votaciones

- [ ] **Inicio de sesión (OAuth):**
Implementar un flujo Oauth de Twitch

- [ ] **Diseño de endpoints:**
Diseñar todo lo relacionado a los endpoints y la conexión con la base de datos

- [ ] **Módulo de Votaciones**
Implementar restricciones para el voto de cada usuario que inicio sesión

- [ ] **Diseño de página de Acerca de:**
Diseñar y programar los componentes para describir el rol de cada uno de los involucrados

- [ ] **Diseño de página de Categorias:**
Diseñar y programar los componentes para describir las categorías

- [ ] **Despliegue**
Contemplar todo lo que involucra desplegar el sitio y configurar la integración continua con Github Actions

- [ ] **Ajustes generales de SEO:**
Incluir meta tags, robot.txt, title, descriptions y otros

---

- [ ] **Módulo de Gestión de Clips:**
Se tiene pensado permitir a los usuarios subir clips directamente al sitio, eligiendo la categoría para una nominación preliminar. Se debe contemplar el CRUD de clips y relacionarlo con categorías prediseñadas para cada usuario.

## Requisitos

- Node.js - v18.14.1 o mayor.
- VSCode (Recomendado) - Hay una extensión oficial para Astro

## Tecnologías

- Astro v4
- Firebase
- Tailwind CSS

## 🚀 Estructura del Projecto

Dentro del proyecto, verás las siguientes carpetas y archivos:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta según su nombre de archivo.

No hay nada especial en `src/components/`, pero ahí es donde Astro coloca los componentes Astro/React/Vue/Svelte/Preact por convención.

Cualquier asset estático, como imágenes, se puede colocar en el directorio `public/`.

## Guía de Contribución

1. Clonar el proyecto

```sh
git clone https://github.com/<your_github_username>/zeling-awards.git
cd zeling-awards
```

2. Instalar dependencias

```sh
npm install
```

3. Crea un branch a partir de develop
```sh
git checkout develop
git pull develop
git checkout -b feature/landing-page
```
4. Aplicar cambios

5. Crear un Pull Request apuntando a develop

### 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                            |
| `npm run dev`             | Inicia el servidor de desarrollo local en `localhost:4321`      |
| `npm run build`           | Buildea el sitio para producción en `./dist/`          |
| `npm run preview`         | Previsualiza el sitio productivo localmente     |
| `npm run astro ...`       | Ejecute comandos como `astro add`, `astro check` |
| `npm run astro -- --help` | Documentación                    |

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
