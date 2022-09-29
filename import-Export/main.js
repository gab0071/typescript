"use strict";
exports.__esModule = true;
var tshirt_1 = require("../typescript-POO/tshirt");
var Main = /** @class */ (function () {
    function Main() {
        console.log('js app loaded!');
    }
    Main.prototype.getTshirt = function () {
        return new tshirt_1.Tshirt('Blue', 'Nike', 'L', 40);
    };
    return Main;
}());
var main = new Main();
