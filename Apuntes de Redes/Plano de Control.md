

### Algoritmos de enrutamiento

Enrutamiento: determinar buenas rutas desde los emisores hasta los receptores a través de
la red de routers.
Dado un conjunto de routers, con enlaces que conectan dichos routers, un algoritmo de
enrutamiento determina una “buena” ruta desde el router de origen al router de destino.
Normalmente, una buena ruta es aquella que tiene el coste mínimo.
- Un algoritmo de enrutamiento global calcula la ruta de coste mínimo entre un
origen y un destino utilizando el conocimiento global y completo acerca de la red.
- En un algoritmo de enrutamiento descentralizado , el cálculo de la ruta de coste
mínimo se realiza de manera iterativa y distribuida. Ningún nodo tiene toda la
información acerca del coste de todos los enlaces de la red. En lugar de ello, al
principio, cada nodo sólo conoce los costes de sus propios enlaces directamente
conectados.
- En los algoritmos de enrutamiento estático , las rutas cambian muy lentamente
con el tiempo, con frecuencia como resultado de una intervención humana.
- Los algoritmos de enrutamiento dinámico modifican los caminos de enrutamiento
a medida que la carga de tráfico o la topología de la red cambian. Un algoritmo
dinámico puede ejecutarse periódicamente o como respuesta directa a cambios en
la topología o en el coste de los enlaces.
- En un algoritmo sensible a la carga , los costes de enlace varían de forma dinámica
para reflejar el nivel actual de congestión en el enlace subyacente. Si se asocia un
coste alto con un enlace que actualmente esté congestionado.

#### Algoritmo de enrutamiento de estado de enlaces (LS)


En un algoritmo de estado de enlaces, la topología de la red y el coste de todos los enlaces
son conocidos; es decir, están disponibles como entradas para el algoritmo LS. En la
práctica, esto se consigue haciendo que cada nodo difunda paquetes del estado de los
enlaces a todos los demás nodos de la red, con cada paquete de estado de enlace
conteniendo las identidades y los costes de sus enlaces conectados.
El resultado de difundir la información de los nodos es que todos los nodos tienen una visión
completa e idéntica de la red. Cada nodo puede entonces ejecutar el algoritmo LS y calcular
el mismo conjunto de rutas de coste mínimo que cualquier otro nodo.
El algoritmo de Dijkstra calcula la ruta de coste mínimo desde un nodo (el origen, al que
denominaremos u) hasta todos los demás nodos de la red.
Inicialización:
N’ = {u}


for todo nodo v
if v es un vecino de u
then D(v) = c(u,v)
else D(v) = ∞
Bucle
encontrar w no perteneciente a N’ tal que D(w) sea un mínimo
sumar w a N’
actualizar D(v) para cada vecino v de w, que no pertenezca a N’:
D(v) = min( D(v), D(w) + c(w,v) )
/* el nuevo coste a v es o bien el antiguo coste a v o el coste de
la ruta de coste mínimo a w más el coste desde w a v */
until N’= N
Cuando el algoritmo LS termina, tenemos para cada nodo su predecesor a lo largo de la
ruta de coste mínimo desde el nodo de origen. Para cada predecesor, también tenemos su
predecesor, y así de este modo podemos construir la ruta completa desde el origen a todos
los destinos.
El número total de nodos a través de los que tenemos que buscar teniendo en cuenta todas
las iteraciones es igual a n(n + 1)/2 y, por tanto, decimos que la implementación anterior del
algoritmo LS tiene, en el caso peor, una complejidad de orden n al cuadrado: O(n^2 ).

#### Algoritmo de enrutamiento por vector de distancias (DV)

El algoritmo por vector de distancias (DV) es iterativo, asíncrono y distribuido. Es distribuido
en el sentido de que cada nodo recibe información de uno o más de sus vecinos
directamente conectados, realiza un cálculo y luego distribuye los resultados de su cálculo
de vuelta a sus vecinos. Es iterativo porque este proceso continúa hasta que no hay
disponible más información para ser intercambiada entre los vecinos.
El algoritmo es asíncrono, en el sentido de que no requiere que todos los nodos operen
sincronizados entre sí.
Los costes mínimos de una ruta está relacionados mediante la ecuación Bellman-Ford:
_dx_ ( _y_ ) = _minv_ { _c_ ( _x_ , _v_ ) + _dv_ ( _y_ )}
En el algoritmo, de vez en cuando, cada nodo envía una copia de su vector de distancias a
cada uno de sus vecinos. Cuando un nodo x recibe un nuevo vector de distancias
procedente de cualquiera de sus vecinos v, guarda dicho vector de v y luego utiliza la
ecuación de Bellman-Ford para actualizar su propio vector de distancias.
Si el vector de distancias del nodo x ha cambiado como resultado de este paso de
actualización, entonces el nodo x enviará su vector de distancias actualizado a cada uno de
sus vecinos, lo que puede a su vez actualizar sus propios vectores distancia.
Inicialización:
for todos los destinos y pertenecientes a N:
Dx(y) = c(x,y) /* si y no es un vecino, entonces c(x,y) = ∞
*/


