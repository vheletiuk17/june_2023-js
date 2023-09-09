// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sum(a,b) {
    return a*b
}

console.log(sum(a=2, b=9));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    return r*r
}
console.log(circle(15));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіуcом
function cylinder(h,r) {
    return h*r
}
console.log(cylinder(h=7, r=10));

// - створити функцію яка приймає масив та виводить кожен його елемен
function array(arr) {
    for (const item of arr) {
        console.log(item);
    }
return arr
}
array([11,22,33,`asd`,true])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function pCreator(text) {
    document.write(`<p>${text}</p>`);
}
pCreator(`asd, zxc, qwe`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator(text) {
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}
ulCreator(`asd zxc qwe`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulCreatorCycle(text, number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(` <li>${text}</li> `)
    }
    document.write(`</ul>`)
}
ulCreatorCycle(`text example 1`, number=10)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список\
function array2(arr) {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(` <li>${item}</li> `)
    }
    document.write(`</ul>`)
}
array2([`qwe`, `asd`, 11, 22, true, false])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

    function user(arr) {
        for (const user of arr) {
            document.write(`
            <div>
                <p>id: ${user.id}</p>
                <p>name: ${user.name}</p>
                <p>age: ${user.age}</p>             
            </div>
            `);
        }
    }
user(users);
// - створити функцію яка повертає найменьше число з масиву
function ret(arr) {
    let min = arr [0]
    for (let i = 1; i < ret.length; i++) {
        if (arr[i] < min){
            min=arr[i]

        }
    }
    return min
}
console.log(`ret: `, ret( [1, 2, 5, 8, 11, 13, 5, 55, ]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log('sum : ', sum([1, -4, 7]));