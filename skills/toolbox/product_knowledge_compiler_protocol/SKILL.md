---
name: product-knowledge-compiler-protocol
description: >
  Protocolo para compilar toda la inteligencia generada en las Etapas 01 a 07 en artefactos
  vivos de Centro de Ayuda (KNOWLEDGE.md / HELP_CENTER.md), manuales de usuario por rol,
  guías Quickstart y paquetes de contexto RAG para Asistentes de IA (Landing & In-App Copilot).
keywords: knowledge base, help center, manual de usuario, copilot rag, cx, soporte, onboarding, faq, plain language, sense-making
version: "2.28.0"
---

# Protocolo — Compilador de Base de Conocimiento y Ayuda de Producto

Este protocolo elimina el **"Handoff Ciego"** hacia los equipos de CX, Soporte y Documentación. Su objetivo es tomar toda la inteligencia estructurada generada durante las Etapas 01 a 07 del **Framework Baraldi** y compilarla de forma automática en un sistema de conocimiento vivo para humanos y agentes de IA, bajo estándares mundiales de redacción técnica y accesibilidad cognitiva.

---

## 1. Filosofía de Contenido: Minimalismo y Sentido

No se redacta ayuda desde cero ni se abruma al usuario con sobreinformación. La documentación opera bajo tres leyes fundamentales:

1. **La Paradoja del Sentido (Sense-Making):** Los usuarios no leen manuales de punta a punta; acuden a ellos cuando están atascados o cometen un error. El contenido se diseña exclusivamente para el **"momento enseñable"** (resolución inmediata de una fricción puntual).
2. **Every Page is Page One:** Cada artículo o sección de ayuda debe ser completamente autónomo. El usuario debe comprender el contexto, el objetivo y la solución sin importar en qué pantalla o URL haya aterrizado.
3. **Divulgación Progresiva (Progressive Disclosure):** Se presenta primero la acción primaria esencial; las configuraciones avanzadas u opcionales quedan al final de la guía.

```
┌──────────────────────────────────────┐     ┌──────────────────────────────────────┐
│       ARTEFACTOS FW BARALDI          │     │    BASE DE CONOCIMIENTO (CX / AI)    │
├──────────────────────────────────────┤     ├──────────────────────────────────────┤
│ E01: Problem Framing / Pitch / JTBD  │ --> │ FAQ Comercial, Landing, Quickstart   │
│ E02: Actor Map / Service Blueprint   │ --> │ Manuales de Usuario por Rol/Actor    │
│ E03: Business Rules / Logic Matrix   │ --> │ Troubleshooting ("¿Por qué falló?")  │
│ E04: Sitemap / Taxonomía / Glosario  │ --> │ Glosario y Taxonomía del Help Center │
│ E05: Interaction Flows / States      │ --> │ Guías Paso a Paso ("Cómo hacer X")   │
│ E06: VOICE.md & DESIGN.md            │ --> │ Tono del Asistente & Copilot Prompts │
│ E07: QA Checklist & Edge Cases       │ --> │ Matriz de Errores y Recuperación     │
└──────────────────────────────────────┘     └──────────────────────────────────────┘
```

---

## 2. Estilo de Escritura y Accesibilidad Cognitiva

Todo texto de ayuda compilado debe cumplir estrictamente con los siguientes estándares:

* **Regla de Oro: Un Paso = Una Sola Acción:** En procedimientos numerados, cada paso contiene una única acción física o mental. Prohibido agrupar múltiples clics o decisiones en un solo punto.
* **Lenguaje Claro (Plain Language):** Oraciones cortas, palabras comunes, sin tecnicismos innecesarios (nivel de lectura equivalente a 8º grado).
* **Voz Activa Obligatoria:** Aporta energía y claridad directa (*"El sistema guarda los cambios"* en lugar de *"Los cambios son guardados por el sistema"*; *"Haz clic en Guardar"* en vez de *"Se debe presionar el botón"*).
* **Diseño para Escaneo Visual:** Jerarquía estricta (H1, H2, H3), listas viñetadas, negritas estratégicas en nombres exactos de botones y abundante espacio en blanco.
* **Accesibilidad Universal:** Enlaces siempre descriptivos (prohibido *"haz clic aquí"*; usar *"Descarga la plantilla de importación"*). Texto alternativo (*alt text*) descriptivo en diagramas e imágenes.

