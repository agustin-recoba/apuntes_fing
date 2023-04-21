Los requisitos para un sistema son descripciones de lo que el sistema debe hacer: el servicio que ofrece y las restricciones en su operación. Tales requisitos reflejan las necesidades de los clientes por un sistema que atienda cierto propósito. Al proceso de descubrir, analizar, documentar y verificar estos servicios y restricciones se le llama ingeniería de requisitos (IR). 

Existen cuatro actividades principales en el proceso de ingeniería de requerimientos:
- **Estudio de factibilidad**
	Se realiza una estimación sobre si las necesidades identificadas del usuario se cubren con las actuales tecnologías de software y hardware. El estudio considera si el sistema propuesto tendrá un costo-beneficio desde un punto de vista empresarial, y si éste puede desarrollarse dentro de las restricciones presupuestales existentes. Un estudio de factibilidad debe ser rápido y relativamente barato. El resultado debe informar la decisión respecto a si se continúa o no continúa con un análisis más detallado.
- **Obtención y análisis de requerimientos**
	Éste es el proceso de derivar los requerimientos del sistema mediante observación de los sistemas existentes, discusiones con los usuarios y proveedores potenciales, análisis de tareas, etcétera. Esto puede incluir el desarrollo de uno o más modelos de sistemas y prototipos, lo que ayuda a entender el sistema que se va a especificar
- **Especificación de requerimientos**
	Consiste en la actividad de transcribir la información recopilada durante la actividad de análisis, en un documento que define un conjunto de requerimientos. En este documento se incluyen dos clases de requerimientos. Los requerimientos del usuario son informes abstractos de requerimientos del sistema para el cliente y el usuario final del sistema; y los requerimientos de sistema son una descripción detallada de la funcionalidad a ofrecer.
- **Validación de requerimientos** 
	Esta actividad verifica que los requerimientos sean realistas, coherentes y completos. Durante este proceso es inevitable descubrir errores en el documento de requerimientos. En consecuencia, deberían modificarse con la finalidad de corregir dichos problemas.

Los requisitos deben redactarse de forma abstracta para que muchos proveedores liciten ofreciendo diferentes maneras de cubrir las necesidades de organización del cliente. Una vez otorgado el contrato, el proveedor tiene que escribir con más detalle una definición del sistema para el cliente, de modo que éste comprenda y valide lo que hará el software. Estos documentos suelen nombrarse documentos de requisitos para el sistema.

1. Los **requisitos del usuario** son enunciados, en un lenguaje natural junto con diagramas, acerca de qué servicios esperan los usuarios del sistema, y de las restricciones con las cuales éste debe operar.

2. Los **requisitos del sistema** son descripciones más detalladas de las funciones, los servicios y las restricciones operacionales del sistema de software. El documento de requisitos del sistema (llamado en ocasiones especificación funcional) tiene que definir con exactitud lo que se implementará. Puede formar parte del contrato entre el cliente y el desarrollador.

3. Los **requisitos del software** son aquellos que se derivan de los requisitos del sistema. ¿Qué queremos que haga el software dentro del distema?

![[Pasted image 20230317145435.png]]

## Niveles de requisitos

![[Pasted image 20230321082413.png]]
- Fechas sólidas: "*se almacenan en*"
- Flechas punteadas: "*son el origen de*" ó "*influencian*"

# 4.1 Requisitos funcionales y no funcionales

La distinción entre requisitos funcionales y no funcionales puede no ser clara, pues un requisito suele generar o restringir otro. No sólo especifican las características del sistema, sino también las funcionalidades necesarias para que estos servicios se den efectivamente.

## Requisitos funcionales
Son enunciados acerca de servicios que el sistema debe proveer, de cómo debería reaccionar el sistema a entradas particulares y de cómo debería comportarse o no el sistema en situaciones específicas.

Los requisitos funcionales para un sistema refieren lo que el sistema debe hacer. Tales requisitos dependen del tipo de software que se esté desarrollando, de los usuarios esperados del software y del enfoque general que adopta la organización cuando se escriben los requisitos. 
Por lo general, se escriben de forma abstracta para lectura de los usuarios. Varían desde requisitos generales que cubren lo que tiene que hacer el sistema, hasta requisitos muy específicos que reflejan maneras locales de trabajar o los sistemas existentes de una organización. 

Los requisitos funcionales pueden escribirse con diferentes niveles de detalle. En principio, la especificación de los requisitos funcionales de un sistema debe ser **completa y consistente**. 
- **Totalidad** significa que **deben definirse todos los servicios requeridos por el usuario**. 
- **Consistencia** quiere decir que los requisitos tienen que **evitar definiciones contradictorias**. 

En sistemas grandes, es difícil de lograr debido a la gran cantidad de participantes, la facilidad para cometer errores en sistemas complejos, las diferentes necesidades, etc. Los problemas suelen surgir sólo después de un análisis en profundidad o después de que se entregó el sistema al cliente.

## Requisitos no funcionales 
Son limitaciones sobre servicios o funciones que ofrece el sistema. Incluyen restricciones tanto de temporización y del proceso de desarrollo, como impuestas por los estándares. Los requisitos no funcionales se suelen aplicar al sistema como un todo, más que a características o a servicios individuales del sistema.

Son requisitos que no se relacionan directamente con los servicios específicos que el sistema entrega a sus usuarios. Pueden relacionarse con propiedades emergentes del sistema, como fiabilidad, tiempo de respuesta y uso de almacenamiento. De forma alternativa, pueden definir restricciones sobre la implementación del sistema, como las capacidades de los dispositivos I/O o las representaciones de datos usados en las interfaces con otros sistemas.
Especifican o restringen por lo general características del sistema como un todo. 

