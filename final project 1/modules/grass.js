var random = require("../random");

class Grass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //this.index = index;
        this.multiply = 0;
        // this.directions = [
        //     [this.x - 1, this.y - 1],
        //     [this.x, this.y - 1],
        //     [this.x + 1, this.y - 1],
        //     [this.x - 1, this.y],
        //     [this.x + 1, this.y],
        //     [this.x - 1, this.y + 1],
        //     [this.x, this.y + 1],
        //     [this.x + 1, this.y + 1]
        // ];

    }

    newDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(t) {
        this.newDirections();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == t) {
                    found.push(this.directions[i]);
                }

            }

        }
        return found;
    }

    // mul() {
    //     this.multiply++;
    //     var newCell = random(this.chooseCell(0));
    //     //console.log(newCell, this.multiply);
    //     if (this.multiply >= 15 && newCell) {
    //         var newGrass = new Grass(newCell[0], newCell[1], this.index);
    //         grassArr.push(newGrass);
    //         matrix[newCell[1]][newCell[0]] = 1;
    //         this.multiply = 0;
    //     }
    // }

    mul() {
        this.multiply++;
        if (this.multiply == 3) {

            //Հետազոտում է շրջապատը, որոնում դատարկ տարածքներ
            var fundCords = this.chooseCell(0);
            var cord = random(fundCords);
            if (cord) {
                grassCount++;
                var x = cord[0];
                var y = cord[1];

                //Ավելացնում է նոր խոտ խոտերի զանգվածում
                var norXot = new Grass(x, y);
                grassArr.push(norXot);

                //Ավելացնում է նոր խոտի մասին գրառում հիմնական matrix-ում 
                matrix[y][x] = 1;
                this.multiply = 0;
            }
        }
    }

}

module.exports = Grass;