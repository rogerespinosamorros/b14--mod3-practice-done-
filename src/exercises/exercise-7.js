/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
Ejemplos:
"La frase 'Dábale arroz a la zorra el abad' es un palíndromo"
"La frase 'hola mundo' NO es un palíndromo"
*/
export function exercise7() {

}

function isPalindrome(string) {
    
    const cleanString = string.toLowerCase().replace(/[^a-z]/g, '');
  
    
    const reversedString = cleanString.split('').reverse().join('');
    
   
    if (cleanString === reversedString) {
      return `La frase '${string}' es un palíndromo`;
    } else {
      return `La frase '${string}' NO es un palíndromo`;
    }
  }
  
 
  console.log(isPalindrome("Dábale arroz a la zorra el abad"));  
  console.log(isPalindrome("hola mundo"));  
  