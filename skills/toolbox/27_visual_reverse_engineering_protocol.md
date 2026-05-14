---
1: name: visual-reverse-engineering
2: description: >
3:   Protocolo para la extracción de sistemas de diseño y tokens a partir de imágenes 
4:   o capturas de pantalla mediante IA Vision. Ideal para benchmarking, migración 
5:   de legados y moodboarding técnico.
6: keywords: vision, reverse-engineering, screenshot-to-code, design-tokens, benchmarking, ui-analysis
7: version: "2.26.3"
8: ---
9: 
10: # 👁️ Skill 27 — Visual Reverse Engineering Protocol (Vision)
11: 
12: Este protocolo permite al Agente analizar una referencia visual (screenshot) para deducir y documentar un sistema de diseño completo. Se utiliza en fases de descubrimiento o para replicar estilos de productos donde no se tiene acceso al archivo fuente.
13: 
14: ## 🔍 Áreas de Análisis Visual
15: 
16: Al ejecutar este protocolo sobre una imagen, el Agente debe extraer:
17: 
18: ### 1. Paleta de Color e Identidad
19: - **Colores Primarios y Secundarios:** Identificar códigos HEX predominantes.
20: - **Jerarquía de Fondo y Texto:** Diferenciar colores de superficie, bordes y variantes de texto (Primary, Secondary, Muted).
21: - **Patrones de Uso:** Determinar el rol de cada color en la interfaz (acentos, alertas, interacciones).
22: 
23: ### 2. Sistema Tipográfico (Inferencia)
24: - **Escala y Peso:** Deducir tamaños de fuente (px), pesos (Bold, Medium, Regular) y contraste tipográfico.
25: - **Legibilidad:** Estimar `line-height` y `letter-spacing` basados en la densidad visual.
26: 
27: ### 3. Sistema de Espaciado y Layout
28: - **Unidad Base:** Determinar si el diseño utiliza una grilla base (ej: 4px, 8px).
29: - **Escala de Espaciado:** Identificar patrones de padding y márgenes consistentes.
30: - **Principios de Layout:** Estructura de grilla, alineaciones y jerarquía de contenidos.
31: 
32: ### 4. Biblioteca de Componentes Visuales
33: - **Botones:** Estilos (Radius, Shadows), tamaños y estados visuales detectables.
34: - **Inputs y Formas:** Bordes, estados de focus (si están visibles) y estilos de campos.
35: - **Contenedores:** Estilos de cards, elevación (sombras) y redondeo de esquinas.
36: 
37: ### 5. Generación de Tokens (Output)
38: - Organizar todos los valores deducidos como **Design Tokens**.
39: - Proponer una nomenclatura coherente con el Framework Baraldi.
40: - Generar un documento estructurado listo para la implementación o moodboarding.
41: 
42: ---
43: 
44: ## 💡 Integración (Bridge Architecture)
45: - **Etapa 06 (M1):** Herramienta clave para la fase de moodboarding técnico y definición de la estética inicial basada en referencias externas.
46: - **Etapa 04 (IA):** Puede usarse para validar si la arquitectura de información propuesta coincide visualmente con referencias exitosas del sector.
47: 
48: ---
49: *Framework Baraldi v2.26.3 · Skill 27*
