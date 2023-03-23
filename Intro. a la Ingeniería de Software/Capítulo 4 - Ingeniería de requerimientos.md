Los requerimientos para un sistema son descripciones de lo que el sistema debe hacer: el servicio que ofrece y las restricciones en su operación. Tales requerimientos reflejan las necesidades de los clientes por un sistema que atienda cierto propósito. Al proceso de descubrir, analizar, documentar y verificar estos servicios y restricciones se le llama ingeniería de requerimientos (IR). Los requerimientos deben redactarse de forma abstracta para que muchos proveedores liciten ofreciendo diferentes maneras de cubrir las necesidades de organización del cliente. Una vez otorgado el contrato, el proveedor tiene que escribir con más detalle una definición del sistema para el cliente, de modo que éste comprenda y valide lo que hará el software. Estos documentos suelen nombrarse documentos de requerimientos para el sistema.

1. Los **requerimientos del usuario** son enunciados, en un lenguaje natural junto con diagramas, acerca de qué servicios esperan los usuarios del sistema, y de las restricciones con las cuales éste debe operar.

2. Los **requerimientos del sistema** son descripciones más detalladas de las funciones, los servicios y las restricciones operacionales del sistema de software. El documento de requerimientos del sistema (llamado en ocasiones especificación funcional) tiene que definir con exactitud lo que se implementará. Puede formar parte del contrato entre el cliente y el desarrollador.

3. Los **requisitos del software** son aquellos que se derivan de los requisitos del sistema. ¿Qué queremos que haga el software dentro del distema?

![[Pasted image 20230317145435.png]]

## Niveles de requisitos

![[Pasted image 20230321082413.png]]
- Fechas sólidas: "*se almacenan en*"
- Flechas punteadas: "*son el origen de*" ó "*influencian*"

# 4.1 Requerimientos funcionales y no funcionales

La distinción entre requerimientos funcionales y no funcionales puede no ser clara, pues un requerimiento suele generar o restringir otro. No sólo especifican las características del sistema, sino también las funcionalidades necesarias para que estos servicios se den efectivamente.

## Requerimientos funcionales
Son enunciados acerca de servicios que el sistema debe proveer, de cómo debería reaccionar el sistema a entradas particulares y de cómo debería comportarse o no el sistema en situaciones específicas.

Los requerimientos funcionales para un sistema refieren lo que el sistema debe hacer. Tales requerimientos dependen del tipo de software que se esté desarrollando, de los usuarios esperados del software y del enfoque general que adopta la organización cuando se escriben los requerimientos. 
Por lo general, se escriben de forma abstracta para lectura de los usuarios. Varían desde requerimientos generales que cubren lo que tiene que hacer el sistema, hasta requerimientos muy específicos que reflejan maneras locales de trabajar o los sistemas existentes de una organización. 

Los requerimientos funcionales pueden escribirse con diferentes niveles de detalle. En principio, la especificación de los requerimientos funcionales de un sistema debe ser **completa y consistente**. 
- **Totalidad** significa que **deben definirse todos los servicios requeridos por el usuario**. 
- **Consistencia** quiere decir que los requerimientos tienen que **evitar definiciones contradictorias**. 

En sistemas grandes, es difícil de lograr debido a la gran cantidad de participantes, la facilidad para cometer errores en sistemas complejos, las diferentes necesidades, etc. Los problemas suelen surgir sólo después de un análisis en profundidad o después de que se entregó el sistema al cliente.

## Requerimientos no funcionales 
Son limitaciones sobre servicios o funciones que ofrece el sistema. Incluyen restricciones tanto de temporización y del proceso de desarrollo, como impuestas por los estándares. Los requerimientos no funcionales se suelen aplicar al sistema como un todo, más que a características o a servicios individuales del sistema.

Son requerimientos que no se relacionan directamente con los servicios específicos que el sistema entrega a sus usuarios. Pueden relacionarse con propiedades emergentes del sistema, como fiabilidad, tiempo de respuesta y uso de almacenamiento. De forma alternativa, pueden definir restricciones sobre la implementación del sistema, como las capacidades de los dispositivos I/O o las representaciones de datos usados en las interfaces con otros sistemas.
Especifican o restringen por lo general características del sistema como un todo. 

![[Pasted image 20230317145810.png]]

Los requerimientos no funcionales a menudo son más significativos que los requerimientos funcionales individuales:
1. Los requerimientos no funcionales afectan más la arquitectura global de un sistema que los componentes individuales. 
2. Un requerimiento no funcional individual, como un requerimiento de seguridad, podría generar algunos requerimientos funcionales relacionados que definan nuevos servicios del sistema que se requieran. Además, también podría generar requerimientos que restrinjan los requerimientos ya existentes.

Los requerimientos no funcionales surgen a través de necesidades del usuario, debido a restricciones presupuestales, políticas de la organización, necesidad de interoperabilidad con otro software o sistemas de hardware, o factores externos como regulaciones de seguridad o legislación sobre privacidad.

