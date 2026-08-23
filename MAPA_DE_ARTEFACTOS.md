# 🗺️ Mapa de Artefactos — Framework Baraldi (v2.28.0)

Este documento es el catálogo oficial de todos los **outputs** que genera el framework. Sirve como guía para que el equipo de producto, diseño y desarrollo entienda qué se ha construido, para qué sirve y cómo aprovechar cada pieza de información.

> [!IMPORTANT]
> **Ubicación de los Artefactos:** Todos los archivos físicos detallados a continuación se generan y organizan automáticamente dentro de la carpeta **`docs-fwbaraldi/`** en la raíz de tu proyecto.
> **Elasticidad Modular:** Los Contratos de Soberanía se activan según el **Perfil de Rigor** elegido al iniciar (`/init`):
> * **⚡ Lean:** `DESIGN.md` + `VOICE.md`.
> * **🚀 Standard:** `DESIGN.md` + `VOICE.md` + `BUSINESS.md` + `UX.md` + `KNOWLEDGE.md`.
> * **🛡️ Enterprise:** Suite Completa (`DESIGN`, `VOICE`, `BUSINESS`, `SECURITY`, `LEGAL`, `UX`, `KNOWLEDGE`).

---

## 💎 Los Artefactos de Soberanía (Fuentes de Verdad)
Estos archivos viven en la carpeta **`docs-fwbaraldi/`** y son transversales a todo el proceso.

| Artefacto | Qué es y Para qué sirve | Cómo utilizarlo | Provecho / Valor | Información que registra |
| :--- | :--- | :--- | :--- | :--- |
| **`PRODUCT_MASTER_MATRIX.md`** | El "Cerebro de Trazabilidad". Inventario vivo de pantallas y componentes. | Úsalo para ver el progreso real y qué falta por diseñar o auditar. | Evita que se pierdan definiciones entre el diseño y el código. | ID de pantalla, prioridad, estado por etapa (E04-E07), componentes core. |
| **`DESIGN.md`** | Contrato Visual Agéntico. La biblia estética para la IA. | Pásalo a cualquier Agente de IA para que codifique con tu estilo exacto. | Elimina el "AI Slop" (diseños genéricos) y garantiza fidelidad visual. | Tokens de color, tipografía, escalas de espaciado, especificaciones de componentes. |
| **`VOICE.md`** | Contrato de Personalidad. Define cómo habla el producto. | Úsalo como guía para redactar todo el copy, errores y notificaciones. | Consistencia absoluta en la comunicación, sin importar quién escriba. | Tono, voz, reglas gramaticales, ejemplos de microcopy (Error/Éxito). |
| **`BUSINESS.md`** | Contrato de Lógica de Negocio e Invariantes. | Consúltalo al diseñar planes, flujos de pago o refactorizar endpoints. | Protege las reglas sagradas del negocio contra roturas accidentales de código. | Tiers/Planes, límites de consumo, inmutabilidad transaccional y reglas de cancelación. |
| **`SECURITY.md`** | Contrato de Ciberseguridad, Permisos y RLS. | Úsalo para auditar endpoints, queries a base de datos y esquemas de Auth. | Garantiza aislamiento multi-tenant y blindaje de datos sensibles desde el día 0. | Matriz RBAC, políticas Row-Level Security, sanitización Zod/OWASP y manejo de tokens. |
| **`LEGAL.md`** | Contrato Regulatorio, Privacidad y Compliance. | Úsalo para diseñar flujos de onboarding, cookies y gestión de cuentas. | Protege la responsabilidad legal y asegura cumplimiento GDPR/PCI-DSS. | Consentimiento explícito, retención de datos, derecho al olvido y pasarelas de pago. |
| **`UX.md`** | Contrato de Ergonomía e Interacción. | Consúltalo para definir tiempos de carga, feedback de botones y estados vacíos. | Asegura una experiencia de usuario fluida, predecible y sin callejones sin salida. | Tiempos de feedback, filosofía Optimistic UI, dimensiones táctiles y Zero Dead-Ends. |
| **`KNOWLEDGE.md`** | Base de Conocimiento y Manual Vivo del Producto. | Impórtalo en tu centro de ayuda o inyéctalo en Copilotos IA. | Elimina el "Handoff Ciego" de CX y habilita soporte contextual RAG inmediato. | FAQ comercial, glosario oficial, guías por rol y matriz de resolución de errores. |

---

## 🚀 Artefactos por Etapa Metodológica

### Etapa 01: Problem Framing (Diagnóstico)
*Misión: Entender el problema real antes de buscar soluciones.*

*   **Problem Statement:** Definición clara del "Dolor" a resolver. Evita que el equipo trabaje en problemas inexistentes.
*   **Stakeholder Map:** Mapeo de quiénes influyen en el proyecto. Sirve para anticipar resistencias políticas o falta de apoyo.
*   **Outcome Definition:** Qué éxito buscamos (ej: "Bajar el churn un 5%"). Alinea las expectativas de negocio con el diseño.
*   **Informe de Benchmark:** Análisis competitivo de 6 secciones. Da contexto de mercado y detecta brechas de oportunidad.
*   **Informe de Research:** Hallazgos validados con usuarios reales (N definido). Separa los hechos de las opiniones.

### Etapa 02: System Analysis (Ecosistema)
*Misión: Mapear dónde vive el producto para que no falle en producción.*

