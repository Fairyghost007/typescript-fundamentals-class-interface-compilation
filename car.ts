interface Vehicle {
    maker: string;
    model: string;
    year: number;
    start(): void;
  }
  
  class Car implements Vehicle {
    maker: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.maker = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  const myCar = new Car("Toyota", "Camry", 2021);
  
  myCar.start(); 
  