# REDES DE COMPUTADORAS






## Capa de Enlace y Redes de área local

Protocolo de la capa de transporte: define el formato de los paquetes intercambiados por los
nodos situados en los extremos del enlace, así como las acciones que estos nodos llevan a
cabo cuando se envían y reciben los paquetes. Tiene asignada la tarea de mover tramas
entre nodos.
Tramas(frames): unidades de datos intercambiadas por un protocolo de la capa de enlace.
Un mismo datagrama puede ser transportado por diferentes protocolos de la capa de enlace
en los distintos enlaces que forman la ruta.

### Servicios proporcionados por la capa de enlace


- Entramado: Casi todos lo protocolos de la capa de enlace encapsulan cada
datagrama de la capa de red dentro de una trama de la capa de enlace antes de
transmitirla a través del enlace.
- Acceso al enlace:  Un protocolo de control de acceso al medio (MAC) especifica las
reglas que se utilizan para transmitir una trama a través del enlace.
- Entrega fiable: Cuando un protocolo de la capa de enlace proporciona un servicio
de entrega fiable, garantiza que va a transportar cada datagrama de la capa de red a
través del enlace sin que se produzcan errores.
- Control de flujo: Puede proporcionar un mecanismo de control de flujo para evitar
que el nodo emisor al otro lado del enlace abrume al nodo receptor situado en el otro
extremo.
- Detección de errores:  Puede proporcionar un mecanismo para detectar errores de
bit. Esto se lleva a cabo haciendo que el nodo transmisor incluya bits de detección
de errores en la trama y que el nodo receptor realice una comprobación de errores.
Detección más sofisticada, se implementa en hardware.
- Corrección de errores: El receptor no solo detecta si hay bits erróneos en la trama,
sino que también determina exactamente en qué puntos de la trama se han
producido los errores y luego los corrige.
- Semiduplex y full-duplex: Con la transmisión full-duplex, los nodos de ambos
extremos de un enlace pueden transmitir paquetes al mismo tiempo. Sin embargo,
con la transmisión semiduplex un mismo nodo no puede transmitir y recibir al mismo
tiempo.

### Técnicas de detección y corrección de errores


Las técnicas de detección y corrección de errores permiten al receptor detectar en ocasións
(pero no siempre) que se han producido errores en los bits. Incluso utilizando bits de
detección de errores pueden seguir existiendo  errores de bit no detectados .

#### Comprobaciones de paridad


En un esquema de paridad par, el emisor simplemente incluye un bit adicional y selecciona
su valor de modo que el número total de 1s en los d+1(la info original más el bit de paridad)


bits sea par. El receptor sólo necesita contar el número de 1s de los d+1 bits recibidos. Si se
está utilizando un esquema de paridad par y se encuentra un número impar de bits con
valor 1, el receptor sabrá que se ha producido al menos un error de bits. O que se ha
producido un número impar de errores de bits.

##### Paridad bidimensional

Los d bits de D se dividen en i filas y j
columnas. Para cada una de esas filas y
columnas se calcula un valor de paridad.
Los i+j+1 bits de paridad resultantes serán
los bits de detección de error.
Se detecta el error en la paridad tanto de la
fila como de la columna. El receptor no solo
podrá detectar el hecho de que se ha
producido un único error de bit, sino que
puede utilizar los índices de la columna y de la fila que presentan errores de paridad para
identificar realmente el bit corrompido y corregirlo.
**Corrección de errores hacia delante** (FEC): la capacidad del receptor para detectar y
corregir errores a la vez.

#### Suma de comprobación

Los d bits de datos se tratan como una secuencia de enteros de k bits. El método consiste
en sumar estos enteros de k bits y utilizar la suma resultante como bits de detección de
errores.

#### Comprobación de redundancia cíclica (CRC)

Para un determinada secuencia de
datos(D), el emisor seleccionará r
bits adicionales(R) y se los añadirá
a D, de modo que el patrón de d +
r bits resultante sea exactamente
divisible por G utilizando aritmética
módulo 2. El receptor divide los d
+ r bits recibidos entre G. Si el resto es distinto de cero, el receptor sabrá que se ha
producido error; en caso contrario, se aceptarán los datos como correctos.
R = resto (D.2r / G)

### Protocolo de acceso múltiple

Un **enlace punto a punto**  está compuesto por un único emisor en un extremo del enlace y
un único receptor en el otro extremo. Un  **enlace de difusión** , puede tener múltiples nodos
emisores y receptores, todos conectados al mismo y único canal de difusión compartido.


