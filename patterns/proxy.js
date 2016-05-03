/* Subject */
function IMath() {
	this.add = function(x, y) {};
	this.sub = function(x, y) {};
}

/* Real Subject */
function RMath() {
	this.add = function(x, y) {
		return x + y;
	};
	this.sub = function(x, y) {
		return x - y;
	};
}

RMath.prototype = new IMath();
RMath.prototype.constructor = RMath;

/* Proxy */
function MathProxy() {
	var math = new RMath();
	
	this.add = function(x, y) {
		return math.add(x, y);
	};
	this.sub = function(x, y) {
		return math.sub(x, y);
	};
}

var test = new MathProxy();
console.log(test.add(3, 2)); // 5
console.log(test.sub(3, 2)); // 1