---
name: ai-ui-compliance-audit
description: >
  Protocolo de auditoría cruzada (Cross-Check), higiene de código y Delivery Gate
  para validar que el código de UI generado por IA respeta estrictamente el sistema de diseño (tokens),
  las affordances de interacción, la performance base y no introduce alucinaciones visuales ni comentarios basura.
keywords: ai-coding, compliance, linter, design-tokens, ui-engineering, feedback-loop, qa, anti-slop, delivery-gate
version: "2.32.1"
---

# Protocolo de auditoría de cumplimiento de UI generada por IA y Delivery Gate

Este protocolo se activa durante la fase de implementación o prototipado para evaluar el código generado por herramientas de IA. Actúa como un **linter de alucinaciones visuales, higiene de código y compuerta de entrega (Delivery Gate)**, asegurando que la IA programadora utilice los tokens del `DESIGN.md`, respete el `showroom.html` y entregue componentes funcionalmente completos.

---

## Dimensiones de la auditoría

Al analizar o entregar un componente o vista generada por IA, el agente debe contrastar el código contra la fuente de verdad (`DESIGN.md` / `showroom.html` / `VOICE.md`) en seis dimensiones:

### 1. Control de cumplimiento de tokens y clases atómicas (Compliance Check & Style Lock)
- **Principio No Inline Values & Consumo de Clases Globales:** Auditar que el código no contenga valores en bruto (ej. HEX directos como `#1d4ed8`, márgenes fijos arbitrarios o `style="..."`) ni re-implemente con cadenas de Tailwind ad-hoc (`inline-flex px-2 py-0.5 rounded bg-emerald-50...`) componentes que ya existen como clases compuestas en `globals.css` y `showroom.html` (ej. `.badge-pill`, `.badge-tech`, `.btn-primary`).
- **Colors, Contrast & Zero Generic Palette:** Validar que no se usen clases cromáticas o de sombra genéricas (`bg-gray-*`, `text-green-*`, `bg-amber-*`, `shadow-2xs`) ajenas a `DESIGN.md`, y que los colores aplicados cumplan la relación de contraste WCAG AA (mínimo `4.5:1` en texto normal y `3:1` en texto grande y bordes de componentes interactivos).
- **Typography, `font-mono` Restriction & Zero `tracking-*`:** Validar familias display/body aplicadas (`font-sans` en toda la UI; `font-mono` restringido exclusivamente a hashes criptográficos, UUIDs de auditoría o código fuente), piso mínimo inviolable de `10px (0.625rem)` y la **prohibición absoluta de cualquier utilidad `tracking-*`** (`tracking-tighter`, `tracking-tight`, `tracking-wide`, `tracking-wider`, `tracking-widest`).
- **Arquitectura Antimonolítica y Clonación de Vista Madre:** Verificar que el archivo no supere el techo máximo de **350 líneas**, que no contenga múltiples modales anidados en el mismo archivo y que las vistas de módulos hermanos respeten el esqueleto canónico (*Master View Skeleton*) de la vista madre del proyecto.

### 2. Detección de inconsistencias y alucinaciones visuales (Token Leak Log)
- **Listado de violaciones:** Ubicación exacta donde el código ignora el sistema de tokens, inyecta estilos arbitrarios o excede los límites de dosis (*Dose Caps* de blur, glow o sombras definidos en el Momento 0 de la Etapa 06).
- **Tokens huérfanos o rotos:** Reportar el uso de clases que intentan simular un token pero que no se corresponden con el YAML oficial del `DESIGN.md` ni con `showroom.html`.
- **Honestidad de datos, glosario y estados:** Verificar que se utilice la terminología canónica definida en `VOICE.md`, que no existan métricas inventadas (`+12% this week`), nombres ficticios (`John Doe`, *"Sarah Chen"*) ni vistas diseñadas solo para el *happy path* (deben existir estados vacíos, de carga y de error accionables).

