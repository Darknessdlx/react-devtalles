const characterNames = ['Goku', 'Vegeta', 'Trunks']

const [, , trunks] = characterNames;

console.log({trunks});

const returnArryFn = () => {
    return ['ABC', 123] as const
};

const [letters, numbers] = returnArryFn();

console.log(letters, numbers);