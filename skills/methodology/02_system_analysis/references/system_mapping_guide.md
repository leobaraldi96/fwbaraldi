---
name: system-mapping-guide
description: >
  Guía de referencia para mapear sistemas complejos en el Framework Baraldi.
  Leer antes de ejecutar los Momentos 1 y 2 de System Analysis cuando el
  sistema tiene alta complejidad, muchos actores o integraciones externas.
  Define patrones de dependencias, tipos de riesgos y criterios de criticidad.
version: "2.25.10"
framework: Baraldi
stage: "02 - System Analysis"
tipo: reference
---

# Guía de Mapeo de Sistemas
## Framework Baraldi — Referencia para Etapa 02

---

## 1. Tipos de actores a buscar activamente

En cualquier sistema de producto digital, buscar siempre estos actores invisibles que el equipo tiende a olvidar:

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
| Categoría | Actores típicos | Por qué importa mapearlos |
|---|---|---|
| **Equipo técnico** | Dev Frontend, Dev Backend, DevOps, QA | Son los primeros usuarios invisibles — diseñar sin ellos genera deuda técnica |
| **Equipo de negocio** | Product Manager, Owner, Finanzas | Sus restricciones definen límites del sistema que el diseño no puede ignorar |
| **Operaciones** | Soporte, Admin, Moderación | Mantienen el sistema vivo — si su trabajo no está diseñado, el sistema se degrada |
| **Sistemas externos** | APIs de pago, motores de búsqueda, servicios de auth | Tienen sus propias reglas, costos y puntos de falla |
| **Regulaciones** | AFIP, GDPR, App Store policies | Imponen restricciones que no son negociables |
| **Usuarios futuros** | Quienes se incorporarán cuando el sistema escale | Sus necesidades deben estar en la arquitectura desde el inicio |

---

## 2. Patrones de dependencias y sus riesgos

### Dependencia lineal
```
A → B → C
```
Si B falla, C no funciona. Riesgo: cascada de fallos. Mitigación: fallbacks en B.

### Dependencia en estrella
```
    B
    |
A → HUB → C
    |
    D
```
El HUB es SPOF (Single Point of Failure). Riesgo: un cambio en HUB afecta a todos. Mitigación: abstraer la dependencia con una capa intermedia.

### Dependencia circular
```
A → B → C → A
```
El más peligroso. Genera loops infinitos y estados inconsistentes. Detectar y eliminar siempre.

### Dependencia bidireccional fuerte
```
A ↔ B
```
A y B se necesitan mutuamente. Riesgo: acoplamiento alto — un cambio en A rompe B y viceversa. Mitigación: definir contratos claros entre A y B.

---

## 3. Criterios de criticidad para dependencias

| Nivel | Criterio | Acción recomendada |
|---|---|---|
| `[CRÍTICA]` | Si falla, el producto no puede operar en absoluto | Documentar alternativa o plan de contingencia antes de Etapa 03 |
| `[ALTA]` | Si falla, una funcionalidad core deja de funcionar | Documentar impacto y plan de monitoreo |
| `[MEDIA]` | Si falla, hay degradación de experiencia pero el producto opera | Documentar y priorizar en backlog |
| `[BAJA]` | Si falla, impacto mínimo o invisible para el usuario | Documentar y revisar en System Reflection |

---

## 4. Tipos de riesgos sistémicos y cómo detectarlos

### Riesgos técnicos
- **Deuda técnica heredada:** código o arquitectura legacy que limita lo que se puede construir
- **Escalabilidad:** ¿el sistema puede manejar 10x el tráfico actual sin rediseño?
- **SPOF:** ¿hay componentes sin alternativa si fallan?
- **Actualizaciones de terceros:** ¿qué pasa si una API externa cambia su contrato?

**Señales de alerta:** "siempre lo hicimos así", "ese módulo nadie lo toca", "si cambiamos eso se rompe todo"

### Riesgos de datos
- **Inconsistencia:** ¿puede haber datos contradictorios en el sistema?
- **Privacidad:** ¿qué datos personales se almacenan y bajo qué regulación?
- **Pérdida:** ¿qué pasa si se pierde acceso a la base de datos?
- **Propiedad:** ¿quién es dueño de los datos generados por los usuarios?

**Señales de alerta:** "no tenemos backup", "esos datos los guardamos porque puede que algún día sirvan", "no sé exactamente qué hay en esa tabla"

### Riesgos de negocio
- **Dependencia de un proveedor único:** vendor lock-in sin alternativa
- **Cambio en condiciones de servicio:** el proveedor puede cambiar precios o reglas
- **Modelo de revenue frágil:** depende de un solo flujo que puede interrumpirse

### Riesgos externos
- **Cambios regulatorios:** nueva legislación que afecta el modelo de negocio
- **Cambios en el mercado:** un competidor copia la feature diferenciadora
- **Cambios en plataformas:** App Store / Google cambia las políticas

---

## 5. Formato de Service Blueprint — capas

El Service Blueprint tiene 5 capas. Completar siempre todas.

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
| Capa | Qué documenta | Ejemplo |
|---|---|---|
| **Evidencia física** | Qué ve y toca el usuario | Pantalla, email, notificación |
| **Acciones del usuario** | Qué hace el usuario | Clickea, completa, navega |
| **Acciones visibles del frontstage** | Qué hace el sistema de cara al usuario | Muestra resultados, envía confirmación |
| **Acciones invisibles del backstage** | Qué hace el sistema internamente | Valida, guarda, procesa, notifica |
| **Soporte / sistemas** | Qué sistemas o personas hacen posible el backstage | Base de datos, API, equipo de soporte |

**Líneas divisorias del blueprint:**
- **Línea de interacción:** entre usuario y frontstage
- **Línea de visibilidad:** entre frontstage (visible) y backstage (invisible)
- **Línea de interacción interna:** entre backstage y sistemas de soporte

---

## 6. Checklist de completitud del System Analysis

Antes de cerrar la etapa, verificar:

### Actor Map
- [ ] Todos los actores invisibles del equipo técnico están incluidos
- [ ] Los sistemas externos están tratados como actores
- [ ] Las motivaciones y fricciones de cada actor están documentadas
- [ ] Las tensiones entre actores están identificadas

### Dependency Map
- [ ] Cada dependencia tiene nivel de criticidad asignado
- [ ] Los SPOF están identificados con plan de mitigación
- [ ] Las dependencias circulares están resueltas o documentadas como riesgo
- [ ] Las restricciones de cada servicio externo están documentadas

### Data Flow Map
- [ ] Los flujos más críticos están documentados paso a paso
- [ ] Queda claro quién crea, lee, modifica y elimina cada entidad
- [ ] Los estados posibles de las entidades principales están listados

### Architecture Overview
- [ ] Las decisiones de stack tienen justificación documentada
- [ ] Las restricciones técnicas conocidas están listadas
- [ ] Los gaps de arquitectura no resueltos están marcados explícitamente

---

*Framework Baraldi v2 · skills/02_system_analysis/references/system_mapping_guide.md*
