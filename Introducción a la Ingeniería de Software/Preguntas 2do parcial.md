### Tema: Verificación y Validación

##### Complete los espacios numerados con el término que corresponda para que la frase sea correcta.

*"A través de la actividad de __(1)__, localizamos un __(2)__ en el código que fue identificado a través de la ejecución de casos de prueba, que evidenciaron __(3)__ en el software. Para su identificación, se utilizó una técnica del tipo __(4),__ ya que solo se consideró la especificación del módulo a verificar."*

> [!question]- Respuesta
> A través de la actividad de *"debugging"*, localizamos un *"defecto"* en el código que fue identificado a través de la ejecución de casos de prueba que evidenciaron *"fallas"* en el software . Para su identificación, se utilizó una técnica del tipo *"caja negra" (o "basada en la especificación")*, ya que solo se consideró la especificación del módulo a verificar.

##### Escriba dos escenarios de prueba para la siguiente historia de usuario “Solicitar recolección de residuos grandes” y su criterio de aceptación correspondiente.

_“Como residente de Montevideo quiero solicitar el servicio de recolección de residuos grandes para no dejar el residuo en la calle sin avisar y evitar posibles multas y para que no me ocupe lugar en mi casa.”_
**Criterio de aceptación:** *Dado que el usuario completa los datos para solicitar el servicio y no se tiene conexión con el sistema de la Intendencia de Montevideo, o no se tiene internet, o bien no hay disponibilidad en la Intendencia para la fecha seleccionada, cuando selecciona la funcionalidad correspondiente a visualizar disponibilidad, entonces se muestra un mensaje de error indicando el problema.*

> [!question]- Respuesta
> ### E1: 
> **Contexto:** El usuario se encuentra en la visualización del formulario y el sistema no tiene conexión con la IM 
> **Evento/Acción del usuario:** El usuario selecciona una fecha y presiona el botón “Ver Disponibilidad” 
> **Resultado esperado:** El sistema despliega un mensaje de error indicando que no hay conexión con el sistema de la IM, que intente de nuevo más tarde.
> ### E2: 
> **Contexto:** El usuario se encuentra en la visualización del formulario y el teléfono no cuenta con conexión a internet
> **Evento/Acción del usuario:** El usuario selecciona una fecha y presiona el botón “Ver Disponibilidad”
> **Resultado esperado:** El sistema despliega un mensaje de error indicando que el teléfono no tiene conexión a internet.
> ### E3:
> **Contexto:** El usuario se encuentra en la visualización del formulario y el sistema de la IM no tiene disponibilidad.
> **Evento/Acción del usuario:** El usuario selecciona una fecha y presiona el botón “Ver Disponibilidad”
> **Resultado esperado:** El sistema despliega un mensaje de error indicando que para la fecha seleccionada la IM no tiene disponibilidad, que intente con otra fecha.
> ### E4 (feliz):
> **Contexto:** El usuario se encuentra en la visualización del formulario, cuenta con conexión a internet y al sistema de la IM
> **Evento/Acción del usuario:** El usuario selecciona una fecha y presiona el botón “Ver Disponibilidad”, elige un horario de los ofrecidos por la IM y confirma la solicitud
> **Resultado esperado:** El sistema confirma a la IM una fecha y horario de recolección de residuos para la dirección del usuario y le muestra al usuario un aviso de confirmación de la solicitud de recolección de residuos con el día y hora seleccionados.

##### Sobre las técnicas de verificación de software, seleccione la opción correcta:
1. El testing exploratorio es una técnica de verificación de caja blanca.
2. El Test Driven Development es una técnica de verificación de caja negra, ya que consiste en generar los casos de prueba antes de que el código esté implementado.
3. La generación de casos de prueba a partir de casos de uso es una técnica de caja blanca, ya que se basa en la estructura del caso de uso.
4. La técnica de valores límites se puede usar al momento de definir los casos de prueba de los escenarios de prueba identificados (sin importar con qué técnica), de forma tal que pruebe los límites de las condiciones que configuran el escenario.

> [!question]- Respuesta
> _4. La técnica de valores límites se puede usar al momento de definir los casos de prueba de los escenarios de prueba identificados (sin importar con qué técnica), de forma tal que pruebe los límites de las condiciones que configuran el escenario._
> 
> La opción 1 es incorrecta porque el testing exploratorio se basa en explorar el software y sus funcionalidades, sin importar cómo éstas están implementadas.
> La opción 2 es incorrecta ya que TDD es una técnica de desarrollo de software, no de verificación.
> La opción 3 es incorrecta ya que la generación de CP a partir de CU se basa en la especificación del software y no en cómo este está construido.

