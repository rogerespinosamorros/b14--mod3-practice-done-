/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

export function exercise17() {
}
function esIsograma(cadena) {
    const letras = cadena.toLowerCase().replace(/\s+/g, '').split(''); 
    const contador = {};
  
    
    letras.forEach(letra => {
      contador[letra] = (contador[letra] || 0) + 1;
    });
  
    
    const ocurrencias = Object.values(contador);
  
   
    const esIsograma = ocurrencias.every(num => num === ocurrencias[0]);
  
   
    if (esIsograma) {
      return `La cadena '${cadena}' es un isograma.`;
    } else {
      return `La cadena '${cadena}' no es un isograma.`;
    }
  }
  
 
  console.log(esIsograma('hola mundo')); // Resultado: La cadena 'hola mundo' no es un isograma
  console.log(esIsograma('aaa bbb'));    // Resultado: La cadena 'aaa bbb' es un isograma
  