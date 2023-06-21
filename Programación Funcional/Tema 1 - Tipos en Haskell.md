# Definiciones y Tipos Básicos

Un programa en PF consiste esencialmente de una lista de definiciones (de funciones) que se expresan en una notación semejante a la usada en matemática.

## Tipado en Haskell

<u>Tipado fuerte:</u> toda expresión debe tener un tipo. Todas las constantes, variables, operadores y funciones tienen un tipo asociado.
<u>Chequeo estático de tipos:</u> los tipos se chequean en tiempo de compilación.
<u>Type safety:</u> al ejecutar, los programas bien tipados nunca se trancan por errores de tipo

### Tipos básicos
- Bool: booleanos
- Char: caracteres simples
- String: cadena de caracteres
- Int: enteros acotados
- Integer: enteros no acotados
- Float: reales
- Double: reales

#### Booleanos
El tipo de los booleanos es Bool y sus constantes son denotadas True y False.
Las operaciones primitivas son las habituales: not, && y ||.

#### Enteros
Los operadores sobre enteros son los habituales: +, −, ∗,ˆ, div, mod, abs, negate.

La conversión entre los dos tipos de enteros se debe hacer en forma explícita a través de las funciones: 
```haskell
fromInteger :: Integer -> Int
toInteger   :: Int -> Integer
```

#### Caracteres
Los caracteres son codificados por la tabla ASCII.
Se escriben entre comillas simples: ’a’, ’H’, ’8’.

La conversión entre un carácter y su codificación se hace a través de las siguientes funciones:
```haskell
fromEnum :: Char -> Int
toEnum   :: Int -> Char
```

#### Strings
El tipo String se define como una lista de caracteres
Constantes de tipo String se escriben entre comillas dobles: `”Funcional”`, `"\tHaskell\n"`.

Las funciones show y read permiten convertir entre valores de otros tipos y String.

#### Reales
Existen 2 tipos que representan los reales en punto flotante: Float y Double.
Las operaciones sobre estos tipos son las estándar (aritméticas, trigonométricas, etc).

Operador de división real: `/`

Hay funciones de conversión hacia y desde los enteros:
```haskell
ceiling :: Float -> Integer 
floor   :: Float -> Integer 
round   :: Float -> Integer 

fromInteger  :: Integer -> Float 
fromIntegral :: Int -> Float
```


# Tipos Estructurados

Además de los tipos básicos, podemos definir tipos estructurados compuestos por un conjunto de valores.

#### Tuplas
Una tupla combina en un mismo objeto a un número fijo de valores, cada uno con un tipo determinado (posiblemente distintos).

Similar a Registros o Estructuras en otros lenguajes.

``````ad-example
title: Ejemplos

Coordenadas cartesianas: 
```haskell
(8, 23) :: (Int, Int) 
```
Empleados (nombre, edad, sueldo):
```haskell
("Juan", 23, 60000) :: (String, Int, Int)
```

``````

En general, el tipo `(t1, ...,tn)` consiste en tuplas de valores: `(v1, ..., vn)` donde `v1 :: t1`, ..., `vn :: tn`. 

##### Funciones sobre Tuplas
Se suele usar pattern matching:
```haskell
nombre :: (String, Int, Int) -> String
nombre (n, e, s) = n
```
Se pueden ignorar componentes.
```haskell
edad   ( , e, ) = e
sueldo ( , ,s)  = s
```
Se pueden forzar componentes usando literales.
```haskell
esPedro ("Pedro", _, _) = True
esPedro (_      , _, _) = False
```

#### Listas
Una lista combina en un mismo objeto a un número arbitrario de valores, todos de un <u>mismo tipo</u>.

En general, el tipo `[t]` consiste en listas de valores: `[v1, ..., vn ]` donde `v1 :: t, ..., vn :: t`

Definimos inductivamente a las listas de tipo `[t]` como:
```haskell
[ ]    - lista vacía 
v : vs - lista con al menos un elemento, donde v :: t y vs :: [t]
```

##### Funciones sobre Listas
Ejemplos: `(++)`, `(!!)`, `length`, `replicate`, `take`, `drop`, `reverse`, etc.

Nuevas funciones se definen combinando las anteriores o usando **pattern matching**.
```haskell
dupList xs = xs ++ xs

null []    = True
null (_:_) = False

head (x:_)  = x 
tail (_:xs) = xs
```

##### Listas por Comprensión
Notación que permite construir una lista a partir de una descripción de la misma en términos de otra.

```haskell
[x | x ← [1, 2, 3, 4]] evalua a [1, 2, 3, 4]

[x | x ← [1, 2, 3, 4], isEven x ] evalua a [2, 4]

[isEven x | x ← [1, 2, 3, 4]] evalua a [False,True, False,True ]

[(x + y) | (x, y) ← [(1, 2),(2, 3),(3, 4)]] evalua a [3, 5, 7] 

[(x, y) | x ← [1, 2], y ← [3, 4]] evalua a [(1, 3),(1, 4),(2, 3),(2, 4)]
```

## Sinónimos de Tipos

En Haskell podemos dar nombres a los tipos.

Al usar un sinónimo se tiene el mismo efecto que al usar el tipo que representa.

``````ad-example
title: Ejemplos
```haskell
type Coord    = (Int, Int)
type Empleado = (String, Int, Int)
```
``````

## Tipos de Datos Algebraicos

Mediante la definición de tipos de datos algebraicos podemos introducir nuevos tipos.

Nos permiten definir:
- Enumerados:
```haskell
data PuntoCardinal = Norte | Sur | Este | Oeste 
	deriving (Show, Eq)
```
- Productos:
```haskell
data Empleado = Empleado String Int Int
	deriving (Show, Eq)
```
- Alternativas:
```haskell
data Forma = Circulo Float
		   | Rectangulo Float Float
	deriving (Show, Eq)
```

