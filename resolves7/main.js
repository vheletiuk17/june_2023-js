let nowTime = new Date(4366473254334)
console.log(nowTime);


try {
    console.log(x);
}catch (error) {
    console.log(error);
}

let car = {
    id: 1,
    producer: 'subaru',
    model: 'wrx',
    power: 365
};

let {model, power} = car
console.log(model);
console.log(power);
function extractor (model, power) {
    return {
        carModel: model,
        carPower: power
    }
}
extractor({model: `wrx`, power: 365, asd: ``, zxz: ``})

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


let jsonUsers = JSON.stringify(users)
console.log(jsonUsers);
let perseUser = JSON.parse(jsonUsers)
console.log(perseUser);