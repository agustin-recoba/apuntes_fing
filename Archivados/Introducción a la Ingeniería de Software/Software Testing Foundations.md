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
- ¿El software está de acuerdo con su <u>especificación</u>?
- Testing de defectos.

<u>Validación:</u> *¿estamos construyendo el producto correcto?*
- Busca comprobar que el software hace lo que el usuario espera.
- ¿El software cumple las <u>expectativas del cliente</u>?
- Testing de validación.

# Chapter 2 - Fundamentals of Testing

## 2.1 Terms and Motivation

Las pruebas pueden hacerse para obtener información del producto, permitiendo tomar decisiones. Planearlas y diseñarlas es parte del proceso. Tienen condiciones, y pueden combinarse una tras otra para crear escenarios.

El objetivo del testing es la verificación y validación. En ambas se puede hacer inspección y revisión de código. Las inspecciones pueden encontrar varios errores, temas de calidad y hacerse sobre versiones incompletas. La confianza que se debe tener para el sistema depende de su propósito (cuanto más crítico, más seguro debe ser), las expectativas de los usuarios y el mercado.

### 2.1.1 Error, Defect, and Bug Terminology
**Fallo** -> no hace lo requerido (o hace algo que no debería)

<u>Motivos:</u>
- Las especificaciones no estipulan exactamente lo que el cliente precisa o quiere (reqs. faltantes o incorrectos).
- Requerimiento no se puede implementar.
- Defectos en el diseño.
- Defectos en el código.

O sea, los _defectos_ en los req., diseño o código causan _fallos_. Por lo tanto, no puede decirse que el código tiene fallos, pero sí defectos.

<u>Objetivo:</u> detectar y corregir estos defectos antes de liberar el producto.

**Testing (probar)**: no es debugging.
- Testing es una simple revisión del comportamiento del software mediante su ejecución.
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
- failure: actual result != expected result
- faults: bugs
- defect masking: a fault is hidden by one or more other faults in other parts of the program
- cause of bug/fault: error or mistake by a person

- test: a sample examination
- test object 
- test conditions
- test process: execution of the test object with test data, planning, design, implementation, and analysis of the test
- test run / test suite: includes execution of one or more test cases
- test scenarios: several test cases combined whereby the result of one test case is used as the starting point for the next test case

### 2.1.3 Software Quality

- software quality: functionality, reliability, usability, efficiency, maintainability, and portability

#### quality characteristics / quality attributes:
- <u>functionality:</u> all of the functional required capabilities of a system. capabilities are usually described by a specific input/output behavior and/or an appropriate reaction to an input.
- <u>reliability:</u> the ability of a system to **keep functioning** under specific use over a specific period. 
	the reliability characteristic is split into:
	- maturity: how often a failure of the software occurs as a result of defects in the software.
	- fault tolerance: capability of the software product to maintain a specified level of performance or to recover from faults such as software faults, environment failures, wrong use of interface, or incorrect input.
	- recoverability: capability of the software product to reestablish a specified level of performance (fast and easily) and recover the data directly affected in case of failure.
- <u>usability:</u> understandability, ease of learning, operability, and attractiveness as well as compliance to standards, conventions, style guides, and user interface regulations are aspects of usability.
- <u>efficiency:</u> measures the required time and consumption of resources for the execution of tasks
- <u>maintainability</u> and <u>portability</u>

A software system cannot fulfill every quality characteristic equally well. Quality characteristics must therefore be prioritized.

### 2.1.4 Test effort
a complete or exhaustive test is <u>not</u> feasible.

Test effort is often shown as the proportion between the number of testers and the number of developers.

But, is this high testing effort affordable and justifiable? The counter question is “Compared to what?”. When safety-critical systems fail, the lives and health of people may be in danger.

***“Testing should continue as long as costs of finding and correcting a defect are lower than the costs of failure”*** (the cost must include all aspects of a failure, even the possible cost of bad publicity, litigation, etc., and not just the cost of correction, retesting, and distribution.)
Thus, for every software program it must be decided how intensively and thoroughly it shall be tested. This decision must be made based upon the expected risk of failure of the program.

There exist many different methods and techniques for testing software. Every technique especially focuses on and checks particular aspects of the test object. A combination of different test techniques is always necessary.

#### ¿Quién verifica? depende del proceso y el equipo
- **Pruebas unitarias:**
	- Normalmente las realiza el equipo de desarrollo. En general *la misma persona* que lo implementó.
	- Es positivo el conocimiento detallado del módulo a probar.
- **Pruebas de Integración:**
	- Normalmente las realiza el equipo de desarrollo.
	- Es necesario el conocimiento de las interfaces y funciones en general.
- Resto de las pruebas:
	- En general un equipo especializado (verificadores, *testers*).
	- Es necesario conocer los requerimientos y tener una visión global.

##### ¿Por qué un equipo especializado?
- Maneja mejor las técnicas de pruebas.
- Conoce los errores más comunes realizados por el equipo de programadores.
- Conoce el modelo de negocio.
- Problemas de psicología de pruebas.
- El autor de un programa tiende a cometer los mismos errores al probarlo.
- Debido a que es “SU” programa inconscientemente tiende a hacer casos de prueba que no hagan fallar al mismo.
- Puede llegar a comparar mal el resultado esperado con el resultado obtenido debido al deseo de que el programa pase las pruebas.

## 2.2 The Fundamental Test Process

### 2.2.1 Test Planning and Control
Execution of such a substantial task as testing must not take place without a plan. Planning of the test process starts at the beginning of the software development project.

#### Resource planning
The mission and objectives of testing must be defined and agreed upon as well as the resources necessary for the test process. Which employees are needed for the execution of which tasks and when? How much time is needed, and which equipment and utilities must be available? These questions and many more must be answered during planning, and the result should be documented in the **test plan**.

#### Test Control
Test control is the monitoring of the test activities and comparing what actually happens during the project with the plan. It includes reporting the status of deviations from the plan and taking any actions necessary to meet the planned goals in the new situation.

#### Determination of the test strategy
The main task of planning is to **determine the test strategy** or approach.
Priorities must be set based on **risk** assessment.
The test activities must be distributed to the individual subsystems, depending on the expected risk and the severity of failure effects. Critical subsystems must get greater attention, thus be tested more intensively.

The goal of the test strategy is the optimal distribution of the tests to the “right” parts of the software system.

#### Tool support
If the necessary tool support does not exist, selection and acquisition of tools must be initiated early. Existing tools must be evaluated if they are updated. If parts of the test infrastructure have to be developed, this can be prepared. **Test harnesses** (or **test beds**), where subsystems can be executed in isolation, must often be programmed.

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
Logical test cases have to be defined <u>first</u>. After that, the logical test cases can be translated into concrete, physical test cases, meaning the actual inputs are selected.

#### Test cases comprise more than just the test data
For each test case, the initial situation (precondition) must be described. It must be clear which environmental conditions must be fulfilled for the test. Furthermore, before test execution, it must be defined which results and behaviors are expected. The results include outputs, changes to global (persistent) data and states, and any other consequences of the test case.

#### Test oracle
To define the expected results, the tester must obtain the information from some adequate source. In this context, this is often called an oracle, or test oracle. A test oracle is a mechanism for predicting the expected results. The specification can serve as a test oracle.

#### Test cases for expected and unexpected inputs
- First are test cases for examining the specified behavior, output, and reaction. Included here are test cases that examine specified handling of exception and error cases (negative test). But it is often difficult to create the necessary preconditions for the execution of these test cases (for example, capacity overload of a network connection).
- Next are test cases for examining the reaction of test objects to invalid and unexpected inputs or conditions, which have no specified exception handling

[[Generating Test Cases From Use Cases]]
[[Guía para la generación de CP a partir de HU]]

### 2.2.3 Test Implementation and Execution

#### Test case execution
One must describe how the tests will be executed. 
Test cases should be grouped into test suites or test scenarios for efficient execution and better understanding.

#### Test harness 
Specific test harnesses (drivers, simulators, etc.), must be programmed, built, acquired, or set up as part of the test environment before the test cases can be executed.

#### Checking for completeness

#### Examination of the main functions
Start test execution with the examination of the test object’s main functionality (smoke test).
If **failures** or **deviations** from the expected result show up at this time, it is foolish to continue testing.

#### Tests without a log are of <u>no value</u>
Execution must be exactly and completely logged.
- which test runs
- which results (pass or failure)
The testing done must be comprehensible to people not directly involved (for example, the customer) on the basis of these **test logs**.

#### Reproducibility is important

#### Failure found?
If a difference shows up, it must be decided when evaluating the test logs if the difference really indicates a failure. If so, the failure must be documented.

Nothing is more detrimental to the **credibility of a tester** than reporting a supposed failure whose cause is actually a test problem.

#### Correction may lead to new faults
A decision must be made about how to prioritize fault corrections.
After faults are corrected, the tester must make sure the fault has really been corrected and that no new faults have been introduced.

#### The most important test cases first
In many projects, there is not enough time to execute all specified test cases.
This is called **risk-based testing**.

### 2.2.4 Test Evaluation and Reporting

