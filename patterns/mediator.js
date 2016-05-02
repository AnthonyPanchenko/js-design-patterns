var mediator = (function () {
    var events = {};

    function subscribe(channel, fn) {
        if (!events[channel]) events[channel] = [];
        events[channel].push({ context: this, callback: fn });
        return this;
    };

    function unsubscribe(channel, callback) {
        if (!events.hasOwnProperty(channel)) return false;
        for (var i = 0; i < events[channel].length; i++) {
            if (events[channel][i].callback === callback) {
                events[channel].splice(i, 1);
                return true;
            }
        }
        return false;
    };

    function publish(channel) {
        if (!events[channel]) return false;
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < events[channel].length; i++) {
            var subscription = events[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };

    return {
        publish: publish,
        subscribe: subscribe,
        unsubscribe: unsubscribe
    };

} ());

function someSubscriber(name) {
    console.log(this.name);
    this.name = name;
    console.log(this.name);
};

mediator.name = 'Tim'; // name by default
mediator.subscribe('changeName', someSubscriber); // subscribe
mediator.publish('changeName', 'David'); // new name

// mediator.unsubscribe('changeName', someSubscriber); // unsubscribe

setTimeout(function () {
    mediator.publish('changeName', 'Bob'); // new name
}, 3000);