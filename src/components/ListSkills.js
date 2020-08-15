import React from "react";
import {OverlayTrigger, Popover, Tooltip, Col, Row, Button} from "react-bootstrap";
import styled from "@emotion/styled/macro";

const listSkills = ({skills}) => {
    const Img = styled.img`
        width: 130px;
        padding: 20px;
        margin: 20px;
        background-color: grey;
        border-radius: 20px
    `

    return (
        <>
            {skills.map((skill, key) => (
                <OverlayTrigger
                    key={key}
                    placement="top"
                    overlay={
                        <Tooltip>
                            <h5>{skill.lang}</h5>
                            <p>{skill.detail}</p>
                        </Tooltip>
                    }
                >
                    <Img src={require(`../icons/${skill.icon}.svg`)} style={{}}/>
                </OverlayTrigger>
            ))}
        </>
    )
}

export default listSkills;

/*
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
</Row>*/
