var side = 50;
var grassArr = [];
var eatArr = [];
var gishatich = [];
var horseArr = [];
var bombArr = [];
matrix = [];
let rows = 15; // Տողերի քանակ
let columns = 15; // Սյուների քանակ

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

function setup() {
    frameRate(3)
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("grey");
    // let g = new Grass(1, 2)
    // let emptyCells = g.chooseCell(0);
    // console.log(emptyCells)


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


function draw() {
    //Գծում է աշխարհը, հիմվելով matrix-ի վրա
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill("blue");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill("black");
                rect(j * side, i * side, side, side);
            }
        }
    }


    //յուրաքանչյուր խոտ փորձում է բազմանալ
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
}








