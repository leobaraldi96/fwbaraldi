---
name: component-inventory-prioritization
description: >
  Protocolo arquitectónico para auditar, categorizar y priorizar la construcción de 
  componentes de UI. Utiliza una matriz de Impacto vs. Frecuencia y mapeo de 
  dependencias para generar un Roadmap de desarrollo por fases.
keywords: component-library, inventory, roadmap, dependencies, ui-architecture, scale
version: "2.26.3"
---

# 🗄️ Skill 35 — Component Inventory & Prioritization Protocol

Este protocolo se activa al iniciar la construcción (o refactorización masiva) de una biblioteca de componentes. El Agente actúa como un **Arquitecto de UI**, garantizando que el equipo de diseño y desarrollo construya las piezas correctas, en el orden correcto, sin romper las dependencias estructurales.

## 📐 Fases del Planeamiento de Inventario

Al ejecutar esta Skill, el Agente debe generar un "Roadmap de Arquitectura UI" siguiendo estos pasos:

### 1. Auditoría de Descubrimiento (Discovery)
Si existe un producto legado, se debe auditar para identificar:
- Componentes en uso y sus niveles de inconsistencia.
- Variantes "huérfanas" (ej. 7 tipos distintos de tarjetas de producto).
- Vacíos estructurales (componentes que faltan y se simulan con HTML duro).

### 2. Categorización Estructural
Organizar los componentes descubiertos (o planificados) en las siguientes capas:
- **Foundational:** Tipografía, iconos, grillas.
- **Basic/Atomic:** Botones, inputs, checkboxes.
- **Navigation:** Navbars, tabs, paginación.
- **Feedback:** Modales, toasts, alertas.
- **Display:** Cards, listas, avatares.
- **Complex/Organisms:** Data tables, calendarios, editores ricos.

### 3. Matriz de Priorización (Prioritization Criteria)
Evaluar cada componente bajo los siguientes ejes (escala 1-5):
- **Frecuencia de Uso:** ¿Aparece en cada pantalla o solo en los "Settings"?
- **Impacto de Estandarización:** ¿Cuánto tiempo ahorra si se sistematiza?
- **Complejidad (Esfuerzo):** ¿Es un simple botón o un selector de fecha multilenguaje?
- **Cadena de Dependencias:** ¿Quién depende de este componente?

### 4. Generación del Roadmap por Fases (Build Order)
Basado en la matriz, estructurar el desarrollo en fases estrictas:

- **Phase 1: Fundaciones y Core Atómico (P0)**
  - *Must Build First.* Tokens, Botones, Inputs de texto, Grilla base.
  - *Racional:* El 80% de la interfaz depende de estos. Alta frecuencia, alto impacto.
  
- **Phase 2: Estructuras y Feedback (P1)**
  - *Build Second.* Cards, Tabs, Alertas, Dropdowns.
  - *Racional:* Dependen estrictamente de que la Phase 1 esté terminada y funcional.
  
- **Phase 3: Organismos Complejos (P2/P3)**
  - *Build Later.* Data Tables, Calendarios avanzados.
  - *Racional:* Alta complejidad técnica, menor frecuencia global. Su construcción prematura causa bloqueos de desarrollo.

### 5. Mapa de Dependencias (Dependency Tree)
Documentar explícitamente las relaciones para evitar cuellos de botella:
> *Ejemplo:* No asignar el ticket del `Data Table` hasta que `Checkbox`, `Pagination`, `Button` y `Dropdown` estén finalizados y fusionados (merged).

---
## 💡 Cómo usar esta Skill (Bridge Architecture)
- **Cuándo invocar:** En la **Etapa 02 (System Analysis)** para auditar el desastre de un producto legado, o al inicio del **Momento 2 de la Etapa 06** para planificar el sprint de diseño.
- **Output:** Un documento `UI_Component_Roadmap.md` con el orden exacto de construcción y el mapa de dependencias.
- **Sinergia:** Define el backlog de trabajo. Las piezas identificadas aquí se documentarán luego en la **Etapa 06 Momento 2** (Especificaciones atómicas) y se codificarán y validarán con la **Skill 30**.

---
*Framework Baraldi v2.26.3 · Skill 35*
