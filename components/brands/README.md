# Brands Component

## Descripción

El componente **Brands** muestra los fabricantes con los que trabaja Poder y Energía.

Su propósito principal es generar confianza, reforzar la credibilidad de la empresa y comunicar que las soluciones ofrecidas están respaldadas por marcas líderes del mercado.

---

# Objetivo

Incrementar la confianza del usuario mostrando fabricantes reconocidos internacionalmente.

No es un catálogo de productos.

Es una sección institucional.

---

# Marcas

Actualmente el componente contempla:

- APC
- Schneider Electric
- Eaton
- Tripp Lite
- Forza
- CDP
- Viakon
- BTicino

Las marcas podrán ampliarse sin modificar la estructura del componente.

---

# Estructura

```
brands/

│── index.html

│── style.css

└── README.md
```

---

# Dependencias

Este componente utiliza:

- Core UI
- Variables globales
- Sistema de Grid
- Contenedor global

---

# Recursos

Los logotipos se almacenan en:

```
assets/img/brands/
```

Formato:

SVG

Los archivos deberán corresponder a las versiones oficiales de cada fabricante.

---

# Comportamiento

Cada tarjeta incorpora:

- Elevación suave
- Incremento de sombra
- Escalado ligero del logotipo
- Animaciones mediante CSS

---

# Responsive

Desktop

4 columnas

Tablet

2–3 columnas

Mobile

1 columna

---

# Buenas prácticas

No modificar los logotipos oficiales.

No utilizar imágenes rasterizadas cuando exista versión SVG.

Mantener una altura uniforme mediante variables globales.

---

# Estado

Versión:

1.0

Estado:

Producción

Módulo:

M02 Home

Proyecto:

Poder y Energía 2026