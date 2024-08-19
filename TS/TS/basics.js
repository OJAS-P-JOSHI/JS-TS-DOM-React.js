function isLegal(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
var x2 = isLegal(55);
console.log(x2); // Outputs: "Legal"
