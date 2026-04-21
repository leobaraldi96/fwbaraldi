---
name: baraldi-tailwind-4-standards
description: >
  Protocolo de estilado con Tailwind CSS 4.
  Previene el uso de hex-codes directos y variables var() en classNames.
  Vinculado al ADN visual de Leo Baraldi.
  Trigger: Al editar clases CSS, componentes React o configurar el tema.
version: "2.25.10"
---

# 🎨 Tailwind 4 Guardrails (Baraldi Edition)

Este skill evita que la IA genere código CSS "sucio" u obsoleto. Obligamos a usar el sistema de diseño definido para mantener la consistencia con la identidad Baraldi.

## 🚫 Reglas Críticas (No-Go)

1.  **NO usar HEX directo:** Nada de `text-[#FE5753]`. Usa clases semánticas.
2.  **NO usar `var()` en className:** Nada de `bg-[var(--color-primary)]`. 
3.  **Identidad Integrada:** Si el proyecto usa la Identidad Baraldi, usa:
    - `bg-primary` -> para el Púrpura Eléctrico.
    - `text-accent` -> para el Verde Esmeralda.
    - `bg-background` -> para el Gris Grafito.

## 🛠️ El Utility `cn()` (Tailwind Merge)

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ✅ Uso para clases condicionales
<div className={cn("rounded-lg border", isActive && "border-accent")} />
```

## 📐 Patrones Estructurales

- **Flexbox:** `flex items-center justify-between gap-4`
- **Modernist Spacing:** Siguiendo a Paul Rand, priorizamos el "aire". Evita el hacinamiento de elementos (`gap-8` o superior para secciones principales).
- **Responsive:** Móvil primero (`w-full md:w-1/2`).

---
*Framework Baraldi v2.25.10 · Estética y Rendimiento.*
