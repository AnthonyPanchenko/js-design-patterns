// A Factory Method creates new objects as instructed by the client.
// The key objective of the Factory Method is extensibility.
// Factory Methods are frequently used in applications that manage, maintain, or manipulate collections
// of objects that are different but at the same time have many characteristics (i.e. methods and properties) in common.

class Vehicle {
  constructor(brand, wheelsCount) {
    this.brand = brand;
    this.wheelsCount = wheelsCount;
  }

  getInfo() {}
}

class SportCar extends Vehicle {
  constructor(brand) {
    super(brand, 4);
  }
}

class Truck extends Vehicle {
  constructor(brand) {
    super(brand, 6);
  }
}

class VehicleFactory {
  static list = {
    truck: Truck,
    sport: SportCar,
  };

  create(brand, color, type) {
    const Vehicle = VehicleFactory.list[type];
    const vehicle = new Vehicle(brand);
    vehicle.color = color;
    vehicle.getInfo = function () {
      console.log(`${this.brand} (${this.color}): `, vehicle);
    };

    return vehicle;
  }
}

const factory = new VehicleFactory();

const vehicles = [
  factory.create('Lamborghini', 'orange', 'sport'),
  factory.create('Dodge', 'silver', 'truck'),
];

vehicles.forEach((m) => {
  m.getInfo();
});
