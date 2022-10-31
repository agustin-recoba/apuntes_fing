## Reenvío y enrutamiento

La función de la capa de red es simple: transporta paquetes desde un host emisor a un host receptor.
- **Reenvío** (forwarding) : Cuando un paquete llega al enlace de entrada de un router, éste tiene que pasar el paquete al enlace de salida apropiado.
- **Enrutamiento** (routing): La capa de red tiene que determinar la ruta o camino que deben seguir los paquetes a medida que fluyen de un emisor a un receptor. Los algoritmos que calculan estas rutas se conocen como algoritmos de enrutamiento.

Todo router tiene una **tabla de reenvío**. Un router reenvía un paquete examinando el valor de un campo de la cabecera del paquete entrante y utilizando después ese valor para indexarlo dentro de la tabla de reenvío del router.
El algoritmo de enrutamiento determina los valores que se introducen en las tablas de reenvío de los routers. El algoritmo de enrutamiento puede estar **centralizado** (se ejecuta en un sitio central y descarga la información de enrutamiento en cada router) o **descentralizado** (con un componente del algoritmo ejecutándose en cada router).

## Configuración de la conexión

Función importante de la capa de red. Algunas arquitecturas de red, requieren que los routers a lo largo de la ruta seleccionada, desde el origen al destino negocien entre sí para configurar el estado, antes de que puedan comenzar a fluir los paquetes de datos de la capa de red correspondientes a una determinada conexión entre el origen y el destino.

## Modelos de servicio de red

Define las características del transporte terminal a terminal de los paquetes entre los sistemas terminales emisor y receptor.
Posibles servicios:
- Entrega garantizada
- Entrega garantizada con retardo limitado
- Entrega de los paquetes en órden
- Ancho de banda mínimo garantizado
- Fluctuación máxima garantizada (intervalo de tiempo entre la transmisiòn de dos paquetes consecutivos es igual al intervalo entre sus respectivas recepciones)
- Servicios de seguridad(se proporciona confidencialidad a todos los segmentos de la capa de transporte)


La capa de red de internet proporciona un único servicio conocido como **servicio de mejor esfuerzo** (best-effort service).
**- Servicio CBR de las redes ATM:** El objetivo es conceptualmente simple:
proporcionar un flujo de paquetes mediante un conductor virtual cuyas propiedades son las mismas que si existiera un enlace de transmisión de ancho de banda fijo dedicado entre los hosts emisor y receptor.
**- Servicio ABR de las redes ATM:** Con este servicio las celdas no se pueden reordenar, pero si perder y está garantizada la velocidad mínima de transmisión de celda. Si la red tiene los suficientes recursos libres en un instante determinado, un emisor también puede ser capaz de enviar con éxito celdas a una velocidad mayor que la mínima.

## Redes de circuitos virtuales y de datagramas

- En la capa de red, los servicios son host a host proporcionados por la capa de red a la capa de transporte. En la capa de transporte, los servicios son proceso a proceso proporcionados por la capa de transporte a la capa de aplicación.
- La capa de red proporciona bien un servicio sin conexión host a host o un servicio orientado a la conexión host a host, pero no ambos.
Redes de circuitos virtuales (VC) : un servicio de conexión en la capa de red.
Redes de datagrama: un servicio sin conexión.
- El servicio de conexión de la capa de red se implementa en los routers del núcleo de la red, así como en los sistemas terminales.

### Redes de circuitos virtuales

Consta de
- una ruta entre los host de origen y de destino
- Números de VC, un número para cada enlace a lo largo de la ruta
- Entradas en la tabla de reenvío de cada router existente a lo largo de la ruta.
Un paquete que pertenece a un circuito virtual transportará un número VC en su cabecera.
Dado que un circuito virtual puede tener un número VC diferente en cada enlace, cada router interviniente tiene que sustituir el número de VC de cada paquete que le atraviesa por un nuevo número de VC. Este nuevo número de VC se obtiene de la tabla de reenvío.
Los router tienen que mantener información de **estado de la conexión** para las conexiones activas.
Tres fases:
- Configuración del VC
- Transferencia de datos
- Terminación del VC
Los routers existentes a lo largo de la ruta entre los dos sistemas terminales están implicados en la configuración del VC y cada router es completamente consciente de todos los VC y cada router es completamente consciente de todos los VC que pasan a través de él. Los mensajes que los sistemas terminales envían a la red para iniciar o terminar un VC y los mensajes pasados entre los routers para configurar el VC se conocen como **mensajes de señalización** y los protocolos empleados para intercambiar estos mensajes a menudo se denominan **protocolos de señalización.**
Las tablas de reenvío de un router se actualiza cada vez que se configura una nueva conexión a través del router o cuando una conexión existente en el router se termina.

