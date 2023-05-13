# Chapter 1 - Introduction

-   **El software se ha vuelto prevalente en todo tipo de máquinas y dispositivos**, desde electrodomésticos hasta automóviles.
- El testing es necesario porque como el software no es un producto físico, no puede examinarse directamente.
-   El **correcto funcionamiento de dispositivos e industrias depende de la confiabilidad de los sistemas de software**.
-   El **éxito tanto de sistemas de software embebidos como comerciales se determina por su calidad**.
-   Muchas empresas reconocen la importancia de la calidad del software y se esfuerzan por mejorar sus procesos de ingeniería de software.
-   La **evaluación y prueba sistemática del software es una forma de lograr una mayor calidad**.
-   En algunos casos, los procedimientos de prueba se han integrado en las tareas diarias del desarrollo de software, pero aún hay una necesidad de educación sobre evaluación y prueba en muchos sectores.

## Verificación y Validación

### Objetivos
- Ejecutar el programa para provocar fallas (una forma de encontrar defectos).
- Ejecutar el programa para medir su calidad.
- Ejecutar el programa para generar confianza.
- Analizar/revisar el programa o su documentación para detectar defectos (y prevenir fallas).

### Definición
<u>Verificación:</u> *¿estamos construyendo el producto correctamente?*
- Busca comprobar que el sistema cumple con los requerimientos especificados (funcionales y no funcionales).
- ¿El software está de acuerdo con su especificación?
- Testing de defectos.

<u>Validación:</u> *¿estamos construyendo el producto correcto?*
- Busca comprobar que el software hace lo que el usuario espera.
- ¿El software cumple las expectativas del cliente?
- Testing de validación.

### Principios
1. El testing muestra la presencia de defectos, no la ausencia de ellos 
2. Testing exhaustivo no es posible
3. Las actividades de verificación deberían comenzar lo antes posible
4. Agrupamiento/aglomeración de defectos (defect clustering)
5. La paradoja del pesticida
6. El testing es contexto-dependiente
7. Decir que el software es útil porque “no se experimentan falllas” es una falacia

# Chapter 2 - Fundamentals of Testing

## 2.1 Terms and Motivation

Las pruebas pueden hacerse para obtener información del producto, permitiendo tomar decisiones. Planearlas y diseñarlas es parte del proceso. Tienen condiciones, y pueden combinarse una tras otra para crear escenarios.

El objetivo del testing es la verificación y validación. En ambas se puede hacer inspección y revisión de código. Las inspecciones pueden encontrar varios errores, temas de calidad y hacerse sobre versiones incompletas. La confianza que se debe tener para el sistema depende de su propósito (cuanto más crítico, más seguro debe ser), las expectativas de los usuarios y el mercado.

### 2.1.1 Error, Defect, and Bug Terminology
![[Pasted image 20230512172229.png]]

Falló -> no hace lo requerido (o hace algo que no debería)

<u>Motivos:</u>
- Las especificaciones no estipulan exactamente lo que el cliente precisa o quiere (reqs. faltantes o incorrectos).
- Requerimiento no se puede implementar.
- Defectos en el diseño.
- Defectos en el código.

<u>Objetivo:</u> detectar y corregir estos defectos antes de liberar el producto.

**Testing (probar)**: no es debugging.
- testing es una simple revisión del comportamiento del software mediante su ejecución.
- Debugging es la actividad de localizar el defecto en el código y corregirlo.

#### Clasificación de defectos
- en algoritmos
- de sintaxis
- de precisión y cálculo
- de documentación
- de estrés o sobrecarga
- de capacidad o de borde
- de sincronización o coordinación
- de capacidad de procesamiento o desempeño
- de recuperación
- de estándares y procedimientos
- relativos al hardware o software del sistema

La idea es registrar los tipos de defectos.
- <u>Guía para orientar la verificación:</u> si conozco los tipos de defectos en que incurre el equipo de desarrollo me puedo ocupar de buscarlos expresamente.
- <u>Mejorar el proceso:</u> si tengo identificada la fase en la cual se introducen muchos defectos me ocupo de mejorarla.
- <u>Clasificación Ortogonal:</u> por ejemplo, tipo de defecto, fuente, impacto, disparador, severidad/criticidad.

