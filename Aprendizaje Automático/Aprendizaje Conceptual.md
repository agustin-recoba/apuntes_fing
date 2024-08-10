---
default_file: conceptual.pdf
default_text: true
---
# Definición

```slide-note
page: 3

```

```slide-note
page: 4

```

```slide-note
page: 5

```

```slide-note
page: 6
```

```slide-note
page: 7
1. No, la hipótesis falla en el 3er ejemplo

2. El espacio de hipótesis no permite representar esa fórmula lógica.
```

```slide-note
page: 8

```

```slide-note
page: 9

```

```slide-note
page: 10

```

# Aprendizaje = Búsqueda

```slide-note
page: 11

Iterar sobre H hasta encontrar una que cubra la realidad no es eficiente (imposible si H es muy grande).
```

```slide-note
page: 12
En palabras: $h_j$ es más general que $h_k$ sii para todos los ejemplos que $h_k$ clasifica como positivos, $h_j$ también lo hace.

Se desprende fácil de esto que la hipótesis que tiene todos "?" es la hipótesis más general.
Y la que tiene todos "$\emptyset$" es la más específica.
```

```slide-note
page: 13

```

# Find-S

```slide-note
page: 14

```

```slide-note
page: 15

```

```slide-note
page: 16
#algoritmo

Como mi hipótesis en todo momento es la más específica posible, los ejemplos negativos se clasifican como negativos (excepto por errores en los datos), confirmando la hipotesis (y por lo tanto no demandan actualización de la misma).
```

## ¿Qué pasa si queremos que las hipótesis sean disynciones (or) en vez de conjunciones (and)?

Ejemplo: Dedicación == 'Alta' OR Horario == 'Nocturno'
La formula sería: <'Alta', $\emptyset$, 'Nocturno', $\emptyset$, $\emptyset$>

El algoritmo comenzaría con:
<$\emptyset$, $\emptyset$, $\emptyset$, $\emptyset$, $\emptyset$>

Pero el siguiente paso tendría más de una opción de hipótesis más general que además confirmen el primer ejemplo de la tabla ($x_1$).
Ej: <Alta, $\emptyset$, $\emptyset$, $\emptyset$, $\emptyset$> ó <$\emptyset$, Alta, $\emptyset$, $\emptyset$, $\emptyset$> ó <$\emptyset$, $\emptyset$, Nocturno, $\emptyset$, $\emptyset$>, $...$

A su vez, ya no podemos ignorar los ejemplos negativos.

## Conclusión

```slide-note
page: 17
1. 
2. Es una cuestión de optimismo vs. pesimismo.
3. 
4. La hipótesis no será correcta. Find-S es muy sensible al ruido.

```

# Candidate-Elimination

```slide-note
page: 18
```

```slide-note
page: 19
```

```slide-note
page: 20
```

```slide-note
page: 21
```

```slide-note
page: 22
#algoritmo

@ // rect
@ ctx.strokeStyle = "red";
@ ctx.lineWidth = W(0.004);
@ ctx.strokeRect(W(0.180), H(0.553), W(0.749), H(0.326));

En rojo: Algoritmo Find-S
```

```slide-note
page: 23
#algoritmo
```

```slide-note
page: 24
```

```slide-note
page: 25

1. Todo menos $h_4$ y $h_5$.
2. Pasos:
	1. $h_{j}$ es inconsistente con x, por lo que es necesario quitarlo de $S$. Los candidatos a reemplazar a $h_{j}$ son $h_{1}$ y $h_{2}$ pero ambos son más generales que $h_{i}$ y $h_{k}$ respectivamente (entonces no pertenecen a S).
	2. $h_{a}$ y $h_{b}$ (ambos en G) son inconsistentes con x: debemos especificarlas. $h_{a}$ se reemplaza por $h_{1}$, y $h_{b}$ tiene como candidata a $h_{2}$ pero $h_{c}$ es más general.
```

```slide-note
page: 26
```

```slide-note
page: 27
```

```slide-note
page: 28
```

```slide-note
page: 29
```

```slide-note
page: 30
```

```slide-note
page: 31

@ // textbox
@ ctx.fillStyle = "rgb(0,0,0)";
@ ctx.font=`${H(0.055)}px Arial`;
@ ctx.fillText("-> si", W(0.724), H(0.782));
@ // textbox
@ ctx.fillStyle = "rgb(0,0,0)";
@ ctx.font=`${H(0.055)}px Arial`;
@ ctx.fillText("-> no", W(0.721), H(0.850));
```

# Sesgo Inductivo

```slide-note
page: 32
```

```slide-note
page: 33
```

