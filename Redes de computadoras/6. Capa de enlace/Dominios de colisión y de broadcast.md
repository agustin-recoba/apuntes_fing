
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

```ad-info
title: Problemas con dominios muy grandes
En una red moderna, generalmente los dispositivos de red se conectan a switches, y por lo tanto el dominio de colisiones no coincide con el dominio de broadcast; de no ser así, la cantidad de hosts provocaría que las colisiones hicieran casi imposible de utilizar la red. 

De todas formas, con switches, todos los mensajes de broadcast igualmente se difunden en toda la subred y afectan a todos los equipos, demandando tiempo de CPU para analizar paquetes que mayoritariamente serán descartados porque son dirigidos hacia otro dispositivo. Esta carga, normalmente atendida por el sistema operativo y no por la tarjeta de red en PCs de escritorio, interrumpe constantemente el procesamiento, afecta la localidad de la ejecución y quita capacidad de procesamiento “productiva” a los hosts. 

Otro problema que presenta una red con tantos dispositivos está asociado a las tablas de ARP que deben mantener los hosts, así como los mapeos de direcciones MAC a puertos en los switches. Tablas tan “abultadas” representan overhead en las transmisiones. 

Otro aspecto importante puede asociarse a la seguridad, pues, cualquier error en la configuración de la red, puede tener impacto en todos los equipos (p.e. un equipo que se configure equívocamente con la dirección del router). Cada vez que haya que resolver un problema, la causa puede provenir de la totalidad de la red, y no de sectores.
```
