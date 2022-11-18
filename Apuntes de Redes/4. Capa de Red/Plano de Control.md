# Algoritmos de enrutamiento

Enrutamiento: determinar buenas rutas desde los emisores hasta los receptores a través de la red de routers.
Dado un conjunto de routers, con enlaces que conectan dichos routers, un algoritmo de enrutamiento determina una “buena” ruta desde el router de origen al router de destino.
Normalmente, una buena ruta es aquella que tiene el coste mínimo.
- Un **algoritmo de enrutamiento** global calcula la ruta de coste mínimo entre un origen y un destino utilizando el conocimiento global y completo acerca de la red.
- En un **algoritmo de enrutamiento descentralizado** , el cálculo de la ruta de coste mínimo se realiza de manera **iterativa** y **distribuida**. Ningún nodo tiene toda la información acerca del coste de todos los enlaces de la red. En lugar de ello, al principio, cada nodo sólo conoce los costes de sus propios enlaces directamente conectados.
- En los **algoritmos de enrutamiento estático**, las rutas cambian muy lentamente con el tiempo, con frecuencia como resultado de una intervención humana.
- Los **algoritmos de enrutamiento dinámico** modifican los caminos de enrutamiento a medida que la carga de tráfico o la topología de la red cambian. Un algoritmo dinámico puede ejecutarse periódicamente o como respuesta directa a cambios en la topología o en el coste de los enlaces.
- En un **algoritmo sensible a la carga**, los costes de enlace varían de forma dinámica para reflejar el nivel actual de congestión en el enlace subyacente. Si se asocia un coste alto con un enlace que actualmente esté congestionado.

## Algoritmo de enrutamiento de estado de enlaces (LS)

En un algoritmo de estado de enlaces, la topología de la red y el coste de todos los enlaces son conocidos; es decir, están disponibles como entradas para el algoritmo LS. En la práctica, esto se consigue haciendo que cada nodo difunda paquetes del estado de los enlaces a todos los demás nodos de la red, con cada paquete de estado de enlace conteniendo las identidades y los costes de sus enlaces conectados.

El resultado de difundir la información de los nodos es que **todos los nodos tienen una visión completa e idéntica de la red**. Cada nodo puede entonces ejecutar el algoritmo LS y calcular el mismo conjunto de rutas de coste mínimo que cualquier otro nodo. 

El algoritmo de Dijkstra calcula la ruta de coste mínimo desde un nodo (el origen, al que denominaremos u) hasta todos los demás nodos de la red.

```python
# inicialización:
N’ = {u}
for todo nodo v
	if v es un vecino de u:
		D(v) = c(u,v)
	else:
		D(v) = ∞
do
	encontrar w no perteneciente a N’ tal que D(w) sea un mínimo
	agregar w a N’
	actualizar D(v) para cada vecino v de w, que no pertenezca a N’:
		D(v) = min( D(v), D(w) + c(w,v) )
	# el nuevo coste a v es o bien el antiguo coste a v o el coste de
	# la ruta de coste mínimo a w más el coste desde w a v
until N’ = N
```

Cuando el algoritmo LS termina, tenemos para cada nodo su predecesor a lo largo de la ruta de coste mínimo desde el nodo de origen. Para cada predecesor, también tenemos su predecesor, y así de este modo podemos construir la ruta completa desde el origen a todos los destinos.
El número total de nodos a través de los que tenemos que buscar teniendo en cuenta todas las iteraciones es igual a $\frac{n(n + 1)}{2}$ y, por tanto, decimos que la implementación anterior del algoritmo LS tiene, en el caso peor, una complejidad de orden n al cuadrado: $O(n^2)$.
Una implementación más eficiente tiene $O(n \times log(n))$.

```ad-example
title: Ejemplo
collapse: closed
![[Pasted image 20221118101737.png]]
```

## Algoritmo de enrutamiento por vector de distancias (DV)

