A los clientes les cuesta darse cuenta de cuáles son los requerimientos del software que quieren, por eso **es difícil tener requerimientos estables**. 

En los métodos ágiles, no hay especificación del sistema y la documentación del diseño es mínima. Los requerimientos de usuario se plantean de forma genérica.
Los clientes pueden sugerir cambios para cada versión. Se hacen incrementos pequeños, donde se hacen nuevos sistemas para los clientes cada dos o tres semanas. La razón de este involucramiento es para obtener retroalimentación rápidamente. La comunicación es informal para minimizar la cantidad de documentación. El diseño e implementación son las actividades centrales, y otras actividades como el testing se incorporan a las mismas. 

Los requerimientos y el diseño se desarrollan juntos. De todos modos, **es posible generar documentación con metodologías ágiles**, si así se decidiera. 

Estas metodologías funcionan bien cuando es posible tener buena comunicación entre el cliente y los desarrolladores, y al no haber varios equipos involucrados, la comunicación informal funciona.

## Manifesto ágil

*“Estamos descubriendo formas mejores de desarrollar software tanto por nuestra propia experiencia como ayudando a terceros. A través de este trabajo hemos aprendido a valorar:*
- _Individuos e interacciones sobre procesos y herramientas._
- _Software funcionando sobre documentación extensiva._
- _Colaboración con el cliente sobre negociación contractual._
- _Respuesta ante el cambio sobre seguir un plan._
_Esto es, aunque valoramos los elementos de la derecha, valoramos más los de la izquierda”._

## Principios

![[Pasted image 20230421225915.png]]

## Aplicabilidad de las metodologías ágiles

- Desarrollo de productos de pequeño o mediano porte
- Desarrollo de sistemas “a medida” (custom systems), en donde hay un claro compromiso del cliente en participar del proceso de desarrollo del software, en donde hay pocas reglas y no hay regulaciones externas que afecten al software. 
- ¿Alguna otra? Van para el parcial y para el obligatorio...
	- Si se necesita la entrega rápida y frequente de nuevas funcionalidades en lugar de una única liberación.
	- Si los requisitos son cambiantes.
	- Se precisa adaptabilidad al negocio y ambiente (no solo en cuanto a los requisitos).

# Extreme Programming (XP)

Extreme Programming toma en “extremo” el enfoque de desarrollo iterativo: los requerimientos se expresan como historias de usuario, que se implementan directamente como tareas. Los programadores trabajan de a pares y hacen tests para cada tarea antes de escribir el código. Los requerimientos se basan en las historias de usuario. El cliente debe definir las pruebas de aceptación.

A continuación se detallan algunas prácticas de XP (van para el parcial).

## Ciclo de liberación

![[Pasted image 20230421225954.png]]

## Historias de usuario

Una historia de usuario es una posibilidad de uso que puede sucederle a un usuario. Esto se discute entre el cliente y los desarrolladores para generar una “tarjeta de historia” (o _story-card_) que describe una historia que contiene las necesidades del cliente. Luego se desarrolla ese uso en un futuro incremento. Esta es la forma de incorporar los requerimientos al desarrollo.

Las tarjetas de historia se separan en tareas y se estima el esfuerzo y recursos necesarios, hablando con el cliente para refinar los requerimientos. Luego el cliente elige qué historias son prioritarias para implementar, aquellas que pueden ser útiles inmediatamente. Se debe identificar funcionalidades que se pueden implementar en dos semanas, que es el tiempo hasta el siguiente incremento.

Con los cambios de requerimientos, pueden cambiar o eliminarse historias no implementadas. Si hay cambios, el cliente debe elegir si éstos tienen prioridad sobre cosas nuevas. Las historias de usuario facilitan a los mismos sugerir requerimientos, pues les son más comprensibles. Sin embargo, no son completas. No se sabe si se necesitan más requerimientos, o si se tiene toda la información de una actividad.

## Refactorización

Diseñar para facilitar los cambios suele ser una pérdida de esfuerzo. Para facilitarlos, XP sugiere que el código debe ser refactorizado. La refactorización significa buscar mejoras al programa e implementarlas inmediatamente, aún si no son necesarias. Los cambios suelen degradar la estructura del sistema, y la refactorización evita esto al mejorar la estructura y la legibilidad.

