# Información mutua

![[Pasted image 20230428134100.png]]

## Es no negativa

![[Pasted image 20230428134130.png]]

## Relaciones entre Información Mutua y Entropía
![[Pasted image 20230428134159.png]]
![[Pasted image 20230428134209.png]]
![[Pasted image 20230428134216.png]]

## Diagrama de Venn
![[Pasted image 20230428134232.png]]

## Información Mutua Condicional
![[Pasted image 20230428134250.png]]

### Es no negativa
![[Pasted image 20230428134314.png]]

### Regla de la cadena
![[Pasted image 20230428134330.png]]
#### Demostración
![[Pasted image 20230428134342.png]]

## Desigualdad de Procesamiento de Datos

![[Pasted image 20230428134407.png]]

![[Pasted image 20230428134414.png]]

![[Pasted image 20230428134424.png]]

![[Pasted image 20230428134446.png]]

## Concavidad/Convexidad de $I(X; Y)$
![[Pasted image 20230428134518.png]]

# Desigualdad de Fano

![[Pasted image 20230428135011.png]]

![[Pasted image 20230428135021.png]]

![[Pasted image 20230428135030.png]]

# Codificación de canal
## Introducción
### Canal discreto sin memoria (DMC)
![[Pasted image 20230509193635.png]]
![[Pasted image 20230509193644.png]]

### Código de canal (M,n)
![[Pasted image 20230509193722.png]]
![[Pasted image 20230509193729.png]]

### Probabilidad de error de un código para un canal
![[Pasted image 20230509193748.png]]

### Capacidad Operativa
![[Pasted image 20230509193805.png]]
![[Pasted image 20230509193812.png]]

### Capacidad Informacional de un canal
![[Pasted image 20230509193826.png]]

#### Capacidad informacional de un canal sin ruido
![[Pasted image 20230509193847.png]]

#### Capacidad informacional del canal binario simétrico (BSC)
![[Pasted image 20230509193904.png]]

#### Capacidad informacional del canal con borraduras
![[Pasted image 20230509193934.png]]

## Teorema de codificación de canal

### Enunciados previos

#### Tipicalidad conjunta
![[Pasted image 20230509202047.png]]

#### AEP conjunta
![[Pasted image 20230509202146.png]]
<b><u>Nota:</u></b> El punto 3 dice que la prob. de que dos secuencias típicas de $X^n$ y $Y^n$, pero no generadas por la transmisión, sean también conjuntamente típicas, es chica, y tiende a 0 con $n$ grande.


##### Demostración de (3)
![[Pasted image 20230509202547.png]]
![[Pasted image 20230509202601.png]]

### Enunciado del teorema

![[Pasted image 20230509202629.png]]

### Intuición
![[Pasted image 20230509202710.png]]

### Demostración del directo
#### Hoja de ruta
![[Pasted image 20230509202945.png]]

#### Demostración: esquema de codificación aleatoria
![[Pasted image 20230509203022.png]]

#### Demostración: decodificación por tipicalidad conjunta
![[Pasted image 20230509203119.png]]

#### Demostración: análisis de la prob. de error
![[Pasted image 20230509203141.png]]
![[Pasted image 20230509203202.png]]
![[Pasted image 20230509203214.png]]

#### Demostración: refinamiento del código
![[Pasted image 20230509203234.png]]

#### Final
![[Pasted image 20230509203242.png]]

### Demostración del recíproco
#### Recíproco: enunciado
![[Pasted image 20230509203652.png]]

#### Hoja de ruta
![[Pasted image 20230509203424.png]]

#### Caso simple: probabilidad de error 0
![[Pasted image 20230509203443.png]]
![[Pasted image 20230509203454.png]]
Osea, utilizar el canal varias veces <u>no aumenta</u> su capacidad.

![[Pasted image 20230509203520.png]]

#### Desigualdad de Fano para codificación de canal
![[Pasted image 20230509203617.png]]
![[Pasted image 20230509203626.png]]

#### Recíproco: demostración
![[Pasted image 20230509203700.png]]

#### Recíproco: conclusiones
![[Pasted image 20230509203737.png]]

## Códigos prácticos de canal

![[Pasted image 20230517201718.png]]

### Códigos lineales
![[Pasted image 20230517203006.png]]

#### Definiciones
![[Pasted image 20230517203246.png]]

##### Matriz generadora G
![[Pasted image 20230517203029.png]]

##### Matriz de chequeo de paridad H
![[Pasted image 20230517203421.png]]

#### Ejemplos de códigos 
![[Pasted image 20230517203036.png]]
![[Pasted image 20230517203103.png]]
![[Pasted image 20230517203438.png]]
![[Pasted image 20230518145539.png]]

#### Ejemplo de decodificación (Hamming)
![[Pasted image 20230518145618.png]]

#### Otros códigos lineales
![[Pasted image 20230518145647.png]]

##### Aplicaciones
![[Pasted image 20230518145717.png]]

## Canales con realimentación
![[Pasted image 20230525204542.png]]

### Definiciones
![[Pasted image 20230525204610.png]]
![[Pasted image 20230525204629.png]]
![[Pasted image 20230525204636.png]]

### Capacidad del canal con realimentación
![[Pasted image 20230525204700.png]]

![[Pasted image 20230525204716.png]]

![[Pasted image 20230525204726.png]]
![[Pasted image 20230525204743.png]]
![[Pasted image 20230525204810.png]]

## Codificación conjunta fuente-canal: uniendo teoremas
![[Pasted image 20230525204841.png]]

### ¿Separar o no separar?
![[Pasted image 20230525204858.png]]

Lo mismo da!
![[Pasted image 20230525204908.png]]


### Formalización del problema
![[Pasted image 20230525210233.png]]

### Teorema (Codificación conjunta fuente-canal)
![[Pasted image 20230525210302.png]]

#### Demostración del directo
![[Pasted image 20230525210343.png]]

#### Demostración del recíproco
![[Pasted image 20230525210355.png]]
![[Pasted image 20230525210403.png]]
![[Pasted image 20230525210417.png]]

#### Conclusiones
![[Pasted image 20230525212533.png]]








