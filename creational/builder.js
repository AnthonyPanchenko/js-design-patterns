// The builder pattern is a type of creational pattern that helps in building complex objects using simpler objects.
// It provides a flexible and step-by-step approach towards making these objects and keeps the representation,
// and the process of creation shielded.

class VehicleShop {
  create(builder) {
    builder.step1();
    builder.step2();
    builder.step3();
    builder.step4();
    builder.step5();

    return builder.getResult();
  }
}

class Car {
  constructor() {
    this.interiorColor = '';
    this.discRadius = 0;
    this.exteriorColor = '';
    this.brand = '';
  }

  setInteriorColor() {
    this.interiorColor = 'black';
  }

  setDiscRadius() {
    this.discRadius = 22;
  }

  setExteriorColor() {
    this.exteriorColor = 'white';
  }

  setBrand() {
    this.brand = 'Audi';
  }
}

class CarBuilder {
  constructor() {
    this.car = null;
  }

  step1() {
    this.car = new Car();
  }

  step2() {
    this.car.setInteriorColor();
  }

  step3() {
    this.car.setDiscRadius();
  }

  step4() {
    this.car.setExteriorColor();
  }

  step5() {
    this.car.setBrand();
  }

  getResult() {
    return this.car;
  }
}

const shop = new VehicleShop();
const car = shop.create(new CarBuilder());

console.log(car);
