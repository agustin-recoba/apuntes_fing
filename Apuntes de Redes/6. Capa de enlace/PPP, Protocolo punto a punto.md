El protocolo punto a punto PPP es un protocolo de la capa de enlace que opera sobre un enlace punto a punto: un enlace que conecta directamente dos nodos situados cada uno de ellos en extremo del enlace.

### **Requisitos establecidos para el diseño de PPP:**
- **Entramado de paquetes:** El emisor de la capa de enlace del protocolo PPP tiene que poder tomar un paquete del nivel de red y encapsular dentro de la trama de la capa del enlace PPP de tal modo que el receptor sea capaz de identificar el inicio y el final tanto de la trama de la capa de enlace como del paquete de la capa de red contenido en ella.
- **Transparencia:** PPP no debe aplicar ninguna restricción a los datos que aparecen en el paquete de la capa de red. Por ejemplo, no puede prohibir el uso de ciertos patrones de bits en el paquete de la capa de red.
- **Múltiples protocolos de la capa de red:** Tiene que poder dar soporte a múltiples protocolos de la capa de red que se ejecuten sobre el mismo enlace físico de forma simultánea.
- **Múltiples tipos de enlaces:** Además de poder transportar múltiples protocolos de nivel superior, PPP también tiene que poder operar sobre una amica variedad de tipos de enlaces, incluyendo enlaces serie o paralelo, enlaces síncronos o asíncronos, enlaces de baja velocidad o de alta velocidad, o enlaces electrónicos u ópticos.
- **Detección de errores:** Tiene que ser capaz de detectar errores de bit en las tramas
recibidas.
- **Pervivencia de la conexión:** Tiene que ser capaz de detectar un fallo en el nivel de enlace y de señalar esa condición de error a la capa de red.
- **Negociación de direcciones de la capa de red:** Los endpoint pueden aprender/configurar la dirección de red de los otros.
- Simplicidad

### Trama PPP

![[Pasted image 20221116205024.png]]

### Byte Stuffing 

![[Pasted image 20221116205057.png]]

### PPP Data Control Protocol

![[Pasted image 20221116205122.png]]