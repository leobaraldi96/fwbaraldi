---
name: momento-0-design-intelligence
description: Motor central de inteligencia de diseño y filtro anti-slop. Establece las leyes de jerarquía, los límites de dosis visual, los bloqueos de clichés en landings y dashboards, y las palancas de vitalidad antes de construir tokens o vistas.
version: "2.32.1"
---

# [MOMENTO 0] Design intelligence y protocolo anti-slop

> **Misión:** Actuar como el "Motor Anti-Slop" del framework. Este protocolo actúa como un filtro agnóstico (no impone una estética ni reemplaza al `DESIGN.md`), pero bloquea implacablemente los patrones predecibles de IA en color, composición, componentes, datos de relleno y movimiento ANTES de tocar el Momento 1 (Tokens) o escribir código de interfaz.

---

## Parte 1: Calibración del gusto y palancas de vitalidad (Liveliness Toolkit)

Eliminar el slop no revela buen diseño por sí solo; si solo se aplican prohibiciones sin dirección estética, el modelo cae en el **"Sterile Default"** (interfaces blancas o grises planas, bordes finos genéricos, sin textura, sin ritmo ni identidad).

### 1.1 Los 3 diales de calibración
Antes de diseñar o codificar, el agente debe calibrar con el humano (o inferir desde el `DESIGN.md`) estos 3 espectros:
1. **Densidad y energía (Energy & Density):** Calmo/Editorial (aire amplio, foco contemplativo) `<--->` Denso/Cockpit (alta densidad informativa, herramientas operativas). Determina el espaciado base y el peso visual.
2. **Ritmo y variación (Rhythm & Variance):** Uniforme/Predecible (grilla simétrica estricta) `<--->` Asimétrico/Variado (composiciones mixtas entre secciones). Determina si las secciones mantienen o rompen la estructura.
3. **Movimiento (Motion):** Estático (únicamente estados `:hover` y `:focus-visible`) `<--->` Coreografiado (transiciones físicas con propósito espacial). Determina las curvas y el presupuesto de animación.

### 1.2 Las 5 palancas obligatorias contra la esterilidad visual
Para que la interfaz se sienta diseñada por un autor humano y no generada por plantilla:
- **Un único punto focal por pantalla:** Exactamente un elemento protagoniza cada vista; el resto se subordina jerárquicamente.
- **Contraste jerárquico deliberado:** Diferenciar tamaño, peso y color con intención clara, nunca de forma tímida o uniforme.
- **Espacio en blanco estructural:** El aire separa grupos lógicos y marca el ritmo de lectura; no es "espacio sobrante" ni un mismo `padding` repetido mecánicamente en cada bloque.
- **Un acento deliberado:** El color de acento se reserva para el momento o acción clave. Cero acentos es estéril; el color de acento aplicado en botones, íconos, bordes, fondos, badges y textos simultáneamente es slop.
- **Motivo de identidad (Identity Motif):** Un gesto visual, tratamiento tipográfico o detalle estructural propio del producto que se repite con coherencia. *Prueba ácida: si se cambia el logo y el nombre del producto, ¿la interfaz sigue teniendo carácter propio? Si la respuesta es no, es demasiado genérica.*

---

## Parte 2: Estrategia de layout (Visual Hierarchy)

Seleccionar la ruta arquitectónica de cada pantalla según la tarea real del usuario:
1. **Hierarchy-First (El camino guiado):** Prioriza una acción principal clara. Flujo en patrón F o Z.
2. **Density-Optimized (Operación y análisis):** Maximiza la legibilidad de datos reales. Usa el espacio en blanco y la alineación tabular como separadores en lugar de saturar con cajas y bordes.
3. **Progressive Disclosure (Despliegue progresivo):** Muestra lo esencial para decidir y oculta la complejidad secundaria detrás de paneles, drawers o vistas de detalle.

---

## Parte 3: Purpose-Gates y límites de dosis (Dose Caps)

Las técnicas visuales no son malas en sí mismas; se convierten en slop cuando se usan por defecto sin propósito o cuando se apilan tendencias (*trend-stacking*: glassmorphism + mesh gradient + glow + monospace + bento grid + bordes redondeados en todo). Toda técnica de esta lista requiere un motivo funcional o de identidad explícito y debe respetar su **límite de dosis**:

