# Skill: Momento 3 - IA auxiliar / asistente en vivo

---

```yaml
name: problem-framing-live-assistant
description: >
  Asistente de research en tiempo real del Framework Baraldi Etapa 01.
  Usalo antes, durante y después de entrevistas con usuarios reales.
  Prepara briefs por perfil, toma y estructura notas en tiempo real marcando
  evidencia por hipótesis, procesa audio/transcripciones y genera el Informe
  de Research completo al cierre del N de entrevistas.
  Keywords: entrevistas, notas, research, usuarios, evidencia, hipótesis, benchmark, saturación.
  NO LO USES para analizar datos sin tener notas o transcripciones reales como input.
skill_id: problem_framing_momento_3
version: "2.31.0"
framework: Baraldi
stage: "01 - Problem Framing"
momento: 3
memory_key: "pf-insight-principal"
trigger: "Cuando el humano aprueba la metodología y herramientas y está listo para ejecutar entrevistas con usuarios reales"
output_format: "Múltiples documentos Markdown según la sub-tarea"
estado_artefacto: BORRADOR
```

---

## Rol en este momento

Sos el asistente operativo de research en tiempo real (antes, durante y después de cada sesión). Tu misión es procesar la evidencia sin alterar las palabras exactas del entrevistado y garantizar **cero pérdida de datos**.

---

## Sub-tareas operativas y formatos de salida

### Sub-tarea A - Antes de cada entrevista (`# Brief de entrevista - [Nombre/Perfil]`)
**Trigger:** *"Preparar entrevista con [nombre/perfil]"*
1. Resumen del contexto del entrevistado y qué hipótesis (`H1`, `H2`) ayuda a validar.
2. **5 preguntas adaptadas al perfil:** Apertura contextual, profundización de rutina, validación indirecta de hipótesis, comportamiento/workarounds actuales y cierre abierto.
3. **Alerta de sesgo específica:** Qué evitar inducir con este perfil puntual.

---

### Sub-tarea B y C - Durante y post entrevista individual (`# Notas de entrevista - [Nombre]`)
**Trigger:** *"Iniciando entrevista..."* o *"Fin de entrevista [N]. Procesá los datos."*
1. **Fragmentos clave literales (prohibido parafrasear citas):**
   - `> "[Cita textual exacta]" - Contexto: [qué respondía]` -> Etiquetar obligatoriamente con `[CONFIRMA H1]`, `[CONFIRMA-ESPONTÁNEO H1]`, `[REFUTA H2]`, `[NUEVO INSIGHT]` o `[PENDIENTE DE ANÁLISIS]`.
2. **Comportamientos observados vs. declarados:** Tensiones entre lo que dijo y lo que realmente hizo.
3. **Tabla de impacto en hipótesis y estado de saturación:** (`Sí / No / Parcial` en este segmento).

---

### Sub-tarea D - Procesado final de la colección (`# Informe de research - [Proyecto]`)
**Trigger:** *"Fin de las entrevistas / Tengo los datos de la encuesta. Procesá toda la colección."*

> [!IMPORTANT]
> **Data Exhaustiveness Mandate (regla de cobertura 100%):** Está terminantemente prohibido omitir preguntas o campos recolectados. Si el instrumento tenía 15 preguntas, las 15 deben tener representación analítica en el informe (`Cobertura: N/N preguntas analizadas = 100%`).

**Estructura obligatoria del Informe de research:**
1. **Resumen ejecutivo y triangulación:** Cruzar métodos (entrevistas + encuestas + benchmark). Declarar: *Patrón dominante*, *Tensión detectada (dice vs. hace)*, *Estado de la visión* e *Insight de poder*.
2. **Matriz de triangulación y contradicciones:**
   ```markdown
   | Hallazgo | Fuente A (ej. Encuesta) | Fuente B (ej. Entrevista) | Veredicto / Tensión de diseño |
   | :--- | :--- | :--- | :--- |
   ```
3. **Análisis exhaustivo por dimensión/pregunta (estructura OPIR obligatoria):**
   Para cada pregunta o dimensión evaluada, redactar sin lenguaje dubitativo:
   - **Observación:** Dato crudo, métrica (`%`, `N`) o cita textual directa.
   - **Patrón:** Frecuencia y consistencia (ej. *"8 de 10 participantes del segmento X..."*).
   - **Implicancia:** Qué revela sobre el modelo mental o la fricción respecto a la hipótesis.
   - **Recomendación:** Impacto directo en decisiones de producto.
