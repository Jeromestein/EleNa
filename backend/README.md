
# Backend Requirements Specification

## 1. Executive Summary

This README defines the architecture and design specification for the initial minimal viable product of a web-based navigation framework for mapping directions between two points with elevation change as a variable.

## 2. Revision History

| Date			| Revision		| Contributor		| Description of Changes	|
| -------------	| -------------	| -----------------	| -------------------------	|
| 10/28/2021	| 0.1			| Luke Ruter		| Initial Draft				|

## 3. Scope

The codebase herein covers the scope of the backend software needed to process and deliver navigation and elevation data from public APIs, and deliver them consitently to the front-end framework.
The codebase implements the Django framework using Python, employing the Model-View-Template architecture pattern. This project will currently implement only the Models and Views, while the front-end templates are in active development.
Additionally, the codebase contains infostructure for performance monitoring and unit testing of the EleNa framework.

## Functionality Delivery Phases

The initial phase and proof-of-concept for the EleNa application is deliverable for December 13th 2021.

Documentation, design diagrams, and planned timelines and schedules are deliverable for November 2nd 2021.

## 4. Requirements

The non-functional and functional requirements of the proposed software will be defined and diagrammed herein.

#### 4.1 Summary

For the initial MVP, constraints of scalability, extensibility, and usability will be considered over-and-under the timeline constraints documented above.

The nonfunctional requirements of the backend are (1) to remain separate and distinct from the end-user experience and (2) reliability.

The functional requirements of the backend are
1. consitent parsing of API data.
2. internal and external documentation for front-end developers.
3. The implementation of Models and Views to be embodied and integrated with front-end code as a template in Django's Model-View-Template.

#### 4.2 Software Components

The required software components are listed and described below.
1. Django project to serve future templates.
2. Data models for manipulation and representation of API navigation data for use in EleNa's core algorithms and views.
3. Views and Controllers to be embodied for use in future templates.
4. A static server to provide necessary vendor binaries to future front-end templates.
5. A perforamce monitoring system to ensure proper optimization of code.
6. A tailored implementation of Django's testing suite.

#### 4.3 Component Operation Overview

1. The django project will be used to organize code for API calls, algorithms, application states, deliverability and manipulatability of user data, performance testing, and unit testing.
2. The data models will provide the structure and execution of API calls to handle the deliverability of navigation routes to the end-user.
3. Views in Django operate as both views and controllers using the vocabulary of the MVC architecture pattern. The Views will handle state-based execution and delivery of core data to the end-user (browser).
4. The static media server will be referenced in the future templates to ensure the browser will be able to access referenced third-party libraries, images, and CSS files.
5. An implementation of either the Django debug toolbar, or an original system, to measure the time to produce views, execute algorithms, and to parse API calls.
6. A testing suite that will unit test the above components to ensure the core functionality requirement of reliability.

#### 4.4 Architecture Diagram

TODO: Produce Architecture Diagram

#### 4.5 UML Diagram

TODO: Produce UML Diagram

## 5. Evaluation Measures and Testing

The following measures will need to be taken to ensure a good end-user experience and reliability of the back-end code.

#### 5.1 Performance Measures

The following measures will be optimized:
1. Production of views from models.
2. Production of models from API calls.
3. Execution of core algorithms to provide elevation-based navigation services.

#### 5.2 Testing Infostructure

The test suite will need to provide coverage of the components listed in 4.3, and employ a variety of unit tests to ensure the detection of unintended operations of the projects core functionality.


