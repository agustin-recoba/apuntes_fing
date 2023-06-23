# Modelo de computación

En PF el modelo de computación es por reducción.
La evaluación de una expresión se realiza mediante un proceso de reducción, en donde las definiciones de funciones actúan como reglas de cómputo.

En cada paso de la evaluación de una expresión se debe decidir que subexpresión reducir.

Un redex (reducible expression) es una expresión formada por una función aplicada a argumentos, la cual está en condiciones de ser reducida.

# Estrategias de evaluación

Una expresión podría contener múltiples redexes. Surge entonces la pregunta de cuál redex reducir primero.
Es en ese contexto que podemos plantearnos diferentes estrategias de evaluación.

## Estrategia leftmost innermost

En cada paso se reduce el redex más interno (no contiene otros redexes) y más a la izquierda.

![[Pasted image 20230622230446.png]]

Corresponde a pasaje por valor (call-by-value).

## Estrategia leftmost outermost

![[Pasted image 20230622230547.png]]

Corresponde a pasaje por nombre (call-by-name).

# Terminación

La evaluación de una expresión puede:
- parar/terminar, retornando un valor, o 
- seguir por siempre (no terminación).

```ad-hint
title: Propiedad
1. Dos secuencias de reducción distintas de una expresión e que terminen lo van a hacer en el mismo valor v.

2. Dada una expresión, si existe alguna secuencia de reducción que termina con cierto valor, entonces la estrategia call-by-name terminará produciendo ese resultado. 
```

En cambio, call-by-value no garantiza llegar a ese resultado.

## No terminación

Consideremos la siguiente definición:
```haskell
inf :: Int
inf = 1 + inf
```

La evaluación de inf no termina independiente de la estrategia de evaluación

![[Pasted image 20230622230754.png]]

Decimos que su valor es indefinido.

## Terminación: call-by-value

![[Pasted image 20230622230815.png]]

La evaluación no termina.

## Terminación: call-by-name

![[Pasted image 20230622230834.png]]

El redex inicial más externo es la propia expresión (fst aplicado al par).
Esto muestra que en call-by-name los argumentos son evaluados a demanda.

## Valor indefinido

Al indefinido se lo suele denotar con el símbolo especial ⊥, que se pronuncia “bottom”.
Denota tanto la no terminación como la detención anormal de un programa.

Semánticamente, podemos pensar que existe un valor ⊥ en todos los tipos.
Por ejemplo:
- el valor de inf es el valor ⊥ del tipo Int
- el valor de 1/0 es el valor ⊥ del tipo Float

## Funciones estrictas

Se dice que una función es estricta si cumple que
	f ⊥ = ⊥
Esto es, el resultado de la función es indefinido cuando la aplicamos a un argumento cuyo valor es indefinido.

- Caso contrario se dice que la función es no estricta.
- Con call-by-value todas las funciones son estrictas.
- Los operadores aritm´eticos +, *, -, /, div, mod son todas funciones estrictas incluso con call-by-name.
- La función const X es no estricta con call-by-name.

# Problema de call-by-name

Puede haber subexpresiones que se evaluan múltiples veces. 

En nuestro ejemplo 1 + 2:
![[Pasted image 20230622231139.png]]

```ad-hint
title: Propiedad
Con call-by-value los argumentos son evaluados una sola vez, en cambio con call-by-name pueden llegar a ser evaluados muchas veces.
```

## Lazy evaluation

Para evitar la múltiple evaluación de subexpresiones se utiliza una suerte de punteros que apuntan a aquellas subexpresiones que ocurren en varios lugares de una expresión.

Las expresiones se representan entonces como grafos en lugar de como árboles.

Supongamos que tenemos definida una función `f x = b`.
Al hacer una llamada (`f e`), en lugar de copiar físicamente el argumento `e` en todos los lugares de `b` donde ocurre el parámetro `x`, se va a mantener una única copia de `e` y se va a apuntar a dicha expresión desde las posiciones que estaba `x`.
	`f e -> let p = e in b [x := p]`
Donde hemos simulado el puntero mediante una variable local.

De esta manera, cualquier reducción que se haga sobre `e` va a ser compartida por todas las posiciones en que ocurre `p`.
Por lo tanto, la evaluación de un argumento que sería copiado en múltiples posiciones por call-by-name ahora se hace a lo más una vez.

El uso de call-by-name junto con esta forma de sharing de subexpresiones se conoce como lazy evaluation o call-by-need.

Notar que este es un **mecanismo de evaluación** que posee la máquina abstracta que reduce las expresiones y no algo en lo que interviene el programador.

``````ad-example
title: Ejemplo
```haskell
square x = x ∗ x

square (1 + 2)
	−→ let p = 1 + 2 
		in p ∗ p
	−→ let p = 3 
		in p ∗ p
	−→ 9
```
``````

# Casos de uso de lazy evaluation

## Operaciones no estrictas sobre booleanos

```haskell
True  && b = b
False && b = False

True  || b = True 
False || b = b

if True  then e else _ = e
if False then _ else e = e
```

El if es estricto en la condición, pero no en las ramas.
	`if ⊥ then e else e' = ⊥`

## Explotando lazy evaluation

### Igualdad de listas.
```haskell
[]       == []       = True 
[]       == (_:_)    = False
(_:_)    == []       = False
(x : xs) == (y : ys) = (x == y) && (xs == ys)

[1, 2]      == [1, 2]     −−→ True
[1, 2, inf] == [1, 2]     −−→ False
[1, inf, 2] == [1, 2, 3]  −−→ ⊥
```

### Determinar si dos árboles contienen los mismos valores en las hojas y en el mismo orden.
```haskell
data Btree a = Leaf a | Fork (Btree a) (Btree a)

eqleaves :: Ord a => Btree a -> Btree a -> Bool
eqleaves t t0 = leaves t == leaves t0

leaves (Leaf a)   = [a]
leaves (Fork l r) = leaves l ++ leaves r
```

Las listas leaves t y leaves t0 se van construyendo a demanda y tanto como sea requerido por el operador de igualdad `(==)`.

![[Pasted image 20230622232318.png]]

### Determinar si algún elemento de una lista cumple un predicado.
```haskell
any :: (a -> Bool) -> [a] -> Bool
any p [] = False
any p (x : xs) | p x = True
			   | otherwise = any p xs

any2 p = not . null . filter p -- alternativamente
```
El procesamiento termina en cuanto un elemento pase el filter.

## Listas infinitas

Lazy evaluation permite algo que en principio parece imposible: programar con estructuras infinitas.

Un ejemplo clásico de listas infinitas es la lista ones:
```haskell
ones :: [Int]
ones = 1 : ones
```

Evaluar ones produce una lista infinita de unos.
Gracias a lazy evaluation podemos procesar sólo lo necesario:

![[Pasted image 20230622232609.png]]


```ad-hint
title: Propiedad
Con lazy evaluation toda expresión se evalúa hasta lo que le requiera el contexto en que se encuentra.
```

En este sentido, más que como una lista infinita, ones puede verse como una lista potencialmente infinita.
Esta idea no está restringida a listas, se aplica a cualquier estructura de datos.