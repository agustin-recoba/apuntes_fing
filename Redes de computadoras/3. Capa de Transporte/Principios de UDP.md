Protocolo que hace casi lo mínimo que un protocolo de transporte debe hacer. Además de la función de multiplexación/demultiplexación y algún mecanismo de comprobación de errores, **no añade nada a IP**. Prácticamente, es la aplicación la que se comunica directamente con IP.

Con UDP no se tiene lugar una fase de establecimiento de la conexión entre las entidades de la capa de transporte emisora y receptora previa al envío del segmento. Por eso se dice que UDP **es un protocolo sin conexión.**

### Ventajas frente a TCP: 
- **Mejor control en el nivel de aplicación, sobre qué datos se envían y cuándo:** 
Tan pronto como un proceso pasa datos a UDP, UDP los empaqueta en un segmento UDP e inmediatamente entrega el segmento a la capa de red.
- **Sin establecimiento de la conexión:**
UDP inicia la transmisión sin formalidades preliminares. Por tanto, UDP no añade ningún retardo a causa del establecimiento de una conexión.
- **Sin información del estado de la conexión:**
UDP no mantiene información del estado de la conexión y no controla ninguno de estos parámetros. Por lo cual un servidor dedicado a una aplicación concreta suele poder soportar más clientes activos cuando la aplicación se ejecuta sobre UDP que cuando lo hace sobre TCP.
- **Poca sobrecarga debida a la cabecera de los paquetes:**
Solo requiere 8 bytes.

### Desventajas frente a TCP:
- No hay ninguna garantía de que los datos lleguen al receptor. Dado que UDP no implementa transferencia fiable, no es posible asegurar que los datos enviados hayan sido recibidos por el receptor. 
- Es posible saturar al receptor o incluso saturar la red y no darse cuenta del problema. Dado que UDP no implementa control de flujo ni control de congestión, es posible que se generen problemas como ser la pérdida de paquetes debido a que el receptor no puede procesar los datos tan rápido como son recibidos o que incluso se sature la capacidad de la red. En este caso, la aplicación experimentaría una pérdida considerable de paquetes.

``````ad-danger
title: **No** hay control de congestión
Se dice que UDP no es un **protocolo justo**, dado que no tiene control de congestión, puede enviar segmentos a la velocidad que le permita el medio (o le demande la aplicación) y no se autolimita acorde al estado de la red. De esta forma, UDP podría consumir un mayor ancho de banda frente a las conexiones TCP que coexistan en el mismo tiempo. Esto puede generar que la red entre en un estado de congestión y se produzcan desbordamientos masivos de paquetes en los routers. Por lo tanto, la ausencia de control de congestión en UDP puede dar lugar a **altas tasas de pérdidas** entre un emisor y un receptor UDP.

ㅤ

```ad-info
title: Posible solución
collapse: closed
Para que UDP pueda implementar control de congestión sería necesario contar con algún mecanismo que informe o infiera la existencia de congestión en la red. Por ejemplo, TCP utiliza la pérdida de mensajes de confirmación ACK para inferir la congestión. Por lo tanto, si se desea que UDP realice control de congestión, una opción sería agregarle mensajes de confirmación o algún tipo de retroalimentación del receptor. También se podría implementar algún tipo de retroalimentación de parte de los nodos intermedios de la red. Luego, pudiendo detectar la congestión, el siguiente paso sería agregar a UDP algún mecanismo que controle los datos que se envían, pudiendo reducir o aumentar la velocidad a la que se envían los datos.
```
``````

#### Segmento UDP

Los datos de la aplicación ocupan el campo de datos del segmento.
La cabecera UDP solo tiene 4 campos y cada uno de ellos tiene una longitud de 2 bytes.
El host receptor utiliza la suma de comprobación para detectar si se han introducido errores en el segmento.

![[Captura desde 2022-10-04 20-42-11.png|400]]

##### Suma de comprobación

Mecanismo de **detección de errores**. No existe ninguna garantía de que todos los enlaces existentes entre el origen y el destino proporcionen un mecanismo de comprobación de errores, es decir, uno de los enlaces puede utilizar un protocolo de la capa de enlace que no proporcione comprobación de errores. Incluso si los segmentos se transfieren correctamente a través del enlace, es posible que se introduzcan errores de bit cuando un segmento se almacena en la memoria de un router. Aunque UDP proporciona un mecanismo de comprobación de errores, **no hace nada para recuperarse del error**. 

```ad-info
Algunas implementaciones de UDP simplemente descartan el segmento dañado y otras lo pasan a la aplicación junto con una advertencia.
```