**Problema de acceso múltiple:** coordinar el acceso de múltiples nodos emisores y
receptores a un canal de difusión compartido.
**Protocolos de acceso múltiple:**  protocolos mediante los cuales los nodos se encargan de
regular sus transmisiones al canal de difusión compartido.
Un protocolo de acceso múltiple para un canal de difusión con una velocidad de R bits por
segundo debería tener las siguientes características deseables:
- Cuando sólo haya un nodo que tenga datos para enviar, a dicho nodo se le asignará
una tasa de transferencia de R bps
- Cuando haya M nodos con datos para enviar, cada uno de esos nodos tendrá una
tasa de transferencia de R/M bps. Esto no implica necesariamente que cada uno de
los M nodos tenga siempre una tasa instantánea igual a R/M, sino más bien que
cada nodo tendrá una tasa media de transmisión igual a R/M a lo largo de un
intervalo de tiempo definido adecuadamente.
- El protocolo será descentralizado; es decir, no habrá ningún nodo maestro que
pueda actuar como punto único de fallo para la red.

#### Protocolos de particionamiento del canal

##### Multiplexación por división en el tiempo(TDM)

Se divide el tiempo en marcos temporales y luego subdivide cada marco temporal en N
particiones de tiempo. Cada partición se le asigna a cada uno de lo N nodos.

##### Multiplexación por división de frecuencia (FDM)

Divide el canal de R bps en diferentes frecuencias (de ancho de banda R/N) y asigna cada
frecuencia a cada uno de los N nodos.

##### Acceso múltiple por división de código (CDMA)

Asigna un código diferente a cada nodo. Cada nodo utiliza su código único para codificar los
bits de datos a enviar. Se puede llegar a que los distintos nodos pueden transmitir
simultáneamente y conseguir que sus respectivos receptores decodifiquen correctamente
los bits de datos codificados por el emisor aunque haya interferencias provocadas por las
transmisiones realizadas por los otros nodos.

#### Protocolos de acceso aleatorio

Cada nodo transmisor transmite siempre a la máxima velocidad del canal, que es R bps.
Cuando se produce una colisión, cada uno de los nodos implicados en la colisión
retransmite repetidamente su trama (es decir, su paquete) hasta que la trama consiga pasar
sin sufrir colisiones. Cuando esto sucede, cada nodo elige un retardo aleatorio
independiente para retransmitir la trama.

##### ALOHA con particiones


- Todas las tramas constan de exactamente L bits.


- El tiempo está dividido en particiones de L/R segundos (cada partición equivale al
tiempo que se tarda en transmitir una trama).
- Los nodos comienzan a transmitir las tramas sólo al principio de las particiones.
- Los nodos están sincronizados, de modo que cada nodo sabe cuándo comienzan las
particiones.
- Si dos o más tramas colisionan en una partición, entonces todos los nodos detectan
la colisión incluso antes de que la partición termine.
Sea _p_  una probabilidad, es decir, un número comprendido entre 0 y 1
➔ Cuando el nodo tiene una nueva trama que enviar, espera hasta el comienzo de la
siguiente partición y transmite la trama completa dentro de la partición.
➔ Si no se produce una colisión, el nodo habrá transmitido correctamente su trama y
por tanto no considerará la posibilidad de retransmitirla (el nodo puede preparar una
nueva trama para su transmisión, si tiene una disponible).
➔ Si se produce una colisión, el nodo detecta la colisión antes de que la partición
termine. El nodo retransmitirá su trama en cada partición posterior con una
probabilidad  _p_ , hasta conseguir que la trama sea transmitida sin experimentar
colisiones.
El protocolo es altamente descentralizado, porque cada nodo detecta las colisiones y decide
de forma independiente cuándo debe retransmitir.
**Particiones con éxito:** particiones en las que hay exactamente un nodo transmitiendo.
La eficiencia de un protocolo de acceso múltiple con particiones se define como la fracción
(calculada a largo plazo) de particiones con éxito cuando existe un gran número de nodos
activos, cada uno de los cuales tiene siempre una gran cantidad de tramas que enviar.

##### ALOHA (puro)

