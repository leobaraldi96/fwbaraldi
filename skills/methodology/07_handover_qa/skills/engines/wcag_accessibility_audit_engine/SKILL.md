---
name: wcag-accessibility-audit
description: Auditoría exhaustiva de accesibilidad web utilizando las pautas WCAG 2.1/2.2. Evalúa el cumplimiento a través de los 4 principios POUR (Perceptible, Operable, Comprensible, Robusto), niveles A, AA, AAA y prevención de alucinaciones de contraste.
version: "2.33.0"
---

# Auditoría de accesibilidad WCAG y control de factores humanos

Esta skill permite a los agentes de IA realizar una **evaluación de accesibilidad web y factores humanos** completa utilizando los estándares **Web Content Accessibility Guidelines (WCAG) 2.1 y 2.2**, asegurando que los productos digitales sean utilizables por personas con diversas capacidades visuales, motoras, auditivas y cognitivas.

WCAG es el estándar internacional para la accesibilidad web (ISO/IEC 40500), legalmente requerido en múltiples jurisdicciones (ADA, Sección 508, Acta de Accesibilidad Europea, etc.).

---

## Cuándo usar esta skill

Invoca esta skill cuando necesites:
- Asegurar el cumplimiento legal (ADA, Sección 508, EAA).
- Auditar sitios o apps en busca de barreras de accesibilidad durante la Etapa 06 (Momento 2) o la Etapa 07 (QA).
- Validar matemáticamente pares de colores y estados interactivos antes de aprobar `DESIGN.md` y `showroom.html`.
- Evaluar productos existentes o de terceros antes de un rediseño o lanzamiento.

---

## Los 4 principios POUR

WCAG se organiza en torno a 4 principios fundamentales:

### 1. **Perceptible**
La información y los componentes de la interfaz deben ser presentables a los usuarios en formas que puedan percibir (no pueden ser invisibles para sus sentidos).
- **Pautas:** Alternativas de texto, medios basados en tiempo, adaptable, distinguible.

### 2. **Operable**
Los componentes de la interfaz y la navegación deben ser operables por teclado, tacto y dispositivos de asistencia.
- **Pautas:** Accesible por teclado, tiempo suficiente, convulsiones y reacciones físicas (`prefers-reduced-motion`), navegable, modalidades de entrada.

### 3. **Comprensible**
La información y el funcionamiento de la interfaz deben ser comprensibles y predecibles.
- **Pautas:** Legible, predecible, asistencia a la entrada de datos y estados claros.

### 4. **Robusto**
El contenido debe ser lo suficientemente robusto como para ser interpretado de forma fiable por una gran variedad de agentes de usuario y tecnologías asistivas.
- **Pautas:** Compatible, semántica nativa y roles ARIA sin contradicciones.

---

## Criterios críticos de éxito (Nivel A y AA)

El agente debe auditar con prioridad estos puntos de alto impacto:

### Perceptible (Crítico)
- **1.1.1 Contenido no textual (A):** Todas las imágenes informativas tienen `alt` significativo. Las decorativas tienen `alt=""` y los íconos acompañados de texto llevan `aria-hidden="true"`.
- **1.3.1 Información y relaciones (A):** Uso de HTML semántico (`<header>`, `<nav>`, `<main>`, `<footer>`, `<button>`, `<a href>`, `<label for>`). Un único `<h1>` por documento y jerarquía lógica sin saltar niveles (`h1 -> h2 -> h3`).
- **1.4.1 Uso del color (A):** La información, los estados de error, éxito o selección nunca se transmiten únicamente mediante color; deben acompañarse de texto, ícono o forma.
- **1.4.3 Contraste mínimo de texto (AA):** Texto normal mínimo `4.5:1`; texto grande (`18px+` o `14px+` bold) mínimo `3:1`. Respetar el piso tipográfico inviolable del framework de `10px (0.625rem)`.
- **1.4.4 Cambio de tamaño del texto (AA):** El texto debe poder ampliarse hasta un `200%` sin recortarse (`overflow: hidden`) ni perder contenido o funcionalidad. Never bloquear el zoom en el meta viewport (`user-scalable=no` o `maximum-scale=1` están prohibidos).
- **1.4.10 Reflujo (AA):** El contenido se adapta a `320px` de ancho sin scroll horizontal ni colisión de cajas.
- **1.4.11 Contraste no textual (AA):** Bordes de inputs, límites de botones, indicadores de estado, segmentos de gráficos y anillos de foco deben tener una relación de contraste mínima de `3:1` contra los colores adyacentes.

