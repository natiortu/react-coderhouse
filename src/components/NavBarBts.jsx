import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRIcons from './CartWidgetRIcons';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function NavBarBts() {
  const {cart}= useContext(CartContext)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
            <img alt='logo' src='../logo-shop.png' style={{width:'8rem'}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to='/categories/nuevos'>Nuevos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/categories/mas vendidos'>
                Más Vendidos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/categories/ofertas'>Ofertas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
         {cart.length > 0  && <NavLink to='/cart' style={{textDecoration:'none', color:'black'}}><CartWidgetRIcons/></NavLink>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBts;