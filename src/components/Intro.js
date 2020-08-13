import React from 'react';
import styled from "@emotion/styled/macro";
import {Button, Form} from "react-bootstrap";

const Intro = () => {
    const Orange = styled.span({
        color: "orange",
    })

    const White = styled.span({
    })

    const Gold = styled.span({
        color: "gold",
    })

    const Green = styled.span({
        color: "lightgreen",
    })

    return (

        <div className="div-centered" style={{fontSize:30}}>
            <Orange>const </Orange>
            <Gold>My_Name</Gold>
            <White> = 'Jaeyoung Kim'</White>
            <Orange>;</Orange>

            <br/><br/>

            <h3>I'm a full-stack web developer.</h3>
            <h4>......</h4>

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

            <Form action="mailto:jaeyoung.kim.dev@gmail.com" method="get" encType="text/plain" style={{textAlign:"center"}}>
                <Button type="submit" style={{margin: 40}}>Get in touch</Button>
            </Form>
        </div>
    )
}

export default Intro;