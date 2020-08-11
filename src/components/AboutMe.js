import React from 'react';
import {
    Image,
    Row,
    Col
} from "react-bootstrap";

const AboutMe = () => (
    <div id="aboutme" className="MyMargin">
        <h3>About Me</h3>
        <Row>
            <Col xs={12} md={4}>
                <a href={"https://github.com/Jaeyoung-Kim-Dev"}>
                    <Image src={require("../photos/me.jpeg")} fluid thumbnail style={{maxWidth: 200}}/>
                </a>
            </Col>
            <Col xs={12} md={8}>
                <p>Hello, everyone!</p>
                <p>I’ve been in the IT field for more than 4 years in Canada. I'm knowledgeable at computer operating
                    system and network, and how to troubleshoot them.</p>
                <p>I always eager to learn new skills, so I’m majoring in Software Development diploma in Southern
                    Alberta Institute of Technology now. This course is really interesting, and I am really enjoying
                    it!</p>
                <p>I will learn and master all programing languages as much as I can in the college, and I will be a
                    great software developer! </p>
            </Col>

        </Row>

    </div>
)

export default AboutMe;