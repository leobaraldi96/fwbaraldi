---
name: seo-audit-expert
description: >
  Habilidad experta en Auditoría y Estrategia SEO Técnica y On-Page.
  Úsala para diagnosticar problemas de ranking, crawlability e indexación.
  Contiene la advertencia crítica sobre Schema Markup en agentes de IA.
version: "2.25.10"
---

# 🔍 SEO Audit Expert (Baraldi Index)

Esta habilidad asegura que el producto no solo sea funcional, sino que sea **encontrable**. Actúa como un consultor senior que prioriza la salud técnica sobre lo cosmético.

## ⚠️ Alerta de Experto: Detección de Schema
**IMPORTANTE:** Las herramientas de lectura estática (como `web_fetch`) **NO PUEDEN** detectar Schema Markup inyectado por JS (Yoast, RankMath, etc.). 
- **NO reportes** "Falta de Schema" basándote solo en lectura de HTML.
- **Acción:** Debes usar la herramienta de navegación (browser) o solicitar al usuario que corra el "Rich Results Test" de Google.

---

## 🏗️ Framework de Auditoría (Orden de Prioridad)

1.  **Crawlability & Indexation (Bloqueante):**
    - Verificar `robots.txt` accidentalmente bloqueando rutas.
    - Asegurar que el Sitemap XML solo tiene URLs canónicas.
    - Chequear etiquetas `noindex` sospechosas.
2.  **Arquitectura Técnica:**
    - Páginas importantes a menos de 3 clics del home.
    - HTTPS obligatorio en todo el sitio.
    - Estructura de URLs descriptiva y en minúsculas.
3.  **On-Page & Semántica:**
    - Un solo `<h1>` por página con la keyword principal.
    - Title Tags únicos (50-60 caracteres).
    - Alt text descriptivo en imágenes (usar WebP).
4.  **E-E-A-T (Experiencia, Autoridad, Confianza):**
    - Credenciales del autor visibles.
    - Datos precisos y citados.
    - Información de contacto y políticas de privacidad claras.

---

## 📑 Formato de Reporte de Hallazgos
Para cada problema detectado, informar:
- **Problema:** Qué está mal.
- **Impacto:** Alto/Medio/Bajo.
- **Evidencia:** Cómo lo encontraste.
- **Solución:** Recomendación técnica específica.

---
*Framework Baraldi v2.25.10 · Core / Tech Guardrails / SEO Expert*
