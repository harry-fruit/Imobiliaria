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

app.get("/rent", (req, resp)=>{
    resp.sendFile(path.resolve("client/public/rent.html"))
    
})
app.get("/formSend", (req, resp)=>{
    resp.sendFile(path.resolve("client/public/formSend.html"))
})
app.post("/data", (req, resp)=>{
    resp.send({
        name: req.body.name,
        email: req.body.email,
        houseType: req.body.houseType
    })
})

app.listen(porta, ()=> console.log(`Listening on port ${porta}`))