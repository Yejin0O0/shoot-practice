import React from "react"

import styled from "styled-components"

import Img from "../basic/Img"
import P from "../basic/P"
import { Div, FlexDiv } from "../basic/Div"

const FlexBorderDiv = styled(FlexDiv)`
    border: ${props => props.border || "none"};
    border-radius: ${props => props.borderRadius || "none"};
`

const Hashtag = props => {
    const hashtag = props.hashtag

    const removeHashtag = () => {
        document.getElementById(`hash_${hashtag}`).remove();
    }

    return(
        <FlexBorderDiv id={`hash_${hashtag}`} height="18px" padding="5px" border="2px solid #C8C8C8" borderRadius="99px" align-items justify-content>
            <Div width="20px" height="20px"><Img src="./assets/images/hashtag.svg"/></Div>
            <Div margin="0 4px"><P fontWeight="400" color="#C8C8C8">{hashtag}</P></Div>
            {
                props.close &&
                <FlexDiv onClick={removeHashtag} width="inherit" height="inherit" margin="0 4px 0 10px"><Img src="./assets/images/close.svg"/></FlexDiv>
            }
        </FlexBorderDiv>
    )
}

export default Hashtag
