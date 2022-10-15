# TCP

Para proporcionar una transferencia de datos fiable, TCP confía en muchos de los principios básicos, incluyendo los mecanismos de detección de errores, las retransmisiones, los reconocimientos acumulativos, los temporizadores y los campos de cabecera para los números de secuencia y de reconocimiento.

Se dice que TCP está **orientado a la conexión** porque antes de que un proceso de la capa aplicación pueda comenzar a enviar datos a otro, los dos procesos deben primero “establecer una comunicación” entre ellos; es decir, tienen que enviarse ciertos segmentos preliminares para definir los parámetros de la transferencia de datos que van a llevar a cabo a continuación. Como parte del proceso de establecimiento de la conexión TCP, ambos lados de la misma iniciarán muchas variables de estado TCP asociadas con la conexión TCP.
Dado que el protocolo TCP se ejecuta únicamente en los sistemas terminales y no en los elementos intermedios de la red (routers y switches de la capa de enlace), los elementos intermedios de la red no mantienen el estado de la conexión TCP; los routers ven los datagramas, no las conexiones.

Proporciona un servicio **full-duplex** (flujo de datos en ambas direcciones en la misma conexión). Una conexión TCP casi siempre es una conexión **punto a punto** (entre un único emisor y un único receptor).

![[Pasted image 20221006213600.png]]

De vez en cuando TCP tomará fragmentos de datos del buffer de emisión. La cantidad máxima de datos que pueden tomarse y colocarse en un segmento de la capa de red, está limitada por el tamaño máximo de segmento (MSS).
TCP empareja cada segmento de datos del cliente con una cabecera TCP, formando los segmentos TCP.
Cuando TCP recibe un segmento en el otro extremo, los datos se colocan en el buffer de recepción.
En conclusión, TCP consta de buffers, variables y un socket de conexión a un proceso en cada host perteneciente a la conexión.

### Establecimiento de una conexión mediante el **acuerdo en tres fases**
1. El proceso de la aplicación cliente informa a la capa de transporte del cliente que desea establecer una conexión con un proceso del servidor.
2. La capa de transporte del cliente procede entonces a establecer una conexión TCP con el servidor.
3. Una vez establecida la conexión, cuando el cliente desea enviar datos al servidor, el cliente pasa un flujo de datos a través del socket.
4. Una vez que los datos están en manos de TCP, esos datos son dirigidos al buffer de emisión de la conexión


### Segmento TCP

**20 bytes** en total.

El segmento TCP consta de campos de cabecera y un campo de datos. El campo de datos contiene un fragmento de datos de la aplicación.

![[Pasted image 20221006213622.png]]

El número de puerto de origen y destino, se usan para multiplexar y demultiplexar los datos.
Al igual que en UDP se usa un campo de suma de comprobación. 
También incluye un campo número de secuencia (32 bits) y el número de reconocimiento (32 bits) usados para el servicio de transferencia de datos fiable.
El campo ventana de recepción (16 bits) se usa por el control de flujo. 
El campo longitud de cabecera (4 bits), la cabecera puede tener una longitud variable. 
El campo opciones (normalmente vacío). 
El campo indicador (6 bits), bit **ack**, **rst**, **syn** y **fin**.

#### Número de secuencia y número de reconocimiento

TCP percibe los datos como un flujo de bytes no estructurado pero ordenado. El **número de secuencia** de un segmento es el número del *primer* byte del segmento dentro del flujo de bytes. El **número de reconocimiento** que el host receptor incluye en su segmento es el número de secuencia del *siguiente* byte que el host receptor está esperando del host emisor. TCP proporciona reconocimiento acumulativo dado que solo confirma los bytes hasta el primer byte que falta en el flujo.

![[Pasted image 20221006213855.png|350]]

Cuando los segmentos no llegan en orden:
- el receptor descarta de forma inmediata los segmentos que no han llegado en orden
- el receptor mantiene los bytes no ordenados y espera a que lleguen los bytes que faltan con el fin de rellenar los huecos (normal en la práctica)

Ambos lados de la conexión TCP eligen aleatoriamente un número de secuencia inicial. Con el fin de minimizar la posibilidad de que un segmento que todavía está presente en la red (a causa de una conexión anterior que ya ha terminado entre dos hosts), pueda ser confundido con un segmento válido de una conexión posterior entre los mismos host.

### Estimación del tiempo de ida y vuelta (RTT) y fin de temporización

