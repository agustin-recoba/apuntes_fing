
```ad-info
title: Definición de Construcción
Refiere a la creación detallada del software mediante una combinación de codificación, verificación, pruebas unitarias, pruebas de integración y debugging.
```

![[Pasted image 20230423193402.png]]

# Fundamentos

## Minimización de la complejidad

- El software tiene que ser entendido por personas.
- Las estructuras e informaciones deben ser entendibles para poder trabajar con ellas.
- Reducir la complejidad es crítico para las pruebas.
- Se puede lograr mediante: escribir código simple y legible en lugar de inteligente, el uso de estándares, diseño modular.

## Anticipación del cambio

Anticipar el cambio ayuda a escribir **software extensible**, el cuál será facilmente mejorable sin tener que modificar excesivamente la estructura base.

## Construcción para la verificación

Permitir encontrar las faltas facilmente en el sw, tanto por testers como devs.

## Reuso

- Distintos niveles: abstracción / objeto / componente / sistema.
- Contruir para el reuso / construir con reuso.

## Estandares en la construcción

- Externos / Internos
- Generalmente para conseguír mayor seguridad.

# Gestión de la Construcción

- Lo que consideramos “construcción” **depende del modelo del ciclo de vida utilizado**.
- Implica la elección del método de construcción. 
- El orden en el cual se crean los componentes, se integran, se gestiona la calidad de la construcción y la asignación a los distintos programadores.

# Consideraciones Prácticas

## El diseño en la construcción

Dependiendo del proyecto, poco o mucho diseño se realizará en la etapa de construcción. Siempre hay algo.

## Lenguajes de construcción

- Lenguajes de configuración
- Lenguajes caja de herramientas (toolkit)
- Lenguajes de programación y de scripting
	- Notaciones linguisticas
	- Notaciones formales
	- Notaciones visuales

## Codificación

- Técnicas para crear código fuente, convenciones de código y plantillas de código fuente.
- Uso de clases, tipos enumerados, variables, etc.
- Uso de estructuras de control.
- Manejo de excepciones (errores).
- Prevención de rupturas de seguridad a nivel del código (por ej. índice fuera del array).
- Mecanismos de exclusión y manejo de recursos compartidos.
- Organización del código.
- Documentación del código.
- Puesta a punto del código (tuning).

## Pruebas en la construcción

El propósito es reducir el intervalo entre que se introduce una falla en el código y su detección.
- Pruebas unitarias.
- Pruebas de integración. 

## Construcción para el reuso

- Análisis de variabilidad y diseño

## Construcción con reuso

- Involucra construir con el reuso de software existente.

## Calidad en la construcción

- Pruebas unitarias y de integración.
- Desarrollo basado en pruebas.
- Uso de aserciones y programación defensiva.
- Debugging.
- Inspecciones.
- Revisiones técnicas.
- Análisis estático.

## Integración

- Big bang
- Incremental

# Tecnologías de Construcción

## APIs
Application programming interface.

- Corresponde a un conjunto de firmas que son exportadas y disponibles para que los usuarios de un biblioteca o framework puedan escribir sus aplicaciones.

## Cuestiones de ejecución OO

- Polimorfismo
	Es la habilidad de un lenguaje de soportar operaciones generales sin saber hasta tiempo de ejecución que tipos concretos de objetos incluirán.
- Reflection
	Es la habilidad de un programa de observar y modificar su propia estructura y comportamiento en tiempo de ejecución.

## Tipos genéricos

- Permiten definir un tipo o clase sin especificar los tipos de los objetos que utiliza.

## Aserciones, Diseño por contrato y Programación defensiva

- Aserciones
	Es un predicado ejecutable que permite realizar chequeos en tiempo de ejecución. En general son quitadas para la versión del software que será puesta en producción.
- Diseño por contrato
	Pre y poscondiciones son incluidas para cada operación.
- Programación defensiva
	La idea es proteger a las rutinas de entradas incorrectas.

## Manejo de errores, Manejo de excepciones y Tolerancia a las Fallas

La manera en que se manejan los errores afecta varios atributos de calidad (correctitud, robustez, etc). Existen muchas técnicas para realizar esto: aserciones, retornar valores neutros, logueo de errores, retornar códigos de error, “apagar el software”, etc.

- **Excepciones**
	se utilizan para detectar y procesar errores o eventos exepcionales. La estructura básica utiliza: throw para lanzar una excepción y el bloque try-catch para su manejo.
