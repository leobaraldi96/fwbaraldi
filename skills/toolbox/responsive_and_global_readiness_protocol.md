---
name: responsive-global-readiness
description: >
  Protocolo de Adaptabilidad Total. Combina la estrategia de Responsive Design con la auditoría 
  de Internacionalización (i18n) y Localización (L10n). Asegura que el producto sea líquido, 
  accesible y culturalmente relevante en cualquier dispositivo y mercado.
keywords: responsive, mobile-first, i18n, l10n, global-readiness, breakpoints, rtl
version: "2.26.3"
---

# 🌍 Skill 10 — Responsive & Global Readiness Protocol

Este protocolo se activa para asegurar que la interfaz sea "líquida" y "global". Es el estándar de oro para productos que escalan a múltiples dispositivos y culturas.

## 📱 Bloque A: Estrategia de Diseño Responsive

Cuando se diseña una feature o página, el Agente debe definir:

### 1. Device & Breakpoint Strategy
- **Prioridad de Dispositivo:** Definir si el enfoque es Mobile-First (recomendado) o Desktop-First.
- **Breakpoints:** Definir puntos de quiebre lógicos (ej: 320px, 768px, 1024px, 1440px) y su justificación.

### 2. Layout & Grid Adaptations
- **Sistema de Grilla:** Ajuste de columnas y gutters por breakpoint.
- **Priorización de Contenido:** Qué se muestra, qué se simplifica y qué se oculta en pantallas pequeñas (Progressive Disclosure).

### 3. Comportamiento de Componentes
- **Navegación:** Adaptación de menús (Hamburger vs. Tab bar).
- **Inputs y Touch:** Tamaño de targets de clic (mínimo 44x44px) y adaptación de formularios.
- **Media:** Estrategia de carga de imágenes y optimización de assets por resolución.

### 4. Tipografía y Escala
- **Escalado Fluido:** Ajuste de font-size y line-height para mantener la legibilidad.
- **Jerarquía:** Reducción de tamaños de encabezados en mobile para evitar scrolls infinitos.

---

## 🌐 Bloque B: Auditoría de Global Readiness (i18n/L10n)

Para mercados internacionales, validar:

### 1. Riesgos de Copy (Strings)
- **Expansión de Texto:** El layout debe soportar crecimientos del 30-50% (Alemán, Ruso).
- **Ambigüedad:** Definir contexto para traductores (ej: "Schedule" como sustantivo o verbo).
- **Prohibición de Concatenación:** Nunca unir fragmentos de texto por código.

### 2. Direccionalidad (RTL)
- **Mirroring:** Espejado de la interfaz para lectura de derecha a izquierda (Árabe, Hebreo).
- **Iconografía:** Invertir iconos que impliquen dirección o tiempo, excepto logos o controles universales (ej: Play).

### 3. Formatos Locales
- **Localización:** Adaptación de fechas, monedas, separadores decimales y campos de dirección/teléfono.

---

## 📋 Entregable: Punch-List de Adaptabilidad
La aplicación de esta skill debe producir una lista de tareas priorizada:
- **P0 (Crítico):** Bloquea la usabilidad en mobile o rompe el layout en idiomas largos.
- **P1 (Importante):** Errores de formato o targets de clic pequeños.
- **P2 (Deseable):** Ajustes estéticos de pulido.

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **En la Etapa 05 (Interaction Design):** Para definir patrones de navegación responsive.
- **En la Etapa 06 (Visual Design):** Para certificar la liquidez del diseño y el soporte i18n.
- **Output:** Documento `Adaptability_Strategy_[Feature].md` en `docs-fwbaraldi/Toolbox_Outputs/`.

---
*Framework Baraldi v2.26.3 · Skill 10*
