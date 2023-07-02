Como administrador, debe dividir el trabajo en partes y asignar éstas a los miembros del equipo del proyecto, anticipar los problemas que pudieran surgir y preparar posibles soluciones a tales inconvenientes.

## En las etapas del proyecto

La planeación se presenta durante tres etapas en un ciclo de vida del proyecto:
1. <u>En la etapa de propuestas,</u> cuando se presenta una licitación con vistas a obtener un contrato para desarrollar o proporcionar un sistema de software. En esta etapa es necesario un plan para ayudarle a decidir si cuenta con los recursos para completar el trabajo y a calcular el precio que debe cotizar al cliente.
2. <u>Durante la fase de inicio,</u> cuando debe determinar quién trabajará en el proyecto, cómo se dividirá el proyecto en incrementos, cómo se asignarán los recursos a través de su compañía, etcétera. Aquí, se cuenta con más información que en la etapa de la propuesta y, por lo tanto, se pueden afinar las estimaciones iniciales.
3. <u>Periódicamente a lo largo del proyecto,</u> cuando el plan se modifica a la luz de la experiencia obtenida y la información del monitoreo del avance del trabajo. Se aprende más acerca del sistema a implementar y de las capacidades del equipo de desarrollo. Esta información permite hacer estimaciones más precisas sobre cuánto tardará el trabajo. Más aún, es probable que los requerimientos del software cambien y esto, por lo general, significa que debe modificarse la división del trabajo y extenderse el plazo.



# 23.1 Fijación de precio al software

Cuando se presenta una licitación para obtener un contrato, hay que calcular el precio que se propondrá al cliente para el desarrollo del software.
Siempre habrá que calcular los costos del software de manera objetiva, con la finalidad de predecir con precisión el costo para el desarrollo del software.

Principales parámetros:
- costos de esfuerzo (los costos de pagar a los ingenieros y administradores de software)
- costos de hardware y software, incluido el mantenimiento
- costos de viajes y capacitación

Para la mayoría de los proyectos, el mayor costo es el primer rubro. Debe estimarse el esfuerzo total (en meses-hombre) que es probable se requiera para completar el trabajo de un proyecto.

En principio, el precio de un producto de software a un cliente es simplemente el costo del desarrollo más las ganancias para el diseñador. Sin embargo, en la práctica, no es tan simple. Cuando se calcula un precio, hay que hacer consideraciones más amplias de índole organizacional, económica, política y empresarial, como las mostradas en la figura:

![[Pasted image 20230530163301.png]]

Dadas las precisiones organizacionales implicadas, decidir sobre un precio de proyecto debe ser una actividad <u>grupal</u> que incluya al personal de marketing y ventas, así como altos ejecutivos y administradores de proyecto.

## “cotizar para ganar”
... leer ...

# 23.2 Desarrollo dirigido por un plan

Se elabora un plan de proyecto que registra el trabajo que se va a realizar, quién lo efectuará, el calendario de desarrollo y los productos de trabajo. Los administradores utilizan el plan para apoyar la toma de decisiones del proyecto y también como una forma de medir el progreso.
Pueden considerarse como la manera tradicional de administrar grandes proyectos de desarrollo de software. Contrasta con el desarrollo ágil, en el que muchas decisiones que afectan el desarrollo se retrasan y se hacen posteriormente.

El mejor enfoque a la planeación del proyecto incluye una mezcla juiciosa de desarrollo basado en un plan y ágil. 

## 23.2.1 Planes de proyecto

En el plan de proyecto se establecen los recursos disponibles para el proyecto, la división del trabajo y un calendario para realizar el trabajo. El plan debe identificar los riesgos para el proyecto y el software en desarrollo, así como el enfoque que se toma para la gestión del riesgo.

Incluyen:
1. <u>Introducción.</u> Ésta describe brevemente los objetivos del proyecto y establece las restricciones que afectan la administración del proyecto.
2. <u>Organización del proyecto.</u> Ésta refiere la forma en que está organizado el equipo de desarrollo, las personas implicadas y sus roles en el equipo.
3. <u>Análisis de riesgo.</u> Detalla los posibles riesgos del proyecto, la probabilidad de que surjan dichos riesgos y las estrategias propuestas para reducir el riesgo.
4. <u>Requerimientos de recursos de hardware y software.</u> Detallan el hardware y el software de soporte requeridos para realizar el desarrollo. Pueden incluirse estimaciones de los precios y el calendario de entregas de las compras necesarias.
5. <u>División del trabajo.</u> Establece la división del proyecto en actividades e identifica los plazos y las entregas asociados con cada actividad.
6. <u>Calendario del proyecto.</u> Indica las dependencias entre las actividades, el tiempo estimado requerido para alcanzar cada plazo y la asignación de personal a las actividades.
7. <u>Mecanismos de monitorización y reporte.</u> Esta sección define los informes administrativos que deben producirse, cuándo tienen que elaborarse y los mecanismos de monitorización del proyecto que se usarán.

