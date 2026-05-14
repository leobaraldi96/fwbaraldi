---
name: product-master-matrix-protocol
description: Protocolo para la gestión del artefacto vivo de trazabilidad de producto (PMM).
version: "2.26.3"
---

# 📊 [SKILL 39] Product Master Matrix (PMM) Protocol

## Misión
Establecer y mantener el "Cerebro de Trazabilidad" del proyecto. El PMM es un artefacto vivo que registra cada vista, componente e interacción desde su concepción en la Etapa 04 hasta su entrega final en la Etapa 07.

## 🏗️ Estructura del Artefacto (`PRODUCT_MASTER_MATRIX.md`)
El archivo debe residir en la raíz del proyecto y seguir este formato de tabla:

| ID | Vista / Pantalla | Prioridad (N/U) | E04 (Arch) | E05 (UX/Voice) | E06 (UI/Alta) | E07 (QA/Dev) | Notas / Componentes Core |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| P01 | Dashboard Home | 1 (Alta) | ✅ | ✅ | 🏗️ | ❌ | Sidebar, StatsGrid, ChartArea |
| P02 | Login / Auth | 2 (Media) | ✅ | 🏗️ | ❌ | ❌ | AuthForm, SocialLogin |

**Leyenda:** ✅ (Completado/Validado), 🏗️ (En Proceso), ❌ (Pendiente).

## 🔄 Ciclo de Vida del PMM

### 1. Inicialización (Etapa 04 - Momento 1)
*   **Acción:** Crear el archivo basado en el Sitemap.
*   **Foco:** Definir todas las rutas y asignar la **Prioridad de Negocio (Necesidad vs. Urgencia)**.

### 2. Enriquecimiento de Interacción (Etapa 05 - Momento 3)
*   **Acción:** Marcar el estado de los Wireframes y la Voz (VOICE.md).
*   **Foco:** Validar que cada vista tenga sus estados (Loading, Error) definidos.

### 3. Ejecución Visual (Etapa 06 - Momento 1 y 3)
*   **Acción:** Registrar la completitud de la UI de Alta Fidelidad.
*   **Foco:** Vincular cada pantalla con el artefacto interactivo (Skill 37).

### 4. Auditoría de Handover (Etapa 07)
*   **Acción:** Check final de trazabilidad.
*   **Foco:** Asegurar que nada de lo definido en la Etapa 04 se perdió en el camino.

## 🚦 Reglas de Oro
*   **No Poda:** Nunca eliminar una fila sin consenso. Si una pantalla se descarta, se marca como `[DESCARTADA]` con el motivo.
*   **Checklist Activo:** El PMM es la fuente de verdad para el "Done Definition".
*   **Visibilidad:** El Agente debe mostrar un resumen del estado del PMM al inicio de cada sesión.

---
*Framework Baraldi v2.26.3 · Product Traceability Engine.*
