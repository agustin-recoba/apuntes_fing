# Conmutación de circuitos

Se reservan recursos de extremo a extremo en la red para cada llamada, para esto, cuando dos host quieren comunicarse, la red establece una conexión terminal a terminal dedicada entre ellos. Esto consume tiempo de espera. Los recursos reservados no se comparten con otras conexiones, por lo tanto si no se usan los recursos, estos son desperdiciados. La conmutación de circuitos ofrece una calidad garantizada.

![[Pasted image 20221004230714.png|300]]

El ancho de banda disponible se divide entre el número de usuarios y tenemos dos formas de hacer esto:

- **En Multiplexación por División de la Frecuencia** (FDM), el espectro de frecuencias disponible en un enlace se reparte todo el tiempo entre las conexiones establecidas en el mismo.

	![[Pasted image 20221004231001.png|500]]

- **En Multiplexación por División en el Tiempo** (TDM), el tiempo se divide en ranuras de duración fija preestablecida (“marcos”) y estas en otras ranuras (con una cantidad preestablecida), también de duración constante (”particiones”), y cada una de ellas es utilizada periódicamente por una conexión, con todo el espectro de frecuencias disponible en ese lapso de tiempo para ella.

	![[Pasted image 20221004231042.png|500]]

### Ventajas
- El ancho de banda es definido y se mantiene constante durante la comunicación. 
- El circuito es fijo, no se pierde tiempo en el encaminamiento de la información. 
- La transmisión se realiza en tiempo real, siendo útil para la comunicación de voz y vídeo. 
- Si bien existe retardo en el establecimiento de la llamada, el retardo de la transmisión posterior es despreciable; si el tráfico se realiza generalmente entre el mismo par de estaciones, puede ser más veloz.

### Desventajas
- Cuando no se utiliza el enlace se desaprovechan recursos (ancho de banda). 
- Si la comunicación es a ráfagas en vez de continua, o entre una gran variedad de estaciones, es ineficiente. 
- Retraso en el inicio de la comunicación 
- El camino físico es siempre el mismo, por lo que no se utilizan los posibles caminos alternativos que puedan surgir que sean más eficientes. 
- Se requiere un tiempo para realizar la conexión, lo que conlleva un retraso en la transmisión de la información.