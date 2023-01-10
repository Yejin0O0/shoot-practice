import React from "react"

import styled from "styled-components"

import { Div, PositionDiv ,PointerDiv } from "../basic/Div"
import { H1 } from "../basic/H"
import Img from "../basic/Img"

import Profile from "./Profile"

const Article = styled.article`
    flex-grow: 1;
    flex-basis: 0%;
    padding: 10px 8px 25px;
    min-width: 250px;
`

const BorderPointerDiv = styled(PointerDiv)`
    border-radius: 5px;
`

const PostItem = props => {
    const { post_idx, post_title, post_thumbnail, email, name, profile_img, post_view_count } = props.postItemObject
    const profileObject = {
        profileImg: profile_img,
        email: email
    }

    const movePostDetailEvent = () => {
        alert(`번호가 ${post_idx}인 게시물 자세히 보기 페이지로 이동`)
    }
    return (
        <Article>
            <BorderPointerDiv onClick={movePostDetailEvent} width="100%">
                <Img src={post_thumbnail}/>
            </BorderPointerDiv>
            <Div width="100%">
                <PositionDiv position="relative" width="100%">
                    <PointerDiv><H1 fontSize="18px" onClick={movePostDetailEvent}>{post_title}</H1></PointerDiv>
                </PositionDiv>
                <Profile profileObject={profileObject} name={name} viewCount={post_view_count}/>
            </Div>
        </Article>
    )
}

export default PostItem
