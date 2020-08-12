import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa/index";
import styled from "@emotion/styled/macro";

const Projects = () => {
    const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        fetch('./JSON/projects.json')
            .then(response => response.json())
            .then(result => setMyProjects(result));
    }, [])

    const Hover = styled.div({
        opacity: 0,
        transition: "opacity 350ms ease",
    });

    const DisplayOver = styled.div({
        height: "100%",
        left: "0",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: 2,
        transition: "background-color 350ms ease",
        backgroundColor: "transparent",
        padding: "20px 20px 0 20px",
        boxSizing: "border-box",
    });

    const BigTitle = styled.h2({
        textTransform: "uppercase",
        fontFamily: "Helvetica",
    });

    const SubTitle = styled.p({
        fontFamily: "Helvetica",
        transform: "translate3d(0,50px,0)",
        transition: "transform 350ms ease",
    });

    const Paragraph = styled.p({
        transform: "translate3d(0,50px,0)",
        transition: "transform 350ms ease",
        color:"gold"
    });

    const Background = styled.div({
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "#FFF",
        cursor: "pointer",
        backgroundImage: "url(/bg.jpg)",
        [`:hover ${DisplayOver}`]: {
            backgroundColor: "rgba(0,0,0,.9)",
        },
        [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
            transform: "translate3d(0,0,0)",
        },
        [`:hover ${Hover}`]: {
            opacity: 1,
        },
    });

    const LinkIcons = styled.h4({
        position: "absolute",
        bottom: "20px",
        left: "50px",
        size: "20px"
    });

    return (
        <div id="projects" className="MyMargin">
            <h3 className="SectionTitle">Projects</h3>
            <Row>
                {myProjects.map((project, key) => (
                    <Col xs={12} md={6} key={key}>
                        <h4 className="SubSectionTitle">{project.name}</h4>

                        <Card>
                            <Card.Img variant="top" src={require(`../photos/${project.pic}`)} fluid="true"/>
                            <Background>
                                <DisplayOver>
                                    <Hover>
                                        <Card.Body>
                                            <SubTitle>
                                                <Card.Text>
                                                    {project.desc}
                                                </Card.Text>
                                            </SubTitle>
                                            <Paragraph>
                                                <Card.Text>
                                                    {project.lang}
                                                </Card.Text>
                                            </Paragraph>
                                            <LinkIcons>
                                                <Card.Link href={`${project.git}`}><FaGithub/></Card.Link>
                                                <Card.Link href={`${project.link}`}><FaExternalLinkAlt/></Card.Link>
                                            </LinkIcons>
                                        </Card.Body>
                                    </Hover>
                                </DisplayOver>
                            </Background>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Projects;


/*
"name": "JK Sports Club",
    "desc": "This..",
    "lang": "React  Node.JS  Express  Bootstrap",
    "git": "https://github.com/Jaeyoung-Kim-Dev/chatwithtitanic",
    "link": "http://ec2-3-136-83-195.us-east-2.compute.amazonaws.com/"
    */



