# Aprendizaje conceptual

### Find-S

```slide-note
page: 16
file: conceptual.pdf

Como mi hipótesis en todo momento es la más específica posible, los ejemplos negativos se clasifican como negativos (excepto por errores en los datos), confirmando la hipotesis (y por lo tanto no demandan actualización de la misma).
```
#### ¿Qué pasa si queremos que las hipótesis sean disynciones (or) en vez de conjunciones (and)?
Ejemplo: Dedicación == 'Alta' OR Horario == 'Nocturno'
La formula sería: <'Alta', $\emptyset$, 'Nocturno', $\emptyset$, $\emptyset$>

El algoritmo comenzaría con:
<$\emptyset$, $\emptyset$, $\emptyset$, $\emptyset$, $\emptyset$>

Pero el siguiente paso tendría más de una opción de hipótesis más general que además confirmen el primer ejemplo de la tabla ($x_1$).
Ej: <Alta, $\emptyset$, $\emptyset$, $\emptyset$, $\emptyset$> ó <$\emptyset$, Alta, $\emptyset$, $\emptyset$, $\emptyset$> ó <$\emptyset$, $\emptyset$, Nocturno, $\emptyset$, $\emptyset$>, $...$

A su vez, ya no podemos ignorar los ejemplos negativos.

### Candidate elimination

```slide-note
page: 18,20,22,23,30
file: conceptual.pdf
```

### Sesgos

***Sesgo Inductivo:*** del algoritmo L es el conjunto mínimo de suposiciones B tales que:
$(∀x∈X) [(B∧D∧x)→ \text{L clasifica correctamente a x}]$

Para que un algoritmo aprenda, debe tener algún sesgo inductivo.

***Sesgo preferencial:*** el algoritmo prefiere ciertas hipótesis sobre otras.  
Ej.: ID3 o Find-S

***Sesgo restrictivo:*** se maneja un espacio de hipótesis incompleto.
Ej.: Naive Bayes

# Arboles de decisión

...
# Metodología para clasificación

### Tratamiento de atributos numéricos o categóricos

#### Numéricos:
KNN -> *re-escalado o normalización*
Aprendizaje conceptual, ID3 y Naive Bayes -> *particionar en intervalos*. 

ID3 puede hacerlo en el paso recursivo de manera que maximice la ganancia de elegir ese atributo.

![[Pasted image 20231111140045.png]]

#### Categóricos:
KNN, Redes Neuronales, Regresión Lineal y Logística:
	*label-encoding* si hay orden total en los valores, *one-hot-encoding* si no.

### Medidas de performance

**_Accuracy_**: ¿cuántos casos predice h correctamente? $$acc = \frac{T_P + T_N}{Total}$$
**_Precision_**: ¿de los que h predijo positivos, cuántos lo eran? $$prec = \frac{T_P}{T_{p} + F_{p}} = \frac{T_P}{|h(x)= a|}$$ 
**_Recall_**: ¿cuántos de los positivos pudo h predecir correctamente?) $$recall = \frac{T_P}{T_{p} + F_{n}} = \frac{T_P}{|y= a|}$$
***Medida-F***
Combinando precisión y recuperación se obtiene la medida-F: 

$$F_\beta = \frac{(1+ \beta^2) \cdot  precision \cdot recall}{\beta^2 \cdot precision + recall}$$
En el caso de $F_1$, la formula queda reducida a:
$$F_1 = \frac{2 \cdot  precision \cdot recall}{ precision + recall}$$

#### Ejemplo
| A   | h(x)=a    | h(x)=b    | h(x)=c    | Total |
|-----|-----------|-----------|-----------|-------|
| y=a | $20_{TP}$ | $10_{FN}$ | $10_{FN}$ | 30    |
| y=b | $3_{FP}$  | $21_{TN}$ | $6_{TN}$  | 30    |
| y=c | $0_{FP}$  | $1_{TN}$  | $30_{TN}$ | 40    |
|     | 23        | 41        | 46        | 100   |

