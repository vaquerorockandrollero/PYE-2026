# Arquitectura oficial de PYE-2026

## 1. Objetivo de la arquitectura

La arquitectura de PYE-2026 organiza el sitio como una aplicación web estática, modular y progresiva. El objetivo principal es separar contenido, estilos, comportamiento y configuración para que cada sección del sitio pueda evolucionar de forma independiente sin convertir `index.html` en un archivo monolítico.

Los principios oficiales son:

- **Modularidad:** cada bloque visual vive en `components/<nombre>/` con su HTML, estilos y, cuando aplica, JavaScript propio.
- **Carga progresiva:** `index.html` define los puntos de montaje y el loader inserta componentes reutilizables en tiempo de ejecución.
- **Sistema visual centralizado:** los estilos base y variables globales se ubican en `assets/css/`.
- **Configuración única:** los datos corporativos, menú, CTA, contacto, redes y rutas de marca se centralizan en `config/site.config.js`.
- **Bajo acoplamiento:** los componentes deben depender de contratos simples: contenedores por `id`, clases CSS estables y funciones públicas de inicialización.
- **Sin build obligatorio:** el proyecto debe poder servirse como sitio estático desde un servidor HTTP compatible con `fetch()`.

## 2. Estructura completa de carpetas

```text
PYE-2026/
├── assets/
│   ├── css/
│   │   ├── components/
│   │   ├── base.css
│   │   ├── reset.css
│   │   ├── utilities.css
│   │   └── variables.css
│   ├── img/
│   │   └── hero/
│   │       └── hero-home.png
│   └── js/
│       ├── components/
│       ├── core/
│       │   └── app.js
│       ├── solutions/
│       │   ├── core.js
│       │   └── solutions.js
│       ├── app.js
│       └── loader.js
├── components/
│   ├── brands/
│   │   ├── README.md
│   │   ├── index.html
│   │   └── style.css
│   ├── button/
│   │   └── style.css
│   ├── cta/
│   │   ├── README.md
│   │   ├── index.html
│   │   └── style.css
│   ├── experience/
│   │   ├── README.md
│   │   ├── index.html
│   │   └── style.css
│   ├── features-strip/
│   │   ├── index.html
│   │   └── style.css
│   ├── footer/
│   │   ├── README.md
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   ├── header/
│   │   ├── README.md
│   │   ├── index.html
│   │   ├── script.js
│   │   └── style.css
│   ├── hero/
│   │   ├── README.md
│   │   ├── index.html
│   │   └── style.css
│   ├── process/
│   │   ├── README.md
│   │   ├── index.html
│   │   └── style.css
│   └── solutions/
│       ├── README.md
│       ├── index.html
│       └── style.css
├── config/
│   └── site.config.js
├── documentation/
│   ├── ARCHITECTURE.md
│   └── proyecto.md
├── CHANGELOG.md
└── index.html
```

## 3. Responsabilidad de cada carpeta

| Carpeta | Responsabilidad |
| --- | --- |
| `assets/` | Contiene recursos globales consumidos por todo el sitio: CSS central, JavaScript compartido e imágenes públicas. |
| `assets/css/` | Define el sistema visual base: reset, variables, estilos globales y utilidades reutilizables. |
| `assets/css/components/` | Reserva oficial para CSS de componentes empaquetado como recurso global cuando se requiera cargar estilos desde `index.html`. |
| `assets/img/` | Contiene imágenes y recursos gráficos del sitio organizados por contexto o sección. |
| `assets/img/hero/` | Contiene la imagen principal del hero de la página de inicio. |
| `assets/js/` | Contiene la lógica global del sitio: loader, arranque de aplicación y módulos compartidos. |
| `assets/js/components/` | Reserva oficial para scripts globales de componentes cuando se desacoplen de `components/<nombre>/script.js`. |
| `assets/js/core/` | Contiene scripts base o experimentales de núcleo que no pertenecen a un componente específico. |
| `assets/js/solutions/` | Contiene lógica asociada al dominio de soluciones y módulos de esa sección. |
| `components/` | Contiene los componentes visuales del sitio. Cada subcarpeta representa una sección o unidad UI independiente. |
| `components/header/` | Define la estructura, estilos y comportamiento del encabezado principal. |
| `components/footer/` | Define la estructura, estilos y comportamiento del pie de página. |
| `components/hero/` | Define la sección inicial de alto impacto visual. |
| `components/features-strip/` | Define la franja de beneficios o características destacadas. |
| `components/solutions/` | Define la sección de soluciones energéticas. |
| `components/brands/` | Define la sección de marcas distribuidas o soportadas. |
| `components/experience/` | Define la sección de experiencia, confianza y diferenciadores. |
| `components/process/` | Define la sección del proceso de trabajo. |
| `components/cta/` | Define el llamado a la acción principal. |
| `components/button/` | Define estilos reutilizables para botones. |
| `config/` | Contiene configuración de negocio y contenido global reutilizado por componentes dinámicos. |
| `documentation/` | Contiene documentación funcional, técnica y arquitectónica del proyecto. |

