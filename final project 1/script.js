exanak = "summer";
let xotiGuyn = "green";
let horsecol = "blue"
function setup() {
    var socket = io();
    var side = 50;
    let matrix = [];
    let grassCount = document.getElementById('grassCount');
    let grassEaterCount = document.getElementById('grassEaterCount');
    let horseCount = document.getElementById('horseCount');
    let gishatichCount = document.getElementById('gishatichCount');
    let summerBtn = document.getElementById("summer");
    let winterBtn = document.getElementById("winter");

    socket.on("data", drawcreatures);

    function drawcreatures(data) {
        matrix = data.matrix;
        grassCount.innerText = data.grassCount;
        grassEaterCount.innerText = data.grassEaterCount;
        horseCount.innerText = data.horseCount;
        gishatichCount.innerText = data.gishatichCount;

        createCanvas(matrix[0].length * side, matrix.length * side)
        background('#acacac');

        summerBtn.onclick = function () {
            exanak = "summer";
            xotiGuyn = "green";
            horsecol = "blue"
        }
        
        winterBtn.onclick = function () {
            exanak = "winter";
            xotiGuyn = "#314FAE";
            horsecol = "#1AAF05"

        }

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill(xotiGuyn);
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
                    fill(horsecol);
                    rect(j * side, i * side, side, side);
                }
                else if (matrix[i][j] == 5) {
                    fill("black");
                    rect(j * side, i * side, side, side);
                }
            }
        }





    }
}








