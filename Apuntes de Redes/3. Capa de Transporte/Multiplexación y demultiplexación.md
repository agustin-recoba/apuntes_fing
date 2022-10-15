Para poder extender la entrega host a host a una entrega proceso a proceso.

**Demultiplexación:** En el extremo receptor, la capa de transporte examina un conjunto de campos del segmento para identificar el socket receptor y a continuación envía el segmento a dicho socket.

**Multiplexación:** La tarea de reunir fragmentos de datos en el host de origen desde los diferentes sockets, encapsulando cada fragmento de datos con la información de cabecera para crear los segmentos y pasarlos a la capa de red.

Para la tarea de multiplexación es necesario que los sockets tengan identificadores únicos y que cada segmento tenga campos especiales que indiquen el socket al que tiene que entregarse el segmento (campo número de **puerto de origen** y campo número de **puerto destino**).

Número de puerto: **16 bits**, del 0 al 1023 están reservados para las aplicaciones.

**Socket UDP:** queda identificado con dirección IP de destino y número de puerto de destino.
**Socket TCP:** queda identificado con dirección IP de destino, número de puerto de destino, dirección IP de origen y número puerto de origen.

**Servidores Web y TCP:** A menudo únicamente utilizan un proceso y crean nuevos threads con un nuevo socket de conexión para cada nueva conexión de un cliente.

```ad-danger
title: Diferencia entre protocolos orientados a conexión y no orientados a conexión

En el caso de un protocolo no orientado a conexión, la demultiplexación se realiza solo a partir del puerto destino (además de la IP destino que identifica al host). Es decir cada socket dentro de un mismo host es identificado por el puerto en donde está esperando los mensajes. 

En el caso de un protocolo orientado a conexión, además de la IP y puerto destino, se utiliza también la IP y puerto origen para realizar la demultiplexación. Es decir, dos mensajes con igual IP y puerto destino, pueden estar dirigidos a distintos sockets si la IP y puerto origen son distintos.
```
