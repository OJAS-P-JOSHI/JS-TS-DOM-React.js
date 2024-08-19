
# TypeScript Comprehensive Guide

## Introduction
TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It introduces static types and enhances the tooling for large-scale applications, improving error detection and code maintainability.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Types of Programming Languages](#types-of-programming-languages)
3. [Basic Syntax](#basic-syntax)
4. [Advanced Types](#advanced-types)
5. [Functions](#functions)
6. [Interfaces and Classes](#interfaces-and-classes)
7. [Modules](#modules)
8. [Generics](#generics)
9. [Decorators](#decorators)
10. [Interview Questions](#interview-questions)
11. [Additional Resources](#additional-resources)

## Getting Started

### Installation
To install TypeScript globally, use the following command:
```sh
npm install -g typescript
```

### Compiling TypeScript
To compile a TypeScript file to JavaScript, use:
```sh
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

## Types of Programming Languages

Programming languages are categorized based on their type handling.

### Strongly Typed Languages
- **Examples**: Java, C++, C, Rust
- **Benefits**:
  1. Fewer runtime errors
  2. Stricter codebase
  3. Easier error detection at compile time

### Loosely Typed Languages
- **Examples**: Python, JavaScript, Perl, PHP
- **Benefits**:
  1. Easier to write code
  2. Fast to bootstrap
  3. Lower learning curve

**Key Difference**: Strongly typed languages enforce strict type rules, whereas loosely typed languages allow more flexibility with types.

### Strongly Typed vs Loosely Typed Example

#### Strongly Typed Language Example (C++)
```cpp
#include <iostream>
int main() {  
  int number = 10;  
  number = "text"; // Error: Cannot assign string to number
  return 0;
}
```

#### Loosely Typed Language Example (JavaScript)
```javascript
function main() {  
  let number = 10;  
  number = "text"; // No error: JavaScript is flexible with types
  return number;
}
```

### Why TypeScript?
TypeScript was introduced to add static typing to JavaScript, which helps in catching errors early and provides better development tooling.

## The TypeScript Compiler (TSC)

### Step 1: Install TypeScript Globally
```sh
npm install -g typescript
```

### Step 2: Initialize a Node.js Project with TypeScript
```sh
mkdir node-app
cd node-app
npm init -y
npx tsc --init
```
This will create a `tsconfig.json` file.

### Step 3: Create a TypeScript File
Create a file named `a.ts`:
```typescript
const x: number = 1;
console.log(x);
```

### Step 4: Compile the TypeScript File
```sh
tsc -b
```

### Step 5: Explore the Generated JavaScript File
Notice that the generated `index.js` file contains plain JavaScript code without TypeScript types.

### Step 6: Modify and Test the Code
Change `const` to `let` and assign a string to `x`:
```typescript
let x: number = 1;
x = "harkirat"; // Type error: Cannot assign string to number
console.log(x);
```

### Step 7: Compile the Code Again
```sh
tsc -b
```
Observe the type errors in the console. No `index.js` file will be generated because TypeScript caught the type errors during compilation.

### Step 8: Delete the Generated JavaScript File
Clean up by deleting `a.js`.

## Basic Syntax

### Variable Declarations
```typescript
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let x: [string, number];
x = ["hello", 10]; // OK
```

### Enums
```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### Any
```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

### Void
```typescript
function warnUser(): void {
    console.log("This is my warning message");
}
```

### Null and Undefined
```typescript
let u: undefined = undefined;
let n: null = null;
```

### Never
```typescript
function error(message: string): never {
    throw new Error(message);
}
```

## Advanced Types

### Type Assertions
```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

### Union Types
```typescript
function padLeft(value: string, padding: string | number) {
    // ...
}
```

### Intersection Types
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

## Functions

### Function Types
```typescript
function add(x: number, y: number): number {
    return x + y;
}
```

### Optional and Default Parameters
```typescript
function buildName(firstName: string, lastName?: string): string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
```

## Interfaces and Classes

### Interfaces
```typescript
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);
```

### Classes
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

## Modules
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
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
```

## Decorators
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

## Interview Questions

### What is TypeScript and why use it?
TypeScript is a superset of JavaScript that adds static types. It improves error checking and tooling, which helps in building more reliable and maintainable applications.

### How does TypeScript differ from JavaScript?
TypeScript introduces static types and compile-time error checking, whereas JavaScript is dynamically typed and does not perform type checking at compile-time.

### What are interfaces in TypeScript?
Interfaces define the structure of an object, including its properties and methods. They are used to enforce type checks on objects and classes.

### Explain Generics in TypeScript.
Generics allow you to create reusable components that work with any type. They enable flexible and type-safe code by allowing you to specify types as parameters.

### What are Type Assertions in TypeScript?
Type assertions tell the compiler to treat a variable as a different type. This can be used to override the type inferred by the compiler.

### How does TypeScript handle modules?
TypeScript uses ES6-style modules with `import` and `export` keywords. It supports modular code organization and encapsulation of functionality.

## Additional Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Awesome TypeScript](https://github.com/dzharii/awesome-typescript)

## Conclusion
TypeScript enhances JavaScript by adding static types and advanced features, helping developers write safer and more maintainable code. By leveraging TypeScript’s features, you can improve the robustness and scalability of your applications.
