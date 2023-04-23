Como parte del proceso de ingeniería de requerimientos, puede plantearse una arquitectura para asociar funciones del sistema con componentes, lo que puede usarse para discutir los requerimientos. Hay que analizar el sistema para explicitar la arquitectura, y esto afecta si el sistema puede cumplir requisitos críticos. 

Un modelo de arquitectura es el siguiente (cajas dentro de cajas indican que el componente tiene subcomponentes, y las flechas representan el pasaje de datos o señales de control):

![[Pasted image 20230331163728.png]]

**Son de alto nivel y fáciles de entender.**

Un modelo arquitectónico puede usarse de dos modos: **para generar discusiones** sobre el diseño del sistema, pues es más comprensible para los interesados al no tener mucho detalle y enfocarse en componentes clave, y **para documentar la arquitectura** diseñada, en cuyo caso se muestran más detalles, y simplifica la comprensión del sistema.

# Decisiones en el diseño arquitectonico

El diseño arquitectónico es un proceso creativo en el cual se diseña una organización del sistema que cubrirá los requerimientos funcionales y no funcionales de éste.
Es útil pensar en el diseño arquitectónico como un **conjunto de decisiones a tomar** en vez de una secuencia de actividades.

Con base en su conocimiento y experiencia, deben considerar las siguientes preguntas fundamentales sobre el sistema:
- ¿Existe una **arquitectura genérica** que se pueda usar?
- ¿Cómo va a ser **distribuido** el sistema?
- ¿Qué **patrones o estilos** son apropiados?
- ¿Se descompondrá en **módulos**?
- ¿**Cómo va a ser evaluado** el diseño de la arquitectura?
- ¿**Cómo se documentará** la arquitectura del sistema?

Aunque cada sistema de software es único, **los sistemas en el mismo dominio de aplicación tienen normalmente arquitecturas similares** que reflejan los conceptos fundamentales del dominio.
La arquitectura de un sistema de software puede basarse en un patrón o un estilo arquitectónico particular. Un **patrón arquitectónico es una descripción de una organización del sistema** (Garlan y Shaw, 1993), tal como una organización cliente-servidor o una arquitectura por capas.

Las decisiones en el proceso de diseño arquitectónico deben depender de:
- **performance** (operaciones críticas en pocos componentes), 
- **seguridad** (estructura en capas con los elementos más críticos protegidos en las capas interiores), 
- **protección** (elementos cercanos que, en caso de falla, desactiven con seguridad el sistema), 
- **disponibilidad** (componentes redundantes en caso de falla) y 
- **mantenibilidad** (componentes separados y autónomos).

Evidentemente, hay un conflicto potencial entre algunas de estas arquitecturas.
**Evaluar un diseño arquitectónico es difícil** porque la verdadera prueba es qué tan bien el sistema cubre sus requisitos funcionales y no funcionales cuando está en uso.

# Vistas arquitectónicas

Es imposible representar toda la información relevante sobre la arquitectura de un sistema en un solo modelo arquitectónico, ya que cada uno presenta únicamente una vista o perspectiva del sistema.

## Vistas 4+1

Krutchen (1995), en su bien conocido modelo de vista 4+1 de la arquitectura de software, sugiere que deben existir cuatro vistas arquitectónicas fundamentales, que son concurrentes y **se relacionan usando casos de uso o escenarios**.

Las vistas que él sugiere son:
1. Una vista **lógica**, que indique las abstracciones clave en el sistema como objetos o clases de objeto.
2. Una vista **de proceso**, que muestre cómo, en el tiempo de operación, el sistema está compuesto de procesos en interacción.
3. Una vista **de desarrollo**, que muestre cómo el software está descompuesto para su desarrollo, esto es, indica la descomposición del software en elementos que se implementen mediante un solo desarrollador o equipo de desarrollo.
4. Una vista **física**, que exponga el hardware del sistema y cómo los componentes de software se distribuyen a través de los procesadores en el sistema.

![[Pasted image 20230331165453.png]]

### Escenarios
Esta vista es redundante con respecto a las otras 4, pero igualmente tiene su propósito:
1. Como **motivación para descubrir los elementos arquitectónicos** durante el diseño de la arquitectura.
2. Como **validación e ilustración** luego de que el diseño arquitectónico está terminado. 

## Otras opiniones

Hofmeister y sus colaboradores (2000) sugieren el uso de vistas similares, pero a éstas agregan la noción de vista conceptual. Esta última es una vista abstracta del sistema que puede ser la base para descomponer los requerimientos de alto nivel en especificaciones más detalladas, ayudar a los ingenieros a tomar decisiones sobre componentes que puedan reutilizarse, y representar una línea de producto (que se estudia en el capítulo 16) en vez de un solo sistema.

