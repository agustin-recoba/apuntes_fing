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


## Parte b:

## Parte c:
