import styled from "styled-components"

const P = styled.p`
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: ${props => props.padding || "0px"};
    font-size: ${props => props.fontSize || "15px"};
    font-weight: ${props => props.fontWeight || "300"};
    color: ${props => props.color || "black"};
`

export default P
