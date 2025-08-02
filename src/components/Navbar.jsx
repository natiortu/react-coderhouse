import "../css/Navbar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Nav } from "react-bootstrap";

const Navbar = () => {

    const {cart} = useContext(CartContext);

    return (
        <nav className='nav-container'>

            <NavLink to='/'>
                <img alt='logo' src='../urban_suplementos_green.png' className="logo" />
            </NavLink>

            <NavLink className="a-nav" to='/'>Todos los productos</NavLink>
            <NavLink className="a-nav" to='/categories/ofertas'>Ofertas</NavLink>

            <Dropdown>
                <Dropdown.Toggle variant="" className="btn-categorias">
                    Categorías
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item as={NavLink} to="/categories/proteinas">Proteínas</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/categories/ganadoresdepeso">Ganadores de masa</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/categories/quemadoresdegrasa">Quemadores de grasa</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/categories/creatinas">Creatinas</Dropdown.Item>
                    <Dropdown.Item as={NavLink} to="/categories/vitaminasyminerales">Vitaminas y minerales</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            {/* render condicional */}
            { cart.length > 0 && <NavLink to='/cart' style={'text-decoration: none'} > <CartWidget /> </NavLink> }
        </nav>
    )
}

export default Navbar