//Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. 
//En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.
//Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares.Así que A ↔ N, B ↔ O y así sucesivamente.
//La función recibe una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.


function rot13(str) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let answer = ""
    for (let i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i]) >= 13) {
            answer += alphabet[alphabet.indexOf(str[i]) - 13]
        } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) {
            answer += alphabet[alphabet.indexOf(str[i]) + 13]

        } else {
            answer += str[i]
        }
    }
    return answer;
}

console.log(rot13("SERR CVMMN!")); //devuelve "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); //devuelve "FREE LOVE?"