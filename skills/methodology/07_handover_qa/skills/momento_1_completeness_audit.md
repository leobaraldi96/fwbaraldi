---
name: momento-1-completeness-audit
description: La Aduana Final. Protocolo de auditoría para verificar la completitud del diseño antes del desarrollo. Asegura que no falten estados, flujos, ni edge cases.
---

# [MOMENTO 1] Design Completeness Audit (Go/No-Go)

> **Misión:** Actuar como el "Design QA Expert". Esta es la aduana final antes de pasar a código. Si el diseño no supera este checklist al 100%, no puede avanzar a desarrollo y debe devolverse a las Etapas 05 o 06.

## 🎯 Checklist de Completitud (Aduana QA)

El Agente debe auditar y verificar las siguientes 7 dimensiones:

### 1. Cobertura de Flujos (Screen Coverage)
- [ ] Todas las pantallas del flujo principal documentadas.
- [ ] Puntos de entrada y salida (éxito, cancelar, atrás) claros.
- [ ] Diagrama de flujo de usuario (User flow) sin "callejones sin salida".

### 2. Matriz de Estados Interactivos
Por cada elemento interactivo (botones, links, inputs):
- [ ] Default, Hover, Active/Pressed.
- [ ] Focus (A11y), Disabled, Loading/Skeleton, Selected.
- [ ] Formularios: Empty, Filled, Error (con mensaje), Success.

### 3. Casos de Borde (Edge Cases)
- [ ] **Data:** Empty state (sin datos), Partial data, Full data, Paginación.
- [ ] **Errores:** Fallos de servidor/API, errores de red (offline), Timeouts, Permisos denegados (403).
- [ ] **Límites:** Textos extremadamente largos truncados correctamente, caracteres especiales soportados.

### 4. Responsividad Acordada
- [ ] Comportamiento documentado para Mobile, Tablet y Desktop (o los breakpoints definidos en E06).
- [ ] Consideraciones táctiles vs. Puntero.

### 5. Narrativa de Movimiento (Motion Design)
- [ ] **Guion de Movimiento:** Definición del "Por qué" y "Para qué" de cada animación.
- [ ] **Especificación Técnica:** Curvas de velocidad (Easing), Duración (ms) y Delays documentados.
- [ ] **Consistencia:** Las animaciones refuerzan la jerarquía y no generan ruido cognitivo.

### 6. Asset Readiness & Delivery
- [ ] **Inventario de Assets:** Listado completo de iconos, ilustraciones y fotos.
- [ ] **Assets de Sistema (OS Specific):** Splash screens, App Icons (iOS/Android/Web), Favicons y recursos para diferentes densidades (1x, 2x, 3x).
- [ ] **Formato y Optimización:** SVG (vectorial/limpio), WebP/PNG optimizados para web.
- [ ] **Protocolo de Acceso:** Documentación de dónde y cómo el dev descarga los assets (ej. Figma Export, carpeta en repo, CDN).

### 7. Matriz de Traducciones (i18n Readiness)
Si el proyecto es multi-idioma:
- [ ] **Matriz Consolidada:** Documento con llaves (keys) y valores en todos los idiomas soportados.
- [ ] **Copy Finalizado:** Estado 100% aprobado (sin placeholders).
- [ ] **Formato Ready:** Preparado para copiar y pegar directamente en el motor de traducciones (JSON/YAML/i18next).

### 7. Semántica y Copy (Anti-Lorem Ipsum)
- [ ] Todo el UI Copy está finalizado y proviene de la Etapa 05 o PMM. Cero "Lorem Ipsum".
- [ ] Mensajes de error y tooltips redactados con voz activa.

### 8. Accesibilidad (A11y Core)
- [ ] **Mapeo A11y:** Documentación de qué elementos son interactivos y su rol (button, link, slider).
- [ ] **Textos Alternativos:** Alt-texts definidos para todas las imágenes e iconos informativos.
- [ ] **Labels & ARIA:** Definición de `aria-label`, `aria-labelledby` y `aria-describedby` para elementos sin texto visible.
- [ ] **Lectores de Pantalla:** Definición de textos específicos para lectores de pantalla donde la experiencia visual difiera de la auditiva.
- [ ] **Contraste & Foco:** Contraste según nivel WCAG acordado (**A, AA o AAA**) y orden de navegación (Focus order) 100% documentado.
- [ ] **Áreas Táctiles:** Mínimo 44x44px.

### 9. Cumplimiento Legal & Privacidad (Legal Compliance)
- [ ] **Validación Legal:** ¿Ha sido la experiencia revisada y aprobada por el equipo legal/compliance?
- [ ] **Gestión de Consentimiento:** Diseño de Opt-ins, Checkboxes y flujos de aceptación de términos.
- [ ] **Acceso a Documentación:** Enlaces y flujos de acceso a Políticas de Privacidad, Términos y Condiciones y Cookies.
- [ ] **Jerarquía de Obligatoriedad:** Distinción clara entre elementos legales mandatorios y consultivos.
- [ ] **Data Privacy (GDPR/Local):** Flujos de revocación de consentimiento y acceso a datos personales documentados.

---
**Misión de Bloqueo:** El Agente debe decir: *"He encontrado 3 casos de borde sin resolver (Error de red, Estado vacío y texto largo en el título). Por protocolo, no podemos hacer Handoff hasta que dibujemos estas resoluciones."*.

---
*Framework Baraldi v2.26.7 · Quality Assurance Protocol.*
