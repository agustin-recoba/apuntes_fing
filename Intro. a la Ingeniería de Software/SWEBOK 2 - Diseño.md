# Introducción

El diseño se define como "**el proceso** de definición de la arquitectura, los componentes, las interfaces y otras características de un sistema o componente" y "**el resultado** de ese proceso".

Según Sommerville: El diseño de software es una actividad creativa donde se identifican los componentes del software y sus relaciones, con base en los requerimientos de un cliente.

Visto como **un proceso**, el diseño de software es la actividad del ciclo de vida de la ingeniería de software en la que se analizan los requisitos del software para producir una descripción de la estructura interna del software que servirá como base para su construcción. Un diseño de software (el **resultado**) describe la arquitectura del software, es decir, cómo se descompone y organiza el software en componentes, y las interfaces entre esos componentes.

El diseño de software consta de dos actividades que encajan entre el análisis de requisitos de software y la construcción de software:
- **Diseño arquitectónico** de software (a veces llamado diseño de alto nivel): desarrolla la estructura y organización de alto nivel del software e identifica los diversos componentes.
- **Diseño detallado** del software: especifica cada componente con suficiente detalle para facilitar su construcción.

El diseño de un sistema es correcto si un sistema construido de acuerdo a ese diseño satisface los requerimientos del sistema. Pero el objetivo del diseño no es encontrar el diseño correcto sino encontrar el mejor diseño posible dentro de las limitaciones impuestas (los requerimientos, el ambiente físico del sistema, el ambiente social, etc.).

Un diseño claramente debe ser:
- **Verificable**
- **Completo** (implementa toda la especificación)
- “**Traceable**” (se puede rastrear hacia los requerimientos que diseña)

Sin embargo, las dos cosas **más importantes** concernientes a los diseñadores es que el diseño sea:
- **Eficiente**
- **Simple**

Crear un diseño simple y eficiente de un sistema “grande” puede ser una tarea **extremadamente compleja**. Es una actividad **básicamente creativa**, la cual no puede reducirse a una serie de pasos a seguir; sin embargo, se pueden dar guías.
**Si se logra manejar la complejidad**, se reducen los costos del diseño y se reduce la posibilidad de introducir defectos durante el diseño.

En el Diseño de Software se itera hasta encontrar una solución adecuada:
1. Postulando soluciones
2. Construyendo modelos
3. Evaluando contra requisitos
4. Especificando los modelos

![[Pasted image 20230402214406.png]]

## Fundamentos del diseño de software

### Conceptos generales de diseño

En un sentido general, el diseño puede verse como una forma de resolución de problemas. Por ejemplo, el concepto de un problema perverso, un problema sin solución definitiva, es interesante en términos de comprensión de los límites del diseño.

### Contexto del diseño de software

Para comprender el papel del diseño de software, debemos ver cómo encaja en el ciclo de vida del desarrollo de software.

### Proceso de diseño de software

Se considera un proceso en dos pasos:
1. Diseño arquitectónico
2. Diseño detallado

El resultado de estos dos procesos es un conjunto de modelos y artefactos que registran las principales decisiones que se han tomado, junto con una explicación de la **justificación** de cada decisión no trivial.
Al registrar la justificación, se mejora la capacidad de mantenimiento a largo plazo del producto de software.

### Principios de diseño de software

Un principio es “una ley, doctrina o suposición integral y fundamental”.
Los principios de diseño de software son nociones clave que proporcionan la base para muchos enfoques y conceptos de diseño de software diferentes. 

Los principios de diseño de software incluyen:
- **Abstracción**
	La abstracción es "una vista de un objeto que se enfoca en la información relevante para un propósito particular e ignora el resto de la información".
	Permite al diseñador considerar un componente sin preocuparse por los detalles de implementación (por ej. describiendo comportamiento exterior sin describir los detalles internos).

- **Acoplamiento**
	"una medida de la interdependencia entre módulos en un programa informático"
	Más acoplamiento → más díficil comprender y modificar.
	Depende de cuánta información se necesita para entender un módulo, y qué tan compleja y explícita es esa información.

-  **Cohesión**
	"una medida de la fuerza de asociación de los elementos dentro de un módulo"
	Más cohesión → más fáciles de comprender y modificar.

- **Descomposición y modularización**
	Descomponer y modularizar significa que el software grande se divide en una serie de componentes nombrados más pequeños que tienen interfaces bien definidas que describen las interacciones de los componentes. Usualmente el objetivo es colocar diferentes funcionalidades y responsabilidades en diferentes componentes.
	Un sistema se considera modular si consiste de componentes que se pueden implementar separadamente y el cambio en un componente tiene mínimos impactos en otros componentes.

- **Encapsulamiento y ocultación de información**
	Significa agrupar y empaquetar los detalles internos de una abstracción y hacer que esos detalles sean inaccesibles para las entidades externas.

- **Separación de interfaz e implementación**
	La separación de la interfaz y la implementación implica la definición de un componente especificando una interfaz pública (conocida por los clientes) que es independiente de los detalles de cómo se realiza el componente.