##### Dadas las siguientes afirmaciones sobre las pruebas de <u>regresión</u>, ¿cuáles afirmaciones son correctas?:
1. Pueden ser tanto de caja blanca como de caja negra
2. Se realizan únicamente a nivel de componentes y es deseable que estén automatizadas
3. Su objetivo no se enfoca en las funcionalidades o artefactos nuevos del software
4. Su objetivo es probar versiones anteriores del software
5. Se pueden realizar manualmente

> [!question]- Respuesta
> _Solo las opciones I, III y V son correctas._
> 
> La opción 2 es incorrecta porque las pruebas de regresión pueden ser en cualquier nivel (integración, de sistema, etc) y no solamente unitario. 
> La opción 4 es incorrecta porque su objetivo es probar la nueva versión del software, por más que lo que se está probando sean funcionalidades existentes en versiones anteriores (justamente su objetivo es verificar que lo que antes funcionaba no se haya roto).

##### Sobre drivers y stubs, seleccione la respuesta correcta:
1. Son piezas de software que contienen validaciones y errores respectivamente.
2. Representan el éxito y el fracaso en un caso de prueba respectivamente.
3. Viabilizan ciertas pruebas de piezas de software.
4. Son niveles de pruebas.

> [!question]- Respuesta
> _3. Viabilizan ciertas pruebas de piezas de software._

##### Sobre las pruebas de integración, seleccione la respuesta correcta:
1. Una ventaja si aplico la estrategia bottom up es que no tendré stubs.
2. Los drivers indican dónde automatizar una prueba.
3. Al ser del primer nivel, detectan errores de forma temprana
4. Priorizan el core del sistema, lo cual es lo más crítico.

> [!question]- Respuesta
> _1. Una ventaja si aplico la estrategia bottom up es que no tendré stubs._

##### Sobre el proceso en V, seleccione la respuesta correcta:
1. Sirve para certificar procesos de desarrollo.
2. Viabiliza Test Driven Development.
3. Las metodologías ágiles son una mejor opción porque las actividades de testing no quedan para el final.
4. Incorpora actividades de Verificación y Validación desde el inicio del proceso de desarrollo.

> [!question]- Respuesta
> _4. Incorpora actividades de Verificación y Validación desde el inicio del proceso de desarrollo._

##### Sobre las pruebas de regresión, seleccione la respuesta correcta:
1. Son pruebas automatizadas.
2. Es el nombre que se le asigna a las pruebas repetitivas.
3. Son pruebas que se ejecutan cuando el software cambia.
4. Son pruebas especificas para Machine Learning.

> [!question]- Respuesta
> _3. Son pruebas que se ejecutan cuando el software cambia._

##### Seleccione la opción <u>incorrecta</u> al completar la frase: “Un equipo especializado en pruebas...
1. ... si se basa en las especificaciones, tiende a cometer los mismos errores que el programador.”
2. ... en general, manejan mejor las técnicas de pruebas del sistema que el equipo de desarrollo.”
3. ... conoce los errores más comunes en los que incurre el equipo de desarrollo.”
4. ... conoce el negocio.”

> [!question]- Respuesta
> _1. ... si se basa en las especificaciones, tiende a cometer los mismos errores que el programador.”_

##### Complete la frase, “El testing de sistema...
1. ... es en donde se intenta comprobar que cada componente cumple con los requisitos especificados.”
2. ... es en donde se intenta comprobar que el sistema cumple con los requisitos especificados.”
3. ... es sobre un entorno de pruebas lo más parecido posible al ambiente de desarrollo.”
4. ... es exploratorio, evitando recurrir a la documentación.”

> [!question]- Respuesta
> _2. ... es en donde se intenta comprobar que el sistema cumple con los requisitos especificados.”_

### Tema: Liberación y Evolución

##### Problema práctico: transferencia de desarrollo a mantenimiento

La empresa ACME Ltda se dedica al desarrollo de software y cuenta con varios equipos de desarrollo (quienes ejecutan proyectos para sus clientes) y un equipo de mantenimiento de software (quien realiza la evolución y corrección de errores de los productos que se generaron en los proyectos una vez estos son liberados a producción).

