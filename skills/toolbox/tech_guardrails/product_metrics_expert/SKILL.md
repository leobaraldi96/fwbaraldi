---
name: product_metrics_expert
description: >
  Definición técnica y estratégica de métricas de producto.
  Desde Frameworks (North Star, HEART, AARRR) hasta visualización de datos en React (Recharts).
version: "2.25.13"
---

# 📈 Product Metrics & Analytics Expert

Este guardián fusiona la estrategia de producto (Qué medimos) con la ejecución de desarrollo (Cómo lo visualizamos). Asegura que el producto sea gobernable por métricas accionables (Etapa 03 y Etapa 05).

## 🧭 Estrategia de Métricas (Qué Medimos)

### 1. El Marco North Star (NSM)
El producto debe tener **UNA sola métrica de la estrella polar** que resuma de manera perfecta que el usuario obtuvo el valor por el cual "contrató" la solución (ej: Spotify = Minutos escuchados). A esta la siguen 3-4 Input Metrics que el equipo puede afectar directamente.

### 2. Clasificación de Métricas (Regla de Oro: Accionables)
- **Vanity vs Actionable:** "Total de usuarios registrados" es vanidad. "Ventas cerradas por sesión activa" es accionable (cambia tu comportamiento). Si la métrica sube y no sabes qué hacer, es Vanidad.
- **Leading vs Lagging:** Las variables *Lagging* (MRR, Churn) miran el pasado y no las puedes corregir a tiempo. Las *Leading* (Tickets abiertos, uso de features) avisan antes de que ocurra la pérdida.
- **Cualitativas vs Cuantitativas:** Qué está pasando (Cuan) vs Por Qué está pasando (Cual).

### 3. Frameworks Clásicos de Medición
- **HEART (Google):** Happiness (Satisfacción), Engagement (Uso), Adoption (Nuevos), Retention (Regresos), Task Success (Éxito).
- **AARRR (Pirate Metrics):** Acquisition, Activation, Retention, Referral, Revenue. Fundamental para el Funnel analysis.

## 💻 Implementación y Visualización (Cómo lo mostramos)

Cuando el diseño implique construir dashboards (React / Next.js), utilizamos **Recharts** como estándar de visualización visual limpia, responsiva y accesible.

### Patrón de Carga (Dashboard)
Los Dashboards no deben bloquear todo el hilo, usar Skeletons mientras las métricas se obtienen de la DB o sistema externo.

### Componente Recharts Base (Ejemplo Lineal Accionable)
Asegura Tooltips precisos y colores que mantengan el ratio WCAG. Si comparas cohortes presta atención a los bordes dinámicos.

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Output estándar Baraldi para métricas Leading (Evolución)
export function ConversionTrend({ data }) {
  return (
    <div className="h-[300px] w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
          <YAxis tickLine={false} axisLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
          <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
          {/* Métrica principal con color de la marca primaria */}
          <Line type="step" dataKey="conversion_rate" stroke="#2563EB" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
```

## 🚫 Anti-Patrones Estrictos
- **Síndrome "Tengo que Medir Todo":** Un Dashboard con 50 KPIs es ciego. Obliga al humano a podar. Solo entre 5 a 10 métricas que importen a nivel Board.
- **Gráficos de Pastel (Pie Charts) Engañosos:** Úsalos SOLO si los componentes superan el 20-30% de diferencia. Si es complejo, prefiere un Bar Chart apilado horizontal (*Bullet graph*).

---
*Framework Baraldi v2.25.13 · Core / Tech Guardrails / Product Metrics*
