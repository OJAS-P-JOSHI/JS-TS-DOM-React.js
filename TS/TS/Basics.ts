function isLegal(age: number): boolean {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const x2 = isLegal(55);
console.log(x2); // Outputs: "Legal"
