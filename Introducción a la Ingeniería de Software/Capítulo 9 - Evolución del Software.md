## ¿Por qué evoluciona el software?
- Adaptarse al entorno operativo
- Adaptarse al usuario
- Mejorar en el desempeño
- Mejorar en funcionalidades
- Corrección de errores

Los sistemas de software operativos necesitan evolucionar para <u>seguir siendo útiles</u>. Los cambios empresariales, las expectativas de los usuarios, los cambios en las plataformas de hardware y software, y la competencia impulsan la necesidad de <u>modificaciones</u>, <u>correcciones de errores</u> y <u>mejoras de rendimiento</u>.

### Importancia de la evolución
Los grandes sistemas de software, como los militares o los de infraestructuras, suelen tener una vida útil de 30 años o más. Los sistemas empresariales pueden tener más de 10 años. La longevidad se debe a la necesidad de recuperar la inversión realizada en el desarrollo del software.

Las empresas invierten en cambios de software para mantener el valor de sus activos empresariales críticos. El coste de mantenimiento de los sistemas existentes suele ser mayor que el de desarrollo de los nuevos. Los estudios indican que entre el 60% y el 90% de los costes de software están asociados a la evolución.

### Sistemas de sistemas
La evolución del software es más compleja en los sistemas empresariales que forman parte de un "sistema de sistemas" más amplio. Los cambios en un sistema pueden afectar a otros sistemas dentro del entorno operativo, lo que requiere un análisis cuidadoso del impacto más amplio.

### Proceso en espiral
La ingeniería de software sigue un proceso en espiral durante toda la vida útil del sistema. Se crean versiones periódicas para incorporar cambios y actualizaciones basados en la evolución de los requisitos. El desarrollo de versiones posteriores puede comenzar incluso antes de que se publique la versión actual.

En general, los sistemas de software tienen una larga vida útil y requieren una evolución y adaptación continuas para satisfacer las necesidades cambiantes de la empresa y los factores del entorno. La ingeniería del software sigue un proceso en espiral continuo para apoyar estos sistemas en evolución.

![[Pasted image 20230523202507.png]]

#### Reducción del tiempo entre iteraciones:
En la última década, el tiempo entre iteraciones de la espiral de desarrollo de software ha disminuido significativamente. Con la llegada de Internet y las presiones de la competencia, algunas aplicaciones y sistemas basados en la web lanzan ahora nuevas versiones en cuestión de semanas, impulsadas por la necesidad de responder rápidamente a los comentarios de los usuarios.

### Proceso de evolución y mantenimiento (o servicio)
Rajlich y Bennett proponen una visión alternativa del ciclo de vida de la evolución del software para sistemas empresariales. 
- <u>Evolución</u> → el sistema vive en un ciclo donde se encuentra en su uso operacional y evoluciona cuando los nuevos requisitos son propuestos e implementados en el sistema.
- <u>Servicio</u> → el software sigue siendo útil pero los únicos cambios realizados son para mantenerlo operativo. Por ejemplo: corrección de errores y cambios producto de modificaciones en el entorno del software. No se agregan nuevas funcionalidades.
- <u>Retiro gradual</u> → el software puede ser utilizado todavía pero no se realizan más cambios sobre el mismo.

Estas fases se solapan entre sí.

![[Pasted image 20230523202809.png]]

Durante la fase de <u>evolución</u>, las partes interesadas proponen y aplican numerosos cambios para satisfacer los requisitos cambiantes. Sin embargo, a medida que el software sufre modificaciones, su estructura tiende a degradarse, lo que conlleva mayores costes para los cambios del sistema. Esta degradación suele observarse al cabo de unos años de uso, coincidiendo con la necesidad de actualizar el hardware y el sistema operativo. 

A medida que el software madura, alcanza un punto de transición en el que implementar cambios significativos y nuevos requisitos resulta menos rentable, lo que marca el **_paso de la evolución al mantenimiento_**.

En la fase de <u>mantenimiento</u>, el software sigue siendo funcional pero sólo recibe cambios tácticos menores. Las organizaciones suelen empezar a considerar la sustitución del software durante esta fase. En la fase final, se realizan cambios esenciales en el software y los usuarios deben solucionar los problemas detectados. Finalmente, el software se retira y deja de utilizarse, lo que puede acarrear gastos adicionales para transferir los datos a un sistema de sustitución más reciente.

