# typescript-basic

> understanding basic typescript syntax

## Prerequisite

- npm with typescript and ts-node installed

## Installation

```bash
# install dependencies
npm install
# complie and run typescript file
ts-node index.ts
```

## Lesson Learned

### Definition

- TypeScript is an open-source object-oriented language developed and maintained by Microsoft, licensed under Apache 2 license. It is a typed superset of Javascript that compiles to plain JavaScript.

### Type Annotations

- TypeScript is a typed language, where we can specify the type of the variables, function parameters and object properties. We can specify the type using :Type after the name of the variable, parameter or property.

### Interfaces

- Interface is a structure that defines the contract in your application. It defines the syntax for classes to follow.
- Classes that are derived from an interface must follow the structure provided by their interface.
- The TypeScript compiler does not convert interface to JavaScript (aka duck typing or structural subtyping).

### Classes

> TypeScript offers full support for the class keyword introduced in ES2015.

- As with other JavaScript language features, TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.

A class definition can include the following:

1. **Fields** − A field is any variable declared in a class. Fields represent **data pertaining to objects**

2. **Constructors** − Responsible for **allocating memory for the objects of the class**

3. **Functions** − Functions represent **actions an object can take.** They are also at times referred to as methods
