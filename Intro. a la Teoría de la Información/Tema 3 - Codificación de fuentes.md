# Codificación de fuente

## Definiciones
![[Pasted image 20230327171714.png]]

![[Pasted image 20230327173234.png]]
![[Pasted image 20230327173244.png]]

![[Pasted image 20230327173258.png]]
![[Pasted image 20230327173306.png]]

## Clasificación de códigos
![[Pasted image 20230327173422.png]]

![[Pasted image 20230327173500.png]]

![[Pasted image 20230327173512.png]]

![[Pasted image 20230327173524.png]]

## Desigualdad de Kraft

![[Pasted image 20230327173600.png]]
![[Pasted image 20230327173612.png]]


### Desigualdad de Kraft extendida
![[Pasted image 20230327173631.png]]
![[Pasted image 20230327173643.png]]

### Desigualdad de Kraft para códigos UD

La clase de los codigos UD es más grande que la de los instantáneos, sin embargo no presentan ninguna ventaja respecto a la longitud de las palabras de código.

![[Pasted image 20230327173708.png]]
![[Pasted image 20230327173725.png]]
![[Pasted image 20230327173736.png]]

![[Pasted image 20230327173755.png]]

![[Pasted image 20230327173802.png]]

## Códigos instantáneos óptimos (o cómo buscarlos)

![[Pasted image 20230327173830.png]]

## Primer Teorema de Shannon

![[Pasted image 20230327173910.png]]

![[Pasted image 20230327173920.png]]

![[Pasted image 20230327192706.png]]
## Cotas para el largo medio

![[Pasted image 20230327193459.png]]

```ad-note
title: Obs.
La desigualdad entre las entropías se obtiene de multiplicar cada término por $p_i$ y luego sumar sobre $i$.


De esta forma se obtiene la fórmula de largo medio y la definición de entropía.
```


![[Pasted image 20230327193513.png]]

### Procesos estocásticos estacionarios

![[Pasted image 20230327193526.png]]

![[Pasted image 20230327193538.png]]

### La mala distribución

![[Pasted image 20230327193559.png]]

![[Pasted image 20230327194828.png]]

```ad-important
title: Interpretación
$D(p || q)$ es el incremento en la complejidad de la descripción debido a «información incorrecta».
```


![[Pasted image 20230327193616.png]]

# Esquemas de codificación

## Códigos de Shannon-Fano

![[Pasted image 20230327195324.png]]

![[Pasted image 20230327195332.png]]

## Códigos de Huffman

![[Pasted image 20230327195344.png]]

```ad-example
title: Ejercicio
![[Pasted image 20230327195352.png]]

$D = 2$
![[Pasted image 20230327201315.png]]
$D = 3$
![[Pasted image 20230327201532.png]]
```

![[Pasted image 20230327200917.png]]

### Comentarios sobre los códigos de Huffman

![[Pasted image 20230327200950.png]]

![[Pasted image 20230327201001.png]]

### Optimalidad de los códigos de Huffman

![[Pasted image 20230327201026.png]]
![[Pasted image 20230327201034.png]]
![[Pasted image 20230327201049.png]]
![[Pasted image 20230327201058.png]]

![[Pasted image 20230327204629.png]]
VER EXPLICACIÓN DE LA FIGURA EN EL LIBRO

#### Construcción del código
Usando los 3 lemas de arriba:
![[Pasted image 20230327204900.png]]
![[Pasted image 20230327204936.png]]
![[Pasted image 20230327205015.png]]
![[Pasted image 20230327205029.png]]

### Desventajas de Huffman
![[Pasted image 20230327205057.png]]

## Codigos de Shannon-Fano-Elias

![[Pasted image 20230327212203.png]]
![[Pasted image 20230327212215.png]]
![[Pasted image 20230327212228.png]]

![[Pasted image 20230327212237.png]]

![[Pasted image 20230327212254.png]]


## Codificación aritmética

![[Pasted image 20230327215751.png]]
![[Pasted image 20230327215758.png]]

![[Pasted image 20230327215812.png]]

![[Pasted image 20230327215829.png]]

![[Pasted image 20230327215838.png]]
![[Pasted image 20230327215934.png]]
![[Pasted image 20230327220000.png]]
![[Pasted image 20230327220014.png]]

![[Pasted image 20230327220031.png]]

A medida que la secuencia es más grande el intervalo se achica y los primeros bits quedan fijos, por lo cual “ya se pueden transmitir”.

### EJERCICIO 13.3.2
![[Pasted image 20230327225610.png]]

Como el primer símbolo es A, restringimos el intervalo a $[0,0.4)$

Para el segundo símbolo, el total del espacio disponible deja de ser $(0, 1)$ y es $[0,0.4)$
Como el 2do símbolo es C, nos quedamos con el último 20% del intervalo pues $p(C)=0.2$.
Entonces, quedamos con $[0.32, 0.4)$.

Repetimos para el 3er y 4to símbolo.
![[Pasted image 20230327231026.png]]

Dado el intervalo final, $[0.32, 0.3328)$ tomamos el punto medio $0.3264$, pasamos a binario y tomamos los primeros $9$ $bits$ sin tomar el 0 inicial.

## Optimalidad competitiva de los códigos

![[Pasted image 20230327232219.png]]

![[Pasted image 20230327232227.png]]
![[Pasted image 20230327232236.png]]
![[Pasted image 20230327232248.png]]
Donde la última desigualdad se cumple por Kraft.


![[Pasted image 20230327232300.png]]
![[Pasted image 20230327232322.png]]
![[Pasted image 20230327232331.png]]

![[Pasted image 20230327232343.png]]



