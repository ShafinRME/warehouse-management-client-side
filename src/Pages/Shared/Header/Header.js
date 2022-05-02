import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (

        < Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="https://i.ibb.co/wwSB8tR/tesla-space-nobokeh1920.png"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="#home">SpaceX Car House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Inventories</Nav.Link>
                        <Nav.Link href="#pricing">Manage Inventories</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">My Items</Nav.Link>
                        <Nav.Link as={Link} to="/chart">Charts</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;