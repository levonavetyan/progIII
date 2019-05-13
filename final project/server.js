var grass = require('./modules/grass')
var bomb = require('./modules/bomb')
var grasseater = require('./modules/grasseater')
var horse = require('./modules/horse')
var gishatich = require('./modules/gishatich')


var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);







io.on('connection' , function(socket){


    socket.emit('name', matrix)
})