import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import { Navbar } from 'react-bootstrap';

const NavBarSmall = () => {

    return (
        <div>
            <Navbar className="small-nav" bg="dark" variant="dark" >
                <Navbar.Brand className="small-nav-num" href="#home">(+603) 2712 3456</Navbar.Brand>
            </Navbar>
        </div>

    );
}

export default NavBarSmall;