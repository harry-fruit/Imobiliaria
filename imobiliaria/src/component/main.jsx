import React, {Component, Fragment} from "react"

import Header from "./header"
import Footer from "./footer"

import "../sass/index.scss"

export default class main extends Component{
   render(){
       return(
        <Fragment>
            <Footer/>
        </Fragment>
       )
   }  
}