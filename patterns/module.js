// using closure
var someModule1 = (function () {
    var _obj = {}; // private variable

    return {
        setVal: function (key, val) {
            _obj[key] = val;
        },
        getVal: function (key) {
            return _obj[key];
        }
    }
} ());

someModule1.setVal('item-1', 3);
console.log(someModule1.getVal('item-1'));

// ===============================================

// using object notation
var someModule2 = {
    obj: {},
    setVal: function (key, val) {
        this.obj[key] = val;
    },
    getVal: function (key) {
        return this.obj[key];
    }
}

someModule2.setVal('item-1', 3);
console.log(someModule2.getVal('item-1'));

// ===============================================
// The Revealing Module Pattern

var revealingModule = (function () {
    var _privateVar = "Ben Cherry",
        publicVar = "Hey there!";

    function _privateFunction() {
        console.log("Name:" + _privateVar);
    }

    function publicSetName(strName) {
        _privateVar = strName;
    }

    function publicGetName() {
        _privateFunction();
    }

    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };

})();

revealingModule.setName("Paul Kinlan");
console.log(revealingModule.getName());