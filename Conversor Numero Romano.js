//Convierte el número proporcionado en un número romano.

function convertToRoman(num) {
    let numerosRomanos = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
    }
    let answer = ""
    for (let n in numerosRomanos) {
        while (num >= numerosRomanos[n]) {
            answer += n;
            num -= numerosRomanos[n];


        }
    }
    return answer;
}

console.log(convertToRoman(36));
console.log(convertToRoman(16));
