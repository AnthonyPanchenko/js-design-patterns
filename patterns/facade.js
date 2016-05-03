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