### Transición fluida en la evolución del software
Cuando la misma empresa es responsable del software durante toda su vida útil, se produce una transición fluida del desarrollo a la evolución. Se aplican sistemáticamente los mismos métodos y procesos de desarrollo de software. Este modelo se utiliza habitualmente para productos de software y aplicaciones.

### Modelo diferente para la evolución de software a medida
La evolución del software a medida suele seguir un modelo diferente. El cliente del sistema puede contratar inicialmente a una empresa de software para el desarrollo, pero más tarde se hace cargo del soporte y la evolución utilizando su propio personal. Otra posibilidad es firmar un contrato independiente con otra empresa de software para el soporte y la evolución del sistema.

### Discontinuidades en el proceso de evolución
En situaciones en las que diferentes empresas participan en las fases de desarrollo y evolución, puede haber discontinuidades en el proceso de evolución. Es posible que los requisitos y los documentos de diseño no se transfieran sin problemas de una empresa a otra. Las fusiones, reorganizaciones y la herencia de software de otras empresas pueden complicar aún más el proceso.

### El mantenimiento como proceso diferenciado
Cuando la transición del desarrollo a la evolución no es fluida, el proceso de cambiar el software después de la entrega se denomina mantenimiento del software. El mantenimiento implica actividades adicionales, como la comprensión del programa, junto con las actividades habituales de desarrollo de software.

# 9.1 Procesos de evolución

Los procesos de evolución del software varían dependiendo del tipo de software que se mantiene, de los procesos de desarrollo usados en la organización y de las habilidades de las personas que intervienen.

Las propuestas de cambio al sistema son el motor para la evolución del sistema en todas las organizaciones. Estos cambios provienen de:
- requerimientos existentes que no se hayan implementado en el sistema
- nuevos requerimientos
- reportes de bugs
- de nuevas ideas del equipo de desarrollo

![[Pasted image 20230523203849.png]]

La identificación de los cambios y la evolución continúan a lo largo del tiempo de vida del sistema.

Se deben identificar y relacionar los componentes que son afectados por un cambio, permitiendo así estimar el costo y el impacto del cambio.

La siguiente figura muestra un panorama del proceso de evolución, el cual incluye actividades fundamentales de análisis del cambio, planeación de la versión, implementación del sistema y su liberación a los clientes.
![[Pasted image 20230523203858.png]]

### Análisis de impacto
El costo y el impacto de dichos cambios se valoran para saber qué tanto resultará afectado el sistema por el cambio y cuánto costaría. 
Se planifica una nueva versión con los cambios aceptados.

### Planeación de la versión
Si los cambios propuestos se aceptan, se planea una nueva versión del sistema. Durante la planeación de la versión se consideran todos los cambios propuestos (reparación de fallas, adaptación y nueva funcionalidad). Entonces se toma una decisión acerca de cuáles cambios implementar en la siguiente versión del sistema.

### Liberación del sistema
Después de implementarse, se valida y se libera una nueva versión del sistema. 
Luego, el proceso se repite con un conjunto nuevo de cambios propuestos para la siguiente liberación.

### Implementación del cambio
Es posible considerar la implementación del cambio como una iteración del proceso de desarrollo, donde las revisiones al sistema se diseñan, se aplican y se ponen a prueba. 
Durante el proceso, se analizan los requerimientos y pueden surgir modificaciones a los cambios propuestos.

Cuando el equipo de mantenimiento es diferente al de desarrollo, la implementación incluye una comprensión del programa.

De manera ideal, la etapa de implementación del cambio de este proceso debe modificar la especificación, el diseño y la implementación del sistema para reflejar los cambios al mismo:
![[Pasted image 20230523203908.png]]

### Cambios urgentes
En ocasiones, las peticiones de cambio se relacionan con problemas del sistema que tienen que enfrentarse de manera urgente. Surgen básicamente por tres razones:
1. Si ocurre una falla seria del sistema que deba repararse para permitir que continúe la operación normal.
2. Si los cambios a los sistemas que operan el entorno tienen efectos inesperados que perturban la operación normal.
3. Si hay cambios no anticipados a la empresa que opera el sistema, como el surgimiento de competidores nuevos o la introducción de una nueva legislación que afecte al sistema.

