import {useState, useEffect} from "react"

function ItemCount({stock, initial, onAdd}) {
    const [contador, setContador] = useState(initial)
    const [confirmed, setConfirmed] = useState(false)

    useEffect(() => {
          
    }, [confirmed])

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
            <p>{contador}</p>
            <button onClick={sumar} disabled={contador>=stock}>Sumar</button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            <button onClick={restar} disabled={contador<=0}>Restar</button>
        </div>
    )
}

export default ItemCount