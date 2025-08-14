const ironman = {
    firstname: "Tony",
    lastname: "Stark",
    age: 45,
    address: {
        postalCode: "123",
        city: "New York",
    },
};

const spiderman = structuredClone(ironman);

spiderman.firstname = 'Peter';
spiderman.lastname = 'Parker';
spiderman.age = 22;
spiderman.address.city = 'San Jose'

console.log(spiderman, ironman);