### Redes de datagramas

En una red de datagramas, cada vez que un sistema terminal desea enviar un paquete, marca el paquete con la dirección del sistema terminal de destino y luego introduce el paquete en la red. Esto se hace sin configurar ningún circuito virtual. Los routers no mantienen información de estado acerca de los circuitos virtuales.
Cuando un paquete llega a un router, este utiliza la dirección de destino del paquete para buscar la interfaz del enlace de salida apropiado en la tabla de reenvío.
Tabla de reenvío: el router busca la coincidencia de un prefijo de la dirección de destino del paquete con las entradas de la tabla, si existe una coincidencia, el router reenvía el paquete a un enlace asociado con esa coincidencia.
Cuando existen varias coincidencias, el router aplica la regla de coincidencia con el prefijo más largo.
Las tablas de reenvío son modificadas por los algoritmos de enrutamiento, que normalmente actualizan una tabla de reenvío en intervalos aproximados de entre uno y cinco minutos.

## Router
- Puertos de entrada: Realiza las funciones de la capa física consistentes en la terminación de un enlace físico de entrada a un router. Realiza las funciones de la capa de enlace de datos necesarias para inter operar con las funciones de la capa de enlace de datos en el lado remoto del enlace de entrada. También realiza una función de búsqueda y reenvío, un paquete reenviado dentro del entramado de conmutación del router emerge en el puerto de salida apropiado.
- Entramado de conmutación: Conecta los puertos de entrada del router a sus puertos de salida. Dentro del router.
- Puertos de salida: Almacena los paquetes que le han sido reenviados a través del entramado de conmutación y los transmite al enlace de salida. Así, el puerto de salida lleva a cabo la función inversa de la capa física y de la capa de enlace de datos que el puerto de entrada
- Procesador de enrutamiento: Ejecuta los protocolos de enrutamiento

### Puertos de entrada

La elección del puerto de salida se lleva a cabo utilizando la información almacenada en la tabla de reenvío. Aunque el procesador de enrutamiento calcula la tabla de reenvío, suele almacenarse una copia de la misma en cada puerto de entrada. La decisión de reenvío puede tomarse localmente en cada puerto de entrada sin invocar al procesador de enrutamiento, lo cual evita la formación de cuellos de botella en el procesamiento de reenvíos en un único punto dentro del router.
En los routers con capacidades de procesamiento limitadas en el puerto de entrada, este puede simplemente reenviar el paquete al procesador de enrutamiento centralizado, el cual entonces hará una búsqueda en la tabla de reenvío y transmite el paquete al puerto de salida apropiado.
Debido a la necesidad de operar a velocidades de enlace altas, no se puede buscar linealmente en la tabla de reenvío la correspondencia, sino que se almacena las entradas en la tabla de reenvío en una estructura de árbol. Cada nivel del árbol se interpreta como el correspondiente a un bit de la dirección de destino.
Tiempo de búsqueda de 2^32 para direcciones IP, no suficientemente rápido.
Otra técnica: memorias direccionables por contenido ( **CAM, Content Addressable Memory**) las cuales permiten acceder a la memoria mediante una dirección IP de 32 bits, devolviendo la memoria el contenido de la correspondiente entrada de la tabla de reenvío en un tiempo prácticamente constante.
Otra técnica: utilizar una caché para almacenar las entradas accedidas recientemente.
Una vez determinado el puerto de salida de un paquete, es reenviado al entramado de conmutación, pero puede ser bloqueada su entrada si está siendo usado por otros paquetes. Por lo que queda almacenado en la cola de entrada del puerto de entrada.

### Entramado de Conmutación
- Conmutación vía memoria: Los procesadores de línea de entrada se encargan de realizar la búsqueda de la dirección de destino y de almacenar el paquete en la posición de memoria adecuada, encargándose los procesadores de una tarjeta de línea de conmutar los paquetes hacía la memoria del puerto de salida apropiado.
- Conmutación vía bus : El puerto de entrada transfiere directamente un paquete al puerto de salida a través de un bus compartido sin intervención del procesador de enrutamiento. Solo se puede transmitir un paquete por vez en el bus. Ancho de banda limitado por la velocidad del bus.
- Conmutación vía una red de interconexión: Un conmutador de malla (crossbar switch) es una red de interconexión que consta de 2n buses que conectan n puertos de entrada a n puertos de salida.

### Puertos de salida
El procesamiento en los puertos de salida,toma los paquetes que hayan sido almacenados en la memoria del puerto de salida y los transmite a través del enlace de salida.

