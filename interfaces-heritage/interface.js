var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shoes = /** @class */ (function () {
    // Metodos (Funciones o acciones del objeto)
    // constructor
    function Shoes(color, size, price) {
        this.color = color;
        this.size = size;
        this.price = price;
    }
    Shoes.prototype.setColor = function (color) {
        this.color = color;
    };
    Shoes.prototype.getColor = function () {
        return this.color;
    };
    return Shoes;
}());
// Heritage
// child class 
var Heels = /** @class */ (function (_super) {
    __extends(Heels, _super);
    function Heels() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Heels.prototype.setFancyModel = function (FancyModel) {
        this.FancyModel = FancyModel;
    };
    Heels.prototype.getFancyModel = function () {
        return this.FancyModel;
    };
    return Heels;
}(Shoes));
var Model = new Heels('red', 40, 1200);
Model.setFancyModel(true);
Model.setColor('gold');
console.log(Model);
