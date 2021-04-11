import React, {Component, Fragment} from "react"
import axios from "axios"

import "../sass/index.scss"

export class HeaderBody extends Component{
    //ajax

    state = {
        
    }

    componentDidMount(){
        //Async ajax
        const sealAjax = async(url, seletor, push= true ) =>{
            const response = await axios(url);
            const responseData = await response.data
            if(push){
                window.history.pushState({seletor}, "blabla", url)
            }
            return responseData;
        }

        //Header Buttons event
        const bodyMain = document.querySelector("#bodyMain")
        const PREnavButtons = document.querySelectorAll("#nav")
        const navButtons = Array.from(PREnavButtons)

        navButtons.forEach(elem =>{

            elem.onclick = e =>{
                e.preventDefault()
                const url = e.target.attributes["dest"].value;
                const seletor = e.target.attributes["seletor"].value;
                console.log(seletor);
                sealAjax(url ,seletor)
                    .then(resp =>{
                        const bodyAtual = resp
                        bodyMain.innerHTML = bodyAtual
                    });
            }
        })

        window.onpopstate = e =>{
            const atualURL = window.location.href
            const entryAtual = e.state.seletor //entry == seletor
            sealAjax(atualURL, entryAtual, false)
                .then(resp =>{
                    const bodyAtual = resp
                    bodyMain.innerHTML = bodyAtual
                });
        }

        
        window.onload = e =>{
            const pathName = window.location.pathname
            if(pathName === "/home"){
                sealAjax("/home", "home")
                    .then(resp =>{
                        const bodyAtual = resp
                        bodyMain.innerHTML = bodyAtual
                    });
            }else if(pathName === "/sobre"){
                sealAjax("/sobre", "sobre")
                    .then(resp =>{
                        const bodyAtual = resp
                        bodyMain.innerHTML = bodyAtual
                    });
            }else if(pathName === "/anuncie"){
                sealAjax("/anuncie", "anuncie")
                    .then(resp =>{
                        const bodyAtual = resp
                        bodyMain.innerHTML = bodyAtual
                    });
            }
        }
        



    }

    render(){
        //const {bodyResponse} = this.state

        return (
            <Fragment>
            {/* Header Content */}

            <header className={"header"}>
                <nav className={"navBar"} id={"navBar"}>
                    <a href="home"  id={"nav"} dest={"/home"} seletor={"home"}>Home</a>
                    <a href="sobre" id={"nav"} dest={"/sobre"} seletor={"sobre"}>Sobre</a>
                    <a href="anuncie" id={"nav"} dest={"/anuncie"} seletor={"anuncie"}>Anuncie</a>
                </nav>
                <div className={"secondRow"}>
                    <section className={"logo"}>
                        <img src="#" alt="#"/>
                    </section>
                    <section className={"number"}>
                        <p><span className={"contato"}>Contato</span></p>
                        <a href={"tel:+55 11 0000-0000"}><span className={"numero"}>(xx)xxxx-xxxx</span></a>
                    </section>
                </div>
            </header>


            {/* //Body */}
            <main id={"bodyMain"}>
            </main>
            </Fragment>


        )
    }
}


export default (HeaderBody)