- **Gradientes y color (`Dose Cap`):** Prohibidos los gradientes azul-a-púrpura, púrpura-a-rosa o cian-a-azul como tratamiento por defecto, así como los orbes radiales difuminados detrás del hero. Un gradiente solo se permite si pertenece a la identidad en `DESIGN.md` o separa jerarquías. Paleta activa acotada a 2-3 colores base + 1 acento.
- **Glassmorphism / Blur (`Dose Cap: máx. 1-2 elementos`):** El `backdrop-filter: blur()` es un acento de primer plano. Prohibido aplicarlo simultáneamente en navbar, tarjetas, modales y sidebar (aplana toda la jerarquía de planos).
- **Glow y luminiscencia (`Dose Cap: máx. 1-2 elementos`):** Prohibido aplicar resplandores (`box-shadow` luminoso) en tarjetas, botones, badges, íconos y bordes a la vez. El resto de la superficie debe mantenerse mate.
- **Sombras de elevación (`Dose Cap`):** Prohibido que todos los componentes tengan sombras grandes que hagan flotar toda la página sin plano de apoyo. La sombra solo marca elevación funcional (modales, popovers, elementos arrastrables o foco jerárquico).
- **Border radius jerárquico:** Prohibido hacer que **todos** los elementos sean `pill-shaped` (`9999px` en botones, inputs, cards, modales y contenedores). El radio debe variar según la anatomía y jerarquía definida en `DESIGN.md`.
- **Fondos con grillas o tramas técnicas:** Prohibidos los fondos de cuadrícula (*grid squares*), papel milimetrado, líneas de plano (*blueprint*) o matrices de puntos (*dot grids*) usados por defecto para "parecer técnico" sin vínculo real con la identidad del producto.
- **Modo oscuro sin justificación:** Prohibido forzar *dark mode* por defecto solo porque "se ve tech". El tema se elige por identidad de marca, contexto de uso y audiencia; si se ofrece selector de tema, ambos modos (`light` y `dark`) deben estar 100% verificados en contraste y tokens.

---

## Parte 4: Hardened Guardrails - Clichés prohibidos en landings, apps y dashboards

### 4.1 Prohibiciones en páginas comerciales y landings
- **Monotonía de plantilla y ritmo uniforme:** Prohibido repetir mecánicamente en cada sección el patrón `título centrado + subtítulo + grilla de 3 tarjetas idénticas` o alternar únicamente el color de fondo entre secciones sin variar la composición.
- **Eyebrow badge redundante sobre el H1:** Prohibido colocar una píldora decorativa justo encima del `H1` (a menudo con borde fino y un punto brillante) que repita la categoría que el título principal ya dice abajo.
- **Punto de estado decorativo (Decorative Status Dot):** Prohibido colocar pequeños puntos de color con pulso o glow infinito al lado de títulos, etiquetas o ítems de navegación donde no existe ningún estado real en vivo (transmisión, grabación o alerta activa).
- **Cápsulas de humo ("AI Powered") y flechas por defecto:** Prohibidos los badges decorativos diciendo *"AI Powered"*, *"Next-Gen"* o *"Revolutionary"*, y prohibido poner flechas (`→` o `↗`) en absolutamente todos los botones como decoración automática.
- **Franja vertical izquierda decorativa:** Prohibido agregar un borde de color a la izquierda (`border-left`) en tarjetas o filas como simple adorno; solo es válido si codifica un estado semántico real (activo, advertencia, error, no leído).
- **Formas de plantilla prefabricadas:** Prohibido usar mosaicos *Bento Grid* cuando todas las celdas tienen el mismo peso informativo, ventanas de terminal falsas con tres puntitos de colores como ilustración de hero, secciones *"Cómo funciona"* forzadas artificialmente a 3 pasos con íconos redondos, grillas de precios forzadas a 3 columnas con la del medio destacada por inercia, o barras de logos *"Trusted by"* inventadas.

