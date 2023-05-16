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

### Probabilidad de error de un c´odigo para un canal
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

## Teorema

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

#### Demostraci´on: an´alisis de la prob. de error
![[Pasted image 20230509203141.png]]
![[Pasted image 20230509203202.png]]
![[Pasted image 20230509203214.png]]

#### Demostraci´on: refinamiento del c´odigo
![[Pasted image 20230509203234.png]]

#### Final
![[Pasted image 20230509203242.png]]

### Demostraci´on del rec´ıproco
#### Hoja de ruta
![[Pasted image 20230509203424.png]]

#### Caso simple: probabilidad de error 0
![[Pasted image 20230509203443.png]]
![[Pasted image 20230509203454.png]]
Osea, utilizar el canal varias veces no aumenta su capacidad.

![[Pasted image 20230509203520.png]]

#### Desigualdad de Fano para codificaci´on de canal
![[Pasted image 20230509203617.png]]
![[Pasted image 20230509203626.png]]

#### Rec´ıproco: demostraci´on
![[Pasted image 20230509203652.png]]
![[Pasted image 20230509203700.png]]

#### Rec´ıproco: conclusiones
![[Pasted image 20230509203737.png]]