for cada vecino w
Dw(y) =? para todos los destinos y pertenecientes a N
for cada vecino w
enviar vector de distancias Dx = [Dx(y): y perteneciente N] a w
bucle
wait (hasta ver una variación en el coste de enlace de un vecino w o
hasta recibir un
vector de distancias de algún vecino w)
for cada y perteneciente a N:
Dx(y) = minv{c(x,v) + Dv(y)}
if Dx(y) varía para cualquier destino y enviar vector de distancia
Dx = [Dx(y): y perteneciente N] a todos los vecinos
forever
El proceso de recibir vectores distancia actualizados de los vecinos, recalcular las entradas
de la tabla de enrutamiento e informar a los vecinos de los costes modificados de la ruta de
coste mínimo hacia un destino continúa hasta que ya no se envían mensajes de
actualización. El algoritmo se encuentra en estado de reposo.

##### Reversa envenenada

Técnica que resuelve los bucles de enrutamiento infinito, si un nodo x enruta a z a través de
un nodo y, entonces en su vector distancia pondra como valor de Dx(z) = ∞, simulando que
no tiene ningún enlace hacia z.

##### Comparación LS y DV


- Complejidad del mensaje: LS requiere que cada nodo conozca el coste de cada
enlace de la red. Además, cuando el coste del enlace cambia, el nuevo coste tiene
que enviarse a todos los nodos. El algoritmo de vector de distancias (DV) requiere
intercambios de mensajes entre los vecinos directamente conectados en cada
iteración. Cuando los costos de los enlaces cambian, el algoritmo de vector de
distancias propagara los resultados del coste del enlace que ha cambiado solo si el
nuevo coste de enlace da lugar a una ruta de coste mínimo distinta para no de los
nodos conectados a dicho enlace.
- Velocidad de convergencia : la implementación del algoritmo de estados de
enlaces es un algoritmo O(N^2 ) que requiera enviar O(N*E) mensajes. El algoritmo de
vector de distancias puede converger lentamente y pueden aparecer bucles de
enrutamiento mientras está convergiendo. Este algoritmo también sufre el problema
de la cuenta hasta infinito.
- Robustez : LS proporcionando un mayor grado de robustez .Con el algoritmo de
vector de distancias, un nodo puede anunciar rutas de coste mínimo incorrectas o
cualquiera o a todos los destinos. Con el algoritmo de vector de distancias, un



cálculo de nodo incorrecto puede difundirse a través de la red.

#### Enrutamiento jerárquico

**Sistemas autónomos (AS)** , formados por un grupo de routers que normalmente se
encuentran bajo el mismo control administrativo. Los routers de un mismo AS ejecutan
todos ellos el mismo algoritmo de enrutamiento.
**Protocolo de enrutamiento interno del sistema autónomo:** el algoritmo de enrutamiento
que se ejecuta en el sistema. **Routers gateways:** routers de un sistema autónomo que
tendrán la tarea adicional de ser responsable del reenvio de paquetes a los destinos
externos al AS.
Un protocolo de enrutamiento interno cumple la tarea de obtener información de
alcanzabilidad de los AS vecinos y propagar dicha información de alcanzabilidad a todos los
routers internos del AS.
Cuando un sistema autónomo obtiene información acerca de un destino de un AS vecino,
puede anunciar esta información de enrutamiento a algunos de sus otros sistemas
autónomos vecinos.
Un método, que es el que se suele utilizar en la práctica, consistiría en utilizar el
enrutamiento de la **patata caliente** . Con este tipo de enrutamiento, el sistema autónomo
suelta el paquete tan rápido como sea posible (de la forma más barata posible). Para hacer
esto, el router envía el paquete al router de pasarela que tiene el coste más pequeño de
entre todos los routers de pasarela que cuentan con una ruta hasta ese destino.

### Enrutamiento en Internet

