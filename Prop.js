"use strict";
exports.__esModule = true;
var Prop = /** @class */ (function () {
    function Prop() {
        this._x = 10;
    }
    Object.defineProperty(Prop.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (val) {
            this._x = val;
        },
        enumerable: false,
        configurable: true
    });
    return Prop;
}());
exports["default"] = Prop;
