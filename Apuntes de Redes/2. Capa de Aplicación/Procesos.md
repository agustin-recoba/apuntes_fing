## Procesos

Un proceso puede interpretarse como un programa que se ejecuta dentro de un sistema terminal. Los procesos de dos sistemas terminales diferentes se comunican entre ellos intercambiando mensajes a través de la red de computadoras.

En el contexto de una sesión de comunicación entre una pareja de procesos, el proceso que inicia la comunicación, se etiqueta como el **_cliente_** y el proceso que espera a ser contactado para comenzar la sesión como el **_servidor_**.

Un proceso envía mensajes a la red y los recibe de la red a través de una interfaz software denominada **socket**. Es la interfaz entre la capa de aplicación y la de transporte de un host.

El único control que tiene el desarrollador de la aplicación sobre el lado de la capa de transporte es: 
- la elección del protocolo de transporte y
- la capacidad de fijar algunos parámetros.

## Sockets

Los procesos envían y reciben mensajes por medio de una interfaz de software llamada Socket. Un socket es análogo a una puerta, donde el proceso es análogo a la casa. El proceso emisor “empuja” el mensaje hacia afuera a través de la puerta y confía en la infraestructura de transporte del otro lado de la puerta, la cual transmite el mensaje hasta la puerta (socket) del receptor. Un Socket también es conocido como una API (Application Programming Interface) entre la aplicación y la red, dado que los sockets son las interfaces con las cuales son construidas las aplicaciones. 

En la capa de transporte, los únicos controles que se hacen desde los sockets son:
	(1) la elección del protocolo de transporte
	(2) la habilidad de corregir algunos parámetros

![[Pasted image 20221005140546.png|300]]