---
name: momento-2-components-and-scaling
description: Construcción de la biblioteca de componentes e inventario visual basada en la escala del proyecto.
---

# [MOMENTO 2] Component Building & Scaling Strategy

> **Misión:** Transformar los tokens del Momento 1 en piezas funcionales de interfaz. El objetivo no es solo "dibujar", sino construir un sistema que se adapte al tamaño real del problema.

## 🏁 Paso 0: Calibración de Escala (UI Kit vs Design System)
Antes de construir el primer componente, el Agente debe facilitar la decisión de escalamiento con el humano:

### Escenario A: UI Kit (Velocidad & Foco en MVP)
*   **Cuándo:** Proyectos pequeños, equipos de 1 persona, validaciones rápidas o MVPs.
*   **Foco:** Librería de componentes visuales, estados básicos (Hover, Active, Disabled) y prototipado rápido.
*   **Burocracia:** Mínima. Los tokens son directos (ej. `$color-primary: #123456`).

### Escenario B: Design System (Sustentabilidad & Escala)
*   **Cuándo:** Productos core, equipos grandes, múltiples plataformas o visión a largo plazo.
*   **Foco:** Arquitectura de tokens semánticos (ej. `bg-action-primary`), documentación de uso (Do's & Don'ts), accesibilidad auditada y gobernanza.
*   **Burocracia:** Alta. Requiere una definición sistémica más profunda.
### Escenario C: Theming & Framework-First (Personalización)
*   **Cuándo:** Se utiliza una librería o plantilla comercial (ej. Metronic, MUI, Ant Design, Bootstrap).
*   **Foco:** **Skinning & Overrides**. El diseño es una **capa de personalización** sobre la arquitectura nativa.
*   **Documentación Inteligente:** No repetir la documentación oficial del framework. En su lugar, crear un **"Anexo de Personalización"** que contenga:
    1.  **Referencia:** Links a la documentación oficial.
    2.  **Implementación:** Guía de uso específica para este proyecto.
    3.  **Overrides:** Mapa detallado de las variables modificadas (ej. `$theme-colors`, `$border-radius`, `$font-family-base`).
*   **Misión:** Maximizar la eficiencia. El Agente solo documenta **la diferencia** entre el estándar y nuestra marca.

**Misión Pedagógica:** El Agente debe desafiar el trabajo redundante: *"¿Por qué vamos a diseñar este componente desde cero si Metronic ya lo resuelve con accesibilidad nativa? Mejor definamos las variables de personalización para adecuarlo a la marca y ahorremos tiempo de desarrollo"*.

## 🤝 Documentación como Servicio (Handoff Experience)
La documentación no es para nosotros, es para los **Consumidores del Sistema** (Front-end, QA, otros Diseñadores).
*   **Empatía Técnica:** El Agente debe asegurar que los nombres de los componentes y tokens en Figma coincidan 1:1 con la arquitectura de código definida en la Etapa 01.
*   **Claridad Operativa:** Cada componente documentado debe responder:
    1.  **¿Qué es?** (Nombre y propósito).
    2.  **¿Cómo se ve?** (Link al archivo de diseño/Playground).
    3.  **¿Cómo se comporta?** (Anatomía de estados, interacciones y reglas de negocio).
    4.  **¿Cómo se implementa?** (Variables de framework o especificación atómica).
*   **Misión de Servicio:** Si un desarrollador tiene que preguntar el "porqué" o el "cómo", la documentación ha fallado. El Agente audita con el criterio de: *"¿Es esto implementable de forma autónoma?"*.

---

## 🏗️ Paso 0.5: Arquitectura de Archivo & Gobernanza
Antes de dibujar, el Agente debe proponer (y documentar en la PMM) la estructura del archivo de diseño (ej. Figma). La higiene del archivo es parte de la documentación.

### Estructura Recomendada (Figma):
1.  **📜 Index / Cover:** Información del proyecto, estado actual y links rápidos.
2.  **🎨 Foundations / Tokens:** Definición visual de colores, tipografía y efectos.
3.  **🧩 Components (Main):** El "Santuario". Solo componentes principales organizados por categorías atómicas. Prohibido dibujar pantallas aquí.
4.  **💻 Screens / Playground:** Espacio de trabajo donde se ensamblan las vistas usando instancias de los componentes.
5.  **✅ Ready for Dev (Handoff):** Páginas finales, auditadas y bloqueadas para implementación.
6.  **📦 Archive / Sandbox:** Basurero ordenado para versiones obsoletas o experimentos.

**Misión Pedagógica:** El Agente explica: *"Organizar el archivo así no es burocracia, es **Empatía Técnica**. Si un desarrollador o un nuevo diseñador entra al archivo, debe saber exactamente dónde está la verdad y dónde está el experimento"*.

---

## 🔗 Paso 0.7: Contrato de Paridad Técnica
Antes de construir el primer átomo, el Agente debe sincronizar los "Guardrails" con el equipo de desarrollo (o con las definiciones de la Etapa 01):
1.  **Nomenclatura:** ¿Usamos `PrimaryButton`, `btn-primary`, o una convención específica? El diseño debe usar el mismo nombre que el código.
2.  **Restricciones de Plataforma:** ¿Web, Mobile (iOS/Android), Desktop? No inventar interacciones que la plataforma nativa no soporte o que el equipo de dev no pueda implementar con el stack actual.
3.  **Lógica de Estados:** Sincronizar cómo se manejan los estados (ej. ¿el Loading lo maneja el componente o un wrapper?).
4.  **Prohibición de "Componentes Fantasma":** Prohibido inventar componentes que no tengan una viabilidad técnica inmediata o que contradigan las reglas del framework elegido.