---

## 3. Identidad Verbal y Modulación de Tono Contextual

La voz del producto es consistente (definida en `VOICE.md`), pero el **tono se modula según el contexto de uso**:

| Contexto / Sección | Actitud & Tono Requerido | Objetivo Psicológico |
| :--- | :--- | :--- |
| **Onboarding / Quickstart** | Entusiasta, directo, inspirador. | Lograr el primer éxito (*Time-to-First-Success*) en < 5 minutos. |
| **Guías de Tareas Diarias** | Claro, estructurado, facilitador. | Ejecución eficiente y sin distracciones. |
| **Troubleshooting & Errores** | Empático, calmado, altamente resolutivo y **100% libre de culpas** hacia el usuario. | Bajar la ansiedad y ofrecer caminos inmediatos de recuperación. |

---

## 4. Estructura Canónica de `docs-fwbaraldi/KNOWLEDGE.md`

El compilador genera el documento maestro organizado en 4 capas operativas:

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
- **Procedimiento:**
  1. {Acción 1}
  2. {Acción 2}
  3. {Acción 3}

### Para el Rol: {Rol B - Ej: Cliente / Usuario Final}
#### Cómo {Tarea Principal 2}
- **Procedimiento:** {Paso a paso bajo la regla "Un paso, una acción"}

## Capa 4: Matriz de Troubleshooting y Resolución de Errores (Blameless)
| Qué ve el usuario en pantalla | Causa de Negocio (E03) | Solución Paso a Paso (Camino de Salida) |
| :--- | :--- | :--- |
| Botón de acción deshabilitado | Falta completar campo obligatorio | Completar el campo requerido {Y} |
| "Turno no disponible" | Cupo agotado o fuera de horario | Seleccionar un horario disponible en verde |
| Error de conexión o pasarela | Timeout de servidor | Aguardar 2 min o reintentar con otro medio |
```

---

## 5. Compilación para Asistentes de IA (Dual RAG System Prompts)

```xml
<System_Landing_Copilot>
Eres el Asistente Oficial de {Producto}. Tu objetivo es explicar claramente qué problema
resolvemos, a quién ayudamos y guiar al usuario a registrarse.
- Responde siempre usando el tono definido en VOICE.md.
- Si te preguntan por precios o límites, básate estrictamente en la Capa 1 de KNOWLEDGE.md.
- Nunca inventes funcionalidades no descritas en el glosario oficial.
</System_Landing_Copilot>

<System_InApp_Copilot>
Eres el Copilot de Soporte Contextual dentro de la plataforma {Producto}.
- Tienes acceso al rol actual del usuario ({USER_ROLE}) y a la ruta activa ({CURRENT_ROUTE}).
- Si el usuario reporta un bloqueo, consulta la Capa 4 (Troubleshooting) y explícale con tono empático
  y sin culpas qué regla de negocio o dato le falta.
- Aplica la regla "Un paso = Una acción" y utiliza los nombres exactos de botones definidos en el glosario.
</System_InApp_Copilot>
```

---

## NEVER List — Anti-patrones
1. **NUNCA** agrupes múltiples acciones en un solo paso numerado.
2. **NUNCA** culpes al usuario en secciones de error (*"Cometiste un error al ingresar..."* -> usar *"El formato requiere 8 caracteres"*).
3. **NUNCA** uses enlaces genéricos como *"haz clic aquí"*.
4. **NUNCA** utilices sinónimos variados para el mismo botón o sección (respetar la taxonomía fija de E04).

## ALWAYS List — Mandatos
1. **SIEMPRE** diseña la guía Quickstart para lograr el primer éxito en menos de 5 minutos.
2. **SIEMPRE** redacta en voz activa y Plain Language.
3. **SIEMPRE** modula el tono: inspirador en Quickstart, resolutivo y empático en Troubleshooting.
4. **SIEMPRE** entrega el archivo `KNOWLEDGE.md` estructurado y listo para exportación o ingesta RAG.

---
*Framework Baraldi v2.28.0 · Product Knowledge Compiler Protocol.*