El algoritmo por vector de distancias (DV) es iterativo, asíncrono y distribuido. 
- Es **distribuido** en el sentido de que cada nodo recibe información de uno o más de sus vecinos directamente conectados, realiza un cálculo y luego distribuye los resultados de su cálculo de vuelta a sus vecinos. 
- Es **iterativo** porque este proceso continúa hasta que no hay disponible más información para ser intercambiada entre los vecinos.
- El algoritmo es **asíncrono**, en el sentido de que no requiere que todos los nodos operen sincronizados entre sí.

```ad-important
title: Ecuación de Bellman-Ford
<br />

$$d_x (y) = min_{v} \{c(x, v) + d_v(y)\}$$

<br />

Donde $d_x (y)$ representa la distancia mínima de $x$ a $y$, $c(x, v)$ indica el costo físico del link que conecta el nodo $x$ con el $v$, y $d_v(y)$ es la distancia mínima en la cual el nodo $v$ puede llegar al nodo $y$. En definitiva, la distancia se calcula como la distancia hacia el nodo 𝑣 que presenta la distancia mínima al nodo buscado, y el costo de llegar a ese nodo $v$.
```

En el algoritmo, de vez en cuando, cada nodo envía una copia de su vector de distancias a cada uno de sus vecinos. Cuando un nodo x recibe un nuevo vector de distancias procedente de cualquiera de sus vecinos v, guarda dicho vector de v y luego utiliza la ecuación de Bellman-Ford para actualizar su propio vector de distancias.
Si el vector de distancias del nodo x ha cambiado como resultado de este paso de actualización, entonces el nodo x enviará su vector de distancias actualizado a cada uno de sus vecinos, lo que puede a su vez actualizar sus propios vectores distancia.

```
1  Inicialización: 
2      for todos los destinos y vecinos de x: 
3          Dx(y) = c(x,y) 
4      for cada vecino w de x 
5          Dw(y) = ∞ para todos los destinos y vecinos de x
6      for cada vecino w de x 
7          enviar vector de distancias Dx = [Dx(y): y vecino de x] a w 
8 
9  bucle 
10     wait (hasta ver una variación en el coste de enlace de un vecino w 
11             o hasta recibir un vector de distancias de algún vecino w) 
12 
13     for cada y conocido de x: // pueden haber tanto conocidos vecinos 
14                              // como conocidos no vecinos 
15         Dx(y) = minv vecino de x{c(x,v) + Dv(y)} 
16  
17     if Dx(y) se modifica para cualquier y conocido de x 
18         enviar vector de distancia Dx = [Dx(y): y conocido de x] a 
19         todos los vecinos 
20 
21  forever
```

El proceso de recibir vectores distancia actualizados de los vecinos, recalcular las entradas de la tabla de enrutamiento e informar a los vecinos de los costes modificados de la ruta de coste mínimo hacia un destino continúa hasta que ya no se envían mensajes de actualización. **El algoritmo se encuentra en estado de reposo.**

### Conteo al infinito
Si bien el algoritmo funciona bien con costos de link fijos, cabe destacar lo que sucede cuando el costo de un link cambia en la red. Para ello, se debe considerar dos casos diferentes: cuando un link disminuye, y cuando uno de ellos aumenta. Para ejemplificar lo que sucede, se presentan las siguientes redes:
![[Pasted image 20221118103043.png]]

En esta oportunidad, se realiza un cambio de costo disminuyendo el link que conecta x e y.

En el tiempo $t_0$, $y$ detecta el cambio de link y envía dicho cambio a sus vecinos. En $t_1$, $z$ recibe el vector de $y$ y actualiza su vector: $D_z(x)= min\{1 + 1, 50 + 0\} = 2$. En $t_2$ , $y$ recibe el vector de $z$ y actualiza su vector, pero este permanece incambiado, por lo que no envía más mensajes a sus vecinos. En definitiva, se requieren solamente dos iteraciones para que las tablas converjan.

