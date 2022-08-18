import ItemListContainer from './ItemListContainer';
import ItemDetailContainer  from './ItemDetailContainter';
import Cart  from './Cart';
import { Routes, Route } from 'react-router-dom'

const Main = () => {

    return(
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
        </Routes>
    )
}

export default Main