import React, {useEffect} from 'react';
import './App.css';
import {Container} from 'react-bootstrap';
import styled from "@emotion/styled";
import AOS from "aos";
import "aos/dist/aos.css";
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

/*import FadeIn from "./effects/FadeIn";*/


function App() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    const Gap = styled.div`margin: 100px;`
    const ScrollPoint = styled.div`
        height: 10px;
        margin: 50px;        
    `

    return (
        <>
            <NavBar/>
            <Container className="App">
                <div id="intro"/>
                <ScrollPoint/>
                    <Intro/>

                <ScrollPoint id="aboutme"/>
                <Gap/>
                <AboutMe/>
                <ScrollPoint id="skills"/>
                <Skills/>
                <ScrollPoint id="projects"/>

                <Projects/>

                <ScrollPoint id="contact"/>
                <Contact/>
                <ScrollPoint/>
                <Footer/>
            </Container>
        </>
    );
}

export default App;
