"use strict";






const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");

const PersonalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

for (let i = 0; i < 2; i++) {
    const a = prompt("один из последних просмотренных фильмов", ""),
          b = prompt("На сколько оцените его?","");
        
       
        if (a != null && b != null && a != '' && b != '' && a.lenght < 50){

    
    
          PersonalMovieDB.movies[a] = b;
          console.log('done');

        } else {
            console.log('error');
            i--;
        }

    }



if(PersonalMovieDB.count < 10){
    console.log("Просмотрено двольно мало фильмов");
} else if (PersonalMovieDB.count >= 10 && PersonalMovieDB < 30){
    console.log("Вы классический зритель");
} else if (PersonalMovieDB.count >= 30){
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(PersonalMovieDB);
