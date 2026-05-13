# Protocolo de Relaciones Semánticas — Framework Baraldi

> **Concepto:** Las relaciones semánticas permiten que la memoria del proyecto no sea solo una lista de hechos, sino un **Gráfico de Conocimiento Interconectado**.

Este estándar está inspirado en la arquitectura de **Engram v1.15.11** y adaptado para el diseño de productos.

## 🔗 Diccionario de Relaciones (Verbos de Trazabilidad)

Al usar `mem_save` o al realizar una Auditoría de Salud, el Agente debe clasificar la conexión entre la nueva información y la existente usando estos verbos:

### 1. `scoped` (Dentro del Alcance)
- **Uso:** Cuando una decisión o feature está perfectamente alineada con el *Problem Framing* de la Etapa 01.
- **Ejemplo:** "La lógica de suscripción está `scoped` dentro del objetivo de monetización definido en la E01".

### 2. `conflicts_with` (En Conflicto con)
- **Uso:** Cuando un hallazgo nuevo contradice una decisión previa o una regla de negocio.
- **Acción:** Requiere alerta inmediata al Humano.
- **Ejemplo:** "El flujo de guest-checkout `conflicts_with` la regla de captura de leads obligatoria de la E01".

### 3. `supersedes` (Supera / Reemplaza)
- **Uso:** Cuando una nueva investigación o iteración invalida una hipótesis anterior por ser más precisa.
- **Ejemplo:** "El hallazgo del UXR de Mayo `supersedes` la hipótesis de diseño de Abril sobre el uso de tabs".

### 4. `compatible` (Compatible)
- **Uso:** Cuando dos piezas de información de distintas etapas se refuerzan mutuamente.
- **Ejemplo:** "La arquitectura de Supabase es `compatible` con el volumen de datos proyectado en el System Analysis".

### 5. `related` (Relacionado)
- **Uso:** Relación débil o de contexto. Información que es útil conocer pero no condiciona la lógica.

---

## 🛠️ Cómo aplicar esto en el Workflow

1.  **En cada `mem_save`:** El agente debe intentar incluir en el campo `Learned` o en el contenido una referencia a estas relaciones (ej: *"Esta decisión `supersedes` al hallazgo ID:123"*).
2.  **En el Cierre de Etapa:** El Informe de Cierre debe listar los principales conflictos (`conflicts_with`) resueltos.
3.  **En la Auditoría de Salud:** Se usa para calcular el % de "Drift" del proyecto.

---
*Framework Baraldi v2.26.0 · Memory Layer*
