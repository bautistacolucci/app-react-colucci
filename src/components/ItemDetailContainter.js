import ItemDetail from './ItemDetail'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { getDoc, doc} from "firebase/firestore";



const ItemDetailContainer = () => {
    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect (() => {
        const productsCollection = collection(db, "products")
        const referencia = doc(productsCollection, id)
        const consulta = getDoc(referencia)

        consulta
        .then(res=>{
            setLoading(true);
            setListProduct(res.data())
        })
        .catch((err)=>{
            console.log(err);
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