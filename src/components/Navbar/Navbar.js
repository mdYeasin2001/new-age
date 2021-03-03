import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const HeaderNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className="fw-bold fs-2" href="#home">New <span className="text-danger">Age</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bold">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Economy</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Top Trending</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Corona Virus</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">International</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNavbar;