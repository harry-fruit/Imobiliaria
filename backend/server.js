const express = require("express");
const app = express();
const porta = process.env.PORT ||3000;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended:true}));



//tentar fazer o static parar de servir os arquivos h
app.use(express.static(path.join(__dirname +  "/build"), {redirect:false}));


app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/build/index.html'));
  });


//Home
app.get("/home", (req, resp)=>{
    resp.sendFile(path.resolve(__dirname + '/build/index.html'));
    
})

app.get('/xhome', (req, resp) =>{
    resp.sendFile(path.resolve(__dirname + '/html/home.html' ));
})


//about
app.get("/xabout", (req, resp)=>{
    resp.sendFile(path.resolve(__dirname + '/html/about.html'));
})

app.get("/about", (req, resp)=>{
    resp.sendFile(path.resolve(__dirname + '/build/index.html'));
    
})

//rent
app.get("/xrent", (req, resp)=>{
    resp.sendFile(path.resolve(__dirname + '/html/rent.html'));
})

app.get("/rent", (req, resp)=>{
    resp.sendFile(path.resolve(__dirname + '/build/index.html'));
    
})



app.get("/formSend", (req, resp)=>{

    resp.sendFile(path.resolve(__dirname + "/html/formSend.html"));
})



app.post("/data", (req, resp)=>{
    resp.send({
        name: req.body.name,
        email: req.body.email,
        houseType: req.body.houseType
    });
});



app.listen(porta);