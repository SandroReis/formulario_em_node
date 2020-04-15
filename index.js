const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


//Config
//template Engine
app.engine('handlebars', handlebars({ defaltLayout: 'main' }))
app.set('view engine', 'handlebars')

//Conexão com o banco de Dados Mysql
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})




app.listen(8081, function () {
    console.log("servidor rodando!");
});
//localhost:8081