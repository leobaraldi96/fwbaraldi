---
name: component-inventory-prioritization
description: >
  Protocolo arquitectÃ³nico para auditar, categorizar y priorizar la construcciÃ³n de 
  componentes de UI. Utiliza una matriz de Impacto vs. Frecuencia y mapeo de 
  dependencias para generar un Roadmap de desarrollo por fases.
keywords: component-library, inventory, roadmap, dependencies, ui-architecture, scale
version: "2.26.6"
---

# ðŸ—„ï¸ Skill 35 â€” Component Inventory & Prioritization Protocol

Este protocolo se activa al iniciar la construcciÃ³n (o refactorizaciÃ³n masiva) de una biblioteca de componentes. El Agente actÃºa como un **Arquitecto de UI**, garantizando que el equipo de diseÃ±o y desarrollo construya las piezas correctas, en el orden correcto, sin romper las dependencias estructurales.

## ðŸ“ Fases del Planeamiento de Inventario

Al ejecutar esta Skill, el Agente debe generar un "Roadmap de Arquitectura UI" siguiendo estos pasos:

### 1. AuditorÃ­a de Descubrimiento (Discovery)
Si existe un producto legado, se debe auditar para identificar:
- Componentes en uso y sus niveles de inconsistencia.
- Variantes "huÃ©rfanas" (ej. 7 tipos distintos de tarjetas de producto).
- VacÃ­os estructurales (componentes que faltan y se simulan con HTML duro).

### 2. CategorizaciÃ³n Estructural
Organizar los componentes descubiertos (o planificados) en las siguientes capas:
- **Foundational:** TipografÃ­a, iconos, grillas.
- **Basic/Atomic:** Botones, inputs, checkboxes.
- **Navigation:** Navbars, tabs, paginaciÃ³n.
- **Feedback:** Modales, toasts, alertas.
- **Display:** Cards, listas, avatares.
- **Complex/Organisms:** Data tables, calendarios, editores ricos.

### 3. Matriz de PriorizaciÃ³n (Prioritization Criteria)
Evaluar cada componente bajo los siguientes ejes (escala 1-5):
- **Frecuencia de Uso:** Â¿Aparece en cada pantalla o solo en los "Settings"?
- **Impacto de EstandarizaciÃ³n:** Â¿CuÃ¡nto tiempo ahorra si se sistematiza?
- **Complejidad (Esfuerzo):** Â¿Es un simple botÃ³n o un selector de fecha multilenguaje?
- **Cadena de Dependencias:** Â¿QuiÃ©n depende de este componente?

### 4. GeneraciÃ³n del Roadmap por Fases (Build Order)
Basado en la matriz, estructurar el desarrollo en fases estrictas:

- **Phase 1: Fundaciones y Core AtÃ³mico (P0)**
  - *Must Build First.* Tokens, Botones, Inputs de texto, Grilla base.
  - *Racional:* El 80% de la interfaz depende de estos. Alta frecuencia, alto impacto.
  
- **Phase 2: Estructuras y Feedback (P1)**
  - *Build Second.* Cards, Tabs, Alertas, Dropdowns.
  - *Racional:* Dependen estrictamente de que la Phase 1 estÃ© terminada y funcional.
  
- **Phase 3: Organismos Complejos (P2/P3)**
  - *Build Later.* Data Tables, Calendarios avanzados.
  - *Racional:* Alta complejidad tÃ©cnica, menor frecuencia global. Su construcciÃ³n prematura causa bloqueos de desarrollo.

### 5. Mapa de Dependencias (Dependency Tree)
Documentar explÃ­citamente las relaciones para evitar cuellos de botella:
> *Ejemplo:* No asignar el ticket del `Data Table` hasta que `Checkbox`, `Pagination`, `Button` y `Dropdown` estÃ©n finalizados y fusionados (merged).

---
## ðŸ’¡ CÃ³mo usar esta Skill (Bridge Architecture)
- **CuÃ¡ndo invocar:** En la **Etapa 02 (System Analysis)** para auditar el desastre de un producto legado, o al inicio del **Momento 2 de la Etapa 06** para planificar el sprint de diseÃ±o.
- **Output:** Un documento `UI_Component_Roadmap.md` con el orden exacto de construcciÃ³n y el mapa de dependencias.
- **Sinergia:** Define el backlog de trabajo. Las piezas identificadas aquÃ­ se documentarÃ¡n luego en la **Etapa 06 Momento 2** (Especificaciones atÃ³micas) y se codificarÃ¡n y validarÃ¡n con la **Skill 30**.

---
*Framework Baraldi v2.26.6 Â· Skill 35*

