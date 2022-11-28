# Ej. 1
```ad-abstract
title: Letra
collapse: closed
![[Pasted image 20221031160828.png]]
```

| \#Paso | N'                  | w   | i   | (D(i), p(i)) |
| ------ | ------------------- | --- | --- | ------------ |
| 0      | x                   | x   | z   | 8, x         |
| 0      | x                   | x   | y   | 6, x         |
| 0      | x                   | x   | v   | 3, x         |
| 0      | x                   | x   | w   | 6, x         |
| 0      | x                   | x   | t   | $\infty$, -  |
| 0      | x                   | x   | u   | $\infty$, -  |
| 1      | x, v                | v   | y   | 6, x         |
| 1      | x, v                | v   | t   | 7, v         |
| 1      | x, v                | v   | u   | 6, v         |
| 1      | x, v                | v   | w   | 6, x         |

| **i**   | **D(i)** | **p(i)** |
| --- | ---- | ---- |
| x   | 0    | -    |
| z   | 8    | x    |
| y   | 6    | x    |
| v   | 3    | x    |
| w   | 6    | x    |
| t   | 7    | v    |
| u   | 6    | v    |

  
# Ej. 2
```ad-abstract
title: Letra
collapse: closed
![[Pasted image 20221031160906.png]]
```


# Ej. 3
```ad-abstract
title: Letra
collapse: closed
![[Pasted image 20221031160927.png]]
![[Pasted image 20221031160938.png]]
```
z:
| -   | z   | v   | w   | y   | x   |     | -    | z   | v   | w   | y   | x   |     |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| z   | 0   | 6   | inf | inf | 2   |     | z   | 0   | 5   | 7   | 5   | 2   |     |
| v   | ?   | ?   | ?   | ?   | ?   |     | v   | 6   | 0   | 1   | inf | 3   |     |
| w   | ?   | ?   | ?   | ?   | ?   |     | w   | ?   | ?   | ?   | ?   | ?   |     |
| y   | ?   | ?   | ?   | ?   | ?   |     | y   | ?   | ?   | ?   | ?   | ?   |     |
| x   | ?   | ?   | ?   | ?   | ?   |     | x   | 2   | 3   | inf | 3   | 0   |     |

v: 
| -   | z   | v   | w   | y   | x   |     | -   | z   | v   | w   | y   | x   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| z   | ?   | ?   | ?   | ?   | ?   |     | z   | 0   | 6   | inf | inf | 2   |
| v   | 6   | 0   | 1   | inf | 3   |     | v   | 5   | 0   | 1   | 3   | 3   |
| w   | ?   | ?   | ?   | ?   | ?   |     | w   | inf | 1   | 0   | 2   | inf |
| y   | ?   | ?   | ?   | ?   | ?   |     | y   | ?   | ?   | ?   | ?   | ?   |
| x   | ?   | ?   | ?   | ?   | ?   |     | x   | 2   | 3   | inf | 3   | 0   |

x: 
| -   | z   | v   | w   | y   | x   |     | -   | z   | v   | w   | y   | x   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| z   | ?   | ?   | ?   | ?   | ?   |     | z   | 0   | 6   | inf | inf | 2   |
| v   | ?   | ?   | ?   | ?   | ?   |     | v   | 6   | 0   | 1   | inf | 3   |
| w   | ?   | ?   | ?   | ?   | ?   |     | w   | ?   | ?   | ?   | ?   | ?   |
| y   | ?   | ?   | ?   | ?   | ?   |     | y   | inf | inf | 2   | 0   | 3   |
| x   | 2   | 3   | inf | 3   | 0   |     | x   | 2   | 3   | 4   | 3   | 0   |

y: 
| -   | z   | v   | w   | y   | x   |     | -   | z   | v   | w   | y   | x   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| z   | ?   | ?   | ?   | ?   | ?   |     | z   | ?   | ?   | ?   | ?   | ?   |
| v   | ?   | ?   | ?   | ?   | ?   |     | v   | ?   | ?   | ?   | ?   | ?   |
| w   | ?   | ?   | ?   | ?   | ?   |     | w   | inf | 1   | 0   | 2   | inf |
| y   | inf | inf | 2   | 0   | 3   |     | y   |  5   |  3   | 2    |  0   |  3   |
| x   | ?   | ?   | ?   | ?   | ?   |     | x   | 2   | 3   | inf | 3   | 0   |

w:
| -   | z   | v   | w   | y   | x   |     | -   | z   | v   | w   | y   | x   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| z   | ?   | ?   | ?   | ?   | ?   |     | z   | ?   | ?   | ?   | ?   | ?   |
| v   | ?   | ?   | ?   | ?   | ?   |     | v   | 6   | 0   | 1   | inf | 3   |
| w   | inf | 1   | 0   | 2   | inf |     | w   | 7   | 1   | 0   | 2   | 4   |
| y   | ?   | ?   | ?   | ?   | ?   |     | y   | inf | inf | 2   | 0   | 3   |
| z   | ?   | ?   | ?   | ?   | ?   |     | z   | ?   | ?   | ?   | ?   | ?   |


# Ej. 4
```ad-abstract
title: Letra
collapse: closed
![[Pasted image 20221031160954.png]]
```

NO, this is because that decreasing link cost won’t cause a loop (caused by the next-hop relation of between two nodes of that link). Connecting two nodes with a link is equivalent to decreasing the link weight from infinite to the finite weight.

