import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";

//1 me traigo la referencia de la db
//2 me traigo una referencia de la colleccion
//3 teniendo la colleccion, me traigo los metodos de consulta

const ItemListContainer = () => {
    const [listProducts, setListProdructs] = useState([])
    const [loading, setLoading] = useState(false)
    const {category} = useParams()
    
    useEffect (() => {
        setLoading(false);

        const productsCollection = collection(db, "products")
        const consulta = getDocs(productsCollection)

        consulta
        .then(snapshot=>{
            const products = snapshot.docs.map(doc=>{
                return{
                    ...doc.data(),
                    id: doc.id
                }
            }) 
            setListProdructs(products)
            if (category){
                setLoading(true)
                setListProdructs(products.filter(prod => prod.category === category))
            } else {
                setLoading(true)
                setListProdructs(products)
            }
        })
        .catch(err=>{
            console.log(err)
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