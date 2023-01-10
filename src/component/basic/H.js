import styled from "styled-components"

const H1 = styled.h1`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: ${props => props.padding || "0px"};
    font-size: ${props => props.fontSize || "15px"};
    font-weight ${props => props.fontWeight || "400"};
    color: ${props => props.color || "black"};
`

const H2 = styled.h2`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: ${props => props.padding || "0px"};
    font-size: ${props => props.fontSize || "15px"};
    font-weight ${props => props.fontWeight || "400"};
    color: ${props => props.color || "black"};
`

export {H1, H2}
