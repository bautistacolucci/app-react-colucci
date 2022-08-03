import {useState} from "react"

function ItemCount({stock, initial, onAdd}) {
    const [contador, setContador] = useState(initial)
    const [confirmed, setConfirmed] = useState(false)
   
    function sumar() {
        setContador(contador + 1)
    }
    function restar() {
        setContador(contador - 1)
    }
    function agregarAlCarrito() {
        setConfirmed(!confirmed)
    }

    return(
        <div>
            <p>Pollera ANIMAL PRINT: {contador} </p>
            <button onClick={sumar}>Summar</button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            <button onClick={restar}>Restar</button>
        </div>
    )
}

export default ItemCount