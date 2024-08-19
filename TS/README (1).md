
# TypeScript Comprehensive Guide

## Introduction
TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It introduces static typing and powerful features that enhance the development of large-scale applications, improving error detection and code maintainability.

## Table of Contents
- [Getting Started](#getting-started)
- [Basic Syntax](#basic-syntax)
- [Advanced Types](#advanced-types)
- [Functions](#functions)
- [Interfaces and Classes](#interfaces-and-classes)
- [Modules](#modules)
- [Generics](#generics)
- [Decorators](#decorators)
- [Error Handling](#error-handling)
- [Asynchronous Programming](#asynchronous-programming)
- [Conclusion](#conclusion)

## Getting Started

### Installation
To install TypeScript globally, use the following command:
```bash
npm install -g typescript
```

### Compiling TypeScript
To compile a TypeScript file to JavaScript, use:
```bash
tsc filename.ts
```
This will generate a JavaScript file with the same name as the TypeScript file.

### TypeScript Configuration
Configure TypeScript with a `tsconfig.json` file:
```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

## Basic Syntax

### Variable Declarations
TypeScript uses type annotations to describe the types of variables.
```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
```

### Tuples
Tuples allow you to express an array with a fixed number of elements.
```typescript
let x: [string, number];
x = ["hello", 10]; // OK
```

### Enums
Enums allow you to define a set of named constants.
```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### Any
The `any` type allows you to store a value of any type.
```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

### Void
The `void` type is used to indicate that a function does not return a value.
```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

### Null and Undefined
These types are used to define variables that may have no value.
```typescript
let u: undefined = undefined;
let n: null = null;
```

### Never
The `never` type represents values that never occur, typically used for functions that always throw an error or never return.
```typescript
function error(message: string): never {
    throw new Error(message);
}
```

## Advanced Types

### Type Assertions
Type assertions allow you to tell the TypeScript compiler to treat a value as a specific type.
```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

### Union Types
Union types allow a variable to hold more than one type.
```typescript
function padLeft(value: string, padding: string | number) {
    // ...
}
```

### Intersection Types
Intersection types combine multiple types into one.
```typescript
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
```

### Literal Types
Literal types allow you to specify exact values a variable can hold.
```typescript
let direction: "up" | "down" | "left" | "right";
direction = "up"; // OK
```

## Functions

### Function Types
You can specify the types of parameters and return values in functions.
```typescript
function add(x: number, y: number): number {
    return x + y;
}
```

### Optional and Default Parameters
Parameters can be optional or have default values.
```typescript
function buildName(firstName: string, lastName?: string): string {
    return lastName ? \`\${firstName} \${lastName}\` : firstName;
}
```

### Rest Parameters
Rest parameters allow a function to accept an indefinite number of arguments as an array.
```typescript
function multiply(multiplier: number, ...numbers: number[]): number[] {
    return numbers.map(n => n * multiplier);
}
```

## Interfaces and Classes

### Interfaces
Interfaces define the shape of an object and can be implemented by classes.
```typescript
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
```

### Classes
Classes in TypeScript are similar to those in other object-oriented languages like Java or C#.
```typescript
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");
```

### Inheritance
Classes can extend other classes, inheriting their properties and methods.
```typescript
class Animal {
    move(distance: number = 0) {
        console.log(\`Animal moved \${distance}m.\`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
```

## Modules
Modules allow you to organize code into separate files and namespaces.
```typescript
// math.ts
export function add(x: number, y: number): number {
    return x + y;
}

// app.ts
import { add } from "./math";
console.log(add(2, 3));
```

## Generics
Generics allow you to create reusable components that work with any data type.
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
```

### Generics Example
```typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

## Decorators
Decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter.
```typescript
function sealed(target: Function) {
    Object.seal(target);
    Object.seal(target.prototype);
}

@sealed
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}
```

### Decorators Example
```typescript
function log(target: any, key: string) {
    console.log(\`\${key} was called!\`);
}

class Calculator {
    @log
    add(a: number, b: number): number {
        return a + b;
    }
}
```

## Error Handling
Error handling in TypeScript is similar to JavaScript. You can use `try`, `catch`, and `finally` blocks.
```typescript
try {
    // Code that may throw an error
} catch (error) {
    // Handle the error
} finally {
    // Cleanup code
}
```

## Asynchronous Programming
TypeScript supports asynchronous programming with Promises, async/await, and other asynchronous patterns.

### Promises
```typescript
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched!"), 1000);
    });
}

fetchData().then(data => console.log(data));
```

### Async/Await
```typescript
async function fetchData(): Promise<string> {
    let data = await fetchData();
    console.log(data);
}

fetchData();
```

## Conclusion
TypeScript is a powerful tool that enhances JavaScript by adding static types and other modern features. By using TypeScript, developers can write more reliable and maintainable code, especially in large-scale projects.
