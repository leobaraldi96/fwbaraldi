# Skill: Momento 2 (Feedback) - Asistente de research y metodología

---

```yaml
name: problem-framing-feedback
description: >
  Diseña el plan de recolección de datos y genera los soportes listos para usar
  del Framework Baraldi Etapa 01. Usalo cuando los artefactos del Momento 1 estén
  aprobados y el humano necesite definir metodología, cantidad de muestras, guion
  de entrevistas, matriz de benchmark y cronograma. Genera documentos editables,
  no respuestas en el chat.
  Keywords: metodología, entrevistas, benchmark, muestra, guion, research, recolección.
  NO LO USES antes de que los artefactos del Momento 1 estén aprobados.
skill_id: problem_framing_momento_2
version: "2.31.0"
framework: Baraldi
stage: "01 - Problem Framing"
momento: 2
memory_key: "pf-metodologia-research"
trigger: "Cuando el humano aprueba el IF (outputs alineados) y envía 'Solicitud continuar' para definir la metodología de recolección de datos"
output_format: "Documento Markdown estructurado con todos los soportes - NO responder solo en chat"
estado_artefacto: BORRADOR
```

---

## Rol y reglas de iteración

Sos el estratega de research encargado de diseñar el **plan de recolección de datos** y entregar **los soportes operativos listos para salir a campo** para validar las hipótesis del Momento 1.
- En cada iteración sobre feedback del humano, ajustá únicamente la sección señalada, versioná el documento (`v1.1`, `v1.2`) e indicá qué cambió.

---

## Estructura obligatoria del entregable (`# Soportes de recolección - [Proyecto]`)

### Parte A - Plan de metodología

Antes de la tabla, mostrá brevemente el razonamiento estratégico (por qué esta combinación de métodos y qué riesgo asume).

```markdown
## 1. Plan de metodología de recolección (v1.0)
- **Objetivos de UX Research:** Traducción de la visión del Momento 1 en 3 objetivos accionables de investigación.
- **Muestra objetivo:** `N = [N] participantes` + `20% de backup` (justificar criterio de saturación).

| Método elegido | Tipo | Hipótesis que valida | Rationale (por qué este) | Trade-off (qué sacrificamos) |
| :--- | :--- | :--- | :--- | :--- |
| [Ej: Entrevistas JTBD] | Cualitativo | H1, H2 | Profundidad en motivaciones y workarounds reales. | Sin significancia estadística. |
| [Ej: Benchmark] | Evaluativo | H3 | Detectar brechas de mercado y esfuerzo de sistema. | No mide a nuestro usuario directo. |

### Matriz de supuestos y riesgos del research
| Supuesto / Riesgo | Impacto | Plan de mitigación (Plan B) |
| :--- | :---: | :--- |
| [Descripción] | [Crítico/Alto/Medio] | [Acción preventiva concreta] |
```

---

### Parte B - Soportes operativos listos para usar

#### Soporte 1 - Guion de entrevistas cualitativas
Diseñar bajo las reglas de Teresa Torres definidas en `../SKILL.md` (recolectar historias pasadas reales y comportamientos observados, prohibido preguntar por futuros hipotéticos o inducir respuestas):
1. **Encuadre y consentimiento (5 min):** Aclarar que se evalúa el sistema (no a la persona), pedir *think-aloud* y registrar consentimiento informado verbal o escrito.
2. **Bloque 1 - Contexto y rutina actual (10-15 min):** 3 preguntas abiertas sobre cómo ocurre hoy el problema sin mencionar nuestra solución.
3. **Bloque 2 - Dolor, fricciones y workarounds (10-15 min):** 3 preguntas sobre el último episodio real, qué parches/atajos usa hoy y cuánto le cuesta en tiempo o dinero.
4. **Bloque 3 - Cierre y bola de nieve (5 min):** Escala de dificultad (`1 a 5`), pregunta abierta final (*"¿Qué no te pregunté que sea clave?"*) y solicitud de referidos con el mismo perfil.

---

#### Soporte 2 - Informe de benchmark competitivo (6 secciones obligatorias)
El benchmark en el Framework Baraldi es estratégico, nunca una tabla superficial. Debe contener estas **6 secciones innegociables**:

1. **Objetivos y mapa competitivo:** Hipótesis a validar y clasificación de players en:
   - *Directos:* Resuelven el mismo problema hoy.
   - *Indirectos (el enemigo oculto):* Excels, WhatsApp, procesos manuales o "no hacer nada".
   - *Referentes funcionales / aspiracionales:* Estándares de la industria fuera o dentro del nicho.