Últimamente ACME ha detectado que, por más que siempre logra entregar proyectos exitosamente a sus clientes, al poco tiempo de transferirlo a su equipo de mantenimiento, los tiempos de respuesta ante incidentes y solicitudes son excesivamente altos.

ACME lo contrata a Ud. como consultor para diagnosticar la situación. Al entrevistarse con el equipo de mantenimiento, Ud. identifica que su principal reclamo es que no suelen recibir la transferencia adecuada por parte de los equipos de desarrollo.

**Mencionar 3 aspectos que entienda relevantes comprobar de la transferencia (artefactos o evidencia de actividades realizadas) para aceptar o descartar este comentario.**

> [!question]- Respuesta
> 1. La transferencia se realiza de forma planificada
> 2. Se entrega última versión del código fuente, base de datos, etc.
> 3. Se cuenta con ambientes de desarrollo y validación para el cliente
> 4. Se realizó capacitación técnica y funcional
> 5. Se cuenta con documentación de principales funcionalidades y arquitectura
> 6. La transferencia se ejecutó tal como fue planificada

##### El proceso de evolución de software puede incluir las siguientes etapas o actividades:
1. Análisis de impacto: se evalúa costo e impacto del cambio como insumo para tomar la decisión de su implementación
2. Planificación de la versión: implica diseñar y ejecutar los casos de prueba para asegurar que el cambio fue implementado correctamente
3. Implementación del cambio: se ejecuta para cambios no urgentes, ya que los urgentes no siguen un proceso de evolución de software
4. Validación de largo plazo: para asegurar que el cambio realmente es necesario, se realiza un análisis de coyuntura y prospección que garantice que la solución propuesta será válida por, al menos, 6 meses.

> [!question]- Respuesta
> _1. Análisis de impacto: se evalúa costo e impacto del cambio como insumo para tomar la decisión de su implementación_
> 
> La opción 2 es incorrecta porque la fase de “Planificación de la versión” tiene entre sus actividades el diseño y ejecución de casos de prueba.
> La opción 3 es incorrecta porque los cambios urgentes, si bien puede seguir otro proceso diferente a los cambios no urgentes, esto no implica que “no siguen un proceso de evolución de software”
> La opción 4 es incorrecta porque “Validación de largo plazo” no es una etapa ni actividad del proceso de evolución. Tampoco es correcto indicar que se debe garantizar una solución que dure al menos 6 meses.

##### Entre los tipos de mantenimiento puede mencionarse:
1. Correctivo, adaptativo, retroactivo
2. Perfectivo, adaptativo, correctivo
3. Retroactivo, correctivo, adaptativo, asertivo
4. Asertivo, correctivo, adaptativo

> [!question]- Respuesta
> _2. Perfectivo, adaptativo, correctivo_
> 
> “Retroactivo” y “asertivo” no son tipos de mantenimiento tal como se presentó en el curso.

##### La refactorización es el proceso de hacer mejoras a un programa para reducir la degradación del sistema al realizar cambios:
1. Esta afirmación es falsa, ya que no considera que todo sistema siempre se degrada.
2. Esta afirmación es verdadera. Entre otras actividades puede considerar mejorar su estructura o reducir su complejidad.
3. Esta afirmación es verdadera. A su vez, para optimizar costos, se recomienda que los procesos de refactorización sean acompañados por tareas de mantenimiento evolutivo.
4. Esta afirmación es falsa, ya que no menciona que la refactorización solo se realiza en contextos de metodologías ágiles.

> [!question]- Respuesta
> _2. Esta afirmación es verdadera. Entre otras actividades puede considerar mejorar su estructura o reducir su complejidad._
> 
> Sobre "3", la recomendación indicada no es correcta, la buena práctica indica que los procesos de refactorización eviten incorporar nuevas funcionalidades.

##### La liberación del sistema comprende actividades … (complete la frase con la opción correcta)
1. … necesarias para comenzar el uso del software luego de construido y probado.
2. … como la verificación, instalación, configuración y entrenamiento de usuarios
3. … como el entrenamiento y apoyo en el uso (siempre y cuando el proyecto no se ejecute bajo metodologías ágiles)
4. … como la adopción del software. Una estrategia de adopción de Big-bang reduce los riesgos más relevantes y permite un "time to market" más eficiente.

