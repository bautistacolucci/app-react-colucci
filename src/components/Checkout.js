import { toast } from "react-toastify";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Checkout = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postal, setPostal] = useState("");

  const { cartList, totalPrice } = useCartContext();

  const handleChangeNombre = (e) => {
    const input = e.target.value;
    setName(input);
  };
  const handleChangeApellido = (e) => {
    const input = e.target.value;
    setLastname(input);
  };
  const handleChangeAdress = (e) => {
    const input = e.target.value;
    setAdress(input);
  };
  const handleChangePhone = (e) => {
    const input = e.target.value;
    setPhone(input);
  };
  const handleChangeEmail = (e) => {
    const input = e.target.value;
    setEmail(input);
  };
  const handleChangePostal = (e) => {
    const input = e.target.value;
    setPostal(input);
  };

  const handleConfirm = () => {
    const order = {
      buyer: {
        name: name,
        lastname: lastname,
        address: adress,
        phone: phone,
        email: email,
        postal: postal,
      },
      date: serverTimestamp(),
      items: cartList.map((prod) => `id: ${prod.id} producto: ${prod.name}`),
      total: totalPrice(),
    };
    const ordersCollection = collection(db, "orders");
    const consulta = addDoc(ordersCollection, order);

    consulta
      .then((res) => {
        toast.success(`orden creada con exito ${res.id}`);
      })
      .catch((err) => {
        toast.error("Algo salió mal");
      });
  };
  return (
    <div className="w-4/12 mx-auto mt-8">
      <div className="overflow-hidden shadow sm:rounded-md">
        <div className="bg-white px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                onChange={handleChangeNombre}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Apellido
              </label>
              <input
                onChange={handleChangeApellido}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                onChange={handleChangeEmail}
                type="text"
                name="email-address"
                id="email-address"
                autoComplete="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Domicilio
              </label>
              <input
                onChange={handleChangeAdress}
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Celular
              </label>
              <input
                onChange={handleChangePhone}
                type="number"
                name="phone"
                id="phone"
                autoComplete="phone"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                Código postal
              </label>
              <input
                onChange={handleChangePostal}
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            onClick={handleConfirm}
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
