'use strict';

// simple express server
var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.get('/teste', function(req, res) {
    res.send('bla');
});

app.listen(3000);
