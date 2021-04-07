import React, {Component, Fragment} from "react"

import {Header, BodyHome} from "./headerBody"
import Footer from "./footer"

import "../sass/index.scss"

export default class main extends Component{
   render(){
       return(
        <Fragment>
            <Header/>
            <BodyHome/>
            <Footer/>
        </Fragment>
       )
   }  
}