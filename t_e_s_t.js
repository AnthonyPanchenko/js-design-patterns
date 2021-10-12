function Shape() {
  this.ddd = function () {
    console.log('Shape > ddd');
  };
}

Shape.prototype.move = function (x, y) {
  this.fff = function () {
    console.info('Shape > move fff');
  };
  console.info('Shape > move');
};

function Rectangle() {
  Shape.call(this);

  this.ggg = function () {
    console.info('Rectangle > ggg');
  };
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

// var f = rect.move();
