---
name: baraldi-electron-standards
description: >
  Protocolo para la creación de aplicaciones de escritorio con Electron.
  Fuerza la seguridad (Context Isolation), la comunicación IPC tipo-segura
  y la separación de procesos (Main/Renderer).
  Trigger: Al diseñar o prototipar apps de escritorio, menús de sistema o integraciones nativas.
version: "2.25.13"
---

# 🖥️ Electron Expert Guardrails (Baraldi Edition)

Este skill asegura que la IA construya aplicaciones de escritorio robustas y seguras, evitando vulnerabilidades críticas y garantizando una experiencia nativa premium.

## 🔒 Regla de Oro: Seguridad Primero

- **SIEMPRE** usa `contextIsolation: true`.
- **NUNCA** habilites `nodeIntegration` en el proceso de renderizado.
- **Preload Scripts:** Úsalos para exponer solo las APIs necesarias de forma segura mediante `contextBridge`.

## 📁 Estructura de Proyecto Recomendada

```text
src/
├── main/           # Proceso de Node.js (Servicios, Ventanas, IPC)
├── renderer/       # Proceso de Navegador (UI: React/Next/HTML)
├── preload/        # Puente de seguridad entre procesos
└── shared/         # Tipos e interfaces compartidas
```

## ⚡ Comunicación IPC (Inter-Process Communication)

No expongas el módulo `ipcRenderer` completo. Usa un adaptador typed:

```typescript
// preload/index.ts (Ejemplo seguro)
contextBridge.exposeInMainWorld('electron', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  invoke: (channel, data) => ipcRenderer.invoke(channel, data),
});
```

## 🎨 Comportamiento Nativo

1.  **Menús de Sistema:** Crea menús nativos que respeten las convenciones de `Cmd/Ctrl + Q`, `S`, etc.
2.  **Auto-Updates:** Implementa `electron-updater` para mantener el software al día.
3.  **Tray & Notifications:** Usa las APIs nativas para que la app se sienta parte del sistema operativo.

---
*Framework Baraldi v2.25.13 · Rigor en Escritorio.*
