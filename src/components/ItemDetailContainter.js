import ItemDetail from './ItemDetail'
import customPromise from './customPromise'
import { useEffect, useState } from 'react'
import { products } from '../assets/products'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';


const ItemDetailContainer = () => {
    const [listProduct, setListProdruct] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect (() => {
        customPromise(products)
        .then(res => {
            setLoading(true);
            setListProdruct(res.find(item => item.id === parseInt(id)))}
            )
        }, [id])

    return(
        <>
        {!loading && <CircularProgress  />}
        {loading && <ItemDetail listProduct={listProduct} />}
        </>   
    )
}

export default ItemDetailContainer