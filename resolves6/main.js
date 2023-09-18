// - Знайти та вивести довижину настипних стрінгових значень
let str = 'hello world'
let str1 = 'lorem ipsum'
let str2 = 'javascript is cool'
console.log(str.length);
console.log(str1.length);
console.log(str2.length);
// - Перевести до великого регістру наступні стрінгові значення

let case1=str.toUpperCase()
console.log(case1);
let case2=str1.toUpperCase()
console.log(case2);
let case3=str2.toUpperCase()
console.log(case3);

// - Перевести до нижнього регістру настипні стрінгові значення
let string1 ='HELLO WORLD'
let string2 ='LOREM IPSUM'
let string3 ='JAVASCRIPT IS COOL'
let case4 =string1.toLowerCase()
console.log(case4);
let case5 =string2.toLowerCase()
console.log(case5);
let case6 =string3.toLowerCase()
console.log(case6);

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str5 = ' dirty string   '
let strClean =str5.replaceAll(' ','')
console.log(strClean);
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let str6 = 'Ревуть воли як ясла повні';
const stringToarray = (str) => str.split(' ');
console.log(stringToarray(str6));
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
 const arrOfnumbers= [10,8,-7,55,987,-1011,0,1050,0]
const results= arrOfnumbers.map((num) =>num.toString());
console.log(results);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3];
const sortNums = (nums, direction) => {
    switch (direction) {
        case 'ascending':
            nums = nums.sort((a, b) => a - b);
            break;
        case 'descending':
            nums = nums.sort((a, b) => b - a);
            break;
        default:
            console.error('wrong direction type!!')
    }
    return nums;
}
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

//
// ==========================
// - є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sort = coursesAndDurationArray.sort((i1, i2) =>{
    return i2.monthDuration-i1.monthDuration
});
console.log(sort);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filter);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

// let idCourses = [];
// for (const item of coursesAndDurationArray) {
//     item.id = uuidv4();
//     idCourses.push(item)
// }
coursesAndDurationArray.map(function (item) {
    item.id= uuidv4();
    return item
})
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
