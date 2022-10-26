
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
