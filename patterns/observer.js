function Observer() {
    this.subscribers = {};

    this.subscribe = function (type, fn) {
        if (!this.subscribers[type]) this.subscribers[type] = [];
        if (this.subscribers[type].indexOf(fn) == -1) this.subscribers[type].push(fn);
    };

    this.unsubscribe = function (type, fn) {
        var listeners = this.subscribers[type];
        if (!listeners) return;
        var index = listeners.indexOf(fn);
        if (index > -1) listeners.splice(index, 1);
    };

    this.publish = function (type, evtObj) {
        if (!this.subscribers[type]) return;
        if (!evtObj.type) evtObj.type = type;
        var listeners = this.subscribers[type];
        for (var i = 0; i < listeners.length; i++) {
            listeners[i](evtObj);
        }
    };
};

// create instance
var evtMan = new Observer();

// some listeners
function fooOne(evt) {
    console.log('fooOne > ' + evt.mess);
};

function fooTwo(evt) {
    console.log('fooTwo > ' + evt.mess);
};

// sign listeners
evtMan.subscribe('someEvent', fooOne);
evtMan.subscribe('someEvent', fooTwo);

evtMan.publish('someEvent', { mess: 'Hello !' });

// evtMan.unsubscribe('someEvent', fooTwo);

setTimeout(function () {
    evtMan.publish('someEvent', { mess: 'Hello TWO!' });
}, 1000);