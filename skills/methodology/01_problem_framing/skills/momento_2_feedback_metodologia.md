# Skill: Momento Feedback — Asistente de Research y Metodología

---

```yaml
name: problem-framing-feedback
description: >
  Diseña el plan de recolección de datos y genera los soportes listos para usar
  del Framework Baraldi Etapa 01. Usalo cuando los artefactos del Momento 1 estén
  aprobados y el humano necesite definir metodología, cantidad de muestras, guión
  de entrevistas, matriz de benchmark y cronograma. Genera documentos editables,
  no respuestas en el chat.
  Keywords: metodología, entrevistas, benchmark, muestra, guión, research, recolección.
  NO LO USES antes de que los artefactos del Momento 1 estén aprobados.
skill_id: problem_framing_momento_2
version: "2.26.12"
framework: Baraldi
stage: "01 - Problem Framing"
momento: 2
memory_key: "pf-metodologia-research"
trigger: "Cuando el humano aprueba el IF (outputs alineados) y envía 'Solicitud continuar' para definir la metodología de recolección de datos"
input_requerido:
  - Artefactos del Momento 1 aprobados
  - Hipótesis central y secundarias definidas
  - Contexto del proyecto (industria, geografía, tipo de usuario)
  - Restricciones conocidas (tiempo, presupuesto, acceso a usuarios)
output_format: "Documento Markdown estructurado con todos los soportes — NO responder solo en chat"
estado_artefacto: BORRADOR
```

---

## Rol en este momento

Sos el asistente de research especializado en metodología. Tu trabajo es diseñar el **plan de recolección de datos** que va a validar las hipótesis definidas en el Momento 1.

No ejecutás el research todavía. Diseñás cómo se va a ejecutar — qué métodos, cuántas muestras, con qué instrumentos, en qué orden y con qué criterio de cierre.

Y además de diseñarlo, **generás los soportes listos para usar**: los formularios, guiones y matrices que el humano va a tener en la mano cuando salga a validar.

---

## Proceso de iteración / ajuste / calibración

Este momento puede activarse múltiples veces. El humano puede rechazar la propuesta inicial y pedirte ajustes. Cada iteración:

1. Recibís el feedback específico del humano
2. Ajustás solo lo que fue señalado — no rehacés todo
3. Versionás el documento: v1.1, v1.2, etc.
4. Indicás claramente qué cambió respecto a la versión anterior

---

## Qué generás en este momento

### Parte A — Plan de metodología

**Proceso visible antes del output:**
Antes de proponer la metodología, mostrás brevemente:
- Por qué esta combinación de métodos y no otras
- Qué hipótesis cubre cada método
- El riesgo de la propuesta (qué puede fallar)

**Output — Plan de metodología:**
**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
```markdown
## Plan de Metodología de Recolección
### Versión: [v1.0] | Nivel de Confianza Esperado: [Alto/Medio]

---

### 1. Objetivos de UX Research (Traducción de Negocio)
> Traducción de la Visión del Momento 1 a objetivos accionables de investigación.
- **Objetivo 1:** [ej. Identificar las fricciones críticas en el proceso de carga de facturas]
- **Objetivo 2:** [ej. Validar si el valor percibido del dashboard justifica el modelo de suscripción]
- **Objetivo 3:** [ej. Mapear el ecosistema de herramientas actuales (workarounds) del usuario]

---

### 2. Métodos propuestos y Rationale
| Método | Tipo | Rationale (Por qué este) | Tradeoff (Qué sacrificamos) |
|---|---|---|---|
| Entrevistas | Cualitativo / Generativo | Profundidad en el "por qué" y dolores no declarados. | Menor representatividad estadística. |
| Benchmark | Evaluativo | Entender el estándar de la industria y gaps de oportunidad. | No da data sobre nuestro usuario específico. |

---

### 3. Matriz de Supuestos y Riesgos
| Supuesto / Riesgo | Impacto | Mitigación (Plan B) |
|---|---|---|
| **Supuesto:** El usuario tiene acceso a PC durante la jornada. | Alto | Incluir pregunta de contexto en el screening. |
| **Riesgo:** Dificultad para reclutar perfiles C-Level. | Crítico | Activar incentivo premium o extender fase 1 semana. |

---

### 4. Detalles de Ejecución (Alcance y Cronograma)
- **Geografía/Territorios:** [donde]
- **Muestra Objetivo:** N=[N] participantes + 20% backup.
- **Tiempo estimado:** [N] días hasta Informe de Research.
```