Los requerimientos no funcionales provienen de características requeridas del software (requerimientos del producto), la organización que desarrolla el software (requerimientos de la organización) o de fuentes externas:
1. **Requerimientos del producto**: Estos requerimientos especifican o restringen el comportamiento del software. Los ejemplos incluyen requerimientos de rendimiento sobre qué tan rápido se debe ejecutar el sistema y cuánta memoria requiere, requerimientos de fiabilidad que establecen la tasa aceptable de fallas, requerimientos de seguridad y requerimientos de usabilidad. 
2. **Requerimientos de la organización**: Son requerimientos de sistemas amplios, derivados de políticas y procedimientos en la organización del cliente y del desarrollador. Los ejemplos incluyen requerimientos del proceso operacional que definen cómo se usará el sistema, requerimientos del proceso de desarrollo que especifican el lenguaje de programación, estándares del entorno o el proceso de desarrollo a utilizar, y requerimientos ambientales que definen el entorno de operación del sistema. 
3. **Requerimientos externos**: Este término cubre todos los requerimientos derivados de factores externos al sistema y su proceso de desarrollo. En ellos se incluyen requerimientos regulatorios que establecen lo que debe hacer el sistema para ser aprobado en su uso por un regulador, como sería un banco central; requerimientos legislativos que tienen que seguirse para garantizar que el sistema opere conforme a la ley, y requerimientos éticos que garanticen que el sistema será aceptable para sus usuarios y el público en general.

Siempre que sea posible, se deberán **escribir de manera cuantitativa** los requerimientos no funcionales, de manera que puedan ponerse objetivamente a prueba **usando métricas o unidades de medida**.

```ad-example
title: Formas de medir
collapse: closed
![[Pasted image 20230317145920.png]]


De este modo, se puede verificar que los requerimientos no funcionales se cumplan. Puede ser muy costoso. Este tipo de requisito puede interactuar e incluso entrar en conflicto con otros, de cualquier tipo.
```

Los requerimientos del sistema no son independientes y no sólo detallan los servicios o las características que se requieren del mismo, sino también especifican la funcionalidad necesaria para asegurar que estos servicios y características se entreguen de manera adecuada.

### Clasificación de Wiegers

#### Artibutos de calidad:
Un tipo de requisito no funcional que describe una característica de servicio o desempeño de un producto.

#### Interfaces externa:
Una descripción de una conexión entre un sistema de software y un usuario, otro sistema de software o un dispositivo de hardware.

#### Restricciones:
Todo el resto.

# 4.2 El documento de requerimientos de software

Es un comunicado oficial de lo que deben implementar los desarrolladores del sistema. Incluye tanto los requerimientos del usuario para un sistema, como una especificación detallada de los requerimientos del sistema.

Son esenciales los documentos de requerimientos cuando un contratista externo diseña el sistema de software. Sin embargo, los métodos de desarrollo ágiles argumentan que los requerimientos cambian tan rápidamente que un documento de requerimientos se vuelve obsoleto tan pronto como se escribe, así que el esfuerzo se desperdicia en gran medida. En lugar de un documento formal, los enfoques como la programación extrema recopilan de manera incremental requerimientos del usuario y los escriben en tarjetas como historias de usuario.

Este enfoque es adecuado para sistemas empresariales donde los requerimientos son inestables. Sin embargo, aún resulta útil escribir un breve documento de apoyo que defina los requerimientos de la empresa y los requerimientos de confiabilidad para el sistema; es fácil olvidar los requerimientos que se aplican al sistema como un todo, cuando uno se enfoca en los requerimientos funcionales para la siguiente liberación del sistema.

La diversidad de posibles usuarios significa que el documento de requerimientos debe ser un compromiso entre la comunicación de los requerimientos a los clientes, la definición de los requerimientos con detalle preciso para desarrolladores y examinadores, y la inclusión de información sobre la posible evolución del sistema.

El nivel de detalle que se incluya en un documento de requerimientos depende del tipo de sistema a diseñar y el proceso de desarrollo utilizado.

```ad-info
title: Diversidad de usuarios
collapse: closed
![[Pasted image 20230317150309.png]]
```

```ad-hint
title: Estructura de un documento de requerimientos
collapse: closed
![[Pasted image 20230317150412.png]]
```


# 4.3 Especificación de requerimientos

La especificación de requerimientos es el proceso de escribir, en un documento de requerimientos, los requerimientos del usuario y del sistema. De manera ideal, los requerimientos del usuario y del sistema deben ser claros, sin ambigüedades, fáciles de entender, completos y consistentes. 
Los requerimientos del usuario para un sistema deben describir los requerimientos funcionales y no funcionales, de forma que sean comprensibles para los usuarios del sistema que no cuentan con un conocimiento técnico detallado. De manera ideal, deberían especificar sólo el comportamiento externo del sistema. El documento de requerimientos no debe incluir detalles de la arquitectura o el diseño del sistema. En consecuencia, si usted escribe los requerimientos del usuario, no tiene que usar jerga de software, anotaciones estructuradas o formales. Debe escribir los requerimientos del usuario en lenguaje natural, con tablas y formas sencillas, así como diagramas intuitivos.
Idealmente, los requerimientos del sistema deben describir de manera simple el comportamiento externo del sistema y sus restricciones operacionales. No tienen que ocuparse de cómo se diseña o implementa el sistema. Sin embargo, al nivel de detalle requerido para especificar por completo un sistema de software complejo, es prácticamente imposible excluir toda la información de diseño.

