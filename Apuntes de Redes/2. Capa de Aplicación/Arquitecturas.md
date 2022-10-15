# Arquitecturas

Cómo la aplicación debe estructurarse en los distintos sistemas terminales.

## Cliente-Servidor: 
Siempre existe un host activo, denominado servidor, que da servicio a las solicitudes de muchos otros hosts, que son los clientes.
El servidor tiene una dirección fija y conocida (dirección IP) y siempre está activo, por lo que el cliente siempre puede contactar con él enviando un paquete a su dirección.
Suele utilizarse una agrupación (cluster) de host llamados centro de datos, para crear servidores virtuales de gran capacidad.

## P2P:
Existe una mínima (o ninguna) dependencia de una infraestructura de servidores siempre activos. En su lugar, la aplicación explota la comunicación directa entre parejas de host conectados de forma intermitente, conocidos como peers (pares). 
Auto-escalabilidad. Buena relación costo-prestaciones ya que normalmente, no requieren una infraestructura de servidores significativa ni un gran ancho de banda de servidor.
- **Retos importantes:**
	- **Orientadas al ISP**: la mayoría de los ISP están dimensionados para soportar más tráfico de descarga que de carga. Pero las aplicaciones P2P desplazan	el tráfico de carga de los servidores a los ISP residenciales, ejerciendo gran	presión sobre ellos.
	- **Seguridad**
	- **Incentivos**: convencer a los usuarios para ofrecer voluntariamente a las aplicaciones recursos de ancho de banda, de almacenamiento y de computación.

## Arquitectura híbrida
Consiste en utilizar tanto una arquitectura P2P como una cliente-servidor. Ejemplos de esto son Skype, que utiliza P2P para la comunicación por voz, permitiendo una comunicación directa entre los usuarios sin pasar por el servidor, y además el servidor centrarlizado para encontrar la dirección a la cual comunicar. Y además la mensajería instantanea, que permite el chat entre dos usuarios mediante P2P, teniendo además un servicio centralizado donde se almacena la presencia/localización del cliente (el usuario registra su IP cuando se conecta y luego otro usuario se contacta con el servidor para encontrar la IP para comunicarse).