> [!question]- Respuesta
> _1. … necesarias para comenzar el uso del software luego de construido y probado._
> 
> La opción 1 es correcta porque concuerda con la definición vista en el curso.
> La opción 2 es incorrecta porque la verificación no es parte de las actividades incluidas en la liberación.
> La opción 3 es incorrecta porque la metodología utilizada no tiene por qué influir en las etapas de liberación. Bajo cualquier tipo de metodología, si el proyecto y/o usuarios lo requieren, es posible realizar tareas de entrenamiento y apoyo en el uso.
> La opción 4 es incorrecta porque una estrategia “Big bang”, si bien puede permitir un mejor “time to market” del producto completo (lo que no implica que sea “mas eficiente”), suele introducir riesgos adicionales.

##### Sobre el modelo en espiral de evolución del software, seleccione la respuesta correcta:
1. Este modelo es aplicable en cualquier escenario de evolución del software.
2. Este modelo de evolución del software es aplicable cuando la misma empresa es responsable del software a lo largo de su vida.
3. Este modelo es aplicable cuando la empresa responsable de la evolución del software es otra diferente de la que lo desarrolló.
4. Este modelo es aplicable cuando se pasa de una metodología tradicional en el desarrollo a una metodología ágil en la evolución.

> [!question]- Respuesta
> _2. Este modelo de evolución del software es aplicable cuando la misma empresa es responsable del software a lo largo de su vida.._

##### Sobre las estrategias de adopción de software se pueden mencionar:
1. Big-bang y estrategias ágiles.
2. Estrategia por capas y estrategias híbridas
3. Procesamiento en paralelo y estrategias híbridas.
4. Estrategias híbridas, estrategias ágiles y estrategia paulatina.

> [!question]- Respuesta
> _3. Procesamiento en paralelo y estrategias híbridas._

##### Seleccione la afirmación <u>incorrecta</u>:
1. Entre los “bad smells” en el código pueden mencionarse el código duplicado y los enunciados switch.
2. Se recomienda rediseñar los métodos demasiado largos para obtener métodos más cortos.
3. La generalidad especulativa es considerada como un “bad smell” en el código.
4. Para que el programa sea más legible se recomienda que el mismo grupo de ítems aparezca en varios lugares del código.

> [!question]- Respuesta
> _4. Para que el programa sea más legible se recomienda que el mismo grupo de ítems aparezca en varios lugares del código._

### Tema: Gestión de proyectos

##### Problema: valor ganado
Dada la siguiente gráfica de valor ganado y costo actual y un $SPI = 1,12$ en la semana 5.

![[Pasted image 20230703212115.png]]

¿Cuál es la situación del proyecto en la semana 3 y en la semana 5 respecto al costo y a la planificación? Justifique.

> [!question]- Respuesta
> CPI (Cost performance index) = VG/CA
> SPI (Schedule performance index) = VG/VP
> 
> #### Semana 3:
> Por la gráfica, el valor ganado (VG) es igual al costo actual (CA) ($CPI = 1$) podemos afirmar que estamos gastando lo planificado.
> Dado que no tenemos datos sobre el valor planificado (VP) o SPI para esta semana, no se puede concluir que sucede con la planificación.
> 
> #### Semana 5:
> Por la gráfica, en la semana 5 el valor ganado (VG) es menor al costo actual (CA), por lo tanto el $CPI < 1$, que indica sobrecostos (estamos gastando más de lo planificado).
> Dado que el $SPI > 1$ en la semana 5, el proyecto está adelantado respecto a lo planificado.

##### Dado el siguiente avance de las historias de usuario durante el sprint:

![[Pasted image 20230703212819.png]]

¿Cuáles afirmaciones son correctas?
1. Al finalizar el día 1 el equipo tiene más de 4 puntos
2. No es posible que a partir del día 5 el equipo disminuya la cantidad de puntos.
3. La cantidad de puntos comprometidos para el sprint es de 37.
4. El sprint burn down chart no muestra el avance real, ya que se modifica cuando se termina una historia.

> [!question]- Respuesta
> _Las afirmaciones 3 y 4 son correctas._
> 
> La opción 1 es incorrecta porque al finalizar el día 1 el equipo tiene 4 puntos (finalizó la historia 1 y 10), no se contabilizan puntos de historias no terminadas.
> La opción 2 es incorrecta. Por ejemplo: el equipo se da cuenta que alguna historia que tenía como finalizada realmente no lo está.
> La opción 3 es correcta porque es la suma de los puntos de las historias del sprint.
> La opción 4 es correcta porque podría ocurrir que según el burndown chart haya un atraso y lo que sucede es que, por ejemplo, hay historias en proceso que no se cerraron aún (como se muestra en la tabla).

