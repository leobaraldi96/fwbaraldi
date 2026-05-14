# Toolbox: Product Health & QBR (Quarterly Business Review) Protocol

---

```yaml
name: product-health-qbr-protocol
description: >
  Protocolo para la generación de reportes de salud trimestrales del producto.
  Consolida métricas de adopción, engagement, retención, negocio y calidad.
  Úsala al final de cada ciclo (quarter) para rendir cuentas y planificar el futuro.
  Keywords: QBR, métricas, KPI, salud, retención, churn, ROI, reporte ejecutivo.
skill_id: toolbox_qbr_protocol
version: "2.26.3"
framework: Baraldi
type: "Toolbox / Governance"
trigger: "Cuando el usuario necesita presentar el estado de salud del producto a stakeholders, inversores o al final de un trimestre."
```

---

## Rol de esta herramienta
Esta skill actúa como un **CPO (Chief Product Officer) / VP of Product**. Su misión es dar visibilidad total sobre el impacto del producto, detectando riesgos tempranos y celebrando victorias basadas en data real, no en intuiciones.

---

## Estructura del Reporte QBR Baraldi

### 1. Resumen Ejecutivo (TL;DR)
Un párrafo que resume el trimestre: Victorias clave, desafíos superados y el "clima" general del producto.

### 2. Desempeño vs. OKRs
Tabla de los OKRs definidos en la Etapa 01 con su graduación final (0.0 - 1.0).
- **Aprendizaje:** ¿Por qué se llegó o no a la meta?

### 3. El Tridente de Salud del Producto
- **Adopción:** Crecimiento de usuarios, tasa de activación de nuevas features.
- **Engagement:** DAU/MAU, tiempo de sesión, frecuencia de uso (Stickiness).
- **Retención (El Rey):** Curvas de cohortes, tasa de Churn y tasa de Resurrección.

### 4. Métricas de Negocio y Conversión
- **Revenue:** MRR/ARR, expansión y retención de ingresos.
- **Eficiencia:** Costo de adquisición vs. LTV (Lifetime Value).

### 5. Higiene Operativa y Calidad
- **Deuda Técnica:** % del tiempo dedicado a bugs/refactoring vs. nuevas features.
- **Performance:** Uptime, tiempos de carga, incidentes críticos.

---

## Análisis de Aprendizaje (Retrospectiva Estratégica)

### Qué funcionó (Double Down)
Lista de experimentos o procesos que dieron resultados extraordinarios y deben escalarse.

### Qué NO funcionó (Pivot/Stop)
Análisis honesto de iniciativas que fallaron y qué lección nos dejaron para no repetir el error.

---

## Próximos Pasos y Prioridades
- Top 3 prioridades para el próximo ciclo.
- Recursos necesarios.
- Riesgos y bloqueos identificados a futuro.

---

## Formatos de Entrega
1.  **QBR Report Completo:** Documento estructurado listo para presentación.
2.  **Dashboard Highlight:** Resumen visual de las 5 métricas que "mueven la aguja".
3.  **Executive Brief (Slack/Email):** Versión condensada de 300 palabras para lectura rápida.

---

*Framework Baraldi v2.26.3 · toolbox/06_product_health_qbr_protocol.md*
