import ItemCount from './ItemCount'

const Item = ({product}) => {

    return(
        <>
        <div className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <ItemCount stock={product.stock} initial={1} />
            <a href="...">Detalles</a>
        </div>
        </>
    )
}

export default Item