![[Pasted image 20230317145810.png]]

Los requisitos no funcionales a menudo son más significativos que los requisitos funcionales individuales:
1. Los requisitos no funcionales afectan más la arquitectura global de un sistema que los componentes individuales. 
2. Un requisito no funcional individual, como un requisito de seguridad, podría generar algunos requisitos funcionales relacionados que definan nuevos servicios del sistema que se requieran. Además, también podría generar requisitos que restrinjan los requisitos ya existentes.

Los requisitos no funcionales surgen a través de necesidades del usuario, debido a restricciones presupuestales, políticas de la organización, necesidad de interoperabilidad con otro software o sistemas de hardware, o factores externos como regulaciones de seguridad o legislación sobre privacidad.

Los requisitos no funcionales provienen de características requeridas del software (requisitos del producto), la organización que desarrolla el software (requisitos de la organización) o de fuentes externas:
1. **Requisitos del producto**: Estos requisitos especifican o restringen el comportamiento del software. Los ejemplos incluyen requisitos de rendimiento sobre qué tan rápido se debe ejecutar el sistema y cuánta memoria requiere, requisitos de fiabilidad que establecen la tasa aceptable de fallas, requisitos de seguridad y requisitos de usabilidad. 
2. **Requisitos de la organización**: Son requisitos de sistemas amplios, derivados de políticas y procedimientos en la organización del cliente y del desarrollador. Los ejemplos incluyen requisitos del proceso operacional que definen cómo se usará el sistema, requisitos del proceso de desarrollo que especifican el lenguaje de programación, estándares del entorno o el proceso de desarrollo a utilizar, y requisitos ambientales que definen el entorno de operación del sistema. 
3. **Requisitos externos**: Este término cubre todos los requisitos derivados de factores externos al sistema y su proceso de desarrollo. En ellos se incluyen requisitos regulatorios que establecen lo que debe hacer el sistema para ser aprobado en su uso por un regulador, como sería un banco central; requisitos legislativos que tienen que seguirse para garantizar que el sistema opere conforme a la ley, y requisitos éticos que garanticen que el sistema será aceptable para sus usuarios y el público en general.

Siempre que sea posible, se deberán **escribir de manera cuantitativa** los requisitos no funcionales, de manera que puedan ponerse objetivamente a prueba **usando métricas o unidades de medida**.

```ad-example
title: Formas de medir
collapse: closed
![[Pasted image 20230317145920.png]]


De este modo, se puede verificar que los requisitos no funcionales se cumplan. Puede ser muy costoso. Este tipo de requisito puede interactuar e incluso entrar en conflicto con otros, de cualquier tipo.
```

Los requisitos del sistema no son independientes y no sólo detallan los servicios o las características que se requieren del mismo, sino también especifican la funcionalidad necesaria para asegurar que estos servicios y características se entreguen de manera adecuada.

### Clasificación de Wiegers

#### Artibutos de calidad:
Un tipo de requisito no funcional que describe una característica de servicio o desempeño de un producto.

#### Interfaces externas:
Una descripción de una conexión entre un sistema de software y un usuario, otro sistema de software o un dispositivo de hardware.

#### Restricciones:
Todo el resto.

# 4.2 El documento de requisitos de software

Es un comunicado oficial de lo que deben implementar los desarrolladores del sistema. Incluye tanto los requisitos del usuario para un sistema, como una especificación detallada de los requisitos del sistema.

Son esenciales los documentos de requisitos cuando un contratista externo diseña el sistema de software. Sin embargo, los métodos de desarrollo ágiles argumentan que los requisitos cambian tan rápidamente que un documento de requisitos se vuelve obsoleto tan pronto como se escribe, así que el esfuerzo se desperdicia en gran medida. En lugar de un documento formal, los enfoques como la programación extrema recopilan de manera incremental requisitos del usuario y los escriben en tarjetas como historias de usuario.

Este enfoque es adecuado para sistemas empresariales donde los requisitos son inestables. Sin embargo, aún resulta útil escribir un breve documento de apoyo que defina los requisitos de la empresa y los requisitos de confiabilidad para el sistema; es fácil olvidar los requisitos que se aplican al sistema como un todo, cuando uno se enfoca en los requisitos funcionales para la siguiente liberación del sistema.

La diversidad de posibles usuarios significa que el documento de requisitos debe ser un compromiso entre la comunicación de los requisitos a los clientes, la definición de los requisitos con detalle preciso para desarrolladores y examinadores, y la inclusión de información sobre la posible evolución del sistema.

El nivel de detalle que se incluya en un documento de requisitos depende del tipo de sistema a diseñar y el proceso de desarrollo utilizado.

```ad-info
title: Diversidad de usuarios
collapse: closed
![[Pasted image 20230317150309.png]]
```

```ad-hint
title: Estructura de un documento de requisitos
collapse: closed
![[Pasted image 20230317150412.png]]
```


# 4.3 Especificación de requisitos