$Precision_A$: $\frac{TP}{h(x)=a} = \frac{20}{23} = 0.87$
$Recall_A$: $\frac{TP}{y=a} = \frac{20}{30} = 0.67$

#### micro y macro average
- Se calcula la medida por clase, y luego se promedia los valores obtenidos (macro average).
- Se calcula la medida por clase teniendo en cuenta el aporte de instancias cada clase (micro average).

En el ejemplo anterior: 
- La macro-average de la precision será $\frac{(Pr_a + Pr_b + Pr_c)}{3} = \frac{0.87 + 0.51 + 0.65}{3} = 0.67$
- La micro-average será $\frac{20+21+30}{23+41+46} = 0.71$

¿Qué medida es más "útil"?. Como toda medida, **depende de lo que queremos evaluar**:
    - La micro-average da más peso a las clases grandes en el análisis general
    - La macro-average permite evaluar mejor que tan "equilibrado" es el comportamiento de mi clasificador 
    - En lo posible, reportar ambas y analizar según mi problema

### Evaluación de hipótesis

#### Si: 
- Nuestras hipótesis toman *valores discretos*
- Nuestras instancias son independientes entre sí, y de la hipótesis
- $n \geq 30$
- $error_s(h) = r/n$
- $error_s(h)$ no está demasiado cercano a 0 o 1 (regla: $n\cdot error_s(h)(1-error_s(h))\geq 5)$

#### Entonces:
1. Un estimador no sesgado de $error_D(h)$ es $error_s(h)$
2. El 95% de las veces, $error_d(h)$ cae en el intervalo (llamado _intervalo de confianza_):
$$
error_s(h) \pm 1.96 \sqrt{\frac{error_s(h)(1 - error_s(h))}{n}}
$$

# Aprendizaje Bayesiano

### probabilidad condicional
$$P(h|D) = \frac{P(D|h) \times P(h)}{P(D)}$$
Dada $h$ una hipótesis de $H$ notamos:
- $P(h)$ probabilidad inicial de ocurrencia de $h$. (Probabilidad previa o a priori)
- $P(D|h)$ probabilidad de observar los datos $D$ dado que se cumple la hipótesis $h$.
- $P(h|D)$ probabilidad de observar la hipótesis h dado que son conocidos $D$.
	- Refleja el nivel de confianza de $h$ después de conocer los datos de $D$.

### hipótesis MAP
La ‘mejor’ hipótesis es la hipótesis más probable dados los datos, que maximiza $P(h|D)$.

Dado que los datos de entrenamiento siempre son los mismos, P(D) no cambia, por lo tanto:
$$h_{MAP} = argmax_{h \in H} \space P(D|h) \times P(h)$$
### hipótesis ML (máxima verosimilitud)
Bajo la hipótesis que $P(h)=cte$ (es decir hipótesis con probabilidad equiprobable).
$$h_{ML} = argmax_{h \in H} \space P(D|h)$$
### naive bayes
Asume independencia de los atributos dada una hipótesis.
O sea: $$P(a_{1}, ... a_{n}|h) = P(a_{1}|h) \times ... \times P(a_{n}|h)$$
Lo que da: $$h_{MAP} = argmax_{h \in H} \space P(h) \times \prod_{i=1}^{n} P(a_{i}|h)$$
### m-estimador
$$\frac{e + m \times p}{n+m}$$
La fórmula puede verse como aumentar la muestra con $m$ ejemplos, distribuidos según $p$.

Donde:
- $e$ es el número de eventos:
	- Cantidad de veces que el atributo vale lo querés dada la hipótesis
	- ej: Cantidad de ejemplos donde el tiempo es nublado y el niño no jugó

- $n$ es el número de casos favorables
	- Es decir, la cantidad de veces que se dio la hipótesis
	- ej: Cantidad de veces que el niño jugó

