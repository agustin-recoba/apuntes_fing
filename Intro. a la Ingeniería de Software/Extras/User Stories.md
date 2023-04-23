# Introducción

Una HU describe una funcionalidad que, por sí misma, aporta valor al usuario. (eXtremme Programing XP).
Son una forma **rápida** de administrar los requisitos cambiantes de un proyecto.

Una Historia de Usuario se compone de tres elementos (“las tres Cs”):
- **Card** (tarjeta): **Descripción breve** de la historia de usuario, utilizada como recordatorio y para planificar.
- **Conversación**: Comunicación cara a cara que intercambia no solo información sino también pensamientos, opiniones y sentimientos.
- **Confirmación**: Detalles de la historia de usuario para que el equipo sepa lo que tienen que construir y lo que la contraparte espera. Se conoce como **Criterios de Aceptación**.

Las historias se priorizan en función de su valor para la organización.
Las entregas (releases) y las iteraciones se planifican colocando historias en iteraciones.
La velocidad es la cantidad de trabajo que los desarrolladores pueden completar en una iteración.
La suma de las estimaciones de las historias colocadas en una iteración no puede exceder la velocidad prevista por los desarrolladores para esa iteración.
Si una historia no cabe en una iteración, puede dividir la historia en dos o más historias más pequeñas.

Vale la pena usar las historias de usuarios porque enfatizan la comunicación verbal, el cliente y los desarrolladores pueden entenderlas por igual, se pueden usar para planificar iteraciones, funcionan bien dentro de un proceso de desarrollo iterativo y porque fomentan el aplazamiento de los detalles.

## Épicas

Cuando una historia de usuario es demasiado grande se la denomina **épica**. 
Generalmente se clasifican en una de las siguientes categorías: 
- **Historia de usuario compuesta**: contiene múltiples historias de usuario
	“Contactar estudiantes” es una funcionalidad muy importante para un sistema de reclutamiento, pero hay muchas funcionalidades involucradas.
- **Historia de usuario compleja**: no se puede separar fácilmente en un conjunto de historias de usuario
	Si una historia es compleja debido a que existe una incertidumbre asociada a la misma, se puede dividir en dos historias: una para investigar y otra que desarrolle la nueva funcionalidad.

Las historias compuestas y complejas se pueden dividir en múltiples historias más pequeñas.

Una tarjeta de historia es la parte visible de una historia, pero las partes importantes son las conversaciones entre el cliente y los desarrolladores sobre la historia.

## Equipo de cliente

El equipo del cliente incluye a aquellos que se aseguran de que el software satisfaga las necesidades de los usuarios previstos. Esto puede incluir testers, un gerente de producto, usuarios reales y diseñadores de interacción.
El equipo del cliente escribe las _story-cards_ porque están en la mejor posición para expresar las características deseadas y porque luego deben poder trabajar en los detalles de la historia con los desarrolladores y priorizar las historias.

# Escribiendo historias

Una buena historia será:
- Independent
- Negotiable
- Valuable to users or customers
- Estimatable
- Small
- Testable

Para recordarlas se propone el acrónimo INVEST.

Mike Cohn sugiere una determinada forma de redactarlas:

```ad-important
title: Formato
Como **[rol]** quiero **[funcionalidad]** para **[beneficio]**.
```

Idealmente, las historias son independientes entre sí. Esto no siempre es posible, pero en la medida en que lo sea, las historias deben escribirse de modo que puedan desarrollarse en cualquier orden.

Los detalles de una historia se negocian entre el usuario y los desarrolladores.

Las historias deben escribirse de manera que su valor para los usuarios o el cliente sea claro. La mejor manera de lograr esto es que el cliente escriba las historias.

Las historias se pueden anotar con detalles, pero demasiados detalles oscurecen el significado de la historia y pueden dar la impresión de que no es necesaria una conversación entre los desarrolladores y el cliente.

Una de las mejores formas de anotar una historia es escribir casos de prueba para la historia.

Si son demasiado pequeños, se pueden combinar varias historias pequeñas en una historia más grande.

## Criterios de aceptación

Ayudan a entender mejor cómo se espera que el producto se comporte frente a ciertas situaciones.
Ayudan a resolver ciertas expectativas y permiten que el desarrollo sea más fluido, claro y con menor incertidumbre para el equipo.

Además:
- Aportan más contexto.
- Sirven de guía para el desarrollo de los test de aceptación.
- Deben cubrir tanto los casos comunes como los alternativos. 
- La calidad de un criterio de aceptación eficaz se define bajo el método SMART:
	- Specific (Específico)
	- Measurable (Medible)
	- Achievable (Alcanzable)
	- Relevant (Relevante)
	- Time-bound (Temporalmente limitado)

### Técnicas:
- **Técnicas de comportamiento:** 
	Dada una condición, cuando ocurre un evento o acción, entonces sucederá una consecuencia. Así se consigue una estructura consistente que se trasladará fácilmente a tests automáticos. 
	- Ejemplo criterio de aceptación de la HU “Visualizar delivery”:
		- Si el cliente tiene el gps desactivado, se muestra la última ubicación detectada por el teléfono celular y despliega un listado con las 10 opciones de delivery mejor valoradas en base a dicha ubicación.

- **Técnicas de escenarios:**
	Suele definir el escenario normal o usual y un escenario alternativo de la funcionalidad en cuestión, y debe describir cómo el usuario ejecutaría o intentaría ejecutar los diferentes pasos en dichos trayectos.
	Hay diferentes formas de escribirlos, las más usadas utilizan el lenguaje específico para las descripciones de comportamiento de software conocido como gherkin. La sintaxis de gherkin es la siguiente:
	Dado que [Contexto 1] y adicionalmente [Contexto 2], cuando [Evento], entonces [Resultado / Comportamiento esperado]
	Ejemplo:
		Dado que **el gps está activado**, cuando se despliegue el listado de deliverys, entonces **el sistema desplegará una lista con todos los deliverys ordenados según la valoración y la ubicación que se encuentra el usuario**.


