import React from "react"

import P from "../basic/P"
import { PositionDiv } from "../basic/Div"

const TestComponent = props => {
    const characterLimit = props.characterLimit

    return(
        <PositionDiv position="absolute" bottom="-15px" right="5px">
            <P fontSize="12px">{`23 / ${characterLimit}`}</P>
        </PositionDiv>
    )
}

export default TestComponent
