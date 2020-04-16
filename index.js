const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//Config
//template Engine
app.engine('handlebars', handlebars({ defaltLayout: 'main' }))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
//Rotas get
app.get('/cad', function (req, res) {
    res.render('formulario')
})

app.get('/', function(req, res){
    Post.findAll({order:[['id','DESC']]}).then(function (posts){
        res.render('home',{posts: posts})
    })
    
})

app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send("Postagem deletado com sucesso!")
    }).catch(function(erro){
        res.send("esta postagem não existe mais!")
    })
})

//Rota Post
app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/')
    }).catch(function (erro) {
        res.send("Houve um erro: " + erro)
    })

})




app.listen(8081, function () {
    console.log("servidor rodando!");
});
//localhost:8081