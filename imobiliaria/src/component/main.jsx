import React, {Component, Fragment} from "react"

import {Header, Body} from "./headerBody"
import Footer from "./footer"

import "../sass/index.scss"

export default class main extends Component{
   render(){
       return(
        <Fragment>
            <Header/>
            <Body/>
            <Footer/>
        </Fragment>
       )
   }  
}