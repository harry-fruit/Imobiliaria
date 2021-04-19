import React, {Component, Fragment} from "react"
import {buttonsOnClick, onPopState, onLoad} from "../script/ajax"
import {getFormData} from "../script/getWindow"


export class HeaderBody extends Component{


    componentDidMount(){

        //Dispara ajax no evento click
        const PREnavButtons = document.querySelectorAll("#nav")
        const navButtons = Array.from(PREnavButtons)

        navButtons.forEach( (elem, index) => buttonsOnClick(elem, index) )
        
        //Dispara ajax no evento popstate (voltar/avançar nas entry)
        window.onpopstate = e => onPopState(e)
        
        //Dispara ajax no evento ao carregar a pag e verifica qual é o caminho certo na url pra rediorecionar o user corretamente
        window.onload = onLoad()
        
        //Pega a DOM para o formulario
        navButtons.forEach( (elem, index) =>  elem.onclick = getFormData())
        window.onload = getFormData()
        window.onpopstate = e => getFormData()
    }
    

    render(){
        return (
            <Fragment>
            <header className={"header"}>
                <nav className={"navBar"} id={"navBar"}>
                    <a href="home"  id={"nav"} dest={"/home"} seletor={"Home"}>Home</a>
                    <a href="about" id={"nav"} dest={"/about"} seletor={"About"}>About us</a>
                    <a href="rent" id={"nav"} dest={"/rent"} seletor={"Rent"}>Rent</a>
                </nav>
                <div className={"secondRow"}>
                    <section className={"logo"}>
                        <img src="#" alt="#"/>
                    </section>
                    <section className={"number"}>
                        <p><span className={"contato"}>Get in touch</span></p>
                        <a href={"tel:+55 11 0000-0000"}><span className={"numero"}>(xx)xxxx-xxxx</span></a>
                    </section>
                </div>
            </header>
            </Fragment>
        )
    }
}


export default (HeaderBody)