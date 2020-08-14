import React from 'react';
import {Button, Form, Nav, Navbar} from "react-bootstrap";

const NavBar = _ => {

    return (
        <Navbar expand="md" bg="dark" variant="dark" fixed="top" collapseOnSelect="false">
            <Navbar.Brand href="#intro">Jaeyoung Kim</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ml-auto">
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
    )
}

export default NavBar;