##### La empresa donde trabaja fue contratada para desarrollar una aplicación móvil para facilitar e incentivar el acceso a información de relevancia e interés a adultos mayores. Por esta razón es fundamental que la aplicación cuente con altos grados de accesibilidad y usabilidad. 

¿Cuáles afirmaciones son correctas?
1. Un riesgo negativo del proyecto es que la aplicación no cumpla con los estándares de accesibilidad y usabilidad para el público objetivo de la aplicación móvil.
2. Una estrategia a utilizar para gestionar el riesgo es mitigar. Por ejemplo, realizando validaciones de prototipos desechables a adultos mayores desde el inicio del proyecto.
3. Una estrategia posible a utilizar para gestionar el riesgo es evitar. Por ejemplo, utilizando desde el comienzo del proyecto pautas de experiencia de usuario enfocadas en adultos mayores.
4. Una estrategia posible a utilizar para gestionar el riesgo es aceptar, dado que no existe la posibilidad de reducir la probabilidad ni el impacto del riesgo.
5. Que la aplicación no cumpla con altos grados de accesibilidad y usabilidad no es un riesgo del proyecto.

> [!question]- Respuesta
> _Las afirmaciones I y II son correctas._
> 
> La opción (III) es incorrecta porque con la estrategia propuesta no se está evitando el riesgo.
> La opción (IV) es incorrecta y el ejemplo es la opción II.
> La opción (V) es incorrecta porque, dada la realidad planteada, es un riesgo negativo.

##### Dado el siguiente grafo de precedencia:
![[Pasted image 20230703230516.png]]

¿Cuáles afirmaciones son correctas?
1. La holgura de las actividades B, D y F es 0.
2. Existe solo un camino crítico
3. La duración del camino crítico es de 20.
4. Si la actividad D requiere 4 días en vez de 2 no atrasa al proyecto.
5. La duración del proyecto puede acortarse utilizando la técnica de crashing, por ejemplo sobre la actividad A.

> [!question]- Respuesta
> _Las afirmaciones I, y III son correctas._
> 
> La opción (I) es correcta porque la holgura del camino crítico siempre es 0
> La opción (II) es incorrecta porque existen 2 caminos críticos: B, D y F; C y F.
> La opción (III) es correcta.
> La opción (IV) es incorrecta porque esa actividad forma parte del camino crítico.
> La opción (V) es incorrecta porque la técnica de crashing sirve para acortar el cronograma (ej: horas extras, más recursos...) pero en actividades del camino crítico (A no pertenece al camino crítico).

##### En relación a las etapas de formación de un equipo (Tuckman & Jensen, 1977) vistas en el curso. Seleccione la opción correcta:
1. Un equipo debe pasar por las 5 etapas.
2. Si un equipo está en la etapa de Desempeño, no vuelve a la etapa de Turbulencia.
3. Si un equipo está en la etapa de Desempeño, no vuelve a la etapa de Normalización.
4. Ninguna de las anteriores es correcta.

> [!question]- Respuesta
> _4. Ninguna de las anteriores es correcta._
> 
> La opción 1 es incorrecta porque, por ejemplo puede pasar que el equipo nunca llegue a la etapa de desempeño.
> La opción 3 es incorrecta porque un equipo puede estar en una etapa de desempeño y por algún motivo un integrante clave del equipo se va, luego de esto puede pasar que el equipo vuelva a la etapa de normalización.
> La opción 2 es incorrecta porque puede pasar que si entra otra persona al equipo, haya un periodo de adaptación y el equipo vuelve a la etapa de turbulencia.

##### Acerca de un correcto WBS puede decirse que:
1. Debe identificar todos los entregables de un proyecto e incluir todo el trabajo necesario para alcanzar esos entregables.
2. La descomposición no abarca el 100% del alcance del proyecto.
3. Debe indicar claramente la dependencia entre los elementos de un mismo nivel para poder completar el nivel superior.
4. Se completa cuando el nivel inferior tiene cada nodo un solo hijo.

