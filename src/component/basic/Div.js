import styled from "styled-components"

const Div = styled.div`
    width: ${props => props.width || "fit-content"};
    height: ${props => props.height || "fit-content"};
    margin: ${props => props.margin || "0px"};
    padding: ${props => props.padding || "0px"};
    background-color: ${props => props.backgroundColor || "inherit"};
    z-index: ${props => props.zIndex || "auto"};
`

const BorderDiv = styled(Div)`
    border: ${props => props.border || "none"};
    border-radius: ${props => props.borderRadius || "none"};
`

const PositionDiv = styled(Div)`
    position: ${props => props.position || "static"};
    top: ${props => props.top || ""};
    bottom: ${props => props.bottom || ""};
    right: ${props => props.right || ""};
    left: ${props => props.left || ""};
`

const PointerDiv = styled(Div)`
    cursor: pointer;
`

const FlexDiv = styled(Div)`
    display: flex;
    align-items: ${props => props.alignItems || "center"};
    justify-content: ${props => props.justifyContent || "center"};
    flex-direction: ${props => props.direction || "row"};
    flex-wrap: wrap;
`

export {Div, BorderDiv, PositionDiv, PointerDiv, FlexDiv}
