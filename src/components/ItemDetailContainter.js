import ItemDetail from './ItemDetail'
import { useEffect, useLayoutEffect, useState } from 'react'
import { products } from '../assets/products'
import CircularProgress from '@mui/material/CircularProgress';


const ItemDetailContainer = () => {
    const [listProduct, setListProdruct] = useState({})
    const [loading, setLoading] = useState(false)

    const customPromise = (products) => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve(products)
            }, 2000)
        });}

    useEffect (() => (
        customPromise(products)
        .then(res => {
            setLoading(true)
            setListProdruct(res.find(item => item.id === 1))})
    ), [])

    return(
        <>
        {!loading && <CircularProgress  />}
        {loading && <ItemDetail listProduct={listProduct} />}
        </>   
    )
}

export default ItemDetailContainer