## Notaciones

- Cuando se usa UML se hace **informalmente**
- Algunos autores proponen **notaciones rápidas e informales**
- Otros lenguajes basados en componentes y conectores

Los usuarios de métodos ágiles afirman que, por lo general, no se utiliza la documentación detallada del diseño. Por lo tanto, desarrollarla es un desperdicio de tiempo y dinero. Sommerville está en gran medida de acuerdo con esta visión y considera que, para la mayoría de los sistemas, no vale la pena desarrollar una descripción arquitectónica detallada desde estas cuatro perspectivas.

En general, **hay que desarrollar las vistas que sean útiles** para la comunicación sin preocuparse por completitud a no ser que sea un sistema crítico.

## Ejemplos

- Vista de casos de uso/escenarios → casos de uso
- Vista de procesos → andariveles, diag. de actividad, bpmn
- Vista lógica → clases, secuencia, actividad
- Vista de desarrollo → diagrama de componentes
- Vista física → diagrama de despliegue (deploy)

### Diagrama de componentes
Un componente es una parte encapsulada, reusable y reemplazable del software – bloques de construcción.
Pueden ser de tamaño chico (clase) hasta grande (subsistema).

![[Pasted image 20230331170038.png]]

Se puede indicar interfaces **requeridas y provistas**.

![[Pasted image 20230331170052.png]]

### Diagrama de despliegue
Muestra cómo el software se asigna al hardware y cómo se comunican las distintas piezas.
Cada nodo representa una pieza de hardware.

Dentro de cada nodo se pueden colocar artefactos de software los cuales ejecutarán en esa pieza de software
Saliendo un poco de UML es frecuente colocar componentes (grandes) en los nodos para mostrar cómo será desplegado el software.

![[Pasted image 20230331170132.png]]

Se muestra la comunicación entre nodos con una línea sólida agregando un estereotipo indicando la forma de comunicación (ej, protocolo)

![[Pasted image 20230331170152.png]]

# Patrones arquitectónicos

Un patrón arquitectónico es una **descripción abstracta estilizada de buena práctica**, que se ensayó y puso a prueba en diferentes sistemas y entornos. 
De este modo, un patrón arquitectónico debe describir una organización de sistema que **ha tenido éxito** en sistemas previos. Debe incluir información sobre cuándo es y cuándo no es adecuado usar dicho patrón, así como sobre las fortalezas y debilidades del patrón.

Propósito:
- Compartir una solución probada, ampliamente aplicable a un problema particular de diseño.
- El patrón se presenta en una forma estándar que permite que sea fácilmente reutilizado.

Cinco piezas importantes de un patrón:
- Nombre
- Contexto 
- Problema
- Solución
- Consecuencias (positivas y negativas)

### Beneficios:
Permite seleccionar una solución entendible y probada a ciertos problemas, definiendo los principios organizativos del sistema.
Al basar la arquitectura en estilos que son conocidos se facilita comunicar las características importantes de la misma.

### Formas de usar patrones
- Solución para el diseño del sistema:
	- Algún estilo sirve
 - Base para una adaptación:
	 - Algún estilo soluciona parcialmente los problemas
 - Inspiración para una solución relacionada:
	 - Ningún estilo sirve, pero algunos ayudan a entender mejor los problemas

## Ejemplo con MVC

```ad-example
title: Descripción del patrón "Model View Controller"
![[Pasted image 20230331170456.png]]
```

```ad-example
title: La organización del MVC
![[Pasted image 20230331170606.png]]
```

```ad-example
title: Arquitectura de aplicación Web con el patrón MVC
![[Pasted image 20230331170628.png]]
```


## Arquitectura en capas

- **Descripción** → Organiza el sistema en capas con funcionalidad relacionada con cada capa. Una capa da servicios a la capa de encima.
- **Cuándo** → Nuevas facilidades encima de sistemas existentes; desarrollo disperso en varios equipos, y cada uno es responsable de una capa de funcionalidad; requisito de seguridad multinivel.
- **Ventajas** → Permite la sustitución de capas en tanto se conserve la interfaz. Aumentar la confiabilidad, en cada capa pueden incluirse facilidades redundantes (por ejemplo, autenticación).
- **Desventajas** → Es difícil ofrecer una separación limpia entre capas, El rendimiento suele ser un problema.

Otros puntos:
- Soporta el desarrollo incremental 
- También permite implementaciones multiplataformas

![[Pasted image 20230331171200.png]]