#### End of test?
During test evaluation and reporting, the test object is <u>assessed against the set test exit criteria</u> specified during planning. 
This may result in normal termination of the tests if all criteria are met, or it may be decided that additional test cases should be run or that the criteria were too hard.

Considering the risk, an adequate exit criterion must be determined **for each test technique** used.

#### Is further effort justifiable?
Analysis of the problem can also show that the necessary effort to fulfill the exit criteria is not appropriate. 
In that situation, further tests are canceled. Such a decision must consider the associated risk.

#### Dead code
A further case of not meeting test exit criteria may occur if the specified criterion is impossible to fulfill in the specific case. If, for example, the test object contains **dead code**.

#### Consider several test cycles
The failures found during the test should be repaired, after which a new test becomes necessary. This repeats and creates the **test cycle**.
If this cycle is ignored while planning, then the project will be delayed.

#### End criteria in practice: time and cost
In practice, the end of a test is often defined by factors that have no direct connection to the test: time and costs.

#### Successful testing saves costs
Faults delivered in the product mostly cause higher costs when found during operation.

#### Test summary report
When the test criteria are fulfilled or a deviation from them is clarified, a **test summary** report should be written for the stakeholders. In lower-level tests, this may just take the form of a message to the project manager about meeting the criteria. In higher-level tests, a formal report may be required.

### 2.2.5 Test Closure Activities

#### Learning from experience
The experience gathered during the test work should be analyzed and made available for future projects.
- deviations between planning and execution
- the assumed causes

Questions:
- When was the software system released?
- When was the test finished or terminated?
- When was a milestone reached or a maintenance release completed?
- Which planned results were achieved and when—if at all?
- Which unexpected events happened (reasons and how they were met)?
- Are there any open problems and change requests? Why were they not implemented?
- How was user acceptance after deploying the system?

#### Archiving testware
The “conservation” of the testware for the future.
A major part of the test effort during **maintenance** can be avoided if the testware (test cases, test logs, test infrastructure, tools, etc.) is still available.

## 2.3 The Psychology of Testing

### Errare humanum est ("Errar es humano")

### Blindness to one’s own mistakes
If a developer implemented a fundamental design error—for example, if she misunderstood the task—then she will not find this using her own tests.
On the other hand, it is advantageous to have a deep knowledge of one’s own test object.
Management has to decide.

### Independent test team
An independent testing team is beneficial for test quality and comprehensiveness.
- The tester can look at the test object without bias.
- The tester does not necessarily share possible developer assumptions and misunderstandings.
- The tester must acquire the necessary knowledge about the test object in order to create test cases.

### Failure reporting
- The tester must report the failures and discrepancies observed to the author and/or to management.
- If it’s not done well, it may negatively influence the important communication of these two groups.
- It's not an easy job and requires diplomacy and tact.

### Mutual comprehension
Developers should know the basics of testing and testers should have a basic knowledge of software development.

## 2.4 General Principles of Testing

### Principios
1. El testing muestra la presencia de defectos, **no la ausencia** de ellos .
2. Testing exhaustivo **no es posible**.
3. Las actividades de verificación deberían comenzar lo **antes posible**.
4. Agrupamiento/aglomeración de defectos (defect clustering).
	Defects are not evenly distributed; they cluster together.
5. La paradoja del pesticida.
	Insects and bacteria become resistant to pesticides.
6. El testing es contexto-dependiente.
7. Decir que el software es útil porque “no se experimentan falllas” es una falacia.

## 2.5 Ethical Guidelines

### Dealing with critical information
Such data or documents must be handled appropriately and must not get into the wrong hands or be misused.

- PUBLIC _»Certified software testers shall act consistently with the public interest.«_
- CLIENT AND EMPLOYER _»Certified software testers shall act in a manner that is in the best interest of their client and employer, consistent with the public interest.«_
- PRODUCT _»Certified software testers shall ensure that the deliverables they provide (on the products and systems they test) meet the highest professional standards possible.«_
- JUDGMENT _»Certified software testers shall maintain integrity and independence in their professional judgment.«_
- MANAGEMENT _»Certified software test managers and leaders shall subscribe to and promote an ethical approach to the management of software testing.«_
- PROFESSION _»Certified software testers shall advance the integrity and reputation of the profession consistent with the public interest.«_
- COLLEAGUES _»Certified software testers shall be fair to and supportive of their colleagues, and promote cooperation with software developers.«_
- SELF _»Certified software testers shall participate in lifelong learning regarding the practice of their profession and shall promote an ethical approach to the practice of the profession.«_

## 2.6 Summary

- Technical terms in the domain of software testing are often defined and used very differently, which can result in misunderstanding. Knowledge of the standards (e.g., BS, IEEE, ISO) and terminology associated with software testing is therefore an important part of the education of the tester. This book’s glossary compiles the relevant terms.
- Tests are important tasks for **quality assurance** in software development. 
- The fundamental test process consists of the following phases: planning and control, analysis and design, implementation and execution, evaluation of exit criteria and reporting, and test closure activities. A test can be finished when previously defined exit criteria are fulfilled.
- A test case consists of input, expected results, and the list of defined preconditions under which the test case must run as well as the specified postconditions. When the test case is executed, the test object shows a certain behavior. If the expected result and actual result differ, there is a failure. The expected results should be defined **before** test execution and during test specification (using a test oracle).
- People make mistakes, but they do not like to admit them! Because of this, psychological aspects play an important role in testing.
- The seven principles for testing must always be kept in mind during testing.
- Certified testers should know the ISTQB’s ethical guidelines, which are helpful in the course of their daily work.

# Chapter 3 - Testing in the Software Life Cycle

## 3.1 The General V-Model

![[Pasted image 20230515165242.png]]

Se ven los niveles de prueba:
- <u>De módulo, componente o unitaria:</u> verifica el funcionamiento de los componentes de acuerdo a su especificación.
- <u>De integración:</u> verifica que los grupos de componentes interactúan de la forma en la cual fue especificada acorde al diseño técnico del sistema.
- <u>De sistema:</u> determina si el sistema integrado (como un todo) cumple con los requisitos especificados.
- <u>De aceptación:</u> verifica que el sistema cumple con los requisitos del cliente de acuerdo a como los mismos fueron especificados en el contrato y/o el sistema cumple con las necesidades y expectativas del cliente.

### Characteristics and ideas behind the general V-model:
- Implementation and testing activities are separated but are equally important (left side / right side).
- The V illustrates the testing aspects of verification and validation.
- We distinguish between different test levels, where each test level is testing “against” its corresponding development level.

## 3.2 Component Test

Primer nivel de prueba: verificación unitaria o de componentes.

- **Objetos de prueba:** clases, módulos, scripts, etc.
- **Entorno de prueba:** los objetos de prueba vienen directamente del “escritorio del programador”, por lo tanto requiere un alto nivel de cooperación con desarrollo.
- **Objetivos de prueba:** comprobar que toda la funcionalidad del objeto de pruebas es completa, se desempeña y funciona adecuadamente de acuerdo a su especificación.

Es importante probar: 
- La robustez de los componentes (tests negativos)
- La eficiencia (uso de recursos)
- Mantenibilidad (estructura del código, modularidad, cumplimiento de estándares, etc)

### 3.2.1 Explanation of Terms

#### Stub
Simula la actividad del componente omitido.

- Es una pieza de código con los mismos parámetros de entrada y salida que el módulo faltante pero con una **alta simplificación** del comportamiento.
	- De todas formas, tiene un costo de realización.
- Por ejemplo puede producir los resultados esperados leyendo de un archivo, o pidiéndole de forma interactiva a un testeador humano, o no hacer nada (siempre y cuando esto sea aceptable para el módulo bajo test).
- Si el stub devuelve siempre los mismos valores al módulo que lo llama es probable que esté módulo no sea testeado adecuadamente.

#### Driver
Pieza de código que simula el uso (por otro módulo) del módulo que está siendo testeado.

- Es menos costoso de realizar que un stub
- Puede leer los datos necesarios para llamar al módulo bajo test desde un archivo, GUI, etc.
- Normalmente es el que suministra los casos de prueba al módulo que está siendo testeado.

### 3.2.2 Test Objects
Typical test objects are program modules/units or classes, (database) scripts, and other software components.
Components are tested individually and isolated from all other software components of the system.
If testing detects a problem, it is definitely a problem originating from the component under test itself.

### 3.2.3 Test Environment
Los objetos de prueba vienen directamente del “escritorio del programador”, por lo tanto requiere un alto nivel de cooperación con desarrollo.

### 3.2.4 Test Objectives
The most important task is to check that the entire functionality of the test object works correctly and completely as required by its specification.
Typical software defects found during functional component testing are incorrect calculations or missing or wrongly chosen program paths.

Testing for robustness is another very important aspect of component testing. A strongly used component should not just suspend its service or cause the whole system to crash. Rather, it should be able to handle the situation in a reasonable and robust way.
Such test cases are also called negative tests.
- There are at least as many reasonable negative tests as positive ones.
- The test driver must be extended in order to be able to evaluate the test object’s exception handling.
- The test object’s exception handling requires additional functionality.

#### Efficiency test
Refers to how efficiently the component uses computer resources.
A test object’s efficiency can be measured during the test.

