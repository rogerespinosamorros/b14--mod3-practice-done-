/* 
EJERCICIO 13:
Agrupa en un array las peliculas por categorias:
[
    {
        Drama: {
            {
                title: "Fight Club",
                director: "David Fincher",
                actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
                year: 1999,
                description:
                "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                category: "Drama",
                rating: 8.8,
            },
            Action: {
                ...
            },
            ...
        }
    }
]
Sugerencia: usa el método "groupBy" de la clase Object
*/

import { movies } from '../data/movies.js';
export function exercise13() {
}

function groupByCategory(movies) {
  return movies.reduce((groupedMovies, movie) => {
    const { category } = movie;
    if (!groupedMovies[category]) {
      groupedMovies[category] = [];
    }
    groupedMovies[category].push(movie);
    return groupedMovies;
  }, {});
}


const moviesByCategory = groupByCategory(movies);
console.log(moviesByCategory);

