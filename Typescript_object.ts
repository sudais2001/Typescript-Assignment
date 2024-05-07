import { ADDRGETNETWORKPARAMS } from "dns";
import { Agent } from "http";

//Write a program that creats objects containing this items.
// let Person_Name :string = 'Sudais';

// const personName_Array :string[] =['person', 'car', 'juice];

//Datatype oof person object.
interface person {
    age : number,
    name : string,
    nationality : string,
    student : Boolean
}
// print object.
let person :person ={
    age : 21 ,
    name : 'Sudais' ,
    nationality :'Pakistan' ,
    student : true

}
//print person.
console.log(person);
interface car{
    maker :string,
    colour :string,
    automatic : boolean
}
// car object
let  car = {
    makder : 'Nissan',
    colour : 'Blue',
    automatic :true
}
// print car
console.log(car);