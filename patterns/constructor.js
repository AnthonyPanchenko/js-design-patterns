// Basic Constructors
function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.getInfo = function () {
    return "Car: " + this.model + "\nMileage: " + this.miles + "\nYear of manufacture: " + this.year;
  }
};

// create new instances of the car
var civic = new Car("Honda Civic", 2009, 20000);
console.log(civic.getInfo());

// =======================================================================================================

// Constructor With Prototype
function Cars(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
};

Cars.prototype.getInfo = function () {
  return "Car: " + this.model + "\nMileage: " + this.miles + "\nYear of manufacture: " + this.year;
};

// create new instances of the car
var astonMartin = new Cars("Aston martin", 2003, 50000);
console.log(astonMartin.getInfo());