## Requisitos no funcionales

Newkirk y Martin recomiendan la práctica de anotar una historia con la palabra CONSTRAINT para cualquier historia que debe ser obedecida en lugar de implementada directamente.

![[Pasted image 20230327153532.png]]

## Historias tipo SPIKE

Tareas de investigación durante una iteración. Por ejemplo: investigar, diseñar, explorar, comprender mejor un requisito, o aumentar la fiabilidad de estimación de una HU.

Suelen ser de dos tipos: técnicos o funcionales. 
- **Técnicos**: se utilizan para determinar la viabilidad.
- **Funcionales**: se utilizan para analizar funcionalidad, su riesgo y complejidad.


## Responsabilidades del desarrollador:

- Usted es responsable de ayudar al cliente a escribir historias que sean promesas de conversación en lugar de especificaciones detalladas, que tengan valor para los usuarios o el cliente, que sean independientes, que se puedan probar y que tengan el tamaño adecuado.
- Si se siente tentado a pedir una historia sobre el uso de una tecnología o una pieza de infraestructura, es responsable de describir la necesidad en términos de su valor para los usuarios o el cliente.

## Responsabilidades del cliente:

- Usted es responsable de escribir historias que sean promesas de conversación en lugar de especificaciones detalladas, que tengan valor para los usuarios o para usted mismo, que sean independientes, comprobables y que tengan el tamaño adecuado.

# User Role Modeling / Modelado de roles de usuario

Si bien cada usuario llega a su software con antecedentes diferentes y con objetivos diferentes, aún es posible agregar usuarios individuales y pensar en ellos en términos de **roles de usuario**. Un rol de usuario es una colección de atributos definitorios que caracterizan a una población de usuarios y sus interacciones previstas con el sistema.

La mayoría de los equipos de proyecto consideran un solo tipo de usuario. Esto conduce a un software que ignora las necesidades de al menos algunos tipos de usuarios.

Para evitar escribir todas las historias desde la perspectiva de un solo usuario, identifique los diferentes roles de usuario que interactuarán con el software.

Al definir atributos relevantes para cada rol de usuario, puede ver mejor las diferencias entre los roles.

Algunos roles de usuario se benefician de ser descritos por personas. Una persona es una representación imaginaria de un rol de usuario. A la persona se le da un nombre, una cara y suficientes detalles relevantes para que parezca real para los miembros del proyecto.

Para algunas aplicaciones, los caracteres extremos pueden ser útiles para buscar historias que de otro modo se perderían.

## Responsabilidades del desarrollador

- Usted es responsable de participar en el proceso de identificación de roles y personas de los usuarios.
- Usted es responsable de comprender cada uno de los roles o personas de los usuarios y cómo difieren.
- Mientras desarrolla el software, usted es responsable de pensar en cómo los diferentes roles de usuario pueden preferir que se comporte el software.
- Usted es responsable de asegurarse de que identificar y describir las funciones de los usuarios no vaya más allá de su función como herramienta en el proceso.

## Responsabilidades del cliente:

- Usted es responsable de examinar ampliamente el espacio de posibles usuarios e identificar las funciones de usuario adecuadas.
- Usted es responsable de participar en el proceso de identificación de roles y personas de los usuarios.
- Usted es responsable de garantizar que el software no se centre de manera inapropiada en un subconjunto de usuarios.
- Al escribir historias, será responsable de garantizar que cada historia se pueda asociar con al menos un rol o persona de usuario.
- Mientras desarrolla el software, usted es responsable de pensar en cómo los diferentes roles de usuario pueden preferir que se comporte el software.
- Usted es responsable de asegurarse de que identificar y describir las funciones de los usuarios no vaya más allá de su función como herramienta en el proceso.

# Guias para escribir buenas historias

- Para identificar historias, comience considerando los objetivos de cada rol de usuario al usar el sistema.
- Al dividir una historia, intente crear historias que atraviesen todas las capas de la aplicación.
- Trate de escribir historias que sean de un tamaño en el que el usuario se sienta justificado para tomar un descanso para tomar un café después de completar la historia.
- Aumente las historias con otras técnicas de recopilación o documentación de requisitos según sea necesario para el dominio y el entorno del proyecto.
- Cree tarjetas de restricciones y péguelas en una pared compartida o escriba pruebas para asegurarse de que no se violen las restricciones.
- Escriba historias más pequeñas para la funcionalidad que el equipo implementará pronto y escriba historias amplias y de alto nivel para la funcionalidad en el futuro.
- Mantenga la interfaz de usuario fuera de las historias durante el mayor tiempo posible.
- Cuando sea práctico, incluya el rol del usuario al escribir la historia.
- Escribir cuentos en voz activa. Por ejemplo, diga "Un solicitante de empleo puede publicar un currículum" en lugar de "Un solicitante de empleo puede publicar un currículum".
- Escribe historias para un solo usuario. En lugar de "Los solicitantes de empleo pueden eliminar sus currículos", escriba "Un solicitante de empleo puede eliminar sus propios currículos".
- Haga que el cliente, en lugar de un desarrollador, escriba las historias.
- Mantenga breves las historias de los usuarios y no olvide su propósito como recordatorios para mantener conversaciones.
- No numere las tarjetas de historias.