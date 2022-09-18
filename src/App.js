import Navbar from './components/Navbar'
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from "./context/CartContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Main />
        {/* Footer */}
        <ToastContainer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;