- $m$ es el “tamaño equivalente de la muestra”. Es un parámetro que vos determinas.
	- Es la cantidad de ejemplos que querés añadir.

 - $p$ es la estimación a priori de la probabilidad buscada. Es parámetro que vos determinas.
	- Es la probabilidad de que se dé el valor del atributo que querés.
	- ej: tiempo nublado
	- Se puede tomar equiprobable: $p=1/valores$ donde "valores" es la cantidad de clases a clasificar.


# Aprendizaje basado en casos

La idea es crear un clasificador ‘perezoso’ para clasificar una nueva instancia, utilizo aquellas que más se le parecen de las que ya conozco.  
#### Ventajas:  
- Para cada nueva instancia puedo obtener un clasificador diferente.
- La descripción de las instancia puede ser tan compleja como quiera.  
#### Desventajas:  
- El costo de clasificación puede ser alto.  
- Atributos irrelevantes pueden afectar la medida de similitud.

### K - Nearest Neighbor
Queremos aproximar un concepto, utilizando las k instancias más  
cercanas a un elemento <a1,...,an> que deseamos clasificar.
- Se pueden usar muchas nociones de distancia.
- Si los diferentes atributos tienen distinta magnitud: escalar o normalizar.
- Si hay atributos más relevantes que otros: ponderar al calcular la distancia.
- Si hay atributos categóricos sin definición de distancia natural: one-hot-encoding.

#### Elección de K
- Si se elige k muy bajo, el resultado es muy sensible al ruido; si es muy alto, las zonas que tengan muchos ejemplos pueden acaparar a zonas que tengan menos.
- Por lo general se elige un k impar para no tener problemas de empate.
- Una forma de estimar k es probando distintos valores, midiendo la performance dejando un elemento del conjunto afuera y clasificando con el resto (1-out-cross-validation).

#### ¿Cuál es el sesgo inductivo de K-NN?  
La clasificación de una instancia es parecida a las de sus k vecinos (cercanía implica similitud).

### Regresión local ponderada
Generalizamos KNN, creando una aproximación local de la función objetivo y construimos una función h que aproxime a los puntos cercanos a $x_?$.

- Varias elecciones para la función $h_k(x)$.
	- Media sobre los k vecinos cercanos
	- Ponderado a todo el conjunto de instancias
	- Ponderado a los k cercanos

Luego de clasificar la nueva instancia, podemos descartar a la hipótesis encontrada: cada instancia genera una nueva aproximación.

### Razonamiento basado en casos
Al igual que KNN y RLP, clasificamos una instancia en base a casos parecidos: en lugar de puntos en un espacio euclídeo, las instancias se representan con atributos más complejos.
- Se debe buscar una métrica de similitud que depende del dominio de trabajo.
- La solución se basa en combinaciones complejas y específicas al dominio de aplicación.

# Aprendizaje No Supervisado

En el aprendizaje no supervisado trabajamos directamente con las instancias sin anotar, buscando patrones  y relaciones dentro del conjunto.

### Clustering
- Buscamos agrupar las instancias del conjunto de entrenamiento
- Queremos que las instancias que están en el mismo cluster sean parecidas entre sí, y diferentes a los de los demás clusters.
- Podemos también verlo como un proceso de clasificar... con etiquetas desconocidas.
- El objetivo del clustering no es predictivo, sino descriptivo.  

<img src="https://github.com/pln-fing-udelar/curso_aa/blob/master/img/clusters.png?raw=true" alt="Diferentes clusters"  width=500 />

Para determinar qué tan parecidas son las instancias, se usan las distancias.
- distancia euclídea
- distancia coseno
- etc...

#### K-means
- Asume que nuestras instancias pertenecen a $\mathbb{R}^n$.
- Es un algoritmo de partición: parte el espacio en K clusters convexos.
- Cada cluster está representado por un _centroide_ (definido como la media de las instancias).
- Se busca minimizar la distancia euclídea entre los puntos de cada cluster y su centroide.

