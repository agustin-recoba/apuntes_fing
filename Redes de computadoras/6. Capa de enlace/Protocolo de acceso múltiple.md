Un **enlace punto a punto** está compuesto por un único emisor en un extremo del enlace y un único receptor en el otro extremo. Un **enlace de difusión** (o enlace de broadcast), puede tener múltiples nodos emisores y receptores, todos conectados al mismo y único canal de difusión compartido.

```ad-example
title: Ejemplos de enlaces de broadcast
collapse: closed
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

### Protocolos de particionamiento del canal

#### Multiplexación por división en el tiempo (TDM o TDMA)
Se divide el tiempo en marcos temporales y luego subdivide cada marco temporal en N particiones de tiempo. 
Cada partición se le asigna a cada uno de lo N nodos.

```ad-example
title: Ejemplo
collapse: closed
Una LAN con 6 estaciones, 1,3,4 tienen paquetes, 2,5,6 quedan ociosos:

![[Pasted image 20221116130645.png]]
```

#### Multiplexación por división de frecuencia (FDM)
Divide el canal de R bps en diferentes frecuencias (de ancho de banda R/N) y asigna cada frecuencia a cada uno de los N nodos.

```ad-example
title: Ejemplo
collapse: closed
LAN de 6 estaciones, 1,3,4 tienen paquete, las bandas de frecuencia 2,5,6 quedan ociosas:
![[Pasted image 20221116130747.png]]
```

#### Acceso múltiple por división de código (CDMA)
Asigna un código diferente a cada nodo. Cada nodo utiliza su código único para codificar los bits de datos a enviar. Se puede llegar a que los distintos nodos pueden transmitir simultáneamente y conseguir que sus respectivos receptores decodifiquen correctamente los bits de datos codificados por el emisor aunque haya interferencias provocadas por las transmisiones realizadas por los otros nodos.

### Protocolos de acceso aleatorio
Cada nodo transmisor transmite siempre a la máxima velocidad del canal, que es R bps. 
Cuando se produce una colisión, cada uno de los nodos implicados en la colisión retransmite repetidamente su trama (es decir, su paquete) hasta que la trama consiga pasar sin sufrir colisiones. Cuando esto sucede, cada nodo elige un retardo aleatorio independiente para retransmitir la trama.

Algunos ejemplos de estos protocolos son: 
- Slotted ALOHA
- ALOHA
- CSMA, CSMA/CD, CSMA/CA

#### ALOHA con particiones
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
collapse: closed
Los nodos 1, 2 y 3 colisionan en el primer slot. El nodo 2 finalmente tiene éxito en el cuarto slot, el nodo 1 en el octavo slot y el nodo 3 en el noveno slot.
![[Pasted image 20221116131244.png]]
```

El protocolo es **altamente descentralizado**, porque cada nodo detecta las colisiones y decide de forma independiente cuándo debe retransmitir.

```ad-important
title: Particiones con éxito y eficiencia
collapse: closed
Particiones en las que hay exactamente un nodo transmitiendo.

La eficiencia de un protocolo de acceso múltiple con particiones se define como la fracción (calculada a largo plazo) de particiones con éxito cuando existe un gran número de nodos activos, cada uno de los cuales tiene siempre una gran cantidad de tramas que enviar.
```

##### Pros, contras y eficiencia:
###### Pros:
- Un único nodo activo puede transmitir continuamente a la tasa total del canal.
- Altamente descentralizado, ya que solo los slots en los nodos tienen que ser sincronizados.
- Es simple.
###### Contras:
- Colisiones, desperdiciando slots.
- Slots ociosos.
- Los nodos tienen que ser capaces de detectar colisiones en un tiempo menor al que se transmite un paquete.
- Sincronización por reloj.
###### Eficiencia
- Supongamos que **$N$ nodos** con varios frames para enviar, cada un transmite en el slot con probabilidad $p$.
- La probabilidad de que un nodo tenga éxito en un slot es: $p(1-p)^{N-1}$
- La probabilidad de que algún nodo tenga éxito es: $Np(1-p)^{N-1}$
- La máxima eficiencia: encontrar $p^*$ que maximice $Np(1-p)^{N-1}$
- Para muchos nodos, tomar el limite de $Np^*(1-p^*)^{N-1}$ con $N$ tendiendo a infinito da que la máxima eficiencia es $1/e = 0.37$.
- Es decir que, en el mejor caso, el canal es usado para transmisión útil el 37% del tiempo.


