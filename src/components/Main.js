import ItemListContainer from './ItemListContainer';
import ItemDetailContainer  from './ItemDetailContainer';
import Cart  from './Cart';
import Checkout  from './Checkout';

import { Routes, Route } from 'react-router-dom'

const Main = () => {

    return(
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
    )
}

export default Main