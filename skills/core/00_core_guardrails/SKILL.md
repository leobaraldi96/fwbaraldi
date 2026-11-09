---
name: core-guardrails
description: >
  Reglas de disciplina operativa, taxonomía de carpetas, seguridad de directorios externos,
  ergonomía cognitiva y barandas de contención del Framework Baraldi.
  Trigger: SIEMPRE activo. Se debe consultar al inicio de cada sesión y ante
  cualquier cambio en la estructura del proyecto o de los artefactos.
version: "2.32.1"
---

# Capa 00 - Core guardrails (barandas de contención)

> **Objetivo:** Garantizar que la IA opere con rigor metodológico, protegiendo al proyecto de la desorganización, la fuga de archivos, la obsolescencia de la documentación y el ruido técnico. *(Las reglas fundacionales de identidad, Triple Aduana y autonomía por impacto residen en `00_boot/context.md`; este documento especifica las leyes de almacenamiento, higiene documental y ergonomía).*

## 0. Inmunidad del núcleo y seguridad de directorios externos (Core & External Self-Protection)

<core_self_protection>
Esta es la regla de protección existencial del framework y del entorno del usuario:

- **Detección de ámbito del framework:** El Framework Baraldi tiene su propio repositorio de desarrollo (`leobaraldi96/fwbaraldi`).
- **Prohibición de modificación del motor desde proyectos:** Si el Agente está trabajando en un proyecto de producto de un usuario, tiene terminantemente **PROHIBIDO** modificar archivos dentro de la carpeta raíz del framework (`.../skills/baraldi-framework/`).
- **Acción obligatoria ante sugerencia de mejora al motor:** Si durante el uso del framework el Agente detecta una mejora necesaria en la metodología, **NO DEBE APLICARLA DIRECTAMENTE**. Debe notificar al humano y solicitar abrir el workspace específico del framework en una ventana independiente.
- **Inmunidad de solo lectura en carpetas externas de referencia (External Reference Read-Only P0):** Si el usuario proporciona la ruta de otro proyecto, repositorio o carpeta externa al workspace activo como referencia visual, técnica, auditoría o fuente para redactar documentación/casos de estudio, **dicha carpeta externa es 100% intocable (Read-Only)**. Está terminantemente prohibido crear, modificar o eliminar archivos en directorios externos; todo output o borrador debe generarse exclusivamente dentro del workspace activo (`docs-fwbaraldi/`).
- **No-interferencia con el servidor de desarrollo activo (`npm run dev`):** El usuario suele mantener su propio servidor de desarrollo con HMR activo en su terminal. Queda terminantemente prohibido matar procesos Node (`taskkill`), reiniciar servidores en segundo plano o levantar un segundo servidor de desarrollo sin autorización explícita.
- **Inmunidad de supresiones del humano (Respect User Deletions):** Cuando el humano elimina deliberadamente un elemento visual, logo, campo o bloque de una interfaz, queda terminantemente prohibido volver a reintroducirlo en iteraciones posteriores por inercia o "completitud de plantilla".
- **Prohibición estricta de Git commit y push automático (P0):** El Agente tiene terminantemente **PROHIBIDO** ejecutar comandos `git commit`, `git add` o `git push` de forma autónoma o automática. El agente solo edita archivos en el working tree. La revisión de diffs, creación de commits y subida de cambios remotos es **soberanía exclusiva del humano responsable**.
</core_self_protection>

## Inteligencia proactiva y adaptativa (Bridge Architecture)
- **Mandato de consulta:** La IA tiene prohibido operar de forma aislada. Debe consultar la Toolbox para elevar la calidad, pero **siempre adaptándose al setup y perfil de rigor calibrado en `/init`** (definido en `00_boot/context.md`).
- **Adaptación al setup (Solo-Pilot vs. Equipo):** En modo *Solo-Pilot*, el framework elimina burocracia grupal innecesaria (ej: no pide workshops presenciales ni ceremonias multi-equipo a un creador solitario, transformándolos en checkpoints ágiles de reflexión). En modo *Equipo / Stakeholders*, habilita la suite completa de alineación y handoff.
- **Dinamicidad:** El usuario puede recalibrar su perfil en cualquier momento indicando *"Actualizar setup o perfil de rigor"*.