#### Maintainability test
A maintainability test includes all the characteristics of a program that have an influence on how easy or how difficult it is to change the program or to continue developing it.
Aspects:
- code structure,
- modularity,
- quality of the comments in the code,
- adherence to standards,
- understandability,
- currency of the documentation.

Analysis of the program text and the specifications is necessary. ***Static testing,*** and especially reviews are the correct means for that purpose.

### 3.2.5 Test Strategy

- [[#4.2 Static Analysis|Técnicas estáticas]]: analizar el producto para deducir su correcta operación (sin ejecutar).
- [[#Chapter 5 - Dynamic Analysis – Test Design Techniques|Técnicas dinámicas]]: experimentar con el comportamiento de un producto para ver si el producto actúa como es esperado.
	- Testing **de caja blanca**: basado en el código fuente del programa, el cual se utiliza para diseñar los casos de prueba.
	- Testing **de caja negra**: basado en la especificación del programa.
- “Test first” development.
	The idea is to design and automate the tests first and program the desired component afterwards.

#### Ejemplo
1. El módulo B es usado por el módulo A 
	- Debo simular la llamada del modulo A al B – Driver
	- Normalmente el <b><u>Driver</u></b> es el que suministra los datos de los casos de prueba
2. El módulo B usa a los módulos E y F 
	- Cuando llamo desde B a E o F debo simular la ejecución de estos módulos – <b><u>Stub</u></b>

![[Pasted image 20230515171602.png]]

## 3.3 Integration Test

**Segundo nivel de prueba:** testing de integración de unidades o componentes.

Las pruebas de integración suelen tener problemas con las interfaces, ya sea porque no se usan bien, no se entienden o hay diferencias en la velocidad de operación. La arquitectura de sistema determina los componentes y cómo se relacionan entre sí, y el plan de proyecto determina en qué momento se desarrollan las partes del sistema y cuándo están listas para ser probadas. Las pruebas top-down y bottom-up tienen ventajas y desventajas opuestas con respecto al uso y complejidad de stubs y drivers. Ad hoc requiere ambas cosas, lo cual es un problema, si bien ahorra tiempo.

- **Objetos de prueba:** conjuntos relacionados de: clases, módulos, scripts, etc.
- **Entorno de prueba:** se utiliza también el entorno de desarrollo y los drivers y stubs ya disponibles (si fuera necesario).
- **Objetivos de prueba:** revelar problemas de interfaz, así como también conflictos entre los componentes integrados.

Es importante probar: 
- Intercambio de datos y comunicaciones

### 3.3.1 Explanation of Terms
A precondition for integration testing is that the test objects subjected to it (i.e., components) have already been tested. Defects should, if possible, already have been corrected.

#### Integration
Developers, testers, or special integration teams then compose groups of these components to form larger structural units and subsystems. This connecting of components is called integration.

#### Integration test
Then the structural units and subsystems must be tested to make sure all components collaborate correctly. Thus, the goal of the integration test is to expose faults in the interfaces and in the interaction between integrated components.

#### Test basis
The test basis may be the software and system design or system architecture, or workflows through several interfaces and use cases.

#### Integration testing in the large
Interfaces to the system environment (i.e., external systems) are also subject to integration and integration testing.
In this cases we sometimes speak of **system integration testing**, higher-level integration testing, or **integration testing in the large** (integration of components is then integration test in the small, sometimes called **component integration testing**).
System integration testing can be executed only after system testing. The development team has only one-half of such an external interface under its control. This constitutes a special risk.

#### Integration levels
There may be several integration levels for test objects of different sizes. Component integration tests will test the interfaces between internal components or between internal subsystems. System integration tests focus on testing interfaces between different systems and between hardware and software.

### 3.3.2 Test Objects
#### Assembled components
Step-by-step, during integration, the different components are combined to form larger units. 
Ideally, there should be an integration test after each of these steps. Each subsystem may then be the basis for integrating further larger units.

#### External systems or acquired components
In component testing, such existing or standard components are probably not tested. In the integration test, however, these system components must be taken into account and their collaboration with other components must be examined.

### 3.3.3 The Test Environment
#### Reuse of the test environment
Because the test objects are assembled components that have no interfaces to the “outside” other than their constituting components, it is obvious and sensible to reuse the available test drivers for component testing.
If the component test was well organized, then some test drivers should be available.

If a component test is poorly organized, there may be usable test drivers for only a few of the components.
During integration testing in a much later stage of the project, the tester will need to put a lot of effort into the creation, change, or repair of the test environment. Time needed for test execution is lost.

#### Monitors are necessary
During integration testing, additional tools, called monitors, are required. Monitors are programs that read and log data traffic between components. Monitors for standard protocols (e.g., network protocols) are commercially available. Special monitors must be developed for the observation of project-specific component interfaces.

### 3.3.4 Test Objectives
The test objectives of the test level integration test are clear: to reveal interface problems as well as conflicts between integrated parts.

#### Wrong interface formats
When attempting to integrate two single components, their **interface formats** may not be compatible with each other because some files are missing or because the developers have split the system into completely different components than specified.

#### Typical faults in data exchange
The harder-to-find problems, however, are due to the execution of the connected program parts. These kinds of problems can only be found by dynamic testing.
They are faults in the data exchange or in the communication between the components.
- A component transmits syntactically incorrect or no data. The receiving component cannot operate or crashes (functional fault in a component, incompatible interface formats, protocol faults).
- The communication works but the involved components interpret the received data differently (functional fault of a component, contradicting or misinterpreted specifications).
- Data is transmitted correctly but at the wrong time, or it is late (timing problem), or the intervals between the transmissions are too short (throughput, load, or capacity problem).

#### Can the component test be omitted?
Of course, this is possible, and in practice it is regretfully often done, but only at the risk of great disadvantages:
- Most of the failures that will occur in a test designed like this are caused by functional faults within the individual components. An implicit component test is therefore carried out, but in an environment that is not suitable.
- Because there is no suitable access to the individual component, some failures cannot be provoked and many faults, therefore, cannot be found.
- If a failure occurs in the test, it can be difficult or impossible to locate its origin and to isolate its cause.

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

El objetivo es lograr combinar módulos o componentes individuales para que trabajen correctamente de forma conjunta

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

- **Objetos de prueba:** el sistema integrado como un todo
- **Entorno de prueba:** lo más cercano posible al ambiente de producción (error común: utilizar el ambiente de desarrollo)
- **Objetivos de prueba:** validar que el sistema completo cumple con la especificación de sus requisitos funcionales y no funcionales

Es importante verificar:
- Documentación y omisión de requisitos

### 3.4.1 Explanation of Terms
#### Reasons for system test
Las pruebas de sistema se ejecutan desde el <u>punto de vista del usuario final</u>, y consideran interacciones de todos los componentes (que pueden no haber sido contempladas en las pruebas de integración).
Many functions and system characteristics result from the interaction of all system components; consequently, they are visible only when the entire system is present and can be observed and tested only there.

### 3.4.2 Test Objects and Test Environment
The system test tests the system as a whole in an environment as similar as possible to the intended <u>production environment</u>.

Instead of test drivers and stubs, the hardware and software products that will be used later should be installed on the test platform (hardware, system software, device driver software, networks, external systems, etc.). *-> No drivers or stubs*.

System test also checks system and user documentation, like system manuals, user manuals, training material, etc.

#### Data quality
It is important to check the quality of data in systems that use a database or large amounts of data. This should be included in the system test. The data itself will then be new test objects. It must be assured that it is consistent, complete, and up-to-date.

#### System test requires a separate test environment
- During system testing, it is likely that failures will occur, resulting in damage to the customer’s operational environment.
- The testers have only limited or no control over parameter settings and the configuration of the operational environment. The test conditions may change over time because the other systems in the customer’s environment are running simultaneously with the test.

#### System test effort is often underestimated
Because of the complex test environment. 
At the beginning of the system test, only half of the testing and quality control work has been done.

### 3.4.3 Test Objectives
To validate whether the complete system meets the specified functional and nonfunctional requirements and how well it does that.

### 3.4.4 Problems in System Test Practice

#### Excursion
In many projects, the requirements are incompletely or not at all written down. So, it’s unclear how the system is supposed to behave. This makes it hard to find defects.

#### Missed decisions
The consequences for those responsible for system testing are less desirable: 
- They must collect information on the requirements; 
- they also have to make decisions that should have been made many months earlier. 
This collection of information may be very costly and time consuming. Test completion and release of the completed system will surely be delayed.

#### Project fail
If the requirements are not specified, of course the developers do not have clear objectives either. Thus, it is very unlikely that the developed system will meet the implicit requirements of the customer.
In such projects, execution of the system test can probably only announce the collapse of the project.

## 3.5 Acceptance Test

Cuarto nivel de prueba: testing de aceptación, en donde se comprueba que el sistema es **adecuado al uso y necesidades del cliente** (puede realizarse como parte de las pruebas de niveles inferiores o distribuido en varios niveles de pruebas).
The acceptance test may be the only test that the customers are actually involved in or that they can understand.

- **Objetos de prueba:** el sistema (o parte de este) bajo la perspectiva del usuario/cliente.
- **Entorno de prueba:** entorno de producción.
- **Objetivos de prueba:** validar que construimos el producto “correcto”.
- **Bases de prueba:** cualquier documento que describa el sistema desde el punto de vista del usuario/cliente: casos de uso, procesos de negocio, user storys, etc.

#### How much acceptance testing?
For customer-specific systems, the risk is high and a comprehensive acceptance test is necessary. 
At the other extreme, if a piece of standard software is introduced, it may be sufficient to install the package and test a few representative usage scenarios.

#### Test basis
The test basis for acceptance testing can be any document describing the system from the <u>user or customer viewpoint</u>.

### 3.5.1 Contract Acceptance Testing
Las **pruebas de aceptación contractuales** se basan en contratos donde se definen los criterios de aceptación, que se usan para las pruebas. 

Se hace cuando el producto es específico para un cliente. Si es un producto interno, el contrato es menos formal pero igualmente existe.

#### Acceptance criteria
The test criteria are the acceptance criteria determined in the development contract. Additionally, conformance to any governmental, legal, or safety regulations must be addressed here.

Because the supplier may have misunderstood the acceptance criteria, it is very important that the acceptance test cases are designed by or at least thoroughly reviewed by the customer.

#### Customer (site) acceptance test
In contrast to system testing, which takes place in the producer environment, acceptance testing is run in the customer’s actual operational environment.
The acceptance test also checks the delivery and installation procedures.

### 3.5.2 Testing for <u>User</u> Acceptance
Las **pruebas de aceptación del usuario** se hacen porque el cliente y el usuario final pueden ser diferentes.

#### Get acceptance of <u>every user group</u>
Different user groups usually have completely different expectations of a new system. Users may reject a system because they find it “awkward” in some sense.
This may happen even if the system is completely OK from a functional point of view.

#### Present prototypes to the users early
If major user acceptance problems are detected during acceptance testing, it is often too late to implement more than cosmetic countermeasures.

### 3.5.3 Operational Acceptance Testing
Las **pruebas de aceptación operacionales** se hacen con los <u>administradores</u> del sistema.
It may include testing of backup/restore cycles (including restoration of copied data), disaster recovery, user management, and checks of security vulnerabilities.

### 3.5.4 Field Testing (<u>alpha</u>/<u>beta</u> testing y dogfood tests)
Las **pruebas de campo** se hacen cuando el software debe correr en muchos entornos diferentes y no se puede probar en todos. De este modo se pueden buscar problemas con ciertos entornos. 

- El **alpha/beta** testing consiste en enviar versiones previas y estables a clientes para que las prueben y reporten problemas. 
	Alpha tests are carried out at the producer’s location.
	Beta tests are carried out at the customer’s site.
- El **dogfood testing** consiste en que otros miembros de la compañía desarrolladora lo prueben.
	**_"if you make dogfood, try it yourself first”_**

## 3.6 Testing New Product Versions

- Lo que vimos anteriormente es solo el principio del ciclo de vida del software.
- Luego de la instalación de la primera versión del software, el mismo puede ser usado por años o décadas. Siendo cambiado, actualizado y extendido muchas veces.
- El software no se “gasta” con el uso, ni los defectos se originan por dicha causa.
- El mantenimiento puede ser correctivo, adaptativo o evolutivo.

### 3.6.1 Software Maintenance
We speak of software maintenance when:
- a product is adapted to new operational conditions (adaptive maintenance, updates of operating systems, databases, middleware)
- when defects that have been in the product before are corrected (corrective maintenance)

#### Improve the test plan
When a fault is detected, analyze which kind of testing would have detected this problem and will adequately improve or adapt the test plan.

#### Typical problems
1. The system is run under new operating conditions that were not predictable and not planned.
2. The customers express new wishes.
3. Functions are necessary for rarely occurring special cases that were not anticipated.
4. Crashes that happen rarely or only after a very long run time are reported. These are often caused by external influences.

#### Testing after maintenance work
If the production environment has been changed or the system is ported to a new environment (for example, by migration to a new platform), a new acceptance test should be run by the organization responsible for operations. 
If data has to be migrated or converted, even this aspect must be tested for correctness and completeness.

There should be two strategies: one for emergency fixes (or “hot fixes”) and one for planned releases.

#### Testing before retirement
Testing for the retirement of a system should include the testing of data archiving or data migration into the future system.

### 3.6.2 Testing after Further Development
An improved product version will be delivered at certain intervals, such as, e.g., once a year. It is best to synchronize these **releases** with the ongoing maintenance work. For example, every six months a new version is introduced: one maintenance update and one genuine functional update

#### Testing new releases
As with maintenance testing, anything new or changed should be tested, and the remainder of the system should be regression tested to find unexpected side effects.

### 3.6.3 Testing in Incremental Development
Incremental development means system functionality and reliability will grow over time. Testing must be adapted to such development models, and continuous integration testing and regression testing are necessary.

This danger can be reduced by running several V-models in sequence, one for each increment, where every next “V” reuses existing test material and adds the tests necessary for new development or for higher reliability requirements.
![[Pasted image 20230516145036.png]]

## 3.7 <u>Generic Types of Testing</u>

![[Pasted image 20230518202729.png]]

### 3.7.1 Functional Testing
Functional testing includes all kind of tests that verify a system’s input/output behavior.
<u>Black box</u> testing methods are used, and the test bases are the functional requirements.

#### Requirements-based testing
Uses the final requirements as the basis for testing. For each requirement, at least one test case is designed and documented in the test specification.
Usually, more than one test case is needed to test a functional requirement.
Requirements-based testing focuses on single system functions (e.g., the transmission of a purchase order).

#### Business-process-based testing
A business process analysis (which is usually elaborated as part of the requirements analysis) shows which business processes are relevant and how often and in which context they appear.
Test scenarios simulating typical business processes are constructed based on this analysis.
It focuses on the whole process consisting of many steps (e.g., the sales conversation, consisting of configuring a car, agreeing on the purchase contract, and the transmission of the purchase order). This means a sequence of several tests.

### 3.7.2 Nonfunctional Testing
Nonfunctional requirements do not describe the functions; they describe the attributes of the functional behavior or the attributes of the system as a whole.

The following nonfunctional system characteristics should be considered in the tests (usually in system testing):
- **Load test (prueba de carga):** Measuring of the system behavior for **increasing system loads**.
- **Performance test (prueba de rendimiento):** Measuring the processing **speed and response time for particular use cases**, usually dependent on increasing load.
- **Volume test (prueba de volumen):** Observation of the system behavior dependent on the **amount of data**.
- **Stress test (prueba de estrés):** Observation of the system behavior when the system is **overloaded**.
- **Testing of security (seguridad)** against unauthorized access to the system or data, denial of service attacks, etc.
- **Stability or reliability test (prueba de confiabilidad):** Performed during permanent operation (e.g., mean time between failures or failure rate with a given user profile) .
- **Robustness test (prueba de robustez):** Measuring the system’s response to operating errors, bad programming, hardware failure, etc. as well as examination of exception handling and recovery.
- **Testing of compatibility and data conversion (prueba de compatibilidad y conversión de datos):** Examination of compatibility with existing systems, import/export of data, etc.
- **Testing of different configurations of the system (prueba de configuración):** For example, different versions of the operating system, user interface language, hardware platform, etc. (back-to-back testing).
- **Usability test (prueba de facilidad de uso):** Examination of the ease of learning the system, ease and efficiency of operation, understandability of the system outputs, etc., always with respect to the needs of a specific group of users.
- **Checking of the documentation (comprobación de documentación):** For compliance with system behavior (e.g., user manual and GUI).
- **Checking maintainability:** Assessing the understandability of the system documentation and whether it is up-to-date; checking if the system has a modular structure; etc.

#### Pruebas no funcionales (desempeño)
Lo esencial es definir: 
- <u>Procedimientos de prueba:</u>
	Ejemplo (tiempo de respuesta): simular la carga, tomar los tiempos de tal manera, número de casos a probar, etc.
- <u>Criterios de aceptación: </u>
	Ejemplo: el cliente lo valida si en el 90% de los casos de prueba en el ambiente de producción se cumple con los requerimientos de tiempo de respuesta.
- <u>Características del ambiente:</u>
	Definir las características del ambiente de producción ya que estas hacen grandes diferencias en los requerimientos no funcionales.

### 3.7.3 Testing of Software Structure
Structural techniques (**structure-based testing**, white box testing) use information about the test object’s internal code structure or architecture.
Includes:
- control flow
- call hierarchy of procedures
- menu structure

Structural techniques are most used in component and integration testing, but they can also be applied at higher levels of testing.

### 3.7.4 Testing Related to Changes and <u>Regression Testing</u>
Tanto en el mantenimiento como en procesos iterativos incrementales, es necesario realizar **pruebas de regresión**: verificar que los cambios o agregados realizados a la nueva versión no hayan degradado o “roto” el funcionamiento del sistema.

Thus, regression testing may be performed at <u>all test levels</u> and applies to <u>functional, nonfunctional, and structural test</u>. Test cases to be used in regression testing must be well documented and reusable. Therefore, they are **strong** candidates for **test automation**.

Simple local code changes can create side effects in any other, arbitrarily distant, system parts. If the test covers only altered or new code parts, it neglects the consequences these alterations can have on unaltered parts.

#### Selection of regression test cases
- Repeating only the high-priority tests according to the test plan.
- In the functional test, omitting certain variations.
- Restricting the tests to certain configurations only.
- Restricting the test to certain subsystems or test levels.

## 3.8 Summary
- The general V-model defines basic test levels: component test, integration test, system test, and acceptance test. It distinguishes between verification and validation. These general characteristics of good testing are applicable to any life cycle model:
	- For every development step there is a corresponding test level.
	- The objectives of testing are specific for each test level.
	- The design of tests for a given test level should begin as early as possible, i.e., during the corresponding development activity.
	- Testers should be involved in reviewing development documents as early as possible.
	- The number and intensity of the test levels must be tailored to the specific needs of the project.
- The V-model uses the fact that it is cheaper to repair defects a short time after they have been introduced. Thus, the V-model requires verification measures (for example, reviews) after ending every development phase. This way, the “ripple effect” of defects (i.e., more defects) is minimized.
- Component testing examines single software components. Integration testing examines the collaboration of these components. Functional and nonfunctional system testing examine the entire system from the perspective of the future users. In acceptance testing, the customer checks the product for acceptance respective to the contract and acceptance by users and operations personnel. If the system will be installed in many operational environments, then field tests provide an additional opportunity to get experience with the system by running preliminary versions.
- Defect correction (maintenance) and further development (enhancement) or incremental development continuously alter and extend the software product throughout its life cycle. All these altered versions must be tested again. A specific risk analysis should determine the amount of the regression tests.
- There are several types of test with different objectives: functional testing, nonfunctional testing, structure-based testing, and change-related testing.

# Chapter 4 - Static Test

![[Pasted image 20230518202844.png]]

Opposite to dynamic testing, the test object is not provided with test data and executed but rather analyzed.
This can be done using one or more persons for an intensive investigation or through the use of tools.
Tool-supported static analysis is only possible for documents with a formal structure.

The goal of examination is to find defects and deviations from the existing specifications, standards to comply with, or even the project plan.

## 4.1 Structured Group Evaluations

![[Pasted image 20230518202916.png]]

### 4.1.1 Foundations

#### Systematic use of the human ability to think and analyze
Reviews apply the human analytical capabilities to check and evaluate complex issues. Intensive reading and trying to understand the examined documents is the key.
There are different techniques for checking documents. They differ regarding the intensity, formality, necessary resources (staff and time), and goals.

### 4.1.2 Reviews
![[Pasted image 20230518203030.png]]

***Review*** is a common generic term for all the different static analysis techniques people perform as well as the term for a specific document examination technique.
Reviews rely on the colleagues of the author to provide mutual feedback. Because of this, they are also called ***peer reviews***.

However, ***inspection*** is usually defined as a special, <u>formal</u> review using data collection and special rules.

#### A means for quality assurance
Reviews are an efficient means to assure the quality of the examined documents. They should be performed as soon as possible to find mistakes and inconsistencies early.
Eliminating defects and inconsistencies leads to improved document quality and positively influences the whole development process.

#### Positive effects
- <u>Cheaper</u> defect elimination. If defects are found and eliminated early, fewer resources are needed for defect identification and elimination later.
- Shortened development time.
- If defects are recognized and corrected early, costs and time needed for executing the dynamic tests decrease because there are fewer defects in the test object.
- Because of the smaller number of defects, cost reduction can be expected during the whole product life.
- During operation of the system, a reduced failure rate can be expected.
- As the examinations are done using a team of people, reviews lead to mutual learning.
- Because several persons are involved in a review, a clear and understandable description of the facts is required. The necessity to formulate a clear document helps the author find forgotten issues.
- The whole team feels responsible for the quality of the examined object. The group will gain a common understanding of it.

#### Potential problem
In a badly moderated review session, the author may get into a psychologically difficult situation, **feeling** that he as a person and not the document is subject to critical scrutiny.

#### Reviews costs and savings
The costs caused by reviews are estimated to be 10–15% of the development budget.
Savings are estimated to be about 14–25% (the extra effort for the reviews themselves is included in this calculation.).
It is plausible that defect cost in development is reduced by 75% and more.

#### Important success factors
- Every review has a clear goal, which is formulated beforehand.
- The “right” people are chosen as review participants based on the review objective as well as on their subject knowledge and skills.

### 4.1.3 The General Process

![[Pasted image 20230516194840.png]]

A review requires six work steps: planning, kick-off, individual preparation, review meeting, rework, and follow-up.

#### Planning: reviews need planning
- Early, during overall planning, management must decide ***which documents*** in the software development process shall be subject to ***which review technique***.
- During planning of the individual review, the review leader selects technically competent staff and assembles a review team.
- In formal reviews, entry criteria (and the corresponding exit criteria) may be set. A review should continue only after any available entry criteria has been checked.

#### Kick-Off
The kick-off (or overview) serves to provide those involved in the review with all of the necessary information.
It may include:
- significance and the objective of the planned review
- short introduction to the material
- a description of how it fits into the application or environment

##### Higher-level documents are necessary
Those involved must have access to documents that help to decide if a particular statement is wrong or correct. Such documents are also called base documents or baselines.

#### Individual Preparation: intensive study of the review object
The members of the review team must prepare individually for the review meeting.

#### Review Meeting
A review leader or **moderator** leads the review meeting. Moderator and participants should behave diplomatically (**not be aggressive** with each other) and contribute to the review in the best possible way.

#### Rework
The manager decides whether to follow the recommendation or do something else.

#### Follow-Up
The proper correction of defects must be followed up, usually by the manager, moderator, or someone especially assigned this responsibility.
If the result of the first review was not acceptable, another review should be scheduled.

### 4.1.4 Roles and Responsibilities

#### Manager (lider)
Selecciona los artefactos a ser revisados, asigna los recursos necesarios y selecciona el equipo de revisión (generalmente no participa de la reunión de revisión).

#### Moderator (moderador)
The moderator is responsible for executing the review. Planning, preparation, execution, rework, and follow-up should be done in such a way that the review objectives are achieved.
The moderator is responsible for collecting review data and issuing the review report.

#### Author (autor)
The author is the creator of the document that is the subject of a review. If several people have been involved in the creation, one person should be appointed to be responsible.
The author is responsible for the review object meeting its review entry criteria and for performing any rework required for meeting the review exit criteria.

#### Reviewer (revisores)
The reviewers, sometimes also called inspectors, are several technical experts that participate in the review meeting after necessary individual preparation.
They should represent <u>different viewpoints</u> (for example, sponsor, requirements, design, code, safety, test).

#### Recorder (secretario)
The recorder (or scribe) shall document the issues (problems, action items, decisions, and recommendations) found by the review team.

### 4.1.5 <u>Types</u> of Reviews
1. Reviews pertaining to products or intermediate products that have been created during the development process.
2. Reviews that analyze the **project itself** or the **development process**.

#### <u>Walkthrough</u> (o recorrida)
A walkthrough is a <u>informal</u> review method with the purpose of finding defects, ambiguities, and problems in written documents. The author presents the document to the reviewers in a review meeting.

Se “recorre” el producto (o se simula su comportamiento en caso de ser código) en busca de defectos. Es bastante más informal que otros tipos de revisiones (inspecciones por ejemplo).

Goals:
- educating an audience regarding a software product
- improve the product
- error detection
- discuss alternative implementations
- evaluate conformance to standards and specifications

##### Discussion of typical usage situations
##### Suitable for small development teams

#### <u>Inspection</u>
The inspection is the most <u>formal</u> review. It follows a formal, prescribed process. Every person involved, usually people who work directly with the author, has a defined role. Rules define the process. 

The reviewers use checklists containing criteria for checking the different aspects. Estas listas dependen del lenguaje de programación y de la organización.  Por ejemplo revisan: 
- Uso de variables no inicializadas.
- Asignaciones de tipos no compatibles.

Se examinan arterfactos (no solo aplicables al código) buscando defectos comunes.

Goals:
- finding unclear items and possible defects
- measuring review object quality
- improving the quality of the inspection process and the development process

The concrete objectives of each individual inspection are determined during planning.

#### <u>Technical Review</u>
In a technical review, the focus is compliance of the document with the specification, fitness for its intended purpose, and compliance to standards.
During preparation, the reviewers check the review object with respect to the specified review criteria.
The reviewers must be ***technically qualified***.

Goals:
- generate a discussion
- find alternative aproaches
- solve technical issues
- assess conformity to review standards
- reveal errors and defects

##### High preparation effort

#### <u>Informal Review</u>
The informal review is a light version of a review. It more or less follows the general procedure for reviews in a simplified way.

Goals:
- reduce costs and effort compared to other forms of review
- generate a discussion and exchange information between colleagues

#### Selection Criteria
The type of review that should be used depends very much on how thorough the review needs to be and the effort that can be spent. It also depends on the project environment.
It makes sense to use testers as reviewers. The reviewed documents are usually used as the test basis to design test cases

## 4.2 Static Analysis

![[Pasted image 20230518202928.png]]

***Static analysis*** points to the fact that this form of checking does not involve an execution of the checked objects (of a program).
The objective of static analysis is, as with reviews, to reveal defects or defect-prone parts in a document. However, in static analysis, tools do the analysis.

Even spell checkers can be regarded as a form of **static analyzers** because they find mistakes in documents and therefore contribute to quality improvement.

The document to be analyzed must follow a certain formal structure in order to be checked by a tool.

Due to the fact that static analysis is tool supported, there is much less effort involved than in a review.

Not all defects can be found using static testing.
The following defects and dangerous constructions can be detected by static analysis:
- Syntax violations
- Deviations from conventions and standards
- Control flow anomalies
- Data flow anomalies

### 4.2.1 The Compiler as a Static Analysis Tool
### 4.2.2 Examination of Compliance to Conventions and Standards
### 4.2.3 Execution of Data Flow Analysis
### 4.2.4 Execution of Control Flow Analysis
### 4.2.5 Determining Metrics

## 4.3 Summary
- **Several** pairs of eyes see more than a single pair of eyes. This is also true in software development. This is the main principle for the reviews that are performed for checking and for improving quality. Several people inspect the documents and discuss them in a meeting and the results are recorded.
- A fundamental review process consists of the following activities: <u>planning</u>, <u>kick-off</u>, <u>preparation</u>, <u>review meeting</u>, <u>rework</u>, and <u>follow-up</u>. The roles of the participants are <u>manager</u>, <u>moderator</u>, <u>author</u>, <u>reviewer</u>, and <u>recorder</u>.
- There are several types of reviews. Unfortunately, the terminology is defined differently in all literature and standards.
- The <u>walkthrough</u> is an informal procedure where the author presents her document to the reviewers in the meeting. There is little preparation for the meeting. The walkthrough is especially suitable for small development teams, for discussing alternatives, and for educating people in the team.
- The <u>inspection</u> is the most formal review type. Preparation is done using checklists, there are defined entry and exit criteria, and a trained moderator chairs the meeting. The objective of inspections is checking the quality of the document and improvement of development, the development process, and the inspection process itself.
- In the <u>technical review</u>, the individual reviewers’ results must be given to the review leader prior to the meeting. The meeting is then prioritized by assumed importance of the individual issues. The evaluators usually have access to the specifications and other documentation only. The author can remain anonymous.
- The <u>informal review</u> is not based on a formal procedure. The form in which the results have to be presented is not prescribed. Because this type of review can be performed with minimal effort, its acceptance is very high, and in practice it is commonly used.
- Generally, the specific environment, i.e., the organization and project for which the review is used, determines the type of review to be used. Reviews are tailored to meet specific needs and requirements, which increases their efficiency. It is important to establish a cooperative and collaborative atmosphere among the people involved in the development of the software.
- In addition to the reviews, a lot of checks can be done for documents that have a formalized structure. These checks are called static analyses. The test object is not executed during a static analysis.
- The compiler is the most common analysis tool and reveals syntax errors in the program code. Usually, compilers provide even more checking and information.
- Analysis tools that are dependent on programming language can also show violation of standards and other conventions.
- Tools are available for detecting anomalies in the data and control flows of the program. Useful information about control and data flows is generated, which often points to parts that could contain defects.
- Metrics are used to measure quality. One such metric is the cyclomatic number, which calculates the number of independent paths in the checked program. It is possible to gain information on the structure and the testing effort.
- Generally, <u>static analyses should be performed first</u>, before a document is subjected to review. Static analyses provide a relatively inexpensive means to detect defects and thus make the reviews less expensive.

# Chapter 5 - Dynamic Analysis – Test Design Techniques

***Probar el sistema ejecutando el objeto de pruebas.***

Tres categorías generales (refieren al diseño de los CP): 
- Pruebas de caja negra (también llamadas pruebas basadas en la especificación)
- Pruebas de caja blanca (también llamadas pruebas estructurales)
- [[Testing basado en la experiencia|Pruebas basadas en la experiencia]]

![[Pasted image 20230518212454.png]]

### Execution of the test object on a computer
The test object (program) is fed with input data and executed. To do this, the program must be executable. In the lower test stages (component and integration testing), the test object cannot be run alone but must be embedded into a test harness or test bed to obtain an executable program.

### A test bed is necessary
The test bed must supply the test object with input data. In most cases, it is necessary to simulate a part of the program that is supposed to call the test object. A test driver does this. Driver and stub combined establish the test bed. Together, they constitute an executable program with the test object itself.

![[Pasted image 20230518212417.png]]

## 5.1 Black Box Testing Techniques

La estructura inherente o diseño del objeto de prueba <u>no es considerado</u> para el diseño de los casos de prueba.
Black box techniques are also called requirements-based testing techniques.

Algunas técnicas:
- Particiones en clases de equivalencia
- Análisis de valores límites
- Pruebas de transición de estados
- Pruebas basadas en la lógica (grafos causa-efecto, tablas de decisión y pairwise testing)
- Pruebas basadas en casos de uso

### 5.1.1 <u>Equivalence Class Partitioning</u>
***Clase de equivalencia:*** conjunto de entradas para las cuales suponemos que el software se comporta igual.

#### Proceso de partición de equivalencia: 
1. Identificar el dominio de <u>entrada</u> y de <u>salida</u>
2. Identificar las clases de equivalencia del dominio de entrada
3. Definir los casos de prueba

#### Propiedades de un buen caso de prueba:
- Reduce significativamente el número de los otros casos de prueba
- Cubre un conjunto extenso de otros casos de prueba posibles

#### Identificación de las clases de equivalencia:
- Cada condición de entrada separarla en 2 o más grupos.
- Identificar las <u>clases válidas</u> así como también las <u>clases inválidas</u>.
- Ejemplos:
	- “la numeración es de 1 a 999” clase válida 1 <= num <= 999, 2 clases inválidas num < 1 y num > 999.
	- “el primer carácter debe ser una letra” clase válida el primer carácter es una letra, clase inválida el primer carácter no es una letra.
- Si se cree que ciertos elementos de una clase de eq. no son tratados de forma idéntica por el programa, dividir la clase de eq. en clases de eq. diferentes.

#### Proceso de definición de los casos de prueba:
1. Asignar un número único a cada clase de equivalencia. 
2. Hasta cubrir todas las clases de eq. con casos de prueba:
	Escribir un nuevo caso de prueba que cubra tantas clases de eq. <u>válidas</u>, no cubiertas, como sea posible.
3. Escribir un caso de prueba para cubrir una y solo una clase de equivalencia para cada clase de equivalencia <u>inválida</u> (evita cubrimiento de errores por otro error).

### 5.1.2 <u>Boundary Value Analysis</u>
La experiencia muestra que los casos de prueba que exploran las condiciones límite producen mejor resultado que aquellas que no lo hacen.
Las condiciones límite son aquellas que se hallan “arriba” y “debajo” de los márgenes de las clases de equivalencia de entrada y de salida.

Diferencias con partición de equivalencia:
- Elegir casos tal que los márgenes de las clases de eq. sean probados (<u>el límite</u> y los <u>adyacentes</u> a ambos lados).
- Se debe tener muy en cuenta las clases de eq. de la salida (esto también se puede considerar en particiones de equivalencia).

Ejemplos:
- La entrada son valores entre -1 y 1. Escribir casos de prueba con entrada 1, -1, 1.001, -1.001
- Un archivo de entrada puede contener de 1 a 255 registros. Escribir casos de prueba con 1, 255, 0 y 256 registros
- Se registran hasta 4 mensajes en la cuenta a pagar (UTE, ANTEL, etc). Escribir casos de prueba que generen 0 y 4 mensajes. Escribir un caso de prueba que pueda causar el registro de 5 mensajes. 

***USAR EL INGENIO PARA ENCONTRAR CONDICIONES LÍMITE***

#### Tips
- For an input domain, the boundaries and the adjacent values outside the domain must be considered. Domain: $[-1.0; +1.0]$, test data: $-1.0$, $+1.0$ and $-1.001$, $+1.001$.
- If an input file has a restricted number of data records (for example, between 1 and 100), the test values should be 1, 100 and 0, 101.
- If the *output* domains serve as the basis, then this is the way to proceed: The output of the test object is an integer value between 500 and 1000. Test outputs that should be achieved: 500, 1000, 499, 1001. Indeed, it can be difficult to identify the respective input test data to achieve exactly the required outputs. Generating the invalid outputs may even be impossible, but you may find defects by thinking about it.
- If the permitted number of output values is to be tested, proceed just as with the number of input values: If outputs of 1 to 4 data values are allowed, the test outputs to produce are 1, 4 as well as 0 and 5 data values.
- For ordered sets, the first element and the last element are of special interest for the test.
- If complex data structures are given as input or output (for instance, an empty list or zero), tables can be considered as boundary values.
- For numeric calculations, values that are close together, as well as values that are far apart, should be taken into consideration as boundary values.
- For invalid equivalence classes, boundary value analysis is only useful when different exception handling for the test object is expected, depending on an equivalence class boundary.
- Additionally, extremely large data structures, lists, tables, etc. should be chosen. For example, you should exceed buffer, file, or data storage boundaries, in order to check the behavior of the test object in extreme cases.
- For lists and tables, empty and full lists and the first and last elements are of interest because they often show failures due to incorrect programming (Off-by-one problem).

### 5.1.3 State Transition Testing
In many systems, not only the current input but also the history of execution or events or inputs influences computation of the outputs and how the system will behave.
To illustrate the dependence on history, **state diagrams** are used. They are the basis for designing the test (state transition testing).
Finite state machines, state diagrams, and state transition tables model this behavior.

In state transition testing, the test object can be a complete system with different system states as well as a class in an object-oriented system with different states.

A state transition test should execute all specified functions of a state at Test criteria least once. Compliance between the specified and the actual behavior of the test object can thus be checked.

#### Transition tree
To identify the necessary test cases, the finite state machine is transformed into a so-called transition tree, which includes certain sequences of transitions.
The cyclic state transition diagram with potentially infinite sequences of states changes to a transition tree, which corresponds to a representative number of states without cycles.

The transition tree is built from a transition diagram this way: 
1. The initial or start state is the root of the tree. 
2. For every possible transition from the initial state to a following state in the state transition diagram, the transition tree receives a branch from its root to a node, representing this next state. 
3. The process for step 2 is repeated for every leaf in the tree (every newly added node) until one of the following two end conditions is fulfilled:
	- The corresponding state is already included in the tree on the way from the root to the node. This end condition corresponds to one execution of a cycle in the transition diagram.
	- The corresponding state is a final state and therefore has no further transitions to be considered.

```ad-example
title: Ejemplo
collapse: closed
![[Pasted image 20230519160635.png]]
![[Pasted image 20230519160647.png]]
```

#### Incorrect use of functions
It is a violation of the specification if functions are called in states where they should not be used (e.g., to delete the stack while in the “full” state). A robustness test must be executed to check how the test object works when used incorrectly. It should be tested to see whether unexpected transitions appear. The test can be seen as an analogy to the **test of unexpected input values**.

#### Definition of the Test Exit Criteria
- Every state has been reached at least once.
- Every transition has been executed at least once.
- Every transition violating the specification has been checked.

### 5.1.4 Logic-Based Techniques (Cause-Effect Graphing and Decision Table Technique, Pairwise Testing)
The previously introduced techniques look at the different input data independently. Dependencies among the different inputs and their effects on the outputs are not explicitly considered for test case design

#### Cause-effect graphing
Uses the dependencies for identification of the test cases.
The logical relationships between the causes and their effects in a component or a system are displayed in a so-called cause-effect graph.

Every cause is described as a condition that consists of input values (or combinations thereof). The conditions are connected with logical operators (e.g., AND, OR, NOT). The condition, and thus its cause, can be true or false. Effects are treated similarly and described in the graph.

```ad-example
title: Ejemplo
collapse: closed
![[Pasted image 20230519161819.png]]
```

The graph makes clear which conditions must be combined in order to achieve the corresponding effects.

##### Descision tables
The graph must be transformed into a <u>decision table</u> from which the test cases can be derived. 
The steps to transform a graph into a table are as follows: 
1. Choose an effect.
2. Looking in the graph, find combinations of causes that have this effect and combinations that do not have this effect.
3. Add one column into the table for every one of these cause-effect combinations. Include the caused states of the remaining effects.
4. Check to see if decision table entries occur several times, and if they do, delete them.

The objective for a test based on decision tables is that it executes “interesting” combinations of inputs. 

```ad-example
title: Ejemplo
collapse: closed
![[Pasted image 20230519162055.png]]
```

Every column of this table is to be interpreted as a test case. From the table, the necessary input conditions and expected actions can be found directly.

##### Tables -> decision tree
From a decision table, a decision tree may be derived. The decision tree is analogous to the transition tree in state transition testing in how it’s used. Every path from the root of the tree to a leaf corresponds to a test case. Every node on the way to a leaf contains a condition that determines the further path, depending on its truth-value.

### 5.1.5 Use-Case-Based Testing

[[Generating Test Cases From Use Cases]]
[[Guía para la generación de CP a partir de HU]]

There are many research projects and approaches to directly derive test cases from UML diagrams and to generate these tests more or less automatically
The diagrams help define requirements on a relatively abstract level by describing typical user-system interactions. Testers may utilize use cases to derive test cases.

#### Use-Case diagram
Use case diagrams mainly serve to show the external view of a system from the viewpoint of the user or to show the relation to neighboring systems.

#### System and acceptance testing
Use cases and use case diagrams serve as the basis for determining test cases in use-case-based testing. As the external view is modeled, the technique is very useful for both system testing and acceptance testing. If the diagrams are used to model the interactions between different subsystems, test cases can also be derived for integration testing.

#### Test cases
All of the following information is necessary for designing test cases and is often available in the diagrams:
- Start situation and preconditions
- Possibly other conditions
- Expected results
- Postconditions

However, the concrete input data and results for the individual test cases cannot be derived directly from the use cases. The individual input and output data must be chosen.

### 5.1.6 General Discussion of the Black Box Technique

#### Wrong specification is not detected
Black box testing will not be able to find problems where the implementation is based on incorrect requirements or a faulty design specification because there will be no deviation between the faulty specification or design and the observed results.

#### Functionality that’s not required is not detected
In addition, black box testing cannot reveal extra functionality that exceeds the specifications. (Such extra functionality is often the cause of security problems.)

#### Verification of the functionality
The center of attention for all black box techniques is the verification of the functionality of the test object.

## 5.2 White Box Testing Techniques

La derivación de los casos de prueba se basa en la estructura inherente o diseño del objeto de prueba. Son también llamadas técnicas basadas en la estructura o en el código.
The source code must be available, and in certain cases, it must be possible to manipulate it, that is, to add code.

Tipos de técnicas de caja blanca:
- Basadas en el flujo de control del programa.
	Expresan los cubrimientos del testing en términos del grafo de flujo de control del programa.
- Basadas en el flujo de datos del programa.
	Expresan los cubrimientos del testing en términos de las asociaciones definición-uso del programa.

El foco de las técnicas de caja blanca es ejecutar (cubrir) cada parte del código al menos una vez.

El cubrimiento de ese código puede tener diferentes criterios:
- Cubrimiento de sentencias
- Cubrimiento de decisión
- Cubrimiento de condición
- Cubrimiento de decisión/condición
- Cubrimiento de condición múltiple
- Cubrimiento de arcos
- Cubrimiento de caminos
- Cubrimiento de trayectorias independientes

### 5.2.1 Statement Testing and Coverage
This analysis focuses on each statement of the test object.
Asegura que el conjunto de casos de pruebas (CCP) ejecuta al menos una vez cada instrucción del código.

![[Pasted image 20230519215341.png]]

#### Control flow graph is necessary
The first step is to translate the source code into a control flow graph. The graph makes it easier to specify in detail the control elements that must be covered.

```ad-example
collapse: closed
![[Pasted image 20230520200146.png]]
```

#### Test cases
After the edges are traversed, all statements have been executed once. Other combinations of edges of the graph can also be used to achieve complete coverage. But the cost of testing should always be minimized, which means reaching the goal with the smallest possible number of test cases.

The expected results and the expected behavior of the test object should be identified in advance from the specification (not the code!).

### 5.2.2 Decision/Branch Testing and Coverage
This time, the execution of decisions is considered instead of the execution of the statement. The result of the decision determines which statement is executed next. This should be used in testing.

Cada decisión dentro del código toma al menos una vez el valor true y otra vez el valor false para el CCP.

![[Pasted image 20230519215409.png]]

#### Branch vs decision
A branch is the connection between two nodes of the graph. In the program text, there are IF or CASE statements, loops, and so on, also called decisions. This test is thus called decision test or decision coverage.
The following example illustrates this: An IF statement with an empty ELSE-part is checked. Decision testing gives 50% coverage if the condition is evaluated to true. With one more test case where the condition is false, 100% decision coverage will be achieved. For the branch test, which is built from the control flow graph, slightly different values result. The THEN part consists of two branches and one node, the ELSE part only of one branch without any node (no statement there). Thus, the whole IF statement with the empty ELSE part consists of three branches. Executing the condition with true results in covering two of the three branches, that is, 66% coverage. (Decision testing gives 50% in this case). Executing the second test case with the condition being false, 100% branch coverage and 100% decision coverage are achieved. Branch testing is discussed further a bit later.

### 5.2.3 Test of Conditions
If a decision is based on several (partial) conditions connected by logical operators, then the complexity of the condition should be considered in the test.
The goal of condition testing is to cause each ***atomic*** (partial) condition in the test to adopt both a true and a false value.

### Otros criterios

#### Criterio de cubrimiento de decisión/condición
Combinación de los dos criterios anteriores.

#### Criterio de cubrimiento de condición múltiple
Todas las combinaciones posibles de resultados de condición dentro de una decisión se ejecuten al menos una vez.

#### Criterio de cubrimiento de caminos
Se ejecutan al menos una vez todos los caminos posibles (combinaciones de trayectorias).

# Chapter 6 - Test Management

## 6.1 Test Organization

Así como en el desarrollo, las actividades de testing necesitan ser organizadas. Las mismas deben ser coordinadas con las actividades de desarrollo.

### 6.1.1 Test Teams
Because there is a tendency to be blind to our own errors, it is much more efficient to organize testing as independently as possible from development.

##### Benefits of independent testing
- Independent testers are unbiased and thus find additional and different defects than developers find.
- An independent tester can verify (implicit) assumptions made by developers during specification and implementation of the system.

##### Possible drawbacks of independent testing
- Too much isolation may impair the necessary communication between testers and developers.
- Independent testing may become a bottleneck if there is a lack of necessary resources.
- Developers may lose a sense of responsibility for quality because they may think, “the testers will find the problems anyway.”

##### Models of independent testing
1. The development team is responsible for testing, but developers test each other’s programs, i.e., a developer tests the program of a colleague.
2. There are testers within the development team; these testers do all the test work for their team.
3. One or more dedicated testing teams exist within the project team (these teams are not responsible for development tasks).
4. Independent test specialists are used for specific testing tasks (such as performance test, usability test, security test, or for showing conformance to standards and regulatory rules).
5. A separate organization (testing department, external testing facility, test laboratory) takes over the testing (or important parts of it, such as the system test).

For each of these models, it is advantageous to have testing consultants available. These consultants can support several projects and can offer methodical assistance in areas such as training, coaching, test automation, etc. Which of the previously mentioned models is appropriate depends on—among other things—the current **test level**.

#### Component Testing
Testing should be close to development.
Independent testing such as in model 1 is easy to organize and would certainly improve quality. Testing such as in model 2 is useful, if a sufficient number of testers relative to the number of developers can be made available. 
However, with both testing models, there is the risk that the participating people essentially consider themselves developers and thus will neglect their testing responsibilities.

#### Integration Testing
When the same team that developed the components also performs integration and integration testing, this testing can be organized as for component testing (models 1, 2).
Depending on the size of the development project and the number of components, models 3, 4, and 5 should be considered here.

#### System Testing
The final product shall be considered from the point of view of the customer and the end user. Therefore, **independence** from the development team is crucial. This leaves **only** models 3, 4, and 5.

### 6.1.2 Tasks and Qualifications
Specialists with knowledge covering the full scope of activities in the test process should be available.

The following roles should be assigned, ideally to specifically qualified employees:
- <b><u>Test manager (test leader):</u></b> Test planning and test control expert(s).
	- Selecciona y da soporte a las estrategias de pruebas a utilizar, procura y asigna los recursos a las mismas.
	- Identifica las métricas necesarias para dar seguimiento al progreso de las pruebas y controlar la calidad del producto de software.
- <b><u>Test designer (test analyst):</u></b> Expert(s) in test methods and test specification.
- <b><u>Test automator:</u></b> Test automation expert(s) with knowledge of testing basics, programming experience, and deep knowledge of the testing tools and script languages. Automates tests as required, making use of the test tools available for the project.
- <b><u>Test administrator:</u></b> Expert(s) for installing and operating the test environment.
- <b><u>Tester:</u></b> Expert(s) for executing tests and reporting failures.

#### <u>Social competence</u> is important
#### Multidisciplinary team
Especially in system testing, it is often necessary to extend the test team by adding **IT specialists**, at least temporarily, to perform work for the test team. For example, these might be database administrators, database designers, or network specialists.

#### Specialized software test service providers
If appropriate resources are not available within the company, test activities can be given to external software testing service providers. This is similar to letting an external software house develop software.

## 6.2 Planning

Testing should not be the only measure for quality assurance (QA). It should be used in combination with other quality assurance measures.
Las actividades de verificación se deben planificar en mayor o menor grado, dependiendo y siendo coherente con el enfoque del proceso de desarrollo.
Permite que el personal técnico obtenga una visión global de las pruebas del sistema y ubique su propio trabajo en ese contexto.

### 6.2.1 Quality Assurance Plan

Contents of a Software Quality Assurance Plan as defined in IEEE 730-2002:
1. Purpose
2. Reference documents
3. Management 
4. Documentation 
5. Standards, practices, conventions, and metrics 
6. Software reviews 
7. Test 
8. Problem reporting and corrective action 
9. Tools, techniques, and methodologies 
10. Media control 
11. Supplier control 
12. Records collection, maintenance, and retention 
13. Training 
14. Risk management 
15. Glossary 
16. SQA Plan Change Procedure and History

### 6.2.2 Test Plan
A task as extensive as testing requires careful planning. This planning and test preparation starts as early as possible in the software project.
La V&V (verificación y validación) es un proceso caro se requiere llevar una planificación cuidadosa para obtener el máximo provecho de las revisiones y las pruebas para controlar los costos del proceso de V&V.

#### Test planning activities
- Defining the <u>overall approach</u> to and strategy for testing
- Deciding about the <u>test environment</u> and <u>test automation</u>
- Defining the <u>test levels</u> and their interaction, and <u>integrating the testing activities</u> with other project activities
- Deciding how to <u>evaluate the test results</u>
- <u>Selecting metrics</u> for monitoring and controlling test work, as well as <u>defining test exit criteria</u>
- Determining how much test documentation shall be prepared and determining templates
- <u>Writing the test plan</u> and deciding on what, who, when, and how much testing
- <u>Estimating test effort and test costs</u>; (re)estimating and (re)planning the testing tasks during later testing work
- Pone en la balanza los enfoques estático y dinámico para la verificación y la validación
- Utiliza estándares y procedimientos para las revisiones y las pruebas de software
- Establece listas de verificación para las inspecciones
- Define el plan de pruebas de software


```ad-warning
title: Mayor error
El mayor error cometido en la planificación de un proceso de prueba: 


<u>Suponer que no se encontrarán fallas al momento de realizar el cronograma.</u>

Los resultados de esta equivocación son obvios:
- Se subestima la cantidad de personal a asignar
- Se subestima el tiempo de calendario a asignar
- Entregamos el sistema fuera de fecha o ni siquiera entregamos

```

##### IEEE Standard 829-1998
The results are documented in the test plan. IEEE Standard 829-1998 [IEEE 829] provides a template.
![[Pasted image 20230521125518.png]]

This structure works well in practice. The sections listed will be found in real test plans in many projects in the same, or slightly modified, form.
The different level test plans are optional, depending on the criticality of the product developed.

### 6.2.3 Prioritizing Tests
Even with good planning and control, it is possible that the time and budget for the total test, or for a certain test level, are not sufficient for executing all planned test cases.
This means <u>test cases must be prioritized</u>.

#### Prioritization rule
Test cases should be prioritized so that if any test ends prematurely, the best possible test result at that point of time is achieved.

#### The most important test cases first
This way important problems can be found early.

#### Criteria for prioritization
- The **usage frequency** of a function or the **probability** of failure in software use.
- **Failure risk.** Risk is the combination (mathematical product) of severity and failure probability. The severity is the expected damage.
- The **visibility** of a failure for the end user is a further criterion for prioritization of test cases. This is especially important in <u>interactive</u> systems.
- Test cases can be chosen depending on the **priority of the requirements**. The different functions delivered by a system have different importance for the customer.
- Besides the functional requirements, the **quality characteristics** may have differing importance for the customer. Correct implementation of the important quality characteristics must be tested.
- Prioritization can also be done from the perspective of development or system architecture. Components that lead to severe consequences when they fail (for example, a crash of the system) should be tested especially intensively.
- **Complexity** of the individual components and system parts can be used to prioritize test cases. Complex program parts should be tested more intensively because developers probably introduced more faults.
- Failures having a high project risk should be found early. These are failures that require considerable correction work that in turn requires special resources and leads to considerable delays of the project.

Without prioritizing test cases, it is **not possible** to adequately allocate limited test resources. Concentration of resources on high-priority test cases is a **MUST**.

### 6.2.4 Test Entry and Exit Criteria
Defining clear test entry and exit criteria is an important part of test planning. They define <u>when testing can be started and stopped</u> (totally or within a test level).

#### Test start criteria
- The test environment is ready.
- The test tools are ready for use in the test environment.
- Test objects are installed in the test environment.
- The necessary test data is available.

#### Exit criteria
Exit criteria are used to make sure test work is not stopped by chance or prematurely.

- Achieved test coverage: Tests run, covered requirements, code coverage, etc.
- Product quality: Defect density, defect severity, failure rate, and reliability of the test object
- Residual risk: Tests not executed, defects not repaired, incomplete coverage of requirements or code, etc.
- Economic constraints: Allowed cost, project risks, release deadlines, and market chances

# Resumen

## Resumen sobre técnicas de testing

Vimos una amplia variedad de técnicas de prueba... ahora bien, ¿cuáles debería usar?

Factores que influencian: 
- El tipo de objeto de prueba
- Documentación formal y/o disponibilidad de herramientas
- Cumplimiento de estándares
- Experiencia de los testers
- Necesidades/deseos del cliente
- Evaluación de riesgos

### Proceso para un módulo (sugerencia)
![[Pasted image 20230520205824.png]]

### Comparación de técnicas
![[Pasted image 20230520205845.png]]
![[Pasted image 20230520205852.png]]

## Otro resumen

![[VV-SegundoParcialIIS.pdf]]