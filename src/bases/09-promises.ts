const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // Yo quiero mi dinero
        resolve(1000);
        reject('Mi amigo se perdio con mi dinero');
    }, 2000)
})

myPromise
    .then((myMoney) => {
    console.log(`Tengo mi dinero de regreso ${myMoney}`)
})
    .catch((reason) => {
        console.warn(reason)
})
    .finally(() => {
        console.log('Se termino la promesa')
});

