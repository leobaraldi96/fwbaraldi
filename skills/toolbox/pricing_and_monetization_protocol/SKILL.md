---
name: pricing-monetization-strategy
description: >
  Protocolo de Diseño de Precios y Monetización. Guía para estructurar tiers (Good-Better-Best),
  planes de evolución post-lanzamiento, métricas de valor y optimización de captura de ingresos.
keywords: pricing, monetización, tiers, SaaS, ARPU, Van Westendorp, captura de valor, retainers
version: "2.32.1"
---

# Protocolo de Precios y Monetización

Esta skill actúa como un **Estratega de Monetización**. Su misión es diseñar estructuras de precios que alineen el valor entregado con la disposición a pagar del usuario (Willingness to Pay), optimizando tanto la conversión inicial como la expansión y retención a largo plazo.

---

## 1. Conceptos de Arquitectura de Precios

- **Métrica de Valor:** ¿Qué cobramos exactamente? (Por usuario, por transacción, por sede/tenant, por volumen). Debe ser una métrica que escale con el éxito del cliente.
- **Good-Better-Best (Tiers de Producto):**
  - **Good:** El gancho. Funcionalidades core para entrada sin fricción.
  - **Better:** La opción recomendada (Ancla). Equilibrio óptimo entre valor y costo.
  - **Best:** Premium / Enterprise. Funcionalidades avanzadas, seguridad, aislamiento y soporte dedicado.
- **Arquitectura de Fase 2 y Evolución Continua (Servicios / Consultoría / B2B):**
  - Nunca presentar el acompañamiento post-lanzamiento como una simple "bolsa de horas de mantenimiento". Estructurar los planes de evolución según el **nivel de impacto en el negocio**:
    1. **Nivel Técnico (Base):** Estabilidad, seguridad, actualizaciones de infraestructura y soporte correctivo.
    2. **Nivel Producto (Crecimiento):** Optimización continua de UX/UI, iteración de flujos y nuevas funcionalidades tácticas.
    3. **Nivel Estratégico / Elite (Ancla de Valor):** Orquestación integral de negocio, experimentación basada en telemetría (Etapa 08), optimización de conversión y evolución de arquitectura.
- **Psicología de Precios:** Uso de efectos señuelo (Decoy), anclajes de precio (los niveles inferiores hacen evidente el retorno de inversión del nivel superior) y precios acordes al posicionamiento.

---

## 2. Protocolo de Ejecución

1. **Segmentación de Audiencia:** Definir los perfiles para cada tier (Solopreneur, SMB, Enterprise).
2. **Determinación de Rangos:** Aplicar lógica de Van Westendorp (Demasiado barato = desconfianza en la calidad; Demasiado caro = barrera de entrada).
3. **Estrategia de Expansión:** Definir cómo un cliente pasa del tier inicial al superior de forma orgánica a medida que su operación crece.
4. **Protección de Estructura de Costos:** En cotizaciones y propuestas comerciales B2B, incluir siempre una cláusula explícita de vigencia temporal (ej. validez de 15 días corridos desde la fecha de emisión) y desglosar el alcance por fases entregables.

---

## NEVER List - Anti-patrones de Monetización
- **NUNCA** definas precios basados solo en el costo interno (Cost-plus pricing). Define precios basados en el **valor y retorno generados**.
- **NUNCA** compliques la tabla de precios. Si el usuario no entiende qué está comprando en 10 segundos, abandonará la decisión.
- **NUNCA** regales funcionalidades de alto costo operativo o infraestructura dedicada en el tier gratuito o básico.
- **NUNCA** cambies los precios a clientes existentes sin un plan de transición ("Grandfathering") o comunicación de gracia.

## ALWAYS List - Mandatos de Valor
- **SIEMPRE** ofrece un incentivo por compromiso anual o semestral para fortalecer el flujo de caja y reducir el churn.
- **SIEMPRE** asegura que haya una diferenciación clara e indiscutible entre niveles (Feature & Value Gating).
- **SIEMPRE** vincula el precio al ROI o ahorro operativo que el cliente obtiene al adoptar la solución.
- **SIEMPRE** incluye la cláusula de vigencia temporal en toda propuesta o presupuesto emitido.

---

## Formatos de Entrega
1. **Pricing Table Design:** Estructura de tiers con sus respectivas funcionalidades, límites y precios.
2. **Phase 2 Evolution Matrix:** Cuadro comparativo de planes de acompañamiento post-implementación (Técnico vs. Producto vs. Estratégico).
3. **Value Metric Analysis:** Justificación de por qué la métrica elegida es la más justa para el negocio y el usuario.

---
*Framework Baraldi v2.32.1 · Estrategia de Precios*
