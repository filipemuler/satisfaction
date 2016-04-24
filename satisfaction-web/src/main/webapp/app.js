'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/dashboard', function(req, res) {
    res.send("Dashboard");
});

app.get('/movimentacao', function(req, res) {
    res.send("");
});

app.get('/contas', function(req, res) {
    res.send("Contas");
});

app.get('/filial', function(req, res) {
    res.send("Filial");
});

app.get('/funcionario', function(req, res) {
    res.send("Funcionario");
});

app.get('/usuario', function(req, res) {
    res.send({results : [{'id':'1001', 'usuario': 'filipe'}, {'id':'1002', 'usuario': 'andre'}]});
});

app.get('/permissao', function(req, res) {
    res.send("Permissao");
});

app.listen(3000);
