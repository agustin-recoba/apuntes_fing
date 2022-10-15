## Principios de un servicio de transferencia de datos fiable.

La abstracción del servicio proporcionada a las entidades de la capa superior es la de un canal fiable a través del cual se pueden transferir datos. Disponiendo de un canal fiable, ninguno de los bits de datos transferido está corrompido ni se pierde y todos se entregan en el orden en que fueron enviados. Es la responsabilidad de un protocolo de transferencia de datos fiable implementar esta abstracción del servicio. Tarea complicada por el hecho de que la capa que hay por debajo del protocolo de transferencia de datos puede ser no fiable.

El lado emisor del protocolo de transferencia de datos será invocado desde la capa superior mediante una llamada a `rdt_enviar()`, que pasará los datos que haya que entregar a la capa superior en el lado receptor. En el lado receptor, `rdt_recibir()`, será llamado cuando llegue un paquete desde el lado receptor del canal.
Cuando el protocolo RDT desea suministrar datos a la capa superior, lo hará llamando a `entregar_datos()`.

## Transferencia de datos fiable sobre un canal totalmente fiable: rdt1.0

El canal subyacente es **perfectamente confiable**, sin errores en bits y sin pérdida de paquetes.
Separamos en dos máquinas de estado finitas, una para el emisor y la otra para el receptor. Por un lado, el emisor envía datos al canal subyacente, mientras que el receptor lee los datos de dicho canal.

```ad-info
title: Maquinas de estado
collapse: closed

![[Pasted image 20221006195649.png]]
```

## Transferencia de datos fiable sobre un canal con errores de bit: rdt2.0

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
collapse: closed
![[Pasted image 20221006200255.png]]
```

Cuando el emisor está en el estado “Esperar ACK o NAK”, no puede obtener más datos de la capa superior. Debido a esto, a estos protocolos se los conoce como protocolos de **parada y espera** (_stop-and-wait_ protocol).

```ad-warning
title: Problema
Si un paquete ACK o NAK está corrompido, **el emisor no tiene forma de saber si el receptor ha recibido o no correctamente el último fragmento de datos transmitido**.
```

## Transferencia de datos fiable sobre un canal con errores de bit: rdt2.1

Una solución sencilla consiste en añadir un nuevo campo al paquete de datos, y hacer que el emisor numere sus paquetes de datos colocando un **número de secuencia** en este campo.

```ad-info
title: Maquinas de estado
collapse: closed
![[Pasted image 20221006200413.png|600]]

![[Pasted image 20221006200432.png|600]]
```

## Transferencia de datos fiable sobre un canal con errores de bit: rdt2.2

Tiene la misma funcionalidad que el rdt 2.1, pero **utilizando únicamente ACKs**. En lugar de un NAK, el receptor envía un ACK para el último para el último paquete recibido correctamente, por lo que se debe indicar explícitamente el número de secuencia del paquete al cual corresponde el ACK. Un ACK duplicado en el emisor resulta en la misma acción de un NAK, retransmitir el paquete actual.

```ad-info
title: Maquinas de estado
collapse: closed

![[Pasted image 20221006200618.png]]
```

Reetransmisión cuando:
- ACK con nro_sec distinto al esperado
- Paquete recibido corrupto (no se puede saber si era ACK 0 o 1)


## Transferencia de datos fiable sobre un canal con pérdidas y errores de bit: rdt3.0

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
collapse: closed

![[Pasted image 20221006200804.png|600]]

![[Pasted image 20221006200824.png|600]]
```

```ad-example
title: Ejemplos de corridas
collapse: open
![[Pasted image 20221006200909.png|600]]
```