```ad-summary
title: Resumen
La arquitectura en capas es un enfoque de desarrollo incremental de sistemas que permite la disponibilidad de servicios proporcionados por cada capa a medida que se desarrolla. Esta arquitectura es flexible y portátil, ya que una capa puede ser sustituida por otra equivalente si su interfaz no varía. Los cambios o adiciones de facilidades en una capa sólo afectan a la capa adyacente. Los sistemas en capas facilitan la implementación multiplataforma de un sistema de aplicación, ya que sólo las capas más internas dependientes de la máquina deben ser reimplantadas para considerar las facilidades de un sistema operativo o base de datos diferentes.
```

Ejemplo de un sistema concreto:
![[Pasted image 20230331171530.png]]

## Arquitectura de repositorio

- **Descripción** → Todos los datos en un sistema se gestionan en un repositorio central, accesible a todos los componentes de él. Los componentes no interactúan directamente.
- **Cuándo** → Grandes volúmenes de información o sistemas dirigidos por datos.
- **Ventajas** → Los componentes no necesitan conocer la existencia de otros componentes. Los cambios se propagan hacia todos los componentes. Gestión consistente y centralizada de los datos.
- **Desventajas** → Problemas en el repositorio afectan a todo el sistema. Posibles ineficiencias en la comunicación. Posibles dificultades al distribuir el repositorio.

```ad-example
title: Arquitectura de repositorio para un IDE
![[Pasted image 20230331171632.png]]
```

Un enfoque alternativo es el pizarrón dónde se activan componentes cuando hay datos particulares disponibles. Adecuado para datos menos estructurados.

La mayoría de los sistemas que usan grandes cantidades de datos se organizan sobre una base de datos o un repositorio compartido. Por lo tanto, este modelo es adecuado para aplicaciones en las que un componente genere datos y otro los use. Los ejemplos de este tipo de sistema incluyen sistemas de comando y control, sistemas de información administrativa, sistemas CAD y entornos de desarrollo interactivo para software.

## Arquitectura cliente servidor

- **Descripción** → La funcionalidad del sistema se organiza en servicios, y cada servicio lo entrega un servidor independiente. Los clientes son usuarios de dichos servicios.
- **Cuándo** → Se usa cuando, desde varias ubicaciones, se tiene que ingresar a los datos en una base de datos compartida. También cuando la carga es variable (replicación de servidores).
- **Ventajas** → Los servidores se pueden distribuir a través de una red. La funcionalidad general estaría disponible a todos los clientes, no necesita implementarse en todos los servicios.
- **Desventajas** → Cada servicio son puntos de falla. El rendimiento depende de la red, así como del sistema. Posibles problemas administrativos cuando los servidores son propiedad de diferentes organizaciones.

Las arquitecturas cliente-servidor se consideran a menudo como arquitecturas de sistemas distribuidos; sin embargo, el modelo lógico de servicios independientes que opera en servidores separados puede implementarse en una sola computadora. Los servicios y servidores pueden cambiar sin afectar otras partes del sistema.

El beneficio importante es la separación e independencia.

![[Pasted image 20230331171921.png]]

## Arquitectura de tubería y filtro

**Descripción** → Cada componente de procesamiento (filtro) es discreto y realiza un tipo de transformación de datos. Los datos fluyen (como en una tubería) de un componente a otro para su procesamiento
**Cuándo** → Se suele utilizar en aplicaciones de procesamiento de datos, donde las entradas se procesan en etapas separadas para generar salidas relacionadas.
**Ventajas** → Fácil de entender y soporta reutilización. El estilo del flujo de trabajo coincide con la estructura de muchos procesos empresariales. La evolución al agregar transformaciones es directa. Permite concurrencia.
**Desventajas** → El formato debe acordarse y respetarse. Esto aumenta la carga del sistema, y puede significar que sea imposible reutilizar transformaciones funcionales que usen otros formatos.

Otros puntos:
- Usada para procesamiento automático de datos.
- Difícil de usar para sistemas interactivos.

![[Pasted image 20230331172039.png]]

# Arquitecturas de aplicación

**Encapsulan las principales características de una clase de sistemas.
Los sistemas de aplicación tienen la intención de cubrir las necesidades de una empresa u organización.**

Las empresas que operan en el mismo sector usan aplicaciones comunes específicas para el sector. De esta forma, además de las funciones empresariales generales, todas las compañías telefónicas necesitan sistemas para conectar llamadas, administrar sus redes y emitir facturas a los clientes, entre otros. En consecuencia, también los sistemas de aplicación que utilizan dichas empresas tienen mucho en común.