En vez de modificar los requerimientos y el diseño, se puede hacer una reparación de emergencia al programa para resolver el problema de inmediato:
![[Pasted image 20230523203913.png]]
Sin embargo, el riesgo es que los requerimientos, el diseño del software y el código se vuelvan inconsistentes. Se elige una solución <u>rápida y viable</u>, en lugar de la mejor solución en cuanto a la estructura del sistema.

Luego de una reparación de emergencia, se debería refactorizar el código para mejorarlo.

### Ágiles
Los métodos y procesos ágiles se utilizan tanto para la evolución del programa como para su desarrollo. Hacer la transición del desarrollo ágil a la evolución posterior a la entrega no debería tener complicaciones.

Las pruebas de regresión automatizadas son muy valiosas cuando se realizan cambios en el sistema.
Los cambios pueden ser expresados como historias de usuario adicionales.

Sin embargo, es posible que surjan problemas en situaciones donde haya transferencia:
1. Donde el equipo de **desarrollo haya usado un enfoque ágil**, pero el equipo de evolución no esté familiarizado con los métodos ágiles y prefiera un enfoque basado en un plan.
2. Donde se haya usado un **enfoque basado en un plan para el desarrollo**, pero el equipo de evolución prefiera usar métodos ágiles.

# 9.2 Sistemas heredados

En una organización, los sistemas se remplazan a medida que el negocio cambia.
Sin embargo, muchos viejos sistemas continúan siendo utilizados, e incluso, tienen un rol crítico en el negocio. Estos son llamados sistemas heredados.

No son solo sistemas de software. Abarcan hardware, software, librerías, software de soporte y procesos de negocio.
Han tenido mantenimiento por un largo tiempo, por 10 que su estructura puede estar degradada.
Pueden depender de hardware antiguo.
Es probable que no soporten nuevos procesos de negocio.

![[Pasted image 20230524161520.png]]

El mantenimiento de estos sistemas tiene dificultades y es costoso.
- Falta de habilidades o conocimiento de viejas tecnologías (recursos externos)
- Dificultades para entender el código debido a que fue modificado por muchas personas con diferentes estilos
- Sistema degradado por muchos años de mantenimiento Falta documentación o está desactualizada.
- Vulnerabilidades de seguridad
- Problemas para integrarse con sistemas construidos con tecnologías nuevas
- Ausencia de soporte oficial
- Hardware obsoleto y costoso de mantener
- Problemas a nivel de datos: duplicación y baja calidad.

Tomar la decisión de remplazar un sistema heredado puede ser costoso y riesgoso.
- No existe especificación completa del sistema
- Los procesos de negocio seguramente tengan que ser modificados
- Reglas de negocio pueden estar hardcodeadas sin documentación
- EI nuevo software trae riesgos consigo (tiempo y costo)

## Gestión de sistemas heredados

Las organizaciones que se basan en sistemas heredados deben elegir la estrategia para la evolución de ellos.
- Desechar el sistema por completo y modificar los procesos de negocio de forma tal que no sea necesario.
- Continuar el mantenimiento del sistema
- Transformar el sistema por medio de la reingeniería y mejorar la mantenibilidad
- Remplazar el sistema con un sistema nuevo.

La estrategia elegida dependerá de la calidad del sistema y del valor del sistema para el negocio.

## Categorías de sistemas heredados
![[Pasted image 20230524161920.png]]

- 1,2,3 → Estos sistemas deben ser desechados.
- 4,5 → Remplazar con componentes de terceros, desechar completamente o mantener.
- 6,7,8 → Continuar con el sistema en operación y realizar un mantenimiento normal del sistema.
- 9,10 → Estos hacen una importante contribución al negocio pero son caros de mantener. Debe ser reestructurado o remplazado por otro sistema comercial que esté disponible.

### Evaluación del valor para el negocio
La evaluación debe tomar en cuenta diferentes puntos de vista
- Usuarios finales del sistema
- Clientes de negocios
- Gerentes de línea
- Administradores

