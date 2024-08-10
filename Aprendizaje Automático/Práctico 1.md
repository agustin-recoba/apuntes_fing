# Ejercicio 1 

a) Dé dos ejemplos en los cuales las técnicas de Aprendizaje Automático sean útiles y dos en los cuales no lo sean. Dé una breve justificación en cada caso. 

Útiles:
- IA de ajedrez: espacio de posibilidades muy amplio como para programar cada regla o procesar cada escenario.
- Clasificación de spam: base de datos inicial enorme y para los programadores es imposible estar al día con las "modas" de spam.

No útiles:
- Computaciones críticas y exactas con nula tolerancia a errores, ejemplo: hasheo
- Problemas ya resueltos con algoritmos eficientes.

b) Elija una aplicación que considere interesante. Descríbala informalmente, y luego especifique lo más precisamente posible la tarea, la medida de performance, y la descripción de la función objetivo.

Detección de emails o mensajes de estafa.

Tarea formal: dada una cadena de caracteres S, determinar si tiene intenciones malignas con respecto a robo, estafa y engaños varios.
Medida de performance: cantidad de aciertos / intentos totales
Función objetivo: f: String -> Bool

# Ejercicio 2

Se desea aprender bajo qué condiciones a Pedro le gusta ir a jugar al fútbol a la playa:

![[Pasted image 20230814164923.png]]

Con los siguientes posibles valores para cada atributo:
- Cielo: Soleado, Lluvioso, Nublado
- Temperatura: Templado, Frío
- Humedad: Normal, Alta
- Viento: Fuerte, Suave
- Tmp. Agua: Templada, Fría
- Tiempo: Sin cambios, Cambiante.

i. Con la forma de las hipótesis vista en el teórico: ¿cuál es el tamaño del espacio H?
ii. Calcule el espacio de versiones
iii. ¿Qué respuesta daría a las siguientes instancias?

![[Pasted image 20230814165907.png]]

i. $|H| = (3+2)(2+2)(2+2)(2+2)(2+2)(2+2) = (5)(4)(4)(4)(4)(4) = 5120$ 
Cada "slot" tiene los valores del atributo + $\emptyset$ + ?.

ii. Uso Candidate-Elimination
```
E_0 = <Sol, Temp, Nor, Fue, Temp, Sin Camb> JUEGA=SI
S_0 = {<Sol, Temp, Nor, Fue, Temp, Sin Camb>}
G_0 = {<?, ?, ?, ?, ?, ?>}

E_1 = <Sol, Temp, Alta, Fue, Temp, Sin Camb> JUEGA=SI
S_1 = {<Sol, Temp, ?, Fue, Temp, Sin Camb>}
G_1 = {<?, ?, ?, ?, ?, ?>}

E_2 =  <Lluv, Frio, Alta, Fue, Temp, Camb    > JUEGA=NO
S_2 = {<Sol , Temp, ?   , Fue, Temp, Sin Camb>}
G_2 = {
       < Sol, ?   , ?   , ?  , ?   , ?       >,
	   <?   , Temp, ?   , ?  , ?   , ?       >,
	   <?   , ?   , ?   , ?  , ?   , Sin Camb>,	   
}

E_3 =  <Sol , Temp, Alta, Fue, Fria, Camb    > JUEGA=SI
S_3 = {<Sol , Temp, ?   , Fue, ?   , ?       >}
G_3 = {
       < Sol, ?   , ?   , ?  , ?   , ?       >,
	   <?   , Temp, ?   , ?  , ?   , ?       >,
}
```


iii.
5 -> SI pues satisface todo S
6 -> No, pues no satisface ninguna h de G
7 -> No queda claro, no satisface todo S pero sí todo G
8 -> No queda claro, no satisface todo S ni todo G

# Ejercicio 3
Considere para el ejercicio anterior un espacio cuyas hipótesis tienen la siguiente forma:
`<x,x,x,x,x,x> v <x,x,x,x,x,x>`

