![[Pasted image 20230404161347.png]]

```ad-abstract
title: Definición
". . .una colección de computadoras independientes que aparecen al usuario como un solo sistema coherente."
```

## Características:
1. **Compartir recursos** → compartir recursos de hardware y software.
2. **Apertura** → uso de equipos y software de diferentes proveedores.
3. **Concurrencia** → procesamiento concurrente para mejorar rendimiento.
4. **Escalabilidad** → mayor rendimiento al agregar nuevos recursos.
5. **Tolerancia a fallas** → la capacidad de continuar en funcionamiento después de que se ha producido un error.

Para sistemas organizacionales a gran escala, estas ventajas representan que los sistemas distribuidos han sustituido, en especial, a los sistemas heredados mainframe desarrollados en la década de 1990.

Los sistemas distribuidos son inherentemente más complejos que los sistemas centralizados. Esto los hace más difíciles de diseñar, implementar y poner a prueba.

# Conflictos de los sistemas distribuidos

La complejidad surge porque las diferentes partes del sistema se manejan de manera independiente como lo hace la red. 
No hay una sola autoridad a cargo del sistema, por lo que el control descendente es imposible.

## Conflictos de diseño:

- **Transparencia**
	- ¿En qué medida debería aparecer el sistema distribuido al usuario como un sistema único?
	- Idealmente queremos transparencia pero en la práctica es casi imposible por la gestión independiente y las demoras en la red. A veces es mejor advertir a los usuarios.
	- Recursos direccionados de forma lógica y no física

- **Apertura**
	- ¿Debe diseñarse un sistema utilizando protocolos estándar que respalden la interoperabilidad?
	- Desarrollo basado en estándares generalmente aceptados.
	- Implica desarrollo independiente en cualquier lenguaje.

- **Escalabilidad**
	- ¿Cómo se puede construir el sistema para que sea escalable?
	- Capacidad para ofrecer un servicio de alta calidad a medida que aumentan las demandas sobre el sistema
		- Tamaño (agregar más recursos)
			- Ampliar (scaling-up) → sistema más poderoso; 
			- Escalar(scaling-out) → más instancias del sistema.
		- Distribución (dispersar geográficamente los componentes)
		- Capacidad de administración.

- **Seguridad**
	- ¿Cómo se pueden definir e implementar políticas de seguridad utilizables?
	- La cantidad de formas en que el sistema puede ser atacado aumenta significativamente, en comparación con los sistemas centralizados.
		- Intercepción, cuando un atacante intercepta las comunicaciones.
		- Interrupción, cuando los servicios del sistema son atacados y no pueden entregarse como se esperaba.
		- Modificación, cuando el atacante cambia los datos o servicios del sistema.
		- Fabricación, cuando un atacante genera información que no debe existir y la usa para conseguir privilegios.
	- Porque diferentes organizaciones pueden poseer partes del sistema.

- **Calidad del servicio**
	- ¿Cómo se especifica la calidad del servicio?
	- La calidad de servicio (QoS) refleja la capacidad del sistema de entregar sus servicios de manera confiable y con un tiempo de respuesta y rendimiento aceptable para sus usuarios.
	- Es importante cuando el sistema maneja datos de tiempo crítico tales como transmisiones de sonido o video.

- **Gestión de fallas**
	- ¿Cómo se pueden detectar, contener y reparar las fallas del sistema?
	- En un sistema distribuido, es inevitable que se produzcan fallas, por lo que el sistema debe diseñarse para ser resistente a estas fallas.
	- Si un componente del sistema ha fallado tratar de continuar entregando tantos servicios como sea posible y si se puede recupearse.

## Modelos de interacción

Existen dos tipos fundamentales de interacción que pueden tener lugar entre las computadoras en un sistema de cómputo distribuido: interacción procedimental e interacción basada en mensajes.

### Interacción procesal
Una computadora llama a un servicio conocido ofrecido por otra computadora y espera una respuesta.
Implementación RPC (_remote procedure calls_), solicitudes como si el otro fuera un componente local (solución middleware). En Java RMI (remote method invocations).

### Interacción basada en mensajes
La computadora que envía envía información sobre lo que se requiere a otra computadora. No hay necesidad de esperar una respuesta.
Se crean mensajes que se mandan a traves del middleware. En este enfoque no es necesario conocer al otro.

## Middleware

Los componentes en un sistema distribuido pueden implementarse en diferentes lenguajes de programación y pueden ejecutarse en tipos de procesador completamente diferentes. Los modelos de datos, la representación de información y los protocolos de comunicación pueden ser diferentes.

Middleware es un software que puede administrar estas diversas partes y garantizar que puedan comunicarse e intercambiar datos.

![[Pasted image 20230404163914.png]]

