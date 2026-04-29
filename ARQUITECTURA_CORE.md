# Arquitectura Core del Framework Baraldi

> Este documento detalla la estructura lógica, la arquitectura tecnológica y el ciclo de vida de adopción del **Framework Baraldi** (v2.25.10). El framework ha evolucionado de un repositorio de prompts a un **Ecosistema Agéntico Simbiótico** donde la infraestructura tecnológica y la maestría humana convergen.

---

## 1. La Propuesta de Valor (El "Por qué")

### De Herramienta Táctica a Ecosistema Simbiótico
La interacción típica con la IA es un entorno transaccional (pregunta-respuesta) donde el contexto se pierde o se satura rápidamente. El **Framework Baraldi** rompe este paradigma transformando a la IA de un "chat táctico" a un **Orquestador de Producto Sistémico**.

Este ecosistema se basa en la **Simbiosis Cognitiva**:
- El humano aporta el contexto ético, la intuición y la brújula estratégica.
- La IA aporta el rigor dogmático, la memoria de largo plazo y la capacidad de análisis sistémico.
- Obliga a pasar por etapas de **divergencia y diagnóstico** antes de programar una sola línea de código.
- Aisla las decisiones (Problema → Entorno → Lógica → Interfaz) impidiendo la mezcla riesgosa de diagnóstico con solución.
- Genera y documenta evidencia real para sostener la construcción técnica y comercial del producto.

---

## 2. Arquitectura "Cero-Copia" (Zero-Copy)

Para evolucionar a una herramienta escalable en múltiples proyectos simultáneos, el framework se sustenta en una **Arquitectura Tripartita de Cero-Copia**.

### Concepto Central
Ningún archivo metodológico, de identidad de la IA, o plantillas de sistema debe "parásitar" o clonarse en la carpeta local del proyecto de tu empresa. El proyecto debe permanecer limpio y alojar **únicamente** el código puro y los documentos de salida generados.

### Diagrama de la Arquitectura Tripartita

```mermaid
flowchart TD
    %% Nodos Principales
    subgraph Motor["1. Motor Global - Skill Repository"]
        direction TB
        A["00_boot/context.md"]:::skill
        B["Methodology Skills"]:::skill
        C["Tech Guardrails (Toolbox)"]:::skill
    end

    subgraph Cerebro["2. Memoria Sistémica Global"]
        direction TB
        D((Engram MCP)):::engram
        D1(["Persistencia entre sesiones"]):::engram
        D2(["Historial de Decisiones"]):::engram
    end

    subgraph Workspace["3. Workspace Local del Proyecto"]
        direction TB
        E["docs-fwbaraldi/"]:::localfolder
        F["Archivos Entregables (Problem Statement, etc.)"]:::localfile
        G["index.html / src/"]:::localfile
    end

    %% Relaciones
    Motor -- "Instruye identidad y reglas" --> Cerebro
    Cerebro -- "Lee contexto del proyecto" --> Motor
    
    Motor -- "Genera entregables semánticos" --> Workspace
    Cerebro -. "Persiste referencias a" .-> Workspace

    %% Estilos de Nivel
    classDef skill fill:#1a1c23,stroke:#6c757d,stroke-width:2px,color:#fff
    classDef engram fill:#2a0a2f,stroke:#9b51e0,stroke-width:2px,color:#fff
    classDef localfolder fill:#0c2415,stroke:#28a745,stroke-width:2px,color:#fff
    classDef localfile fill:#1a3022,stroke:#28a745,stroke-width:1px,color:#fff
```

* **Motor Global (Skill Directory):** Vive oculto en tu gestor de IA (Antigravity). Contiene el ADN de comportamiento y las instrucciones puras.
* **Memoria Sistémica (Engram MCP):** Actúa como la base de datos centralizada. En lugar de guardar archivos `.md` de memoria repartidos por tu PC, todos los hallazgos y en qué etapa está un proyecto viven aquí. Si cruzas aprendizajes entre dos proyectos distintos, Engram lo nota.
* **Workspace Local:** Tu carpeta. El Agente tiene orden estricta de dirigir todo entregable final a un folder ordenado y semántico (`docs-fwbaraldi/`).

---

## 3. Ciclo de Vida y Flujo Operacional

