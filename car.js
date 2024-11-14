var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.maker = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
var myCar = new Car("Toyota", "Camry", 2021);
myCar.start();
