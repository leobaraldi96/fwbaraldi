---
name: web-artifact-prototyping-protocol
description: Suite de ingeniería para crear artefactos React de alta fidelidad con shadcn/ui y empaquetado autónomo.
version: "2.26.8"
---

# 🚀 [SKILL 37] Web Artifact Prototyping (Engineering Engine)

## Misión
Ejecutar la construcción técnica de prototipos interactivos que validan el `DESIGN.md`. Este protocolo garantiza una infraestructura de nivel de producción mediante un stack moderno y un sistema de empaquetado autónomo.

## 🛠️ Tech Stack & Infraestructura
*   **Core:** React 18 + TypeScript (vía Vite).
*   **Styling:** Tailwind CSS 3.4.1 con sistema de temas de shadcn/ui.
*   **Componentes:** 40+ componentes de `shadcn/ui` pre-instalados (Radix UI).
*   **Configuración:** Aliases de ruta `@/` configurados para importaciones limpias.
*   **Bundling:** Parcel para generar un único archivo `bundle.html` con todo el JS y CSS inlined.

## 🏁 Flujo de Ingeniería (Quick Start)
1.  **Inicialización:** Ejecutar script de inicio para crear el repo React con la configuración Baraldi (Tailwind 3.4.1 + shadcn).
2.  **Desarrollo Atómico:** Construir la interfaz basándose en los tokens del Momento 0 (Etapa 06).
3.  **Bundling:** Usar `bundle-artifact` para generar el archivo autoejecutable.
4.  **Entrega:** Compartir el `bundle.html` como artefacto final.

## 🎨 Alineación Estética (Momento 0 Enforcement)
**PROHIBIDO:** El prototipo no puede degradar el gusto estético definido.
*   **Typography:** Configurar fuentes `Geist/Satoshi` en `tailwind.config.js`. Prohibido `Inter`.
*   **Spacing:** Uso de `clamp()` para tipografía y espaciado fluido: `clamp(3rem, 8vw, 6rem)`.
*   **Touch Targets:** Garantizar un mínimo de 44x44px en todos los elementos interactivos.
*   **No Slop:** Evitar layouts centrados, gradientes morados y sombras neón.

## 🔍 Reglas de Implementación
*   **Grid over Flex:** Preferir CSS Grid sobre Flexbox para estructuras complejas; evitar hacks de `calc()`.
*   **Motion:** Implementar resortes (`stiffness: 100, damping: 20`) en transiciones de estado.
*   **Responsividad:** Mobile-first obligatorio. Sin scroll horizontal en 375px.
*   **Estados:** Implementar Skeleton Loaders reales que coincidan con la geometría del componente.

---
*Framework Baraldi v2.26.8 · High-Fidelity Engineering Protocol.*