En un sistema distribuido, el middleware por lo general brinda dos distintos tipos de soporte:
1. **Soporte de interacción:** coordina las interacciones entre los diferentes componentes en el sistema
	- No es necesario que los componentes conozcan las ubicaciones físicas de otros componentes.

2. **Provisión de servicios comunes:** proporciona implementaciones reutilizables de servicios que pueden ser requeridas por varios componentes en el sistema distribuido.
	- Los componentes pueden interactuar fácilmente y proporcionar servicios al usuario de manera consistente.


# Computación cliente-servidor

![[Pasted image 20230404165303.png]]

Los sistemas distribuidos a los que se accede a través de Internet normalmente están organizados como sistemas cliente-servidor.
La computadora remota proporciona servicios, como el acceso a páginas web, que están disponibles para clientes externos.


Los sistemas cliente-servidor dependen de que exista una separación clara entre la presentación de información y los cálculos que crea y procesa esa información. En consecuencia, se debe diseñar la arquitectura de los sistemas distribuidos cliente-servidor para que se estructuren en varias capas lógicas, con interfaces claras entre dichas capas. Esto permite que cada capa se distribuya en diferentes computadoras. 

![[Pasted image 20230404165752.png]]

La figura ilustra este modelo y muestra una aplicación estructurada en cuatro capas: 
- Una capa de presentación que se ocupa de presentar la información al usuario y gestionar todas las interacciones de usuario;
- Una capa de gestión de datos que gestiona los datos que pasan hacia y desde el cliente. Esta capa puede implementar comprobaciones en los datos, generar páginas Web, etcétera;
- Una capa de procesamiento de aplicación que se ocupa de implementar la lógica de la aplicación y, de este modo, proporciona la funcionalidad requerida a los usuarios finales;
- Una capa de base de datos que almacena los datos y ofrece servicios de gestión de transacción, etcétera.

# Patrones arquitectónicos para sistemas distribuidos

Como se explicó en la introducción de este capítulo, los diseñadores de sistemas distribuidos deben organizar sus diseños de sistema para encontrar un equilibrio entre rendimiento, confiabilidad, seguridad y manejabilidad del sistema. No hay un modelo universal de organización de sistemas adecuado a todas las circunstancias, así que han surgido varios estilos arquitectónicos distribuidos. Cuando diseñe una aplicación distribuida, deberá elegir un estilo arquitectónico que soporte los requerimientos no funcionales críticos de su sistema.

## maestro-esclavo

Se usan comúnmente en sistemas en tiempo real.

El proceso '**maestro**' generalmente es responsable del cálculo, la coordinación y las comunicaciones, y controla los procesos '**esclavos**'.
Los procesos '**esclavos**' están dedicados a acciones específicas, como la adquisición de datos de una matriz de sensores.

```ad-example
title: Ejemplo
![[Pasted image 20230404170022.png]]
El modelo de la figura es un modelo de un sistema de control de tráfico en una ciudad y tiene tres procesos lógicos que se ejecutan en procesadores independientes. El proceso maestro es el proceso de sala de control, que se comunica con procesos esclavo independientes que son responsables de recolectar datos de tráfico y administrar la operación de los semáforos.
```

Este modelo maestro-esclavo de sistema distribuido se usa en situaciones en que es posible predecir el procesamiento distribuido que se requiere, y en que el procesamiento puede asignarse fácilmente a procesadores esclavos.

## cliente-servidor de dos niveles

Una arquitectura cliente-servidor de dos niveles es la forma más simple de arquitectura cliente-servidor. El sistema se implementa como un solo servidor lógico más un número indefinido de clientes que usan dicho servidor. 

![[Pasted image 20230404170406.png]]

Esto se ejemplifica en la figura, que indica dos formas de este modelo arquitectónico:
1. Un modelo de cliente ligero, en que la capa de presentación se implementa en el cliente, y todas las otras capas (gestión de datos, procesamiento de la aplicación y bases de datos) se implementan en un servidor. 
	- Simple de manejar por clientes, soporta manejo de sistemas legados, fuerte carga en red y servidor
2. Un modelo de cliente pesado, en que parte o todo el procesamiento de la aplicación se realiza en el cliente. Las funciones de gestión de datos y de base de datos se implementan en el servidor.
	- Adecuado cuando sabemos capacidades de los clientes y se pueden utilizar, más difícil de gestionar y se debe instalar el sw en los clientes.

Las fronteras son borrosas, javascript ha permitido clientes más pesados sin gestión adicional, pocos cliente finos actualmente.

```ad-example
title: Ejemplo
![[Pasted image 20230404170445.png]]
Un ejemplo de una situación en la que se usa una arquitectura de cliente pesado es un sistema de cajero automático, que entrega efectivo y otros servicios bancarios a los usuarios. El cajero es la computadora cliente y el servidor es, por lo general, un mainframe que opera la base de datos de cuentas de los clientes. Una computadora mainframe es una máquina poderosamente diseñada para procesamiento de transacciones. Por consiguiente, es capaz de manejar el gran volumen de las transacciones generadas por los cajeros automáticos, otros sistemas de cajeros y banca en línea. El software en el cajero realiza mucho procesamiento relacionado con el cliente asociado con una transacción.
```