Algunos ejemplos son eliminar código duplicado o reemplazar código similar por llamadas a una librería. Los IDEs incluyen herramientas para esto. En principio, con la refactorización el sistema debería ser fácil de entender y cambiar. En la práctica, no siempre hay tiempo para refactorizar, o hay que hacer algún cambio que requiere cambiar la estructura del sistema.

## Desarrollo dirigido por pruebas

Hacer pruebas sin tener una especificación es difícil. Para esto, en XP las pruebas son automáticas y centrales al proceso de desarrollo, que no puede proceder hasta que todas las pruebas sean exitosas. 

Las características clave son:
- Desarrollo dirigido por pruebas
- Desarrollo de tests incrementales por uso
- Involucrar al usuario en el desarrollo y validación de las pruebas
- Uso de frameworks de testeo automático

Al escribir las pruebas antes del código, se pueden hacer mientras se escribe el código y encontrar problemas. Escribir pruebas define una interfaz y una especificación del comportamiento de la funcionalidad en cuestión. Hay menos problemas de malos entendidos de requerimientos o interfaz, y una clara relación entre los primeros y el código que los implementa, gracias a las tareas. Las personas que implementan las mismas deben entender bien la especificación para hacer pruebas, por lo que ambigüedades y omisiones se deben aclarar antes de empezar. Además, evita que el desarrollador se adelante al tester, lo que puede llevar a la omisión de pruebas para mantener el calendario

Cada tarea genera tests unitarios que verifican la implementación de la misma. El cliente ayuda a desarrollar pruebas de aceptación (que el sistema haga lo que necesita). La automatización de tests es fundamental. Las pruebas se escriben como componentes ejecutables antes de implementar las tareas, y estas pruebas individualmente simulan una entrada y verifican que la salida sea correcta. Hay frameworks para esto (por ejemplo Junit). Esta automatización lleva a que exista un conjunto de pruebas que pueden ser ejecutadas fácilmente al introducir nuevas funcionalidades al sistema.

Como es lógico, este tipo de desarrollo conlleva la escritura de gran cantidad de pruebas. Sin embargo, es difícil verificar que sean completas. Los programadores suelen omitir algunas porque no les gusta el testeo, y algunas pruebas son difíciles de hacer incrementalmente. Por eso es necesario revisar las pruebas y hacer más cuando el sistema ya ha sido desarrollado.

## Pair programming

La pareja de programadores se sienta en la misma computadora para hacer el software. Pero no siempre son los mismos, sino que van rotando. Esto tiene algunas ventajas: apoya la idea de propiedad colectiva del software, haciendo que todos sean responsables de los problemas; es una forma de inspección informal al haber dos personas, que ayuda a encontrar errores sin los problemas de tiempo de las inspecciones formales; y alienta a la refactorización, pues otros se benefician inmediatamente de dicho proceso (normalmente los programadores son reacios a refactorizar porque no se ven los beneficios).

La eficiencia del pair programming aún es cuestionada, dado que dos individuos trabajando juntos en un período de tiempo producen la mitad de código que si trabajaran separados.
Estudios sobre el tema han dado resultados mixtos. En general, la ventaja es que se comparte conocimiento, lo que reduce los riesgos para el proyecto cuando algún miembro del equipo se va.

## Resumen de XP

![[Pasted image 20230421230114.png]]

# Scrum

La planificación informal y falta de documentación de los métodos ágiles colisionan con la necesidad de visibilidad de las grandes empresas, que necesitan saber qué está sucediendo. El desarrollo ágil también requiere gestión para hacer el mejor uso de tiempo y recursos posible. Para dar un framework para esto se desarrolló el Scrum, que permite dar algo de visibilidad. Es un método ágil por seguir los principios necesarios, pero no se enfoca en las prácticas, por lo que puede incorporarse con otras.

Los términos usados en Scrum son:

![[Pasted image 20230313123030.png]]

## Tres fases:

### Inicial
El proceso o ciclo de sprint del Scrum comienza con el product backlog: la lista de cosas en las que hay que trabajar, que no son sólo funcionalidades del sistema (pruebas, arquitectura, documentación). Puede tener distintos niveles de especificidad, lo cual depende del product owner. 

### Ciclos de sprints
Cada ciclo de sprint dura un tiempo fijo, y al principio de cada uno el PO define cuáles son los elementos del backlog que tienen prioridad ese ciclo. Si no se completan, no se extiende el tiempo. Luego el equipo elige qué elementos de la lista creen que pueden hacer ese sprint, y estiman el tiempo que les tomará. Para esto, consideran la velocidad lograda en sprints anteriores. Se hace un backlog para ese sprint particular: qué tareas tienen que hacer.

