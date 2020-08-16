import React, {useState, useEffect} from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
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
                <div
                    style={{display:"inline-block"}}
                    data-aos="zoom-out-up"
                    data-aos-delay = "400"
                >
                    <OverlayTrigger
                        key={key}
                        placement="top"
                        overlay={
                            <Tooltip>
                                <h5>{skill.lang}</h5>
                                <p className="text-left">{skill.detail}</p>
                            </Tooltip>
                        }
                    >
                        <Img src={require(`../icons/${skill.icon}.svg`)} style={{}}/>
                    </OverlayTrigger>
                </div>
            ))}

        </>
    )
}

export default listSkills;