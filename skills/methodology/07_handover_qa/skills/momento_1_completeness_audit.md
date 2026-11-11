---
name: momento-1-completeness-audit
description: La aduana final (Go/No-Go). Protocolo de auditoría para verificar la completitud del diseño, el linaje de datos punta a punta y la ausencia de regresiones técnicas, de seguridad o de DevEx antes del despliegue.
version: "2.33.0"
---

# [MOMENTO 1] Design completeness, data lineage y auditoría de regresiones (Go/No-Go)

> **Misión:** Actuar como la aduana final de calidad antes de producción. Si el diseño o su implementación no superan este checklist al 100%, no pueden darse por cerrados y deben resolverse en las Etapas 05 o 06.

---

## Parte A: Checklist de completitud de diseño e interfaz (Aduana QA)

El agente debe auditar y verificar las siguientes 9 dimensiones:

### 1. Cobertura de flujos (Screen Coverage)
- [ ] Todas las pantallas del flujo principal documentadas y conectadas.
- [ ] Puntos de entrada y salida (éxito, cancelar, volver) explícitos.
- [ ] Flujo de usuario sin "callejones sin salida" (*dead ends*).

### 2. Matriz de estados interactivos
Por cada elemento interactivo (botones, enlaces, inputs, selectores):
- [ ] `Default`, `Hover`, `Active/Pressed`.
- [ ] `Focus-visible` (A11y), `Disabled`, `Loading/Skeleton`, `Selected`.
- [ ] Formularios: `Empty`, `Filled`, `Error` (con mensaje textual accionable), `Success`.

### 3. Casos de borde (Edge Cases)
- [ ] **Datos:** Estado vacío (*Empty State* con causa y acción), datos parciales, datos al límite y paginación.
- [ ] **Errores:** Fallos de servidor/API (`500`), sin conexión (*offline*), *timeouts* y permisos denegados (`401`/`403`).
- [ ] **Límites de contenido:** Textos muy largos truncados o refluidos sin romper el layout, soporte de caracteres especiales.

### 4. Responsividad y reflujo acordado
- [ ] Comportamiento verificado en teléfono, banda media (`600px-1024px`) y escritorio.
- [ ] Consideraciones táctiles (`44x44px` con separación, cero dependencia exclusiva de `:hover`) vs. puntero (`cursor: pointer`).

### 5. Narrativa de movimiento (Motion Design)
- [ ] **Propósito:** Cada animación guía la atención o explica una transición espacial (cero loops infinitos decorativos).
- [ ] **Especificación técnica:** Curvas de velocidad (*easing*), duración (`ms`) y respeto a `@media (prefers-reduced-motion: reduce)`.

### 6. Preparación y entrega de activos (Asset Readiness)
- [ ] **Inventario:** Íconos, ilustraciones e imágenes optimizados (`SVG` limpio para vectores, `WebP`/`AVIF` para fotos) con dimensiones declaradas contra CLS.
- [ ] **Activos de sistema:** Favicons, *app icons* y *open graph* (`og:image`) verificados.

### 7. Matriz de traducciones (i18n Readiness, si aplica)
- [ ] Llaves (*keys*) y valores consolidados en todos los idiomas soportados, sin cadenas concatenadas en código ni *placeholders* pendientes.

### 8. Semántica y copy (Anti-Lorem Ipsum)
- [ ] Todo el copy de interfaz está finalizado y alineado a `docs-fwbaraldi/VOICE.md` (cero *"Lorem Ipsum"*, cero datos falsos tipo `John Doe`, estricto *Sentence case* y cero guiones largos).

### 9. Accesibilidad (A11y Core) y cumplimiento legal
- [ ] **Accesibilidad:** Contraste matemático validado contra la tabla de pares críticos (`>= 4.5:1` texto, `>= 3:1` UI), navegación completa por teclado, `<label>` visibles y `aria-label` en controles de solo ícono.
- [ ] **Legal y privacidad (`LEGAL.md`):** Enlaces reales a políticas de privacidad/términos, gestión de consentimiento (*opt-in*) y jerarquía clara entre campos obligatorios y opcionales.