La especificación de requisitos es el proceso de escribir, en un documento de requisitos, los requisitos del usuario y del sistema. De manera ideal, los requisitos del usuario y del sistema deben ser claros, sin ambigüedades, fáciles de entender, completos y consistentes. 
Los requisitos del usuario para un sistema deben describir los requisitos funcionales y no funcionales, de forma que sean comprensibles para los usuarios del sistema que no cuentan con un conocimiento técnico detallado. De manera ideal, deberían especificar sólo el comportamiento externo del sistema. El documento de requisitos no debe incluir detalles de la arquitectura o el diseño del sistema. En consecuencia, si usted escribe los requisitos del usuario, no tiene que usar jerga de software, anotaciones estructuradas o formales. Debe escribir los requisitos del usuario en lenguaje natural, con tablas y formas sencillas, así como diagramas intuitivos.
Idealmente, los requisitos del sistema deben describir de manera simple el comportamiento externo del sistema y sus restricciones operacionales. No tienen que ocuparse de cómo se diseña o implementa el sistema. Sin embargo, al nivel de detalle requerido para especificar por completo un sistema de software complejo, es prácticamente imposible excluir toda la información de diseño.

Los requisitos del usuario se escriben casi siempre en lenguaje natural, complementado con diagramas y tablas adecuados en el documento de requisitos. Los requisitos del sistema se escriben también en lenguaje natural, pero de igual modo se utilizan otras notaciones basadas en formas, modelos gráficos del sistema o modelos matemáticos del sistema.

## Especificación en lenguaje natural
Es expresivo, intuitivo y universal. También es potencialmente vago, ambiguo y su significado depende de los antecedentes del lector. 
Para minimizar la interpretación errónea al escribir los requisitos en lenguaje natural, se recomienda:
- elaborar un formato estándar y asegurarse de que todas las definiciones de requisitos se adhieran a ese formato
- utilizar el lenguaje de manera clara para distinguir entre requisitos obligatorios y deseables
- usar texto resaltado (negrita, cursiva o color) para seleccionar partes clave
- evitar el uso de jerga, abreviaturas y acrónimos
- asociar, siempre que sea posible, una razón con cada requisito de usuario. Es decir por qué se incluyó el mismo

```ad-example
title: Ejemplo
collapse: closed
3.2 Si se requiere, cada 10 minutos el sistema medirá el azúcar en la sangre y administrará insulina. (Los cambios de azúcar en la sangre son relativamente lentos, de manera que no son necesarias mediciones más frecuentes; la medición menos periódica podría conducir a niveles de azúcar innecesariamente elevados.) 

</br>

3.6 Cada minuto, el sistema debe correr una rutina de autoevaluación, con las condiciones a probar y las acciones asociadas definidas en la tabla 1. (Una rutina de autoevaluación puede detectar problemas de hardware y software, y prevenir al usuario sobre el hecho de que la operación normal puede ser imposible.)
```


## Especificaciones estructuradas
El lenguaje natural estructurado es una manera de escribir requisitos del sistema, donde está limitada la libertad del escritor de requisitos y todos éstos se anotan en una forma estándar.
Aunque este enfoque conserva la mayoría de la expresividad y comprensibilidad del lenguaje natural, asegura que haya cierta uniformidad sobre la especificación. Las anotaciones en lenguaje estructurado emplean plantillas para especificar requisitos del sistema. La especificación utiliza constructos de lenguaje de programación para mostrar alternativas e iteración, y destaca elementos clave con el uso de sombreado o de fuentes distintas.
Para usar un enfoque estructurado que especifique los requisitos de sistema, hay que definir una o más plantillas estándar para requisitos, y representar dichas plantillas como formas estructuradas. La especificación puede estructurarse sobre los objetos manipulados por el sistema, las funciones que el sistema realiza o los eventos procesados por el sistema.

```ad-example
title: Ejemplo
collapse: closed
![[Pasted image 20230317155946.png]]
```


Cuando se use una forma estándar para especificar requisitos funcionales, debe incluir la siguiente información: 
1. Una descripción de la función o entidad a especificar. 
2. Una descripción de sus entradas y sus procedencias. 
3. Una descripción de sus salidas y a dónde se dirigen. 
4. Información sobre los datos requeridos para el cálculo u otras entidades en el sistema que se utilizan (la parte “requiere”). 
5. Una descripción de la acción que se va a tomar. 
6. Si se usa un enfoque funcional, una precondición establece lo que debe ser verdadero antes de llamar a la función, y una postcondición especifica lo que es verdadero después de llamar a la función. 
7. Una descripción de los efectos colaterales (si acaso hay alguno) de la operación

Al usar especificaciones estructuradas se eliminan algunos de los problemas de la especificación en lenguaje natural. La variabilidad en la especificación se reduce y los requisitos se organizan de forma más efectiva. Sin embargo, en ocasiones todavía es difícil escribir requisitos sin ambigüedades, en particular cuando deben especificarse cálculos complejos.

Para enfrentar este problema se puede agregar información extra a los requisitos en lenguaje natural, por ejemplo, con el uso de tablas o modelos gráficos del sistema. Las tablas son particularmente útiles cuando hay algunas posibles situaciones alternas y se necesita describir las acciones a tomar en cada una de ellas.

```ad-example
title: Ejemplo de tabla para especificar cálculo complejo
collapse: closed
![[Pasted image 20230317160055.png]]
```

## Otras notaciones

![[Pasted image 20230317155627.png]]


# 4.4 Procesos de ingeniería de requisitos

Los procesos de ingeniería de requisitos incluyen cuatro actividades de alto nivel. Éstas se enfocan en valorar si el sistema es útil para la empresa (**estudio de factibilidad**), descubrir requisitos (**adquisición y análisis**), convertir dichos requisitos en alguna forma estándar (**especificación**) y comprobar que los requisitos definan realmente el sistema que quiere el cliente (**validación**).

Las actividades están organizadas como un proceso iterativo alrededor de una espiral, y la salida es un documento de requisitos del sistema. La cantidad de tiempo y esfuerzo dedicados a cada actividad en cada iteración depende de la etapa del proceso global y el tipo de sistema que está siendo desarrollado.

