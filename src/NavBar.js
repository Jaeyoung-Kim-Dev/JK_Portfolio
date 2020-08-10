import React from 'react';
import {
    Navbar,
    Nav,
    Form,
    Button
} from "react-bootstrap";

const NavBar = _ => (
    <>
        <Navbar expand="md" bg="dark" variant="dark" sticky="top" collapseOnSelect="false">
            <Navbar.Brand href="#intro">Jaeyoung Kim</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#aboutme">About Me</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-success">Resume</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </>
)

export default NavBar;