
Software systems are constantly changing during development and use:
- Bugs are discovered and have to be fixed.
- System requirements change, and you have to implement these changes in a new version of the system.
- New versions of hardware and system platforms are released, and you have to adapt your systems to work with them.
- Competitors introduce new features in their system that you have to match.

La gestión de la configuración comprende políticas, procesos y herramientas para gestionar los cambios en los sistemas de software.
Propósito: Evitar perder tiempo en modificar versiones incorrectas del sistema, entregar la versión incorrecta a los clientes o perder el código fuente de una versión del sistema o de un componente.

The configuration management of a software system product involves:
1. <u>Gestión de versiones.</u> Llevar el registro de las múltiples versiones de los componentes del sistema y asegurarse que los cambios realizados en los componentes por diferentes desarrolladores no interfieran entre si.
2. <u>Armado del sistema (building).</u> Es el proceso de ensamblar los componentes, datos y bibliotecas y luego compilar los mismos y generar un ejecutable.
3. <u>Gestión de cambios.</u> Mantener registro de los requerimientos de cambios que realizan los clientes y desarrolladores, obtener el costo y evaluar el impacto de los mismos y decidir cuales pueden ser implementados. Seguimiento del proceso de realizar un cambio.
4. <u>Gestión de la liberación.</u> Preparación del software para la liberación externa y llevar un registro de las diferentes versiones del sistema que han sido liberados para uso del cliente.

![[Pasted image 20230613170332.png]]

Agile development, where components and systems are changed several times a day, is impossible without using CM tools.

The development of a software product or custom software system takes place in three distinct phases:
1. A <u>development phase</u> where the development team is responsible for managing the software configuration and new functionality is being added to the software. The development team decides on the changes to be made to the system.
2. A <u>system testing phase</u> where a version of the system is released internally for testing. This may be the responsibility of a quality management team or an individual or group within the development team. At this stage, no new functionality is added to the system. The changes made at this stage are bug fixes, performance improvements, and security vulnerability repairs. There may be some customer involvement as beta testers during this phase.
3. A <u>release phase</u> where the software is released to customers for use. After the release has been distributed, customers may submit bug reports and change requests. New versions of the released system may be developed to repair bugs and vulnerabilities and to include new features suggested by customers.

## Terminology 

![[Pasted image 20230613170617.png]]

## Principio de Inmutabilidad

La gestión de la configuración se basa en el **principio de inmutabilidad** (por ejemplo, la información congelada no se puede modificar más), lo cual implica la existencia de versiones, y provee mecanismo y técnicas para que un equipo de personas pueda trabajar de forma coordinada.

# 25.1 Gestión de versiones

Es el proceso de realizar el seguimiento de las diferentes versiones de los componentes de software o ítems de configuración y los sistemas de los cuales forman parte. Y de asegurar que los cambios realizados por distintos desarrolladores a estas versiones no interfieran entre sí.
Puede verse como el proceso de gestión de líneas de código (codelines) y líneas base (baselines).

```ad-summary
title: Baseline y Codeline
**Codeline**: una secuencia de versiones de código fuente donde se tienen las versiones más recientes en la secuencia derivadas de las versiones anteriores.
- Se aplica regularmente a componentes


**Baseline**: es una definición de un sistema específico.
- Especifica las versiones de los componentes que se incluyen en el sistema más una especificación de las librerías usadas, archivos de configuración, etc.
- Permite recrear una versión específica de un sistema.

```

Difference between codelines and baselines:
![[Pasted image 20230613170953.png]]

```ad-info
title: Mainline
La línea principal es una secuencia de versiones del sistema desarrolladas a partir de una línea base original.
```

## Control de Versiones

Los sistemas de control de versiones identifican, almacenan y controlan el acceso a diferentes versiones de los componentes. There are two types of modern version control system:
1. <u>Sistema centralizado,</u> existe un repositorio único que contiene todas las versiones de los componentes de software. Subversion is a widely used example of a centralized VC system.
2. <u>Sistema distribuido,</u> múltiples versiones del repositorio de componentes existen al mismo tiempo. Git, is a widely used example of a distributed VC system.

