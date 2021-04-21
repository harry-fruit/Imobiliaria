import axios from "axios"
import { getWindow2 } from "./getWindow"


//Async ajax insumo
const sealAjax = async ( url, seletor, push= true ) =>{
    const response = await axios(url);
    const responseData = await response.data;

    if( push && seletor !=="xhome" && seletor !=="xabout" && seletor !=="xrent" ){

        if( url !== "/xhome" && url !== "/xabout" && url !== "/xrent" ){
            window.history.pushState({seletor}, null, url);
        }else{
            window.history.pushState({seletor}, null);
        }
    }

    return responseData;
}


// P/ executar no buttons header
export function buttonsOnClick(elem, index){
    const bodyMain = document.querySelector("#bodyMain")
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
            if(index === 0){
                getWindow2()
            }
        }
}

//Executa no popstate
export function onPopState(e){
    const path = window.location.pathname ? window.location.pathname.replace('/', '') : ''
    const seletor = path !== '' ? path.replace(path[0], path[0].toUpperCase()) : "Home"

    const bodyMain = document.querySelector("#bodyMain")
    if(window.location.pathname === "/home"){
        getWindow2()
    }
    const atualURL = window.location.href
    const entryAtual = e.state.seletor //entry == seletor
    sealAjax(atualURL, entryAtual, false)
        .then(resp =>{
            const bodyAtual = resp
            bodyMain.innerHTML = bodyAtual
            document.title = `${seletor}`
        });
}

//Executa no load
export function onLoad (){

    const pathName = window.location.pathname
    const bodyMain = document.querySelector("#bodyMain")
    const path = window.location.pathname ? window.location.pathname.replace('/', '') : ''
    const seletor = path !== '' ? path.replace(path[0], path[0].toUpperCase()) : "Home"

    if(pathName === "/home"){
        sealAjax("/xhome", "home")
        .then(resp =>{
            const bodyAtual = resp
            bodyMain.innerHTML = bodyAtual
            document.title = `${seletor}`
            });
    }else if(pathName === "/about"){
        sealAjax("/xabout", "about")
            .then(resp =>{
                const bodyAtual = resp
                bodyMain.innerHTML = bodyAtual
                document.title = `${seletor}`
            });
    }else if(pathName === "/rent"){
        sealAjax("/xrent", "rent")
            .then(resp =>{
                const bodyAtual = resp
                bodyMain.innerHTML = bodyAtual
                document.title = `${seletor}`
            });
    }else if(pathName === "/"){
        sealAjax("/xhome", "home")
            .then(resp =>{
                const bodyAtual = resp
                bodyMain.innerHTML = bodyAtual
                document.title = `${seletor}`
            });
    }
}


export default (buttonsOnClick, onPopState, onLoad)