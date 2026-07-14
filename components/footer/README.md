# Footer - PYE 2026

## Componente

Footer principal del sitio web de Poder y Energía.

---

## Ubicación

```
components/footer/
```

---

## Archivos

```
index.html
style.css
script.js
README.md
```

---

## Dependencias

Este componente depende de:

```
config/site.config.js

assets/css/variables.css
assets/css/reset.css
assets/css/base.css
assets/css/utilities.css

components/button/style.css
```

---

## Configuración

Toda la información del Footer se obtiene desde:

```
config/site.config.js
```

Información utilizada:

- Nombre de la empresa
- Eslogan
- Descripción institucional
- Logo
- Menú principal
- Teléfonos
- WhatsApp
- Correos electrónicos
- Facebook
- CTA
- Copyright

No debe existir información fija dentro del HTML.

---

## Funcionalidades

- Logo dinámico
- Eslogan dinámico
- Descripción institucional
- Menú dinámico
- Información de contacto
- Facebook
- Botón CTA
- Copyright automático

---

## IDs utilizados

```
siteFooter

footerLogo

footerSlogan

footerDescription

footerMenu

footerContact

footerSocial

footerCTA

footerCopyright
```

---

## Clases principales

```
site-footer

footer-grid

footer-company

footer-navigation

footer-contact

footer-social

footer-logo

footer-menu

footer-contact-list

footer-social-links

footer-cta

footer-bottom
```

---

## Dependencias JavaScript

```
config/site.config.js

↓

loader.js

↓

app.js

↓

script.js
```

El componente es inicializado mediante:

```
window.initFooter()
```

No utiliza `DOMContentLoaded`.

---

## Convenciones

- No almacenar información de la empresa.
- Toda la información proviene de `SiteConfig`.
- No modificar directamente el HTML generado.
- Mantener el Footer reutilizable para todas las páginas.

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