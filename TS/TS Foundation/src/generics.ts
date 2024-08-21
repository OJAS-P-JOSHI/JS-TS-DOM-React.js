// exercise6.ts

function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
console.log(output);

interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;
console.log(myIdentity(100));
