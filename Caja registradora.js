//Función checkCashRegister() que acepte el precio de compra como primer argumento (price), la cantidad pagada como segundo argumento (cash), y el dinero en efectivo que tiene la caja (cid) como tercer argumento.
//cid es un arreglo 2D que enumera las monedas disponibles.
//La función checkCashRegister() siempre debe devolver un objeto con una clave status y una clave change.
//Devuelve { status: "INSUFFICIENT_FUNDS", change: [] } si el efectivo en caja es menor que el cambio necesario, o si no puedes devolver el cambio exacto.
//Devuelve { status: "CLOSED", change: [...] } si el efectivo en caja como valor de la clave change es igual al cambio que se debe entregar.
//En cualquier otro caso, devuelve { status: "OPEN", change: [...] }, con el cambio a entregar en monedas y billetes, ordenados de mayor a menor, como valor de la clave change.

function checkCashRegister(price, cash, cid) {
    let change = cash * 100 - price * 100;
    let cidTotal = 0
    for (let elem of cid) {
        cidTotal += elem[1] * 100
    }
    if (change > cidTotal) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    } else if (change === cidTotal) {
        return { status: "CLOSED", change: cid }
    } else {
        let answer = [];
        cid = cid.reverse()
        let moneyUnits = { "ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1 };
        for (let elem of cid) {
            let holder = [elem[0], 0]
            elem[1] = elem[1] * 100;
            while (change >= moneyUnits[elem[0]] && elem[1] > 0) {
                change -= moneyUnits[elem[0]]
                elem[1] -= moneyUnits[elem[0]]
                holder[1] += moneyUnits[elem[0]] / 100
            }

            if (holder[1] > 0) {
                answer.push(holder)
            }
        }
        if (change > 0) {
            return { status: "INSUFFICIENT_FUNDS", change: [] }
        }
        return { status: "OPEN", change: answer };
    }
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));