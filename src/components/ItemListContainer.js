import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { products } from '../assets/products'

const ItemListContainer = ({greeting}) => {
    const [listProducts, setListProdructs] = useState([])

    const customPromise = (products) => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(products)
            }, 2000)
        });}

    useEffect (() => (
        customPromise(products)
        .then(data => setListProdructs(data))
    ), [])

    return (
        <>
        <section className='ItemListContainer'>
            <ItemList listProducts={listProducts}/>
        </section>
        </>
    )
}

export default ItemListContainer