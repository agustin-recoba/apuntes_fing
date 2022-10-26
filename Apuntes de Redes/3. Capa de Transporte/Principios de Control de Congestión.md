## Principios de Control de Congestión

La retransmisión de paquetes se ocupa de un síntoma de la congestión de red, pero no se ocupa de la causa de esa congestión de la red, que informalmente podemos definir como demasiados emisores intentando transmitir datos a una velocidad demasiado alta.
Para tratar la causa de la congestión es que se usan **mecanismos de control de congestión**.
Sabremos que existe congestión en la red si tenemos una pérdida de paquetes **(buffer overflow en los routers)** o **grandes retardos** (encolamiento en los buffers de los routers).

### Métodos para controlar la congestión

- #### Control de congestión terminal a terminal
La capa de red **no** proporciona soporte explícito a la capa de transporte para propósitos de control de congestión. La pérdida de segmentos TCP se toma como indicación de que existe congestión en la red, en consecuencia TCP reduce el tamaño de su ventana.
También se utilizan los **valores de retardo de ida y vuelta crecientes** como indicadores de que existe una mayor congestión de la red.

- #### Control de congestión asistido por la red
Los routers proporcionan una realimentación explícita (un bit que indica que existe congestión en un enlace o un paquete de asfixia) al emisor informando del estado de la congestión de la red.

```ad-info
title: Diferencias entre Control de flujo y Control de congestión
El control de flujo persigue que el emisor no transmita datos a una tasa de transmisión más alta de la que el receptor puede procesar. El control de congestión, en cambio, se encarga de que el transmisor no lo haga a una tasa más alta que lo que los enrutadores intermedios puedan procesar.
```