Por ejemplo: h: `<?, Frío, Alto, ?, ?, ?> v <Soleado, ?, Alto, ?, ?, Sin cambios>`

a) ¿Cuál es el tamaño del espacio de hipótesis? 
b) Calcule el espacio de versiones

a) El tamaño nuevo es el cuadrado del anterior: $5120*5120 = 26214400$. Estamos contando hipótesis sintácticamente distintas. Si tomamos la semántica, hay hipótesis equivalentes a otras y en ese caso sólo cuenta una.
b) Otra vez por Candidate-Elimination
```
E_1 =  <S, T, N, F, T, S> J=SI
S_1 = [
	<S, T, N, F, T, S> v <0, 0, 0, 0, 0, 0>, -- admite solo la inst. #1
]
G_1 = [
	<?, ?, ?, ?, ?, ?> v <0, 0, 0, 0, 0, 0>, -- admite cualquier instancia
]

E_2 =  <S, T, A, F, T, S> J=SI
S_2 = [
	<S, T, ?, F, T, S> v <0, 0, 0, 0, 0, 0>, -- semanticamente igual a <S, T, N, F, T, S> v <S, T, A, F, T, S>
]
G_2 = [
	<?, ?, ?, ?, ?, ?> v <0, 0, 0, 0, 0, 0>,
]

E_3 = <L, F, A, F, T, C> J=NO
S_3 = [
	<S, T, ?, F, T, S> v <0, 0, 0, 0, 0, 0>,
]
G_3 = [
	<S, ?, ?, ?, ?, ?> v <?, T, ?, ?, ?, ?>,
	<S, ?, ?, ?, ?, ?> v <?, ?, ?, ?, ?, S>,
	<?, T, ?, ?, ?, ?> v <?, ?, ?, ?, ?, S>,
]

E_4 = <S, T, A, F, F, C> J=SI
S_4 = [
	<S, T, ?, F, ?, ?> v <0, 0, 0, 0, 0, 0>, -- semanticamente igual a <S, T, ?, F, T, ?> v <S, T, ?, F, F, ?>
]
G_4 = [
	<S, ?, ?, ?, ?, ?> v <?, T, ?, ?, ?, ?>,
	<S, ?, ?, ?, ?, ?> v <?, ?, ?, ?, ?, S>,
	<?, T, ?, ?, ?, ?> v <?, ?, ?, ?, ?, S>,
]
```

# Ejercicio 4

a) Implemente el algoritmo FIND-S para el problema de cuándo Pedro salva un examen.
b) Verifque su algoritmo contra el ejemplo visto en el teórico.
c) Implemente un programa que genere instancias aleatorias, y luego las clasifque de acuerdo al concepto: 
	<?, Media, ?, ?, ?>
¿Cuántos ejemplos únicos (sin repetidos) tiene que generar en promedio para aprender el concepto? ¿Cuántos ejemplos únicos positivos?

``````ad-note
title: Ver código
collapse: closed

```preview
path: ./media/p1_4.py
```

``````

# Ejercicio 6

Considere un espacio compuesto de puntos en el plano entero, y un conjunto de hipótesis formadas por rectángulos:
- $H= \{ a ≤ x ≤ b, c ≤ y ≤ d / a,b,c,d ∈ N \}$

Dados los siguientes ejemplos:
![[Pasted image 20230815153930.png]]

1. Encuentre los conjuntos S y G. Dibújelos en el diagrama.
2. Si el alumno pudiera elegir el siguiente ejemplo para su entrenamiento, ¿cuál le convendría elegir? ¿Cuál seguramente no?
3. Si ud. desea enseñar el concepto (3 ≤ x ≤ 5, 2 ≤ y ≤ 9): ¿cuál es la mínima cantidad de ejemplos que ud. debería dar?

## 1
![[Drawing 2023-08-15 15.40.24.excalidraw]]

