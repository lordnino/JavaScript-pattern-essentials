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