import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import LoaderCard from "../utils/LoaderCard";

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
        {!loading && (
          <div className="bg-white">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <LoaderCard prop={"card"} />
                <LoaderCard prop={"card"}/>
                <LoaderCard prop={"card"}/>
                <LoaderCard prop={"card"}/>
                <LoaderCard prop={"card"} />
                <LoaderCard prop={"card"}/>
                <LoaderCard prop={"card"}/>
                <LoaderCard prop={"card"}/>
              </div>
            </div>
          </div>
        )}
        {loading && <ItemList listProducts={listProducts} />}
      </section>
    </>
  );
};

export default ItemListContainer;