---

### Parte B — Soportes listos para usar

Estos documentos van en el mismo entregable, en secciones separadas. Son documentos editables — el humano los refina antes de usar.

#### Soporte 1 — Guión de entrevistas cualitativas

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
```markdown
## Guión de Entrevistas Cualitativas
### Proyecto: [nombre] | Versión: [v1.0]

**Objetivo de la entrevista:**
[Una oración — qué queremos saber]

**Perfil del entrevistado:**
[Criterios de quién califica para ser entrevistado]

**Duración estimada:** [tiempo]

---

### Protocolo de Moderación Senior

#### 1. Bienvenida y Encuadre (5 min)
- **Rapport:** Crear un ambiente seguro y relajado.
- **Expectativas:** "Estamos testeando el sistema/idea, no a vos. No hay respuestas correctas ni incorrectas".
- **Think Aloud:** "Por favor, narrá en voz alta lo que vas pensando, sintiendo o buscando. Nos ayuda a entender tu proceso".
- **Consentimiento:** "Por motivos de investigación, estamos grabando esta sesión. ¿Estás de acuerdo?".

#### 2. Reglas de Oro para el Moderador (Higiene de Datos)
- **No guiar:** Evitar preguntas que sugieran una respuesta positiva. (Ej: "¿Te parece útil?" -> MAL. "¿Cómo describirías el valor de esto?" -> BIEN).
- **Abrazar el silencio:** Deja que el usuario piense. El silencio suele preceder al insight más valioso.
- **Neutralidad:** No defiendas el diseño ni muestres decepción ante la crítica.
- **Sondear el "Por qué":** Ante cualquier acción o comentario, preguntar "¿Qué te hace decir/hacer eso?".

#### 3. Estructura del Guión

### Bloque 1 — Contexto y comportamiento actual (10-15 min)
1. [Pregunta abierta sobre su rutina actual relacionada al problema]
2. [Pregunta sobre cómo resuelven hoy el problema — sin mencionar el producto]
3. [Pregunta sobre con qué frecuencia ocurre la situación]

### Bloque 2 — Dolor y fricción (10-15 min)
4. [Pregunta que explora el nivel de incomodidad — escala del 1 al 10 + por qué]
5. [Pregunta sobre qué intentaron hacer para resolverlo]
6. [Pregunta sobre qué sería diferente si se resolviera]

### Bloque 3 — Validación de valor digital (10 min)
7. [Pregunta indirecta sobre disposición al canal digital — sin sugerir la respuesta]
8. [Pregunta sobre experiencias previas con soluciones similares]

### Cierre y Post-Task Ratings (5 min)
9. **NPS/Ease:** "En una escala del 1 al 5, ¿qué tan fácil te resultó [tarea]?"
10. **Feedback abierto:** "¿Hay algo que no te pregunté y sientas que es importante?"
11. **Referidos:** "¿Conocés a alguien más con este perfil para hablar?"

---

**Checklist Técnico Pre-Sesión:**
- [ ] Grabación y audio verificados.
- [ ] Prototipo/Materiales en estado "limpio".
- [ ] Documento de consentimiento listo.
- [ ] Notificaciones en silencio.
```

#### Soporte 2 — Estrategia de Posicionamiento y Benchmark Competitivo
El benchmark en el Framework Baraldi no es descriptivo, es estratégico. Debe identificar el "hueco" en el mercado.

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**

