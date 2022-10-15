## Servicios disponibles para aplicaciones

- ### Transferencia de datos fiable: 
Un protocolo proporciona un servicio de entrega de datos garantizado. Si un protocolo no proporciona una transferencia de datos fiable, los datos enviados por el proceso emisor pueden no llegar nunca al proceso de recepción. Esto puede ser aceptable para aplicaciones tolerantes a pérdidas.

- ### Tasa de transferencia: 
Disponible garantizada a una cierta velocidad especificada. Aplicaciones sensibles al ancho de banda: aplicaciones con requisitos de tasa de transferencia. Aplicaciones elásticas: pueden hacer uso de la tasa de transferencia que haya disponible.

- ### Temporización: 
Atractivo para aplicaciones en tiempo real.

- ### Seguridad:
Confidencialidad entre los procesos, garantizar la integridad de los datos y mecanismos de autenticación en el punto terminal.


## Servicios de transporte proporcionados por Internet

### Servicios TCP
Muchos programas dentro de una red de datos compuesta por redes de computadoras, pueden usar TCP para crear “conexiones” entre sí a través de las cuales puede enviarse un flujo de datos. El protocolo garantiza que los datos serán entregados en su destino sin errores y en el mismo orden en que se transmitieron. También proporciona un mecanismo para distinguir distintas aplicaciones dentro de una misma máquina, a través del concepto de puerto. 
TCP da soporte a muchas de las aplicaciones más populares de Internet (navegadores, intercambio de ficheros, clientes FTP, etc.) y protocolos de aplicación HTTP, SMTP, SSH y FTP. 
Este modelo de servicio ofrece un servicio orientado a conexión y un servicio de transferencia confiable de los datos. Cuando una aplicación invoca TCP como protocolo, la aplicación recibe ambos de estos servicios.

- Servicio orientado a la conexión: 
	cliente y servidor intercambian la información de control de la capa de transporte entre sí antes que empiecen a fluir los mensajes de la capa de aplicación. Después de la negociación se dice que hay una conexión TCP (full duplex) entre los sockets de los dos procesos.
- Servicio de transferencia de datos fiable: 
	Los procesos pueden confiar en TCP para entregar todos los datos enviados sin errores y en el orden correcto. 
	TCP también incluye un servicio de control de congestión para mejorar el funcionamiento general de internet, más que para el beneficio directo de los procesos que se comunican.
- No provee:
	Control de tiempo, garantías de throughput mínimo ni seguridad.

### Servicios UDP
UDP es un protocolo de transporte ligero simple que proporciona unos servicios mínimos y no está orientado a la conexión, por lo que no tiene lugar un procedimiento de negociación antes de que los dos procesos comiencen a comunicarse. 
UDP proporciona un servicio de transferencia de datos no fiable. Tampoco incluye un mecanismo de congestión.
Es decir, UDP ni siquiera garantiza que el mensaje vaya a llegar a su destino, e incluso pueden llegar desordenados.