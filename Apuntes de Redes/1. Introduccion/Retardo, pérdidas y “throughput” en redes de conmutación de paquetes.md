Un paquete puede llegar y encontrarse con que la cola está llena. Si no hay lugar para almacenar un paquete más, el router lo elimina, es decir, el paquete se pierde. El número de paquetes perdidos aumenta cuando la intensidad de tráfico aumenta.

## Cola de Paquetes en el Buffer del Router 
Los paquetes llegan con determinada tasa de arribo para ser enlazados, pero dicha tasa puede superar la capacidad de enlace, por lo que los paquetes deben esperar en una cola a que sea su turno.
Dado que la cola (buffer) tiene capacidad finita, cuando un paquete entrante se encuentra con la cola completa, este se pierde. Sin embargo, es posible que el paquete perdido se retransmitido por el nodo anterior o por el End System fuente.

![[Pasted image 20221004232856.png|500]]

## Tipos de retardo

```ad-note
title: Retardo de procesamiento ( $d_{proc}$ )
collapse: closed
Es el tiempo requerido para examinar la cabecera del paquete y determinar el enlace de salida, por eso depende del tamaño del cabezal. También incluye el tiempo necesario para comprobar los errores de bits (chequeo de paridad CRC).
Orden: _microsegundos_.
```

``````ad-note
title: Retardo de cola ($d_{cola}$)
collapse: closed

Generado por paquetes que esperan en la cola para ser transmitidos en un enlace, depende del número de paquetes que hayan llegado antes a la cola, del perfil del tráfico generado (si tiene ráfagas o no) y de la presencia de otros flujos que compartan las mismas colas. Por eso se dice que no es constante.
Orden: microsegundos a milisegundos.

```ad-question
title: ¿De qué depende que en algunos casos el retardo de cola sea grande y que en otros sea insignificante?
collapse: closed

La respuesta a esta pregunta depende de la velocidad a la que llega el tráfico a la cola, de la velocidad de transmisión del enlace y de la naturaleza del tráfico entrante, es decir, de si el tráfico llega periódicamente o en ráfagas.
```

![[Pasted image 20221004233049.png|500]]

``````

```ad-note
title: Retardo de transmisión ( $d_{trans}$ )
collapse: closed
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
collapse: closed
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
collapse: closed

![[Pasted image 20221004233001.png]]
```


## Rendimiento (throughput)

El **throughput** es la tasa (bits/unidad de tiempo) a la cual los bits son transferidos entre el emisor y el receptor. Puede ser instantáneo, que es la tasa a un punto dado del tiempo; o promedio, que es la tasa a lo largo de un período de tiempo.

```ad-important
title: Escenario de Internet

![[Pasted image 20221004233357.png|300]]

Se tiene un end-end throughput por conexión: `min(Rc,Rs,R/10)`. En la práctica Rc o Rs generalmente es un cuello de botella.
```
