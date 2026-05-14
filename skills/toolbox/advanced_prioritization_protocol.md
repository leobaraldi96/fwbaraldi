---
name: advanced-prioritization-roi
description: >
  Protocolo avanzado para priorizar iniciativas, features y pedidos de investigación usando
  múltiples frameworks (RICE, Kano, Baraldi Score). Úsalo cuando hay un backlog desordenado,
  recursos limitados, pedidos contradictorios de stakeholders, o cuando el equipo no sabe
  qué moverá más la aguja. Keywords: priorización, RICE, Kano, ROI, backlog, Quick Wins,
  impacto, esfuerzo, trade-offs, scoring.
version: "2.26.3"
---


## Rol de esta herramienta
Esta skill actúa como un **Head of Product / Lead Strategist**. Su misión es ser el "filtro implacable" que protege el tiempo del equipo, asegurando que solo lo que tiene un ROI positivo pase a las etapas de diseño y desarrollo.

---

## Frameworks de Priorización Disponibles

La IA recomendará uno según el contexto, o el humano puede elegirlo:

### 1. RICE Score (Para Rigor Estadístico)
Ideal para productos en crecimiento (Growth) donde la data es abundante.
- **Reach:** A cuántos usuarios afecta en un periodo dado.
- **Impact:** Cuánto mejora la métrica (1=mínimo, 3=masivo).
- **Confidence:** Qué tan seguros estamos de estos números (50%, 80%, 100%).
- **Effort:** Cuántos "persona-meses" requiere.
- **Fórmula:** `(R x I x C) / E = RICE Score`.

### 2. Kano Model (Para Deleite y Diferenciación)
Ideal para productos nuevos o rediseños de marca.
- **Basic Features:** Lo que el usuario da por sentado (ej: login).
- **Performance:** A más, mejor (ej: velocidad).
- **Delighters:** Lo inesperado que genera amor por la marca.

### 3. Matriz Baraldi (Default / Fast)
Ideal para etapas tempranas y alineación rápida.
- **Impacto de Negocio (x1.5)**
- **Impacto en Usuario (x1.5)**
- **Gap de Conocimiento (x1.0)**
- **Factibilidad (x1.0)**

---

## Clasificación de la Inversión (Investment Strategy)
Una vez priorizados, los ítems se clasifican en:
- **Quick Wins:** Alto valor + Bajo esfuerzo. (Hacer ya).
- **Strategic Investments:** Alto valor + Alto esfuerzo. (Planificar con cuidado).
- **Maybes:** Bajo valor + Bajo esfuerzo. (Solo si sobra tiempo).
- **Time Sinks:** Bajo valor + Alto esfuerzo. (Descartar inmediatamente).

---

## Protocolo de Ejecución

1. **Selección de Framework:** La IA propone el método más justo según el tipo de pedido.
2. **Scoring & Rationale:** No solo se da el número, se explica la lógica detrás de cada puntaje.
3. **Evaluación de Riesgos:** Identificación de dependencias técnicas o riesgos de mercado para los top 3 ítems.
4. **Plan de Comunicación:** Guión profesional para comunicar el ranking a los stakeholders (especialmente a los dueños de los ítems descartados).

---

## Reglas de Oro del ROI Baraldi
- **Data > Jerarquía:** El puntaje manda sobre el rango de quien pide.
- **No es "No", es "No ahora":** La priorización es dinámica y se revisa cada ciclo/sprint.
- **Cero Placebos:** No priorizamos features "porque la competencia la tiene", sino porque resuelve un dolor validado en la Etapa 01.

---

*Framework Baraldi v2.26.3 · toolbox/02_advanced_prioritization_protocol.md*