# 23.3 Calendarización de proyectos

La <u>calendarización de proyectos</u> es el proceso de decidir cómo se organizará el trabajo en un proyecto como tareas separadas, y cuándo y cómo se ejecutarán dichas tareas.
Se estima **el tiempo** para completar cada tarea, **el esfuerzo** requerido y **quién trabajará** en las tareas identificadas. También hay que **estimar los recursos necesarios** para completar cada tarea (como el espacio de disco requerido en un servidor), el tiempo que se necesitará el hardware especializado (como un simulador) y cuál será el presupuesto de viajes.

Tanto los procesos basados en un plan como los ágiles precisan de un calendario de proyecto inicial, aunque el nivel de detalle puede ser menor en un plan de proyecto ágil. Este calendario inicial se utiliza para planear cómo se asignarán las personas al proyecto y comprobar el avance de éste frente a los compromisos contractuales.

Si un proyecto está técnicamente avanzado, las estimaciones iniciales seguramente serán optimistas aun cuando se trate de considerar todas las eventualidades.

Los calendarios deben actualizarse continuamente conforme se disponga de mejor información sobre el avance. Si el proyecto a calendarizar es similar a un proyecto anterior, pueden reutilizarse las estimaciones previas.

Al evaluar calendarios hay que tomar en cuenta la posibilidad de que las cosas salgan mal. Algunos inconvenientes de la calendarización:
- Fechas irreales o establecidas arbitrariamente/externamente
- Requerimientos variables del cliente
- Subestimación de dificultades
- Riesgos
- Dificultades humanas no predecibles
- Fallas en la comunicación
- Fallas en la administración de retrasos

Una buena regla empírica es estimar que nada saldrá mal, luego ampliar la estimación para enfrentar problemas anticipados. También puede añadirse a la estimación un factor de contingencia (entre 30 y 50%) para hacer frente a problemas no anticipados.

## 23.3.1 Representación del calendario

Los calendarios de proyecto pueden representarse simplemente en una tabla u hoja de cálculo que indique las tareas, el esfuerzo, la duración esperada y las dependencias entre las tareas.

![[Pasted image 20230602135433.png]]

Sin embargo, este modo de representación dificulta visualizar las relaciones y dependencias entre las diferentes actividades. 
Las representaciones gráficas son más fáciles de leer y entender. Existen dos tipos de representación que se usan comúnmente: 
1. <u>Gráficas de barras,</u> basadas en el calendario, las cuales señalan al responsable de cada actividad, el tiempo transcurrido previsto y la fecha en que se programó el inicio y el fin de la actividad. Las gráficas de barras se llaman gráficas de Gantt.
2. <u>Redes de actividad,</u> diagramas de red que muestran las dependencias entre las diferentes actividades que constituyen un proyecto.

Por lo general, una herramienta de planeación se usa para gestionar la información del calendario del proyecto. Generan automáticamente gráficas de barras y de actividad.

Las actividades de proyecto son el **elemento de planeación básico**.
Cada actividad cuenta con:
1. Una duración en días o meses calendario.
2. Una estimación del esfuerzo, la cual refleja el número de días-hombre o meses-hombre para completar el trabajo.
3. Un plazo dentro del cual debe completarse la actividad.
4. Un punto final definido.

El plan también deberá definir los hitos; esto es, cada etapa del proyecto en la que puede realizarse una valoración del avance. Los hitos pueden asociarse con una sola tarea o con grupos de actividades relacionadas. Por ejemplo, en la figura de arriba, el hito M1 se asocia con la tarea T1, mientras que el hito M3 se asocia con un par de tareas, T2 y T4.
Un *tipo* especial de hito es la producción de un entregable del proyecto. Un entregable es un producto de trabajo que se entrega al cliente. Es el resultado de una fase significativa del proyecto, como la especificación o el diseño.

La figura siguiente toma la información de la figura anterior y presenta el calendario del proyecto en formato gráfico. Es una gráfica de barras que muestra un calendario de proyecto y las fechas de inicio y terminación de las actividades.

![[Pasted image 20230602140044.png]]

A partir de la asignación de personal se produce la siguiente gráfica:
![[Pasted image 20230602140205.png]]

# 23.4 Planeación ágil

