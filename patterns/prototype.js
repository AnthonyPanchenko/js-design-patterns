var carProto = {
    init: function (model) {
        this.model = model;
    },

    getModel: function () {
        console.log("The model of this vehicle is > " + this.model);
    }
};

var proto = (function () {
    function Car() { };

    return function (proto) {
        Car.prototype = proto;
        return new Car();
    };
})();

var prtCar = proto(carProto);

prtCar.init('Dodge Viper');
prtCar.getModel();