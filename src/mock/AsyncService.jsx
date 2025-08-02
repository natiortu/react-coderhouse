const products = [
    {
        id: '01',
        name: 'Whey Protein True Made Ena',
        description: 'Suplemento deportivo instantáneo a base de proteínas concentradas de alto valor biológico, extraídas de suero de la leche. Sabor cookies & cream. Beneficios: Brinda una excelente calidad de proteínas y de rápida absorción durante el entrenamiento, garantizando una efectiva y rápida recuperación del tejido muscular evitando lesiones. Contribuye en el desarrollo y la definición de la masa muscular, así como ayuda a recuperar nutrientes y mejorar el rendimiento de la performance. Modo de uso: Mezclar una medida 31g (cuchara medidora) y agregar 200 cm3 de agua o leche (preferentemente descremada), agitar y consumir. Para lograr óptimos resultados tomarlo con agua fría. Ingesta diaria sugerida: 2 medidas (62g).',
        price: 500,
        stock: 15,
        category: 'proteinas',
        img: '../proteina_1.png'
    },
    {
        id: '02',
        name: 'Whey Protein Star Nutrition',
        description: 'Suplemento dietario en polvo dietético para preparar bebida a base de proteínas de suero. Compuesta por ultra concentrado, aislado e hidrolizado de suero de máxima pureza, obtenidos por métodos no agresivos que garantizan la calidad y estabilidad del producto. Su agradable sabor y alta disolución lo convierten en la opción inteligente a la hora de agregar proteínas de alto valor biológico a nuestra dieta, o como parte de un programa nutricional deportivo. Modo de uso: Mezclar 1 medida de Platinum Whey Protein en 200cm3 de agua o leche descremada. Consumir 1 hora antes del entrenamiento, luego del mismo o simplemente en cualquier momento del día para alcanzar tus necesidades proteicas.',
        price: 600,
        stock: 10,
        category: 'proteinas',
        img: 'https://acdn-us.mitiendanube.com/stores/003/189/220/products/20-off-en-28-f44b888263cd5fa82617399144040174-1024-1024.png'
    },
    {
        id: '03',
        name: 'Creatina Monohidrato HTN',
        description: 'a Creatina es una sustancia ampliamente utilizada por deportistas debido a su capacidad para liberar más energía, fortaleciendo la fuerza muscular y proporcionando mayor resistencia durante períodos más prolongados, así como una recuperación más rápida y eficaz después del entrenamiento. El consumo continuado de creatina puede contribuir al incremento de masa muscular derivado del entrenamiento, ya sea estimulando la síntesis de proteínas musculares o permitiendo la realización de entrenamientos de mayor intensidad. Creatine micronized HTN se caracteriza por su alta calidad y pureza. Se elabora a partir de Creatina Monohidratada Micronizada, cuyas partículas de tamaño microscópico favorecen una óptima absorción por el organismo.',
        price: 1000,
        stock: 9,
        category: 'creatinas',
        img: '../creatina_1.png'
    }
    ,
    {
        id: '04',
        name: 'Mutant Mass Star Nutrition',
        description: 'Mutant Mass es un ganador de peso con alto contenido de proteínas. Aumentar el volumen muscular requiere entrenamiento duro y una adecuada nutrición. Cada cuerpo es diferente y algunos requieren de un extra para lograr su objetivo. Mutant Mass aporta esa cantidad extra de proteínas, carbohidratos, minerales, vitaminas y fibras específicas para cumplir tus metas.',
        price: 1500,
        stock: 30,
        category: 'ganadoresdepeso',
        img: '../ganador_de_peso_1.png'
    },
    {
        id: '05',
        name: "Xtrenght Advanced Whey Protein",
        description: 'Con Xtrenght Nutrition Advanced Whey Protein sabor banana, disfruta de un suplemento en polvo de alta calidad que te ayudará a alcanzar tus objetivos nutricionales y deportivos. Este producto de 907g contiene proteínas aisladas de suero ultrapura, proteína hidrolizada de suero y concentrado de proteína de suero de leche, que te proporcionarán 24g de proteínas por porción para apoyar el crecimiento y mantenimiento de tus músculos. Además, está enriquecido con vitamina C, óxido de zinc, tripicolinato de cromo y otros ingredientes esenciales para mantener una buena salud y mejorar tu rendimiento deportivo.',
        category: 'proteinas',
        price: 15000,
        stock: 30,
        img: '../proteina_2.png'
    },
    {
        id: '06',
        name: "Whey Protein Star Nutrition Doy Pack",
        description: 'Suplemento Dietario a base de Ultra Concentrado de proteínas de Suero Lacteo. Fue desarrollada por nuestros investigadores para satisfacer las necesidades de los atletas, contiene todos los aminoácidos esenciales y no esenciales necesarios para construir la masa muscular luego del entrenamiento intenso de corta y larga duración.Posee la más pura proteína de suero microfiltrada a baja temperatura y ultrafiltrado para asegurar la más alta calidad, además posee L-Glutamina y Aminoácidos de cadena Ramificada (BCAAs), posee todas las fracciones de la proteína de suero como Beta Lacto globulina, alpha lacto albumina, glicomacropeptidos, inmunoglobulina, lactoferina, serum albúmina y lactoperioxidasa.',
        category: 'proteinas',
        price: 13000,
        stock: 30,
        img: '../proteina_3.png'
    },
    {
        id: '07',
        name: "Whey Protein Ena 100% Sport Performance",
        description: 'La suplementación con proteínas de suero (Whey protein) es ideal para complementar tus desayunos, tus meriendas y tu snack recovery post entreno. Los 20 gs de proteínas por porción de 100% WHEY la posicionan como una gran opción para toda la población físicamente activa, tanto hombres como mujeres. La calidad de 100% WHEY es ideal para favorecer la síntesis de masa muscular ya que es rica en aminoácidos ramificados conocidos como BCAA. Colocar una medida (scoop) en un shaker ENA y agregar 200cm3 de agua o leche (preferentemente descremada), agitar y consumir en tus desayunos o meriendas.',
        category: 'proteinas',
        price: 16000,
        stock: 30,
        img: '../proteina_4.png'
    },
    {
        id: '08',
        name: "Cafeína Star Nutrition",
        description: "Suplemento dietario a base de Cafeína en cápsula. Libre de gluten. Sin TACC. Apto Vegano.",
        price: 15500,
        stock: 30,
        category: 'vitaminasyminerales',
        img: '../cafeina_1.png'
    },
    {
        id: '09',
        name: "Whey Protein 910 g Body Advance",
        description: "Marca indiscutible y elegida por los referentes del fisicoculturismo, atletas ultra exigentes para llegar a sus objetivos y se vean realmente reflejados en la tarima. Todos los fisicoculturistas, levantadores de pesas olímpicos y atletas en general, siempre acompañan su entrenamiento con una dieta alta en proteínas para maximizar sus resultados como también estar al 100% desde el punto de vista de la salud, entrenamiento y bienestar. La proteína de suero de leche sin duda acompaña al atleta para su máxima recuperación y nutrición. Si estás buscando un suplemento de calidad y que se ajuste a tus necesidades este producto es el indicado. La proteína de suero de contiene en su fórmula todos los beneficios de la proteína de suero (WPC = Whey Protein Concentrate) al 80%. Si esto es poco este producto de increíble sabor y disolución con tan solo una cuchara.",
        price: 14800,
        stock: 30,
        category: 'proteinas',
        img: '../proteina_5.png'
    },  

    {
        id: '014',
        name: "Quemador Hydroxy Max Night Ena",
        description: 'Potente termogénico que ayuda al descenso de peso. A base de garcinia, taurina, té verde, naranjas amargas, carnitina, tirosina, guaraná, ginseng siberiano y uva ursi, una combinación única que ofrece una experiencia excepcional. Hydroxy Max es un poderoso termogénico que ayuda a aumentar la tasa metabólica. Tiene todo lo necesario para entrenar con intensidad y esculpir el cuerpo deseado.',
        price: 18500,
        stock: 15,
        category: 'quemadoresdegrasa',
        img: '../quemador.png'
    },
    {
        id: '015',
        name: "Multivitamínico",
        description: "Suplemento Dietario a Base de Vitaminas y Minerales en comprimidos. Libre de Gluten. Sin TACC. Supera el valor diario de Vitaminas A, C, D, E, B1, B2, B3, B6, B12, Niacina, Ácido Pantoténico, Cobre. Suplementa dietas insuficientes, consulte a su médico y/o nutricionista. No consumir en caso de embarazo o lactancia. Consumir este producto de acuerdo a las recomendaciones de ingesta diaria establecidas en el rótulo. El consumo de suplementos dietarios no reemplaza una dieta variada y equilibrada. Este producto está indicado para personas que realizan ejercicio físico. ",
        price: 7500,
        stock: 30,
        category: 'vitaminasyminerales',
        img: '../multivitaminico_1.png'
    },
    {
        id: '016',
        name: "Vitamina D",
        description: "Potencia tu bienestar con nuestra fórmula exclusiva de Vitamina D. Cada comprimido está diseñado para ofrecer este nutriente esencial, promoviendo la salud ósea, muscular y general.",
        price: 5900,
        stock: 30,
        category: 'vitaminasyminerales',
        img: '../vitamina_d.png'
    },
    {
        id: '017',
        name: "Citrato de Magnesio",
        description: "El Citrato de Magnesio es un suplemento en polvo de alta calidad que ayuda a reducir la fatiga mental, aumentar la alcalinidad corporal, mejorar el sueño y disminuir el estrés. Contribuye al fortalecimiento de huesos y músculos. Es recomendable para personas con deficiencias de este mineral esencial. Se aconseja la consulta con un profesional de la salud para un uso adecuado. La dosis sugerida es de 1 gramo por toma, dos veces al día, disuelto en agua o jugo. El producto viene en un envase sellado con número de lote y fecha de caducidad.",
        price: 6800,
        stock: 30,
        category: 'ofertas',
        img: '../citrato_de_magnesio.png'
    }
]

//crear una promesa que retorne el array de productos

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
            let oneProduct = products.find((prod)=> prod.id === id)
            resolve(oneProduct)
        },2000)
    })
}  