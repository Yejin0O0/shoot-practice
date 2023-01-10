import React from "react"
import ReactDOM from "react-dom/client"
// Redux
// import { Provider } from "react-redux"
// import store from "./store/store"

// Recoil
import { RecoilRoot } from "recoil"

import App from "./App"

// App에 어떤 store를 쓸 지 지정해줘야함
ReactDOM.createRoot (document.getElementById("root")).render(
    // Redux
    // Provider로 감싸주어야 store를 사용할 준비를 한다.
    // store 안에 어떤 store를 쓸지 넣어줘야함
    // <Provider store={store}><App /></Provider>

    //Recoil
    <RecoilRoot>
        <App/>
    </RecoilRoot>
)
