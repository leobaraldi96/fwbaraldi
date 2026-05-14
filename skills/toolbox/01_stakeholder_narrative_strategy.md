---
name: stakeholder-narrative-strategy
description: >
  Estrategia de comunicación y narrativa para presentaciones a Stakeholders.
  Transforma hallazgos técnicos en historias de impacto de negocio.
  Úsala para preparar reuniones de cierre de etapa, pedidos de inversión, alineación de equipo
  o cuando el usuario pide armar una deck, preparar un Q&A o defenderse ante stakeholders tóxicos.
  Keywords: pitch, stakeholders, presentación, narrativa, audiencia, Q&A, deck, Anti-Lucio, Anti-Charly.
version: "2.26.3"
---


## Rol de esta herramienta
Esta skill actúa como un **Consultor de Comunicación Estratégica**. Su misión es asegurar que el trabajo realizado en el framework no solo sea técnicamente impecable, sino que sea comprendido y aprobado por quienes toman las decisiones.

---

## Protocolo de Preparación (4 Bloques)

### 1. Diagnóstico de Audiencia y Objetivo
Antes de proponer la narrativa, la IA debe preguntar o inferir:
- **¿Quiénes están en la sala?** (Ej: Fundadores, Inversores, Devs, PMs).
- **¿Qué decisión necesitamos de ellos?** (Ej: Aprobación de presupuesto, elegir un camino de producto, validación de visión).
- **¿Cuál es el "Elefante en la sala"?** (Objecciones esperadas o temas sensibles).

### 2. Estructura Narrativa (The Hook & The So What)
No mostramos proceso, mostramos **Outcomes**.
- **The Hook (1-2 min):** Por qué este proyecto es vital para el negocio hoy.
- **The Evidence (10-15 min):** Hallazgos clave (Research/Logic) conectados a oportunidades.
- **The "So What" (5-7 min):** Qué significa esto para el futuro y qué recomendamos hacer.
- **The Ask (Cierre):** Call to Action claro.

### 3. Adaptación de Mensaje por Rol
- **Ejecutivos (C-Level):** Foco en ROI, impacto estratégico y riesgos. Lenguaje de alto nivel.
- **Product Managers:** Foco en trade-offs, priorización y necesidades del usuario.
- **Ingeniería:** Foco en factibilidad técnica, deuda técnica y escalabilidad.
- **Diseñadores:** Foco en patrones, consistencia y calidad de interacción.

### 4. Entrenamiento de Q&A (Simulación de Crisis)
La IA debe generar una lista de preguntas difíciles basadas en el proyecto actual y proponer respuestas cortas y basadas en data.
- *"¿Cómo sabemos que N=8 es suficiente?"*
- *"¿Por qué esto tarda 3 meses y no 1?"*
- *"¿Qué pasa si la competencia saca X mañana?"*

---

## Formatos de Entrega Disponibles

### 1. Protocolo de Research Readout (Deck Ejecutiva)
Si se solicita una presentación de resultados, la IA generará la estructura slide por slide con este estándar:

| Slide | Contenido Crítico | Regla de Oro |
| :--- | :--- | :--- |
| **0. Portada** | Título del proyecto + Fecha + Propósito en una oración. | - |
| **1. TL;DR** | Máximo 3 bullets con los hallazgos más críticos del ciclo. | Si solo leen esto, deben entender el resultado. |
| **2. Overview** | Método, N de participantes, fechas y preguntas respondidas. | Brevedad total (1 slide). |
| **3. Hallazgos** | **Insight-led Headline** (Ej: "El usuario confía, pero no entiende") + 3-5 bullets + 2 Citas reales + Implicancia de diseño. | Cada slide es una unidad de decisión. |
| **4. Acciones** | Lista priorizada (3-5) de pasos a seguir para el equipo de producto. | Conectadas directamente a los hallazgos. |
| **5. Open Questions** | Qué no sabemos todavía y cuál es el próximo paso para saberlo. | Muestra honestidad y visión a futuro. |
| **6. Appendix** | Data demográfica, matrices completas o citas extra. | Solo para consulta si alguien pregunta. |

**Mandatos de Redacción:**
- **Speaker Notes:** Cada slide debe incluir un párrafo de guión sugerido para el orador (3-5 oraciones).
- **So What?:** No describas "qué pasó", explicá "qué significa" para el negocio.
- **Voz Activa:** Lenguaje directo y sin jerga innecesaria.

---

