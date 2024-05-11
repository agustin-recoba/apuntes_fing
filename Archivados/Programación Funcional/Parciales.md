# 2020

## 1
```haskell
foo :: (Eq x, Num y, Ord y) => x -> y -> y -> y -> x -> (Bool, y)
foo a b c d e = ((a == e) || (b > d), c + d)

t(a) == t(e)
t(b) = t(c) = t(d) y Num

Sol: b
```

## 2
```haskell
tip f []       _  zs = reverse zs
tip f _        [] zs = reverse zs
tip f (x : xs) ys zs = tip f xs (tail ys) (f (head ys) x : zs)


tip (+) [1, 2, 3] [1, 2] [] = [2, 4]
tip (+) [1, 2, 3] [1, 2] [10, 11, 12, 13] = [13,12,11,10,2,4]
-- a
tip f xs ys [] "es equivalente a" zipWith (flip f) xs ys
"correcta"

-- b
tip f xs ys zs "es equivalente a" reverse zs ++ tip f xs ys [ ]
"correcta"

-- c
tip f xs ys zs "es equivalente a" reverse (zipWith f ys xs ++ reverse zs)
"incorrecta"-> reverse (zipWith (+) [1, 2, 3] [1, 2] ++ reverse [10, 11, 12, 13])
				-> reverse ([2,4] ++ reverse [10, 11, 12, 13])
					-> reverse ([2,4,13,12,11,10])
						-> [10,11,12,13,4,2]
						!= [13,12,11,10,2,4]

Sol: c
```

## 3
```haskell
data Foo a = Foo a [Foo a] 

foo e (Foo x y) = x : foldl foo e y

foldl :: (b -> a -> b) -> b -> [a] -> b
"instancia usada:" foldl :: ([c] -> Foo b -> [c]) -> [c] -> [Foo b] -> [c]

"entonces:"
foo :: [c] -> Foo c -> [c]

Sol: b
```

## 4
```haskell
takeUntil :: (a -> Bool) -> [a] -> [a]
takeUntil p [] = []
takeUntil p (x:xs) = if p x then [] else x:(takeUntil p xs)

takeUntil_foldr p = foldr aux []
	where aux x xs = if p x then [] else x:xs
```
## 5
```haskell
f1 :: (a -> b) -> a -> c
f1 f a b = f1 (\x -> f a) a b
"se le asigna el tipo si c == [a] -> b"

f2 :: (a -> b) -> c -> [a] -> b
f2 f _ zs = f (head zs)
"se le asigna el tipo si c == a"

f3 :: a -> b -> [b] -> c
f3 f _ ys = f3 f (head ys) (tail ys)
"se le asigna el tipo si a == (b -> c)"

f4 :: ([a] -> b) -> [a] -> c -> b
f4 f x y = head [f x, f4 f (tail x) y ]
"se le asigna el tipo si c == [[a]] pero en ese caso tendríamos una lista de listas en vez de una lista simple, el tipo no coincide"
```
## 6
```haskell
data T = N | C T T 

baz f k N        = [ ] 
baz f k (C t N ) = f (baz f (k + 1) t)
baz f k (C t u)  = k : baz f (k + 1) u

tree = C N (C tree N)

-- a
take 3 $ baz id 0 tree "retorna" [0, 2, 4]
take 3 $ baz id 0 tree
-> take 3 $ baz id 0 (C N (C tree N))
 -> take 3 $ (0 : baz id 1 (C tree N))
  -> take 2 $ (0 : id (baz id 2 tree))
   -> take 3 $ (0 : id (baz id 2 (C N (C tree N))))
    -> take 3 $ (0 : id (2 : baz id 3 (C tree N)))
     -> take 3 $ (0 : id (2 : id (baz id 4 tree)))
      -> take 3 $ (0 : id (2 : id 4 : baz id 5 (C tree N)))
      ...
       -> [0, 2, 4]

-- b
take 3 $ baz (map (+1)) 0 tree "retorna" [0, 3, 6]
take 3 $ x
x -> baz (map (+1)) 0 tree
   ->  (0 : (map (+1)) (2 : (map (+1)) 4 : baz (map (+1)) 5 (C tree N)))
	...
	->  [0, 3, 6]

-- c
head $ filter (<= 0) $ baz id 0 tree "diverge"
head $ filter (<= 0) $ baz id 0 tree
-> head $ filter (<= 0) $ baz id 0 tree
   -> head $ filter (<= 0) $ (0 : baz id 1 (C tree N))
    -> head $ 0 : filter (<= 0) $ (baz id 1 (C tree N))
     -> 0
     -> "no diverge"

Sol: c
```
## 7
```haskell



```
## 8
```haskell
type Calc = Int -> Int 
mas, menos, por , dividido :: Int -> Calc
mas      n = \m -> m + n
menos    n = \m -> m - n
por      n = \m -> m * n
dividido n = \m -> div m n

(>=>) :: Calc -> Calc -> Calc
calc1 >=> calc2 = calc2.calc1
```

