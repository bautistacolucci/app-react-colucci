import CartWidget from './CartWidget.js'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <header className="navbar">
            <div>
                <img src={logo} alt="logo kikiwai" className="logotipo" />
                <NavLink to="/">
                    <h1>Kikiwai Surf</h1>
                </NavLink>
            </div>
            <nav>
                <NavLink to="category/tablas">Tablas</NavLink>
                <NavLink to="category/neoprene">Neoprene</NavLink>
                <NavLink to="category/accesorios">Accesorios</NavLink>
                <NavLink to="/cart">
                    <CartWidget />
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar