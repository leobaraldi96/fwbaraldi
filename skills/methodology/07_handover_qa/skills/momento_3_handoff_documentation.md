---
name: momento-3-handoff-documentation
description: Protocolo generador del Documento Maestro de Handoff para el equipo de desarrollo y el plan de gobernanza (DesignOps) para su adopción.
---

# [MOMENTO 3] Handoff Documentation & Rollout Governance

> **Misión:** Actuar como el "DesignOps Manager". Este momento consolida las especificaciones visuales en un entregable oficial (Feature Handoff) y establece las reglas de adopción y mantenimiento del sistema (Rollout Governance). Absorbe las antiguas Skills 33 y 34.

## 📄 Parte 1: El Documento Maestro de Handoff (Feature Spec)

Al finalizar una Feature o flujo, el Agente debe generar un documento estructurado de Handoff (ej. `Handoff_[Feature].md`) que acompañe al ticket de desarrollo:

1. **Visión General:** Propósito de la Feature y links oficiales a Figma/Prototipos.
2. **Especificaciones Visuales:** Mapeo de tokens utilizados, requerimientos de grid y assets gráficos.
3. **Comportamiento Interactivo & Motion Script:** Guion de narrativa de movimiento:
   - **Narrativa:** Propósito del movimiento (guía, feedback, énfasis).
   - **The Motion Contract:** Valores de Duración, Easing (curvas Bezier), Delay y Transformaciones (X/Y, Scale, Opacity).
4. **Requerimientos de Contenido & i18n:** Microcopy final y **Matriz de Traducciones** (Keys/Values) lista para implementación técnica.
5. **Asset Delivery Protocol (Performance Optimized):** Documentación y entrega de assets multimedia:
   - **Graphics (SVG-First):** Iconos y vectores limpios (auditados por seguridad).
   - **Bitmaps (WebP-First):** Imágenes optimizadas en peso (KB) para web/mobile.
   - **Platform Specific:** Entrega de PNGs en densidades (1x, 2x, 3x) solo para assets de sistema u OS requeridos.
   - **Resolution Guide:** Especificaciones de reescalado y áreas de recorte (Safe areas).
6. **Especificaciones Técnicas (Developer Contract):** Props esperados de la vista, eventos principales y carga de datos asíncrona.
7. **Casos de Borde (Edge Cases):** Escenarios de error (API/Red), Empty states y Loading states.
8. **A11y Mapping & Specs:** Documentación técnica de accesibilidad:
   - **Alt-texts & Labels:** Listado de textos alternativos para imágenes y `aria-labels` para elementos interactivos.
   - **Screen Reader Strategy:** Textos descriptivos para lectores de pantalla y roles ARIA.
   - **Focus Management:** Definición del orden de tabulación y comportamiento del foco en modales y flujos complejos.
9. **Legal & Privacy Specs:** Mapeo de Opt-ins mandatorios, links a documentos legales (T&C) y flujos de consentimiento auditados por Legal.
10. **Technical Performance Guide (Optimization):** Guía de implementación para ingeniería:
    - **Font Strategy:** Selección de pesos específicos, uso de Variable Fonts y optimización de carga (subsets).
    - **Unit Governance:** Justificación técnica del uso de `rem` y definición del `root font-size`.
    - **Color Gamut:** Guía de uso de `oklch()` para máxima vibrancia y uniformidad perceptual.
    - **Framework Override Map:** Tabla de equivalencias entre las variables del diseño y las variables nativas del framework base (ej. `--bs-primary`, `--color-primary-500`).
    - **Base Code Snippets:** Configuración base para CSS Variables o Tailwind Config.
11. **System Orchestration Specs (Invisible UX):** Especificaciones de lógica de sistema:
    - **Permissions Governance:** Mapeo de flujos de Pedido, Aceptación y Rechazo de permisos de OS (Cámara, GPS, Notificaciones).
    - **Communication Cycle Map (Full Lifecycle):** Mapa total de interacción (Push, Email, SMS) coordinado con la **Matriz i18n**.
        - **Comm-Assets:** Wireframes y diseños en alta para piezas de comunicación externa (Emails/Push).
        - **Logic & Feedback:** Clasificación de piezas (Consultivas vs Accionables) y especificación de Deep Links de retorno al producto.
    - **Measurement & Analytics Plan:** Especificación de herramientas y eventos:
        - **Event Tagging Map:** Listado de eventos críticos (clicks, scrolls, conversions) y propiedades para implementación.
        - **Behavioral Tools:** Configuración requerida de herramientas de mapas de calor y grabación de sesiones (ej. Hotjar).

## 🏢 Parte 2: Gobernanza y Adopción (DesignOps)

El diseño no sirve si no se adopta. Para sistemas grandes, el Agente debe proponer un modelo de gobernanza:

1. **Plan de Despliegue:**
   - Piloto: Pruebas en un flujo de bajo riesgo.
   - Adopción Mayoritaria: Implementación obligatoria en nuevas features.
2. **Modelo de Contribución:**
   - ¿Cómo se propone un nuevo componente si el actual no sirve? (Flujo de Issues y Pull Requests).
3. **Soporte y Versionado:**
   - Establecer canales de comunicación (ej. `#design-system`) y versionado semántico para actualizaciones de UI que puedan romper la interfaz existente.

## 🕵️ Parte 3: Plan de Acompañamiento y Veeduría
El Handoff marca el fin de la construcción de diseño, pero el inicio de la **Veeduría de la Experiencia**. El Agente debe formalizar los siguientes puntos de compromiso:

1.  **Soporte de Implementación:** Disponibilidad del equipo de diseño para resolver ambigüedades técnicas o de lógica (E03) durante el desarrollo.
2.  **QA Proactivo & Auditoría QoE:** Auditoría técnica en versiones Alfa/Beta:
    - **Performance Perceptual:** Validación de tiempos de carga y fluidez de animaciones (sin "jank").
    - **Resource Efficiency:** Monitoreo de consumo de datos y batería (especialmente en assets pesados).
    - **Flow Continuity:** Verificación de que no existan flujos rotos, estados de error huérfanos o callejones sin salida.
    - **Technical Hygiene:** Auditoría de consola (cero errores/warnings) y red (cero 404s/archivos huérfanos).
    - **Rendering Integrity:** Monitoreo de áreas de repintado (repaints) y estabilidad del viewport (cero elementos fugados).
    - **Core Web Vitals Audit:** Verificación de LCP (carga), INP (interactividad) y CLS (estabilidad visual).
    - **Real-Device Adaptation:** Validación en dispositivos físicos de: notches/muescas, teclados virtuales, áreas táctiles y gestos nativos.
    - **Performance & TTFB:** Verificación de usabilidad y respuesta de servidor en entornos reales.
3.  **Iteración Técnica:** Si ingeniería encuentra un bloqueador, diseño asume el compromiso de pivotar la solución manteniendo el outcome de negocio.
4.  **Cierre de Hito (Lanzamiento):** Presencia de diseño en el testeo final con usuarios reales para validar que la implementación cumple con la North Star definida en la Etapa 01.

---
**Misión de Cierre:** El Agente debe entregar estos artefactos durante la **Ceremonia de Handoff** con el mensaje: *"Este hito formaliza nuestra transición de diseñadores a Veedores de la Experiencia. No entregamos archivos, entregamos un compromiso de acompañamiento hasta que el producto esté en manos del usuario"*.

---
*Framework Baraldi v2.26.14 · DesignOps & Accompaniment Protocol.*
