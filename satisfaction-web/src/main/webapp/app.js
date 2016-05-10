'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var usuarios = require('./public/usuarios.json')

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/dashboard', function(req, res) {
    res.send({dashboard : [{'id':'1001', 'dash': 'dash'}]});
});

app.get('/movimentacao', function(req, res) {
    res.send({results : [{'id':'1001', 'movi': 'movi'}]});
});

app.get('/contas', function(req, res) {
    res.send({results : [{'id':'1001', 'usuario': 'conta1'}, {'id':'1002', 'usuario': 'conta2'}]});
});

app.get('/filial', function(req, res) {
    res.send({results : [{'id':'1001', 'usuario': 'filial1'}, {'id':'1002', 'usuario': 'filial2'}]});
});

app.get('/filial/list/tipoLogradouro', function(req, res) {
    res.send(['Rua', 'Avenida', 'Viela']);
});

app.get('/funcionario', function(req, res) {
    res.send({results : [{'id':'1001', 'usuario': 'funcionario1'}, {'id':'1002', 'usuario': 'funcionario2'}]});
});

app.get('/usuario', function(req, res) {
    res.send(usuarios);
});

app.get('/permissao', function(req, res) {
    res.send({results : [{'id':'1001', 'usuario': 'permissao1'}, {'id':'1002', 'usuario': 'permissao2'}]});
});

app.listen(3000);
