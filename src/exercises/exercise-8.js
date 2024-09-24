/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/
export function exercise8() {
}
const alphabet = "abcdefghijklmnopqrstuvwxyz";




function cleanString(str) {
  // He buscado en todos lados para llegar a esto, no me salía con lo enseñado en el curso
  const noAccents = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Lo mismo que en la linea anterior, no me salía con lo enseñado en el curso
  return noAccents.replace(/[^a-zA-Z]/g, '').toLowerCase();
}


function getAlphabetPositions(str) {
  const cleanedStr = cleanString(str);
  const positions = [];

  for (let i = 0; i < cleanedStr.length; i++) {
    
    const position = alphabet.indexOf(cleanedStr[i]) + 1;  
    positions.push(position);
  }

  return positions;
}


const exampleString = "Dábale arroz a la zorra el abad";
const result = getAlphabetPositions(exampleString);


console.log(result);  