---

## 1. Alineación de documentación (Docs-Alignment)

Esta es la regla de oro para evitar la degradación del conocimiento en el ecosistema.

- **Integridad de codificación (UTF-8 puro sin BOM):** Prohibido el uso de comandos que corrompan caracteres especiales o introduzcan Byte Order Marks (BOM) incompatibles con compiladores modernos.
- **Sincronización atómica:** Todo cambio de versión debe ser replicado en `package.json`, `README.md`, `ARQUITECTURA_CORE.md`, `DOCUMENTACION_IA.md`, `CHANGELOG.md`, `00_boot/context.md` y `skills/` simultáneamente.
- **Ley de no-degradación sistémica:** El Framework es una estructura acumulativa. Queda TERMINANTEMENTE PROHIBIDO eliminar, resumir o "limpiar" secciones de documentación (README, Arquitectura, Guías) que contengan filosofía, principios de diseño, historia o especificaciones técnicas.
  - Toda actualización debe ser **ADITIVA** o de **REEMPLAZO ENRIQUECEDOR**.
  - **Anti-Data Pruning:** Queda prohibida la eliminación de datos, flujos o secciones previamente validadas durante actualizaciones incrementales. Si se añade un campo nuevo, no se borran los antiguos.
  - **Mandato de expansión (redundancia estratégica):** En fases de arquitectura e IA, el objetivo es **expandir, redundar y documentar**. La síntesis es un error si sacrifica la resolución del sistema.
  - Si se considera necesario remover algo por obsolescencia técnica comprobada, se DEBE consultar y explicar el motivo al humano antes de ejecutar.
- **Estado real, no deseado:** La documentación debe describir el comportamiento **actual** y verificado, nunca promesas de funciones futuras no implementadas.
- **Limpieza de referencias:** Al eliminar o renombrar un archivo o carpeta bajo autorización, se deben limpiar inmediatamente todas las menciones en el resto de la documentación.
- **Inmunidad del mapa (README Map Integrity):** Queda terminantemente PROHIBIDO resumir, podar o simplificar la sección "Estructura del Repositorio" en el README. Este mapa es vital para la navegación humana y agéntica; debe mantenerse siempre detallado, completo y fiel a la jerarquía de archivos real.

---

## 2. Nomenclatura semántica y ortotipografía

- **Prohibición de IDs de sistema:** Queda terminantemente prohibido nombrar archivos con códigos internos crípticos (ej: `01_pf_m1_vision.md`).
- **Nombres con valor de negocio:** Los nombres de los archivos deben ser descriptivos para un humano (ej: `01_Vision_y_Estrategia.md`).
- **Consistencia:** Mantener la numeración de las etapas (`01`, `02`, etc.) al inicio del nombre del archivo para preservar el orden cronológico en el sistema de archivos.
- **Ortotipografía en español (Sentence case y signos):**
  1. Prohibición estricta de *Title Case* (capitalizar cada palabra) en títulos, subtítulos, botones, tablas o etiquetas.
  2. Uso de mayúscula inicial únicamente en la primera palabra de la oración/título, nombres propios y siglas técnicas (`UX`, `UI`, `ROI`, `QA`, `API`).
  3. Prohibición de guiones largos (em-dash / en-dash) como incisos; utilizar guion simple (`-`), comas o paréntesis.
  4. Auditoría de estilo mediante [references/humanizer.md](../../../references/humanizer.md) para erradicar vocabulario artificial de IA, paralelismos mecánicos y muletillas serviles.

---

