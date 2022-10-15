## Aplicaciones P2P

Con este tipo de arquitectura no se depende de que exista una infraestructura de servidores siempre activos. En su lugar, una serie de parejas de hosts conectados de forma **intermitente**, denominados pares o _peers_, se comunican directamente entre sí. Los pares **no son propiedad de un proveedor de servicios**, sino que son computadoras de escritorio o portátiles controlados por los clientes.

## Distribución de Archivos: Cliente Servidor vs P2P

Contestaremos la pregunta: ¿Cuánto tiempo se tarda en distribuir un archivo a N peers desde un servidor?

![[Pasted image 20221006185407.png|400]]

El servidor envía secuencialmente $N$ copias de $F$, en un tiempo de $N \times F/u_s$, y el cliente $i$ tarda un tiempo de $F/d_i$ en descargarlo, por lo que el tiempo para distribuir un archivo entre $N$ clientes, con 1 servidor en una arquitectura cliente-servidor es:
$d_{cs} = max\{N \times F/u_s,\: F/min_i(d_i)\}$


### Bitorrent

Es un popular protocolo P2P para la distribución de archivos.
**Torrente**: todos los pares que participan en la distribución de un determinado archivo.
Los peers de un torrente descargan fragmentos del mismo tamaño del archivo de uno a otro, siendo el tamaño típico de un fragmento de 256 kBytes.
Cuando un par se une por primera vez a un torrente, no tiene fragmentos del archivo. A lo largo del tiempo va acumulando cada vez más fragmentos. A la vez que descarga fragmentos, actualiza fragmentos en otros pares. 

Una vez que un par ha adquirido el archivo completo, puede abandonar el torrente, o permanecer en el mismo, y continuar suministrando fragmentos a otros pares. Además, cualquier par puede abandonar el torrente en cualquier instante con solo un subconjunto de fragmentos, y volver a unirse más tarde.

Cada torrente tiene un nodo de infraestructura denominado tracker (rastreador). Cuando un par se une a un torrente, se registra mediante tracker y periódicamente, informa de que todavía se encuentra en el torrente.

Todos los pares con los que se consigue una conexión TCP se le denomina **par vecino** y estos varían con el tiempo. 

En un determinado instante de tiempo, cada peer tendrá un subconjunto de fragmentos del archivo, disponiendo los distintos pares de subconjuntos diferentes. Periódicamente, cada peer preguntará a cada uno de sus vecinos (a través de las conexiones TCP) por la lista de fragmentos de la que disponen. Con esta información, cada peer solicitará los fragmentos que no tiene. Para decidir qué fragmentos solicitar, cada peer utiliza una técnica conocida como **"primero el menos común".** La idea es determinar, de entre los fragmentos que ella no tiene, los fragmentos menos comunes entre sus vecinos y solicitar entonces en primer lugar esos fragmentos menos comunes.

Para determinar a qué solicitudes debe un peer responder, se le da prioridad a los vecinos que actualmente están suministrando sus datos a mayor velocidad. Por lo tanto, el peer mide de forma continua la velocidad a la que recibe bits y determina cuáles son los cuatro pares que le envían bits a mayor velocidad (peers **unchoked**). Entonces, de forma recíproca, envía fragmentos a esos mismos cuatro pares. Cada 10 segundos, vuelve a calcular las velocidades y, posiblemente, tendrá que modificar el conjunto formado por los cuatro pares.

Cada 30 segundos cada peer elegirá aleatoriamente un nuevo socio de intercambio (peer optimistically **unchoke**) e iniciará las transacciones con él. Si los dos pares están satisfechos con el intercambio, se incluirán en sus respectivas listas de los cuatro principales y continuarán realizando intercambios hasta que uno de los pares encuentre un socio mejor.
Este mecanismo se denomina **_tit-for-that._**
