La capa de red es la encargada de transportar segmentos desde el host emisor hasta el host receptor. Del lado del emisor, encapsula los segmentos en datagramas. En el lado de receptor, entrega los paquetes a la capa de transporte. 
Cada router examina los campos del encabezado de cada datagrama IP que pasa por él

```ad-info
title: Datagrama
Unidades de datos intercambiadas por un protocolo de la capa de red.
```

## Reenvío y enrutamiento

La función de la capa de red es simple: transporta paquetes desde un host emisor a un host receptor.
- **Reenvío** (forwarding): Cuando un paquete llega al enlace de entrada de un router, este tiene que pasar el paquete al enlace de salida apropiado.
- **Enrutamiento** (routing): La capa de red tiene que determinar la ruta o camino que deben seguir los paquetes a medida que fluyen de un emisor a un receptor. Los algoritmos que calculan estas rutas se conocen como algoritmos de enrutamiento.

De esta forma, Forwarding hace referencia a la acción de transferir un paquete desde la interfaz de enlace de entrada, hacia la interfaz de enlace de salida correspondiente. Mientras que Routing hace referencia al proceso que determina el camino end-to-end que los paquetes toman para llegar desde la fuente hacia el destino.

Todo router tiene una **tabla de reenvío**. Un router reenvía un paquete examinando el valor de un campo de la cabecera del paquete entrante y utilizando después ese valor para indexarlo dentro de la tabla de reenvío del router.

El algoritmo de enrutamiento determina los valores que se introducen en las tablas de reenvío de los routers. El algoritmo de enrutamiento puede estar **centralizado** (se ejecuta en un sitio central y descarga la información de enrutamiento en cada router) o **descentralizado** (con un componente del algoritmo ejecutándose en cada router).

#### Configuración de la conexión

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

**- Servicio CBR de las redes ATM:** 
	El objetivo es conceptualmente simple, proporcionar un flujo de paquetes mediante un conductor virtual cuyas propiedades son las mismas que si existiera un enlace de transmisión de ancho de banda fijo dedicado entre los hosts emisor y receptor.
**- Servicio ABR de las redes ATM:** 
	Con este servicio las celdas no se pueden reordenar, pero si perder y está garantizada la velocidad mínima de transmisión de celda. Si la red tiene los suficientes recursos libres en un instante determinado, un emisor también puede ser capaz de enviar con éxito celdas a una velocidad mayor que la mínima.

