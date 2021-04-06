import React from "react"

export const header = props => (
    <header className={"header"}>
        <nav className={"navBar"} id={"navBar"}>
            <a href="#home">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#anuncie">Anuncie</a>
        </nav>
        <section className={"logo"}>
            <img src="#" alt="#"/>
        </section>
        <section className={"number"}>
            <p>Contato</p>
            <p>(xx)xxxx-xxxx</p>
        </section>
    </header>
)

export default (header)