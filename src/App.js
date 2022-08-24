import Navbar from './components/Navbar'
import Main from './components/Main'
import { BrowserRouter } from 'react-router-dom'
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Main />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;