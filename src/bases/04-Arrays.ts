
const myArray: number[] = [1,2,3,4,5,6];

myArray.push(123);

const myArray2: number[] = structuredClone(myArray);

myArray.push(7);

console.log({myArray, myArray2});