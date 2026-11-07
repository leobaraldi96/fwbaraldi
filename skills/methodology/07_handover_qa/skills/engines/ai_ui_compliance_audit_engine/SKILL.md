---
name: ai-ui-compliance-audit
description: >
  Protocolo de auditoría cruzada (Cross-Check), higiene de código y Delivery Gate
  para validar que el código de UI generado por IA respeta estrictamente el sistema de diseño (tokens),
  las affordances de interacción, la performance base y no introduce alucinaciones visuales ni comentarios basura.
keywords: ai-coding, compliance, linter, design-tokens, ui-engineering, feedback-loop, qa, anti-slop, delivery-gate
version: "2.32.0"
---

# Protocolo de auditoría de cumplimiento de UI generada por IA y Delivery Gate

Este protocolo se activa durante la fase de implementación o prototipado para evaluar el código generado por herramientas de IA. Actúa como un **linter de alucinaciones visuales, higiene de código y compuerta de entrega (Delivery Gate)**, asegurando que la IA programadora utilice los tokens del `DESIGN.md`, respete el `showroom.html` y entregue componentes funcionalmente completos.

---

## Dimensiones de la auditoría

Al analizar o entregar un componente o vista generada por IA, el agente debe contrastar el código contra la fuente de verdad (`DESIGN.md` / `showroom.html` / `VOICE.md`) en seis dimensiones:

### 1. Control de cumplimiento de tokens (Compliance Check & Style Lock)
- **Principio No Inline Values:** Auditar que el código no contenga valores en bruto (ej. HEX directos como `#1d4ed8`, márgenes fijos arbitrarios o `style="..."`). Todo debe resolverse mediante variables CSS (`var(--color-primary)`) o clases registradas en el sistema.
- **Colors & Contrast:** Validar que los colores mapeados a elementos de texto y fondo cumplan la relación de contraste WCAG AA (mínimo `4.5:1` en texto normal y `3:1` en texto grande y bordes de componentes interactivos).
- **Typography & Tracking:** Validar familias display/body aplicadas, piso mínimo inviolable de `10px (0.625rem)` y la prohibición estricta de `tracking-tight` o `tracking-tighter`.

### 2. Detección de inconsistencias y alucinaciones visuales (Token Leak Log)
- **Listado de violaciones:** Ubicación exacta donde el código ignora el sistema de tokens, inyecta estilos arbitrarios o excede los límites de dosis (*Dose Caps* de blur, glow o sombras definidos en el Momento 0 de la Etapa 06).
- **Tokens huérfanos o rotos:** Reportar el uso de clases que intentan simular un token pero que no se corresponden con el YAML oficial del `DESIGN.md` ni con `showroom.html`.
- **Honestidad de datos y estados:** Verificar que no existan métricas inventadas (`+12% this week`), nombres ficticios (`John Doe`, *"Sarah Chen"*) ni vistas diseñadas solo para el *happy path* (deben existir estados vacíos, de carga y de error accionables).

### 3. Semántica accesible y affordances de interacción (Interaction Affordances)
- **Semántica nativa estricta:** Las acciones que mutan estado o abren modales son `<button type="button">`; la navegación a rutas o anclas reales es `<a href="...">`. Queda terminantemente prohibido usar `<div onClick>` o `<span onClick>` fingiendo ser controles interactivos.
- **Regla de cursor en capa base:** Todo elemento interactivo habilitado (`a[href]`, `button`, `summary`, `select`, `label[for]`, inputs de tipo checkbox/radio y controles con `role="button"` / `tab` / `switch`) debe mostrar explícitamente `cursor: pointer` (especialmente en entornos con resets como Tailwind Preflight que fuerzan `cursor: default` en botones). Todo control deshabilitado debe mostrar `cursor: not-allowed`.
- **Cero controles muertos (No Dead Controls):** Todo botón, desplegable, pestaña, formulario o enlace de navegación debe ejecutar un comportamiento real o apuntar a un destino existente. Si una función aún no está construida, no se muestra el control (o se etiqueta explícitamente como *"Próximamente"* junto a un `// TODO` concreto en código).
- **Nombres accesibles y estados:** Botones de solo ícono deben incluir `aria-label` descriptivo y el SVG con `aria-hidden="true"`. Todo campo de formulario debe tener su `<label>` visible asociado. Estados `:hover`, `:active`, `:focus-visible` (sin `outline: none` sin reemplazo) y `:disabled` diferenciados no solo por color.

### 4. Mecanismos de performance y movimiento en código
- **Dimensiones intrínsecas contra CLS:** Todo elemento `<img>`, `<video>` o `<iframe>` debe declarar `width` y `height` (o `aspect-ratio` en CSS) para reservar espacio antes de la carga.
- **Prioridad de imagen Hero (LCP):** La imagen principal sobre el pliegue (above-the-fold) debe renderizarse como `<img>` en el HTML con `fetchpriority="high"` y **nunca** con `loading="lazy"`.
- **Respeto vestibular:** Toda animación no esencial debe detenerse o simplificarse bajo `@media (prefers-reduced-motion: reduce)`, y quedan prohibidos los loops o pulsos infinitos sin gatillo del usuario.