Esta vez, se aumenta el link que conecta x e y a 60. 
En tiempo $t_0$, y detecta el cambio de link, y computa un nuevo mínimo $D_y(x)= min\{60+0, 1+5\} = 6$. Claramente, el costo computado es erróneo (ya que el costo del camino mínimo entre x e y es de 51), pero con la información manejada por el nodo no se puede determinar el costo correcto. Se envía a sus vecinos el vector costos con el nuevo costo determinado. En $t_2$, z recibe el vector de y, y computa lo siguiente: $D_y(x)= min\{50+0, 6+1\} = 7$ siendo este costo también incorrecto. Luego envía su vector de distancia actualizado. 
Este ciclo de cómputos incorrectos continuará aumentando el valor en una unidad en cada nodo hasta que z determine el costo como $D_z(x)= min\{50+0, 50+1\}$, quedándose así con el primer término, lo que implica que rutea a x directamente por el link que los conecta. Este proceso durará **44 iteraciones**, que es lo que demora el costo mínimo en llegar de 6 a 50.


### Reversa envenenada

Para solucionar este problema, se utiliza la técnica conocida como reversa envenenada. Supóngase que un nodo x debe enviar su vector de distancia a sus vecinos. Supóngase también que el próximo nodo al que se debe enviar el vector es al nodo y. Antes de realizar el envío, el nodo x modificará las entradas del vector de distancia correspondientes a los nodos que alcanza mediante y por el valor “infinito”. 
En otros términos, si $next\_hop_x(z) = y ⟹ D_x(z)=\infty$. De esta manera, el nodo y creerá que no existe un camino de él hacia z que pase por x y no intentará enviar el paquete destinado a z por esa ruta.

##### Comparación LS y DV

- **Complejidad del mensaje**: LS requiere que cada nodo conozca el coste de cada enlace de la red. Además, cuando el coste del enlace cambia, el nuevo coste tiene que enviarse a todos los nodos. El algoritmo de vector de distancias (DV) requiere intercambios de mensajes entre los vecinos directamente conectados en cada iteración. Cuando los costos de los enlaces cambian, el algoritmo de vector de distancias propagara los resultados del coste del enlace que ha cambiado solo si el nuevo coste de enlace da lugar a una ruta de coste mínimo distinta para no de los nodos conectados a dicho enlace.
- **Velocidad de convergencia**: la implementación del algoritmo de estados de enlaces es un algoritmo $O(N^2)$ que requiera enviar $O(N*E)$ mensajes. El algoritmo de vector de distancias puede converger lentamente y pueden aparecer bucles de enrutamiento mientras está convergiendo. Este algoritmo también sufre el problema de la cuenta hasta infinito.
- **Robustez**: LS proporcionando un mayor grado de robustez. Con el algoritmo de vector de distancias, un nodo puede anunciar rutas de coste mínimo incorrectas a cualquiera o a todos los destinos. Con el algoritmo de vector de distancias, un cálculo de nodo incorrecto puede difundirse a través de la red.

## Enrutamiento jerárquico

**Sistemas autónomos (AS)**, formados por un grupo de routers que normalmente se encuentran bajo el mismo control administrativo. Los routers de un mismo AS ejecutan todos ellos el mismo algoritmo de enrutamiento.
**Protocolo de enrutamiento interno del sistema autónomo:** el algoritmo de enrutamiento que se ejecuta en el sistema. 
**Routers gateways:** routers de un sistema autónomo que tendrán la tarea adicional de ser responsables del reenvio de paquetes a los destinos externos al AS.

Un protocolo de enrutamiento interno cumple la tarea de obtener información de alcanzabilidad de los AS vecinos y propagar dicha información de alcanzabilidad a todos los routers internos del AS.
Cuando un sistema autónomo obtiene información acerca de un destino de un AS vecino, puede anunciar esta información de enrutamiento a algunos de sus otros sistemas autónomos vecinos.

![[Pasted image 20221118105810.png|400]]

```ad-example
title: Método de la patata caliente
Un método, que es el que se suele utilizar en la práctica, consistiría en utilizar el enrutamiento de la **patata caliente**. Con este tipo de enrutamiento, el sistema autónomo suelta el paquete tan rápido como sea posible (de la forma más barata posible). 

Para hacer esto, el router envía el paquete al router de pasarela que tiene el coste más pequeño de entre todos los routers de pasarela que cuentan con una ruta hasta ese destino.
```

