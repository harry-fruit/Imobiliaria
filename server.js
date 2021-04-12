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

app.get("/about", (req, resp)=>{
    resp.sendFile(path.resolve("client/public/about.html"))
})

app.get("/sell", (req, resp)=>{
    resp.sendFile(path.resolve("client/public/sell.html"))
})

app.listen(porta, ()=> console.log(`Listening on port ${porta}`))