Cuando llega una trama el nodo transmite inmediatamente la trama en su totalidad hacia el
canal de difusión. Si una trama transmitida experimenta una colisión con una o más
transmisiones de otros nodos, el nodo (después de transmitir completamente la trama que
ha sufrido la colisión) retransmitirá la trama de forma inmediata con una probabilidad  _p._
En caso contrario, el nodo esperará durante un tiempo equivalente al tiempo total de
retransmisión de una trama. Después de esta espera, transmitirá la trama con probabilidad
p, o esperará (permaneciendo inactivo) durante otro periodo de tiempo igual al tiempo de
transmisión de una trama con una probabilidad  _1 – p_ .
La máxima eficiencia del protocolo ALOHA puro es sólo de  _1/(2e)_ , que es exactamente la
mitad que la del ALOHA con particiones.

#### Acceso múltiple con sondeo de portadora (CSMA)


- “Escuchar antes de hablar” (sondeo de portadora) : cada nodo escucha el canal
antes de transmitir. Si actualmente se está transmitiendo una trama de otro nodo por
el canal, el nodo esperará un intervalo de tiempo aleatorio y luego volverá a sondear
para ver si existe portadora en el canal.
- “Si alguien comienza a hablar al mismo tiempo, hay que dejar de hablar”
(detección de colisiones): Si detecta que otro nodo está transmitiendo una trama
que interfiere la suya, dejará de transmitir y empleará algún tipo de protocolo para
determinar cuándo debe volver a intentar transmitir de nuevo.


Cuanto mayor sea el  **retardo de propagación** (el tiempo que una señal tarda en propagarse
de uno de los nodos a otro), mayor será la probabilidad de que un nodo que efectúe el
sondeo de portadora no sea capaz detectar una transmisión que ya ha comenzado en otro
nodo de la red.
Cuando un nodo realiza una detección de colisiones deja de transmitir en cuanto detecta
que se ha producido una colisión.

#### Protocolo de toma de turnos

##### Protocolo de sondeo (polling)

Este protocolo requiere que se designe a uno de los nodos como nodo maestro. El nodo
maestro sondea a cada uno de los otros nodos a la manera de turno rotatorio (round robin).
Desventaja: introduce un retardo de sondeo: el intervalo de tiempo requerido para indicarle
a un nodo que puede transmitir. Si el nodo maestro falla, entonces todo el canal dejará de
estar operativo.

##### Protocolo de paso de testigo

Existe una trama de pequeño tamaño y de propósito especial conocida con el nombre de
testigo (token) que va siendo intercambiada entre los nodos en un determinado orden fijo.
Cuando un nodo recibe el testigo, lo retiene si dispone de alguna trama para transmitir; en
caso contrario, reenvía inmediatamente el testigo al siguiente nodo. Si un nodo tiene tramas
que transmitir cuando recibe el testigo, envía una trama detrás de otra, hasta el número
máximo de tramas permitido y luego reenvía el testigo al siguiente nodo.
Descentralizado y muy eficiente.
Desventaja: el fallo de un nodo puede hacer que todo el canal quede inutilizable, o si un
nodo se olvidara accidentalmente de liberar el testigo, entonces sería necesario invocar
algún procedimiento de recuperación para hacer que el testigo vuelva a circular.

### Redes de área local (LAN)

Lan: una red de computadoras concentrada en un área geográfica.
Lans con tecnología de paso de testigos.
En una LAN token ring, los N nodos de la LAN (hosts y routers) están conectados en anillo
mediante una serie de enlaces directos. Cuando un nodo obtiene el testigo y envía una
trama, la trama se propaga alrededor del anillo completo, creando así un canal de difusión
virtual. El nodo de destino lee la trama a partir del medio de la capa de enlace, en el
momento que la trama se propaga a su través. El nodo que envía la trama tiene la
responsabilidad de eliminar la trama del anillo.


## Direccionamiento de la capa de enlace

### Direcciones MAC

La dirección MAC tiene 6 bytes de longitud, lo que nos da 248 posibles direcciones MAC.
Suelen expresarse en notación hexadecimal, indicándose cada byte de la dirección
mediante una pareja de números hexadecimales. Aunque las direcciones MAC se diseñaron
para ser permanentes, hoy día es posible modificar la dirección MAC de un adaptador
mediante un software apropiado.
El el IEEE se encarga de gestionar el espacio de direcciones MAC, vende direcciones a las
empresas que quieren fabricar adaptadores, de forma de tener direcciones MAC únicas.
Las direcciones MAC tienen una estructura plana y no varian dependiendo de a donde se
lleve el adaptador.
Cuando un adaptador de un emisor quiere enviar una trama a otro adaptador de destino,
inserta la dirección MAC del de destino en la trama y luego la envía a través de la red LAN.
SI se trata de una LAN de difusión, la trama será recibida y procesada por todos los demás
adaptadores de la LAN. En particular, cada adaptador que reciba la trama comprobará si la
dirección MAC de destino contenida en la trama se corresponde con su propia dirección
MAC. Solo se pasará la trama “hacia arriba” si coincide la dirección MAC.
**Dirección de difusión MAC : FF-FF-FF-FF-FF-FF,** con esta dirección se quiere que todos
los adaptadores reciban y procesen la trama enviada.