---

## Parte B: Trazabilidad punta a punta del dato (Data-to-UI Lineage Check)

Ante cualquier atributo o entidad nueva o modificada, queda prohibido aprobar la entrega sin verificar los **5 eslabones en cadena**:
1. **Persistencia y seguridad (DB/RLS):** ¿La columna o tabla existe en las migraciones y sus políticas RLS o permisos están activos?
2. **Contratos y tipado:** ¿Las interfaces o tipos TypeScript/esquemas reflejan exactamente el tipo y nulabilidad del dato?
3. **Capa de consulta / API (`SELECT` / Payload y paginación):** ¿La query o endpoint incluye explícitamente el campo en el `SELECT` sin filtrarlo por accidente y contempla paginación o rangos cuando la tabla puede superar las `1.000` filas (evitando el truncado silencioso de PostgREST/APIs y el colapso del DOM)?
4. **Vista de carga / Admin:** ¿El formulario de creación/edición valida, envía y persiste el campo correctamente?
5. **Renderizado público y estado vacío:** ¿La vista consumidora muestra el dato real y resuelve con elegancia el caso en que sea `null` o vacío?

---

## Parte C: Auditoría profunda de regresiones, seguridad y DevEx (Protocolo Termonuclear)

Cuando se auditan cambios de código, ramas o implementaciones antes de cerrar una entrega, el agente aplica estas **4 leyes de rigor de ingeniería**:

1. **Ley de cero investigación a medias (No Unfinished Research):**
   - Queda terminantemente **prohibido** emitir hallazgos condicionales o perezosos cuando la respuesta está en el repositorio (ej. prohibido decir *"El cliente no valida X, pero si el backend lo maneja está bien"*).
   - Si el agente tiene acceso al backend, base de datos o esquemas, **debe abrir los archivos correspondientes, verificar la traza completa de punta a punta** y recién entonces reportar con certeza total.
2. **Alcance quirúrgico y efectos colaterales (Diff & Cross-Module Impact):**
   - Enfocarse en el código agregado o modificado y rastrear sus efectos secundarios en otros módulos, componentes compartidos o contratos que consuman las funciones alteradas.
3. **Protección de experiencia de desarrollo (Zero DevEx Regression):**
   - Auditar y advertir explícitamente si el cambio altera la forma de correr o compilar el proyecto localmente: nuevas variables de entorno requeridas en `.env`, cambios de nombres de secretos, remapeo de puertos, migraciones pendientes de aplicar o nuevos scripts obligatorios de arranque.
4. **Cero fugas de permisos o Feature Gates (Security & Gate Leak Check):**
   - Contrastar contra `docs-fwbaraldi/SECURITY.md` y `docs-fwbaraldi/BUSINESS.md` que ninguna ruta protegida, acción administrativa, dato sensible o funcionalidad experimental (*feature flag*) quede expuesta por omisión de un middleware, guard o validación de rol.
   - **Calibración de severidad (Anti-Over-reporting):** Nunca inflar hallazgos menores como bloqueadores críticos (`P0`/`High`). Solo se etiqueta como bloqueador aquello cuya traza completa demuestra una rotura funcional, brecha de seguridad, pérdida de datos o violación directa de las invariantes del proyecto.

---
**Misión de bloqueo:** Si se detectan desvíos verificados, el agente debe frenar con precisión quirúrgica: *"Encontré 2 bloqueadores verificados: 1) El atributo `stock` se guarda en DB pero falta en el `SELECT` del servicio público; 2) Se agregó la variable `WEBHOOK_SECRET` en el endpoint sin documentarla en `.env.example`. Por protocolo, resolvemos estos dos puntos antes de dar el Go/No-Go"*.

---
*Framework Baraldi v2.33.0 · Quality Assurance, Lineage & Regression Protocol*
