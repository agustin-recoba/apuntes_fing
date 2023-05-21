No es un enfoque sistemático (como vimos anteriormente), sino que por el contrario, <u>se basa fuertemente en la intuición, habilidades, conocimiento y experiencia</u> del tester.
Los casos de prueba se basan en datos históricos (errores/defectos del pasado) o en la intuición de dónde podrían estar en el futuro (***error guessing***).
Si no existe documentación para utilizar como bases del testing (requisitos, casos de uso, etc.), como técnica puede utilizarse el <u>testing exploratorio</u>.

# Testing exploratorio

3 actividades de forma simultánea:
- Aprendizaje/exploración de la aplicación
- Diseño de casos de prueba
- Ejecución de casos de prueba

Si bien no hay actividades explícitas de planificación:
- Se puede utilizar el enfoque basado en sesiones, 
- Definir el objetivo que queremos cumplir con la sesión de testing
	- Establecer flujos de la aplicación
	- Ver cómo se integra con otra aplicación
	- Robustez
- Limitar el tiempo dedicado a dicha sesión

Los elementos del software bajo prueba son “explorados”:
- En una primera instancia se ejecutan unos pocos casos de prueba para obtener conocimiento acerca del software.
- Se deriva el comportamiento del software (qué es y cómo funciona, qué problemas de calidad podría tener y qué expectativas debería cubrir).
- En base a los resultados de sesiones anteriores se planifican nuevas sesiones utilizando una “hoja de ruta” para cada una.

Esta técnica es altamente dependiente de las habilidades del tester
- Pensamiento crítico, observadores, analíticos
- Conocimiento del negocio del software

### Preguntas importantes a realizarse en cada sesión de prueba
1. ¿Cuál es el objetivo?
2. ¿Qué debe ser probado?
3. ¿Qué método de prueba debo usar?
4. ¿Qué tipo de problemas podría encontrar?

### Consideraciones generales:
- Los resultados de los CP ejecutados influencian el diseño y ejecución de los CP que siguen a continuación
- Durante las pruebas se construye un modelo mental del SW
- Las pruebas se ejecutan contra ese “modelo” mental

# Resumen sobre técnicas de testing

Vimos una amplia variedad de técnicas de prueba... ahora bien, ¿cuáles debería usar?

Factores que influencian: 
- El tipo de objeto de prueba
- Documentación formal y/o disponibilidad de herramientas
- Cumplimiento de estándares
- Experiencia de los testers
- Necesidades/deseos del cliente
- Evaluación de riesgos


## Proceso para un módulo (sugerencia)

![[Pasted image 20230520205824.png]]


## Comparación de técnicas

![[Pasted image 20230520205845.png]]
![[Pasted image 20230520205852.png]]