## Redes de circuitos virtuales y de datagramas

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
collapse: closed
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
collapse: closed
![[Pasted image 20221117124621.png|400]]
```

#### Uso de prefijos

![[Pasted image 20221117124651.png]]

Claramente, para este ejemplo no es necesario tener 4 mil millones de entradas en la tabla de Forwarding del router. Podríamos por ejemplo tener la siguiente tabla de Forwarding:

![[Pasted image 20221117124700.png]]
Con este estilo de tabla de Forwarding, el router empareja un prefijo de las direcciones de destino de los paquetes con las entradas en la tabla; si hay un match, el router envía el paquete al link asociado con el match.

Por ejemplo, supongamos que la dirección de destino del paquete es 11001000 00010111 00010110 10100001; dado que el prefijo de 21 bits empareja la primera entrada de la tabla, el router envía el paquete a la interfaz de enlace 0. En caso de no haber match, envía por la interfaz 3.

En caso de que haya más de un match, se utiliza la regla del prefijo más largo emparejado, que encuentra la entrada más larga que empareja en la tabla y envía el paquete por la interfaz asociada con el prefijo más largo emparejado.

## El interior de un Router

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

Otra técnica: memorias direccionables por contenido (**CAM, Content Addressable Memory**), las cuales permiten acceder a la memoria mediante una dirección IP de 32 bits, devolviendo el contenido de la correspondiente entrada de la tabla de reenvío en un tiempo prácticamente constante.

Otra técnica: utilizar una caché para almacenar las entradas accedidas recientemente.
Una vez determinado el puerto de salida de un paquete, es reenviado al entramado de conmutación, pero puede ser bloqueada su entrada si está siendo usado por otros paquetes. Por lo que queda almacenado en la cola de entrada del puerto de entrada.

#### Entramado de Conmutación
Se encargan de transferir el paquete desde el buffer de entrada al correspondiente buffer de salida. La tasa de switching es la tasa a la cual los paquetes pueden ser transferidos desde las entradas hacia las salidas. A veces se mida como un múltiplo de la tasa lineal de entrada/salida. 
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

#### Colas
El buffering ocurre cuando la tasa de llegada por switch excede la velocidad de la línea de salida. Esto puede generar el encolado de paquetes (retraso) e incluso la pérdida debido a una sobrecarga del buffer de salida.

##### En puertos de salida:
El buffering ocurre cuando la tasa de llegada por switch excede la velocidad de la línea de salida. Esto puede generar el encolado de paquetes (retraso) e incluso la pérdida debido a una sobrecarga del buffer de salida.

###### ¿Cuánto buffer es necesario?
La regla de oro de RFC 3439 dice que el buffering promedio es igual al típico RTT (por ejemplo, 250msec) veces la capacidad del enlace C. Por ejemplo, si el enlace C = 10 Gbps, el buffer es de 2.5Gbits
Recomendaciones recientes con N flujos, el buffering equivale a $\frac{RTT \times C}{\sqrt{N}}$

##### En puertos de entrada:
Si la Switch Fabric es más lenta que los puertos de entrada combinados, entonces el encolado puede ocurrir en los puertos de entrada. Se pueden producir retrasos de cola y pérdidas debido a la sobrecarga de buffers.
**Head of The Line Blocking (HOL)**: los datagramas encolados al frente de la cola evitan que otros de la cola puedan ser enviados.
![[Pasted image 20221117132121.png|400]]

## Protocolo de Internet (IP)
Como vemos en la figura a continuación, la red tiene 3 componentes principales. En primer lugar, el protocolo IP. En segundo lugar, los protocolos de ruteo, que determinan el camino que debe seguir el paquete para llegar desde la fuente hacia el destino, completando las tablas de Forwarding. Y el componente final es la facilidad de reportar errores en los datagramas y responder con información de la capa de red, a través del protocolo ICMP.

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
- **Suma de comprobación de cabecera**: Normalmente, los routers descartan los paquetes que se detectan errores.
- **Direcciones de IP origen y destino**
- Opciones: permite ampliar la cabecera IP
- Datos o carga útil

```ad-tldr
title: En resumen
collapse: closed
![[Pasted image 20221117132530.png]]
```

### Fragmentación (y reensamblado)

La cantidad máxima de datos que una trama de la capa de enlace puede transportar se conoce como **unidad máxima de transmisión** (MTU). 
Cada uno de los enlaces existentes a lo largo de la ruta entre el emisor y el destino pueden utilizar diferentes protocolos de la capa de enlace y cada uno de estos protocolos puede utilizar una **MTU diferente**.

Por lo tanto es necesario fragmentar los datos del datagrama IP en dos o más datagramas IP más pequeños, encapsular cada uno de los datagramas IP más pequeños en una trama de la capa de enlace distinta y enviar dichas tramas a través del enlace de salida. Cada uno se conoce como fragmentos. Los fragmentos tiene que ser reensamblados antes de llegar a la capa de transporte, esto se hace en los sistemas terminales para no sobrecargar de trabajo a los routers.

![[Pasted image 20221117132749.png|300]]

El host destino necesita saber si se trata de datagramas enteros o fragmentos y como ensamblarlos. Para eso se usan los campos identificador, indicador y desplazamiento de fragmentación en la cabecera del datagrama IP.

Cuando un router necesita fragmentar un datagrama, cada datagrama resultante se marca con la dirección de origen, la dirección de destino y el número de identificación del datagrama original.

Como IP es un servicio no fiable, es posible que uno o más de los fragmentos nunca lleguen a su destino. Por esta razón, con el fin de que el host de destino esté absolutamente seguro de que ha recibido el último fragmento del datagrama original, **el último fragmento tiene un bit indicador puesto a 0**, mientras que los demás fragmentos tienen el bit indicador puesto a 1. Además, para que el host de destino determine si falta un fragmento (y también para que pueda reensamblar los fragmentos en el orden apropiado), se utiliza el campo desplazamiento para especificar en qué posición dentro del datagrama IP original encaja el fragmento.

En el destino, la carga útil del datagrama se pasa a la capa de transporte sólo después de que la capa IP haya reconstruido completamente el datagrama IP original. Si uno o más de los fragmentos no llegan al destino, el datagrama incompleto se descarta y no se pasa a la capa de transporte.

```ad-example
title: Ejemplo
collapse: closed
Por ejemplo, un datagrama de 4000 bytes, con un MTU de 1500 bytes:

