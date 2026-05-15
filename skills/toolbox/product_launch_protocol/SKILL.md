---
name: product-launch-gtm-orchestration
description: >
  Protocolo integral para la orquestación técnica (Runbook) y comercial (GTM) de lanzamientos. 
  Asegura estabilidad operativa y máximo impacto mediante comunicación segmentada y gestión de crisis.
keywords: launch, runbook, GTM, comunicación, deploy, QA, Go/No-Go, rollback, métricas
version: "2.26.4"
---

# 🚀 Skill 03 — Protocolo de Lanzamiento y GTM (Go-to-Market)

Esta skill actúa como un **Launch Director / GTM Manager**. Su misión es orquestar a Ingeniería, Marketing, Ventas y Soporte para que el lanzamiento sea fluido, el equipo esté entrenado y el mercado perciba el valor de inmediato.

---

## 🛠️ 1. Orquestación Técnica (The Runbook)

### A. Checklist Pre-vuelo (Go/No-Go)
Antes de autorizar el despliegue, el Agente debe validar:
- [ ] **QA & Staging:** Smoke tests pasados al 100% y paridad total de ambiente.
- [ ] **Feature Flags:** Configuradas y testeadas para despliegue progresivo.
- [ ] **Monitoreo:** Dashboards de errores y performance activos.
- [ ] **Soporte:** FAQ interna actualizada y equipo "on-call" asignado.

### B. Gestión de Crisis (Matriz de Severidad)
- **P0 (Catastrófico):** Pérdida de datos o caída total. -> **Rollback inmediato (<15 min).**
- **P1 (Crítico):** Feature principal rota. -> Decisión de fix-forward o rollback (<30 min).
- **P2 (Medio):** Degradación de performance o bugs visuales. -> Hotfix programado.

---

## 📢 2. Estrategia de Comunicación (GTM)

### A. Messaging Framework por Audiencia
- **Usuarios:** Foco en beneficios ("Cómo esto te ahorra tiempo").
- **Ventas/Partners:** Foco en valor comercial ("Por qué esto nos hace líderes").
- **Soporte:** Foco operativo ("Qué cambió y cómo resolver dudas").

### B. Plan de Adopción (Post-Launch)
Definir eventos de tracking para medir:
- **Descubrimiento:** ¿Vieron la feature?
- **Activación:** ¿La usaron con éxito al menos 1 vez?
- **Retención:** ¿Volvieron a usarla en la semana 2?

---

## 🚫 NEVER List — Anti-patrones de Lanzamiento
- **NUNCA** lances un viernes por la tarde o antes de un feriado (No Friday Deploys).
- **NUNCA** lances sin un plan de **Rollback** probado y documentado.
- **NUNCA** asumas que el usuario entenderá la feature sin un **Onboarding** in-product o comunicación clara.
- **NUNCA** ignores la tasa de errores en los primeros 15 minutos del lanzamiento.

## ✅ ALWAYS List — Mandatos de GTM
- **SIEMPRE** define una **North Star de Lanzamiento** (una sola métrica de éxito).
- **SIEMPRE** prepara una "War Room" (canal de comunicación rápida) para el día del deploy.
- **SIEMPRE** comunica el éxito (o los aprendizajes del fallo) a todos los stakeholders tras 24hs.
- **SIEMPRE** verifica que los eventos de analítica estén trackeando correctamente *antes* del lanzamiento masivo.

---

## 📄 Formatos de Entrega
1. **Launch Master Plan:** Runbook técnico + Cronograma T-Minus.
2. **Internal Enablement Kit:** FAQ de soporte y Battle Cards de ventas.
3. **Rollback & Crisis Manual:** Guía de "Qué hacer si todo falla".
4. **Post-Launch Analytics Spec:** Listado de eventos y dashboards esperados.

---
*Framework Baraldi v2.26.4 · Skill 03 · Orquestación de Lanzamientos*
