- [[#1. Introducción a las Redes de Computadoras]]
- [[#2. Capa de Aplicación]]
- [[#3. Capa de Transporte]]
- [[#4. Capa de Red, plano de datos]]
- [[#5. Capa de Red, plano de control]]
- [[#6. Capa de Enlace]]
- [[#99. Otros]]<div style="page-break-after: always;"></div>

# 1. Introducción a las Redes de Computadoras 

- [[#1.1 Internet]]
- [[#1.2 Conmutacion de circuitos]]
- [[#1.3 Conmutacion de paquetes]]
- [[#1.4 Retardo, pérdidas y “throughput” en redes de conmutación de paquetes]]
- [[#1.5 Modelo de capas]]
- [[#1.6 traceroute]]


<div style="page-break-after: always;"></div>

## 1.1 Internet 

Es una red de computadoras que interconecta a través de medios físicos cientos de millones de dispositivos a lo largo de todo el mundo. Los dispositivos pueden ser clientes o servidores, **ambos se encuentran en el borde de la red** y ejecutan aplicaciones que usan internet. Además, se conectan entre sí mediante una red de enlaces de comunicaciones y dispositivos de conmutación de paquetes.
Hay muchos tipos de enlaces de comunicación compuestos por distintos tipos de medios físicos (cable coaxial, fibra óptica, etc.). Los enlaces pueden transmitir los datos a distintas velocidades.

Los conmutadores de paquetes más usados en Internet son los **routers** (núcleo de la red) y los **switches** (se emplean en las redes de acceso) de la capa de enlace.
Los sistemas terminales acceden a internet a través de los **ISP** (Proveedor de servicios de internet), cada uno es en sí mismo una red de conmutadores de paquetes y enlaces de comunicaciones.
Internet es todo lo que conecta a los sistemas terminales entre sí, por lo que los ISP que proporcionan el acceso a los sistemas terminales también tienen que estar interconectados entre ellos.

También podemos describir internet desde un punto de vista completamente diferente, en concreto como **una infraestructura que proporciona servicios a las aplicaciones**. 
Se dice que las aplicaciones son distribuidas, porque implican varios sistemas terminales que intercambian datos entre sí (las aplicaciones se ejecutan en los sistemas terminales).

#### Protocolos
Cualquier actividad de internet que implique dos o más entidades remotas que se comunican está gobernada por un protocolo. Un **protocolo** define el *formato* y el *orden de los mensajes* intercambiados entre dos o más entidades que se comunican, así como las acciones tomadas en la trasmisión y/o recepción de un mensaje u otro suceso.

![[Pasted image 20221004225407.png|400]]

#### Estructura de una red

![[Pasted image 20221004225504.png]]

##### El borde de la red
Conformado por los End Systems, los cuales ejecutan las aplicaciones como Navegadores Web, E-Mail, etc., en el borde de la red.

##### Redes de acceso
Las **Redes de acceso** hacen referencia a aquella parte de la red de comunicaciones que conecta a los usuarios finales con algún proveedor de servicios (ISP) y es complementaria al núcleo de red. 

###### Tecnologías de acceso a red
- **Acceso telefónico**
	Los usuarios acceden a Internet a través de las líneas telefónicas utilizando un módem de acceso telefónico. Se llama así, porque el software del usuario **realmente llama al número de teléfono de un ISP y establece una conexión telefónica tradicional**. La línea de teléfono es de par trenzado. Un inconveniente es que era **extremadamente lento** (proporciona una velocidad máxima de 56 kbps), el otro problema es que se ocupaba la red telefónica, mientras se conecta a internet no se puede recibir ni hacer una llamada.
	![[Pasted image 20221004225726.png|400]]
- **DSL** 
	Los domicilios particulares contratan un servicio de DSL con la misma empresa que le proporciona el acceso telefónico. Se usa un **multiplexor de acceso DSL** para intercambiar datos a diferentes frecuencias. Recibe y envía datos a **velocidades mucho más altas que con acceso telefónico**, como las velocidades de descarga y carga son diferentes, se dice que es un acceso **asimétrico**. Otra ventaja es que los usuarios pueden llamar por teléfono y conectarse a internet al mismo tiempo.
	![[Pasted image 20221004225803.png|400]]
- **Cable**
	Es un sistema desplegado por las compañías de TV cable, que además de brindar un servicio de televisión, brinda el servicio de internet usando la red de distribución de cable coaxial. Se usan los módems por cable. Al igual que DSL el acceso es **asimétrico**, pero proporciona mayores velocidades.
	![[Pasted image 20221004225858.png|400]]
- **Fibra óptica**
	Ofrece velocidades mucho mayores que el cable de par trenzado y el cable coaxial.
- **Ethernet** 
	Utiliza cable de par trenzado para conectarse a un switch Ethernet.
	![[Pasted image 20221004230001.png|400]]
- **Wifi o LAN inalámbrica** 
	Se usa un punto de acceso para conectarse a internet y habitualmente hay que estar a unas pocas decenas de metros de él.
	![[Pasted image 20221004230027.png|300]]
- **WiMax** 
	Es una tecnología dentro de las conocidas como tecnologías de última milla, también conocidas como bucle local, que permite la **recepción de datos por microondas y retransmisión por ondas de radio**.

```ad-info
title: Diferencia entre fibra óptica y UTP

![[Pasted image 20221004225014.png]]
```

##### Categorización de medios
En cada par transmisor-receptor, los bits se envían a lo largo del medio físico que puede tener muchas formas y no tiene por qué ser del mismo tipo para cada par. Estos medios se pueden clasificar dentro de dos categorías: **medios guiados** (las ondas se trasportan en un medio sólido) y **medios no guiados** (las ondas se propagan por la atmósfera y el espacio exterior).

```ad-example
title: Ejemplo de medios guiados

- Cable de cobre par trenzado (UTP) es el medio más barato y usado en las redes telefónicas.
- Cable coaxial consta de dos conductores concéntricos, uno central, llamado núcleo, encargado de llevar la información, y uno exterior, de aspecto tubular, llamado malla, blindaje o trenza.
- Cable de fibra óptica es un medio flexible y de poco espesor que conduce pulsos de luz, representando cada pulso un bit. Es inmune a las interferencias y transmite a velocidades muy altas.
```

```ad-example
title: Ejemplos de medios no guiados

- Canales de radio terrestres: señales de espectro electromagnético. No requiere la instalación de cables físicos. Puede atravesar las paredes, proporciona conectividad móvil y puede enviar señal a grandes distancias.
- Canales de radio vía satélite.
```

##### Núcleo de la red

El NETWORK CORE es una malla de routers interconectados. La pregunta principal es ¿cómo se transfieren los datos a través de la red? 
Los datos pueden ser enviados mediante Circuit Switching, donde se tiene un circuito dedicado por llamado, por ejemplo, la red de teléfonos; o mediante Packet-Switching, donde los datos son enviados a través de “trozos”.

![[Pasted image 20221004230251.png|200]]

#### Redes de redes
En el Internet público, hay diferentes redes de acceso que se conectan al resto de Internet formando una jerarquía de capas o niveles de proveedores de servicios de Internet (ISP). 

```ad-tip
title: Tier 1

En el extremo más alto de la jerarquía hay un número relativamente pequeño de los llamados ISP de nivel 1 (Tier 1). Un ISP de nivel 1 es lo mismo que cualquier red: tiene enlaces y routers, y está conectado a otras redes. Sus routers deben ser capaces de transmitir una cantidad muy elevada de datos al mismo tiempo. Los ISP de nivel 1 (Tier 1) están caracterizados por:
- Estar conectados directamente a cada uno de los demás ISP de nivel 1. 
- Estar conectados a un gran número de ISP de nivel 2 (Tier 2) y otras redes de usuario. 
- Tener cobertura internacional. 
Además, en ese nivel están también los grandes distribuidores de contenido (Google, Akamai, Microsoft).

![[Pasted image 20221004231851.png|600]]
```

```ad-tip
title: Tier 2

En otro nivel de jerarquía se encuentran los tier 2, que son proveedores más pequeños, en general regionales, los cuales se conectan a uno o más tier 1. Cada tier 1 tiene múltiples tier 2, los cuales le pagan por sus servicios. Los tier 2 se conectan directamente con otros, evitando los tier 1, o con un IXP (Internet Exchange Point).

![[Pasted image 20221004232019.png|600]]
```

```ad-tip
title: Tier 3

El último paso del acceso a la red es a través de los tier 3, o ISP local, los cuales son clientes de las redes de tier 1 y tier 2. Son los más cercanos a los End Systems.

![[Pasted image 20221004232113.png|600]]
```

```ad-tip
title: Cliente

Un paquete atraviesa múltiples redes desde el host fuente hasta el host destino.

![[Pasted image 20221004232206.png]]
```
<div style="page-break-after: always;"></div>

## 1.2 Conmutacion de circuitos 

Se reservan recursos de extremo a extremo en la red para cada llamada, para esto, cuando dos host quieren comunicarse, la red establece una conexión terminal a terminal dedicada entre ellos. Esto consume tiempo de espera. Los recursos reservados no se comparten con otras conexiones, por lo tanto si no se usan los recursos, estos son desperdiciados. La conmutación de circuitos ofrece una calidad garantizada.

![[Pasted image 20221004230714.png|300]]

El ancho de banda disponible se divide entre el número de usuarios y tenemos dos formas de hacer esto:

- **En Multiplexación por División de la Frecuencia** (FDM), el espectro de frecuencias disponible en un enlace se reparte todo el tiempo entre las conexiones establecidas en el mismo.

	![[Pasted image 20221004231001.png|500]]

- **En Multiplexación por División en el Tiempo** (TDM), el tiempo se divide en ranuras de duración fija preestablecida (“marcos”) y estas en otras ranuras (con una cantidad preestablecida), también de duración constante (”particiones”), y cada una de ellas es utilizada periódicamente por una conexión, con todo el espectro de frecuencias disponible en ese lapso de tiempo para ella.

	![[Pasted image 20221004231042.png|500]]

##### Ventajas
- El ancho de banda es definido y se mantiene constante durante la comunicación. 
- El circuito es fijo, no se pierde tiempo en el encaminamiento de la información. 
- La transmisión se realiza en tiempo real, siendo útil para la comunicación de voz y vídeo. 
- Si bien existe retardo en el establecimiento de la llamada, el retardo de la transmisión posterior es despreciable; si el tráfico se realiza generalmente entre el mismo par de estaciones, puede ser más veloz.

##### Desventajas
- Cuando no se utiliza el enlace se desaprovechan recursos (ancho de banda). 
- Si la comunicación es a ráfagas en vez de continua, o entre una gran variedad de estaciones, es ineficiente. 
- Retraso en el inicio de la comunicación 
- El camino físico es siempre el mismo, por lo que no se utilizan los posibles caminos alternativos que puedan surgir que sean más eficientes. 
- Se requiere un tiempo para realizar la conexión, lo que conlleva un retraso en la transmisión de la información.<div style="page-break-after: always;"></div>

## 1.3 Conmutacion de paquetes 

El origen divide los mensajes largos en fragmentos de datos más pequeños que se conocen como paquetes.
Los paquetes de distintos usuarios comparten los recursos de red. Cada paquete utiliza el ancho de banda disponible. Los paquetes deben esperar para usar los recursos. 

La mayoría de los conmutadores de paquetes emplean el método de transmisión de **almacenamiento y reenvío** en la entrada a los enlaces, esto significa que el conmutador tiene que recibir el paquete completo antes de poder comenzar a transmitir el primer bit del paquete al enlace de salida, esto añade un retardo de almacenamiento y reenvío en la entrada de cada enlace.

Cada conmutador de paquetes tiene varios enlaces conectados a él y para cada enlace conectado, el conmutador de paquetes dispone de un buffer de salida, que almacena los paquetes que el router enviará a través de dicho enlace. Un paquete entrante puede encontrar que el buffer está lleno con otros paquetes, en ese caso se producirá una pérdida de paquetes.

#### Multiplexación estadística
La compartición de recursos bajo petición, se denomina **multiplexación estadística** de recursos.

![[Pasted image 20221004231554.png|400]]

Secuencia de paquetes A y B no tienen un patrón de tiempo fijo, los anchos de banda son compartidos a demanda. 
En lugar de pre asignar las ranuras temporales a un número fijo de comunicaciones, detecta las comunicaciones activas y reparte el canal entre todas ellas. De esta forma se evita que una comunicación inactiva malgaste ancho de banda. Este tipo de multiplexación se utiliza en líneas frame relay.<div style="page-break-after: always;"></div>

## 1.4 Retardo, pérdidas y “throughput” en redes de conmutación de paquetes 

Un paquete puede llegar y encontrarse con que la cola está llena. Si no hay lugar para almacenar un paquete más, el router lo elimina, es decir, el paquete se pierde. El número de paquetes perdidos aumenta cuando la intensidad de tráfico aumenta.

### Cola de Paquetes en el Buffer del Router 
Los paquetes llegan con determinada tasa de arribo para ser enlazados, pero dicha tasa puede superar la capacidad de enlace, por lo que los paquetes deben esperar en una cola a que sea su turno.
Dado que la cola (buffer) tiene capacidad finita, cuando un paquete entrante se encuentra con la cola completa, este se pierde. Sin embargo, es posible que el paquete perdido se retransmitido por el nodo anterior o por el End System fuente.

![[Pasted image 20221004232856.png|500]]

### Tipos de retardo

```ad-note
title: Retardo de procesamiento ( $d_{proc}$ )

Es el tiempo requerido para examinar la cabecera del paquete y determinar el enlace de salida, por eso depende del tamaño del cabezal. También incluye el tiempo necesario para comprobar los errores de bits (chequeo de paridad CRC).
Orden: _microsegundos_.
```

``````ad-note
title: Retardo de cola ($d_{cola}$)


Generado por paquetes que esperan en la cola para ser transmitidos en un enlace, depende del número de paquetes que hayan llegado antes a la cola, del perfil del tráfico generado (si tiene ráfagas o no) y de la presencia de otros flujos que compartan las mismas colas. Por eso se dice que no es constante.
Orden: microsegundos a milisegundos.

```ad-question
title: ¿De qué depende que en algunos casos el retardo de cola sea grande y que en otros sea insignificante?


La respuesta a esta pregunta depende de la velocidad a la que llega el tráfico a la cola, de la velocidad de transmisión del enlace y de la naturaleza del tráfico entrante, es decir, de si el tráfico llega periódicamente o en ráfagas.
```

![[Pasted image 20221004233049.png|500]]

``````

```ad-note
title: Retardo de transmisión ( $d_{trans}$ )

Tiempo requerido para insertar en el enlace los bits de un paquete, a la velocidad de la interfaz de cada nodo.
Orden: _microsegundos a milisegundos_.
Sea:
	`R = ancho de banda del enlace (bps)`
	`L = longitud del paquete (bits)`
Entonces:
	`d_trans = L/R`
```

```ad-note
title: Retardo de propagación ( $d_{prop}$ )

Es el tiempo “de viaje” de un bit entre dos nodos; depende del medio físico (fibra, 	cobre, etc) y de la distancia. 
Orden: _milisegundos_.
Sea: 
	`d = longitud del enlace físico`
	`s = velocidad de propagación en el medio`
Entonces:
	`d_prop = d/s`
```

```ad-summary
title: Resumen


![[Pasted image 20221004233001.png]]
```


### Rendimiento (throughput)

El **throughput** es la tasa (bits/unidad de tiempo) a la cual los bits son transferidos entre el emisor y el receptor. Puede ser instantáneo, que es la tasa a un punto dado del tiempo; o promedio, que es la tasa a lo largo de un período de tiempo.

```ad-important
title: Escenario de Internet

![[Pasted image 20221004233357.png|300]]

Se tiene un end-end throughput por conexión: `min(Rc,Rs,R/10)`. En la práctica Rc o Rs generalmente es un cuello de botella.
```

### Intensidad del tráfico

Llamamos intensidad del tráfico al cociente: $$I=\frac{L \times a}{R}$$
El producto $L \times a$ es la tasa de arribo de bits a la cola del nodo, mientras que R es la tasa de trasmisión, es decir, la velocidad con que el nodo vacía la cola. Por lo tanto si $La/R > 1$ la cola nunca se vacía y el retardo tenderá a infinito; en el otro extremo, si $La/R << 1$, la cola se vacía rápido y consecuentemente el retardo de cola es pequeño, como se ve en la figura.<div style="page-break-after: always;"></div>

## 1.5 Modelo de capas 

### Capas de protocolos y modelos de servicios

Las redes son complejas, compuestas por múltiples piezas: 
- Hosts 
- Router 
- Enlaces de varios medios 
- Aplicaciones 
- Protocolos 
- Hardware 
- Software 

La pregunta que surge entonces es: **¿Existe alguna forma de organizar la estructura de la red?**

Se definen entonces **CAPAS**, donde cada capa implementa un servicio, ejecutando instrucciones internas a cada capa, confiando en los servicios provistos por la capa anterior. 
La división en capas permite tratar con sistemas más complejos. Una estructura explícita permite la identificación, relacionamiento de las complejas piezas del sistema, utilizando un modelo de referencia en capas. 
Además, permite la **modularización**, lo cual facilita el trabajo de mantenimiento y actualización del sistema, ya que un cambio en una capa no debería afectar al resto del sistema. Por ejemplo, un cambio en la cinta transportadora de equipaje no afecta al resto del sistema.

#### Capas:

![[Pasted image 20221004233934.png|200]]

##### Aplicación: 
Soporta las aplicaciones en red (FTP, SMTP, HTTP). 

##### Transporte:
Transferencia proceso a proceso de los datos (TCP, UDP).

##### Red:
Rutea los datagramas de la fuente hasta el destino (IP, protocolos de enrutamiento).

Las dos funciones fundamentales de la capa de red son las de **reenvío** y **enrutamiento**. 
- El reenvío (**forwarding**) refiere a cuando un paquete llega al enlace de entrada de un router, y éste tiene que pasar el paquete al enlace de salida apropiado. 
- Mientras que enrutamiento (**routing**) refiere a que la capa de red tiene que determinar la ruta o camino que deben seguir los paquetes a medida que fluyen de un emisor a un receptor. Los algoritmos que calculan estas rutas se conocen como algoritmos de enrutamiento. 

El reenvío hace referencia entonces a la acción local que realiza **un** router al transferir un paquete desde una interfaz de un enlace de entrada a una interfaz del enlace de salida apropiada. Y el enrutamiento, al proceso que realiza la red en conjunto para **determinar las rutas terminal a terminal** que los paquetes siguen desde el origen al destino. Para que la capa de red cumpla su función (transportar paquetes desde un host emisor a un host receptor) estas funciones se relacionan mediante la tabla de forwarding. Cuando un router recibe mensajes del protocolo de enrutamiento utiliza esta información para configurar su tabla de reenvío, la cual es consultada por la función de reenvío para realizar su función.

##### Enlace: 
Transfiere los datos entre elementos de red vecinos (Ethernet, 802.111 (Wifi), PPP).

##### Física: 
Bits en el cable.<div style="page-break-after: always;"></div>

## 1.6 traceroute 

Aplicación que permite determinar el camino de ida (a ser recorrido por los paquetes en un momento dado) entre un origen y un destino.

Implementado sobre ICMP o UDP.

#### Funcionamiento del traceroute sobre ICMP

Al ejecutar el comando (por defecto el único argumento necesario es la dirección IP destino), se envían, por defecto, 3 paquetes IP CON TTL=1 conteniendo 3 mensajes ICMP de control del tipo “echo”. Al llegar al primer salto y decrementado el TTL, este pasa a valer 0 y si no es el destino de los paquetes, se devuelven al origen 3 paquetes IP con dirección IP origen quien los genera, dirección IP destino la dirección IP origen de los paquetes que los motivó y conteniendo cada uno un mensaje de error “time exceeded”. El receptor de los mensajes refleja en una primera línea en consola la llegada de estos tres mensajes así como el tiempo que transcurrió entre que salió cada paquete y se recibió el mensaje de error correspondiente. 

El siguente paso es generar los mismos paquetes que en el paso anterior pero ahora con TTL=2. Ellos atravesarán el primer salto y salvo que sean destinados al segundo salto, el comportamiento será similar el descripto en el párrafo anterior. 

Cuando los paquetes arriban al destino final, en lugar de retornar un mensaje ICMP de error “time exceeded” como en todos los saltos anteriores, se generan mensajes ICMP de control “echo reply”. 

Siempre todos los mensajes que salen desde el host donde se ejecuta el comando lo hacen con la **misma dirección IP destino. **

La dirección IP destino de los paquetes IP que contienen las respuestas ICMP se obtienen de la dirección IP origen del paquete que lo motivó.

La dirección IP origen es la del nodo que genera el mensaje ICMP (payload del paquete IP) 

El payload de los mensajes ICMP de error es una parte del paquete IP que lo originó (encabezado y algunos bits de su payload) 

El traceroute basado en UDP se implementa a partir de enviar mensajes UDP dirigidos a puertos donde la probabilidad de respuesta es muy baja. En todos los nodos intermedios el camino se va construyendo a partir de mensajes “time exceeded”. Al llegar al destino, se recibirá un mensaje ICMP de error “port unreachable”.<div style="page-break-after: always;"></div>

# 2. Capa de Aplicación 

- [[#2.1 Arquitecturas]]
- [[#2.2 Procesos y sockets]]
- [[#2.3 Servicios de transporte]]
- [[#2.4 Protocolos]]<div style="page-break-after: always;"></div>

## 2.1 Arquitecturas 

Cómo la aplicación debe estructurarse en los distintos sistemas terminales.

### Cliente-Servidor
Siempre existe un host activo, denominado servidor, que da servicio a las solicitudes de muchos otros hosts, que son los clientes.
El servidor tiene una dirección fija y conocida (dirección IP) y siempre está activo, por lo que el cliente siempre puede contactar con él enviando un paquete a su dirección.
Suele utilizarse una agrupación (cluster) de host llamado centro de datos, para crear servidores virtuales de gran capacidad.

### P2P
Existe una mínima (o ninguna) dependencia de una infraestructura de servidores siempre activos. En su lugar, la aplicación explota la comunicación directa entre parejas de host conectados de forma intermitente, conocidos como peers (pares). 
**Auto-escalabilidad**. Buena relación costo-prestaciones, ya que, normalmente, no requieren una infraestructura de servidores significativa ni un gran ancho de banda de servidor.

```ad-example
title: Retos importantes

- **Orientadas al ISP**: la mayoría de los ISP están dimensionados para soportar más tráfico de descarga que de carga. Pero las aplicaciones P2P desplazan	el tráfico de carga de los servidores a los ISP residenciales, ejerciendo gran	presión sobre ellos.
- **Seguridad**
- **Incentivos**: convencer a los usuarios para ofrecer voluntariamente a las aplicaciones recursos de ancho de banda, de almacenamiento y de computación.
```

### Arquitectura híbrida
Consiste en utilizar tanto una arquitectura P2P como una cliente-servidor. Ejemplos de esto son Skype, que utiliza P2P para la comunicación por voz, permitiendo una comunicación directa entre los usuarios sin pasar por el servidor, y además el servidor centralizado para encontrar la dirección a la cual comunicar. Y además la mensajería instantánea, que permite el chat entre dos usuarios mediante P2P, teniendo además un servicio centralizado donde se almacena la presencia/localización del cliente (el usuario registra su IP cuando se conecta y luego otro usuario se contacta con el servidor para encontrar la IP para comunicarse).

<div style="page-break-after: always;"></div>

## 2.2 Procesos y sockets 

### Procesos

Un proceso puede interpretarse como un programa que se ejecuta dentro de un sistema terminal. Los procesos de dos sistemas terminales diferentes se comunican entre ellos intercambiando mensajes a través de la red de computadoras.

En el contexto de una sesión de comunicación entre una pareja de procesos, el proceso que inicia la comunicación, se etiqueta como el **_cliente_** y el proceso que espera a ser contactado para comenzar la sesión como el **_servidor_**.

Un proceso envía mensajes a la red y los recibe de la red a través de una interfaz software denominada **socket**. Es la interfaz entre la capa de aplicación y la de transporte de un host.

El único control que tiene el desarrollador de la aplicación sobre el lado de la capa de transporte es: 
- la elección del protocolo de transporte y
- la capacidad de fijar algunos parámetros.

### Sockets

Los procesos envían y reciben mensajes por medio de una interfaz de software llamada Socket. Un socket es análogo a una puerta, donde el proceso es análogo a la casa. El proceso emisor “empuja” el mensaje hacia afuera a través de la puerta y confía en la infraestructura de transporte del otro lado de la puerta, la cual transmite el mensaje hasta la puerta (socket) del receptor. Un Socket también es conocido como una API (Application Programming Interface) entre la aplicación y la red, dado que los sockets son las interfaces con las cuales son construidas las aplicaciones. 

En la capa de transporte, los únicos controles que se hacen desde los sockets son:
1. la elección del protocolo de transporte
2. la habilidad de corregir algunos parámetros

![[Pasted image 20221005140546.png|300]]<div style="page-break-after: always;"></div>

## 2.3 Servicios de transporte 

### Servicios disponibles para aplicaciones

- ## Transferencia de datos fiable: 
Un protocolo proporciona un servicio de entrega de datos garantizado. Si un protocolo no proporciona una transferencia de datos fiable, los datos enviados por el proceso emisor pueden no llegar nunca al proceso de recepción. Esto puede ser aceptable para aplicaciones tolerantes a pérdidas.

- ## Tasa de transferencia: 
Disponible garantizada a una cierta velocidad especificada. 

**Aplicaciones sensibles al ancho de banda:** aplicaciones con requisitos de tasa de transferencia.
**Aplicaciones elásticas:** pueden hacer uso de la tasa de transferencia que haya disponible.

- ## Temporización: 
Atractivo para aplicaciones en tiempo real.

- ## Seguridad:
Confidencialidad entre los procesos, garantizar la integridad de los datos y mecanismos de autenticación en el punto terminal.


### Servicios de transporte proporcionados por Internet

#### Servicios TCP
Muchos programas dentro de una red de datos compuesta por redes de computadoras, pueden usar TCP para crear “conexiones” entre sí a través de las cuales puede enviarse un flujo de datos. El protocolo garantiza que los datos serán entregados en su destino sin errores y en el mismo orden en que se transmitieron. También proporciona un mecanismo para distinguir distintas aplicaciones dentro de una misma máquina, a través del concepto de puerto. 
TCP da soporte a muchas de las aplicaciones más populares de Internet (navegadores, intercambio de ficheros, clientes FTP, etc.) y protocolos de aplicación HTTP, SMTP, SSH y FTP. 
Este modelo de servicio ofrece un servicio orientado a conexión y un servicio de transferencia confiable de los datos. Cuando una aplicación invoca TCP como protocolo, la aplicación recibe ambos de estos servicios.

- Servicio orientado a la conexión: 
	cliente y servidor intercambian la información de control de la capa de transporte entre sí antes que empiecen a fluir los mensajes de la capa de aplicación. Después de la negociación se dice que hay una conexión TCP (full duplex) entre los sockets de los dos procesos.
- Servicio de transferencia de datos fiable: 
	Los procesos pueden confiar en TCP para entregar todos los datos enviados sin errores y en el orden correcto. 
	TCP también incluye un servicio de control de congestión para mejorar el funcionamiento general de internet, más que para el beneficio directo de los procesos que se comunican.
- No provee:
	Control de tiempo, garantías de throughput mínimo ni seguridad.

#### Servicios UDP
UDP es un protocolo de transporte ligero simple que proporciona unos servicios mínimos y no está orientado a la conexión, por lo que no tiene lugar un procedimiento de negociación antes de que los dos procesos comiencen a comunicarse. 
UDP proporciona un servicio de transferencia de datos no fiable. Tampoco incluye un mecanismo de congestión.
Es decir, UDP ni siquiera garantiza que el mensaje vaya a llegar a su destino, e incluso pueden llegar desordenados.<div style="page-break-after: always;"></div>

## 2.4 Protocolos 

Define cómo los procesos de una aplicación, que se ejecutan en distintos sistemas
terminales, se pasan los mensajes entre sí. 
Define:
- Tipo de mensajes intercambiados (petición, respuesta, etc.)
- Sintaxis de los mensajes (qué campos en los mensajes y cómo están delineados)
- Semántica de los campos (significado de la información en los campos)
- Reglas para determinar cuándo y cómo enviar o responder mensajes.

Tenemos dos tipos de protocolos, los de Dominio Público (definidos en RFCs, permiten la interoperabilidad, por ejemplo, HTTP y SMTP) y los Protocolos Propietarios (como Skype).

### Algunos vistos en el curso:
- [[#2.4.1 La Web y HTTP]]
- [[#2.4.2 DNS]]
- [[#2.4.3 Correo electronico]]
- [[#2.4.4 FTP]]
- [[#2.4.5 P2P y Bitorrent]]

<div style="page-break-after: always;"></div>

### 2.4.1 La Web y HTTP 

#### La Web

Las páginas web consisten en objetos, que pueden ser archivos HTML, imágenes, Java applet, archivos de audio, video, etc. Cada página web consiste en un archivo base HTML que incluye referencias a otros objetos, cada uno de ellos direccionable por una URL. Un ejemplo de URL es `www.someschool.edu/someDept/pic.gig`, donde `www.someschool.edu` indica el nombre del host, y `/someDept/pic.gig` indica el path del objeto solicitado.

#### HTTP (HyperText Transfer Protocol)

Se implementa en dos programas, un programa cliente y un programa servidor que se ejecutan en sistemas terminales diferentes, se comunican entre sí intercambiando mensajes HTTP usualmente en el puerto 80. Define cómo los clientes web solicitan páginas web a los servidores web y cómo estos servidores transfieren esas páginas web a los clientes. 

Utiliza **TCP** como protocolo de transporte. No mantiene ninguna información acerca del estado del cliente, por lo tanto, se dice que HTTP es un **protocolo sin memoria de estado.** Como envía las líneas de cabecera de solicitud y respuesta por la misma conexión TCP que transporta el propio archivo transferido, se dice que HTTP envía su información de control **en banda**.

**Conexiones persistentes:** Todas las solicitudes y respuestas en una interacción se envían por la misma conexión TCP.
**Conexiones no persistentes:** Cada par solicitud/respuesta se envían en conexiones TCP separadas.

Se pueden establecer varias conexiones TCP en paralelo para la misma aplicación.
**RTT** (Round-Trip Time): “tiempo de ida y vuelta”, es el tiempo que tarda un paquete pequeño en viajar desde el cliente al servidor y volver de nuevo al cliente.

Los problemas del HTTP no persistente son: 
- Requiere `2*RTT` por objeto
- Overhead del SO para cada conexión TCP
- Los navegadores generalmente abren conexiones TCP paralelas para poder recuperar los objetos referenciados

```ad-faq
title: Nota

El header "Connection" con valor "keep-alive" indica que la conexión se debe manetener abierta (de ser posible).
```


##### Mensajes HTTP

###### Solicitud

![[Pasted image 20221005142036.png]]

```ad-important
title: GET


La inmensa mayoría de los mensajes de solicitud HTTP utilizan el método GET. Este método se emplea cuando el navegador solicita un objeto, identificándose dicho objeto en el campo URL. 
```

```ad-note
title: POST


A menudo, un cliente HTTP utiliza el método POST cuando el usuario completa un formulario; por ejemplo, cuando especifica términos para realizar una búsqueda utilizando un motor de búsqueda. Con un mensaje POST, el usuario solicita también una página web al servidor, pero el contenido concreto de la misma dependerá de lo que el usuario haya escrito en los campos del formulario. Si el valor del campo de método es POST, entonces el cuerpo de la entidad contendrá lo que el usuario haya introducido en los campos del formulario. 
No podemos dejar de mencionar que una solicitud generada con un formulario no necesariamente utiliza el método POST. En su lugar, a menudo los formularios HTML emplean el método GET e incluyen los datos de entrada (especificados en los campos del formulario) en el URL solicitado.
```

```ad-important
title: HEAD


El método HEAD es similar al método GET. Cuando un servidor recibe una solicitud con el método HEAD, responde con un mensaje HTTP, pero excluye el objeto solicitado. Los desarrolladores de aplicaciones a menudo utilizan el método HEAD para labores de depuración.
```

```ad-note
title: PUT


El método PUT suele utilizarse junto con herramientas de publicación web. Esto permite a un usuario cargar un objeto en una ruta específica (directorio) en un servidor web determinado. Las aplicaciones que necesitan cargar objetos en servidores web también emplean el método PUT.
```

```ad-important
title: DELETE


El método DELETE permite a un usuario o a una aplicación borrar un objeto de un servidor web.
```


###### Respuesta

![[Pasted image 20221005142116.png]]

Donde el código de estado aparece en la primera línea en los mensajes de respuesta Servidor→Cliente. 

Algunos ejemplos de códigos de respuesta HTTP son:
- **200 OK:** La solicitud se ha ejecutado con éxito y se ha devuelto la información en el mensaje de respuesta.
- **301 Moved Permanently:** El objeto solicitado ha sido movido de forma permanente; el nuevo URL se especifica en la línea de cabecera Location: del mensaje de respuesta. El software cliente recuperará automáticamente el nuevo URL.
- **400 Bad Request:** Se trata de un código de error genérico que indica que la solicitud no ha sido comprendida por el servidor.
- **404 Not Found:** El documento solicitado no existe en este servidor.
- **505 HTTP Version Not Supported:** La versión de protocolo HTTP solicitada no es soportada por el servidor.

##### Cookies

Permiten identificar y almacenar información de los usuarios. La primera vez que un usuario visita un sitio, este puede proporcionar una identificación del mismo, así en las sesiones posteriores el navegador pasa una cabecera de cookie al servidor, identificando al usuario ante el servidor. Las cookies pueden, por tanto, utilizarse para crear una capa de sesión por encima del protocolo HTTP sin memoria del estado de la conexión 

Utiliza cuatro componentes:
1. una línea de cabecera de la cookie en el mensaje de respuesta HTTP
2. una línea de cabecera de la cookie en el mensaje de solicitud HTTP
3. el archivo de cookie almacenado en el sistema terminal del usuario y gestionado por
    el navegador de usuario
4. una base de datos back-end en el sitio web.


![[Pasted image 20221005142304.png|500]]

##### Almacenamiento Caché

Un caché web, también denominado servidor proxy, es una entidad de red que satisface
solicitudes HTTP en nombre de un servidor web de origen. La caché web dispone de su
propio almacenamiento en disco y mantiene en él copias de los objetos solicitados
recientemente.

1. El navegador establece una conexión TCP con la caché web y envía una solicitud
    HTTP para el objeto de la caché web.
2. La caché web comprueba si tiene una copia del objeto almacenada localmente. Si la
    tiene, la caché web devuelve el objeto dentro de un mensaje de respuesta HTTP al
    navegador del cliente.
3. Si la caché no tiene el objeto, abre una conexión TCP con el servidor de origen y
    envía una solicitud HTTP para obtener el objeto a través de la conexión TCP
    caché-servidor. Después de recibir esta solicitud, el servidor de origen envía el
    objeto dentro de un mensaje de respuesta HTTP a la caché web.
4. Cuando la caché web recibe el objeto, almacena una copia en su dispositivo de
    almacenamiento local y envía una copia, dentro de un mensaje de respuesta HTTP,
    al navegador del cliente.


Una caché es a la vez un servidor y un cliente. Habitualmente es un ISP quién adquiere e instala una caché web. Una caché web puede reducir sustancialmente el tiempo de respuesta a la solicitud de un cliente y reducir el tráfico en el enlace de acceso a Internet de una institución. También pueden reducir el tráfico web global en Internet, mejorando en consecuencia el rendimiento de todas las aplicaciones.

```ad-summary
title: GET condicional

El objetivo es no enviar el objeto si la cache tiene una versión “cacheada” actualizada. La cache especifica la fecha de la copia almacenada en una solicitud HTTP: **If-Modified-Since: 'date'**. 

La respuesta del servidor no contiene un objeto si la copia cacheada está actualizada:

	HTTP/1.0 304 Not Modified.

![[Pasted image 20221005142705.png|400]]
```

<div style="page-break-after: always;"></div>

### 2.4.2 DNS 

#### El servicio de directorio de internet.

El Sistema de nombres de dominio (DNS) de internet es:
- una **base de datos distribuida** implementada en una **jerarquía de servidores** DNS
- un **protocolo de la capa de aplicación** que permite a los host consultar la base de datos distribuida.

El protocolo DNS se ejecuta sobre **UDP** y utiliza el puerto 53.
Traduce nombres de dominio a direcciones IP y viceversa.

Otros servicios:
- **Alias de un host:** Los alias de nombres de host, cuando existen, normalmente son más mnemónicos que los nombres canónicos.
- **Alias de un servidor de correo**: Una aplicación de correo puede invocar a los servicios DNS para obtener el nombre de host canónico para un determinado alias, así como la dirección IP del host.
- **Distribución de carga:** Para los servidores web replicados hay asociado un conjunto de direcciones IP con un único nombre de host canónico. La base de datos DNS contiene este conjunto de direcciones IP. Cuando los clientes realizan una consulta DNS sobre un nombre asignado a un conjunto de direcciones, el servidor responde con el conjunto completo de direcciones IP, pero rota el orden de las direcciones en cada respuesta, distribuyendo el tráfico porque normalmente se envían mensajes a la primera dirección IP que aparezca.

#### Cómo funciona DNS

##### Una base de datos jerárquica y distribuida:

DNS utiliza un gran número de servidores, organizados de forma jerárquica y distribuidos alrededor de todo el mundo.

Tres clases de servidores:
- **Servidores DNS raíz:** Existen 13 servidores DNS raíz etiquetados desde la A hasta la M. Cada uno de estos servidores es realmente una agrupación (cluster) de servidores replicados, tanto por propósitos de seguridad como de fiabilidad.

- **Servidores de dominio de nivel superior (TLD):** Estos servidores son responsables de los dominios de nivel superior, como son **_com, net, edu, gov_** y todos los dominios de nivel superior correspondientes a los distintos países, como por ejemplo **_uy_, _uk_, _fr_, _ca_, y _jp_**.

- **Servidores DNS autoritativos:** Todas las organizaciones que tienen hosts accesibles públicamente a través de Internet **deben** proporcionar registros DNS accesibles públicamente que establezcan la correspondencia entre los nombres de dichos hosts y sus direcciones IP. Un servidor DNS autoritativo de una organización alberga estos registros DNS.

- **Servidor DNS local:** no pertenece estrictamente a la jerarquía. Cada ISP tiene un servidor DNS local. Cuando un host realiza una consulta DNS, esta se envía al servidor DNS local, que actúa como proxy, reenviando la consulta a la jerarquía de servidores DNS. 

Las consultas DNS pueden ser **recursivas** o **iterativas**.

![[Pasted image 20221005191304.png|500]]

##### ¿Por qué no centralizar DNS?

Esto llevaría a múltiples problemas, por ejemplo, **un único punto de fallo**, por lo que, si ese servidor falla, todo el sistema dejaría de funcionar. A su vez, el **volumen de tráfico sería muy alto**, la **distancia entre la base de datos y los usuarios tendería a ser larga**, por lo que los tiempos de retardo aumentarían considerablemente y, además, el mantenimiento sería muy frecuente.

##### Cacheo y actualización de registros 

Una vez que cualquier DNS server conoce un mapeo, lo cachea. Las entradas de la caché desaparecen luego de un tiempo, y a su vez, los TLD servers típicamente son cacheados en los Local DNS Servers, de forma que los Root DNS Servers no son visitados frecuentemente. Se utilizan mecanismos de “Update/Notify” definidos en [RFC 2136].

##### Registros DNS

Los Servidores DNS que implementan la base de datos distribuida almacenan **“Resource Records” (RR),** incluyendo aquellos que incluyen el mapeo hostName →IP. 
Un RR es una **4-upla formada por (Nombre, Valor, Tipo, TTL)**, donde TTL es el “Time To Live” del RR, que determina cuando un recurso debe ser retirado de la caché. 
Los significados de Nombre y Valor dependen de la definición de Tipo:
- **Tipo A** 
	- Nombre: hostName 
	- Valor: dirección IP
- **Tipo MX**
	- Valor: nombre del mailserver asociado con Nombre.
- **Tipo NS** 
	- Nombre: dominio (ej. Foo.com)
	- Valor: hostName del servidor DNS autoritativo para este dominio.
- **Tipo CNAME**
	- Nombre: alias para algún “canonical name”. Ejemplo: www.ibm.com es en realidad servereast.backup2.ibm.com
	- Value: nombre canónico.

##### Mensajes DNS 
DNS es un protocolo de mensajes de consulta y respuesta, ambos con el mismo formato de mensaje.

Encabezado:
- Identificador: número identificador de la query de 16 bits, la respuesta usa el mismo identificador.
- Flags: 
	- Consulta
	- Respuesta
	- Recursión deseada
	- Recursión disponible
	- Respuesta es autoritativa

![[Pasted image 20221006184516.png|300]]<div style="page-break-after: always;"></div>

### 2.4.3 Correo electronico 

#### SMTP

Puerto 25, ejecuta sobre TCP para transmitir un correo desde el servidor de correos del emisor al servidor de correo del destinatario. Dos lados, el lado del cliente y del servidor.
Funcionalidades arcaicas como la restricción del cuerpo de los mensajes a formato **ASCII de 7 bits.** Normalmente, SMTP no utiliza servidores de correo intermedios para enviar correos. Si el servidor destinatario no está disponible, el del remitente conservará el mensaje y lo intentará de nuevo.

**Comandos:** 
- HELO {servidor_smtp}
- MAIL FROM: <{mail_sender}>
- RCPT TO: <{mail_dest}>
- DATA {...}
- QUIT.

SMTP utiliza conexiones persistentes: si el servidor de correo emisor tiene varios mensajes
que enviar al mismo servidor de correo receptor, puede enviar **todos los mensajes a través
de la misma conexión TCP**.

```ad-faq
title: "Conversación" entre cliente y servidor
Desde la dirección guri@asado.uy se quiere enviar un correo electrónico a vaina@arepas.ve, utilizando comandos del protocolo SMTP desde una terminal del cliente denominado **localhost**.

ㅤ

![[Pasted image 20221015000920.png|500]]
```

```ad-info
title: Comparación con HTTP

###### Similitudes con HTTP
- Ambos se emplean para transferir archivos de un host a otro
- Para transferir los archivos, ambos emplean conexiones persistentes

ㅤ
###### Diferencias con HTTP
- HTTP es principalmente un protocolo pull y SMTP un protocolo push
- SMTP requiere que cada mensaje, incluyendo el cuerpo de cada mensaje, esté en el formato ASCII de 7 bits. Los datos HTTP no imponen esa restricción.
- Ante un documento con imágenes, HTTP encapsula cada objeto en su propio mensaje de respuesta HTTP, mientras que SMTP incluye todos los objetos del mensaje en un mismo mensaje.
```

#### POP

Puerto 110, protocolo especial de acceso al correo que permite transferir los mensajes **del servidor de correo a una PC local**.

##### Pasos:
- **Autorización:** el agente de usuario envía un nombre de usuario y una contraseña para autenticar al usuario.
- **Transacción:** el agente usuario recupera los mensajes
- **Actualización:** tiene lugar luego del comando QUIT, terminando la sesión SMTP 

###### **Respuestas:**
- `+OK`: el comando era correcto.
- `-ERR`: error en el comando.

###### **Autorización:**
- `user {nombre de usuario}`
- `pass {contraseña}`

![[Pasted image 20221005144152.png|300]]

###### **Transacción:** 
Un agente que utilice POP3 suele ser configurado (por el usuario) para **“descargar y borrar”** (list, retr y dele) o para **“descargar y guardar”**.

Durante una sesión POP3, el servidor POP3 mantiene cierta información de **estado** (relación de los mensajes de usuario que han sido marcados para ser borrados), pero **no conserva la información de estado de una sesión POP3 a otra**.
POP3 no proporciona ningún medio al usuario para crear carpetas remotas y asignar mensajes a las mismas.

![[Pasted image 20221005144252.png|300]]

#### IMAP

Tiene más funcionalidades que POP3, por lo que aumenta considerablemente su complejidad, haciendo que la implementación tanto del lado del cliente como del servidor sean significativamente más complejas. Los mensajes en IMAP se mantienen en un único lugar, el servidor, el cual **asocia cada mensaje a una carpeta**, proveyendo a los usuarios con comandos que permiten crear carpetas y mover mensajes entre ellas. A diferencia de POP3, IMAP **mantiene el estado de los usuarios durante las sesiones**, ya sea nombre de las carpetas o mapeados entre ids de mensajes y nombres de carpetas. A su vez, IMAP permite a los user agent acceder componentes de los mensajes, por ejemplo, obtener solo el *header*.<div style="page-break-after: always;"></div>

### 2.4.4 FTP 

#### File Transfer Protocol

![[Pasted image 20221005143325.png|400]]

Protocolo de transferencia de archivos que se ejecuta sobre **TCP**. Utiliza **dos** conexiones TCP paralelas para transferir un archivo, una **conexión de control** y una **conexión de datos**, por lo cual se dice que envía su información de control **fuera de banda**. La conexión de control permanece abierta mientras que dure la sesión de usuario, pero se crea una nueva conexión de datos **para cada archivo** transferido dentro de la sesión (es decir, las conexiones de datos no son persistentes). El servidor FTP tiene que mantener un **estado** del usuario (al contrario de HTTP).

![[Pasted image 20221005143402.png|400]]

#### Comandos y respuestas de FTP
Se envían a través de la conexión de control de formato ASCII de 7 bits.

##### Comandos:
- **USER**  **_nombre_de_usuario_**: se utiliza para enviar la identificación del usuario al servidor.
- **PASS**  **_contraseña_**: se utiliza para enviar la contraseña del usuario al servidor.
- **LIST**: se utiliza para pedir al servidor que devuelva una lista de todos los archivos existentes en el directorio remoto actual. La lista de archivos se envía a través de una conexión de datos (nueva y no persistente), en lugar de a través de la conexión de control TCP.
- **RETR**  **_nombre_de_archivo_**: se utiliza para recuperar (es decir, extraer) un archivo del directorio actual del host remoto. Este comando hace que el host remoto inicie una conexión de datos y envíe el archivo solicitado a través de la conexión de datos.
- **STOR**  **_nombre_de_archivo_**: se utiliza para almacenar (es decir, introducir) un archivo en el directorio actual del host remoto.

##### Respuestas:
- **331** Username OK, password required
- **125** Data connection already open; transfer starting
- **425** Can’t open data connection
- **452** Error writing file

```ad-info
title: Señalizacion in-band y out-of-band
HTTP utiliza el mismo canal para control y datos, por lo que es del tipo inband. FTP utiliza canales separados para datos y control, por lo que es del tipo out-of-band.
```
<div style="page-break-after: always;"></div>

### 2.4.5 P2P y Bitorrent 

#### Aplicaciones P2P

Con este tipo de arquitectura no se depende de que exista una infraestructura de servidores siempre activos. En su lugar, una serie de parejas de hosts conectados de forma **intermitente**, denominados pares o _peers_, se comunican directamente entre sí. Los pares **no son propiedad de un proveedor de servicios**, sino que son computadoras de escritorio o portátiles controlados por los clientes.

#### Distribución de Archivos: Cliente Servidor vs P2P

Contestaremos la pregunta: ¿Cuánto tiempo se tarda en distribuir un archivo a N peers desde un servidor?

![[Pasted image 20221006185407.png|400]]

El servidor envía secuencialmente $N$ copias de $F$, en un tiempo de $N \times F/u_s$, y el cliente $i$ tarda un tiempo de $F/d_i$ en descargarlo, por lo que el tiempo para distribuir un archivo entre $N$ clientes, con 1 servidor en una arquitectura cliente-servidor es:
$$d_{cs} = max\{N \times F/u_s,\: F/min_i(d_i)\}$$

#### Bitorrent

Es un popular protocolo P2P para la distribución de archivos.
**Torrente**: todos los pares que participan en la distribución de un determinado archivo.
Los peers de un torrente descargan fragmentos del mismo tamaño del archivo de uno a otro, siendo el tamaño típico de un fragmento de 256 kBytes.
Cuando un par se une por primera vez a un torrente, no tiene fragmentos del archivo. A lo largo del tiempo va acumulando cada vez más fragmentos. A la vez que descarga fragmentos, actualiza fragmentos en otros pares. 

Una vez que un par ha adquirido el archivo completo, puede abandonar el torrente, o permanecer en el mismo, y continuar suministrando fragmentos a otros pares. Además, cualquier par puede abandonar el torrente en cualquier instante con solo un subconjunto de fragmentos, y volver a unirse más tarde.

Cada torrente tiene un nodo de infraestructura denominado **tracker** (rastreador). Cuando un par se une a un torrente, se registra mediante tracker y periódicamente, informa de que todavía se encuentra en el torrente.

Todos los pares con los que se consigue una conexión TCP se le denomina **par vecino** y estos varían con el tiempo. 

En un determinado instante de tiempo, cada peer tendrá un subconjunto de fragmentos del archivo, disponiendo los distintos pares de subconjuntos diferentes. Periódicamente, cada peer preguntará a cada uno de sus vecinos (a través de las conexiones TCP) por la lista de fragmentos de la que disponen. Con esta información, cada peer solicitará los fragmentos que no tiene. Para decidir qué fragmentos solicitar, cada peer utiliza una técnica conocida como **"primero el menos común".** La idea es determinar, de entre los fragmentos que ella no tiene, los fragmentos menos comunes entre sus vecinos y solicitar entonces en primer lugar esos fragmentos menos comunes.

Para determinar a qué solicitudes debe un peer responder, se le da prioridad a los vecinos que actualmente están suministrando sus datos a mayor velocidad. Por lo tanto, el peer mide de forma continua la velocidad a la que recibe bits y determina cuáles son los cuatro pares que le envían bits a mayor velocidad (peers **unchoked**). Entonces, de forma recíproca, envía fragmentos a esos mismos cuatro pares. Cada 10 segundos, vuelve a calcular las velocidades y, posiblemente, tendrá que modificar el conjunto formado por los cuatro pares.

Cada 30 segundos cada peer elegirá aleatoriamente un nuevo socio de intercambio (peer optimistically **unchoke**) e iniciará las transacciones con él. Si los dos pares están satisfechos con el intercambio, se incluirán en sus respectivas listas de los cuatro principales y continuarán realizando intercambios hasta que uno de los pares encuentre un socio mejor.
Este mecanismo se denomina **_tit-for-that._**
<div style="page-break-after: always;"></div>

# 3. Capa de Transporte 

Un protocolo de capa de transporte proporciona una **comunicación lógica entre procesos** de aplicación que se ejecutan en hosts diferentes (mientras que un protocolo de la capa de red proporciona una comunicación lógica entre hosts). Están **implementados en los sistemas terminales** y residen en ellos. Dentro de un sistema terminal, el protocolo de transporte lleva los mensajes desde los procesos de la aplicación a la frontera de la red.

Los servicios que un protocolo de transporte puede proporcionar a menudo están restringidos por el modelo de servicio del protocolo de la capa de red subyacente. No obstante, el protocolo de transporte puede ofrecer ciertos servicios incluso cuando el protocolo de red subyacente no ofrezca el servicio correspondiente en la capa de red.

```ad-warning
title: Servicio indispensable:
Extender la entrega host a host (lo que proporciona la capa de red) a una entrega proceso a proceso.
```

- [[#3.1 Multiplexación y demultiplexación]]
- [[#3.2 Principios de UDP]]
- [[#3.3 RDT, un servicio de transferencia de datos fiable]]
- [[#3.4 Principios de pipelining GBN y SR]]	
- [[#3.5 Principios de Control de Congestión]]
- TCP:
	- [[#3.6.1 Principios de TCP]]
	- [[#3.6.2 TCP, control de flujo]]
	- [[#3.6.3 TCP, control de congestión]]
<div style="page-break-after: always;"></div>

## 3.1 Multiplexación y demultiplexación 

Para poder extender la entrega host a host a una entrega proceso a proceso.

**Demultiplexación:** En el extremo receptor, la capa de transporte examina un conjunto de campos del segmento para identificar el socket receptor y a continuación envía el segmento a dicho socket.

**Multiplexación:** La tarea de reunir fragmentos de datos en el host de origen desde los diferentes sockets, encapsulando cada fragmento de datos con la información de cabecera para crear los segmentos y pasarlos a la capa de red.

Para la tarea de multiplexación es necesario que los sockets tengan identificadores únicos y que cada segmento tenga campos especiales que indiquen el socket al que tiene que entregarse el segmento (campo número de **puerto de origen** y campo número de **puerto destino**).

Número de puerto: **16 bits**, del 0 al 1023 están reservados para las aplicaciones.

**Socket UDP:** queda identificado con dirección IP de destino y número de puerto de destino.
**Socket TCP:** queda identificado con dirección IP de destino, número de puerto de destino, dirección IP de origen y número puerto de origen.

**Servidores Web y TCP:** A menudo únicamente utilizan un proceso y crean nuevos threads con un nuevo socket de conexión para cada nueva conexión de un cliente.

```ad-danger
title: Diferencia entre protocolos orientados a conexión y no orientados a conexión

En el caso de un protocolo no orientado a conexión, la demultiplexación se realiza solo a partir del puerto destino (además de la IP destino que identifica al host). Es decir cada socket dentro de un mismo host es identificado por el puerto en donde está esperando los mensajes. 

</br>

En el caso de un protocolo orientado a conexión, además de la IP y puerto destino, se utiliza también la IP y puerto origen para realizar la demultiplexación. Es decir, dos mensajes con igual IP y puerto destino, pueden estar dirigidos a distintos sockets si la IP y puerto origen son distintos.

</br>

Esto queda más claro al programar una aplicación que usa sockets TCP: del lado del servidor se van creando sockets a medida que se conectan los clientes.
```
<div style="page-break-after: always;"></div>

## 3.2 Principios de UDP 

Protocolo que hace casi lo mínimo que un protocolo de transporte debe hacer. Además de la función de multiplexación/demultiplexación y algún mecanismo de comprobación de errores, **no añade nada a IP**. Prácticamente, es la aplicación la que se comunica directamente con IP.

Con UDP no se tiene lugar una fase de establecimiento de la conexión entre las entidades de la capa de transporte emisora y receptora previa al envío del segmento. Por eso se dice que UDP **es un protocolo sin conexión.**

### Ventajas frente a TCP: 

- **Mejor control en el nivel de aplicación, sobre qué datos se envían y cuándo:** 
Tan pronto como un proceso pasa datos a UDP, UDP los empaqueta en un segmento UDP e inmediatamente entrega el segmento a la capa de red.

- **Sin establecimiento de la conexión:**
UDP inicia la transmisión sin formalidades preliminares. Por tanto, UDP no añade ningún retardo a causa del establecimiento de una conexión.

- **Sin información del estado de la conexión:**
UDP no mantiene información del estado de la conexión y no controla ninguno de estos parámetros. Por lo cual un servidor dedicado a una aplicación concreta suele poder soportar más clientes activos cuando la aplicación se ejecuta sobre UDP que cuando lo hace sobre TCP.

- **Poca sobrecarga debida a la cabecera de los paquetes:**
Solo requiere 8 bytes.

### Desventajas frente a TCP:

- No hay ninguna garantía de que los datos lleguen al receptor. Dado que UDP no implementa transferencia fiable, no es posible asegurar que los datos enviados hayan sido recibidos por el receptor. 

- Es posible saturar al receptor o incluso saturar la red y no darse cuenta del problema. Dado que UDP no implementa control de flujo ni control de congestión, es posible que se generen problemas como ser la pérdida de paquetes debido a que el receptor no puede procesar los datos tan rápido como son recibidos o que incluso se sature la capacidad de la red. En este caso, la aplicación experimentaría una pérdida considerable de paquetes.

``````ad-danger
title: **No** hay control de congestión
Se dice que UDP no es un **protocolo justo**, dado que no tiene control de congestión, puede enviar segmentos a la velocidad que le permita el medio (o le demande la aplicación) y no se autolimita acorde al estado de la red. De esta forma, UDP podría consumir un mayor ancho de banda frente a las conexiones TCP que coexistan en el mismo tiempo. Esto puede generar que la red entre en un estado de congestión y se produzcan desbordamientos masivos de paquetes en los routers. Por lo tanto, la ausencia de control de congestión en UDP puede dar lugar a **altas tasas de pérdidas** entre un emisor y un receptor UDP.

ㅤ

```ad-info
title: Posible solución

Para que UDP pueda implementar control de congestión sería necesario contar con algún mecanismo que informe o infiera la existencia de congestión en la red. Por ejemplo, TCP utiliza la pérdida de mensajes de confirmación ACK para inferir la congestión. Por lo tanto, si se desea que UDP realice control de congestión, una opción sería agregarle mensajes de confirmación o algún tipo de retroalimentación del receptor. También se podría implementar algún tipo de retroalimentación de parte de los nodos intermedios de la red. Luego, pudiendo detectar la congestión, el siguiente paso sería agregar a UDP algún mecanismo que controle los datos que se envían, pudiendo reducir o aumentar la velocidad a la que se envían los datos.
```
``````

### Segmento UDP

Los datos de la aplicación ocupan el campo de datos del segmento.
La cabecera UDP solo tiene 4 campos y cada uno de ellos tiene una longitud de 2 bytes.
El host receptor utiliza la suma de comprobación para detectar si se han introducido errores en el segmento.

![[Captura desde 2022-10-04 20-42-11.png|400]]

#### Suma de comprobación

Mecanismo de **detección de errores**. No existe ninguna garantía de que todos los enlaces existentes entre el origen y el destino proporcionen un mecanismo de comprobación de errores, es decir, uno de los enlaces puede utilizar un protocolo de la capa de enlace que no proporcione comprobación de errores. Incluso si los segmentos se transfieren correctamente a través del enlace, es posible que se introduzcan errores de bit cuando un segmento se almacena en la memoria de un router. Aunque UDP proporciona un mecanismo de comprobación de errores, **no hace nada para recuperarse del error**. 

```ad-info
Algunas implementaciones de UDP simplemente descartan el segmento dañado y otras lo pasan a la aplicación junto con una advertencia.
```<div style="page-break-after: always;"></div>

## 3.3 RDT, un servicio de transferencia de datos fiable 

La abstracción del servicio proporcionada a las entidades de la capa superior es la de un canal fiable a través del cual se pueden transferir datos. Disponiendo de un canal fiable, **ninguno de los bits de datos transferido está corrompido ni se pierde** y **todos se entregan en el orden en que fueron enviados**. Es la responsabilidad de un protocolo de transferencia de datos fiable implementar esta abstracción del servicio. Tarea complicada por el hecho de que la capa que hay por debajo del protocolo de transferencia de datos puede ser no fiable.

El lado emisor del protocolo de transferencia de datos será invocado desde la capa superior mediante una llamada a `rdt_enviar()`, que pasará los datos que haya que entregar a la capa superior en el lado receptor. En el lado receptor, `rdt_recibir()`, será llamado cuando llegue un paquete desde el lado receptor del canal.
Cuando el protocolo RDT desea suministrar datos a la capa superior, lo hará llamando a `entregar_datos()`.

### Transferencia de datos fiable sobre un canal totalmente fiable: rdt1.0

El canal subyacente es **perfectamente confiable**, sin errores en bits y sin pérdida de paquetes.
Separamos en dos máquinas de estado finitas, una para el emisor y la otra para el receptor. Por un lado, el emisor envía datos al canal subyacente, mientras que el receptor lee los datos de dicho canal.

```ad-info
title: Maquinas de estado


![[Pasted image 20221006195649.png]]
```

### Transferencia de datos fiable sobre un canal con errores de bit: rdt2.0

En este caso, el canal subyacente puede **intercambiar bits en el paquete**, para lo que se utiliza el checksum para detectarlos. Sin embargo, esto no es suficiente para recuperarse de dichos errores.

Para esto se utilizan dos herramientas: 
- Acknowledgments (**ACKs**): donde el receptor le dice explícitamente al emisor que el paquete fue recibido correctamente. 
- Negative Acknowledgments (**NAKs**): donde el receptor le avisa al emisor que el paquete tiene errores. 

Cuando el emisor recibe un NAK, retransmite el paquete. De esta forma, se añade en RDT 2.0 la posibilidad de detectar errores, además de que el receptor tiene la posibilidad de realizar un feedback utilizando los mensajes de control (ACKs y NAKs).

```ad-tip
title: ARQ
Los protocolos de transferencia de datos fiables basados en tales retransmisiones se conocen como protocolos ARQ (Automatic Repeat reQuest, Solicitud automática de repetición).
```

```ad-info
title: Maquinas de estado

![[Pasted image 20221006200255.png]]
```

Cuando el emisor está en el estado “Esperar ACK o NAK”, no puede obtener más datos de la capa superior. Debido a esto, a estos protocolos se los conoce como protocolos de **parada y espera** (_stop-and-wait_ protocol).

```ad-warning
title: Problema
Si un paquete ACK o NAK está corrompido, **el emisor no tiene forma de saber si el receptor ha recibido o no correctamente el último fragmento de datos transmitido**.
```

#### Transferencia de datos fiable sobre un canal con errores de bit: rdt2.1

Una solución sencilla consiste en añadir un nuevo campo al paquete de datos, y hacer que el emisor numere sus paquetes de datos colocando un **número de secuencia** en este campo.

```ad-info
title: Maquinas de estado

![[Pasted image 20221006200413.png|600]]

![[Pasted image 20221006200432.png|600]]
```

#### Transferencia de datos fiable sobre un canal con errores de bit: rdt2.2

Tiene la misma funcionalidad que el rdt 2.1, pero **utilizando únicamente ACKs**. En lugar de un NAK, el receptor envía un ACK para el último para el último paquete recibido correctamente, por lo que se debe indicar explícitamente el número de secuencia del paquete al cual corresponde el ACK. Un ACK duplicado en el emisor resulta en la misma acción de un NAK, retransmitir el paquete actual.

```ad-info
title: Maquinas de estado


![[Pasted image 20221006200618.png]]
```

Reetransmisión cuando:
- ACK con nro_sec distinto al esperado
- Paquete recibido corrupto (no se puede saber si era ACK 0 o 1)

### Transferencia de datos fiable sobre un canal con pérdidas y errores de bit: rdt3.0

Si el emisor está dispuesto a esperar el tiempo suficiente como para estar seguro de que se ha perdido un paquete, simplemente puede retransmitir. El emisor deberá esperar un tiempo **al menos igual al retardo de ida y vuelta** entre el emisor y el receptor. 
El método que se adopta en la práctica es que el emisor seleccione juiciosamente un intervalo de tiempo tal que sea probable que un paquete se haya perdido, aunque no sea seguro que tal pérdida se haya producido. 
Si dentro de ese intervalo de tiempo no se ha recibido un ACK, el paquete se retransmite. Esto introduce la posibilidad de que existan paquetes de datos duplicados en el canal emisor-receptor. Pero se cuenta con los números de secuencia para afrontar esto.

La implementación de un mecanismo de retransmisión basado en el tiempo requiere un **temporizador de cuenta atrás** que pueda interrumpir al emisor después de que haya transcurrido un determinado periodo de tiempo. 

Por tanto, el emisor necesitará poder:
1. iniciar el temporizador cada vez que envíe un paquete (bien por primera vez o en una retransmisión)
2. responder a una interrupción del temporizador (ejecutando las acciones apropiadas)
3. detener el temporizador.

Dado que los números de secuencia de los paquetes alternan entre 0 y 1, este protocolo se denomina en ocasiones **protocolo de bit alternante**.

```ad-info
title: Maquinas de estado


![[Pasted image 20221006200804.png|600]]

![[Pasted image 20221006200824.png|600]]
```

```ad-example
title: Ejemplos de corridas

![[Pasted image 20221006200909.png|600]]
```
<div style="page-break-after: always;"></div>

## 3.4 Principios de pipelining GBN y SR 

### Protocolo de transferencia fiable con procesamiento en cadena

Improbable que los protocolos de parada y espera satisfagan con su rendimiento. Por lo que en lugar de operar en este modo, el emisor podría enviar varios paquetes sin esperar a los mensajes de reconocimiento.

```ad-warning
title: Consecuencias
- El rango de los números de secuencia tiene que incrementarse.
- Los lados emisor y receptor de los protocolos pueden tener que almacenar en buffer más de un paquete.
- El rango necesario de los números de secuencia y los requisitos de buffer dependerán de la forma en que un protocolo de transferencia de datos responda a la pérdida de paquetes y a los paquetes corrompidos o excesivamente retardados.
```

![[Pasted image 20221006201817.png]]

### Retroceder N (GBN, Go-Back-N)

En este protocolo, el emisor puede transmitir varios paquetes sin tener que esperar a que sean reconocidos, pero está restringido a no tener más de un número máximo permitido, N, de paquetes no reconocidos en el canal. El receptor sólo envía **ACKs acumulativos**, no envía el ACK de un paquete si hay un hueco. El emisor tiene un timer para el paquete más viejo no reconocido, si el timer vence, **retransmite todos los paquetes no reconocidos.**

El rango de los números de secuencia permitidos para los paquetes transmitidos pero todavía no reconocidos puede visualizarse como una ventana de tamaño N. Esta ventana se desplaza hacia adelante a medida que el protocolo opera.
Por esta razón, N suele denominarse tamaño de ventana y el propio protocolo GBN se dice que es un **protocolo de ventana deslizante.**

El emisor del protocolo GBN tiene que responder a:
- Invocación desde la capa superior
- Recepción de un mensaje de reconocimiento ACK
- Un suceso de fin de temporizador

El receptor descarta los paquetes que no están en orden y envía un mensaje de reconocimiento para el número de secuencia del último mensaje que recibió en orden. Por tanto, mientras el emisor tiene que mantener los límites inferior y superior de su ventana y la posición de `signumsec` dentro de esa ventana, el único fragmento de información que el receptor debe mantener es el número de secuencia del siguiente paquete en orden.

![[Pasted image 20221006201929.png]]

```ad-hint
title: Maquinas de estado



##### Emisor
![[Pasted image 20221006202108.png|500]]



##### Receptor
![[Pasted image 20221006202220.png|500]]

```

#### Descarte de paquetes
Si bien parece absurdo y un desperdicio de recursos descartar un paquete recibido correctamente (pero desordenado), hay que tener en cuenta que el receptor debe entregar los datos en orden a la capa superior. Si se espera el paquete n, pero llega el paquete n+1, el receptor podría guardarlo en el buffer de recepción, para entregarlo a la capa superior después de haber recibido y entregado el paquete n. Sin embargo, si se pierde el paquete n, tanto este como el paquete n+1 serán retransmitidos como resultado de la regla de retransmisión del emisor. Por tanto, el receptor puede simplemente descartar el paquete n+1. 
La ventaja de este método es la simplicidad del almacenamiento en el buffer del receptor (el receptor no necesita almacenar en el buffer ninguno de los paquetes entregados desordenados), y solo debe mantener es el número de secuencia del siguiente paquete en orden.

### Repetición Selectiva (SR)

Los protocolos de repetición selectiva evitan las retransmisiones innecesarias haciendo que el emisor **únicamente retransmita aquellos paquetes que se sospeche que llegaron al receptor con error** (es decir, que se perdieron o estaban corrompidos). Esta retransmisión individualizada y necesaria requerirá que el **receptor confirme individualmente qué paquetes ha recibido correctamente**.

El receptor de SR confirmará que un paquete se ha recibido correctamente tanto si se ha recibido en el orden correcto **como si no.** Los paquetes no recibidos en orden se almacenarán en el buffer hasta que se reciban los paquetes que faltan (es decir, los paquetes con números de secuencia menores), momento en el que un lote de paquetes puede entregarse en orden a la capa superior.

Las ventanas del emisor y el receptor no siempre coinciden. **El tamaño de la ventana tiene que ser menor o igual que la mitad del tamaño del espacio de números de secuencia**.

![[Pasted image 20221006202250.png]]

``````ad-question
title: Pregunta


```ad-danger
title: Suponga que el tamaño del espacio de números de secuencia es S. ¿Cuál es la máxima ventana de emisor permitida para evitar confusiones del lado del receptor?


En el caso de GBN es suficiente con que la ventana tenga tamaño S-1. Esto se debe a que el receptor no tiene buffer y siempre espera por un único segmento. 

</br>

En el caso de SR, el tamaño de la ventana tiene que ser menor o igual que la mitad del tamaño del espacio de números de secuencia. Esto se debe a que la ventana del emisor, de tamaño N, puede empezar, según los ACKs recibidos, en cualquier valor entre [k-N,k-1], siendo k el siguiente paquete a ser enviado. Si hubiera recibido ACKs hasta k-1, entonces la ventana sería [k,k+N-1]; por lo tanto “los números de secuencia ocupados” por el emisor son potencialmente 2N (k-N hasta k+N-1). Luego 2N debe ser menor o igual que S, el espacio de números de secuencia disponibles.

```
``````

```ad-tldr
title: Resumen


![[Pasted image 20221006202608.png]]
```
<div style="page-break-after: always;"></div>

## 3.5 Principios de Control de Congestión 

### Principios de Control de Congestión

La retransmisión de paquetes se ocupa de un síntoma de la congestión de red, pero** no se ocupa de la causa** de esa congestión de la red, que informalmente podemos definir como demasiados emisores intentando transmitir datos a una velocidad demasiado alta.
Para tratar la causa de la congestión es que se usan **mecanismos de control de congestión**.
Sabremos que existe congestión en la red si tenemos una pérdida de paquetes **(buffer overflow en los routers)** o **grandes retardos** (encolamiento en los buffers de los routers).

#### Métodos para controlar la congestión

- ### Control de congestión terminal a terminal
La capa de red **no** proporciona soporte explícito a la capa de transporte para propósitos de control de congestión. La pérdida de segmentos TCP se toma como indicación de que existe congestión en la red, en consecuencia TCP reduce el tamaño de su ventana.
También se utilizan los **valores de retardo de ida y vuelta crecientes** como indicadores de que existe una mayor congestión de la red.

- ### Control de congestión asistido por la red
Los routers proporcionan una realimentación explícita (un bit que indica que existe congestión en un enlace o un paquete de asfixia) al emisor informando del estado de la congestión de la red.

```ad-info
title: Diferencias entre Control de flujo y Control de congestión
El control de flujo persigue que el emisor no transmita datos a una tasa de transmisión más alta de la que el receptor puede procesar. El control de congestión, en cambio, se encarga de que el transmisor no lo haga a una tasa más alta que lo que los enrutadores intermedios puedan procesar.
```
<div style="page-break-after: always;"></div>

## 3.6.1 Principios de TCP 

Para proporcionar una transferencia de datos fiable, TCP confía en muchos de los principios básicos, incluyendo los **mecanismos de detección de errores**, las **retransmisiones**, los **reconocimientos acumulativos,** los **temporizadores** y los campos de cabecera para los **números de secuencia y de reconocimiento**.

Se dice que TCP está **orientado a la conexión** porque antes de que un proceso de la capa de aplicación pueda comenzar a enviar datos a otro, los dos procesos deben primero **“establecer una comunicación”** entre ellos; es decir, tienen que enviarse ciertos segmentos preliminares para definir los parámetros de la transferencia de datos que van a llevar a cabo a continuación. Como parte del proceso de establecimiento de la conexión TCP, ambos lados de la misma iniciarán muchas variables de estado TCP asociadas con la conexión TCP.

Dado que el protocolo **TCP se ejecuta únicamente en los sistemas terminales** y no en los elementos intermedios de la red (routers y switches de la capa de enlace), los elementos intermedios de la red no mantienen el estado de la conexión TCP; los routers ven los datagramas, no las conexiones.

Proporciona un servicio **full-duplex** (flujo de datos en ambas direcciones en la misma conexión). Una conexión TCP casi siempre es una conexión **punto a punto** (entre un único emisor y un único receptor).

![[Pasted image 20221006213600.png]]

De vez en cuando, TCP tomará fragmentos de datos del buffer de emisión. La cantidad máxima de datos que pueden tomarse y colocarse en un segmento de la capa de red, está limitada por el tamaño máximo de segmento (MSS).
TCP empareja cada segmento de datos del cliente con una cabecera TCP, formando los segmentos TCP.
Cuando TCP recibe un segmento en el otro extremo, los datos se colocan en el buffer de recepción.
En conclusión, **TCP consta de buffers, variables y un socket de conexión a un proceso en cada host** perteneciente a la conexión.

### Establecimiento de una conexión mediante el **acuerdo en tres fases**
1. El proceso de la aplicación cliente informa a la capa de transporte del cliente que desea establecer una conexión con un proceso del servidor.
2. La capa de transporte del cliente procede entonces a establecer una conexión TCP con el servidor.
3. Una vez establecida la conexión, cuando el cliente desea enviar datos al servidor, el cliente pasa un flujo de datos a través del socket.
4. Una vez que los datos están en manos de TCP, esos datos son dirigidos al buffer de emisión de la conexión

### Segmento TCP

**20 bytes** en total.

El segmento TCP consta de campos de cabecera y un campo de datos. El campo de datos contiene un fragmento de datos de la aplicación.

![[Pasted image 20221006213622.png|600]]

El número de puerto de origen y destino, se usan para multiplexar y demultiplexar los datos.
Al igual que en UDP, se usa un campo de suma de comprobación (**checksum**). 
También incluye un campo número de secuencia (32 bits) y el número de reconocimiento (32 bits) usados para el servicio de transferencia de datos fiable.
El campo ventana de recepción (16 bits) se usa por el control de flujo. 
El campo longitud de cabecera (4 bits), la cabecera puede tener una longitud variable. 
El campo opciones (normalmente vacío). 
El campo indicador (6 bits), bit **ack**, **rst**, **syn** y **fin**.

#### Número de secuencia y número de reconocimiento

TCP percibe los datos como un flujo de bytes no estructurado pero ordenado. El **número de secuencia** de un segmento es el número del *primer* byte del segmento dentro del flujo de bytes. El **número de reconocimiento** que el host receptor incluye en su segmento es el número de secuencia del *siguiente* byte que el host receptor está esperando del host emisor. TCP proporciona reconocimiento acumulativo dado que solo confirma los bytes hasta el primer byte que falta en el flujo.

![[Pasted image 20221006213855.png|350]]

Dependiendo de la implementación, cuando los segmentos no llegan en orden:
- el receptor descarta de forma inmediata los segmentos que no han llegado en orden
- el receptor mantiene los bytes no ordenados y espera a que lleguen los bytes que faltan con el fin de rellenar los huecos (normal en la práctica)

Ambos lados de la conexión TCP **eligen aleatoriamente un número de secuencia inicial.** Con el fin de minimizar la posibilidad de que un segmento que todavía está presente en la red (a causa de una conexión anterior que ya ha terminado entre dos hosts), pueda ser confundido con un segmento válido de una conexión posterior entre los mismos host.

### Estimación del tiempo de ida y vuelta (RTT) y fin de temporización

TCP utiliza un mecanismo de fin de temporización/retransmisión para recuperarse de la pérdida de segmentos.

- $RTTMuestra$ es la cantidad de tiempo que transcurre desde que se envía el segmento hasta que se recibe el correspondiente paquete ACK.
	En cualquier instante, $RTTMuestra$ se estima a partir de uno solo de los segmentos transmitidos, pero todavía no reconocidos, lo que proporciona un nuevo valor de $RTTMuestra$ aproximadamente cada RTT segundos.
	
	$RTTEstimado$ es el valor estimado a partir de los valores de `RTTMuestra`.	$$RTTEstimado = (1 - α) * RTTEstimado + α * RTTMuestra$$ Valor recomendado $α = 0,125$.
	
	![[Pasted image 20221006214436.png|400]]

- $RTTDesv$ es una estimación de cuánto se desvía típicamente $RTTMuestra$ de $RTTEstimado$.	$$RTTDesv = (1 - β) * RTTDesv + β * | RTTMuestra - RTTEstimado |$$Valor recomendado para $β = 0,25$.

Por lo tanto, el intervalo de fin de temporizador deberá ser mayor o igual que $RTTEstimado$ o se producirán retransmisiones innecesarias. Pero no debería ser mucho mayor que $RTTEstimado$. 
$$intervaloFinDeTemporizacion = RTTEstimado + 4 * RTTDesv$$

### Transferencia de datos fiable

TCP crea un **servicio de transferencia de datos fiable** sobre el servicio de mejor esfuerzo pero no fiable de IP. El servicio de transferencia de datos fiable de TCP garantiza que el flujo de datos que un proceso extrae de su buffer de recepción TCP no está corrompido, no contiene huecos, ni duplicados y está en orden, es decir, el flujo de bytes es exactamente el mismo flujo que fue enviado por el sistema terminal existente en el otro extremo de la conexión.

#### Duplicación del intervalo de fin de temporización

Cada vez que TCP retransmite, define el siguiente intervalo de fin de temporización como dos veces el valor anterior, en lugar de obtenerlo a partir de los últimos valores de RTTEstimado y RTTDesv. Los intervalos crecen exponencialmente luego de cada retransmisión. Pero cuando el temporizador se inicia luego de recibir datos de la aplicación o recibir un ACK, el intervaloFinDeTemporización se obtiene a partir de los valores más recientes de RTTEstimado y RTTDesv. Proporciona una forma limitada de control de congestión.

#### Retransmisión Rápida

En el caso de que se reciban tres ACK duplicados, el emisor TCP realiza una retransmisión rápida, reenviando el segmento que falta antes de que caduque el temporizador de dicho segmento.

### Gestión de la conexión TCP

#### Abriendo la conexión

- TCP del lado del cliente envía un segmento TCP especial al TCP del lado del servidor. Sin datos de la capa de aplicación pero con el bit de la cabecera SYN en 1. Además el cliente selecciona de forma aleatoria un número de secuencia inicial (cliente_nsi) y lo coloca en el campo número de secuencia del segmento TCP inicial SYN.
- Una vez que el datagrama IP que contiene el segmento SYN TCP llega al host servidor, el servidor extrae dicho segmento SYN del datagrama, asigna los buffers y variables TCP a la conexión y envía un segmento de conexión concedida al cliente TCP. Sin datos de la capa de aplicación pero con el bit SYN en 1, el campo de reconocimiento de la cabecera con cliente_nsi+1 y su propio número de secuencia inicial servidor_nsi en el campo número de secuencia. Este segmento se conoce como segmento SYNACK.
- Al recibir el segmento SYNACK, el cliente también asigna buffers y variables a la conexión. El cliente envía al servidor un último segmento con servidor_nsi+1 en el campo reconocimiento, el bit SYN en 0. Y a partir de ahora ya se pueden transportar datos del cliente al servidor dentro de la carga útil del segmento.

```ad-tldr
title: En resumen
1. C: SYN
2. S: SYN ACK
3. S: ACK + datos
```

#### Cerrando la conexión

- El proceso de la aplicación cliente ejecuta un comando de cierre. Esto hace que el cliente TCP envíe un segmento especial TCP al proceso servidor. El segmento especial contiene un bit indicador en la cabecera del segmento, el bit FIN puesto a 1.
- Cuando el servidor recibe este segmento, devuelve al cliente un segmento de reconocimiento. El servidor entonces envía su propio segmento de desconexión, que tiene el bit FIN puesto a 1. Por último, el cliente reconoce el segmento de desconexión del servidor. En esta situación, los recursos de ambos hosts quedan liberados.

```ad-tldr
title: En resumen
1. C: FIN
2. S: ACK

-- S puede seguir enviando datos --

4. S: FIN
5. C: ACK
```
<div style="page-break-after: always;"></div>

## 3.6.2 TCP, control de flujo 

Si la aplicación receptora es relativamente lenta en cuanto a la lectura de los datos, el emisor puede fácilmente desbordar el buffer de recepción de la conexión enviando muchos datos demasiado rápidamente. 
TCP proporciona un servicio de control de flujo a sus aplicaciones para eliminar la posibilidad de que el emisor desborde el buffer del receptor. El control de congestión es un servicio de adaptación de velocidades (adapta la velocidad de envío del emisor con la velocidad con la que la aplicación receptora está leyendo).
TCP proporciona un servicio de control de flujo teniendo que mantener el emisor una variable conocida como **ventana de recepción.** Puesto que TCP es una conexión full-duplex, el emisor de cada lado de la conexión mantiene una ventana de recepción diferente.
- $BufferRecepcion$: tamaño del buffer de recepción.
- $UltimoByteLeido$: número del último byte del flujo de datos del buffer leído por el proceso de aplicación del host B
- $UltimoByteRecibido$: número del último byte del flujo de datos que ha llegado procedente de la red y que se ha almacenado en el buffer de recepción.
$$UltimoByteRecibido - UltimoByteLeido ≤ BufferRecepcion$$

Se define entonces:
$$VentanaRecepcion = BufferRecepcion - (UltimoByteRecibido - UltimoByteLeido)$$

```ad-important
title: Se podrá asegurar de **no estar desbordando** el buffer de recepción si:
$UltimoByteEnviado - UltimoByteReconocido ≤ VentanaRecepcion$
```
<div style="page-break-after: always;"></div>

## 3.6.3 TCP, control de congestión 

TCP tiene que utilizar un control de congestión terminal a terminal en lugar de un control de congestión asistido por la red, ya que la capa IP no proporciona una realimentación explícita a los sistemas terminales informando que hay congestión en la red.

El método empleado por TCP consiste en que cada emisor limite la velocidad a la que transmite el tráfico a través de su conexión en función de la congestión de red percibida. Si un emisor TCP percibe que en la ruta entre él mismo y el destino apenas existe congestión, entonces incrementara su velocidad de transmisión; por el contrario, si el emisor percibe que existe congestión a lo largo de la ruta, entonces reducirá su velocidad de transmisión.

Para limitar la velocidad a la que se envía el tráfico, el emisor hace un seguimiento de una variable adicional, la **ventana de congestión**. Esta ventana, indicada como $ventanaCongestion$, impone una restricción sobre la velocidad a la que el emisor TCP puede enviar tráfico a la red. Específicamente, la cantidad de datos no reconocidos en un emisor no puede exceder el mínimo de $ventanaCongestion$ y $ventanaRecepcion$:
$$ultimoByteLeido - ultimoByteReconocido ≤ min \{ventanaCongestion, ventanaRecepcion\}$$

La velocidad de transmisión del emisor es aproximadamente igual a:
$$\frac{ventanaCongestion}{RTT} bps$$

El emisor TCP percibe que hay congestión en la ruta entre él y el destino, si se da un suceso de pérdida, es decir que se produzca un fin de temporización o se perciben 3 ACKs duplicados procedentes del receptor.

TCP interpretará la llegada de los paquetes ACK como indicación de que está todo bien y empleará esos paquetes para incrementar el tamaño de la ventana de congestión, por eso se dice que **TCP es auto-temporizado**.

### Fundamentos en TCP:
- Un segmento perdido implica congestión, y, por lo tanto, la velocidad del emisor TCP debe reducirse como se pierde un segmento.
- Un segmento que ha sido reconocido indica que la red está entregando los segmentos del emisor al receptor y, en consecuencia, la velocidad de transmisión del emisor puede incrementarse cuando llega un paquete ACK correspondiente a un segmento que todavía no había sido reconocido.
- Testeo del ancho de banda, el emisor aumenta su velocidad de transmisión para tantear la velocidad a la que de nuevo aparece congestión, retrocede a partir de ese punto y comienza de nuevo a tantear.


### Algoritmos de control de congestión de TCP

#### Arranque lento (Slow Start)

Cuando la conexión comienza, el valor de la ventana de congestión es 1 MSS (tamaño máximo del segmento), que da como resultado una velocidad de transmisión inicial aproximadamente igual a $MSS/RTT$.
Además, el valor de $ventanaCongestion$ se incrementa 1 MSS cada vez que se produce el primer reconocimiento de un segmento transmitido. Por lo tanto, la velocidad de transmisión irá creciendo exponencialmente durante la fase de arranque lento.

Si se produce un suceso de pérdida de paquete dado por un fin de temporización, el emisor TCP establece el valor de $ventanaCongestion$ en 1 e inicia de nuevo un proceso de arranque lento. También se define una segunda variable denominada umbral, y se inicializa en $ventanaCongestion/2$.
Otra forma de terminar con la fase de arranque lento es cuando el valor de ventanaCongestion alcanza el valor de umbral, y las transacciones pasan al modo de **Evitación de la congestión**.
Por último, la fase de arranque lento puede terminar cuando se detectan 3 paquetes ACK duplicados, en este caso TCP realiza una retransmisión rápida.

#### Evitación de la congestión

El valor de $ventanaCongestion$ es aproximadamente igual a la mitad de su valor en el momento en que se detectó congestión por última vez. En lugar de duplicar el valor de $ventanaCongestion$, se adopta un método más conservador e incrementa el valor en 1 MSS cada RTT.

#### Recuperación rápida

Algoritmo agregado en la versión TCP Reno.
El valor de $ventanaCongestion$ se incrementa en 1 MSS por cada ACK duplicado recibido correspondiente al segmento que falta y que ha causado que TCP entre en el estado de recuperación rápida.
Si se produce un fin de temporización, el mecanismo de recuperación rápida efectúa una transición al estado de arranque lento después de realizar las mismas acciones que en los modos de arranque lento y evitación de la congestión: el valor de $ventanaCongestion$ se establece en 1 MSS y el valor de umbral se hace igual a la mitad del valor que tenía $ventanaCongestion$ cuando tuvo lugar el suceso de pérdida.

```ad-info
title: Maquina de estados de TCP Tahoe

![[Pasted image 20221025144456.png]]
```

```ad-info
title: Maquina de TCP Reno

![[Pasted image 20221025144505.png|600]]
```

##### Tahoe vs Reno

La distinción se basa en clasificar los dos tipos de detección de congestión. Se entiende que un timeout es signo de una congestión "severa" y que el tripe ACK duplicado es signo de congestión "leve".
Tanto en TCP Tahoe como en TCP Reno, cuando se da un timeout, se setea el tamaño de la ventana de congestión en $1 \times MSS$. La variación está en que si llegan tres ACK duplicados, TCP Reno no llevará el tamaño de la ventana a $1 \times MSS$ (como lo hace TCP Tahoe), sinó que lo cortará a la mitad.
<div style="page-break-after: always;"></div>

# 4. Capa de Red, plano de datos 

- [[#4.1 Intro]]
- [[#4.2 Redes de circuitos virtuales y de datagramas]]
- [[#4.3 El interior de un Router]]
- [[#4.4.1 Protocolo de Internet (IP)]]
- [[#4.4.2 Direccionamiento IPv4]]
- [[#4.5 Traduccion de direcciones de red, NAT]]
- [[#4.6 ICMP, protocolo de mensajes de control de Internet]]
- [[#4.7 IPv6]]<div style="page-break-after: always;"></div>

## 4.1 Intro 

La capa de red es la encargada de transportar segmentos desde el host emisor hasta el host receptor. Del lado del emisor, encapsula los segmentos en datagramas. En el lado de receptor, entrega los paquetes a la capa de transporte. 
Cada router examina los campos del encabezado de cada datagrama IP que pasa por él.

```ad-info
title: Datagrama
Unidades de datos intercambiadas por un protocolo de la capa de red.
```

### Reenvío y enrutamiento

La función de la capa de red es simple: transporta paquetes desde un host emisor a un host receptor.
- **Reenvío** (forwarding): Cuando un paquete llega al enlace de entrada de un router, este tiene que pasar el paquete al enlace de salida apropiado.
- **Enrutamiento** (routing): La capa de red tiene que determinar la ruta o camino que deben seguir los paquetes a medida que fluyen de un emisor a un receptor. Los algoritmos que calculan estas rutas se conocen como algoritmos de enrutamiento.

De esta forma, Forwarding hace referencia a la acción de transferir un paquete desde la interfaz de enlace de entrada, hacia la interfaz de enlace de salida correspondiente. Mientras que Routing hace referencia al proceso que determina el **camino end-to-end** que los paquetes toman para llegar desde la fuente hacia el destino.

Todo router tiene una **tabla de reenvío**. Un router reenvía un paquete examinando el valor de un campo de la cabecera del paquete entrante y utilizando después ese valor para indexarlo dentro de la tabla de reenvío del router.

El algoritmo de enrutamiento determina los valores que se introducen en las tablas de reenvío de los routers. El algoritmo de enrutamiento puede estar **centralizado** (se ejecuta en un sitio central y descarga la información de enrutamiento en cada router) o **descentralizado** (con un componente del algoritmo ejecutándose en cada router).

### Configuración de la conexión

Función importante de la capa de red. Algunas arquitecturas de red, requieren que los routers a lo largo de la ruta seleccionada, desde el origen al destino, negocien entre sí para configurar el estado, antes de que puedan comenzar a fluir los paquetes de datos de la capa de red correspondientes a una determinada conexión entre el origen y el destino.

```ad-attention
IP no se comporta de esta forma.
```


### Modelos de servicio de red

Define las características del transporte terminal a terminal de los paquetes entre los sistemas terminales, emisor y receptor.

Posibles servicios:
- Entrega garantizada
- Entrega garantizada con retardo limitado
- Entrega de los paquetes en orden
- Ancho de banda mínimo garantizado
- Fluctuación máxima garantizada (intervalo de tiempo entre la transmisión de dos paquetes consecutivos es igual al intervalo entre sus respectivas recepciones)
- Servicios de seguridad (se proporciona confidencialidad a todos los segmentos de la capa de transporte)

```ad-info
La capa de red de Internet proporciona un único servicio conocido como **servicio de mejor esfuerzo** (best-effort service).
```

- **Servicio CBR de las redes ATM:** 
	El objetivo es conceptualmente simple, proporcionar un flujo de paquetes mediante un conductor virtual cuyas propiedades son las mismas que si existiera un enlace de transmisión de ancho de banda fijo dedicado entre los hosts emisor y receptor.

- **Servicio ABR de las redes ATM:** 
	Con este servicio las celdas no se pueden reordenar, pero si perder y está garantizada la velocidad mínima de transmisión de celda. Si la red tiene los suficientes recursos libres en un instante determinado, un emisor también puede ser capaz de enviar con éxito celdas a una velocidad mayor que la mínima.



<div style="page-break-after: always;"></div>

## 4.2 Redes de circuitos virtuales y de datagramas 

Similar a lo que ocurría en la capa de transporte, la capa de red también puede ofrecer servicios orientados a conexión y servicios no orientados a conexión. En este caso, estos servicios son entre hosts, provistos a la capa de transporte por la capa de red. 

En el caso de las Redes de Datagramas, se ofrece servicios de capa de red no orientados a conexión, mientras que las redes llamadas Redes de Circuito Virtual ofrecen servicios orientados a conexión. Estos servicios son implementados en el núcleo de la red.

### Redes de circuitos virtuales

Como mencionamos anteriormente, los servicios ofrecidos por estas redes son orientados a conexión. Estas conexiones se llaman circuitos virtuales (VC). 
Se realizan llamadas de setup, terminando cada llamada antes que los datos puedan fluir. Cada paquete lleva un identificador de VC, que no es la dirección del host de destino. 
Cada Router en el camino entre la fuente y el destino mantiene el estado para cada conexión que pase por él. 
El enlace y los recursos del router (ancho de banda, buffers), deben ser asicados al VC **(recursos dedicados = servicios predecibles).**

Un VC consiste de: 
1. Un **path**, que es una serie de enlaces y routers, entre el destino y la fuente.
2. **Números de VC**, uno por cada enlace en el path.
3. **Entradas en la tabla de Forwarding** en cada router del path.

Un paquete perteneciente a un VC lleva en su encabezado un **número de VC**. Dado que un circuito virtual puede tener múltiples números de VC en cada enlace, cada router debe reemplazar el número de VC de cada paquete al número nuevo, obtenido de la tabla de Forwarding.

```ad-example
title: Ejemplo de Tabla de Forwarding en VC

![[Pasted image 20221117124316.png]]
```

En el caso de las redes de circuitos virtuales, y a diferencia de la capa de transporte, los routers a lo largo del camino entre los end systems están involucrados en el setup del VC, y cada Router está totalmente consiente de todos los VC que pasan por él.

### Redes de datagramas

Como no es orientado a conexión, este modelo de servicio no utiliza llamadas de setup en la capa de red. Cada vez que un end system quiere enviar un paquete, lo estampa con la dirección del end system de destino y luego lo “empuja” hacia la red.
Como un paquete es transmitido desde una fuente hacia un destino, pasa por varios routers. Cada uno de estos utiliza la dirección de destino para enviar el paquete. 

Específicamente, cada router tiene una tabla de Forwarding que mapea direcciones a interfaces de enlace. De esta forma, cuando un paquete llega, el router utiliza la información de esta tabla para enviar el paquete por la interfaz correcta.

![[Pasted image 20221117124533.png]]

```ad-example
title: Ejemplo de tabla de Forwarding

![[Pasted image 20221117124621.png|400]]
```

#### Uso de prefijos

![[Pasted image 20221117124651.png]]

Claramente, para este ejemplo no es necesario tener 4 mil millones de entradas en la tabla de Forwarding del router. Podríamos por ejemplo tener la siguiente tabla de Forwarding:

![[Pasted image 20221117124700.png]]
Con este estilo de tabla de Forwarding, el router empareja un prefijo de las direcciones de destino de los paquetes con las entradas en la tabla; si hay un match, el router envía el paquete al link asociado con el match.

Por ejemplo, supongamos que la dirección de destino del paquete es 11001000 00010111 00010110 10100001; dado que el prefijo de 21 bits empareja la primera entrada de la tabla, el router envía el paquete a la interfaz de enlace 0. En caso de no haber match, envía por la interfaz 3.

En caso de que haya más de un match, se utiliza la regla del prefijo más largo emparejado, que encuentra la entrada más larga que empareja en la tabla y envía el paquete por la interfaz asociada con el prefijo más largo emparejado.<div style="page-break-after: always;"></div>

## 4.3 El interior de un Router 

Un router tiene dos funciones principales: 
- Correr el algoritmo de ruteo, o el protocolo (RIP, OSPF, BGP).
- Hacer el forward de los datagramas desde el enlace entrante hacia el enlace saliente.

![[Pasted image 20221117125539.png|400]]

### Componentes de un router:

- **Puertos de entrada:**
	Realiza las funciones de la capa física consistentes en la terminación de un enlace físico de entrada a un router. Realiza las funciones de la capa de enlace de datos necesarias para inter operar con las funciones de la capa de enlace de datos en el lado remoto del enlace de entrada. También realiza una función de búsqueda y reenvío, un paquete reenviado dentro del entramado de conmutación del router emerge en el puerto de salida apropiado.

- **Entramado de conmutación:** 
	Conecta los puertos de entrada del router a sus puertos de salida. Dentro del router.

- **Puertos de salida:** 
	Almacena los paquetes que le han sido reenviados a través del entramado de conmutación y los transmite al enlace de salida. Así, el puerto de salida lleva a cabo la función inversa de la capa física y de la capa de enlace de datos que el puerto de entrada.

- **Procesador de enrutamiento:** 
	Ejecuta los protocolos de enrutamiento.

#### Puertos de entrada

![[Pasted image 20221117130759.png]]

La elección del puerto de salida se lleva a cabo utilizando la información almacenada en la tabla de reenvío. Aunque el procesador de enrutamiento calcula la tabla de reenvío, suele almacenarse una copia de la misma en cada puerto de entrada. La decisión de reenvío puede **tomarse localmente** en cada puerto de entrada sin invocar al procesador de enrutamiento, lo cual evita la formación de cuellos de botella en el procesamiento de reenvíos en un único punto dentro del router.

En los routers con capacidades de procesamiento limitadas en el puerto de entrada, este puede simplemente reenviar el paquete al procesador de enrutamiento centralizado, el cual entonces hará una búsqueda en la tabla de reenvío y transmite el paquete al puerto de salida apropiado.

Debido a la necesidad de operar a velocidades de enlace altas, no se puede buscar linealmente en la tabla de reenvío la correspondencia, sino que se almacena las entradas en la tabla de reenvío en una estructura de árbol. Cada nivel del árbol se interpreta como el correspondiente a un bit de la dirección de destino.
Tiempo de búsqueda de 2^32 para direcciones IP, no suficientemente rápido.
- **Otra técnica:** memorias direccionables por contenido (**CAM, Content Addressable Memory**), las cuales permiten acceder a la memoria mediante una dirección IP de 32 bits, devolviendo el contenido de la correspondiente entrada de la tabla de reenvío en un tiempo prácticamente constante.
- **Otra técnica:** utilizar una caché para almacenar las entradas accedidas recientemente.

Una vez determinado el puerto de salida de un paquete, es reenviado al entramado de conmutación, pero puede ser bloqueada su entrada si está siendo usado por otros paquetes. Por lo que queda almacenado en la cola de entrada del puerto de entrada.

#### Entramado de Conmutación

Se encargan de transferir el paquete desde el buffer de entrada al correspondiente buffer de salida. La **tasa de switching** es la tasa a la cual los paquetes pueden ser transferidos desde las entradas hacia las salidas. A veces se mide como un múltiplo de la tasa lineal de entrada/salida. 
Si tenemos N entradas, se desea una tasa N veces la tasa lineal. 
Hay tres tipos de Switching Fabrics:

- Vía memoria: 
	Utilizado en los routers de la primera generación. Son computadoras tradicionales con Switching bajo control directo de la CPU. El paquete es copiado a la memoria del sistema. La velocidad está limitada por el ancho de banda de memoria (2 cruces de bus por datagrama).
	![[Pasted image 20221117131218.png|400]]

- Conmutación vía bus: 
	Los datagramas van desde la memoria del puerto de entrada a la memoria del puerto de salida mediante un bus compartido, por lo que un solo paquete puede ser transferido al mismo tiempo por ese bus. Un paquete que llega y encuentra el bus ocupado, es bloqueado de pasar por la switiching fabric, y encolado en el puerto de entrada. 
	Dado que un único paquete puede pasar a la vez, la velocidad de switching está limitada por el ancho de banda del bus.
	![[Pasted image 20221117131318.png|300]]

- Conmutación vía una red de interconexión: 
	Utilizado para superar las limitaciones de ancho de banda del bus. Redes secretarias, crossbar, otras redes de interconexión inicialmente desarrolladas para conectar procesadores en multiprocesadores. 
	Diseño avanzado: fragmentación de los datagramas en celdas de tamaño fijo, se hace el switch de las celdas a través de la fábrica.
	![[Pasted image 20221117131407.png|250]]

#### Puertos de salida

El procesamiento de puerto de salida toma los paquetes que han sido almacenados en la memoria del puerto de salida y los transmite a través del enlace de salida. Se requiere de buffering para el caso en que los datagramas arriben desde la fábrica más rápido que la tasa de transmisión.
La disciplina de planificación escoge entre los datagramas encolados para la transmisión.

![[Pasted image 20221117131443.png|400]]

### Colas

El buffering ocurre cuando la tasa de llegada por switch excede la velocidad de la línea de salida. Esto puede generar el encolado de paquetes (retraso) e incluso la pérdida debido a una sobrecarga del buffer de salida.

#### En puertos de salida:
El buffering ocurre cuando la tasa de llegada por switch excede la velocidad de la línea de salida. Esto puede generar el encolado de paquetes (retraso) e incluso la pérdida debido a una sobrecarga del buffer de salida.

#### ¿Cuánto buffer es necesario?
La regla de oro de RFC 3439 dice que el buffering promedio es igual al típico RTT (por ejemplo, 250msec) veces la capacidad del enlace C. Por ejemplo, si el enlace C = 10 Gbps, el buffer es de 2.5Gbits.
Recomendaciones recientes con N flujos, el buffering equivale a $\frac{RTT \times C}{\sqrt{N}}$

#### En puertos de entrada:
Si la Switch Fabric es más lenta que los puertos de entrada combinados, entonces el encolado puede ocurrir en los puertos de entrada. Se pueden producir retrasos de cola y pérdidas debido a la sobrecarga de buffers.
**Head of The Line Blocking (HOL)**: los datagramas encolados al frente de la cola evitan que otros de la cola puedan ser enviados.

![[Pasted image 20221117132121.png|400]]<div style="page-break-after: always;"></div>

## 4.4.1 Protocolo de Internet (IP) 

Como vemos en la figura a continuación, la red tiene 3 componentes principales. En primer lugar, el **protocolo IP**. En segundo lugar, los **protocolos de ruteo**, que determinan el camino que debe seguir el paquete para llegar desde la fuente hacia el destino, completando las tablas de Forwarding. Y el componente final es la facilidad de reportar errores en los datagramas y responder con información de la capa de red, a través del **protocolo ICMP**.

![[Pasted image 20221117132248.png|500]]

### Datagramas

Como mencionamos anteriormente, un paquete de capa de red es llamado datagrama. 

El datagrama en IP (en este caso IPv4) tiene el siguiente formato:
- **Número de versión:** (4 bits) especifica el número de versión del protocolo IP del datagrama. A partir del número de versión, el router puede determinar cómo interpretar el resto del datagrama IP.
- **Longitud de cabecera** (4 bits)
- **Tipo de servicio:** Diferencian los distintos tipos de datagramas IP.
- **Longitud del datagrama:** (16 bits) longitud de los datos más cabecera.
- **Identificador, indicadores, desplazamiento de fragmentación:** usado para la **fragmentación**
- **Tiempo de vida (TTL)**: usado para que el datagrama no exista infinitamente en la red.
- **Protocolo**: Solo se emplea cuando un datagrama IP alcanza su destino final. Este valor indica el protocolo específico de la capa de transporte al que se le pasaran los datos contenidos en ese datagrama.
- **Suma de comprobación de cabecera**: Normalmente, los routers descartan los paquetes en los que se detectan errores.
- **Direcciones de IP origen y destino**
- Opciones: permite ampliar la cabecera IP
- Datos o carga útil

```ad-tldr
title: En resumen

![[Pasted image 20221117132530.png]]
```

```ad-question
title: ¿Cómo sabe la capa de red (IP) de ese host que debería pasar el segmento a TCP en lugar de a UDP o cualquier otro protocolo? 

La capa de red le entrega el payload del datagrama a el protocolo indicado por el campo de ocho bits “protocol” del encabezado. Los valores de ese campo están estandarizados y cada uno de ellos indica un protocolo de capa superior determinado. Si en payload del datagrama es un segmento TCP, el campo protocol tiene el valor 6.
```

#### Fragmentación (y reensamblado)

La cantidad máxima de datos que una trama de la capa de enlace puede transportar se conoce como **unidad máxima de transmisión** (MTU). 
Cada uno de los enlaces existentes a lo largo de la ruta entre el emisor y el destino pueden utilizar diferentes protocolos de la capa de enlace y cada uno de estos protocolos puede utilizar una **MTU diferente**.

Por lo tanto es necesario fragmentar los datos del datagrama IP en dos o más datagramas IP más pequeños, encapsular cada uno de los datagramas IP más pequeños en una trama de la capa de enlace distinta y enviar dichas tramas a través del enlace de salida. Cada uno se conoce como fragmentos. 
Los fragmentos tiene que ser reensamblados antes de llegar a la capa de transporte, esto se hace en los sistemas terminales para no sobrecargar de trabajo a los routers.

![[Pasted image 20221117132749.png|300]]

El host destino necesita saber si se trata de datagramas enteros o fragmentos y cómo ensamblarlos. Para eso se usan los campos identificador, indicador y desplazamiento de fragmentación en la cabecera del datagrama IP.

Cuando un router necesita fragmentar un datagrama, cada datagrama resultante se marca con la dirección de origen, la dirección de destino y el número de identificación del datagrama original.

Como IP es un servicio no fiable, es posible que uno o más de los fragmentos nunca lleguen a su destino. Por esta razón, con el fin de que el host de destino esté absolutamente seguro de que ha recibido el último fragmento del datagrama original, **el último fragmento tiene un bit indicador puesto a 0**, mientras que los demás fragmentos tienen el bit indicador puesto a 1. Además, para que el host de destino determine si falta un fragmento (y también para que pueda reensamblar los fragmentos en el orden apropiado), se utiliza el campo desplazamiento para especificar en qué posición dentro del datagrama IP original encaja el fragmento.

En el destino, la carga útil del datagrama se pasa a la capa de transporte sólo después de que la capa IP haya reconstruido completamente el datagrama IP original. Si uno o más de los fragmentos no llegan al destino, el datagrama incompleto se descarta y no se pasa a la capa de transporte.

```ad-example
title: Ejemplo

Por ejemplo, un datagrama de 4000 bytes, con un MTU de 1500 bytes. Debemos recordar que generalmente los datagramas IP tienen 20 bytes de cabecera, por lo que sólo tenemos MTU - 20 bytes para los datos.

</br>

![[Pasted image 20221117132819.png]]
```
<div style="page-break-after: always;"></div>

## 4.4.2 Direccionamiento IPv4 

El límite entre el host y el enlace se denomina **interfaz.** El límite entre el router y cualquiera de sus enlaces también se conoce como **interfaz**. Por tanto, un router tiene varias interfaces, una para cada uno de los enlaces.

Las direcciones IPv4 tienen una longitud de **32 bits** (4 bytes), por lo que existen un total de $2^{32}$ direcciones IPv4 posibles. Cada una de las interfaces de un host o de un router de Internet **tiene que tener asociada una dirección IP** que es globalmente única.

```ad-hint
title: Recordatorio
_Para determinar las subredes, desconecte cada interfaz de su host o router,
creando islas de redes aisladas, con interfaces que acaban en los puntos
terminales de las redes aisladas. Cada una de estas redes aisladas se dice que
es una subred._

```

```ad-example
title: Ejemplo

Aquí hay 3 subredes.

![[Pasted image 20221117133048.png]]
```

### Enrutamiento entre dominios sin clase (CIDR, Classless Interdomain Routing):

Estrategia de asignación de direcciones en Internet.

Los x bits más significativos de una dirección en el formato a.b.c.d/x constituyen la parte de red de la dirección IP y a menudo se hace referencia a ellos como el **prefijo** (o prefijo de red) de la dirección. Los $32-x$ bits restantes de una dirección pueden emplearse para diferenciar los dispositivos internos de la organización, teniendo todos ellos el mismo prefijo de red.

```ad-warning
title: IP de broadcast o difusión
Cuando un host envía un datagrama cuya dirección de destino es 255.255.255.255, el mensaje se entrega a todos los hosts existentes en la misma subred. 

Cada subred tiene una dirección de broadcast en particular que es distinta de la mencionada. Esta es la máxima dirección disponible dentro de la subred.
```

### Obtener un bloque de direcciones

Para obtener un bloque de direcciones IP que pueda ser utilizado dentro de la subred de una organización, un administrador de red tiene que contactar en primer lugar con su ISP, el cual le proporcionará direcciones extraídas de un bloque de direcciones mayor que ya habrá sido asignado al ISP. 

Las direcciones IP son gestionadas por la entidad **ICANN** (Internet Corporation for Assigned Names and Numbers, Corporación de Internet para los números y nombres asignados).

```ad-example
title: Ejemplo

Si al ISP se le otorga el bloque 200.23.16.0/20, puede dividir ese bloque en 8 bloques contiguos de direcciones, y dar uno de estos a hasta 8 organizaciones.

</br>

![[Pasted image 20221117133412.png]]
```

#### Cómo obtener una dirección de host: 
Un **host** puede obtener su dirección IP de dos maneras: 
- **Hard Codeada** por el administrador del sistema en un archivo.
- Mediante **DHCP**.

##### **DHCP**: Protocolo de configuración dinámica de host 

Las direcciones de host también se pueden configurar manualmente, pero frecuentemente ahora esta tarea se lleva cabo utilizando el Protocolo de configuración dinámica de host (DHCP , Dynamic Host Configuration Protocol). DHCP permite a un host obtener (permite que se le asigne) automáticamente una dirección IP.

Un administrador de red puede configurar DHCP de modo que un host dado reciba la misma dirección IP cada vez que se conecte a la red, o un host puede ser asignado a una dirección IP temporal que será diferente cada vez que el host se conecte a la red.
También puede brindar información adicional como: su máscara de subred, el gateway (router del primer salto) y la dirección del servidor DNS local.

Protocolo **plug-and-play** por su capacidad de automatizar el proceso de conexión.
Cada vez que un host se une a la red, el servidor DHCP asigna una dirección arbitraria de su conjunto actual de direcciones disponibles; cada vez que un host abandona la red, su dirección es devuelta al conjunto.

DHCP es un protocolo cliente-servidor. Cada subred necesita un servidor DHCP o puede tener un agente de retransmisión DHCP (un router) que conozca la dirección de un servidor DHCP.

![[Pasted image 20221117235529.png]]

4 pasos:
- **Descubrimiento del servidor DHCP:** La primera tarea de un host recién llegado es encontrar un servidor DHCP con el que interactuar. Esto se hace mediante un mensaje de descubrimiento DHCP que envía un cliente dentro de un paquete UDP al puerto 67. El paquete UDP se encapsula en un datagrama IP y el cliente DHCP crea un datagrama IP de difusión 255.255.255.255 y crea una dirección IP de origen de “ese host” igual a 0.0.0.0. El cliente DHCP pasa el datagrama IP a la capa de enlace, la cual difunde esa trama a todos los nodos conectados a la subred.
- **Ofertas del servidor DHCP:** Un servidor DHCP que recibe el mensaje de descubrimiento responde al cliente con un mensaje de oferta DHCP, que difunde a todos los nodos de la subred utilizando de nuevo una dirección IP de difusión. Puesto que en la subred pueden existir varios servidores DHCP, el cliente puede encontrarse en la situación de poder elegir entre varias ofertas. Cada mensaje de oferta de servidor contiene el ID de transacción del mensaje de descubrimiento recibido, la dirección IP propuesta para el cliente, la máscara de red y el tiempo de arrendamiento de la dirección IP, que es el tiempo que la dirección IP es válida.
- **Solicitud DHCP:** El cliente recién llegado seleccionará de entre las ofertas de servidor y responderá a la oferta seleccionada con un mensaje de solicitud DHCP, devolviendo los parámetros de configuración.
- **ACK DHCP:** El servidor contesta al mensaje de solicitud DHCP con un mensaje ACK DHCP, que confirma los parámetros solicitados.

Dado que un cliente puede desear utilizar su dirección durante más tiempo del arrendado, DHCP también proporciona un mecanismo que permite a un cliente renovar su tiempo de arrendamiento de una dirección IP.

```ad-example
title: Ejemplo

![[Pasted image 20221117235605.png]]

Los mensajes intercambiados son los siguientes:

- El equipo cliente solicita la configuración enviando un mensaje de difusión de tipo “DHCP DISCOVER”. 

- Cada servidor DHCP responde con un mensaje de tipo “DHCP OFFER” que contiene una dirección IP y otras opciones de configuración. Este mensaje se envía al cliente por unicast si es posible o por broadcast en otro caso (RFC 1531 http://tools.ietf.org/html/rfc1531). 

- El cliente acepta los parámetros ofrecidos por alguno de los servidores respondiendo con un mensaje de difusión de tipo “DHCP REQUEST” indicando en él el identificador de servidor que ha elegido. El mensaje DHCPREQUEST debe ser enviado a todos los servidores que recibieron el DHCPDISCOVER para que puedan reutilizar la dirección que habían ofrecido. También se usa DHCPREQUEST para extender en el tiempo la validez de una dirección IP.

- El servidor elegido envía un mensaje de confirmación de tipo “DHCP ACK” indicando que aprueba esa concesión y confirmando la configuración, así como indicando el tiempo máximo en que la dirección IP es válida.

```<div style="page-break-after: always;"></div>

## 4.5 Traduccion de direcciones de red, NAT 

Un ámbito con direcciones privadas hace referencia a una red cuyas direcciones solo tienen significado para los dispositivos internos de dicha red y dejan de ser únicas. El problema surge cuando se quiere enviar paquetes a internet o recibirlos.

El router NAT no parece un router a ojos del mundo exterior. En su lugar, se comporta de cara al exterior como un único dispositivo con una dirección IP única. Se encarga de ocultar los detalles de la red doméstica al exterior.

Para poder identificar a qué host dentro de la red doméstica tiene que enviar determinados datagramas, se utiliza una tabla de traducciones NAT que está almacenada en el router NAT, e incluye los números de puertos, así como las direcciones IP en las entradas de la tabla.

Hay múltiples razones por las que las redes de área local utilicen una única IP para comunicarse con el mundo exterior:
- El rango de direcciones sería muy grande si cada dispositivo tuviera su propia IP provista por el ISP.
- Se puede cambiar las IPs de los dispositivos dentro de la red local, sin tener que notificarle al mundo exterior.
- Se puede cambiar de ISP sin cambiar las direcciones locales.
- Los dispositivos dentro de la red local no son explícitamente visibles por el mundo exterior.

Para implementar esto, un router que utilice NAT debe:
- Reemplazar en los datagramas de salida la dirección IP y número de puerto fuente, por la dirección IP de NAT y un nuevo número de puerto. Luego los clientes/servidores remotos responderán a la dirección IP del NAT y a ese puerto, como dirección de destino.
- Recordar en la tabla de traducción NAT el mapeo entre dirección y puerto fuente con la dirección NAT y el nuevo puerto.
- Reemplazar en los datagramas entrantes la dirección IP NAT y el nuevo puerto por la correspondiente dirección IP fuente local y el número de puerto original, almacenados en la tabla de NAT.

```ad-example
title: Ejemplo

![[Pasted image 20221118000637.png]]
```

El número de puerto es un número de 16 bits, lo que permite hasta 60.000 conexiones simultáneas a una misma dirección LAN. 

Sin embargo, el protocolo NAT es controversial, debido a que, en primer lugar, los routers **_deberían_** procesar únicamente hasta capa 3. Además, viola el argumento end-to-end.

### Problemas en NAT

Supongamos que un cliente quiere conectarse a un servidor con dirección 10.0.0.1. Esta dirección es local en la LAN, por lo que el cliente no puede utilizarla como dirección de destino. En su lugar, debería utilizar la dirección NAT 138.76.29.7.

![[Pasted image 20221118000802.png]]

Existen distintas soluciones posibles a este problema:
- Configurar estáticamente el NAT para que las conexiones entrantes en determinado puerto sean redirigidas al servidor. 
	Por ejemplo, que las conexiones que llegan a 138.76.29.7 en el puerto 2500, sean reenviadas a la dirección 10.0.0.1 en el puerto 25000.
- Utilizar Universal Plug and Play (UPnP) Internet Gateway Device (IGD) Protocol. 
	Que permite al host con NAT aprender la dirección IP pública (138.76.29.7) y eliminar o agregar mapeos de puertos.
	![[Pasted image 20221118000903.png]]
- Utilizar Relaying. 
	El cliente establece conexión con el relay, luego el cliente externo se conecta al relay y este último hace de puente para los paquetes entre ambas conexiones.
	![[Pasted image 20221118000957.png]]
<div style="page-break-after: always;"></div>

## 4.6 ICMP, protocolo de mensajes de control de Internet 

Defindo en RFC 792, es un protocolo utilizado por hosts y routers para comunicar información a nivel de red. Permite reportar errores, por ejemplo, host unreachable, network unreachable, port unreachable o protocol unreachable. O mensajes como el echo request y el echo reply (utilizados por ping).

ICMP a menudo se considera parte de IP pero, en sentido arquitectónico, se encuentra justo encima de IP, ya que los mensajes ICMP son transportados dentro de los datagramas IP.

Los mensajes ICMP tienen un campo de tipo y un campo de código, y contienen la cabecera y los 8 primeros bytes del datagrama IP que ha dado lugar a la generación del mensaje ICMP en primer lugar (pudiendo identificar el datagrama que produjo el error).

```ad-example
title: Tabla de tipos de mensajes

![[Pasted image 20221118001154.png]]
```
<div style="page-break-after: always;"></div>

## 4.7 IPv6 

Para responder a la necesidad de un espacio de direcciones IP más grande, se desarrolló un nuevo protocolo IP, el protocolo IPv6. Una motivación adicional fue hacer un formato del cabezal que ayude a acelerar el procesamiento/forwarding del paquete.

Formato del datagrama IPv6: **cabezal de largo fijo de 40 bytes** y no se permite fragmentación.
- **Capacidades ampliadas de direccionamiento:** IPv6 aumenta el tamaño de la dirección IP de 32 a 128 bits.
- **Una cabecera de 40 bytes simplificada:** Permite un procesamiento más rápido del datagrama.
- Prioridad y etiquetado del flujo: Permite etiquetar los paquetes que pertenecen a determinados flujos para que los que el emisor solicita un tratamiento especial, como un servicio en tiempo real o una calidad servicio no predeterminados.

### Notación de las direcciones IPv6

La notación utilizada por IPv6 codifica las agrupaciones de 16 bits en su representación hexadecimal y separa parejas de éstos con el carácter “:” eliminando ceros a la izquierda dentro de dichas parejas, así como bloques completos de ceros representados por “::”. En total quedan 8 agrupaciones de 16 bits.

### Encabezado IPv6

![[Pasted image 20221118001419.png]]

En la lista siguiente se describe la función de cada campo de encabezado.
- **Versión**: número de versión de 4 bits del protocolo de Internet = 6.
- **Clase de tráfico**: campo de clase de tráfico de 8 bits.
- **Etiqueta de flujo**: campo de 20 bits.
- **Tamaño de carga útil**: entero sin signo de 16 bits, que representa el resto del paquete que sigue al encabezado de IPv6, en octetos.
- **Encabezado siguiente**: selector de 8 bits. Identifica el tipo de encabezado que va inmediatamente después del encabezado de IPv6. Emplea los mismos valores que el campo de protocolo IPv4.
- **Límite de salto**: entero sin signo de 8 bits. Disminuye en uno cada nodo que reenvía el paquete. El paquete se desecha si el límite de salto se reduce a cero
- **Dirección de origen**: 128 bits. Dirección del remitente inicial del paquete. 
- **Dirección de destino**: 128 bits. Dirección del destinatario previsto del paquete. El destinatario previsto no es necesariamente el destinatario si existe un encabezado de enrutamiento opcional.

Varios campos que aparecían en IPv4 ya no aparecen en IPv6, como, por ejemplo:
- **Fragmentación/Reensamblado**: IPv6 solamente implementa fragmentación end-to-end, no en los routers intermedios; los datagramas cuya MTU exceda las posibilidades de un medio a lo largo del camino, serán descartados. Los datos necesarios para re-ensamblar el paquete ahora se incluyen en Next Header con valor 44.
- **Suma de comprobación de cabecera**: Esta información la consideraron redundante, ya que este control se realiza en los protocolos TCP y UDP.
- **Opciones**: permitido, pero fuera del header, indicado por el campo “Next Header”

#### Cabezales de extensión
- Las “opciones” son manejadas a través de extension headers
- Los headers son “enganchados” utilizando el campo Next Header
- Los valores son inter-operables con los valores utilizados por el protocolo IPv4 (i.e. TCP = 6, UDP = 17 , etc.)
- Extension headers:
	- Hop-by-hop header (NH=0)
	- Routing header (NH=43)
	- Fragment header (NH=44)
	- Authentication header (NH=51)
	- Encapsulated security payload (NH=50
	- Destination option (NH=60)

```ad-example
title: Ejemplo

![[Pasted image 20221118001800.png]]
```

### Tipos de direcciones IPv6
- 128 bits.
- Tres tipos diferentes (además de rangos reservados):
	- **Unicast:** Identifican exactamente una interfaz.
	- **Multicast:** Identifican a un grupo de interfaces. Un paquete enviado a una dirección de multicast es entregado a todos los miembros del grupo.
	- **Anycast:** Un paquete enviado a una dirección anycast es entregado al miembro “más próximo” del grupo.

#### Direcciones IPv6 especiales (RFC 5156)
- **Unspecified address**: puede ser utilizada únicamente por un nodo que aún no tiene una dirección, y su valor es “0:0:0:0:0:0:0:0”, pudiendo ser abreviada -aún más- como “::” o “::/128”
- **Loopback address**: utilizada -como en IPv4- para enviar datagramas IPv6 al propio host. El valor de la dirección es el “0:0:0:0:0:0:0:1” se abrevia como “::1” o “::1/128”
- **Default route**: requerida para especificar el ruteo por defecto en las tablas de ruteo. Se representa por “0:0:0:0:0:0:0:0/0” y se abrevia como “::/0”

### Transición de IPv4 a IPv6

No se puede hacer una actualización de todos los routers simultáneamente, o sea hacer un “dia D”.

La forma más directa es la **pila dual** (dual stack), donde todos los nodos de la red tengan una implementación para IPV4 e IPV6.

Otra opción es la **tunelización,** consiste en tomar el datagrama IPv6 completo como el campo de datos de un datagrama IPv4, el cual se envía normalmente por una red IPv4, permitiendo recuperar el datagrama IPv6 original en el receptor. El concepto se puede aplicar a múltiples protocolos “tunelizados” por otros.

Una última opción sería que se haga traducción entre IPv6 y IPv4 cuando sea necesario.

#### Dual Stack
IPv6 puede ser agregado a cualquier dispositivo que hable IPv4. 
Los protocolos son multiplexados y de-multiplexados sobre los mismos enlaces (i.e. IEEE 802 family) utilizando diferentes números de protocolo en una misma posición del frame.
Misma técnica a la utilizada para mezclar IPX, Appletalk, TCP, etc. 
Es un problema de la aplicación elegir cuál protocolo utilizar (i.e. si una respuesta a una consulta DNS contiene registros AAAA, entonces preferir TCP sobre IPv6 como transporte).
Esto habilita una transición paulatina, permitiendo a los desarrolladores actualizar gradualmente sus aplicaciones. 
Lenguajes como Java permiten la utilización de objetos de tipo InetAddress, generalizaciones de Inet4Address e Inet6Address, haciendo su manejo independiente del protocolo.

#### Tunelización
Utilizamos el tunneling para “ocultar” tráfico IPv6 dentro de tráfico IPv4. De esta forma podemos cruzar secciones de Internet que nos son IPv6 Ready aún.
Los paquetes IPv6 se encapsulan en paquetes IPv4, que pueden tratarse como tráfico IPv4 standard. 
Conceptualmente, puede pensarse como:
- IPv6 utilizando IPv4 como una capa de enlace virtual
- Una VPN IPv6 configurada sobre la Internet IPv4

![[Pasted image 20221118100642.png]]

Hay distintas formas de poner IPv6 en IPv4:

![[Pasted image 20221118100657.png]]

El concepto se puede aplicar a múltiples protocolos “tunelizados” por otros. El mecanismo más simple es el descripto, normalmente denominado **6in4**; el mecanismo **6to4** es similar pero permite usar servidores de pasarela o relays. Entre otras posibilidades, se puede implementar la tunelización con transporte UDP, denominado Teredo; en este caso se facilita la tunelización a través de un router NAT.

### ICMPv6, ND y etc

El protocolo que utiliza IPv6 para control en general es ICMPv6. El subprotocolo que se encarga del conocimiento, administración y gestión de vecinos en el enlace es el Neighboor Discovery Protocol, ND. 

Los mensajes que se utilizan para descubrir y anunciar las direcciones MAC de un vecino asociadas a cierta dirección IPv6 son **Neighbor Solicitation** y **Neighbor Advertisement**. Cuando un host desea conocer la direccion MAC asociada a un vecino HOST-A envía un mensaje ND, con destino IPv6 la dirección de multicast asociada a todos los hosts (ff02::1) y con dirección de destino a nivel mac, la asociada a dicho grupo de multicast (que no es broadcast). En el payload de ICMPv6, el mensaje ND contiene la dirección objetivo de la consulta. La eventual respuesta (si existe y es alcanzable en ese momento el destino) será enviado en un mensaje de tipo unicast con las direcciones origen y destino esperadas a nivel de cabezales MAC e IPv6. En el payload ICMPv6 viene la respuesta a la consulta donde se indica la dirección MAC solicitada.

```ad-info
title: Diferencias con ARP
Reemplaza los mensajes “ARP request” de IPv4 (transportados en tramas de broadcast ethernet), brindando características mejoradas y teniendo mejor integración con la suite IPv6. ND forma parte de los mecanismos de base de IPv6, mientras que en IPv4 se utilizan diferentes mecanismos para alcanzar funcionalidades similares: ARP, ICMP router discovery, e ICMP redirect.
```

### Path MTU Discovery

Los routers no realizan fragmentación en IPv6, por lo que, si un PDU de IPv6 excede el MTU es descartado. Es importante para cualquier par de entidades que se comuniquen, asegurarse que sus mensajes lleguen a destino, y para ello, sus mensajes no deben exceder el mínimo MTU del camino por el que transitan.

Esto no es necesario en IPv4. La definición de IPv4 involucra que, cuando segmentos de determinado flujo arriban a un enlace con un MTU inferior, se realiza fragmentación y reensamblado en dicho enlace, sin que las entidades origen y destino de la comunicación eventualmente lleguen a enterarse. Los extremos de la comunicación pueden ignorar el mínimo MTU del camino, pues, los routers intermedios lo resuelven.

Pseudocódigo del algoritmo por bipartición. Asumo que dispongo de una función para el envío de un mensaje ICMP echo request.

```c
int pathMTUDiscovery(IPv6_address IP_O, IP_D)
	int max_mtu = link.getMTU();  // el valor máximo lo define el enlace 
	int min_mtu= 1280;  //según RFC 2460 
	int cant_fallos=0; 
	while ((max_mtu – min_mtu)>1) 
		mtu_candidato = (max_mtu + min_mtu) / 2; 
		envio_ICMP_ER(IP_O,IP_D,mtu_candidato); 
		switch event: 
			timeout: //no se lo que pasó: hubo retardo o se perdió el mensaje 
				if (cant_fallos < MAX_FALLOS_ADMITIDOS) 
					cant_fallos++; 
				else 
					return 1280;  // no pude determinar el MTU, pero 
								 // devuelvo un MTU válido 
			ICMP_echo_reply: // mtu_candidato es un MTU válido 
				min_mtu = mtu_candidato; 
			ICMP_packet_too_big: //mtu_candidato excede el pathMTU 
				max_mtu = mtu_candidato; 
	end; //while
	return min_mtu;
```
<div style="page-break-after: always;"></div>

# 5. Capa de Red, plano de control 

- [[#5.1 Algoritmos de enrutamiento]]
- [[#5.2 Enrutamiento jerárquico y sistemas autónomos]]
- [[#5.3 Broadcast y multicast]]<div style="page-break-after: always;"></div>

## 5.1 Algoritmos de enrutamiento 


```ad-info
title: Enrutamiento
Determinar buenas rutas desde los emisores hasta los receptores a través de la red de routers.
```

Dado un conjunto de routers, con enlaces que conectan dichos routers, un algoritmo de enrutamiento determina una “buena” ruta desde el router de origen al router de destino.
Normalmente, una buena ruta es aquella que tiene el coste mínimo.

- Un **algoritmo de enrutamiento global** calcula la ruta de coste mínimo entre un origen y un destino utilizando el conocimiento global y completo acerca de la red.
- En un **algoritmo de enrutamiento descentralizado**, el cálculo de la ruta de coste mínimo se realiza de manera **iterativa** y **distribuida**. Ningún nodo tiene toda la información acerca del coste de todos los enlaces de la red. En lugar de ello, al principio, cada nodo sólo conoce los costes de sus propios enlaces directamente conectados.
- En los **algoritmos de enrutamiento estático**, las rutas cambian muy lentamente con el tiempo, con frecuencia como resultado de una intervención humana.
- Los **algoritmos de enrutamiento dinámico** modifican los caminos de enrutamiento a medida que la carga de tráfico o la topología de la red cambian. Un algoritmo dinámico puede ejecutarse periódicamente o como respuesta directa a cambios en la topología o en el coste de los enlaces.
- En un **algoritmo sensible a la carga**, los costes de enlace varían de forma dinámica para reflejar el nivel actual de congestión en el enlace subyacente. Si se asocia un coste alto con un enlace que actualmente esté congestionado.

[[#5.1.1 Algoritmo de enrutamiento de estado de enlaces (LS)]]
[[#5.1.2 Algoritmo de enrutamiento por vector de distancias (DV)]]

### Comparación LS y DV

- **Complejidad del mensaje**: LS requiere que cada nodo conozca el coste de cada enlace de la red. Además, cuando el coste del enlace cambia, el nuevo coste tiene que enviarse a todos los nodos. El algoritmo de vector de distancias (DV) requiere intercambios de mensajes entre los vecinos directamente conectados en cada iteración. Cuando los costos de los enlaces cambian, el algoritmo de vector de distancias propagara los resultados del coste del enlace que ha cambiado solo si el nuevo coste de enlace da lugar a una ruta de coste mínimo distinta para no de los nodos conectados a dicho enlace.
- **Velocidad de convergencia**: la implementación del algoritmo de estados de enlaces es un algoritmo $O(N^2)$ que requiera enviar $O(N*E)$ mensajes. El algoritmo de vector de distancias puede converger lentamente y pueden aparecer bucles de enrutamiento mientras está convergiendo. Este algoritmo también sufre el problema de la cuenta hasta infinito.
- **Robustez**: LS proporcionando un mayor grado de robustez. Con el algoritmo de vector de distancias, un nodo puede anunciar rutas de coste mínimo incorrectas a cualquiera o a todos los destinos. Con el algoritmo de vector de distancias, un cálculo de nodo incorrecto puede difundirse a través de la red.<div style="page-break-after: always;"></div>

### 5.1.1 Algoritmo de enrutamiento de estado de enlaces (LS) 

En un algoritmo de estado de enlaces, la topología de la red y el coste de todos los enlaces son conocidos; es decir, están disponibles como entradas para el algoritmo LS. En la práctica, esto se consigue haciendo que cada nodo difunda paquetes del estado de los enlaces a todos los demás nodos de la red, con cada paquete de estado de enlace conteniendo las identidades y los costes de sus enlaces conectados.

El resultado de difundir la información de los nodos es que **todos los nodos tienen una visión completa e idéntica de la red**. Cada nodo puede entonces ejecutar el algoritmo LS y calcular el mismo conjunto de rutas de coste mínimo que cualquier otro nodo. 

El algoritmo de Dijkstra calcula la ruta de coste mínimo desde un nodo (el origen, al que denominaremos u) hasta todos los demás nodos de la red.

```c
#### inicialización:
N’ = {u}
D : distancias a cada nodo
P : predecesor en el camino de costo mínimo

for todo nodo v
	if v es un vecino de u:
		D(v) = c(u,v);
		P(v) = u
	else:
		D(v) = ∞;
do
	encontrar w no perteneciente a N’ tal que D(w) sea un mínimo;
	agregar w a N’;
	actualizar D(v) para cada vecino v de w, que no pertenezca a N’:
		D(v) = min( D(v), D(w) + c(w,v) );
		# el nuevo coste a v es o bien el antiguo 
		# coste a v o el coste de la ruta de coste 
		# mínimo a w más el coste desde w a v
		if se modificó D(v):
			P(v) = w
until N’ = N
```

Cuando el algoritmo LS termina, tenemos para cada nodo su predecesor a lo largo de la ruta de coste mínimo desde el nodo de origen. Para cada predecesor, también tenemos su predecesor, y así de este modo podemos construir la ruta completa desde el origen a todos los destinos.

El número total de nodos a través de los que tenemos que buscar teniendo en cuenta todas las iteraciones es igual a $\frac{n(n + 1)}{2}$ y, por tanto, decimos que la implementación anterior del algoritmo LS tiene, en el caso peor, una complejidad de orden n al cuadrado: $O(n^2)$.
Una implementación más eficiente tiene $O(n \times log(n))$.

```ad-example
title: Ejemplo

![[Pasted image 20221118101737.png]]
```<div style="page-break-after: always;"></div>

### 5.1.2 Algoritmo de enrutamiento por vector de distancias (DV) 

El algoritmo por vector de distancias (DV) es iterativo, asíncrono y distribuido. 
- Es **distribuido** en el sentido de que cada nodo recibe información de uno o más de sus vecinos directamente conectados, realiza un cálculo y luego distribuye los resultados de su cálculo de vuelta a sus vecinos. 
- Es **iterativo** porque este proceso continúa hasta que no hay disponible más información para ser intercambiada entre los vecinos.
- El algoritmo es **asíncrono**, en el sentido de que no requiere que todos los nodos operen sincronizados entre sí.

```ad-important
title: Ecuación de Bellman-Ford
<br />

$$d_x (y) = min_{v} \{c(x, v) + d_v(y)\}$$

<br />

Donde $d_x (y)$ representa la distancia mínima de $x$ a $y$, $c(x, v)$ indica el costo físico del link que conecta el nodo $x$ con el $v$, y $d_v(y)$ es la distancia mínima en la cual el nodo $v$ puede llegar al nodo $y$. En definitiva, la distancia se calcula como la distancia hacia el nodo 𝑣 que presenta la distancia mínima al nodo buscado, y el costo de llegar a ese nodo $v$.
```

En el algoritmo, de vez en cuando, cada nodo envía una copia de su vector de distancias a cada uno de sus vecinos. Cuando un nodo x recibe un nuevo vector de distancias procedente de cualquiera de sus vecinos v, guarda dicho vector de v y luego utiliza la ecuación de Bellman-Ford para actualizar su propio vector de distancias.
Si el vector de distancias del nodo x ha cambiado como resultado de este paso de actualización, entonces el nodo x enviará su vector de distancias actualizado a cada uno de sus vecinos, lo que puede a su vez actualizar sus propios vectores distancia.

```python
1  Inicialización: 
2      for todos los destinos y vecinos de x: 
3          Dx(y) = c(x,y) 
4      for cada vecino w de x 
5          Dw(y) = ∞ para todos los destinos y vecinos de x
6      for cada vecino w de x 
7          enviar vector de distancias Dx = [Dx(y): y vecino de x] a w 
8 
9  while True: 
10     wait (hasta ver una variación en el coste de enlace de un vecino w 
11             o hasta recibir un vector de distancias de algún vecino w) 
12 
13     for cada y conocido de x: // pueden haber tanto conocidos vecinos 
14                              // como conocidos no vecinos 
15         Dx(y) = minv vecino de x{c(x,v) + Dv(y)} 
16  
17     if Dx(y) se modifica para cualquier y conocido de x 
18         enviar vector de distancia Dx = [Dx(y): y conocido de x] a 
19         todos los vecinos 
```

El proceso de recibir vectores distancia actualizados de los vecinos, recalcular las entradas de la tabla de enrutamiento e informar a los vecinos de los costes modificados de la ruta de coste mínimo hacia un destino continúa hasta que ya no se envían mensajes de actualización. **El algoritmo se encuentra en estado de reposo.**

#### Conteo al infinito

Si bien el algoritmo funciona bien con costos de link fijos, cabe destacar lo que sucede cuando el costo de un link cambia en la red. Para ello, se debe considerar dos casos diferentes: cuando un link disminuye, y cuando uno de ellos aumenta. 

Para ejemplificar lo que sucede, se presentan las siguientes redes:
![[Pasted image 20221118103043.png]]

En esta oportunidad, se realiza un cambio de costo disminuyendo el link que conecta x e y.

En el tiempo $t_0$, $y$ detecta el cambio de link y envía dicho cambio a sus vecinos. En $t_1$, $z$ recibe el vector de $y$ y actualiza su vector: $D_z(x)= min\{1 + 1, 50 + 0\} = 2$. En $t_2$, $y$ recibe el vector de $z$ y actualiza su vector, pero este permanece incambiado, por lo que no envía más mensajes a sus vecinos. En definitiva, se requieren solamente dos iteraciones para que las tablas converjan.

Esta vez, se aumenta el link que conecta x e y a 60. 
En tiempo $t_0$, $y$ detecta el cambio de link, y computa un nuevo mínimo: $D_y(x)= min\{60+0, 1+5\} = 6$. Claramente, el costo computado es erróneo (ya que el costo del camino mínimo entre x e y es de 51), pero con la información manejada por el nodo no se puede determinar el costo correcto. Se envía a sus vecinos el vector costos con el nuevo costo determinado. En $t_2$, z recibe el vector de $y$, y computa lo siguiente: $D_y(x)= min\{50+0, 6+1\} = 7$ siendo este costo también incorrecto. Luego envía su vector de distancia actualizado. 
Este ciclo de cómputos incorrectos continuará aumentando el valor en una unidad en cada nodo hasta que $z$ determine el costo como $D_z(x)= min\{50+0, 50+1\}$, quedándose así con el primer término, lo que implica que rutea a $x$ directamente por el link que los conecta. Este proceso durará **44 iteraciones**, que es lo que demora el costo mínimo en llegar de 6 a 50.

##### Reversa envenenada
Para solucionar este problema, se utiliza la técnica conocida como reversa envenenada. Supóngase que un nodo x debe enviar su vector de distancia a sus vecinos. Supóngase también que el próximo nodo al que se debe enviar el vector es al nodo y. Antes de realizar el envío, el nodo x modificará las entradas del vector de distancia correspondientes a los nodos que alcanza mediante y por el valor “infinito”. 

En otros términos, si $next\_hop_x(z) = y ⟹ D_x(z)=\infty$. De esta manera, el nodo y creerá que no existe un camino de él hacia $z$ que pase por $x$ y no intentará enviar el paquete destinado a $z$ por esa ruta.

```ad-warning
title: Cuidado
No garantiza una solución al problema para topologías complejas.
```

<div style="page-break-after: always;"></div>

## 5.2 Enrutamiento jerárquico y sistemas autónomos 

**Sistemas autónomos (AS)**, formados por un grupo de routers que normalmente se encuentran bajo el mismo control administrativo. Los routers de un mismo AS ejecutan todos ellos el mismo algoritmo de enrutamiento.

**Protocolo de enrutamiento interno del sistema autónomo:** el algoritmo de enrutamiento que se ejecuta en el sistema. 

**Routers gateways:** routers de un sistema autónomo que tendrán la tarea adicional de ser responsables del reenvio de paquetes a los destinos externos al AS.

Un protocolo de enrutamiento interno cumple la tarea de obtener información de alcanzabilidad de los AS vecinos y propagar dicha información de alcanzabilidad a todos los routers internos del AS.
Cuando un sistema autónomo obtiene información acerca de un destino de un AS vecino, puede anunciar esta información de enrutamiento a algunos de sus otros sistemas autónomos vecinos.

![[Pasted image 20221118105810.png|400]]

```ad-example
title: Método de la patata caliente
Un método, que es el que se suele utilizar en la práctica, consistiría en utilizar el enrutamiento de la **patata caliente**. Con este tipo de enrutamiento, el sistema autónomo suelta el paquete tan rápido como sea posible (de la forma más barata posible). 

Para hacer esto, el router envía el paquete al router de pasarela que tiene el coste más pequeño de entre todos los routers de pasarela que cuentan con una ruta hasta ese destino.
```

```ad-example
title: Definiendo una entrada en la tabla de forwarding de un router

Supongamos que AS1 aprende por medio de un protocolo inter-AS que la subred 𝑋 es alcanzable a través de AS3, por el Gateway 1c, pero no vía AS2; luego el protocolo inter-AS propaga esa información a todos los routers internos. Luego el router 1d determina por el algoritmo de ruteo intra-AS que la interfaz 𝐼 está en el camino de costo mínimo, por lo que agrega a la tabla de forwarding la entrada (𝑋,𝐼).

</br>

![[Pasted image 20221118110145.png|500]]

</br>

Ahora suponemos que AS1 aprende por el protocolo inter-AS que la subred 𝑋 es alcanzable tanto por AS3 como por AS2, entonces, para configurar la tabla de forwarding, el router 1d debe determinar por qué Gateway redirigir los paquetes para el destino 𝑋, lo cual es un trabajo para el protocolo de ruteo inter-AS.

</br>

![[Pasted image 20221118110225.png|500]]
```

### Enrutamiento en Internet

#### INTRA-AS ROUTING (IGP)
El protocolo Intra-AS es utilizado para determinar cómo es ejecutado el ruteo dentro del sistema autónomo. Son conocidos también son conocidos como **Interior Gateway Protocols (IGP)**.

Los más utilizados son:
- **RIP**: Routing Information Protocol
- **OSPF**: Open Shortest Path First
- **IGRP**: Interior Gateway Routing Protocol

Los protocolos de enrutamiento internos de los AS se conocen también como **protocolos de pasarela interior.**

##### Routing Information Protocol (RIP)
RIP es un protocolo de **vector de distancias** que opera de una forma muy parecida al protocolo DV "ideal". Utiliza como métrica de coste el recuento de saltos; es decir, cada enlace tiene un coste de 1. Fue diseñado para **redes pequeñas o medianas** y por esto establece que un camino dentro de la red tiene un máximo de 15 hops. De esta manera utiliza **16 como infinito**.

El vector de distancias para cualquier router es la estimación actual de la ruta más corta desde dicho router a las subredes del AS. En RIP, las actualizaciones de enrutamientos son intercambiadas entre los vecinos cada 30 segundos mediante un **mensaje de respuesta RIP.**

El mensaje de respuesta enviado por un router o un host contiene una lista de hasta 25 subredes de destino pertenecientes al sistema autónomo, así como la distancia desde el emisor a cada una de esas subredes. Los mensajes de respuesta se conocen como **anuncios RIP**.

Cada router mantiene una tabla RIP conocida como tabla de enrutamiento, esta tabla incluye tanto el vector de distancia del router como la tabla de reenvío del mismo.
Si un router no tienen noticias de su vecino al menos una vez cada 180 segundos, considera que ese vecino ya no es alcanzable; es decir, o bien ese vecino ha muerto o el enlace que le conectaba con el ha fallado. Si esto ocurre, RIP modifica su tabla de enrutamiento local, y luego propagara esta información enviando anuncios a sus routers vecinos. Los fallos de enlace se propagan rápidamente a la red completa, utilizando **reversa envenenada** para evitar ping-pong loops, con la distancia infinita igual a 16hops.

Un router también puede solicitar información de otros mediante un mensaje de solicitud RIP, acerca del coste a un destino dado. Esto se realiza mediante mensajes UDP en el puerto 520.

##### OPEN SHORTEST PATH FIRST (OSPF)

Protocolo de **estado de enlaces** que utiliza la técnica de inundación de información de estados de los enlaces y el algoritmo de **cálculo de ruta de coste mínimo de Dijkstra.**

OSPF es un protocolo de enrutamiento **intradominio**, que permite el enrutamiento jerárquico, y lo hace **dividiendo un AS en zonas**.

Con OSPF, un router construye un mapa topológico completo del sistema autónomo entero, es decir un grafo. A continuación, el router ejecuta localmente el algoritmo de la ruta más corta de Dijkstra para determinar un árbol de rutas más cortas a todas las subredes, con él mismo como nodo raíz. 

El administrador de la red configura los costes de los enlaces individuales, además puede decidir hacer igual a 1 el coste de todos los enlaces, proporcionando un enrutamiento de número mínimo de saltos, o puede definir los pesos de los enlaces para que sea inversamente proporcionales a la capacidad de los mismos, con el fin de disuadir el tráfico a utilizar los enlaces con pequeño ancho de banda. 
OSPF no establece una política para definir el pesos de los enlaces, sino que proporciona mecanismos para determinar el enrutamiento de coste mínimo para el conjunto dado de pesos de los enlaces.

Con OSPF, un router difunde la información de enrutamiento a todos los demás routers del sistema autónomo, no solo a sus routers vecinos. Esta información se difunde cuando se ha producido un cambio en el estado de un enlace, también difunde esta información en menos de 30 minutos, incluso aunque no haya cambiado el estado.
Lo anuncios OSPF están contenidos en **OSPF messages** que son transportados **directamente por IP**, siendo el número de protocolo de la capa superior para OSPF igual a 89 (header tipo de IP). Así, el protocolo tiene que implementar por sí mismo funcionalidades tales como la transferencia fiable de mensajes y la de envío de mensajes de difusión acerca del estados de los enlaces. 

OSPF comprueba que los enlaces están operativos mediante que el mensaje HELLO que se envía a un vecino conectado, y permite al router OSPF obtener de un vecino la base de datos de estado de los enlaces de toda la red.

Algunas de las funcionalidades avanzadas incluidas en OSPF son las siguientes:
  - Seguridad: 
	Los intercambios entre routers OSPF pueden ser autentificados.
    Con esto solo pueden participar en el protocolo OSPF los routers de confianza del sistema autónomo. Por defecto, los paquetes OSPF entre routers no son identificados y podrían ser alterados. Pueden configurarse dos tipos de autenticación: simple y MD5.
  - Varias rutas de igual coste:
	Cuando varias rutas de un destino tienen el mismo coste, OSPF permite utilizar varias rutas.
  - Soporte integrado para enrutamiento de unidifusión y por multidifusión: 
	OSP multidifusión añade extensiones simples a OSPF para proporcionar enrutamiento por multidifusión.
- Soporte para añadir una jerarquía dentro de un mismo dominio de enrutamiento.

###### OSPF jerárquico
Se tienen dos niveles de jerarquía, **área local** y **backbone**. Los advertisements de link-state solo ocurren en área local. Cada nodo tiene una topología detallada de áreas, solo sabe direcciones a redes en otras áreas.

![[Pasted image 20221118112110.png|500]]

Varios elementos: 
- Area border routers: resume las distancias a redes en su propia área y avisa a otros Area border routers.
- Backbone routers: corren el ruteo OSPF limitado al backbone.
- Boundary routers: conectan con otros AS.


#### Enrutamiento entre sistemas autónomos: BGP

BGP es un protocolo de enrutamientos entre sistemas autónomos que proporciona a cada sistema autónomo mecanismos para:
- Obtener información acerca de la alcanzabilidad de las subredes de los sistemas autónomos vecinos.
- Propagar la información de alcanzabilidada a todos los routers internos del sistema autónomo.
- Determinar buenas rutas de subredes, basándose en la información de alcanzabilidad y en la política del sistema autónomo.
Lo más importante es que BGP permite a cada subred anunciar su existencia al resto de Internet.

En BGP, los pares de routers intercambian la información de ruteo mediante conexiones TCP semipermanentes en el puerto 179. En general, existe una conexión BGP-TCP por cada enlace que conecta directamente dos routers en dos AS distintos. Además, hay también una conexión TCP semipermanente entre los routers dentro del AS.

Para cada conexión TCP, los dos routers situados en los extremos de la conexión se denominan **pares BGP** y la conexión TCP junto con todos los mensajes BGP enviados a través de la conexión se denomina **sesión BGP.** Además, una sesión BGP que abarca dos sistemas autónomos se conoce como **sesión externa BGP** (eBGP) y una sesión BGP entre routers de un mismo sistema autónomo se conoce como **sesión interna BGP** (iBGP).

BGP permite que cada sistema autónomo aprenda qué destinos son alcanzables a través de sus sistemas autónomos vecinos. En BGP, los destinos no son hosts sino prefijos CIDR, representando cada prefijo una subred o una colección de subredes.

##### Atributos de ruta y rutas BGP
En BGP, un sistema autónomo se identifica mediante su número de sistema autónomo (**ASN, Autonomous System Number**) globalmente único.

Atributos BGP:
- **AS-PATH**: contiene los sistemas autónomos a través de los que ha pasado el anuncio del prefijo. Cuando se ha pasado un prefijo dentro de un sistema autónomo, el sistema añade su ASN al atributo AS-PATH. Los routers utilizan este atributo para impedir los bucles de anuncios.
- El siguiente salto (**NEXT HOP**) es la interfaz del router que inicia la secuencia de sistemas autónomos (osea la AS-PATH).

Además, BGP incluye atributos que permiten a los routers asignar métricas de preferencia en las rutas, y un atributo que indica como el prefijo fue insertado en BGP en el AS de origen. 
Cuando un **Gateway router** recibe un aviso de ruta, utiliza su **import policy** para decidir si aceptarla o rechazarla, por ejemplo, sabiendo que nunca se debe hacer el ruteo por el ASxyz.

##### Selección de la ruta BGP

Un router puede aprender acerca de más de una ruta a cualquier prefijo, en cuyo caso tendrá que seleccionar una de las posibles rutas. Las entradas para este proceso de selección de ruta es el conjunto de todas las rutas que han sido aprendidas y aceptadas por el router. 

Si existen dos rutas con el mismo prefijo, entonces BGP invoca secuencialmente las siguientes reglas de eliminación hasta quedarse con una ruta:
1. Valor del atributo de preferencia local, que puede ser definido por el router, o aprendido desde otro router en el mismo AS. Esta política de decisión es llevada a cabo por el administrador de red del AS.
2. AS-PATH más corto
3. El router NEXT-HOP más cercano, utilizando el ruteo de la papa caliente.
4. Si todavía quedan rutas, entonces se aplican criterios adicionales.

Es importante observar que **no se puede afirmar que la decisión garantiza un camino más corto en cantidad de hops de routers**, porque se desconoce la información interna de cada AS. Un camino con AS-PATH más corto puede incluir ASs con muchos “hops” de routers internos, y puede ser más largo en término de routers que otro camino con AS-PATH más largo.

```ad-example
title: Caso de papa caliente

**Dado un Sistema Autónomo ASx conectado a otros Sistemas Autónomos utilizando BGP, describa el concepto de "enrutamiendo de papa caliente" (hot-potato routing) para routers internos al ASx.**

</br>

BGP es utilizado intra-dominio para propagar a los routers internos la información de alcanzabilidad de prefijos externos al sistema autónomo. Si para un determinado prefijo existen múltiples opciones de "next-hop", el enrutamiento de "papa caliente" eligirá como router de borde aquel que tenga el menor costo según el protocolo de enrutamiento interior (IGP).
```

##### Mensajes BGP

Los mensajes BGP se intercambian usando TCP.
- **OPEN**: abre conexión TCP con “peer” y autentica al que envía.
- **UPDATE**: publica nuevos caminos (o da de baja otros).
- **KEEPALIVE**: mantiene la conexión viva en ausencia de UPDATES; se usa también como ACK del OPEN.
- **NOTIFICATION**: reporta errores en mensaje previo; también se usa para cerrar la conexión.

##### Política de ruteo en BGP:

![[Pasted image 20221118115118.png]]

- A, B, C son proveedores de red. 
- X, W, Y son clientes de los proveedores.
- X es dual-homed, ya que está asociado a dos redes. Por lo que X no quiere “rutear” desde B por X a C, de esta forma, X no avisara a B una ruta a C.
- A avisa un camino AW a B.
- B avisa un camino BAW a X.
- Así, surge la consulta de si B debe avisar del camino BAW a C:
	- No, ya que B no obtiene “ingresos” por hacer el ruteo CBAW ya que ni W ni C son clientes de B.
	- B quiere forzar a C a rutear por w a través de A. 
	- B quiere rutear solamente desde/hacia sus clientes.

#### ¿Por qué diferentes ruteos Intra-AS e Inter-AS? 

##### Políticas:
- Inter-AS: el administrador quiere el control sobre como su tráfico es ruteado, es decir, quien rutea a través de su red.
- Intra-AS: un único administrador, por lo que no se necesitan políticas de decisión.

##### Escala:
- El ruteo jerárquico reduce el tamaño de la tabla.

##### Rendimiento:
- Intra-AS: puede enfocarse en el rendimiento.
- Inter-AS: las políticas deben dominar por sobre el rendimiento.<div style="page-break-after: always;"></div>

## 5.3 Broadcast y multicast 

En **broadcast Routing**, la capa de red provee un servicio de entrega de paquetes enviados desde el nodo fuente hacia todos los nodos en la red. 
Por otro lado, **multicast Routing** permite a un único nodo enviar una copia de un paquete a un subconjunto de nodos en otra red.

### Algoritmos de Ruteo de Broadcast

Dados N nodos de destino, el nodo fuente realiza N copias del paquete, direcciona cada copia a un destino distinto, y transmite todas estas a los destinos utilizando Unicast Routing. El principal problema de esta implementación es la ineficiencia, ya que, si el nodo fuente está conectado al resto de la red mediante un único enlace, entonces N copias del mismo paquete atravesaran ese único enlace.

![[Pasted image 20221118121112.png|500]]

Otro problema es cómo es obtenida la información de los receptores, ya que se asume que es conocida

#### In-network duplication

Una forma de implementar el broadcast es utilizando **flooding**, que consiste en que el nodo fuente envía una copia del paquete a todos sus vecinos. Una vez que un nodo recibe un paquete de broadcast, duplica el paquete y lo reenvía a todos sus vecinos, exceptuando a aquel del cual recibió el paquete. Sin embargo, esta aproximación tiene problemas; por ejemplo, si el grafo tiene ciclos, las copias de los paquetes de broadcast estarán en el ciclo indefinidamente. Otro problema es cuando un nodo está conectado a más de dos nodos, este creará y enviará múltiples copias del paquete de broadcast, y cada uno creará una copia de sí mismo (en otro nodo con más de dos vecinos), generando así una **tormenta de broadcast**, lo cual termina en múltiples paquetes generados, que no son utilizados.

Para solucionar este problema se utiliza el concepto de flooding controlado, donde la clave es que un nodo reenvía un paquete de broadcast únicamente si aún no hizo broadcast de ese paquete antes. Para implementarlo existen distintas técnicas.

- **Por número de secuencia**: un nodo fuente agrega su dirección al paquete, además de un número de secuencia de broadcast en el paquete de broadcast, y envía el paquete a todos sus vecinos. Luego cada nodo mantiene una lista de las direcciones y números de secuencia de cada paquete de broadcast que ya ha recibido, duplicado y reenviado. Cuando este nodo recibe un paquete, chequea en el registro si tiene una entrada para esta dirección y número de secuencia, y en caso de que si, el paquete es ignorado. En caso de que no exista, se duplica y reenvía. 
- **Reverse Path Forwarding (RPF)**: Solamente se hace el forward de un paquete si este llegó del camino más corto entre el nodo y la fuente. Por ejemplo:
	![[Pasted image 20221118121250.png|300]]

#### Broadcast por Spanning Tree:

En primer lugar, se construye un árbol de cubrimiento. Luego los nodos reenvían copias de los paquetes solamente a través del árbol de cubrimiento construido.

![[Pasted image 20221118121341.png]]

Para construir el árbol de cubrimiento, en primer lugar, se toma un nodo central. Luego cada nodo envía un mensaje unicast de join al nodo central. El mensaje será reenviado hasta que llega a un nodo que ya pertenece al árbol de cubrimiento.

![[Pasted image 20221118121401.png]]

#### Broadcast vs flooding

Ambos mecanismos cumplen la misma función: enviar una copia de un mensaje a todos los nodos de una red. En el caso de broadcast típicamente se asume un medio compartido (por ejemplo un dominio de broadcast ethernet), donde el origen de la comunicación envía un mensaje a una dirección especial que representa a todos los nodos. En redes con topologías arbitrarias, el envío de un mensaje a todos los nodos se puede implementar mediante flooding. 

```ad-example
title: Ejemplos

Ethernet 802.3 tiene la dirección FF:FF:FF:FF:FF:FF definida como dirección de broadcast. 

OSPF utiliza flooding para el envío de información de estado-enlace entre routers; en este caso se utiliza como destino una dirección de multicast que representa a todos los routers.
```

### Multicast

La idea es encontrar un árbol o árboles conectando routers teniendo miembros de un grupo local de multicast.
- Tree: no todos los caminos entre routers son usados.
- Source-based: diferente árbol desde cada emisor a receptor.
- Shared-tree: el mismo árbol utilizado por todos los miembros del grupo.

![[Pasted image 20221118121455.png|500]]

#### Aproximaciones para la construcción de árboles de multicast
- Source-based tree: un árbol por fuente.
	- Shortest Path trees.
	- Reverse Path Forwarding.
- Group-shared tree: el grupo usa un árbol.
	- Minimal Spanning (Steiner).
	- Center-based trees.

![[Pasted image 20221118121615.png]]
![[Pasted image 20221118121626.png]]
![[Pasted image 20221118121635.png]]
![[Pasted image 20221118121649.png|400]]<div style="page-break-after: always;"></div>

# 6. Capa de Enlace 

Protocolo de la capa de transporte: define el formato de los paquetes intercambiados por los nodos situados en los extremos del enlace, así como las acciones que estos nodos llevan a cabo cuando se envían y reciben los paquetes. Tiene asignada la tarea de mover tramas entre nodos.

```ad-info
title: Trama (o frame)
Unidades de datos intercambiadas por un protocolo de la capa de enlace. 
Un mismo datagrama puede ser transportado por diferentes protocolos de la capa de enlace en los distintos enlaces que forman la ruta.
```

```ad-question

title: ¿Dónde se implementa la capa de enlace?
Está implementada en todos y cada uno de los hosts. La capa de enlace se implementa en “adaptadores de red”, también conocidas como “Tarjeta de interfaz de red”. En el corazón del adaptador de red se encuentra el controlador de capa de enlace, que usualmente es un único chip que implementa muchos de los servicios de capa de red. 

</br>

En una comunicación entre adaptadores tenemos dos lados, el lado emisor y el lado receptor. El lado emisor encapsula el datagrama en el frame y agrega bits de chequeo de errores, rdt, control de flujo, etc. 

</br>

Por otro lado, el lado receptor busca por errores, rdt, control de flujo, etc.; extrae el datagrama y lo pasa a la capa superior en el lado receptor.

</br>

![[Pasted image 20221116122610.png|300]]
![[Pasted image 20221116122621.png|400]]

```

## Servicios proporcionados por la capa de enlace

- **Entramado (o framing):** 
	Casi todos los protocolos de la capa de enlace encapsulan cada datagrama de la capa de red dentro de una trama (o frame) de la capa de enlace antes de transmitirla a través del enlace.

- **Acceso al enlace:**
	Un protocolo de control de acceso al medio (MAC) especifica las reglas que se utilizan para transmitir una trama a través del enlace.

- **Entrega fiable entre nodos adyacentes:** 
	Cuando un protocolo de la capa de enlace proporciona un servicio de entrega fiable, garantiza que va a transportar cada datagrama de la capa de red a través del enlace sin que se produzcan errores.

- **Control de flujo:** 
	Puede proporcionar un mecanismo de control de flujo para evitar que el nodo emisor al otro lado del enlace abrume al nodo receptor situado en el otro extremo.

- **Detección de errores:**  
	Puede proporcionar un mecanismo para detectar errores de bit. Esto se lleva a cabo haciendo que el nodo transmisor incluya bits de detección de errores en la trama y que el nodo receptor realice una comprobación de errores. Detección más sofisticada, se implementa en hardware.

- **Corrección de errores:** 
	El receptor no solo detecta si hay bits erróneos en la trama, sino que también determina exactamente en qué puntos de la trama se han producido los errores y luego los corrige.

- **Semiduplex y full-duplex:** 
	Con la transmisión full-duplex, los nodos de ambos extremos de un enlace pueden transmitir paquetes al mismo tiempo. Sin embargo, con la transmisión semiduplex un mismo nodo no puede transmitir y recibir al mismo tiempo.

- [[#6.1 Técnicas de detección y corrección de errores]]
- [[#6.2 Protocolo de acceso múltiple]]
- [[#6.3 Direccionamiento de la capa de enlace]]
- [[#6.4 Ethernet]]
- [[#6.5 Dominios de colisión y de broadcast]]
- [[#6.6 Hub y Switch]]
- [[#6.6.1 Switch vs Router]]
- [[#6.7 VLAN, redes de área local virtuales]]
- [[#6.8 PPP, Protocolo punto a punto]]<div style="page-break-after: always;"></div>

## 6.1 Técnicas de detección y corrección de errores 

Notamos EDC a los Bits de detección y corrección de errores (redundancia), y D a los datos protegidos por el chequeo de errores, que puede incluir campos de encabezado. 

La detección de errores no es 100% confiable, ya que el protocolo puede olvidar algunos errores (raramente), aunque con mayor campo para EDC significa una mejor corrección y detección de errores.

![[Pasted image 20221116122946.png|500]]

```ad-question
title: Si todos los enlaces de Internet tuvieran que proporcionar un servicio de entrega de tramas fiable, ¿sería redundante el servicio de entrega fiable de TCP?

No, no sería redundante ya que se pueden perder paquetes por congestión en las colas de los routers, o pueden llegar en desorden a causa de diversidad de caminos en un flujo.
```

### Comprobaciones de paridad

En un esquema de paridad par, el emisor simplemente incluye un bit adicional y selecciona su valor de modo que el número total de 1s en los d+1 bits (la info. original más el bit de paridad) sea par. El receptor solamente necesita contar el número de 1s de los d+1 bits recibidos. 

Si se está utilizando un esquema de paridad par y se encuentra un número impar de bits con valor 1, el receptor sabrá que se ha producido al menos un error de bits. O que se ha producido un número impar de errores de bits.

![[Pasted image 20221116123009.png]]

#### Paridad bidimensional

Los d bits de D se dividen en i filas y j columnas. Para cada una de esas filas y columnas se calcula un valor de paridad.
Los i+j+1 bits de paridad resultantes serán los bits de detección de error.
Se detecta el error en la paridad tanto de la fila como de la columna. El receptor no solo podrá detectar el hecho de que se ha producido un único error de bit, sino que puede utilizar los índices de la columna y de la fila que presentan errores de paridad para identificar realmente el bit corrompido y corregirlo.

![[Pasted image 20221116123045.png|400]]

```ad-faq
title: FEC
**Corrección de errores hacia delante** (FEC): la capacidad del receptor para detectar y corregir errores a la vez.
```

### Suma de comprobación

Los d bits de datos se tratan como una secuencia de enteros de k bits. El método consiste en sumar estos enteros de k bits y utilizar la suma resultante como bits de detección de errores.

#### En Internet
[FIX ME: completar con referencia a IP y UDP]

### Comprobación de redundancia cíclica (CRC)

Se toman los bits de datos D como un número binario. Se toma G, un patrón de r+1 bit (generador). La idea es elegir r CRC bits (R), de forma que:
- <D,R> sea divisible exactamente por G módulo 2. 
- El receptor conoce G, divide <D,R> por G. Si el resto no es cero, entonces hay error.
- Puede detectar errores en ráfaga menores a r+1 bits. 
Es muy utilizado en la práctica, por ejemplo, en Ethernet, 802.11 WiFi, ATM.

![[Pasted image 20221116123507.png|500]]

```ad-example
title: Ejemplo de CRC

![[Pasted image 20221116123544.png]]
```
<div style="page-break-after: always;"></div>

## 6.2 Protocolo de acceso múltiple 

Un **enlace punto a punto** está compuesto por un único emisor en un extremo del enlace y un único receptor en el otro extremo. Un **enlace de difusión** (o enlace de broadcast), puede tener múltiples nodos emisores y receptores, todos conectados al mismo y único canal de difusión compartido.

```ad-example
title: Ejemplos de enlaces de broadcast

![[Pasted image 20221116130215.png]]
```


```ad-summary
title: Problema de acceso múltiple
Coordinar el acceso de múltiples nodos emisores y receptores a un canal de difusión compartido.
```

En el caso de un canal de broadcast compartido surge un problema. En caso de que dos o más transmisiones simultaneas sobre ese enlace, **se puede producir interferencia**. Cuando un nodo recibe dos o más señales al mismo tiempo, se produce una **colisión**. De ahí que surgen los protocolos de acceso múltiple, que son algoritmos distribuidos que determinan como los nodos comparte el canal, por ejemplo, determinando cuando un nodo puede transmitir

```ad-info
title: Protocolos de acceso múltiple
Protocolos mediante los cuales los nodos se encargan de regular sus transmisiones al canal de difusión compartido.
```

### Características deseables

Un protocolo de acceso múltiple para un canal de difusión con una velocidad de R bits por segundo debería tener las siguientes **características deseables**:
- Cuando sólo haya un nodo que tenga datos para enviar, a dicho nodo se le asignará una **tasa de transferencia de R bps**
- Cuando haya M nodos con datos para enviar, **cada uno de esos nodos tendrá una tasa de transferencia de R/M bps**. Esto no implica necesariamente que cada uno de los M nodos tenga siempre una tasa instantánea igual a R/M, sino más bien que cada nodo tendrá una tasa media de transmisión igual a R/M a lo largo de un intervalo de tiempo definido adecuadamente.
- El protocolo será **descentralizado**; es decir, no habrá ningún nodo maestro que pueda actuar como punto único de fallo para la red.
- El protocolo debe ser simple y de forma que no sea costoso de implementar.

#### Protocolos de particionamiento del canal

##### Multiplexación por división en el tiempo (TDM o TDMA)
Se divide el tiempo en marcos temporales y luego subdivide cada marco temporal en N particiones de tiempo. 
Cada partición se le asigna a cada uno de lo N nodos.

```ad-example
title: Ejemplo

Una LAN con 6 estaciones, 1,3,4 tienen paquetes, 2,5,6 quedan ociosos:

![[Pasted image 20221116130645.png]]
```

##### Multiplexación por división de frecuencia (FDM)
Divide el canal de R bps en diferentes frecuencias (de ancho de banda R/N) y asigna cada frecuencia a cada uno de los N nodos.

```ad-example
title: Ejemplo

LAN de 6 estaciones, 1,3,4 tienen paquete, las bandas de frecuencia 2,5,6 quedan ociosas:
![[Pasted image 20221116130747.png]]
```

##### Acceso múltiple por división de código (CDMA)
Asigna un código diferente a cada nodo. Cada nodo utiliza su código único para codificar los bits de datos a enviar. Se puede llegar a que los distintos nodos pueden transmitir simultáneamente y conseguir que sus respectivos receptores decodifiquen correctamente los bits de datos codificados por el emisor aunque haya interferencias provocadas por las transmisiones realizadas por los otros nodos.

#### Protocolos de acceso aleatorio

Cada nodo transmisor transmite siempre a la máxima velocidad del canal, que es R bps. 
Cuando se produce una colisión, cada uno de los nodos implicados en la colisión retransmite repetidamente su trama (es decir, su paquete) hasta que la trama consiga pasar sin sufrir colisiones. Cuando esto sucede, cada nodo elige un retardo aleatorio independiente para retransmitir la trama.

Algunos ejemplos de estos protocolos son: 
- Slotted ALOHA
- ALOHA
- CSMA, CSMA/CD, CSMA/CA

##### ALOHA con particiones
- **Todas** las tramas constan de exactamente L bits.
- El tiempo está dividido en particiones de L/R segundos (cada partición equivale al tiempo que se tarda en transmitir una trama).
- Los nodos comienzan a transmitir las tramas sólo al principio de las particiones.
- Los nodos están sincronizados, de modo que cada nodo sabe cuándo comienzan las particiones.
- Si dos o más tramas colisionan en una partición, entonces todos los nodos detectan la colisión incluso antes de que la partición termine.

Sea _p_ una probabilidad, es decir, un número comprendido entre 0 y 1:
1. Cuando el nodo tiene una nueva trama que enviar, espera hasta el comienzo de la siguiente partición y transmite la trama completa dentro de la partición.
2. Si no se produce una colisión, el nodo habrá transmitido correctamente su trama y por tanto no considerará la posibilidad de retransmitirla (el nodo puede preparar una nueva trama para su transmisión, si tiene una disponible).
3. Si se produce una colisión, el nodo detecta la colisión antes de que la partición termine. El nodo retransmitirá su trama en cada partición posterior con una probabilidad  _p_, hasta conseguir que la trama sea transmitida sin experimentar colisiones.

```ad-example
title: Ejemplo

Los nodos 1, 2 y 3 colisionan en el primer slot. El nodo 2 finalmente tiene éxito en el cuarto slot, el nodo 1 en el octavo slot y el nodo 3 en el noveno slot.
![[Pasted image 20221116131244.png]]
```

El protocolo es **altamente descentralizado**, porque cada nodo detecta las colisiones y decide de forma independiente cuándo debe retransmitir.

```ad-important
title: Particiones con éxito y eficiencia

Particiones en las que hay exactamente un nodo transmitiendo.

La eficiencia de un protocolo de acceso múltiple con particiones se define como la fracción (calculada a largo plazo) de particiones con éxito cuando existe un gran número de nodos activos, cada uno de los cuales tiene siempre una gran cantidad de tramas que enviar.
```

###### Pros, contras y eficiencia:

**Pros:**
- Un único nodo activo puede transmitir continuamente a la tasa total del canal.
- Altamente descentralizado, ya que solo los slots en los nodos tienen que ser sincronizados.
- Es simple.

**Contras:**
- Colisiones, desperdiciando slots.
- Slots ociosos.
- Los nodos tienen que ser capaces de detectar colisiones en un tiempo menor al que se transmite un paquete.
- Sincronización por reloj.

**Eficiencia:**
- Supongamos que **$N$ nodos** con varios frames para enviar, cada un transmite en el slot con probabilidad $p$.
- La probabilidad de que un nodo tenga éxito en un slot es: $p(1-p)^{N-1}$
- La probabilidad de que algún nodo tenga éxito es: $Np(1-p)^{N-1}$
- La máxima eficiencia: encontrar $p^*$ que maximice $Np(1-p)^{N-1}$
- Para muchos nodos, tomar el limite de $Np^*(1-p^*)^{N-1}$ con $N$ tendiendo a infinito da que la máxima eficiencia es $1/e = 0.37$.
- Es decir que, en el mejor caso, el canal es usado para transmisión útil el 37% del tiempo.

##### ALOHA (puro)
Cuando llega una trama, el nodo transmite inmediatamente la trama en su totalidad hacia el canal de difusión. Si una trama transmitida experimenta una colisión con una o más transmisiones de otros nodos, el nodo (después de transmitir completamente la trama que ha sufrido la colisión) retransmitirá la trama de forma inmediata con una probabilidad $p$.
En caso contrario, el nodo esperará durante un tiempo equivalente al tiempo total de retransmisión de una trama. Después de esta espera, transmitirá la trama con probabilidad $p$, o esperará (permaneciendo inactivo) durante otro periodo de tiempo igual al tiempo de transmisión de una trama con una probabilidad  $1 – p$.

```ad-example
title: Ejemplo

El frame enviado en $t_0$ colisiona con otros frames enviados entre $[𝑡_0 − 1,𝑡_0 + 1]$.

</br>

![[Pasted image 20221116132602.png]]
```

La máxima eficiencia del protocolo ALOHA puro es sólo de $1/(2e)$, que es exactamente la mitad que la del ALOHA con particiones.

```ad-todo
title: Calculo de la eficiencia

![[Pasted image 20221116132729.png]]
```


##### CSMA (Carrier Sense Multiple Access)
- “Escuchar antes de hablar” (sondeo de portadora o **"carrier sensing"**):
	Cada nodo escucha el canal antes de transmitir. Si actualmente se está transmitiendo una trama de otro nodo por el canal, el nodo esperará un intervalo de tiempo aleatorio y luego volverá a sondear para ver si existe portadora en el canal.
- “Si alguien comienza a hablar al mismo tiempo, hay que dejar de hablar” (detección de colisiones o **"collision detection"**): 
	Si detecta que otro nodo está transmitiendo una trama que interfiere la suya, dejará de transmitir y empleará algún tipo de protocolo para determinar cuándo debe volver a intentar transmitir de nuevo.

![[Pasted image 20221116132854.png]]

Cuanto mayor sea el **retardo de propagación** (el tiempo que una señal tarda en propagarse de uno de los nodos a otro), mayor será la probabilidad de que un nodo que efectúe el sondeo de portadora no sea capaz detectar una transmisión que ya ha comenzado en otro nodo de la red.
Cuando un nodo realiza una detección de colisiones, deja de transmitir en cuanto detecta que se ha producido una colisión.
Que ocurra una colisión implica que el tiempo total de transmisión del paquete fue desperdiciado.
Hay que notar el rol de la distancia y del retraso de propagación a la hora de determinar la probabilidad de colisión. Cuanto más largo es el retraso de propagación, más grande es la chance de que un nodo carrier-sensing aún no tenga la capacidad de sentir una transmisión que ya ha comenzado en algún otro nodo de la red.

##### CSMA/CD (Carrier Sense Multiple Access / Collision Detection)
El carrier sensing en este caso es igual al de CSMA. Las colisiones son detectadas dentro de un período corto de tiempo, y las **transmisiones que coinciden son abortadas**, reduciendo el desperdicio del canal. 
La detección de colisiones es simple en redes cableadas LAN, mediante la medida de la intensidad de la señal y comparando las señales recibidas y transmitidas. 
Es difícil en LANs inalámbricas, ya que la intensidad de señal recibida se ve abrumada por la intensidad de transmisión local.

![[Pasted image 20221116133102.png]]

#### Protocolo de toma de turnos

##### Protocolo de sondeo (polling)
Este protocolo requiere que se designe a uno de los nodos como nodo maestro. El nodo maestro sondea a cada uno de los otros nodos a la manera de turno rotatorio (round robin).

Desventajas: 
- Introduce un retardo de sondeo: el intervalo de tiempo requerido para indicarle a un nodo que puede transmitir. 
- Si el nodo maestro falla, entonces todo el canal dejará de estar operativo.
- Uso del canal perdido al sondear

![[Pasted image 20221116134521.png]]

##### Protocolo de paso de testigo
Existe una trama de pequeño tamaño y de propósito especial conocida con el nombre de testigo (token) que va siendo intercambiada entre los nodos en un determinado orden fijo.
Cuando un nodo recibe el testigo, lo retiene si dispone de alguna trama para transmitir; en caso contrario, reenvía inmediatamente el testigo al siguiente nodo. Si un nodo tiene tramas que transmitir cuando recibe el testigo, envía una trama detrás de otra, hasta el número máximo de tramas permitido y luego reenvía el testigo al siguiente nodo.

**Descentralizado y muy eficiente.**

Desventajas: 
- El fallo de un nodo puede hacer que todo el canal quede inutilizable, o si un
nodo se olvidara accidentalmente de liberar el testigo, entonces sería necesario invocar
algún procedimiento de recuperación para hacer que el testigo vuelva a circular.
- Latencia entre que un nodo deja de usar el canal y lo empieza a usar otro.
- Uso del canal perdido (mandar el token)

![[Pasted image 20221116134650.png]]

<div style="page-break-after: always;"></div>

## 6.3 Direccionamiento de la capa de enlace 

### Direcciones MAC

La dirección MAC tiene 6 bytes de longitud, lo que nos da $2^{48}$ posibles direcciones MAC.
Suelen expresarse en notación hexadecimal, indicándose cada byte de la dirección mediante una pareja de números hexadecimales. Aunque las direcciones MAC se diseñaron para ser permanentes, hoy día es posible modificar la dirección MAC de un adaptador mediante un software apropiado.

El **IEEE** se encarga de gestionar el espacio de direcciones MAC, vende direcciones a las empresas que quieren fabricar adaptadores, de forma de tener direcciones MAC únicas.
Las direcciones MAC tienen una estructura plana y no varían dependiendo de a donde se lleve el adaptador.

Cuando un adaptador de un emisor quiere enviar una trama a otro adaptador de destino, inserta la dirección MAC del de destino en la trama y luego la envía a través de la red LAN.
Si se trata de una LAN de difusión, la trama será recibida y procesada por todos los demás adaptadores de la LAN. En particular, cada adaptador que reciba la trama comprobará si la dirección MAC de destino contenida en la trama se corresponde con su propia dirección MAC. Solo se pasará la trama “hacia arriba” si coincide la dirección MAC.

**Dirección de difusión MAC : FF:FF:FF:FF:FF:FF,** con esta dirección se quiere que todos los adaptadores reciban y procesen la trama enviada.

### Protocolo de resolución de direcciones (ARP)

Lleva a cabo la tarea de traducir las direcciones de la capa de red y de enlace.

Un módulo ARP en el nodo emisor toma como entrada cualquier dirección IP de la misma LAN y devuelve la dirección MAC correspondiente. Resuelve direcciones IP solo para nodos en una misma subred.
Cada nodo tiene en su memoria una tabla ARP, que contiene las correspondencias entre las direcciones IP y las direcciones MAC.

Si no existe la entrada en la tabla para el nodo que se quiere, el nodo emisor utiliza el protocolo ARP para resolver la dirección. En primer lugar, el nodo emisor construye un paquete especial denominado paquete ARP. Un paquete ARP contiene varios campos, incluyendo las direcciones MAC e IP del emisor y el receptor. Los paquetes de consulta y de respuesta ARP tienen el mismo formato. El propósito del paquete de consulta ARP es consultar a todos los demás nodos de la subred con el fin de determinar la dirección MAC correspondiente a la dirección IP que está resolviendo.

Al recibir un mensaje ARP, cada nodo chequea si la IP coincide con la suya, el único en el que se produzca la coincidencia devolverá al nodo que ha realizado la consulta una respuesta ARP con la correspondencia deseada. El nodo que ha realizado la consulta podrá entonces actualizar su tabla ARP y enviar su datagrama IP, encapsulado dentro de una trama de la capa de enlace, cuya dirección de destino MAC es la del nodo que ha contestado a la anterior consulta ARP.

Protocolo **plug-and-play**, la tabla ARP se construye automáticamente y si un nodo se desconecta de la subred, su entrada en las tablas se eliminará (gracias a que se guarda un TTL en la tabla).

Para **enviar un datagrama a un nodo fuera de una subred**, la trama tiene que ser enviada con la dirección MAC del siguiente adaptador en el camino hacia el nodo fuera de la subred (next-hop) pero con la IP del nodo destino.

```ad-example
title: Ejemplo dentro de una misma LAN

Supongamos que A quiere enviar un datagrama a B, y la dirección MAC de B no está en la tabla ARP de A.

Lo primero que hace A es hacer broadcast a un paquete ARP request, que contiene la dirección IP de B, a la dirección MAC de broadcast (FF-FF-FF-FF-FF-FF), por lo que cada dispositivo en la LAN recibe esta ARP request. 

Una vez que B recibe el paquete ARP, responde a A con su dirección MAC (la de B), enviándo a la dirección MAC de A un paquete ARP reply. 

Cuando A recibe estos datos, extrae la dirección MAC de B y la agrega a la tabla ARP (caché ARP), manteniéndola hasta que expira el TTL.
```

```ad-example
title: Ejemplo ruteando hacia otra LAN

Consideremos el siguiente ejemplo:

</br>

![[Pasted image 20221116135300.png]]

Se desea enviar un datagrama IP desde A hacia B a través de R. El host emisor pasa el datagrama a su adaptador de red. Sin embargo, este debe indicar la dirección MAC de destino, que no es la dirección MAC de B (están en distinta subred), sino que debe ser de un dispositivo de la subred a la que pertenece A. 

</br>

Para enviar un datagrama a B este debe pasar por el router R, por lo cual, la dirección MAC que se debe especificar es la de la interfaz del router por la cual pasa el datagrama, en este caso, aquella con IP 111.111.111.110. Luego, utilizando ARP obtiene la dirección MAC de esta interfaz (E6-E9-00-17-BB4B). Ahora que se conoce esta MAC, se crea un frame que contiene un datagrama direccionado a la IP de B y envía el frame en la Subred de A. 

</br>

Cuando el router recibe en la interfaz 111.111.111.110 el paquete, lo pasa a su capa de red. Ahora, chequeando la tabla de Forwarding del router vemos la interfaz por la que el paquete debe salir para llegar a B. Esta interfaz luego pasa el paquete a su adaptador de red, que lo encapsula en un nuevo frame y lo envía a la subred 2, a la dirección MAC de B, obtenida mediante ARP. Luego envía el paquete, llegando al destino B.

</br>

![[Pasted image 20221116135311.png]]

</br>

![[Pasted image 20221116135314.png]]
```

```ad-info
title: Paquete ARP

![[Pasted image 20221116135418.png]]
```

<div style="page-break-after: always;"></div>

## 6.4 Ethernet 

Es la tecnología cableada LAN dominante, por varias razones:
- Una tarjeta de red es barata.
- Primera tecnología LAN utilizada ampliamente.
- Más simple y barata que token LAN y ATM.
- Permite velocidades entre 10Mbps – 10Gbps
 
### Estructura de la trama Ethernet

![[Pasted image 20221116135951.png]]

- **Campo de datos:** transporta el datagrama IP. La unidad máxima de transmisión (MTU) de Ethernet es 1.500 bytes, lo que quiere decir que si el datagrama IP excede de 1.500 bytes, entonces el host tiene que fragmentar el datagrama. El tamaño mínimo del campo de datos es 46 bytes, lo que significa que si el datagrama IP tiene menos de 46 bytes, el campo de datos tiene ser rellenado hasta los 46 bytes (después se utiliza el campo “longitud de cabecera” para eliminar el relleno).

- **Dirección de destino:** contiene la dirección MAC del adaptador de destino. Cuando un adaptador recibe una trama Ethernet cuya dirección de destino coincide con **la suya o la dirección MAC de difusión**, pasa el contenido del campo de datos de la trama a la capa de red, en caso contrario, lo descarta.

- **Dirección de origen:** Este campo contiene la dirección MAC del adaptador que transmite la trama hacia la LAN. 

- **Campo de tipo:** Protocolo de Red. Los hosts pueden utilizar otros protocolos de la capa de red, además de IP. Es similar al campo de tipo de IP y el puerto en la capa de transporte.

- **Comprobación de redundancia cíclica (CRC):**  su propósito es permitir que el adaptador receptor detecte errores de bit de la trama. Si hay error, se descarta el frame.

- **Preámbulo:**  8 bytes. Cada uno de los siete primeros bytes tiene el valor 10101010 y el último byte tiene el valor 10101011. Los siete primeros bytes sirven para “despertar” a los adaptadores de recepción y sincronizar sus relojes con el reloj del emisor. Los últimos 2 bits del octavo byte del preámbulo (los dos primeros 1s consecutivos) alertan al adaptador de que va a llegar “información importante”.

Ethernet utiliza la transmisión en banda base; es decir, el adaptador envía una señal digital directamente al canal de difusión. También utilizan la codificación Manchester, cada bit contiene una transición; un 1 indica una transición del nivel alto al nivel bajo, mientras que un 0 indica una transición del nivel bajo al nivel alto. Al incluir una transición a mitad de cada bit, el host receptor puede sincronizar su reloj con el del host emisor.

### Servicio sin conexión y no confiable

No se establece ninguna conexión entre adaptadores. Cuando una trama llega al adaptador destino, se hace una comprobación CRC, pero no se envía ni un mensaje de reconocimiento positivo cuando pasa la comprobación, ni uno negativo cuando no la pasa.
Esta responsabilidad es de protocolos de capas superiores.

### Unslotted CSMA/CD: protocolo de acceso múltiple de Ethernet

#### Algoritmo: 
1. La NIC (Network Interface Card) recibe un datagrama de la capa de red y crea un frame. 
2. Si la NIC siente un canal ocioso, comienza la transmisión. Si la NIC siente un canal ocupado, espera hasta que el canal quede ocioso y luego transmite. 
3. Si la NIC transmite el frame entero sin detectar otra transmisión, entonces la NIC completó su trabajo para ese frame. 
4. Si la NIC detecta otra transmisión mientras está transmitiendo, aborta y envía una señal de atasco. 
5. Luego de abortar, la NIC entra a **Exponential Backoff**: luego de la n-ésima colisión, la NIC elige $K$ de forma aleatoria en $\{0,1,2, … , 2^n - 1\}$. Luego la NIC espera $512 * K$ $bit$ $times$ (K veces el tiempo necesario para transmitir 512 bits) y regresa al paso 2. Observar que luego de 10 colisiones $n$ no sigue creciendo.

**Señal de atasco:** asegura que todos los otros transmisores están al tanto de la colisión. Son 48 bits.

**Bit time:** $0.1 ms$ para Ethernet de $10Mbps$; para $K=1023$, la espera de tiempo es de alrededor de $50ms$.

**Exponential Backoff:** 
- La idea es adaptar los intentos de retransmisión a la carga actual estimada.
	- Una carga pesada implica que la espera aleatoria será más larga.
- Primera colisión:
	- Elige $K$ entre $\{0,1\}$, por lo que el retraso es $K*512$ $bit$ $transmission$ $times$.
- Luego de la segunda colisión:
	- Elige $K$ entre $\{0,1,2,3\}$.
- Luego de 10 colisiones:
	- Elige $K$ entre $\{0,1,2, … ,1023\}$.

```ad-note
title: Eficiencia

![[Pasted image 20221116141154.png]]
```


<div style="page-break-after: always;"></div>

## 6.5 Dominios de colisión y de broadcast 

### Dominio de Colisión

Se conoce como dominio de colisión al espacio físico con un ancho de banda compartido por un conjunto de dispositivos. En el caso que dos de esos dispositivos quieran transmitir al mismo tiempo, existe la posibilidad de que sus mensajes colisionen el espacio compartido y, o bien acaben convertidos en una amalgama de bits o bien no se pueda asegurar que al receptor le ha llegado el mensaje, de ahí el término colisión. Para resolverlo, Ethernet implementa CSMA/CD (Carrier dense multiple access with collision detection). 

La buena práctica en redes Ethernet consiste en mantener los dominios de colisión pequeños, es decir, con pocos dispositivos. Si lo piensas tiene todo el sentido del mundo; cuantos menos nodos compartan un espacio físico menor será la probabilidad de que transmitan a la vez y surja una colisión. 

Cuantas más colisiones, peor rendimiento de la red. Este se expresa tal que así: 
$$Rendimiento = (1-(\frac{Colisiones}{Paquetes Totales}))*100$$

### Dominio de Broadcast

El dominio de broadcast es la división lógica de la red dentro de la cual los dispositivos envían mensajes de broadcast. Dos dispositivos dentro del dominio de difusión comparten puerta de enlace (gateway), dirección de subred y pueden transmitir a otro dispositivo dentro del dominio sin precisar encaminamiento; es decir, se encuentran en la misma LAN. 

Los dominios broadcast o de difusión están delimitados por routers.

#### ¿Cómo actúan los dispositivos de red dividiendo los dominios de colisión y difusión?

- Los **hubs** o concentradores extienden el dominio de colisión ya que reenvian todos los mensajes que reciben de un dispositivo a los otros dispositivos conectados. Todos los elementos conectados al mismo hub (aunque estén en diferentes puertos) tienen el mismo dominio de colisión y dominio de broadcast.
- Los **switches** o conmutadores segmentan los dominios de colisión, pero expanden el dominio de difusión. Es decir, el alcance de un mensaje broadcast no es limitado por un switch (No obstante, sí limitan su alcance en el caso de las VLAN).
- Los **routers** también segmentan los dominios de colisión, pero además también lo hacen con los de difusión (un mensaje broadcast es limitado por el router y no sale de la LAN en la que se encuentra).

```ad-info
title: Problemas con dominios muy grandes
En una red moderna, generalmente los dispositivos de red se conectan a switches, y por lo tanto el dominio de colisiones no coincide con el dominio de broadcast; de no ser así, la cantidad de hosts provocaría que las colisiones hicieran casi imposible de utilizar la red. 

</br>

De todas formas, con switches, todos los mensajes de broadcast igualmente se difunden en toda la subred y afectan a todos los equipos, demandando tiempo de CPU para analizar paquetes que mayoritariamente serán descartados porque son dirigidos hacia otro dispositivo. Esta carga, normalmente atendida por el sistema operativo y no por la tarjeta de red en PCs de escritorio, interrumpe constantemente el procesamiento, afecta la localidad de la ejecución y quita capacidad de procesamiento “productiva” a los hosts. 

</br>

Otro problema que presenta una red con tantos dispositivos está asociado a las tablas de ARP que deben mantener los hosts, así como los mapeos de direcciones MAC a puertos en los switches. Tablas tan “abultadas” representan overhead en las transmisiones. 

</br>

Otro aspecto importante puede asociarse a la seguridad, pues, cualquier error en la configuración de la red, puede tener impacto en todos los equipos (p.e. un equipo que se configure equívocamente con la dirección del router). Cada vez que haya que resolver un problema, la causa puede provenir de la totalidad de la red, y no de sectores.
```
<div style="page-break-after: always;"></div>

## 6.6 Hub y Switch 

### Hub o concentrador

**Dispositivo de la capa física** que actúa sobre los bits individuales en lugar de sobre las tramas. Cuando un bit, que representa un cero o un uno, llega procedente de una interfaz, el concentrador simplemente vuelve a crear el bit, incrementa su intensidad de energía y lo transmite a todas las demás interfaces.
Si un concentrador recibe tramas procedentes de dos interfaces distintas al mismo tiempo, se produce una colisión y los nodos que crean las tramas tendrán que retransmitirlas.

![[Pasted image 20221116143312.png|300]]

### Switch

Es un **dispositivo de capa de enlace**, más inteligente que un hub, que toma un rol activo, ya que: 
- Almacena y reenvía frames Ethernet. 
- Examina la dirección MAC del frame entrante. Selectivamente reenvía el frame a uno o más enlaces de salida cuando el frame debe ser reenviado en el segmento. Utiliza CSMA/CD. 

Son transparentes, ya que los hosts no se percatan de la presencia de switches y, además, son dispositivos **plug-and-play con self-learning**, por lo que no tienen por qué ser configurados. 
Los switch permiten múltiples transmisiones a la vez. Cada host tiene una conexión directa dedicada con el switch. 
En cada enlace entrante se utiliza el protocolo Ethernet, sin colisiones, full dúplex. Cada enlace es su propio dominio de colisión.

#### Reenvío y filtrado

El **filtrado** es la función del conmutador que determina si una trama debe ser reenviada a alguna interfaz o debe ser descartada.
El **reenvío** es la función del conmutador que determina las interfaces a las que un trama debe dirigirse y luego envía la trama a esas interfaces.

Para esto se utilizan tablas del conmutador **(Switch Table)**, que tiene entradas para algunos nodos de una red LAN. 
Contiene:
1. La dirección MAC de un nodo.
2. La interfaz del conmutador que lleva hacia el nodo.
3. El instante en el que la entrada para el nodo fue incluida en la tabla.

Posibilidades con la tabla:
- No existe ninguna entrada para la dirección MAC de destino, el conmutador difunde la trama a todas las interfaces menos por dónde se obtuvo tal trama.
- Existe una entrada para la MAC de destino pero procede de un segmento de la LAN que contiene al adaptador destino, por lo que se descarta la trama.
- Existe una entrada para la MAC de destino, tiene que ser reenviado al segmento de LAN donde esta el adaptador, el conmutador coloca la trama en la interfaz de salida asociada en la tabla.

![[Pasted image 20221116143801.png|300]]

#### Auto-aprendizaje

Los conmutadores tienen la propiedad de que su tabla se construye de forma automática, dinámica y autónoma, sin intervención de un administrador de redes ni de ningún protocolo de configuración.
1. Incialmente la tabla del conmutador está vacía
2. Para cada trama entrante recibida en una interfaz, el conmutador almacena en su  tabla (1) la dirección MAC especificada en el campo dirección de origen de la trama, (2) la interfaz de la que procede la trama y (3) la hora actual.
3. El conmutador borra una dirección de la tabla si no se recibe ninguna trama con esa dirección como dirección de origen transcurrido un cierto periodo de tiempo (tiempo de envejecimiento).

#### Propiedades de la conmutación de la capa de enlace

- **Eliminación de las colisiones:** Los conmutadores almacenan las tramas en buffer y nunca transmiten más de una trama a un segmento simultáneamente.
  
- **Enlaces heterogéneos:**  Dado que un conmutador aísla un enlace de otro, los distintos enlaces de una LAN pueden operar a velocidades diferentes y pueden utilizar diferentes medios físicos.

- **Administración:**  Además de proporcionar una seguridad mejorada, un conmutador también facilita las tareas de gestión de la red. Un conmutador puede detectar cuando un adaptador de red funciona mal enviando continuamente tramas y desconectar internamente el adaptador que está funcionando incorrectamente. Un corte en un cable sólo desconecta al nodo que está usando el cable cortado para conectarse al conmutador.<div style="page-break-after: always;"></div>

## 6.6.1 Switch vs Router 

### Switches:

#### Pros:
- Dispositivos plug-and-play
- Ofrecen tasas de filtrado y reenvío relativamente altas (trabajan hasta capa 2)

#### Contras:
- La topología activa de una red conmutada está restringida a un árbol de recubrimiento.
- Una red conmutada grande requerirá tablas ARP grandes en los nodos y generará una cantidad de procesamiento y tráfico ARP sustancial.
- No ofrecen ninguna protección frente a las tormentas de difusión.

### Routers

#### Pros:
- Normalmente los paquetes no seguirán ciclos a través de los routers incluso cuando la red tenga rutas redundantes. Los paquetes no están restringidos a un árbol de recubrimiento y pueden utilizar la mejor ruta entre el origen y el destino.
- Proporcionan protección mediante cortafuegos frente a las tormentas de difusión de la capa 2.

#### Contras:
- No son dispositivos plug-and-play.
- Los routers suelen tener un tiempo de procesamiento por paquete mayor que los switches (trabajan hasta capa 3).<div style="page-break-after: always;"></div>

## 6.7 VLAN, redes de área local virtuales 

Un conmutador compatible con redes VLAN permite definir **múltiples redes de área local virtuales sobre una única infraestructura de red** de área local física. Varias VLAN pueden coexistir en un único conmutador físico o en una única red física. Los hosts de una VLAN se comunican entre sí como si sólo ellos (y ningún otro host) estuvieran conectados al conmutador.

En una **VLAN basada en puertos**, el administrador de la red divide los puertos (interfaces) del conmutador en grupos. Cada grupo constituye una VLAN, con los puertos de cada VLAN formando un dominio de difusión.

Para enviar tráfico entre una VLAN y otra, los fabricantes de switches incorporan en un único dispositivo un conmutador VLAN y un router, con lo que no es necesario un router externo.

Si se tienen dos conmutadores separados físicamente pero compartiendo VLANs se utiliza la técnica **troncalización VLAN**, con la cual un puerto especial de cada conmutador se configura como un puerto troncal para interconectar los dos conmutadores VLAN. El puerto troncal pertenece a todas las VLAN y las tramas enviadas a cualquier VLAN son reenviadas a través del enlace troncal hacia el otro conmutador.

Para identificar a qué VLAN pertenece cada trama, se utiliza una etiqueta VLAN de cuatro bytes añadida a la cabecera que transporta la identidad de la VLAN a la que pertenece.

```ad-important
title: Ventajas clave

- **Aislación del tráfico:** los frames desde/hasta los puertos 1-8 pueden solamente alcanzar los puertos 1-8. También se puede definir una VLAN basada en direcciones MAC de los endpoints, en lugar del puerto del switch. 

- **Membresía dinámica:** los puertos pueden ser asignados dinámicamente a las VLANs.

- **Forwarding entre VLANs:** se hace mediante Routing, como si fueran switches separados.
```


### Enlaces TRUNK: 802.1Q

El protocolo 802.1Q involucra una redefinición del cabezal Ethernet, que introduce cuatro bytes adicionales luego de las direcciones MAC src y dst:

![[Pasted image 20221128193216.png]]

De los 32bits adicionales, se reservan 12 para identificar VLANs. 

A nivel de los switches se distinguen puertos a los que se pueden conectar dispositivos que manipulan los cabezales extendidos y son capaces de intercambiar tráfico que incluye TAGS de los puertos en los que se conectan equipos que desconocen del uso de tags. Estos puertos, los que reciben tráfico sin tags se conocen como UNTAGGED PORTS y realizan la tarea de etiquetar tráfico al ingreso y quitar el tag al momento de forwardear el paquete hacia el host. Los puertos por los que se transmiten tramas extendidas se conocen tomo TRUNK PORTS. Cabe mencionar que la distinción es administrativa, y no hay diferencias físicas en los puertos.<div style="page-break-after: always;"></div>

## 6.8 PPP, Protocolo punto a punto 

El protocolo punto a punto PPP es un protocolo de la capa de enlace que opera sobre un enlace punto a punto: un enlace que conecta directamente dos nodos situados cada uno de ellos en extremo del enlace.

### **Requisitos establecidos para el diseño de PPP:**

- **Entramado de paquetes:** El emisor de la capa de enlace del protocolo PPP tiene que poder tomar un paquete del nivel de red y encapsular dentro de la trama de la capa del enlace PPP de tal modo que el receptor sea capaz de identificar el inicio y el final tanto de la trama de la capa de enlace como del paquete de la capa de red contenido en ella.

- **Transparencia:** PPP no debe aplicar ninguna restricción a los datos que aparecen en el paquete de la capa de red. Por ejemplo, no puede prohibir el uso de ciertos patrones de bits en el paquete de la capa de red.
  
- **Múltiples protocolos de la capa de red:** Tiene que poder dar soporte a múltiples protocolos de la capa de red que se ejecuten sobre el mismo enlace físico de forma simultánea.
  
- **Múltiples tipos de enlaces:** Además de poder transportar múltiples protocolos de nivel superior, PPP también tiene que poder operar sobre una amplia variedad de tipos de enlaces, incluyendo enlaces serie o paralelo, enlaces síncronos o asíncronos, enlaces de baja velocidad o de alta velocidad, o enlaces electrónicos u ópticos.
  
- **Detección de errores:** Tiene que ser capaz de detectar errores de bit en las tramas recibidas.

- **Pervivencia de la conexión:** Tiene que ser capaz de detectar un fallo en el nivel de enlace y de señalar esa condición de error a la capa de red.
  
- **Negociación de direcciones de la capa de red:** Los endpoint pueden aprender/configurar la dirección de red de los otros.
  
- Simplicidad

### Trama PPP

![[Pasted image 20221116205024.png]]

#### Byte Stuffing 

![[Pasted image 20221116205057.png]]

### PPP Data Control Protocol

![[Pasted image 20221116205122.png]]<div style="page-break-after: always;"></div>

# 99. Otros 

- [[#99.1 Puertos bien conocidos]]
- [[#99.2 Tips problemas prácticos]]
- [[#99.3 Protocolos sobre protocolos]]

### Practicos
- [[#Practico 5]]
- [[#Practico 6]]
- [[#Practico 7]]<div style="page-break-after: always;"></div>

## 99.1 Puertos bien conocidos 

- HTTP –> 80
	- HTTPS –> 443

- DNS –> 53

- FTP –> 21 para control y 20 para datos

- SMTP –> 25 
	- seguro –> 465, 587
- POP3 –> 110 
	- sobre –> 995
- IMAP –> 143
	- sobre –> 993

- DHCP –> 68 cliente y 67 servidor

- BGP –> 179<div style="page-break-after: always;"></div>

## 99.2 Tips problemas prácticos 


### Implementación de NAT
- Siempre recalcular el checksum y setearlo al paquete como último paso antes de finalizar el procesamiento.
- La tabla debe mantener IP_priv, PORT_priv, IP_publ, PORT_publ, PROTOCOLO
	- PORT_x puede ser también el identificador ICMP
	- Los protocolos son TCP, UDP e ICMP.

### Implementación de Forwarding
- Chequear TTL y decrementarlo. Si TTL no es mayor a 1, se debe enviar el mensaje ICMP con TTL Expire.
- Longest Prefix Match a menos que digan lo contrario.
- Detectar multicast sabiendo que una dir. de multicast siempre comienza con 1110.

### Sockets
- Cerrarlos apenas pueda (especialmente UDP)
- Para el server TCP, poner un client.close() luego del while(true) aunque parezca que nunca se va a ejecutar.

### Simular una captura de paquetes en una interfaz:
- Si hay una conexión TCP, capturar el acuerdo en tres pasos inicial (SYN, SYN-ACK, ACK) y el cierre de conexión (FIN-ACK-FIN-ACK).
- Capturar ARP solo si no hay tablas cacheadas.
- Capturar DNS si los mensajes son hacia un hostname.
- Diferenciar HTTP GET de Response

### HTTP y la web
- Una url puede incluir el número de puerto a consultar luego del nombre de dominio. El formato sería: {nomb_dominio | ip}:{num_puerto?}/{path_objeto_consultado}
- Generalmente conviene implementar una op. 'obtener_objeto' y luego llamarla varias veces a lo largo del programa. Ojo si es HTTP/1.1.
- El get es del siguiente formato: 
	- `GET /index.html HTTP/1.1`
- Para separar los header del contenido útil buscar `"\r\n\r\n"` .
- Las respuestas del servidor tienen como primer linea algo del estilo: 
	- `HTTP/1.1 200 OK`.

### DHCP
- Cada vez que un host se une a la red, el servidor DHCP asigna una dirección arbitraria de su conjunto actual de direcciones disponibles; cada vez que un host abandona la red, su dirección es devuelta al conjunto.<div style="page-break-after: always;"></div>

## 99.3 Protocolos sobre protocolos 

- HTTP –> TCP
	- HTTPS –> HTTP sobre TLC o SSL sobre TCP

- DNS –> UDP

- FTP –> TCP

- SMTP –> TCP
- POP3 –> TCP
- IMAP –> TCP

- DHCP –> UDP

- BGP –> TCP<div style="page-break-after: always;"></div>

## Practico 5 


### Ej. 1
```ad-info
title: Letra


![[Pasted image 20221025172748.png]]
```
#### Parte *a*

| Direccion de destino | Interfaz de salida |
| -------------------- | ------------------ |
| H3                   | 3                  |

#### Parte *b*
No es posible con una tabla de reenvío basada en la dirección de destino (destination-based forwarding). Si se puede hacer con OpenFlow 1.0 y posteriores.

### Ej. 2
```ad-info
title: Letra

![[Pasted image 20221025172939.png]]
```

#### Parte *a*
No, no es posible porque deben turnarse para utilizar el bus compartido.

#### Parte *b*
No, para realizar el copiado del enlace de entrada al enlace de salida debe usarse el CPU y un bus compartido. Aunque el CPU pudiera ejecutar varios procesos en simultáneo, no se podría hacer que se muevan dos datos distintos por un mismo bus.

#### Parte *c*
No, no se puede porque el enlace de salida solo puede "encolar" un datagrama por vez. Se podría si los datagramas tienen enlaces de salida distintos.

### Ej. 3
```ad-info
title: Letra

![[Pasted image 20221025205030.png]]
```

- Velocidad de entrada: `s`
- Cant. puertos de entrada: `n`
- Llegan `n` paquetes de largo `L` en las `n` entradas simultáneamente
- Todos los paquetes se reenvían a puertos de salida distintos
- Velocidad del entramado: `n*s`

#### Parte *a*: memoria
Como la copia de un paquete se debe hacer primero enviándolo a la memoria principal y luego al puerto de salida, solo puede realizarse 1 transferencia por vez. Cada transferencia durará: `dur_transf := copia_a_memoria + copia_a_puerto_salida`
De esto se deduce que el paquete que debe esperar más (el último) deberá esperar `(n-1)*dur_transf`.

#### Parte *b*: bus
El bus no es compartido, por lo que no es posible enviar más de un paquete en un instante dado. Se deberá esperar `(n-1)*dur_transf`.

#### Parte *c*: malla
Como todos los paquetes van a distinto destino, ninguno deberá esperar por algún otro para ser enviado. El retardo máximo es 0.

### Ej. 4
```ad-info
title: Letra

![[Pasted image 20221026162711.png]]
```

#### Parte *a*
$t_0$ : como la foto
$t_1$ : 
	- Cola de entrada 1 se fue el X. 
	- De la cola 2 se fué el paquete Y. 
	- En la cola 3 se fue Z.
$t_2$ :
	- De la cola 2 se fué el paquete X. 
	- En la cola 3 se fue Y 

#### Parte *b*
No se me ocurrió si "una cola no vacía nunca está inactiva".

### Ej. 5
```ad-info
title: Letra

![[Pasted image 20221026163928.png]]
![[Pasted image 20221026163942.png]]
```

#### Parte *a*
###### Saco los prefijos:
0:  11100000 00
	11100000 00000000 00000000 00000000
	11100000 00111111 11111111 11111111
1:  11100000 01000000
	11100000 01000000 00000000 00000000
	11100000 01000000 11111111 11111111
2:  11100001 0 y 11100000 01
	11100000 01000001 00000000 00000000 
	11100001 01111111 11111111 11111111
3: otro caso
###### Sol:
| Direccion de destino | Interfaz de salida |
| -------------------- | ------------------ |
| 11100000 00  | 0                |
|     11100000 01000000      | 1                |
|     11100001 0          | 2                |
|      11100000 01         | 2                |
|    Otro caso         | 3                |


#### Parte *b*

1. 3
2. 2
3. 3

### Ej. 6
```ad-info
title: Letra

![[Pasted image 20221026172517.png]]
```

223.1.16.0/23 quiere decir que tenemos disponibles las direcciones:

11011111.00000001.00010000.00000000 
	a
11011111.00000001.00010001.11111111
Osea, 512 ips

S1: 
	60 interfaces + red + broadcast = 62 -> 6 bits y sobra
	/26
S2: 
	95 interfaces + red + broadcast = 97 -> 7 bits y sobra
	/25
S3:
	16 interfaces + red + broadcast = 18 -> 5 bits y sobra
	/27

![[Drawing 2022-10-26 17.49.49.excalidraw]]

### Ej. 7
```ad-info
title: Letra

![[Pasted image 20221026180012.png]]
```

![[Drawing 2022-10-26 18.15.54.excalidraw]]

### Ej. 8
```ad-info
title: Letra

![[Pasted image 20221026182630.png]]
```
Ignorando las direcciones de la figura:
#### Parte *a*
- A:
	250 + red + broadcast
	8 bits
	214.97.253.0/24
- B:
	120 + red + broadcast
	7 bits
	214.97.252.0/25
- C: 
	120 + red + broadcast
	7 bits
	214.97.252.128/25
- D: 
	2 + red + broadcast
	2 bits
	214.97.254.0/30
- E: 
	2 + red + broadcast
	2 bits
	214.97.254.4/30
- F: 
	2 + red + broadcast
	2 bits
	214.97.254.16/30
#### Parte *b*
...

### Ej. 9
```ad-info
title: Letra

![[Pasted image 20221026192656.png]]
```

2400 bytes ⇾  20 bytes cabecera IP + 2380 bytes de datos

Se particionan los datos en fragmentos de largo máximo 680 bytes.

Fragmento 1:
	id: 422
	largo: 700
	indicador de fin: 1 (quedan paquetes)
	desplazamiento dentro del datagrama original: 0
Fragmento 2:
	id: 422
	largo: 700
	indicador de fin: 
	desplazamiento dentro del datagrama original: 1 * 680
Fragmento 3:
	id: 422
	largo: 700
	indicador de fin: 1
	desplazamiento dentro del datagrama original: 2 * 680
Fragmento 4:
	id: 422
	largo: 360 
	indicador de fin: 0 (ultimo)
	desplazamiento dentro del datagrama original: 3 * 680

### Ej. 10
```ad-info
title: Letra

![[Pasted image 20221026193649.png]]
```

5 millones en paquetes de (1500-20): 3379 datagramas

### Ej. 11
```ad-info
title: Letra

![[Pasted image 20221026193910.png]]
```

#### Parte *a*
- Router: 192.168.1.1
- H1: 192.168.1.2
- H2: 192.168.1.3
- H3: 192.168.1.4

#### Parte *b*
| Lado WAN            | Lado LAN        |
| ------------------- | --------------- |
| 24.34.112.235:50011 | 192.168.1.2:501 |
| 24.34.112.235:50012 | 192.168.1.2:502 |
| 24.34.112.235:50021 | 192.168.1.3:501 |
| 24.34.112.235:50022 | 192.168.1.3:502 |
| 24.34.112.235:50031 | 192.168.1.4:501 |
| 24.34.112.235:50032 | 192.168.1.4:502 |

### Ej. 12
```ad-info
title: Letra

![[Pasted image 20221026194858.png]]
![[Pasted image 20221026194850.png]]
![[Pasted image 20221026194838.png]]
```

```ad-danger
title: Dominio de broadcast
Todas las IP alcanzables por el broadcast de la sub-red.
```
#### Parte *a*:
- Subred 1
- Subred 2
- 190.1.1.2/29

#### Parte *b* y *c*
- Subred 1
	30 hosts + router + red + broadcast = 33
	6 bits ⇾ /25
	192.168.1.0/25
	
	Dispositivos:
	- R1: 192.168.1.1
	- A1: 192.168.1.2
	- B1: 192.168.1.3

- Subred 2
	125 hosts + router + red + broadcast = 128 bits
	7 bits ⇾ /26
	10.1.2.0/26
	
	Dispositivos:
	- R1: 10.1.2.1
	- A2: 10.1.2.2
	- B2: 10.1.2.3

#### Parte *d*

| Dispositivo | Prefijo        | Interfaz de salida | Next_hop                    |
| ----------- | -------------- | ------------------ | --------------------------- |
| A1          | 192.168.1.0/25 | eth0               | DC (directamente conectado) |
| A1          | 0.0.0.0/0      | eth0               | 192.168.1.1                 |
|             |                |                    |                             |
|             |                |                    |                             |
| A2          | 10.1.2.0/26    | eth0               | DC (directamente conectado) |
| A2          | 0.0.0.0/0      | eth0               | 10.1.2.1                    |
|             |                |                    |                             |
|             |                |                    |                             |
| R1          | 10.1.2.0/26    | eth2               | DC                          |
| R1          | 192.168.1.0/25 | eth1               | DC                          |
| R1          | 190.1.1.0/29   | eth0               | DC                          |
| R1          | 0.0.0.0/0      | eth0               | 190.1.1.2                   |

#### Parte *e*
Esto se puede lograr con redes virtuales.

<div style="page-break-after: always;"></div>

## Practico 6 

### Ej. 1
```ad-abstract
title: Letra

![[Pasted image 20221031160828.png]]
```

| \#Paso | N'                  | w   | i   | (D(i), p(i)) |
| ------ | ------------------- | --- | --- | ------------ |
| 0      | x                   | x   | z   | 8, x         |
| 0      | x                   | x   | y   | 6, x         |
| 0      | x                   | x   | v   | 3, x         |
| 0      | x                   | x   | w   | 6, x         |
| 0      | x                   | x   | t   | $\infty$, -  |
| 0      | x                   | x   | u   | $\infty$, -  |
| 1      | x, v                | v   | y   | 6, x         |
| 1      | x, v                | v   | t   | 7, v         |
| 1      | x, v                | v   | u   | 6, v         |
| 1      | x, v                | v   | w   | 6, x         |

| **i**   | **D(i)** | **p(i)** |
| --- | ---- | ---- |
| x   | 0    | -    |
| z   | 8    | x    |
| y   | 6    | x    |
| v   | 3    | x    |
| w   | 6    | x    |
| t   | 7    | v    |
| u   | 6    | v    |

  
### Ej. 2
```ad-abstract
title: Letra

![[Pasted image 20221031160906.png]]
```


### Ej. 3
```ad-abstract
title: Letra

![[Pasted image 20221031160927.png]]
![[Pasted image 20221031160938.png]]
```
z:
| -   | z   | v   | w   | y   | x   |     | -    | z   | v   | w   | y   | x   |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| z   | 0   | 6   | inf | inf | 2   |     | z   | 0   | 5   | 7   | 5   | 2   |     |
| v   | ?   | ?   | ?   | ?   | ?   |     | v   | 6   | 0   | 1   | inf | 3   |     |
| w   | ?   | ?   | ?   | ?   | ?   |     | w   | ?   | ?   | ?   | ?   | ?   |     |
| y   | ?   | ?   | ?   | ?   | ?   |     | y   | ?   | ?   | ?   | ?   | ?   |     |
| x   | ?   | ?   | ?   | ?   | ?   |     | x   | 2   | 3   | inf | 3   | 0   |     |

v: 
| -   | z   | v   | w   | y   | x   |     | -   | z   | v   | w   | y   | x   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| z   | ?   | ?   | ?   | ?   | ?   |     | z   | 0   | 6   | inf | inf | 2   |
| v   | 6   | 0   | 1   | inf | 3   |     | v   | 5   | 0   | 1   | 3   | 3   |
| w   | ?   | ?   | ?   | ?   | ?   |     | w   | inf | 1   | 0   | 2   | inf |
| y   | ?   | ?   | ?   | ?   | ?   |     | y   | ?   | ?   | ?   | ?   | ?   |
| x   | ?   | ?   | ?   | ?   | ?   |     | x   | 2   | 3   | inf | 3   | 0   |

x: 
| -   | z   | v   | w   | y   | x   |     | -   | z   | v   | w   | y   | x   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| z   | ?   | ?   | ?   | ?   | ?   |     | z   | 0   | 6   | inf | inf | 2   |
| v   | ?   | ?   | ?   | ?   | ?   |     | v   | 6   | 0   | 1   | inf | 3   |
| w   | ?   | ?   | ?   | ?   | ?   |     | w   | ?   | ?   | ?   | ?   | ?   |
| y   | ?   | ?   | ?   | ?   | ?   |     | y   | inf | inf | 2   | 0   | 3   |
| x   | 2   | 3   | inf | 3   | 0   |     | x   | 2   | 3   | 4   | 3   | 0   |

y: 
| -   | z   | v   | w   | y   | x   |     | -   | z   | v   | w   | y   | x   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| z   | ?   | ?   | ?   | ?   | ?   |     | z   | ?   | ?   | ?   | ?   | ?   |
| v   | ?   | ?   | ?   | ?   | ?   |     | v   | ?   | ?   | ?   | ?   | ?   |
| w   | ?   | ?   | ?   | ?   | ?   |     | w   | inf | 1   | 0   | 2   | inf |
| y   | inf | inf | 2   | 0   | 3   |     | y   |  5   |  3   | 2    |  0   |  3   |
| x   | ?   | ?   | ?   | ?   | ?   |     | x   | 2   | 3   | inf | 3   | 0   |

w:
| -   | z   | v   | w   | y   | x   |     | -   | z   | v   | w   | y   | x   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| z   | ?   | ?   | ?   | ?   | ?   |     | z   | ?   | ?   | ?   | ?   | ?   |
| v   | ?   | ?   | ?   | ?   | ?   |     | v   | 6   | 0   | 1   | inf | 3   |
| w   | inf | 1   | 0   | 2   | inf |     | w   | 7   | 1   | 0   | 2   | 4   |
| y   | ?   | ?   | ?   | ?   | ?   |     | y   | inf | inf | 2   | 0   | 3   |
| z   | ?   | ?   | ?   | ?   | ?   |     | z   | ?   | ?   | ?   | ?   | ?   |


### Ej. 4
```ad-abstract
title: Letra

![[Pasted image 20221031160954.png]]
```

NO, this is because that decreasing link cost won’t cause a loop (caused by the next-hop relation of between two nodes of that link). Connecting two nodes with a link is equivalent to decreasing the link weight from infinite to the finite weight.

### Ej. 5
```ad-abstract
title: Letra

![[Pasted image 20221031183341.png]]
```

#### Parte a
eBGP, pues obitiene el dato de 4c (un router externo a AS3).

#### Parte b
iBGP, pues obtiene el dato de 3c (interno a AS3) y x no pertenece a AS3.

#### Parte c
eBGP, pues obitiene el dato de 3a (un router externo a AS1).

#### Parte d
iBGP, pues obtiene el dato de 1c (interno a AS1) y x no pertenece a AS3.
### Ej. 6
```ad-abstract
title: Letra

![[Pasted image 20221031185540.png]]
![[Pasted image 20221031185551.png]]
```

#### Parte a: 
Como el router de salida es $1c$, el camino más corto (menor costo) empieza por el enlace $1d$-$1a$, el cual toma la interfaz $I_1$.

#### Parte b:
Dos rutas:
- Ruta 1:
	- AS-PATH = \[AS2, AS4, x\]
	- NEXT-HOP = $1b$
- Ruta 2:
	- AS-PATH = \[AS3, AS4, x\]
	- NEXT-HOP = $1c$

Como el largo del AS-PATH es idéntico en ambas rutas, se desempata por el camino hasta el NEXT-HOP más corto. Este es $1b$. Por lo tanto, $I = I_2$.

#### Parte c:
Ahora el largo del AS-PATH de la ruta 1 aumenta a 3, por lo que la ruta elegida será la 2. La salida es por $I_1$.

### Ej. 7
```ad-abstract
title: Letra

![[Pasted image 20221031191317.png]]
```

![[Pasted image 20221031192053.png]]

### Ej. 8
```ad-abstract
title: Letra

![[Pasted image 20221031192201.png]]
```

A debería anunciar a B dos rutas:
	- A-W 
	- A-V.
 A debería anunciar a C una única ruta:
	 - A-V.

 C recibe dos AS-PATH: 
	 - B-A-W, 
	 - B-A-V, 
	 - A-V

### Ej. 9
```ad-abstract
title: Letra

![[Pasted image 20221031194040.png]]
![[Pasted image 20221031194103.png]]
```

#### Parte a:
NOTA: 122.0.0.0/7 agrupa las subredes A y B.

##### AS3_a
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 123.0.0.0/8   | eth0               |
| *             | eth1               |

##### AS2_a
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 200.128.0.0/9 | eth1               |
| *             | eth0               |

##### AS2_b
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 200.128.0.0/9 | eth0               |
| 200.64.0.0/10 | eth2               |
| *             | eth1               |

##### AS1_a
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 122.0.0.0/7   | eth0               |
| 200.128.0.0/9 | eth0               |
| 200.64.0.0/10 | eth0               |
| *             | eth1               |

##### AS1_b
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 200.128.0.0/9 | eth1               |
| 200.64.0.0/10 | eth1               |
| *             | eth0               |

##### AS1_c
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 122.0.0.0/8   | eth0               |
| 200.128.0.0/9 | eth2               |
| 200.64.0.0/10 | eth2               |
| 123.0.0.0/8   | eth3               |
| *             | eth1               |


#### Parte b:
##### Tablas de a:
| -   | a   | b   | c   |     | -   | a   | b   | c   |     | -   | a   | b   | c   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| a   | 0   | 7   | 5   |     | a   | 0   | 1   | 5   |     | a   | 0   | 1   | 3   |
| b   | ?   | ?   | ?   |     | b   | ?   | ?   | ?   |     | b   | 1   | 0   | 2   |
| c   | 5   | 2   | 0   |     | c   | 5   | 2   | 0   |     | c   | 5   | 2   | 0   |
##### Tablas de b:
| -   | a   | b   | c   |     | -   | a   | b   | c   |     | -   | a   | b   | c   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| a   | ?   | ?   | ?   |     | a   | ?   | ?   | ?   |     | a   | 0   | 1   | 5   |
| b   | 7   | 0   | 2   |     | b   | 1   | 0   | 2   |     | b   | 1   | 0   | 2   | 
| c   | 5   | 2   | 0   |     | c   | 5   | 2   | 0   |     | c   | 5   | 2   | 0   |
##### Tablas de c:
| -   | a   | b   | c   |     | -   | a   | b   | c   |     | -   | a   | b   | c   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| a   | 0   | 7   | 5   |     | a   | 0   | 7   | 5   |     | a   | 0   | 1   | 5   |
| b   | 7   | 0   | 2   |     | b   | 7   | 0   | 2   |     | b   | 1   | 0   | 2   |
| c   | 5   | 2   | 0   |     | c   | 5   | 2   | 0   |     | c   | 3   | 2   | 0   | 


### Ej. 10
```ad-abstract
title: Letra

![[Pasted image 20221031204620.png]]
![[Pasted image 20221031204631.png]]
```
#### Parte a:
![[Pasted image 20221031210008.png]]
#### Parte b:
##### R1:
![[Pasted image 20221031210038.png]]
##### R4:
![[Pasted image 20221031210109.png]]
![[Pasted image 20221031210122.png]]

#### Parte c:
![[Pasted image 20221031210207.png]]<div style="page-break-after: always;"></div>

## Practico 7 

### Ejercicio 1
```ad-question
title: Letra

![[Pasted image 20221116210000.png]]
```


`1110 1`
`0110 0`
`1001 0`
`1101 1`

`1100 0`

¿Por qué es de longitud mínima el chechsum? Una agrupación 4x4 nos da 9 bits de redundancia. 2x8 u 8x2 nos da 11, 1x16 da 18.

### Ejercicio 2
```ad-question
title: Letra

![[Pasted image 20221116210046.png]]
```
Ni a palanca hago división binaria a mano

#### Parte a)
If we divide 10011 into 1010101010 0000, we get 1011011100, with a remainder of R=0100. Note that, G=10011 is CRC-4-ITU standard.

#### Parte b)
we get 1000110000, with a remainder of R=0000.

#### Parte c)
we get 0101010101, with a remainder of R=1111.

#### Parte d)
we get 1011010111, with a remainder of R=1001.

### Ejercicio 3
```ad-question
title: Letra

![[Pasted image 20221116210101.png]]
```

#### Parte a)
Tasa media de transferencia = probabilidad de transmitir en un slot dado
$$ p_{trans}^a = p_{a}\times (1-p_{b})$$
La eficiencia es el porcentaje del ancho de banda utilizado sin colisiones.
Asumiendo que ambos tengan algo siempre para transmitir, la eficiencia se calculará como la probabilidad de que alguno de los dos transmita exitosamente

$$ ef = p_{a}\times (1-p_{b}) + p_{b}\times (1-p_{a})$$
#### Parte b)
Vamos a calcular directamente cuál debe ser la relación entre $p_a$ y $p_b$ para que $p_{trans}^a$ = $2 \times p_{trans}^b$
$$ p_{a}\times (1-p_{b}) = 2 \times p_{b} \times (1-p_{a})$$
Con alguna cuenta:
$$ p_a= 2 - (p_a / p_b) $$

#### Parte c)

$$ p_{trans}^a = 2p\times (1-p)^{N-1}$$
$$ p_{trans}^{otros} = p\times (1-p)^{N-2}\times (1-2p)$$

### Ejercicio 4
```ad-question
title: Letra

![[Pasted image 20221116210133.png]]
```

La tasa máxima se obtendrá cuando todos tengan al menos Q bits para transmitir cada vez que se les otorga un turno.

A lo largo del tiempo pasarán las siguientes cosas en un ciclo:
1. El nodo de sondeo averiguará quién quiere transmitir
2. El nodo de sondeo le indicará a cierto nodo (de los que solicitaron) que puede transmitir
3. El nodo transmitirá sus Q bits
4. Volver al inicio
Los pasos 1 y 2 tardan $d$ en conjunto y el paso 3 tarda $Q/R$.
Repitiendo esto para N nodos, tenemos un largo de ronda de $N \times (\frac{Q}{R}+ d)$.
Dado que la cantidad de bits "útiles" de una ronda es $Q \times N$, la tasa de transferencia máxima será:
$$\frac{NQ}{N \times \frac{Q}{R}+ d} = \frac{R}{1+\frac{d \times R}{Q}}$$

### Ejercicio 5
```ad-question
title: Letra

![[Pasted image 20221116210158.png]]
```

#### Parte a y b)
![[Pasted image 20221116221605.png]]

#### Parte c)
1. E determina con su tabla de forwarding que el next-hop es 192.168.3.002. Con su tabla de ARP, determina que debe empaquetar el datagrama ip en un frame ethernes con destino MAC 88...88.
3. Router 2 inspecciona el paquete, determina con su tabla de ruteo y de ARP que debe enviar hacia la LAN2 con ip destino 192.168.2.002 y MAC destino 33...33 y MAC origen 55...55
4. Se repite casi lo mismo en Router 1
5. El paquete llega a B y su capa de enlace lo entrega a la capa de red pues el MAC destino es él mismo.

#### Parte d)
1. E determina con su tabla de forwarding que el next-hop es 192.168.3.002.
2. E no tiene una entrada en su tabla de ARP para la ip mencionada, debe consultarla vía una ARP Query. El query se emapqueta en un mensaje broadcast de capa de enlace (MAC FF...FF) y se envía. El router 2 recibe la query y la responde con un ARP response packet destinado a MAC 77...77.


### Ejercicio 6
```ad-question
title: Letra

![[Pasted image 20221116210223.png]]
```

#### Parte a)
No. E está directamente conectado a F y por lo tanto no precisa del router 1. Se armará un paquete con los datos de cada interfaz conectada al dominio de colisión que comparten E y F.

#### Parte b)
No, E no hace consulta ARP pues B no está en su misma LAN. Las direcciones de origen son las mismas que en la parte anterior. Ahora la IP de destino es la IP de B y la MAC de destino es la del router 1.

#### Parte c)
Como el ARP Query es un mensaje de difusión de capa 2, difunde la trama en todas sus interfaces, menos la de entrada. Además usará la MAC de origen para identificar y recordar que en la interfaz de entrada se encuentra el HOST con la MAC de A.
R1 recibirá la trama con el ARP Query, lo procesará pero no lo difundirá por la subred 3. 
B no debe hacer nada excepto leer la dirección MAC de origen para saber la dirección MAC del solicitante ARP.
Cuando S1 reciba la trama de B, guardará en su tabla de forwarding que dicho host se encuentra en la interfaz de entrada. Como la dirección MAC de destino se accede por la misma interfaz por la que llegó la trama (esto lo sabe por haber guardado la MAC de A previamente), descartará la misma.

### Ejercicio 7
```ad-question
title: Letra

![[Pasted image 20221116210236.png]]
```

#### Parte a)
No. E can check the subnet prefix of Host F’s IP address, and then learn that F is on the same LAN segment.
Thus, E will not send the packet to S2. 
Ethernet frame from E to F: 
	Source IP = E’s IP address 
	Destination IP = F’s IP address 
	Source MAC = E’s MAC address 
	Destination MAC = F’s MAC address

#### Parte b)
Yes, because E would like to find B’s MAC address. In this case, E will send an ARP query packet with destination MAC address being the broadcast address. 
This query packet will be re-broadcast by switch 1, and eventually received by Host B. Ethernet frame from E to S2: 
	Source IP = E’s IP address
	Destination IP = B’s IP address 
	Source MAC = E’s MAC address 
	Destination MAC = broadcast MAC address: FF-FF-FF-FF-FF-FF.

#### Parte c)
Switch S1 will broadcast the Ethernet frame via both its interfaces as the received ARP frame’s destination address is a broadcast address. And it learns that A resides on Subnet 1 which is connected to S1 at the interface connecting to Subnet 1. And, S1 will update its forwarding table to include an entry for Host A. 
Yes, router S2 also receives this ARP request message, and S2 will broadcast this query packet to all its interfaces. 
B won’t send ARP query message asking for A’s MAC address, as this address can be obtained from A’s query message. 
Once switch S1 receives B’s response message, it will add an entry for host B in its forwarding table, and then drop the received frame as destination host A is on the same interface as host B (i.e., A and B are on the same LAN segment).

### Ejercicio 8
```ad-question
title: Letra

![[Pasted image 20221116210250.png]]
```

t = 0
	A transmits. 
t = 576
	A would finish transmitting.
t=324
	In the worst case, B begins transmitting, which is the time right before the first bit of A’s frame arrives at B. 
t=324+325=649
	B 's first bit arrives at A . Because 649 > 576, **A finishes transmitting before it detects that B has transmitted**. So A incorrectly **thinks that its frame was successfully transmitted** without a collision.

### Ejercicio 9
```ad-question
title: Letra

![[Pasted image 20221116210304.png]]
```

t = 0
	A and B begin transmission.
t = 245
	A and B detect collision.
t = 293
	A and B finish transmitting jam signal.
t = 293+245 = 538  
	B 's last bit arrives at A.
	A detects an idle channel.
t = 538+96=634
	A starts transmitting.
t = 293+512 = 805 
	B returns to Step2.
	B must sense idle channel for 96 bit times before it transmits.
t = 634+245=879
	A’s transmission reaches B.

Because A's retransmission reaches B before B's scheduled retransmission time (805+96), B refrains from transmitting while A retransmits. Thus A and B do not collide. Thus the factor 512 appearing in the exponential backoff algorithm is sufficiently large

### Ejercicio 10
```ad-question
title: Letra

![[Pasted image 20221116210318.png]]
```

![[Pasted image 20221116233912.png]]

#### Parte a) from A to left router
Source MAC address: 00-00-00-00-00-00 
Destination MAC address: 22-22-22-22-22-22
Source IP: 111.111.111.001
Destination IP: 133.333.333.003 
#### Parte b) from the left router to the right router
Source MAC address: 33-33-33-33-33-33 
Destination MAC address: 55-55-55-55-55-55 
Source IP: 111.111.111.001 
Destination IP: 133.333.333.003 
#### Parte c) from the right router to F
Source MAC address: 88-88-88-88-88-88 
Destination MAC address: 99-99-99-99-99-99
Source IP: 111.111.111.001 
Destination IP: 133.333.333.003

### Ejercicio 11
```ad-question
title: Letra

![[Pasted image 20221116210331.png]]
```

##### From A to switch: 
Source MAC address: 00-00-00-00-00-00
Destination MAC address: 55-55-55-55-55-55 
Source IP: 111.111.111.001 
Destination IP: 133.333.333.003 

##### From switch to right router: 
Source MAC address: 00-00-00-00-00-00 
Destination MAC address: 55-55-55-55-55-55 
Source IP: 111.111.111.001 
Destination IP: 133.333.333.003

##### From right router to F: 
Source MAC address: 88-88-88-88-88-88 
Destination MAC address: 99-99-99-99-99-99
Source IP: 111.111.111.001 
Destination IP: 133.333.333.003

### Ejercicio 12
```ad-question
title: Letra

![[Pasted image 20221116210352.png]]
![[Pasted image 20221116210350.png]]
```

![[Pasted image 20221116234307.png]]
### Ejercicio 13
```ad-question
title: Letra

![[Pasted image 20221116210403.png]]
```

The IP addresses for those three computers (from left to right) in EE department are: 111.111.1.1, 111.111.1.2, 111.111.1.3. The subnet mask is 111.111.1/24. 

The IP addresses for those three computers (from left to right) in CS department are: 111.111.2.1, 111.111.2.2, 111.111.2.3. The subnet mask is 111.111.2/24. 

The router’s interface card that connects to port 1 can be configured to contain two subinterface IP addresses: 111.111.1.0 and 111.111.2.0. The first one is for the subnet of EE department, and the second one is for the subnet of CS department. Each IP address is associated with a VLAN ID. Suppose 111.111.1.0 is associated with VLAN 11, and 111.111.2.0 is associated with VLAN 12. This means that each frame that comes from subnet 111.111.1/24 will be added an 802.1q tag with VLAN ID 11, and each frame that comes from 111.111.2/24 will be added an 802.1q tag with VLAN ID 12. 

Suppose that host A in EE department with IP address 111.111.1.1 would like to send an IP datagram to host B (111.111.2.1) in CS department. Host A first encapsulates the IP datagram (destined to 111.111.2.1) into a frame with a destination MAC address equal to the MAC address of the router’s interface card that connects to port 1 of the switch. Once the router receives the frame, then it passes it up to IP layer, which decides that the IP datagram should be forwarded to subnet 111.111.2/24 via sub-interface 111.111.2.0. Then the router encapsulates the IP datagram into a frame and sends it to port 1. Note that this frame has an 802.1q tag VLAN ID 12. Once the switch receives the frame port 1, it knows that this frame is destined to VLAN with ID 12, so the switch will send the frame to Host B which is in CS department. Once Host B receives this frame, it will remove the 802.1q tag.