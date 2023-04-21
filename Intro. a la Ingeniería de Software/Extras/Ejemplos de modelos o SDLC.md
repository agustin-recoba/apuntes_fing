
![[Pasted image 20230306211120.png]]

# Modelo de Cascada

El **modelo de cascada** es un flujo secuencial lineal. En el que se considera que el progreso fluye constantemente hacia abajo (como una cascada) a través de las fases de implementación del software. Esto significa que, idealmente, cualquier fase del proceso de desarrollo **comienza solo si se completa la fase anterior** (en la práctica, dichas etapas se traslapan y se nutren mutuamente de información). 
El enfoque en cascada no define el proceso para volver a la fase anterior para manejar los cambios en los requisitos. El enfoque en cascada es **el enfoque más antiguo** y más conocido que se utilizó para el desarrollo de software.


![[Pasted image 20230306210526.png]]

## Uso
Para proyectos que no se enfocan en cambiar los requisitos, por ejemplo, proyectos iniciados a partir de una solicitud de propuestas (RFP), el cliente tiene requisitos documentados muy claros.

## Ventajas y desventajas

- Ventajas:
	- Fácil de explicar a los usuarios/clientes.
	- Enfoque de estructuras.
	- Las etapas y actividades están bien definidas.
	- Ayuda a planificar y programar el proyecto.
	- La verificación en cada etapa asegura la detección temprana de errores/malentendidos.
	- Cada fase tiene entregables específicos.

- Desventajas:
	- Supone que los requisitos de un sistema se pueden congelar.
	- Muy difícil volver a cualquier etapa una vez que se ha terminado.
	- Poca flexibilidad y ajustar el alcance es difícil y costoso.
	- Costoso y requiere más tiempo, además de un plan detallado.

# Modelo en forma de V

Es una extensión del modelo de cascada. En lugar de moverse hacia abajo de forma lineal, los pasos del proceso se doblan hacia arriba después de la fase de implementación y codificación, para formar la típica forma de V. La principal diferencia entre el modelo en forma de V y el modelo en cascada es la planificación temprana de la prueba en el modelo en forma de V.

![[Pasted image 20230306210517.png]]

## Uso
-   Requisitos de software claramente definidos y conocidos
-   Las tecnologías y herramientas de desarrollo de software son bien conocidas

## Ventajas y desventajas

- Ventajas:
	- Simple y fácil de usar
	- Cada fase tiene **entregables específicos**.
	- Mayor probabilidad de éxito sobre el modelo en cascada debido al desarrollo de planes de prueba al principio del ciclo de vida.
	- Funciona bien donde los requisitos se entienden fácilmente.
	- Verificación y validación del producto en las primeras etapas de desarrollo del producto.

- Desventajas:
	- Muy inflexible, como el modelo de cascada.
	- Ajustar el alcance es difícil y costoso. El software se desarrolla durante la fase de implementación, por lo que no se producen prototipos iniciales del software. El modelo **no proporciona un camino claro para los problemas encontrados durante las fases de prueba**.
	- Costoso y requiere más tiempo, además de un plan detallado.

# Modelo de prototipo

Se refiere a la actividad de crear prototipos de aplicaciones de software, por ejemplo, versiones incompletas del programa de software que se está desarrollando. Es una actividad que puede ocurrir en el desarrollo de software y sirve para visualizar algunos de los componentes del software para limitar la cantidad de malentendidos de los requisitos del cliente por parte del equipo de desarrollo. Esto también reducirá las iteraciones que pueden ocurrir en el enfoque en cascada y que son difíciles de implementar debido a la inflexibilidad del enfoque en cascada. Entonces, cuando se desarrolla el prototipo final, el requisito se considera congelado.

Tiene algunos **tipos**, tales como:

- Creación de prototipos desechables: prototipos que finalmente se descartan en lugar de convertirse en parte del software finalmente entregado.
	![[Pasted image 20230306210759.png]]

- Creación de prototipos evolutivos: prototipos que evolucionan hacia el sistema final a través de una incorporación iterativa de los comentarios de los usuarios.
	![[Pasted image 20230306210814.png]]

- Creación de prototipos incrementales: el producto final se construye como prototipos separados. Al final, los prototipos separados se fusionan en un diseño general.
	![[Pasted image 20230306210849.png]]

- Prototipado extremo: utilizado en aplicaciones web principalmente. Básicamente, divide el desarrollo web en tres fases, cada una basada en la anterior. La primera fase es un prototipo estático que consiste principalmente en páginas HTML. En la segunda fase, las pantallas se programan y funcionan completamente utilizando una capa de **servicios simulados**. En la tercera fase, se implementan los servicios.

## Uso

Este proceso se puede utilizar con cualquier modelo de desarrollo de software. Este proceso se debe elegir cuando se está desarrollando un sistema que tenga interacciones con el usuario. Osea, si el sistema no tiene interacciones con el usuario, como un sistema que hace cálculos, no tendrá prototipos.

## Ventajas y desventajas

- Ventajas
	- Reducción de tiempo y costos, pero esto puede ser una desventaja si el desarrollador pierde tiempo en desarrollar los prototipos.
	- Mejora y aumento de la participación de los usuarios.

- Desventajas
	- Análisis insuficiente. Confusión del usuario entre el prototipo y el sistema terminado.
	- Desarrollador malentendido de los objetivos del usuario.
	- Excesivo tiempo de desarrollo del prototipo.
	- Es costoso implementar los prototipos.

# Modelo Espiral (SDM)

