import { useCartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext()

    return (
        <>
        {cartList.map(prod =>
            <div className="card" key={prod.id} >
            <img src={prod.image} alt={prod.name} />
            <h3>{prod.name}</h3>
            <p>${prod.price}</p>
            <p>Cantidad: {prod.price}</p>
            <button onClick={() => removeProduct(prod.id)}>x</button>
          </div>
        )}
        {cartList.length === 0 ? 
            <p>Tu carriro esta vacio</p>
            :
            <>
            <p>Total: ${totalPrice()}</p>
            <button onClick={cleanCart} >Vaciar carrito</button>
            <Link to="/checkout">Siguiente paso</Link>
            </>
        }
        </>
    )
}

export default Cart