En general:
```haskell
data T = C1 t11 ... t1k1 
        ... 
	   | Cn tn1 ... tnkn
```
Donde T es el nuevo tipo a introducir y cada Ci es un constructor de dicho tipo, que toma ki parámetros.

Función de ejemplo:
```haskell
area :: Forma → Float
area (Circulo r)      = 3.14 ∗ r ∗ r
area (Rectangulo b a) = b ∗ a 

cuadrado x = Rectangulo x x
```

# Polimorfismo, Sobrecarga y Alto Orden

```haskell
data Empleado = Empleado String Int Int
	deriving (Show, Eq)
```

## Polimorfismo paramétrico

El polimorfismo paramétrico es un mecanismo de tipado que permite definir funciones y tipos de datos de forma paramétrica de forma tal que puedan manipular valores de distintos tipos de forma totalmente uniforme.

``````ad-example
title: Ejemplo
```haskell
head (x : xs) = x

head [1, 2, 3, 4]          ----> 1
head [False,True, False ]  ----> False
head [’a’, ’b’, ’c’, ’d’]  ----> ’a’
```
``````

El tipo de head es entonces: `head :: [a] -> a` , donde a es una variable de tipo.


### Tipo Más General
`head :: [a] -> a`  es el tipo más general de head.

Al reemplazar las variables de tipo por tipos particulares se obtienen instancias del tipo:
```haskell
head :: [Int]  -> Int
head :: [Bool] -> Bool
head :: [Char] -> Char
```

No son instancias:
```haskell
head :: [Int] -> Char
head :: Bool  -> Bool
head :: [a]   -> Int
```

Haskell es capaz de inferir el tipo más general de una función.

## Algunas funciones polimórficas sobre listas

Las siguientes son algunas funciones polimórficas sobre listas contenidas en el Prelude:
```haskell
(:)     :: a -> [a] -> [a]
(++)    :: [a] -> [a] -> [a]
(!!)    :: [a] -> Int -> a
last    :: [a] -> a
concat  :: [[a]] -> [a]
take    :: Int -> [a] -> [a]
splitAt :: Int -> [a] -> ([a], [a])
reverse :: [a] -> [a]
zip     :: [a] -> [b] -> [(a, b)]
unzip   :: [(a, b)] -> ([a], [b])
```

## Sobrecarga

La sobrecarga es otra forma de polimorfismo, dentro del llamado polimorfismo ad-hoc. Una función sobrecargada puede comportarse de forma diferente (tener una definición diferente) para cada tipo.

En Haskell se utiliza el mismo operador `(==)` para representar la igualdad en más de un tipo.
```haskell
(==) :: Int  -> Int  -> Bool 
(==) :: Char -> Char -> Bool 
(==) :: Bool -> Bool -> Bool
```

En Haskell, la definición de funciones sobrecargadas se hace a través del concepto de clase.

El operador `(==)` tiene el siguiente tipo:
```haskell
(==) :: Eq a => a -> a -> Bool
```

### Clases
Una clase especifica una colección de tipos a los que se les asocia un conjunto de operaciones (comunmente llamados métodos).

```haskell
class Eq a where
	(==) :: a -> a -> Bool 
	(/=) :: a -> a -> Bool 
	x /= y = not (x == y) 
	x == y = not (x /= y)
```

### Instancias
Para declarar que un tipo es miembro de una clase hay que definir una instancia.
```haskell
data T = A | B
instance Eq T where
	A == A = True
	B == B = True
	_ == _ = False
```

Para un número restricto de clases (como Eq, Ord, Show, etc), se puede pedir que Haskell derive la instancia de una clase en forma automática.
```haskell
data T = A | B
	deriving (Eq, Show)
```

## Alto Orden

Una función de alto orden es una función que toma una función como parámetro o retorna una función como resultado.
En PF las funciones son **ciudadanas de primera clase**.

Ejemplos de funciones de alto orden:
```haskell
map     :: (a -> b) -> [a] -> [b]
filter  :: (a -> Bool) -> [a] -> [a]
zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
```

Pero también `take :: Int -> [a] -> [a]` es de alto orden debido a que su tipo equivale a:
`take :: Int -> ([a] -> [a])` dado que → asocia a la derecha.
 
### Funciones Currificadas
Las funciones en Haskell se representan en forma currificada: 
	las funciones tienen sólo un parámetro.

``````ad-example
title: Ejemplo
```haskell
take :: Int → ([a] → [a])
(take 3) :: [a] → [a]
(take 3) [’a’, ’b’, ’c’, ’d’, ’e’]

-- Los paréntesis no son necesarios, porque la aplicación asocia a la izquierda
take 3 [’a’, ’b’, ’c’, ’d’, ’e’]
```
``````

#### Currificadas vs no currificadas
```haskell
-- No currificadas
add :: Num a => (a, a) -> a 
add (x, y) = x + y 

mult :: Num a => (a, a, a) -> a 
mult (x, y, z) = x ∗ y ∗ z

-- Currificadas
addc :: Num a => a -> a -> a
addc x y = x + y

multc :: Num a => a -> a -> a -> a
multc x y z = x ∗ y ∗ z
```

#### Currificación
Se puede pasar de representaci´on currificada a no currificada, y viceversa, usando las siguientes funciones:
```haskell
multc :: Num a => a -> a -> a -> a
multc x y z = x ∗ y ∗ z

curry :: ((a, b) -> c) -> (a -> b -> c) 
curry f x y = f (x, y)

uncurry :: (a -> b -> c) -> ((a, b) -> c)
uncurry f (x, y) = f x y
```

``````ad-example
title: Ejemplo
```haskell
addc = curry add
add = uncurry addc
```
``````




