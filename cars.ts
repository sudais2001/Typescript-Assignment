type car = {
    manufacture: string
    model: string
    [key: string]: any;

}

function creatCar(manufacture: string, model: string, optional: Record<string, any>): car {
return{
       manufacture,
       model,
       ...optional
}
}
    
const mycar: car = creatCar("toyota","corola", { colour: "silver" , year: 2024})
console.log(mycar)
