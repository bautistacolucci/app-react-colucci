import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";



const ItemDetailContainer = () => {
    const [listProduct, setListProdruct] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect (() => {
        const productsCollection = collection(db, "products")
        const consulta = getDocs(productsCollection)
        
        consulta
        .then(snapshot=>{
            const product = snapshot.docs.map(doc=>{
                return{
                    ...doc.data(),
                    id: doc.id
                }
            }) 
            setLoading(true);
            setListProdruct(product.find(item => item.id === id))
        })
        }, [id])

    return(
        <>
        {!loading && <CircularProgress  />}
        {loading && <ItemDetail listProduct={listProduct} />}
        </>   
    )
}

export default ItemDetailContainer