---
name: ux-audit-rethink
description: >
  Auditoría holística de UX basada en los 7 factores de IxDF, 5 características
  de usabilidad y 5 dimensiones de interacción. Evaluación 360° con propuestas
  de rediseño fundamentadas en principios de diseño centrado en el usuario.
  Activar en rediseños de productos legados, evaluaciones estratégicas o como
  punto de entrada antes de auditorías específicas.
  Keywords: ux-audit, usabilidad, IxDF, honeycomb, interacción, rediseño, evaluación.
version: "2.31.0"
framework: Baraldi
stage: "02 - System Analysis"
---

# Motor de auditoría y rediseño de UX (UX Audit & Rethink)

Este motor ejecuta una **evaluación UX de 360°** sobre productos existentes o legados combinando 3 marcos de evaluación (sobre un puntaje total de **85 puntos**) y generando propuestas de rediseño priorizadas (`P0` a `P3`).

---

## 1. Inputs requeridos antes de auditar

Solicitar o relevar del repositorio:
- **`app_description` [REQUERIDO]:** Propósito, usuarios objetivo, funcionalidades clave y plataforma (web/móvil/ambas).
- **`screenshots_or_links` [RECOMENDADO]:** Capturas, wireframes, código de vistas o URLs activas.
- **`user_feedback` y `business_context` [OPCIONAL]:** Tickets de soporte, analítica, KPIs y objetivos de negocio.

---

## 2. Sistema de evaluación tridimensional (85 puntos máximos)

El agente debe puntuar cada dimensión de `1` a `5` con evidencia concreta observada en el producto:

### Marco A: Los 7 factores UX de Peter Morville (máx. 35 pts)
| Factor | Puntaje (1-5) | Qué auditar en el producto | Prioridad |
| :--- | :---: | :--- | :---: |
| **1. Útil (Useful)** | `[1-5]/5` | ¿Resuelve un dolor real mejor que las alternativas actuales? | `[Crítica/Alta/Media/Baja]` |
| **2. Usable** | `[1-5]/5` | ¿Navegación clara, baja carga cognitiva y prevención de errores? | `[...]` |
| **3. Encontrable (Findable)**| `[1-5]/5` | ¿El usuario localiza cualquier función clave en `< 30 segundos` y `<= 3 clics`? | `[...]` |
| **4. Creíble (Credible)** | `[1-5]/5` | ¿Inspira confianza visual, transparencia de precios/datos y cero errores rotos? | `[...]` |
| **5. Deseable (Desirable)** | `[1-5]/5` | ¿Atractivo estético, coherencia de marca y respuesta emocional positiva? | `[...]` |
| **6. Accesible (Accessible)**| `[1-5]/5` | ¿Cumple contraste AA, foco de teclado, `rem` y lectores de pantalla? | `[...]` |
| **7. Valioso (Valuable)** | `[1-5]/5` | ¿Entrega valor medible tanto al usuario final como al modelo de negocio? | `[...]` |

### Marco B: Las 5 características de usabilidad ISO 9241-11 (máx. 25 pts)
| Característica | Puntaje (1-5) | Evidencia observada | Impacto |
| :--- | :---: | :--- | :---: |
| **1. Efectividad** | `[1-5]/5` | Precisión y completitud en el logro de objetivos principales. | `[Alto/Medio/Bajo]` |
| **2. Eficiencia** | `[1-5]/5` | Cantidad de pasos, tiempo de tarea y ausencia de fricción redundante. | `[...]` |
| **3. Engagement** | `[1-5]/5` | Satisfacción de uso y micro-interacciones con propósito. | `[...]` |
| **4. Tolerancia al error** | `[1-5]/5` | Confirmación en acciones destructivas, opción de deshacer y mensajes accionables. | `[...]` |
| **5. Facilidad de aprendizaje**| `[1-5]/5` | Onboarding claro, divulgación progresiva y respeto por modelos mentales. | `[...]` |

