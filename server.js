const express = require("express")
const app = express()
const porta = 5000
const path = require("path")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, resp) =>{
    resp.sendFile(path.resolve("client/public/home.html"))
})
app.get('/home', (req, resp) =>{
    resp.sendFile(path.resolve("client/public/home.html"))
})

app.get("/sobre", (req, resp)=>{
    resp.sendFile(path.resolve("client/public/sobre.html"))
})

app.get("/anuncie", (req, resp)=>{
    resp.sendFile(path.resolve("client/public/anuncie.html"))
})

app.listen(porta, ()=> console.log(`Listening on port ${porta}`))