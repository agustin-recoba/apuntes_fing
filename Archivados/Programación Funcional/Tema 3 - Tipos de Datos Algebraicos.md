# Tipos Algebráicos Recursivos

## Tipos Algebraicos

Una primera definición:
```haskell
data T = C1 t11 ... t1k1 
	   ...
	   | Cn tn1 ... tnkn
```
Donde T es el nuevo tipo a introducir y cada Ci es un constructor de dicho tipo, que toma ki parámetros.

Un elemento de tipo T se construye aplicando alguno de sus constructores Ci a argumentos con tipos acordes a los dados en la definición.
Los constructores se pueden ver como funciones de tipo:
```haskell
C_i :: t_i1 -> ... -> t_ik_i -> T
```

## Tipos Algebráicos Recursivos

El tipo que se está definiendo se puede usar como tipo componente en la definición.

```ad-example
title: Ejemplos
Listas de caracteres:
`data LChar = Nil | Cons Char LChar`

Árboles Binarios de Enteros:
`data Tree = Empty | Branch Int Tree Tree`

Expresiones Numéricas:
`data Expr = Lit Int | Add Expr Expr | Sub Expr Expr`
```

Al igual que con las funciones, los constructores se pueden escribir de forma infija: 
`expr = (Lit 2) ‘Add‘ (Lit 4)`

Pero también se pueden definir constructores infijos:
```haskell
data Expr = Lit Int 
		  | Expr :+: Expr
		  | Expr :-: Expr
		  -- los constructores tienen que empezar con ’:’.
```

# Tipos Algebráicos Polimórficos

Las definiciones pueden contener variables de tipos:
```haskell
data T a1 ... am = C1 t11 ... t1k1
			     ...
			     | Cn tn1 ... tnkn
```
Donde las variables `ai` pueden ser usadas en la definición de los constructores.

``````ad-example
title: Ejemplo
```haskell
data List a = Nil | Cons a (List a) 

data Tree a = Empty | Branch a (Tree a) (Tree a)
```

Ejemplos de instancias:

- `Cons ’a’ (Cons ’b’ (Cons ’c’ Nil))`
Tiene tipo `List Char`

- `Branch "tito" (Branch "toto" Empty Empty) Empty`
Tiene tipo `Tree String`

- `Cons ’a’ (Cons True Nil)`
Incorrecto
``````

## Definición de Funciones

- Se pueden definir funciones polimórficas:
```haskell
length :: List a -> Int
length Nil       = 0
length (Cons xs) = 1 + length xs
```

- Funciones con polimorfismo ad-hoc
```haskell
maximum :: Ord a => List a -> Int
maximum (Cons x Nil) = x
maximum (Cons x xs)  = max x (maximum xs)
```

- Funciones no polimórficas:
```haskell
sumOrd :: List Char -> Int
sumOrd Nil         = 0
sumOrd (Cons x xs) = ord x + sumOrd xs
```

# Tratamiento de Errores

## Opciones

### Función Parcial
Se define solo para el caso feliz.
```haskell
myDiv1 :: Int -> Int -> Int
myDiv1 x y | y /= 0 = div x y
```

### Utilizar la función error :: String → a
```haskell
myDiv2 :: Int -> Int -> Int
myDiv2 x y | y /= 0    = div x y 
           | otherwise = error "Division por cero"
```

### Evitar el error usando un valor “dummy”
```haskell
myDiv3 :: Int -> Int -> Int
myDiv3 x y | y /= 0    = div x y 
           | otherwise = 0
```

### Que el usuario elija el valor a asignar en caso de error
```haskell
myDiv4 :: Int -> Int -> Int -> Int
myDiv4 x y z | y /= 0    = div x y 
			 | otherwise = z
```

