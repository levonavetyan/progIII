class Car {
    constructor(brand,km,country) {
        this.first_name = brand;
        this.driven = km;
        this.bornin = country;
    }
 }

var a = new Car("BMW","100km", "Germany");
console.log(a);

class Mercedec extends Car {
    constructor(brand,km,country,rgb){
    super(brand,km,country,rgb)
    this.color = rgb;
    }
}

var b = new Mercedec("Mercedec","50km", "Japan","blue")
console.log(b);