## 1. Mapa del Paisaje Competitivo
- **Directos:** Quienes resuelven lo mismo hoy.
- **Indirectos (El enemigo oculto):** Procesos manuales, Excels, o el "No hacer nada" del usuario.
- **Adyacentes:** Amenazas emergentes que podrían entrar en nuestro espacio.

## 2. Matriz de Posicionamiento 2x2
La IA debe generar al menos una matriz visual (texto o tabla) cruzando dos ejes críticos (ej: Precio vs. Automatización / Facilidad vs. Poder).
- **Veredicto de la Matriz:** Por qué el cuadrante elegido es el lugar donde vamos a ganar.

## 3. Positioning Statement Baraldi
**Fórmula:** "Para **[target customer]** que sufre de **[punto de dolor]**, **[Nombre del Producto]** es una **[categoría de mercado]** que brinda **[valor único e irrefutable]**. A diferencia de **[competidores principales]**, nosotros **[diferenciador clave]**."

## 4. Battle Cards (Plan de Ataque)
Para cada competidor principal:
- **Su Pitch:** Cómo se venden ellos.
- **Nuestra Ventaja:** Por qué somos mejores en su terreno.
- **Trap Questions:** Preguntas que el usuario/cliente puede hacerle a la competencia para exponer sus debilidades frente a nosotros.

## 5. Tabla Comparativa de Features Estratégicas
| Capacidad / Feature | Nosotros | Competidor A | Competidor B | Valor para el Usuario |
| :--- | :---: | :---: | :---: | :--- |
| [Feature 1] | ✅ | ❌ | ⚠️ | [Impacto real] |
| [Feature 2] | ✅ | ✅ | ❌ | [Impacto real] |
**URL:** [url]

**Datos cuantitativos:**
| Dato | Valor | Fuente | Fecha |
|---|---|---|---|
| Precio base | [valor] | [web/review/estimado] | [fecha] |
| Volumen de contenido | [N cursos / videos / posts] | [fuente] | |
| Tamaño de comunidad | [seguidores / alumnos] | [fuente] | |
| Frecuencia de publicación | [posts/semana] | [fuente] | |
| Engagement promedio | [% likes/views] | [fuente] | |

**Datos cualitativos:**
- **Propuesta de valor:** [qué promete al usuario en una oración]
- **Modelo de negocio:** [cómo monetiza]
- **Fortaleza principal:** [en qué destaca claramente]
- **Punto débil visible:** [fricción o quejas en reviews públicas]
- **Cross-selling:** [integra productos/servicios complementarios — sí/no/cómo]
- **Validación técnica:** [cómo valida que el usuario aprendió o usó correctamente]
- **Nivel de automatización:** [0% manual / 50% híbrido / 100% automático — con descripción]
- **Práctica destacada a adaptar:** [qué haría exactamente este player que vale considerar]

---

## Sección 4 — Análisis comparativo y gap analysis

### Matriz de posicionamiento
| Player | Tipo | Precio | Contenido | Automatización | Validación técnica | Cross-sell |
|---|---|---|---|---|---|---|
| [Nuestro proyecto] | — | [baseline] | [baseline] | [baseline] | [baseline] | [baseline] |
| [Player 1] | | | | | | |

### Gap Analysis — distancia real con cada referente
| Dimensión | Nosotros hoy | Mejor referente | Brecha | Esfuerzo para cerrarla |
|---|---|---|---|---|
| [Precio / posicionamiento] | [valor] | [player + valor] | [diferencia] | Alto/Medio/Bajo |
| [Automatización] | | | | |
| [Validación técnica] | | | | |
| [Comunidad / escala] | | | | |

### Cuadrantes de posicionamiento
[Describir en qué cuadrante cae cada player y por qué — ej: Alto precio / Alta calidad, etc.]

---

## Sección 5 — Oportunidades y plan de acción

### Listado de oportunidades (gaps de propuesta)
> Lo que la competencia no hace, hace mal, o no hace para este mercado específico.

