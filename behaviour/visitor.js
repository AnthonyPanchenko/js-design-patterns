// The Visitor pattern defines a new operation to a collection of objects without changing the objects themselves.
// The new logic resides in a separate object called the Visitor.

class Vehicle {
  constructor(color, brand) {
    this._color = color;
    this._brand = brand;
  }

  accept(visitor) {
    visitor.visit(this);
  }

  get color() {
    return this._color;
  }

  set color(c) {
    return (this._color = c);
  }

  get brand() {
    return this._brand;
  }

  set brand(b) {
    return (this._brand = b);
  }

  info() {
    console.log(`brand: ${this._brand}, color: ${this._color}`);
  }
}

class DefineVehicleColor {
  visit(v) {
    v.color = `${v.color} (chameleon)`;
  }
}

class DefineVehicleBrand {
  visit(v) {
    v.brand = `${v.brand} X5`;
  }
}

const bmw = new Vehicle('silver', 'BMW');

const visitorColor = new DefineVehicleColor();
const visitorBrand = new DefineVehicleBrand();

bmw.accept(visitorColor);
bmw.accept(visitorBrand);

bmw.info();
