import React, {Fragment} from "react"
import ReactDom from "react-dom"

import "./sass/index.scss"
import HeaderBody from "./component/main"
import Footer from "./component/footer"

ReactDom.render(
    <Fragment>
        <HeaderBody/>
        <Footer/>
    </Fragment>
, document.querySelector("#root"))