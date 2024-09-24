/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/
export function exercise16(year) {
    const century = Math.ceil(year / 100);
    return century;
}
function obtenerSiglo(año) {
    return Math.ceil(año / 100);
  }
  
  
  console.log(obtenerSiglo(1999)); // Resultado: 20
  console.log(obtenerSiglo(2000)); // Resultado: 20
  console.log(obtenerSiglo(2024)); // Resultado: 21
  console.log(obtenerSiglo(1805)); // Resultado: 19
  