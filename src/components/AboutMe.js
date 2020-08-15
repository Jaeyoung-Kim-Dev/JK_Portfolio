import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import styled from "@emotion/styled/macro";

const AboutMe = () => {

    const Gold = styled.a`color: gold;`

    return (
        <div id="aboutme">
            <h3 className="SectionTitle">About Me</h3>
            <Row className="justify-content-center">
                <Col xs={8} md={4} className="p-3">
                    <a href={"https://github.com/Jaeyoung-Kim-Dev"}>
                        <Image src={require("../photos/me.jpg")} thumbnail fluid="true"/>
                    </a>
                </Col>
                <Col xs={12} md={8} className="p-3">
                    <p>Hello, everyone!</p><br/>
                    <p>I’ve been in the IT field for more than 4 years in Canada. I'm knowledgeable at computer
                        operating
                        system and network, and how to troubleshoot them.</p>
                    <p>I always eager to learn new skills, so I’m majoring in Software Development diploma in <Gold
                        href="https://www.sait.ca/programs-and-courses/full-time-studies/diplomas/information-technology">Southern
                        Alberta Institute of Technology</Gold> in Calgary, AB, Canada now. This course is really
                        interesting, and I am really enjoying
                        it!</p>
                    <p>I will do my best and be a great software developer!</p><br/>
                    <p>PS. The course ends in April, 2021, and if you want to hire me, please feel free to contact me.
                        Thanks!</p>
                </Col>
            </Row>
        </div>
    )
}

export default AboutMe;