![[Pasted image 20221117132819.png]]
```


### Direccionamiento IPv4

El límite entre el host y el enlace se denomina **interfaz.** El límite entre el router y cualquiera de sus enlaces también se conoce como **interfaz**. Por tanto, un router tiene varias interfaces, una para cada uno de los enlaces.
Las direcciones IPv4 tienen una longitud de 32 bits (4 bytes), por lo que existen un total de 2^32 direcciones IPv4 posibles. Cada una de las interfaces de un host o de un router de Internet **tiene que tener asociada una dirección IP** que es globalmente única.

```ad-hint
title: Recordatorio
_Para determinar las subredes, desconecte cada interfaz de su host o router,
creando islas de redes aisladas, con interfaces que acaban en los puntos
terminales de las redes aisladas. Cada una de estas redes aisladas se dice que
es una subred._

```

```ad-example
title: Ejemplo
collapse: closed
![[Pasted image 20221117133048.png]]
```

**Enrutamiento entre dominios sin clase** (CIDR, Classless Interdomain Routing): estrategia de asignación de direcciones en Internet.
Los x bits más significativos de una dirección en el formato a.b.c.d/x constituyen la parte de red de la dirección IP y a menudo se hace referencia a ellos como el **prefijo** (o prefijo de red) de la dirección. Los $32-x$ bits restantes de una dirección pueden emplearse para diferenciar los dispositivos internos de la organización, teniendo todos ellos el mismo prefijo de red.

```ad-warning
title: IP de broadcast o difusión
Cuando un host envía un datagrama cuya dirección de destino es 255.255.255.255, el mensaje se entrega a todos los hosts existentes en la misma subred.
```

### Obtener un bloque de direcciones

Para obtener un bloque de direcciones IP que pueda ser utilizado dentro de la subred de una organización, un administrador de red tiene que contactar en primer lugar con su ISP, el cual le proporcionará direcciones extraídas de un bloque de direcciones mayor que ya habrá sido asignado al ISP. 
Las direcciones IP son gestionadas por la entidad **ICANN** (Internet Corporation for Assigned Names and Numbers, Corporación de Internet para los números y nombres asignados).

```ad-example
title: Ejemplo
collapse: closed
Si al ISP se le otorga el bloque 200.23.16.0/20, puede dividir ese bloque en 8 bloques contiguos de direcciones, y dar uno de estos a hasta 8 organizaciones.

![[Pasted image 20221117133412.png]]
```


### Cómo obtener una dirección de host: 
Un host puede obtener su dirección IP de dos maneras: 
- Hard Codeada por el administrador del sistema en un archivo.
- Mediante DHCP.

#### Protocolo de configuración dinámica de host **DHCP**

Las direcciones de host también se pueden configurar manualmente, pero frecuentemente ahora esta tarea se lleva cabo utilizando el Protocolo de configuración dinámica de host ( DHCP , Dynamic Host Configuration Protocol) .DHCP permite a un host obtener (permite que se le asigne) automáticamente una dirección IP.
Un administrador de red puede configurar DHCP de modo que un host dado reciba la misma dirección IP cada vez que se conecte a la red, o un host puede ser asignado a una dirección IP temporal que será diferente cada vez que el host se conecte a la red.
También puede brindar información adicional como: su máscara de subred, el gateway (router del primer salto) y la dirección del servidor DNS local.
Protocolo plug-and-play por su capacidad de automatizar el proceso de conexión.
Cada vez que un host se une a la red, el servidor DHCP asigna una dirección arbitraria de su conjunto actual de direcciones disponibles; cada vez que un host abandona la red, su dirección es devuelta al conjunto.
DHCP es un protocolo cliente-servidor . Cada subred necesita un servidor DHCP o puede tener un agente de retransmisión DHCP (un router) que conozca la dirección de un servidor DHCP.

![[Pasted image 20221117235529.png]]

4 pasos:
- **Descubrimiento del servidor DHCP:** La primera tarea de un host recién llegado es encontrar un servidor DHCP con el que interactuar. Esto se hace mediante un mensaje de descubrimiento DHCP que envía un cliente dentro de un paquete UDP al puerto 67. El paquete UDP se encapsula en un datagrama IP y el cliente DHCP crea un datagrama IP de difusión 255.255.255.255 y crea una dirección IP de origen de “ese host” igual a 0.0.0.0. El cliente DHCP pasa el datagrama IP a la capa de enlace, la cual difunde esa trama a todos los nodos conectados a la subred.
- **Ofertas del servidor DHCP:** Un servidor DHCP que recibe el mensaje de descubrimiento responde al cliente con un mensaje de oferta DHCP, que difunde a todos los nodos de la subred utilizando de nuevo una dirección IP de difusión. Puesto que en la subred pueden existir varios servidores DHCP, el cliente puede encontrarse en la situación de poder elegir entre varias ofertas. Cada mensaje de oferta de servidor contiene el ID de transacción del mensaje de descubrimiento recibido, la dirección IP propuesta para el cliente, la máscara de red y el tiempo de arrendamiento de la dirección IP, que es el tiempo que la dirección IP es válida.
- **Solicitud DHCP:** El cliente recién llegado seleccionará de entre las ofertas de servidor y responderá a la oferta seleccionada con un mensaje de solicitud DHCP, devolviendo los parámetros de configuración.
- **ACK DHCP:** El servidor contesta al mensaje de solicitud DHCP con un mensaje ACK DHCP, que confirma los parámetros solicitados.
Dado que un cliente puede desear utilizar su dirección durante más tiempo del arrendado, DHCP también proporciona un mecanismo que permite a un cliente renovar su tiempo de arrendamiento de una dirección IP.

```ad-example
title: Ejemplo
collapse: closed
![[Pasted image 20221117235605.png]]
```

### Traducción de direcciones de red: NAT

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
collapse: closed
![[Pasted image 20221118000637.png]]
```

