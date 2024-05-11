# Ejercicio 1
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210000.png]]
```


`1110 1`
`0110 0`
`1001 0`
`1101 1`

`1100 0`

¿Por qué es de longitud mínima el chechsum? Una agrupación 4x4 nos da 9 bits de redundancia. 2x8 u 8x2 nos da 11, 1x16 da 18.

# Ejercicio 2
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210046.png]]
```
Ni a palanca hago división binaria a mano

## Parte a)
If we divide 10011 into 1010101010 0000, we get 1011011100, with a remainder of R=0100. Note that, G=10011 is CRC-4-ITU standard.

## Parte b)
we get 1000110000, with a remainder of R=0000.

## Parte c)
we get 0101010101, with a remainder of R=1111.

## Parte d)
we get 1011010111, with a remainder of R=1001.

# Ejercicio 3
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210101.png]]
```

## Parte a)
Tasa media de transferencia = probabilidad de transmitir en un slot dado
$$ p_{trans}^a = p_{a}\times (1-p_{b})$$
La eficiencia es el porcentaje del ancho de banda utilizado sin colisiones.
Asumiendo que ambos tengan algo siempre para transmitir, la eficiencia se calculará como la probabilidad de que alguno de los dos transmita exitosamente

$$ ef = p_{a}\times (1-p_{b}) + p_{b}\times (1-p_{a})$$
## Parte b)
Vamos a calcular directamente cuál debe ser la relación entre $p_a$ y $p_b$ para que $p_{trans}^a$ = $2 \times p_{trans}^b$
$$ p_{a}\times (1-p_{b}) = 2 \times p_{b} \times (1-p_{a})$$
Con alguna cuenta:
$$ p_a= 2 - (p_a / p_b) $$

## Parte c)

$$ p_{trans}^a = 2p\times (1-p)^{N-1}$$
$$ p_{trans}^{otros} = p\times (1-p)^{N-2}\times (1-2p)$$

# Ejercicio 4
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210133.png]]
```

La tasa máxima se obtendrá cuando todos tengan al menos Q bits para transmitir cada vez que se les otorga un turno.

A lo largo del tiempo pasarán las siguientes cosas en un ciclo:
1. El nodo de sondeo averiguará quién quiere transmitir
2. El nodo de sondeo le indicará a cierto nodo (de los que solicitaron) que puede transmitir
3. El nodo transmitirá sus Q bits
4. Volver al inicio
Los pasos 1 y 2 tardan $d$ en conjunto y el paso 3 tarda $Q/R$.
Repitiendo esto para N nodos, tenemos un largo de ronda de $N \times (\frac{Q}{R}+ d)$.
Dado que la cantidad de bits "útiles" de una ronda es $Q \times N$, la tasa de transferencia máxima será:
$$\frac{NQ}{N \times \frac{Q}{R}+ d} = \frac{R}{1+\frac{d \times R}{Q}}$$

# Ejercicio 5
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210158.png]]
```

## Parte a y b)
![[Pasted image 20221116221605.png]]

## Parte c)
1. E determina con su tabla de forwarding que el next-hop es 192.168.3.002. Con su tabla de ARP, determina que debe empaquetar el datagrama ip en un frame ethernes con destino MAC 88...88.
3. Router 2 inspecciona el paquete, determina con su tabla de ruteo y de ARP que debe enviar hacia la LAN2 con ip destino 192.168.2.002 y MAC destino 33...33 y MAC origen 55...55
4. Se repite casi lo mismo en Router 1
5. El paquete llega a B y su capa de enlace lo entrega a la capa de red pues el MAC destino es él mismo.

## Parte d)
1. E determina con su tabla de forwarding que el next-hop es 192.168.3.002.
2. E no tiene una entrada en su tabla de ARP para la ip mencionada, debe consultarla vía una ARP Query. El query se emapqueta en un mensaje broadcast de capa de enlace (MAC FF...FF) y se envía. El router 2 recibe la query y la responde con un ARP response packet destinado a MAC 77...77.


# Ejercicio 6
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210223.png]]
```

## Parte a)
No. E está directamente conectado a F y por lo tanto no precisa del router 1. Se armará un paquete con los datos de cada interfaz conectada al dominio de colisión que comparten E y F.

## Parte b)
No, E no hace consulta ARP pues B no está en su misma LAN. Las direcciones de origen son las mismas que en la parte anterior. Ahora la IP de destino es la IP de B y la MAC de destino es la del router 1.

## Parte c)
Como el ARP Query es un mensaje de difusión de capa 2, difunde la trama en todas sus interfaces, menos la de entrada. Además usará la MAC de origen para identificar y recordar que en la interfaz de entrada se encuentra el HOST con la MAC de A.
R1 recibirá la trama con el ARP Query, lo procesará pero no lo difundirá por la subred 3. 
B no debe hacer nada excepto leer la dirección MAC de origen para saber la dirección MAC del solicitante ARP.
Cuando S1 reciba la trama de B, guardará en su tabla de forwarding que dicho host se encuentra en la interfaz de entrada. Como la dirección MAC de destino se accede por la misma interfaz por la que llegó la trama (esto lo sabe por haber guardado la MAC de A previamente), descartará la misma.

