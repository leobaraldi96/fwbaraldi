---
name: wordpress-performance-expert
description: >
  Índice experto de reglas de optimización de WordPress. 
  Úsalo cuando identifiques que el usuario está trabajando en desarrollo de 
  plugins, temas o lógica custom de WordPress. Previene la obesidad de contexto 
  y aplica el "Skill Judge" de Baraldi.
version: "1.0.0"
trigger: "Proyectos que operen sobre el entorno WordPress"
---

# 🚀 WordPress Performance Expert (Baraldi Index)

Esta habilidad actúa como un **Guardián de Calidad** para proyectos legacy o nuevos sobre WordPress. Su objetivo es asegurar que la IA genere código performante, escalable y seguro.

## ⚖️ Regla de Economía de Tokens
Esta skill es un **Índice Directivo**. Si vas a realizar una tarea de refactorización profunda o creación de plugins complejos, **DEBES leer el archivo de referencia completo** antes de generar código:
👉 `C:\Users\leoba\.gemini\antigravity\skills\wordpress-performance-best-practices\AGENTS.md`

---

## 📋 Quick Reference (Las 8 Capas Críticas)

Aplica estas reglas de forma inmediata en cualquier sugerencia de código:

1.  **db-optimization (CRÍTICO):** Usar siempre `$wpdb->prepare()`. Evitar `posts_per_page => -1`. Usar `fields => 'ids'` cuando sea posible.
2.  **cache-strategies (CRÍTICO):** Usar *Transients* para llamadas a APIs externas. Implementar invalidación precisa dirigida por eventos.
3.  **asset-management (ALTO):** Carga condicional de assets (solo donde se usan). Usar `defer/async` para scripts no críticos.
4.  **theme-performance (ALTO):** Cero queries dentro de archivos de template. Optimizar el priming de caches de meta/term en los loops.
5.  **plugin-architecture (MEDIO):** Carga condicional de código. Implementar Autoloading PSR-4.
6.  **media-optimization (MEDIO):** Uso mandatorio de `srcset` y lazy loading adaptativo.
7.  **api-ajax (MEDIO):** Priorizar REST API sobre `admin-ajax`. Implementar validación estricta de nonces.
8.  **advanced-patterns (LOW-MEDIO):** Mantener `autoloaded options` por debajo de 800KB. Usar cron del sistema para tareas pesadas.

---

## 🛡️ Anti-patrones (NEVER List)
- **NUNCA** utilices `query_posts()`. Usa `WP_Query` o `get_posts`.
- **NUNCA** utilices `post__not_in` en queries grandes; procesa el filtrado en PHP.
- **NUNCA** hardcodees URLs de assets; usa `wp_enqueue_script/style`.

---
*Framework Baraldi v2.16.0 · Core / Tech Guardrails / Wordpress Performance Expert*
