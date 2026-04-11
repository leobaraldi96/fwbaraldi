---
name: baraldi-skill-evaluation
description: >
  La "Aduana" del Framework Baraldi. Evalúa cualquier propuesta para crear, 
  instalar o modificar una habilidad (Skill) para prevenir la "Obesidad de Contexto".
  Trigger: Al crear un nuevo archivo SKILL.md, auditar una habilidad existente, 
  o cuando el usuario pida agregar una nueva capacidad al sistema.
version: "1.0"
---

# 🛡️ Orquestador de Inteligencia y Eficiencia (Skill Judge)

Este protocolo es la defensa inmunológica del Framework Baraldi contra el desperdicio de tokens (Context Bloat). Asegura que el framework se mantenga eficiente, económico y libre de alucinaciones.

## ⚖️ La Fórmula Fundamental

Evalúa CUALQUIER conocimiento nuevo con esta ecuación:

> **Buena Skill = Conocimiento Experto Exclusivo − Lo que la IA Ya Sabe**

Si una habilidad intenta enseñar lo que un LLM (como Claude o Gemini) ya sabe de fábrica (ej. "Cómo hacer un bucle", "Qué es el Design Thinking", "Cómo centrar un div"),  **ESTÁ PROHIBIDA**. Es basura cognitiva que ralentiza el sistema y cuesta dinero.

## 🛑 Proceso de Evaluación (La Aduana)

Cuando el usuario pida crear o evaluar una Skill, aplica este filtro antes de escribir código:

### 1. El Delta de Conocimiento (Knowledge Delta)
- **Experto:** ¿Contiene árboles de decisión? ¿Trade-offs? ¿Casos límite que solo da la experiencia? -> **APROBADO**.
- **Redundante:** ¿Es un tutorial paso a paso de una librería estándar? ¿Explica conceptos básicos? -> **RECHAZADO**.

### 2. El Filtro de Anti-Patrones (NEVER Lists)
La mitad del conocimiento experto es saber qué **NO** hacer.
- Si la skill no tiene una lista explícita de `NEVER do X because Y`, no tiene valor estratégico real. Exige al humano (o autogenera) razones no obvias para evitar errores.

### 3. Anatomía del Contexto Oculto (Description)
La propiedad `description` en el YAML frontmatter es el campo más importante.
Debe responder:
- **QUÉ** hace.
- **CUÁNDO** usarlo.
- **PALABRAS CLAVE** para dispararlo.
Si el description dice solo "Ayuda con X", la skill es invisible y nunca se ejecutará.

### 4. Responsabilidad Sistémica (Dilema Interno vs Externo)
Antes de aceptar una skill técnica genérica, pregúntate:
- *"¿Es este conocimiento nuclear para la identidad del proyecto, o debería ser consultado a través de **Context7.com** o **Skills.sh**?"*
- Mantén el Framework Baraldi centrado en la ESTRATEGIA. Delega el código puro a ecosistemas externos.

## 💬 Respuesta al Usuario (En caso de rechazar una Skill)

Si detectas que el usuario pide crear una skill redundante (ej. "Crea una skill sobre cómo programar en React"):
1. **Detén la creación.**
2. Explícale (con tono humano y empático) que tú ya tienes ese conocimiento internalizado.
3. Adviértele que crear ese archivo solo consumirá el "presupuesto cognitivo" del framework sin añadir valor real, haciéndolo más lento y costoso.
4. Ofrécele, en cambio, usar ese espacio para escribir una skill sobre "Restricciones de Negocio" u "Identidad Visual" que tú no podrías adivinar.

---
*Framework Baraldi v2.13.0 · Eficiencia y Economía Cognitiva.*
