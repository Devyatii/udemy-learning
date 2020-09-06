"use strict";

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = +prompt("Вам есть 18 лет?", "18");
// console.log(typeof(answer), answer + 5);

const answers = [];

answers[0] = prompt('Как ваше имя', '');
answers[1] = prompt('Как ваша фамилия', '');
answers[2] = prompt('Сколько Вам лет', '');

document.write(answers);