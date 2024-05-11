# Definiciones de funciones

## Ecuaciones condicionales

Es posible definir funciones a través de ecuaciones con condiciones.
```haskell
abs x | x >= 0    = x 
      | otherwise = - x
```
Donde otherwise es una condición que siempre es verdadera.

Las condiciones se evalúan en secuencia y se toma la primera opción cuya condición sea verdadera.
Si todas las condiciones fallan, entonces da error.

Una forma alternativa de definición es mediante el uso de if.
```haskell
abs x = if x >= 0 then x else - x
```

## Pattern matching

Las funciones pueden ser definidas por casos a través del uso de patrones.
```haskell
not True = False
not False = True

True  && b = b
False && _ = False
```

Los patrones satisfacen la siguiente gramática:
```haskell
pat ::= _                -- wildcard
	| variable
	| literal
	| (pat_1 , ..., pat_m)
	| (pat_x : pat_xs)
	| C pat_1 ... pat_n  -- C denota un constructor
	| var@pat            -- as pattern
```

``````ad-example
title: Ejemplos
```haskell
fst (x, y) = x
fst (x, _) = x
snd (_, y) = y

head (x:_)   = x
tail (_: xs) = xs

duplica (x : xs)   = x : x : xs
duplica s@(x : xs) = x : s 

data AoB = A Int | B
g :: AoB -> Int 
g (A 4) = 8 
g (A x) = x 
g B     = 0
```
``````

## Definiciones locales (where)

**Definiciones locales** pueden ser introducidas por el uso de la palabra reservada where.
```haskell
f x y = (a + 1) * (a + 2)
	where a = (x + y) / 2
```
El **alcance** de dicha definición local es la expresión en la parte derecha de la definición de`f`.

Pueden haber múltiples definiciones locales.

## Definiciones locales (let)

Una forma alternativa de escribir definiciones locales es mediante el uso de **let**:
```haskell
f x y = let a = (x + y) / 2 
		in (a + 1) * (a + 2)
```

El alcance de las definiciones locales es la expresión en el **in**.
A diferencia del where un let es una expresión.

## Operadores

A las funciones definidas en forma infija se le suele llamar operadores.
Al escribir un operador entre paréntesis lo convertimos en una función prefija currificada:
```haskell
(+) 3 4
(*) 7 8
(<=) 2 3
```
De esta forma el operador puede ser pasado como argumento a funciones:
```haskell
suma = uncurry (+)
leq  = uncurry (<=)
```

La aplicación de un operador en forma infija requiere que el mismo esté saturado, esto es, que se le pasen todos sus argumentos.
La expresión 3 + 4 es correcta, mientras que 3+ no lo es.
En cambio, al escribir un operador entre paréntesis es posible parametrizarlo parcialmente:
```haskell
(+) 3
(*) 7
(<=) 2
```

### Secciones
Las secciones son una sintaxis especial para expresar la parametrización parcial de un operador infijo.
Se encierra entre paréntesis el operador junto a uno de sus argumentos.
```haskell
(3+)
(7*)
(2<=)
(*4)
(>0)

-- Ejemplos
filter (>0)
map (+1)
(3+) . abs
```

## Definiciones anónimas

Es posible definir funciones anónimas (o sea, sin nombre) mediante el uso de las llamadas expresiones <u>lambda</u>.
En Haskell se escribe: `\x -> x + 1`

La aplicación de una función anónima a sus argumentos se realiza de la misma forma que con las otras funciones: `(\x -> x + 1) 2`

Las definiciones de funciones con nombre también pueden ser vistas como definiciones en términos de expresiones lambda:
```haskell
suma1 = \x -> x + 1
add   = \x -> (\y -> x + y)
```

# Operaciones sobre listas

Las listas son un tipo polimórfico.
Constructores:
```haskell
[]  :: [a]
(:) :: a → [a] → [a]
```

## Generador de listas

La expresión `[m..n]` denota la lista de valores entre m y n.
	Por ejemplo, `[1..4]` denota la lista `[1, 2, 3, 4]`.
	Si m > n denota la lista vacía `[]`.

``````ad-example
title: Ejemplo

```haskell
m `divide` n = n `mod` m == 0
divisores n  = [d | d <- [1 . . n], d `divide` n]
mcd x y      = maximum [d | d <- divisores x, d `divide` y]
```
``````

## Funciones de Prelude

### `take n xs`
- retorna el segmento inicial de xs de largo n
- si el largo de xs es menor que n retorna toda xs
- si n <= 0 retorna la lista vacía

### `drop n xs`
```haskell
drop :: Int -> [a] -> [a]
```
- retorna la lista luego de quitar los primeros n elementos de xs
- si el largo de xs es menor que n retorna la lista vacía 
- si n <= 0 retorna la lista xs

#### Propiedad:
```haskell
(take n xs ++ drop n xs) == xs
```

