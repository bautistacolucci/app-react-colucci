import {HStack, Spacer} from '@chakra-ui/react'
import logo from "../assets/logo.png"

function Navbar() {
    return (
        <header>
            <nav>
                <HStack>
                    <img src={logo} alt="logo kikiwai" width="60px" />
                    <h1>Kikiwai Surf</h1>
                        <Spacer />  
                        <HStack>              
                            <a href="">Inicio</a>
                            <a href="">Tablas</a>
                            <a href="">Neoprene</a>
                            <a href="">Accesorios</a>
                        </HStack>
                </HStack>
            </nav>
        </header>
    )
}

export default Navbar