### Operable (Crítico)
- **2.1.1 Teclado (A):** Toda la funcionalidad está disponible mediante teclado (`Tab`, `Shift+Tab`, `Enter`, `Space`, `Escape` para cerrar modales/drawers). Cero trampas de foco involuntarias y cero `<div onClick>` inaccesibles.
- **2.3.3 Animación por interacciones / Vestibular:** Respetar obligatoriamente `@media (prefers-reduced-motion: reduce)` deteniendo animaciones no esenciales, parallax o pulsos continuos. Cualquier carrusel o movimiento de más de 5 segundos requiere control de pausa visible.
- **2.4.1 Evitar bloques (A):** Enlace de *"Saltar al contenido principal"* (*skip link*) y regiones de hitos (*Landmarks*) bien definidas.
- **2.4.3 Orden de foco (A):** El orden de tabulación del DOM coincide con el orden visual de la pantalla.
- **2.4.7 Foco visible (AA):** El indicador de foco (`:focus-visible`) es claramente visible (mínimo `2px` de grosor y contraste `3:1` en ambos temas, claro y oscuro).
- **2.5.8 Tamaño del objetivo (AA / Estándar FWB):** Mientras WCAG AA fija un piso legal de `24x24px`, el Framework Baraldi exige un mínimo ergonómico de **`44x44px`** con separación (`gap`) entre controles táctiles.

### Comprensible (Crítico)
- **3.1.1 Idioma de la página (A):** Atributo `lang` definido correctamente en la etiqueta `<html>`.
- **3.2.3 Navegación coherente (AA):** Menús y navegación mantienen el mismo orden y estructura entre vistas.
- **3.3.1 Identificación de errores (A):** Los errores de formulario se describen en texto claro junto al campo afectado, nunca solo pintando el borde de rojo.
- **3.3.2 Etiquetas o instrucciones (A):** Todo input cuenta con un `<label>` visible y persistente (el atributo `placeholder` desaparece al escribir y no reemplaza al `<label>`).

### Robusto (Crítico)
- **4.1.2 Nombre, función, valor (A):** Los controles tienen nombres accesibles (`aria-label` en botones de solo ícono), estados anunciables (`aria-expanded`, `aria-pressed`, `disabled`) y `cursor: pointer` en todos los controles habilitados (`cursor: not-allowed` en deshabilitados).
- **4.1.3 Mensajes de estado (AA):** Los estados vacíos, de carga y de error, así como las notificaciones dinámicas (toasts), son perceptibles y se anuncian sin robar el foco (`aria-live="polite"` o `role="status"`).

---

## Prevención de la "alucinación del gris sobre gris" y texto sobre fondos complejos

Uno de los errores más frecuentes de los agentes de IA es asumir "a ojo" que un texto gris elegante sobre fondo blanco o negro cumple con WCAG AA cuando matemáticamente falla.

### 1. Tabla de referencia rápida de pares críticos (Fórmula WCAG 2.x)
El contraste se mide sin redondear hacia arriba (ej. `4.48:1` es **FAIL** para texto normal):

