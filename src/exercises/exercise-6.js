/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/



export function exercise6(randomArray) {
}

function randomArray() {
    let arr = [];
    
   
    for (let i = 0; i < 10; i++) {
      let randomNum = Math.floor(Math.random() * 101);
      arr.push(randomNum);
    }
  
    let min = Math.min(...arr);
    let max = Math.max(...arr);
  
   
    console.log("Array generado:", arr);
    console.log("Número menor:", min);
    console.log("Número mayor:", max);
  }
  

  randomArray();
  

