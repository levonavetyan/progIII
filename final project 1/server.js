
grassArr = [];
eatArr = [];
gishatich = [];
horseArr = [];
bombArr = [];
matrix = [];

var Grass = require('./modules/grass')
var Bomb = require('./modules/bomb')
var GrassEater = require('./modules/grasseater')
var Horse = require('./modules/horse')
var Gishatich = require('./modules/gishatich')

function creatematrix(rows,columns) {
    

for (let y = 0; y < rows; y++) {
    matrix[y] = []; // Մատրիցի նոր տողի ստեղծում
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 30) {
            matrix[y][x] = 0; // Մատրիցի 20 տոկոսը կլինի 0
        }
        else if (a >= 20 && a < 70) {
            matrix[y][x] = 1; // Մատրիցի 20 տոկոսը կլինի 1
        }
        else if (a >= 70 && a < 88) {
            matrix[y][x] = 2; // Մատրիցի 10 տոկոսը կլինի 2
        }
        else if (a >= 88 && a < 97) {
            matrix[y][x] = 3; // Մատրիցի 20 տոկոսը կլինի 3
        }
        else if (a >= 97 && a < 99) {
            matrix[y][x] = 4; // Մատրիցի 20 տոկոսը կլինի 4
        }
        else if (a >= 99 && a < 100) {
            matrix[y][x] = 5; // Մատրիցի 10 տոկոսը կլինի 5
        }
    }
}
}

creatematrix(15,15);

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);


function dopush() {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 2) {
                var eatgrass = new GrassEater(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                grassArr.push(grass);
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y);
                gishatich.push(gish);
            }
            else if (matrix[y][x] == 4) {
                var horse = new Horse(x, y);
                horseArr.push(horse);
            }
            else if (matrix[y][x] == 5) {
                var boomb = new Bomb(x, y);
                bombArr.push(boomb);
            }
        }
    }
}
dopush();


function game() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    //յուրաքանչյուր խոտակեր փորձում է ուտել խոտ
    for (var i in eatArr) {
        eatArr[i].eat();
    }

    for (var i in gishatich) {
        gishatich[i].eat();
    }
    for (var i in horseArr) {
        horseArr[i].eat();
    }
    for (var i in bombArr) {
        bombArr[i].eat();
    }
    let sendData = {
        matrix: matrix
    }
    io.sockets.emit("data", sendData);
}

setInterval(game, 900)

