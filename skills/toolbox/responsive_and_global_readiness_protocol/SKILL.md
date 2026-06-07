---
name: responsive-global-readiness
description: >
  Protocolo de Adaptabilidad Total. Estrategia para asegurar productos líquidos (Responsive) 
  y culturalmente relevantes (i18n/L10n) en cualquier mercado y dispositivo.
keywords: responsive, mobile-first, i18n, l10n, global-readiness, breakpoints, RTL, localización
version: "2.26.10"
---

# 🌍 Skill 08 — Protocolo de Adaptabilidad Total (Global Readiness)

Esta skill actúa como un **Estratega de Producto Global**. Su misión es asegurar que la interfaz sea "líquida" (se adapte a cualquier pantalla) y "global" (esté preparada para múltiples idiomas, formatos y direcciones de lectura como RTL).

---

## 📱 1. Bloque A: Estrategia de Diseño Líquido (Responsive)

- **Mobile-First Priority:** Diseño optimizado primero para la pantalla más pequeña y escalado progresivo.
- **Breakpoints Lógicos:** Definición de puntos de quiebre basados en el contenido, no solo en dispositivos (320px, 768px, 1024px, 1440px).
- **Progressive Disclosure:** Selección crítica de qué elementos mostrar, simplificar u ocultar en pantallas pequeñas para mantener la velocidad de uso.
- **Touch Targets:** Asegurar un área mínima de interacción de 44x44px.

## 🌐 2. Bloque B: Auditoría Global (i18n / L10n)

- **Expansión de Texto:** El layout debe soportar crecimientos de hasta un 50% en el conteo de palabras (ej. traducción a Alemán o Ruso).
- **Direccionalidad (RTL):** Preparación para el espejado de la interfaz (Mirroring) en idiomas como Árabe o Hebreo.
- **Formatos Locales:** Adaptación de fechas, monedas, separadores decimales y convenciones culturales.
- **Contexto para Traducción:** Proporcionar descripciones de uso para evitar ambigüedades en las cadenas de texto (Strings).

---

## 🚫 NEVER List — Anti-patrones de Adaptabilidad
- **NUNCA** uses unidades absolutas (`px`) para tipografía o layouts principales. Usa unidades relativas (`rem`, `%`, `vw`).
- **NUNCA** concatenes fragmentos de texto mediante código (ej. `"El precio es " + x + " pesos"`). Esto rompe la gramática en otros idiomas.
- **NUNCA** ocultes funcionalidades críticas en mobile solo por "falta de espacio". Rediseña la interacción.
- **NUNCA** insertes texto dentro de imágenes. Usa capas de texto reales para accesibilidad y traducción automática.

## ✅ ALWAYS List — Mandatos Globales
- **SIEMPRE** verifica la legibilidad y el contraste de color en dispositivos con brillo bajo (outdoor usage).
- **SIEMPRE** deja espacio de sobra (white space) en botones y etiquetas para prevenir desbordamientos de texto.
- **SIEMPRE** espeja iconos que indiquen dirección o paso del tiempo en layouts RTL (excepto controles universales de video).
- **SIEMPRE** utiliza un sistema de grilla flexible que permita el reflujo (reflow) natural de los elementos.

---

## 📄 Formatos de Entrega
1. **Responsive Strategy Doc:** Definición de breakpoints y comportamientos de componentes.
2. **Global Readiness Audit:** Reporte de posibles riesgos de traducción o localización.
3. **i18n Tracking List:** Listado de strings con contexto para traductores.

---
*Framework Baraldi v2.26.10 · Skill 08 · Adaptabilidad Global*
