'use strict';

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Ты лох, а не киноман, марш смотреть кино, быдло безграмотное');
    } else if (10 <= personalMovieDB.count < 30) {
        alert('Ну ниче так, но все равно мало');
    } else if (30 <= personalMovieDB.count) {
        alert('А ты не такой уж и тупой, с тобой можно хотя бы буквами говорить');
    } else {
        alert('Не, ну ты что вводишь то!');
    }
}

detectPersonalLevel();

function rememberMyFilms() {
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
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const rating = prompt(`Ваш любимый жанр под номером ${i}`);
        if (rating === null || rating === '') {
            alert('error');
            i--;
        } else {
            personalMovieDB.genres.push(rating);
        }
    }
}

writeYourGenres();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

function showMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

