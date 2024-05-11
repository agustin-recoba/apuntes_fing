# Introducción

En la representación de un símbolo $X ∈ R$ con un número finito de bits R necesariamente se cometerán errores (“distorsión”).
¿Cuán rápido se puede transmitir sobre un canal sin ruido si se permite cometer errores en la representación?
	Dada una distorsión D mínima “tolerable” para representar en el receptor una señal (la fuente de origen) ¿cuál es la cantidad mínima de información $R(D)$ que se debe transmitir?

![[Pasted image 20230626152450.png]]

## Cuantificación de una variable aleatoria real

![[Pasted image 20230626152537.png]]

### Caso unidimensional
![[Pasted image 20230626152604.png]]

```ad-example
title: Ejercicio
![[Pasted image 20230626152651.png]]


Desarrollo:
![[Pasted image 20230626204116.png]]
![[Pasted image 20230626204126.png]]
```

#### Cuantificación de una V.A. gaussiana con un bit (R=1) y distancia euclídea
![[Pasted image 20230626152731.png]]

## Cuantificación: condiciones de optimalidad

![[Pasted image 20230626152859.png]]

### Algoritmo de Lloyd generalizado
![[Pasted image 20230626152924.png]]

```ad-example
title: Ejemplo
collapse: closed
C_1 con 4 elementos:
![[Pasted image 20230626153010.png]]


Se calculan los vecinos más cercanos:
![[Pasted image 20230626153021.png]]


Recalculo los centroides (cuadrados blancos) y queda C_2:
![[Pasted image 20230626153030.png]]


Se recalculan los vecinos más cercanos con C_2:
![[Pasted image 20230626153038.png]]


Nuevos centroides y se obtiene C_3:
![[Pasted image 20230626153048.png]]

![[Pasted image 20230626153055.png]]

![[Pasted image 20230626153106.png]]

![[Pasted image 20230626153114.png]]
```

## Cuantificación vectorial: un ejemplo

![[Pasted image 20230626153209.png]]

# Definiciones

![[Pasted image 20230626155020.png]]

![[Pasted image 20230626155029.png]]

![[Pasted image 20230626155038.png]]

```ad-example
title: Ejemplo
![[Pasted image 20230626155058.png]]
```

## Código $(2^{nR}, n)$ con distorsión

![[Pasted image 20230626155250.png]]

![[Pasted image 20230626155259.png]]

![[Pasted image 20230626155309.png]]

## Par tasa-distorsión $(R, D)$ alcanzable

![[Pasted image 20230626155414.png]]

![[Pasted image 20230626155424.png]]

## $R(D)$ y $D(R)$

![[Pasted image 20230626155604.png]]

![[Pasted image 20230626155612.png]]

## Función tasa-distorsión informacional $R^{I}(D)$

![[Pasted image 20230626161521.png]]

## Teorema fundamental tasa-distorsión

![[Pasted image 20230626161633.png]]

# Calculo de $R(D)$: ejemplos

## Cálculo de $R(D)$ para una fuente binaria

![[Pasted image 20230626161803.png]]

![[Pasted image 20230626161826.png]]
![[Pasted image 20230626161836.png]]
![[Pasted image 20230626161847.png]]
![[Pasted image 20230626161857.png]]

## Cálculo de R(D) para una fuente gaussiana

El Teorema de tasa-distorsión también se puede enunciar y probar con fuentes continuas con buen comportamiento y medidas de distorsión no acotadas.

![[Pasted image 20230626162014.png]]

![[Pasted image 20230626162023.png]]
![[Pasted image 20230626162030.png]]
![[Pasted image 20230626162041.png]]
![[Pasted image 20230626162130.png]]
![[Pasted image 20230626162142.png]]

## Descripción simultánea de variables gaussianas 

![[Pasted image 20230626163836.png]]
![[Pasted image 20230626163849.png]]
![[Pasted image 20230626163859.png]]
![[Pasted image 20230626163912.png]]
![[Pasted image 20230626163925.png]]
![[Pasted image 20230626163940.png]]

# Teorema tasa-distorsión

![[Pasted image 20230626161633.png]]

## Recíproco

![[Pasted image 20230626165323.png]]

### Prueba, parte 1 de 3
![[Pasted image 20230626165450.png]]

```ad-note
collapse: closed
title: Pasos
#### 1
![[Pasted image 20230626165654.png]]
#### 2
![[Pasted image 20230626165706.png]]
#### 3
![[Pasted image 20230626165713.png]]
#### 4
![[Pasted image 20230626165728.png]]
#### 5
![[Pasted image 20230626165736.png]]
#### 6
![[Pasted image 20230626165742.png]]
```

### Prueba, parte 2 de 3
![[Pasted image 20230626170007.png]]

```ad-note
collapse: closed
title: Pasos
#### 1
![[Pasted image 20230626170022.png]]
#### 2
![[Pasted image 20230626170031.png]]
#### 3
![[Pasted image 20230626170041.png]]
#### 4
![[Pasted image 20230626170050.png]]
```

### Prueba, parte 3 de 3
![[Pasted image 20230626170137.png]]

```ad-note
collapse: closed
title: Pasos
#### 1
![[Pasted image 20230626170150.png]]
#### 2
![[Pasted image 20230626170200.png]]
```

## Separación de la codificación de fuente y de canal con distorsión

Argumentos similares se pueden aplicar cuando se envía una fuente codificada a través de un canal con ruido y se puede demostrar un teorema de separación fuente-canal en el mismo espíritu del que ya se demostró.

### Distorsión $\epsilon$-típica
![[Pasted image 20230626170345.png]]

## Directo

![[Pasted image 20230626170501.png]]

### Lineamientos de la prueba
Tiene una técnica de demostración similar a la usada en Capacidad de Canal.

![[Pasted image 20230626170525.png]]

![[Pasted image 20230626170537.png]]

![[Pasted image 20230626170554.png]]

# Codificación de canal para un canal gaussiano

La similitudes entre el teorema de codificación de canal y el de tasa-distorsión no quedan solo en las técnicas de demostración.

![[Pasted image 20230626170733.png]]

## Tasa-distorsión para un canal gaussiano

![[Pasted image 20230626170747.png]]

## Concluyendo

![[Pasted image 20230626170808.png]]
![[Pasted image 20230626171458.png]]