```ad-example
title: Definiendo una entrada en la tabla de forwarding de un router
collapse: open
Supongamos que AS1 aprende por medio de un protocolo inter-AS que la subred 𝑋 es alcanzable a través de AS3, por el Gateway 1c, pero no vía AS2; luego el protocolo inter-AS propaga esa información a todos los routers internos. Luego el router 1d determina por el algoritmo de ruteo intra-AS que la interfaz 𝐼 está en el camino de costo mínimo, por lo que agrega a la tabla de forwarding la entrada (𝑋,𝐼).

![[Pasted image 20221118110145.png|500]]

Ahora suponemos que AS1 aprende por el protocolo inter-AS que la subred 𝑋 es alcanzable tanto por AS3 como por AS2, entonces, para configurar la tabla de forwarding, el router 1d debe determinar por qué Gateway redirigir los paquetes para el destino 𝑋, lo cual es un trabajo para el protocolo de ruteo inter-AS.

![[Pasted image 20221118110225.png|500]]
```


## Enrutamiento en Internet

### INTRA-AS ROUTING (IGP)
El protocolo Intra-AS es utilizado para determinar cómo es ejecutado el ruteo dentro del sistema autónomo. Son conocidos también son conocidos como **Interior Gateway Protocols (IGP)**.

Los más utilizados son:
- **RIP**: Routing Information Protocol
- **OSPF**: Open Shortest Path First
- **IGRP**: Interior Gateway Routing Protocol

### Routing Information Protocol (RIP)

Los protocolos de enrutamiento internos de los AS se conocen también como **protocolos de pasarela interior.**
RIP es un protocolo de **vector de distancias** que opera de una forma muy parecida al protocolo DV ideal. Utiliza como métrica de coste el recuento de saltos; es decir, cada enlace tiene un coste de 1. Fue diseñado para** redes pequeñas o medianas** y por esto establece que un camino dentro de la red tiene un máximo de 15 hops. De esta manera utiliza **16 como infinito**.

El vector de distancias para cualquier router es la estimación actual de la ruta más corta desde dicho router a las subredes del AS. En RIP, las actualizaciones de enrutamientos son intercambiadas entre los vecinos cada 30 segundos mediante un **mensaje de respuesta RIP.**

El mensaje de respuesta enviado por un router o un host contiene una lista de hasta 25 subredes de destino pertenecientes al sistema autónomo, así como la distancia desde el emisor a cada una de esas subredes. Los mensajes de respuesta se conocen como **anuncios RIP** .

Cada router mantiene una tabla RIP conocida como tabla de enrutamiento, esta tabla incluye tanto el vector de distancia del router como la tabla de reenvío del mismo.
Si un router no tienen noticias de su vecino al menos una vez cada 180 segundos, considera que ese vecino ya no es alcanzable; es decir, o bien ese vecino ha muerto o el enlace que le conectaba con el ha fallado. Si esto ocurre, RIP modifica su tabla de enrutamiento local, y luego propagara esta información enviando anuncios a sus routers vecinos. Los fallos de enlace se propagan rápidamente a la red completa, utilizando **reversa envenenada** para evitar ping-pong loops, con la distancia infinita igual a 16hops.

Un router también puede solicitar información de otros mediante un mensaje de solicitud RIP, acerca del coste a un destino dado. Esto se realiza mediante mensajes UDP en el puerto 520.

### OPEN SHORTEST PATH FIRST (OSPF)

Protocolo de **estado de enlaces** que utiliza la técnica de inundación de información de estados de los enlaces y el algoritmo de **cálculo de ruta de coste mínimo de Dijkstra.**

OSPF es un protocolo de enrutamiento **intradominio**, que permite el enrutamiento jerárquico, y lo hace **dividiendo un AS en zonas**.

Con OSPF, un router construye un mapa topológico completo del sistema autónomo entero, es decir un grafo. A continuación, el router ejecuta localmente el algoritmo de la ruta más corta de Dijkstra para determinar un árbol de rutas más cortas a todas las subredes, con él mismo como nodo raíz. 

