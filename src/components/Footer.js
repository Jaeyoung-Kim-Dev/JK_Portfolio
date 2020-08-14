import React from "react";
import {FaRegCopyright} from "react-icons/fa"
import styled from "@emotion/styled";

const Footer = () => {

    const StyledFoot = styled.div`
        font-size: 13px;
        text-align: center;
        margin: 3em;
    `

    return(
        <StyledFoot>DEVELOPED BY JAEYOUNG KIM <FaRegCopyright/> 2020</StyledFoot>
    )
}

export default Footer