TCP utiliza un mecanismo de fin de temporización/retransmisión para recuperarse de la pérdida de segmentos.

- `RTTMuestra` es la cantidad de tiempo que transcurre desde que se envía el segmento hasta que se recibe el correspondiente paquete ACK.
	En cualquier instante, `RTTMuestra` se estima a partir de uno solo de los segmentos transmitidos, pero todavía no reconocidos, lo que proporciona un nuevo valor de `RTTMuestra` aproximadamente cada RTT segundos.
	
	`RTTEstimado` es el valor estimado a partir de los valores de `RTTMuestra`.
	
	`RTTEstimado = (1 - α) * RTTEstimado + α * RTTMuestra`
	Valor recomendado `α = 0,125`.
	
	![[Pasted image 20221006214436.png|400]]

- `RTTDesv` es una estimación de cuánto se desvía típicamente `RTTMuestra` de `RTTEstimado`.
	`RTTDesv = (1 - β) * RTTDesv + β * | RTTMuestra - RTTEstimado |`
	Valor recomendado para `β = 0,25`.

Por lo tanto, el intervalo de fin de temporizador deberá ser mayor o igual que RTTEstimado o se producirán retransmisiones innecesarias. Pero no debería ser mucho mayor que RTTEstimado.
- `IntervaloFindeTemporizacion = RTTEstimado + 4 * RTTDesv`

### Transferencia de datos fiable

TCP crea un **servicio de transferencia de datos fiable** sobre el servicio de mejor esfuerzo pero no fiable de IP. El servicio de transferencia de datos fiable de TCP garantiza que el flujo de datos que un proceso extrae de su buffer de recepción TCP no está corrompido, no contiene huecos, ni duplicados y está en orden, es decir, el flujo de bytes es exactamente el mismo flujo que fue enviado por el sistema terminal existente en el otro extremo de la conexión.

### Duplicación del intervalo de fin de temporización

Cada vez que TCP retransmite, define el siguiente intervalo de fin de temporización como dos veces el valor anterior, en lugar de obtenerlo a partir de los últimos valores de RTTEstimado y RTTDesv. Los intervalos crecen exponencialmente luego de cada retransmisión. Pero cuando el temporizador se inicia luego de recibir datos de la aplicación o recibir un ACK, el intervaloFindeTemporización se obtiene a partir de los valores más recientes de RTTEstimado y RTTDesv. Proporciona una forma limitada de control de congestión.

### Retransmisión Rápida

En el caso de que se reciban tres ACK duplicados, el emisor TCP realiza una retransmisión rápida, reenviando el segmento que falta antes de que caduque el temporizador de dicho segmento.


### Gestión de la conexión TCP

#### Abriendo la conexión


- TCP del lado del cliente envía un segmento TCP especial al TCP del lado del servidor. Sin datos de la capa de aplicación pero con el bit de la cabecera SYN en 1. Además el cliente selecciona de forma aleatoria un número de secuencia inicial (cliente_nsi) y lo coloca en el campo número de secuencia del segmento TCP inicial SYN.
- Una vez que el datagrama IP que contiene el segmento SYN TCP llega al host servidor, el servidor extrae dicho segmento SYN del datagrama, asigna los buffers y variables TCP a la conexión y envía un segmento de conexión concedida al cliente TCP. Sin datos de la capa de aplicación pero con el bit SYN en 1, el campo de reconocimiento de la cabecera con cliente_nsi+1 y su propio número de secuencia inicial servidor_nsi en el campo número de secuencia. Este segmento se conoce como segmento SYNACK.
- Al recibir el segmento SYNACK, el cliente también asigna buffers y variables a la conexión. El cliente envía al servidor un último segmento con servidor_nsi+1 en el campo reconocimiento, el bit SYN en 0. Y a partir de ahora ya se pueden transportar datos del cliente al servidor dentro de la carga útil del segmento.

#### Cerrando la conexión


- El proceso de la aplicación cliente ejecuta un comando de cierre. Esto hace que el cliente TCP envíe un segmento especial TCP al proceso servidor. El segmento especial contiene un bit indicador en la cabecera del segmento, el bit FIN puesto a 1.
- Cuando el servidor recibe este segmento, devuelve al cliente un segmento de reconocimiento. El servidor entonces envía su propio segmento de desconexión, que tiene el bit FIN puesto a 1. Por último, el cliente reconoce el segmento de desconexión del servidor. En esta situación, los recursos de ambos hosts quedan liberados.