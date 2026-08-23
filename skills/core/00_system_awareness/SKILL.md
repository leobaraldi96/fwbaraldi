# System Awareness Engine (v2.27.0)
# Framework Baraldi — Core Skill

Este motor orquesta la **Consciencia Sistémica** del framework, gestionando la memoria persistente de 20 herramientas (Engram v1.20.0) y las relaciones semánticas entre decisiones, hallazgos y artefactos. Su objetivo es eliminar la amnesia agéntica y garantizar la trazabilidad total desde la Etapa 01 hasta la 07 y entre proyectos transversales.

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

## Protocolo Operativo de Memoria (Engram v1.20.0 — 20 Herramientas)

### 1. Carga de Contexto e Inicio de Sesión
- **SILENT:** Ejecutar `mem_current_project()` para detectar el slug activo.
- **SYNC:** Llamar `mem_context(project="[slug]", limit=20)` para traer el historial reciente.
- **SEARCH:** Buscar pendientes en la memoria (`mem_search("pendientes OR backlog")`).
- **CROSS-PROJECT DISCOVERY:** Cuando se diseñe un patrón común (ej. KYC, checkout, onboarding) o el usuario pregunte cómo se resolvió antes, ejecutar `mem_search(query="...", all_projects=true)` para rescatar patrones de diseño previos.

### 2. Registro Proactivo y Save-Nudge (Durante la Sesión)
Usar `mem_save` proactivamente en los siguientes hitos:
- Toma de decisión arquitectónica, de negocio o de diseño.
- Validación o refutación de una hipótesis (UXR o analítica).
- Descubrimiento de un riesgo técnico o dependencia crítica.
- Aprobación de un artefacto por parte del humano.
- **Save-Nudge de 15 Minutos:** En sesiones o talleres intensivos de diseño, hacer un guardado intermedio de hitos consolidados para no depender únicamente del cierre final.

**Formato Mandatorio (What/Why/Where/Learned):**
```text
**What**: [descripción concisa]
**Why**: [razón estratégica o pedido del usuario]
**Where**: [etapa y archivo afectado]
**Learned**: [insight o gotcha descubierto]
```

### 3. Ciclo de Vida y Auditoría de Vigencia (`mem_review`)
- Usar `mem_review(action="list")` al iniciar auditorías (`00_project_health_audit`) o al comenzar etapas avanzadas (E05/E06) para identificar hipótesis de Problem Framing que hayan vencido su ciclo de revisión (`review_after`).
- Revalidar con el humano y ejecutar `mem_review(action="mark_reviewed", observation_id=ID)` para actualizar su vigencia.

### 4. Sincronización Atómica (Cierre de Sesión)
- **MANDATORIO:** Ejecutar `mem_session_summary()` antes de cerrar.
- **ORDEN:** 1. Guardar memorias sueltas → 2. Resumen de sesión → 3. Mensaje humano final.

### 5. Salvaguarda de Memoria (Formateo y Migración)
- **Detección Activa:** Si el usuario comenta que formateará su equipo, migrará a otra computadora o solicita respaldo de sus proyectos, la IA debe orientarlo de inmediato a ejecutar `fwbaraldi backup` (o `npx github:leobaraldi96/fwbaraldi backup`).
- **Restauración:** Guiarlo para usar `fwbaraldi restore -f "<backup.zip>"` en el nuevo entorno para no perder el grafo de conocimiento histórico.

---

## Mandatos de Consciencia (ALWAYS/NEVER)

### ALWAYS:
- **Trazabilidad:** Conectar cada nueva feature con su origen en el Problem Framing (E01).
- **Higiene Semántica:** Usar los verbos de relación (`scoped`, `supersedes`, etc.) en cada acta de decisión.
- **Verificación de Conflictos:** Buscar activamente contradicciones en la memoria antes de proponer cambios estructurales.
- **Privacidad:** Censurar datos sensibles (tokens, passwords) antes de guardar en Engram.
- **Salvaguarda Preventiva:** Recordar al usuario la posibilidad de backup cuando se cierren hitos importantes o se hable de migraciones.
- **Aprovechamiento Colectivo:** Consultar `all_projects=true` cuando una solución transversal beneficie el diseño actual.

### NEVER:
- **Reduccionismo:** Nunca borres o resumas memorias antiguas para ahorrar tokens. El historial completo es sagrado.
- **Alucinación Histórica:** Si no encontrás algo en la memoria, decí "No lo recuerdo" en lugar de inventar una decisión previa.
- **Duplicidad:** Nunca guardes el mismo hallazgo dos veces; usa `topic_key` para actualizar el conocimiento existente.
- **Pasividad:** Nunca cierres una etapa sin haber guardado al menos un `mem_save` de "Cierre de Etapa".

---

*Framework Baraldi v2.28.0 · 00_system_awareness · Orquestador de Memoria Sistémica.*
