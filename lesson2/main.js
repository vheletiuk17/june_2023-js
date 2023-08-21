// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let list =[
    'apple',
    'banana',
    'mango',
    'orange',
    'watermelon',
    'grape',
    'melon',
    'strawberry',
    'pear',
    'plum'
]
console.log(list);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book=[
    'title',
    'pageCount',
    'genre',
    authors=[
        {
        age: 22,
        name: 'Petia'
    }
]
]
console.log(book);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users=[
    {id:1,name:'Vasia', username:'V1', password:'V1'},
    {id:2,name:'Petia', username:'P2', password:'P2'},
    {id:3,name:'Andrii', username:'A3', password:'A3'},
    {id:4,name:'Kolia', username:'K4', password:'K4'},
    {id:5,name:'Valera', username:'V5', password:'V5'},
    {id:6,name:'Ivanka', username:'I6', password:'I6'},
    {id:7,name:'Anna', username:'A7', password:'A7'},
    {id:8,name:'Oksana', username:'O8', password:'O8'},
    {id:9,name:'Oleg', username:'O9', password:'O9'},
    {id:10,name:'Max', username:'M10', password:'M10'}
]
    console.log(users[0].password)
    console.log(users[1].password)
    console.log(users[2].password)
    console.log(users[3].password)
    console.log(users[4].password)
    console.log(users[5].password)
    console.log(users[6].password)
    console.log(users[7].password)
    console.log(users[8].password)
    console.log(users[9].password)
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x=0
if (x>0){
    console.log('Вірно')
}else{
    console.log('Не Вірно')

}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time= prompt("How a o'clock")
if ( time>=0 && time< 15) {
    console.log('Перша четверть години')
}else if(15<time && time<=30) {
    console.log('Дуга четверть години')
} else if(30<time && time<45) {
    console.log('Третя четверть години')
} else if(time>45 && time <=59) {
    console.log('Четверта четверть години')
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
