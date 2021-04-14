import React, {Fragment, Component} from "react"

export default class Body extends Component{
    componentDidMount(){
        console.log(document.body.clientWidth)
        console.log(document.body.clientHeight)
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