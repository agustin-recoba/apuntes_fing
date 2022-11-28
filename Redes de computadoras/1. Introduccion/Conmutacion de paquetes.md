El origen divide los mensajes largos en fragmentos de datos más pequeños que se conocen como paquetes.
Los paquetes de distintos usuarios comparten los recursos de red. Cada paquete utiliza el ancho de banda disponible. Los paquetes deben esperar para usar los recursos. 

La mayoría de los conmutadores de paquetes emplean el método de transmisión de **almacenamiento y reenvío** en la entrada a los enlaces, esto significa que el conmutador tiene que recibir el paquete completo antes de poder comenzar a transmitir el primer bit del paquete al enlace de salida, esto añade un retardo de almacenamiento y reenvío en la entrada de cada enlace.

Cada conmutador de paquetes tiene varios enlaces conectados a él y para cada enlace conectado, el conmutador de paquetes dispone de un buffer de salida, que almacena los paquetes que el router enviará a través de dicho enlace. Un paquete entrante puede encontrar que el buffer está lleno con otros paquetes, en ese caso se producirá una pérdida de paquetes.

## Multiplexación estadística
La compartición de recursos bajo petición, se denomina **multiplexación estadística** de recursos.

![[Pasted image 20221004231554.png|400]]

Secuencia de paquetes A y B no tienen un patrón de tiempo fijo, los anchos de banda son compartidos a demanda. 
En lugar de pre asignar las ranuras temporales a un número fijo de comunicaciones, detecta las comunicaciones activas y reparte el canal entre todas ellas. De esta forma se evita que una comunicación inactiva malgaste ancho de banda. Este tipo de multiplexación se utiliza en líneas frame relay.