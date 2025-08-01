import "../css/Navbar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className='nav-container'>

            <NavLink to='/'>
                <img alt='logo' src='../urban_suplementos_green.png' className="logo" />
            </NavLink>


            <NavLink className="a-nav" to='/categories/todos'>Todos los productos</NavLink>
            <NavLink className="a-nav" to='/categories/ofertas'>Ofertas</NavLink>

            <div className="dropdown">
                <button className="btn-categorias">Categorías</button>
                <ul className="dropdown-menu">
                    <li><NavLink to='/categories/proteinas'>Proteínas</NavLink></li>
                    <li><NavLink to='/categories/ganadoresdepeso'>Ganadores de masa</NavLink></li>
                    <li><NavLink to='/categories/quemadoresdegrasa'>Quemadores de grasa</NavLink></li>
                    <li><NavLink to='/categories/creatinas'>Creatinas</NavLink></li>
                    <li><NavLink to='/categories/vitaminasyminerales'>Vitaminas y minerales</NavLink></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar