import React, {Fragment} from "react"
import ReactDom from "react-dom"

import "./sass/index.scss"
import Header from "./component/header"
import Body from "./component/body"
import Footer from "./component/footer"

ReactDom.render(
    <Fragment>
        <Header/>
        <Body/>
        <Footer/>
    </Fragment>
, document.querySelector("#container"))