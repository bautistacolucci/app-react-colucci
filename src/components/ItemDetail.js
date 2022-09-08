import ItemCount from './ItemCount'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from "../context/CartContext";


const ItemDetail = ({product}) => {
    const [added , setAdded] = useState(false);
    const { addToCart } = useCartContext();

    const onAdd = (quantity) => {
        addToCart(product, quantity)
        setAdded(true)
    }

    return(
        <>
        <div className="ItemDetail">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p> {product.description} </p>
            <p>${product.price}</p>
            <div> 
            {
                added ? 
                <Link to='/cart' >
                    <button>Ir al carrito</button>
                </Link>
                :
                <ItemCount stock={product.stock} initial={1} onAdd={onAdd} /> 
            }
            </div>
        </div>
        </>
    )
}

export default ItemDetail