El número de puerto es un número de 16 bits, lo que permite hasta 60.000 conexiones simultáneas a una misma dirección LAN. 

Sin embargo, el protocolo NAT es controversial, debido a que, en primer lugar, los routers deberían procesar únicamente hasta capa 3. Además, viola el argumento end-to-end.

#### Problemas en NAT
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

### ICMP: Protocolo de mensajes de control de Internet

Defindo en RFC 792, es un protocolo utilizado por hosts y routers para comunicar información a nivel de red. Permite reportar errores, por ejemplo, host unreachable, network unreachable, port unreachable o protocol unreachable. O mensajes como el echo request y el echo reply (utilizados por ping).

ICMP a menudo se considera parte de IP pero, en sentido arquitectónico, se encuentra justo encima de IP, ya que los mensajes ICMP son transportados dentro de los datagramas IP.

Los mensajes ICMP tienen un campo de tipo y un campo de código, y contienen la cabecera y los 8 primeros bytes del datagrama IP que ha dado lugar a la generación del mensaje ICMP en primer lugar (pudiendo identificar el datagrama que produjo el error).

```ad-example
title: Tabla de tipos de mensajes
collapse: closed
![[Pasted image 20221118001154.png]]
```


### IPv6

Para responder a la necesidad de un espacio de direcciones IP más grande, se desarrolló un nuevo protocolo IP, el protocolo IPv6. Una motivación adicional fue hacer un formato del cabezal que ayude a acelerar el procesamiento/forwarding del paquete.
Formato del datagrama IPv6: cabezal de largo fijo de 40 bytes y no se permite fragmentación.
- **Capacidades ampliadas de direccionamiento:** IPv6 aumenta el tamaño de la dirección IP de 32 a 128 bits.
- **Una cabecera de 40 bytes simplificada:** Permite un procesamiento más rápido del datagrama.
- Prioridad y etiquetado del flujo: Permite etiquetar los paquetes que pertenecen a determinados flujos para que los que el emisor solicita un tratamiento especial, como un servicio en tiempo real o una calidad servicio no predeterminados.

#### Encabezado IPv6
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
- Los valores son inter operables con los valores utilizados por el protocolo IPv4 (i.e. TCP = 6, UDP = 17 , etc.)
- Extension headers:
	- Hop-by-hop header (NH=0)
	- Routing header (NH=43)
	- Fragment header (NH=44)
	- Authentication header (NH=51)
	- Encapsulated security payload (NH=50
	- Destination option (NH=60)

```ad-example
title: Ejemplo
collapse: closed
![[Pasted image 20221118001800.png]]
```

#### Tipos de direcciones IPv6
- 128 bits.
- Tres tipos diferentes (además de rangos reservados):
	- **Unicast** Identifican exactamente una interfaz.
	- **Multicast** Identifican a un grupo de interfaces. Un paquete enviado a una dirección de multicast es entregado a todos los miembros del grupo.
	- **Anycast** Un paquete enviado a una dirección anycast es entregado al miembro “más próximo” del grupo.

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



