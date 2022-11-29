Un ámbito con direcciones privadas hace referencia a una red cuyas direcciones solo tienen significado para los dispositivos internos de dicha red y dejan de ser únicas. El problema surge cuando se quiere enviar paquetes a internet o recibirlos.
El router NAT no parece un router a ojos del mundo exterior. En su lugar, se comporta de cara al exterior como un único dispositivo con una dirección IP única. Se encarga de ocultar los detalles de la red doméstica al exterior.
Para poder identificar a qué host dentro de la red doméstica tiene que enviar determinados datagramas, se utiliza una tabla de traducciones NAT que está almacenada en el router NAT, e incluye los números de puertos, así como las direcciones IP en las entradas de la tabla.

Hay múltiples razones por las que las redes de área local utilicen una única IP para comunicarse con el mundo exterior:
- El rango de direcciones sería muy grande si cada dispositivo tuviera su propia IP provista por el ISP.
- Se puede cambiar las IPs de los dispositivos dentro de la red local, sin tener que notificarle al mundo exterior.
- Se puede cambiar de ISP sin cambiar las direcciones locales.
- Los dispositivos dentro de la red local no son explícitamente visibles por el mundo exterior.

Para implementar esto, un router que utilice NAT debe:
- Reemplazar en los datagramas de salida la dirección IP y número de puerto fuente, por la dirección IP de NAT y un nuevo número de puerto. Luego los clientes/servidores remotos responderán a la dirección IP del NAT y a ese puerto, como dirección de destino.
- Recordar en la tabla de traducción NAT el mapeo entre dirección y puerto fuente con la dirección NAT y el nuevo puerto.
- Reemplazar en los datagramas entrantes la dirección IP NAT y el nuevo puerto por la correspondiente dirección IP fuente local y el número de puerto original, almacenados en la tabla de NAT.

```ad-example
title: Ejemplo
collapse: closed
![[Pasted image 20221118000637.png]]
```

El número de puerto es un número de 16 bits, lo que permite hasta 60.000 conexiones simultáneas a una misma dirección LAN. 

Sin embargo, el protocolo NAT es controversial, debido a que, en primer lugar, los routers deberían procesar únicamente hasta capa 3. Además, viola el argumento end-to-end.

# Problemas en NAT
Supongamos que un cliente quiere conectarse a un servidor con dirección 10.0.0.1. Esta dirección es local en la LAN, por lo que el cliente no puede utilizarla como dirección de destino. En su lugar, debería utilizar la dirección NAT 138.76.29.7.

![[Pasted image 20221118000802.png]]

Existen distintas soluciones posibles a este problema:
- Configurar estáticamente el NAT para que las conexiones entrantes en determinado puerto sean redirigidas al servidor. 
	Por ejemplo, que las conexiones que llegan a 138.76.29.7 en el puerto 2500, sean reenviadas a la dirección 10.0.0.1 en el puerto 25000.
- Utilizar Universal Plug and Play (UPnP) Internet Gateway Device (IGD) Protocol. 
	Que permite al host con NAT aprender la dirección IP pública (138.76.29.7) y eliminar o agregar mapeos de puertos.
	![[Pasted image 20221118000903.png]]
- Utilizar Relaying. 
	El cliente establece conexión con el relay, luego el cliente externo se conecta al relay y este último hace de puente para los paquetes entre ambas conexiones.
	![[Pasted image 20221118000957.png]]
