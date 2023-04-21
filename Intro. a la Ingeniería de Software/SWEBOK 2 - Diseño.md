# Introducción

El diseño se define como "el proceso de definición de la arquitectura, los componentes, las interfaces y otras características de un sistema o componente" y "el resultado de ese proceso".

Visto como un proceso, el diseño de software es la actividad del ciclo de vida de la ingeniería de software en la que se analizan los requisitos del software para producir una descripción de la estructura interna del software que servirá como base para su construcción. Un diseño de software (el resultado) describe la arquitectura del software, es decir, cómo se descompone y organiza el software en componentes, y las interfaces entre esos componentes.

El diseño de software consta de dos actividades que encajan entre el análisis de requisitos de software y la construcción de software:
- **Diseño arquitectónico** de software (a veces llamado diseño de alto nivel): desarrolla la estructura y organización de alto nivel del software e identifica los diversos componentes.
- **Diseño detallado** del software: especifica cada componente con suficiente detalle para facilitar su construcción.

![[Pasted image 20230402214406.png]]

## Fundamentos del diseño de software

### Conceptos generales de diseño

En un sentido general, el diseño puede verse como una forma de resolución de problemas. Por ejemplo, el concepto de un problema perverso, un problema sin solución definitiva, es interesante en términos de comprensión de los límites del diseño. Una serie de otras nociones y conceptos también son de interés para comprender el diseño en su sentido general: metas, restricciones, alternativas, representaciones y soluciones.

### Contexto del diseño de software

Para comprender el papel del diseño de software, debemos ver cómo encaja en el ciclo de vida del desarrollo de software. Por lo tanto, es importante comprender las principales características del análisis de requisitos de software, el diseño de software, la construcción de software, las pruebas de software y el mantenimiento de software.

### Proceso de diseño de software

Se considera un proceso en dos pasos:
1. Diseño arquitectónico
2. Diseño detallado

El resultado de estos dos procesos es un conjunto de modelos y artefactos que registran las principales decisiones que se han tomado, junto con una explicación de la justificación de cada decisión no trivial.
Al registrar la justificación, se mejora la capacidad de mantenimiento a largo plazo del producto de software.

### Principios de diseño de software

Un principio es “una ley, doctrina o suposición integral y fundamental”.
Los principios de diseño de software son nociones clave que proporcionan la base para muchos enfoques y conceptos de diseño de software diferentes. 

Los principios de diseño de software incluyen:
- Abstracción
- Acoplamiento y cohesión
- Descomposición y modularización
- Encapsulamiento y ocultación de información
- Separación de interfaz e implementación
- Suficiencia, completud y primitivismo
- Separación de intereses

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

# SIGUE, pero no vale la pena resumir