### Colas

A medida que las colas de los puertos de entrada y salida crecen, el espacio disponible en el buffer del router terminará agotándose y se producirá una **pérdida de paquetes** .
**Velocidad del entramado de conmutación:** la velocidad a la que dicho entramado puede mover los paquetes desde los puertos de entrada hasta los puertos de salida.
Una consecuencia de las colas de los puertos de salida es que un **planificador de paquetes** en dicho puerto se deberá elegir un paquete de entre aquellos que están en cola esperando a ser transmitidos. Planificación de paquetes fundamental para las **garantías de la calidad del servicio** .
De forma similar, si no hay disponible bastante memoria para almacenar en buffer un paquete entrante, tiene que tomarse la decisión bien de descartar dicho paquete (drop-tail) o bien de eliminar uno o más paquetes de los que ya están en cola para hacer sitio al paquete que acaba de llegar. En algunos casos, puede ser una ventaja descartar (o marcar
la cabecera de) un paquete antes de que el buffer esté lleno, con el fin de proporcionar una indicación de congestión al emisor.
Si el entramado de conmutación no es lo suficiente rápido (respecto a las velocidades de línea de entrada) como para transferir todos los paquetes que le llegan sin producir retardos, entonces también pueden crearse colas de paquetes en los puertos de entrada.
Bloqueo HOL (Head-of-the-line): un paquete que se encuentra en una cola de entrada tiene que esperar a ser transferido a través del entramado de conmutación, aunque su puerto de salida esté libre, porque está bloqueado por otro paquete que se encuentra en la cabeza de la línea.


# Protocolo de Internet (IP)

## Datagramas

Paquetes de la capa de red. 20 bytes
- **Número de versión:** (4 bits) especifica el número de versión del protocolo IP del datagrama. A partir del número de versión el router puede determinar cómo interpretar el resto del datagrama IP.
- **Longitud de cabecera** (4 bits)
- **Tipo de servicio:** Diferencian los distintos tipos de datagramas IP.
- **Longitud del datagrama:** (16 bits) longitud de los datos más cabecera.
- **Identificador, indicadores, desplazamiento de fragmentación:** usado para la **fragmentación**
- Tiempo de vida (TTL): usado para que el datagrama no exista infinitamente en la red.
- Protocolo: Solo se emplea cuando un datagrama IP alcanza su destino final. Este valor indica el protocolo específico de la capa de transporte al que se le pasaran los datos contenidos en ese datagrama.
- Suma de comprobación de cabecera: Normalmente, los routers descartan los paquetes que se detectan errores.
- Direcciones de IP origen y destino
- Opciones: permite ampliar la cabecera IP
- Datos o carga útil

## Fragmentación

La cantidad máxima de datos que una trama de la capa de enlace puede transportar se conoce como **unidad máxima de transmisión** (MTU). Cada uno de los enlaces existentes a lo largo de la ruta entre el emisor y el destino pueden utilizar diferentes protocolos de la capa de enlace y cada uno de estos protocolos puede utilizar una MTU diferente.

Por lo tanto es necesario fragmentar los datos del datagrama IP en dos o más datagramas IP más pequeños, encapsular cada uno de los datagramas IP más pequeños en una trama de la capa de enlace distinta y enviar dichas tramas a través del enlace de salida. Cada uno se conoce como fragmentos. Los fragmentos tiene que ser reensamblados antes de llegar a la capa de transporte, esto se hace en los sistemas terminales para no sobrecargar de trabajo a los routers.
El host destino necesita saber si se trata de datagramas enteros o fragmentos y como ensamblarlos. Para eso se usan los campos identificador, indicador y desplazamiento de fragmentación en la cabecera del datagrama IP.
Cuando un router necesita fragmentar un datagrama, cada datagrama resultante se marca con la dirección de origen, la dirección de destino y el número de identificación del datagrama original.
Como IP es un servicio no fiable, es posible que uno o más de los fragmentos nunca lleguen a su destino. Por esta razón, con el fin de que el host de destino esté absolutamente seguro de que ha recibido el último fragmento del datagrama original, el último fragmento tiene un bit indicador puesto a 0, mientras que los demás fragmentos tienen el bit indicador puesto a 1. Además, para que el host de destino determine si falta un fragmento (y también para que pueda reensamblar los fragmentos en el orden apropiado), se utiliza el campo desplazamiento para especificar en qué posición dentro del datagrama IP original encaja el fragmento.
En el destino, la carga útil del datagrama se pasa a la capa de transporte sólo después de que la capa IP haya reconstruido completamente el datagrama IP original. Si uno o más de los fragmentos no llegan al destino, el datagrama incompleto se descarta y no se pasa a la capa de transporte.