### 2.1.2 Terminología
- Objetivo de prueba o tipo de prueba
- Técnica de prueba
- Objeto de prueba
- Nivel de prueba
- Perfil de persona que prueba
- Grado de prueba
- Bases de prueba
- **Caso de prueba**

- **Risk (riesgo)**: 
- failure = actual result != expected result
- faults = bugs
- defect making: a fault is hidden by one or more other faults in other parts of the program
- cause of bug/fault: error or mistake by a person

- test: a sample examination
- test object 
- test conditions
- test process: execution of the test object with test data, planning, design, implementation, and analysis of the test
- test run / test suite: includes execution of one or more test cases
- test scenarios: several test cases combined whereby the result of one test case is used as the starting point for the next test case

Nombrando tests:
- Test objective or test type: A test is named according to its purpose (for example, load test).
- Test technique: A test is named according to the technique used for specifying or executing the test (for example, business-process-based test). 
- Test object: The name of a test reflects the kind of the test object to be tested (for example, a GUI test or DB test). 
- Test level: A test is named after the level of the underlying life cycle model (for example, system test). 
- Test person: A test is named after the personnel group executing the tests (for example, developer test, user acceptance test). 
- Test extent: A test is named after the level of extent (for example, partial regression test, full test).

### 2.1.3 Software Quality

- software quality: functionality, reliability, usability, efficiency, maintainability, and portability

#### quality characteristics / quality attributes:
- functionality: all of the Functionality required capabilities of a system.  capabilities are usually described by a specific input/output behavior and/or an appropriate reaction to an input.
- reliability: the ability of a system to keep functioning under specific use over a specific period. 
	the reliability characteristic is split into:
	- maturity: how often a failure of the software occurs as a result of defects in the software.
	- fault tolerance: capability of the software product to maintain a specified level of performance or to recover from faults such as software faults, environment failures, wrong use of interface, or incorrect input.
	- recoverability: capability of the software product to reestablish a specified level of performance (fast and easily) and recover the data directly affected in case of failure.
- usability: Understandability, ease of learning, operability, and attractiveness as well as compliance to standards, conventions, style guides, and user interface regulations are aspects of usability.
- efficiency: measures the required time and consumption of resources for the execution of tasks
- maintainability and portability

A software system cannot fulfill every quality characteristic equally well. Quality characteristics must therefore be prioritized.

### 2.1.4 Test effort
a complete or exhaustive test is not feasible.

- For some major projects with more than 10 person-years’ effort, coding and testing together used 40%, and a further 8% was used for the integration. At test-intensive projects (for example, ➞safety-critical systems), the testing effort increased to as much as 80% of the total budget.
- In one project, the testing effort was 1.2 times as high as the coding effort, with two-thirds of the test effort used for component testing.
- For another project at the same software development company, the system test cost was 51.9% of the project.

Test effort is often shown as the proportion between the number of testers and the number of developers.

But is this high testing effort affordable and justifiable? The counter question from Jerry Weinberg is “Compared to what?”. When safety-critical systems fail, the lives and health of people may be in danger.

“Testing should continue as long as costs of finding and correcting a defect are lower than the costs of failure” (the cost must include all aspects of a failure, even the possible cost of bad publicity, litigation, etc., and not just the cost of correction, retesting, and distribution.)
Thus, for every software program it must be decided how intensively and thoroughly it shall be tested. This decision must be made based upon the expected risk of failure of the program.

There exist many different methods and techniques for testing software. Every technique especially focuses on and checks particular aspects of the test object. A combination of different test techniques is always necessary.

#### ¿Quién verifica? depende del proceso y el equipo
- Pruebas unitarias:
	- Normalmente las realiza el equipo de desarrollo. En general la misma persona que lo implementó.
	- Es positivo el conocimiento detallado del módulo a probar.
- Pruebas de Integración:
	- Normalmente las realiza el equipo de desarrollo.
	- Es necesario el conocimiento de las interfaces y funciones en general.
- Resto de las pruebas 
	- En general un equipo especializado (verificadores).
	- Es necesario conocer los requerimientos y tener una visión global.
- ¿Por qué un equipo especializado?
	- Maneja mejor las técnicas de pruebas.
	- Conoce los errores más comunes realizados por el equipo de programadores.
	- Conoce el modelo de negocio.
	- Problemas de psicología de pruebas.
	- El autor de un programa tiende a cometer los mismos errores al probarlo.
	- Debido a que es “SU” programa inconscientemente tiende a hacer casos de prueba que no hagan fallar al mismo.
	- Puede llegar a comparar mal el resultado esperado con el resultado obtenido debido al deseo de que el programa pase las pruebas.