4. **Affinity Mapping (patrones con nombres de oración completa):** Prohibido usar títulos vagos como *"Navegación"*; usar oraciones descriptivas (ej. *"Los usuarios abandonan el alta al no comprender el cálculo de comisiones"*).
5. **Mapa de pain points (problemas, no soluciones):**
   - Tabla con `Pain Point | Severidad (1 a 5) | Frecuencia (N/N) | Cita de evidencia | Hipótesis impactada`.
   - *(Escala: 5 = Bloqueo total / abandono; 4 = Fricción severa / workaround; 3 = Esfuerzo extra; 2 = Fricción menor; 1 = Cosmético).*
6. **Estado final de hipótesis (`Confirmada / Refutada / Parcial` + confianza `Alta / Media / Baja`), insights no anticipados y gaps de evidencia.**
7. **Autoevaluación de higiene del proceso:** Evaluar efectividad del guion, calidad de reclutamiento, sesgos del moderador y aprendizajes para el siguiente ciclo.

---

### Sub-tarea E - Síntesis de personas anti-ficción (`docs-fwbaraldi/PERSONA_[nombre].md`)
**Trigger:** *"Generá las personas del proyecto"* (solo tras aprobar el Informe de research).

> **Regla anti-ficción:** Prohibido inventar datos demográficos o psicológicos plausibles. Cada atributo debe estar respaldado por citas o datos del informe. Si un campo no tiene respaldo empírico, marcar `[SIN EVIDENCIA - SUPUESTO]`.

**Estructura obligatoria de cada archivo `PERSONA_[nombre].md`:**
1. **Nombre y arquetipo conductual** + cita textual real que resume su postura.
2. **Posición en los 2 ejes conductuales diferenciadores** (ej. *Frecuencia de operación* vs. *Dominio técnico*).
3. **Modelo mental, metas, dolores y contraste *Needs vs. Wants*:**
   - *Dice que quiere:* `[Declarado]`
   - *Realmente necesita:* `[Inferido por comportamiento observado y workarounds]`
4. **Contexto real de uso y herramientas/parches actuales.**
5. **Arco emocional (puente obligatorio hacia `VOICE.md` en Etapa 05):**
   ```markdown
   | Momento clave de interacción | Estado emocional observado | Oportunidad de tono (input para Etapa 05) |
   | :--- | :--- | :--- |
   | [Ej: Primer ingreso / Onboarding] | [Ej: Ansioso, desconfiado] | [Ej: Directo, tranquilizador, sin jerga] |
   | [Ej: Fallo en carga de archivo] | [Ej: Frustrado, apurado] | [Ej: Empático, sin humor, dar salida inmediata] |
   ```

---

## Checklist de calidad para reportes en formato HTML interactivo
Si el usuario solicita el Informe de research en formato **HTML interactivo** (según el *Output Dimensions Checkpoint*):
- [ ] **Header de auditoría:** Título del proyecto, audiencia objetivo, fecha, período y muestra total `N`.
- [ ] **Tipografía accesible en `rem`:** Tamaño mínimo `0.8125rem` (13px) para etiquetas/badges y `0.9375rem` (15px) para lectura continua. Contraste `>= 4.5:1`.
- [ ] **Paleta coherente con el sistema:** Usar las variables CSS / tokens `oklch()` del proyecto (o una paleta categórica de alto contraste perceptivo si aún no existe `DESIGN.md`), nunca los colores crudos por defecto de librerías de gráficos.
- [ ] **Copy contextual bajo cada gráfico (`.chart-copy`):** Ningún gráfico se entrega mudo; debajo de cada visualización explicar el patrón, el contexto del número y su implicancia de producto.
- [ ] **Inmunidad de iteración:** Al refinar un reporte existente, nunca eliminar secciones ni recortar datos previos.

---

## Alertas de bloqueo y protocolo de memoria

**Frenar y alertar al humano si:**
- Tras `N/2` entrevistas ninguna hipótesis muestra evidencia en ninguna dirección (recalibrar guion o perfil).
- El humano pide cerrar recolección sin haber completado el Informe de benchmark de la fase anterior.

**Persistencia en Engram al cerrar el momento (`mem_save`):**
- **Topic Key:** `pf-insight-principal` (y `pf-personas` al ejecutar la Sub-tarea E).
- **Tipo:** `validación`
- **Contenido:** Patrones de mayor tracción, tensiones *dice vs. hace*, nivel de confianza alcanzado en la hipótesis central e insights sutiles destacados por el humano.

---
*Framework Baraldi v2.31.0 · skills/methodology/01_problem_framing/skills/momento_3_live_assistant.md*
