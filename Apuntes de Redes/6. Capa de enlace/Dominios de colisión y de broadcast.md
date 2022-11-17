
### Dominio de Colisión
Se conoce como dominio de colisión al espacio físico con un ancho de banda compartido por un conjunto de dispositivos. En el caso que dos de esos dispositivos quieran transmitir al mismo tiempo, existe la posibilidad de que sus mensajes colisionen el espacio compartido y, o bien acaben convertidos en una amalgama de bits o bien no se pueda asegurar que al receptor le ha llegado el mensaje, de ahí el término colisión. Para resolverlo, Ethernet implementa CSMA/CD (Carrier dense multiple access with collision detection). 
La buena práctica en redes Ethernet consiste en mantener los dominios de colisión pequeños, es decir, con pocos dispositivos. Si lo piensas tiene todo el sentido del mundo; cuantos menos nodos compartan un espacio físico menor será la probabilidad de que transmitan a la vez y surja una colisión. 
Cuantas más colisiones, peor rendimiento de la Red. Este se expresa tal que así: 
Rendimiento = $(1-(Colisiones/Paquetes Totales))*100$

### Dominio de Broadcast
El dominio de broadcast es la división lógica de la red dentro de la cual los dispositivos envían mensajes de broadcast. Dos dispositivos dentro del dominio de difusión comparten puerta de enlace (gateway), dirección de subred y pueden transmitir a otro dispositivo dentro del dominio sin precisar encaminamiento; es decir, se encuentran en la misma LAN. 
Los dominios broadcast o de difusión están delimitados por routers.

### ¿Cómo actúan los dispositivos de red dividiendo los dominios de colisión y difusión?
- Los **hubs** o concentradores extienden el dominio de colisión ya que reenvian todos los mensajes que reciben de un dispositivo a los otros dispositivos conectados. Todos los elementos conectados al mismo hub (aunque estén en diferentes puertos) tienen el mismo dominio de colisión y dominio de broadcast.
- Los **switches** o conmutadores segmentan los dominios de colisión, pero expanden el dominio de difusión. Es decir, el alcance de un mensaje broadcast no es limitado por un switch (No obstante, sí limitan su alcance en el caso de las VLAN).
- Los **routers** también segmentan los dominios de colisión, pero además también lo hacen con los de difusión (un mensaje broadcast es limitado por el router y no sale de la LAN en la que se encuentra).