> [!question]- Respuesta
> _1. Debe identificar todos los entregables de un proyecto e incluir todo el trabajo necesario para alcanzar esos entregables._
> 
> La opción 2 es incorrecta porque es una descomposición jerárquica del alcance total del trabajo.
> La opción 3 es incorrecta porque el WBS NO está basada en dependencias de secuencia o tiempo entre sus componentes.
> La opción 4 es incorrecta porque se completa cuando se cubre el total de paquetes de trabajo para el nivel de abstracción elegido. Además, no deben existir nodos con un solo hijo.

##### Si se cuenta con la siguiente estimación de las tareas de un proyecto y sus respectivas dependencias, ¿cuál es la duración del camino crítico?

![[Pasted image 20230704222740.png]]

1. 31
2. 37
3. 53
4. 31 y 37, ya que existen dos caminos críticos.

> [!question]- Respuesta
> _2. 37_

##### El equipo de desarrollo utilizó la técnica de planning poker para estimar las historias de usuario. Seleccione la opción correcta:
1. Se realiza una reunión, en la que cada integrante, por turnos, va mostrando su tarjeta y explicando el porqué de su estimación.
2. Uno de los objetivos del product owner en el proceso de estimación es aclarar dudas que surjan de las historias de usuario.
3. El product owner puede aceptar o rechazar la estimación dada por el equipo de desarrollo, ya que es la persona que más conoce del producto a construir y el esfuerzo necesario.
4. Cuando no se llega a un acuerdo respecto a la estimación de una historia de usuario entre los integrantes de un equipo en la primera ronda de estimación, se realiza un promedio entre las estimaciones realizadas para dicha historia de usuario.

> [!question]- Respuesta
> _2. Uno de los objetivos del product owner en el proceso de estimación es aclarar dudas que surjan de las historias de usuario._

##### Con respecto a la gestión de riesgos en los proyectos de software, ¿cuáles afirmaciones son correctas?
1. El proceso de gestión de riesgos es un proceso iterativo que se realiza únicamente en las etapas iniciales del proyecto.
2. La gestión de los riesgos tiene como objetivo aumentar la probabilidad y el impacto de los eventos positivos y disminuir los de los adversos.
3. Se puede realizar tanto un análisis cuantitativo como uno cualitativo de los riesgos.
4. Aceptar una amenaza implica identificar el riesgo y decidir no tomar medidas a menos que el riesgo se materialice.
5. Si se agregan actividades al proyecto para reducir los riesgos, estas actividades deberían ser consideradas en el WBS.

> [!question]- Respuesta
> _2, 3, 4 y 5 son correctas_

##### Un equipo está trabajando en un proyecto de 25 semanas de duración y un costo previsto de USD 30.000. Está aplicando la técnica del valor ganado. En la semana 12, calculan el SPI y el valor obtenido es 1,2. Seleccione la opción correcta:
1. El proyecto está yendo más rápido que lo planificado.
2. (1) y, de seguir con la misma tendencia, el proyecto terminaría antes de la semana 20.
3. El proyecto está costando menos de lo planificado.
4. (3) y, de seguir con la misma tendencia, el proyecto va a costar menos de USD 27.000.

> [!question]- Respuesta
> _1. El proyecto está yendo más rápido que lo planificado._
> 
> Porque SPI > 1.
> No es la 2 porque con este SPI, el valor ganado a la semana 20 sería 28.800 usd (casi pero no llega).
> $SPI_{12} = EV_{12} / PV_{12}$ -> $EV_{12} = PV_{12} * SPI_{12} = 12*(30k/25) * 1.2 = 17280$
> -> $EV_{20} = EV_{12} / 12 * 20 = 28800$ 

##### Dado un sprint de 10 días en el que se planifican completar 11 historias de usuario, y el siguiente % de avance:

![[Pasted image 20230704230329.png]]

Los puntos pendientes aún por concretar (para dibujar la gráfica de burn-down) al finalizar el día 4 son:
1. 23
2. 19,5
3. 40
4. 20,5

> [!question]- Respuesta
> _1. 23_
> 
> Contamos puntos de historias sin terminar:
> 3+5+2+5+5+3=23

##### Respecto al cronograma:
1. La duración del proyecto siempre puede acortarse con las técnicas de fast tracking o crashing, sin incrementar los costos.
2. La nivelación de recursos consiste en nivelar todos los caminos a la extensión del camino crítico.
3. Solo se puede nivelar recursos moviendo actividades sin alterar la duración del camino crítico.
4. Puede no ser posible acortar la duración del proyecto mediante la técnica de fast tracking si hay dependencias «duras» que, debido a su naturaleza, no se pueden violar.

