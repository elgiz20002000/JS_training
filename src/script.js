"use strict";

let numberOfFilms = +prompt("сколько фильмов вы уже посмотрели ? " , "");

let personalMovieDB = {
    count:numberOfFilms ,
    movies:{} ,
    actors:{} ,
    genres:[] ,
    privat:false
};

let movieName_1 = prompt("Один из последних просмотренных филмов ?" , '') ,
 moviePoint_1 = prompt("На сколько оцените его ?" , ''),
  movieName_2 = prompt("Один из последних просмотренных филмов ?" , '') ,
 moviePoint_2 = prompt("На сколько оцените его ?" , '');



 personalMovieDB.movies[movieName_1] = moviePoint_1;
 personalMovieDB.movies[movieName_2] = moviePoint_2;


 
console.log(personalMovieDB);






