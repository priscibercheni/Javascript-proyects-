//Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.
//Los siguientes ejemplos son de formatos válidos para números estadounidenses:
//555 - 555 - 5555; (555)555 - 5555; (555) 555 - 5555; 555 555 5555; 5555555555; 1 555 555 5555

function telefonoCheck(str) {
    let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm
    return regex.test(str);
}

console.log(telefonoCheck("555-555-5555"));
console.log(telefonoCheck("800 - 692 - 7753")); 
