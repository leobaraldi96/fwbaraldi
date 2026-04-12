---
name: accessibility-expert
description: >
  Guardia universal de Accesibilidad (a11y) basado en WCAG 2.2. 
  Fusiona reglas dogmáticas con patrones de implementación avanzada 
  en React, Tailwind y TypeScript.
version: "1.0.0"
---

# ♿ Accessibility Expert (WCAG 2.2)

Esta habilidad asegura que el producto sea **Perceptible, Operable, Comprensible y Robusto** (POUR) para todos los usuarios.

## ⚖️ Estándares del Framework
1.  **Fundamento (Mínimo MVP):** WCAG 2.2 Nivel A. Es el logro inicial indispensable para no excluir usuarios.
2.  **Excelencia (Recomendado):** WCAG 2.2 Nivel AA. El estándar para productos maduros y SEO profesional.
3.  **Maestría (Aspiracional):** WCAG 2.2 Nivel AAA. Para productos core con recursos dedicados.

> [!TIP]
> La accesibilidad es un camino, no una meta única. Es mejor tener un producto sólido en Nivel A que intentar un AAA fallido que bloquee el lanzamiento. Iteramos según presupuesto y recursos.

---

## 🛠️ Patrones de Implementación Senior

### 1. Elementos Ocultos pero Semánticos
Usa esta clase para texto que solo deben leer los lectores de pantalla:
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

### 2. Botón React/TS Blindado
Asegura que el botón sea accesible incluso en estados de carga:
```tsx
const AccessibleButton = ({ isLoading, disabled, children, ...props }) => (
  <button
    {...props}
    disabled={disabled || isLoading}
    aria-busy={isLoading}
    aria-disabled={disabled || isLoading}
    className="focus-visible:ring-2 focus-visible:ring-offset-2 min-h-[44px] min-w-[44px]"
  >
    {isLoading ? <span className="sr-only">Cargando...</span> : children}
  </button>
);
```

### 3. Manejo de Foco en Modales (Focus Trap)
Es OBLIGATORIO usar `FocusTrap` en modales. Si el usuario presiona `Escape`, el modal debe cerrarse y el foco debe volver al elemento que lo abrió.

---

## 🔍 Reglas de Oro de Diseño (WCAG 2.2)

- **Target Size (2.5.8):** Mínimo 24x24px (AA), recomendado 44x44px (AAA).
- **Contraste (1.4.3):** Mínimo 4.5:1 para texto normal, 3:1 para UI components.
- **Focus Not Obscured (2.4.11):** Asegura que headers sticky no tapen el elemento enfocado:
  ```css
  :focus { scroll-margin-top: 100px; }
  ```
- **Redundant Entry (3.3.7):** No pidas datos que el usuario ya ingresó en la misma sesión (ej: auto-completar dirección de envío si es igual a la de facturación).

---

## 📋 Checklist de Auditoría Rápida
- [ ] ¿Es navegable 100% con teclado (Tab, Enter, Space)?
- [ ] ¿Tiene un link de "Saltar al contenido principal"?
- [ ] ¿Todas las imágenes tienen `alt` (o `alt=""` si son decorativas)?
- [ ] ¿Los campos de formulario tienen etiquetas `<label>` vinculadas?
- [ ] ¿Respeta `prefers-reduced-motion`?

---
*Framework Baraldi v2.20.0 · Core / Tech Guardrails / a11y Expert*
