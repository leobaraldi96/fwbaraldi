# Contrato de Seguridad & Permisos — {NOMBRE_DEL_PRODUCTO}

> **Fuente de Verdad de Ciberseguridad & Acceso:** Este documento establece las directivas de seguridad, autenticación, autorización y protección de datos. Todo código backend, endpoints y reglas de base de datos deben auditarse contra este estándar.

---

## 1. Autenticación & Manejo de Sesión

* **Proveedor de Auth:** {Supabase Auth / NextAuth / Custom JWT / OAuth2}
* **Estrategia de Tokens:** Access Token corto ({N} minutos) + Refresh Token rotativo ({N} días).
* **MFA / 2FA:** {Obligatorio para roles Admin / Opcional para usuarios finales}.
* **Políticas de Password:** Mínimo 8 caracteres, al menos 1 número y 1 carácter especial (o Magic Links sin password).

---

## 2. Matriz de Control de Acceso Basado en Roles (RBAC)

| Recurso / Entidad | Rol: SuperAdmin | Rol: Tenant Owner | Rol: Staff / Operador | Rol: Cliente / Usuario | Rol: Anónimo |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Configuración Tenant** | CRUD | CRUD | READ (Parcial) | NONE | NONE |
| **Gestión de Usuarios/Roles**| CRUD | CRUD | NONE | NONE | NONE |
| **Catálogo & Precios** | CRUD | CRUD | READ | READ | READ (Público) |
| **Crear Reservas / Pedidos** | CRUD | CRUD | CRUD | CREATE / READ propio | CREATE (Borrador) |
| **Reportes & Facturación** | CRUD | CRUD | NONE | READ propio | NONE |
| **Logs de Auditoría** | READ | READ | NONE | NONE | NONE |

---

## 3. Guardrails de Base de Datos y Row-Level Security (RLS)

1. **Aislamiento Multi-Tenant:**
   - Toda tabla con datos de clientes **DEBE** incluir la columna `tenant_id uuid NOT NULL`.
   - Políticas RLS obligatorias: ninguna query puede ejecutarse sin verificar `auth.uid()` y el `tenant_id` de la sesión.
2. **Sanitización y Validación:**
   - Todos los payloads de entrada deben validarse con esquemas estrictos (ej: Zod / Joi) antes de ser procesados.
   - Prevención estricta contra SQL Injection y XSS (escapar HTML en inputs de texto enriquecido).
3. **Manejo de Secretos y API Keys:**
   - Cero tokens o credenciales en duro en el repositorio.
   - `SERVICE_ROLE_KEY` o credenciales master solo en funciones de backend aisladas (Edge Functions/Server-side), **NUNCA** en el bundle del cliente.

---

## NEVER List — Prohibiciones de Seguridad
- **NUNCA** devuelvas contraseñas (ni hashes), tokens sensibles o datos de pago en respuestas de API.
- **NUNCA** deshabilites RLS en tablas de producción.
- **NUNCA** confíes en datos de sesión que provengan únicamente del `localStorage` sin verificación criptográfica en backend.

---
*Framework Baraldi · docs-fwbaraldi/SECURITY.md Template.*
