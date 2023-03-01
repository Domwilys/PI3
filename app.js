const express = require('express');//Insere o "express" no código
const app = express();//Armazena o "express" em uma variável
const handlebars = require('express-handlebars');//Insere o "handlebars" no código
const bodyParser = require('body-parser');//Insere o "bodyParser" no código
const Curriculo = require('./models/Sugest');//Armazena as tabelas do banco de dados criadas no arquivo "Sugest.js"
const serpapi = require("serpapi");
const fs = require('fs');
const { json } = require('body-parser');
const { response } = require('express');

app.use(express.static('./'));
app.use(express.static('public'));//Deixa a pasta "public" pública 

//Configurações para o handlebars
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,

        allowProtoMethodsByDefault: true,
    }
}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {

    res.render('index');

})

app.post("/", function(req, res){
    if(req.body.nome != null && req.body.email != null && req.body.sugest_usr != null){
        Curriculo.create({
            nome: req.body.nome,
            email: req.body.email,
            sobre: req.body.sobre,
            experiencia: req.body.experiencia,
            formacaoAcademica: req.body.formacaoAcademica,
            skills: req.body.skills
        }).then(function(){
            console.log("Dados do usuário recebidos com sucesso!");
        }).catch(function(erro){
            console.log("Erro ao receber dados do usuário! Erro:" + erro);
        });
    }
});

const myFunction = async function() {

    const params = {
        api_key: "bf0a18c2689a466ebb2ad09689a6b2661b922e15808de6ce2aff1893bd11897a",
        google_domain: "google.com.br",
        q: "Developer",
        hl: "pt-br",
        gl: "br",
        location: "Brazil"
    };
      
    const response = await serpapi.getJson("google_jobs", params);
    const arrResponse = [response.search_metadata]
    console.log(arrResponse);

    app.get("/api", function(req, res){
        res.send(arrResponse);
    });

}

myFunction()

//Roda toda a aplicação na rede local usando a porta "8080"
app.listen("10101", "10.0.23.107",  function(){
    console.log("Servidor rodando em http://localhost:10101");
}); //Está sempre tem que ser a última linha do código de um projeto com express