![[Pasted image 20230325002635.png]]

## Estudios de factibilidad

Un estudio de factibilidad es un breve estudio enfocado que debe realizarse con oportunidad en el proceso de IR. 
Debe responder tres preguntas clave: 
	a) ¿El sistema contribuye con los objetivos globales de la organización? 
	b) ¿El sistema puede implementarse dentro de la fecha y el presupuesto usando la tecnología actual? 
	c) ¿El sistema puede integrarse con otros sistemas que se utilicen? 

Si la respuesta a cualquiera de estas preguntas es negativa, probablemente no sea conveniente continuar con el proyecto.

# 4.5 Adquisición y análisis de requisitos

En esta actividad, los ingenieros de software trabajan con clientes y usuarios finales del sistema para descubrir el dominio de aplicación, qué servicios debe proporcionar el sistema, el desempeño requerido de éste, las restricciones de hardware, etcétera.

## Actividades del proceso 

![[Pasted image 20230325003033.png]]

Cada organización tendrá su versión o ejemplificación de este modelo general, dependiendo de factores locales, tales como experiencia del personal, tipo de sistema a desarrollar, estándares usados, etcétera. 

Las actividades del proceso son:

1. **Descubrimiento de requisitos:**
	Éste es el proceso de interactuar con los participantes del sistema para descubrir sus requisitos. También los requisitos de dominio de los participantes y la documentación se descubren durante esta actividad. 

2. **Clasificación y organización de requisitos:**
	Esta actividad toma la compilación no estructurada de requisitos, agrupa requisitos relacionados y los organiza en grupos coherentes. La forma más común de agrupar requisitos es usar un modelo de la arquitectura del sistema, para identificar subsistemas y asociar los requisitos con cada subsistema.

3. **Priorización y negociación de requisitos:**
	Inevitablemente, cuando intervienen diversos participantes, los requisitos entrarán en conflicto. Esta actividad se preocupa por priorizar los requisitos, así como por encontrar y resolver conflictos de requisitos mediante la negociación.

4. **Especificación de requisitos:**
	Los requisitos se documentan e ingresan en la siguiente ronda de la espiral. Pueden producirse documentos de requisitos formales o informales.

La adquisición y el análisis de requisitos es un proceso iterativo con retroalimentación continua de cada actividad a otras actividades.

El ciclo concluye cuando está completo el documento de requisitos. La adquisición y la comprensión de los requisitos por parte de los participantes del sistema es un proceso difícil por diferentes razones.

En la etapa de especificación de requisitos, los requisitos adquiridos hasta el momento se documentan de tal forma que puedan usarse para ayudar al hallazgo de requisitos. En esta etapa, podría generarse una primera versión del documento de requisitos del sistema, con secciones faltantes y requisitos incompletos.

## Descubrimiento de requisitos

El descubrimiento de requisitos (llamado a veces adquisición de requisitos) es el proceso de recopilar información sobre el sistema requerido y los sistemas existentes, así como de separar, a partir de esta información, los requisitos del usuario y del sistema. 

Las fuentes de información durante la fase de descubrimiento de requisitos incluyen documentación, participantes del sistema y especificaciones de sistemas similares.
Los participantes varían desde administradores y usuarios finales de un sistema hasta participantes externos como los reguladores, quienes certifican la aceptabilidad del sistema

Además de los participantes del sistema, se observa que los requisitos también pueden venir del dominio de aplicación y de otros sistemas que interactúan con el sistema a especificar.

#### Puntos de vista
Un punto de vista es una forma de recopilar y organizar un conjunto de requisitos de un grupo de participantes que cuentan con algo en común. Por lo tanto, cada punto de vista incluye una serie de requisitos del sistema. Los puntos de vista pueden provenir de usuarios finales, administradores, etcétera. Ayudan a identificar a los individuos que brindan información sobre sus requisitos y a estructurar los requisitos para análisis.

## Técnicas de descubrimiento de requisitos:
### Entrevistas
En estas entrevistas, el equipo de ingeniería de requisitos formula preguntas a los participantes sobre el sistema que actualmente usan y el sistema que se va a desarrollar. Los requisitos se derivan de las respuestas a dichas preguntas

Las entrevistas son de dos tipos:
1. Entrevistas cerradas, donde los participantes responden a un conjunto de preguntas preestablecidas. 
2. Entrevistas abiertas, en las cuales no hay agenda predefinida.

En la práctica, las entrevistas con los participantes son por lo general una combinación de ambas.

#### Desventajas: 
Las entrevistas no son tan útiles para comprender los requisitos desde el dominio de la aplicación. 
1. Todos los especialistas en la aplicación usan terminología y jerga que son específicos de un dominio 
2. Cierto conocimiento del dominio es tan familiar a los participantes que encuentran difícil de explicarlo, o bien, creen que es tan fundamental que no vale la pena mencionarlo.

Las entrevistas tampoco son una técnica efectiva para adquirir conocimiento sobre los requisitos y las restricciones de la organización, porque existen relaciones sutiles de poder entre los diferentes miembros en la organización.

#### Entevistadores
Los entrevistadores efectivos poseen dos características: 
1. Tienen mentalidad abierta, evitan ideas preconcebidas sobre los requisitos y escuchan a los participantes. 
2. Instan al entrevistado con una pregunta de trampolín para continuar la plática, dar una propuesta de requisitos o trabajar juntos en un sistema de prototipo. Cuando se pregunta al individuo “dime qué quieres” es improbable que alguien consiga información útil. Encuentran mucho más sencillo hablar en un contexto definido que en términos generales. 

