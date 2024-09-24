/* 
EJERCICIO 12:
Filtra las peliculas que pertenezcan a la categoria "Drama" e incluye solo el título y la descripción
Sugerencia: puedes usar la variable "categories" en el archivo "src/js/data/movies.js"
*/
// Importamos las películas y las categorías
import { movies } from '../data/movies.js';
import { categories } from '../data/movies.js';
export function exercise12() {
}



function filterDramaMovies(movies) {
  return movies
    .filter(movie => movie.category === categories.drama)  
    .map(movie => ({ title: movie.title, description: movie.description })); 
}

// Para probar la función
const dramaMovies = filterDramaMovies(movies);
console.log(dramaMovies);

