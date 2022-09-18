import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Cart = () => {
  const { cartList, totalPrice, removeProduct, cleanCart } = useCartContext();

  return (
    <div className="w-4/12 mx-auto">
      <div className="mt-8 divide-y divide-gray-200">
        <h1 className="text-center text-3xl font-semibold">Carrito</h1>
        <div className="flow-root mt-8">
          <ul role="list" className="my-6 divide-y divide-gray-200">
            {cartList.map((product) => (
              <li key={product.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{product.name}</h3>
                      <p className="ml-4">${product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Cantidad {product.quantity}</p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => removeProduct(product.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {cartList.length === 0 ? (
        <>
          <p className="text-center">Tu carriro esta vacio</p>
          <Link
            to={"/productos"}
            className="block text-center p-4 font-medium text-indigo-600 hover:text-indigo-500"
          >
            Ver productos
          </Link>
        </>
      ) : (
        <>
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <button
              onClick={cleanCart}
              className="my-0.5 text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Vaciar carrito
            </button>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${totalPrice()}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Envio e impuesto calculados en el checkout
            </p>
            <div className="mt-6">
              <Link
                to={"/checkout"}
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                o{" "}
                <span>
                  <Link
                    to={"/productos"}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continua comprando
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
