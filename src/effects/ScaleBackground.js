import styled from "@emotion/styled/macro";
import React from "react";

const ScaleBackground = ({
                             color,
                             transitionDuration,
                             children,
                             style = {},
                             ...delegated
                         }) => {
    return (
        <Wrapper
            style={{
                '--color': color,
                '--transition-duration': transitionDuration,
                ...style,
            }}
            {...delegated}
        >
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.a`
  position: relative;
  display: inline-block;
  border-radius: 25px;
  padding-top : 15px;
  padding-bottom : 15px;
  padding-left : 30px;
  padding-right : 30px;
  &::after {    
    background-color: var(--color);
    transition: transform var(--transition-duration);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  &:hover::after {
    transform: scale(1.2);
  }
`;

export default ScaleBackground

/*
source: https://joshwcomeau.com/snippets/html/scale-with-pseudoelements
*/