# Ejercicio 7
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210236.png]]
```

## Parte a)
No. E can check the subnet prefix of Host F’s IP address, and then learn that F is on the same LAN segment.
Thus, E will not send the packet to S2. 
Ethernet frame from E to F: 
	Source IP = E’s IP address 
	Destination IP = F’s IP address 
	Source MAC = E’s MAC address 
	Destination MAC = F’s MAC address

## Parte b)
Yes, because E would like to find B’s MAC address. In this case, E will send an ARP query packet with destination MAC address being the broadcast address. 
This query packet will be re-broadcast by switch 1, and eventually received by Host B. Ethernet frame from E to S2: 
	Source IP = E’s IP address
	Destination IP = B’s IP address 
	Source MAC = E’s MAC address 
	Destination MAC = broadcast MAC address: FF-FF-FF-FF-FF-FF.

## Parte c)
Switch S1 will broadcast the Ethernet frame via both its interfaces as the received ARP frame’s destination address is a broadcast address. And it learns that A resides on Subnet 1 which is connected to S1 at the interface connecting to Subnet 1. And, S1 will update its forwarding table to include an entry for Host A. 
Yes, router S2 also receives this ARP request message, and S2 will broadcast this query packet to all its interfaces. 
B won’t send ARP query message asking for A’s MAC address, as this address can be obtained from A’s query message. 
Once switch S1 receives B’s response message, it will add an entry for host B in its forwarding table, and then drop the received frame as destination host A is on the same interface as host B (i.e., A and B are on the same LAN segment).

# Ejercicio 8
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210250.png]]
```

t = 0
	A transmits. 
t = 576
	A would finish transmitting.
t=324
	In the worst case, B begins transmitting, which is the time right before the first bit of A’s frame arrives at B. 
t=324+325=649
	B 's first bit arrives at A . Because 649 > 576, **A finishes transmitting before it detects that B has transmitted**. So A incorrectly **thinks that its frame was successfully transmitted** without a collision.

# Ejercicio 9
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210304.png]]
```

t = 0
	A and B begin transmission.
t = 245
	A and B detect collision.
t = 293
	A and B finish transmitting jam signal.
t = 293+245 = 538  
	B 's last bit arrives at A.
	A detects an idle channel.
t = 538+96=634
	A starts transmitting.
t = 293+512 = 805 
	B returns to Step2.
	B must sense idle channel for 96 bit times before it transmits.
t = 634+245=879
	A’s transmission reaches B.

Because A's retransmission reaches B before B's scheduled retransmission time (805+96), B refrains from transmitting while A retransmits. Thus A and B do not collide. Thus the factor 512 appearing in the exponential backoff algorithm is sufficiently large

# Ejercicio 10
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210318.png]]
```

![[Pasted image 20221116233912.png]]

## Parte a) from A to left router
Source MAC address: 00-00-00-00-00-00 
Destination MAC address: 22-22-22-22-22-22
Source IP: 111.111.111.001
Destination IP: 133.333.333.003 
## Parte b) from the left router to the right router
Source MAC address: 33-33-33-33-33-33 
Destination MAC address: 55-55-55-55-55-55 
Source IP: 111.111.111.001 
Destination IP: 133.333.333.003 
## Parte c) from the right router to F
Source MAC address: 88-88-88-88-88-88 
Destination MAC address: 99-99-99-99-99-99
Source IP: 111.111.111.001 
Destination IP: 133.333.333.003

# Ejercicio 11
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210331.png]]
```

### From A to switch: 
Source MAC address: 00-00-00-00-00-00
Destination MAC address: 55-55-55-55-55-55 
Source IP: 111.111.111.001 
Destination IP: 133.333.333.003 

### From switch to right router: 
Source MAC address: 00-00-00-00-00-00 
Destination MAC address: 55-55-55-55-55-55 
Source IP: 111.111.111.001 
Destination IP: 133.333.333.003

### From right router to F: 
Source MAC address: 88-88-88-88-88-88 
Destination MAC address: 99-99-99-99-99-99
Source IP: 111.111.111.001 
Destination IP: 133.333.333.003

# Ejercicio 12
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210352.png]]
![[Pasted image 20221116210350.png]]
```

![[Pasted image 20221116234307.png]]
# Ejercicio 13
```ad-question
title: Letra
collapse: closed
![[Pasted image 20221116210403.png]]
```

The IP addresses for those three computers (from left to right) in EE department are: 111.111.1.1, 111.111.1.2, 111.111.1.3. The subnet mask is 111.111.1/24. 

The IP addresses for those three computers (from left to right) in CS department are: 111.111.2.1, 111.111.2.2, 111.111.2.3. The subnet mask is 111.111.2/24. 

The router’s interface card that connects to port 1 can be configured to contain two subinterface IP addresses: 111.111.1.0 and 111.111.2.0. The first one is for the subnet of EE department, and the second one is for the subnet of CS department. Each IP address is associated with a VLAN ID. Suppose 111.111.1.0 is associated with VLAN 11, and 111.111.2.0 is associated with VLAN 12. This means that each frame that comes from subnet 111.111.1/24 will be added an 802.1q tag with VLAN ID 11, and each frame that comes from 111.111.2/24 will be added an 802.1q tag with VLAN ID 12. 

Suppose that host A in EE department with IP address 111.111.1.1 would like to send an IP datagram to host B (111.111.2.1) in CS department. Host A first encapsulates the IP datagram (destined to 111.111.2.1) into a frame with a destination MAC address equal to the MAC address of the router’s interface card that connects to port 1 of the switch. Once the router receives the frame, then it passes it up to IP layer, which decides that the IP datagram should be forwarded to subnet 111.111.2/24 via sub-interface 111.111.2.0. Then the router encapsulates the IP datagram into a frame and sends it to port 1. Note that this frame has an 802.1q tag VLAN ID 12. Once the switch receives the frame port 1, it knows that this frame is destined to VLAN with ID 12, so the switch will send the frame to Host B which is in CS department. Once Host B receives this frame, it will remove the 802.1q tag.