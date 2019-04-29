class Bomb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 3;
        this.multiply = 0;
        this.directions = [];

    }
    newDirection() {
        //  getRandInt(0,matrix.length)
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
        this.newDirection();
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



    move() {
        //որոնում է դատարկ տարածքներ
        var fundCords1 = this.chooseCell(0);
        var cord = random(fundCords1);

        if (cord) {
            var x = cord[0];
            var y = cord[1];

            //կատարում է տեղափոխություն հիմնական matrix-ում 
            matrix[y][x] = 5;
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
        var fundCords4 = this.chooseCell(4);
        fundCords1 = fundCords1.concat(fundCords2, fundCords3, fundCords4)


        for(let l in fundCords1) {
            var x = fundCords1[l][0];
            var y = fundCords1[l][1];
            matrix[y][x] = 0;
       
                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
            
       
                for (var i in eatArr) {
                    if (x == eatArr[i].x && y == eatArr[i].y) {
                        eatArr.splice(i, 1);
                    }
                }
            
        
                for (var i in gishatich) {
                    if (x == gishatich[i].x && y == gishatich[i].y) {
                        gishatich.splice(i, 1);
                    }
                }
            
         
                for (var i in horseArr) {
                    if (x == horseArr[i].x && y == horseArr[i].y) {
                        horseArr.splice(i, 1);
                    }
                }
            

        }
        this.move();
     

    }
}