### 5. Higiene de comentarios en el código (Code Comment Anti-Slop)
El código generado por IA suele ensuciarse con comentarios robóticos que duplican la carga de lectura. El agente debe limpiar y auditar los comentarios bajo estas reglas (sin alterar jamás la lógica ejecutable al limpiar):
- **Prohibidos los separadores decorativos y banners en mayúsculas:** Erradicar bloques como `// =======================`, `// -------- AUTH WORKFLOW --------` o `/* ---- ROUTES ---- */`.
- **Prohibido repetir lo obvio o narrar el flujo paso a paso:** Eliminar comentarios que solo traducen la línea siguiente (`// Inicializar variable`, `// Paso 1: Validar input`, `// Paso 2: Procesar request`, `} // fin del if`) o JSDocs que solo hacen eco del nombre del parámetro (`@param price El precio`).
- **Prohibidos los emojis decorativos y etiquetas vacías en comentarios:** Eliminar `// ✅ Validación`, `// 🚀 Performance`, `// Main logic`, `// Helper function` o `// TODO: mejorar esto` sin contexto accionable.
- **Qué comentarios SÍ se preservan y cómo se redactan:** Se conservan únicamente los comentarios que explican el **porqué** (reglas de negocio, decisiones arquitectónicas, restricciones de protocolo, efectos secundarios no obvios, seguridad o *workarounds* técnicos). Deben redactarse en **1 o máximo 2 líneas**, en voz natural de ingeniería y respetando *Sentence case* (sin inflar un hecho de una línea en un párrafo histórico).

### 6. Recomendaciones de refactorización y bucle de corrección (Refined AI Prompt)
Si se detectan desvíos, generar un **Prompt de Corrección Exacto** para subsanar el código:
> *"Reescribe el componente corrigiendo las violaciones al contrato visual de DESIGN.md y showroom.html: 1. Elimina valores en bruto (HEX, px o estilos inline) y reemplázalos por los tokens correspondientes. 2. Asegura elementos nativos (`<button>` / `<a href>`), `cursor: pointer`, estados `:focus-visible` y área táctil mínima de 44x44px. 3. Limpia los comentarios narrativos o decorativos dejando solo las restricciones de negocio reales."*

---

## Delivery Gate (Compuerta obligatoria pre-entrega)

Antes de dar por finalizada cualquier creación o edición de interfaz, el agente debe ejecutar mentalmente y reportar este **Delivery Gate binario (PASS / FAIL)** respaldado por evidencia concreta en el código:

- [ ] **Tokens y Triple Aduana:** ¿El 100% de colores, tipografías, radios y espaciados provienen de `DESIGN.md` y respetan los componentes de `showroom.html` sin CSS inline ni clases inventadas?
- [ ] **Límites de dosis y cero clichés:** ¿La vista está libre de `tracking-tight`, guiones largos, emojis decorativos, píldoras redundantes sobre el H1, puntos pulsantes falsos, métricas inventadas y exceso de blur/glow?
- [ ] **Completitud funcional y estados:** ¿Todos los controles interactivos tienen comportamiento real (cero botones muertos) y las vistas de datos contemplan estados vacío, cargando y error accionables?
- [ ] **Accesibilidad, foco y táctil:** ¿Contraste AA verificado (`4.5:1` texto / `3:1` UI), navegación por teclado (`Tab`/`Enter`/`Escape`), `:focus-visible` presente, `cursor: pointer` activo y áreas táctiles de `44x44px` con separación en móvil?
- [ ] **Performance y código limpio:** ¿Imágenes dimensionadas, Hero con `fetchpriority="high"` (sin lazy), soporte para `prefers-reduced-motion` y código libre de comentarios basura de IA?

*Si algún punto arroja **FAIL**, el agente no debe entregar dando la tarea por terminada: debe corregir el código primero, volver a validar la compuerta y recién entonces presentar el resultado.*

---

## NEVER List - Anti-patrones de la auditoría
- **NUNCA** ignores un valor en duro (HEX o pixelaje plano) ni un `style="..."` en el código. El sistema es binario: o consume el token o es una alucinación.
- **NUNCA** apruebes componentes interactivos construidos con `<div>` o `<span>` sin semántica, sin `cursor: pointer`, sin estados `:focus-visible` o sin `:disabled`.
- **NUNCA** entregues código plagado de comentarios narrativos (`// Step 1...`), banners ASCII (`// =====`) o emojis en los comentarios.
- **NUNCA** dejes pasar elementos táctiles menores a `44x44px` o pegados entre sí sin espacio de resguardo en interfaces adaptativas.

## ALWAYS List - Mandatos de la auditoría
- **SIEMPRE** vincula cada falla a un token o componente específico de la estructura YAML del `DESIGN.md` y del `showroom.html`.
- **SIEMPRE** prioriza la validación de la accesibilidad, el contraste matemático y la funcionalidad real sobre la coincidencia visual subjetiva.
- **SIEMPRE** ejecuta el **Delivery Gate** antes de entregar código de UI al usuario.

---
*Framework Baraldi v2.32.0 · Engine de Auditoría AI & Delivery Gate*