<img src="https://github.com/pln-fing-udelar/curso_aa/blob/master/img/clusters_partidos_23.png?raw=true" alt="Diferentes clusters"/>

- El centroide de un cluster se define como la media de las instancias ($N_k$ es el número de instancias en el cluster) : 
$$ \mu_k = \frac{1}{N_k} \sum_{q=1}^{N_k} x_q $$
- Lo que querríamos tener es un conjunto de clusters donde fuera mínima la suma de los errores cuadráticos (SSE):
$$ SSE = \sum_{k=1}^{K} \sum_{x_i \in C_k} \| x_i - \mu_k \|^2$$
- Problema: probar todas las combinaciones posibles de clusters es muy costoso.
- K-means propone una aproximación iterativa, que tiene complejidad lineal en el número de instancias.

```
Input: S (dataset), K (número de clusters)
Output: clusters
    1: Inicializar K centroides aleatoriamente
    2: Mientras no se de la condición de fin:
    3:       Asignar cada instancia al centroide más cercano
    4:       Recalcular los centroides
    5: Retornar los clusters
```

<img src="http://dendroid.sk/wp-content/uploads/2013/01/kmeansimg-scaled1000.jpg?w=300" alt="Diferentes clusters"/>

- K-means es bueno cuando los clusters son isotrópicos (uniformes en todas direcciones).
- Problema: muy sensible a la inicialización. 
- Heurística:
	- probar diferentes inicializaciones y elegir aquella donde $SSE$ sea mínimo.
	- elegir como centroides iniciales puntos del dataset.

#### Evaluación externa
Necesitamos una forma de comparar el clustering generado con el derivado de las clases.

La medida más utilizada es el índice de Rand:
    - Dados dos agrupamientos $A_1$ y $A_2$, donde:
        - $a$ es el número de pares que de elementos que están en el mismo cluster en ambos agrupamientos
        - $b$ es el número de pares que están en distinto cluster en ambos agrupamientos
        - $c$ es el número de pares que están en el mismo cluster en $A_1$ pero en distinto cluster en $A_2$
        - $d$ es el número de pares que están en el mismo cluster en $A_2$ pero en distinto cluster en $A_1$
    - El $\text{índice de Rand}$ se define como:    $$ RI = \frac{a+b}{a+b+c+d}$$
- El RI resulta en un valor entre 0 y 1, donde 0 indica que los clusters no concuerdan en ningún par, y 1 indica que los clusters son exactamente iguales
- El problema con RI es que si asignamos clusters al azar, no necesariamente nos da 0. El Adjusted Rand Index es una versión donde se busca corregir la influencia del azar, ajustando a partir de una matriz de contingencia.

#### Evaluación interna
No tenemos clusters "verdaderos", tenemos que hacer una validación interna.
La validación interna busca medir principalmente la cohesión de los clusters, y su separación.

El Índice Davies Boulding: mide la similitud promedio entre cada cluster y el cluster más similar a él. Si construimos una matriz que balancea la distancia promedio $s_i$ de cada punto del cluster $i$ con su centroide, y la distancia $d_{ij}$ entre los centroides $i$ y $j$:
$$ R_{ij} = \frac{s_i+s_j}{d_{ij}} $$
El índice se define como:
$$ DB = \frac{1}{k} \sum_{i=1}^k \max_{i \neq j} R_{ij}$$
#### Número de clusters
- No es fácil identificar un número "óptimo" clusters.
- En general, si aumentamos el número de clusters, nuestros clusters son "mejores".
- ... pero corremos el riesgo de sobre-ajuste.

- **Método del Codo**: buscar el punto donde agregar más clusters no vale la pena porque la mejora deja de ser importante.
    1. dibujar la performance (medida, por ejemplo en SSE) como función de la cantidad de clusters;
    2. seleccionar el valor correspondiente al codo de la curva.

