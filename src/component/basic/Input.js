import styled from "styled-components"

const Input = styled.input`
    width: ${props => props.width || ""};
    height: ${props => props.height || ""};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    background-color: ${props => props.backgroundColor || "inherit"};
    font-size: ${props => props.fontSize || "15px"};
    color: ${props => props.color || "black"};
`

const BorderInput = styled(Input)`
    border: ${props => props.border || "none"};
    border-radius: ${props => props.borderRadius || "none"};
`

export {Input, BorderInput}
