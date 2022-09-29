// Clase (Molde)
export class Tshirt {
    // Propiedades (Caracteristicas del objeto)
    public color: string
    public model: string
    public size: string
    public price: number

    // Metodos (Funciones o acciones del objeto)
    // constructor
    constructor(color, model, size, price) {
        this.color = color
        this.model = model
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