#### Enrutamiento interno de un sistema autónomo de Internet: RIP

Los protocolos de enrutamiento internos de los AS se conocen también como **protocolos
de pasarela interior.**
RIP es un protocolo de vector de distancias que opera de una forma muy parecida al
protocolo DV ideal. Utiliza como métrica de coste el recuento de saltos; es decir, cada
enlace tiene un coste de 1.
El vector de distancias para cualquier router es la estimación actual de la ruta más corta
desde dicho router a las subredes del AS. En RIP, las actualizaciones de enrutamientos son
intercambiadas entre los vecinos cada 30 segundos mediante un **mensaje de respuesta
RIP.**
El mensaje de respuesta enviado por un router o un host contiene una lista de hasta 25
subredes de destino pertenecientes al sistema autónomo, así como la distancia desde el
emisor a cada una de esas subredes. Los mensajes de respuesta se conocen como
**anuncios RIP** .
Cada router mantiene una tabla RIP conocida como tabla de enrutamiento, esta tabla
incluye tanto el vector de distancia del router como la tabla de reenvío del mismo.
Si un router no tienen noticias de su vecino al menos una vez cada 180 segundos,
considera que ese vecino ya no es alcanzable; es decir, o bien ese vecino ha muerto o el
enlace que le conectaba con el ha fallado. Si esto ocurre, RIP modifica su tabla de
enrutamiento local, y luego propagara esta información enviando anuncios a sus routers


vecinos. Un router también puede solicitar información de otros mediante un mensaje de
solicitud RIP , acerca del coste a un destino dado. Esto se realiza mediante mensajes UDP
en el puerto 520.

#### Enrutamiento interno de un sistema autónomo de Internet: OSPF

protocolo de estado de enlaces que utiliza la técnica de inundación de información de
estados de los enlaces y el algoritmo de cálculo de ruta de coste mínimo de Dijkstra.
OSPF es un protocolo de enrutamiento intradominio, que permite el enrutamiento
jerárquico, y lo hace dividiendo un AS en zonas.
Con OSPF, un router construye un mapa topológico completo del sistema autónomo entero,
es decir un grafo. A continuación, el router ejecuta localmente el algoritmo de la ruta más
corta de Dijkstra para determinar un árbol de rutas más cortas a todas las subredes, con el
mismo nodo raíz. El administrador de la red configura los costes de los enlaces individuales,
además puede decidir hacer igual a 1, el coste de todos los enlaces, proporcionando un
enrutamiento de número mínimo de saltos, o puede definir los pesos de los enlaces para
que sea inversamente proporcionales a la capacidad de los mismos, con el fin de disuadir el
tráfico a utilizar los enlaces con pequeño ancho de banda. OSPF no establece una política
para definir el pesos de los enlaces, sino que proporciona mecanismos para determinar el
enrutamiento de coste mínimo para el conjunto dado de pesos de los enlaces.
Con OSPF, un router difunde la información de enrutamiento a todos los demás routers del
sistema autónomo, no solo a sus routers vecinos. esta información se difunde cuando se ha
producido un cambio en el estado de un enlace, también difunde esta información en menos
de 30 minutos, incluso aunque no haya cambiado el estado.
Lo anuncios OSPF están contenidos en mensajes OSPF que son transportados
directamente por IP, siendo el número de protocolo de la capa superior para OSPF igual a

89. Así, el protocolo tiene que implementar por sí mismo funcionalidades tales como la
transferencia fiable de mensajes y la de envío de mensajes de difusión acerca del estados
de los enlaces. OSPF comprueba que los enlaces están operativos mediante que el
mensaje HELLO que se envía a un vecino conectado, y permite al router OSPF obtener de
un vecino la base de datos de estado de los enlaces de toda la red.
Algunas de las funcionalidades avanzadas incluidas en OSPF son las siguientes:
  - Seguridad : Los intercambios entre routers OSPF pueden ser autentificados.
    Con esto solo pueden participar en el protocolo OSPF los routers de confianza del
    sistema autónomo. Por defecto, los paquetes OSPF entre routers no son
    identificados y podrían ser alterados. Pueden configurarse dos tipos de
    autenticación: simple y MD5.
  - Varias rutas de igual coste: cuando varias rutas de un destino tienen el mismo coste,
    OSPF permite utilizar varias rutas.
  - Soporte integrado para enrutamiento de unidifusión y por multidifusión: OSP
    multidifusión añade extensiones simples a OSPF para proporcionar enrutamiento por
    multidifusión.



