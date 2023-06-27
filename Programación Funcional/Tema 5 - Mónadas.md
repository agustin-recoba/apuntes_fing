# Entrada y Salida

Haskell es un **Lenguaje Puro**.
El resultado de una función se determina completamente a partir de sus argumentos.
Las funciones no pueden tener efectos laterales.
Funciones como las siguientes romperían el modelo.
	- getLine :: String
	- putStrLn :: String → ()
No podríamos distinguir entre funciones puras e impuras.

## El tipo (IO a), de Acciones de entrada/salida

En Haskell tenemos el tipo (IO a), que funciona como ventana con el Mundo Real.
Representa a una acción de entrada/salida (I/O), que al ser ejecutada retorna un valor de tipo a.

Es un tipo abstracto, con una interfaz que nos provee una especie de mini lenguaje **imperativo**.
Permite separar lo puro de lo impuro.

## Entrada en Haskell

La función getLine retorna una acción de entrada/salida que al ser ejecutada lee una línea de la entrada y la retorna como un String.
```haskell
getLine :: IO String
```

Como String no es lo mismo que IO String, separamos valores puros de impuros. Esto no es posible:
```haskell
prefijoIn :: String → IO String
prefijoIn str = getLine ++ str
```

## do-notation

Podemos componer acciones IO con do-notation.
```haskell
prefijoIn :: String → IO String
prefijoIn str = do 
			pre ← getLine 
			return (pre ++ str)
```

- <u>off-side rule</u>: componentes de un bloque do indentados al mismo nivel.
- el bloque define una secuencia de acciones IO.
- con `<-` asignamos un nombre al resultado de evaluar una acción IO.
- con `return :: a → IO` a generamos una acción IO a partir de un valor puro.

## Entrada y read

La función read:
```haskell
read :: Read a => String -> a
```
Se puede combinar con getLine para leer valores de un tipo dado.

Por ejemplo, la siguiente función lee enteros:
```haskell
getInt :: IO Int
getInt = do
		line ← getLine
		return (read line)
```

## Salida: ”Hola Mundo” en Haskell
`main = do putStrLn "Hola Mundo!"`

La función `main :: IO ()`, consiste de una secuencia de acciones de entrada/salida. Determina el comienzo de la ejecución del programa.
La función `putStrLn :: String → IO ()`, toma un `String` y genera una acción IO que lo imprime en la salida estándar.

```ad-example
title: Ejemplo
![[Pasted image 20230622234905.png]]
```

## IO y Evaluación Perezosa

Si cambio el programa para no utilizar el resultado de la lectura, ¿es posible que getInts no se ejecute?.
```haskell
main = do 
	putStrLn "<=="
	getInts
	putStrLn "==>"
```

**No,** porque se define una secuencia de acciones.
Tampoco es posible que los llamados se reordenen.

Otro caso:
```haskell
main = do
	let ps = [putStrLn "A", putStrLn "B", putStrLn "C"]
	ps !! 1
```
La evaluación perezosa juega su rol, dado que tenemos una lista de acciones IO, pero sólo ejecutamos una de ellas.

# Mónadas

Modelado de efectos computacionales a través de mónadas.
Ejemplos de efectos: 
- Entrada-salida
- Estado
- No determinismo
- Fallas
- Excepciones

## La clase Monad

```haskell
class Monad m where
	(>>=)  :: m a -> (a -> m b) -> m b
	(>>)   :: m a -> m b -> m b
	return :: a -> m a
	fail   :: String -> m a
	
	m >> k = m >>= \_ -> k
	fail s = error s
```

### Mónada Maybe
```haskell
data Maybe a = Just a | Nothing

instance Monad Maybe where
	return  = Just
	m >>= k = case m of
				Just x  -> k x 
				Nothing -> Nothing
	fail _  = Nothing
```

### Notación do
![[Pasted image 20230622235651.png]]

![[Pasted image 20230622235659.png]]

### Otras Funciones sobre Mónadas (ver Control.Monad)
```haskell
sequence :: Monad m => [m a] -> m [a]
sequence []       = return []
sequence (m : ms) = do
				x  <- m
				xs <- sequence ms
				return (x : xs)

filterM :: Monad m => (a -> m Bool) -> [a] -> m [a]
filterM _ []       = return []
filterM p (x : xs) = do 
				b  <- p x 
				ys <- filterM p xs 
				return (if b then x : ys else ys)

mapM :: Monad m => (a -> m b) -> [a] -> m [b]

foldM :: Monad m => (b -> a -> m b) -> b -> [a] -> m b
```

### Mónada de estado (Control.Monad.State)
Computaciones que mantienen un estado.

```haskell
data State s a = State (s → (a,s))
runState (State f ) = f

instance Monad (State s) where
	return a = State $ \s → (a,s)
	m >>= f  = State $ \s → let (a, s2) = runState m s
							in runState (f a) s2
 
 get = State $ \s → (s,s)
 put s = State $ \_ → ((),s)
```

``````ad-example
title: Ejemplo: evaluador con estado
```haskell
data Exp = Num Int | Add Exp Exp | Var String | Assign String Exp

eval :: Exp -> State [(String, Int)] Int
eval (Num n) = return n
eval (Add e e0) = liftM2 (+) (eval e) (eval e0)
eval (Var v)    = do 
			s <- get
			return (fromJust $ lookup v s)
eval (Assign v e) = do
			a <- eval e 
			s <- get
			put ((v, a) : s)
			return a
```
``````

### Mónada Reader (Control.Monad.Reader)
Computaciones que leen valores de un ambiente compartido.
```haskell
data Reader e a = Reader (e -> a)
runReader (Reader r) = r

instance Monad (Reader e) where
	return a         = Reader $ \e -> a
	(Reader r) >>= f = Reader $ \e -> runReader (f (r e)) e

ask :: Reader e e
ask = Reader id

local :: (e -> e) -> Reader e a -> Reader e a
local f c = Reader $ \e -> runReader c (f e)
```

``````ad-example
title: Ejemplo: evaluador
```haskell
data Exp = Num Int | Add Exp Exp | Var String | Let String Exp Exp

eval :: Exp → Reader [(String, Int)] Int
eval (Num n)    = return n
eval (Add e e0) = liftM2 (+) (eval e) (eval e0)
eval (Var v)    = do
			s ← ask
			return (fromJust $ lookup v s)
eval (Let v e b) = do
			a ← eval e
			local ((v, a):) (eval b)
```
``````