### 3. Semántica accesible y affordances de interacción (Interaction Affordances)
- **Semántica nativa estricta y prohibición de controles híbridos:** Las acciones que mutan estado o abren modales son `<button type="button">`; la navegación a rutas o anclas reales es `<a href="...">`; los controles de selección o alternancia son elementos de formulario semánticos (`<input type="checkbox">` o componente `Checkbox`/`Switch` accesible con su `<label>`). Queda terminantemente prohibido usar `<div onClick>` / `<span onClick>` o **diseñar botones híbridos que simulen ser checkboxes mediante cambio de variante e íconos (`<Square>` / `<CheckSquare>`)**.
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

## Delivery Gate Determinista (Compuerta ejecutable pre-entrega)

Para eliminar el sesgo de auto-confirmación donde la IA cree haber respetado las reglas pero filtró clases por inercia de pre-entrenamiento, antes de dar por finalizada cualquier creación o edición de interfaz el agente debe:

1. **Re-hidratación previa (`Tool-Call Gate`):** Haber ejecutado `read_file` en el mismo turno sobre `globals.css` y la Vista Madre antes de crear una vista nueva.
2. **Ejecución del Linter Determinista (`ui-check.js`):** Ejecutar por terminal (`run_command`):
   ```bash
   node ~/.gemini/config/skills/baraldi-framework/scripts/ui-check.js [archivos-modificados]
   ```
   El script valida mecánicamente y devuelve `EXIT CODE 1` si existe `style=`, cualquier `tracking-*`, clases genéricas (`bg-gray-*`, `shadow-2xs`), `font-mono` en UI, guiones largos, botones híbridos con íconos de checkbox, modales anidados o archivos `> 350` líneas.
3. **Verificación del Checklist Binario (PASS / FAIL):**

- [ ] **Ejecución de `ui-check.js` en verde (`PASS`):** ¿El script determinista corrió sobre los archivos tocados y devolvió `0 violaciones críticas`?
- [ ] **Tokens, Clases Atómicas y Triple Aduana:** ¿El 100% de colores, tipografías (`font-sans` en UI, `font-mono` solo en hashes/código), radios y espaciados provienen de `DESIGN.md`, respetan el esqueleto de la Vista Madre (o usan `<PageShell>`) y consumen las clases de `globals.css` / `showroom.html` sin CSS inline ni clases cromáticas genéricas (`bg-gray-*`, `text-green-*`, `bg-amber-*`)?
- [ ] **Límites de dosis, cero `tracking-*` y arquitectura modular:** ¿La vista está libre de cualquier utilidad `tracking-*`, no supera las **350 líneas**, no tiene modales anidados en el mismo archivo y está libre de guiones largos, emojis decorativos, píldoras redundantes sobre el H1, puntos pulsantes falsos, métricas inventadas y exceso de blur/glow?
- [ ] **Completitud funcional, controles nativos y estados:** ¿Todos los controles interactivos tienen comportamiento real (cero botones muertos, cero botones híbridos simulando checkboxes con íconos) y las vistas de datos contemplan estados vacío, cargando y error accionables con el glosario de `VOICE.md`?
- [ ] **Accesibilidad, foco y táctil:** ¿Contraste AA verificado (`4.5:1` texto / `3:1` UI), navegación por teclado (`Tab`/`Enter`/`Escape`), `:focus-visible` presente, `cursor: pointer` activo y áreas táctiles de `44x44px` con separación en móvil?
- [ ] **Performance y código limpio:** ¿Imágenes dimensionadas, Hero con `fetchpriority="high"` (sin lazy), soporte para `prefers-reduced-motion` y código libre de comentarios basura de IA?

*Si `ui-check.js` o algún punto arroja **FAIL**, el agente tiene **TERMINANTEMENTE PROHIBIDO** entregar dando la tarea por terminada: debe corregir el código primero, volver a correr `ui-check.js` hasta obtener `PASS` y recién entonces presentar el resultado.*

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
*Framework Baraldi v2.32.1 · Engine de Auditoría AI & Delivery Gate*