### Protocolo de resolución de direcciones (ARP)

Lleva a cabo la tarea de traducir las direcciones de la capa de red y de enlace.
Un módulo ARP en el nodo emisor toma como entrada cualquier dirección IP de la misma
LAN y devuelve la dirección MAC correspondiente. Resuelve direcciones IP solo para nodos
en una misma subred.
Cada nodo tiene en su memoria una tabla ARP, que contiene las correspondencias entre
las direcciones IP y las direcciones MAC.
Si no existe la entrada en la tabla para el nodo que se quiere, el nodo emisor utiliza el
protocolo ARP para resolver la dirección. En primer lugar, el nodo emisor construye un
paquete especial denominado paquete ARP. Un paquete ARP contiene varios campos,
incluyendo las direcciones MAC e IP del emisor y el receptor. Los paquetes de consulta y de
respuesta ARP tienen el mismo formato. El propósito del paquete de consulta ARP es
consultar a todos los demás nodos de la subred con el fin de determinar la dirección MAC
correspondiente a la dirección IP que está resolviendo.
Cada nodo, chequea si la IP coincide con la suya, el único en el que se produzca la
coincidencia devolverá al nodo que ha realizado la consulta una respuesta ARP con la
correspondencia deseada. El nodo que ha realizado la consulta podrá entonces actualizar
su tabla ARP y enviar su datagrama IP, encapsulado dentro de una trama de la capa de
enlace cuya dirección de destino MAC es la del nodo que ha contestado a la anterior
consulta ARP.


Protocolo plug-and-play, la tabla ARP se construye automáticamente y si un nodo se
desconecta de la subred, su entrada en las tablas se eliminará.
Para enviar un datagrama a un nodo fuera de una subred, la trama tiene que ser enviada
con la dirección MAC del siguiente adaptador en el camino hacia el nodo fuera de la subred
pero con la IP del nodo destino.

## Ethernet

**concentrador:**  dispositivo de la capa física que actúa sobre los bits individuales en lugar de
sobre las tramas. Cuando un bit, que representa un cero o un uno, llega procedente de una
interfaz, el concentrador simplemente vuelve a crear el bit, incrementa su intensidad de
energía y lo transmite a todas las demás interfaces.
Si un concentrador recibe tramas procedentes de dos interfaces distintas al mismo tiempo,
se produce una colisión y los nodos que crean las tramas tendrán que retransmitirlas.

### Estructura de la trama Ethernet

- **Campo de datos:** transporta el datagrama IP. La unidad máxima de transmisión
(MTU) de Ethernet es 1.500 bytes, lo que quiere decir que si el datagrama IP excede
de 1.500 bytes, entonces el host tiene que fragmentar el datagrama. El tamaño
mínimo del campo de datos es 46 bytes, lo que significa que si el datagrama IP tiene
menos de 46 bytes, el campo de datos tiene ser rellenado hasta los 46 bytes.
(después se utiliza el campo “longitud de cabecera” para eliminar el relleno).
- **Dirección de destino:**  contiene la dirección MAC del adaptador de destino. Cuando
un adaptador recibe una trama Ethernet cuya dirección de destino coincide con la
suya o la dirección MAC de difusión, pasa el contenido del campo de datos de la
trama a la capa de red, en caso contrario, lo descarta.
- **Dirección de origen:**  Este campo contiene la dirección MAC del adaptador que
transmite la trama hacia la LAN
**- Campo de tipo:**  protocolo de Red**.** Los hosts pueden utilizar otros protocolos de la
capa de red además de IP.
- **Comprobación de redundancia cíclica (CRC):**  su propósito es permitir que el
adaptador receptor detecte errores de bit de la trama.
- **Preámbulo:**  8 bytes. Cada uno de los siete primeros bytes tiene el valor 10101010 y
el último byte tiene el valor 10101011. Los siete primeros bytes sirven para
“despertar” a los adaptadores de recepción y sincronizar sus relojes con el reloj del
emisor. Los últimos 2 bits del octavo byte del preámbulo (los dos primeros 1s
consecutivos) alertan al adaptador de que va a llegar “información importante”.
Ethernet utiliza la transmisión en banda base; es decir, el adaptador envía una señal digital
directamente al canal de difusión. También utilizan la codificación Manchester, cada bit
contiene una transición; un 1 indica una transición del nivel alto al nivel bajo, mientras que
un 0 indica una transición del nivel bajo al nivel alto. Al incluir una transición a mitad de cada
bit, el host receptor puede sincronizar su reloj con el del host emisor.


