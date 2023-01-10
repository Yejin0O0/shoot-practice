import styled from "styled-components"

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: ${props => props.objectFit || "fill"};
`

export default Img
