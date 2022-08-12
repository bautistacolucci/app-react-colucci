import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { products } from '../assets/products'
import CircularProgress from '@mui/material/CircularProgress';

const ItemListContainer = ({greeting}) => {
    const [listProducts, setListProdructs] = useState([])
    const [loading, setLoading] = useState(false)

    const customPromise = (products) => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(products)
            }, 2000)
        });}

    useEffect (() => (
        customPromise(products)
        .then(data => {
            setLoading(true)
            setListProdructs(data)})
    ), [])

    return (
        <>
        <section className='ItemListContainer'>
            {!loading && <CircularProgress  />}
            {loading && <ItemList listProducts={listProducts}/>}
        </section>
        </>
    )
}

export default ItemListContainer