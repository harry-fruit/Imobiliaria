import React, {Fragment, Component} from "react"
import {getWindow} from "../script/getWindow"


export default class Body extends Component{
    constructor(props){
        super(props)


        window.onload = getWindow()

    }

    render(){
        return (
            <Fragment>
                <main className={"bodyMain"}id={"bodyMain"}>
                </main>
            </Fragment>
        )
    }
}
