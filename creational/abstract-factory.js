// We use the factory pattern to create multiple objects from the same family without having to deal with the creation process.
// The abstract pattern is similar; the difference is that it provides a constructor to create families of related objects.
// It is abstract, meaning it does not specify concrete classes or constructors.

class Boat {
  constructor(brand, type, price) {
    this.brand = brand;
    this.type = type;
    this.price = price;
  }

  showInfo() {
    console.log(`The ${this.type} ${this.brand} costs $${this.price}`);
  }
}

class Car {
  constructor(brand, type, price) {
    this.brand = brand;
    this.type = type;
    this.price = price;
  }

  showInfo() {
    console.log(`The ${this.type} ${this.brand} costs $${this.price}`);
  }
}

class AbstractFactory {
  static types = {
    boat: 'boat',
    car: 'car',
  };

  createVehicle(brand, type, price) {
    return type === AbstractFactory.types.boat
      ? new Boat(brand, type, price)
      : new Car(brand, type, price);
  }
}

const factory = new AbstractFactory();

factory.createVehicle('Apex', AbstractFactory.types.boat, 150000).showInfo();

factory
  .createVehicle('Allison', AbstractFactory.types.boat, 2500000)
  .showInfo();

factory.createVehicle('Audi', AbstractFactory.types.car, 80000).showInfo();

factory.createVehicle('BMW', AbstractFactory.types.car, 75000).showInfo();
