# Header - PYE 2026

## Componente

Header principal del sitio web de Poder y Energía.

---

## Ubicación

```
components/header/
```

---

## Archivos

```
config.js
index.html
style.css
script.js
README.md
```

---

## Dependencias

Este componente depende de:

```
assets/css/variables.css
assets/css/reset.css
assets/css/base.css
assets/css/utilities.css

components/button/style.css
```

---

## Configuración

Toda la información del Header se obtiene desde:

```
components/header/config.js
```

Entre ella:

- Nombre de la empresa
- Dominio
- Logo
- Teléfonos
- Correos
- Facebook
- Menú principal
- Botón CTA

No debe escribirse información fija dentro del HTML.

---

## Funcionalidades

- Header sticky
- Top Bar
- Menú principal
- Menú móvil
- CTA
- Facebook
- Logo dinámico
- Contacto dinámico
- Página activa automática

---

## IDs utilizados

```
siteHeader
navbarLogo
navbarMenu
navbarCTA

topbarContact
topbarSocial

menuToggle
mobileMenu
mobileMenuList
mobileOverlay
searchToggle
```

---

## Clases principales

```
site-header

topbar

navbar

navbar-logo

navbar-menu

navbar-actions

mobile-menu

mobile-overlay

search-toggle

menu-toggle
```

---

## Dependencias JavaScript

```
config.js

↓

script.js
```

Siempre debe cargarse primero:

```
config.js
```

y después

```
script.js
```

---

## Estado

Producción

Versión:

1.0

Auditoría:

Aprobado

---

## Última revisión

Julio 2026