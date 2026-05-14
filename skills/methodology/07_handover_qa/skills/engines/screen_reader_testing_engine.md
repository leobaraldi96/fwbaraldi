# Toolbox: Screen Reader Testing Protocol & Runbook

---

```yaml
name: screen-reader-testing-protocol
description: >
  Protocolo operativo para la ejecución de pruebas con lectores de pantalla (VoiceOver, NVDA, TalkBack).
  Proporciona scripts de prueba, comandos esenciales y criterios de éxito para validar la experiencia de usuario con tecnología asistiva.
  Úsala en la Etapa 06 (Hardenización) o 07 (QA) para realizar pruebas manuales de accesibilidad.
  Keywords: a11y, screen reader, VoiceOver, NVDA, TalkBack, testing script, runbook, accesibilidad manual.
skill_id: toolbox_sr_testing
version: "2.26.3"
framework: Baraldi
type: "Toolbox / Execution / QA"
trigger: "Cuando el equipo necesita realizar pruebas manuales de accesibilidad con lectores de pantalla, validar flujos críticos para usuarios con discapacidad visual o certificar la calidad de la implementación semántica."
```

---

## 🎯 Propósito
Este protocolo transforma la evaluación de accesibilidad de una lista de deseos en un **Script de Pruebas ejecutable**. Su objetivo es que cualquier miembro del equipo (QA, Dev o Designer) pueda auditar sistemáticamente la experiencia auditiva del producto.

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
- [ ] ¿Se anuncian correctamente los Landmarks (`main`, `nav`, `header`, `footer`)?
- [ ] ¿La jerarquía de encabezados (`h1` a `h6`) es lógica y navegable?
- [ ] ¿Los "Skip Links" funcionan y se anuncian al recibir foco?

### B. Navegación por Teclado e Interacción
- [ ] **Orden de Foco:** ¿Coincide el orden auditivo con el orden visual?
- [ ] **Trampas de Foco:** ¿Es posible entrar y SALIR de todos los modales y menús?
- [ ] **Estados Dinámicos:** ¿Se anuncian los cambios de estado (`expanded`, `collapsed`, `selected`, `checked`)?

### C. Formularios e Inputs
- [ ] ¿Cada input anuncia su `label` asociado?
- [ ] ¿Los mensajes de error se anuncian automáticamente al fallar la validación?
- [ ] ¿Los campos obligatorios están marcados y se anuncian como tales?

---

## 🚫 NEVER List (Lo que NUNCA debemos hacer)
- **NUNCA** probar solo con herramientas automáticas (Lighthouse/Axe); el 70% de la accesibilidad es semántica y lógica que solo se detecta escuchando.
- **NUNCA** usar `tabindex` mayor a 0; rompe el orden natural de lectura y confunde al usuario.
- **NUNCA** dejar imágenes sin `alt` (a menos que sean decorativas, en cuyo caso deben tener `alt=""`).
- **NUNCA** anunciar "Imagen de..." en el texto alternativo; el lector de pantalla ya anuncia que es una imagen.

---

## 💰 El Valor de Negocio (Business Outcome)
- **Reducción de Deuda Técnica:** Corregir accesibilidad en la fase de QA es 10 veces más barato que hacerlo después de un lanzamiento fallido.
- **Mejora del SEO:** La estructura semántica requerida por un lector de pantalla es exactamente la misma que utilizan los bots de búsqueda para indexar tu contenido.
- **Responsabilidad Social y Legal:** Cumplimiento con normativas globales y expansión del mercado hacia usuarios con diversas capacidades.

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

*Framework Baraldi v2.26.3 · toolbox/13_screen_reader_testing_protocol_and_runbook.md*
