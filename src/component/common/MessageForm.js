import React from "react"

import styled from "styled-components"

import { Div, FlexDiv } from "../basic/Div"
import P from "../basic/P"
import { MdButton } from "../basic/Button"

const MessageModal = styled(FlexDiv)`
    width: 360px;
    min-height: 180px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFFFFF;
    border: 1px solid #C8C8C8;
    border-radius: 5px;
    z-index: 99;
`

const ButtonBox = styled(FlexDiv)`
    position: absolute;
    bottom: 5px;
    right: 10px;
`

const MessageForm = props => {
    const message = props.message

    const CloseMessageFormEvent = () => {
        const MessageFormList = document.getElementsByClassName("MessageForm")
        const MessageFormListSize = MessageFormList.length

        MessageFormList[MessageFormListSize - 1].remove()
    }

    return(
        <MessageModal className="MessageForm">
            <Div margin="30px 0" padding="20px"><P>{message}</P></Div>
            <ButtonBox>
                <MdButton onClick={props.clickEvent || CloseMessageFormEvent} backgroundColor="#FF6B6B"><P color="#FFFFFF" fontWeight="400">확인</P></MdButton>
                {
                    props.clickEvent && <MdButton onClick={CloseMessageFormEvent} backgroundColor="#C8C8C8" margin="0 0 0 5px"><P color="#FFFFFF" fontWeight="400">닫기</P></MdButton>
                }
            </ButtonBox>
        </MessageModal>
    )
}

export default MessageForm