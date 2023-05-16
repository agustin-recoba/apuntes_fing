Aplicación que permite determinar el camino de ida (a ser recorrido por los paquetes en un momento dado) entre un origen y un destino.

Implementado sobre ICMP o UDP.

## Funcionamiento del traceroute sobre ICMP

Al ejecutar el comando (por defecto el único argumento necesario es la dirección IP destino), se envían, por defecto, 3 paquetes IP CON TTL=1 conteniendo 3 mensajes ICMP de control del tipo “echo”. Al llegar al primer salto y decrementado el TTL, este pasa a valer 0 y si no es el destino de los paquetes, se devuelven al origen 3 paquetes IP con dirección IP origen quien los genera, dirección IP destino la dirección IP origen de los paquetes que los motivó y conteniendo cada uno un mensaje de error “time exceeded”. El receptor de los mensajes refleja en una primera línea en consola la llegada de estos tres mensajes así como el tiempo que transcurrió entre que salió cada paquete y se recibió el mensaje de error correspondiente. 

El siguente paso es generar los mismos paquetes que en el paso anterior pero ahora con TTL=2. Ellos atravesarán el primer salto y salvo que sean destinados al segundo salto, el comportamiento será similar el descripto en el párrafo anterior. 

Cuando los paquetes arriban al destino final, en lugar de retornar un mensaje ICMP de error “time exceeded” como en todos los saltos anteriores, se generan mensajes ICMP de control “echo reply”. 

Siempre todos los mensajes que salen desde el host donde se ejecuta el comando lo hacen con la **misma dirección IP destino. **

La dirección IP destino de los paquetes IP que contienen las respuestas ICMP se obtienen de la dirección IP origen del paquete que lo motivó.

La dirección IP origen es la del nodo que genera el mensaje ICMP (payload del paquete IP) 

El payload de los mensajes ICMP de error es una parte del paquete IP que lo originó (encabezado y algunos bits de su payload) 

El traceroute basado en UDP se implementa a partir de enviar mensajes UDP dirigidos a puertos donde la probabilidad de respuesta es muy baja. En todos los nodos intermedios el camino se va construyendo a partir de mensajes “time exceeded”. Al llegar al destino, se recibirá un mensaje ICMP de error “port unreachable”.