El administrador de la red configura los costes de los enlaces individuales, además puede decidir hacer igual a 1 el coste de todos los enlaces, proporcionando un enrutamiento de número mínimo de saltos, o puede definir los pesos de los enlaces para que sea inversamente proporcionales a la capacidad de los mismos, con el fin de disuadir el tráfico a utilizar los enlaces con pequeño ancho de banda. OSPF no establece una política para definir el pesos de los enlaces, sino que proporciona mecanismos para determinar el enrutamiento de coste mínimo para el conjunto dado de pesos de los enlaces.

Con OSPF, un router difunde la información de enrutamiento a todos los demás routers del sistema autónomo, no solo a sus routers vecinos. esta información se difunde cuando se ha producido un cambio en el estado de un enlace, también difunde esta información en menos de 30 minutos, incluso aunque no haya cambiado el estado.
Lo anuncios OSPF están contenidos en **OSPF messages** que son transportados **directamente por IP**, siendo el número de protocolo de la capa superior para OSPF igual a 89 (header tipo de IP). Así, el protocolo tiene que implementar por sí mismo funcionalidades tales como la transferencia fiable de mensajes y la de envío de mensajes de difusión acerca del estados de los enlaces. 

OSPF comprueba que los enlaces están operativos mediante que el mensaje HELLO que se envía a un vecino conectado, y permite al router OSPF obtener de un vecino la base de datos de estado de los enlaces de toda la red.

Algunas de las funcionalidades avanzadas incluidas en OSPF son las siguientes:
  - Seguridad: 
	Los intercambios entre routers OSPF pueden ser autentificados.
    Con esto solo pueden participar en el protocolo OSPF los routers de confianza del sistema autónomo. Por defecto, los paquetes OSPF entre routers no son identificados y podrían ser alterados. Pueden configurarse dos tipos de autenticación: simple y MD5.
  - Varias rutas de igual coste:
	Cuando varias rutas de un destino tienen el mismo coste, OSPF permite utilizar varias rutas.
  - Soporte integrado para enrutamiento de unidifusión y por multidifusión: 
	OSP multidifusión añade extensiones simples a OSPF para proporcionar enrutamiento por multidifusión.
- Soporte para añadir una jerarquía dentro de un mismo dominio de enrutamiento.

#### OSPF jerárquico
Se tienen dos niveles de jerarquía, **área local** y **backbone**. Los advertisements de link-state solo ocurren en área local. Cada nodo tiene una topología detallada de áreas, solo sabe direcciones a redes en otras áreas.

![[Pasted image 20221118112110.png|500]]

Varios elementos: 
- Area border routers: resume las distancias a redes en su propia área y avisa a otros Area border routers.
- Backbone routers: corren el ruteo OSPF limitado al backbone.
- Boundary routers: conectan con otros AS.


### Enrutamiento entre sistemas autónomos: BGP

BGP es un protocolo de enrutamientos entre sistemas autónomos que proporciona a cada sistema autónomo mecanismos para:
- Obtener información acerca de la alcanzabilidad de las subredes de los sistemas autónomos vecinos
- Propagar la información de alcanzabilidada a todos los routers internos del sistema autónomo.
- Determinar buenas rutas de subredes, basándose en la información de alcanzabilidad y en la política del sistema autónomo.
Lo más importante es que BGP permite a cada subred anunciar su existencia al resto de Internet.

Para cada conexión TCP, los dos routers situados en los extremos de la conexión se denominan **pares BGP** y la conexión TCP junto con todos los mensajes BGP enviados a través de la conexión se denomina **sesión BGP.** Además, una sesión BGP que abarca dos sistemas autónomos se conoce como **sesión externa BGP** (eBGP) y una sesión BGP entre routers de un mismo sistema autónomo se conoce como **sesión interna BGP** (iBGP).

