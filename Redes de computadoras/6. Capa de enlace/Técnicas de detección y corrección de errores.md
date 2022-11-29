Notamos EDC a los Bits de detección y corrección de errores (redundancia), y D a los datos protegidos por el chequeo de errores, que puede incluir campos de encabezado. La detección de errores no es 100% confiable, ya que el protocolo puede olvidar algunos errores (raramente), aunque con mayor campo para EDC significa una mejor corrección y detección de errores.

![[Pasted image 20221116122946.png|500]]

```ad-question
title: Si todos los enlaces de Internet tuvieran que proporcionar un servicio de entrega de tramas fiable, ¿sería redundante el servicio de entrega fiable de TCP?
collapse: closed
No, no sería redundante ya que se pueden perder paquetes por congestión en las colas de los routers, o pueden llegar en desorden a causa de diversidad de caminos en un flujo.
```


#### Comprobaciones de paridad

En un esquema de paridad par, el emisor simplemente incluye un bit adicional y selecciona su valor de modo que el número total de 1s en los d+1 bits (la info. original más el bit de paridad) sea par. El receptor solamente necesita contar el número de 1s de los d+1 bits recibidos. 
Si se está utilizando un esquema de paridad par y se encuentra un número impar de bits con valor 1, el receptor sabrá que se ha producido al menos un error de bits. O que se ha producido un número impar de errores de bits.

![[Pasted image 20221116123009.png]]

#### Paridad bidimensional

Los d bits de D se dividen en i filas y j columnas. Para cada una de esas filas y columnas se calcula un valor de paridad.
Los i+j+1 bits de paridad resultantes serán los bits de detección de error.
Se detecta el error en la paridad tanto de la fila como de la columna. El receptor no solo podrá detectar el hecho de que se ha producido un único error de bit, sino que puede utilizar los índices de la columna y de la fila que presentan errores de paridad para identificar realmente el bit corrompido y corregirlo.

![[Pasted image 20221116123045.png|500]]

```ad-faq
title: FEC
**Corrección de errores hacia delante** (FEC): la capacidad del receptor para detectar y corregir errores a la vez.
```


#### Suma de comprobación

Los d bits de datos se tratan como una secuencia de enteros de k bits. El método consiste en sumar estos enteros de k bits y utilizar la suma resultante como bits de detección de errores.
##### En Internet
[completar con referencia a IP y UDP]

#### Comprobación de redundancia cíclica (CRC)

Se toman los bits de datos D como un número binario. Se toma G, un patrón de r+1 bit (generador). La idea es elegir r CRC bits (R), de forma que:
- <D,R> sea divisible exactamente por G módulo 2. 
- El receptor conoce G, divide <D,R> por G. Si el resto no es cero, entonces hay error.
- Puede detectar errores en ráfaga menores a r+1 bits. 
Es muy utilizado en la práctica, por ejemplo, en Ethernet, 802.11 WiFi, ATM.

![[Pasted image 20221116123507.png|500]]

```ad-example
title: Ejemplo de CRC
collapse: closed
![[Pasted image 20221116123544.png]]
```
