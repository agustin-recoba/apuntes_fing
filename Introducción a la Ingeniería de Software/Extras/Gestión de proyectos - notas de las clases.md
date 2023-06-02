# Clase 1

![[IIS Notas -Gestion de proyectos.pdf]]

# Clase 2

## Identificar actividades

Hay que identificar las actividades: 
- Los paquetes de trabajo de la EDT se descomponen en actividades.
- Estas actividades van a poder ser estimadas, van a ser parte del cronograma y servirán para el seguimiento. 

Luego es necesario identificar precedencia entre las actividades:
- Identificar las relaciones lógicas en las actividades.
- Todas las actividades, salvo la primera y la última, se conectan a por lo menos una predecesora y una sucesora.

## Estimaciones

![[IIS Notas -Gestion de proyectos - Estimación - Clase2.pdf]]

### Algoritmos
![[Pasted image 20230601235518.png]]

#### COCOMO II
![[Pasted image 20230601235558.png]]

## Precedencias

### Desarrollar el cronograma
Ya: 
- Relevamos
- Definimos el alcance
- Creamos la EDT
- Definimos las actividades
- Estimamos
Y ahora?
- A armar el cronograma
- Definamos:
	- Grafo de precedencias
	- Camino critico
	- Creemos el cronograma

### Grafo de precedencias

![[Pasted image 20230601235805.png]]
![[Pasted image 20230601235813.png]]

### Camino crítico
El grafo creado con las actividades tiene varios caminos.
¿Qué es el camino crítico?
- Camino que si se retrasa, retrasa todo el proyecto, A ese camino, lo denominamos camino crítico.
- Es el camino más largo en duración.
- Puede haber más de uno.
- Puede cambiar durante el ciclo de vida.
- No tiene relación con la importancia técnica de las actividades.

#### Algoritmo
**Definiciones:**
- <u>Comienzo temprano (ES):</u> lo antes posible que puede comenzar una actividad respetando las precedencias y duraciones.
- <u>Fin Temprano (EF):</u> la fecha de fin si la actividad comienza lo antes posible y dura lo previsto.
- <u>Comienzo tardío (LS):</u> lo más tarde que puede comenzar la actividad sin afectar la duración del proyecto.
- <u>Fin tardío (FT):</u> lo más tarde que puede terminar la actividad sin afectar la duración del proyecto.
- <u>Holgura total:</u> cuánto se puede retrasar el comienzo de un actividad sin afectar la fecha de fin del proyecto.
- <u>Holgura libre:</u> cuánto se puede retrasar un actividad dentro de un camino sin retrasar la fecha de inicio temprana de cualquier actividad subsiguiente inmediata.
- <u>Camino crítico:</u> integrado por actividades que si se retrasan, retrasan el proyecto (holgura total=0).

**Método:**
- Consiste en hacer una recorrida hacia adelante en el grafo calculando ES y EF y luego una recorrida del final al inicio calculando LS y LF.
- La primera actividad, tiene ES=0
- El EF = ES + Duración de tarea

Vamos a usar la siguiente nomenclatura:
![[Pasted image 20230602000041.png]]

##### Ejemplo
![[Pasted image 20230602000127.png]]

Si una actividad tiene más de una actividad precedente, como por ejemplo T4. ES = MAX( EF_Tareas_predentes). En este caso, máximo (5,6) = 6

![[Pasted image 20230602000555.png]]

Luego comienza la recorrida hacia atrás donde calcularemos LS y LF.
Para la última actividad LF=EF y LS=LF- Duración
Para las actividades que tengan más de un actividad siguiente, en nuestro ejemplo T2: LF=min(LS_tareas_siguientes)

![[Pasted image 20230602000655.png]]

Las actividades de la ruta crítica son las que tienen holgura = 0.
En nuestro ejercicio son las actividades: T1, T2, T5, T6 y T7 -> Si alguna se atrasa, el proyecto se atrasa obligatoriamente.

## Cronograma

Armemos el cronograma del ejemplo:
![[Pasted image 20230602000839.png]]

Si tenemos solo una persona, qué ocurre en las semanas S3, S4, S5, S6 y S7? 
-> Debería trabajar 16 horas.
Qué hacemos? -> Nivelación de recursos

### Nivelación de recursos

- Se ajustan fechas de inicio y/o fin cuando hay restricciones de recursos.
- Se usa luego de determinar el camino crítico y cuando hay recursos:
	- Compartidos o críticos durante ciertos momentos.
	- Disponibles en cantidades limitadas.
	- Que se desean utilizar con un nivel constante de ocupación en un período de tiempo.
- Es necesario cuando hay sobreasignación de recursos.
- Puede cambiar el camino crítico, usualmente crece en tiempo.

Caso con 1 persona:
![[Pasted image 20230602001035.png]]

### Técnicas para comprimir
Qué sucede si es necesario acortar el cronograma? 
- Dos técnicas, Crashing (compresión) y Fasttracking (ejecución rápida).

#### Crashing
- Objetivo: acortar el cronograma con el menor incremento de costo posible .
- Ejemplos: horas extra, más recursos, pago adicional por acelerar la entrega, etc.
- Sólo funciona para actividades del camino crítico.
- No siempre es viable, ojo con el incremento de costos y riesgos.

#### Fast tracking
- Actividades o fases que en general se hace secuenciales, se hacen en paralelo.
- Puede generar retrabajo y aumento en riegos.
- Solo funciona si la paralelización de tareas es viable.

