const products = [
    {
        id: '01',
        name: 'Proteína Whey',
        description: 'Suplemento Proteico',
        price: 500,
        stock: 15,
        category: 'Proteínas',
        img: '../proteina_1.webp'
    },
    {
        id: '02',
        name: 'Proteína Star',
        description: 'Suplemento Proteico',
        price: 600,
        stock: 10,
        category: 'Proteínas',
        img: 'https://acdn-us.mitiendanube.com/stores/003/189/220/products/20-off-en-28-f44b888263cd5fa82617399144040174-1024-1024.png'
    },
    {
        id: '03',
        name: 'Creatina Monohidrato HTN',
        description: 'Creatina ',
        price: 1000,
        stock: 9,
        category: 'Creatinas',
        img: '../creatina_1.webp'
    }
    ,
    {
        id: '04',
        name: 'Mutant Mass',
        description: 'Ganador de peso ',
        price: 1500,
        stock: 30,
        category: 'Ganadores de peso',
        img: '../ganador_de_peso_1.png'
    }
]

//crear una promesaw que retorne el array de productos

export const getProducts = () => {
    let error = false
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (error) {
                reject('Hubo un error, intente más tarde.')
            } else {
                resolve(products)
            }
        }, 2000)

    })
}