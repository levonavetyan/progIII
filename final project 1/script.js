
function setup() {
    var socket = io();
    var side = 50;
    let matrix = [];
    let grassCount = document.getElementById('grassCount');
    let grassEaterCount = document.getElementById('grassEaterCount');

    socket.on("data", drawcreatures);

    function drawcreatures(data) {
        matrix = data.matrix;
        grassCount.innerText = data.grassCount;
        grassEaterCount.innerText = data.grassEaterCount;

        createCanvas(matrix[0].length * side, matrix.length * side)
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


  
}
}








