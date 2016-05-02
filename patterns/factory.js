// A constructor for defining new cars
function Car(opt) {
  // some defaults
  this.doors = opt.doors || 3;
  this.state = opt.state || "brand new";
  this.color = opt.color || "silver";
}

// A constructor for defining new trucks
function Truck(opt) {
  // some defaults
  this.state = opt.state || "used";
  this.wheelSize = opt.wheelSize || "large";
  this.color = opt.color || "blue";
}

// Define a skeleton vehicle factory
function VehicleFactory() { }

// Define the prototypes and utilities for this factory
// Our default vehicleClass is Car
VehicleFactory.prototype.vehicleClass = Car;

// Our Factory method for creating new Vehicle instances
VehicleFactory.prototype.createVehicle = function (type, opt) {
  switch (type) {
    case "car": this.vehicleClass = Car;
      break;
    case "truck": this.vehicleClass = Truck;
      break;
    //defaults to VehicleFactory.prototype.vehicleClass (Car)
  }
  return new this.vehicleClass(opt);
};

// Create an instance of our factory that makes cars
var carFactory = new VehicleFactory();
var car = carFactory.createVehicle("car", {
  color: "yellow",
  doors: 4
});

// Test to confirm our car was created using the vehicleClass/prototype Car
console.log(car instanceof Car); // true

// => Car object of color "yellow", doors: 6 in a "brand new" state
console.log(car);