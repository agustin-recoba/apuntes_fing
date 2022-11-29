# Hub o concentrador
Dispositivo de la capa física que actúa sobre los bits individuales en lugar de sobre las tramas. Cuando un bit, que representa un cero o un uno, llega procedente de una interfaz, el concentrador simplemente vuelve a crear el bit, incrementa su intensidad de energía y lo transmite a todas las demás interfaces.
Si un concentrador recibe tramas procedentes de dos interfaces distintas al mismo tiempo, se produce una colisión y los nodos que crean las tramas tendrán que retransmitirlas.

![[Pasted image 20221116143312.png|300]]


# Switch
Es un dispositivo de capa de enlace, más inteligente que un hub, que toma un rol activo, ya que: 
- Almacena y reenvía frames Ethernet. 
- Examina la dirección MAC del frame entrante. Selectivamente reenvía el frame a uno o más enlaces de salida cuando el frame debe ser reenviado en el segmento. Utiliza CSMA/CD. 
Son transparentes, ya que los hosts no se percatan de la presencia de switches y, además, son dispositivos plug-and-play con self-learning, por lo que no tienen por qué ser configurados. 
Los switch permiten múltiples transmisiones a la vez. Cada host tiene una conexión directa dedicada con el switch. 
En cada enlace entrante se utiliza el protocolo Ethernet, sin colisiones, full dúplex. Cada enlace es su propio dominio de colisión.

## Reenvío y filtrado

El **filtrado**  es la función del conmutador que determina si una trama debe ser reenviada a alguna interfaz o debe ser descartada.
El  **reenvío**  es la función del conmutador que determina las interfaces a las que un trama debe dirigirse y luego envía la trama a esas interfaces.

Para esto se utilizan tablas del conmutador **(Switch Table)**, que tiene entradas para algunos nodos de una red LAN. 
Contiene:
1. La dirección MAC de un nodo.
2. La interfaz del conmutador que lleva hacia el nodo.
3. El instante en el que la entrada para el nodo fue incluida en la tabla.

Posibilidades con la tabla:
- No existe ninguna entrada para la dirección MAC de destino, el conmutador difunde la trama a todas las interfaces menos por dónde se obtuvo tal trama.
- Existe una entrada para la MAC de destino pero procede de un segmento de la LAN que contiene al adaptador destino, por lo que se descarta la trama.
- Existe una entrada para la MAC de destino, tiene que ser reenviado al segmento de LAN donde esta el adaptador, el conmutador coloca la trama en la interfaz de salida asociada en la tabla.

![[Pasted image 20221116143801.png|300]]

## Auto-aprendizaje

Los conmutadores tienen la propiedad de que su tabla se construye de forma automática, dinámica y autónoma, sin intervención de un administrador de redes ni de ningún protocolo de configuración.
1. Incialmente la tabla del conmutador está vacía
2. Para cada trama entrante recibida en una interfaz, el conmutador almacena en su  tabla (1) la dirección MAC especificada en el campo dirección de origen de la trama,  (2) la interfaz de la que procede la trama y (3) la hora actual.
3. El conmutador borra una dirección de la tabla si no se recibe ninguna trama con esa dirección como dirección de origen transcurrido un cierto periodo de tiempo (tiempo de envejecimiento).

## Propiedades de la conmutación de la capa de enlace
- **Eliminación de las colisiones:** Los conmutadores almacenan las tramas en buffer y nunca transmiten más de una trama a un segmento simultáneamente.
- **Enlaces heterogéneos:**  Dado que un conmutador aísla un enlace de otro, los distintos enlaces de una LAN pueden operar a velocidades diferentes y pueden utilizar diferentes medios físicos.
- **Administración:**  Además de proporcionar una seguridad mejorada, un conmutador también facilita las tareas de gestión de la red. Un conmutador puede detectar cuando un adaptador de red funciona mal enviando continuamente tramas y desconectar internamente el adaptador que está funcionando incorrectamente. Un corte en un cable sólo desconecta al nodo que está usando el cable cortado para conectarse al conmutador.