## 9
```haskell
goLeft mkTree 1 = [1,2,3...]
goRight mkTree 1 = [1,3,5...]



-- a
[1,2,3,4]

-- b
[1, 3, 5, 7]

-- c
[1, 3, 5]

-- d
diverge, foldl sobre una lista infinita siempre diverge

-- e
1

-- f
go (Node (mkTree $ 2) 1 (mkTree $ 3) : [])
-> 1 : go [] ++ [(mkTree $ 2)] ++ [(mkTree $ 3)]
	-> 1 : go [(Node (mkTree $ 3) 2 (mkTree $ 4))] ++ [(mkTree $ 3)]
sol: [1,2,3,4]

-- g
diverge al computar el largo de la lista infinita

--h 
False

```

## 10
```haskell

d

```

# 2022

```ad-note
title: Letra
collapse: closed
![[prueba.pdf]]
```

## 1
```haskell
foo :: (Num a, Ord a) => a -> a -> a
foo x y = head [fst (x + y, ⊥), fst (⊥, x < y)]

Sol: b
```

## 2
```haskell
dup :: a -> (a, a)
dup x = (x , x)

-- a
dup (4,4) = ((4,4),(4,4))

dup $ dup 4
-> dup $ (4,4)
 -> ((4,4),(4,4))

-- b
fst :: (a, b) -> a
-> "La tupla (fst, dup) está mal tipada"

Sol: b
```

## 3
```haskell
mult4 = map f (g lst)

-- a
f = (2*)
g = map (\x -> x + x)
lst = iterate (+1) 0 == [0,1,2..]
mul4 = map (2*) (map (\x -> x + x) [0,1,2..])
	 -> map (2*) ([0,2,4...])
	  -> [0,4,8...]

-- b
f = id
g = map (‘div‘ 2)
lst = iterate (+8) 0
mult4 = map id (g lst)
		-> map (‘div‘ 2) iterate (+8) 0
		 -> map (‘div‘ 2) [0,8,16...]
		  -> [0,4,8...]

-- c
f = id
g = foldl (\acc x -> acc ++ [x]) []
lst = iterate (+4) 0
mult4 = map id (g lst)
		-> foldl (\acc x -> acc ++ [x]) [] iterate (+4) 0
		 -> foldl (\acc x -> acc ++ [x]) [] [0,4,8...]
		  -> undefined

Sol: c
```

## 4
```haskell
data Either a b = Left a | Right b

data P = P I | Cero
data I = I P

foo :: Either P I -> P
foo (Left a) = Cero
foo (Right (I a)) = foo (Left a)

Sol: b
```

