# Solutions Component

## Descripción

El componente **Solutions** presenta las principales líneas de negocio de Poder y Energía. Su objetivo es dirigir al usuario hacia las soluciones que ofrece la empresa antes de entrar al catálogo de productos.

A diferencia del catálogo, esta sección no vende productos individuales; comunica las capacidades y servicios de la empresa.

---

# Objetivo

Permitir que el usuario identifique rápidamente el tipo de solución que necesita y continúe hacia la sección correspondiente.

---

# Soluciones

Actualmente el componente contempla cuatro categorías principales:

1. Sistemas UPS
2. Energía Solar
3. Infraestructura Eléctrica
4. Material Eléctrico y para la Construcción

Estas categorías podrán ampliarse en futuras versiones sin modificar la estructura del componente.

---

# Estructura

```
solutions/

│── index.html

│── style.css

└── README.md
```

---

# Dependencias

Este componente utiliza:

- Core UI
- Variables globales
- Sistema de botones
- Contenedor global (.container)

No redefine estilos globales.

---

# Imágenes

Las imágenes se almacenan en:

```
assets/img/solutions/
```

Archivos:

```
ups.webp

solar.webp

electrical.webp

construction.webp
```

Todas las imágenes son generadas específicamente para el proyecto con una estética corporativa consistente.

No deben utilizarse fotografías de stock sin autorización.

---

# Comportamiento

Cada tarjeta incluye:

- Imagen de fondo
- Overlay degradado
- Título
- Descripción
- Botón de acción

En escritorio incorpora microinteracciones:

- Elevación de la tarjeta
- Zoom suave de la imagen
- Incremento de sombra
- Aparición progresiva del botón (versión final)

---

# Responsive

Desktop

- 4 columnas

Tablet

- 2 columnas

Mobile

- 1 columna

---

# Buenas prácticas

No agregar productos dentro de esta sección.

No convertir las tarjetas en un catálogo.

El objetivo del componente es vender soluciones, no referencias comerciales.

---

# Relación con el sitio

Home

↓

Solutions

↓

Página de solución

↓

Catálogo filtrado

↓

Producto

Esta arquitectura mantiene una navegación clara y escalable.

---

# Estado

Versión:

1.0

Estado:

✅ Producción

Módulo:

M02 Home

Proyecto:

Poder y Energía 2026