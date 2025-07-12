import "../css/Navbar.css"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <nav className='nav-container'>

            <img alt='logo' src='../urban_suplementos_green.png' className="logo" />
            <a className="a-nav" href="#">Todos los productos</a>
            <a className="a-nav" href="#">Ofertas</a>

            <div className="dropdown">
                <button className="btn-categorias">Categorías</button>
                <ul className="dropdown-menu">
                    <li><a href="#">Proteínas</a></li>
                    <li><a href="#">Ganadores de masa</a></li>
                    <li><a href="#">Quemadores de grasa</a></li>
                    <li><a href="#">Creatinas</a></li>
                    <li><a href="#">Vitaminas y minerales</a></li>
                </ul>
            </div>
            <CartWidget />

        </nav>
    )
}

export default Navbar