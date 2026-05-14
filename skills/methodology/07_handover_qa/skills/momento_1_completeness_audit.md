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

### 5. Semántica y Copy (Anti-Lorem Ipsum)
- [ ] Todo el UI Copy está finalizado y proviene de la Etapa 05 o PMM. Cero "Lorem Ipsum".
- [ ] Mensajes de error y tooltips redactados con voz activa.

### 6. Accesibilidad (A11y Core)
- [ ] Contraste de color pasa WCAG AA (mínimo 4.5:1).
- [ ] Orden de navegación por teclado (Focus order) documentado.
- [ ] Áreas táctiles de mínimo 44x44px.

### 7. Exportación de Activos (Assets)
- [ ] Íconos exportados en SVG y optimizados.
- [ ] Imágenes exportadas en WebP/PNG optimizado.

---
**Misión de Bloqueo:** El Agente debe decir: *"He encontrado 3 casos de borde sin resolver (Error de red, Estado vacío y texto largo en el título). Por protocolo, no podemos hacer Handoff hasta que dibujemos estas resoluciones."*.

---
*Framework Baraldi v2.26.3 · Quality Assurance Protocol.*