# Ej. 5
```ad-abstract
title: Letra
collapse: closed
![[Pasted image 20221031183341.png]]
```

## Parte a
eBGP, pues obitiene el dato de 4c (un router externo a AS3).

## Parte b
iBGP, pues obtiene el dato de 3c (interno a AS3) y x no pertenece a AS3.

## Parte c
eBGP, pues obitiene el dato de 3a (un router externo a AS1).

## Parte d
iBGP, pues obtiene el dato de 1c (interno a AS1) y x no pertenece a AS3.
# Ej. 6
```ad-abstract
title: Letra
collapse: closed
![[Pasted image 20221031185540.png]]
![[Pasted image 20221031185551.png]]
```

## Parte a: 
Como el router de salida es $1c$, el camino más corto (menor costo) empieza por el enlace $1d$-$1a$, el cual toma la interfaz $I_1$.

## Parte b:
Dos rutas:
- Ruta 1:
	- AS-PATH = \[AS2, AS4, x\]
	- NEXT-HOP = $1b$
- Ruta 2:
	- AS-PATH = \[AS3, AS4, x\]
	- NEXT-HOP = $1c$

Como el largo del AS-PATH es idéntico en ambas rutas, se desempata por el camino hasta el NEXT-HOP más corto. Este es $1b$. Por lo tanto, $I = I_2$.

## Parte c:
Ahora el largo del AS-PATH de la ruta 1 aumenta a 3, por lo que la ruta elegida será la 2. La salida es por $I_1$.

# Ej. 7
```ad-abstract
title: Letra
collapse: closed
![[Pasted image 20221031191317.png]]
```

![[Pasted image 20221031192053.png]]

# Ej. 8
```ad-abstract
title: Letra
collapse: closed
![[Pasted image 20221031192201.png]]
```

A debería anunciar a B dos rutas:
	- A-W 
	- A-V.
 A debería anunciar a C una única ruta:
	 - A-V.

 C recibe dos AS-PATH: 
	 - B-A-W, 
	 - B-A-V, 
	 - A-V

# Ej. 9
```ad-abstract
title: Letra
collapse: closed
![[Pasted image 20221031194040.png]]
![[Pasted image 20221031194103.png]]
```

## Parte a:
NOTA: 122.0.0.0/7 agrupa las subredes A y B.

### AS3_a
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 123.0.0.0/8   | eth0               |
| *             | eth1               |

### AS2_a
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 200.128.0.0/9 | eth1               |
| *             | eth0               |

### AS2_b
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 200.128.0.0/9 | eth0               |
| 200.64.0.0/10 | eth2               |
| *             | eth1               |

### AS1_a
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 122.0.0.0/7   | eth0               |
| 200.128.0.0/9 | eth0               |
| 200.64.0.0/10 | eth0               |
| *             | eth1               |

### AS1_b
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 200.128.0.0/9 | eth1               |
| 200.64.0.0/10 | eth1               |
| *             | eth0               |

### AS1_c
| Prefijo       | Interfaz de salida |
| ------------- | ------------------ |
| 122.0.0.0/8   | eth0               |
| 200.128.0.0/9 | eth2               |
| 200.64.0.0/10 | eth2               |
| 123.0.0.0/8   | eth3               |
| *             | eth1               |


## Parte b:
### Tablas de a:
| -   | a   | b   | c   |     | -   | a   | b   | c   |     | -   | a   | b   | c   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| a   | 0   | 7   | 5   |     | a   | 0   | 1   | 5   |     | a   | 0   | 1   | 3   |
| b   | ?   | ?   | ?   |     | b   | ?   | ?   | ?   |     | b   | 1   | 0   | 2   |
| c   | 5   | 2   | 0   |     | c   | 5   | 2   | 0   |     | c   | 5   | 2   | 0   |
### Tablas de b:
| -   | a   | b   | c   |     | -   | a   | b   | c   |     | -   | a   | b   | c   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| a   | ?   | ?   | ?   |     | a   | ?   | ?   | ?   |     | a   | 0   | 1   | 5   |
| b   | 7   | 0   | 2   |     | b   | 1   | 0   | 2   |     | b   | 1   | 0   | 2   | 
| c   | 5   | 2   | 0   |     | c   | 5   | 2   | 0   |     | c   | 5   | 2   | 0   |
### Tablas de c:
| -   | a   | b   | c   |     | -   | a   | b   | c   |     | -   | a   | b   | c   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| a   | 0   | 7   | 5   |     | a   | 0   | 7   | 5   |     | a   | 0   | 1   | 5   |
| b   | 7   | 0   | 2   |     | b   | 7   | 0   | 2   |     | b   | 1   | 0   | 2   |
| c   | 5   | 2   | 0   |     | c   | 5   | 2   | 0   |     | c   | 3   | 2   | 0   | 


# Ej. 10
```ad-abstract
title: Letra
collapse: closed
![[Pasted image 20221031204620.png]]
![[Pasted image 20221031204631.png]]
```
## Parte a:
![[Pasted image 20221031210008.png]]
## Parte b:
### R1:
![[Pasted image 20221031210038.png]]
### R4:
![[Pasted image 20221031210109.png]]
![[Pasted image 20221031210122.png]]

## Parte c:
![[Pasted image 20221031210207.png]]