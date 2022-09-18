import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { getDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const productsCollection = collection(db, "products");
    const referencia = doc(productsCollection, id);
    const consulta = getDoc(referencia);

    consulta
      .then((res) => {
        const product = {
          ...res.data(),
          id: id,
        };
        setLoading(true);
        setProduct(product);
      })
      .catch((err) => {
        toast.error("Error al cargar los productos");
      });
  }, [id]);

  return (
    <>
      {!loading && <p>cargando</p>}
      {loading && <ItemDetail product={product} />}
    </>
  );
};

export default ItemDetailContainer;
