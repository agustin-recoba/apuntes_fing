En esta guía se describen algunas pautas y recomendaciones para la identificación y generación de casos de prueba a partir de la especificación de un requisito bajo el formato de historia de usuario.

# Estructura de una historia de usuario

Las historias de usuario son descripciones cortas y de alto nivel de las funcionalidades expresadas en los términos del cliente. Una historia de usuario típica tiene la siguiente forma:
![[Pasted image 20230519200538.png]]

Y puede venir acompañada de uno o varios criterios de aceptación, los cuales tienen la siguiente forma:
![[Pasted image 20230519200551.png]]

Desde el punto de vista de la verificación, los diferentes escenarios conformados tanto por la descripción principal de la historia de usuario como por los diferentes criterios de aceptación, serán aquellos que tendremos en cuenta para la generación de los casos de prueba.

# Procedimiento de generación de CP

El procedimiento general que recomendamos para la generación de casos de prueba a través de la descripción de una historia de usuario es el siguiente: 
1. Para cada historia de usuario, identificar el conjunto de todos los escenarios posibles de realización. 
2. Para cada escenario, identificar las condiciones, acciones del usuario, eventos o contexto que lo hacen posible. 
3. Para cada escenario identificado, identificar por lo menos un caso de prueba y las condiciones que lo harán ejecutable. 
4. Para cada caso de prueba, identificar los datos de prueba a utilizar.

Nota: los puntos 3 y 4 son análogos a la técnica descrita en el artículo _"Derivación de casos de prueba a partir de casos de uso"_ ([[Generating Test Cases From Use Cases]]).

### Recomendaciones generales:
- Para identificar los escenarios utilizar los criterios de aceptación e identificar las condiciones en las cuales esos criterios de aceptación se cumplen.
- Si un escenario puede darse bajo diferentes condiciones (“A” o “B”, por ejemplo), conviene separarlo en dos escenarios/condición diferentes (“escenario A” y “escenario B”)
- Generar <u>al menos</u> un caso de prueba por cada escenario identificado y cada caso de prueba debe probar un único escenario.
- Para completar los casos de prueba con datos utilizar los conceptos de clases de equivalencia y valores límites para los datos de entrada y los datos de contexto (o de las condiciones). Esto puede generar más de un caso de prueba interesante para un mismo escenario.

### Nota importante: 
Hay escenarios de prueba que pueden no encontrarse en los criterios de aceptación (como ser que el usuario no ingrese los datos requeridos en un formulario) o que no se encuentran detallados en la descripción de la historia de usuario. Es necesario pensar más allá de lo explicitado en la historia de usuario, dado que esta no es un método detallado de describir un requisito y por tanto muchos detalles pueden no estar presentes.

# Ejemplo

https://eva.fing.edu.uy/pluginfile.php/338657/mod_resource/content/1/Gu%C3%ADa%20para%20la%20generaci%C3%B3n%20de%20CP%20a%20partir%20de%20HU.pdf




