La arquitectura de aplicación puede reimplantarse cuando se desarrollen nuevos sistemas, pero, para diversos sistemas empresariales, la reutilización de aplicaciones es posible sin reimplementación.

Se puede usar modelos de arquitecturas de aplicación en varias formas:
1. Como punto de partida para el proceso de diseño arquitectónico.
	Si no está familiarizado con el tipo de aplicación que desarrolla, podría basar su diseño inicial en una arquitectura de aplicación genérica.
2. Como lista de verificación del diseño.
	Si usted desarrolló un diseño arquitectónico para un sistema de aplicación, puede comparar éste con la arquitectura de aplicación genérica y luego, verificar que su diseño sea consistente con la arquitectura genérica.
3. Como una forma de organizar el trabajo del equipo de desarrollo.
	Las arquitecturas de aplicación identifican características estructurales estables de las arquitecturas del sistema y, en muchos casos, es posible desarrollar éstas en paralelo.
4. Como un medio para valorar los componentes a reutilizar.
	Si tiene componentes por reutilizar, compare éstos con las estructuras genéricas.
5. Como un vocabulario para hablar acerca de los tipos de aplicaciones.
	Si discute acerca de una aplicación específica o trata de comparar aplicaciones del mismo tipo, entonces puede usar los conceptos identificados en la arquitectura genérica para hablar sobre las aplicaciones.

## Aplicaciones de procesamiento de transacción

Procesan peticiones del usuario mediante la información o una base de datos. Una transacción de base de datos es una secuencia de operaciones que se trata como una sola unidad.
En general, son sistemas interactivos donde los usuarios hacen peticiones asíncronas de servicios.
Pueden organizarse como una arquitectura tubería y filtro.

![[Pasted image 20230331172818.png]]

Ejemplo concreto:
![[Pasted image 20230331172900.png]]

## Sistemas de información

Todos los sistemas que incluyen interacción con una base de datos compartida se consideran sistemas de información basados en transacciones.
Un sistema de información permite acceso controlado a una gran base de información, tales como un catálogo de biblioteca, un horario de vuelos o los registros de pacientes en un hospital.
Cada vez más, los sistemas de información son sistemas basados en la Web, cuyo acceso es mediante un navegador Web.

Un modelo muy general para estos sistemas se basa en capas.

![[Pasted image 20230331172955.png]]

## Sistemas de procesamiento de lenguaje

Convierten un lenguaje natural o artificial en otra representación del lenguaje y, para lenguajes de programación, también pueden ejecutar el código resultante.

Para **compiladores** (entornos más batch) puede utilizarse una composición de un repositorio con tubería y filtro:
![[Pasted image 20230331173150.png]]

Cuando es más interactivo puede ser más efectivo utilizar un repositorio:
![[Pasted image 20230331173225.png]]


# Puntos clave

- Una arquitectura de software es una descripción de **cómo se organiza un sistema de software**. Las propiedades de un sistema, como rendimiento, seguridad y disponibilidad, están influidas por la arquitectura utilizada.
- Las decisiones de diseño arquitectónico incluyen decisiones sobre el tipo de aplicación, la distribución del sistema, los estilos arquitectónicos a usar y las formas en que la arquitectura debe documentarse y evaluarse.
- Las arquitecturas pueden documentarse desde varias perspectivas o diferentes vistas. Las posibles vistas incluyen la conceptual, la lógica, la de proceso, la de desarrollo y la física.
- Los patrones arquitectónicos son medios para reutilizar el conocimiento sobre las arquitecturas de sistemas genéricos. Describen la arquitectura, explican cuándo debe usarse, y exponen sus ventajas y desventajas.
- Los patrones arquitectónicos usados comúnmente incluyen el modelo de vista del controlador, arquitectura en capas, repositorio, cliente-servidor, y tubería y filtro.
- Los modelos genéricos de las arquitecturas de sistemas de aplicación ayudan a entender la operación de las aplicaciones, comparar aplicaciones del mismo tipo, validar diseños del sistema de aplicación y valorar componentes para reutilización a gran escala.
- Los sistemas de procesamiento de transacción son sistemas interactivos que permiten el acceso y la modificación remota de la información, en una base de datos por parte de varios usuarios. Los sistemas de información y los sistemas de gestión de recursos son ejemplos de sistemas de procesamiento de transacciones.
- Los sistemas de procesamiento de lenguaje se usan para traducir textos de un lenguaje a otro y para realizar las instrucciones especificadas en el lenguaje de entrada. Incluyen un traductor y una máquina abstracta que ejecuta el lenguaje generado.

