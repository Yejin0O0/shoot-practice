import React from "react"

import styled from "styled-components"

import { PointerDiv, FlexDiv } from "../basic/Div"
import Img from "../basic/Img"

import { IconText } from "./IconText"
import MessageForm from "./MessageForm"

const SeeMoreContainer = styled(FlexDiv)`
    width: 48px;
    height: 48px;
    position: relative;
    border-radius: 50%;

    &:hover {
        //border:1px solid #C8C8C8;
        background-color: #EEEEEE;
    }
`

const SeeMoreBox = styled(FlexDiv)`
    width: 100px;
    padding: 5px;
    position: absolute;
    bottom: 0;
    left: -115px;
    flex-direction: column;
    background-color: #FFFFFF;
    border: 1px solid #C8C8C8;
    border-radius: 5px;
`

const SeeMore = props => {
    const parent = props.parent
    const parentInfo = props.parentInfo

    const clickShareEvent = () => {
        alert(`${parentInfo}이 url을 복사함`)
        console.log("click")
        // alert 대신에 나중에 url 복사하는 기능으로 바꿔야함
    }

    const moveModifyEvent = () => {
        alert(`타입이 ${parent}이고 정보가 ${parentInfo}인 것을 수정하는 페이지로 이동`)
        // alert 대신에 나중에 수정 page로 이동하는 기능으로 바꿔야함
    }
    const clickModifyEvent = () => {
        document.getElementById(`modify_${parent}_${parentInfo}`).style.display = "flex";
    }

    const deleteEvent = () => {
        alert(`타입이 ${parent}이고 정보가 ${parentInfo}인 것을 삭제함`)
        // alert 대신에 나중에 삭제하는 기능으로 바꿔야함
    }
    const clickDeleteEvent = () => {
        document.getElementById(`delete_${parent}_${parentInfo}`).style.display = "flex";
    }

    const clickAlarmEvent = () => {
        alert(`타입이 ${parent}이고 정보가 ${parentInfo}인 것을 알림 ${(props.alarm ? "꺼지게 하기" : "켜지게 하기")}`)
        // alert 대신에 나중에 알림 켜짐, 꺼짐하는 기능으로 바꿔야함
    }

    const clickReportEvent = () => {
        alert(`타입이 ${parent}이고 정보가 ${parentInfo}인 것을 신고 모달 띄워줌`)
        // alert 대신에 나중에 신고모달 띄워주는 기능으로 바꿔야함
    }

    return(
        <SeeMoreContainer>
            <PointerDiv width="60%" height="60%">
                <Img src="./assets/images/dots.svg"/>
            </PointerDiv>
            <SeeMoreBox>
                {
                    props.share && <IconText onClick={clickShareEvent} iconSrc="./assets/images/share.svg" text="공유하기"/>
                }
                {
                    props.modify && <IconText onClick={clickModifyEvent} iconSrc="./assets/images/edit.svg" text="수정하기"/>
                }
                {
                    props.delete && <IconText onClick={clickDeleteEvent} iconSrc="./assets/images/trash.svg" text="삭제하기"/>
                }
                {
                    props.alarm === true && <IconText onClick={clickAlarmEvent} iconSrc="./assets/images/bellOn.svg" text="알림켜짐"/> ||
                    props.alarm === false && <IconText onClick={clickAlarmEvent} iconSrc="./assets/images/bellOff.svg" text="알림꺼짐"/>
                }
                {
                    props.report && <IconText onClick={clickReportEvent} iconSrc="./assets/images/report.svg" text="신고하기"/>
                }
            </SeeMoreBox>
            <MessageForm id={`modify_${parent}_${parentInfo}`} message="수정 하시겠습니까?" clickEvent={moveModifyEvent}/>
            <MessageForm id={`delete_${parent}_${parentInfo}`} message="삭제 하시겠습니까?" clickEvent={deleteEvent}/>
        </SeeMoreContainer>
    )
}

export default SeeMore