La entrevista por sí misma está expuesta a perder información esencial y, por consiguiente, debe usarse junto con otras técnicas de adquisición de requisitos.

### Escenarios
Por lo general, las personas encuentran más sencillo vincularse con ejemplos reales que con descripciones abstractas. Los escenarios son particularmente útiles para detallar un bosquejo de descripción de requisitos.

Durante el proceso de adquisición, se suman detalles a éste para crear una representación completa de dicha interacción.

Las historias que se usan en programación extrema, estudiadas en el capítulo 3, son un tipo de escenario de requisitos.

En su forma más general, un escenario puede incluir: 
1. Una descripción de qué esperan el sistema y los usuarios cuando inicia el escenario. 
2. Una descripción en el escenario del flujo normal de los eventos. 
3. Una descripción de qué puede salir mal y cómo se manejaría. 
4. Información de otras actividades que estén en marcha al mismo tiempo. 
5. Una descripción del estado del sistema cuando termina el escenario.

```ad-example
title: Ejemplo de escenario
collapse: closed
![[Pasted image 20230325004349.png]]
```

### Casos de uso
Los casos de uso son una técnica de descubrimiento de requisitos, identifica a los actores implicados en una interacción, y nombra el tipo de interacción. Entonces, esto se complementa con información adicional que describe la interacción con el sistema.

El conjunto de casos de uso representa todas las interacciones posibles que se describirán en los requisitos del sistema.

No hay distinción tajante y rápida entre escenarios y casos de uso. 
Los escenarios y los casos de uso son técnicas efectivas para adquirir requisitos de los participantes que interactúan directamente con el sistema. 

#### Desventajas
Cada tipo de interacción puede representarse como caso de uso. Sin embargo, debido a que se enfocan en interacciones con el sistema, no son tan efectivas para adquirir restricciones o requisitos empresariales y no funcionales de alto nivel, ni para descubrir requisitos de dominio.

#### Diagrama de Casos de Uso
Provee una representación de alto nivel de los requisitos de usuario.
![[Pasted image 20230325004544.png]]

#### Elementos esenciales de un Caso de Uso
- Identificador único.
- Breve descripción: a alto nivel, del caso de uso y del flujo de acciones que comprende.
- Precondiciones: describen condiciones que debe cumplir el sistema para que se pueda iniciar el caso de uso.
- Poscondiciones: describen el estado del sistema luego de la ejecución exitosa del caso de uso.
- Una lista enumerada de pasos que muestran la secuencia de interacciones entre el actor y el sistema.

#### Estrategias para identificar casos de uso
- Identificar primero a los actores, luego a los procesos que serán soportados por el sistema y por último definir casos de uso para las actividades en las cuales interactúan los actores y el sistema. 
- Crear escenarios específicos para ilustrar cada proceso de negocio, luego generalizar en casos de uso e identificar actores.
- Identificar los eventos externos a los cuales el sistema debe responder, luego relacionar esos eventos a los actores participantes y casos de uso específicos.
- Identificar que entidades de datos necesitan casos de uso de creación, lectura, actualización, borrado u otras operaciones de manipulación.

#### Consideraciones
- No tratar de forzar a que todos los requisitos sean contemplados por los casos de uso. En algunos casos no aporta demasiado valor hacerlo.
- Ser concretos y mantenerse dentro de los límites de los casos de uso (precondiciones y poscondiciones).
- Evitar escribir demasiados casos de uso. Evaluar sí son todos necesarios y sí no corresponden a distintos escenarios de un mismo caso de uso. 
- No crear casos de uso muy complejos. En particular, no incluir demasiados chequeos de errores y validaciones comunes.
- Los casos de uso no tienen porque desarrollarse por completo de una vez. En particular, no utilizar demasiado tiempo en detallar casos de uso que serán utilizados como insumo para otras actividades que comienzan dentro de meses o años.
- No se deberían incluir en los flujos detalles de la interfaz gráfica. Pero pueden agregarse secciones, por ejemplo, para incluir borradores de pantallas.
- No se debería incluir información de diseño o desarrollo. Así tampoco información sobre la definición de los datos.
- No escribir casos de uso que no sean entendidos por los usuarios.

#### Resúmen
- Formato simple y estructurado donde los usuarios y desarrolladores pueden trabajar juntos.
- No son de gran ayuda para identificar aspectos no funcionales.
- Mientras se definen los casos de uso, puede ser un buen momento para definir pantallas u otros objetos con los que el usuario interactúa.
- Pueden ser usados en el diseño y en el testing del sistema.

![[Pasted image 20230325011150.png]]

### Observaciones / Etnografía
Los sistemas de software no existen aislados. Se usan en un contexto social y organizacional, y dicho escenario podría derivar o restringir los requisitos del sistema de software.
La etnografía es una técnica de observación que se usa para entender los procesos operacionales y ayudar a derivar requisitos de apoyo para dichos procesos. Un analista se adentra en el ambiente laboral donde se usará el sistema. Observa el trabajo diario y toma notas acerca de las tareas existentes en que intervienen los participantes. El valor de la etnografía es que ayuda a descubrir requisitos implícitos del sistema que reflejan las formas actuales en que trabaja la gente, en vez de los procesos formales definidos por la organización.

La etnografía es muy efectiva para descubrir dos tipos de requisitos: 
1. Requisitos que se derivan de la forma en que realmente trabaja la gente, en vez de la forma en la cual las definiciones del proceso indican que debería trabajar. 
2. Requisitos que se derivan de la cooperación y el conocimiento de las actividades de otras personas.

