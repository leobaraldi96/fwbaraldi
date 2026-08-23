# ⚖️ Contrato Legal & Compliance — {NOMBRE_DEL_PRODUCTO}

> **Fuente de Verdad Regulatoria:** Este documento define los compromisos de cumplimiento legal, privacidad de datos y normativas vigentes (GDPR, LGPD, CCPA, Defensa del Consumidor).

---

## 🍪 1. Privacidad y Gestión de Consentimiento

* **Banner de Cookies:** Consentimiento granular previo a la activación de scripts de terceros (Marketing, Analítica, Esenciales).
* **Base Legal del Tratamiento:** {Ejecución contractual / Consentimiento explícito / Interés legítimo}.
* **Datos Sensibles Almacenados:** {Listado estricto de PII recolectada: Nombre, Email, Teléfono, Dirección}.
* **Terceros Procesadores de Datos (Sub-processors):**
  * Infraestructura: {Supabase / AWS / Vercel}
  * Procesador de Pagos: {Stripe / Mercado Pago}
  * Mensajería / Email: {Resend / Twilio / WhatsApp Cloud API}

---

## 🗑️ 2. Derecho al Olvido y Retención de Datos

1. **Solicitud de Eliminación de Cuenta:**
   - El usuario debe poder solicitar la baja y eliminación de sus datos desde su panel de ajustes o vía soporte.
   - Tiempo máximo de ejecución: `{N}` días.
2. **Estrategia de Anonimización:**
   - Las transacciones financieras se conservan con fines contables/fiscales, pero la PII asociada (nombre, email, teléfono) se reemplaza por `[ANONYMIZED_USER_{ID}]`.
3. **Exportación de Datos (Portabilidad):**
   - El usuario tiene derecho a descargar una copia de sus datos en formato estándar (`JSON` o `CSV`).

---

## 💳 3. Cumplimiento de Pagos y Transacciones (PCI-DSS & Facturación)

* **Tokens de Pago:** Ningún dato sensible de tarjetas de crédito o CVV toca nuestros servidores ni base de datos; la tokenización se delega 100% en la pasarela certificada (PCI-DSS Level 1).
* **Términos de Facturación:** Especificación clara de períodos de prueba (Free Trial), cargos automáticos recurrentes y política de cancelación visible antes del checkout.

---

## 🚫 NEVER List — Prohibiciones Legales
- **NUNCA** suscribas a un usuario a comunicaciones comerciales sin su consentimiento explícito previo (Checkbox desmarcado por defecto / Opt-in).
- **NUNCA** compartas o vendas bases de datos de clientes a terceros.
- **NUNCA** ocultes el enlace a los Términos y Condiciones o Política de Privacidad en los flujos de registro.

---
*Framework Baraldi · docs-fwbaraldi/LEGAL.md Template.*
