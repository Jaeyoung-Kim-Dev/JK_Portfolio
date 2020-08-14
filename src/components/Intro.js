import React from 'react';
import styled from "@emotion/styled/macro";
import ScaleBackground from "../effects/ScaleBackground";
import {Button} from "react-bootstrap";

const Intro = () => {

    const Orange = styled.span`color: orange;`
    const White = styled.span``
    const Gold = styled.span`color: gold;`
    const Green = styled.span`color: lightgreen;`
    const Form = styled.form`text-align: center;`

    const DivCentered = styled.div`
        font-size: 30px;
        text-align: left;
        max-width: 450px;
    `

    /*const Email = styled.a`
        color: black;        
        font-size: 20px;
        &:hover::after {
    transform: scale(1.2);
  }    
    `*/

    return (
        <>
            <DivCentered>
                <Orange>const </Orange>
                <Gold>My_Name</Gold>
                <White> = 'Jaeyoung Kim'</White>
                <Orange>;</Orange>

                <br/><br/>

                <p>I'm a full-stack web developer.</p>
                <p>......</p>

                <br/>

                <Orange>if </Orange>
                <White>(you_are_hiring)</White>

                <br/>

                <Orange> let </Orange>
                <Gold>Me </Gold>
                <White>= require('</White>
                <Green>Job</Green>
                <White>')</White>
                <Orange>;</Orange>

                <br/><br/>
            </DivCentered>
            <Form>
                <Button href="mailto:jaeyoung.kim.dev@gmail.com?subject=Mail from Jaeyoung's Website&body=Hello, Jaeyoung!" style={{margin: 40}}>Get in touch</Button>
            </Form>
            {/*<ScaleBackground color="deeppink" transitionDuration="350ms ease" style={{ textAlign: "center"}}>
            <Email href="mailto:jaeyoung.kim.dev@gmail.com?subject=Mail from Jaeyoung's Website&body=Hello, Jaeyoung!">Get in touch</Email>
            </ScaleBackground>*/}
        </>
    )
}

export default Intro;