## 5
```haskell
data B a b = N [B a b] | C [a] [b]

bah :: (a -> b -> d) -> (B a b)-> [d]
bah f (N bs) = concat $ map (bah f) bs
bah f (C as bs) = zipWith f as bs

puaj :: B [Int] [Int]
puaj = N [C (repeat 0) [1, 2], N [C (repeat 0) [1, 2]]]

"Si compila"

bah (*) puaj
-> bah (*) (N [C (repeat 0) [1, 2], N [C (repeat 0) [1, 2]]])
 -> concat $ map (bah (*)) [C (repeat 0) [1, 2], N [C (repeat 0) [1, 2]]]
  -> concat $ (bah (*) C (repeat 0) [1, 2]) : (map (bah (*)) [N [C (repeat 0) [1, 2]]])
   -> concat $ (zipWith (*) (repeat 0) [1, 2]) : (map (bah (*)) [N [C (repeat 0) [1, 2]]])
    -> concat $ [0,0] : (map (bah (*)) [N [C (repeat 0) [1, 2]]])
     -> concat $ [0,0] : [bah (*) (N [C (repeat 0) [1, 2]])]
      -> concat $ [0,0] : [concat $ map bah (*) [C (repeat 0) [1, 2]]]
       -> concat $ [0,0] : [concat $ [bah (*) C (repeat 0) [1, 2]]]
        -> concat $ [0,0] : [concat $ [[0,0]]]
         -> concat $ [0,0] : [[0,0]]
          -> concat $ [[0,0], [0,0]]
           -> [0,0,0,0]
  
Sol: b
```

## 6
```haskell
foldl f v (x:xs) = foldl (f v x) xs

pacc k acum x
pacc _ res@(Just _) = res
pacc k Nothing x = 

Sol: c
```

## 7
```haskell
cs :: [[Int]]
cs = [1, 1] : map (\(x : y : xs) -> x + y : x : y : xs) cs
-> [1, 1] : [2, 1, 1] : [3, 2, 1, 1] : [5, 3, 2, 1, 1] : ...


-- a
head (foldl ((:) . head) [] (tail cs))
-> head (foldl ((:) . head) [] (map (\(x : y : xs) -> x + y : x : y : xs) cs))
 -> head (foldl ((:) . head) [] [2,1,1] : (map (\(x : y : xs) -> x + y : x : y : xs) (map (\(x : y : xs) -> x + y : x : y : xs) cs)))
  -> head (foldl ((:) . head) [] [2,1,1] : (map (\(x : y : xs) -> x + y : x : y : xs) (map (\(x : y : xs) -> x + y : x : y : xs) cs)))
   -> "diverge"

-- b
head (foldr ((:) . head) [] (tail cs))
-> head (foldr ((:) . head) [] ([2, 1, 1] : [3, 2, 1, 1] : [5, 3, 2, 1, 1] : ...))
 -> head ((:) . head) [2, 1, 1] foldr ((:) . head) [] ([3, 2, 1, 1] : [5, 3, 2, 1, 1] : ...))
  -> head (:) 2 foldr ((:) . head) [] ([3, 2, 1, 1] : [5, 3, 2, 1, 1] : ...))
   -> head 2 : foldr ((:) . head) [] ([3, 2, 1, 1] : [5, 3, 2, 1, 1] : ...))
    -> 2

-- c
take 2 $ filter ((>4) . head) cs
-> take 2 $ filter ((>4) . head) ([1, 1] : [2, 1, 1] : [3, 2, 1, 1] : [5, 3, 2, 1, 1] : ...)
 -> take 2 $ ([5, 3, 2, 1, 1] : ...)
  -> [[5, 3, 2, 1, 1], [8, 5, 3, 2, 1, 1]]

-- d
take 2 $ filter ((<2) . length) cs
-> take 2 $ [...]
 -> "diverge"

-- e
take 4 $ map head cs
-> take 4 $ map head ([1, 1] : [2, 1, 1] : [3, 2, 1, 1] : [5, 3, 2, 1, 1] : ...)
 -> [1, 2, 3, 5]

-- f
map reverse $ take 4 cs
-> [1, 1] : [1,1,2] : [1,1,2,3] : [1,1,2,3,5]

-- g
length . head . tail . tail $ ([1, 1] : [2, 1, 1] : [3, 2, 1, 1] : [5, 3, 2, 1, 1] : ...)
-> length . head . tail $ ([2, 1, 1] : [3, 2, 1, 1] : [5, 3, 2, 1, 1] : ...)
-> length . head $ ([3, 2, 1, 1] : [5, 3, 2, 1, 1] : ...)
-> length $ ([3, 2, 1, 1])
-> 4

-- h
length . tail . tail $ cs
-> length $ ([3, 2, 1, 1] : [5, 3, 2, 1, 1] : ...)
-> 1 + 1 + 1 + ...
"diverge"
```

## 8
```haskell
"a no computa el mínimo de los valores pues si la expresión contiene valores positivos y algún 'O', la función retorna 0, pero ninguno de sus valores fue 0"
```

