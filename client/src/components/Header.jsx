import React from "react";

import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                <Container>
                    <LinkContainer to="/">
                    <Navbar.Brand>jasoncrout</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/about-me">
                                <Nav.Link>about me</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/my-projects">
                                <Nav.Link>my projects</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact-me">
                                <Nav.Link href="#contactme">contact me</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;