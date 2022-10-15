Es una red de computadoras que interconecta a través de medios físicos cientos de millones de dispositivos a lo largo de todo el mundo. Los dispositivos pueden ser clientes o servidores, **ambos se encuentran en el borde de la red** y ejecutan aplicaciones que usan internet. Además, se conectan entre sí mediante una red de enlaces de comunicaciones y dispositivos de conmutación de paquetes.
Hay muchos tipos de enlaces de comunicación compuestos por distintos tipos de medios físicos (cable coaxial, fibra óptica, etc.). Los enlaces pueden transmitir los datos a distintas velocidades.

Los conmutadores de paquetes más usados en Internet son los **routers** (núcleo de la red) y los switches (se emplean en las redes de acceso) de la capa de enlace.
Los sistemas terminales acceden a internet a través de los **ISP** (Proveedor de servicios de internet), cada uno es en sí mismo una red de conmutadores de paquetes y enlaces de comunicaciones.
Internet es todo lo que conecta a los sistemas terminales entre sí, por lo que los ISP que proporcionan el acceso a los sistemas terminales también tienen que estar interconectados entre ellos.

También podemos describir internet desde un punto de vista completamente diferente, en concreto como **una infraestructura que proporciona servicios a las aplicaciones**. Se dice que las aplicaciones son distribuidas, porque implican varios sistemas terminales que intercambian datos entre sí (las aplicaciones se ejecutan en los sistemas terminales).

## Protocolos
Cualquier actividad de internet que implique dos o más entidades remotas que se comunican está gobernada por un protocolo. Un **protocolo** define el *formato* y el *orden de los mensajes* intercambiados entre dos o más entidades que se comunican, así como las acciones tomadas en la trasmisión y/o recepción de un mensaje u otro suceso.

![[Pasted image 20221004225407.png|400]]

## Estructura de una red

![[Pasted image 20221004225504.png]]

### El borde de la red
Conformado por los End Systems, los cuales ejecutan las aplicaciones como Navegadores Web, E-Mail, etc., en el borde de la red.

### Redes de acceso
Las **Redes de acceso** hacen referencia a aquella parte de la red de comunicaciones que conecta a los usuarios finales con algún proveedor de servicios (ISP) y es complementaria al núcleo de red. 

#### Tecnologías de acceso a red
- **Acceso telefónico**
	Los usuarios acceden a Internet a través de las líneas telefónicas utilizando un módem de acceso telefónico. Se llama así, porque el software del usuario **realmente llama al número de teléfono de un ISP y establece una conexión telefónica tradicional**. La línea de teléfono es de par trenzado. Un inconveniente es que era **extremadamente lento** (proporciona una velocidad máxima de 56 kbps), el otro problema es que se ocupaba la red telefónica, mientras se conecta a internet no se puede recibir ni hacer una llamada.
	![[Pasted image 20221004225726.png|400]]
- **DSL** 
	Los domicilios particulares contratan un servicio de DSL con la misma empresa que le proporciona el acceso telefónico. Se usa un **multiplexor de acceso DSL** para intercambiar datos a diferentes frecuencias. Recibe y envía datos a **velocidades mucho más altas que con acceso telefónico**, como las velocidades de descarga y carga son diferentes, se dice que es un acceso **asimétrico**. Otra ventaja es que los usuarios pueden llamar por teléfono y conectarse a internet al mismo tiempo.
	![[Pasted image 20221004225803.png|400]]
- **Cable**
	Es un sistema desplegado por las compañías de TV cable, que además de brindar un servicio de televisión, brinda el servicio de internet usando la red de distribución de cable coaxial. Se usan los módems por cable. Al igual que DSL el acceso es **asimétrico**, pero proporciona mayores velocidades.
	![[Pasted image 20221004225858.png|400]]
- **Fibra óptica**
	Ofrece velocidades mucho mayores que el cable de par trenzado y el cable coaxial.
- **Ethernet** 
	Utiliza cable de par trenzado para conectarse a un switch Ethernet.
	![[Pasted image 20221004230001.png|400]]
