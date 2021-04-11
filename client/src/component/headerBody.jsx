import React, {Component} from "react"
import axios from "axios"


// header
export class Header extends Component{
    componentDidMount(){
        function sealAjax(url, seletor, push = true){
            if(!url || !seletor){
                return
            }
            const elemento = document.querySelector("#bodyMain")
            
            axios(url)
                .then(html => html.data)
                .then(html => {
                    return(
                        console.log(html),
                        elemento.innerHTML = html
                    )
                    
                })
                
                .then(html => {
                    elemento.innerHTML = html 
                })

            
        }
        const PREnavButtons = document.querySelectorAll("#nav")
        const navButtons = Array.from(PREnavButtons)
        navButtons.forEach(elem =>{
            elem.onclick = e =>{
                const url = e.target.attributes["dest"].value
                const seletor = e.target.attributes["seletor"].value
                sealAjax(url, seletor)
            }
        })

    }


    render(){
        return (
            <header className={"header"}>
                <nav className={"navBar"} id={"navBar"}>
                    <a href="#home"  id={"nav"} dest={"home.html"} seletor={".pagina"}>Home</a>
                    <a href="#sobre" id={"nav"} dest={"sobre.html"} seletor={".pagina"}>Sobre</a>
                    <a href="#anuncie" id={"nav"} dest={"anuncie"} seletor={".pagina"}>Anuncie</a>
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
        )
    }
}

// body
export const Body = props => (
    <main id={"bodyMain"}>
        
    </main>
)


export const BodySobre = props => (
    <main>
        <h1>Sobre</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sapiente ullam. Laborum nemo delectus blanditiis dignissimos neque deleniti iusto dolor cum! Provident autem corporis dolorum numquam optio quam nam aperiam.</p>
    </main>
)
export const BodyAnuncie = props => (
    <main>
        <h1>Anuncie</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sapiente ullam. Laborum nemo delectus blanditiis dignissimos neque deleniti iusto dolor cum! Provident autem corporis dolorum numquam optio quam nam aperiam.</p>
    </main>
)

export default (Header, Body)

