import React, {Component, Fragment} from "react"
import axios from "axios"


export class HeaderBody extends Component{


    componentDidMount(){

        //Tratando o seletor pra utilizar no tittle
        const path = window.location.pathname ? window.location.pathname.replace('/', '') : ''
        const seletor = path !== '' ? path.replace(path[0], path[0].toUpperCase()) : "Home"


        //Async ajax
        const sealAjax = async(url, seletor, push= true ) =>{
            const response = await axios(url);
            const responseData = await response.data
            if(push){
                window.history.pushState({seletor}, null, url)
            }
            return responseData;
        }

        //Dispara ajax no evento click
        const bodyMain = document.querySelector("#bodyMain")
        const PREnavButtons = document.querySelectorAll("#nav")
        const navButtons = Array.from(PREnavButtons)

        navButtons.forEach(elem =>{
            elem.onclick = e =>{
                e.preventDefault()
                const url = e.target.attributes["dest"].value;
                const seletor = e.target.attributes["seletor"].value;
                sealAjax(url ,seletor)
                    .then(resp =>{
                        const bodyAtual = resp
                        bodyMain.innerHTML = bodyAtual
                        document.title = `${seletor}`
                    })
            }
        })
        
        //Dispara ajax no evento popstate (voltar/avançar nas entry)
        window.onpopstate = e =>{
            const atualURL = window.location.href
            const entryAtual = e.state.seletor //entry == seletor
            sealAjax(atualURL, entryAtual, false)
                .then(resp =>{
                    const bodyAtual = resp
                    bodyMain.innerHTML = bodyAtual
                    document.title = `${seletor}`
                });
        }

        //Dispara ajax no evento ao carregar a pag e verifica qual é o caminho certo na url pra rediorecionar o user corretamente
        window.onload = e =>{
            const pathName = window.location.pathname
            if(pathName === "/home"){
                sealAjax("/home", "home")
                .then(resp =>{
                    const bodyAtual = resp
                    bodyMain.innerHTML = bodyAtual
                    document.title = `${seletor}`
                    });
            }else if(pathName === "/about"){
                sealAjax("/about", "about")
                    .then(resp =>{
                        const bodyAtual = resp
                        bodyMain.innerHTML = bodyAtual
                        document.title = `${seletor}`
                    });
            }else if(pathName === "/sell"){
                sealAjax("/sell", "sell")
                    .then(resp =>{
                        const bodyAtual = resp
                        bodyMain.innerHTML = bodyAtual
                        document.title = `${seletor}`
                    });
            }else if(pathName === "/"){
                sealAjax("/home", "home")
                    .then(resp =>{
                        const bodyAtual = resp
                        bodyMain.innerHTML = bodyAtual
                        document.title = `${seletor}`
                    });
            }
        }
    }
    

    render(){
        return (
            <Fragment>
            <header className={"header"}>
                <nav className={"navBar"} id={"navBar"}>
                    <a href="home"  id={"nav"} dest={"/home"} seletor={"Home"}>Home</a>
                    <a href="about" id={"nav"} dest={"/about"} seletor={"About"}>About us</a>
                    <a href="sell" id={"nav"} dest={"/sell"} seletor={"Sell"}>Get sell</a>
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