
# TypeScript Interview Questions and Answers

This guide provides a list of the most asked TypeScript interview questions along with answers and code examples.

## 1. What is TypeScript, and why use it over JavaScript?
**Answer:** TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, interfaces, and other advanced features, making code more maintainable and reducing the chances of runtime errors.

```typescript
// TypeScript Example
let message: string = "Hello, TypeScript!";
console.log(message);
```

## 2. What are the key features of TypeScript?
**Answer:** 
- Static typing
- Interfaces
- Generics
- Decorators
- Modules
- Type inference
- Advanced tooling support (e.g., Visual Studio Code)

## 3. What is the difference between `interface` and `type` in TypeScript?
**Answer:** Both `interface` and `type` can be used to define the shape of objects, but they have some differences:
- `interface` can be merged, whereas `type` cannot.
- `type` can represent more complex types (e.g., unions, intersections).

```typescript
// Example of Interface
interface Person {
    name: string;
    age: number;
}

// Example of Type
type Employee = {
    id: number;
    name: string;
};
```

## 4. Explain type inference in TypeScript.
**Answer:** TypeScript can infer the type of a variable based on the assigned value, even if no explicit type is provided.

```typescript
let count = 5; // TypeScript infers 'count' as a number
count = "hello"; // Error: Type 'string' is not assignable to type 'number'
```

## 5. What are generics in TypeScript?
**Answer:** Generics allow you to create reusable code components that can work with a variety of types.

```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("TypeScript");
console.log(output); // TypeScript
```

## 6. What is the `never` type in TypeScript?
**Answer:** The `never` type represents values that never occur, typically used for functions that always throw an error or never return.

```typescript
function error(message: string): never {
    throw new Error(message);
}
```

## 7. What are decorators in TypeScript?
**Answer:** Decorators are special types of declarations that can be attached to classes, methods, accessors, properties, or parameters to modify their behavior.

```typescript
function sealed(target: Function) {
    Object.seal(target);
    Object.seal(target.prototype);
}

@sealed
class Example {
    // Class implementation
}
```

## 8. How does TypeScript handle null and undefined?
**Answer:** By default, TypeScript allows `null` and `undefined` values to be assigned to variables of any type. However, with the `--strictNullChecks` flag enabled, null and undefined must be explicitly handled.

```typescript
let name: string | null = null;
name = "TypeScript";
```

## 9. What is type assertion in TypeScript?
**Answer:** Type assertion is a way to tell the TypeScript compiler to treat a variable as a different type.

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## 10. How does TypeScript handle asynchronous programming?
**Answer:** TypeScript handles asynchronous programming using Promises, `async/await`, and other patterns.

```typescript
async function fetchData(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Data fetched!"), 1000);
    });
}

fetchData().then(data => console.log(data));
```

## 11. What is the difference between `var`, `let`, and `const` in TypeScript?
**Answer:** 
- `var` has function scope and is hoisted.
- `let` has block scope and is not hoisted.
- `const` has block scope and cannot be reassigned.

```typescript
var x = 10;
let y = 20;
const z = 30;
```

## 12. How can you define optional parameters in TypeScript?
**Answer:** Optional parameters can be specified by using the `?` symbol after the parameter name.

```typescript
function greet(name: string, greeting?: string): string {
    return `${greeting || "Hello"}, ${name}`;
}

console.log(greet("TypeScript")); // Hello, TypeScript
```

## 13. How can you define default parameters in TypeScript?
**Answer:** You can define default parameters by assigning a value to the parameter in the function signature.

```typescript
function greet(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}`;
}

console.log(greet("TypeScript")); // Hello, TypeScript
```

## 14. Explain the concept of Union types in TypeScript.
**Answer:** Union types allow a variable to hold more than one type.

```typescript
let value: string | number;
value = "TypeScript"; // OK
value = 42; // OK
```

## 15. What is the purpose of `readonly` in TypeScript?
**Answer:** The `readonly` keyword makes a property immutable after it is initialized.

```typescript
class Person {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

let person = new Person("John");
// person.name = "Doe"; // Error: Cannot assign to 'name' because it is a read-only property.
```

## 16. How do you create a module in TypeScript?
**Answer:** A module is created by using the `export` and `import` keywords to organize code into separate files.

```typescript
// math.ts
export function add(x: number, y: number): number {
    return x + y;
}

// app.ts
import { add } from "./math";
console.log(add(2, 3)); // 5
```

## 17. Explain the concept of Intersection types in TypeScript.
**Answer:** Intersection types combine multiple types into one, ensuring that the resulting type has all properties of the combined types.

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

const employee: ElevatedEmployee = {
    name: "John",
    privileges: ["admin"],
    startDate: new Date(),
};
```

## 18. How can you handle errors in TypeScript?
**Answer:** You can handle errors in TypeScript using `try`, `catch`, and `finally` blocks.

```typescript
try {
    throw new Error("Something went wrong");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Cleanup code");
}
```

## 19. What is the `unknown` type in TypeScript?
**Answer:** The `unknown` type represents any value, but unlike `any`, it requires a type check before being used.

```typescript
let value: unknown = "Hello, TypeScript";

if (typeof value === "string") {
    console.log(value.toUpperCase());
}
```

## 20. How do you use TypeScript with React?
**Answer:** To use TypeScript with React, you can create a new React project using TypeScript with the following command:

```bash
npx create-react-app my-app --template typescript
```

You can then use TypeScript features such as types, interfaces, and generics in your React components.

```typescript
import React from 'react';

interface Props {
    message: string;
}

const HelloWorld: React.FC<Props> = ({ message }) => {
    return <h1>{message}</h1>;
};

export default HelloWorld;
```

---
This guide covers the most common TypeScript interview questions to help you prepare for interviews. Make sure to practice and understand these concepts deeply!
