# Entropía diferencial

```ad-abstract
title: Introducción
#### Def. Variable Aleatoria:
Let X be a random variable with cumulative distribution function $F (x) = Pr(X ≤ x)$. If $F(x)$ is continuous, the random variable is said to be continuous.


Let $f(x) = F'(x)$ when the derivative is defined. If $\int\limits_{-∞}^∞ f(x) = 1$, $f$ is called the probability density function for X. 

The set where $f(x) > 0$ is called the support set of X.
```

## Definición

![[Pasted image 20230531143213.png]]

## Ejemplos

### Distribución uniforme
```ad-note
title: Nota
The [probability density function](https://en.wikipedia.org/wiki/Probability_density_function "Probability density function") of the continuous uniform distribution is:
$$f(x)={\begin{cases}{\frac {1}{b-a}}&{\text{for }}a\leq x\leq b,\\[8pt]0&{\text{for }}x<a\ {\text{ or }}\ x>b.\end{cases}}$$


So, if $X∼U(0, a)$, f(x) = 1/a from 0 to a and 0 elsewhere.
```

![[Pasted image 20230531143315.png]]

### Distribución normal
![[Pasted image 20230531143325.png]]
```ad-example
title: Desarrollo
collapse: closed
![[Pasted image 20230531144655.png]]


![[Pasted image 20230624153719.png]]
```

# AEP

![[Pasted image 20230531143351.png]]

Donde $f(x_{1}, x_{2}, ...,x_{n}) = \prod_{i=1}^{n} f(x_{i})$

```ad-note
title: Nota
![[Pasted image 20230624154144.png]]
```


![[Pasted image 20230531143402.png]]
```ad-example
title: Desarrollo
collapse: closed
![[Pasted image 20230531151936.png]]


![[Pasted image 20230624154324.png]]


![[Pasted image 20230624154334.png]]
```

### Algunas observaciones
![[Pasted image 20230531143423.png]]

# Entropía diferencial y discreta

![[Pasted image 20230531143449.png]]
![[Pasted image 20230531143457.png]]

## Teorema ($h(X)$ vs $H(X^\Delta)$)

![[Pasted image 20230531143620.png]]

### Ejemplo 
![[Pasted image 20230531143635.png]]
 ```ad-example
title: Otro ejemplo
![[Pasted image 20230624155504.png]]
```


# Entropía diferencial conjunta y condicional

![[Pasted image 20230531143701.png]]
(soporte conjunto, de x e y)

![[Pasted image 20230531143709.png]]

![[Pasted image 20230531143719.png]]

# Entropía dif. relativa e Información mutua

![[Pasted image 20230531143743.png]]

![[Pasted image 20230531143758.png]]

## Definición general de información mutua

![[Pasted image 20230531143904.png]]
```ad-example
title: Representación
collapse: closed
![[Pasted image 20230531155608.png]]
```

![[Pasted image 20230531143915.png]]
Refinando P y Q se consigue una sequencia monótonamente creciente $I([X]_P;[Y]_Q)$
que tiende a $I(X, Y)$.

![[Pasted image 20230531143924.png]]

![[Pasted image 20230531143936.png]]

![[Pasted image 20230531143946.png]]

## Propiedades

![[Pasted image 20230531154643.png]]

```ad-example
title: Desarrollo de 1
collapse: closed
![[Pasted image 20230531154757.png]]
```

```ad-example
title: Desarrollo de 9
collapse: closed
![[Pasted image 20230624161058.png]]
```

# La distribución normal maximiza h para varianza dada

## Entropía de una distribución normal multivariada

![[Pasted image 20230624160011.png]]

![[Pasted image 20230624160026.png]]

## Teorema

![[Pasted image 20230531162953.png]]

![[Pasted image 20230531163001.png]]