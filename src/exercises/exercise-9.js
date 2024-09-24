/* 
EJERCICIO 9:
Un reloj muestra: 
 - la hora (0 <= h <= 23) 
 - los minutos (0 <= m <= 59)
 - y los segundos (0 <= s <= 59).

 Escribe una funcion que calcule los millisegundos que han pasado desde 
 media noche 00:00:00 hasta la hora actual teniendo en cuenta que:

 - hay 1000 millisegundos en un segundo
 - podemos obtener la hora, minutos y segundos con la función "getTime" 

*/
export function exercise9() {
}
function getTime() {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
  };
}

function getMilisegundos() {
  
  const currentTime = getTime();
  
  
  const hoursInMiliseg = currentTime.hours * 60 * 60 * 1000;  // 1 hora = 3600000 ms
  const minutesInMiliseg = currentTime.minutes * 60 * 1000;   // 1 minuto = 60000 ms
  const secondsInMiliseg = currentTime.seconds * 1000;        // 1 segundo = 1000 ms
  
  
  const totalMiliseg = hoursInMiliseg + minutesInMiliseg + secondsInMiliseg;
  
  return totalMiliseg;
}


const millisecondsSinceMidnight = getMilisegundos();
console.log(`Han pasado ${millisecondsSinceMidnight} milisegundos desde la medianoche.`);
