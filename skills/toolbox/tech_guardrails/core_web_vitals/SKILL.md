---
name: core-web-vitals-expert
description: >
  Habilidad experta en optimización de Core Web Vitals (LCP, INP, CLS).
  Úsala para asegurar performance de nivel superior y ranking en buscadores.
  Previene regresiones de performance y desplazamientos de layout.
version: "2.25.10"
---

# 🚀 Core Web Vitals Expert (Baraldi Index)

Esta habilidad asegura que el producto sea estable, rápido y reactivo. Ningún diseño está terminado si no cumple con los umbrales de "Good" de Google.

## ⚖️ Umbrales de Calidad (75th Percentile)
| Métrica | Medición | Objetivo |
|---|---|---|
| **LCP** | Carga | ≤ 2.5s |
| **INP** | Interactividad | ≤ 200ms |
| **CLS** | Estabilidad Visual | ≤ 0.1 |

---

## 🛠️ Checklists Críticos

### 1. LCP (Largest Contentful Paint)
- [ ] TTFB < 800ms (CDN + Edge Caching).
- [ ] Imagen LCP pre-cargada con `fetchpriority="high"`.
- [ ] CSS crítico inline (< 14KB).
- [ ] Sin JavaScript bloqueante en el `<head>`.

### 2. INP (Interaction to Next Paint)
- [ ] Ninguna tarea > 50ms bloqueando el hilo principal.
- [ ] Feedback visual inmediato en cada interacción.
- [ ] Diferir tareas pesadas con `requestIdleCallback` o `scheduler.yield()`.
- [ ] Web Workers para operaciones pesadas de CPU.

### 3. CLS (Cumulative Layout Shift)
- [ ] Dimensiones explicitas (`width`/`height`) o `aspect-ratio` en todas las imágenes/videos.
- [ ] Contenedores con `min-height` para anuncios y embeds.
- [ ] Fuentes con `font-display: optional` o métricas emparejadas.
- [ ] Animaciones solo con `transform` y `opacity`.

---

## 🔍 Debugging en Vivo (PerformanceObserver)
Si necesitas identificar elementos problemáticos, usa este patrón:
```javascript
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log('Metric:', entry.name, 'Value:', entry.value, 'Element:', entry.target);
  }
}).observe({ type: 'largest-contentful-paint', buffered: true });
```

---
*Framework Baraldi v2.25.10 · Core / Tech Guardrails / CWV Expert*
