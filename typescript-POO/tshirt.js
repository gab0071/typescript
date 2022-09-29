"use strict";
exports.__esModule = true;
exports.Tshirt = void 0;
// Clase (Molde)
var Tshirt = /** @class */ (function () {
    // Metodos (Funciones o acciones del objeto)
    // constructor
    function Tshirt(color, model, size, price) {
        this.color = color;
        this.model = model;
        this.size = size;
        this.price = price;
    }
    Tshirt.prototype.setColor = function (color) {
        this.color = color;
    };
    Tshirt.prototype.getColor = function () {
        return this.color;
    };
    return Tshirt;
}());
exports.Tshirt = Tshirt;
