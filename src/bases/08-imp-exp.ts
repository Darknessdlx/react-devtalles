import { heroes, type Hero, Owner } from "../data/heros.data";


const getHeroById = (id: number): Hero | undefined => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });
    // if (!hero) {
    //     throw new Error(`Hero not found with id ${id}`);
    // }
    return hero;
};

console.log(getHeroById(3));


export const getHeroByOwner  = (owner: Owner)=> {
    const heroesByOwner = heroes.filter(
        hero => hero.owner === owner
    )

    return heroesByOwner;
}