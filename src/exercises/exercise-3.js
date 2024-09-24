


/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/
export function exercise3(Number) {



    function countVowels(str) {

        const vowels = "aeiouAEIOU";
        let count = 0;


        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                count++;
            }
        }


        return count;
    }


    const exampleString = "Hello, how many vowels are here?";

    const result = countVowels(exampleString);

    console.log(`Number of vowels is ${result}`);
}