- **Tolerancia a las fallas**
	son un conjunto de técnicas que buscan aumentar la confiabilidad en el software mediante la detección de error y la recuperación.

## Modelos ejecutables

Buscan abstraer los detalles de los lenguajes específicos de programación y las decisiones sobre la organización del software.
Una especificación construida en un modelo ejecutable puede ser desplegada en varios entornos de ejecución sin realizar cambios.
Ejemplos son xUML, BPMN, Model-driven Architecture.

## Técnicas de construcción basadas en estados o dirigidas por tablas

- Programación basada en estados
	es una tecnología de programación que utiliza máquinas de estados finitos para describir el comportamiento de los programas.
- Un método dirigido por tabla es un esquema en el cual se busca en una tabla información en lugar de utilizar sentencias lógicas (por ejemplo if-else).

## Configuración en tiempo de ejecución e Internacionalización

- Configuración en tiempo de ejecución (runtime configuration)
	es una técnica para enlazar valores de las variables y seteos del programa en ejecución, utilizando, en general, archivos de configuración.
- Internacionalización
	es la actividad técnica de preparar un programa para multiples sitios. La actividad de localización corresponde a la adaptación para un lenguaje local específico.

## Procesamiento de entradas basado en la gramática

Involucra el análisis sintático (o parseo) de la entrada.

![[Pasted image 20230420160511.png]]

## Primitivas de Concurrencia

Son primitivas que facilitan concurrencia y sincronización.
- Semáforos
	una variable protegida que provee control de acceso a un recurso en común.
- Monitores
	corresponde a un data type con operaciones definidas por el programador ejecutadas con mutua-exclusión.
- Mutex (mutua-exclusión)
	es una primitiva de sincronización que garantiza el acceso exclusivo a un recurso compartido.

## Middleware

- Es una clasificación para todo software que provea servicios sobre la capa del sistema operativo y por debajo de la capa aplicación. 
- Puede proveer contenedores en tiempo de ejecución para componentes de software para proveer pasaje de mensajes, persistencia y ubicación transparente a través de la red.
- El middleware orientado a mensajes moderno provee usualmente de un Enterprise Service Bus (ESB) que soporta la interacción orientada a servicios y la comunicación entre múltiples aplicaciones de software.

## Cloud Computing

Paradigma que permite ofrecer servicios de computación a través de una red, que usualmente es Internet.

### Software como servicio (SaaS)
Una instancia del software que corre en la infraestructura del proveedor y sirve a múltiples organizaciones de clientes.

### Plataforma como servicio (PaaS)
Es la encapsulación de una abstracción de un ambiente de desarrollo y el empaquetamiento de una serie de módulos o complementos que proporcionan, normalmente, una funcionalidad horizontal (persistencia de datos, autenticación, mensajería, etc.).
Ejemplos: Google App Engine, Microsoft Azure, Bluemix de IBM.

En algunos modelos de servicio se ofrece la plataforma de desarrollo y las herramientas de programación por lo que puede desarrollar aplicaciones propias y controlar la aplicación, pero no controla la infraestructura.

#### Tipos
Públicos, privados e híbridos.

![[Pasted image 20230420160844.png]]

### Infraestructura como servicio (IaaS)
Es un medio de entregar almacenamiento básico y capacidades de cómputo como servicios estandarizados en la red. 
A veces llamados Hardware as a Service (HaaS).
Por ejemplo, Amazon Web Services.

## Métodos de construcción de software distribuido

Se distinguen por cuestiones de paralelismo, comunicación y tolerancia a fallas.

## Construcción de sistemas heterogéneos

Los sistemas heterogéneos consisten en una variedad de unidades computacionales especializadas de diferentes tipos. En general son independientes pero se comunican entre sí.
Se plantean cuestiones relacionadas a los distintos lenguajes utilizados, así como de aspectos sobre la comunicación.

## Análisis de Desempeño (Performance) y Puesta a punto (Tuning)

- Análisis de desempeño
	se estudia el comportamiento del programa en su ejecución.
- Puesta a punto del código
	involucra (en general) cambios menores para ajustar el desempeño del programa utilizando la información recolectada en el análisis de desempeño.

## Estándares de plataforma

Permiten que los programadores desarrollen aplicaciones portables que pueden ser ejecutadas en entornos compatibles sin realizar cambios. Por ej. J2EE.

