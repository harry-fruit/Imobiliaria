import axios from "axios"
import inView from "in-view"

//Motivos de criaçao: Ao navegar com o ajax os elementos DOM demoravam alguns MS para serem achados, logo, era impossivel rodar algum script para fazer efeito, foi com o intuito de criar um "delay" no reconhecimento da DOM q esse modulo foi criado

export function getWindow(){
    window.addEventListener("DOMContentLoaded", e=>{
        setTimeout(()=>{
            const firstParagraph = document.querySelector(".first p")
            const story1 = document.querySelector(".s1")
            const story2 = document.querySelector(".s2")
            const story3 = document.querySelector(".s3")
            const story4 = document.querySelector(".s4")

            inView(".first")
                .on("enter", ()=>{
                    firstParagraph.style.opacity = "1"
                    firstParagraph.style.transition = "all 0.5s"
                });

            inView(".s1")
                .on("enter", ()=>{
                    story1.style.opacity = "1"
                    story1.style.transition = "all 1s"
                });
            inView(".s2")
                .on("enter", ()=>{
                    story2.style.opacity = "1"
                    story2.style.transition = "all 1s"
                });
            inView(".s3")
                .on("enter", ()=>{
                    story3.style.opacity = "1"
                    story3.style.transition = "all 1s"
                });
            inView(".s4")
                .on("enter", ()=>{
                    story4.style.opacity = "1"
                    story4.style.transition = "all 1s"
                });

        },1500)
        
    })
}

export function getWindow2(){
    setTimeout(()=>{
        const firstParagraph = document.querySelector(".first p")

        const story1 = document.querySelector(".s1")
        const story2 = document.querySelector(".s2")
        const story3 = document.querySelector(".s3")
        const story4 = document.querySelector(".s4")

        inView(".first")
            .on("enter", ()=>{
                firstParagraph.style.opacity = "1"
                firstParagraph.style.transition = "all 0.5s"
            });

        inView(".s1")
            .on("enter", ()=>{
                story1.style.opacity = "1"
                story1.style.transition = "opacity 3s, transform 1s"
            });

        inView(".s2")
            .on("enter", ()=>{
                story2.style.opacity = "1"
                story2.style.transition = "opacity 3s, transform 1s"
            });
        inView(".s3")
            .on("enter", ()=>{
                story3.style.opacity = "1"
                story3.style.transition = "opacity 3s, transform 1s"
            });
        inView(".s4")
            .on("enter", ()=>{
                story4.style.opacity = "1"
                story4.style.transition = "opacity 3s, transform 1s"
            });


    },800)
}


function resetRentDOM(userData){
    const rent = document.querySelector(".rent")
    const rentChildren = Array.from(rent.children)
    rentChildren.forEach(elem =>{
        elem.remove()
    })
    
    axios("/formSend")
        .then(resp => {
            console.log((`Thanks, ${userData.data.name}. We'll contact you soon as possible to tell your more about your new ${userData.data.houseType}.`))
            rent.innerHTML = resp.data
        })
    
}

export function getFormData (){

    setTimeout(()=>{

        if (window.location.pathname === "/rent"){
            const form = document.querySelector("#form")
            form.onsubmit = async e => {
                e.preventDefault()

                const data = new FormData(form)

                const configs = {
                    url:form.action,
                    method:form.method,
                    data: new URLSearchParams(data)
                }

                axios(configs)
                    .then(resp => {
                        resetRentDOM(resp)
                    })
            }
        }
    }, 1000)
}

export default (getWindow, getWindow2, getFormData)