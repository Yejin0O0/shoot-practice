import React from "react"

import { Div, BorderDiv, PositionDiv, PointerDiv, FlexDiv } from "./component/basic/Div"
import { H1, H2 } from "./component/basic/H"
import P from "./component/basic/P"
import { Input, BorderInput } from "./component/basic/Input"
import Img from "./component/basic/Img"
import { Button, SmButton, MdButton, LgButton } from "./component/basic/Button"

import Hashtag from "./component/common/Hashtag"
import Profile from "./component/common/Profile"
import { IconText, IconTextCircle } from "./component/common/IconText"
import MessageForm from "./component/common/MessageForm"
import TextCounter from "./component/common/TextCounter"
import CountdownTimer from "./component/common/CountdownTimer"
import SeeMore from "./component/common/SeeMore"
import PostItem from "./component/common/PostItem"


const App = () => {
    // const [number, setNumber] = React.useState(0) // store를 사용하니까 사용 X

    const testObject1 = {
        profileImg:" ./assets/images/user.svg",
        email: "test1@naver.com"
    }
    const testObject2 = {
        profileImg: "./assets/images/user.svg",
        email: "test2@naver.com"
    }
    const testObject3 = {
        profileImg: "./assets/images/user.svg",
        email: "test3@naver.com"
    }
    const testObject4 = {
        profileImg: "./assets/images/user.svg",
        email: "test4@naver.com"
    }

    const testMessage = "test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2test modal2"

    const testFunction = () => {
        alert("test 완료")
    }

    const testPostItemObject = {
        post_idx: 100,
        post_title: "이러 저러한 제목",
        post_video: "~~~~",
        post_thumbnail: "./assets/images/postThumbnail.png",
        post_view_count: "129만회", //여기 나중에 우리 계산 필요
        category_name: "게임",
        email: "asdasdas@shoot.com",
        name: "asdasd",
        profile_img: "./assets/images/user.svg"
    }

    console.log(process.env.PUBLIC_URL)
    return (
        // store 사용으로 props도 없어짐
        <React.Fragment>
            <Div><P>----------------------------------------------------------</P></Div>
            {/* basic */}
            <FlexDiv>
                <Div><P>p테스트</P></Div>
                <Div><H1>h1테스트</H1></Div>
                <Div><H2>h2테스트</H2></Div>
            </FlexDiv>
            <PointerDiv width="100px" height="100px" margin="20px" padding="10px" backgroundColor="red">ㅎㅇ</PointerDiv>
            <Input type="text" placeholder="test" width="200px" height="20px" backgroundColor="black" fontSize="20px" color="gray" />
            <BorderInput type="text" value="test" width="100px" height="20px" border="1px solid black" borderRadius="5px" />
            <Div width="20px" height="20px"><Img src="./assets/images/user.svg"/></Div>
            <Button width="100px" height="20px" margin="5px" backgroundColor="green" border="1px solid red">test1</Button>
            <SmButton margin="5px" backgroundColor="yellow" ><P>test1</P></SmButton>
            <MdButton margin="5px" backgroundColor="gray" ><H1>test2</H1></MdButton>
            <LgButton margin="5px" backgroundColor="blue" ><H2>test3</H2></LgButton>
            <Div><P>----------------------------------------------------------</P></Div>
            {/* Profile */}
            <Profile profileObject={testObject1}/>
            <Profile profileObject={testObject2} name="test2"/>
            <Profile profileObject={testObject3} name="test3" email/>
            <Profile profileObject={testObject4} name="test4" isSubscribe={false}/>
            <Profile profileObject={testObject4} name="test4" isSubscribe={true}/>

            <Div><P>----------------------------------------------------------</P></Div>
            {/* Hashtag */}
            <Hashtag hashtag="test1"/>
            <Hashtag hashtag="test2" close/>

            <Div><P>----------------------------------------------------------</P></Div>
            {/* IconText */}
            <IconText iconSrc="./assets/images/report.svg" text="신고하기"/>
            <IconTextCircle iconSrc="./assets/images/like.svg" text="좋아요" />

            {/* MessageForm */}
            {/*<MessageForm message="test modal1"/>*/}
            {/*<MessageForm message={testMessage} clickEvent={testFunction}/>*/}

            <Div><P>----------------------------------------------------------</P></Div>
            {/* TextCounter */}
            <PositionDiv position="relative" margin="0 0 20px">
                <BorderInput type="text" placeholder="test" width="200px" height="20px" padding="5px 10px"  border="1px solid black" borderRadius="5px" />
                <TextCounter characterLimit={1000}/>
            </PositionDiv>

            <Div><P>----------------------------------------------------------</P></Div>
            {/* CountdownTimer */}
            <PositionDiv position="relative" margin="0 0 20px">
                <BorderInput type="text" placeholder="test" width="200px" height="20px" padding="5px 10px" border="1px solid black" borderRadius="5px" />
                <CountdownTimer/>
            </PositionDiv>

            <Div><P>----------------------------------------------------------</P></Div>
            {/* SeeMore */}
            {/*<Div margin="80px 80px200px 50px">*/}
            {/*    <SeeMore parent="post" parentInfo= "postIndex" share modify delete alarm={true} report/>*/}
            {/*</Div>*/}
            {/*<Div margin="50px 200px">*/}
            {/*    <SeeMore parent="channel" parentInfo="asdsdsa@shoot.com" modify alarm={false} report/>*/}
            {/*</Div>*/}

            <Div><P>----------------------------------------------------------</P></Div>
            {/* PostItem */}
            <FlexDiv width="100%">
                <PostItem postItemObject={testPostItemObject}/>
                <PostItem postItemObject={testPostItemObject}/>
                <PostItem postItemObject={testPostItemObject}/>
                <PostItem postItemObject={testPostItemObject}/>
                <PostItem postItemObject={testPostItemObject}/>
                <PostItem postItemObject={testPostItemObject}/>
                <PostItem postItemObject={testPostItemObject}/>
                <PostItem postItemObject={testPostItemObject}/>
                <PostItem postItemObject={testPostItemObject}/>
                <PostItem postItemObject={testPostItemObject}/>
            </FlexDiv>

            <Div><P>----------------------------------------------------------</P></Div>
            {/* Modal */}
        </React.Fragment>
    )
}

export default App  // 다른 파일에서 무엇을 import 할지 적어줘야함
