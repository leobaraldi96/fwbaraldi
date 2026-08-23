---
name: product-knowledge-compiler-protocol
description: >
  Protocolo de ingeniería de información para compilar la inteligencia de las Etapas 01 a 07
  en artefactos de Centro de Ayuda (KNOWLEDGE.md), manuales de usuario y RAG Copilots,
  bajo estándares ISO/IEC/IEEE 26514/26515, Information Mapping®, Precision Content y Diátaxis.
keywords: knowledge base, help center, iso 26514, information mapping, precision content, diataxis, plain language, multi-agent pipeline, cx, onboarding, troubleshooting
version: "2.28.0"
---

# Protocolo — Compilador de Base de Conocimiento y Ayuda de Producto

Este protocolo actúa como un **Lead Information Architect & Technical Documentation Engineer**. Su objetivo es eliminar el **"Handoff Ciego"** hacia los equipos de CX, Soporte y Documentación, compilando la inteligencia estructurada de las Etapas 01 a 07 del **Framework Baraldi** bajo estándares mundiales de ingeniería de información (**ISO/IEC/IEEE 26514/26515**), psicología cognitiva y tuberías multiagente con control de calidad.

---

## 1. Modelado Semántico de la Información

La compilación no genera prosa plana indiferenciada; estructura el contenido bajo tres metodologías científicas:

### A. Information Mapping® (Robert Horn) & Límite Digital
* **Regla de Pantalla ($5 \pm 1$ ítems):** Basada en la Ley de Miller, la legibilidad en pantallas digitales exige un límite estricto de máximo **5 o 6 viñetas por lista, filas de tabla o bloques por sección** para mitigar la sobrecarga cognitiva.
* **Tipificación Estricta en 6 Bloques de Información:**
  1. **Procedimiento:** Instrucciones secuenciales ("¿Cómo lo hago?").
  2. **Proceso:** Flujo y funcionamiento sistémico ("¿Cómo opera el sistema?").
  3. **Principio:** Reglas, límites y políticas no negociables ("¿Cuáles son los guardrails?").
  4. **Concepto:** Definición ontológica ("¿Qué es este objeto?").
  5. **Estructura:** Anatomía de pantalla o partes componentes ("¿Cómo está compuesto?").
  6. **Hecho:** Datos concretos, URLs, parámetros o especificaciones fijas.

### B. Precision Content (Rob Hanna)
* **Propósito Único:** Cada bloque de información tiene un único propósito técnico y un solo tipo de respuesta esperada. El usuario no busca entretenerse, busca escanear, encontrar la respuesta y salir.

### C. Cuadrantes Diátaxis
* **Separación Absoluta:** Prohibido mezclar explicaciones teóricas ("Explicación") o tablas de API ("Referencia") dentro de una guía paso a paso ("Guía de tareas" / *How-to*).

```
┌──────────────────────────────────────┐     ┌──────────────────────────────────────┐
│       ARTEFACTOS FW BARALDI          │     │    BASE DE CONOCIMIENTO (CX / AI)    │
├──────────────────────────────────────┤     ├──────────────────────────────────────┤
│ E01: Problem Framing / Pitch / JTBD  │ --> │ FAQ Comercial, Landing, Quickstart   │
│ E02: Actor Map / Service Blueprint   │ --> │ Manuales de Usuario por Rol/Actor    │
│ E03: Business Rules / Logic Matrix   │ --> │ Troubleshooting (Matriz Blameless)   │
│ E04: Sitemap / Taxonomía / Glosario  │ --> │ Glosario y Taxonomía del Help Center │
│ E05: Interaction Flows / States      │ --> │ Guías Procedimentales ("Cómo hacer") │
│ E06: VOICE.md & DESIGN.md            │ --> │ Tono Contextual & Copilot Prompts    │
│ E07: QA Checklist & Edge Cases       │ --> │ Matriz de Errores y Recuperación     │
└──────────────────────────────────────┘     └──────────────────────────────────────┘
```

---

## 2. Estándares de Calidad Internacionales (ISO/IEC/IEEE 2651x)