## 2. Guía de Narrativa y Talking Points
Talking points por sección del informe técnico con transiciones sugeridas para mantener el engagement.

---

## 3. Cheat Sheet de Q&A (Simulación de Crisis)
La IA debe generar una lista de preguntas difíciles basadas en el proyecto actual y proponer respuestas cortas y basadas en data.
- *"¿Cómo sabemos que N=8 es suficiente?"*
- *"¿Por qué esto tarda 3 meses y no 1?"*
- *"¿Qué pasa si la competencia saca X mañana?"*

---

## 4. Protocolo de Resumen Ejecutivo de Alto Impacto (The 3-Minute Read)
Todo artefacto principal del framework debe incluir este resumen al inicio. El objetivo es que un ejecutivo entienda el valor y tome una decisión sin leer el resto del documento.

**Estructura Obligatoria:**

1. **Contexto (1-2 frases):** Qué motivó este trabajo y qué problema estamos resolviendo.
2. **The "So What?" (Impacto):** Por qué esto es crítico para el negocio hoy. Qué pasa si no actuamos vs. qué ganamos si lo hacemos.
3. **Hallazgos y Recomendaciones (3-5 bullets):** Insights más potentes y datos críticos, priorizados por su impacto en los OKRs.
4. **Decisión o Acción Requerida:** Qué necesitamos específicamente (Aprobación, Presupuesto, Cambio de Prioridad). ¿Quién decide y para cuándo?
5. **Next Steps (2-3 bullets):** Acciones inmediatas, dueños y timeline.
6. **Appendix Reference:** Dónde profundizar si se requiere el detalle técnico.

**Lineamientos de Redacción:**
- **Longitud:** Máximo 1 página (300-400 palabras).
- **Lenguaje:** Cero jerga técnica. Lenguaje de negocios simple y directo.
- **Voz Activa:** "Recomendamos X" en lugar de "Se recomienda X".
- **Bottom Line Upfront:** Empezar con la conclusión, no con la metodología.

---

## 5. Protocolo de Traducción de Feedback de Stakeholders
Utiliza este protocolo cuando recibas feedback vago, contradictorio o subjetivo (ej: "hacelo más pop", "no me fluye"). Tu objetivo es traducir la emoción del stakeholder en requerimientos técnicos.

### A. Interpretación de Intenciones (El "Qué quiso decir")
La IA debe analizar el feedback buscando:
- **Preocupación subyacente:** ¿Le preocupa la conversión, la estética o la complejidad técnica?
- **Objetivo no declarado:** ¿Está intentando alinearse con un capricho personal o con una métrica real?

### B. Guía de Diseño Accionable
- **Cambios Sugeridos:** Traducir "hacelo más moderno" a propuestas de jerarquía visual, tipografía o uso de espacios.
- **Preguntas de Clarificación:** Guión para que el humano profundice: *"Cuando decís [X], ¿te referís a mejorar el tiempo de carga o a simplificar los pasos del formulario?"*

### C. Priorización y Veredicto Estratégico
- **High Priority:** Feedback que afecta directamente los OKRs de la Etapa 01.
- **Medium Priority:** Mejoras de UX que no bloquean el lanzamiento.
- **Push Back (Defensa):** Si el feedback contradice la evidencia del research o los OKRs, generar el argumento lógico para **no** realizar el cambio.

### D. Notas de Implementación
- Implicancias en diseño y factibilidad técnica.
- Impacto esperado en la métrica North Star.

---

## 6. Protocolo Anti-Lucio (Gestión de la Ambigüedad)
Utiliza estas tácticas cuando te enfrentes a líderes con mala comunicación, que evitan definiciones o que son obstructivos. Tu objetivo es **forzar la claridad mediante la documentación**.

### Táctica 1: La Confirmación por Ausencia (The Silent Approval)
Si un stakeholder no da feedback o evita reunirse:
- Enviar un resumen ejecutivo con las decisiones tomadas.
- **Cláusula de cierre:** *"A menos que recibamos comentarios o bloqueos para el día [Fecha/Hora], procederemos con este camino para no comprometer el timeline del proyecto"*.
- Esto traslada la responsabilidad de la demora al stakeholder de forma profesional.

### Táctica 2: El Reencuadre de Negocio (OKR Shield)
Si el stakeholder critica por gusto personal o de forma subjetiva:
- Devolver la conversación a la Etapa 01: *"Entiendo que te gustaría ver [X], pero basándonos en los OKRs aprobados y la métrica North Star, el foco actual es [Y]. ¿Querés que re-prioricemos los objetivos del trimestre para incluir esto?"*.
- Esto expone el costo de oportunidad de su pedido.

