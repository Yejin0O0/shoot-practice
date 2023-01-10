import React from "react"

import P from "../basic/P"
import { PositionDiv } from "../basic/Div"

const CountdownTimer = () => {

    return(
        <PositionDiv position="absolute" bottom="-15px" right="5px">
            <P fontSize="12px" color="red">{`3 : 00`}</P>
        </PositionDiv>
    )
}

export default CountdownTimer
