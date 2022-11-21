# Dependencias funcionales
### Reglas de inferencia
![[Pasted image 20221120234321.png]]
### Algoritmo para hallar un cubrimiento minimal de un conjunto de DF
![[Pasted image 20221120222841.png]]

# Dependencias multivaluadas
Si se tienen 2 o más atributos que tienen más de un valor asociado con determinado objeto y que son independientes entre sí, se tendrán que repetir todos los valores de uno de los atributos con cada valor del otro atributo manteniendo la misma referencia para los objetos, para que las tuplas de la relación sigan siendo consistentes. Esta restricción se especifica con una dependencia multivaluada.

![[Pasted image 20221121000428.png]]

#### Inferencia de DMV
![[Pasted image 20221121000459.png]]

#### Dependencia Multivaluada Embebida
![[Pasted image 20221121000720.png]]

# Normalización
### Propiedad JSP
![[Pasted image 20221120235523.png]]
### Matriz JSP
![[Pasted image 20221120235537.png]]
### Preservacion de dependencias
Una descomposición $D = (R_1 , R_2 , ..., R_m)$ de R preserva las dependencias respecto a F si se cumple: 
$$( \Pi_{R_{1}} (F) \cup \ ...\  \cup  \Pi_{R_{m}} (F) )^+ = F^+$$

## Definiciones
### 1NF
![[Pasted image 20221120234641.png]]
### 2NF
![[Pasted image 20221120234614.png]]
#### Atributo no primo
Un atributo del esquema relación R es primo si es miembro de alguna clave de R.

#### Dependencia parcial
X -> Y es una df parcial si es posible eliminar un atributo A de X, y la df sigue siendo válida.


### 3NF
![[Pasted image 20221120234554.png]]

#### Dependencia transitiva
Una df X->Y en un er R es una df transitiva si existe un conjunto de atributos Z que no sea un subconjunto de una clave de R, y se cumplen tanto X->Z como Z->Y.

### BCNF
![[Pasted image 20221120234932.png]]
### 4NF
![[Pasted image 20221121000533.png]]


## Algoritmos

### Pasaje a 3NF con pres. de dependencias y JSP
![[Pasted image 20221120222552.png]]

### Pasaje a BCNF con JSP (usar antes el algoritmo de 3NF)
![[Pasted image 20221120235621.png]]

### Pasaje a 4NF con JSP (usar antes el algoritmo de 3NF)
![[Pasted image 20221121000631.png]]

# Pasaje MER a Relacional
Por cada entidad, una tabla.
Por cada atributo multivaluado, una tabla.
#### Relaciones
![[Pasted image 20221120235822.png]]

![[Pasted image 20221120235840.png]]

![[Pasted image 20221121000343.png]]

#### Entidad débil
![[Pasted image 20221120235909.png]]

#### Categorizaciones
![[Pasted image 20221120235936.png]]

![[Pasted image 20221121000006.png]]

![[Pasted image 20221121000025.png]]

![[Pasted image 20221121000037.png]]

![[Pasted image 20221121000048.png]]



# Optimización
## Resumen general
![[Pasted image 20221121000852.png]]

**El arbol canónico es con productos cartesianos que luego se convertirán en JOIN** 

## Equivalencia de expresiones de álgebra
![[Pasted image 20221121000930.png]]

![[Pasted image 20221121000947.png]]

## Heurísticas
![[Pasted image 20221121001014.png]]

## Planes físicos
![[Pasted image 20221121001129.png]]

### Resumen
![[Pasted image 20221121001605.png]]

![[Pasted image 20221121001615.png]]

### Selección
![[Pasted image 20221121001159.png]]

#### Con ídices:
![[Pasted image 20221121001232.png]]

### Join $R \Join _{A=B} S$ 
![[Pasted image 20221121001258.png]]

![[Pasted image 20221121001531.png]]





# Transacciones y concurrencia
## Transacción
![[Pasted image 20221121001734.png]]
![[Pasted image 20221121001755.png]]
## Operaciones
#### Operaciones en Conflicto. 
Dos operaciones (r o w) están en conflicto si cumplen a la vez las siguientescondiciones: 
- Pertenecen a distintas transacciones.
- Acceden al mismo ítem.
- Una es un write.

#### Grafo de seriabilidad
Para todo par de operaciones en conflicto de $T_i$ seguida de $T_j$, se agrega un arco de $T_i$ a $T_j$.
##### Teorema de Seriabilidad
Un historia H es serializable si su grafo de seriabilidad es acíclico.

#### Lectura de una transacción
$T_1$ lee de $T_2$ en $H$ si $w_2(X)$ está antes de $r_1(X)$ y entre medio:
- no hay otro $w_j(X)$ (que no es abortado antes de $r_1(X)$)
- no está $a_2$

#### Historias Recuperables
Una historia es **Recuperable** si ninguna transacción confirma hasta que confirmaron todas las transacciones desde las cuales leyó ítems. (Los commits están en el mismo orden que el flujo de datos).

#### Historias que Evitan Abortos en Cascada
Una historia **Evita Abortos en Cascada** si ninguna transacción lee de transacciones no confirmadas. (Los commits tienen que estar antes de los read siguientes).

#### Historias Estrictas
Una historia es **Estricta** si ninguna transacción lee o escribe hasta que todas las transacciones que escribieron ese ítem fueron confirmadas. (Los commits tienen que estar antes de los read o write siguientes).

## Locking

### 2PL
![[Pasted image 20221121002713.png]]
**Asegura seriabilidad**

![[Pasted image 20221121002731.png]]
![[Pasted image 20221121002745.png]]

## Deadlocks
![[Pasted image 20221121002838.png]]

# Recuperación