Al final de cada sprint, hay una reunión de evaluación con todo el equipo, donde se ve cómo se puede mejorar la forma en que trabajaron y dan datos del producto para hacer el product backlog del siguiente sprint. El ScrumMaster suele tener que dar reportes a sus superiores, y pueden tener que gestionar proyectos.

### Fase de clausura
En esta fase se cierra el proyecto, se completa la documentación requerida y se evalúan las lecciones aprendidas del mismo.

## Efectos prácticos

Hoy en día, muchas empresas tienen equipos distribuidos donde los miembros están por todo el mundo. Se ha desarrollado, entonces, el Scrum distribuido para estos casos. Incluye comunicación por chat o videoconferencias, un IDE común y ambiente de integración.

# Escalamiento de procesos ágiles

La necesidad de obtener software más rápidamente se aplica a sistemas y empresas grandes, y por eso se ha intentado evolucionar los métodos ágiles para usarlos en estas circunstancias. 

**“Escalar hacia arriba”** refiere a la utilización de métodos ágiles para el desarrollo de grandes sistemas de software, los cuales no pueden ser desarrollados por equipos reducidos.
**“Escalar hacia afuera”** refiere a cómo los métodos ágiles pueden ser introducidos a lo largo de una gran organización con muchos años de experiencia en el desarrollo de software.

Suele ser necesario escalar hacia arriba y hacia afuera al mismo tiempo, pues software grande se encarga a empresas grandes. Los métodos ágiles no aportan tanta productividad y disminución de los efectos en estos casos.

Cuando se hace un contrato, normalmente la documentación de los requerimientos es parte del mismo, pero esto no existe en los métodos ágiles. En consecuencia, el cliente paga por el tiempo que toma hacer el sistema y no por los requerimientos solicitados. Esto puede llevar a disputas sobre quién debe pagar si el sistema se demora.

En la práctica, la documentación formal del sistema no suele ser actualizada, y por eso los promotores de métodos ágiles sostienen que es innecesaria, y que con código legible y de calidad es suficiente para que el sistema se pueda mantener. Sin embargo, los requerimientos de sistema le dicen al ingeniero qué debe hacer el sistema, y sin el mismo el mantenimiento se hace más difícil. Esto es peor si no se puede garantizar la continuidad del equipo.

Es importante mantener al cliente involucrado, que puede perder interés cuando el sistema está hecho y no tener interés en el mantenimiento. Si el equipo de desarrollo no se mantiene, se pierde el conocimiento implícito que sus miembros tenían del sistema y para el cual no necesitaban documentación. Esto hace que sea difícil para nuevos miembros entender qué hace el sistema. Es, además, difícil que el equipo de mantenimiento sea continuo, pues a los programadores no les agrada hacer estas tareas y se van a nuevos proyectos.

Para escalar métodos ágiles, es fundamental integrarlos con enfoques dirigidos por planes, sobre todo en grandes compañías. Los principios de metodologías ágiles no siempre se pueden llevar a cabo. Para decidir el balance, hay que hacerse preguntas de carácter técnico, humano y profesional.

Los sistemas grandes tienen varios aspectos que requieren planeación y documentación. Cuanto más grande y complejo sea el sistema, más necesario es dirigirse por planes. Además, si tienen larga vida o están sujetos a regulaciones, requieren documentación.

Los métodos ágiles ponen mucha confianza en el equipo para que se comunique, coopere, y en las habilidades de cada individuo, pero esto no siempre es así, por lo que se puede requerir planeación. Los métodos ágiles requieren más habilidad que los de planes, donde el individuo simplemente convierte el diseño en código, y si se tiene gente con poca habilidad, puede ser necesario poner a los mejores en diseño. Si el equipo está distribuido, es necesario hacer documentación para comunicarse. Finalmente, los métodos ágiles requieren ciertas tecnologías para visualizar el diseño y programación. Si no se tienen, se requiere documentación.

Las organizaciones tienen procedimientos, y puede que los administradores no acepten la falta de documentación y formalidad. Se puede usar planes para los requerimientos, pero luego hacer el sistema con métodos ágiles. También sucede que la cultura de un lugar está acostumbrada a la documentación del enfoque por planes.

Los factores que influencian esta decisión, entonces, son:

![[Pasted image 20230309152303.png]]

