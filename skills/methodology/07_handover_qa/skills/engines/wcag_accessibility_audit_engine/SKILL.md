---
name: wcag-accessibility-audit
description: Auditoría exhaustiva de accesibilidad web utilizando las pautas WCAG 2.1/2.2. Evalúa el cumplimiento a través de los 4 principios POUR (Perceptible, Operable, Comprensible, Robusto) con niveles de conformidad A, AA, AAA.
version: "2.26.9"
---

# ♿ Skill 29 — Auditoría de Accesibilidad WCAG

Esta skill permite a los agentes de IA realizar una **evaluación de accesibilidad web** completa utilizando los estándares **Web Content Accessibility Guidelines (WCAG) 2.1 y 2.2**, asegurando que los productos digitales sean utilizables por personas con discapacidades.

WCAG es el estándar internacional para la accesibilidad web (ISO/IEC 40500), legalmente requerido en múltiples jurisdicciones (ADA, Sección 508, Acta de Accesibilidad Europea, etc.).

---

## 🚦 Cuándo usar esta Skill

Invoca esta skill cuando necesites:
- Asegurar el cumplimiento legal (ADA, Sección 508, EAA).
- Auditar sitios o apps en busca de barreras de accesibilidad.
- Planificar mejoras de diseño inclusivo.
- Preparar certificaciones de accesibilidad.
- Evaluar productos de terceros antes de su adquisición.
- Realizar revisiones de QA antes de un lanzamiento (Etapa 07).

---

## 🧠 Los 4 Principios POUR

WCAG se organiza en torno a 4 principios fundamentales:

### 1. **Perceptible**
La información y los componentes de la interfaz deben ser presentables a los usuarios en formas que puedan percibir (no puede ser invisible para todos sus sentidos).
- **Pautas:** Alternativas de texto, Medios basados en tiempo, Adaptable, Distinguible.

### 2. **Operable**
Los componentes de la interfaz y la navegación deben ser operables por teclado y otros dispositivos de asistencia.
- **Pautas:** Accesible por teclado, Tiempo suficiente, Convulsiones y reacciones físicas, Navegable, Modalidades de entrada.

### 3. **Comprensible**
La información y el funcionamiento de la interfaz deben ser comprensibles.
- **Pautas:** Legible, Predecible, Asistencia a la entrada de datos.

### 4. **Robusto**
El contenido debe ser lo suficientemente robusto como para ser interpretado de forma fiable por una gran variedad de agentes de usuario, incluyendo tecnologías asistivas.
- **Pautas:** Compatible.

---

## ⭐ Criterios Críticos de Éxito (Nivel A & AA)

El Agente debe auditar con prioridad estos puntos de alto impacto:

### Perceptible (Crítico)
- **1.1.1 Contenido no textual (A):** Todas las imágenes tienen `alt` significativo. Las decorativas tienen `alt=""`.
- **1.3.1 Información y relaciones (A):** Uso de HTML semántico (encabezados, listas, tablas, formularios). Jerarquía lógica `h1` → `h2` → `h3`.
- **1.4.1 Uso del color (A):** La información no se transmite solo mediante color.
- **1.4.3 Contraste (Mínimo) (AA):** Texto normal 4.5:1; Texto grande/UI 3:1.
- **1.4.10 Reflujo (AA):** El contenido se adapta a 320px de ancho sin scroll horizontal.

### Operable (Crítico)
- **2.1.1 Teclado (A):** Toda la funcionalidad está disponible mediante teclado. Sin trampas de foco.
- **2.4.1 Evitar bloques (A):** Enlace de "Saltar al contenido principal" y regiones de hitos (Landmarks).
- **2.4.3 Orden de foco (A):** El orden de tabulación es lógico e intuitivo.
- **2.4.7 Foco visible (AA):** El indicador de foco es claramente visible (mínimo 2px de grosor y alto contraste).
- **2.5.8 Tamaño del objetivo (AA):** Objetivos táctiles de al menos 24x24 píxeles CSS.

### Comprensible (Crítico)
- **3.1.1 Idioma de la página (A):** Atributo `lang` definido correctamente en el HTML.
- **3.2.3 Navegación coherente (AA):** Menús y navegación en el mismo orden en todas las páginas.
- **3.3.1 Identificación de errores (A):** Los errores se identifican claramente y se describen en texto.
- **3.3.2 Etiquetas o instrucciones (A):** Formularios con etiquetas visibles y persistentes.

### Robusto (Crítico)
- **4.1.2 Nombre, función, valor (A):** Los componentes tienen nombres accesibles y estados anunciables (ARIA).
- **4.1.3 Mensajes de estado (AA):** Los mensajes de éxito o error se anuncian sin mover el foco (aria-live).

---

## 🚫 NEVER List — Anti-patrones de Accesibilidad
- **NUNCA** quites el `outline` del foco sin proporcionar un reemplazo visual de alto contraste.
- **NUNCA** uses `click here` o `leer más` como texto de enlace; debe ser descriptivo por sí solo.
- **NUNCA** fuerces la apertura de ventanas nuevas sin advertir al usuario.
- **NUNCA** uses tablas para maquetar el layout visual; las tablas son solo para datos tabulares.
- **NUNCA** permitas que un video se reproduzca automáticamente con sonido.

## ✅ ALWAYS List — Mandatos de Diseño Inclusivo
- **SIEMPRE** usa unidades relativas (`rem`) para tipografía y espaciado.
- **SIEMPRE** verifica que el contraste de color cumpla el estándar AA antes de aprobar un diseño.
- **SIEMPRE** asegura que todos los elementos interactivos tengan un estado de foco visible.
- **SIEMPRE** valida que los formularios tengan mensajes de error claros y asociados al campo.

---

## 📄 Plantilla de Reporte de Auditoría (Resumen)

Al finalizar la auditoría, genera este cuadro de mando:

| Principio | Estado | Hallazgos Críticos | Acción Recomendada |
|---|---|---|---|
| **Perceptible** | ⚠️ Riesgo | Falta contraste en botones primarios. | Ajustar HEX a relación 4.5:1. |
| **Operable** | ✅ OK | Navegación por teclado fluida. | Mantener arquitectura de foco. |
| **Comprensible** | ❌ Fallo | Inputs sin labels asociados. | Vincular `<label for="...">`. |
| **Robusto** | ⚠️ Riesgo | Estados de carga no anunciados. | Implementar `role="status"`. |

---
*Framework Baraldi v2.26.9 · Skill 29 · Engine de Accesibilidad WCAG*
