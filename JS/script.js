'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// const movie = prompt('Один из последних просмотренных фильмов?', ''),
//       rate = prompt('На сколько оцените его?', ''),
//       movie2 = prompt('Один из последних просмотренных фильмов?', ''),
//       rate2 = prompt('На сколько оцените его?', '');
// personalMovieDB.movies[movie] = rate;
// personalMovieDB.movies[movie2] = rate2;
if (personalMovieDB.count < 10) {
    alert('Ты лох, а не киноман, марш смотреть кино, быдло безграмотное');
} else if (10 <= personalMovieDB.count < 30) {
    alert('Ну ниче так, но все равно мало');
} else if (30 <= personalMovieDB.count) {
    alert('А ты не такой уж и тупой, с тобой можно хотя бы буквами говорить');
} else {
    alert('Не, ну ты что вводишь то!');
}

for (let i = 0; i < 2; i++) {
    const movie = prompt('Один из последних просмотренных фильмов?', ''),
          rate = prompt('На сколько оцените его?', '');

    if (movie === null || rate === null || movie === '' || rate === '' || movie.length >= 50) {
        alert('error');
        i--;
    } else {
        personalMovieDB.movies[movie] = rate;
    }

    personalMovieDB.movies[movie] = rate;
}

console.log(personalMovieDB);

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
}

showFirstMessage("Wululu");
console.log('num');

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();

console.log(anotherNum);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sum = 0;  
for (let babki in salaries) {
    sum += salaries[babki];
}

console.log(sum);