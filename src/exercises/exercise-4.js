

/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/
export function exercise4() {
}
    function removeVowels(str) {
        
        const vowels = "aeiouAEIOU";
        
       
        let result = "";
      
        
        for (let i = 0; i < str.length; i++) {
          if (!vowels.includes(str[i])) {
            result += str[i];
          }
        }
      
       
        return result;
      }
      
      
      const originalString = "Hi, I am learning Javascript";
      const stringWithoutVowels = removeVowels(originalString);
      
     
      console.log(stringWithoutVowels); 
    
      
    