## 3. Aislamiento de output y taxonomía de carpetas (Zero-Leakage)

### El principio
El repositorio del *entregable* (el código de la web, la app, el producto que irá a deploy) debe permanecer **100% puro**. Nada que no sea parte del entregable productivo puede vivir en su raíz o mezclarse con sus carpetas de código fuente. Todo lo que genera el framework vive **exclusivamente** dentro de `docs-fwbaraldi/` en la raíz del proyecto.

**REGLA DE ORO:** Si un archivo no va a producción, va a `docs-fwbaraldi/`.

### Taxonomía obligatoria de subcarpetas

Dentro de `docs-fwbaraldi/` la organización es por **naturaleza del contenido** y contratos vivos en su raíz:

```
docs-fwbaraldi/
├── README.md                          ← Manual de utilidad y perfil de rigor (Mandatorio)
├── 00_Backlog_Estrategico.md          ← Siempre en la raíz. Gestión de scope.
├── DESIGN.md                          ← Contrato vivo visual agéntico (Etapa 06)
├── VOICE.md                           ← Contrato vivo de voz y tono (Etapa 05)
├── BUSINESS.md                        ← Contrato vivo de invariantes de negocio (Etapa 03)
├── SECURITY.md                        ← Contrato vivo de seguridad, RBAC y RLS (Etapa 03/07)
├── LEGAL.md                           ← Contrato vivo de privacidad y compliance (Etapa 03/07)
├── UX.md                              ← Contrato vivo de ergonomía e interacción (Etapa 05)
├── KNOWLEDGE.md                       ← Compilador de conocimiento de producto (Etapa 07)
│
├── 01_Problem_Framing/                ← Artefactos de la Etapa 01
│   ├── 01_Problem_Statement.md
│   ├── 02_Opportunity_Map.md
│   ├── 03_Stakeholder_Map.md
│   ├── 04_Success_Metrics.md
│   ├── 05_Outcome_Definition.md
│   └── 06_Informe_de_Cierre.md
│
├── 02_System_Analysis/                ← Artefactos de la Etapa 02
│   ├── Actor_Map.md
│   ├── Dependency_Map.md
│   └── Architecture_Overview.md
│
├── [03_05_...]/                       ← Carpetas por cada etapa con artefactos propios
│
├── 06_UI/                             ← Especificaciones visuales y Showroom vivo (Etapa 06)
│   ├── showroom.html                  ← Espejo interactivo vivo de tokens y componentes
│   ├── design_tokens.md
│   └── componentes_spec.md
│
├── 07_Handover_QA/                    ← Auditorías de entrega, linaje de datos y checklists
│
├── 08_Telemetry/                      ← Diagnósticos de datos y registro de acciones (Etapa 08)
│   ├── 01_Data_Diagnostic_and_Insights.md
│   └── 02_Action_Registry_and_Decisions.md
│
├── informes/                          ← Bitácoras mensuales de tareas, reportes y auditorías
│   └── REGISTRO_TAREAS_YYYY-MM.md     ← Registro continuo para rendición de cuentas y facturación
│
├── [<modulo-o-tarea>]/                ← Subcarpetas operativas (ej. precios/, migraciones/, catalogos/)
│
├── UXR/                               ← Todo lo que sea investigación de usuarios
│   ├── plan_de_metodologia.md
│   ├── guion_entrevistas.md
│   ├── sintesis_tematica.md
│   ├── matriz_de_evidencia.md
│   └── informe/
│       └── index.html
│
└── IA/                                ← Prompts y recursos de IA del proyecto
    ├── prompt_figma.md
    ├── prompt_copy.md
    └── contexto_proyecto_ia.md
```

