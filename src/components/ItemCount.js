import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  /*     const [confirmed, setConfirmed] = useState(false) */

  /*   useEffect(() => {
          
    }, [confirmed]) */

  function sumar() {
    setContador(contador + 1);
  }
  function restar() {
    setContador(contador - 1);
  }
  /* function agregarAlCarrito() {
        setConfirmed(!confirmed)
    } */

  return (
    <div className="">
      <p className="ml-3 text-gray-500">Cantidad: {contador} unidad</p>
      <div className="m-2">
        <div className="flex justify-around">
          <button onClick={sumar} disabled={contador >= stock} className="w-1/2 m-1 p-1 border rounded hover:bg-indigo-600 hover:text-white">
            +
          </button>
          <button onClick={restar} disabled={contador <= 0}className="w-1/2 m-1 p-1 border rounded hover:bg-indigo-600 hover:text-white">
            -
          </button>
        </div>
        <button onClick={() => onAdd(contador)} className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700">Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
