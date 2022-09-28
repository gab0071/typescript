// string 
let strVar: string = "catellaTech";

// number
let numVar: number = 2022;

// boolean
let boolVar: boolean = true;

// any
let anyValue: any = false;
anyValue = "blockchain developers";

// arry
let arrVar: Array<string> = ['Smart-Contract','hardhat']
let arrNumVar: number[] = [1,2,3,4,5,6];

// custom data type 
type wordsOrNumebers = string | number;
let anotherThing: wordsOrNumebers = "it works";
console.log(anotherThing);
anotherThing= 24;
console.log(anotherThing)

console.log(strVar, numVar, boolVar, anyValue, arrVar);
console.log(arrNumVar);