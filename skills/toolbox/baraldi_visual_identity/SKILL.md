---
name: baraldi-visual-identity
description: >
  Identidad Visual Leo Baraldi (Modernist Tech).
  Basada en el rigor geométrico de Paul Rand y la ejecución vibrante/dark
  del sitio oficial leobaraldi.com.ar. Use este skill para asegurar que todos los
  artefactos y diseños tengan el ADN visual del director.
version: "1.0"
---

# 🧬 Identidad Visual Baraldi (Modernist Tech)

Este skill define el **lenguaje visual maestro** del Framework. No es solo cosmético; es un sistema de diseño basado en el legado del modernismo de **Paul Rand**, adaptado a productos digitales de alta gama.

## El Espíritu: "Modernismo Vibrante"
Combinamos la simplicidad geométrica y la asimetría lúdica de Rand con una ejecución tecnológica contemporánea (Dark Mode, Glassmorphism, Vibrancy).

---

## 🎨 Design Tokens (Extraídos del Core)

### 1. Paleta de Colores
- **Fondo Primario:** `#383635` (Gris Grafito Modernista).
- **Acento Primario (Energía):** `#600DFF` (Púrpura Eléctrico).
- **Acento Secundario (Tech):** `#4EEDB9` (Verde Esmeralda).
- **Colores Randianos (Puntuación):**
  - Naranja: `#F88603`
  - Rojo: `#FE5753`
  - Amarillo: `#FDDC53`
- **Superficies (Glass):** `rgba(255, 255, 255, 0.05)` con desenfoque de fondo.

### 2. Tipografía de Alta Densidad
- **Fuente Principal:** `IBM Plex Sans Condensed`
- **Jerarquía:** 
  - Títulos en **ExtraBold** o **Bold**. 
  - El uso de la versión "Condensed" es crítico para dar un look editorial y preciso.

### 3. Geometría y Radio
- **Contenedores de sección:** Radio amplio de `16px` a `24px`.
- **Botones Interactivos:** Estilo "Pill" (cápsula) totalmente redondeado.
- **Formas Orgánicas:** Uso de "Blobs" orgánicos desenfocados en el fondo para crear profundidad sistémica.

---

## 📏 Reglas de Composición (Legacy of Paul Rand)

1.  **Asimetría Controlada:** Evitar el centrado perfecto y aburrido. Usar el espacio negativo (blanco/aire) como un elemento de diseño activo.
2.  **Jerarquía de Impacto:** Un elemento debe ser el protagonista indiscutible (usando un acento Randiano). Los demás lo acompañan.
3.  **Contraste Extremo:** Texto blanco puro o esmeralda sobre fondo grafito. Legibilidad máxima.
4.  **Menos es Más:** Si un contenedor o borde no aporta valor sistémico o de agrupación, elimínalo. Preferimos la separación por espacio que por líneas.

---

## 🛠️ Cómo aplicar este lenguaje
Cuando generes interfaces o diagramas, piensa en **"¿Qué haría Paul Rand si tuviera que diseñar una terminal dark-mode?"**.

- Usa formas circulares o rectangulares potentes para enmarcar datos clave.
- Mantén el texto condensado y alineado con rigor suizo.
- Usa formas circulares o rectangulares potentes para enmarcar datos clave.
- Mantén el texto condensado y alineado con rigor suizo.
- Deja que los acentos vibrantes (Verde/Púrpura) guíen el ojo hacia la acción principal.

## 📋 Protocolo de Generación de Informes (Mandatario)
Para asegurar la consistencia de marca (v2.24.2):
1. **Firma Visual Única:** Todo reporte HTML, dashboard o landing interna debe basarse obligatoriamente en el archivo de estilos **`references/templates/baraldi_report_standard.css`**. 
2. **Copia de Estilos:** Al generar un reporte, lee el contenido de dicho archivo CSS e inclúyelo dentro de una etiqueta `<style>` o cópialo íntegramente en un archivo `style.css` **dentro de la carpeta del proyecto** (nunca en la raíz).
3. **Dark Mode por Defecto:** Todos los reportes generados por el framework deben configurarse en **Dark Mode** (Fondo Grafito) por defecto, siguiendo la identidad del sitio oficial.

---
*Framework Baraldi v2.24.2 · Identidad Visual Basada en el Legado de Paul Rand.*