El compilador evalúa los entregables contra la norma **ISO/IEC/IEEE 26514:2022** asegurando los 8 atributos de calidad:

1. **Usabilidad:** Orientada a la tarea inmediata del usuario.
2. **Claridad:** Comprensión sin ambigüedades en la primera lectura.
3. **Accesibilidad:** WCAG compliant, lectura en lectores de pantalla y enlaces descriptivos.
4. **Corrección:** Concordancia técnica 1:1 con el código y diseño.
5. **Consistencia:** Vocabulario unívoco heredado de la Etapa 04.
6. **Comprensibilidad:** Nivel de lectura equivalente a 8º grado.
7. **Concisión:** Eliminación de cualquier palabra que no aporte a la resolución.
8. **Minimalismo:** Solo la información necesaria para el momento enseñable.

> **Sincronía Ágil (ISO/IEC/IEEE 26515):** La información para el usuario se co-crea a partir de las User Stories y especificaciones del sprint, previniendo la putrefacción documental.

---

## 3. Higiene Lingüística y Filtros Anti-Slop

La IA aplicará filtros automáticos de rechazo ante las siguientes violaciones de estilo:

| Categoría | Palabras y Patrones Prohibidos | Corrección Obligatoria |
| :--- | :--- | :--- |
| **Adjetivos Promocionales** | *robusto, potente, innovador, revolucionario, líder, vanguardia* | Eliminar de raíz. Describir la función objetiva. |
| **Adverbios Condescendientes**| *simplemente, fácilmente, obviamente, por supuesto, rápidamente, sencillamente* | Erradicar. Nunca asumir la destreza del usuario. |
| **Rellenos Sintácticos** | *en orden a, apalancar, con el fin de, proceder a* | Usar verbos directos: *para, usar, hacer*. |
| **Voz Pasiva** | *"Los cambios son guardados por el sistema"* | Voz activa: *"El sistema guarda los cambios"*. |
| **Longitud de Oraciones** | Oraciones de más de 25 palabras | Dividir en dos oraciones independientes. |
| **Enlaces Genéricos** | *"haz clic aquí"*, *"más info"* | Enlace descriptivo: *"Descarga la plantilla CSV"*. |

---

## 4. Tubería Multiagente de Compilación (Pipeline Architecture)

Para evitar alucinaciones o degradación en documentos extensos, la compilación opera en 4 fases secuenciales con bucle de retroalimentación cerrada:

```
┌─────────────────────────┐
│ 1. Content Ordering     │ ➔ Analiza especificaciones y datos crudos. Determina la
│    Agent (CO)           │   secuencia lógica óptima sin redactar prosa.
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ 2. Text Structuring     │ ➔ Divide la secuencia en bloques tipificados (Information
│    Agent (TS)           │   Mapping) aplicando la regla "Un paso = Una sola acción".
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│ 3. Surface Realization  │ ➔ Redacta el texto en voz activa, Plain Language y modulación
│    Agent (SR)           │   de tono contextual (Inspirador / Estructurado / Blameless).
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐      REJECTED_INPUT (Violación detectada)
│ 4. Guardrail Evaluation │ ──────────────────────────────────────────────┐
│    Agent (QA)           │                                               │
└───────────┬─────────────┘                                               │
            │ PASA (100% compliant)                                       ▼
            ▼                                               ┌───────────────────────────┐
┌─────────────────────────┐                                 │ Bucle de Refinamiento     │
│ Salida: KNOWLEDGE.md    │                                 │ Iterativo (Feedback a SR) │
└─────────────────────────┘                                 └───────────────────────────┘
```

---

## 5. Estructura Canónica de `docs-fwbaraldi/KNOWLEDGE.md`

