# Process Component

## Descripción

El componente **Process** explica de forma clara cómo trabaja Poder y Energía desde el primer contacto con el cliente hasta la entrega y el soporte posterior.

Su finalidad es reducir la incertidumbre del usuario y transmitir una metodología de trabajo organizada, profesional y confiable.

---

# Objetivo

Responder a la pregunta:

> ¿Qué sucede después de contactar a Poder y Energía?

La sección busca mostrar un proceso simple, transparente y orientado al cliente.

---

# Estructura

```
process/

│── index.html

│── style.css

└── README.md
```

---

# Dependencias

Este componente utiliza:

- Core UI
- Variables globales
- Sistema Grid
- Contenedor global

No requiere JavaScript.

---

# Etapas

Actualmente el proceso contempla cuatro pasos:

1. Asesoría
2. Diseño
3. Instalación
4. Soporte

La cantidad de etapas podrá ampliarse sin modificar la arquitectura del componente.

---

# Comportamiento

Cada tarjeta incorpora:

- Número de etapa
- Título
- Descripción
- Elevación mediante hover
- Incremento de sombra
- Borde destacado

En escritorio se muestra una línea que conecta visualmente las etapas.

---

# Responsive

Desktop

- Cuatro columnas

Tablet

- Dos columnas

Mobile

- Una columna

La línea de conexión desaparece automáticamente en pantallas pequeñas.

---

# Buenas prácticas

Mantener textos breves.

No convertir la sección en un cronograma técnico.

El objetivo es transmitir confianza y simplicidad.

---

# Relación con la Home

Hero

↓

Features Strip

↓

Solutions

↓

Brands

↓

Experience

↓

Process

↓

CTA

↓

Footer

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

---

# Pendientes

- Incorporar iconografía definitiva.
- Ajustar microanimaciones durante la auditoría visual final.