## Direccionamiento IPv4

El límite entre el host y el enlace se denomina **interfaz.** El límite entre el router y cualquiera de sus enlaces también se conoce como **interfaz** . Por tanto, un router tiene varias interfaces, una para cada uno de los enlaces.
Las direcciones IP tienen una longitud de 32 bits (4 bytes), por lo que existen un total de 2^32 direcciones IP posibles. Cada una de las interfaces de un host o de un router de Internet tiene que tener asociada una dirección IP que es globalmente única.

```ad-hint
title: Recordatorio
_Para determinar las subredes, desconecte cada interfaz de su host o router,
creando islas de redes aisladas, con interfaces que acaban en los puntos
terminales de las redes aisladas. Cada una de estas redes aisladas se dice que
es una subred._

```

**Enrutamiento entre dominios sin clase** (CIDR, Classless Interdomain Routing): estrategia de asignación de direcciones en Internet.
Los x bits más significativos de una dirección en el formato a.b.c.d/x constituyen la parte de red de la dirección IP y a menudo se hace referencia a ellos como el **prefijo** (o prefijo de red) de la dirección. Los 32-x bits restantes de una dirección pueden emplearse para diferenciar los dispositivos internos de la organización, teniendo todos ellos el mismo prefijo de red.


**Dirección IP de difusión** : cuando un host envía un datagrama cuya dirección de destino es 255.255.255.255, el mensaje se entrega a todos los hosts existentes en la misma subred.

### Obtener un bloque de direcciones

Para obtener un bloque de direcciones IP que pueda ser utilizado dentro de la subred de una organización, un administrador de red tiene que contactar en primer lugar con su ISP, el cual le proporcionará direcciones extraídas de un bloque de direcciones mayor que ya habrá sido asignado al ISP. Las direcciones IP son gestionadas por la entidad **ICANN** (Internet Corporation for Assigned Names and Numbers, Corporación de Internet para los números y nombres asignados).

### Cómo obtener una dirección de host: Protocolo de configuración dinámica de host  **DHCP**

Las direcciones de host también se pueden configurar manualmente, pero frecuentemente ahora esta tarea se lleva cabo utilizando el Protocolo de configuración dinámica de host ( DHCP , Dynamic Host Configuration Protocol) .DHCP permite a un host obtener (permite que se le asigne) automáticamente una dirección IP.
Un administrador de red puede configurar DHCP de modo que un host dado reciba la misma dirección IP cada vez que se conecte a la red, o un host puede ser asignado a una dirección IP temporal que será diferente cada vez que el host se conecte a la red.
También puede brindar información adicional como: su máscara de subred, el gateway (router del primer salto) y la dirección del servidor DNS local.
Protocolo plug-and-play por su capacidad de automatizar el proceso de conexión.
Cada vez que un host se une a la red, el servidor DHCP asigna una dirección arbitraria de su conjunto actual de direcciones disponibles; cada vez que un host abandona la red, su dirección es devuelta al conjunto.
DHCP es un protocolo cliente-servidor . Cada subred necesita un servidor DHCP o puede tener un agente de retransmisión DHCP (un router) que conozca la dirección de un servidor DHCP.

4 pasos:
- **Descubrimiento del servidor DHCP:** La primera tarea de un host recién llegado es encontrar un servidor DHCP con el que interactuar. Esto se hace mediante un mensaje de descubrimiento DHCP que envía un cliente dentro de un paquete UDP al puerto 67. El paquete UDP se encapsula en un datagrama IP y el cliente DHCP crea un datagrama IP de difusión 255.255.255.255 y crea una dirección IP de origen de “ese host” igual a 0.0.0.0. El cliente DHCP pasa el datagrama IP a la capa de enlace, la cual difunde esa trama a todos los nodos conectados a la subred.
- **Ofertas del servidor DHCP:** Un servidor DHCP que recibe el mensaje de descubrimiento responde al cliente con un mensaje de oferta DHCP, que difunde a todos los nodos de la subred utilizando de nuevo una dirección IP de difusión. Puesto que en la subred pueden existir varios servidores DHCP, el cliente puede encontrarse en la situación de poder elegir entre varias ofertas. Cada mensaje de oferta de servidor contiene el ID de transacción del mensaje de descubrimiento recibido, la dirección IP propuesta para el cliente, la máscara de red y el tiempo de arrendamiento de la dirección IP, que es el tiempo que la dirección IP es válida.
- **Solicitud DHCP:** El cliente recién llegado seleccionará de entre las ofertas de servidor y responderá a la oferta seleccionada con un mensaje de solicitud DHCP, devolviendo los parámetros de configuración.
- **ACK DHCP:** El servidor contesta al mensaje de solicitud DHCP con un mensaje ACK DHCP, que confirma los parámetros solicitados.
Dado que un cliente puede desear utilizar su dirección durante más tiempo del arrendado, DHCP también proporciona un mecanismo que permite a un cliente renovar su tiempo de arrendamiento de una dirección IP.