#### Servicio sin conexión fiable

No se establece ninguna conexión entre adaptadores. Cuando una trama llega al adaptador
destino, se hace una comprobación CRC, peor no se envía ni un mensaje de
reconocimiento positivo cuando pasa la comprobación, ni uno negativo cuando no la pasa.
Esta responsabilidad es de protocolos de capas superiores.

### CSMA/CD: protocolo de acceso múltiple de Ethernet


- Un adaptador puede comenzar a transmitir en cualquier instante; es decir, no existe
el concepto de partición de tiempo.
- Un adaptador nunca transmite una trama cuando detecta que algún otro adaptador
está transmitiendo; es decir, utiliza un mecanismo de sondeo de portadora.
- Un adaptador que está transmitiendo aborta su transmisión tan pronto como detecta
que otro adaptador también está transmitiendo; es decir, utiliza un mecanismo de
detección de colisiones.
- Antes de intentar llevar a cabo una retransmisión, un adaptador espera un intervalo
de tiempo aleatorio que normalmente es más pequeño que el tiempo que se tarda en
transmitir una trama.

## Conmutadores de la capa de enlace

La función de un conmutador es recibir las tramas de la capa de enlace entrantes y
reenviarlas a los enlaces de salida. El propio conmutador es transparente para los nodos; es
decir, un nodo dirige una trama a otro nodo y la envía a la red LAN, sin ser consciente de
que un conmutador recibirá la trama y la reenviará a los demás nodos. Los conmutadores
tienen buffers para almacenar las tramas cuando la velocidad a la que llegan las tramas es
mayor que la capacidad del enlace.

### Reenvío y filtrado

El **filtrado**  es la función del conmutador que determina si una trama debe ser reenviada a
alguna interfaz o debe ser descartada.
El  **reenvío**  es la función del conmutador que determina las interfaces a las que un trama
debe dirigirse y luego envía la trama a esas interfaces.
Para esto se utilizan tablas del conmutador, que tiene entradasa para algunos nodos de una
red LAN. Contiene (1) la dirección MAC de un nodo (2) la interfaz del conmutador que lleva
hacia el nodo y (3) el instante en el que la entrada para el nodo fue incluida en la tabla.
Posibilidades con la tabla:
- No existe ninguna entrada para la dirección MAC de destino, el conmutador difunde
la trama
- Existe una entrada para la MAC de destino pero procede de un segmento de la LAN
que contiene al adaptador destino, por lo que se descarta la trama.
- Existe una entrada para la MAC de destino, tiene que ser reenviado al segmento de
LAN donde esta el adaptador, el conmutador coloca la trama en la interfaz de salida
asociada en la tabla.


### Auto-aprendizaje

Los conmutadores tienen la propiedad de que su tabla se construye de forma automática,
dinámica y autónoma, sin intervención de un administrador de redes ni de ningún protocolo
de configuración.

1. Incialmente la tabla del conmutador está vacía
2. Para cada trama entrante recibida en una interfaz, el conmutador almacena en su
    tabla (1) la dirección MAC especificada en el campo dirección de origen de la trama,
    (2) la interfaz de la que procede la trama y (3) la hora actual.
3. El conmutador borra una dirección de la tabla si no se recibe ninguna trama con esa
    dirección como dirección de origen transcurrido un cierto periodo de tiempo ( tiempo
    de envejecimiento).

### Propiedades de la conmutación de la capa de enlace


