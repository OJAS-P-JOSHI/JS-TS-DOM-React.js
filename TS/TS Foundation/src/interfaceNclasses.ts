interface Person {
    name: string;
    age: number;
    greet(phrase: string): void; //greet function will take phrase as argument and return nothing
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.age+"  "+1}`);
    }
}

const i = new Employee("KING",34);
console.log(i.greet(`${i.name}`));