#### Desventajas
No en todos los casos se identifican nuevas características que deben agregarse a un sistema. En consecuencia, la etnografía no es un enfoque completo para la adquisición por sí misma, y debe usarse para complementar otros enfoques, como el análisis de casos de uso.

#### Resumen
- Implican observar a los usuarios mientras realizan sus actividades. Pueden ser silenciosas o interactivas.
- En general los usuarios no son muy precisos al describir sus tareas. Esto puede ser porque son tareas complejas y difíciles de explicar. En otros casos, están tan familiarizados que omiten detalles de forma inconsciente.

![[Pasted image 20230325010437.png]]

### Cuestionarios / Encuestas
Son una manera de estudiar a grandes grupos de usuarios para entender sus necesidades.

Su principal uso es para validar y obtener datos estadísticos sobre preferencias.
Preparar preguntas bien escritas es el mayor desafío.

#### Antes de usar el enfoque:
- Determinar la información que se precisa.
- Determinar el enfoque más adecuado:
	- Abierto, cerrado, combinado.
	- Múltiple opción, valor en escala, orden relativo.
- Desarrollar cuestionario.
- Probarlo con perfil típico.
- Analizar resultado de las pruebas.

#### Recomendaciones
- Proveer opciones para todas las posibles respuestas.
- Hacer que las opciones sean mutuoexcluyentes.
- Utilizar preguntas cerradas para análisis estadístico y abiertas para recolectar ideas o necesidades nuevas.
- Siempre probar el cuestionario antes de usarlo.
- No incluir demasiadas preguntas.

![[Pasted image 20230325010731.png]]

### Análisis de las interfaces del sistema
Implica examinar los otros sistemas con los que se conecta el sistema.
Revela requisitos funcionales relativas al intercambio de datos y servicios entre sistemas.

Para cada sistema que se deba comunicar con el nuestro se identifican las funcionalidades que nos puedan generar requisitos. Esos requisitos pueden describir los datos a pasar a otros sistemas, los datos a recibir de otros sistemas y las reglas sobre los datos (por ejemplo criterios de validación).

Es útil para revisar las validaciones de la información a comunica o recibir (quizás, por ejemplo, se puedan omitir validaciones).

### Análisis de la interfaz de usuario
Implica estudiar sistemas existentes para determinar requisitos de usuario y funcionales.

Los mejor es utilizar sistemas existentes, pero sino se pueden utilizar screenshots (por ejemplo de manuales de usuario).

Puede ayudar a identificar una lista completa de pantallas y a descubrir características potenciales del nuevo sistema. Se utiliza para identificar pasos comunes de los usuarios al realizar tareas así como para crear borradores de casos de uso.
No hay que asumir que una funcionalidad es necesaria porque se encuentra en un sistema existente. O mantener la interfaz de usuario parecida o que se comporte de forma similar a la estudiada.

### Análisis de documentación
Contempla examinar toda la documentación existente en busca de requisitos potenciales del software.
La documentación más útil incluye especificación de requisitos, procesos de negocio, lecciones aprendidas y manuales de usuario de aplicaciones existentes o similares.
Es a una forma rápida de introducirse rápidamente en un nuevo dominio o en un sistema existente.

### Tormenta de ideas
Ayuda a la participación de todos los involucrados.
Reglas: no se permite criticar ni debatir, generar tantas ideas como sea posible, mutar y combinar ideas.

#### Fase de generación
- Los principales stakeholders se reúnen y se establecen objetivos.
- Se pide que cada uno escriba sus ideas.

#### Fase de reducción
- Se leen las ideas y se establece si es válida.
- Se agrupan ideas y se hacen las definiciones necesarias.
- Se priorizan (opcional).

### Historias de usuario
- Refieren a descripciones cortas y de alto nivel de las funcionalidades expresadas en los términos del cliente.
- Una historia de usuario típica tiene la forma: – “As a [ROL], I want [FUNCIONALIDAD] so that [MOTIVO].”
- Pretenden contener justo la información necesaria para que los desarrolladores puedan producir una estimación razonable del esfuerzo para su implementación.
- La idea es evitar perder demasiado tiempo relevando detalles de requisitos que luego cambian demasiado o son desestimados.

#### Más en:
[[User Stories]]

### Modelado de procesos
- Permiten entender el trabajo con múltiples pasos, roles o departamentos.
	- Iniciados por un evento.
	- Incluyen actividades manuales, automáticas o combinaciones de ambos tipos.
- Pueden volverse complejos y pesados si no se estructuran con cuidado.
- Los procesos complejos se pueden descomponer para ayudar su entendimiento.

```ad-example
title: Ejemplo
collapse: closed
![[Pasted image 20230325011407.png]]
```

## Modelado del sistema

El modelado del sistema es el proceso de desarrollar modelos abstractos del sistema, con cada modelo se presentan diferentes visiones o perspectivas.
Ayuda a los analistas a entender las funcionalidades del sistema y facilita la comunicación con los clientes.
En la actualidad es una actividad que se basa generalmente en la notación UML.

### Modelado de sistemas existentes y nuevos
Los modelos de sistemas existentes se utilizan durante la ingeniería de requisitos. Ayudan a comprender qué hacen y pueden ser usados para discusiones acerca de sus fortalezas y debilidades.
Los modelos de nuevos sistemas son usados durante la ingeniería de requisitos para ayudar a explicar los requisitos propuestos a otros stakeholders del sistema. También para discutir propuestas de diseño y documentar el sistema para su implementación.
En un proceso de ingeniería guiado por modelos (model-driven), es posible generar de forma total o parcial una implementación del modelo del sistema.