### Marco C: Las 5 dimensiones de diseño de interacción (máx. 25 pts)
| Dimensión | Puntaje (1-5) | Criterio técnico de auditoría |
| :--- | :---: | :--- |
| **1. Palabras (Words)** | `[1-5]/5` | Claridad semántica, ausencia de jerga técnica, etiquetas de acción específicas. |
| **2. Representación visual** | `[1-5]/5` | Jerarquía tipográfica, iconografía universal y semántica de color. |
| **3. Espacio y objetos físicos**| `[1-5]/5` | Targets táctiles `>= 44x44px` (`2.75rem`), ergonomía móvil sin scroll horizontal. |
| **4. Tiempo (Time)** | `[1-5]/5` | Feedback `< 100ms`, esqueletos de carga y estados de progreso claros. |
| **5. Comportamiento** | `[1-5]/5` | Visibilidad del estado del sistema y consecuencias predecibles por acción. |

**Escala de calificación global (Suma A + B + C sobre 85 pts):**
- **75 a 85 pts (Grado A - Excelente):** UX de estándar industrial; solo optimización continua.
- **65 a 74 pts (Grado B - Bueno):** Base sólida con fricciones puntuales corregibles.
- **55 a 64 pts (Grado C - Aceptable):** Funcional pero con brechas importantes de usabilidad/encontrabilidad.
- **45 a 54 pts (Grado D - Deficiente):** Fricciones severas; requiere rediseño estructural antes de escalar.
- **< 45 pts (Grado F - Crítico):** Experiencia rota; bloquea conversión y retención.

---

## 3. Estructura obligatoria del reporte de auditoría y rediseño

El entregable debe generarse como documento Markdown estructurado bajo este esquema:

```markdown
# Reporte de auditoría y rediseño de UX - [Nombre del producto]
## Puntaje general de salud UX: [XX]/85 ([XX]% - Grado [A-F])

### 1. Resumen ejecutivo y diagnóstico
- **Fortalezas actuales:** [Qué conservar sin tocar]
- **Brechas críticas:** [Dónde pierde usuarios o valor el sistema hoy]

### 2. Matrices de puntuación (Marcos A, B y C)
[Incluir las 3 tablas completas con puntajes y hallazgos específicos del producto]

### 3. Matriz de problemas priorizados (P0 a P3)
| ID | Problema detectado | Marco violado | Impacto usuario | Impacto negocio | Esfuerzo | Prioridad |
| :--- | :--- | :--- | :---: | :---: | :---: | :---: |
| #1 | [Descripción] | [Ej: Tolerancia al error] | Alto | Alto | Medio | **P0 (Bloqueante)** |
| #2 | [Descripción] | [Ej: Encontrabilidad] | Alto | Medio | Bajo | **P1 (Sprint actual)** |

### 4. Propuestas concretas de rediseño
Para cada problema `P0` y `P1`, especificar:
- **Estado actual (fricción):** [Qué ocurre hoy]
- **Solución de diseño propuesta:** [Cambio concreto en arquitectura, flujo o componente]
- **Impacto esperado en métricas:** [Ej: subir Encontrabilidad de 2/5 a 4/5 y reducir clics en 40%]

### 5. Hoja de ruta de remediación
- **Fase 1 (Quick wins y P0):** Correcciones inmediatas de alto impacto y bajo/medio esfuerzo.
- **Fase 2 (Reestructuración P1):** Rediseño de flujos, navegación y adaptación móvil.
- **Fase 3 (Pulido P2/P3):** Refinamiento visual, micro-interacciones y pruebas de usabilidad (N=5-8).
```

---

## Guardrails del motor
- **NUNCA** puntúes sin anclar la nota a una evidencia concreta de la interfaz o flujo analizado.
- **NUNCA** entregues diagnósticos sin su contraparte accionable de rediseño y estimación de esfuerzo.
- **SIEMPRE** evalúa la experiencia móvil con rigor específico (targets táctiles, carga cognitiva por pantalla y navegación al alcance del pulgar).

---
*Framework Baraldi v2.31.0 · skills/methodology/02_system_analysis/skills/engines/ux_audit_rethink_engine/SKILL.md*