Key features of these systems include:
1. <u>Version and release identification.</u> Managed versions of a component are assigned unique identifiers when they are submitted to the system.
2. <u>Change history recording.</u> The VC system keeps records of the changes that have been made to create a new version of a component from an earlier version.
3. <u>Independent development.</u> Different developers may be working on the same component at the same time. The version control system keeps track of components that have been checked out for editing and ensures that changes made to a component by different developers do not interfere.
4. <u>Project support.</u> A version control system may support the development of several projects, which share components. It is usually possible to check in and check out all of the files associated with a project rather than having to work with one file or directory at a time.
5. <u>Storage management.</u> Rather than maintain separate copies of all versions of a component, the version control system may use efficient mechanisms to ensure that duplicate copies of identical files are not maintained.

### Centralizado
En este modelo todas las funciones de control de versiones ocurren en un servidor compartido.
Si dos desarrolladores tratan de cambiar un mismo archivo al mismo tiempo, y sin un mecanismo de acceso, uno podría sobreescribir el trabajo del otro.
Se basa en: File locking y Version Merging.

#### File Locking
Se basa en la reserva de recursos de forma explícita cuando sabemos que vamos a modificarlos.
Existen operaciones para reservar un archivo en modo escritura (check out) y liberarlo luego (check in).
El resto de los desarrolladores solo acceden en modo lectura

### Distribuido

Tienen un enfoque de manejo de versiones entre pares (peer-to-peer).
En lugar de existir un repositorio en el cual sincronizan clientes, aquí las computadoras sincronizan entre sí.
No hay una copia canónica del código.
Menor riesgo de pérdida de datos.

Distributed version control is essential for open-source development where several people may be working simultaneously on the same system without any central coordination.

# 25.2 System building

Es el proceso de crear una versión completa y ejecutable del sistema mediante la compilación y el linkeo de sus componentes, librerías externas, archivos de configuración, etc.
Involucra hacer check-out de versiones de componentes que se encuentran en el repositorio gestionado mediante el sistema de gestión de versiones.

System-building tools and version control tools must be integrated as the build process takes component versions from the repository managed by the version control system.

## Tools

System building involves assembling a large amount of information about the software and its operating environment. Therefore, it always makes sense to use an automated build tool to create a system build:
![[Pasted image 20230613173127.png]]

Tools for system integration and building include some or all of the following features:
1. <u>Build script generation.</u> The build system should analyze the program that is being built, identify dependent components, and automatically generate a build script (configuration file).
2. <u>Version control system integration.</u>
3. <u>Minimal recompilation.</u>
4. <u>Executable system creation.</u>
5. <u>Test automation.</u>
6. <u>Reporting.</u> The build system should provide reports about the success or failure of the build and the tests that have been run. 
7. <u>Documentation generation.</u> The build system may be able to generate release notes about the build and system help pages.

## System platforms

The build script is a definition of the system to be built. It includes information about components and their dependencies, and the versions of tools used to compile and link the system.

Three different system platforms may be involved:
1. The development system.
2. The build server
3. The target environment

![[Pasted image 20230613173608.png]]

## Continuous integration

Agile methods recommend that very frequent system builds should be carried out, with **automated testing** used to discover software problems. Frequent builds are part of a process of continuous integration as shown below.

![[Pasted image 20230613173907.png]]

The steps in continuous integration are:
1. Extract the mainline system from the VC system into the developer’s private workspace.
2. Build the system and run automated tests to ensure that the built system passes all tests. If not, the build is broken, and you should inform whoever checked in the last baseline system. He or she is responsible for repairing the problem.
3. Make the changes to the system components.
4. Build the system in a private workspace and rerun system tests. If the tests fail, continue editing.
5. Once the system has passed its tests, check it into the build system server but do not commit it as a new system baseline in the VC system.
6. Build the system on the build server and run the tests. Alternatively, if you are using Git, you can pull recent changes from the server to your private workspace. You need to do this in case others have modified components since you checked out the system. If this is the case, check out the components that have failed and edit these so that tests pass on your private workspace.
7. If the system passes its tests on the build system, then commit the changes you have made as a new baseline in the system mainline.

