# ⚠️ DEPRECATED — Track Chat del Framework Baraldi

> **Estado:** Congelado en v2.3.3 · No se actualiza con las nuevas versiones del Core.

---

## Por qué está deprecado

El Framework Baraldi evolucionó hacia una arquitectura **agéntica y con memoria persistente** (v2.4.0+) que requiere herramientas que no están disponibles en interfaces de chat tradicionales (ChatGPT, Claude web, Gemini web):

*   **Memoria Sistémica:** La base de conocimiento (`memory/baraldi_knowledge_base.md`) no puede persistir en un chat sin que el usuario pegue manualmente el archivo entero en cada sesión.
*   **Modularidad:** El framework full carga instrucciones pieza a pieza según el contexto. El chat solo puede recibir un prompt monolítico.
*   **Sincronización imposible:** Mantener paridad entre el track Chat y el track Agéntico (Skills modulares) crea una deuda técnica insostenible a medida que se completan las 7 etapas.

---

## Qué hay aquí

| Archivo | Contenido | Versión |
|---|---|---|
| `etapa01_chat.md` | Etapa 01 — Problem Framing (one-page) | v2.3.3 |
| `etapa02_chat.md` | Etapa 02 — System Analysis (one-page) | v2.3.3 |

Estos archivos siguen siendo funcionales para uso esporádico o demostración del framework. Sin embargo, **no reflejan las capacidades completas del framework actual** y no se actualizarán.

---

## Cómo usar el Framework Baraldi real

Para tener acceso a la experiencia completa (memoria entre sesiones, modularidad, evolución continua):

1. Configurar un agente de IA compatible (Antigravity, Claude Code, Cursor, etc.)
2. Cargar `SKILL.md` en la raíz del proyecto
3. El agente detecta y carga el boot context, la memoria y las skills automáticamente

Ver `DOCUMENTACION_IA.md` para instrucciones completas.

---

*Framework Baraldi · chat/DEPRECATED.md · Decisión tomada en v2.4.1*