> [!question]- Respuesta
> _4. Puede no ser posible acortar la duración del proyecto mediante la técnica de fast tracking si hay dependencias «duras» que, debido a su naturaleza, no se pueden violar._


### Tema: Gestión de la Configuración

##### Una de las actividades del la Gestión de la configuración es la gestión del cambio. Indique las características principales de un proceso de gestión de cambios exitoso.
1. El proceso debe ser genérico para todo tipo de cambios y es requisito incluir un comité de control de cambios.
2. Para cada cambio se debe analizar el costo y los beneficios, e identificar los componentes que serán modificados. En particular, los cambios urgentes requieren un proceso muy ágil.
3. En cualquier tipo de proyecto el cliente siempre debe ser parte del comité de control de cambios.
4. Cuando un sistema fue liberado y está en funcionamiento, todas las definiciones acerca de qué cambios realizar y cuándo hacerlos es responsabilidad del equipo de mantenimiento.

> [!question]- Respuesta
> _2. Para cada cambio se debe analizar el costo y los beneficios, e identificar los componentes que serán modificados. En particular, los cambios urgentes requieren un proceso muy ágil._
> 
> La opción 1 es incorrecta porque el proceso no puede ser genérico, porque depende de la realidad del proyecto, producto y tipo de cambio (por ejemplo, deben existir reglas específicas para los cambios urgentes).
> La opción 3 es incorrecta porque, por ejemplo, cuando no es un software a medida para un cliente no corresponde.
> La opción 4 es incorrecta porque incluso dentro de un esquema de desarrollo ágil debe existir un proceso que garantice que exista una priorización que incluya una mirada de más alto nivel o del negocio.

##### Complete la siguiente frase con la opción correcta.
_En un proyecto crítico para una organización se pone mucho énfasis en mantener una adecuada gestión de la configuración, en particular…_

1. en lo que refiere a la integración continua, dado que este proceso toma muy poco tiempo en sistemas grandes, de forma que los errores introducidos se identifiquen rápidamente.
2. en lo que refiere a las pruebas de aceptación y de usabilidad, mediante instancias con un grupo de usuarios previamente elegido.
3. en lo que refiere al proceso de armado del sistema (build), para que los cambios a las versiones por distintos desarrolladores no interfieran entre sí.
4. en lo que refiere al control de versiones, realizando el seguimiento de las diferentes versiones de los componentes del sistema y, entre otros, teniendo un registro del histórico de cambios.

> [!question]- Respuesta
> _4. en lo que refiere al control de versiones, realizando el seguimiento de las diferentes versiones de los componentes del sistema y, entre otros, teniendo un registro del histórico de cambios._
> 
> La opción 1 es incorrecta porque en sistemas grandes este proceso puede llevar mucho tiempo.
> La opción 2 es incorrecta porque las actividades no corresponden a la gestión de la configuración.
> La opción 3 es incorrecta porque el control de cambios entre versiones, corresponde a la gestión de versiones y no al armado del sistema.

##### En un sistema de control de versiones centralizado

1. los usuarios deben copiar en su espacio de trabajo cada uno de los componentes que quieren modificar.
2. no se permite que dos usuarios copien el mismo componente y trabajen cada uno en una versión distinta de aquel.
3. el sistema crea siempre en el espacio de trabajo de cada usuario una copia del repositorio master del proyecto.
4. si dos usuarios descargan y trabajan sobre el mismo componente, cuando cada uno termina y sube el componente modificado al repositorio, el último en subirse puede sobrescribir la versión del otro.

> [!question]- Respuesta
> _los usuarios deben copiar en su espacio de trabajo cada uno de los componentes que quieren modificar._

##### El proceso de gestión de cambios descripto en la siguiente imagen, es apropiado en el contexto de:

![[Pasted image 20230704232722.png]]

1. una metodología ágil
2. un cambio durante el desarrollo sobre un artefacto que aún no ha entrado en línea base
3. un cambio durante el desarrollo sobre un artefacto que ya está en línea base
4. todos los anteriores

> [!question]- Respuesta
> _un cambio durante el desarrollo sobre un artefacto que ya está en línea base_








