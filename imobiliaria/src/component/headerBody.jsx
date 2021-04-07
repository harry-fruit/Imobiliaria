import React from "react"


// header
export const Header = props =>(
    <header className={"header"}>
        <nav className={"navBar"} id={"navBar"}>
            <a href="#home" onClick={e => escreverNoBody()}>Home</a>
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

// body
export const BodyHome = props => (
    <main>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, sapiente ullam. Laborum nemo delectus blanditiis dignissimos neque deleniti iusto dolor cum! Provident autem corporis dolorum numquam optio quam nam aperiam.</p>
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

function escreverNoBody(){
    <BodyHome>
        <div>
            <h1>AEEEE CARAIO</h1>
        </div>
    </BodyHome>
    console.log("Escrevendo....")
}
export default (Header, BodyHome)

