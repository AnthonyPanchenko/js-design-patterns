var patternFacade = (function () {

    var _private = {
        obj: {},
        get: function (key) {
            return this.obj[key];
        },
        set: function (key, val) {
            this.obj[key] = val;
        },
        init: function () {
            console.log(this.obj);
        }
    };

    return {
        facade: function (o) {
            _private.set(o.key, o.val);
            _private.init();
        }
    }
})();

patternFacade.facade({ key: 'item-1', val: 5 });

// ====== Another implementation of explaining how it can work with other classes ======

function SubSystem1() {
    this.method1 = function () {
        console.log("called SubSystem1.method1");
    };
}
function SubSystem2() {
    this.method2 = function () {
        console.log("called SubSystem2.method2");
    };
    this.methodB = function () {
        console.log("called SubSystem2.methodB");
    };
}

/* Facade */
function Facade() {
    var s1 = new SubSystem1(),
        s2 = new SubSystem2();

    this.m1 = function () {
        console.log("called Facade.m1");
        s1.method1();
        s2.method2();
    };

    this.m2 = function () {
        console.log("called Facade.m2");
        s2.methodB();
    };
}

/* Client */
function test() {
    var facade = new Facade();
    facade.m1();
    facade.m2();
}

test();