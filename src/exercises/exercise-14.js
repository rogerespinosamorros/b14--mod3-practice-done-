/* 
EJERCICIO 14:
Muestra un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores:
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks
*/

import	{ movies }	from	'../data/movies.js';    

export function exercise14() {
}


function getBestMovieByActor(movies, actor) {
  return movies
    .filter(movie => movie.actors.includes(actor))
    .sort((a, b) => b.rating - a.rating)
    .map(movie => movie.title)[0];
}

const bestMoviesByActor = [
  getBestMovieByActor(movies, 'Leonardo DiCaprio'),
  getBestMovieByActor(movies, 'Robert De Niro'),
  getBestMovieByActor(movies, 'Tom Hanks')
];

console.log(bestMoviesByActor);



