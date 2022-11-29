Un conmutador compatible con redes VLAN permite definir **múltiples redes de área local virtuales sobre una única infraestructura de red** de área local física. Los hosts de una VLAN se comunican entre sí como si sólo ellos (y ningún otro host) estuvieran conectados al conmutador.
En una **VLAN basada en puertos**, el administrador de la red divide los puertos (interfaces) del conmutador en grupos. Cada grupo constituye una VLAN, con los puertos de cada VLAN formando un dominio de difusión.
Para enviar tráfico entre un departamento y otro, los fabricantes de conmutadores incorporan en un único dispositivo un conmutador VLAN y un router, con lo que no es necesario un router externo.
Si se tienen dos conmutadores separados físicamente pero compartiendo VLANs se utiliza la técnica **troncalización VLAN**, con la cual un puerto especial de cada conmutador se configura como un puerto troncal para interconectar los dos conmutadores VLAN. El puerto troncal pertenece a todas las VLAN y las tramas enviadas a cualquier VLAN son reenviadas a través del enlace troncal hacia el otro conmutador.
Para identificar a qué VLAN pertenece cada trama, se utiliza una etiqueta VLAN de cuatro bytes añadida a la cabecera que transporta la identidad de la VLAN a la que pertenece.

```ad-important
title: Ventajas clave
collapse: open
**Aislación del tráfico:** los frames desde/hasta los puertos 1-8 pueden solamente alcanzar los puertos 1-8. También se puede definir una VLAN basada en direcciones MAC de los endpoints, en lugar del puerto del switch. 

**Membresía dinámica:** los puertos pueden ser asignados dinámicamente a las VLANs.

**Forwarding entre VLANs:** se hace mediante Routing, como si fueran switches separados.
```


# VLAN 802.1Q

El protocolo 802.1Q involucra una redefinición del cabezal Ethernet, que introduce cuatro bytes adicionales luego de las direcciones MAC src y dst:

![[Pasted image 20221128193216.png]]

De los 32bits adicionales, se reservan 12 para identificar VLANs. 

A nivel de los switches se distinguen puertos a los que se pueden conectar dispositivos que manipulan los cabezales extendidos y son capaces de intercambiar tráfico que incluye TAGS de los puertos en los que se conectan equipos que desconocen del uso de tags. Estos puertos, los que reciben tráfico sin tags se conocen como UNTAGGED PORTS y realizan la tarea de etiquetar tráfico al ingreso y quitar el tag al momento de forwardear el paquete hacia el host. Los puertos por los que se transmiten tramas extendidas se conocen tomo TRUNK PORTS. Cabe mencionar que la distinción es administrativa, y no hay diferencias físicas en los puertos.