### `last xs`
- retorna el último elemento de una lista
```haskell
last :: [a] → a
last xs = head $ drop (length xs - 1) xs
```

### `splitAt n xs`
- partir una lista en dos en un determinado lugar
```haskell
splitAt :: Int -> [a] -> ([a], [a])
splitAt n xs = (take n xs, drop n xs)
```

### `takeWhile p xs`
- prefijo más largo de una lista que satisface un predicado
```haskell
takeWhile :: (a -> Bool) -> [a] -> [a]
```

### `dropWhile p xs`
- resto de una lista xs después de aplicar `takeWhile p xs`
```haskell
takeWhile :: (a -> Bool) -> [a] -> [a]
```

### `span p xs`
- cortar una lista en dos de acuerdo a un predicado
```haskell
span :: (a -> Bool) -> [a] -> ([a], [a])
span p xs = (takeWhile p xs, dropWhile p xs)
```

### `zip ys xs`
- juntar dos listas en una lista de pares hasta que una de ellas se acabe
```haskell
zip :: [a] -> [b] -> [(a, b)]
zip []     _      = []
zip _      []     = []
zip (x:xs) (y:ys) = (x, y) : zip xs ys
```

### `zipWith f ys xs`
- juntar dos listas en una, aplicando f para "juntar los elementos"
```haskell
zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
zipWith f xs ys = map (uncurry f) (zip xs ys)
```

### `iterate f ini`
- genera la lista infinita `[ini, f ini, f f ini, ...]`
```haskell
iterate :: (a -> a) -> a -> [a]
iterate f ini = ini:iterate f (f ini)
```

# Funciones Recursivas

Las variables en un lenguaje funcional son inmutables.
Esto se debe a la no existencia de una sentencia de asignación que permita modificarlas.
Una consecuencia directa de esto es la ausencia de la iteración como estructura de control.
Es entonces que aparece la recursión como el mecanismo natural para definir las funciones en programación funcional.
En esta clase veremos definiciones recursivas sobre enteros y listas. Más adelante veremos definiciones recursivas para tipos de datos algebraicos en general.

## Ejemplos de recursión sobre listas

#### `length xs`
```haskell
length :: [a] -> Int
length []       = 0
length (x : xs) = 1 + length xs
```

#### `sum xs`
```haskell
sum :: Num a => [a] -> a
sum []       = 0
sum (x : xs) = x + sum xs
```

#### `all p xs`
```haskell
all :: (a -> Bool) -> [a] -> Bool
all p []       = True
all p (x : xs) = p x && all p xs
```

#### `map f xs`
```haskell
map :: (a -> b) -> [a] -> [b]
map f []       = []
map f (x : xs) = f x : map f xs
```

#### `filter p xs`
```haskell
filter :: (a → Bool) → [a] → [a]
filter p [ ] = [ ]
filter p (x : xs) | p x       = x : filter p xs
				  | otherwise = filter p xs
```

#### `xs ++ ys` (append)
```haskell
(++) :: [a] → [a] → [a]
[] ++ ys       = ys
(x : xs) ++ ys = x : (xs ++ ys)
```

#### `concat xss` 
```haskell
concat :: [[a]] → [a]
concat []         = []
concat (xs : xss) = xs ++ concat xss
```

#### `reverse xs` 
```haskell
reverse :: [a] → [a]
reverse []       = []
reverse (x : xs) = reverse xs ++ [x]
```


## `foldr`

```haskell
foldr :: (a → b → b) → b → [a] → b
foldr f e []       = e
foldr f e (x : xs) = f x (foldr f e xs)
```

Es un esquema o patrón de recursión que captura definiciones por recursión estructural.
Cualquier definición recursiva estructural de la forma:
```haskell
h :: [a] → b 
h []       = e 
h (x : xs) = f x (h xs)
```
Se puede escribir como `h = foldr f e`.

Dada una función f y un valor e:
```haskell
foldr f e (x1 : x2 : ... : xn : [])
	= x1 `f` (x2 `f` (...(xn `f` e)...))
```

```ad-example
title: Ejemplos
collapse: close
![[Pasted image 20230622163355.png]]
![[Pasted image 20230622163409.png]]
```

## `foldl`
```haskell
foldl :: (b -> a -> b) -> b -> [a] -> b
foldl f v []       = v
foldl f v (x : xs) = foldl f (f v x) xs
```

Estamos ante un nuevo esquema de recursión que ahora captura definiciones recursivas de la forma:
```haskell
h :: b -> [a] -> b
h v []       = v
h v (x : xs) = h (f v x) xs
```

Notar que el valor v juega el rol de acumulador, al que hay que darle un valor inicial.

Dada una función f y un valor v:
```haskell
foldl f v (x1 : x2 : ... : xn : [])
	= (...((v `f` x1) `f` x2)...) `f` xn
```

```ad-example
title: Ejemplos
![[Pasted image 20230622165755.png]]


```








