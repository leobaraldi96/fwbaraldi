# System Awareness Engine (v2.32.1)
# Framework Baraldi - Core Skill

Este motor orquesta la **Consciencia Sistémica** y el **Arnés Recursivo (Harness²)** del framework, gestionando la memoria persistente de 20 herramientas (Engram v1.20.0), el archivo evolutivo personal (`~/.fwbaraldi/user_harness.md`) y las relaciones semánticas entre decisiones, hallazgos y artefactos. Su objetivo es eliminar la amnesia agéntica, garantizar que el framework aprenda continuamente del usuario en su propio entorno y mantener la trazabilidad total desde la Etapa 01 hasta la 08.

---

## Arquitectura de 3 Anillos de Inteligencia (Harness² Recursion)

El agente clasifica y separa rigurosamente todo conocimiento en tres anillos:

| Anillo | Ámbito | Dónde vive | Qué almacena |
| :--- | :--- | :--- | :--- |
| **1. Arnés Base (Core FWB)** | Público / Universal | `skills/` del repositorio FWB | Metodología de 8 etapas, 16 protocolos y leyes universales agnósticas. |
| **2. Arnés Evolutivo del Usuario (`User-Invariant`)** | Privado del Usuario (Cross-Project) | `~/.fwbaraldi/user_harness.md` + Engram (`scope: "personal"`, `topic_key: "harness/invariant-rule"`) | Preferencias técnicas/UX transversales del usuario y lecciones aprendidas de sus correcciones para no repetir errores en ningún proyecto futuro. |
| **3. Arnés de Dominio (`Domain Edit`)** | Local del Proyecto | `docs-fwbaraldi/` + Engram (`scope: "project"`) | Decisiones, tokens, modelo de datos y reglas exclusivas de ese cliente o producto puntual. |

---

## Gramática de Relaciones (Verbos de Trazabilidad)

Al usar `mem_save`, `mem_compare` o realizar auditorías, el Agente DEBE clasificar la conexión entre la nueva información y la existente usando estos verbos:

| Relación | Uso Correcto | Ejemplo |
| :--- | :--- | :--- |
| **`scoped`** | Alineación directa con objetivos de la E01/E02. | "Feature X está `scoped` en el objetivo de retención". |
| **`conflicts_with`** | Contradicción con una decisión previa o regla de negocio. | "El flujo Y `conflicts_with` la política de privacidad de la E04". |
| **`supersedes`** | Reemplazo de una hipótesis previa por una más precisa. | "El Test A `supersedes` la hipótesis inicial de navegación". |
| **`compatible`** | Refuerzo mutuo entre hallazgos de distintas etapas. | "El stack técnico es `compatible` con la carga de datos de la E02". |
| **`related`** | Conexión temática sin dependencia directa. | "El diseño visual es `related` a la narrativa de marca". |

---

## Protocolo Operativo de Memoria y Evolución (Engram v1.20.0)

### 1. Carga de Contexto e Inicio de Sesión
- **SILENT:** Ejecutar `mem_current_project()` para detectar el slug activo.
- **SYNC:** Llamar `mem_context(project="[slug]", limit=10)` y leer `~/.fwbaraldi/user_harness.md` (si existe) para inyectar las preferencias evolutivas del usuario desde el primer turno.
- **SEARCH CONDICIONAL:** Buscar pendientes en la memoria (`mem_search("pendientes OR backlog")`) solo si `00_Backlog_Estrategico.md` no existe en disco.
- **CROSS-PROJECT DISCOVERY:** Cuando se diseñe un patrón común o el usuario ejecute `/evolve`, ejecutar `mem_search(query="...", scope="personal")` o filtrar por `topic_key: "harness/invariant-rule"` para recuperar las lecciones invariantes acumuladas.