### Perspectivas del sistema - Ejemplos
- **Una perspectiva externa** — se modela el contexto o entorno del sistema.
- **Una perspectiva de la interacción** — se modelan las interacciones entre un sistema y su entorno o entre un sistema y sus componentes.
- **Una perspectiva estructural** — se modela la organización del sistema o la estructura de los datos que se procesan por el sistema.
- **Una perspectiva del comportamiento** — se modela el comportamiento dinámico del sistema y la forma en que responde a los eventos.

### Perspectivas del sistema - UML
- **Diagramas de actividad** — muestran las actividades involucradas en un proceso o en el procesamiento de datos.
- **Diagramas de casos de uso** — muestran las interacciones entre el sistema y su entorno. 
- **Diagramas de secuencia** — muestran las interacciones entre el sistema y los componentes del sistema.
- **Diagrama de clases** — muestran las clases de objetos del sistema y las asociaciones entre ellas.
- **Diagramas de estados** — muestran como el sistema reacciona ante eventos internos o externos.

### Uso de modelos gráficos
- Como medio de facilitar la discusión acerca de sistemas existentes o propuestos. Ya sea que los modelos estén incompletos o incorrectos está bien debido a que su papel es aportar a la discusión.
- Como una manera de documentar un sistema existente. Los modelos deben ser una representación exacta del sistema pero no tiene que ser completa.
- Como una descripción detallada del sistema que se puede usar para generar una implementación del sistema. Los modelos tienen que ser a la vez correctos y completos.

### Modelos de contexto
Son usados para ilustrar el contexto operacional del sistema – muestran lo que está fuera de los límites del sistema.
Temas sociales y organizacionales pueden afectar la decisión sobre donde situar los límites del sistema.

**Límites del Sistema:** Definen qué está dentro y qué está fuera del sistema. La definición de los limites del sistema tiene un profundo efecto sobre los requisitos del sistema.

```ad-example
title: Ejemplo
Podemos utilizar un diagrama de casos de uso que incluya la frontera del sistema como modelo de contexto.

</br>

![[Pasted image 20230327161329.png]]
```

### Modelos de interacción
Todo sistema involucra interacción: interacción con usuarios, con otros sistemas o entre sus componentes.
Modelar la interacción con los usuarios ayuda a identificar los requisitos de usuario.
Modelar la interacción con otros sistemas permite explorar posibles problemas de comunicación.
Modelar la interacción **entre los componentes** ayuda a entender sí la estructura propuesta del sistema es apropiada para los requisitos y atributos de calidad establecidos.

En UML podemos modelar la interacción de un sistema utilizando: 
- Modelado con casos de uso.
- Diagramas de secuencia

#### Diagramas de secuencia
- Son usados para modelar las interacciones entre los actores y los objetos dentro de un sistema.
- Un diagrama de secuencia muestra la secuencia de interacciones que tienen lugar durante un caso de uso particular o una instancia de caso de uso.
- Los objetos y actores involucrados son enumerados a lo largo de la parte superior del diagrama con una línea vertical de puntos a partir desde allí hacía abajo.
- Las interacciones entre objetos son indicadas mediante flechas con anotaciones.

![[Pasted image 20230327161521.png]]


### Modelos estructurales
- Disponen la organización del sistema en términos de los componentes que lo componen y sus relaciones.
- Pueden ser modelos estáticos, los cuales muestran la estructura del sistema diseñado o modelos dinámicos los cuales muestran la organización del sistema cuando se está ejecutando.
- Se pueden crear modelos estructurales del sistema cuando se está discutiendo y diseñando la arquitectura del sistema.

#### Modelo de dominio o conceptual
- Muestran las clases de un sistema y sus asociaciones.
- Una clase puede ser considerada como una definición general de un tipo de objeto del sistema.
- Una asociación se representa como un enlace entre dos o más clases.
- Cuando se desarrollan modelos durante fases tempranas los objetos representan algo del mundo real (modelo conceptual).

![[Pasted image 20230327161645.png]]

### Modelos de comportamiento
- Modelan el comportamiento dinámico de un sistema en ejecución. 
	- Muestran qué sucede o qué debe suceder cuando un sistema responde a los estímulos de su entorno.
- Se puede pensar en dos tipos de estímulos: 
	- **Datos** — Ciertos datos que llegan y deben ser procesados. 
	- **Eventos** — Ciertos eventos que funcionan como disparadores.

#### Modelado dirigido por datos (data-driven)
- Muestran la secuencia de acciones involucradas en procesar los datos de entrada y generar una salida asociada.
- Los modelos de flujo de datos permiten realizar el seguimiento y documentar cómo los datos asociados a un proceso particular se mueven a través del sistema.
- UML no soporta de forma natural los modelos de flujo de datos pero pueden utilizarse diagramas de secuencia.

```ad-example
title: Ejemplo
![[Pasted image 20230327162110.png]]
```


#### Modelado dirigido por eventos (event-driven)
- Muestran cómo un sistema responde a eventos externos e internos.
- Se basan en la suposición de que un sistema tiene un número finito de estados y que eventos (estímulos) pueden causar una transacción de un estado a otro.
- En UML se pueden utilizar diagramas de estado.

```ad-example
title: Ejemplo de diagrama de estados
![[Pasted image 20230327161843.png]]
```

# 4.6 Validación de requisitos

La validación de requisitos es el proceso de verificar que los requisitos definan realmente el sistema que en verdad quiere el cliente. 