## 2
No me convendría ninguno que pertenezca a S.
Me convendría cualquiera que pertenezca a  G_0 y G_1 pero que no sea demasiado cercano a S.
Tampoco conviene alguno con alguna coordenada igual a la de otro ejemplo (no aportaría información en ese eje).

## 3
¿Bajo cualquier algoritmo?
Con 6 ejemplos ya es suficiente, no se me ocurre hacerlo con menos.
Dos positivos abarcando el máximo posible.
4 negativos limitando las 4 direcciones en las que se podría expandir.

![[Drawing 2023-08-15 15.52.32.excalidraw]]

# Ejercicio 7

Se desea aprender un concepto que se supone es un triángulo rectángulo isósceles en el semiplano |R+ x |R+ , de la siguiente forma:

![[Pasted image 20230815164217.png]]
## a
Dé TODAS las hipótesis consistentes con el siguiente conjunto de entrenamiento:
- (1,    0.5) positivo
- (1.1, 5   ) negativo
- (2,    0   ) positivo
- (8,    0   ) negativo
Muestre cómo llega al resultado paso a paso.

1. Marco los puntos de ejemplo en el plano (rojo negativo y verde positivo).
2. Trazo las rectas de la forma y=a-x para cada ejemplo.
3. Me quedo con aquellas que se corresponden a la hipótesis más general (amarillo) y más específica (azul).
4. Toda la región entre esas dos rectas son las hipótesis consistentes con el conjunto de entrenamiento.

![[Drawing 2023-08-15 16.47.38.excalidraw]]
## b
No elegiría ningún punto por fuera de la región hallada. Debajo de la linea verde sé que dará positivo y por arriba de la amarilla dará negativo.

## c
Misma lógica que antes.

## d
(1, 1) NEG contradice al ejemplo (2, 0) POS.
Ambos puntos pertenecen a la recta y = 2-x.

Debería descartar ambos ejemplos (uno está mal y no sé cuál es) y re-entrenar.

# Ejercicio 8

Considere un espacio cuyas hipótesis son, en lugar de conjunciones, disyunciones de restricciones sobre los atributos. Así, por ejemplo, la hipótesis que representa que Pedro juega cuando el viento es suave o cuando está soleado es:
	<Soleado, ∅, ∅, Suave, ∅, ∅>

## a
Calcule la cantidad de posibles hipótesis sintáctica y semánticamente distintas. 

Sintácticamente (igual que con conjunciones):
$(3+2)(3+2)(2+2)(3+2)(2+2) = 2000$

Semánticamente:
$(3+2)(3+2)(2+2)(3+2)(2+2) = 2000$

Debemos restarles las que son equivalentes entre sí.
Demasiada combinatoria.
## b
Especifique cómo son las reglas de generalización y especificación mínimas para este nuevo espacio.

Supongamos que la hipótesis que queremos cambiar es:
	$<a, b, c>$, con $a, b, c \in Valores \cup \{ \emptyset, ? \}$
Y la generalización/especificación surge de una inconsistencia con el ejemplo:
	$<e_{1}, e_{2}, e_{3}>$, con $e_{1}, e_{2}, e_{3} \in Valores$
### Generalización:
Antes era usar la regla $\emptyset \rightarrow valor\_normal \rightarrow '?'$. 

### Especificación:
Se varían los $\emptyset$ a los valores $e_{1}, e_{2}, e_{3}$.
$<\emptyset, \emptyset, \emptyset>$ pasa a $\{ <e_{1}, \emptyset, \emptyset>, <\emptyset, e_{2}, \emptyset>, <\emptyset, \emptyset, e_{3}> \}$
Pero con $e_{2} \neq b \neq \emptyset$, $<\emptyset, b, \emptyset>$ pasa a $\{ <e_{1}, b, \emptyset>, <\emptyset, b, e_{3}> \}$ 