- **Suficiencia, completud y primitivismo**
	Lograr la suficiencia y la integridad significa garantizar que un componente de software capture todas las características importantes de una abstracción y nada más. Primitividad significa que el diseño debe basarse en patrones fáciles de implementar.

- **Separación de intereses**
	Permite enfrentarse a los distintos aspectos individuales de un problema de forma de concentrarse en cada uno por separado. Por ejemplo: según el tiempo (ciclo de vida), cualidades (correctitud y eficiencia).

- **Dividir y Conquistar**
	Dividir en piezas que pueden ser “conquistadas” por separado.
	Las piezas están relacionadas. Juntas forman el sistema.
	Existe comunicación y cooperación entre ellas - esto agrega complejidad, que surge de la propia partición.
	Cuando el costo de particionar sumado la complejidad agregada supera los ahorros logrados por particionar se debe detener el proceso.

- **Reuso**
	Utilizar nuevamente algo (o construir pensado en).
	Hay varios niveles:
	- Nivel de abstracción - Se utiliza el conocimiento de abstracciones exitosas en el diseño del software.
	- Nivel del objeto - Se reutilizan objetos disponibles en lugar de escribir el código nuevamente
	- Nivel de componente - Se reutilizan colecciones de objetos
	- Nivel del sistema - Se reutilizan los sistemas de aplicación enteros. 
	Costos: costo de pensar en reuso a futuro y costo de reusar algo.
	
	![[Pasted image 20230422225605.png]]![[Pasted image 20230422225619.png]]


## Cuestiones clave en el diseño de software

Una serie de cuestiones clave deben abordarse al diseñar software. Algunas son preocupaciones de calidad que todo software debe abordar, por ejemplo, rendimiento, seguridad, confiabilidad, facilidad de uso, etc. Otro tema importante es cómo descomponer, organizar y empaquetar componentes de software.

Por el contrario, otros problemas "tratan con algún aspecto del comportamiento del software que no está en el dominio de la aplicación, pero que aborda algunos de los dominios de soporte". Estos problemas, que a menudo atraviesan la funcionalidad del sistema, se han denominado **aspectos**, que "tienden a no ser unidades de descomposición funcional del software, sino más bien propiedades que afectan el rendimiento o la semántica de los componentes de manera sistémica".

### Concurrencia
### Control y Manejo de Eventos
### Persistencia de datos
### Distribución de componentes
### Manejo de excepciones y errores, tolerancia a fallas
### Interacción y presentación
### Seguridad

## Estructura y arquitectura del software

En sentido estricto, una arquitectura de software es “el conjunto de estructuras necesarias para razonar sobre el sistema, que comprende los elementos del software, las relaciones entre ellos y las propiedades de ambos”.

### Estructuras Arquitectónicas y vistas
Se pueden describir y documentar diferentes facetas de alto nivel de un diseño de software. Estas facetas a menudo se denominan vistas: "Una vista representa un aspecto parcial de una arquitectura de software que muestra propiedades específicas de un sistema de software".

### Estilos arquitectonicos
Un estilo arquitectónico es “una especialización de elementos y tipos de relaciones, junto con un conjunto de restricciones sobre cómo se pueden usar”.

Por lo tanto, se puede considerar que un estilo arquitectónico proporciona la organización de alto nivel del software. Varios autores han identificado una serie de estilos arquitectónicos importantes:
• Estructuras generales (por ejemplo, capas, tuberías y filtros, pizarra)
• Sistemas distribuidos (por ejemplo, servidor de cliente, tres niveles, intermediario)
• Sistemas interactivos (por ejemplo, Model-ViewController, resentation-Abstraction-Control)
• Sistemas adaptables (por ejemplo, microkernel, reflexión)
• Otros (por ejemplo, lotes, intérpretes, control de procesos, basados en reglas).

### Patrones de diseño
Un patrón es “una solución común a un problema común en un contexto dado”.
Los patrones de diseño se pueden utilizar para describir detalles en un nivel inferior. Estos patrones de diseño de nivel inferior incluyen lo siguiente:
• Patrones de creación (por ejemplo, builder, factory, prototype, singleton)
• Patrones estructurales (por ejemplo, adapter, bridge, composite, decorator, façade, flyweight, proxy)
• Patrones de comportamiento (por ejemplo, command, interpreter, iterator, mediator, memento, observer, state, strategy, template, visitor)

### Decisiones en el diseño arquitectónico
El diseño arquitectónico es un proceso creativo. Durante el proceso de diseño, los diseñadores de software tienen que tomar una serie de decisiones fundamentales que afectan profundamente al software y al proceso de desarrollo.

### Familias de programas y frameworks
Un enfoque para permitir la reutilización de diseños y componentes de software es diseñar familias de programas, también conocidas como líneas de productos de software.

Un framework: un sistema de software parcialmente completado que se puede ampliar mediante la instanciación adecuada de extensiones específicas.