BGP permite que cada sistema autónomo aprenda qué destinos son alcanzables a través de sus sistemas autónomos vecinos. En BGP, los destinos no son hosts sino prefijos CIDR, representando cada prefijo una subred o una colección de subredes.

#### Atributos de ruta y rutas BGP

En BGP, un sistema autónomo se identifica mediante su número de sistema autónomo (**ASN, Autonomous System Number**) globalmente único.
Atributos BGP:
- **AS-PATH**: contiene los sistemas autónomos a través de los que ha pasado el anuncio del prefijo. Cuando se ha pasado un prefijo dentro de un sistema autónomo, el sistema añade su ASN al atributo AS-PATH. Los routers utilizan este atributo para impedir los bucles de anuncios.
- El siguiente salto (**NEXT HOP**) es la interfaz del router que inicia la secuencia de sistemas autónomos (AS-PATH).

Además, BGP incluye atributos que permiten a los routers asignar métricas de preferencia en las rutas, y un atributo que indica como el prefijo fue insertado en BGP en el AS de origen. 
Cuando un **Gateway router** recibe un aviso de ruta, utiliza su **import policy** para decidir si aceptarla o rechazarla, por ejemplo, sabiendo que nunca se debe hacer el ruteo por el ASxyz.

#### Selección de la ruta BGP

Un router puede aprender acerca de más de una ruta a cualquier prefijo, en cuyo caso tendrá que seleccionar una de las posibles rutas. Las entradas para este proceso de selección de ruta es el conjunto de todas las rutas que han sido aprendidas y aceptadas por el router. Si existen dos rutas con el mismo prefijo, entonces BGP invoca secuencialmente las siguientes reglas de eliminación hasta quedarse con una ruta:

1. Valor del atributo de preferencia local, que puede ser definido por el router, o aprendido desde otro router en el mismo AS. Esta política de decisión es llevada a cabo por el administrador de red del AS.
2. AS-PATH más corto
3. El router NEXT-HOP más cercano, utilizando el ruteo de la papa caliente.
4. Si todavía quedan rutas, entonces se aplican criterios adicionales.

Es importante observar que no se puede afirmar que la decisión garantiza un camino más corto en cantidad de hops de routers, porque se desconoce la información interna de cada AS. Un camino con AS-PATH más corto puede incluir ASs con muchos “hops” de routers internos, y puede ser más largo en término de routers que otro camino con AS-PATH más largo.

#### Mensajes BGP

Los mensajes BGP se intercambian usando TCP.
- **OPEN**: abre conexión TCP con “peer” y autentica al que envía
- **UPDATE**: publica nuevos caminos (o da de baja otros)
- **KEEPALIVE**: mantiene la conexión viva en ausencia de
- **UPDATES**; se usa también como ACK del OPEN
- **NOTIFICATION**: reporta errores en mensaje previo; también se usa para cerrar
- conexión

#### Política de ruteo en BGP:

![[Pasted image 20221118115118.png]]

- A, B, C son proveedores de red. 
- X, W, Y son clientes de los proveedores.
- X es dual-homed, ya que está asociado a dos redes. Por lo que X no quiere “rutear” desde B por X a C, de esta forma, X no avisara a B una ruta a C.
- A avisa un camino AW a B.
- B avisa un camino BAW a X.
- Así, surge la consulta de si B debe avisar del camino BAW a C:
	- No, ya que B no obtiene “ingresos” por hacer el ruteo CBAW ya que ni W ni C son clientes de B.
	- B quiere forzar a C a rutear por w a través de A. 
	- B quiere rutear solamente desde/hacia sus clientes.

### ¿Por qué diferentes ruteos Intra-AS e Inter-AS? 

#### Políticas:
- Inter-AS: el administrador quiere el control sobre como su tráfico es ruteado, es decir, quien rutea a través de su red.
- Intra-AS: un único administrador, por lo que no se necesitan políticas de decisión.

#### Escala:
- El ruteo jerárquico reduce el tamaño de la tabla.

#### Rendimiento:
- Intra-AS: puede enfocarse en el rendimiento.
- Inter-AS: las políticas deben dominar por sobre el rendimiento.

