var Grass = require("./Grass");
var random = require("../random");

class Horse extends Grass{
    constructor(x, y) {
        super(x,y);
        this.energy = 3;
       
        this.directions = [];

    }
    newDirection() {
        this.directions = [
            [this.x + 1, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y + 1],
        ];

    }
    // chooseCell(t) {
    //     this.newDirection();
    //     var found = [];
    //     for (var i in this.directions) {
    //         var x = this.directions[i][0];
    //         var y = this.directions[i][1];
    //         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

    //             if (matrix[y][x] == t) {
    //                 found.push(this.directions[i]);
    //             }

    //         }

    //     }
    //     return found;
    // }

    move() {
        //որոնում է դատարկ տարածքներ
        var fundCords1 = this.chooseCell(0);
        var cord = random(fundCords1);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            //թարմացնում է սեփական կորդինատները
            this.x = x;
            this.y = y;
        }
    }

    eat() {

        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var fundCords1 = this.chooseCell(1);
        var fundCords2 = this.chooseCell(2);
        var fundCords3 = this.chooseCell(3);
        fundCords1 = fundCords1.concat(fundCords2, fundCords3)
        var cord = random(fundCords1);

        //եթե կա հարմար սնունդ
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            let c = matrix[y][x]
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;

            //փոխում է սեփական կորդինատները օբյեկտի մեջ
            this.x = x;
            this.y = y;

            //բազմացման գործակիցը մեծացնում է
            this.multiply++;

            //մեծացնում է էներգիան
            this.energy++;

            //!!! ԿԱՐԵՎՈՐ !!! սննդի զանգվածից ջնջում է կերված սնունդը
            //խոտակերի համար դա խոտն է, խոտերի զանգվածի մեջ xotArr
            if (c == 1) {
                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
            }
            else if (c == 2) {
                for (var i in eatArr) {
                    if (x == eatArr[i].x && y == eatArr[i].y) {
                        eatArr.splice(i, 1);
                    }
                }
            }
            else if (c == 3) {
                for (var i in gishatich) {
                    if (x == gishatich[i].x && y == gishatich[i].y) {
                        gishatich.splice(i, 1);
                    }
                }
            }
            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 1000) {
                this.mul()
                this.multiply = 0;
            }


        }
        
    }
}

module.exports = Horse;
