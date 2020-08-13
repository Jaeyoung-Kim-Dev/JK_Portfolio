import React from 'react';
import {Button} from "react-bootstrap";
import {FaGithub, FaLinkedin, FaStackOverflow} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai"
import styled from "@emotion/styled";

const Contact = () => {
    const LinkIcons = styled.a({
        bottom: "20px",
        left: "50px",
    });

    return (
        <div id="contact">
            <h3 className="SectionTitle">Contact</h3>
            <form action="mailto:jaeyoung.kim.dev@gmail.com" method="get" encType="text/plain" style={{textAlign:"center"}}>
                <Button type="submit"><AiFillMail/> Email</Button>
            </form>
            <LinkIcons href="https://github.com/Jaeyoung-Kim-Dev"><FaGithub/></LinkIcons>
            <LinkIcons href="https://www.linkedin.com/in/jaeyoung-kim-dev/"><FaLinkedin/></LinkIcons>
            <LinkIcons href="https://stackoverflow.com/users/13967287/jaeyoung-kim"><FaStackOverflow/></LinkIcons>
        </div>
    )
}

export default Contact;