## 4. Flujo de carga del sitio

1. El navegador solicita `index.html`.
2. El documento declara metadatos, título y descripción SEO.
3. Se cargan los estilos globales en este orden oficial:
   1. `assets/css/reset.css`
   2. `assets/css/variables.css`
   3. `assets/css/base.css`
   4. `assets/css/utilities.css`
4. Se carga Font Awesome desde CDN para iconografía.
5. Se carga `assets/js/loader.js` con `defer`.
6. Se carga `assets/js/app.js` con `defer`.
7. El `body` entrega contenedores vacíos que actúan como puntos de montaje: `#header`, `#hero`, `#features-strip`, `#solutions`, `#brands`, `#experience`, `#process`, `#cta` y `#footer`.
8. Al dispararse `DOMContentLoaded`, `assets/js/app.js` ejecuta `initApp()`.
9. `initApp()` llama a `loadComponents()` expuesto por el loader.
10. El loader carga el HTML y script de los componentes dinámicos configurados actualmente.
11. La aplicación inicializa las APIs públicas de los componentes cargados.
12. Se emite el evento global `appReady` para permitir integraciones posteriores.

## 5. Funcionamiento del loader

El loader oficial se implementa en `assets/js/loader.js` mediante la clase `ComponentLoader`.

### Responsabilidades del loader

- Buscar el contenedor de destino por `id`.
- Obtener fragmentos HTML mediante `fetch()`.
- Insertar el HTML recibido con `container.innerHTML`.
- Cargar scripts de componentes mediante etiquetas `<script>` creadas dinámicamente.
- Evitar cargas duplicadas de scripts con `loadedScripts`, un `Set` interno.
- Exponer una API pública mínima en `window.loadComponents`.

### Contrato de `loadHTML(containerId, file)`

- `containerId` debe existir en `index.html`.
- `file` debe ser una ruta servible por HTTP.
- Si el contenedor no existe, se registra una advertencia y no se detiene la aplicación.
- Si el `fetch()` falla, se registra el error y se propaga para que `initApp()` lo capture.

### Contrato de `loadScript(file)`

- Cada script se carga una sola vez por ruta.
- El script se agrega al `<head>` con `defer = true`.
- La promesa se resuelve al dispararse `onload`.
- La promesa se rechaza si el archivo no puede cargarse.

### Componentes cargados actualmente por el loader

La función `loadComponents()` carga actualmente:

1. `loadHeader()`
   - Inserta `/components/header/index.html` en `#header`.
   - Carga `/components/header/script.js`.
2. `loadFooter()`
   - Inserta `/components/footer/index.html` en `#footer`.
   - Carga `/components/footer/script.js`.

Los demás contenedores existen en `index.html` y sus componentes están disponibles en `components/`, pero no forman parte del flujo dinámico actual de `loadComponents()` hasta que se agreguen explícitamente.

## 6. Inicialización de componentes

La inicialización de componentes sigue un contrato público basado en funciones globales:

- Un componente con JavaScript debe exponer una función `window.init<Nombre>()`.
- La aplicación principal debe verificar que la función exista antes de invocarla.
- La función de inicialización debe ser idempotente en lo posible y validar la existencia de sus nodos internos antes de manipular el DOM.

### Inicialización actual

`assets/js/app.js` inicializa:

1. `window.initHeader()` si existe.
2. `window.initFooter()` si existe.

### Header

`components/header/script.js` construye el encabezado a partir de `SiteConfig` y activa comportamiento interactivo:

- Logo.
- Contacto superior.
- Redes sociales.
- Menú desktop y móvil.
- CTA principal.
- Estado sticky en scroll.
- Menú móvil con overlay.
- Marcado de enlace activo.

### Footer

`components/footer/script.js` construye el pie de página a partir de `SiteConfig`:

- Logo.
- Slogan y descripción.
- Navegación.
- Datos de contacto.
- Redes sociales.
- CTA.
- Copyright.

## 7. Flujo de JavaScript

```text
index.html
  ├─ carga assets/js/loader.js con defer
  │    └─ define ComponentLoader, Loader y window.loadComponents
  └─ carga assets/js/app.js con defer
       └─ espera DOMContentLoaded
            └─ initApp()
                 ├─ await loadComponents()
                 │    ├─ loadHeader()
                 │    │    ├─ fetch('/components/header/index.html')
                 │    │    └─ append script('/components/header/script.js')
                 │    └─ loadFooter()
                 │         ├─ fetch('/components/footer/index.html')
                 │         └─ append script('/components/footer/script.js')
                 ├─ window.initHeader()
                 ├─ window.initFooter()
                 ├─ dispatch document CustomEvent('appReady')
                 └─ console.info de arranque correcto
```

