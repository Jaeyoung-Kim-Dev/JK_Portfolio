import React from 'react';
import {Button, Row, Col} from "react-bootstrap";
import {FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai"
import styled from "@emotion/styled";

const Contact = () => {
    const StyledIcons = styled.a`
        font-size: 30px;
        text-align: center;        
    `;

    return (
        <div id="contact">
            <h3 className="SectionTitle">Contact</h3>
            <form action="mailto:jaeyoung.kim.dev@gmail.com" method="get" encType="text/plain" style={{textAlign:"center"}}>
                <Button type="submit"><AiFillMail/> Email</Button>
            </form>
            <Row>
                <Col><StyledIcons href="https://github.com/Jaeyoung-Kim-Dev"><FaGithub/></StyledIcons></Col>
                <Col><StyledIcons href="https://www.linkedin.com/in/jaeyoung-kim-dev/"><FaLinkedin/></StyledIcons></Col>
                <Col><StyledIcons href="https://stackoverflow.com/users/13967287/jaeyoung-kim"><FaStackOverflow/></StyledIcons></Col>
            </Row>
        </div>
    )
}

export default Contact;