- Soporte para añadir una jerarquía dentro de un mismo dominio de enrutamiento.

#### Enrutamiento entre sistemas autónomos: BGP

BGP es un protocolo de enrutamientos entre sistemas autónomos que proporciona a cada
sistema autónomo mecanismos para:
- Obtener información acerca de la alcanzabilidad de las subredes de los sistemas
autónomos vecinos
- Propagar la información de alcanzabilidada a todos los routers internos del sistema
autónomo.
- Determinar buenas rutas de subredes, basándose en la información de
alcanzabilidad y en la política del sistema autónomo.
Lo más importante es que BGP permite a cada subred anunciar su existencia al resto de
Internet.
Para cada conexión TCP, los dos routers situados en los extremos de la conexión se
denominan **pares BGP** y la conexión TCP junto con todos los mensajes BGP enviados a
través de la conexión se denomina **sesión BGP.** Además, una sesión BGP que abarca dos
sistemas autónomos se conoce como **sesión externa BGP** (eBGP) y una sesión BGP entre
routers de un mismo sistema autónomo se conoce como **sesión interna BGP** (iBGP).
BGP permite que cada sistema autónomo aprenda qué destinos son alcanzables a través
de sus sistemas autónomos vecinos. En BGP, los destinos no son hosts sino prefijos CIDR,
representando cada prefijo una subred o una colección de subredes.

##### Atributos de ruta y rutas BGP

En BGP, un sistema autónomo se identifica mediante su número de sistema autónomo
( **ASN, Autonomous System Number** ) globalmente único.
Atributos BGP:
- AS-PATCH: contiene los sistemas autónomos a través de los que ha pasado el
anuncio del prefijo. Cuando se ha pasado un prefijo dentro de un sistema autónomo,
el sistema añade su ASN al atributo AS-PATH. Los router utilizan este atributo para
impedir los bucles de anuncios.
- El siguiente salto (NEXT HOP) es la interfaz del router que inicia la secuencia de
sistemas autónomos (AS-PATH).

##### Selección de la ruta BGP

Un router puede aprender acerca de más de una ruta a cualquier prefijo, en cuyo caso
tendrá que seleccionar una de las posibles rutas. Las entradas para este proceso de
selección de ruta es el conjunto de todas las rutas que han sido aprendidas y aceptadas por
el router. Si existen dos rutas con el mismo prefijo, entonces BGP invoca secuencialmente
las siguientes reglas de eliminación hasta quedarse con una ruta:

1. Se asigna un valor de preferencia local (LOCAL-PREF) a las rutas, como uno de sus
  atributos. La preferencia local de una ruta podría haber sido definida por el router o
  podría haber sido aprendida por otro router perteneciente al mismo sistema



autónomo. Esta es una decisión política que se le deja al administrador de red del
sistema autónomo. Se eligen las rutas con los valores de preferencia local más altos.

2. De las rutas que quedan, toda ellas con el mismo valor de preferencia local, se
  selecciona la ruta con el camino de sistemas autónomos más corto. Si esta regla
  fuera la única para seleccionar la ruta, entonces BGP estaría aplicando un vector de
  distancias para determinar la ruta, siendo la métrica de distancia utilizada el número
  de saltos entre sistemas autónomos, en lugar de número de saltos entre routers.
3. De las restantes rutas, todas con el mismo valor de preferencia local y la misma
  longitud de AS-PATH, se seleccione la ruta con el router del siguiente salto más
  próximo. En este caso, más próximo quiere decir que el coste de la ruta de coste
  mínimo, determinado por el algoritmo interno del AS, sea más pequeño. Este
  procesos se conoce como enrutamiento de la patata caliente.
4. Si todavía quedan rutas, entonces se aplican criterios adicionales.
Es importante observar que no se puede afirmar que la decisión garantiza un camino más
corto en cantidad de hops de routers, porque se desconoce la información interna de cada
AS. Un camino con AS-PATH más corto puede incluir ASs con muchos “hops” de routers
internos, y puede ser más largo en término de routers que otro camino con AS-PATH más
largo.

##### Mensajes BGP

Los mensajes BGP se intercambian usando TCP. Mensajes BGP:
- OPEN: abre conexión TCP con “peer” y autentica al que envía
- UPDATE: publica nuevos caminos (o da de baja otros)
- KEEPALIVE: mantiene la conexión viva en ausencia de
- UPDATES; se usa también como ACK del OPEN
- NOTIFICATION: reporta errores en mensaje previo; también se usa para cerrar
- conexión


