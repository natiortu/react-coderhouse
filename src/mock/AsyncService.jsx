const products = [
    {
        id: '01',
        name: 'Proteína Whey',
        description: 'Suplemento Proteico',
        price: 500,
        stock: 15,
        category: 'proteinas',
        img: '../proteina_1.png'
    },
    {
        id: '02',
        name: 'Proteína Star',
        description: 'Suplemento Proteico',
        price: 600,
        stock: 10,
        category: 'proteinas',
        img: 'https://acdn-us.mitiendanube.com/stores/003/189/220/products/20-off-en-28-f44b888263cd5fa82617399144040174-1024-1024.png'
    },
    {
        id: '03',
        name: 'Creatina Monohidrato HTN',
        description: 'Creatina ',
        price: 1000,
        stock: 9,
        category: 'creatinas',
        img: '../creatina_1.png'
    }
    ,
    {
        id: '04',
        name: 'Mutant Mass',
        description: 'Ganador de peso ',
        price: 1500,
        stock: 30,
        category: 'ganadoresdepeso',
        img: '../ganador_de_peso_1.png'
    },
    {
        id: '05',
        name: "Whey Protein Isolate",
        description: 'Suplemento Proteico ',
        category: 'proteinas',
        price: 15000,
        stock: 30,
        img: '../proteina_2.png'
    },
    {
        id: '06',
        name: "Proteína Chocolate",
        category: 'proteinas',
        price: 13000,
        stock: 30,
        img: '../proteina_3.png'
    },
    {
        id: '07',
        name: "Proteína Vainilla",
        category: 'proteinas',
        price: 16000,
        stock: 30,
        img: '../proteina_4.png'
    },
    {
        id: '08',
        name: "Cafeína",
        description: "Cafeína",
        price: 15500,
        stock: 30,
        category: 'vitaminasyminerales',
        img: '../cafeina_1.png'
    },
    {
        id: '09',
        name: "Proteína Whey Body Advance",
        description: "Suplemento Proteico",
        price: 14800,
        stock: 30,
        category: 'proteinas',
        img: '../proteina_5.png'
    },
    {
        id: '010',
        name: "Whey Protein Cookies & Cream",
        description: "Suplemento Proteico",
        price: 15200,
        stock: 30,
        category: 'proteinas',
        img: '../ganador_de_peso_1.png'
    },
    {
        id: '011',
        name: "Proteína de Arveja Natural",
        description: "Suplemento Proteico",
        price: 12500,
        stock: 30,
        category: 'proteinas',
        img: '../ganador_de_peso_1.png'
    },

    // CREATINAS
    // {
    //     id: '012',
    //     name: "Creatina Monohidratada 300g",
    //     description: "Creatina",
    //     price: 9000,
    //     stock: 30,
    //     category: 'creatinas',
    //     img: '../ganador_de_peso_1.png'
    // },
    // {
    //     id: '013',
    //     name: "Creatina Micronizada 500g",
    //     description: "Creatina",
    //     price: 12500,
    //     stock: 30,
    //     category: 'creatinas',
    //     img: '../ganador_de_peso_1.png'
    // },

    // GANADOR DE PESO
    {
        id: '014',
        name: "Mass Gainer 3Kg Chocolate",
        description: 'Ganadores de peso',
        price: 18000,
        stock: 30,
        category: 'ganadoresdepeso',
        img: '../ganador_de_peso_1.png'
    },

    // VITAMINAS Y MINERALES
    {
        id: '015',
        name: "Multivitamínico A-Z",
        description: "Vitaminas y Minerales",
        price: 7500,
        stock: 30,
        category: 'vitaminasyminerales',
        img: '../ganador_de_peso_1.png'
    },
    {
        id: '016',
        name: "Vitamina D3 5000UI",
        description: "Vitaminas y Minerales",
        price: 5900,
        stock: 30,
        category: 'vitaminasyminerales',
        img: '../ganador_de_peso_1.png'
    },
    {
        id: '017',
        name: "Magnesio Quelado 120 caps",
        description: "Vitaminas y Minerales",
        price: 6800,
        stock: 30,
        category: 'vitaminasyminerales',
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

export const getOneProduct = (id) => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            //buscar prod con el id recibido por parametro
            let oneProduct = products.find((prod)=> prod.id === parseInt(id))
            resolve(oneProduct)
        },2000)
    })
}  