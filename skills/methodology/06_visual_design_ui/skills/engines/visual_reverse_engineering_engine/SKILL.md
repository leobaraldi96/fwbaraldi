---
name: visual-reverse-engineering
description: >
Protocolo para la extracciÃ³n de sistemas de diseÃ±o y tokens a partir de imÃ¡genes 
o capturas de pantalla mediante IA Vision. Ideal para benchmarking, migraciÃ³n 
de legados y moodboarding tÃ©cnico.
keywords: vision, reverse-engineering, screenshot-to-code, design-tokens, benchmarking, ui-analysis
version: "2.26.6"
---

# ðŸ‘ï¸ Skill 27 â€” Visual Reverse Engineering Protocol (Vision)

Este protocolo permite al Agente analizar una referencia visual (screenshot) para deducir y documentar un sistema de diseÃ±o completo. Se utiliza en fases de descubrimiento o para replicar estilos de productos donde no se tiene acceso al archivo fuente.

## ðŸ” Ãreas de AnÃ¡lisis Visual

Al ejecutar este protocolo sobre una imagen, el Agente debe extraer:

### 1. Paleta de Color e Identidad
- **Colores Primarios y Secundarios:** Identificar cÃ³digos HEX predominantes.
- **JerarquÃ­a de Fondo y Texto:** Diferenciar colores de superficie, bordes y variantes de texto (Primary, Secondary, Muted).
- **Patrones de Uso:** Determinar el rol de cada color en la interfaz (acentos, alertas, interacciones).

### 2. Sistema TipogrÃ¡fico (Inferencia)
- **Escala y Peso:** Deducir tamaÃ±os de fuente (px), pesos (Bold, Medium, Regular) y contraste tipogrÃ¡fico.
- **Legibilidad:** Estimar `line-height` y `letter-spacing` basados en la densidad visual.

### 3. Sistema de Espaciado y Layout
- **Unidad Base:** Determinar si el diseÃ±o utiliza una grilla base (ej: 4px, 8px).
- **Escala de Espaciado:** Identificar patrones de padding y mÃ¡rgenes consistentes.
- **Principios de Layout:** Estructura de grilla, alineaciones y jerarquÃ­a de contenidos.

### 4. Biblioteca de Componentes Visuales
- **Botones:** Estilos (Radius, Shadows), tamaÃ±os y estados visuales detectables.
- **Inputs y Formas:** Bordes, estados de focus (si estÃ¡n visibles) y estilos de campos.
- **Contenedores:** Estilos de cards, elevaciÃ³n (sombras) y redondeo de esquinas.

### 5. GeneraciÃ³n de Tokens (Output)
- Organizar todos los valores deducidos como **Design Tokens**.
- Proponer una nomenclatura coherente con el Framework Baraldi.
- Generar un documento estructurado listo para la implementaciÃ³n o moodboarding.

---

## ðŸ’¡ IntegraciÃ³n (Bridge Architecture)
- **Etapa 06 (M1):** Herramienta clave para la fase de moodboarding tÃ©cnico y definiciÃ³n de la estÃ©tica inicial basada en referencias externas.
- **Etapa 04 (IA):** Puede usarse para validar si la arquitectura de informaciÃ³n propuesta coincide visualmente con referencias exitosas del sector.

---
*Framework Baraldi v2.26.6 Â· Skill 27*
