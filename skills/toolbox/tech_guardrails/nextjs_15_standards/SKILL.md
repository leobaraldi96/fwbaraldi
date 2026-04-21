---
name: baraldi-nextjs-15-standards
description: >
  Estándares expertos para el desarrollo con Next.js 15 (App Router).
  Fuerza el uso de Server Components, Server Actions y la estructura de archivos correcta.
  Trigger: Al trabajar en archivos dentro de /app, crear rutas o manejar lógica de servidor.
version: "2.25.10"
---

# 🚀 Next.js 15 Expert Guardrails (Baraldi Edition)

Estos estándares aseguran que la IA nunca utilice librerías obsoletas ni patrones de "Pages Router" en proyectos modernos de Next.js 15.

## 📁 Convenciones del App Router

```text
app/
├── layout.tsx          # Layout raíz (obligatorio)
├── page.tsx            # Página principal (/)
├── loading.tsx         # UI de carga (Suspense)
├── error.tsx           # Captura de errores
├── (auth)/             # Grupo de rutas (organizacional)
│   └── login/page.tsx  # /login
└── _components/        # Carpeta privada para componentes locales
```

## ⚡ Server Components & Actions

1.  **Server Components por defecto:** No uses `use client` a menos que necesites interactividad (hooks, events).
2.  **Server Actions (Mutaciones):**
    ```typescript
    // actions.ts
    "use server";
    export async function submitAction(formData: FormData) {
      // lógica de servidor...
      revalidatePath("/dashboard");
    }
    ```

## 📦 Reglas de Carga y Datos

- **Fetching en Servidor:** Haz el fetch de datos directamente en el componente async.
- **Promise.all:** Ejecuta fetches paralelos siempre que sea posible para evitar cascadas ("waterfalls").
- **Suspense:** Envuelve componentes lentos en `<Suspense fallback={<Loading />}>`.

---
*Framework Baraldi v2.25.10 · Calidad Técnica Absoluta.*
