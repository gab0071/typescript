import { Tshirt } from '../typescript-POO/tshirt'

class Main {
    constructor() {
        console.log('js app loaded!')
    }
    
    getTshirt(){
        return new Tshirt('Blue', 'Nike', 'L', 40);
    }
}
var main = new Main()
