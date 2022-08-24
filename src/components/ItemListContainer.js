import ItemList from './ItemList'
import customPromise from './customPromise'
import { useEffect, useState } from 'react'
import { products } from '../assets/products'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { getDoc, getDocs } from "firebase/firestore";

const productsCollection = collection(db, "productos")
//1 me traigo la referencia de la db
//2 me traigo una referencia de la colleccion
//3 teniendo la colleccion, me traigo los metodos de consulta

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