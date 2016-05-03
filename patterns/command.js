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

    // executor
    execute: function (method) {
        return carManager[method] && carManager[method].apply(carManager, [].slice.call(arguments, 1));
    }
};

carManager.execute("buyVehicle", "Ford Escort", "453543");

// ====== Another implementation of explaining how it can work with other classes ======

function plus(x, y) { return x + y; };
function minus(x, y) { return x - y; };

function Command(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
}

function PlusCommand(value) {
    return new Command(plus, minus, value);
};

function MinusCommand(value) {
    return new Command(minus, plus, value);
};

function Calc() {
    this.current = 0;
    this.commands = []; // the story of commands

    this.execute = function (command) {
        this.current = command.execute(this.current, command.value);
        this.commands.push(command);
        console.log(this.commands);
    };

    this.undo = function () {
        var command = this.commands.pop();
        this.current = command.undo(this.current, command.value);
        console.log(this.current);
    };
};

var calc = new Calc();

// issue commands
calc.execute(new PlusCommand(70));
calc.execute(new MinusCommand(20));
calc.execute(new PlusCommand(10));

// reverse last two commands
calc.undo();
calc.undo();