## 9
```haskell
filterDup :: Eq a => [a] -> ([a], Int)
filterDup [] = ([], 0)
filterDup (x:xs) = if x 'elem' rs then (rs, n+1) else (x:rs, n)
	where (rs, n) = filterDup xs

filterDup_foldr = foldr aux ([], 0)
	where aux x (rs, n) = if x 'elem' rs then (rs, n+1) else (x:rs, n)
```

## 10
```haskell
($>) :: [a -> b] -> a -> [b]
funcs $> val = zipWith (app) funcs (repeat val)
	where app f v = f v
```
# 2019

```ad-note
title: Letra
collapse: closed
![[propuesta.pdf]]
```

## 1
```haskell
foo :: (Ord a, Eq c) => a -> a -> c -> a -> c -> Bool
foo x y z w h = fst (head [⊥, (x == y, x < w || z == h)])

Sol: b
```

## 2
```haskell
data State s a = State {runState :: s -> (a, s)}

bar :: Int -> State Int Int
bar i = 
	get >>= \s ->
	put (s * i) >>
	get >>= \s' ->
	return (s' + s + 3*i)

fst $ 

(bar 3) 5

state = 15
s = 5
s' = 15
ret = 5 + 15 + 9 = 29

Sol: a
```

## 3
```haskell
tk n = (map snd) . (box n) . (zip [1..])

tk n xs = (map snd) . (box n) . (zip [1..]) xs

-- c
"No sirve para listas infinitas"

-- d
"No matchea el tipo esperado:"
(box n) :: [(Int, a)] -> [(Int, a)]

-- b
"Parece que sirve"

Sol: b
```

## 4
```haskell
data T a b c = T [T a b c] | V a (b, c)

foo h k (V x pair) | k == x    = [h pair]
                   | otherwise = []
foo h k (T vs)  = head $ map (foo h k) vs

bar = foo snd 8 $ T [
					V 8 (’a’, 6),
					T [],
					T [
						V 5 (’b’, 7),
						T [
							V 8 (’j’, 5)
						]
					]
				]

-- analisis tipos:
foo :: (Eq d) => ((a, b) -> c) -> d -> (T d a b) -> [c]

bar :: [Int]

"compila"

-- eval bar
bar
-> foo snd 8 $ T [V 8 (’a’, 6),	T [],T [V 5 (’b’, 7),T [V 8 (’j’, 5)]]]
 -> foo snd 8 $ T [V 8 (’a’, 6), T [],T [V 5 (’b’, 7),T [V 8 (’j’, 5)]]]
  -> foo snd 8 (V 8 (’a’, 6))
   -> [snd (’a’, 6)]
    -> [6]

Sol: b
```

## 5
```haskell
lookup :: Eq k => k -> [(k, a)] -> Maybe a

lookup k = foldl aux Nothing
	where aux (Just y)     _     = Just y
		  aux    _     (k', val) = if k' == k then Just val else Nothing

```

## 6
```haskell
data C a = C (Bool, a)

foo (C (True, x)) = x
foo (C    x     ) = (fst x, False)

foo :: C (Bool, Bool) -> (Bool, Bool)

-- b
snd $ foo $ C (True, ⊥)
-> snd $ ⊥

-- c
(snd $ foo $ C (False, ⊥))
-> (snd $ (fst (True, ⊥), False))
 -> False

-- d
"No compila. C (True, True) no es de tipo C (Bool, Bool)."

Sol: c
```

## 7
D es incorrecta porque nunca "cuenta" cada nivel (no suma 1).

## 8
```haskell
foo []     = id
foo (x:xs) = foo xs . (+1)

bar xs = foo xs 0

foo :: [b] -> (a -> a)

bar :: [a] -> Int

Sol: a
```

## 9
```haskell
foo f x = f $ f x

foo :: (a -> a) -> a -> a
-- d
inst :: (Int -> Bool) -> Int -> Bool

Sol: d
```

## 1
```haskell
foo :: (Ord a, Eq c) => a -> a -> c -> a -> c -> Bool
foo x y z w h = fst (head [⊥, (x == y, x < w || z == h)])

Sol: b
```