Durante el proceso de validación de requisitos, tienen que realizarse diferentes tipos de comprobaciones sobre los requisitos contenidos en el documento de requisitos:

1. **Comprobaciones de validez**
	Un usuario quizá crea que necesita un sistema para realizar ciertas funciones. Sin embargo, con mayor consideración y análisis se logra identificar las funciones adicionales o diferentes que se requieran. Los sistemas tienen diversos participantes con diferentes necesidades, y cualquier conjunto de requisitos es inevitablemente un compromiso a través de la comunidad de participantes. 

2. **Comprobaciones de consistencia**
	Los requisitos en el documento no deben estar en conflicto. Esto es, no debe haber restricciones contradictorias o descripciones diferentes de la misma función del sistema.
 
3. **Comprobaciones de totalidad**
	El documento de requisitos debe incluir requisitos que definan todas las funciones y las restricciones pretendidas por el usuario del sistema. 

4. **Comprobaciones de realismo**
	Al usar el conocimiento de la tecnología existente, los requisitos deben comprobarse para garantizar que en realidad pueden implementarse. Dichas comprobaciones también tienen que considerar el presupuesto y la fecha para el desarrollo del sistema. 

5. **Verificabilidad** 
	Para reducir el potencial de disputas entre cliente y contratista, los requisitos del sistema deben escribirse siempre de manera que sean verificables. Esto significa que usted debe ser capaz de escribir un conjunto de pruebas que demuestren que el sistema entregado cumpla cada requisito especificado.

Hay algunas técnicas de validación de requisitos que se usan individualmente o en conjunto con otras: 
1. **Revisiones de requisitos:**
	Se analizan sistemáticamente usando un equipo de revisores que verifican errores e inconsistencias.
2. **Creación de prototipos:**
	Se muestra un modelo ejecutable del sistema en cuestión a los usuarios finales y clientes. Así, ellos podrán experimentar con este modelo para constatar si cubre sus necesidades reales.
3. **Generación de casos de prueba:**
	Los requisitos deben ser comprobables. Si las pruebas para los requisitos se diseñan como parte del proceso de validación, esto revela con frecuencia problemas en los requisitos. Si una prueba es difícil o imposible de diseñar, esto generalmente significa que los requisitos serán difíciles de implementar, por lo que deberían reconsiderarse.

## Ejemplos

### Manuales
- Lectura por parte del cliente.
- Recorridas. Útiles con muchos stakeholders que no lo leerían de otra manera.
- Entrevistas.
- Chequeo manual de referencias cruzadas. 
- Instancias de validación formal:
	- Revisiones - Stakeholders revisan por separado y se reúnen para discutir problemas.
	- Inspecciones formales – roles y reglas. (revisor por área del producto como seguridad, eficiencia, funcionalidades, etc)
- Listas de comprobación.
- Escenarios.
- Generación de Casos de Prueba.

### Automatizadas
- Chequeo automático de referencias cruzadas.
- Ejecución de Modelos para verificar funciones y relaciones.
- Construcción de Prototipos.
- Simulaciones.

# 4.7 Administración / gestión de requisitos

Gestionar los cambios de los requisitos durante el proceso de ingeniería de requisitos y el desarrollo del sistema.

Nuevos requisitos surgen cuando un sistema está siendo desarrollado y después de haber entrado en uso.

Es necesario mantener un rastreo (trazabilidad) de los requisitos y mantener sus referencias para facilitar el análisis de impacto ante posibles cambios.

Se recomienda establecer un proceso formal de control de cambios.

## Cambios en los requisitos

El entorno empresarial y técnico del sistema siempre cambia después de la instalación.Nuevo hardware, nuevas interfaces con otros sistemas, cambian las prioridades del negocio, nuevas legislaciones, etc.

Las personas que pagan por un sistema y los usuarios de ese sistema casi nunca son las mismas personas.

Los grandes sistemas tienen una diversa comunidad de usuarios, algunos de los cuales tienen diferentes requisitos y pueden existir conflictos en las prioridades.

## Planificación de la gestión

Establece el detalle del nivel de gestión requisitos que es requerido. ● Decisiones de gestión de requisitos: 
- **Identificación de requisitos**— Cada requisito debe ser identificado de modo que pueda hacerse una referencia cruzada con otros.
- **Proceso de gestión de cambios**— Es el conjunto de actividades que evalúan el impacto y el costo de los cambios.
- **Políticas de trazabilidad**— Estas políticas definen cómo registrar las relaciones entre los requisitos y el sistema diseñado.
- **Soporte de herramientas**— Las herramientas que utilizarán.

## Gestión de cambios en los requisitos

- Decidir sí un cambio en los requisitos debe ser aceptado.
- Problemas de análisis y cambios en la especificación
	- Se analiza para chequear si es valido.
- Cambiar el análisis y calculo de costos
	- Se evalúa el efecto (info de trazabilidad y el conocimiento general del sistema). se toma la decisión de sí se debe proceder o no.
- Implementación del cambio

![[Pasted image 20230327162815.png]]

## Cambios de requisitos en procesos ágiles

Cuando un usuario propone un cambio de requisitos, este cambio no pasa por un proceso formal de gestión de cambios. 
El usuario debe priorizar ese cambio y, si es de alta prioridad, debe decidir qué características del sistema que se planificaron para la próxima iteración se deben eliminar para que se implemente el cambio.

Pero…. en los sistemas con múltiples partes interesadas, los cambios beneficiarán a algunas partes interesadas y no a otras.
Sugerencia: autoridad independiente, que puede equilibrar las necesidades de todos los interesados

# Extras

[[Casos de uso]]
[[User Stories]]