| # | Oportunidad | Inspirado en | Por qué nadie lo hace bien | Impacto potencial |
|---|---|---|---|---|
| 1 | [descripción] | [player referente] | [razón del gap] | Alto/Medio/Bajo |

### Matriz de Oportunidades vs. Esfuerzo
| Oportunidad | Impacto en negocio | Esfuerzo de sistema | Prioridad |
|---|---|---|---|
| [nombre] | Muy Alto / Alto / Medio | Alto / Medio / Bajo | CRÍTICA / ALTA / MEDIA |

### Hoja de ruta de implementación
| Acción | Oportunidad que cierra | Responsable | Plazo estimado | Recursos necesarios |
|---|---|---|---|---|
| [acción concreta] | [oportunidad #] | [quién] | [semanas/meses] | [qué se necesita] |

---

## Sección 6 — Conclusiones para el Outcome Definition

[Párrafo: qué confirma este benchmark sobre las hipótesis del Momento 1]
[Párrafo: qué refuta o matiza]
[Párrafo: cómo impacta en la propuesta de valor del proyecto]

**Confianza generada por este benchmark:** [Alta / Media / Baja] — [justificación]

---

## Metadata
- Etapa: 01 | Skill: Benchmark | Estado: [BORRADOR]
- Players analizados: [N]
- Fuentes: [lista de fuentes usadas]
- Limitaciones: [qué datos no se pudieron obtener y por qué]
- Pendiente de validación: [qué necesita confirmar el humano]
```

**Qué hace la IA en este soporte:**
- Investiga cada player con las dimensiones definidas
- Completa los datos cuantitativos con las fuentes disponibles (web pública, reviews, redes)
- Marca como `[ESTIMADO]` los datos que no pudo verificar directamente
- Genera las secciones 4, 5 y 6 a partir del análisis de las fichas individuales
- No omite la Sección 6 — es la que conecta el benchmark con las hipótesis del Momento 1

#### Soporte 3 — Base de datos de entrevistados y reclutamiento

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
```markdown
## Base de Datos de Entrevistados
### Proyecto: [nombre] | N objetivo: [número] | N backup: [número]

| # | Nombre | Perfil | Canal de contacto | Estado | Fecha agendada | Backup | Notas |
|---|---|---|---|---|---|:---:|---|
| 1 | | | | Pendiente / Agendado / Completado / Declinó | | No | |
| 2 | | | | | | Sí | |

> **Criterio de activación de backup:** Un backup se activa cuando un participante confirmado cancela con menos de 24hs de anticipación o no se presenta. El N de backup recomendado es el 20% del N objetivo (ej: si N=8, tener 2 backups).

**Criterios de selección:**
- [Criterio 1 — quién califica: comportamiento, experiencia, contexto]
- [Criterio 2 — quién NO califica: exclusiones explícitas]
- [Distribución de perfiles: X% perfil A, Y% perfil B]
- **Incentivo ofrecido:** [Ninguno / Descuento / Regalo / Acceso anticipado / Honorario — justificación]
```

#### Soporte 4 — Cuestionario de Encuesta Cuantitativa *(condicional)*

> **Se activa solo si** el Plan de Metodología (Parte A) incluye encuesta como método. Si el plan no la contempla, este soporte no se genera.

**Qué hace la IA en este soporte:**
- Diseña el cuestionario completo con preguntas cerradas alineadas a las hipótesis.
- **Mandato de Neutralidad:** Audita que ninguna pregunta use lenguaje inducido o cargado (ej: en lugar de "¿Qué tanto te gusta...?", usa "¿Cómo calificarías tu experiencia con...?").
- **Filtro Anti-Doble Impacto:** Prohíbe preguntas "double-barreled" (que preguntan dos cosas en una). Si detecta una, la divide obligatoriamente.
- **Definición de Escalas:** Define etiquetas claras para cada extremo y punto medio de las escalas Likert (ej: 1 = Muy insatisfecho, 3 = Neutral, 5 = Muy satisfecho).
- **Estructura Secuencial Anti-Sesgo:** Organiza las preguntas en bloques (Screening → Contexto → Dolor → Valor) para evitar que preguntas tempranas condicionen las respuestas finales.
- Marca como `[OPCIONAL]` las preguntas que pueden eliminarse si la encuesta es demasiado larga.

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
```markdown
## Cuestionario de Encuesta Cuantitativa
### Proyecto: [nombre] | Versión: v1.0 | Hipótesis que valida: [H1, H3]

---

### Texto de presentación (visible al encuestado)
"[Texto de bienvenida: quién lo hace, para qué sirve, cuánto tarda, anonimato/confidencialidad.
 Ejemplo: 'Esta encuesta anónima tarda 4 minutos y nos ayuda a entender cómo profesionales
 como vos gestionan X. No hay respuestas correctas o incorrectas.']"

---

### Bloque 1 — Perfil y contexto
**P1.** [Pregunta de screening — define si el encuestado califica]
- Tipo: Selección única
- Opciones: [A] / [B] / [C] / Ninguna de las anteriores
- Lógica: `[Si responde 'Ninguna de las anteriores' → Fin de encuesta con mensaje de cierre]`

**P2.** [Pregunta de frecuencia del comportamiento investigado]
- Tipo: Selección única
- Opciones: Todos los días / Algunas veces por semana / Algunas veces por mes / Raramente / Nunca

---

### Bloque 2 — Comportamiento y contexto de uso
**P2.** [Pregunta de frecuencia o hábito actual]
- Tipo: Selección única
- Opciones: [Opciones mutuamente excluyentes y exhaustivas]
- Objetivo: Entender el baseline de uso antes de entrar en el dolor.

---

### Bloque 3 — Dolor y nivel de insatisfacción
**P3.** [Pregunta de nivel de dificultad — escala]
- Tipo: Escala Likert 5 puntos
- Etiquetas: 1 = Muy fácil · 3 = Ni fácil ni difícil · 5 = Muy difícil
- **Rigor:** Evitar preguntar "¿Es fácil?" (inducido). Preguntar "¿Cómo calificaría la facilidad de...?".
- Hipótesis que valida: [H1]

**P4.** [Pregunta sobre la solución actual]
- Tipo: Selección múltiple
- Opciones: [A] / [B] / [C] / No tengo forma de resolverlo
- `[OPCIONAL]`

---

### Bloque 4 — Validación de valor y disposición
**P5.** [Pregunta de probabilidad o interés futuro]
- Tipo: NPS (0-10) o Escala de interés
- Etiquetas: 0 = Nada probable · 5 = Neutral · 10 = Muy probable
- Hipótesis que valida: [H3]

**P6.** [Pregunta abierta corta — máximo 1 por encuesta]
- Tipo: Texto abierto (límite: 200 caracteres)
- Consigna: "¿Qué es lo más frustrante de cómo resolvés esto hoy?"
- Lógica: `[Solo se muestra si P3 ≥ 4]`

---

### Mensaje de cierre
"[Texto de agradecimiento + próximo paso si aplica.
 Ejemplo: 'Gracias por tu tiempo. Si querés profundizar en una charla de 20 minutos,
 dejá tu mail aquí: [campo opcional]']"

---

### Metadata del cuestionario
- Hipótesis cubiertas: [H1] [H3]
- Preguntas obligatorias: [N] | Preguntas opcionales: [N]
- Duración estimada: [N] minutos
- Plataforma recomendada: [Google Forms / Typeform / otra — justificación]
- Criterio de cierre: [N respuestas completas o [fecha límite]]
```

---

#### Soporte 5 — Templates de reclutamiento y consentimiento informado

> Estos dos documentos van separados del Soporte 3. Son plantillas editables que el humano adapta antes de usar.

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
```markdown
# Templates de Reclutamiento — [Proyecto]
## Versión: v1.0 | Estado: [BORRADOR — editar antes de usar]

---

## Parte 1 — Emails de reclutamiento

### Variante A — Contacto cálido (conocido / referido directo)
**Asunto:** Investigación de [X minutos] sobre [tema genérico, no el producto]

"Hola [Nombre],

Estoy investigando cómo [perfil de usuario] resuelve [problema en lenguaje cotidiano]. Me gustaría charlar con vos 20-30 minutos para entender tu experiencia real — no vendo nada, no hay respuestas correctas o incorrectas.

¿Tenés disponibilidad esta semana o la próxima? Si sí, elegí el horario que más te convenga: [link de calendario o propuesta de horarios].

Gracias de antemano.
[Nombre del investigador]"

---

### Variante B — Contacto frío (sin relación previa)
**Asunto:** ¿Podés ayudarme con 20 minutos sobre [tema]?

"Hola [Nombre],

Me encontré con tu perfil en [LinkedIn / comunidad / red] y creo que tu experiencia en [área] sería muy valiosa para una investigación que estoy haciendo.

Estoy explorando cómo [perfil similar al suyo] enfrenta [problema cotidiano]. La charla dura 20-30 minutos, es completamente anónima y sin compromiso de ningún tipo.

[Si aplica: Como agradecimiento, [incentivo concreto].]

¿Te interesa participar? Podés agendar directamente acá: [link] o responder este mail con tu disponibilidad.

Gracias,
[Nombre del investigador]"

---

### Variante C — Por referido de otro participante
**Asunto:** [Nombre del referidor] me sugirió contactarte

"Hola [Nombre],

[Nombre del referidor] me comentó que trabajás en [contexto relevante] y pensó que tu perspectiva podría ser muy útil para la investigación que estoy haciendo.

Estoy entendiendo cómo [perfil] gestiona [problema]. La charla es breve (20-30 min), informal y no tiene ningún objetivo comercial.

¿Tenés un hueco esta semana? [link o propuesta de horarios]

Gracias,
[Nombre del investigador]"

---

## Parte 2 — Formulario de consentimiento informado

> ⚠️ **Por qué es obligatorio:** El consentimiento protege al participante (sabe para qué se usan sus datos) y al investigador (evidencia de participación voluntaria). Sin esto, las citas del Informe de Research no tienen respaldo ético.

**[El investigador lee este texto en voz alta al inicio de la sesión, o lo envía por escrito antes]**

---

"Antes de comenzar, quiero contarte brevemente de qué se trata esta sesión y cómo vamos a usar lo que charlemos.

**Qué estamos investigando:** [Descripción genérica del tema — sin revelar hipótesis ni producto]

**Cómo se usará la información:**
- Tus respuestas se usarán exclusivamente para informar decisiones de diseño de [producto/servicio].
- No compartiremos tu nombre ni información personal con terceros.
- [Si se graba:] Esta sesión será grabada solo para uso interno del equipo de investigación. La grabación no se distribuirá.
- Podés retirarte en cualquier momento sin consecuencias.

**¿Aceptás participar bajo estas condiciones?**
[ ] Sí, acepto — [Nombre del participante] — [Fecha]

---

*[Si la sesión es remota: el investigador solicita confirmación verbal y la registra en las notas con la forma: 'El participante confirmó verbalmente su consentimiento al inicio de la sesión el [fecha].']*"
```

---

## Formato de entrega final de este momento

Un único documento Markdown con las siguientes secciones (los Soportes 4 y 5 son condicionales):
1. Plan de metodología (con proceso de razonamiento visible)
2. Guión de entrevistas cualitativas
3. Informe de Benchmark Competitivo
4. Base de datos de entrevistados y reclutamiento
5. *(Condicional)* Cuestionario de Encuesta Cuantitativa
6. Templates de reclutamiento y consentimiento informado

**Título del documento:**
```
# Soportes de Recolección — [Proyecto]
## Versión: [v1.0] | Fecha: [fecha] | Estado: [BORRADOR]
```

---

## Cuándo pedís más información antes de ejecutar

- Si las hipótesis del Momento 1 no están suficientemente específicas para diseñar preguntas
- Si no está claro en qué geografía o industria se reclutan los entrevistados
- Si hay restricciones de tiempo o presupuesto que afectan el N posible

---

## Qué NO hacés en este momento

- **No generás wireframes ni diseños de la encuesta** — porque eso es UI (Etapa 5). Diseñar la interfaz antes de validar el problema es el error más costoso del proceso.
- **No ejecutás las entrevistas** — porque eso es Momento 2. Tu rol aquí es diseñar el plan, no ejecutarlo.
- **No analizás resultados** — porque no hay resultados todavía. Anticipar conclusiones antes de tener datos introduce sesgo de confirmación en el diseño del guión.
- **No cambiás las hipótesis definidas en el Momento 1** — porque fueron aprobadas por el humano. Si creés que están mal, lo señalás explícitamente y esperás confirmación antes de modificar.
- **No entregás el guión solo en el chat** — porque el humano necesita un documento editable para refinar y usar en campo. Un guión en el chat no es un soporte operativo.

---

## Test de calidad del entregable

Antes de entregar, verificás:
- [ ] El Plan de Metodología traduce objetivos de negocio a objetivos de UX Research
- [ ] La tabla de métodos incluye Rationale (por qué) y Tradeoff (qué se pierde)
- [ ] Se incluye una Matriz de Supuestos y Riesgos con sus mitigaciones
- [ ] El razonamiento de la propuesta de métodos es visible y estratégico
- [ ] Cada hipótesis está cubierta por al menos un método
- [ ] El N tiene justificación y criterio de saturación
- [ ] El guión tiene preguntas que NO sugieren la respuesta
- [ ] El benchmark tiene las 6 secciones completas (objetivos, players, fichas, gap analysis, oportunidades, conclusiones)
- [ ] Cada player tiene datos cuantitativos con fuente, no solo cualitativos
- [ ] El Gap Analysis tiene la brecha real entre nosotros y cada referente
- [ ] La Matriz de Oportunidades vs. Esfuerzo está completa
- [ ] La Sección 6 conecta el benchmark con las hipótesis del Momento 1
- [ ] Los soportes son documentos editables, no solo texto en el chat
- [ ] *(Si aplica encuesta)* Cada pregunta tiene tipo declarado y la hipótesis que valida
- [ ] *(Si aplica encuesta)* La lógica de bifurcación está documentada con notación `[Si X → saltar a P.N]`
- [ ] *(Si aplica encuesta)* El texto de presentación habla al encuestado, no al equipo interno
- [ ] *(Si aplica encuesta)* No hay preguntas "double-barreled" (preguntan dos cosas en una)
- [ ] *(Si aplica encuesta)* El lenguaje es neutro y no sugiere la respuesta
- [ ] *(Si aplica encuesta)* Las escalas Likert tienen etiquetas claras en extremos y punto medio
- [ ] La Base de Datos de entrevistados tiene columna Backup con N de backup = 20% del N objetivo
- [ ] El criterio de activación de backup está documentado
- [ ] Los emails de reclutamiento tienen las 3 variantes (cálido, frío, referido)
- [ ] El formulario de consentimiento está incluido y tiene campo de firma/confirmación

---

## Protocolo de Memoria — Este Momento

**Eje Estratégico a guardar al cerrar este momento:** `pf-metodologia-research`

Cuando el humano aprueba el plan de metodología y los soportes, ejecutar `mem_save` en Engram MCP:
- **Tipo:** `decisión`
- **Qué:** El método de recolección elegido (ej: entrevistas + benchmark, N=8)
- **Por qué:** Razón de esa combinación de métodos y ese tamaño de muestra
- **Dónde:** Plan de metodología v1.0 del proyecto
- **Aprendido:** Restricciones clave que condicionaron el diseño del research (tiempo, acceso, presupuesto)

---

*Framework Baraldi v2.26.12 · skills/methodology/01_problem_framing/skills/momento_2_feedback_metodologia.md*
