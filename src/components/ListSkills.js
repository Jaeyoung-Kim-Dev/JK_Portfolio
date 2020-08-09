/*
import {Accordion, Button, Card, Col, Row} from "react-bootstrap";
import React from "react";

const ListSkills = (skills) => (
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
)

export default ListSkills()*/
