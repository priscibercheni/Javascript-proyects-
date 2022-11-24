//Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando la puntuación, mayúsculas, minúsculas y espaciado.
//eliminamos no alfanuméricos y convertimos en minúsculas para comprobar palindromo.

function palindromo(str) {
    str=str.replace(/\W|_/g,"").toLowerCase();    
    let reversa= str.split("").reverse().join("");     
  
    if (str === reversa){
      return true;
     } else 
     {return false; }}
  
console.log(palindromo("ojo"));
console.log(palindromo("car"))




  

