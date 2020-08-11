import React from 'react';
import {
    Form,
    Button,
} from "react-bootstrap";
import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa/index";

const Contact = () => (
    <div id="contact">
        <h3>Contact</h3>
        <Form action="mailto:jaeyoung.kim.dev@gmail.com" method="get" enctype="text/plain">
            <Button type="submit">Get in touch</Button>
        </Form>
        <a href="https://github.com/Jaeyoung-Kim-Dev"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/jaeyoung-kim-dev/"><FaLinkedin/></a>
    </div>
)

export default Contact;