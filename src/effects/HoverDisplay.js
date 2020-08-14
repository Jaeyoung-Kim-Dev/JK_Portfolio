import styled from "@emotion/styled/macro";

export function Hover() {
    styled.div({
        opacity: 0,
        transition: "opacity 350ms ease",
    });
}

export function DisplayOver() {
    styled.div({
        height: "100%",
        width: "100%",
        position: "absolute",
        left: "0",
        top: "0",
        zIndex: 2,
        transition: "background-color 350ms ease",
        backgroundColor: "transparent",
        padding: "20px 20px 0 20px",
        boxSizing: "border-box",
    });
}


export function BigTitle() {
    styled.h2({
        textTransform: "uppercase",
        fontFamily: "Helvetica",
    });
}

export function SubTitle() {
    styled.div({
        fontFamily: "Helvetica",
        transform: "translate3d(0,50px,0)",
        transition: "transform 350ms ease",
    });
}

export function Paragraph() {
    styled.div({
        transform: "translate3d(0,50px,0)",
        transition: "transform 350ms ease",
        color: "gold"
    });
}

export function Background() {
    styled.div({
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "#FFF",
        cursor: "pointer",
        [`:hover ${DisplayOver}`]: {
            backgroundColor: "rgba(0,0,0,.9)",
        },
        [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
            transform: "translate3d(0,0,0)",
        },
        [`:hover ${Hover}`]: {
            opacity: 1,
        },
    })
}
