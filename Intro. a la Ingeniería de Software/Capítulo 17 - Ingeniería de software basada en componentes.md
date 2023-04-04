
La ingeniería de software basada en componentes (CBSE) es un enfoque para el desarrollo de software que se basa en la reutilización de entidades llamadas 'componentes de software'.

Surgió del fracaso del desarrollo orientado a objetos para apoyar la reutilización efectiva. Las clases de objetos individuales son demasiado detalladas y específicas.

Los componentes son más abstractos que las clases de objetos y pueden considerarse proveedores de servicios independientes. Pueden existir como entidades independientes.

## Pilares de CBSE

1. Componentes independientes **especificados por sus interfaces**.
2. Estándares de componentes para facilitar la integración de componentes.
3. Middleware que proporciona soporte para la interoperabilidad de los componentes.
4. Un proceso de desarrollo que está orientado a la reutilización.

## CBSE y principios de diseño

- Los componentes son independientes, así que no interfieran entre sí.
- Las implementaciones de componentes están ocultas.
- La comunicación es a través de interfaces bien definidas.
- Un componente puede ser reemplazado por otro si se mantiene su interfaz.
- Las infraestructuras de componentes ofrecen una gama de servicios estándar.

# Componentes y modelos de componentes

## Componentes

- Un componente es una entidad ejecutable independiente que puede estar compuesta por uno o más objetos ejecutables.
- Los componentes proporcionan un servicio sin importar dónde se está ejecutando el componente o su lenguaje de programación.
- La interfaz del componente se publica y todas las interacciones se realizan a través de la interfaz publicada.

### Características
![[Pasted image 20230403220915.png]]

### Componente como servicio
Una forma útil de pensar en un componente es como un proveedor de uno o más servicios. Cuando un sistema necesita un servicio, llama a un componente que brinde 0programación que se usó para desarrollarlo.

Visualizar un componente como un proveedor de servicio pone de relieve dos características críticas de un componente de reutilización: 
1. El componente es una entidad ejecutable independiente definida mediante sus interfaces. Para usarlo no se necesita conocimiento alguno de su código fuente. Puede hacerse referencia a él como un servicio externo o incluirse directamente en un programa. 
2. Los servicios ofrecidos por un componente se ponen a disposición mediante una interfaz, y todas las interacciones por dicha interfaz. La interfaz del componente se expresa en términos de operaciones parametrizadas y nunca se expone su estado interno.

### Interfaces de los componentes
- **_Interfaces provistas o proporcionada_**
	- Definen los servicios que ofrece el componente.
- **_Interfaces requeridas_**
	- Definen qué servicios deben ofrecer otros componentes para que este componente opere correctamente.
	- Esto no compromete la independencia o la capacidad de despliegue de un componente porque la interfaz 'requiere' no define cómo se deben proporcionar estos servicios.

![[Pasted image 20230403221154.png]]

### Acceso
Se accede a los componentes mediante llamadas a procedimientos remotos (RPC). Cada componente tiene un identificador único (generalmente una URL) y puede referenciarse desde cualquier computadora en red.

## Modelos de componentes

Un modelo de componentes es una definición de estándares para la implementación, documentación y despliegue de componentes. Estos estándares se establecen con la finalidad de que los desarrolladores de componentes se aseguren de que éstos pueden interoperar.

El modelo de componente especifica cómo se deben definir las interfaces y los elementos que deberían incluirse en una definición de interfaz.

### Elementos de un modelo
- **_Interfaces:_**
	El modelo especifica cómo se deben definir las interfaces y los elementos, como los nombres de operación, los parámetros y las excepciones, que deben incluirse en la definición de la interfaz.
- **_Uso:_**
	Para que los componentes se distribuyan y accedan de forma remota, deben tener un nombre único o un identificador asociado a ellos. Esto tiene que ser globalmente único.
- **_Despliegue:_**
	El modelo incluye una especificación de cómo los componentes se deben empaquetar para su despliegue como entidades ejecutables independientes.

![[Pasted image 20230403221310.png]]

### Soporte del Middleware
Los modelos de componentes son la base del middleware que proporciona soporte para la ejecución de componentes.

Las implementaciones del modelo de componentes proporcionan:
- **_Servicios de plataforma_** que permiten que los componentes escritos según el modelo se comuniquen
- **_Servicios de soporte_** que son servicios independientes de la aplicación utilizados por diferentes componentes.

![[Pasted image 20230403221339.png]]

Para utilizar los servicios proporcionados por un modelo, los componentes se implementan en un contenedor. Este es un conjunto de interfaces utilizadas para acceder a las implementaciones del servicio.

# Procesos CBSE

## Desarrollo para el reuso

- Desarrollo de componentes o servicios que se reutilizarán.
- Los componentes desarrollados para una aplicación específica generalmente deben generalizarse para que sean reutilizables.
- Reutilización de componentes
	- Debería reflejar abstracciones de dominio estables
	- Debe ocultar la representación del estado
	- Debe ser lo más independiente posible
	- Debe publicar excepciones a través de la interfaz del componente.
- Hay una compensación entre la reutilización y la usabilidad
- Cuanto más general es la interfaz, mayor es la capacidad de reutilización, pero es más compleja y, por lo tanto, menos utilizable.

### Cambios para la reutilización

- Eliminar los métodos específicos de la aplicación.
- Cambiar los nombres para hacerlos generales.
- Agregar métodos para ampliar la cobertura.
- Hacer que el manejo de excepciones sea consistente.
- Agregar una interfaz de configuración para la adaptación del componente.
- Integrar los componentes necesarios para reducir las dependencias

Sistemas legados/heredados: buenos candidatos para hacer componentes reusables, en general implica re-empaquetar funcionalidades mediante un adaptador (wrapper).

## Desarrollo con reuso

CBSE con proceso de reutilización tiene que encontrar e integrar componentes reutilizables.
Al reutilizar los componentes, es esencial negociar entre los requisitos ideales y los servicios realmente proporcionados por los componentes disponibles. 

Esto involucra:
- Desarrollar requisitos de esquema
- Búsqueda de componentes y luego modificación de requisitos según la funcionalidad disponible.
- Buscando de nuevo para encontrar si hay mejores componentes que cumplan con los requisitos revisados.
- Componiendo componentes para crear el sistema

![[Pasted image 20230403222018.png]]

# Composición de componentes

a) Secuencial — los componentes se ejecutan en secuencia.
b) Jerárquica — un componente llama a los servicios de otro.
c) Aditiva — las interfaces de dos componentes se juntan para crear un nuevo componente.

![[Pasted image 20230403215600.png]]

- Problemas de adaptabilidad se solucionan con adaptadores (wrappers).
- Para resolver posibles conflictos se puede pensar: 
	1) ¿Qué composición es más efectiva para entregar los requerimientos funcionales del sistema? 
	2) ¿Qué composición facilitará la adaptación del componente cuando cambien los requerimientos? 
	3) ¿Cuáles serán las propiedades emergentes del sistema compuesto? (rendimiento y confiabilidad).
- Utilizar el principio de separación de intereses — cada componente tiene un papel claramente definido y que los roles no se traslapen.