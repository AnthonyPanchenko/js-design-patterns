// Divides one or more classes into two separate hierarchies - abstraction and implementation,
// allowing you to change them independently of each other.

class MainAbstraction {
  getInfo() {
    throw new Error(
      `There is no "getInfo()" method in ${this.constructor.name}`
    );
  }

  setVehicle() {
    throw new Error(
      `There is no "setVehicle()" method in ${this.constructor.name}`
    );
  }
}

class Vehicle_1 extends MainAbstraction {
  constructor(car) {
    super();
    this.car = car;
  }

  getInfo() {
    return `Vehicle_1 has ${this.car.getColor()} color`;
  }

  setVehicle(car) {
    this.car = car;
  }
}

class Vehicle_2 extends MainAbstraction {
  constructor(car) {
    super();
    this.car = car;
  }

  getInfo() {
    return `Vehicle_2 has ${this.car.getColor()} color`;
  }

  setVehicle(car) {
    this.car = car;
  }
}

class WhiteCar {
  getColor() {
    return 'white';
  }
}

class OrangeCar {
  getColor() {
    return 'orange';
  }
}

class SilverCar {
  getColor() {
    return 'silver';
  }
}

class RedCar {
  getColor() {
    return 'red';
  }
}

const w = new WhiteCar();
const o = new OrangeCar();

const v1 = new Vehicle_1(w);
const v2 = new Vehicle_2(o);

console.log(v1.getInfo());
console.log(v2.getInfo());

const r = new RedCar();
const s = new SilverCar();

v1.setVehicle(r);
v2.setVehicle(s);

console.log(v1.getInfo());
console.log(v2.getInfo());