- Eliminación de las colisiones: Los conmutadores almacenan las tramas en buffer
y nunca transmiten más de una trama a un segmento simultáneamente.
- Enlaces heterogéneos:  Dado que un conmutador aísla un enlace de otro, los
distintos enlaces de una LAN pueden operar a velocidades diferentes y pueden
utilizar diferentes medios físicos.
- Administración:  Además de proporcionar una seguridad mejorada, un conmutador
también facilita las tareas de gestión de la red. un conmutador puede detectar
cuando un adaptador de red funciona mal enviando continuamente tramsas y
desconectar internamente el adaptador que está funcionando incorrectamente. Un
corte en un cable sólo desconecta al nodo que está usando el cable cortado para
conectarse al conmutador.

### Conmutadores frente a routers

Conmutadores
Pros:
- Dispositivos plug-and-play
- Ofrecen tasas de filtrado y reenvío relativamente altas (trabajan hasta capa
2)
Contras:
- La topología activa de una red conmutada está restringida a un árbol de
recubrimiento.
- Una red conmutada grande requerirá tablas ARP grandes en los nodos y
generará una cantidad de procesamiento y tráfico ARP sustancial.
- No ofrecen ninguna protección frente a las tormentas de difusión.
Routers
Pros:
- Normalmente los paquetes no seguirán ciclos a través de los routers incluso
cuando la red tenga rutas redundantes. Los paquetes no están restringidos a



un árbol de recubrimiento y pueden utilizar la mejor ruta entre el origen y el
destino
- Proporcionan protección mediante cortafuegos frente a las tormentas de
difusión de la capa 2.
Contra:
- no son dispositivos plug-and-play
- los routers suelen tener un tiempo de procesamiento por paquete mayor que
los conmutadores (trabajan hasta capa 3)

### Redes de Área local virtuales (VLAN)

Un conmutador compatible con redes VLAN
permite definir múltiples redes de área local
virtuales sobre una única infraestructura de red
de área local física. Los hosts de una VLAN se
comunican entre sí como si sólo ellos (y ningún
otro host) estuvieran conectados al
conmutador. En una VLAN basada en puertos,
el administrador de la red divide los puertos
(interfaces) del conmutador en grupos. Cada
grupo constituye una VLAN, con los puertos de
cada VLAN formando un dominio de difusión
Para enviar tráfico entre un departamento y otro, los fabricantes de conmutadores
incorporan en un único dispositivo un conmutador VLAN y un router, con lo que no es
necesario un router externo.
Si se tienen dos conmutadores separados físicamente pero compartiendo VLANs se utiliza
la técnica troncalización VLAN, con la cual un puerto especial de cada conmutador se
configura como un puerto troncal para interconectar los dos conmutadores VLAN. El puerto
troncal pertenece a todas las VLAN y las tramas enviadas a cualquier VLAN son reenviadas
a través del enlace troncal hacia el otro conmutador.
Para identificar a qué VLAN pertenece cada trama, se utiliza una etiqueta VLAN de cuatro
bytes añadida a la cabecera que transporta la identidad de la VLAN a la que pertenece.

## PPP: Protocolo punto a punto

El protocolo punto a punto PPP es un protocolo de la capa de enlace que opera sobre un
enlace punto a punto: un enlace que conecta directamente dos nodos situados cada uno de
ellos en extremo del enlace.
Requisitos establecido para el diseño de PPP:
- Entramado de paquetes: El emisor de la capa de enlace del protocolo PPP tiene que
poder tomar un paquete del nivel de red y encapsular dentro de la trama de la capa
del enlace PPP de tal modo que el receptor sea capaz de identificar el inicio y el final
tanto de la trama de la capa de enlace como del paquete de la capa de red
contenido en ella.


- Transparencia: PPP no debe aplicar ninguna restricción a los datos que aparecen en
el paquete de la capa de red. Por ejemplo, no puede prohibir el uso de ciertos
patrones de bits en el paquete de la capa de red.
- Múltiples protocolos de la capa de red: Tiene que poder dar soporte a múltiples
protocolos de la capa de red que se ejecuten sobre el mismo enlace físico de forma
simultánea.
- Múltiples tipos de enlaces: Además de poder transportar múltiples protocolos de
nivel superior, PPP también tiene que poder operar sobre una amica variedad de
tipos de enlaces, incluyendo enlaces serie o paralelo, enlaces síncronos o
asíncronos, enlaces de baja velocidad o de alta velocidad, o enlaces electrónicos u
ópticos.
- Detección de errores: Tiene que ser capaz de detectar errores de bit en las tramas
recibidas
- Pervivencia de la conexión: Tiene que ser capaz de detectar un fallo en el nivel de
enlace y de señalar esa condición de error a la capa de red.
- Negociación de direcciones de la capa de red.
- Simplicidad