# Broadcast y multicasting

En **broadcast Routing**, la capa de red provee un servicio de entrega de paquetes enviados desde el nodo fuente hacia todos los nodos en la red. Por otro lado, **multicast Routing** permite a un único nodo enviar una copia de un paquete a un subconjunto de nodos en otra red.

## Algoritmos de Ruteo de Broadcast

Dados N nodos de destino, el nodo fuente realiza N copias del paquete, direcciona cada copia a un destino distinto, y transmite todas estas a los destinos utilizando unicast Routing. El principal problema de esta implementación es la ineficiencia, ya que, si el nodo fuente está conectado al resto de la red mediante un único enlace, entonces N copias del mismo paquete atravesaran ese único enlace.

![[Pasted image 20221118121112.png|500]]

Otro problema es cómo es obtenida la información de los receptores, ya que se asume que es conocida

### In-network duplication

Una forma de implementar el broadcast es utilizando **flooding**, que consiste en que el nodo fuente envía una copia del paquete a todos sus vecinos. Una vez que un nodo recibe un paquete de broadcast, duplica el paquete y lo reenvía a todos sus vecinos, exceptuando a aquel del cual recibió el paquete. Sin embargo, esta aproximación tiene problemas; por ejemplo, si el grafo tiene ciclos, las copias de los paquetes de broadcast estarán en el ciclo indefinidamente. Otro problema es cuando un nodo está conectado a más de dos nodos, este creará y enviará múltiples copias del paquete de broadcast, y cada uno creará una copia de sí mismo (en otro nodo con más de dos vecinos), generando así una **tormenta de broadcast**, lo cual termina en múltiples paquetes generados, que no son utilizados.

Para solucionar este problema se utiliza el concepto de flooding controlado, donde la clave es que un nodo reenvía un paquete de broadcast únicamente si aún no hizo broadcast de ese paquete antes. Para implementarlo existen distintas técnicas.

- **Por número de secuencia**: un nodo fuente agrega su dirección al paquete, además de un número de secuencia de broadcast en el paquete de broadcast, y envía el paquete a todos sus vecinos. Luego cada nodo mantiene una lista de las direcciones y números de secuencia de cada paquete de broadcast que ya ha recibido, duplicado y reenviado. Cuando este nodo recibe un paquete, chequea en el registro si tiene una entrada para esta dirección y número de secuencia, y en caso de que si, el paquete es ignorado. En caso de que no exista, se duplica y reenvía. 
- **Reverse Path Forwarding (RPF)**: Solamente se hace el forward de un paquete si este llegó del camino más corto entre el nodo y la fuente. Por ejemplo:
	![[Pasted image 20221118121250.png|300]]

### Broadcast por Spanning Tree:

En primer lugar, se construye un árbol de cubrimiento. Luego los nodos reenvían copias de los paquetes solamente a través del árbol de cubrimiento construido.

![[Pasted image 20221118121341.png]]

Para construir el árbol de cubrimiento, en primer lugar, se toma un nodo central. Luego cada nodo envía un mensaje unicast de join al nodo central. El mensaje será reenviado hasta que llega a un nodo que ya pertenece al árbol de cubrimiento.

![[Pasted image 20221118121401.png]]











## Multicast
La idea es encontrar un árbol o árboles conectando routers teniendo miembros de un grupo local de multicast.
- Tree: no todos los caminos entre routers son usados.
- Source-based: diferente árbol desde cada emisor a receptor.
- Shared-tree: el mismo árbol utilizado por todos los miembros del grupo.

![[Pasted image 20221118121455.png|500]]

### Aproximaciones para la construcción de árboles de multicast
- Source-based tree: un árbol por fuente.
	- Shortest Path trees.
	- Reverse Path Forwarding.
- Group-shared tree: el grupo usa un árbol.
	- Minimal Spanning (Steiner).
	- Center-based trees.

![[Pasted image 20221118121615.png]]
![[Pasted image 20221118121626.png]]
![[Pasted image 20221118121635.png]]
![[Pasted image 20221118121649.png|400]]