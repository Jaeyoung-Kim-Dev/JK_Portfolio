import React, {useEffect, useState} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa/index";
import styled from "@emotion/styled/macro";
/*import {Hover, DisplayOver, BigTitle, SubTitle, Paragraph, Background} from "../effects/HoverDisplay"*/

const Projects = () => {
    const [myProjects, setMyProjects] = useState([]);

    useEffect(() => {
        fetch('./JSON/projects.json')
            .then(response => response.json())
            .then(result => setMyProjects(result));
    }, [])

    const Hover = styled.div`
        opacity: 0;
        transition: "opacity 350ms ease";
    `

    const DisplayOver = styled.div`
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        zIndex: 2;
        transition: background-color 350ms ease;
        backgroundColor: transparent;
        padding: 20px 20px 0 20px;
        boxSizing: border-box;
    `;

    const BigTitle = styled.h2`
        textTransform: uppercase;
        fontFamily: Helvetica;        
    `

    const SubTitle = styled.div`
        fontFamily: Helvetica;
        transform: translate3d(0,50px,0);
        transition: transform 350ms ease;
    `

    const Paragraph = styled.div`
        transform: translate3d(0,50px,0);
        transition: transform 350ms ease;
        color:gold;
    `

    const LinkIcons = styled.h4`
        transform: translate3d(0,50px,0);
        transition: transform 350ms ease;
        position: absolute;
        bottom: 20px;
        left: 50px;
    `

    const Background = styled.div`
        backgroundSize: cover;
        backgroundRepeat: no-repeat;
        color: #FFF;
        cursor: pointer;
        &:hover ${DisplayOver} {
            background-color: rgba(0,0,0,.9);
        };
        &:hover ${SubTitle}, &:hover ${Paragraph}, &:hover ${LinkIcons} {
            transform: translate3d(0,0,0);
        };
        &:hover ${Hover} {
            opacity: 1;
        };
    `

    const ProjectName = styled.h5`
        text-align: center;
        margin: 20px;
    `

    return (
        <div>
            <h3 className="SectionTitle">Projects</h3>
            <Row>
                {myProjects.map((project, key) => (
                    <Col xs={12} md={6} key={key}>
                        <Card style={{backgroundColor: "#1f324c", marginBottom: "25px"}}>
                            <ProjectName>{project.name}</ProjectName>
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
                                            <br/>
                                            <Paragraph>
                                                <Card.Text>
                                                    {project.lang}
                                                </Card.Text>
                                            </Paragraph>
                                        </Card.Body>
                                        <Card.Footer>
                                            <LinkIcons>
                                                <Card.Link href={`${project.git}`}><FaGithub/></Card.Link>
                                                <Card.Link href={`${project.link}`}><FaExternalLinkAlt/></Card.Link>
                                            </LinkIcons>
                                        </Card.Footer>
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


