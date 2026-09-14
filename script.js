function getRange(start, end, step = 1) {
    let arr = [];

    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }

    return arr;
}


function myReverse(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}


function maskCard(card, symbol = "X") {
    let result = "";

    for (let i = 0; i < card.length; i++) {
        if (i < 6 || i >= card.length - 4) {
            result += card[i];
        } else {
            result += symbol;
        }
    }

    return result;
}


let start = Number(prompt("Введите начало диапазона:"));
let end = Number(prompt("Введите конец диапазона:"));
let step = Number(prompt("Введите шаг:"));

if (step == 0) {
    step = 1;
}

let range = getRange(start, end, step);

alert("Диапазон: " + range);


let text = prompt("Введите строку для переворота:");

let reverse = myReverse(text);

alert("Перевернутая строка: " + reverse);


let card = prompt("Введите номер банковской карты:");
let symbol = prompt("Введите символ для маскировки:");

if (symbol == "") {
    symbol = "X";
}

let maskedCard = maskCard(card, symbol);

alert("Замаскированная карта: " + maskedCard);