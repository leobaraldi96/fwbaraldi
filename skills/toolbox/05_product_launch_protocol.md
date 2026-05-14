# Toolbox: Product Launch & GTM Orchestration Protocol

---

```yaml
name: product-launch-gtm-orchestration
description: >
  Protocolo integral para la orquestación técnica (Runbook) y comercial (GTM) de lanzamientos.
  Asegura estabilidad operativa y máximo impacto en el mercado mediante comunicación segmentada.
  Úsala al final de la Etapa 05 o durante la Etapa 06.
  Keywords: launch, runbook, GTM, comunicación, habilitación, ventas, marketing, deploy.
skill_id: toolbox_launch_protocol
version: "2.26.3"
framework: Baraldi
type: "Toolbox / Operations & GTM"
trigger: "Cuando el producto está listo para producción y se requiere un plan que cubra tanto el deploy técnico como la estrategia de salida al mercado."
```

---

## Rol de esta herramienta
Esta skill actúa como un **Launch Director / GTM Manager**. Su misión es orquestar a Ingeniería, Marketing, Ventas y Soporte para que el lanzamiento sea fluido, el equipo esté entrenado y el mercado perciba el valor de inmediato.

---

## Pilar 1: Orquestación Técnica (The Runbook)

### 1. Criterios de Go/No-Go (Checklist Pre-vuelo)
La IA debe verificar el estado de:
- [ ] **QA:** Smoke tests pasados en staging y paridad total con producción.
- [ ] **Infra:** Feature flags configuradas y base de datos lista para migración.
- [ ] **Monitoreo:** Dashboards activos y alertas de errores seteadas.
- [ ] **Habilitación:** FAQ de soporte lista y equipo de guardia (on-call) asignado.

### 2. Cronograma T-Minus (Timeline de Ejecución)
- **T-24h (Code Freeze):** Verificación final de ambientes y "congelamiento" de cambios.
- **T-2h (War Room):** Alineación de líderes. Verificación de dashboards y estado de redes.
- **T-0 (Launch!):** Deploy a producción. Habilitación de flags. Smoke tests en vivo.
- **T+15m / T+1h:** Revisión de métricas de error y performance. Primer feedback de usuarios reales.
- **T+4h / EOD:** Reporte de salud inicial y handoff a equipo de guardia.

### 3. Gestión de Crisis (Matriz de Severidad)
- **P0 (Crítico):** Outage total o pérdida de datos. -> **Rollback inmediato (<15 min).**
- **P1 (Alto):** Feature principal rota. -> Decisión de fix-forward o rollback en <30 min.
- **P2 (Medio):** Feature degradada o bug visual. -> Hotfix programado en el día.
- **P3 (Bajo):** Error menor o cosmético. -> Al backlog para el próximo ciclo.

---

## Pilar 2: Estrategia de Comunicación y GTM

### 1. Messaging Framework por Audiencia
- **Clientes:** Enfoque en beneficios ("Cómo esto te ahorra tiempo").
- **Ventas/Partners:** Enfoque en valor comercial ("Por qué esto nos hace líderes").
- **Soporte/Interno:** Enfoque operativo ("Qué cambió y cómo ayudar al usuario").
- **Prensa:** Enfoque en innovación ("Por qué es un hito en la industria").

### 2. Plan de Canales y Contenido
- **In-Product:** Diseño de Modales, Banners y Tooltips de onboarding.
- **Email Marketing:** Segmentación (Anuncio a clientes vs. Lead nurturing).
- **Blog & Social:** Nota de lanzamiento detallada + Hilos de Twitter/LinkedIn.
- **Sales Enablement:** Actualización de Sales Decks, One-pagers y Demo Videos.
- **Crisis Comms:** Templates de "Estamos trabajando en ello" y "Servicio restablecido".

### 3. Habilitación de Equipos (Internal Enablement)
- **FAQ Interna:** Respuestas a preguntas difíciles para Soporte y Ventas.
- **Sesiones de Training:** Calendario de demos internas y Q&A.
- **Talking Points:** Guiones rápidos para llamadas de ventas y tickets de soporte.

---

## Pilar 3: Monitoreo y Éxito Post-Lanzamiento (Post-Launch)

### 1. El Embudo de Adopción
La IA debe definir los eventos de tracking para:
- **Descubrimiento:** Usuarios que ven la feature (Banners, menús).
- **Prueba (Trial):** Usuarios que realizan la acción principal al menos 1 vez.
- **Adopción Real:** Usuarios que usan la feature 3 o más veces en la primera semana.
- **Retención:** Usuarios que vuelven a la feature en la semana 2.

### 2. North Star de Lanzamiento
Identificación de la **métrica única** que define el éxito del lanzamiento (ej: "Usuarios que completaron su primer envío exitoso").
- **Línea de Base:** Qué pasaba antes.
- **Target:** Qué esperamos que pase ahora.

### 3. Vistas del Dashboard
- **Vista Real-Time (Día 1):** Tasa de errores, tickets de soporte, sentimiento en redes y volumen de uso inicial.
- **Vista Semanal:** Curva de adopción, engagement por segmento y performance técnica.
- **Vista Mensual:** Impacto en el negocio (Revenue/Churn) y análisis de cohortes de retención.

### 4. Cadencia de Reporte y Alertas
- **Daily Standup (Semana 1):** Revisión diaria de métricas críticas y feedback de soporte.
- **Weekly Review:** Análisis de tendencias y ajustes en la estrategia GTM.
- **Alertas Rojas:** Umbrales definidos (ej: +5% error rate o -20% conversión) que activan una reunión de emergencia.

---

## Formatos de Entrega
1.  **Launch & GTM Master Plan:** El documento unificado (Ingeniería + Comms + Métricas).
2.  **Internal Enablement Kit:** FAQs, Battle cards y guiones de soporte.
3.  **Analytics Spec:** Listado de eventos y propiedades a trackear para el dashboard.
4.  **Rollback & Crisis Manual:** Qué decir y qué hacer si el plan falla.

---

*Framework Baraldi v2.26.3 · toolbox/05_product_launch_protocol.md*
