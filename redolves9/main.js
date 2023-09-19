//
// - створити блок
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let div = document.createElement('div')
div.classList.add('wrap', 'collapse', 'alpha', 'beta')
document.body.append(div, div.cloneNode(true))


// - Є масив:
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const arr =  ['Main','Products','About us','Contacts']
let ul = document.createElement('ul')
for (const text of arr) {
    const li = document.createElement("li")
    li.innerText = text;
    ul.append(li)
}
document.body.append(ul)

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const element of coursesAndDurationArray) {
//     let div2 = document.createElement('div');
//     document.body.append(div2)
//
//     let h2 = document.createElement('h2')
//     h2.innerText = `title - ${element.title}.
//     Month Duration - ${element.monthDuration}`
//     div2.append(h2);
//
// }
//
// =========================
//
//     - Є масив
//

//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const elements of coursesAndDurationArray) {
    let div3 = document.createElement('div');
    div3.classList.add(`item`)
    document.body.append(div3)

    let h1 = document.createElement('h1')
    h1.classList.add(`heading`)
    h1.innerText = `title - ${elements.title}`

    let p = document.createElement(`p`)
    p.classList.add(`description`)
    p.innerText = `Month Duraction - ${elements.monthDuration}`
    div3.append(h1, p);

}
//
// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