Combina elementos de diseño y creación de prototipos en etapas, en un esfuerzo por combinar las ventajas de los conceptos de arriba hacia abajo y de abajo hacia arriba. 
Este modelo de desarrollo combina las características del modelo de creación de prototipos y el modelo de cascada. 
El modelo en espiral es el preferido para proyectos grandes, costosos y complicados. Este modelo utiliza muchas de las mismas fases que el modelo en cascada, esencialmente en el mismo orden, separadas por la planificación, la evaluación de riesgos y la construcción de prototipos y simulaciones.

![modelo espiral](https://i0.wp.com/melsatar.blog/wp-content/uploads/2012/03/spiral.png?resize=704%2C565&ssl=1)

## Uso

Se utiliza en grandes aplicaciones y sistemas que incorporan pequeñas fases o segmentos.

## Ventajas y desventajas

- Ventajas
	- Las estimaciones (es decir, presupuesto, cronograma, etc.) se vuelven más realistas a medida que avanza el trabajo porque los problemas importantes se descubren antes.
	- Participación temprana de los desarrolladores.
	- Gestiona los riesgos y desarrolla el sistema en fases.

- Desventajas
	- Alto costo y tiempo para llegar al producto final.
	- Necesita habilidades especiales para evaluar los riesgos y supuestos.
	- Reutilización limitada altamente personalizada

# Modelo iterativo e incremental

Está desarrollado para superar las debilidades del modelo de cascada. Comienza con la planificación inicial y termina con la implementación con las interacciones cíclicas intermedias. 
La idea básica detrás de este método es desarrollar un sistema a través de ciclos repetidos (iterativos) y en porciones más pequeñas a la vez (incrementales), lo que permite a los desarrolladores de software aprovechar lo aprendido durante el desarrollo de partes o versiones anteriores del sistema. 
Puede consistir en **mini-cascadas o mini-modelos en forma de V**.

![incremental-sdlc](https://i0.wp.com/melsatar.blog/wp-content/uploads/2012/03/incremental-sdlc.jpg?resize=297%2C227&ssl=1 "incremental-sdlc")

## Uso
Se utiliza en aplicaciones de envoltura retráctil y grandes sistemas que incorporan pequeñas fases o segmentos. Además, se puede utilizar en un sistema que tenga componentes separados, por ejemplo, un sistema ERP. Podemos comenzar con el módulo de presupuesto como una primera iteración y luego podemos comenzar con el módulo de inventario y así sucesivamente.

## Ventajas y desventajas

- Ventajas
	- Produce valor de negocio en las primeras etapas del ciclo de vida del desarrollo. Desde la primera iteración se puede contar con un producto valioso.
	- Mejor uso de recursos escasos a través de una adecuada definición de incrementos.
	- Puede acomodar algunas solicitudes de cambio entre incrementos.
	- Más centrado en el valor del cliente que los enfoques lineales.
	- Podemos detectar problemas y cambios en el proyecto antes.

- Desventajas
	- Requiere mucha documentación.
	- Sigue un conjunto definido de procesos.
	- Define incrementos en función de las dependencias de funciones y características.
	- Requiere más participación del cliente que los enfoques lineales.
	- Particionar las funciones y características puede ser problemático.
	- La estructura del sistema tiende a degradarse conforme se tienen nuevos incrementos. La integración entre las iteraciones puede ser un problema si no se considera durante el desarrollo y la planificación del proyecto.

# Modelo ágil

Se basa en el desarrollo iterativo e incremental, donde los requisitos y las soluciones evolucionan a través de la colaboración entre equipos multifuncionales.

![ágil-SDLC](https://i0.wp.com/melsatar.blog/wp-content/uploads/2012/03/sw-fw-design.png?resize=739%2C335&ssl=1)

## Uso

Se puede usar con **cualquier tipo de proyecto**, pero necesita más participación del cliente y ser interactivo. Además, podemos usarlo cuando el cliente necesita tener listos algunos requisitos funcionales en menos de tres semanas y los requisitos no son lo suficientemente claros. Esto permitirá piezas de software más valiosas y viables desde el principio, lo que también aumenta la satisfacción del cliente.

## Ventajas y desventajas

- Ventajas
	- Disminuye el tiempo requerido para aprovechar algunas características del sistema.
	- La comunicación cara a cara y las aportaciones continuas de los representantes de los clientes no dejan lugar a conjeturas. El resultado final es un software de alta calidad en el menor tiempo posible y clientes satisfechos

- Desventajas
	- Escalabilidad.
	- La capacidad y colaboración del cliente para expresar las necesidades del usuario.
	- La documentación se realiza en etapas posteriores.
	- Reducir la usabilidad de los componentes.
	- Necesita habilidades especiales para el equipo.

# Modelo orientada a la reutilización (Integración y Configuración)

Está basado en la reutilización de componentes de software o COTS (Commercial-off-the-shelf), los cuales son integrados en el sistema a construir.
Los componentes en general tienen que ser configurados para adaptar su comportamiento y funcionalidad a los requerimientos del cliente.
La reutilización de componentes es hoy en día un enfoque estándar para la construcción de muchos tipos de sistemas de negocio.

## Tipos

- Aplicaciones del tipo stand-alone (llamadas COTS), las cuales son configuradas para uso en algún ambiente en particular (por ejemplo ERP’s).
- Paquetes, librerías o colecciones de objetos que son desarrollados para ser integrados con un framework (como ser .NET or J2EE).
- Servicios web que son desarrollados de acuerdo a estándares de servicios, los cuales se encuentran disponibles mediante invocación remota.

![[Pasted image 20230421184440.png]]

## Ventajas y desventajas

- Ventajas
	- Se reducen costos y riesgos ya me que menos software se desarrolla desde cero. 
	- Desarrollo y entrega del producto más rápida.

- Desventajas
	- Puede que el sistema no cumpla con las necesidades reales del cliente (o las cumpla parcialmente).
	- Se pierde control sobre la evolución de los elementos reutilizados en el sistema.