### Reglas oficiales del flujo JS

- Los scripts globales deben usar modo estricto cuando sean parte del flujo principal.
- No debe existir lógica de negocio embebida directamente en `index.html`.
- Los componentes deben validar la existencia de cada contenedor antes de modificarlo.
- Las APIs públicas de componentes deben declararse en `window` solo cuando sea necesario integrarlas con `app.js`.
- Los scripts de componentes cargados dinámicamente no deben duplicar responsabilidades del loader.
- El evento `appReady` es el punto oficial para ejecutar integraciones que dependan del DOM final cargado por el loader.

## 8. Flujo de CSS

El CSS se organiza en dos niveles: sistema global y estilos de componente.

### CSS global

El orden oficial de carga desde `index.html` es:

1. `reset.css`: normaliza estilos del navegador y define bases consistentes.
2. `variables.css`: declara tokens de diseño como colores, tipografía, espacios, radios, sombras, transiciones, alturas y z-index.
3. `base.css`: aplica estilos generales a etiquetas HTML, contenedores, títulos, párrafos, enlaces, secciones e imágenes.
4. `utilities.css`: expone clases utilitarias reutilizables para layout, flex, grid, espaciado, tamaños y helpers.

### CSS de componentes

Cada componente mantiene su `style.css` en `components/<nombre>/style.css`. Estos estilos son responsables únicamente del bloque al que pertenecen. La convención recomendada es usar clases con prefijo del componente o metodología tipo BEM:

```css
.hero {}
.hero__content {}
.hero__title {}

.solution-card {}
.solution-card__overlay {}
```

### Reglas oficiales del flujo CSS

- Los tokens reutilizables deben vivir en `assets/css/variables.css`.
- Los estilos genéricos deben vivir en `assets/css/base.css` o `assets/css/utilities.css`.
- Los estilos específicos de una sección deben vivir junto al componente.
- Las clases de componentes no deben depender de selectores globales frágiles.
- El CSS debe mantener nombres semánticos y predecibles.

## 9. Flujo de imágenes y assets

Los assets gráficos se organizan por contexto dentro de `assets/img/`.

### Reglas oficiales

- Las imágenes compartidas o públicas pertenecen a `assets/img/`.
- Las imágenes de una sección deben vivir en un subdirectorio con el nombre del contexto: por ejemplo, `assets/img/hero/`.
- Las rutas usadas dentro de componentes HTML deben ser relativas a la raíz servida del sitio o al documento final.
- Las imágenes críticas del hero pueden usar `loading="eager"` y `fetchpriority="high"`.
- Las imágenes no críticas deben preferir carga diferida con `loading="lazy"` cuando aplique.
- Todo `<img>` debe tener `alt` descriptivo o `alt=""` si es puramente decorativo.
- Los assets externos deben limitarse a dependencias aprobadas.

### Flujo actual de imagen principal

```text
components/hero/index.html
  └─ <img src="assets/img/hero/hero-home.png">
       └─ assets/img/hero/hero-home.png
```

## 10. Configuración global

La configuración global vive en `config/site.config.js` y define el objeto `SiteConfig`.

### Contenido oficial de `SiteConfig`

- `company`: nombre, slogan, descripción y dominio.
- `logo`: ruta del logotipo principal y texto alternativo.
- `contact`: teléfono, WhatsApp y correos.
- `social`: redes sociales disponibles.
- `menu`: enlaces principales de navegación.
- `cta`: texto y URL del llamado a la acción principal.
- `copyright`: texto legal del pie de página.

### Reglas de uso

- Los datos corporativos no deben duplicarse dentro de scripts de componentes.
- Header y footer deben tomar su contenido dinámico desde `SiteConfig`.
- Si un componente depende de `SiteConfig`, el objeto debe estar disponible antes de ejecutar su inicializador.
- Los cambios de contenido global deben hacerse en `config/site.config.js`, no dentro de `components/header/script.js` ni `components/footer/script.js`.

## 11. Convenciones de nombres

### Carpetas y archivos

- Usar minúsculas y guiones medios para carpetas compuestas: `features-strip`, `site.config.js`.
- Cada componente debe usar esta estructura base cuando aplique:

```text
components/<component-name>/
├── README.md
├── index.html
├── style.css
└── script.js
```

- `script.js` solo debe existir si el componente requiere comportamiento propio.
- `README.md` documenta propósito, estructura y uso del componente.

### HTML

- Los puntos de montaje global usan `id` descriptivo: `header`, `footer`, `hero`.
- Las secciones internas deben usar clases semánticas.
- Los atributos `id` se reservan para anclas, puntos de montaje o nodos requeridos por JavaScript.

