# System Awareness Engine (v2.26.10)
# Framework Baraldi — Core Skill

Este motor orquesta la **Consciencia Sistémica** del framework, gestionando la memoria persistente y las relaciones semánticas entre decisiones, hallazgos y artefactos. Su objetivo es eliminar la amnesia agéntica y garantizar la trazabilidad total desde la Etapa 01 hasta la 07.

---

## 🔗 Gramática de Relaciones (Verbos de Trazabilidad)

Al usar `mem_save`, `mem_compare` o realizar auditorías, el Agente DEBE clasificar la conexión entre la nueva información y la existente usando estos verbos:

| Relación | Uso Correcto | Ejemplo |
| :--- | :--- | :--- |
| **`scoped`** | Alineación directa con objetivos de la E01/E02. | "Feature X está `scoped` en el objetivo de retención". |
| **`conflicts_with`** | Contradicción con una decisión previa o regla de negocio. | "El flujo Y `conflicts_with` la política de privacidad de la E04". |
| **`supersedes`** | Reemplazo de una hipótesis previa por una más precisa. | "El Test A `supersedes` la hipótesis inicial de navegación". |
| **`compatible`** | Refuerzo mutuo entre hallazgos de distintas etapas. | "El stack técnico es `compatible` con la carga de datos de la E02". |
| **`related`** | Conexión temática sin dependencia directa. | "El diseño visual es `related` a la narrativa de marca". |

---

## ⚙️ Protocolo Operativo de Memoria (Engram MCP)

### 1. Carga de Contexto (Inicio de Sesión)
- **SILENT:** Ejecutar `mem_current_project()` para detectar el slug activo.
- **SYNC:** Llamar `mem_context(project="[slug]", limit=20)` para traer el historial reciente.
- **SEARCH:** Buscar pendientes en la memoria (`mem_search("pendientes OR backlog")`).

### 2. Registro de Hallazgos (Durante la Sesión)
Usar `mem_save` proactivamente en los siguientes hitos:
- Toma de decisión arquitectónica o de diseño.
- Validación/Refutación de una hipótesis (vía UXR o Data).
- Descubrimiento de un riesgo técnico o de negocio.
- Aprobación de un artefacto por parte del humano.

**Formato Mandatorio (What/Why/Where/Learned):**
```text
**What**: [descripción concisa]
**Why**: [razón estratégica o pedido del usuario]
**Where**: [etapa y archivo afectado]
**Learned**: [insight o gotcha descubierto]
```

### 3. Sincronización Atómica (Cierre de Sesión)
- **MANDATORIO:** Ejecutar `mem_session_summary()` antes de cerrar.
- **ORDEN:** 1. Guardar memorias sueltas → 2. Resumen de sesión → 3. Mensaje humano final.

---

## 🛡️ Mandatos de Consciencia (ALWAYS/NEVER)

### ALWAYS:
- **Trazabilidad:** Conectar cada nueva feature con su origen en el Problem Framing (E01).
- **Higiene Semántica:** Usar los verbos de relación (`scoped`, `supersedes`, etc.) en cada acta de decisión.
- **Verificación de Conflictos:** Buscar activamente contradicciones en la memoria antes de proponer cambios estructurales.
- **Privacidad:** Censurar datos sensibles (tokens, passwords) antes de guardar en Engram.

### NEVER:
- **Reduccionismo:** Nunca borres o resumas memorias antiguas para ahorrar tokens. El historial completo es sagrado.
- **Alucinación Histórica:** Si no encontrás algo en la memoria, decí "No lo recuerdo" en lugar de inventar una decisión previa.
- **Duplicidad:** Nunca guardes el mismo hallazgo dos veces; usa `topic_key` para actualizar el conocimiento existente.
- **Pasividad:** Nunca cierres una etapa sin haber guardado al menos un `mem_save` de "Cierre de Etapa".

---

*Framework Baraldi v2.26.10 · 00_system_awareness · Orquestador de Memoria Sistémica.*
