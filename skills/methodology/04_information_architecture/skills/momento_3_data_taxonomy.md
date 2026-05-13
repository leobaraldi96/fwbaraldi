---
name: momento_3_data_taxonomy
description: >
  Protocolo operativo para estructurar el Content Inventory y la Data Taxonomy.
  Produce el artefacto 03_Taxonomy_Content_Inventory.md.
---

# [MOMENTO 3] Data Taxonomy & Content Inventory

> **Misión:** Organizar y clasificar el contenido del producto. Si el Sitemap (Momento 1) es el edificio y los Flujos (Momento 2) son los pasillos, la Taxonomía es el mobiliario y la información que vive dentro de cada habitación.

## 🏁 Instrucciones para el Agente (Cómo conducir este momento)

### Paso 1: Mapeo de Entidades (Data Schema cruzado)
1. Revisa la base de datos o el modelo técnico definido en la Etapa 03.
2. Identifica las entidades Core (Ej: Usuario, Curso, Producto, Factura).

**[CRÍTICO - LEY ANTI-PODA]:** Toda actualización al artefacto de esta etapa debe ser estrictamente **ADITIVA**. La IA tiene prohibido resumir, agrupar o "limpiar" la matriz de inventario o taxonomía existente. Si se añade un nuevo atributo, la resolución de todos los atributos previos debe mantenerse intacta.

### Paso 2: Diseño del Inventario de Contenido (Content Inventory Matrix)
Por cada vista principal definida en el Sitemap (M1), debes listar exactamente qué información se va a mostrar.
Esto es crucial para que luego en la Etapa 05, los wireframes no se hagan con "Lorem Ipsum", sino con datos reales.

- Pídele al usuario definir la densidad de datos: *"Para la Tarjeta de Producto en el Catálogo, ¿qué datos mostramos? (Ej: Título, Precio, Tag de Descuento, Botón Favorito, Rating de Estrellas)."*

### Paso 3: Clasificación y Taxonomía
Organiza cómo se clasifica la información (vital para bases de datos y algoritmos de búsqueda).
- **Categorías:** Estructura jerárquica principal (Ej: Ropa -> Hombre -> Camisas).
- **Etiquetas (Tags):** Atributos transversales (Ej: #Nuevo, #Oferta, #Verano).
- **Metadatos:** Datos ocultos pero útiles (Ej: Fecha de creación, ID de autor).

### Paso 4: Privilegios y Niveles de Usuario (Tiering)
Si el producto tiene niveles de usuario (Ej: Gratis vs Pro), debes documentar qué datos o secciones son visibles/ocultos según el nivel.
*Ejemplo del aprendizaje de Animal Groom:* ¿Qué ve un alumno Hobby vs un alumno Pro? ¿Qué bloques del LMS se bloquean y cuáles están abiertos?

### Paso 5: Atributos de UI y Encontrabilidad (Search & Discovery)
Para cerrar el modelo, define:
1. **Matriz de Atributos de Información:** Para cada entidad, lista los atributos clave y el "Formato sugerido" para la UI (Ej: Entidad: Suscripción -> Atributos: Plan, Fecha Renovación -> Formato UI: Badge, Texto).
2. **Estrategia de Encontrabilidad (Search & Discovery):** Define cómo el usuario y los motores de búsqueda encontrarán esta información (Slugs SEO amigables, meta keywords, relaciones de breadcrumbs).

### Paso 6: Artefacto Final
Genera o actualiza el archivo `docs-fwbaraldi/04_Information_Architecture/03_Taxonomy_Content_Inventory.md` incluyendo:
1. **Content Inventory:** Matriz Vista vs. Datos en pantalla.
2. **Taxonomy Schema:** Árbol de categorías, tipos de evaluación o contenido.
3. **Data Matrix / Atributos:** Reglas de visibilidad por Rol/Tier y Matriz de atributos con formato sugerido para UI.
4. **Estrategia de Encontrabilidad (Search & Discovery).**
5. Metadata del artefacto.
