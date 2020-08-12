import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from "./NavBar";

function App() {
    return (
        <>
            <NavBar/>
            <Container className="App">
                <Intro/>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Contact/>
            </Container>
        </>
    );
}

export default App;