## 2.2 The Fundamental Test Process

###  2.2.1 Test Planning and Control
Execution of such a substantial task as testing must not take place without a plan. Planning of the test process starts at the beginning of the software development project.

#### Resource planning
The mission and objectives of testing must be defined and agreed upon as well as the resources necessary for the test process. Which employees are needed for the execution of which tasks and when? How much time is needed, and which equipment and utilities must be available? These questions and many more must be answered during planning, and the result should be documented in the **test plan**.

#### Test Control
Test control is the monitoring of the test activities and comparing what actually happens during the project with the plan. It includes reporting the status of deviations from the plan and taking any actions necessary to meet the planned goals in the new situation.

#### Determination of the test strategy
The main task of planning is to determine the test strategy or approach.
Priorities must be set based on risk assessment.
The test activities must be distributed to the individual subsystems, depending on the expected risk and the severity of failure effects. Critical subsystems must get greater attention, thus be tested more intensively.

The goal of the test strategy is the optimal distribution of the tests to the “right” parts of the software system.

#### Tool support
If the necessary tool support does not exist, selection Tool support and acquisition of tools must be initiated early. Existing tools must be evaluated if they are updated. If parts of the test infrastructure have to be developed, this can be prepared. Test harnesses (or test beds), where subsystems can be executed in isolation, must often be programmed.

### 2.2.2 Test Analysis and Design

#### Review the test basis
Review the test basis, i.e., the specification of what should be tested.
The specification should be concrete and clear enough to develop test cases. The basis for the creation of a test can be the specification or architecture documents, the results of risk analysis, or other documents produced during the software development process.

#### Check testability
Includes checking the ease with which interfaces can be addressed (interface openness) and the ease with which the test object can be separated into smaller, more easily testable units.

#### Consider the risk

#### Traceability is important
It is important to ensure traceability between the specifications to be tested and the tests themselves.
It must be clear which test cases test which requirements and vice versa.

#### Logical and concrete test cases
Logical test cases have to be defined first. After that, the logical test cases can be translated into concrete, physical test cases, meaning the actual inputs are selected.

#### Test cases comprise more than just the test data
For each test case, the initial situation (precondition) must be described. It must be clear which environmental conditions must be fulfilled for the test. Furthermore, before test execution, it must be defined which results and behaviors are expected. The results include outputs, changes to global (persistent) data and states, and any other consequences of the test case.

#### Test oracle
To define the expected results, the tester must obtain the information from some adequate source. In this context, this is often called an oracle, or test oracle. A test oracle is a mechanism for predicting the expected results. The specification can serve as a test oracle.

#### Test cases for expected and unexpected inputs
- First are test cases for examining the specified behavior, output, and reaction. Included here are test cases that examine specified handling of exception and error cases (negative test). But it is often difficult to create the necessary preconditions for the execution of these test cases (for example, capacity overload of a network connection).
- Next are test cases for examining the reaction of test objects to invalid and unexpected inputs or conditions, which have no specified exception handling

### 2.2.3 Test Implementation and Execution
### 2.2.4 Test Evaluation and Reporting
### 2.2.5 Test Closure Activities

## 2.3 The Psychology of Testing

## 2.4 General Principles of Testing

## 2.5 Ethical Guidelines

## 2.6 Summary

# Chapter 3 - Testing in the Software Life Cycle
## 3.1 The General V-Model

![[Pasted image 20230512194943.png]]

Se ven los niveles de prueba:
- <u>De módulo, componente o unitaria:</u> verifica el funcionamiento de los componentes de acuerdo a su especificación.
- <u>De integración:</u> verifica que los grupos de componentes interactúan de la forma en la cual fue especificada acorde al diseño técnico del sistema.
- <u>De sistema:</u> determina si el sistema integrado (como un todo) cumple con los requisitos especificados.
- <u>De aceptación:</u> verifica que el sistema cumple con los requisitos del cliente de acuerdo a como los mismos fueron especificados en el contrato y/o el sistema cumple con las necesidades y expectativas del cliente.

## 3.2 Component Test

Primer nivel de prueba: verificación unitaria o de componentes

