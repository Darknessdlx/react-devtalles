// interface Person {
//     firstname: string;
//     lastname: string;
//     age: number;
//     address?: {
//         postalCode: number;
//         city: string;
//     }
// }

interface Person {
    firstname: string;
    lastname: string;
    age: number;
    // address?: {
    //     postalCode: number;
    //     city: string;
    // }
    address: Address;
}

interface Address {
    postalCode: number;
    city: string;
}

// @ts-ignore
const ironman: Person = {
    firstname: "Tony",
    lastname: "Stark",
    age: 45,
    address: {
        city: "New York",
        postalCode: 5555,
    },
}

// @ts-ignore
const spiderman: Person = {
    address:
        {
            city: "",
            postalCode: 3333
        },
    age: 22,
    firstname: "Peter",
    lastname: "Parker"}

console.log(spiderman, ironman);