Un router tiene dos funciones principales: 
- Correr el algoritmo de ruteo, o el protocolo (RIP, OSPF, BGP).
- Hacer el forward de los datagramas desde el enlace entrante hacia el enlace saliente.

![[Pasted image 20221117125539.png|400]]

# Componentes de un router:
- **Puertos de entrada:**
	Realiza las funciones de la capa física consistentes en la terminación de un enlace físico de entrada a un router. Realiza las funciones de la capa de enlace de datos necesarias para inter operar con las funciones de la capa de enlace de datos en el lado remoto del enlace de entrada. También realiza una función de búsqueda y reenvío, un paquete reenviado dentro del entramado de conmutación del router emerge en el puerto de salida apropiado.
- **Entramado de conmutación:** 
	Conecta los puertos de entrada del router a sus puertos de salida. Dentro del router.
- **Puertos de salida:** 
	Almacena los paquetes que le han sido reenviados a través del entramado de conmutación y los transmite al enlace de salida. Así, el puerto de salida lleva a cabo la función inversa de la capa física y de la capa de enlace de datos que el puerto de entrada.
- **Procesador de enrutamiento:** 
	Ejecuta los protocolos de enrutamiento.

## Puertos de entrada

![[Pasted image 20221117130759.png]]

La elección del puerto de salida se lleva a cabo utilizando la información almacenada en la tabla de reenvío. Aunque el procesador de enrutamiento calcula la tabla de reenvío, suele almacenarse una copia de la misma en cada puerto de entrada. La decisión de reenvío puede **tomarse localmente** en cada puerto de entrada sin invocar al procesador de enrutamiento, lo cual evita la formación de cuellos de botella en el procesamiento de reenvíos en un único punto dentro del router.

En los routers con capacidades de procesamiento limitadas en el puerto de entrada, este puede simplemente reenviar el paquete al procesador de enrutamiento centralizado, el cual entonces hará una búsqueda en la tabla de reenvío y transmite el paquete al puerto de salida apropiado.

Debido a la necesidad de operar a velocidades de enlace altas, no se puede buscar linealmente en la tabla de reenvío la correspondencia, sino que se almacena las entradas en la tabla de reenvío en una estructura de árbol. Cada nivel del árbol se interpreta como el correspondiente a un bit de la dirección de destino.
Tiempo de búsqueda de 2^32 para direcciones IP, no suficientemente rápido.

Otra técnica: memorias direccionables por contenido (**CAM, Content Addressable Memory**), las cuales permiten acceder a la memoria mediante una dirección IP de 32 bits, devolviendo el contenido de la correspondiente entrada de la tabla de reenvío en un tiempo prácticamente constante.

Otra técnica: utilizar una caché para almacenar las entradas accedidas recientemente.
Una vez determinado el puerto de salida de un paquete, es reenviado al entramado de conmutación, pero puede ser bloqueada su entrada si está siendo usado por otros paquetes. Por lo que queda almacenado en la cola de entrada del puerto de entrada.

## Entramado de Conmutación
Se encargan de transferir el paquete desde el buffer de entrada al correspondiente buffer de salida. La tasa de switching es la tasa a la cual los paquetes pueden ser transferidos desde las entradas hacia las salidas. A veces se mida como un múltiplo de la tasa lineal de entrada/salida. 
Si tenemos N entradas, se desea una tasa N veces la tasa lineal. 
Hay tres tipos de Switching Fabrics:

- Vía memoria: 
	Utilizado en los routers de la primera generación. Son computadoras tradicionales con Switching bajo control directo de la CPU. El paquete es copiado a la memoria del sistema. La velocidad está limitada por el ancho de banda de memoria (2 cruces de bus por datagrama).
	![[Pasted image 20221117131218.png|400]]
- Conmutación vía bus: 
	Los datagramas van desde la memoria del puerto de entrada a la memoria del puerto de salida mediante un bus compartido, por lo que un solo paquete puede ser transferido al mismo tiempo por ese bus. Un paquete que llega y encuentra el bus ocupado, es bloqueado de pasar por la switiching fabric, y encolado en el puerto de entrada. 
	Dado que un único paquete puede pasar a la vez, la velocidad de switching está limitada por el ancho de banda del bus.
	![[Pasted image 20221117131318.png|300]]
- Conmutación vía una red de interconexión: 
	Utilizado para superar las limitaciones de ancho de banda del bus. Redes secretarias, crossbar, otras redes de interconexión inicialmente desarrolladas para conectar procesadores en multiprocesadores. 
	Diseño avanzado: fragmentación de los datagramas en celdas de tamaño fijo, se hace el switch de las celdas a través de la fábrica.
	![[Pasted image 20221117131407.png|250]]

## Puertos de salida
El procesamiento de puerto de salida toma los paquetes que han sido almacenados en la memoria del puerto de salida y los transmite a través del enlace de salida. Se requiere de buffering para el caso en que los datagramas arriben desde la fábrica más rápido que la tasa de transmisión.
La disciplina de planificación escoge entre los datagramas encolados para la transmisión.
![[Pasted image 20221117131443.png|400]]

# Colas
El buffering ocurre cuando la tasa de llegada por switch excede la velocidad de la línea de salida. Esto puede generar el encolado de paquetes (retraso) e incluso la pérdida debido a una sobrecarga del buffer de salida.

## En puertos de salida:
El buffering ocurre cuando la tasa de llegada por switch excede la velocidad de la línea de salida. Esto puede generar el encolado de paquetes (retraso) e incluso la pérdida debido a una sobrecarga del buffer de salida.

## ¿Cuánto buffer es necesario?
La regla de oro de RFC 3439 dice que el buffering promedio es igual al típico RTT (por ejemplo, 250msec) veces la capacidad del enlace C. Por ejemplo, si el enlace C = 10 Gbps, el buffer es de 2.5Gbits
Recomendaciones recientes con N flujos, el buffering equivale a $\frac{RTT \times C}{\sqrt{N}}$

## En puertos de entrada:
Si la Switch Fabric es más lenta que los puertos de entrada combinados, entonces el encolado puede ocurrir en los puertos de entrada. Se pueden producir retrasos de cola y pérdidas debido a la sobrecarga de buffers.
**Head of The Line Blocking (HOL)**: los datagramas encolados al frente de la cola evitan que otros de la cola puedan ser enviados.
![[Pasted image 20221117132121.png|400]]