- **Objetos de prueba:** clases, módulos, scripts, etc.
- **Entorno de prueba:** los objetos de prueba vienen directamente del “escritorio del programador”, por lo tanto requiere un alto nivel de cooperación con desarrollo.
- **Objetivos de prueba:** comprobar que toda la funcionalidad del objeto de pruebas es completa, se desempeña y funciona adecuadamente de acuerdo a su especificación

Es importante probar: 
- La robustez de los componentes (tests negativos)
- La eficiencia (uso de recursos)
- Mantenibilidad (estructura del código, modularidad, cumplimiento de estándares, etc)

### 3.2.1 Explanation of Terms

#### Stub
Simula la actividad del componente omitido.

- Es una pieza de código con los mismos parámetros de entrada y salida que el módulo faltante pero con una alta simplificación del comportamiento.
	- De todas formas, tiene un costo de realización
- Por ejemplo puede producir los resultados esperados leyendo de un archivo, o pidiéndole de forma interactiva a un testeador humano, o no hacer nada (siempre y cuando esto sea aceptable para el módulo bajo test) 
- Si el stub devuelve siempre los mismos valores al módulo que lo llama es probable que esté módulo no sea testeado adecuadamente.

#### Driver
Pieza de código que simula el uso (por otro módulo) del módulo que está siendo testeado.

- Es menos costoso de realizar que un stub
- Puede leer los datos necesarios para llamar al módulo bajo test desde un archivo, GUI, etc.
- Normalmente es el que suministra los casos de prueba al módulo que está siendo testeado.

### 3.2.2 Test Objects
### 3.2.3 Test Environment
### 3.2.4 Test Objectives
### 3.2.5 Test Strategy
- Técnicas estáticas (analíticas): analizar el producto (p.e. programa) para deducir su correcta operación.
- Técnicas dinámicas: experimentar con el comportamiento de un producto para ver si el producto actúa como es esperado.
	- Testing **de caja blanca**: basado en el código fuente del programa, el cual se utiliza para diseñar los casos de prueba.
	- Testing **de caja negra**: basado en la especificación del programa.
- “Test first” development.

#### Ejemplo
1. El módulo B es usado por el módulo A 
	- Debo simular la llamada del modulo A al B – Driver
	- Normalmente el <b><u>Driver</u></b> es el que suministra los datos de los casos de prueba
2. El módulo B usa a los módulos E y F 
	- Cuando llamo desde B a E o F debo simular la ejecución de estos módulos – <b><u>Stub</u></b>

![[Pasted image 20230512212053.png]]

## 3.3 Integration Test

Segundo nivel de prueba: testing de integración de unidades o componentes.

Las pruebas de integración suelen tener problemas con las interfaces, ya sea porque no se usan bien, no se entienden o hay diferencias en la velocidad de operación. La arquitectura de sistema determina los componentes y cómo se relacionan entre sí, y el plan de proyecto determina en qué momento se desarrollan las partes del sistema y cuándo están listas para ser probadas. Las pruebas top-down y bottom-up tienen ventajas y desventajas opuestas con respecto al uso y complejidad de stubs y drivers. Ad hoc requiere ambas cosas, lo cual es un problema, si bien ahorra tiempo.

- **Objetos de prueba:** conjuntos relacionados de: clases, módulos, scripts, etc.
- **Entorno de prueba:** se utiliza también el entorno de desarrollo y los drivers y stubs ya disponibles (si fuera necesario).
- **Objetivos de prueba:** revelar problemas de interfaz, así como también conflictos entre los componentes integrados.

Es importante probar: 
- Intercambio de datos y comunicaciones

### 3.3.1 Explanation of Terms
### 3.3.2 Test Objects
### 3.3.3 The Test Environment
### 3.3.4 Test Objectives
### 3.3.5 Integration Strategies
- ¿En qué orden y de qué forma deberíamos probar la integración de los componentes?
- En la práctica, los diversos componentes van a estar disponibles en momentos diferentes.
- Una práctica común es realizar el test de integración a medida que los componentes están disponibles
	- ¿Qué desventajas puede tener esto?
- El responsable de las pruebas debe elegir una estrategia de integración que optimice:
	- Tiempo que se insume (ahorro del tiempo)
	- Costo del entorno de pruebas
- No incremental
	- Big-Bang