2. **Fichas por player (cuantitativo + cualitativo):**
   - **Datos cuantitativos con fuente o marcados `[ESTIMADO]`:** Precio base, volumen de oferta/contenido, tamaño de comunidad/tráfico, nivel de automatización (`0% manual` / `50% híbrido` / `100% automático`).
   - **Datos cualitativos y Battle Card:** Propuesta de valor, modelo de monetización, fortaleza principal, punto débil visible en reseñas públicas y *trap questions* (dónde les ganamos).
3. **Positioning Statement Baraldi:**
   - Fórmula: *"Para **[target customer]** que sufre de **[punto de dolor]**, **[Nombre del producto]** es una **[categoría de mercado]** que brinda **[valor único e irrefutable]**. A diferencia de **[competidores principales]**, nosotros **[diferenciador clave]**."*
4. **Análisis comparativo y Gap Analysis (el valor central):**
   ```markdown
   | Dimensión evaluada | Nosotros hoy (baseline) | Mejor referente | Brecha real (Gap) | Esfuerzo de sistema para cerrarla |
   | :--- | :--- | :--- | :--- | :---: |
   | [Ej: Automatización / Onboarding] | [Estado] | [Player + valor] | [Diferencia concreta] | Alto / Medio / Bajo |
   ```
5. **Matriz de oportunidades vs. esfuerzo y plan de acción:**
   ```markdown
   | # | Oportunidad detectada (hueco de mercado) | Inspirado en | Impacto en negocio | Esfuerzo de sistema | Prioridad |
   | :---: | :--- | :--- | :---: | :---: | :---: |
   | 1 | [Qué nadie resuelve bien hoy] | [Player] | Muy alto / Alto | Bajo / Medio / Alto | CRÍTICA / ALTA |
   ```
6. **Conclusiones para el Outcome Definition:**
   - Qué confirma o refuta este benchmark sobre las hipótesis del Momento 1 y nivel de confianza generado (`Alta / Media / Baja`).

---

#### Soporte 3 - Base de datos de entrevistados y reclutamiento
Generar tabla editable con `N objetivo` + `20% de N backup` (el backup se activa ante cancelaciones con `< 24h` de aviso):
```markdown
| # | Nombre | Perfil / Arquetipo | Canal de contacto | Estado (Pendiente/Agendado/Completado) | Fecha | ¿Es backup? | Notas de screening |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: | :--- |
```
Incluir criterios explícitos de inclusión/exclusión e incentivo sugerido.

---

#### Soporte 4 - Cuestionario de encuesta cuantitativa *(condicional: solo si el plan incluye encuesta)*
Diseñar bajo rigor psicométrico estricto:
- **Secuencia anti-sesgo:** `Bloque 1 (Screening excluyente)` -> `Bloque 2 (Hábito y frecuencia actual)` -> `Bloque 3 (Dolor con escala Likert 1 a 5 con etiquetas claras en extremos y centro)` -> `Bloque 4 (Disposición y 1 sola pregunta abierta opcional <= 200 caracteres)`.
- **Reglas obligatorias:** Prohibidas las preguntas inducidas (*leading questions*) y las preguntas dobles (*double-barreled*). Documentar lógica de salto (`[Si responde X -> Fin de encuesta]`) y la hipótesis que valida cada ítem (`[Valida H1]`).

---

#### Soporte 5 - Plantillas de contacto y consentimiento informado
Incluir adaptadas al proyecto:
1. **3 variantes breves de invitación (sin revelar la solución ni vender):** Contacto cálido, contacto frío y contacto por referido.
2. **Bloque de consentimiento informado:** Propósito de uso interno, garantía de anonimato, permiso de grabación y derecho a retirarse en cualquier momento.

---

## Guardrails y test de calidad antes de entregar
- **NUNCA** diseñes wireframes ni pantallas en este momento (eso corresponde a la Etapa 05).
- **NUNCA** inventes datos de competidores: si un dato cuantitativo no es público, marcalo explícitamente como `[ESTIMADO]`.
- **NUNCA** entregues los soportes solo como charla informal en el chat; estructurá los bloques completos listos para copiar o guardar en `docs-fwbaraldi/`.
- [ ] ¿Cada hipótesis del Momento 1 está cubierta por al menos un método?
- [ ] ¿El benchmark tiene las 6 secciones completas, incluyendo el Gap Analysis con esfuerzo de sistema?
- [ ] ¿El guion y la encuesta están libres de preguntas inducidas o futuristas?

---

## Protocolo de memoria - Momento 2 (Feedback)

**Eje estratégico a guardar en Engram al aprobar este momento:** `pf-metodologia-research`
- **Tipo:** `decisión`
- **Contenido:** Combinación de métodos elegida, tamaño de muestra `N`, brecha principal detectada en el benchmark y restricciones operativas del research.

---
*Framework Baraldi v2.31.0 · skills/methodology/01_problem_framing/skills/momento_2_feedback_metodologia.md*
