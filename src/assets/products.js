import longboard from './longboard.jpg'
import funboard from './funboard.jpg'
import shortboard from './shortboard.jpg'
import traje from './traje.jpg'
import parafina from './parafina.jpg'

export const products = [
    {
        id:1,
        name: "Longboard",
        category: "tablas",
        description: "Tabla larga, muy estable, ideal para aprender a surfear en olas faciles.",
        image: longboard,
        price: 79000,
        stock: 8,
    },
    {
        id:2,
        name: "Funboard",
        category: "tablas",
        description: "Tabla para un nivel intermedio, muy divertida para experimentar",
        image: funboard,
        price: 65000,
        stock: 4,
    },
    {
        id:3,
        name: "Shortboard",
        category: "tablas",
        description: "Tabla para nivel avanzado, de gran performance y alta velocidad",
        image: shortboard,
        price: 60000,
        stock: 6,
    },
    {
        id:4,
        name: "Traje de neoprene",
        category: "neoprene",
        description: "Traje de neoprene 2/3, para aguas templadas",
        image: traje,
        price: 56000,
        stock: 12,
    },
    {
        id:5,
        name: "Parafina Sticky Bumps",
        category: "accesorios",
        description: "Parafina para todo uso",
        image: parafina,
        price: 700,
        stock: 12,
    }
]