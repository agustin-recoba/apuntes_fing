# Ejercicio 1

![[Drawing 2023-08-20 17.18.57.excalidraw]]

# Ejercicio 2

Dado el siguiente conjunto de entrenamiento:
![[Pasted image 20230820173925.png]]

### a) ¿Cuál es la entropía del conjunto de entrenamiento?
$H(S) = 1 bit$
### b) ¿Cuál es la ganancia de particionar por cada uno de los atributos?

por a1: $Ganancia(S, a1) = H(S) - (\frac{3}{6}H(S_{true}) + \frac{3}{6}H(S_{false}))) = 1-(0.5*0.91 + 0.5*0.91) = 0.09$
por a2: $Ganancia(S, a2) = H(S) - (\frac{4}{6}H(S_{true}) + \frac{2}{6}H(S_{false}))) = 1-(\frac{2}{3}*1 + \frac{1}{3}*1) = 0$
# Ejercicio 3

Volviendo al problema de aprender bajo qué condiciones a Pedro le gusta ir a jugar al fútbol a la playa:

![[Pasted image 20230820174918.png]]

### a) Halle el árbol de decisión utilizando el algoritmo ID3.

![[Práctico 2 2023-08-20 19.25.02.excalidraw]]
### b) Halle el árbol de decisión, si ahora se agrega el siguiente ejemplo al conjunto de entrenamiento:
![[Pasted image 20230820175012.png]]

![[Práctico 2 2023-08-20 19.38.53.excalidraw]]
### c) ¿Qué respuesta daría a las siguientes instancias?
![[Pasted image 20230820175028.png]]
Interpretando el arbol: la hipótesis es $Cielo==Nublado \| (Cielo==Soleado \&\& Viento==Fuerte)$

6 -> Si
7 -> No
8 -> No
9 -> Si

### d) ¿Pertenece la solución al espacio de versiones obtenido con el algoritmo "Candidate Elimination" en el práctico anterior? ¿Es esto siempre esperable?

No lo hice.

# Ejercicio 4

Se desea construir un algoritmo para clasifcar automáticamente la calidad de la fruta, de acuerdo a ciertas variables: color, tamaño, peso y mes de cosecha, y le proveen del siguiente conjunto de ejemplos:
![[Pasted image 20230820201043.png]]
Donde: color ∈ {amarillo, rojo}, tamaño ∈ {grande, mediano, pequeño}, peso ∈ [150, 250], mes ∈ {octubre, noviembre}, calidad ∈ {buena, mala}.

### a) Explique por qué no puede aplicar el algoritmo ID3 básico. Dé una solución a cada uno de los problemas encontrados.

Problemas:
- Peso es un valor continuo, se deberá discretizar de alguna manera. Propuesta: particionar el espacio en intervalos de 50gs.
- Falta el valor para el atributo "Mes" de la instancia 4. Como existe una instancia calificada con la misma calidad y los mismos valores en el resto de atributos (instancia 1), podría ser una buena idea completar ese valor con el mismo de la otra instancia. También se puede tomar el valor más común ("noviembre" en este caso).
### b) Dé un árbol de decisión a partir de los ejemplos dados, explicando su construcción paso a paso.

...











