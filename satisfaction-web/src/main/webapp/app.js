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
    res.send({dashboard : [{'id':'1001', 'dash': 'dash'}]});
});

app.get('/movimentacao', function(req, res) {
    res.send({movimentacao : [{'id':'1001', 'movi': 'movi'}]});
});

app.get('/contas', function(req, res) {
    res.send({funcionarios : [{'id':'1001', 'usuario': 'funcionario1'}, {'id':'1002', 'usuario': 'funcionario2'}]});
});

app.get('/filial', function(req, res) {
    res.send({funcionarios : [{'id':'1001', 'usuario': 'filial1'}, {'id':'1002', 'usuario': 'filial2'}]});
});

app.get('/funcionario', function(req, res) {
    res.send({funcionarios : [{'id':'1001', 'usuario': 'funcionario1'}, {'id':'1002', 'usuario': 'funcionario2'}]});
});

app.get('/usuario', function(req, res) {
    res.send({usuarios : [{'id':'1001', 'usuario': 'filipe'}, {'id':'1002', 'usuario': 'andre'}]});
});

app.get('/permissao', function(req, res) {
    res.send({permissoes : [{'id':'1001', 'usuario': 'permissao1'}, {'id':'1002', 'usuario': 'permissao2'}]});
});

app.listen(3000);
