import React, {useState, useEffect} from 'react';
import {
    Accordion,
    Card,
    Button,
    Row,
    Col
} from 'react-bootstrap';
import {BsFillPlusCircleFill} from "react-icons/bs";
import {FaReact} from "react-icons/fa";
import ListSkills from "./ListSkills";

const Skills = () => {
    const [skills, setSkills] = useState([]);

    const reactIcon = FaReact;

    /*const listSkills11 = () => (
        <Accordion>
            {skills.map((skill, key) => (
                <Card key={key} bg="dark">
                    <Card.Header>
                        <Row>
                            <Col>icon</Col>
                            <Col>{skill.lang}</Col>
                            <Col>
                                <Accordion.Toggle as={Button} variant="link bg-dark text-white" eventKey={key + 1}>
                                    Detail
                                </Accordion.Toggle>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Accordion.Collapse eventKey={key + 1}>
                        <Card.Body>{skill.detail}</Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
    )*/

    useEffect(() => {
        fetch('./skillList/learned.json')
            .then(response => response.json())
            .then(result => setSkills(result));
    }, []);

    return (
        <>
            <h3>Skills</h3>
            <h4>What I am confident</h4>
            <Row>
                {skills.map((skill, key, id) => (
                    <Col xl={12} md={6} lg={4} key={key}>
                        <Accordion>
                            <Card bg="dark">
                                <Card.Header>
                                    <Row>
                                        <Col><FaReact/></Col>
                                        <Col>{skill.lang}</Col>
                                        <Col>
                                            <Accordion.Toggle as={Button} variant="link bg-dark text-white"
                                                              eventKey={key + 1}>
                                                <BsFillPlusCircleFill/>
                                            </Accordion.Toggle>
                                        </Col>
                                    </Row>
                                </Card.Header>
                                <Accordion.Collapse eventKey={key + 1}>
                                    <Card.Body>{skill.detail}</Card.Body>
                                </Accordion.Collapse>
                            </Card>

                        </Accordion>
                    </Col>))}
            </Row>
            {/*<ListSkills skills={skills}/>*/}


            <h4>What I learned</h4>

            <h4>What I want to learn soon</h4>
        </>
    )
}

export default Skills;