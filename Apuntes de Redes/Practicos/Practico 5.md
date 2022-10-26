
# Ej. 1
```ad-info
title: Letra
collapse: closed

![[Pasted image 20221025172748.png]]
```
## Parte *a*

| Direccion de destino | Interfaz de salida |
| -------------------- | ------------------ |
| H3                   | 3                  |

## Parte *b*
No es posible con una tabla de reenvío basada en la dirección de destino (destination-based forwarding). Si se puede hacer con OpenFlow 1.0 y posteriores.

# Ej. 2
```ad-info
title: Letra
collapse: closed
![[Pasted image 20221025172939.png]]
```

## Parte *a*
No, no es posible porque deben turnarse para utilizar el bus compartido.

## Parte *b*
No, para realizar el copiado del enlace de entrada al enlace de salida debe usarse el CPU y un bus compartido. Aunque el CPU pudiera ejecutar varios procesos en simultáneo, no se podría hacer que se muevan dos datos distintos por un mismo bus.

## Parte *c*
No, no se puede porque el enlace de salida solo puede "encolar" un datagrama por vez. Se podría si los datagramas tienen enlaces de salida distintos.

# Ej. 3
```ad-info
title: Letra
collapse: closed
![[Pasted image 20221025205030.png]]
```

- Velocidad de entrada: `s`
- Cant. puertos de entrada: `n`
- Llegan `n` paquetes de largo `L` en las `n` entradas simultáneamente
- Todos los paquetes se reenvían a puertos de salida distintos
- Velocidad del entramado: `n*s`

## Parte *a*: memoria
Como la copia de un paquete se debe hacer primero enviándolo a la memoria principal y luego al puerto de salida, solo puede realizarse 1 transferencia por vez. Cada transferencia durará: `dur_transf := copia_a_memoria + copia_a_puerto_salida`
De esto se deduce que el paquete que debe esperar más (el último) deberá esperar `(n-1)*dur_transf`.

## Parte *b*: bus
El bus no es compartido, por lo que no es posible enviar más de un paquete en un instante dado. Se deberá esperar `(n-1)*dur_transf`.

## Parte *c*: malla
Como todos los paquetes van a distinto destino, ninguno deberá esperar por algún otro para ser enviado. El retardo máximo es 0.

# Ej. 4
```ad-info
title: Letra
collapse: closed
![[Pasted image 20221026162711.png]]
```

## Parte *a*
$t_0$ : como la foto
$t_1$ : 
	- Cola de entrada 1 se fue el X. 
	- De la cola 2 se fué el paquete Y. 
	- En la cola 3 se fue Z.
$t_2$ :
	- De la cola 2 se fué el paquete X. 
	- En la cola 3 se fue Y 

## Parte *b*
No se me ocurrió si "una cola no vacía nunca está inactiva".

# Ej. 5
```ad-info
title: Letra
collapse: closed
![[Pasted image 20221026163928.png]]
![[Pasted image 20221026163942.png]]
```

## Parte *a*
#### Saco los prefijos:
0:  11100000 00
	11100000 00000000 00000000 00000000
	11100000 00111111 11111111 11111111
1:  11100000 01000000
	11100000 01000000 00000000 00000000
	11100000 01000000 11111111 11111111
2:  11100001 0 y 11100000 01
	11100000 01000001 00000000 00000000 
	11100001 01111111 11111111 11111111
3: otro caso
#### Sol:
| Direccion de destino | Interfaz de salida |
| -------------------- | ------------------ |
| 11100000 00  | 0                |
|     11100000 01000000      | 1                |
|     11100001 0          | 2                |
|      11100000 01         | 2                |
|    Otro caso         | 3                |


## Parte *b*

1. 3
2. 2
3. 3

# Ej. 6
```ad-info
title: Letra
collapse: closed
![[Pasted image 20221026172517.png]]
```

223.1.16.0/23 quiere decir que tenemos disponibles las direcciones:

11011111.00000001.00010000.00000000 
	a
11011111.00000001.00010001.11111111
Osea, 512 ips

S1: 
	60 interfaces + red + broadcast = 62 -> 6 bits y sobra
	/26
S2: 
	95 interfaces + red + broadcast = 97 -> 7 bits y sobra
	/25
S3:
	16 interfaces + red + broadcast = 18 -> 5 bits y sobra
	/27

![[Drawing 2022-10-26 17.49.49.excalidraw]]

# Ej. 7
```ad-info
title: Letra
collapse: closed
![[Pasted image 20221026180012.png]]
```

![[Drawing 2022-10-26 18.15.54.excalidraw]]

# Ej. 8
```ad-info
title: Letra
collapse: closed
![[Pasted image 20221026182630.png]]
```
Ignorando las direcciones de la figura:
## Parte *a*

## Parte *b*
