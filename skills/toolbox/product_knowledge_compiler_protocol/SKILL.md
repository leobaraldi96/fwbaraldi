---
name: product-knowledge-compiler-protocol
description: >
  Protocolo para compilar toda la inteligencia generada en las Etapas 01 a 07 en artefactos
  vivos de Centro de Ayuda (KNOWLEDGE.md / HELP_CENTER.md), manuales de usuario por rol
  y paquetes de contexto RAG para Asistentes de IA (Landing & In-App Copilot).
keywords: knowledge base, help center, manual de usuario, copilot rag, cx, soporte, onboarding, faq
version: "2.28.0"
---

# Protocolo — Compilador de Base de Conocimiento y Ayuda de Producto

Este protocolo elimina el **"Handoff Ciego"** hacia los equipos de CX, Soporte y Documentación. Su objetivo es tomar toda la inteligencia estructurada generada durante las Etapas 01 a 07 del **Framework Baraldi** y compilarla de forma automática en un sistema de conocimiento vivo para humanos y agentes de IA.

---

## 1. Filosofía "Zero-Waste": El Conocimiento ya está Escrito

No se redacta ayuda desde cero. La documentación de soporte es la **traducción pedagógica** de los artefactos de diseño e ingeniería ya validados:

```
┌──────────────────────────────────────┐     ┌──────────────────────────────────────┐
│       ARTEFACTOS FW BARALDI          │     │    BASE DE CONOCIMIENTO (CX / AI)    │
├──────────────────────────────────────┤     ├──────────────────────────────────────┤
│ E01: Problem Framing / Pitch / JTBD  │ ──► │ FAQ Comercial, Landing, "¿Para qué?" │
│ E02: Actor Map / Service Blueprint   │ ──► │ Manuales de Usuario por Rol/Actor    │
│ E03: Business Rules / Logic Matrix   │ ──► │ Troubleshooting ("¿Por qué falló?")  │
│ E04: Sitemap / Taxonomía / Glosario  │ ──► │ Glosario y Taxonomía del Help Center │
│ E05: Interaction Flows / States      │ ──► │ Guías Paso a Paso & Onboarding       │
│ E06: VOICE.md & DESIGN.md            │ ──► │ Tono del Asistente & Copilot Prompts │
│ E07: QA Checklist & Edge Cases       │ ──► │ Matriz de Errores y Recuperación     │
└──────────────────────────────────────┘     └──────────────────────────────────────┘
```

---

## 2. Estructura Canónica de `docs-fwbaraldi/KNOWLEDGE.md`

El compilador genera un artefacto maestro estructurado en 4 capas de consumo:

```markdown
# Base de Conocimiento & Manual del Producto — {Nombre del Producto}

## Capa 1: Descubrimiento & Preventa (Landing / Logged-Out)
- **Propuesta de Valor:** {Resumen claro del dolor que resuelve derivado de E01}
- **Público Objetivo:** {Perfiles y casos de uso principales}
- **FAQ Comercial & Planes:** {Respuestas directas a dudas de precios, límites y características}

## Capa 2: Glosario & Conceptos Clave (Taxonomía)
| Término Oficial | ¿Qué significa en este producto? | Términos NO recomendados (Evitar) |
| :--- | :--- | :--- |
| {Entidad de E04} | {Definición clara y concisa} | {Sinónimos confusos} |

## Capa 3: Guías de Uso y Manuales por Rol (Actor Manuals)
### Para {Rol A - Ej: Administrador / Dueño}
1. **Flujo de Configuración Inicial:** {Paso a paso derivado de E02/E05}
2. **Gestión Diaria:** {Acciones clave y atajos}

### Para {Rol B - Ej: Operador / Staff}
1. **Flujo de Atención:** {Paso a paso rápido}

### Para {Rol C - Ej: Cliente / Usuario Final}
1. **Cómo {Acción Principal - Ej: Reservar o Comprar}:** {Paso a paso sin fricción}

## Capa 4: Troubleshooting, Errores y Casos de Borde (Self-Service)
| Situación / Error en Pantalla | Causa de Negocio (E03) | Cómo Resolverlo (Paso a Paso) |
| :--- | :--- | :--- |
| Botón de acción deshabilitado | No se cumplió la regla {Regla X} | Completar el campo requerido {Y} |
| "Turno no disponible" | Cupo agotado o fuera de horario | Seleccionar un horario en verde |
| Pago rechazado / Pendiente | Timeout de pasarela | Aguardar 5 min o reintentar con otro medio |
```

---

## 3. Compilación para Asistentes de IA (Dual RAG Prompts)

El protocolo genera adicionalmente las directivas y chunks de contexto para desplegar copilotos de IA en el producto:

### Output A: System Prompt para Asistente de Landing (Presales / Público)
```markdown
Eres el Asistente Oficial de {Producto}. Tu objetivo es explicar claramente qué problema
resolvemos, a quién ayudamos y guiar al usuario a registrarse.
- Responde siempre usando el tono definido en VOICE.md.
- Si te preguntan por precios o límites, básate estrictamente en la Capa 1 de KNOWLEDGE.md.
- Nunca inventes funcionalidades no descritas en el glosario oficial.
```

### Output B: System Prompt para Copilot In-App (Soporte Contextual / Logueado)
```markdown
Eres el Copilot de Soporte dentro de la plataforma {Producto}.
- Tienes acceso al rol actual del usuario ({USER_ROLE}) y a la pantalla activa ({CURRENT_ROUTE}).
- Si el usuario reporta un bloqueo, consulta la Capa 4 (Troubleshooting) y explícale qué regla
  de negocio o dato le falta de forma empática y accionable.
- Dirige al usuario con nombres exactos de botones y secciones definidos en la Capa 2 (Glosario).
```

---

## NEVER List — Anti-patrones
1. **NUNCA** redactes la documentación de ayuda como prosa genérica desconectada de los nombres reales de la UI.
2. **NUNCA** uses capturas de pantalla o instrucciones que contradigan los tokens de `DESIGN.md` o el glosario de `E04`.
3. **NUNCA** dejes un mensaje de error o limitación de negocio sin su correspondiente camino de recuperación en la Capa 4.
4. **NUNCA** compiles el centro de ayuda ignorando el tono y tratamiento gramatical fijado en `VOICE.md`.

## ALWAYS List — Mandatos
1. **SIEMPRE** organiza las guías operativas divididas por el **Actor Map** de la Etapa 02.
2. **SIEMPRE** traduce las reglas de negocio de la Etapa 03 en explicaciones pedagógicas de causa y efecto.
3. **SIEMPRE** entrega el archivo `KNOWLEDGE.md` listo para ser exportado a Markdown, Notion, Intercom o HelpScout.
4. **SIEMPRE** genera los system prompts optimizados para IA con inyección de contexto RAG.

---
*Framework Baraldi v2.28.0 · Product Knowledge Compiler Protocol.*