Entrevistar diferentes interesados y cotejar resultados.

#### Aspectos básicos en la valoración para el negocio
- EI uso del sistema
	- Si los sistemas son utilizados ocasionalmente o por un pequeño número de personas, el sistema puede tener un bajo valor para el negocio.
- Los procesos de negocio que son soportados
	- Un sistema puede tener un bajo valor para el negocio si fuerza a que se utilicen procesos de negocios ineficientes.
- Confianza del sistema
	- Si un sistema no es confiable y los problemas afectan directamente a los clientes del negocio, el sistema tiene un bajo valor para el negocio.
- Las salidas del sistema
	- Si el negocio depende de las salidas del sistema, entonces el sistema tiene un alto valor para el negocio.

### Evaluación de la calidad del sistema
- Evaluación del proceso de negocio
	- ¿En qué medida el proceso de negocio da soporte a los objetivos actuales del negocio?
- Evaluación del entorno
	- ¿Cuán efectivo es el entorno del sistema y cuán costoso es su mantenimiento?
- Evaluación de la aplicación
	- ¿Cuál es la calidad de la aplicación del sistema de software?
		- Cantidad de solicitudes de cambios
		- Número de interfaces de usuario
		- Volumen de datos utilizados por el sistema


# 9.3 Mantenimiento de Software

Es la modificación de un programa luego de que está siendo utilizado.
EI término se utiliza, sobre todo, para realizar cambios en el software personalizado.
Normalmente el mantenimiento no genera grandes cambios en la arquitectura del sistema.
Los cambios implican modificar componentes existentes y agregar nuevos componentes al sistema.

## Tipos de mantenimiento

- Mantenimiento para reparar defectos o vulnerabilidades del software
	- Los errores pueden haber sido introducidos en diferentes etapas, lo que influye en el costo de la corrección.
- Mantenimiento para adaptar el software a un entorno operativo diferente
	- Cambios en el sistema para que este opere en entornos diferentes a los de la implementación inicial.
- Mantenimiento para agregar o modificar funcionalidades al sistema
	- Modificar el sistema para satisfacer nuevos requisitos

### Distribución del esfuerzo de mantenimiento
![[Pasted image 20230524203127.png]]

### Otra categorización (Pfleeger, 2010)
<u>Correctivo</u> (21%)
Control del funcionamiento diario del sistema a través de la reparación de fallas

<u>Adaptativo</u> (25%)
EI sistema de modifica para adaptarse a cambios en el entorno

<u>Perfectivo</u> (50%)
Mejorar funcionalidades existentes

<u>Preventivo</u> (4%)
Prevenir que el desempeño del software se degrade

## Costos de mantenimiento

- Por 10 general, mayores que los costos de desarrollo.
	Agregar funcionalidades nuevas es más costoso que haberlo hecho durante el desarrollo inicial
- EI equipo de mantenimiento tiene que entender el sistema .
- Falta de motivación para que el equipo de desarrollo escriba software mantenible.
- La tarea de mantenimiento del software no es popular.
- EI mantenimiento corrompe la estructura del software y así se hace aún más difícil el mantenimiento.

## Predicción del mantenimiento

La predicción del mantenimiento se ocupa de evaluar qué partes del sistema pueden causar problemas y cuál serán los costos de mantenimiento.
- La aceptación de los cambios en el mantenimiento depende de la capacidad de cambio de los componentes afectados por dicho cambio.
- La implementación de los cambios degrada el sistema y reduce su capacidad de mantenimiento.
- Los costos de mantenimiento dependen del **número de cambios** y el **costo del cambio** depende de la **capacidad de mantenimiento.**

![[Pasted image 20230524203608.png]]

Es la predicción de la cantidad de cambios requeridos y la comprensión de las relaciones entre el sistema y su entorno.
Los sistemas fuertemente acoplados requieren cambios cada vez que cambia su entorno.

Los factores que influencian esta relación son:
- Cantidad y complejidad de las interfaces del sistema,
- Cantidad de requisitos del sistema que son volátiles de forma inherente,
- Los procesos de negocio donde el sistema es utilizado.