## cliente-servidor multinivel

Las diferentes capas del sistema, a saber, presentación, administración de datos, procesamiento de aplicaciones y base de datos, son procesos separados que pueden ejecutarse en diferentes procesadores.
Son más escalables.
Se usan cuando hay varias bases de datos (se agrega servidor de integración).
El procesamiento puede distribuirse entre la lógica de la aplicación y los servidores de gestión de datos → respuesta más rápida.

```ad-example
title: Ejemplo
![[Pasted image 20230404170825.png]]
Un sistema de banca por Internet es un ejemplo de una arquitectura cliente-servidor multinivel, donde existen tres niveles en el sistema. La base de datos de clientes del banco (por lo general ubicada en una computadora mainframe, como se expuso anteriormente) brinda servicios de base de datos. Un servidor Web ofrece servicios de gestión de datos, tales como generación de páginas Web y algunos servicios de aplicación. Los servicios de aplicación, tales como las instalaciones para transferir efectivo, generar estados de cuenta, pagar facturas y así sucesivamente, se implementan en el servidor Web y como scripts que se ejecutan por el cliente. La propia computadora del cliente con un navegador es el cliente. Este sistema es escalable porque es relativamente sencillo agregar servicios (ampliar) conforme aumenta el número de clientes.
```

## Componentes distribuidos

No hay distinción entre clientes y servidores.
Cada entidad distribuible es un componente que proporciona servicios a otros componentes y recibe servicios de otros componentes.
La comunicación de componentes se realiza a través de un sistema de middleware.

![[Pasted image 20230404170948.png]]

Beneficios:
1. Permite al diseñador del sistema demorar las decisiones acerca de dónde y cómo deben proporcionarse los servicios.
2. Es una arquitectura de sistema muy abierta que permite adicionar nuevos recursos conforme se requiera.
3. El sistema es flexible y escalable.
4. Es posible, según se requiera, reconfigurar dinámicamente el sistema con componentes que migran a través de la red.

```ad-example
title: Ejemplo
![[Pasted image 20230404171113.png]]
Los sistemas de minería de datos son un buen ejemplo de un tipo de sistema en el que una arquitectura de componentes distribuidos es el mejor patrón arquitectónico a usar. Un sistema de minería de datos busca relaciones entre los datos que se almacenan en algunas bases de datos. Los sistemas de minería de datos por lo general obtienen información de varias bases de datos separadas, realizan procesamiento intensivo de cómputo y despliegan sus resultados en forma gráfica.
```

Desventajas:
1. Son más complejos de diseñar que los sistemas cliente-servidor.
2. El middleware estandarizado nunca ha sido aceptado por la comunidad.

## peer-to-peer

![[Pasted image 20230404171358.png]]

- Son sistemas descentralizados donde los cálculos pueden ser llevados a cabo por cualquier nodo en la red.
- El sistema general está diseñado para aprovechar la capacidad de cómputo y el almacenamiento de una gran cantidad de computadoras en red.
- La mayoría de los sistemas p2p han sido sistemas personales, pero el uso comercial de esta tecnología es cada vez mayor.
- Cuando → 
	- sistema de cómputo intensivo y podemos distribuir procesamiento, 
	- sistema de intercambio de información sin necesidad de gestión de información centralizada.
- Arq descentralizadas (todos pares, más redundante, más robusto) o semicentralizadas (uno o más servidores, menos carga de red).

Arquitectura semicentralizada:
![[Pasted image 20230404171428.png]]

# Software como servicio

El software como servicio (SaaS) implica alojar el software de forma remota y proporcionar acceso a él a través de Internet. 
Se implementa en un servidor (o más comúnmente en varios servidores) y se accede a él a través de un navegador web. No se implementa en una PC local.
El software es propiedad y está administrado por un proveedor de software, en lugar de las organizaciones que usan el software. 
Los usuarios pueden pagar por el software de acuerdo con la cantidad de uso que hacen de él o mediante una suscripción anual o mensual.

## Saas y SOA

1. **SaaS** es una forma de proporcionar funcionalidad en un servidor remoto, con acceso de clientes mediante un navegador Web. El servidor conserva los datos y el estado del usuario durante una sesión de interacción. Por lo regular, las transacciones son largas (por ejemplo, la edición de un documento).
2. **SOA** es un enfoque a la estructuración de un sistema de software como un conjunto de servicios independientes, sin estado. Éstos pueden proporcionarse mediante múltiples proveedores y distribuirse. Por lo general, las transacciones son transacciones cortas donde se solicita un servicio, se hace algo y luego se devuelve el resultado.



