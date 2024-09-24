/* 
EJERCICIO 19:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}
Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/

export function exercise19(string) {
    const result = {};
    const cleanString = string.toLowerCase().replace(/[^a-z]/g, '');
    for (let i = 0; i < cleanString.length; i++) {
        const letter = cleanString[i];
        result[letter] = (result[letter] || 0) + 1;
    }
    return result;
}