Los métodos ágiles tienen que evolucionar para sistemas grandes, ya que son mucho más complejos que sistemas pequeños o productos de software. Esto se debe a seis factores de los sistemas grandes:
1. Son sistemas de sistemas, y cada sistema es hecho por un equipo diferente y apartado del resto. Esto significa que la mayoría no ve el sistema completo, sino sólo su parte.
2. Son sistemas brownfield, es decir, incluyen e interactúan con varios sistemas existentes. Muchos de los requisitos del sistema se ocupan de esta interacción, y no dan mucha posibilidad de flexibilidad o desarrollo incremental.
3. Cuando hay varios sistemas integrando uno solo, parte importante del desarrollo es la configuración de sistema, que tampoco se presta para el desarrollo incremental.
4. Suelen estar limitados por regulaciones y reglas externas que pueden requerir ciertos tipos de documentación de sistema.
5. Tienen un largo tiempo de procuración y desarrollo, lo cual hace difícil mantener un equipo de personas que sepan del sistema todo ese tiempo, pues se van.
6. Suelen tener muchas personas interesadas con diferentes objetivos, y es prácticamente imposible involucrarlos a todos en el desarrollo.

El modelo de escalamiento ágil (ASM) de IBM reconoce que es un proceso en etapas. La primera es ir de las prácticas ágiles básicas a entregas ágiles disciplinadas, donde se adaptan las prácticas a un entorno organizado y disciplinado, y se reconoce la importancia de aspectos como los requerimientos y diseño, no sólo desarrollo. La etapa final es ir a agilidad en escala donde se reconoce la complejidad de grandes proyectos. Esto implica ser consciente de factores como desarrollo distribuido y regulaciones. Para esto puede ser necesario modificar las prácticas de la etapa anterior y agregar prácticas dirigidas por planes al proceso.

Para escalar metodologías ágiles hay que tener en cuenta lo siguiente:
1. Un enfoque completamente incremental es imposible; hay que trabajar en los requerimientos antes de empezar para identificar las diferentes partes del sistema. Sin embargo, no tiene por qué hacerse en detalle.
2. No puede haber un único product owner o representante del cliente. Varias personas deben involucrarse en distintas partes del sistema, y comunicarse durante el desarrollo.
3. No puede enfocarse sólo en el código. Tiene que haber documentación del sistema y su arquitectura, el diseño y aspectos críticos.
4. Deben diseñarse y usarse métodos de comunicación entre equipos: llamadas, videoconferencias, emails, según la frecuencia de la comunicación.
5. La integración continua (hacer todo el sistema cada vez que hay algún cambio) es imposible si tiene muchas partes, pero es importante hacer versiones regularmente.

Para desarrollo a gran escala, existe el multi-team Scrum, cuyas claves son:
1. Repetición de roles: cada equipo tiene un ScrumMaster y un Product Owner para su componente, y puede haber uno principal para todo el sistema.
2. Arquitectos de producto: cada equipo elige un arquitecto, quienes trabajan juntos para diseñar y elaborar la arquitectura general del sistema.
3. Alineación de versiones: las fechas para las nuevas versiones de cada equipo se alinean para tener un sistema completo.
4. Scrum de Scrums: hay un Scrum de Scrums diario donde representantes de cada equipo se juntan a hablar del progreso y planear el trabajo.

Puede ser difícil introducir metodologías ágiles en organizaciones grandes por varias razones: 
- Administradores de proyectos sin experiencia en estos métodos pueden no querer tomar el riesgo de un nuevo enfoque, al no saber cómo va a afectar sus proyectos.
- Las organizaciones grandes suelen tener procedimientos y estándares de calidad que todos los proyectos deben seguir y, por naturaleza, son incompatibles con los métodos ágiles.
- Los métodos ágiles funcionan mejor con gente muy habilidosa, pero en organizaciones grandes hay muchos niveles de habilidad, y los menos habilidosos pueden ser menos efectivos en procesos ágiles.
- Resistencia cultural a métodos ágiles.

La administración de los cambios, por ejemplo, entra en conflicto con la refactorización, ya que la primera requiere que los desarrolladores pidan autorización para hacer un cambio, a diferencia de la segunda. El testing puede derivarse a un equipo externo, lo que entra en conflicto con el desarrollo por pruebas. Es difícil introducir estos cambios, pues son culturales, y lo mejor es hacerlos de a poco, comenzando con un grupo.

