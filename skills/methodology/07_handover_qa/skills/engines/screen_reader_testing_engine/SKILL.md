---
name: screen-reader-testing-protocol
description: >
  Protocolo operativo para la ejecución de pruebas con lectores de pantalla (VoiceOver, NVDA, TalkBack).
  Proporciona scripts de prueba, comandos esenciales y criterios de éxito para validar la experiencia de usuario con tecnología asistiva.
keywords: a11y, screen reader, VoiceOver, NVDA, TalkBack, testing script, runbook, accesibilidad manual.
version: "2.26.14"
---

# 🔊 Skill 31 — Protocolo de Pruebas con Lector de Pantalla & Runbook

Este protocolo transforma la evaluación de accesibilidad de una "lista de deseos" en un **Script de Pruebas ejecutable**. Su objetivo es que cualquier miembro del equipo (QA, Dev o Designer) pueda auditar sistemáticamente la experiencia auditiva del producto.

---

## 🛠️ 1. Configuración del Entorno (Test Lab)

### Combinaciones Navegador/Lector (Mandatorias para Certificación):
| OS | Lector de Pantalla | Navegador Sugerido |
|----|--------------------|--------------------|
| **macOS** | VoiceOver | Safari / Chrome |
| **Windows** | NVDA / JAWS | Firefox / Chrome |
| **iOS** | VoiceOver | Safari |
| **Android** | TalkBack | Chrome |

### Comandos Rápidos de Emergencia:
- **VoiceOver (Mac):** `Cmd + F5` (Activar/Desactivar) | `VO + U` (Rotor de elementos).
- **NVDA (Windows):** `Insert + N` (Menú) | `Insert + F7` (Lista de elementos).
- **TalkBack (Android):** Deslizar hacia arriba y derecha (Menú local).

---

## 📋 2. Checklists de Prueba Sistémica

### A. Estructura y Landmarks
- [ ] **Landmarks:** ¿Se anuncian correctamente las regiones (`main`, `nav`, `header`, `footer`)?
- [ ] **Jerarquía:** ¿La jerarquía de encabezados (`h1` a `h6`) es lógica y permite la navegación rápida?
- [ ] **Skip Links:** ¿Los "Skip to Content" funcionan y se anuncian al recibir el foco inicial?

### B. Navegación por Teclado e Interacción
- [ ] **Orden de Foco:** ¿Coincide el orden auditivo con el orden visual de la pantalla?
- [ ] **Trampas de Foco:** ¿Es posible entrar y **SALIR** de todos los modales y menús usando solo el teclado?
- [ ] **Estados Dinámicos:** ¿Se anuncian los cambios de estado (`expanded`, `collapsed`, `selected`, `checked`) en tiempo real?

### C. Formularios e Inputs
- [ ] **Labels:** ¿Cada input anuncia su etiqueta (`label`) asociada?
- [ ] **Errores:** ¿Los mensajes de error se anuncian automáticamente vía `aria-live` o al fallar la validación?
- [ ] **Requeridos:** ¿Los campos obligatorios están marcados y se anuncian como tales?

---

## 🚫 NEVER List — Lo que NUNCA debemos hacer
- **NUNCA** confíes solo en herramientas automáticas (Lighthouse/Axe); el 70% de la accesibilidad es semántica y lógica que solo se detecta escuchando.
- **NUNCA** uses un `tabindex` mayor a 0; rompe el orden natural de lectura y desorienta al usuario.
- **NUNCA** dejes imágenes sin atributo `alt` (si son decorativas, usa `alt=""` para que el lector las ignore).
- **NUNCA** incluyas frases como "Imagen de..." en el texto alternativo; el lector ya anuncia que el elemento es una imagen.

## ✅ ALWAYS List — Mandatos de Accesibilidad Auditiva
- **SIEMPRE** verifica que el nombre accesible (`aria-label`) coincida con la intención visual del botón.
- **SIEMPRE** anuncia los cambios de contenido dinámico que ocurren sin recargar la página.
- **SIEMPRE** prueba los flujos críticos (Compra, Registro, Login) de principio a fin solo con el lector activado.

---

## 💰 El Valor de Negocio (Business Outcome)
- **Reducción de Deuda Técnica:** Corregir accesibilidad en la fase de QA es 10 veces más barato que hacerlo después del lanzamiento.
- **Mejora del SEO:** La estructura semántica requerida por un lector de pantalla es la que usan los bots de Google para indexar el sitio.
- **Inclusión Real:** Cumplimiento con normativas legales y apertura del mercado a usuarios con diversas capacidades.

---

## 📄 Plantilla de Reporte de Hallazgo (Issue)
```markdown
### Issue #[X]: [Título Descriptivo]
- **Lector/Navegador:** [ej: NVDA + Firefox]
- **Ubicación:** [URL o Componente]
- **Pasos para reproducir:** [Paso 1, 2, 3]
- **Qué se escuchó:** [Descripción del error auditivo]
- **Qué debería escucharse:** [Comportamiento esperado]
- **Criterio WCAG:** [ej: 2.4.3 Focus Order]
- **Severidad:** [Crítica / Seria / Moderada]
```

---
*Framework Baraldi v2.26.14 · Skill 31 · Engine de Pruebas AT*
