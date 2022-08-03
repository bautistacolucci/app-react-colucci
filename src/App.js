
import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer";


function App() {
  return (
    <>
    <Navbar />
      <ItemListContainer greeting={"A continuacion se vera el contador provisorio"} />
    </>
  )
}

export default App;