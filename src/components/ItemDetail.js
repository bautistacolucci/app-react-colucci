import ItemCount from "../utils/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCartContext();

  const onAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <div className="w-6/12 mx-auto mt-8 p-5 border-gray-200 border rounded">
      <img src={product.image} alt={product.name} className="mx-auto rounded" />
      <div className="my-6 text-center">
        <h3 className="p-2 text-3xl font-semibold">{product.name}</h3>
        <p className="p-2"> {product.description} </p>
      </div>
      <p className="ml-3">${product.price}</p>
      <div>
        {added ? (
          <Link to="/cart">
            <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700">
              Ir al carrito
            </button>
          </Link>
        ) : (
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
