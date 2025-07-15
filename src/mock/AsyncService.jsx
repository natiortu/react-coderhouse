const products = [
    {
        id: '01',
        name: 'Proteína Whey',
        description: 'Suplemento Proteico',
        price: 500,
        stock: 15,
        category: 'Proteínas',
        img: '../proteina_1.png'
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
        img: '../creatina_1.png'
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
    },
    {
        id: '05',
        name: "Whey Protein Isolate",
        description: 'Suplemento Proteico ',
        category: "Proteínas",
        price: 15000,
        stock: 30,
        img: '../proteina_2.png'
    },
    {
        id: 2,
        name: "Proteína Chocolate",
        category: "Proteínas",
        price: 13000,
        stock: 30,
        img: '../proteina_3.png'
    },
    {
        id: 3,
        name: "Proteína Vainilla",
        category: "Proteínas",
        price: 16000,
        stock: 30,
        category: 'Ganadores de peso',
        img: '../proteina_4.png'
    },
    {
        id: 4,
        name: "Cafeína",
        description: "Cafeína",
        price: 15500,
        stock: 30,
        category: 'Vitaminas y Minerales',
        img: '../cafeina_1.png'
    },
    {
        id: 5,
        name: "Proteína Whey Body Advance",
        description: "Suplemento Proteico",
        price: 14800,
        stock: 30,
        category: 'Proteínas',
        img: '../proteina_5.png'
    },
    {
        id: 6,
        name: "Whey Protein Cookies & Cream",
        description: "Suplemento Proteico",
        price: 15200,
        stock: 30,
        category: "Proteínas",
        img: '../ganador_de_peso_1.png'
    },
    {
        id: 7,
        name: "Proteína de Arveja Natural",
        description: "Suplemento Proteico",
        price: 12500,
        stock: 30,
        category: "Proteínas",
        img: '../ganador_de_peso_1.png'
    },

    // CREATINAS
    {
        id: 8,
        name: "Creatina Monohidratada 300g",
        description: "Creatina",
        price: 9000,
        stock: 30,
        category: "Creatinas",
        img: '../ganador_de_peso_1.png'
    },
    {
        id: 9,
        name: "Creatina Micronizada 500g",
        description: "Creatina",
        price: 12500,
        stock: 30,
        category: "Creatinas",
        img: '../ganador_de_peso_1.png'
    },

    // GANADOR DE PESO
    {
        id: 10,
        name: "Mass Gainer 3Kg Chocolate",
        description: 'Ganadores de peso',
        price: 18000,
        stock: 30,
        category: 'Ganadores de peso',
        img: '../ganador_de_peso_1.png'
    },

    // VITAMINAS Y MINERALES
    {
        id: 11,
        name: "Multivitamínico A-Z",
        description: "Vitaminas y Minerales",
        price: 7500,
        stock: 30,
        category: "Vitaminas y Minerales",
        img: '../ganador_de_peso_1.png'
    },
    {
        id: 12,
        name: "Vitamina D3 5000UI",
        description: "Vitaminas y Minerales",
        price: 5900,
        stock: 30,
        category: "Vitaminas y Minerales",
        img: '../ganador_de_peso_1.png'
    },
    {
        id: 13,
        name: "Magnesio Quelado 120 caps",
        description: "Vitaminas y Minerales",
        price: 6800,
        stock: 30,
        category: "Vitaminas y Minerales",
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