### Traducción de direcciones de red: NAT

Un ámbito con direcciones privadas hace referencia a una red cuyas direcciones solo tienen significado para los dispositivos internos de dicha red y dejan de ser únicas. El problema surge cuando se quiere enviar paquetes a internet o recibirlos.
El router NAT no parece un router a ojos del mundo exterior. En su lugar, se comporta de cara al exterior como un único dispositivo con una dirección IP única. Se encarga de ocultar los detalles de la red doméstica al exterior.
Para poder identificar a qué host dentro de la red doméstica tiene que enviar determinados datagramas, se utiliza una tabla de traducciones NAT que está almacenada en el router NAT, e incluye los números de puertos, así como las direcciones IP en las entradas de la tabla.

### ICMP: Protocolo de mensajes de control de Internet

Los host y los routers utilizan ICMP para intercambiar información acerca de la capa de red.
Uso típico para informes de error.
ICMP a menudo se considera parte de IP pero, en sentido arquitectónico, se encuentra justo encima de IP, ya que los mensajes ICMP son transportados dentro de los datagramas IP.
Los mensajes ICMP tienen un campo de tipo y un campo de código, y contienen la cabecera y los 8 primeros bytes del datagrama IP que ha dado lugar a la generación del mensaje ICMP en primer lugar (pudiendo identificar el datagrama que produjo el error).

### IPv6

Para responder a la necesidad de un espacio de direcciones IP más grande, se desarrolló un nuevo protocolo IP, el protocolo IPv6. Una motivación adicional fue hacer un formato del cabezal que ayude a acelerar el procesamiento/forwarding del paquete.
Formato del datagrama IPv6: cabezal de largo fijo de 40 bytes y no se permite fragmentación.
- **Capacidades ampliadas de direccionamiento:** IPv6 aumenta el tamaño de la dirección IP de 32 a 128 bits.
- **Una cabecera de 40 bytes simplificada:** Permite un procesamiento más rápido del datagrama.
- Prioridad y etiquetado del flujo: Permite etiquetar los paquetes que pertenecen a determinados flujos para que los que el emisor solicita un tratamiento especial, como un servicio en tiempo real o una calidad servicio no predeterminados.
- Versión: transporta el valor 6
- Clase de tráfico: campo de 8 bits, similar al campo TOS de IPv4.
- Etiqueta de flujo: este campo de 20 bits se utiliza para identificar un flujo de datagramas.
- Longitud de carga útil: 16 bits transporta el número el bytes del datagrama incluida la cabecera.
- Siguiente cabecera: este campo identifica el protocolo al que se entregará el contenido de este datagrama.
- Límite de saltos: se decrementa 1 por cada salto.
- Direcciones de origen y destino
- Datos

Varios campos que aparecían en IPv4 ya no aparecen en IPv6, como, por ejemplo:
- Fragmentación/Reensamblado: Si llega un datagrama de tamaño mayor al que soporta, directamente lo descarta. Estas operaciones consumen tiempo, por lo que eliminando esta funcionalidad de los routers e incluyéndose directamente en los sistemas terminales se acelera considerablemente el reenvío IP dentro de la red.
- Suma de comprobación de cabecera: Esta información la consideraron redundante ya que este control se realiza en los protocolos TCP y UDP.
- Opciones: permitido, pero fuera del header, indicado por el campo “Next Header”

### Transición de IPv4 a IPv6

No se puede hacer una actualización de todos los routers simultáneamente, o sea hacer un “dia D”.
La forma más directa es la **pila dual** , donde todos los nodos de la red tengan una implementación para IPV4 e IPV6.
Otra opción es la **tunelización,** consiste en tomar el datagrama IPv6 completo como el campo de datos de un datagrama IPv4, el cual se envía normalmente por una red IPv4, permitiendo recuperar el datagrama IPv6 original en el receptor. El concepto se puede aplicar a múltiples protocolos “tunelizados” por otros.


El mecanismo más simple es el descrito, normalmente denominado 6in4; el mecanismo 6to4 es similar pero permite usar servidores de pasarela o relays. Entre otras posibilidades, se puede implementar la tunelización con transporte UDP, denominado Teredo; en este caso se facilita la tunelización a través de un router NAT.