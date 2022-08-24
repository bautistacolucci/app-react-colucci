import ItemCount from './ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({listProduct}) => {

    const [added , setAdded] = useState(false)

    const { addToCart, cartList } = useCartContext();

    const onAdd = (quantity) => {
        addToCart(listProduct, quantity)
        setAdded(true)
    }

    console.log(cartList);

    return(
        <>
        <div className="ItemDetail">
            <img src={listProduct.image} alt={listProduct.name} />
            <h3>{listProduct.name}</h3>
            <p> {listProduct.description} </p>
            <p>${listProduct.price}</p>
            <div> 
            {
                added ? 
                <Link to='/cart' >
                    <button>Ir al carrito</button>
                </Link>
                :
                <ItemCount stock={listProduct.stock} initial={1} onAdd={onAdd} /> 
            }
            </div>
        </div>
        </>
    )
}

export default ItemDetail