---
name: responsive-global-readiness
description: >
  Protocolo de adaptabilidad total y reflujo móvil anti-slop. Estrategia para asegurar productos líquidos (Responsive)
  sin puntos ciegos de viewport, con ergonomía táctil real y culturalmente relevantes (i18n/L10n) en cualquier mercado y dispositivo.
keywords: responsive, mobile-first, i18n, l10n, global-readiness, breakpoints, RTL, localización, mobile-reflow, dvh
version: "2.32.1"
---

# Protocolo de adaptabilidad total y reflujo móvil (Global Readiness)

Esta skill actúa como un **Estratega de Producto Global y Arquitecto de Reflujo Móvil**. Su misión es asegurar que la interfaz sea verdaderamente líquida (el diseño móvil es un estado diseñado con intención, nunca el diseño de escritorio apretado en una pantalla chica) y global (preparada para múltiples idiomas, formatos y direcciones de lectura como RTL).

---

## 1. Bloque A: Estrategia de diseño líquido y reflujo real (Responsive Anti-Slop)

- **Mobile-first y reflujo intencional:** El diseño móvil debe re-apilar, re-escalar y re-ordenar los bloques según la prioridad de uso en movimiento. Si la vista móvil es simplemente la vista de escritorio achicada, el layout está incompleto.
- **Breakpoints guiados por el contenido (y cobertura de la banda media 600px-1024px):**
  - Los puntos de quiebre se colocan donde el contenido empieza a sufrir o perder legibilidad, no atados ciegamente a una lista fija de modelos de teléfonos.
  - **Prohibido el "Two-State Layout" (Falla de 2 estados):** Queda prohibido diseñar únicamente un estado de 1 columna para teléfono y un estado de grilla ancha para desktop dejando huérfana la banda media (`600px` a `1024px`, tablets y laptops compactas) con una sola columna absurdamente estirada o 4 columnas aplastadas. El reflujo típico exige al menos tres estados progresivos (`1 col -> 2 cols -> grilla completa`) o grillas fluidas con `minmax()` / `auto-fit`.
- **Escala móvil propia y trampa del `100vh`:**
  - **Registro de escala móvil:** Reducir proporcionalmente en móvil los paddings de sección gigantes de desktop (ej. bajar de `96px`/`128px` a una escala compacta) y usar tipografía fluida (`clamp()`) respetando siempre el piso mínimo inviolable de `10px (0.625rem)`.
  - **Prohibición de `100vh` rígido en secciones móviles:** En navegadores móviles, `100vh` ignora la barra de direcciones dinámica y genera desbordes o losas gigantes que empujan todo debajo del pliegue. Usar altura automática basada en contenido (`auto`) o unidades dinámicas de viewport (`100dvh`) cuando una vista de pantalla completa sea estrictamente necesaria.
- **Ergonomía táctil y reemplazo de interacciones `:hover`:**
  - **Tamaño y separación de objetivos (Tap Targets):** Área mínima interactiva de `44x44px` con un `gap` de separación explícito entre controles adyacentes para evitar toques accidentales con el pulgar.
  - **Equivalencia táctil para Hover:** En pantallas táctiles el `:hover` no existe. Queda prohibido ocultar menús, acciones críticas o información importante detrás de interacciones exclusivas de `:hover`; todo debe contar con apertura por toque/clic y feedback visual `:active`.
- **Navegación móvil, barras fijas y teclado virtual:**
  - **Reflujo de navegación:** La barra superior de escritorio no debe quedar apretada ni envuelta en dos filas en móvil; debe transformarse en un patrón móvil claro (barra inferior para los destinos primarios o menú accesible con etiqueta clara, evitando esconder todo detrás de un ícono hamburguesa mudo cuando sea evitable).
  - **Resguardo contra solapamiento (Bottom Nav, Sticky Headers y Teclado):** Los encabezados fijos deben ser compactos para no robar área de lectura. Si existe una barra inferior fija (`fixed bottom`), es obligatorio reservar su altura mediante `padding-bottom` / `scroll-padding` y `env(safe-area-inset-bottom)` para que jamás tape el último ítem ni el botón final de un formulario, asegurando además que al enfocar un `<input>` el campo quede visible por encima del teclado en pantalla.
- **Cero fugas de scroll horizontal ni recortes silenciosos:**
  - Prohibido que tablas, bloques de código, textos largos o hijos flex/grid con ancho fijo (`px`) generen scroll horizontal en la página (`min-width: 0` en hijos de grid/flex y contenedores con scroll local cuando la tabla lo requiera).
  - Prohibido usar `overflow: hidden` como parche para ocultar texto o controles que no entran en pantallas angostas o al hacer zoom al `200%`.

---

## 2. Bloque B: Auditoría global (i18n / L10n)

- **Expansión de texto:** El layout debe soportar crecimientos de hasta un `50%` en el conteo de caracteres (ej. traducción de inglés/español a alemán o ruso) sin truncar etiquetas ni romper botones.
- **Direccionalidad (RTL):** Preparación para el espejado de la interfaz (*Mirroring*) mediante propiedades lógicas de CSS (`margin-inline`, `padding-inline`, `text-align: start`) para idiomas como árabe o hebreo.
- **Formatos locales:** Adaptación de fechas, monedas, separadores decimales y convenciones culturales mediante APIs estándar (`Intl`).
- **Contexto para traducción:** Proporcionar descripciones de uso para evitar ambigüedades en las cadenas de texto (*Strings*).

---

## NEVER List - Anti-patrones de adaptabilidad
- **NUNCA** uses unidades absolutas (`px`) para tipografía o anchos rígidos que impidan el reflujo fluido. Usa unidades relativas (`rem`, `%`, `dvh`, `fr`, `minmax()`).
- **NUNCA** diseñes un layout de solo dos extremos (teléfono vs. monitor grande) ignorando el comportamiento entre `600px` y `1024px`.
- **NUNCA** dejes una barra fija inferior o superior que tape el contenido final de la página ni controles que dependan únicamente de `:hover`.
- **NUNCA** concatenes fragmentos de texto mediante código (ej. `"El precio es " + x + " pesos"`), ya que rompe la gramática en otros idiomas.
- **NUNCA** ocultes funcionalidades críticas en mobile solo por "falta de espacio": rediseña la interacción mediante despliegue progresivo.
- **NUNCA** insertes texto dentro de imágenes: usa capas de texto reales para accesibilidad y traducción.

## ALWAYS List - Mandatos globales
- **SIEMPRE** verifica la legibilidad y el contraste de color pensando también en dispositivos móviles bajo luz solar intensa.
- **SIEMPRE** deja espacio de resguardo en botones y etiquetas para prevenir desbordamientos de texto y permitir zoom al `200%`.
- **SIEMPRE** espeja íconos que indiquen dirección o paso del tiempo en layouts RTL (excepto controles universales de reproducción o marcas).
- **SIEMPRE** comprueba el recorrido completo arrastrando el ancho del viewport de extremo a extremo (`320px` a `1440px+`) para confirmar cero colisiones y cero scroll horizontal.

---

## Formatos de entrega
1. **Responsive & Reflow Strategy Doc:** Definición de estados de reflujo, escala móvil, resguardo de áreas fijas y comportamiento de componentes.
2. **Global Readiness Audit:** Reporte de riesgos de desborde por expansión de texto, zoom al `200%` o localización.
3. **i18n Tracking List:** Listado de strings con contexto para traductores.

---
*Framework Baraldi v2.32.1 · Adaptabilidad Global & Mobile Reflow*