### Métricas de complejidad
Las predicciones de mantenimiento se pueden realizar mediante la evaluación de la complejidad de los componentes del sistema.
Estudios muestran que el mayor esfuerzo de mantenimiento se gasta en un número relativamente pequeño de componentes.

La complejidad depende de:
- La complejidad de la estructura de control;
- La complejidad de la estructura de datos;
- Objetos, métodos y el tamaño de los módulos.

### Métricas de proceso
Las métricas de proceso pueden ser utilizadas para evaluar la mantenibilidad.
- Cantidad de solicitudes de mantenimiento correctivo;
- Promedio de tiempo para el análisis del impacto;
- Promedio de tiempo para implementar la solicitud de cambio;
- Cantidad de solicitudes de cambios excepcionales.

Si alguno se incrementa puede indicar que está disminuyendo la mantenibilidad.

## Reingeniería del software

Es la reestructuración o la reescritura de parte o todo un sistema heredado sin cambiar su funcionalidad.
Es aplicable cuando los sistemas necesitan un mantenimiento frecuente.
La reingeniería involucra agregar esfuerzo para hacer que sea más fácil mantener el sistema.
	EI sistema puede ser reestructurado y redocumentado.

### Ventajas de la reingeniería
- <u>Reducción del riesgo</u>
	- Hay un alto riesgo en el desarrollo de un nuevo software. Pueden haber problemas de desarrollo, problemas de equipo y problemas de especificación.
- <u>Reducción del costo</u>
	- Generalmente los costos de la reingeniería son mucho menos significantes que los costos de desarrollar nuevo software.

### EI proceso de reingeniería
![[Pasted image 20230524204011.png]]

### Enfoques de la reingeniería
![[Pasted image 20230524204044.png]]

#### Factores de costo
- La calidad del software a ser rediseñado.
- Las herramientas de soporte disponibles para la reingeniería
- EI grado de conversión de datos que se requiere.
- La disponibilidad de personal experto para la reingeniería.
	Esto puede ser un problema cuando los sistemas están basados en tecnología vieja u obsoleta.

## Refactorización

La refactorización es el proceso de hacer mejoras a un programa para reducir la degradación del sistema al realizar cambios.
Se puede pensar en la refactorización como un "mantenimiento preventivo" que reduce los problemas en cambios futuros.

La refactorización trata de modificar un programa para mejorar su estructura, reducir su complejidad o hacerlo más fácil de entender.
Cuando se refactoriza un programa no se deben agregar funcionalidades.
Es inherente a las metodologías ágiles.

### La refactorización y la reingeniería
La reingeniería toma lugar luego de que el sistema ha sido mantenido por algún tiempo y los costos se incrementan.
	Utiliza las herramientas automatizadas para procesar y rediseñar sistemas heredados para crear un nuevo sistema más mantenible.

La refactorización es un proceso continuo de mejora en todo el proceso de desarrollo y en la evolución.
	Se tiene la intención de evitar que se incremente la degradación de la estructura y el código para que así no se dificulte el mantenimiento del sistema.

## "Bad smells" en el código

Señales de que el código puede ser mejorado.
¿Qué "bad smell" puede haber en el código?

- <u>Código duplicado.</u>
	- EI mismo código o muy similar es incluido en diferentes lugares del sistema.
	- Estos pueden ser removidos e implementados como una única función o método que puede invocarse cuando se requiere.
- <u>Métodos largos.</u>
	- Si el método es demasiado largo, debe ser rediseñado en métodos mas cortos.
- <u>Enunciados Switch (case)</u>.
	- Generalmente implica duplicación. EI cambio (switch) depende del tipo de un valor. Estos enunciados pueden estar dispersos en el programa.
	- Normalmente en los lenguajes orientados a objetos se puede utilizar el polimorfismo para lograr el mismo comportamiento.
- <u>Aglomeración de datos.</u>
	- La aglomeración de datos ocurre cuando el mismo grupo de ítems de datos (campos en clases, parámetros en métodos) aparecen en varios lugares del programa.
	- Generalmente puede ser remplazado con un objeto que encapsule todos estos datos.
- <u>Generalidad especulativa.</u>
	- Esto ocurre cuando los desarrolladores incluyen generalidad al programa en caso de que sea necesario en el futuro. Por lo general, puede ser removido de forma simple.