#### ALOHA (puro)
Cuando llega una trama, el nodo transmite inmediatamente la trama en su totalidad hacia el canal de difusión. Si una trama transmitida experimenta una colisión con una o más transmisiones de otros nodos, el nodo (después de transmitir completamente la trama que ha sufrido la colisión) retransmitirá la trama de forma inmediata con una probabilidad $p$.
En caso contrario, el nodo esperará durante un tiempo equivalente al tiempo total de retransmisión de una trama. Después de esta espera, transmitirá la trama con probabilidad $p$, o esperará (permaneciendo inactivo) durante otro periodo de tiempo igual al tiempo de transmisión de una trama con una probabilidad  $1 – p$.

```ad-example
title: Ejemplo
collapse: closed
El frame enviado en $t_0$ colisiona con otros frames enviados entre $[𝑡_0 − 1,𝑡_0 + 1]$.

![[Pasted image 20221116132602.png]]
```


La máxima eficiencia del protocolo ALOHA puro es sólo de $1/(2e)$, que es exactamente la mitad que la del ALOHA con particiones.

```ad-todo
title: Calculo de la eficiencia
collapse: closed
![[Pasted image 20221116132729.png]]
```


#### CSMA (Carrier Sense Multiple Access)
- “Escuchar antes de hablar” (sondeo de portadora o **"carrier sensing"**):
	Cada nodo escucha el canal antes de transmitir. Si actualmente se está transmitiendo una trama de otro nodo por el canal, el nodo esperará un intervalo de tiempo aleatorio y luego volverá a sondear para ver si existe portadora en el canal.
- “Si alguien comienza a hablar al mismo tiempo, hay que dejar de hablar” (detección de colisiones o **"collision detection"**): 
	Si detecta que otro nodo está transmitiendo una trama que interfiere la suya, dejará de transmitir y empleará algún tipo de protocolo para determinar cuándo debe volver a intentar transmitir de nuevo.

![[Pasted image 20221116132854.png]]

Cuanto mayor sea el **retardo de propagación** (el tiempo que una señal tarda en propagarse de uno de los nodos a otro), mayor será la probabilidad de que un nodo que efectúe el sondeo de portadora no sea capaz detectar una transmisión que ya ha comenzado en otro nodo de la red.
Cuando un nodo realiza una detección de colisiones, deja de transmitir en cuanto detecta que se ha producido una colisión.
Que ocurra una colisión implica que el tiempo total de transmisión del paquete fue desperdiciado.
Hay que notar el rol de la distancia y del retraso de propagación a la hora de determinar la probabilidad de colisión. Cuanto más largo es el retraso de propagación, más grande es la chance de que un nodo carrier-sensing aún no tenga la capacidad de sentir una transmisión que ya ha comenzado en algún otro nodo de la red.

#### CSMA/CD (Carrier Sense Multiple Access / Collision Detection)
El carrier sensing en este caso es igual al de CSMA. Las colisiones son detectadas dentro de un período corto de tiempo, y las **transmisiones que coinciden son abortadas**, reduciendo el desperdicio del canal. 
La detección de colisiones es simple en redes cableadas LAN, mediante la medida de la intensidad de la señal y comparando las señales recibidas y transmitidas. 
Es difícil en LANs inalámbricas, ya que la intensidad de señal recibida se ve abrumada por la intensidad de transmisión local.

![[Pasted image 20221116133102.png]]

### Protocolo de toma de turnos
#### Protocolo de sondeo (polling)
Este protocolo requiere que se designe a uno de los nodos como nodo maestro. El nodo maestro sondea a cada uno de los otros nodos a la manera de turno rotatorio (round robin).
Desventajas: 
- Introduce un retardo de sondeo: el intervalo de tiempo requerido para indicarle a un nodo que puede transmitir. 
- Si el nodo maestro falla, entonces todo el canal dejará de estar operativo.
- Uso del canal perdido al sondear

![[Pasted image 20221116134521.png]]

#### Protocolo de paso de testigo
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

