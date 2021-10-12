// It is a structural pattern that focuses on the sharing of data amongst related objects.
// It helps prevent repetitive code, hence, increases efficiency when it comes to data sharing as well as conserving the memory.
// It takes the common data structs/objects that are used by a lot of objects and stores them in an external object (flyweight) for sharing;
// you could say that it is used for caching purposes. So the same data does not need to have separate copies for each object;
// instead, it is shared amongst all.

class Vehicle {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class VehicleFactory {
  constructor() {
    this.vehicles = [];
  }

  create(model, price) {
    const candidate = this.getInfo(model);
    if (candidate) {
      return candidate;
    }

    const newVehicle = new Vehicle(model, price);
    this.vehicles.push(newVehicle);
    return newVehicle;
  }

  getInfo(model) {
    return this.vehicles.find((car) => car.model === model);
  }
}

const factory = new VehicleFactory();

const bmwX6 = factory.create('bmw', 10000);
const audi = factory.create('audi', 12000);
const bmwX3 = factory.create('bmw', 8000);

console.log(bmwX3 === bmwX6); // true
console.log(audi === bmwX6); // false
console.log(audi === bmwX3); // false
console.log(bmwX3);
