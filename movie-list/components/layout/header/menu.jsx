'use client'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-black">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-white" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
                            <Nav.Link href="#home" className="navbar-link">About</Nav.Link>
                            <Nav.Link href="#home" className="navbar-link">Contacts</Nav.Link>
                            <Nav.Link href="#home" className="navbar-link">Wishlist</Nav.Link>

                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="text-white">
                                <NavDropdown.Item href="#action/3.1" className="hover:bg-gray-800 hover:text-white">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="hover:bg-gray-800 hover:text-white">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="hover:bg-gray-800 hover:text-white">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" className="hover:bg-gray-800 hover:text-white">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Menu;