### Reglas operativas de almacenamiento y renderizado
- **Ubicación obligatoria:** Todo artefacto del framework debe tener una subcarpeta de destino explícita. Si la IA no sabe en qué subcarpeta va, **frena y pregunta** antes de escribir el archivo.
- **Mandato de artefactos físicos (Anti-Chat Only):** Queda terminantemente prohibido que el Agente solo muestre el contenido de un entregable en la terminal o chat. Todo hito de la metodología **DEBE** materializarse en un archivo físico dentro de `docs-fwbaraldi/`.
- **Interpretación de templates (Ley de Ejemplo):** Toda tabla, diagrama o estructura de datos presente en los archivos de metodología del Framework que contenga datos ilustrativos debe ser tratada estrictamente como un **EJEMPLO DE FORMATO**. La IA debe generar siempre contenido 100% original basado en el proyecto activo.
- **Rigor en la indagación:** Si un artefacto requiere datos de etapas previas, la IA **DEBE** leer esos archivos antes de proponer nada.
- **Prohibición de fuga (Zero-Leakage) y organización por dominio operativo:** Queda terminantemente prohibido dejar o dispersar archivos de entregables, CSVs, planillas, scripts auxiliares o documentos de trabajo en directorios temporales (`scratch/`, carpetas internas del agente o la raíz del proyecto). Todo archivo generado relativo a una tarea operativa debe alojarse de manera organizada dentro de `docs-fwbaraldi/<modulo-o-tarea>/` (por ejemplo, `docs-fwbaraldi/precios/`). Si un reporte HTML requiere activos auxiliares, deben guardarse dentro de su propia subcarpeta (ej: `docs-fwbaraldi/UXR/informe/assets/`).
- **Registro continuo en bitácora mensual (`docs-fwbaraldi/informes/REGISTRO_TAREAS_YYYY-MM.md`):** Cuando el proyecto cuente con seguimiento operativo o facturación recurrente a clientes, cada tarea ejecutada, ajuste técnico, mantenimiento o nueva funcionalidad debe registrarse sistemáticamente en el mismo turno dentro de `docs-fwbaraldi/informes/REGISTRO_TAREAS_YYYY-MM.md`, detallando fecha, categoría, descripción técnica/funcional e impacto de negocio, listo para auditar y rendir cuentas.
- **Cumplimiento de la Triple Aduana, Vista Madre y Linaje de Datos:** Toda generación o edición de vistas sigue obligatoriamente el protocolo de `00_boot/context.md` (lectura previa de `showroom.html` + `globals.css` + `DESIGN.md` + `VOICE.md` + *Vista Madre Canónica*, emisión del *Pre-flight Check*, arquitectura modular con techo de `350` líneas sin modales anidados, cero estilos inline ni `tracking-*`, sincronización del Showroom vivo con enlace directo en el chat y verificación de los 5 eslabones del *Data-to-UI Lineage*).

---

## 4. Gestión de backlog continuo (Scope Creep Management)

El framework protege la ejecución registrando proactivamente cualquier idea que esté fuera del alcance de la etapa actual.

- **Actitud proactiva:** Si el humano menciona una idea futura o un requerimiento lateral durante otra etapa, el agente no desvía el foco actual: la registra directamente en `docs-fwbaraldi/00_Backlog_Estrategico.md` e informa al usuario.
- **Formato requerido:** El documento se estructura en 3 bloques de tareas (Checklists `[ ]`):
  1. **Ideas de UX/UI:** Futuras features, requerimientos de interfaz o refinamientos de experiencia.
  2. **Deuda técnica / lógica:** Integraciones pospuestas, refactorizaciones, cambios de arquitectura.
  3. **Requisitos de negocio:** Nuevos KPIs identificados, objetivos comerciales u oportunidades de "Fase 2".

---

## 5. Leyes de respiro e higiene visual (Density Rules)

La IA debe actuar como un curador de información, aplicando estos principios en cada reporte, tabla o interfaz propuesta:

