import React from 'react';
import {Button, Form} from "react-bootstrap";

const Intro = () => (
    <div id="intro" className="MyMargin">
        <p>Hi, my name is</p>
        <h3>Jaeyoung Kim</h3>
        <h3>I'm a full-stack web developer.</h3>
        <h4>......</h4>
        <Form action="mailto:jaeyoung.kim.dev@gmail.com" method="get" enctype="text/plain">
            <Button type="submit">Get in touch</Button>
        </Form>
    </div>
)

export default Intro;