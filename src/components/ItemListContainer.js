import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";

import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barColors: {
    "0": "#fff",
    "1.0": "#fff"
  },
  shadowBlur: 5
});
const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { category } = useParams();

  useEffect(() => {
    setLoading(false);
    const productsCollection = collection(db, "products");
    let filtro;
    let consulta;

    if (category) {
      filtro = query(productsCollection, where("category", "==", category));
      consulta = getDocs(filtro);
    } else {
      consulta = getDocs(productsCollection);
    }

    consulta
      .then((res) => {
        const products = res.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        setListProducts(products);
        setLoading(true);
      })
      .catch((err) => {
        toast.error("Error al cargar los productos");
      });
  }, [category]);

  return (
    <>
      <section className="ItemListContainer">
        {!loading && <TopBarProgress />}
        {loading && <ItemList listProducts={listProducts} />}
      </section>
    </>
  );
};

export default ItemListContainer;