**Misión de Alineamiento:** El Agente debe preguntar: *"¿Esta propuesta de componente es compatible con las reglas de tu equipo de desarrollo y con la tecnología que definimos en la Etapa 01?"*.

---

## 🏗️ Paso 1: Secuencia de Construcción Atómica Estricta (Bottom-Up)
La construcción debe seguir una secuencia inquebrantable de lo micro a lo macro. El Agente tiene el mandato de bloquear el progreso si el humano intenta diseñar un componente complejo sin haber resuelto sus dependencias previas.

1.  **Nivel 0: Validación de Tokens (La Materia Prima):** Antes de diseñar cualquier cosa, confirmar que los tokens del Momento 1 (Colores, Tipografía, Espaciados, Radios, Sombras) están definidos y aplicados en el archivo. *No se puede diseñar una Card sin saber qué token de sombra usa.*
2.  **Nivel 1: Resolución de Átomos (Las Piezas Core):** Botones básicos, Inputs vacíos, Badges, Iconos, Labels. Antes de un Slider completo, resolver el Handle y el Track.
3.  **Nivel 2: Lógica de Interacción Micro:** Definir cómo interactúan los átomos por sí solos (Estados: Hover, Focus, Disabled, Active).
4.  **Nivel 3: Ensamblaje de Moléculas y Organismos:** Solo cuando los Niveles 0, 1 y 2 son sólidos, se procede a construir Cards, Navbars, Modales o Sliders completos.

**Misión de Integridad Pedagógica:** El Agente debe auditar constantemente la secuencia: *"Veo que quieres diseñar una Tarjeta de Producto, pero aún no hemos definido el token de sombra ni el estado hover del botón primario que irá dentro. Resolvamos lo micro primero para no generar deuda técnica."*.

---

## 🗣️ Paso 1.5: Fusión Semántico-Visual (Sujeción a la Matriz)
El diseño visual en alta fidelidad no es una isla; es la ejecución final de un ecosistema semántico previamente aprobado. La UI debe someterse a las definiciones de *wording* de las Etapas 04 y 05.

*   **Prohibición de Lorem Ipsum:** Queda estrictamente prohibido diseñar componentes o vistas con texto simulado. Un botón que dice "Lipsum" carece de significado y rompe la trazabilidad del producto.
*   **Sincronización Obligatoria con la PMM:** Todo copy, label o mensaje de error utilizado en los componentes **DEBE** extraerse de la **Product Master Matrix (Skill 39)** o de los artefactos de UX Writing (Skill 17) de la Etapa 05. El diseñador visual (o el Agente) no "inventa" copy en esta etapa; lo implementa.
*   **Validación de Estrés Verbal:** El diseño del componente debe someterse a prueba utilizando los textos reales más críticos definidos en la matriz (textos cortos vs. textos muy largos) para asegurar la flexibilidad de la UI sin romper el layout.

**Misión Pedagógica:** El Agente debe rechazar la abstracción vacía: *"Antes de dibujar este componente, voy a consultar la Product Master Matrix para ver exactamente qué 'wording' aprobamos para este flujo en la Etapa 05. El diseño debe abrazar ese contenido real, no reemplazarlo por relleno."*.

---

---

## ⚖️ Paso 2: Auditoría de Consistencia (Skill 29)
*   Verificar que cada componente use exclusivamente los tokens del Momento 1.
*   Asegurar que no se inyecten estilos "ad-hoc" fuera del sistema elegido.

---

## 📋 Anexo: Especificación de Componentes (El Contrato Handoff)
*Esta sección rige la especificación atómica. Cada componente core debe documentarse siguiendo esta anatomía:*

### 1. Visión General (Overview)
- **Propósito y Uso:** Definición clara de la función del componente.
- **Cuándo usar vs. No usar:** Casos de uso correctos y anti-patrones.
- **Accesibilidad (A11y):** Roles ARIA y requerimientos de contraste.

### 2. Anatomía y Fundamentos Visuales
- **Elementos Requeridos vs. Opcionales:** Desglose interno (ej. Icono + Label).
- **Dimensiones y Espaciado:** Reglas de padding, gap y sizing.
- **Tokens Aplicados:** Mapeo de Color, Tipografía, Bordes y Sombras.

### 3. Matriz de Estados y Variantes
- **Variantes de Estilo:** Primary, Secondary, Ghost, Outline, etc.
- **Estados de Interacción:** Default, Hover, Focus, Active, Disabled, Loading, Error.
- **Comportamiento Dark/Light Mode.**

### 4. Patrones de Interacción & Microcopy
- **Comportamiento Responsivo:** Adaptación a breakpoints.
- **Reglas de Redacción:** Restricciones de caracteres y formato de labels (heredado de PMM).

### 5. Contrato para el Desarrollador
- **Props / Parámetros:** Listado técnico (ej: `label`, `isDisabled`).
- **Related Components:** Componentes de los que depende o con los que trabaja en conjunto.

---
*Framework Baraldi v2.26.4 · UI Architecture & Scaling (Clean).*
