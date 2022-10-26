
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
- A:
	250 + red + broadcast
	8 bits
	214.97.253.0/24
- B:
	120 + red + broadcast
	7 bits
	214.97.252.0/25
- C: 
	120 + red + broadcast
	7 bits
	214.97.252.128/25
- D: 
	2 + red + broadcast
	2 bits
	214.97.254.0/30
- E: 
	2 + red + broadcast
	2 bits
	214.97.254.4/30
- F: 
	2 + red + broadcast
	2 bits
	214.97.254.16/30
## Parte *b*
...

# Ej. 9
```ad-info
title: Letra
collapse: closed
![[Pasted image 20221026192656.png]]
```

2400 bytes ⇾  20 bytes cabecera IP + 2380 bytes de datos

Se particionan los datos en fragmentos de largo máximo 680 bytes.

Fragmento 1:
	id: 422
	largo: 700
	indicador de fin: 1 (quedan paquetes)
	desplazamiento dentro del datagrama original: 0
Fragmento 2:
	id: 422
	largo: 700
	indicador de fin: 
	desplazamiento dentro del datagrama original: 1 * 680
Fragmento 3:
	id: 422
	largo: 700
	indicador de fin: 1
	desplazamiento dentro del datagrama original: 2 * 680
Fragmento 4:
	id: 422
	largo: 360 
	indicador de fin: 0 (ultimo)
	desplazamiento dentro del datagrama original: 3 * 680

# Ej. 10
```ad-info
title: Letra
collapse: closed
![[Pasted image 20221026193649.png]]
```

5 millones en paquetes de (1500-20): 3379 datagramas

# Ej. 11
```ad-info
title: Letra
collapse: closed
![[Pasted image 20221026193910.png]]
```

## Parte *a*
- Router: 192.168.1.1
- H1: 192.168.1.2
- H2: 192.168.1.3
- H3: 192.168.1.4

## Parte *b*
| Lado WAN            | Lado LAN        |
| ------------------- | --------------- |
| 24.34.112.235:50011 | 192.168.1.2:501 |
| 24.34.112.235:50012 | 192.168.1.2:502 |
| 24.34.112.235:50021 | 192.168.1.3:501 |
| 24.34.112.235:50022 | 192.168.1.3:502 |
| 24.34.112.235:50031 | 192.168.1.4:501 |
| 24.34.112.235:50032 | 192.168.1.4:502 |

# Ej. 12
```ad-info
title: Letra
collapse: closed
![[Pasted image 20221026194858.png]]
![[Pasted image 20221026194850.png]]
![[Pasted image 20221026194838.png]]
```

```ad-danger
title: Dominio de broadcast
Todas las IP alcanzables por el broadcast de la sub-red.
```
## Parte *a*:
- Subred 1
- Subred 2
- 190.1.1.2/29

## Parte *b*
- S1
	30 hosts + router + red + broadcast = 33
	6 bits ⇾ /26
	192.168.1.0/26
- S2
	125 hosts + router + red + broadcast = 128 bits
	7 bits ⇾ /25
	10.1.2.0/25


