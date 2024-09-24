/* 
EJERCICIO 15:
Muestra un array con el título y la descripción de las mejores peliculas ordenadas de mejor a peor, 
siendo las mejores aquellas cuya valoración es superior a la valoración media de todas las películas
*/


import { movies } from '../data/movies.js';


  const averageRating = movies.reduce((acc, movie) => acc + movie.rating, 0) / movies.length;
    const bestMovies = movies.filter(movie => movie.rating > averageRating);
    const bestMoviesSorted = bestMovies.sort((a, b) => b.rating - a.rating);
    const bestMoviesTitlesAndDescriptions = bestMoviesSorted.map(movie => ({ title: movie.title, description: movie.description }));
    console.log(bestMoviesTitlesAndDescriptions);
    return bestMoviesTitlesAndDescriptions;


exercise15();
export function exercise15() {
}



