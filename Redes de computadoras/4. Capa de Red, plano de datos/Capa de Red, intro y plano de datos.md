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

## [[El interior de un Router]]

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

```ad-question
title: ¿Cómo sabe la capa de red (IP) de ese host que debería pasar el segmento a TCP en lugar de a UDP o cualquier otro protocolo? 
collapse: closed
La capa de red le entrega el payload del datagrama a el protocolo indicado por el campo de ocho bits “protocol” del encabezado. Los valores de ese campo están estandarizados y cada uno de ellos indica un protocolo de capa superior determinado. Si en payload del datagrama es un segmento TCP, el campo protocol tiene el valor 6.
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

### [[Traduccion de direcciones de red, NAT]]

### ICMP: Protocolo de mensajes de control de Internet

Defindo en RFC 792, es un protocolo utilizado por hosts y routers para comunicar información a nivel de red. Permite reportar errores, por ejemplo, host unreachable, network unreachable, port unreachable o protocol unreachable. O mensajes como el echo request y el echo reply (utilizados por ping).

ICMP a menudo se considera parte de IP pero, en sentido arquitectónico, se encuentra justo encima de IP, ya que los mensajes ICMP son transportados dentro de los datagramas IP.

Los mensajes ICMP tienen un campo de tipo y un campo de código, y contienen la cabecera y los 8 primeros bytes del datagrama IP que ha dado lugar a la generación del mensaje ICMP en primer lugar (pudiendo identificar el datagrama que produjo el error).

```ad-example
title: Tabla de tipos de mensajes
collapse: closed
![[Pasted image 20221118001154.png]]
```


# [[IPv6]]





