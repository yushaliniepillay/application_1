import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const NavBar = () => {


    return (

        <Navbar className="nav" bg="light" variant="light" sticky="top">
            <Navbar.Brand className="image" href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="50"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">HOME </Nav.Link>
                <Nav.Link href="#about">ABOUT US </Nav.Link>
                <NavDropdown title="SERVICE & SOLUTION" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">TECHNOLOGY SERVICE</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">TESTING SERVICE</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">CLOUD TECHNOLOGIES</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">CYBER SECURITY</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">DATA ANALYTICS AND AI</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#blog">BLOG </Nav.Link>
                <Nav.Link href="#events">EVENTS </Nav.Link>
                <Nav.Link href="#career">CAREER </Nav.Link>
                <Nav.Link href="#contactUs">CONTACT US</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavBar;