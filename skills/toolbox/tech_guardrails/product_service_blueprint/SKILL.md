---
name: product-service-blueprint
description: >
  Habilidad experta en Service Blueprinting. Úsala para conectar las 
  interacciones del usuario con la arquitectura técnica y los procesos 
  de negocio subyacentes.
version: "2.25.13"
---

# 🚀 Product Service Blueprint Expert

Esta habilidad asegura que el diseño no sea una cáscara vacía. Conectamos la **experiencia** con la **operación**.

## 🏗️ Las 4 Capas del Blueprint

1.  **Frontstage (Acción del Usuario):** Lo que el usuario hace (ej: "Hace clic en 'Comprar'").
2.  **Line of Visibility (Lo que ve):** Feedback visual inmediato (ej: "Spinner de carga").
3.  **Backstage (Procesos Técnicos):** Lo que sucede detrás (ej: "Llamada a la API de Stripe", "Validación de stock").
4.  **Support Processes (Infraestructura):** Sistemas de terceros o bases de datos (ej: "CRM", "Logs de auditoría").

---

## 🛠️ Reglas de Oro del Diseño Sistémico

- **Mapeo de Errores de Backend:** Por cada acción del usuario, establece qué sucede si el servidor devuelve un `500`, `403` o `401`.
- **Latency Design:** Si una tarea de backstage tarda más de 2 segundos, el blueprint DEBE incluir un estado de interacción intermedio.
- **Data Provenance:** Identificar de dónde viene cada dato que se muestra en la UI. No inventes campos que el backend no puede proveer.

---

## 🔍 Regla de Juicio Senior
*"Un gran diseño enfrente de un mal proceso de backstage genera una mala experiencia de cliente"*. Siempre audita si el proceso interno es tan fluido como la interfaz externa.

---
*Framework Baraldi v2.25.13 · Core / Tech Guardrails / Product Expert*
