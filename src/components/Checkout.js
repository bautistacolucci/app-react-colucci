import { toast } from "react-toastify"
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp} from "firebase/firestore";

const Checkout = () => {
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [adress, setAdress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const { cartList, totalPrice } = useCartContext()

    const handleChangeNombre = (e) => {
        const input = e.target.value
        setName(input)
    }
    const handleChangeApellido = (e) => {
        const input = e.target.value
        setLastname(input)
    }
    const handleChangeAdress = (e) => {
        const input = e.target.value
        setAdress(input)
    }
    const handleChangePhone = (e) => {
        const input = e.target.value
        setPhone(input)
    }
    const handleChangeEmail = (e) => {
        const input = e.target.value
        setEmail(input)
    }
    console.log(cartList.length);

    const handleConfirm = () => {
        const order = {
            buyer: {
                name: name,
                lastname: lastname,
                address: adress,
                phone: phone,
                email: email,
            },
            date: serverTimestamp(),
            items: cartList.map(prod =>`id: ${prod.id} producto: ${prod.name}`),
            total: totalPrice(),
        }
    const ordersCollection = collection(db, "orders")  
    const consulta = addDoc(ordersCollection, order)
        
    consulta
    .then((res)=>{
        toast.success(`orden creada con exito ${res.id}`)
    })
    .catch(err =>{
        toast.error("Error al cargar los productos")
    })
    }
 
    return ( 
        <>
        <input type="text" placeholder="nombre" onChange={handleChangeNombre}/>
        <input type="text" placeholder="apellido" onChange={handleChangeApellido}/>
        <input type="text" placeholder="direccion" onChange={handleChangeAdress}/>
        <input type="number" placeholder="celular" onChange={handleChangePhone}/>
        <input type="mail" placeholder="email" onChange={handleChangeEmail}/>
        <button onClick={handleConfirm}>enviar</button>
        </>
    )
}

export default Checkout