```markdown
# Base de Conocimiento & Manual del Producto — {Nombre del Producto}

## Capa 1: Descubrimiento & Quickstart (< 5 min)
- **Propuesta de Valor:** {Resumen del dolor que resuelve derivado de E01}
- **Público Objetivo:** {Perfiles y casos de uso principales}
- **Guía de Inicio Rápido (3 pasos):**
  1. Paso 1: {Acción mínima inicial}
  2. Paso 2: {Configuración básica}
  3. Paso 3: {Primer resultado visible / Time-to-First-Success}

## Capa 2: Glosario Oficial y Taxonomía Unívoca
| Término Oficial | ¿Qué significa en este producto? | Términos NO recomendados (Evitar) |
| :--- | :--- | :--- |
| {Entidad de E04} | {Definición clara y concisa} | {Sinónimos confusos} |

## Capa 3: Guías de Tareas por Rol (Procedimientos "Cómo hacer X")
### Para el Rol: {Rol A - Ej: Administrador / Dueño}
#### Cómo {Tarea Principal 1}
- **Objetivo:** {Qué logrará el usuario}
- **Requisitos previos:** {Condición necesaria}
- **Procedimiento (Regla: Un paso = Una acción / Máx 5-6 pasos):**
  1. {Acción 1}
  2. {Acción 2}
  3. {Acción 3}

## Capa 4: Matriz de Troubleshooting y Resolución de Errores (Blameless)
| Qué ve el usuario en pantalla | Causa de Negocio (E03) | Solución Paso a Paso (Camino de Salida) |
| :--- | :--- | :--- |
| Botón de acción deshabilitado | Falta completar campo obligatorio | Completar el campo requerido {Y} |
| "Turno no disponible" | Cupo agotado o fuera de horario | Seleccionar un horario disponible en verde |
| Error de conexión o pasarela | Timeout de servidor | Aguardar 2 min o reintentar con otro medio |
```

---

## 6. Motor de System Prompts para Copilotos IA (RAG Readiness)

```xml
<System_Role>
Actúas como el Asistente Oficial de {Producto}. Tu objetivo es coordinar la información
para el usuario siguiendo rigurosamente la norma ISO/IEC/IEEE 26514:2022 y los principios
de minimalismo cognitivo e Information Mapping.
</System_Role>

<Metodologia_Estructuracion>
1. INFORMATION MAPPING: Segmenta el contenido en bloques autocontenidos. Limita listas y tablas
   a un máximo de 5 o 6 ítems para evitar fatiga en lectura digital.
2. PRECISION CONTENT: Clasifica cada bloque (Procedimiento, Proceso, Principio, Concepto, Estructura, Hecho).
3. DIÁTAXIS: No mezcles conceptos teóricos en guías de procedimiento paso a paso.
</Metodologia_Estructuracion>

<Higiene_Linguistica>
- Prohibidos adjetivos inflados (robusto, potente, innovador) y adverbios condescendientes (fácilmente, simplemente).
- Voz activa y lenguaje claro obligatorio. Ninguna oración debe superar las 25 palabras.
- Troubleshooting blameless: empático, sin culpar al usuario y con salida accionable inmediata.
</Higiene_Linguistica>
```

---

## NEVER List — Anti-patrones
1. **NUNCA** superes los 5 o 6 ítems por lista o bloque procedimental sin segmentar.
2. **NUNCA** uses adverbios condescendientes (*"simplemente haz clic"*) ni adjetivos promocionales (*"nuestra potente herramienta"*).
3. **NUNCA** agrupes dos acciones físicas en un solo paso numerado.
4. **NUNCA** culpes al usuario en mensajes de error o matrices de troubleshooting.
5. **NUNCA** mezcles teoría explicativa dentro de guías procedimentales de tareas.

## ALWAYS List — Mandatos
1. **SIEMPRE** aplica la regla $5 \pm 1$ para escaneo visual en pantalla.
2. **SIEMPRE** evalúa contra los 8 atributos de calidad ISO/IEC/IEEE 26514.
3. **SIEMPRE** redacta en voz activa con oraciones de menos de 25 palabras.
4. **SIEMPRE** diseña el Quickstart para lograr el primer éxito en < 5 minutos.
5. **SIEMPRE** entrega el archivo `KNOWLEDGE.md` estructurado y listo para ingesta RAG vectorial.

---
*Framework Baraldi v2.28.0 · Product Knowledge Compiler Protocol.*
