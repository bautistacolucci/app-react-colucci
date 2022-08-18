import ItemList from './ItemList'
import customPromise from './customPromise'
import { useEffect, useState } from 'react'
import { products } from '../assets/products'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

const ItemListContainer = () => {
    const [listProducts, setListProdructs] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()

    useEffect (() => {
        setLoading(false);
        customPromise(products)
        .then(res => {
            if (category){
                setLoading(true)
                setListProdructs(res.filter(prod => prod.category === category))
            } else {
                setLoading(true)
                setListProdructs(res)
            }
            })
    }, [category])

    return (
        <>
        <section className='ItemListContainer'>
            {!loading && <CircularProgress />}
            {loading && <ItemList listProducts={listProducts}/>}
        </section>
        </>
    )
}

export default ItemListContainer