| Par (Texto sobre Fondo) | Ratio real | Texto normal (`>= 4.5:1`) | Texto grande / UI (`>= 3.0:1`) |
| :--- | :--- | :--- | :--- |
| Negro (`#000000`) sobre Blanco (`#FFFFFF`) | `21.00:1` | PASS | PASS |
| Blanco (`#FFFFFF`) sobre Gris oscuro (`#333333`) | `12.63:1` | PASS | PASS |
| Blanco (`#FFFFFF`) sobre Gris medio-oscuro (`#666666`) | `5.74:1` | PASS | PASS |
| **Gris `#777777` sobre Blanco (`#FFFFFF`)** | **`4.48:1`** | **FAIL (Trampa común)** | PASS |
| **Gris `#777777` sobre Casi-negro (`#070707`)** | **`4.49:1`** | **FAIL (Casi en el borde)** | PASS |
| Blanco (`#FFFFFF`) sobre Gris `#888888` | `3.54:1` | **FAIL** | PASS |
| Blanco (`#FFFFFF`) sobre Gris `#999999` | `2.85:1` | **FAIL** | **FAIL** |
| **Gris `#555555` sobre Negro (`#000000`)** | **`2.82:1`** | **FAIL (Alucinación clásica en Dark Mode)** | **FAIL** |

### 2. Regla del peor punto en imágenes y gradientes
Cuando un texto se ubica sobre una fotografía o un gradiente, el contraste es local: **debe evaluarse contra el píxel más desfavorable** por donde pasa el texto, no contra el promedio. Si cualquier zona cae por debajo de `4.5:1`, es obligatorio aplicar un velo (*scrim* / overlay oscuro o claro) o una superficie sólida detrás del texto.

---

## NEVER List - Anti-patrones de accesibilidad
- **NUNCA** quites el `outline` del foco (`outline: none` o `outline: 0`) sin proporcionar un reemplazo `:focus-visible` de alto contraste (`>= 3:1`).
- **NUNCA** afirmes que un par de grises pasa WCAG AA sin verificar su ratio matemático real.
- **NUNCA** uses un `placeholder` como único reemplazo de la etiqueta `<label>` en un formulario.
- **NUNCA** uses `click here` o `leer más` como texto de enlace aislado; el enlace debe ser descriptivo por sí solo.
- **NUNCA** uses `<div onClick>` o `<span onClick>` para acciones interactivas ni bloquees el zoom del usuario en móvil.

## ALWAYS List - Mandatos de diseño inclusivo
- **SIEMPRE** usa unidades relativas (`rem`) para tipografía y espaciado, garantizando que el layout soporte zoom al `200%` sin recortar texto.
- **SIEMPRE** verifica que los bordes de inputs, íconos interactivos y estados alcancen el contraste no textual mínimo de `3:1`.
- **SIEMPRE** asegura que las vistas de datos incluyan estados vacío, cargando y error explícitos en texto, no solo spinners mudos o cambios de color.
- **SIEMPRE** envuelve las animaciones decorativas en `@media (prefers-reduced-motion: no-preference)` o deténlas bajo `reduce`.

---

## Plantilla de reporte de auditoría (Resumen)

Al finalizar la auditoría, genera este cuadro de mando:

| Principio | Estado | Hallazgos críticos | Acción recomendada |
|---|---|---|---|
| **Perceptible** | Riesgo | Texto secundario `#777777` sobre fondo blanco (`4.48:1`) y bordes de input a `1.8:1`. | Oscurecer token de texto secundario a `<= #666666` (`5.74:1`) y subir borde a `>= 3:1`. |
| **Operable** | Riesgo | Botones de ícono sin `aria-label` y falta de `:focus-visible` en tema oscuro. | Agregar `aria-label` descriptivo y anillo de foco con ratio `3:1`. |
| **Comprensible** | OK | Labels visibles y mensajes de error textuales asociados a cada campo. | Mantener estándar actual. |
| **Robusto** | OK | Semántica nativa (`<button>`, `<a href>`) y `cursor: pointer` en capa base. | Mantener estándar actual. |

---
*Framework Baraldi v2.33.0 · Auditoría WCAG 2.2 & Factores Humanos*
