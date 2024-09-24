/* 
EJERCICIO 11:
Ordena las peliculas por valoracion (propiedad "rating") de mayor a menor
*/
import { movies } from "../data";   

export function exercise11() {
  return movies.sort((movie1, movie2) => {
    if (movie1.rating < movie2.rating) return 1;
    if (movie1.rating > movie2.rating) return -1;
    return 0;
  });
}   // Resultado: [{...},{...},...] 