El avance del diseño no es orgánico, obedece a un flujo estructurado de Gates (Compuertas) donde la IA avanza de "Momento en Momento", requiriendo siempre intervención y aprobación humana para continuar.

```mermaid
sequenceDiagram
    autonumber
    actor Humano as Product Owner / Dev
    participant IA as Framework (IA)
    participant E as Engram (Memoria)
    participant FS as Local Workspace

    Humano->>IA: "Empezamos proyecto X en carpeta Y"
    IA->>E: Consultar contexto de 'X'
    E-->>IA: Devuelve "Primera vez" o "Etapa N en curso"
    
    note over IA,Humano: INICIO FASE DIAGNÓSTICO (Etapa 01)
    IA->>IA: Divergencia y Análisis (Momento 1)
    
    IA->>FS: Crea 'docs-fwbaraldi/01_Vision_y_Estrategia.md'
    IA->>Humano: "Artefactos listos. ¿Se aprueban?"
    
    Humano-->>IA: Revisa y ajusta. "Aprobado, continuar".
    
    IA->>E: Guarda validación de hipótesis central
    
    note over IA,Humano: FASE DE LÓGICA SISTÉMICA (Etapa 03)
    IA->>IA: Ejecuta Product Logic (Brain Integration)
    IA->>FS: Genera Blueprint y Business Rules Matrix
```

### 3.1 El Rol de la Etapa 03 (Product Logic)
Tras completar la actualización v2.25.12, la Etapa 03 se consolida como el **"Cerebro del Producto"**. Su función es blindar la viabilidad funcional antes de que el equipo de diseño entre a la fase visual. 

**Entregables clave al usuario:**
- **Service Blueprint:** Mapa de interacción front/back/soporte.
- **Data Dictionary:** Inventario de entidades y atributos.
- **Business Rules Matrix:** Leyes lógicas de comportamiento (If/Then).
- **KPIs Funcionales:** North Star Metric y puntos de medición.

---

### Regulación de Diálogo de Producto
Para evitar saturación cognitiva, existe el acuerdo de **Documentación vs Interacción**:
1. El **Plan de Implementación** (panel de tareas de la IDE) solo sirve para documentar bloqueos técnicos y progreso.
2. La **Interfaz del Agente** es el conducto de charla humana y estratégica. La IA nunca espera que el humano edite el plan; el humano lidera desde el diálogo natural.

---

## 4. Adopción, Escalabilidad y Proyectos Legacy

### 4.1 Abordar un Proyecto Nuevo (Greenfield)
Es el camino crítico primario. Al invocar el framework mencionando "Arranquemos el proyecto desde cero", el sistema inicializa obligatoriamente en la **Etapa 01 - Problem Framing**. 
El objetivo primario aquí es *No escribir código hasta resolver los gaps de conocimiento del negocio.*

### 4.2 Sincronización de Proyectos En Curso (In-flight / Legacy)
Uno de los mayores desafíos metodológicos es aplicar rigor a un proyecto que ya cuenta con meses de desarrollo. 

Si un proyecto ya está comenzado, **NO obligamos al equipo a empezar de Etapa 01** repitiendo investigación redundante. Para esto usamos el concepto de **Auditoría de Sincronización**:

1. **Invocación Híbrida:** El usuario indica *"Quiero sumar este código legacy al Framework Baraldi"*.
2. **Escaneo Superficial:** El Agente escanea las carpetas y levanta un inventario de lo que *hay* vs lo que *debería haber*.
3. **Mapeo de Gaps:** En lugar de lanzar prompts de Etapa 01, la IA genera un "Matriz de Deuda Sistémica". Por ejemplo: *"Tienes el código funcionando (Etapa 05), pero no encuentro mapas de flujos lógicos (Etapa 03) ni métricas validadas (Etapa 01)."*
4. **Acuerdo de Purismo:** El usuario y la IA deciden el nivel de purismo a adoptar. Puede ser que solo necesitemos correr la **Etapa 02 (System Analysis)** para documentar las dependencias ocultas, e ignorar el Problem Framing porque la empresa asume ese riesgo.

> Esto garantiza que el framework actúe como un **consultor flexible** y no como un sistema burocrático bloqueante.
