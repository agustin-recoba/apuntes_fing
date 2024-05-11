# Ejercicio 1

![[Pasted image 20230926160016.png]]

i. Find-S obtiene la hipótesis más especifica que sea consistente con los datos.
Por lo tanto, no obtiene una hipótesis que maximiza la probabilidad de ser el objetivo (MAP).

ii. ¿Qué es una hipótesis ML? Una hipótesis es ML si maximiza $P(D|h)$.
Por lo tanto, Find-S sí obtendrá una hip. ML (pues al maximizar se ignora la probabilidad de que h sea el objetivo).

iii. Candidate-Elimination maximiza la probabilidad de clasificar  
correctamente nuevas instancias por usar una "votación" o ponderación sobre las hipótesis obtenidas.
# Ejercicio 2

![[Pasted image 20230926160051.png]]
Mitchell, pág. 172

Principio MDL: principio de selección de modelos en el cual se elije el modelo con menor largo de descripción de los datos.
Es una aplicación matemática de la Navaja de Occam.

### a. $h_{mdl} = arg \space min_{h} \{ -log_{2}P(D|h) - log_{2}P(h) \}$
Donde:
- $-log_{2}P(h) = cant\_atributos(h) \times log_{2}(n)$: largo de codificación de la hipótesis
- $-log_{2}P(D|h) = cant\_errados(D, h) \times log_{2}(m)$: largo de codificación del conjunto de entrenamiento dada la hipótesis
Entonces: $$h_{mdl} = arg \space min_{h} \{ cant\_errados(D, h) \times log_{2}(m) + cant\_atributos(h) \times log_{2}(n) \}$$
### b. 
MDL tenderá a hipótesis con menos conjunciones, aunque el precio sea que esta no sea MAP.

### c.
...