- **Wifi o LAN inalámbrica** 
	Se usa un punto de acceso para conectarse a internet y habitualmente hay que estar a unas pocas decenas de metros de él.
	![[Pasted image 20221004230027.png|300]]
- **WiMax** 
	Es una tecnología dentro de las conocidas como tecnologías de última milla, también conocidas como bucle local, que permite la **recepción de datos por microondas y retransmisión por ondas de radio**.

```ad-info
title: Diferencia entre fibra óptica y UTP
collapse: closed
![[Pasted image 20221004225014.png]]
```

### Categorización de medios
En cada par transmisor-receptor, los bits se envían a lo largo del medio físico que puede tener muchas formas y no tiene por qué ser del mismo tipo para cada par. Estos medios se pueden clasificar dentro de dos categorías: **medios guiados** (las ondas se trasportan en un medio sólido) y **medios no guiados** (las ondas se propagan por la atmósfera y el espacio exterior).

```ad-example
title: Ejemplo de medios guiados
collapse: closed
- Cable de cobre par trenzado (UTP) es el medio más barato y usado en las redes telefónicas.
- Cable coaxial consta de dos conductores concéntricos, uno central, llamado núcleo, encargado de llevar la información, y uno exterior, de aspecto tubular, llamado malla, blindaje o trenza.
- Cable de fibra óptica es un medio flexible y de poco espesor que conduce pulsos de luz, representando cada pulso un bit. Es inmune a las interferencias y transmite a velocidades muy altas.
```

```ad-example
title: Ejemplos de medios no guiados
collapse: closed
- Canales de radio terrestres: señales de espectro electromagnético. No requiere la instalación de cables físicos. Puede atravesar las paredes, proporciona conectividad móvil y puede enviar señal a grandes distancias.
- Canales de radio vía satélite.
```

### Núcleo de la red

El NETWORK CORE es una malla de routers interconectados. La pregunta principal es ¿cómo se transfieren los datos a través de la red? 
Los datos pueden ser enviados mediante Circuit Switching ([[Conmutacion de circuitos]]), donde se tiene un circuito dedicado por llamado, por ejemplo, la red de teléfonos; o mediante Packet-Switching ([[Conmutacion de paquetes]]), donde los datos son enviados a través de “trozos”.

![[Pasted image 20221004230251.png|200]]

## Redes de redes
En el Internet público, hay diferentes redes de acceso que se conectan al resto de Internet formando una jerarquía de capas o niveles de proveedores de servicios de Internet (ISP). 

```ad-tip
title: Tier 1
collapse: open
En el extremo más alto de la jerarquía hay un número relativamente pequeño de los llamados ISP de nivel 1 (Tier 1). Un ISP de nivel 1 es lo mismo que cualquier red: tiene enlaces y routers, y está conectado a otras redes. Sus routers deben ser capaces de transmitir una cantidad muy elevada de datos al mismo tiempo. Los ISP de nivel 1 (Tier 1) están caracterizados por:
- Estar conectados directamente a cada uno de los demás ISP de nivel 1. 
- Estar conectados a un gran número de ISP de nivel 2 (Tier 2) y otras redes de usuario. 
- Tener cobertura internacional. 
Además, en ese nivel están también los grandes distribuidores de contenido (Google, Akamai, Microsoft).

![[Pasted image 20221004231851.png|600]]
```

```ad-tip
title: Tier 2
collapse: open
En otro nivel de jerarquía se encuentran los tier 2, que son proveedores más pequeños, en general regionales, los cuales se conectan a uno o más tier 1. Cada tier 1 tiene múltiples tier 2, los cuales le pagan por sus servicios. Los tier 2 se conectan directamente con otros, evitando los tier 1, o con un IXP (Internet Exchange Point).

![[Pasted image 20221004232019.png|600]]
```

```ad-tip
title: Tier 3
collapse: open
El último paso del acceso a la red es a través de los tier 3, o ISP local, los cuales son clientes de las redes de tier 1 y tier 2. Son los más cercanos a los End Systems.

![[Pasted image 20221004232113.png|600]]
```

```ad-tip
title: Cliente
collapse: open
Un paquete atraviesa múltiples redes desde el host fuente hasta el host destino.

![[Pasted image 20221004232206.png]]
```