### CSS

- Preferir clases semánticas y BEM: `.component`, `.component__element`, `.component--modifier`.
- Evitar nombres visuales genéricos como `.blue-box` o `.big-text`.
- Usar variables CSS para colores, espacios, sombras y transiciones.

### JavaScript

- Clases en `PascalCase`: `ComponentLoader`.
- Funciones en `camelCase`: `loadComponents`, `initApp`, `buildMenu`.
- APIs públicas en `window` con nombre explícito: `window.initHeader`.
- Constantes y configuraciones globales con nombres descriptivos: `SiteConfig`.

## 12. Dependencias permitidas

El proyecto debe mantenerse como sitio estático sin cadena de build obligatoria.

### Permitidas

- HTML, CSS y JavaScript nativo del navegador.
- API `fetch()` para cargar fragmentos HTML.
- `CustomEvent` para eventos globales de aplicación.
- Variables CSS nativas.
- Font Awesome mediante CDN para iconografía.
- Imágenes locales servidas desde `assets/img/`.

### No permitidas sin aprobación explícita

- Frameworks de UI como React, Vue, Angular o Svelte.
- Librerías DOM como jQuery.
- Bundlers obligatorios como Webpack, Vite, Parcel o Rollup.
- Preprocesadores obligatorios como Sass o Less.
- Dependencias de tracking, analítica o terceros no documentadas.
- Scripts externos adicionales no aprobados.

## 13. Buenas prácticas

- Servir el proyecto desde un servidor HTTP local o remoto; no depender de abrir `index.html` con `file://`, porque el loader usa `fetch()`.
- Mantener `index.html` como shell de montaje y no como contenedor de todo el contenido.
- Agregar nuevos componentes dentro de `components/<nombre>/`.
- Registrar nuevos puntos de montaje en `index.html` únicamente cuando la sección deba existir en la página principal.
- Ampliar `loadComponents()` cuando un componente deba cargarse dinámicamente.
- Exponer `window.init<Nombre>()` solo si el componente necesita inicialización posterior a su inserción.
- Validar siempre la existencia de nodos antes de acceder a sus propiedades.
- Mantener contenido global en `SiteConfig`.
- Usar `rel="noopener noreferrer"` en enlaces externos con `target="_blank"`.
- Mantener textos alternativos significativos en imágenes de contenido.
- Evitar estilos inline salvo casos excepcionales y justificados.
- Evitar duplicación de clases, tokens y lógica entre componentes.
- Documentar cada componente reutilizable con un `README.md`.
- Mantener rutas consistentes y portables para despliegue estático.

## 14. Diagrama de la arquitectura

```text
                          ┌──────────────────────┐
                          │      Navegador       │
                          └──────────┬───────────┘
                                     │ solicita
                                     ▼
                          ┌──────────────────────┐
                          │      index.html      │
                          │ shell + placeholders │
                          └──────┬────────┬──────┘
                                 │        │
                  carga CSS base │        │ carga JS defer
                                 │        │
                                 ▼        ▼
        ┌────────────────────────────┐   ┌──────────────────────────┐
        │        assets/css/         │   │        assets/js/        │
        │ reset → variables → base   │   │ loader.js → app.js       │
        │        → utilities         │   └────────────┬─────────────┘
        └────────────────────────────┘                │
                                                       │ DOMContentLoaded
                                                       ▼
                                             ┌──────────────────────┐
                                             │      initApp()       │
                                             └──────────┬───────────┘
                                                        │
                                                        ▼
                                             ┌──────────────────────┐
                                             │   loadComponents()   │
                                             └──────┬────────┬──────┘
                                                    │        │
                                                    ▼        ▼
                                  ┌───────────────────┐  ┌───────────────────┐
                                  │ components/header │  │ components/footer │
                                  │ index + script    │  │ index + script    │
                                  └─────────┬─────────┘  └─────────┬─────────┘
                                            │                      │
                                            ▼                      ▼
                                  ┌───────────────────┐  ┌───────────────────┐
                                  │  initHeader()     │  │  initFooter()     │
                                  └─────────┬─────────┘  └─────────┬─────────┘
                                            │                      │
                                            └──────────┬───────────┘
                                                       ▼
                                             ┌──────────────────────┐
                                             │      SiteConfig      │
                                             │ config/site.config.js│
                                             └──────────┬───────────┘
                                                        │
                                                        ▼
                                             ┌──────────────────────┐
                                             │   DOM final + UI     │
                                             │ event: appReady      │
                                             └──────────────────────┘

        Assets visuales:
        components/*.html ──referencian──► assets/img/*
        components/*.style.css ──────────► usan tokens de assets/css/variables.css
```
