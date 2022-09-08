import ItemList from './ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from 'react-toastify';

//1 me traigo la referencia de la db
//2 me traigo una referencia de la colleccion
//3 teniendo la colleccion, me traigo los metodos de consulta

const ItemListContainer = () => {
    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(false)
/*     const [useFiltro, setFiltro] = useState()
    const [useConsulta, setConsulta] = useState() */

    const {category} = useParams()
    
    useEffect (() => {
        setLoading(false);
        const productsCollection = collection(db, "products")
        let filtro
        let consulta

        if (category){
            /* setFiltro(query(productsCollection,where("category","==",category)))
            setConsulta(getDocs(useFiltro)) */
            filtro = query(productsCollection,where("category","==",category))
            consulta = getDocs(filtro) 
        } else {
            /* setConsulta(getDocs(productsCollection)) */
            consulta = getDocs(productsCollection)
        }

        consulta
        .then(res=>{
            const products = res.docs.map(doc=>{
                return{
                    ...doc.data(),
                    id: doc.id
                }
            }) 
            setListProducts(products)
            setLoading(true)
        })
        .catch(err=>{
            toast.error("Error al cargar los productos")
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