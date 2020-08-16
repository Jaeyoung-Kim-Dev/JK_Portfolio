import React from 'react';
import {Button} from "react-bootstrap";
import {FaGithub, FaLinkedin, FaSmileWink, FaStackOverflow} from "react-icons/fa";
import {AiFillMail} from "react-icons/ai"
import styled from "@emotion/styled";

const Contact = () => {
    const StyledIcons = styled.a`
        font-size: 30px;
        text-align: center;     
        margin: 40px;   
    `;

    return (
        <div id="contact" style={{textAlign:"center"}}>
            <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="SectionTitle">Contact</h3>
            </div>
            <br/><br/>
                <div data-aos="fade-up" data-aos-delay="600">
            <form>
                <h2>Feel free to <Button href="mailto:jaeyoung.kim.dev@gmail.com?subject=Mail from Jaeyoung's Website&body=Hello, Jaeyoung!"><AiFillMail/> Email</Button> me <FaSmileWink/></h2>
            </form>
                </div>
            <br/><br/>
            <div data-aos="fade-up" data-aos-delay="800">
            <span><StyledIcons href="https://github.com/Jaeyoung-Kim-Dev"><FaGithub/></StyledIcons></span>
            <span><StyledIcons href="https://www.linkedin.com/in/jaeyoung-kim-dev/"><FaLinkedin/></StyledIcons></span>
            <span><StyledIcons
                href="https://stackoverflow.com/users/13967287/jaeyoung-kim"><FaStackOverflow/></StyledIcons></span>
            </div>

        </div>
    )
}

export default Contact;