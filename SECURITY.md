# 🛡️ Seguridad y Privacidad — Framework Baraldi

Este documento detalla el compromiso de transparencia y las políticas de seguridad del **Framework Baraldi**. Entendemos que el diseño de producto maneja información sensible y estratégica, por lo que la privacidad es un pilar fundamental de nuestra arquitectura.

---

## 🔒 Compromiso de "Cero Recolección de Datos"

El Framework Baraldi **no recolecta, no almacena en la nube, ni transmite información privada** de tus proyectos, clientes o código a servidores externos.

- **Memoria Local:** El conocimiento persistente se gestiona a través de **Engram MCP**, que utiliza una base de datos SQLite residente únicamente en tu máquina local.
- **Sin Telemetría:** No existe rastreo de uso ni analíticas enviadas a Leo Baraldi o terceros.
- **Arquitectura Zero-Copy:** El framework opera desde su ubicación global y solo escribe archivos en la carpeta de proyecto que tú definas explícitamente.

---

## 🌐 Comunicación Externa (Outbound Calls)

El framework realiza llamadas externas únicamente en los siguientes casos de "Solo Lectura":

### 1. Verificación de Versión (Update Notifier)
- **URL:** `https://raw.githubusercontent.com/leobaraldi96/fwbaraldi/main/package.json`
- **Propósito:** Comparar el número de versión local con el oficial para alertarte de nuevas mejoras o guardrails técnicos.
- **Privacidad:** Esta es una consulta anónima de "Solo Descarga". **No se envía ningún dato** del usuario o del proyecto en esta petición.

### 2. Consultas de Referencia (Opcional)
- **Servicios:** [Context7](https://context7.com) y [Skills.sh](https://skills.sh).
- **Propósito:** Actúan como bibliotecas de consulta técnica bajo demanda.
- **Privacidad:** Solo se realizan consultas si el Agente necesita información técnica específica que no posee. No se comparte el contexto del proyecto con estos servicios.

---

## 🛠️ Buenas Prácticas de Seguridad

1.  **Secretos y API Keys:** Nunca compartas claves API, contraseñas o secretos en el chat con la IA. Si necesitas integrar una API, usa variables de entorno locales y pide al framework que genere el código base sin los valores reales.
2.  **Rutas Absolutas:** El framework utiliza rutas absolutas locales para interactuar con tus archivos, asegurando que el agente solo trabaje dentro del perímetro autorizado.
3.  **Memoria Sensible:** Si un hallazgo del proyecto es extremadamente confidencial, puedes pedir a la IA que no lo guarde en la memoria persistente de Engram.

---
*Framework Baraldi v2.22.0 · Transparencia y Ética Agéntica*
