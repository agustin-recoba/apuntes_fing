# Protocolo de transferencia fiable con procesamiento en cadena

Improbable que los protocolos de parada y espera satisfagan con su rendimiento. Por lo que en lugar de operar en este modo, el emisor podría enviar varios paquetes sin esperar a los mensajes de reconocimiento.

Consecuencias:
- El rango de los números de secuencia tiene que incrementarse.
- Los lados emisor y receptor de los protocolos pueden tener que almacenar en buffer más de un paquete.
- El rango necesario de los números de secuencia y los requisitos de buffer dependerán de la forma en que un protocolo de transferencia de datos responda a la pérdida de paquetes y a los paquetes corrompidos o excesivamente retardados.

![[Pasted image 20221006201817.png]]

## Retroceder N (GBN, Go-Back-N)

En este protocolo, el emisor puede transmitir varios paquetes sin tener que esperar a que sean reconocidos, pero está restringido a no tener más de un número máximo permitido, N, de paquetes no reconocidos en el canal. El receptor sólo envía ACKs acumulativos, no envía el ACK de un paquete si hay un hueco. El emisor tiene un timer para el paquete más viejo no reconocido, si el timer vence, retransmite todos los paquetes no reconocidos.

El rango de los números de secuencia permitidos para los paquetes transmitidos pero todavía no reconocidos puede visualizarse como una ventana de tamaño N. Esta ventana se desplaza hacia adelante a medida que el protocolo opera.
Por esta razón, N suele denominarse tamaño de ventana y el propio protocolo GBN se dice que es un **protocolo de ventana deslizante.**

El emisor del protocolo GBN tiene que responder a:
- Invocación desde la capa superior
- Recepción de un mensaje de reconocimiento ACK
- Un suceso de fin de temporizador

El receptor descarta los paquetes que no están en orden y envía un mensaje de reconocimiento para el número de secuencia del último mensaje que recibió en orden. Por tanto, mientras el emisor tiene que mantener los límites inferior y superior de su ventana y la posición de `signumsec` dentro de esa ventana, el único fragmento de información que el receptor debe mantener es el número de secuencia del siguiente paquete en orden.

![[Pasted image 20221006201929.png]]

#### Emisor
![[Pasted image 20221006202108.png]]
#### Receptor
![[Pasted image 20221006202220.png]]

## Repetición Selectiva (SR)

Los protocolos de repetición selectiva evitan las retransmisiones innecesarias haciendo que el emisor únicamente retransmita aquellos paquetes que se sospeche que llegaron al receptor con error (es decir, que se perdieron o estaban corrompidos). Esta retransmisión individualizada y necesaria requerirá que el receptor confirme individualmente qué paquetes ha recibido correctamente.

El receptor de SR confirmará que un paquete se ha recibido correctamente tanto si se ha recibido en el orden correcto como si no. Los paquetes no recibidos en orden se almacenarán en el buffer hasta que se reciban los paquetes que faltan (es decir, los paquetes con números de secuencia menores), momento en el que un lote de paquetes puede entregarse en orden a la capa superior.

Las ventanas del emisor y el receptor no siempre coinciden. El tamaño de la ventana tiene que ser menor o igual que la mitad del tamaño del espacio de números de secuencia.

![[Pasted image 20221006202250.png]]


## Preguntas:
**Suponga que el tamaño del espacio de números de secuencia es S. ¿Cuál es la máxima ventana de emisor permitida para evitar confusiones del lado del receptor?**
	En el caso de GBN es suficiente con que la ventana tenga tamaño S-1. Esto se debe a que el receptor no tiene buffer y siempre espera por un único segmento. 
	En el caso de SR, el tamaño de la ventana tiene que ser menor o igual que la mitad del tamaño del espacio de números de secuencia. Esto se debe a que la ventana del emisor, de tamaño N, puede empezar, según los ACKs recibidos, en cualquier valor entre [k-N,k-1], siendo k el siguiente paquete a ser enviado. Si hubiera recibido ACKs hasta k-1, entonces la ventana sería [k,k+N-1]; por lo tanto “los números de secuencia ocupados” por el emisor son potencialmente 2N (k-N hasta k+N-1). Luego 2N debe ser menor o igual que S, el espacio de números de secuencia disponibles.

## Resumen

![[Pasted image 20221006202608.png]]