
Software systems are constantly changing during development and use:
- Bugs are discovered and have to be fixed.
- System requirements change, and you have to implement these changes in a new version of the system.
- New versions of hardware and system platforms are released, and you have to adapt your systems to work with them.
- Competitors introduce new features in their system that you have to match.

Configuration management (CM) is concerned with the policies, processes, and tools for managing changing software systems. 
You need to manage evolving systems because it is easy to lose track of what changes and component versions have been incorporated into each system version.

The configuration management of a software system product involves:
1. <u>Version control.</u> This involves keeping track of the multiple versions of system components and ensuring that changes made to components by different developers do not interfere with each other.
2. <u>System building.</u> This is the process of assembling program components, data, and libraries, then compiling and linking these to create an executable system.
3. <u>Change management.</u> This involves keeping track of requests for changes to delivered software from customers and developers, working out the costs and impact of making these changes, and deciding if and when the changes should be implemented.
4. <u>Release management.</u> This involves preparing software for external release and keeping track of the system versions that have been released for customer use.

![[Pasted image 20230613170332.png]]

Agile development, where components and systems are changed several times a day, is impossible without using CM tools.

The development of a software product or custom software system takes place in three distinct phases:
1. A <u>development phase</u> where the development team is responsible for managing the software configuration and new functionality is being added to the software. The development team decides on the changes to be made to the system.
2. A <u>system testing phase</u> where a version of the system is released internally for testing. This may be the responsibility of a quality management team or an individual or group within the development team. At this stage, no new functionality is added to the system. The changes made at this stage are bug fixes, performance improvements, and security vulnerability repairs. There may be some customer involvement as beta testers during this phase.
3. A <u>release phase</u> where the software is released to customers for use. After the release has been distributed, customers may submit bug reports and change requests. New versions of the released system may be developed to repair bugs and vulnerabilities and to include new features suggested by customers.

## Terminology 

![[Pasted image 20230613170617.png]]

# 25.1 Version management

Version management is the process of keeping track of different versions of software components and the systems in which these components are used. It also involves ensuring that changes made by different developers to these versions do not interfere with each other.
In other words, version management is the process of managing codelines and baselines.

Difference between codelines and baselines:
![[Pasted image 20230613170953.png]]

Version control (VC) systems identify, store, and control access to the different versions of components. There are two types of modern version control system:
1. <u>Centralized systems,</u> where a single master repository maintains all versions of the software components that are being developed. Subversion is a widely used example of a centralized VC system.
2. <u>Distributed systems,</u> where multiple versions of the component repository exist at the same time. Git, is a widely used example of a distributed VC system.

Key features of these systems include:
1. <u>Version and release identification.</u> Managed versions of a component are assigned unique identifiers when they are submitted to the system.
2. <u>Change history recording.</u> The VC system keeps records of the changes that have been made to create a new version of a component from an earlier version.
3. <u>Independent development.</u> Different developers may be working on the same component at the same time. The version control system keeps track of components that have been checked out for editing and ensures that changes made to a component by different developers do not interfere.
4. <u>Project support.</u> A version control system may support the development of several projects, which share components. It is usually possible to check in and check out all of the files associated with a project rather than having to work with one file or directory at a time.
5. <u>Storage management.</u> Rather than maintain separate copies of all versions of a component, the version control system may use efficient mechanisms to ensure that duplicate copies of identical files are not maintained.

Distributed version control is essential for open-source development where several people may be working simultaneously on the same system without any central coordination.

# 25.2 System building

System building is the process of creating a complete, executable system by compiling and linking the system components, external libraries, configuration files, and other information.
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

Agile methods recommend that very frequent system builds should be carried out, with automated testing used to discover software problems. Frequent builds are part of a process of continuous integration as shown below.
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

## Efficiency

As compilation is a computationally intensive process, tools to support system building may be designed to minimize the amount of compilation that is required. 
They do this by checking if a compiled version of a component is available. If so, there is no need to recompile that component.

This linking is accomplished by associating a unique signature with each file where a source code component is stored.

Two types of signature may be used:
1. <u>Modification timestamps.</u> The signature on the source code file is the time and date when that file was modified.
2. <u>Source code checksums.</u> The signature on the source code file is a checksum calculated from data in the file.

![[Pasted image 20230613174427.png]]

# 25.3 Change management

Change management is the process of analyzing the costs and benefits of proposed changes, approving those changes that are cost-effective, and tracking which components in the system have been changed.

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
	The factors that influence the decision on whether or not to implement a change include:
	- The consequences of not making the change
	- The benefits of the change
	- The number of users affected by the change
	- The costs of making the change
	- The product release cycle

## Agile methods

In some agile methods, customers are directly involved in deciding whether a change should be implemented. When they propose a change to the system requirements, they work with the team to assess the impact of that change and then decide whether the change should take priority over the features planned for the next increment of the system.

# 25.4 Release management

A system release is a version of a software system that is distributed to customers.
For mass-market software, it is usually possible to identify two types of release: major releases, which deliver significant new functionality, and minor releases, which repair bugs and fix customer problems that have been reported.

The release may also include:
- configuration files defining how the release should be configured for particular installations;
- data files, such as files of error messages in different languages, that are needed for successful system operation;
- an installation program that is used to help install the system on target hardware;
- electronic and paper documentation describing the system;
- packaging and associated publicity that have been designed for that release.

For planning a release:
![[Pasted image 20230613182753.png]]

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

when a system release is produced, it must be documented to ensure that it can be re-created exactly in the future. This is particularly important for customized, long-lifetime embedded systems, such as military systems and those that control complex machines.

To document a release, you have to record the specific versions of the source code components that were used to create the executable code.  You must keep copies of the source code files, corresponding executables, and all data and configuration files.

## Installation

When planning the installation of new system releases, you cannot assume that customers will always install new system releases. New releases of the system cannot, therefore, rely on the installation of previous releases. 