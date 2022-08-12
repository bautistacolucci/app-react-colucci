

const ItemDetail = ({listProduct}) => {

    console.log(listProduct);

    return(
        <>
        <div className="ItemDetail">{listProduct.description}</div>
        </>
    )
};

export default ItemDetail