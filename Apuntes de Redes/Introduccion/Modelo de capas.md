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

### Enlace: 
Transfiere los datos entre elementos de red vecinos (Ethernet, 802.111 (Wifi), PPP).

### Física: 
Bits en el cable.