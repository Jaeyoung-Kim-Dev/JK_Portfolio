import React from 'react';
import styled from "@emotion/styled/macro";
import {Button} from "react-bootstrap";
import {FaCanadianMapleLeaf, FaSmileWink, FaHandPointLeft} from "react-icons/fa";
import {GiHand} from "react-icons/gi";

const Intro = () => {



    const Form = styled.div`text-align: center;`
    const White = styled.span`font-size: 30px;`
    const Gold = styled.span`color: gold;
    font-size: 30px;
    `

    const Green = styled.span`color: lightgreen;`
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

    /*const Email = styled.a`
        color: black;        
        font-size: 20px;
        &:hover::after {
    transform: scale(1.2);
  }    
    `*/

    return (
        <div>
            <Div>
                <Orange>import </Orange>
                <White>Hi <GiHand/> </White>
                <Orange>from </Orange>
                <White>Calgary <FaCanadianMapleLeaf/></White>
                <br/><br/><br/>

                <Orange>const </Orange>
                <Gold>My_Name</Gold>
                <White> = </White>
                <br/><br/>
                <Form>
                    <Highlight>Jaeyoung Kim</Highlight>
                </Form>

                <br/><br/>

                <Orange>const </Orange>
                <Gold>I_Build </Gold>
                <White>=</White>
                <br/><br/>
                <Form>
                    <Highlight>WEBSITES</Highlight>
                </Form>

                <br/><br/>

                <div style={{textAlign: "right"}}>
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
            </Div>
            <Form>
                <Button
                    href="mailto:jaeyoung.kim.dev@gmail.com?subject=Mail from Jaeyoung's Website&body=Hello, Jaeyoung!"
                    style={{margin: 40}}>Get in touch <FaHandPointLeft/></Button>
            </Form>
            {/*<ScaleBackground color="deeppink" transitionDuration="350ms ease" style={{ textAlign: "center"}}>
            <Email href="mailto:jaeyoung.kim.dev@gmail.com?subject=Mail from Jaeyoung's Website&body=Hello, Jaeyoung!">Get in touch</Email>
            </ScaleBackground>*/}
        </div>
    )
}

export default Intro;