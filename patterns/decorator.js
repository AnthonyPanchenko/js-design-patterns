// A vehicle constructor
function Vehicle(type) {
    // by defaults
    this.type = type || "car";
    this.model = "default";
    this.color = "black";
};

// instance for a basic vehicle
var firstInstance = new Vehicle("car");
console.log(firstInstance);

// Lets create a new instance of vehicle, to be decorated
var truck = new Vehicle("truck");

// Decorating vehicle
truck.setModel = function (modelName) {
    this.model = modelName;
};

truck.setColor = function (color) {
    this.color = color;
};

truck.setModel("MAN");
truck.setColor("blue");
console.log(truck);

// Demonstrate "vehicle" is still unaltered
var secondInstance = new Vehicle("car");
console.log(secondInstance);