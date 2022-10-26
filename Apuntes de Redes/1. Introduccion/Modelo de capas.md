# Capas de protocolos y modelos de servicios

Las redes son complejas, compuestas por múltiples piezas: 
- Hosts 
- Router 
- Enlaces de varios medios 
- Aplicaciones 
- Protocolos 
- Hardware 
- Software 

La pregunta que surge entonces es: **¿Existe alguna forma de organizar la estructura de la red?**

Se definen entonces **CAPAS**, donde cada capa implementa un servicio, ejecutando instrucciones internas a cada capa, confiando en los servicios provistos por la capa anterior. 
La división en capas permite tratar con sistemas más complejos. Una estructura explícita permite la identificación, relacionamiento de las complejas piezas del sistema, utilizando un modelo de referencia en capas. 
Además, permite la **modularización**, lo cual facilita el trabajo de mantenimiento y actualización del sistema, ya que un cambio en una capa no debería afectar al resto del sistema. Por ejemplo, un cambio en la cinta transportadora de equipaje no afecta al resto del sistema.

## Capas:

![[Pasted image 20221004233934.png|200]]

### Aplicación: 
Soporta las aplicaciones en red (FTP, SMTP, HTTP). 

### Transporte:
Transferencia proceso a proceso de los datos (TCP, UDP).

### Red:
Rutea los datagramas de la fuente hasta el destino (IP, protocolos de enrutamiento).

Las dos funciones fundamentales de la capa de red son las de **reenvío** y **enrutamiento**. 
- El reenvío (**forwarding**) refiere a cuando un paquete llega al enlace de entrada de un router, y éste tiene que pasar el paquete al enlace de salida apropiado. 
- Mientras que enrutamiento (**routing**) refiere a que la capa de red tiene que determinar la ruta o camino que deben seguir los paquetes a medida que fluyen de un emisor a un receptor. Los algoritmos que calculan estas rutas se conocen como algoritmos de enrutamiento. 

El reenvío hace referencia entonces a la acción local que realiza **un** router al transferir un paquete desde una interfaz de un enlace de entrada a una interfaz del enlace de salida apropiada. Y el enrutamiento, al proceso que realiza la red en conjunto para **determinar las rutas terminal a terminal** que los paquetes siguen desde el origen al destino. Para que la capa de red cumpla su función (transportar paquetes desde un host emisor a un host receptor) estas funciones se relacionan mediante la tabla de forwarding. Cuando un router recibe mensajes del protocolo de enrutamiento utiliza esta información para configurar su tabla de reenvío, la cual es consultada por la función de reenvío para realizar su función.

### Enlace: 
Transfiere los datos entre elementos de red vecinos (Ethernet, 802.111 (Wifi), PPP).

### Física: 
Bits en el cable.