### 2. Registro Proactivo y Experience Reflector (Durante la Sesión y Cierre)
Usar `mem_save` proactivamente en los siguientes hitos:
- Toma de decisión arquitectónica, de negocio o de diseño (`scope: "project"`).
- Validación o refutación de una hipótesis (`scope: "project"`).
- **Corrección o preferencia transversal del usuario (*Experience Reflector*):** Cuando el usuario corrige un comportamiento de la IA o establece un criterio que aplica a su forma general de trabajar, guardarlo como lección invariante en `mem_save(scope="personal", topic_key="harness/invariant-rule", type="learning")` y sincronizarlo en `~/.fwbaraldi/user_harness.md`.
- **Taxonomía canónica (`mem_suggest_topic_key`):** Utilizar para mantener consistencia semántica sin inventar prefijos arbitrarios.
- **Captura pasiva (`mem_capture_passive`):** Utilizar al procesar documentos extensos o transcripciones del usuario para extraer aprendizajes clave.

**Formato Mandatorio (What/Why/Where/Learned):**
```text
**What**: [descripción concisa]
**Why**: [razón estratégica o corrección del usuario]
**Where**: [etapa/archivo afectado o "Transversal (User Harness)"]
**Learned**: [regla invariante o insight respaldado por evidencia]
```

### 3. Juicio Semántico y Auditoría de Vigencia (`mem_judge` & `mem_compare`)
- **Evaluación de contradicciones (`mem_judge` / `mem_compare`):** Al iniciar auditorías (`00_project_health_audit`) o etapas avanzadas (E05/E06), evaluar si las decisiones recientes entran en conflicto (`conflicts_with`) o reemplazan (`supersedes`) hipótesis previas.
- **Gobernanza en Subagentes (Fan-Out / Fan-In):** Cuando se desplieguen subagentes en paralelo (`invoke_subagent`), los subagentes operan en modo lectura y **solo el Orquestador Principal** ejecuta `mem_save` y edita `user_harness.md` una vez consolidados los hallazgos.

### 4. Sincronización Atómica (Cierre de Sesión)
- **MANDATORIO:** Ejecutar el *Experience Reflector* (separando *Domain Edits* de *User-Invariant Edits*) y llamar a `mem_session_summary()` antes de cerrar.
- **ORDEN:** 1. Guardar memorias de dominio e invariantes -> 2. Resumen de sesión -> 3. Mensaje humano final.

### 5. Salvaguarda de Memoria y Arnés Personal (Formateo y Migración)
- **Detección Activa:** Si el usuario comenta que formateará su equipo o migrará a otra computadora, orientarlo a ejecutar `fwbaraldi backup`, el cual respalda tanto la base SQLite de Engram (`~/.engram`) como su Arnés Evolutivo Personal (`~/.fwbaraldi/user_harness.md`).
- **Restauración:** Guiarlo para usar `fwbaraldi restore -f "<backup.zip>"` en el nuevo entorno.

---

## Mandatos de Consciencia (ALWAYS/NEVER)

### ALWAYS:
- **Separación de Anillos:** Distinguir siempre entre una regla del cliente/producto actual (*Domain Edit*) y una preferencia/aprendizaje transversal del usuario (*User-Invariant Edit*).
- **Trazabilidad:** Conectar cada nueva feature con su origen en el Problem Framing (E01).
- **Higiene Semántica:** Usar los verbos de relación (`scoped`, `supersedes`, etc.) en cada acta de decisión.
- **Privacidad:** Censurar credenciales o secretos antes de guardar en Engram o en `user_harness.md`.

### NEVER:
- **Contaminación de Dominio:** Nunca guardes reglas específicas de la marca o negocio de un cliente dentro de `~/.fwbaraldi/user_harness.md`.
- **Reduccionismo:** Nunca borres o resumas memorias antiguas para ahorrar tokens.
- **Alucinación Histórica:** Si no encontrás algo en la memoria, decí "No lo recuerdo" en lugar de inventar una decisión previa.
- **Duplicidad:** Nunca guardes el mismo hallazgo dos veces; usa `topic_key` para actualizar el conocimiento existente.

---

*Framework Baraldi v2.32.1 · 00_system_awareness · Orquestador de Memoria Sistémica y Harness².*
