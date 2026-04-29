# Guía de Referencia: Lógica de Producto (Product Logic)

> **Propósito:** Proveer un marco teórico y procedimental agnóstico para la definición de la inteligencia detrás del producto. Esta guía sirve como base de conocimiento para la IA y el Director Humano durante la Etapa 03.

---

## 0. Aclaración Terminológica: ¿Qué es este Blueprint?

Es común confundir términos, pero en este framework distinguimos tres niveles de profundidad:

1.  **Customer Journey (UX Design):** Se enfoca en la **experiencia y emoción** del usuario. Es una herramienta de diagnóstico.
2.  **Service Blueprint (Product Logic):** Es nuestro enfoque aquí. Se enfoca en la **transacción y operación**. Conecta lo que el usuario hace (Frontstage) con lo que el sistema ejecuta (Backstage). Es el "Plano Funcional" del producto.
3.  **System Architecture (Software Engineering):** Se enfoca en la **infraestructura y el código**. Es el "Plano de Construcción".

> **Importante:** El Blueprint de la Etapa 03 es para **Diseñadores de Producto y Product Managers**. Define el "cómo funciona" (lógica) antes del "cómo se ve" (interfaz), asegurando que el diseño visual tenga un respaldo operativo real.

---

## 1. Service Blueprinting (La Máquina de Servicio)

El Service Blueprint es un diagrama que visualiza las relaciones entre los diferentes componentes del servicio (personas, accesorios y procesos) que están directamente vinculados a los puntos de contacto en el journey del cliente.

### Componentes Clave:
- **Evidencia Física:** Lo que el cliente ve o toca (facturas, correos, notificaciones, interfaces).
- **Acciones del Cliente:** Pasos lógicos que el usuario realiza.
- **Frontstage (IA/UI):** Acciones que ocurren a la vista del cliente y son ejecutadas por la interfaz o agentes de IA.
- **Backstage:** Acciones que ocurren "detrás de escena" para apoyar las acciones del frontstage (ej: un groomer preparando el equipo, un sistema de IA procesando un prompt).
- **Procesos de Soporte:** Actividades internas que no son visibles pero son necesarias para que el servicio funcione (APIs, bases de datos, logística, proveedores externos).

---

## 2. Los 15 Principios de un Buen Servicio (Good Services)
> Basado en el estándar de Lou Downe, integrado en el Momento 1.

1.  **Fácil de encontrar:** El nombre debe ser un verbo basado en la tarea del usuario.
2.  **Propósito claro:** Explicar qué hace el servicio en los primeros segundos.
3.  **Establecer expectativas:** Costos, tiempos y elegibilidad claros desde el inicio.
4.  **Completar el resultado:** Permitir al usuario terminar lo que empezó.
5.  **Funcionamiento familiar:** Usar patrones conocidos (familiaridad > novedad).
6.  **Sin conocimiento previo:** No asumir que el usuario entiende tu jerga interna.
7.  **Agnóstico a la estructura orgánica:** El usuario no debe notar tus silos internos.
8.  **Mínimo de pasos:** Eliminar fricción innecesaria.
9.  **Consistencia:** Mismo tono y reglas en todos los canales.
10. **Sin callejones sin salida:** Cada "No" debe ofrecer una alternativa o siguiente paso.
11. **Usable por todos:** Accesibilidad desde el diseño lógico.
12. **Incentivos correctos:** Fomentar comportamientos positivos en staff y usuarios.
13. **Responder al cambio rápidamente:** Flexibilidad ante cambios de vida del usuario.
14. **Explicar decisiones:** Claridad en por qué se aprobó o rechazó algo.
15. **Asistencia humana:** Siempre debe ser fácil hablar con una persona.

---

## 3. Modelado de Datos para Diseñadores (Data Schema Lite)

No buscamos un diagrama SQL complejo, sino entender la estructura de la información que el sistema debe manejar.

### Conceptos:
- **Entidad:** Un objeto del mundo real que queremos representar (Usuario, Pedido, Curso, Mascota).
- **Atributo:** Propiedades de la entidad (Nombre, Email, Fecha de Creación).
- **Relaciones:**
    - **1:1 (Uno a uno):** Un usuario tiene un único perfil.
    - **1:N (Uno a muchos):** Un usuario tiene muchas mascotas.
    - **N:N (Muchos a muchos):** Muchos alumnos están inscritos en muchos cursos.

---

## 3. Matriz de Reglas de Negocio (Business Rules)

Las reglas de negocio definen el comportamiento automático del sistema ante ciertos eventos.

### Patrones Comunes:
1. **Validación:** "No se puede [Acción] si no se cumple [Condición]".
2. **Derivación:** "Si el usuario es de tipo Premium, aplicar descuento del 20%".
3. **Estado (State Machine):** Un pedido puede pasar de "Pendiente" a "Pagado" solo si la API de pago devuelve éxito.
4. **Restricción de Tiempo:** "Las cancelaciones deben ocurrir con X horas de antelación".

---

## 4. Estrategia de Métricas (Product KPIs)

Medir la lógica significa medir el éxito de los procesos internos, no solo el uso de la interfaz.

### Frameworks Sugeridos:
- **North Star Metric:** La métrica única que mejor captura el valor central que tu producto entrega a sus clientes.
- **HEART (Google):** Happiness, Engagement, Adoption, Retention, Task Success.
- **AARRR (Pirate Metrics):** Acquisition, Activation, Retention, Referral, Revenue.

### Ejemplo de Métrica Lógica:
*   *Tasa de éxito de proceso:* ¿Cuántos usuarios que inician el flujo A logran completarlo sin errores lógicos?
*   *Tiempo de procesamiento:* ¿Cuánto tiempo toma el backstage en responder a una solicitud del frontstage?

---

*Framework Baraldi v2.25.11 · Guía de Referencia Agóstica*
