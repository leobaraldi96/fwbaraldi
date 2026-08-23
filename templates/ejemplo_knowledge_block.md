# Guía de Ayuda: Configuración de Claves de API

> **Estándar de Calidad:** Diseñado bajo normas **ISO/IEC/IEEE 26514:2022**, metodología Information Mapping® y taxonomía cognitiva estricta (Separación de Concepto y Tarea).

```yaml
block_id: "blk_auth_api_keys_setup"
version: "1.0.0"
locale_base: "es"
info_type: "procedure_and_reference"
diataxis_type: "how-to"
```

---

## 1. Bloque Conceptual: Claves de API

| Dimensión | Detalle del Concepto (Memoria Semántica / Tercera Persona) |
| :--- | :--- |
| **Definición** | Una clave de API es una cadena alfanumérica única que actúa como un token de seguridad para autenticar las peticiones que tu aplicación realiza a los servidores. |
| **Propósito** | Identifica el origen de la solicitud y verifica que la cuenta cuenta con permisos para acceder a los recursos solicitados. |
| **Seguridad** | Las claves de API conceden acceso total de lectura y escritura a tus proyectos. Debes mantenerlas en secreto en tu entorno de variables de configuración. |

---

## 2. Bloque de Tarea: Generar una Nueva Clave de API

Esta tarea describe los pasos requeridos para crear una clave de autenticación y descargar su archivo de configuración seguro en la consola de administración.

### Requisitos previos
* Una cuenta de usuario activa con rol de administrador en la organización.
* Acceso a la consola web mediante un navegador compatible con TLS 1.3.

### Procedimiento paso a paso (Regla: Un paso = Una acción / Máx 6 pasos)
1. Inicia sesión en el panel de control de la plataforma.
2. Selecciona la opción **Configuración** en el menú de navegación lateral.
3. Presiona el botón **Claves de API**.
4. Haz clic en el botón **Crear Nueva Clave**.
5. Escribe un nombre descriptivo en el campo de texto **Identificador de Clave**.
6. Selecciona el botón **Generar y Descargar**.

> [!WARNING]
> **Advertencia de Seguridad:** La clave de API solo se mostrará en pantalla una vez durante su generación. Guarda la clave inmediatamente en un gestor de secretos seguro o descarga el archivo `.env` sugerido. El sistema no permite recuperar claves existentes por razones de protección de datos.

---

## 3. Bloque de Referencia y Resolución de Problemas (Troubleshooting)

Utiliza esta sección para identificar y resolver de manera directa los problemas comunes de conexión relacionados con el uso de credenciales de API.

### Tabla de Diagnóstico de Errores de Autenticación (Blameless)

| Código de Error o Síntoma | Causa Probable (Regla de Negocio) | Acción Correctiva Obligatoria (Camino de Salida) |
| :--- | :--- | :--- |
| **Error 401: Unauthorized** | La clave de API contiene un carácter incorrecto, espacios adicionales al inicio o se encuentra inactiva. | Copia la clave de API directamente desde tu gestor de secretos y asegúrate de que no existan espacios en blanco en la variable de entorno. |
| **Error 403: Forbidden** | La clave de API es correcta, pero la cuenta de usuario asociada no tiene permisos de escritura en el recurso seleccionado. | Accede a la configuración de permisos de la clave en la consola y verifica que los privilegios asignados correspondan con la petición. |
| **Error 429: Too Many Requests** | Las solicitudes de tu aplicación superaron el límite de cuota permitido para tu plan actual. | Implementa un mecanismo de reintento exponencial en tu cliente o actualiza tu plan en la sección de facturación. |

---

## 4. Recursos Adicionales y Accesibilidad

* Para obtener detalles técnicos sobre los límites de consumo y cuotas del sistema, consulta la [Guía de Referencia de Cuotas de API](https://example.com/docs/api-quotas).
* Si requieres revocar una credencial comprometida de forma inmediata, sigue las instrucciones en la [Guía de Tareas para Revocación de Claves](https://example.com/docs/api-revocation).

### Accesibilidad Visual
* *Alt text descriptivo:* Captura de pantalla de la consola de claves con el botón **Crear Nueva Clave** destacado en el menú de navegación superior.

---
*Framework Baraldi · Ejemplo Canónico de Bloque de Conocimiento.*
