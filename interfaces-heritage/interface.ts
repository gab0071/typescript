// interface
interface BaseShoe {
    setColor(color);
    getColor();
}

class Shoes implements BaseShoe{
    // Propiedades (Caracteristicas del objeto)
    public color: string
    public size: number
    public price: number

    // Metodos (Funciones o acciones del objeto)
    // constructor
    constructor(color, size, price) {
        this.color = color
        this.size = size
        this.price = price
    }

    public setColor(color) {
        this.color = color
    }
    public getColor() {
        return this.color
    }
}


// Heritage
// child class 
class Heels extends Shoes{
    public FancyModel: boolean;

    setFancyModel(FancyModel: boolean) {
        this.FancyModel = FancyModel;
    }

    getFancyModel():boolean{
        return this.FancyModel;
    }
}

var Model = new Heels('red', 40, 1200);
Model.setFancyModel(true)
Model.setColor('gold')

console.log(Model)

