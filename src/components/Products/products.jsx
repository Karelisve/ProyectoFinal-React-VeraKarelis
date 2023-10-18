const products = [
    {
        id: '1',
        nombre:'Maceta Watermelon',
        precio: 1500,
        categoria: 'macetas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/maceta-1.jpg',
        stock: '10'
    },
    {
        id: '2',
        nombre:'Maceta Intihuatana',
        precio: 2000,
        categoria: 'macetas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/maceta-2.jpg',
        stock: '5'
    },
    {
        id: '3',
        nombre:'Maceta Ceramic Starts',
        precio: 1500,
        categoria: 'macetas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/maceta-3.jpg',
        stock: '8'
    },
    {
        id: '4',
        nombre:'Maceta Plástico Light',
        precio: 1500,
        categoria: 'macetas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/maceta-4.jpg',
        stock: '10'
    },
    {
        id: '5',
        nombre:'Maceta Lata White',
        precio: 1500,
        categoria: 'macetas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/maceta-5.jpg',
        stock: '5'
    },
    {
        id: '6',
        nombre:'Maceta Animals',
        precio: 1500,
        categoria: 'macetas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/maceta-6.jpg',
        stock: '8'
    },
    {
        id: '7',
        nombre:'Maceta Rustic',
        precio: 1500,
        categoria: 'macetas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/maceta-7.jpg',
        stock: '5'
    },
    {
        id: '8',
        nombre:'Maceta Wood XL',
        precio: 1500,
        categoria: 'macetas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/maceta-8.jpg',
        stock: '4'
    },
    {
        id: '9',
        nombre:'Planta Cactus Cacti',
        precio: 2000,
        categoria: 'plantas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/planta-1.jpg',
        stock: '10'
    },
    {
        id: '10',
        nombre:'Planta Muscari',
        precio: 2000,
        categoria: 'plantas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/planta-2.jpg',
        stock: '5'
    },
    {
        id: '11',
        nombre:'Planta Nudicaule',
        precio: 3000,
        categoria: 'plantas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/planta-3.jpg',
        stock: '8'
    },
    {
        id: '12',
        nombre:'Planta Anthurium',
        precio: 2500,
        categoria: 'plantas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/planta-4.jpg',
        stock: '10'
    },
    {
        id: '13',
        nombre:'Planta Suculenta',
        precio: 1500,
        categoria: 'plantas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/planta-5.jpg',
        stock: '5'
    },
    {
        id: '14',
        nombre:'Planta Potus',
        precio: 1500,
        categoria: 'plantas',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/planta-6.jpg',
        stock: '8'
    },
    {
        id: '15',
        nombre:'Juego Green Life',
        precio: 4000,
        categoria: 'accesorios',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/herramienta-1.jpg',
        stock: '10'
    },
    {
        id: '16',
        nombre:'Regadera Butterfly',
        precio: 2900,
        categoria: 'accesorios',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/herramienta-2.jpg',
        stock: '5'
    },
    {
        id: '17',
        nombre:'Regadera King',
        precio: 4800,
        categoria: 'accesorios',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/herramienta-3.jpg',
        stock: '8'
    },
    {
        id: '18',
        nombre:'Juego Black twins',
        precio: 3400,
        categoria: 'accesorios',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/herramienta-4.jpg',
        stock: '10'
    },
    {
        id: '19',
        nombre:'Delantal Be my jean',
        precio: 5000,
        categoria: 'accesorios',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/herramienta-5.jpg',
        stock: '5'
    },
    {
        id: '20',
        nombre:'Juego Potus Wood',
        precio: 3500,
        categoria: 'accesorios',
        img: 'https://marvelous-crostata-8fdcd2.netlify.app/img/herramienta-6.jpg',
        stock: '5'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 400)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 400)
    })
}

export const getProductsByCategory = (productCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === productCategoria))
        }, 400)
    })
}