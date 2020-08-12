import {Accordion, Button, Card, Col, Row} from "react-bootstrap";
import {FaReact} from "react-icons/fa/index";
import {BsFillPlusCircleFill} from "react-icons/bs/index";
import React from "react";

const listSkills = ({skills}) => (
    <Row>
        {skills.map((skill, key) => (
            <Col sm={12} md={6} lg={4} key={key}>
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
)

export default listSkills;