// The Visitor pattern defines a new operation to a collection of objects without changing the objects themselves.
// The new logic resides in a separate object called the Visitor.

// ================================= many to many
class Player_1 {
  constructor(name) {
    this.name = name;
    this.ability = '';
  }

  accept(visitor) {
    visitor.visit(this);
  }

  info() {
    console.log(`I ${this.name} and i can ${this.ability}`);
  }
}

class Player_2 {
  constructor(name) {
    this.name = name;
    this.ability = '';
  }

  accept(visitor) {
    visitor.visit(this);
  }

  info() {
    console.log(`I ${this.name} and i can ${this.ability}`);
  }
}

// Visitors
class FlyVisitor {
  visit(player) {
    player.ability = 'fly';
  }
}

class SwimVisitor {
  visit(player) {
    player.ability = 'swim';
  }
}

const p1 = new Player_1('Player 1');
const p2 = new Player_2('Player 2');

const fVisitor = new FlyVisitor();
const sVisitor = new SwimVisitor();

p1.accept(fVisitor);
p2.accept(sVisitor);

p1.info();
p2.info();

// ====================================================== one to many

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
