import ItemListContainer from './ItemListContainer';
import ItemDetailContainer  from './ItemDetailContainter';
import { Routes, Route } from 'react-router-dom'

const Main = () => {

    return(
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
        </Routes>
    )
}

export default Main