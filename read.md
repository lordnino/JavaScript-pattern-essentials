# JavaScript Pattern Essentials

## Resources

you can find a link to the book [here](http://usuaris.tinet.cat/bertolin/pdfs/2-JavaScriptPatternEssentials2013.pdf)

## what are design patterns ?

Design patterns are solutions to programming problems you find again and again in real-world application development.  
The design involoves a description or a solution template for solving a problem that can be applied in different scenarios.  
Actually, the notion of design patterns originated in a different discipline, namely architecture.  
Christopher Alexander, a well-known architecture fiest developed the concept of a pattern language in which he categorized
architectural design elements that are both beautiful and practical. His design elements include excat methods for constructing
practical, safe, and attractive designs at any scale.

## benefits of using design patterns ?

1. **Patterns are proven solutions**. Patterns are solutions proposed by developers that have run into similar design challenges.
2. **Patterns are reusable**. Patterns make you more effective and productive as a developer. in subsequent projects you will immediately
 recognize similar situations and instantly know how to solve the problem at hand. Patterns are reusable allowing you to build a better apps
 in less time.
3. **Patterns provide a common vocabulary**. Each pattern has a name with makes it much easier to discuss complex application designs.
4. **Patterns build confidence**. When a group of developers discuss design and architectural topics that may use terms like Factory, LazyLoad, Facade, MVC, Modules,
Having experience with patterns allows you to confidently participate in these deliberations as well as their subsequent implementation.


There are always four essential elements to a pattern :
1. A pattern name - each pattern should have a descriptive name
2. A problem - a design challenge or context in which to apply the pattern
3. A solution - descripes the pattern elements and their arrangements
4. Consequences - tradeoffs and side-effects of applying the pattern

## How do patterns evelove ?

Typically, it starts with a blogger or open-source contributor who writes about a solution they developed for a particular software design problem.  
Others pick up on the idea, test it, modify it, refine it, and publish their enhancements.  
It is a useful solution and more and more developers start picking up on the idea. And this is how pattern starts its life.

## OO Design, SOLID, and DRY Principles ?

Javascript is a class-less, but object-oriented (OO) language.
The fundamental characteristics of OO; they are **data encapsulation, data abstraction, inheritance, and polymorphism**
Then we review the terms **loose coupling and high cohesin** which describes the relationship between objects and their interdependencies
**SOLID** is an acronym that stands for five object-oriented principles that are considered essential in good object-oriented design.
Finaly we represent the **DRY** which states that no code duplication should be allowed

## **Data Encapsulation**

Data encapsulation is the hiding of data in your objects by restricting access.  
In JavaScript data is stored in properties which are immediately accessible, such as employe.name or possibly via a couple of getters and setters  
such as emplyee.getName.

Many languages offer access modidfiers, such as, private, protected, and public. By placing this modifiers on the object's memebers (properties and methods) 
you indicate who can have access to these memebers.  
The private modidfier does not allow any access from outside the object; protected akkows access only be a derived objects, and public allows access by anyone.

Javascript does not support access modifiers, this is not always desirable, but fortunately, a number of techinques and patterns have been developed over the last 
few years that allows you to protect and encapsulate the data in your objects. All these are based on the concept of function clousre which will be discussed shortly.

## **Data Abstraction**

Data abstraction refers to the development of objects that are abstractions of real world concepts. This is done primarily by defining an interface (properties or methods) 
that best represents the item we are trying to mode or abstract out.

For example, if we need to create a customer object, we are interested in their name, contact, information, and purchase history perhaps. if, on the other hand, we need 
to model a new hire, say a javascript programmer, we are more interested in their education, skill level, years of experience, and salary requirements. The interesting 
thing is that both are people, but we are abstracting out only what is of interest of us at the that time.

## **Inheritance**

There are two different ways that objects can relate to each other. In OO these are often referred to as "has a" or "is a" relationships; more formally composition and inheritance relationships.

When an object reference another object, this is called object composition because the object "has an" object.  
Inheritance is when an object derives data and functionality from an ancestor object, in other words it "is an" instance of an ancestor object.  
The main purpose of **Composition and Inheritance** are code resuability.

Many programmers are familiar with classical inheritance in which a class derives (extends) from another class.  
By inheriting the class obtains the data and the behavior from the ancestor class.  
Inheritance is fully supported in Javascript, but through a different mechanism, called **prototypal inheritance**.  
Each object in JavaScript has a prototype object from which it derives properties and methods.

## **Polymorphism**

The word polymorphism literally means many forms. It is the ability to create multiple objects that to the program appear 
of the same type but they are different. this is accomplished by creating objects that have the same interface (properties and methods) but their concrete 
implementation is very different.

Suppose we are modeling different zoo animals; a swan, a monkey, and an elephant. All these animals have a skin and they can move and talk.  
To model these we create for each an object with the following iterface: a skin property and two methods: move and talk.

## **loose coupling**

Loose coupling means there is low degree of dependency among objects. Loose coupling is a design 
goal that seeks to reduce the interdependencies between objects with the goal of reducing reducing the risk that changes in one object
will require changes in any other object.

Coupling is a measure of how much direct knowledege an object has about another object. The more its knows, the more tightly coupled it is 
with that object.  
Tight coupling creates highly interdependent systems that are much harder to change and maintain.  
Coupling is not limited to objects; it also plays a role at the component level, which in javascript equates to modules.

Loosely coupling can be measured by the number of changes that are required when, for example a property or a method is added or removed from an interface.  
Or possibly the entire interface of a utility object is changed, how much is affected by this change?

The goal of loose coupling is to create systems that are flexible and are easy to maintain.

## **High Choesion**

Objects with high cohesion are those that are highly focused and have elements that form a coherent group and they truly belong to together.  
Cohesion is a measure of how strongly related each piece of code is forming a comprehensive unit of functionality.  
Object with high cohesion are preferred because they are reliable, resubale, understandble, and easier to maintain.

In fact, high cohesion goes hand in hand with loose coupling. Systems that are loosely coupled often have objects that have high cohesion and vise versa

It is important to note that cohesion exists within objects and modules, whereas coupling exists between objects and modules.

## SOLID Prinicples

We should point out that there is a fair amount of overlap between the five SOLID princible, the four OO characteristics, and the notion of loose coupling and high 
cohesion: their common aim is to create a better objects models.

SOLID is a set of object-oriented principles that are considered essential for good object-oriented designs.

The SOLID principles do not tell whether a conceptual objcet model is correct or not, that is, it does not show whether the objcet model is a good representation 
of the system being modeled. Instead it focuses on object dependencies and how objects relate to each other.  
The underlying idea is that when objects and their dependencies are well managed application will be robust, flexible, reusable, and reasier to maintain.

Here are the five SOLID prinicples():  
* Single Responsibility Principle.
* Open Closed Princible
* Liskov Substituion Principle
* Interface Segregation Principle
* Dependecy Inversion Principle

## single responsibility priniciple

The single responsibility principle state that an object should have one, and only one, reason to exit.  
This is one

## open closed principle

The open closed priniciple relates to the extensibility of objects and states that an object should be extensible without modifying it. 
That is. it should be open for extension, closed for modification.
If the only way to extend an object's behavior is by changing current code, you quickly risk negatively impacting the existing code base.

The open-Closed principle clearly applies to javascript. Javascript library plugins area a good example offering a 'prescribed' way to extension.

## Liskov Substitution Priniciple

Essentially it is saying that when exending a base object the original base functionality should remain intact. An extension should cannot 
change the functionality of the object it is extending.

## Interface Segeregation priniciple

The interface segeregation principle state the following: make fine-grained interfaces that are client specific.  
This relate to the cohesion of the an object's responsibility and related interface.  
Essentialy the interface represents a contract and this principle states that it should be unambiguous what it does and which clients it supports.  
The interface segregation principle promotes clarity, ease of use, and long term maintainability.

## Dependency Inversion Principle

The dependency inversion principle state that you should depend on abstractions, not concretions, that is, program against interfaces, not objects

## The DRY principle

DRY stands for don't repeat yourself, it aims to avoid code duplications.  
Whenever you find yourself writing functionality that already exists somewhere else in your project, or worse, you cut-copy-paste this code, 
it is time to step back and rethink your approach.  
Usually you should factor the code out into a shared method, object, or module that exposes the necessary functionality which can then be shared across 
th project.

## Rule of Three

The rule of three is another principle. The rule of three states that under certain circumstances allowing to copies of the same code may be fine.  
The idea is that you should only start refactoring when the code is repeated three times, because only then the necessary abstraction becomes clear.

## Deep Dive: Prototypes in Javascript

**What is a prototype ?**  
A prototype is a regular object from which other objects inherit properties. Each object has an internal prototype property that points to a 
prototype object from which it inherits all members.