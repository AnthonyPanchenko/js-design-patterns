// The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized
// with values it copied from a prototype - or example - object.

class VehiclePrototype {
  constructor(proto) {
    this.proto = proto;
  }

  clone() {
    const customer = new Vehicle();

    customer.color = this.proto.color;
    customer.brand = this.proto.brand;

    return customer;
  }
}

class Vehicle {
  constructor(color, brand) {
    this.color = color;
    this.brand = brand;
  }

  info() {
    console.log(`brand: ${this.brand}, color: ${this.color}`);
  }
}

const newProto = new Vehicle('BMW', 'white');
const prototypeVehicle = new VehiclePrototype(newProto);

const clonedVehicle = prototypeVehicle.clone();
clonedVehicle.info();

/*
function Cat(name, color) {
  this.name = name;
  this.color = color;
}

function newCat(constructor, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);

  return constructor.apply(Cat, args) || obj;
}

const cat = newCat(Cat, 'red', 'sam');
    console.log(cat);
*/