Tienen un enfoque de dos etapas para la planeación, las cuales corresponden a la fase de arranque en el desarrollo dirigido por un plan y la planeación del desarrollo:
1. Planeación de la entrega (**release**), que prevé con muchos meses de antelación y decide sobre las características que deben incluirse en una entrega de un sistema.
2. Planeación de la iteración, la cual tiene un panorama a corto plazo y se enfoca en la planeación del siguiente incremento de un sistema.

Existen dos beneficios importantes a partir de este enfoque a la asignación de tareas:
1. Todo el equipo consigue un panorama de las tareas a completar en una iteración. Por lo tanto, todos tienen una comprensión de lo que hacen otros miembros del equipo y saben a quién dirigirse si se identifican dependencias de tarea.
2. Los desarrolladores individuales eligen las tareas a implementar; no son simplemente tareas asignadas por un administrador de proyecto. En consecuencia, tienen un sentido de propiedad sobre dichas actividades y es probable que esto los motive a completar la tarea.

```ad-info
title: Figura planeación en XP
![[Pasted image 20230602140350.png]]
```

Una gran dificultad en la planeación ágil es que depende del involucramiento y la disponibilidad del cliente. Suele ser difícil de organizar, pues los representantes del cliente en ocasiones deben dar prioridad a otros trabajos. Los clientes tal vez estén más familiarizados con planes de proyecto tradicionales y encuentren difícil participar en un proyecto de planeación ágil.

# 23.5 Técnicas de estimación

Existe tanta incertidumbre que es imposible estimar con precisión los costos de desarrollo del sistema durante las primeras etapas de un proyecto. Incluso existe una dificultad fundamental en la valoración de la precisión de diferentes enfoques a la estimación del costo y esfuerzo. Con frecuencia, las estimaciones del proyecto se autosatisfacen. La estimación se utiliza para definir el presupuesto del proyecto, y el producto se ajusta para que se cumpla la cifra del presupuesto. Un proyecto que está dentro de presupuesto puede lograr esto a expensas de las características en el software a desarrollar.

Las organizaciones necesitan hacer evaluaciones de esfuerzo y costo del software. Existen dos tipos de técnicas para ello:
1. **Técnicas basadas en la experiencia:** la estimación de los requerimientos de esfuerzo futuro se basan en la experiencia del administrador con proyectos anteriores y el dominio de aplicación. En esencia, el administrador emite un juicio informado de cuáles serán los requerimientos de esfuerzo.
2. **Modelado algorítmico de costo:** en este caso se usa un enfoque formulista para calcular el esfuerzo del proyecto con base en estimaciones de atributos del producto (por ejemplo, el tamaño), así como las características del proceso (por ejemplo, la experiencia del personal implicado).

En ambos casos es necesario usar el juicio para evaluar el esfuerzo directamente, estimar el proyecto y las características del producto. En la fase de arranque de un proyecto, dichas estimaciones tienen un amplio margen de error. Durante la planeación del desarrollo, las estimaciones se vuelven cada vez más precisas conforme avanza el proyecto.

Las técnicas basadas en la experiencia dependen de la experiencia del administrador de proyectos anteriores y el esfuerzo real empleado en dichos proyectos en actividades que se relacionan con el desarrollo del software. Por lo general, se identifican los entregables que hay que producir en un proyecto y los diferentes componentes de software o sistemas a desarrollar. Esto se documenta en una hoja de cálculo, se les estima de manera individual y se calcula el esfuerzo total requerido. Por lo general, ayuda a que un grupo de personas se involucre en la estimación del esfuerzo y a pedir a cada miembro del grupo que explique sus estimaciones. Con frecuencia, esto revela factores que otros no consideraron y entonces se itera hacia una estimación grupal consensuada.

## 23.5.1 Modelado algorítmico de costos

El modelado algorítmico de costos utiliza una fórmula matemática para predecir los costos del proyecto con base en estimaciones del tamaño del proyecto, el tipo de software a desarrollar, y otros factores de equipo, proceso y producto. Un modelo algorítmico de costo puede elaborarse al analizar los costos y atributos de los proyectos completados, y encontrar la fórmula de ajuste más cercana a la experiencia real.

Los modelos algorítmicos para estimar el esfuerzo en un proyecto de software se basan principalmente en una fórmula sencilla:
$$Esfuerzo = A \times Tamaño^B \times M$$
A es un factor constante que depende de las prácticas locales de la organización y el tipo de software que se desarrolla. El tamaño puede ser una valoración del tamaño del código del software o una estimación de la funcionalidad expresada en puntos de función o de aplicación. El valor del exponente B se encuentra por lo general entre 1 y 1.5. M es un multiplicador que se integra al combinar atributos de procesos, producto y desarrollo, tales como los requerimientos de confiabilidad para el software y la experiencia del equipo de desarrollo.

