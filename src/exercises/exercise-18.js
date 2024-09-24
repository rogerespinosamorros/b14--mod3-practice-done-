/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/
export function exercise18(cadena) {
    return (
      '#' +
      cadena
        .split(' ')                   
        .map(palabra =>                
          palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
        )
        .join('')                    
    );
  }
  
  console.log(exercise18("Programando en Javascript")); // Resultado: "#ProgramandoEnJavascript"
  console.log(exercise18("Hola mundo"));                // Resultado: "#HolaMundo"
  

  