*   **Actor Map Consolidado:** Identifica usuarios visibles e invisibles (Soporte, Admin, APIs). Revela necesidades operativas ocultas.
*   **Dependency Map:** Mapeo de servicios externos y puntos de falla. Sirve para diseñar "caídas elegantes" del sistema.
*   **Risk Map:** Matriz de riesgos (Críticos a Bajos). Anticipa problemas técnicos, legales o de datos antes de que ocurran.
*   **Service Blueprint:** Mapa de 5 capas que conecta la acción del usuario con los procesos de fondo (Backstage).

### Etapa 03: Product Logic (Cerebro)
*Misión: Definir las reglas del juego y la inteligencia del sistema.*

*   **Business Rules Matrix:** Listado de condiciones y consecuencias (`Si X -> Entonces Y`). Es el manual de instrucciones para desarrollo.
*   **Actor Logic Matrix:** Tabla de permisos granulares (CRUD) por rol. Define quién puede ver o tocar qué.
*   **Product KPI Strategy:** Definición de la *North Star Metric*. Indica qué métrica moverá la aguja del negocio.
*   **Matriz SDD:** Contrato de implementabilidad. Asegura que lo diseñado sea técnicamente posible de construir.

### Etapa 04: Information Architecture (Esqueleto)
*Misión: Organizar la información para que sea encontrable.*

*   **Sitemap Visual (Mermaid):** Jerarquía de navegación completa. Úsalo para planificar el flujo de usuarios y la profundidad del sitio.
*   **Product Glossary:** Diccionario de términos oficiales. Evita que una cosa se llame de tres formas distintas (ej: "Cuenta", "Perfil", "Usuario").
*   **User Flows:** Caminos críticos para completar tareas. Detecta cuellos de botella en la navegación.
*   **Object State Machine:** Matriz de todos los estados posibles de un objeto (ej: un Pedido: "Pendiente", "Pagado", "Cancelado").

### Etapa 05: Interaction Design (UX)
*Misión: Definir el comportamiento y el movimiento.*

*   **Interaction Flow Map:** Detalle de qué pasa en cada clic o gesto.
*   **System of States:** Definición de cómo se ve un botón o input cuando está en: *Hover, Focus, Disabled, Loading, Error*.
*   **Wireframes de Comportamiento:** Planos funcionales que validan la jerarquía de contenidos sin distraerse con la estética.

### Etapa 06: Visual Design (UI)
*Misión: Estética premium y coherencia visual absoluta.*

*   **Design Tokens System:** El ADN visual convertido en variables (CSS/JSON).
*   **Component Specs:** Documentación técnica de cómo se construye cada botón, card o menú (redondeos, sombras, elevación).
*   **Interactive Prototype:** Demo funcional para testear la "sensación" del producto antes de escribir una sola línea de código final.

### Etapa 07: Handover & QA (Entrega)
*Misión: Aduana de calidad y paso a producción.*

*   **Completeness Audit:** Checklist de que no falta ningún estado, pantalla o caso de borde.
*   **WCAG A11y Audit:** Certificación de que el producto es accesible (colores, tamaños, lectores de pantalla).
*   **Jira Tasks / Backlog:** Transformación de todo lo anterior en tickets de trabajo listos para el equipo de desarrollo.

### 🚀 Fase: Post-Entrega & Go-To-Market (Lanzamiento Gradual)
*Misión: Garantizar una salida a producción estable, validada por usuarios reales y con soporte proactivo.*

*   **Progressive Launch Plan:** Mapa de fases (Interno -> F&F -> Público) con criterios de éxito para cada anillo de confianza.
*   **Unmapped Use Case Log:** Registro de situaciones no previstas detectadas en pruebas, con valoración de urgencia para "volver al lápiz".
*   **Feedback & Support Map:** Definición de canales de atención y herramientas de escucha para no perder calidad en el primer contacto.
*   **Contingency & Rollback Manual:** Plan de acción ("Botón Rojo") en caso de fallos catastróficos.

---

## 🧠 El Registro Invisible: Engram MCP
Muchos "outputs" no son archivos Markdown, sino **Memorias Sistémicas** que la IA guarda internamente para no olvidar el contexto entre sesiones.

*   **`pf-` (Problem Framing):** Decisiones de investigación y visión.
*   **`sa-` (System Analysis):** Consciencia de riesgos y dependencias.
*   **`pl-` (Product Logic):** Reglas de negocio grabadas como hechos.
*   **`ia-` (Info Architecture):** Taxonomía y glosario persistente.

### 🔍 Cómo leer esta memoria
La información en Engram no es un archivo de texto plano, se recupera mediante comandos que el Agente de IA ejecuta o que tú puedes lanzar:

1.  **Vía IA (Chat):** Puedes pedirle directamente: *"Buscá en la memoria qué decidimos sobre [tema]"* o *"Traé el contexto de la última sesión"*. La IA usará herramientas como `mem_search` o `mem_context`.
2.  **Vía CLI (Terminal):**
    *   `engram tui`: Abre una interfaz visual para navegar por todos los hallazgos.
    *   `engram search "termino"`: Búsqueda rápida desde la terminal.
3.  **Vía Logs de Sesión:** Cada vez que cierras una sesión, se genera un resumen que consolida estos hallazgos para la próxima vez.

**Provecho:** Si cambias de Agente o de chat, la nueva IA puede "leer el cerebro" del proyecto y entender el **POR QUÉ** de cada decisión sin que tengas que explicárselo de nuevo.
