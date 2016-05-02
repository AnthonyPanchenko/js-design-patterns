var myMixins = {
    moveUp: function () {
        console.log("move up");
    },

    moveDown: function () {
        console.log("move down");
    },

    stop: function () {
        console.log("stop!");
    }
};

// Car constructor
function Car() {
    this.moveLeft = function () {
        console.log("move left");
    }
};

// Truck constructor
function Truck() {
    this.moveRight = function () {
        console.log("move right");
    }
};

// simple Extend method
Object.prototype.extend = function (obj) {
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) this[p] = obj[p];
    }
};

// Extend both constructors with our Mixin
Car.prototype.extend(myMixins);
Truck.prototype.extend(myMixins);

// Create a new instance of Car
var car = new Car();

car.moveLeft(); // move left
car.moveDown(); // move down
car.stop(); // stop!