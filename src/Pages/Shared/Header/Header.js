import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (

        < Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="https://i.ibb.co/wwSB8tR/tesla-space-nobokeh1920.png"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand as={Link} to="/home">SpaceX Car House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Home" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="home#banner">Banner</NavDropdown.Item>
                            <NavDropdown.Item href="home#inventories">Inventories</NavDropdown.Item>
                            <NavDropdown.Item href="home#comments">Comments</NavDropdown.Item>
                            <NavDropdown.Item href="home#statistics">Statistics</NavDropdown.Item>
                            <NavDropdown.Item href="home#footer">Footer</NavDropdown.Item>
                        </NavDropdown>
                        {
                            user && <>
                                <Nav.Link as={Link} to="/manageItems">Manage Inventories</Nav.Link>
                                <Nav.Link as={Link} to="/addinventory">Add Inventory</Nav.Link>
                                <Nav.Link as={Link} to="/myItems">My Items</Nav.Link>
                            </>
                        }
                    </Nav>
                    <Nav>

                        <Nav.Link as={Link} to="/chart">Charts</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                                :

                                <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;