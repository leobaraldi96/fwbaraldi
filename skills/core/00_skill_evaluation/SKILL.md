---
name: baraldi-skill-evaluation
description: >
  La "Aduana" del Framework Baraldi y Evaluador Contrastivo (Harness²). Evalúa cualquier propuesta
  para crear, instalar o modificar una habilidad (Skill) o regla del arnés mediante el criterio
  de Delta de Conocimiento y Contraste Conductual.
  Trigger: Al crear un nuevo archivo SKILL.md, auditar una habilidad existente, ejecutar /evolve
  o cuando el usuario pida agregar una nueva capacidad al sistema.
version: "2.32.0"
---

# Orquestador de Inteligencia, Eficiencia y Contraste Conductual (Skill Judge & Harness² Filter)

Este protocolo es la defensa inmunológica del Framework Baraldi contra el desperdicio de tokens (*Context Bloat*). Asegura que el framework y el arnés evolutivo se mantengan eficientes, económicos y respaldados por cambios reales de comportamiento.

## La Fórmula Fundamental

Evalúa CUALQUIER conocimiento o regla nueva con esta ecuación:

> **Buena Skill / Regla de Arnés = (Conocimiento Experto Exclusivo − Lo que la IA Ya Sabe) × Contraste Conductual Observable**

Si una habilidad intenta enseñar lo que un modelo de frontera ya sabe de fábrica (ej. "Cómo hacer un bucle", "Qué es el Design Thinking", "Cómo centrar un div") o no produce ningún cambio medible en la acción del agente, **ESTÁ PROHIBIDA**. Es grasa cognitiva que ralentiza el sistema.

---

## Proceso de Evaluación (La Aduana de 5 Filtros)

Cuando el usuario pida crear o evaluar una Skill, o al promover una regla mediante `/evolve`, aplica estos 5 filtros:

### 1. El Delta de Conocimiento (Knowledge Delta)
- **Experto:** ¿Contiene árboles de decisión, invariantes de arquitectura, umbrales exactos o casos límite que solo da la experiencia empírica? -> **APROBADO**.
- **Redundante:** ¿Es un tutorial básico o explica teoría estándar? -> **RECHAZADO**.

### 2. Prueba de Contraste Conductual Libre de Rúbrica (Harness² Behavioral Contrast)
Antes de incorporar una regla nueva al arnés, pregúntate:
- *"Si el agente ejecuta una tarea real CON esta línea escrita vs. SIN esta línea escrita, ¿qué acción concreta, herramienta o estructura del archivo cambia?"*
- Si la respuesta es "ninguna, es solo un consejo motivacional o declarativo", **se descarta o se reescribe como un gatillo determinista** (`Cuando ocurra X -> Ejecutar/Verificar Y`).

### 3. Separación Estricta Invariante vs. Dominio (Invariant vs. Domain Split)
- **Invariante Universal:** Resuelve una debilidad general del agente (ej. olvidarse de incluir un campo nuevo en el `SELECT` de la API o desalinear cabeceras entre módulos). Puede ir al Core FWB o a `~/.fwbaraldi/user_harness.md`.
- **Específica de Dominio:** Depende del negocio, marca o librería de un cliente puntual. Debe ir **exclusivamente** al `docs-fwbaraldi/` local de ese proyecto.

### 4. El Filtro de Anti-Patrones (NEVER Lists) e Inmunidad de Meta-Reglas
La mitad del conocimiento experto es saber qué **NO** hacer.
- Toda skill o regla debe incluir restricciones claras (`NEVER do X because Y`) basadas en fallos reales observados.
- **Inmunidad de Meta-Reglas (Anti-Self-Triggering):** Al redactar contratos (`DESIGN.md`, `VOICE.md`, `SECURITY.md`) o skills que prohíben un patrón sintáctico o tipográfico, descríbelo por su nombre técnico o código escapado (ej. *em-dash*, `\u2014`, `inline style`) sin insertar jamás la cadena prohibida literal que dispara falsos positivos en linters o contamina por imitación el contexto del modelo.

### 5. Anatomía del Contexto Oculto (Description)
La propiedad `description` en el YAML frontmatter debe responder: **QUÉ** hace, **CUÁNDO** activarla y **PALABRAS CLAVE** de disparo.

---

## Respuesta al Usuario (En caso de rechazar una Skill o Regla Redundante)

Si detectas que el usuario pide crear una skill redundante:
1. **Detén la creación.**
2. Explícale con claridad que el modelo base ya posee ese conocimiento internalizado y que agregarlo solo consumirá presupuesto de atención sin generar **contraste conductual**.
3. Ofrécele, en cambio, registrar únicamente las **restricciones de negocio, invariantes de arquitectura o preferencias de diseño** que el modelo no podría adivinar por sí solo.

---
*Framework Baraldi v2.32.0 · Skill Evaluation & Harness² Filter.*