<img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/DataClustering_ElbowCriterion.JPG" alt="Elbow method" width=500 />

### Principal Component Analysis
- PCA es un método no supervisado para encontrar patrones en los datos.
- Buscar reducir las dimensiones del conjunto de datos, con la mínima pérdida de información posible.
- Muy útil para visualizar datos en espacios n-dimensionales.

https://builtin.com/data-science/step-step-explanation-principal-component-analysis

# Aprendizaje por refuerzos

Está bastante resumido en:
[[Aprendizaje Por Refuerzos]]

Regla de actualización, luego de dar un paso del estado $s_1$ al $s_2$, con la acción $a$ y obtener una recompensa $r$.
$$Q(s, a_{1}) = r + \gamma \space max\{Q(s_{2},a_{2}):a_{2} \in acciones\}$$

# Regresión Lineal

### Definición
La regresión lineal es una forma de aprendizaje supervisado donde, a partir de un vector $x^T = (x_1, x_2, \ldots, x_n)$ con $n$ _atributos_ (o *variables*) se busca construir una función (hipótesis) $h_{\theta}(x): \mathbb{R}^{n} \to \mathbb{R}$ que prediga la salida $y \in \mathbb{R}$ (llamada *variable o atributo de salida*), continua,  a través del siguiente modelo:
$$h_{\theta}(x) = \theta_0+\sum_{j=1}^n x_j\theta_j$$
<img src="https://www.researchgate.net/profile/Mauricio_Salgado/publication/42100369/figure/fig1/AS:652249911001105@1532519905539/Figura-1-modelo-de-regresion-Lineal-expectativa-de-vida-al-nacer-y-PiB-per-capita-por.png" alt="Drawing" style="width: 500px;"/>
### Función de costo
La función de costo es aquella que mide qué tan cercano es $h_{\theta}(x)$ de $y$.
#### MSE
$$ J(\theta) = \frac{1}{2m} \sum_{i=1}^m (h_\theta(x^{(i)}) - y^{(i)})^2$$
### Ecuaciones normales y desventajas
Las ecuaciones normales proveen una forma cerrada de calcular los valores de $\theta$ que minimizan $J(\theta)$. El algoritmo asociado tiene $O(n^3)$, por lo que si el número de atributos o de instancias es muy grande, puede llegar a ser muy lento, y, en esos casos, es preferible utilizar métodos iterativos.

### Descenso por gradiente
Es un algoritmo de búsqueda iterativo, que parte de una estimación inicial de $\theta$, y la va cambiando para que $J(\theta)$ se reduzca, hasta converger a un valor de $\theta$ que corresponde a un mínimo global de $J(\theta)$, **siempre y cuando $J(\theta)$ sea convexa**.

El algoritmo comienza con un $\theta$ inicial, y repetidamente realiza la siguiente actualización (simultáneamente para todos los $\theta_j$, con $j = 0,\ldots,n$):
$$ \theta_j := \theta_j - \alpha \frac{\partial}{\partial \theta_j} J(\theta) $$

# Regresión Logística

Se aplica la función logística a la salida de la regresión lineal, y sobre eso se establece una barrera de decisión.
### Función logística:
$$\sigma(z) = \frac{1}{1+e^{-z}}$$
# Redes neuronales

### Matriz de pesos
$W^{(2)}$ es la matriz de pesos de la primera capa oculta. La primera fila representa los parámetros de la combinación lineal que se asignará a la primera unidad de la capa.

En general:
La matriz $W^{(j)}$ tiene en su fila $i$ los pesos asociados a la combinación lineal de las entradas de la unidad $i$ de la capa $j$, que son resultados de la activación de las unidades en la capa $j-1$.

### Bias o sesgo
De manera similar $b^{(i)}$ es el vector de sesgos de la capa $i$. En la entrada $j$-ésima tendrá el sesgo correspondiente a la $j$-ésima unidad de la capa $j$.