- Incrementales
	- Bottom-Up (Ascendente)
	- Top-Down (Descendente)
	- Por disponibilidad (Ad hoc)
	- Integración Backbone (esqueleto)
		Empiezo fuerte con el "Core" y voy integrando modulos periféricos.

```ad-faq
title: Cuidado
Bottom-Up y Top-Down solo pueden usarse en sistemas estructurados de forma estrictamente jerárquica.
```

- El objetivo es lograr combinar módulos o componentes individuales para que trabajen correctamente de forma conjunta

#### Consideraciones
- Restricciones:
	- La arquitectura del sistema
	- El plan de proyecto
	- El plan de pruebas
- La estrategia de pruebas puede ser un mix de varias alternativas distintas según aspectos de:
	- Riesgo
	- Disponibilidad
	- Costo

## 3.4 System Test

Tercer nivel de prueba: testing de sistema, en donde se comprueba que el sistema cumple con los requisitos especificados.

Las pruebas de sistema se ejecutan desde el punto de vista del usuario final, y consideran interacciones de todos los componentes (que pueden no haber sido contempladas en las pruebas de integración).

- **Objetos de prueba:** el sistema integrado como un todo
- **Entorno de prueba:** lo más cercano posible al ambiente de producción (error común: utilizar el ambiente de desarrollo)
- **Objetivos de prueba:** validar que el sistema completo cumple con la especificación de sus requisitos funcionales y no funcionales

Es importante verificar:
- Documentación y omisión de requisitos

### 3.4.1 Explanation of Terms
### 3.4.2 Test Objects and Test Environment
### 3.4.3 Test Objectives
### 3.4.4 Problems in System Test Practice
## 3.5 Acceptance Test

Cuarto nivel de prueba: testing de aceptación, en donde se comprueba que el sistema es adecuado al uso y necesidades del cliente (puede realizarse como parte de las pruebas de niveles inferiores o distribuido en varios niveles de pruebas).

Las pruebas de aceptación contractuales se basan en contratos donde se definen los criterios de aceptación, que se usan para las pruebas. Se hace en software específico para el cliente. Las pruebas de aceptación del usuario se hacen porque el cliente y el usuario final pueden ser diferentes, y los usuarios tienen diferentes expectativas del software. Las pruebas de aceptación operacionales se hacen con los administradores del sistema.

Las pruebas de campo se hacen cuando el software debe correr en muchos entornos diferentes y no se puede probar en todos. De este modo se pueden buscar problemas con ciertos entornos. El alpha/beta testing consiste en enviar versiones previas y estables a clientes para que las prueben y reporten problemas. El dogfood testing consiste en que otros miembros de la compañía desarrolladora lo prueben.

- **Objetos de prueba:** el sistema (o parte de este) bajo la perspectiva del usuario/cliente.
- **Entorno de prueba:** entorno de producción.
- **Objetivos de prueba:** validar que construimos el producto “correcto”.
- **Bases de prueba:** cualquier documento que describa el sistema desde el punto de vista del usuario/cliente: casos de uso, procesos de negocio, user storys, etc.

### 3.5.1 Contract Acceptance Testing
### 3.5.2 Testing for User Acceptance
### 3.5.3 Operational [Acceptance] Testing
### 3.5.4 Field Testing (alpha/beta testing y dogfood tests)
## 3.6 Testing New Product Versions

- Lo que vimos anteriormente es solo el principio del ciclo de vida del software.
- Luego de la instalación de la primera versión del software, el mismo puede ser usado por años o décadas. Siendo cambiado, actualizado y extendido muchas veces.
- El software no se “gasta” con el uso, ni los defectos se originan por dicha causa.
- El mantenimiento puede ser correctivo, adaptativo o evolutivo (lo veremos más adelante en “evolución del software”).

### 3.6.1 Software Maintenance
### 3.6.2 Testing after Further Development
### 3.6.3 Testing in Incremental Development
## 3.7 Generic Types of Testing
### 3.7.1 Functional Testing
### 3.7.2 Nonfunctional Testing
### 3.7.3 Testing of Software Structure
### 3.7.4 Testing Related to Changes and Regression Testing

Tanto en el mantenimiento como en procesos iterativos incrementales, es necesario realizar pruebas de regresión: verificar que los cambios o agregados realizados a la nueva versión no hayan degradado o “roto” el funcionamiento del sistema.

![[Pasted image 20230512232351.png]]

## 3.8 Summary
