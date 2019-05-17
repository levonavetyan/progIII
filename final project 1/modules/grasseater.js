var Grass = require("./Grass");
var random = require("./random.js");

class GrassEater extends Grass {
    constructor(x, y) {
        // this.x = x;
        // this.y = y;
        super(x,y)
        this.energy = 3;
        // this.multiply = 0;
        this.directions = [];

    }
    // newDirection(){
    //     this.directions = [
    //         [this.x - 1, this.y - 1],
    //         [this.x, this.y - 1],
    //         [this.x + 1, this.y - 1],
    //         [this.x - 1, this.y],
    //         [this.x + 1, this.y],
    //         [this.x - 1, this.y + 1],
    //         [this.x, this.y + 1],
    //         [this.x + 1, this.y + 1]
    //     ];

    // }

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
        var fundCords = this.chooseCell(0);
        var cord = random(fundCords);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            //թարմացնում է սեփական կորդինատները
            this.x = x;
            this.y = y;
        }
    }

    eat() {
        //հետազոտում է շրջակայքը, որոնում է սնունդ
        var fundCords = this.chooseCell(1);
        var cord = random(fundCords);

        //եթե կա հարմար սնունդ
        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //հիմնական մատրիցայում տեղափոխվում է կերած սննդի տեղը
            //իր հին տեղը դնում է դատարկ վանդակ
            matrix[y][x] = 2;
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
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }

            //եթե պատրաստ է բազմացմանը, բազմանում է 
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }


        } else {
            //եթե չկա հարմար սնունդ 
            this.move();
            this.energy--;
            if (this.energy <= 0) { //մահանում է, եթե էներգիան 3֊ից ցածր է
                this.die();
            }
        }
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

        var fundCords = this.chooseCell(0);
        var cord = random(fundCords);

        //this.multiply++;
        
            //Հետազոտում է շրջապատը, որոնում դատարկ տարածքներ
            
            if (cord) {
                var x = cord[0];
                var y = cord[1];
                //this.multiply++;
                //Ավելացնում է նոր խոտ խոտերի զանգվածում
                var grasseater = new GrassEater(x, y);
                eatArr.push(grasseater);

                //Ավելացնում է նոր խոտի մասին գրառում հիմնական matrix-ում 
                matrix[y][x] = 2;
               //this.multiply = 0;
            }
        }
    
        die(){ 
            matrix[this.y][this.x] = 0;

            for(var i in eatArr) {
                if(this.x == eatArr[i].x && this.y == eatArr[i].y){
                    eatArr.splice(i, 1);
                }
        }

}
}

module.exports = GrassEater;