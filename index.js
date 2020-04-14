const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
})

app.get('/ola/:nome',function(req,res){
    res.send("<h1>ola " + req.params.nome + "</h1>");
})

app.get("/sobre", function(req,res){
    res.sendFile(__dirname +"/html/sobre.html")
})


app.get("/blog", function(req,res){
    res.send("minha pagina blog");
})

app.listen(8081,function(){
console.log("servidor rodando!");
});
//localhost:8081