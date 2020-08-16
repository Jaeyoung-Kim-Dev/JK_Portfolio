import React from 'react';
import {Button, Form, Nav, Navbar} from "react-bootstrap";

const NavBar = _ => (
    <Navbar expand="md" bg="dark" variant="dark" fixed="top" collapseOnSelect="false">
        <Navbar.Brand href="#intro">Jaeyoung Kim</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#aboutme">About Me</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Form inline>
                <a href={require(`../Resume(Jaeyoung_Kim).pdf`)} target="_blank" rel="noopener noreferrer" download>
                    <Button variant="outline-success">Resume</Button>
                </a>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)


export default NavBar;