Los requerimientos del usuario se escriben casi siempre en lenguaje natural, complementado con diagramas y tablas adecuados en el documento de requerimientos. Los requerimientos del sistema se escriben también en lenguaje natural, pero de igual modo se utilizan otras notaciones basadas en formas, modelos gráficos del sistema o modelos matemáticos del sistema.

## Especificación en lenguaje natural
Es expresivo, intuitivo y universal. También es potencialmente vago, ambiguo y su significado depende de los antecedentes del lector. 
Para minimizar la interpretación errónea al escribir los requerimientos en lenguaje natural, se recomienda:
- elaborar un formato estándar y asegurarse de que todas las definiciones de requerimientos se adhieran a ese formato
- utilizar el lenguaje de manera clara para distinguir entre requerimientos obligatorios y deseables
- usar texto resaltado (negrita, cursiva o color) para seleccionar partes clave
- evitar el uso de jerga, abreviaturas y acrónimos
- asociar, siempre que sea posible, una razón con cada requerimiento de usuario. Es decir por qué se incluyó el mismo

```ad-example
title: Ejemplo
collapse: closed
3.2 Si se requiere, cada 10 minutos el sistema medirá el azúcar en la sangre y administrará insulina. (Los cambios de azúcar en la sangre son relativamente lentos, de manera que no son necesarias mediciones más frecuentes; la medición menos periódica podría conducir a niveles de azúcar innecesariamente elevados.) 

</br>

3.6 Cada minuto, el sistema debe correr una rutina de autoevaluación, con las condiciones a probar y las acciones asociadas definidas en la tabla 1. (Una rutina de autoevaluación puede detectar problemas de hardware y software, y prevenir al usuario sobre el hecho de que la operación normal puede ser imposible.)
```


## Especificaciones estructuradas
El lenguaje natural estructurado es una manera de escribir requerimientos del sistema, donde está limitada la libertad del escritor de requerimientos y todos éstos se anotan en una forma estándar.
Aunque este enfoque conserva la mayoría de la expresividad y comprensibilidad del lenguaje natural, asegura que haya cierta uniformidad sobre la especificación. Las anotaciones en lenguaje estructurado emplean plantillas para especificar requerimientos del sistema. La especificación utiliza constructos de lenguaje de programación para mostrar alternativas e iteración, y destaca elementos clave con el uso de sombreado o de fuentes distintas.
Para usar un enfoque estructurado que especifique los requerimientos de sistema, hay que definir una o más plantillas estándar para requerimientos, y representar dichas plantillas como formas estructuradas. La especificación puede estructurarse sobre los objetos manipulados por el sistema, las funciones que el sistema realiza o los eventos procesados por el sistema.

```ad-example
title: Ejemplo
collapse: closed
![[Pasted image 20230317155946.png]]
```


Cuando se use una forma estándar para especificar requerimientos funcionales, debe incluir la siguiente información: 
1. Una descripción de la función o entidad a especificar. 
2. Una descripción de sus entradas y sus procedencias. 
3. Una descripción de sus salidas y a dónde se dirigen. 
4. Información sobre los datos requeridos para el cálculo u otras entidades en el sistema que se utilizan (la parte “requiere”). 
5. Una descripción de la acción que se va a tomar. 
6. Si se usa un enfoque funcional, una precondición establece lo que debe ser verdadero antes de llamar a la función, y una postcondición especifica lo que es verdadero después de llamar a la función. 
7. Una descripción de los efectos colaterales (si acaso hay alguno) de la operación

Al usar especificaciones estructuradas se eliminan algunos de los problemas de la especificación en lenguaje natural. La variabilidad en la especificación se reduce y los requerimientos se organizan de forma más efectiva. Sin embargo, en ocasiones todavía es difícil escribir requerimientos sin ambigüedades, en particular cuando deben especificarse cálculos complejos.

Para enfrentar este problema se puede agregar información extra a los requerimientos en lenguaje natural, por ejemplo, con el uso de tablas o modelos gráficos del sistema. Las tablas son particularmente útiles cuando hay algunas posibles situaciones alternas y se necesita describir las acciones a tomar en cada una de ellas.

```ad-example
title: Ejemplo de tabla para especificar cálculo complejo
collapse: closed
![[Pasted image 20230317160055.png]]
```

## Otras notaciones

![[Pasted image 20230317155627.png]]


# Extras

[[Casos de uso]]