The most important part of a use case for generating test cases is the flow of events. The two main parts of the flow of events are the <b><u>basic flow of events</u></b> and the <b><u>alternate flows of events</u></b>:
- The ***basic*** flow of events should cover what "normally" happens when the use case is performed. 
- The ***alternate*** flows of events covers behavior of an optional or exceptional character relative to normal behavior, and also variations of the normal behavior. You can think of the alternate flows of events as "detours" from the basic flow of events.

![[Pasted image 20230519180218.png]]

A significant amount of detail goes into fully specifying a use case. Ideally, the flows should be written as "dialogs" between the system and the actors. Each step should explain what the actor does and what the system does in response; it should also be numbered and have a title. Alternate flows always specify where they start in the basic flow and where they go when they end.

# Use-Case Scenarios

A use-case scenario is <u>an instance</u> of a use case, or <u>a complete "path" through the use case</u>. End users of the completed system can go down many paths as they execute the functionality specified in the use case.

![[Pasted image 20230519180406.png]]

These scenarios will be used as the basis for creating test cases.

# Generating Test Cases

We will describe a three-step process for generating test cases from a fully detailed use case:
1. For each use case, generate a full set of use-case scenarios.
2. For each scenario, identify at least one test case and the conditions that will make it "execute."
3. For each test case, identify the data values with which to test.

## Step One: Generate Scenarios

Read the use-case textual description and identify each combination of main and alternate flows -- **the scenarios** -- and create a scenario matrix.

## Step Two: Identify Test Cases

We can do this by analyzing the scenarios and reviewing the use case textual description as well. There should be **at least** one test case for each scenario, but there will probably be more. 

For example, if the textual description for an alternate flow is written in a very cursory way, like the description below, 
	*3A. Unfulfilled Prerequisites, Course Full, or Schedule Conflicts*
Then additional test cases may be required to test all the possibilities. In addition, we may wish to add test cases to test boundary conditions.

The next step in fleshing out the test cases is to reread the use-case textual description and find the conditions or data elements required to execute the various scenarios. For the _"Register for Course"_ use case, conditions would be _"student ID"_, _"password"_, _"courses selected"_, etc.

To clearly document the test cases, once again, a matrix format is useful, like the one below.

![[Pasted image 20230519180649.png]]

Notice that in this matrix no data values have actually been entered. The cells of the table contain a V, I, or n/a. V indicates valid, I is for invalid, and n/a means that it is not necessary to supply a data value in this case.

## Step Three: Identify Data Values to Test

Once all of the test cases have been identified, they should be reviewed and validated to ensure accuracy and to identify redundant or missing test cases. Then, once they are approved, the final step is to substitute actual data values for the Is and Vs.
Without test data, test cases (or test procedures) can't be implemented or executed; they are just descriptions of conditions, scenarios, and paths.

![[Pasted image 20230519190108.png]]

## Putting It All Together

In current practice, use cases are associated with the front end of the software development lifecycle and test cases are typically associated with the latter part of the lifecycle. By leveraging use cases to generate test cases, however, testing teams can get started much earlier in the lifecycle, allowing them to identify and repair defects that would be very costly to fix later, ship on time, and ensure that the system will work reliably.






