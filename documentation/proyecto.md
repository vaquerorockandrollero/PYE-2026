# Proyecto PYE-2026

## Información General

**Nombre del proyecto:** PYE-2026

**Empresa:**
Poder y Energía

**Dominio:**
https://poderyenergia.com

---

# Objetivo

Desarrollar el nuevo sitio web corporativo de Poder y Energía con una arquitectura modular, reutilizable, optimizada para SEO, responsive y preparada para crecer sin modificar la estructura base del proyecto.

---

# Identidad de Marca

## Eslogan

> Soluciones inteligentes para la continuidad y eficiencia energética.

---

## Descripción institucional

En Poder y Energía diseñamos e implementamos soluciones confiables para garantizar la continuidad operativa de empresas e industrias.

Ofrecemos suministro, instalación y soporte especializado en sistemas UPS, energía solar y soluciones eléctricas, con un enfoque en calidad, seguridad y eficiencia.

---

# Información de contacto

## Teléfono

55 3112 2108

## WhatsApp

55 3715 3646

## Correos

ventas@poderyenergia.com

contacto@poderyenergia.com

---

# Redes sociales

Facebook

https://www.facebook.com/share/14gEcFXY9Zk/

---

# CTA principal

Solicitar asesoría

---

# Navegación principal

- Inicio
- Soluciones
- Marcas
- Catálogo
- Nosotros
- Contacto

---

# Arquitectura del Proyecto

```
PYE-2026/

assets/

components/
│
├── button/
├── header/
├── footer/
└── ...

config/
└── site.config.js

documentation/
└── proyecto.md

js/
├── loader.js
└── app.js

pages/

CHANGELOG.md
```

---

# Flujo de carga

```
site.config.js

↓

loader.js

↓

Carga componentes

↓

app.js

↓

Inicialización

↓

Página lista
```

---

# Componentes actuales

## Header

Estado:

Producción

Archivos

- index.html
- style.css
- script.js
- README.md

---

## Footer

Estado:

Producción

Archivos

- index.html
- style.css
- script.js
- README.md

---

## Button

Estado:

Producción

Archivos

- style.css

---

# Configuración Global

Toda la información institucional del sitio debe obtenerse desde:

```
config/site.config.js
```

No se permite duplicar:

- teléfonos
- correos
- dominio
- logo
- menú
- CTA
- redes sociales

---

# Convenciones

## HTML

- HTML semántico.
- Accesibilidad.
- IDs únicamente cuando sean necesarios.

---

## CSS

- Variables globales.
- Mobile First.
- Componentes desacoplados.
- No utilizar estilos inline.

---

## JavaScript

- ES6+
- Código modular.
- Funciones pequeñas.
- Una única responsabilidad por archivo.
- No utilizar jQuery.

---

# Versionado

Se utilizará Versionado Semántico.

Ejemplo

v1.0.0

---

# Git

Todos los módulos terminados deberán cumplir:

- Código completo.
- README.
- Auditoría.
- Commit.

---

# Estado actual

## M01 Core UI

- Header
- Footer
- Configuración global
- Loader
- App

Estado:

En desarrollo

---

# Próximos módulos

## M02

Home

## M03

Catálogo

## M04

Producto

## M05

Contacto

## M06

Nosotros

## M07

Panel Administrativo

---

# Regla del proyecto

La arquitectura del proyecto queda oficialmente congelada.

A partir de este documento únicamente se desarrollarán nuevas funcionalidades.

No se realizarán cambios estructurales salvo la corrección de un error crítico o una necesidad funcional aprobada.

---

Última actualización

Julio 2026