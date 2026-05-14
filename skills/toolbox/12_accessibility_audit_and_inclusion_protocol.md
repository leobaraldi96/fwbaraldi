# Toolbox: Accessibility Audit & Inclusion Protocol (a11y)

---

```yaml
name: accessibility-audit-inclusion
description: >
  Protocolo para auditar y documentar la accesibilidad de productos digitales basándose en los estándares WCAG.
  Asegura que el producto sea inclusivo, legalmente cumplidor y técnicamente robusto.
  Úsala en la Etapa 06 (Hardenización) para certificar la calidad inclusiva.
  Keywords: a11y, accesibilidad, WCAG, inclusión, auditoría, POUR, lectores de pantalla, teclado.
skill_id: toolbox_accessibility
version: "1.0.0"
framework: Baraldi
type: "Toolbox / Ethical Quality"
trigger: "Cuando el producto necesita certificar cumplimiento de accesibilidad (A, AA, AAA), prepararse para auditorías externas o mejorar la inclusión de usuarios con diversas capacidades."
```

---

## Rol de esta herramienta
Esta skill actúa como un **Accessibility Specialist**. Su misión es identificar barreras de interacción, evaluar su impacto en diferentes perfiles de usuario y proponer soluciones técnicas y de diseño que sigan los principios **POUR** (Perceivable, Operable, Understandable, Robust).

---

## Estructura del Reporte de Accesibilidad

### 1. Resumen de Conformidad
- **Estado General:** ¿Cumple con el target (ej: WCAG 2.1 AA)?
- **Bloqueadores Críticos:** Listado de problemas que impiden el uso total del producto.
- **Esfuerzo de Remediación:** Estimación de tiempo para corregir los hallazgos.

### 2. Documentación de Hallazgos (Issues)
Cada problema detectado debe incluir:
- **Severidad:** Crítica, Seria, Moderada, Menor.
- **Criterio WCAG:** Referencia exacta al estándar (ej: 1.4.3 Contraste).
- **Impacto en el Usuario:** Quién se ve afectado y cómo (ej: "Un usuario que solo usa teclado no puede cerrar el modal").
- **Fix Recomendado:** Guía clara para diseño y desarrollo sobre cómo corregirlo.

### 3. Clasificación por Categorías (POUR)
- **Perceptible:** Contraste, tamaños de fuente, alternativas de texto (Alt-text).
- **Operable:** Navegación por teclado, foco visible, tiempos de espera.
- **Comprensible:** Etiquetas claras, mensajes de error útiles, consistencia.
- **Robusto:** Compatibilidad con lectores de pantalla y diferentes navegadores.

### 4. Hoja de Ruta de Remediación
- **Inmediato (P0):** Bloqueadores de flujo principal.
- **Corto Plazo (P1):** Impacto significativo en la experiencia.
- **Mediano/Largo Plazo (P2/P3):** Inconvenientes menores o mejoras de pulido.

---

## Protocolo de Ejecución

1. **Automated Audit:** Uso de herramientas de escaneo (Axe, Lighthouse).
2. **Manual Keyboard Test:** Navegar todo el producto sin usar el mouse.
3. **Screen Reader Review:** Validar la semántica y el orden de lectura con asistentes de voz.
4. **Color & Contrast Audit:** Verificación de legibilidad visual.

---

## 💰 ROI de la Inclusión (El Argumento de Negocio)
La accesibilidad no es solo ética, es rentabilidad:
- **Expansión de Mercado:** Acceso al ~15% de la población mundial con algún tipo de discapacidad.
- **Eficiencia SEO:** Los rastreadores de Google son, en esencia, usuarios ciegos; lo que es bueno para un lector de pantalla es excelente para el ranking.
- **Mitigación de Riesgos:** Protección legal contra demandas por discriminación digital (ADA/EN 301 549).
- **Mejor UX para todos:** El "efecto rampa": las mejoras para discapacitados benefician al usuario distraído, con poca luz o en movimiento.

---

## 🚫 NEVER List (Lo que NO debemos hacer)
- **NUNCA** reportar un error sin explicar el impacto humano (ej: No digas "Falta ARIA-label", di "Un usuario ciego no puede saber qué hace este botón").
- **NUNCA** usar herramientas automáticas como única fuente de verdad; solo detectan el 30% de los problemas.
- **NUNCA** sacrificar la función por la estética; el diseño visual debe ser esclavo de la legibilidad.
- **NUNCA** dejar la accesibilidad para el final del sprint; es deuda técnica de alto costo.

---

## Reglas de Oro de la Accesibilidad Baraldi
- **La Accesibilidad no es un "añadido":** Se diseña desde la Etapa 04, no se "arregla" al final.
- **Semántica es Poder:** El uso correcto de HTML y ARIA es la base de un producto robusto.
- **Diseño para los Bordes:** Si funciona para un usuario con limitaciones extremas, funcionará mejor para todos.

---

*Framework Baraldi v2.26.0 · toolbox/12_accessibility_audit_and_inclusion_protocol.md*
