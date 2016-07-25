'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var usuarios = require('./public/usuarios.json')
var contas = require('./public/contas.json')
var dashboard = require('./public/dashboard.json')

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/dashboard/consolidadofinal', function(req, res) {
    res.send(dashboard);
});

app.get('/movimentacao/list', function(req, res) {
    res.send({results : [{'id':'1001', 'movi': 'movi'}]});
});

app.get('/movimentacao/list/contas', function(req, res) {
    res.send(contas);
});

app.get('/contas/list', function(req, res) {
    res.send({results : [{'id':'1001', 'usuario': 'conta1'}, {'id':'1002', 'usuario': 'conta2'}]});
});

app.get('/contas/list/contas', function(req, res) {
    res.send([{id : '3', nome : 'Coca-cola', ordem : '3'},{id : '2', nome : 'Supermercado', ordem : '2'}, {id : '1', nome : 'Copa Manha',ordem : '1'}]);
});

app.get('/fluxo/list', function(req, res) {
    res.send({results : [{'id':'1001', 'nome': 'fluxo1'}, {'id':'1002', 'nome': 'fluxo2'}]});
});

app.get('/filial/list', function(req, res) {
    res.send({results : [{'id':'1001', 'usuario': 'filial1'}, {'id':'1002', 'usuario': 'filial2'}]});
});

app.get('/filial/list/tipoLogradouro', function(req, res) {
    res.send(['Rua', 'Avenida', 'Viela']);
});

app.get('/funcionario/list', function(req, res) {
    res.send({results : [{'id':'1001', 'usuario': 'funcionario1'}, {'id':'1002', 'usuario': 'funcionario2'}]});
});

app.get('/usuario/list', function(req, res) {
    res.send(usuarios);
});

app.get('/permissao/list', function(req, res) {
    res.send({results : [{'id':'1001', 'usuario': 'permissao1'}, {'id':'1002', 'usuario': 'permissao2'}]});
});

app.post('/movimentacao/salvar', function(req, res){
  res.send('post')
});

app.listen(3000);