1.  **Regla del respiro del dato:** Ningún texto o dato importante debe sentirse apretado o tocar los bordes del contenedor. El "aire" alrededor de la información es lo que permite la toma de decisiones estratégica.
2.  **Anti-caja repetitiva:** Evitar el uso excesivo de contenedores anidados (cajas dentro de cajas) a menos que sea estrictamente necesario para agrupar información compleja. Priorizar la jerarquía tipográfica y el espacio en blanco.
3.  **Humanización de la información:** Queda prohibido mostrar identificadores crudos de base de datos, UUIDs, timestamps ISO sin formatear o logs técnicos al usuario final. Toda data debe ser traducida a un formato escaneable y humano.
4.  **Jerarquía de acción:** En tablas o dashboards, los elementos de control deben estar visualmente subordinados al contenido. El usuario debe ver el **dato** primero y la **acción** después.
5.  **Secreto de negocio y sanitización en divulgación (NDA Filter):** Cuando el usuario solicite generar casos de estudio públicos, artículos o documentación externa a partir de un proyecto, la IA debe proteger la ventaja competitiva y los datos sensibles del negocio (redondeando métricas de laboratorio a cifras comunicacionales claras y reservando secretos comerciales o credenciales).

---

## 6. Ergonomía cognitiva de documentación (Cognitive Doc Ergonomics)

Todo documento, reporte de cierre o especificación generada por el framework debe diseñarse para minimizar la carga cognitiva de humanos e IAs mediante estos 6 principios:

| Principio | Regla de oro | Aplicación en FWB |
|---|---|---|
| **Lead with the answer** | Decisión, entregable y acción van primero. El contexto va después. | Los reportes inician con un *resumen ejecutivo* y tabla de estado antes del detalle. |
| **Recognition over recall** | Priorizar matrices, checklists y tablas sobre prosa densa que deba memorizarse. | Toda especificación técnica o de negocio usa tablas con columnas de estado y criterio. |
| **Chunking** | Agrupar la información en bloques semánticos pequeños (máximo 5 a 7 ítems por lista). | Desglosar flujos largos en momentos o sub-secciones temáticas. |
| **Progressive disclosure** | Empezar por el "Happy path" y presentar los edge cases de forma jerarquizada. | Diagramas de alto nivel primero, diagramas de excepción después. |
| **Signposting** | Encabezados claros, alertas visuales y etiquetas de estado explícitas. | Uso estratégico de GitHub alerts (`[!NOTE]`, `[!WARNING]`, `[!TIP]`). |
| **Review empathy** | Diseñar para que un revisor pueda validar el entregable en menos de 2 minutos. | Incluir siempre una sección de *criterios de aceptación* con casillas verificables. |

---

## Checklist de verificación de guardrails pre-entrega

Antes de declarar un hito como completado, la IA debe verificar:
- [ ] ¿He actualizado el `CHANGELOG.md` y archivos core si hubo cambios en la versión o arquitectura del framework?
- [ ] ¿Los nombres de los nuevos archivos son semánticos y humanos?
- [ ] ¿Todos los entregables están en la subcarpeta correcta de `docs-fwbaraldi/` y respeté la regla Read-Only en carpetas externas?
- [ ] ¿He capturado las ideas fuera de alcance en el `00_Backlog_Estrategico.md`?
- [ ] ¿Apliqué la gobernanza por *Blast Radius* (frenando con brief en decisiones estructurales y ejecutando con fluidez tareas operativas solicitadas)?
- [ ] ¿He verificado que los archivos estén en UTF-8 puro (sin BOM) y sin corrupción de caracteres ni guiones largos (em-dash)?
- [ ] Si toqué UI o entidades de datos: ¿pasé por la Triple Aduana (`showroom.html` + `DESIGN.md` + `VOICE.md`), verifiqué los 5 eslabones del *Data-to-UI Lineage* y entregué el enlace local al Showroom?
- [ ] ¿El documento respeta la ergonomía cognitiva (*Lead with the answer*, tablas de verificación y checklists)?

---
*Framework Baraldi v2.32.1 · Core Guardrails*
