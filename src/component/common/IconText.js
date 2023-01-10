import React from "react"

import styled from "styled-components"

import Img from "../basic/Img"
import P from "../basic/P"
import { Div, FlexDiv } from "../basic/Div"

const FlexPointerDiv = styled(FlexDiv)`
    cursor: pointer;
`

const FlexBorderDiv = styled(FlexDiv)`
    border: ${props => props.border || "none"};
    border-radius: ${props => props.borderRadius || "none"};
`

const IconText = props => {
    const iconSrc = props.iconSrc
    const text = props.text

    return(
        <FlexPointerDiv onClick={props.onClick} margin="3px 0">
            <Div width="20px" height="20px"><Img src={iconSrc}/></Div>
            <Div margin="0 0 0 5px"><P fontWeight="400">{text}</P></Div>
        </FlexPointerDiv>
    )
}

const IconTextCircle = props => {
    const iconSrc = props.iconSrc
    const text = props.text

    return(
        <FlexPointerDiv onClick={props.onClick} direction="column" margin="3px 0">
                <FlexBorderDiv width="48px" height="48px" backgroundColor="#EEEEEE" margin="3px 0" borderRadius="50%"><Div width="50%" height="50%"><Img src={iconSrc}/></Div></FlexBorderDiv>
                <Div margin="2px"><P fontWeight="300">{text}</P></Div>
        </FlexPointerDiv>
    )
}

export {IconText, IconTextCircle}
