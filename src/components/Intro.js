import React from 'react';
import styled from "@emotion/styled/macro";
import {Button} from "react-bootstrap";
import {FaCanadianMapleLeaf, FaHandPointLeft, FaSmileWink} from "react-icons/fa";
import {GiHand} from "react-icons/gi";

const Intro = () => {

    const Form = styled.div`text-align: center;`
    const White = styled.span`font-size: 30px;`
    const Gold = styled.span`
        color: gold;
        font-size: 30px;
    `

    const Orange = styled.span`color: orange;`

    const Highlight = styled.span`
        font-size: 40px; 
        background-color: #2C4969;
        padding: 15px;
        border-radius: 15px;               
    `

    const Div = styled.div`        
        font-size: 20px;    
        max-width: 600px;            
        margin: 0 auto;
    `

    return (
        <Div>
            <div data-aos="fade-up">
                <Orange>import </Orange>
                <White>Hello <GiHand/> </White>
                <Orange>from </Orange>
                <White>Calgary <FaCanadianMapleLeaf/></White>
            </div>
            <br/><br/><br/>

            <div
                data-aos="fade-up"
                data-aos-delay="1000"
            >
                <Orange>const </Orange>
                <Gold>My_Name</Gold>
                <White> = </White>
            </div>

            <br/><br/>

            <Form
                data-aos="fade-up"
                data-aos-delay="1200"
            >
                <Highlight>Jaeyoung Kim</Highlight>
            </Form>

            <br/><br/>

            <div
                data-aos="fade-up"
                data-aos-delay="1400"
                id="test"
            >
                <Orange>const </Orange>
                <Gold>I_Build </Gold>
                <White>=</White>
            </div>

            <br/><br/>

            <Form data-aos="fade-up" data-aos-delay="1600">
                <Highlight>WEBSITES</Highlight>
            </Form>

            <br/><br/>

            <div style={{textAlign: "right"}}
                 data-aos="fade-up"
                 data-aos-duration="1800"
            >
                <Orange>if </Orange>
                ( You_are_HIRING )

                <br/>

                <Orange>let </Orange>
                <Gold>Me </Gold>
                = require
                <Gold> (JOB) </Gold>
                <White><FaSmileWink/></White>
            </div>
            <br/>
            <Form data-aos="fade-up" data-aos-duration="2000">
                <Button
                    href="mailto:jaeyoung.kim.dev@gmail.com?subject=Mail from Jaeyoung's Website&body=Hello, Jaeyoung!"
                    style={{margin: 40}}>Get in touch <FaHandPointLeft/></Button>
            </Form>
        </Div>
    )
}

export default Intro;