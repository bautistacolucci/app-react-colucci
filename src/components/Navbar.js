import CartWidget from './CartWidget.js'
import logo from "../assets/logo.png"

function Navbar() {
    return (
        <header className="navbar">
            <div>
                <img src={logo} alt="logo kikiwai" className="logotipo" />
                <h1>Kikiwai Surf</h1>
            </div>
            <nav>
                <a href="">Inicio</a>
                <a href="">Tablas</a>
                <a href="">Neoprene</a>
                <a href="">Accesorios</a>
                <CartWidget />
            </nav>
        </header>
    )
}

export default Navbar