import React from "react"

import { Div, PointerDiv, FlexDiv } from "../basic/Div"
import Img from "../basic/Img"
import P from "../basic/P"
import { MdButton } from "../basic/Button"

const Profile = props => {
    const {profileImg, email} = props.profileObject

    const setMainContent = () => {
        alert(`./email_ + ${email}`)
    }

    const setSubscribe = () => {
        alert("구독")
    }

    const removeSubscribe = () => {
        alert("구독취소")
    }

    return(
        <FlexDiv>
            <PointerDiv onClick={setMainContent} width="54px" height="54px">
                <Img src={profileImg}/>
            </PointerDiv>
            {
                props.name && 
                <Div margin="10px">
                    <PointerDiv onClick={setMainContent}><P fontWeight="700" fontSize={props.isSubscribe == undefined ? "18px" : "24px"}>{props.name}</P></PointerDiv>
                    {
                        props.email && <Div><P>{email}</P></Div>
                    }
                    {
                        props.viewCount && <Div><P>{props.viewCount}</P></Div>
                    }
                    {
                        props.isSubscribe === false && <MdButton onClick={setSubscribe} backgroundColor="#FF6B6B"><P color="#FFFFFF" fontSize="15px" fontWeight="400">구독</P></MdButton> ||
                        props.isSubscribe === true && <MdButton onClick={removeSubscribe} border="2px solid #FF6B6B" backgroundColor="#FFFFFF"><P color="#FF6B6B" fontSize="15px" fontWeight="400">구독중</P></MdButton>
                    }
                </Div>
            }
        </FlexDiv>
    )
}

export default Profile