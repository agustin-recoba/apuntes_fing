## Mecanismo de control de congestión de TCP

TCP tiene que utilizar un control de congestión terminal a terminal en lugar de un control de congestión asistido por la red, ya que la capa IP no proporciona una realimentación explícita a los sistemas terminales informando que hay congestión en la red.
El método empleado por TCP consiste en que cada emisor limite la velocidad a la que transmite el tráfico a través de su conexión en función de la congestión de red percibida. Si un emisor TCP percibe que en la ruta entre él mismo y el destino apenas existe congestión, entonces incrementara su velocidad de transmisión; por el contrario, si el emisor percibe que existe congestión a lo largo de la ruta, entonces reducirá su velocidad de transmisión.
Para limitar la velocidad a la que se envía el tráfico, el emisor hace un seguimiento de una variable adicional, la **ventana de congestión**. Esta ventana, indicada como ventanaCongestion, impone una restricción sobre la velocidad a la que el emisor TCP puede enviar tráfico a la red. Específicamente, la cantidad de datos no reconocidos en un emisor no puede exceder el mínimo de ventanaCongestion y ventanaRecepcion: 
$ultimoByteLeido - ultimoByteReconocido ≤ min \{ventanaCongestion, ventanaRecepcion\}$
La velocidad de transmisión del emisor es aproximadamente igual a:
$$\frac{ventanaCongestion}{RTT} bps$$

El emisor TCP percibe que hay congestión en la ruta entre él y el destino, si se da un suceso de pérdida, es decir que se produzca un fin de temporización o se perciben 3 ACKs duplicados procedentes del receptor.
TCP interpretará la llegada de los paquetes ACK como indicación de que está todo bien y empleará esos paquetes para incrementar el tamaño de la ventana de congestión, por eso se dice que **TCP es auto-temporizado**.

### Principios de TCP:
- Un segmento perdido implica congestión, y, por lo tanto, la velocidad del emisor TCP debe reducirse como se pierde un segmento.
- Un segmento que ha sido reconocido indica que la red está entregando los segmentos del emisor al receptor y, en consecuencia, la velocidad de transmisión del emisor puede incrementarse cuando llega un paquete ACK correspondiente a un segmento que todavía no había sido reconocido.
- Testeo del ancho de banda, el emisor aumenta su velocidad de transmisión para tantear la velocidad a la que de nuevo aparece congestión, retrocede a partir de ese punto y comienza de nuevo a tantear.


## Algoritmos de control de congestión de TCP

### Arranque lento (Slow Start)

Cuando la conexión comienza, el valor de la ventana de congestión es 1 MSS (tamaño máximo del segmento), que da como resultado una velocidad de transmisión inicial aproximadamente igual a MSS/RTT.
Además, el valor de ventanaCongestion se incrementa 1 MSS cada vez que se produce el primer reconocimiento de un segmento transmitido. Por lo tanto, la velocidad de transmisión irá creciendo exponencialmente durante la fase de arranque lento.

Si se produce un suceso de pérdida de paquete dado por un fin de temporización, el emisor TCP establece el valor de ventanaCongestion en 1 e inicia de nuevo un proceso de arranque lento. También se define una segunda variable denominada umbral, y se inicializa en ventanaCongestion/2.
Otra forma de terminar con la fase de arranque lento es cuando el valor de ventanaCongestion alcanza el valor de umbral, y las transacciones pasan al modo de Por último, la fase de arranque lento puede terminar cuando se detectan 3 paquetes ACK duplicados, en este caso TCP realiza una retransmisión rápida.

### Evitación de la congestión

El valor de ventanaCongestion es aproximadamente igual a la mitad de su valor en el momento en que se detectó congestión por última vez. En lugar de duplicar el valor de ventanaCongestion, se adopta un método más conservador e incrementa el valor en 1 MSS cada RTT.

### Recuperación rápida

Algoritmo agregado en la versión TCP Reno.
El valor de ventanaCongestion se incrementa en 1 MSS por cada ACK duplicado recibido correspondiente al segmento que falta y que ha causado que TCP entre en el estado de recuperación rápida.
Si se produce un fin de temporización, el mecanismo de recuperación rápida efectúa una transición al estado de arranque lento después de realizar las mismas acciones que en los modos de arranque lento y evitación de la congestión: el valor de ventanaCongestion se establece en 1 MSS y el valor de umbral se hace igual a la mitad del valor que tenía ventanaCongestion cuando tuvo lugar el suceso de pérdida.

```ad-info
title: Maquina de estados de TCP Tahoe
collapse: closed
![[Pasted image 20221025144456.png]]
```

```ad-info
title: Maquina de TCP Reno
collapse: closed
![[Pasted image 20221025144505.png|600]]
```

### Tahoe vs Reno

La distinción se basa en clasificar los dos tipos de detección de congestión. Se entiende que un timeout es signo de una congestión "severa" y que el tripe ACK duplicado es signo de congestión "leve".
Tanto en TCP Tahoe como en TCP Reno, cuando se da un timeout, se setea el tamaño de la ventana de congestión en $1 \times MSS$. La variación está en que si llegan tres ACK duplicados, TCP Reno no llevará el tamaño de la ventana a $1 \times MSS$ (como lo hace TCP Tahoe), sinó que lo cortará a la mitad.
