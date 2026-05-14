# Skill 19: Protocolo de Optimización de Performance (Web Vitals)

Protocolo técnico para asegurar que el producto cumpla con los estándares más altos de velocidad y estabilidad visual.

## 🎯 Objetivo Estratégico
Optimizar la experiencia del usuario (UX) mediante la reducción de tiempos de carga e interactividad, impactando directamente en la conversión y el ranking.

## 📊 Las 3 Métricas Críticas (Core Web Vitals)
- **LCP (Largest Contentful Paint):** Carga del elemento más grande. Meta: **≤ 2.5s**.
- **INP (Interaction to Next Paint):** Latencia de interactividad. Meta: **≤ 200ms**.
- **CLS (Cumulative Layout Shift):** Estabilidad visual. Meta: **≤ 0.1**.

## 🛠️ Acciones de Optimización
### 1. Para LCP (Carga)
- Implementar **Preload** para imágenes hero con `fetchpriority="high"`.
- Utilizar formatos modernos como **WebP/AVIF**.
- Minimizar recursos que bloquean el renderizado en el `<head>`.

### 2. Para INP (Interactividad)
- Fragmentar tareas largas de JavaScript (>50ms) usando `setTimeout(0)` o `requestIdleCallback`.
- Priorizar el feedback visual inmediato ante cualquier clic.

### 3. Para CLS (Estabilidad)
- Reservar siempre espacio para imágenes y embeds usando `width` y `height` o `aspect-ratio`.
- Evitar la inyección de contenido dinámico por encima del contenido existente.

## 📋 Checklist de Performance
- [ ] TTFB (Time to First Byte) < 800ms.
- [ ] Imágenes críticas optimizadas y pre-cargadas.
- [ ] Sin saltos de layout al cargar fuentes o anuncios.
- [ ] JavaScript crítico diferido o cargado de forma asíncrona.

---
*Baraldi Framework v2.26.0 - Protocolo de Performance.*