The advantage of continuous integration is that it allows problems caused by the interactions between different developers to be discovered and repaired as soon as possible.

Bastante malo para sistemas muy grandes o complejos. O cuando la plataforma objetivo es diferente a la plataforma de desarrollo.

### Alternativa: integración frecuente
Si no es posible utilizar integración continua se pueden utilizar builds diarios o frecuentes.
Tiene beneficios no sólo en cuanto a encontrar conflictos sino también porque fomenta la calidad de las pruebas unitarias.

## Efficiency

As compilation is a computationally intensive process, tools to support system building may be designed to minimize the amount of compilation that is required. 
They do this by checking if a compiled version of a component is available. If so, there is no need to recompile that component.

This linking is accomplished by associating a unique signature with each file where a source code component is stored.

Two types of signature may be used:
1. <u>Modification timestamps.</u> The signature on the source code file is the time and date when that file was modified.
2. <u>Source code checksums.</u> The signature on the source code file is a checksum calculated from data in the file.

![[Pasted image 20230613174427.png]]

# 25.3 Change management

Pretende asegurar que la evolución del sistema es un proceso gestionado y que se priorizan los cambios urgentes y beneficiosos.
El proceso de gestión de cambios abarca analizar los costos y beneficios de las peticiones de cambio, aprobar los cambios e identificar los componentes que deben ser modificados.

![[Pasted image 20230613175159.png]]

Many variants of this process are in use depending on whether the software is a custom system, a product line, or an off-the-shelf product. However, all change management processes should include some way of checking, costing, and approving changes.

Tools to support change management may be relatively simple issue or bug tracking systems or software that is integrated with a configuration management package for large-scale systems. 

```ad-info
title: Issue tracking
Issue tracking systems allow anyone to report a bug or make a suggestion for a system change, and they keep track of how the development team has responded to the issues.
```

The change management process is initiated when a system stakeholder completes and submits a change request describing the change required to the system. 
This could be a bug report, where the symptoms of the bug are described, or a request for additional functionality to be added to the system.

Change requests may be submitted using a change request form (CRF). 
![[Pasted image 20230613175652.png]]

After a change request has been submitted, it is checked to ensure that it is valid.
	The change request may be rejected at this stage.
	In that case, the issue is closed and the form is updated with the reason for closure.
For valid change requests, the next stage of the process is change assessment and costing.
	The impact of the change on the rest of the system must be checked.
	Finally, the cost of making the change is estimated, taking into account the costs of changing related components.
Following this analysis, a separate group decides if it is cost-effective for the business to make the change to the software.
	A group should review and approve all change requests, unless the changes simply involve correcting minor errors on screen displays, web pages, or documents.
	These small requests should be passed to the development team for immediate implementation.
El comité de control de cambios debe analizar cada cambio teniendo en cuenta:
- Las consecuencias de no realizarlo.
- Los beneficios del cambio.
- El número de usuarios afectados por el cambio.
- Los costos de realizar el cambio.
- El ciclo de liberación del cambio.

## Agile methods

En algunas metodologías ágiles, el cliente está directamente involucrado en la gestión de los cambios.
Considerar la propuesta de cambios a requerimientos, evaluar el impacto y decidir cuando la modificación tiene prioridad sobre las características planificadas para el siguiente incremento del sistema.
Los cambios para mejorar el software son decididos por los programadores que trabajan en el sistema.
Refactorizar, no es visto como una sobrecarga sino como una parte del proceso de desarrollo.

# 25.4 Release management

Una liberación corresponde a una versión (del software) que queda liberada para su uso.
For mass-market software, it is usually possible to identify two types of release: major releases, which deliver significant new functionality, and minor releases, which repair bugs and fix customer problems that have been reported.

The release may also include:
- configuration files
- data files
- an installation program
- electronic and paper documentation
- packaging and associated publicity

For planning a release:
![[Pasted image 20230613182753.png]]
- 5ta ley de Lehman: sugiere que si se agregan muchas funcionalidades a un sistema; también se introducen bugs a corregir en la siguiente versión.
- Propuestas del cliente.

