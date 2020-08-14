import React from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import styled from "@emotion/styled";
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FadeIn from "./effects/FadeIn";


function App() {

    const ScrollPoint = styled.div`
        height: 10px;
        margin-top: 100px;
        margin-bottom: 50px;
    `

    return (
        <>
            <NavBar/>
            <Container className="App">
                <div id="intro"><br/></div>
                <ScrollPoint/>
                <FadeIn>
                    <Intro/>
                </FadeIn>
                <ScrollPoint id="aboutme"/>
                <AboutMe/>
                <ScrollPoint id="skills"/>
                <Skills/>
                <ScrollPoint id="projects"/>
                <Projects/>
                <ScrollPoint id="contact"/>
                <Contact/>
                <Footer/>
            </Container>
        </>
    );
}

export default App;
