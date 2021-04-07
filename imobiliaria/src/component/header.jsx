import React from "react"

export const header = props => (
    <header className={"header"}>
        <nav className={"navBar"} id={"navBar"}>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#anuncie">Anuncie</a>
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

export default (header)