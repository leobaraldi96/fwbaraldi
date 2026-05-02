---
name: baraldi-react-native-standards
description: >
  Protocolo de desarrollo móvil con React Native (Expo).
  Fuerza el uso de componentes funcionales, hooks personalizados y
  estilado con NativeWind.
  Trigger: Al diseñar apps móviles, navegación con Expo Router o manejo de layouts seguros.
version: "2.25.13"
---

# 📱 React Native Expert Guardrails (Baraldi Edition)

Este skill asegura que cualquier aplicación móvil generada o diseñada sea moderna, use el flujo de Expo correctamente y gestione la UI de forma eficiente en iOS y Android.

## 🚀 Expo & Frameworks

1.  **Expo Router:** Usa navegación basada en archivos (`app/` directory).
2.  **NativeWind:** Usa Tailwind CSS adaptado a móvil para mantener la consistencia con la Identidad Baraldi.
3.  **Zustand:** Para manejo de estado ligero con persistencia (`AsyncStorage`).

## 📐 Layouts y UX Móvil

- **Safe Area Insets:** No permitas que el contenido choque con el notch o la barra de sistema. Usa `react-native-safe-area-context`.
- **Keyboard Handling:** Usa `KeyboardAvoidingView` para que los inputs no queden tapados por el teclado virtual.
- **Pressable vs Touchable:** Usa `Pressable` con feedback visual para todas las interacciones táctiles modernas.

## 📁 Estructura Móvil Recomendada

**[EJEMPLO DE ESTRUCTURA A GENERAR POR LA IA]**
```text
src/
├── app/            # Expo Router Screens & Layouts
├── components/     # UI (Cátálogo de componentes atómicos)
├── hooks/          # Lógica reutilizable (API, Sensores)
├── stores/         # Estados globales
└── constants/      # Tokens de diseño y constantes de tema
```

---
*Framework Baraldi v2.25.13 · Excelencia en Mobile.*