El número de líneas de código fuente (SLOC) en el sistema entregado es la métrica de tamaño fundamental que se utiliza en muchos modelos algorítmicos de costo.

Los distintos problemas de la estimación se basan en la complejidad, el tamaño, los riesgos y la información histórica. 
Técnicas de descomposición:
- Basadas en el problema: Divide el software en base a qué problemas resuelve
- Basadas en el proceso: Se descompone en base al proceso (análisis, diseño, etc)

## 23.5.2 El modelo COCOMO II

El modelo de costos COCOMO II es un modelo de costos algorítmico maduro que toma en cuenta atributos de proyecto, producto, hardware y personal cuando se formula una estimación del costo.

[LEER DEL LIBRO]

## 23.5.3 Duración del proyecto y asignación de personal

Además de estimar los costos globales de un proyecto y el esfuerzo que se requiere para desarrollar un sistema de software, los administradores de proyecto también deben estimar cuánto tardará el software en desarrollarse, y cuándo el personal necesitará trabajar en el proyecto.

El modelo COCOMO incluye una fórmula para estimar el tiempo calendario requerido para completar un proyecto:
$$TDEV = 3 \times (PM)^{0.33 + 0.2(B-1.01)} $$
- TDEV es el calendario nominal para el proyecto, en meses calendario, que ignora cualquier multiplicador relacionado con el calendario del proyecto. 
- PM es el esfuerzo calculado por el modelo COCOMO. 
- B es el exponente relacionado con la complejidad, como se estudió en la sección 23.5.2. 

Si B = 1.17 y PM = 60, entonces TDEV = 3 * $(60)^{0.36}$ = 13 meses

Sin embargo, no necesariamente son lo mismo el calendario de proyecto nominal predicho por el modelo COCOMO y el calendario requerido por el plan del proyecto.

[LEER DEL LIBRO]

# Resumen

Para calcular el costo de un proyecto, se usan tres parámetros: costo de esfuerzo (salarios), costo de hardware y software y costos de entrenamiento y viajes. El primero suele ser el mayor. El proyecto siempre cambia durante el desarrollo. Si se usa un método ágil, igual se necesita un plan para comenzar, pero no es tan detallado. Para determinar el precio, se puede hacer en base a un precio que la compañía supone que el cliente espera pagar.

Un plan de proyecto incluye la organización del mismo, análisis de riesgo, recursos, división del trabajo y tiempos, entre otros. Al hacer el plan, hay que tener en cuenta restricciones de tiempo y recursos. Las estimaciones deben ser realistas, considerando que siempre surgen problemas, y tener planes de contingencia. Hay que ir revisando el progreso con las metas logradas. Si hay problemas serios que pueden provocar muchos retrasos, hay que replanificar el proyecto, que puede implicar una nueva negociación con el cliente, e incluso una cancelación del proyecto si no se logra un acuerdo.

Al aumentar la complejidad del software, aumentan los costos. Los puntos de aplicación en COCOMO se calculan a partir de la cantidad de pantallas separadas que se muestran, la cantidad de reportes producidos, la cantidad de módulos en lenguajes imperativos y la cantidad de líneas de lenguaje de scripting o programación de base de datos. En cuanto al reuso, se consideran elementos de caja negra (se puede usar sin entender cómo se implementa) y blanca (hay que hacer cambios). Se mide el esfuerzo de decidir si un componente puede ser reusado, entender el código y modificarlo. En el post-arquitectura, se vuelven a evaluar las líneas de código.

Las categorías de los riesgos pueden superponerse. Los riesgos dependen del tipo de proyecto y del entorno. Algunos ejemplos comunes de riesgos son cambios de personal o de administradores, de requerimientos, de tecnología o retrasos en la especificación. La gestión de administración de riesgos debe ser documentada en grandes proyectos. El proceso es menos formal en desarrollo ágil. La probabilidad e impacto de un riesgo pueden cambiar. Lo preferible sería evitar el riesgo, pero como no siempre es posible, se tiene que recurrir a una de las otras estrategias.

En la jerarquía de Maslow, los administradores deben satisfacer las necesidades superiores de sus empleados: sociales (dar oportunidad de conocer a sus colegas), estima (mostrar que su trabajo se valora) y autorrealización (responsabilidades de trabajo para que puedan mejorar sus habilidades). Las personas orientadas a la interacción prefieren trabajar en equipo, a diferencia de las orientadas a tareas o sí mismas, que prefieren trabajar solas. Se puede tener varias de estas motivaciones, pero siempre hay una dominante.