### Tipo de Error: Maybe
Ver más: [[Tema 5 - Mónadas#Mónada Maybe]]
```haskell
data Maybe a = Nothing | Just a

myDiv5 :: Int -> Int -> Maybe Int
myDiv5 x y | y /= 0    = Just (div x y)
           | otherwise = Nothing
           
fromJust  :: Maybe a -> a
fromMaybe :: a -> Maybe a -> a
maybe     :: b -> (a -> b) -> Maybe a -> b
```

### Tipo de Error: Either
```haskell
data Either a b = Left a | Right b

myDiv6 :: Int -> Int -> Either String Int
myDiv6 x y | y /= 0 = Right (div x y)
           | otherwise = Left "Division por Cero"           

-- Evaluar el tipo y obtener el valor
either :: (a -> c) -> (b -> c) -> Either a b -> c

-- Ejemplo: infinito en la div por 0
resDiv x y = either (const 9999) id (myDiv x y)
```

# Type Classes

## Definiciónes

La sintaxis es la siguiente:
```haskell
class NombreClase a where
	f1 :: T1 -- funciones que se deben implementar
	...
	fn :: Tn
	fi = ... -- funciones definidas por defecto
	...
	fj = ...
```

``````ad-example
title: Ejemplo
```haskell
class Eq a where
	(==),(/=) :: a → a → Bool -- funciones que se deben implementar
	x /= y = not (x == y)     -- funciones definidas por defecto
	x == y = not (x /= y)
```
``````

Las definiciones por defecto se pueden sobreescribir al definir una instancia.
En el caso de Eq, basta definir una operación para declarar que un tipo es miembro de la clase:
```haskell
data ConIgual = Mismo | Mismisimo
instance Eq ConIgual where
	Mismo     == Mismo     = True
	Mismisimo == Mismisimo = True
	_         == _         = False
```

### Herencia
Se pueden declarar clases que dependen de que sus tipos pertenezcan a otras clases.
```haskell
class Eq a => Ord a where 
	(<),(<=),(>),(>=) :: a -> a -> Bool
	max, min          :: a -> a -> a
	compare           :: a -> a -> Ordering

data Ordering = LT | EQ | GT
```
Para que un tipo pertenezca a Ord debe proveer definiciones de las operaciones de Ord y de Eq.

### Restricciones en las Instancias
Las instancias también pueden depender de que los tipos pertenezcan a otras clases:
```haskell
instance (Eq a, Eq b) => Eq (a, b) where
	(x, y) == (z,w) = x == z && y == w
```

Se permiten restricciones múltiples tanto en instancias, clases y funciones:
```haskell
myPEq :: (Eq a, Eq b) => (a, b) -> (a, b) -> Bool
myPEq (x, y) (z,w) = (x, y) == (z,w)
```

## Enumerados
Clase de los tipos Enumerados

```haskell
class Ord a => Enum a where
	succ, pred     :: a -> a
	toEnum         :: Int -> a
	fromEnum       :: a -> Int
	enumFrom       :: a -> [a]            -- [n .. ]
	enumFromThen   :: a -> a -> [a]       -- [n, m .. ]
	enumFromTo     :: a -> a -> [a]       -- [n .. m]
	enumFromThenTo :: a -> a -> a -> [a]  -- [n, n’ .. m]
```

``````ad-example
title: Ejemplo
```haskell
[1 . . 10]      ===> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[2, 4 . . 10]   ===> [2, 4, 6, 8, 10]
take 10 [1 . .] ===> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[’a’ . . ’d’]   ===> [’a’, ’b’, ’c’, ’d’]
```
``````

## Numéricos
Clase de los tipos Numéricos

```haskell
class Num a where
	(+),(-),(*) :: a -> a -> a
	negate      :: a -> a
	abs         :: a -> a
	signum      :: a -> a
	fromInteger :: Integer -> a
```

Como mínimo hay que definir (+), (∗), abs, signum, fromInteger y negate o (−).

## Clase Show y Read

```haskell
type ShowS = String -> String
class Show a where
	showsPrec :: Int -> a -> ShowS
	show      :: a -> String
	showList  :: [a] -> ShowS
```

Como mínimo hay que definir show o showsPrec.

```haskell
type ReadS a = String -> [(a, String)]
class Read a where
	readsPrec :: Int -> ReadS a
	readList :: ReadS [a]
```

Como mínimo hay que definir readsPrec.
La función `read :: Read a => String -> a` está definida en top-level y utiliza readsPrec.

# The Countdown Problem

```haskell
type ReadS a = String -> [(a, String)]
class Read a where
	readsPrec :: Int -> ReadS a
	readList :: ReadS [a]
```

``````ad-example
title: Ejemplo
```haskell
class Eq a where
	(==),(/=) :: a → a → Bool -- funciones que se deben implementar
	x /= y = not (x == y)     -- funciones definidas por defecto
	x == y = not (x /= y)
```
``````

```haskell














```