## Test-First Programming

O Test-driven development (TDD). Estilo de programación en el cual se escriben las pruebas antes que el código.

# Herramientas de Construcción

## Entornos de desarrollo (IDEs)

Proveen facilidades a los programadores para desarrollar software. La elección de un IDE puede afectar la eficiencia y la calidad de la construcción del software.

## GUI Builders

Son herramientas que permiten el desarrollo y mantenimiento de interfaces de usuario gráficas. En general de un modo WYSIWYG (what you see is what you get – lo que ves es lo que obtienes).

## Herramientas de pruebas unitarias

Permiten automatizar las pruebas unitarias. El programador especifica las entradas y salidas esperadas y la herramienta permite ejecutar un conjunto de pruebas indicando la salida obtenida.

![[Pasted image 20230420161107.png]]

# Cuestiones variadas

## Flow - Flujo

- El flujo es una condición de participación profunda, casi meditativa.
- Has estado en este estado a menudo, por lo que no tenemos que describírtelo.
- No todos los roles de trabajo requieren un estado de flujo para ser productivo, pero para cualquier persona involucrada en tareas de ingeniería, diseño, desarrollo, redacción o tareas similares, el flujo es imprescindible. Es solamente cuando estás en flujo, el trabajo va bien.
- Requiere unos 15 minutos para entrar en ese estado. Durante este período de inmersión, usted es particularmente sensible al ruido y la interrupción. Un entorno disruptivo puede dificultar o imposible de alcanzar el flujo.

## Estándares de Programación

Un estándar o estilo de programación son convenciones y buenas prácticas para escribir código fuente en determinados lenguajes de programación.

### Consideraciones generales
- Fuerte dependencia del lenguaje de programación.
- La mayoría del software es desarrollado/mantenido por equipos.
- Aunque se trabaje en forma individual, definir un estilo de codificación ayuda a organizarse.
- Aportan a la “mantenibilidad” del Software.
- Priorizar el código “legible”.

### Nomeclatura
- Constantes
- Variables
- Tipos de datos
- Procedimientos, Funciones
- Clases, Módulos
- Controles
- etc

### Identación del Código
![[Pasted image 20230420163147.png]]

### Otras
- Mensajes de alerta/error
- Manejo de Excepciones
- Estructuras de Control (bucles, iteraciones)
- Acceso a base de datos
- Diseño de menús y atajos por teclado
- Comentarios de código
- Espacios y líneas en blanco
- Operaciones de bloqueo deben incluir un timeout
- Operaciones que toman tiempo deben mostrar indicador de avance o estado procesando

## Reutilización de Código

Administración de una Base de Conocimiento o Biblioteca de Código

### Roles:
- Productor 
	- Identificar qué producir
	- Definir características

- Consumidor
	- Identificar qué puede servir
	- Evaluar si efectivamente sirve

## Documentación del Código

- Interna
	- Documentación, comentarios internos al código fuente.
	- Fundamental para el Mantenimiento.
- Externa
	- Documentación técnica
	- Existen herramientas automáticas para generarla
	- Puede incluir:
		- Problema
		- Algoritmos
		- Datos
		- Interfaces

## Programación en Pares

- Es una práctica que reúne dos programadores a trabajar en forma conjunta
- Uno tiene el rol de “conductor” (el que escribe) y el otro de “acompañante” (el que revisa); o piloto y co-piloto.
- Su éxito depende de la combinación de las habilidades y personalidades del par. 
- La mayor crítica a esta práctica es que es difícil aseverar si afecta en forma positiva o negativa a la productividad.

## Debug

_If debugging is the process of removing software bugs, then programming must be the process of putting them in._ — Edsger Dijkstra

- Determinar los pasos para reproducir un bug.
- Al encontrar un punto dónde sabemos que el sistema estaba bien y un lugar dónde falló tenemos un pedazo de código a revisar.
	- Usar aserciones o revisar invariantes, por ej. imprimiendo mensajes (mejor aserciones o herramientas del IDE).
	- búsqueda binaria, para dividir el pedazo de código a la mitad.
	- arqueología de software
- Luego análisis causal y aprender. Usar debuggers!!
- Si el bug no es reproducible
	- llevar registro del bug, contexto, consecuencias para buscar patrones en el futuro. 
	- considerar agregar aserciones o logs para registrar más información.
	- si es un problema grave buscar tener un ambiente lo más parecido al cual dio problemas.