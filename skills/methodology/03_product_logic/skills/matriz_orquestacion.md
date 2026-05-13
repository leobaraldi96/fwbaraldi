# [MOMENTO 3.5] Matriz de Orquestación de Implementación (SDD Flow)

> **Inspiración:** Basado en el protocolo *Spec-Driven Development* (SDD) de Engram.

## Propósito
Cerrar la Etapa 03 asegurando que la lógica definida no sea solo "teórica", sino **implementable**. Esta matriz sirve de contrato para los desarrolladores y de validación final para el diseño.

## 📐 La Matriz SDD (Baraldi Edition)

Cada funcionalidad crítica del producto debe pasar por el siguiente flujo de orquestación antes de darse por aprobada:

| Funcionalidad | Explore (Riesgos) | Propose (Alcance) | Apply (Lógica Core) | Verify (Test de Éxito) |
| :--- | :--- | :--- | :--- | :--- |
| **[Nombre Feature]** | ¿Qué dependencias técnicas o bloqueos tiene? | ¿Qué se hace y qué queda fuera (Scope)? | ¿Cuál es la regla de negocio central? | ¿Cómo sabemos que funciona? (Criterio de Aceptación) |

---

## 🔬 Fase de Verificación de Integridad Semántica

Antes de terminar la Matriz, la IA debe realizar el **Cross-Check de Relaciones**:
1.  **¿Esta feature es `scoped`?** (¿Aparece en la Etapa 01?).
2.  **¿Hay algún `conflicts_with`?** (¿Contradice alguna limitación técnica de la Etapa 02?).
3.  **¿Esta lógica `supersedes` a una propuesta anterior?**

---
*Framework Baraldi v2.26.0 · Product Logic SDD Flow*