## Release creation

Release creation is the process of creating the collection of files and documentation that include all components of the system release.
This process involves several steps:
1. The executable code of the programs and all associated data files must be identified in the version control system and tagged with the release identifier.
2. Configuration descriptions may have to be written for different hardware and operating systems.
3. Updated instructions may have to be written for customers who need to configure their own systems.
4. Scripts for the installation program may have to be written.
5. Web pages have to be created describing the release, with links to system documentation.
6. Finally, when all information is available, an executable master image of the software must be prepared and handed over for distribution to customers or sales outlets.

## Custom software or software product lines

For custom software or software product lines, the complexity of the system release management process depends on the number of system customers. Special releases of the system may have to be produced for each customer. Individual customers may be running several different releases of the system at the same time on different hardware.

A software company may have to manage tens or even hundreds of different releases of their software. Their configuration management systems and processes have to be designed to provide information about which customers have which releases of the system and the relationship between releases and system versions.

## Documentation

When a system release is produced, it must be documented to ensure that it can be re-created exactly in the future. This is particularly important for customized, long-lifetime embedded systems, such as military systems and those that control complex machines.

To document a release, you have to record the specific versions of the source code components that were used to create the executable code.  You must keep copies of the source code files, corresponding executables, and all data and configuration files.

## Installation

When planning the installation of new system releases, you cannot assume that customers will always install new system releases. New releases of the system cannot, therefore, rely on the installation of previous releases. 

## Software como servicio

Simplifica la gestión de liberaciones y la instalación del sistema por parte de los clientes.
El desarrollador del sistema es responsable de remplazar la versión actual con una nueva liberación. La nueva versión queda disponible para todos los clientes.

# Temas adicionales

## Puntos clave

- La gestión de la configuración es la gestión de un sistema de software en evolución.
	- Al mantener un sistema, se crea un equipo de CM para asegurar que los cambios se incorporen al sistema de manera controlada y que se lleva registro de los cambios que se han implementado
- Los principales procesos de gestión de configuración son la gestión de cambios, la gestión de versiones, el armado de sistemas y la gestión de liberaciones.
- La gestión de versiones implica el seguimiento de las diferentes versiones de componentes de software a medida que se realizan cambios en ellas.
- El armado de un sistema es el proceso de ensamblar los componentes del sistema en un programa ejecutable para operar en un sistema de computación determinado.
- El software debería ser rearmado de forma frecuente y probado inmediatamente luego de armar una nueva versión. Esto facilita la detección de defectos y problemas que pueden haberse introducido desde el armado anterior.

- La gestión de cambios implica evaluar las propuestas de cambios de los clientes del sistema y otras partes interesadas y decidir si es rentable implementarlas en una nueva versión de un sistema.
- Las liberaciones del sistema incluyen el código ejecutable, datos, archivos de configuración y documentación.
	- La gestión de liberaciones abarca tomar decisiones en cuanto a la fecha de la liberación, preparar toda la información a distribuir y documentar cada liberación.

## Identificación

El propósito es determinar la metadata de un ítem de configuración, de modo de identificarlo de forma única y especificar sus relaciones con el mundo exterior y otros ítems de la configuración.

## Alcance y Formalismo

Los beneficios y costos de la Gestión de la Configuración están relacionados al alcance y al grado del formalismo.
El alcance corresponde al número de objetos comprendidos en la gestión de la configuración.
El grado del formalismo es el control con el cual se realizan las tareas de la gestión de la configuración.

### Ideales
Es imposible determinar cual alcance o grado de formalismo es el mejor; sino que la elección depende de los requerimientos y las posibilidades.
En general hay un mínimo de inversión que permite evitar situaciones que serían muy costosas. Esto define un mínimo alcance que nos cubre para evitar desastres.

### Alcance - Perspectiva
Producto / Proyecto / Organización

![[Pasted image 20230613194523.png]]

## Gestión de Ambientes

![[Pasted image 20230613194543.png]]

![[Pasted image 20230613194553.png]]






