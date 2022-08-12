import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer  from './components/ItemDetailContainter';

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting={""} />
    <ItemDetailContainer />
    </>
  )
}

export default App;