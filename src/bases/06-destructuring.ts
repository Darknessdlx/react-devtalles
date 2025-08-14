const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
};

// const name = person.name;
// const age = person.age;
// const key = person.key;

const {name: nameIronman, age: ageIronman, key} = person;

console.log(`${nameIronman} is ${ageIronman} years old. Key ${key}` );

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string,
}

const useContext = ({key, name, age, rank}: Hero ) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    };
};

const {rank, user, keyName} = useContext(person);

const {name, age} = user;

console.log({rank, name, age, keyName});

