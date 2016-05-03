// function Sender() {

// }

// function Command() {

// }

// function Receiver() {

// }

// function Invoker() {

// }


var carManager = {
    // request information
    requestInfo: function (model, id) {
        return console.log("The information for " + model + " with ID " + id + " is foobar");
    },

    // purchase the car
    buyVehicle: function (model, id) {
        return console.log("You have successfully purchased Item " + id + ", a " + model);
    },

    // arrange a viewing
    arrangeViewing: function (model, id) {
        return console.log("You have successfully booked a viewing of " + model + " ( " + id + " ) ");
    },
    execute: function (name) {
        return carManager[name] && carManager[name].apply(carManager, [].slice.call(arguments, 1));
    }
};


carManager.execute("buyVehicle", "Ford Escort", "453543");