### 4.2 Prohibiciones en aplicaciones, paneles y dashboards (Product UI)
- **Prohibido el "Default Dashboard Shell" sin criterio:** Prohibido maquetar por inercia `sidebar izquierda + topbar + fila de 4 stat cards + gráfico + tabla` sin antes definir cuál es el trabajo principal de la pantalla y la decisión clave que el usuario debe tomar en ella.
- **Stat cards con métricas y deltas inventados:** Prohibidas las filas de 4 tarjetas con números fabricados (`12,483`, `94.2%`, `+12% esta semana` en verde) sin serie de datos real ni período de comparación explícito.
- **Activity feeds y tablas con datos falsos realistas:** Prohibido rellenar flujos de actividad o tablas con personas y eventos ficticios (*"Sarah Chen actualizó un documento hace 2 horas"*, `John Doe`, `johndoe@example.com`) o columnas genéricas (`Nombre, Estado, Fecha, Acciones` con menú de 3 puntos que no hace nada). Las columnas deben responder a la decisión del usuario; los campos vacíos quedan vacíos o usan placeholders honestos (`[DATO REAL]`, `tu@email.com`).
- **Gráficos sin pregunta:** Prohibido insertar gráficos de líneas o donas con títulos genéricos (*"Resumen"*, *"Rendimiento"*) solo para llenar espacio visual. El título del gráfico debe enunciar la pregunta o métrica accionable que responde.
- **Estados vacíos, de carga y de error mudos:** Prohibido el *"No hay datos disponibles"* pelado o un spinner suelto sin contexto.
  - El **estado vacío (Empty State)** debe explicar por qué está vacío y ofrecer la acción directa para poblarlo.
  - El **estado de carga (Loading State)** debe usar skeletons fieles a la anatomía real o indicar qué se está procesando.
  - El **estado de error (Error State)** debe explicar qué falló y cómo resolverlo o reintentar.

### 4.3 Tipografía, iconografía y honestidad de contenido
- **Color base y fidelidad de paleta:** Prohibido el negro puro (`#000000`) para fondos o textos; usar tonos profundos matizados definidos en los tokens. Prohibido inyectar clases cromáticas genéricas por defecto (`bg-gray-*`, `text-green-*`, `bg-amber-*`, `text-emerald-*`) cuando el proyecto cuenta con tokens de superficie, marca y estado definidos en `DESIGN.md` y clases compuestas en `globals.css` / `showroom.html`.
- **Tipografía con propósito, restricción de `font-mono` y cero alteración de `tracking-*`:** Prohibido elegir tipografías por inercia del modelo sin justificarlas en `DESIGN.md`. Todo el sistema tipográfico de interfaz (textos, botones, etiquetas de estado, badges y números de UI) se rige por la fuente base `font-sans`; **`font-mono` queda estrictamente reservado para hashes criptográficos (SHA-256), UUIDs técnicos de auditoría, claves API o código fuente puro**. Queda **terminantemente prohibido aplicar cualquier utilidad `tracking-*` (`tracking-tighter`, `tracking-tight`, `tracking-wide`, `tracking-wider`, `tracking-widest`)** en encabezados, subtítulos, labels, badges o tablas. Respetar el piso mínimo inviolable de `10px (0.625rem)`.
- **Iconografía relevante:** Prohibidos los íconos cliché de IA (destellos/sparkles, varitas mágicas, rayos, orbes, robots) para representar funciones de producto. Si ningún ícono aporta claridad real a la etiqueta, no se usa ícono. Prohibido usar emojis como decoración en interfaces.
- **Cero activos o reclamos fabricados:** Prohibido inventar testimonios, avatares, certificaciones de seguridad (*"SOC 2"*, *"ISO 27001"*) o porcentajes de mejora sin fuente real provista por el usuario.

---

## Parte 5: Inteligencia técnica UX y performance base
- **Áreas táctiles:** Mínimo físico de `44x44px` con separación (`gap`) suficiente entre controles adyacentes.
- **Affordances y accesibilidad:** Contraste mínimo WCAG AA (`4.5:1` en texto normal, `3:1` en texto grande y bordes de controles interactivos). Estados `:hover`, `:active`, `:focus-visible` y `:disabled` obligatorios. Todo control interactivo habilitado debe mostrar `cursor: pointer`.
- **Performance en marcado:** Reservar dimensiones (`width`, `height` o `aspect-ratio`) en toda imagen, video o embed para evitar saltos de layout (CLS). La imagen principal sobre el pliegue (Hero/LCP) debe llevar `fetchpriority="high"` y nunca `loading="lazy"`. Respetar siempre `@media (prefers-reduced-motion: reduce)`.

---
*Framework Baraldi v2.32.1 · Design Intelligence & Anti-Slop Engine*
