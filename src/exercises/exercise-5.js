import { showContent } from "./utils";

/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”

*/

export function exercise5(string) {
}

    function repetitions(text) {
        let result = '';     
        for (let i = 0; i < text.length; i++) {   
            let x = text[i];
            result += x.toUpperCase(); 
            result += x.toLowerCase().repeat(i); 
        }
        return result;  
    }
    
    console.log(repetitions('code'));        
    console.log(repetitions('list'));      
    console.log(repetitions('function'));  
    
    
    

