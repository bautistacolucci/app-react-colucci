import ItemCount from './ItemCount'

const ItemDetail = ({listProduct}) => {

    return(
        <>
        <div className="ItemDetail">
            <img src={listProduct.image} alt={listProduct.name} />
            <h3>{listProduct.name}</h3>
            <p> {listProduct.description} </p>
            <p>${listProduct.price}</p>
            <div> <ItemCount stock={listProduct.stock} initial={1} /> </div>
        </div>
        </>
    )
};

export default ItemDetail