### Táctica 3: Minutas de Decisión Inmediatas
Nunca salgas de una reunión sin un "Acta de Decisiones" enviada en los primeros 30 minutos:
- *"En la reunión de hoy se definió [A, B y C]. Esto anula los supuestos anteriores"*.
- Evita que el stakeholder cambie de opinión o diga que "él no dijo eso".

### Táctica 4: El "Brag Document" como Seguro de Vida
Si el líder no valora tu trabajo, utilizá la **Skill 03 (Personal Impact Report)** de forma constante. Mantené un registro de decisiones tomadas vs. resultados obtenidos. Si la comunicación falla por su parte, tu rastro de data es impecable.

### Táctica 5: El Escudo Anti-Charly (Transparencia y Atribución)
Para el jefe que manipula la información, se adueña de los logros y evita las reuniones de alto nivel:
- **Atribución Explícita:** Todo artefacto generado por el framework debe incluir un bloque de **"Autoría y Colaboradores"**. Esto blinda tu trabajo contra el robo de méritos.
- **Comunicación en "Broadcast":** Las decisiones críticas y los resúmenes ejecutivos se envían por canales compartidos (Slack/Email con copia). Carlos no puede cambiar la historia si el registro es público y simultáneo.
- **Dashboard de Verdad Única:** Al usar el **Pilar 3 de la Skill 05**, los números son visibles para todos. Carlos no puede inventar un éxito o culpar a otros de un error si los gráficos de performance están abiertos al equipo.

### Táctica 6: El Filtro Anti-Max (Colaboración Forzada y Evidencia)
Para el colaborador tóxico que socava al equipo, desprecia el conocimiento ajeno y compite individualmente:
- **Centralización del Conocimiento (Engram):** El framework obliga a que todo hallazgo se guarde en la memoria compartida. Se elimina el poder del "dueño de la información".
- **Estandarización OPIR:** Las opiniones de Maxi deben pasar por el filtro de **Observación -> Patrón -> Implicancia -> Recomendación**. Si no tiene evidencia, su crítica es descartada por el sistema.
- **Visibilidad de Participación:** El uso de documentos compartidos deja rastro de quién asistió, quién aportó y quién está haciendo "vacío". La toxicidad se combate con la luz de la transparencia operativa.

## 7. Protocolo de Alineación y Toma de Decisiones Estratégicas
Utiliza este protocolo cuando el proyecto llegue a un punto de bifurcación crítica o cuando existan opiniones encontradas entre stakeholders. Tu objetivo es **forzar una decisión basada en data y trade-offs claros**.

### A. Análisis de Escenarios (Las Opciones)
La IA debe presentar al menos 2-3 caminos posibles con este desglose:
- **Pros y Contras:** Beneficios inmediatos vs. sacrificios.
- **Riesgos y Mitigaciones:** Qué puede salir mal y cómo lo arreglaremos.
- **Requerimiento de Recursos:** Tiempo, equipo y presupuesto estimado por opción.

### B. Recomendación y Racional (The Logic)
- **Opción Recomendada:** Cuál elegimos y por qué es la más alineada con los OKRs de la Etapa 01.
- **Trade-offs Explícitos:** Declarar qué estamos optimizando (ej: velocidad) y a qué estamos renunciando (ej: escalabilidad total inicial).

### C. Análisis de Impacto Multidimensional
- **Impacto al Usuario:** ¿Mejora o empeora su fricción?
- **Impacto al Negocio:** ROI esperado y alineación con la North Star.
- **Impacto Técnico:** Deuda técnica generada o necesidades de infraestructura.

### D. Preguntas Abiertas y Asunciones
- **Gaps de Información:** Qué no sabemos todavía y cómo pensamos descubrirlo.
- **Asunciones Críticas:** Qué estamos dando por sentado para que esta decisión sea válida.

---

## Reglas de Oro de la Comunicación Baraldi
- **Data con Historia:** Un gráfico sin una cita de usuario es solo un número. Una cita sin un número es solo una anécdota. Usar ambos.
- **Cero Jerga:** Si no lo entiende un stakeholder no técnico, la comunicación falló.
- **Honestidad Radical:** Si algo no se sabe o la evidencia es débil, se declara como "Riesgo a monitorear". La confianza se construye con honestidad, no con optimismo falso.

---

*Framework Baraldi v2.26.3 · toolbox/01_stakeholder_narrative_strategy.md*
