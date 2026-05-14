# Toolbox: Localization & Global Readiness Protocol

---

```yaml
name: localization-global-readiness
description: >
  Protocolo para asegurar la calidad y adaptabilidad de un producto en múltiples mercados e idiomas (i18n/L10n).
  Incluye checklists de QA visual, funcional y cultural para lanzamientos internacionales.
  Úsala en la Etapa 06 (Hardenización) antes de un despliegue global.
  Keywords: i18n, l10n, localización, internacionalización, RTL, fechas, monedas, QA global.
skill_id: toolbox_localization
version: "1.0.0"
framework: Baraldi
type: "Toolbox / Quality & Scale"
trigger: "Cuando el producto se expande a nuevos mercados, idiomas o regiones con requerimientos culturales y técnicos específicos (RTL, monedas, formatos)."
```

---

## Rol de esta herramienta
Esta skill actúa como un **Global Product Quality Lead**. Su misión es asegurar que la experiencia del usuario sea nativa y fluida en cualquier idioma, eliminando fricciones culturales y errores de layout derivados de la traducción.

---

## Checklist de Calidad Global

### 1. Integridad de Traducción y Texto
- **Hardcoded Strings:** Detección de textos "quemados" en el código que no pasan por el sistema de traducción.
- **Missing Keys:** Validación de fallbacks cuando una traducción no existe.
- **Placeholder Integrity:** Asegurar que las variables (ej: `{name}`) funcionen en todos los idiomas.

### 2. Validación Visual y de Layout
- **Flexibilidad de Contenedores:** El diseño debe soportar crecimientos de texto de hasta un 40% (común en idiomas germánicos).
- **Font Support:** Soporte para caracteres especiales (tildes, cirílico, kanjis).
- **RTL Readiness:** Reglas de espejado (mirroring) para idiomas de derecha a izquierda (Árabe, Hebreo).

### 3. Formateo de Datos y Reglas Locales
- **Fechas y Horas:** Formatos DD/MM/AAAA vs MM/DD/AAAA y zonas horarias.
- **Monedas y Números:** Símbolos, separadores de miles/decimales y reglas de redondeo.
- **Sorting y Búsqueda:** Orden alfabético respetando acentos y reglas locales.

### 4. Validación de Inputs y Validaciones
- **Formatos de Dirección/Teléfono:** Adaptación de campos según el país.
- **Mensajes de Error:** Traducción del tono y claridad de los errores del sistema.

---

## Protocolo de Ejecución

1. **L10n Audit:** Auditoría visual del diseño en el idioma con los textos más largos.
2. **RTL Sanity Check:** Verificación de navegación y jerarquía en modo espejo.
3. **Data Formatting Test:** Validación de lógica de negocio con diferentes configuraciones de locale.
4. **Bug Reporting Localizado:** Plantilla de reporte que incluya el locale y la plataforma específica.

---

## Reglas de Oro de la Globalización Baraldi
- **Diseño Agóstico:** No diseñamos para un idioma, diseñamos para un sistema que soporta todos los idiomas.
- **Contexto es Rey:** Las traducciones sin contexto de UI suelen fallar. Siempre proveer capturas a los traductores.
- **Respeto Cultural:** La localización no es solo traducir palabras, es adaptar la experiencia a la cultura local.

---

*Framework Baraldi v2.26.0 · toolbox/10_localization_and_global_readiness_protocol.md*
