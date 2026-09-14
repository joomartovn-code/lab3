function getRange(start, end, step = 1) {
    let arr = [];

    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }

    return arr;
}

function showRange() {
    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);
    let step = Number(document.getElementById("step").value);

    if (step == 0) {
        step = 1;
    }

    let result = getRange(start, end, step);

    document.getElementById("rangeResult").innerHTML = result;
}


function myReverse(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

function showReverse() {
    let text = document.getElementById("text").value;

    document.getElementById("reverseResult").innerHTML = myReverse(text);
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

function showCard() {
    let card = document.getElementById("card").value;
    let symbol = document.getElementById("symbol").value;

    if (symbol == "") {
        symbol = "X";
    }

    document.getElementById("cardResult").innerHTML = maskCard(card, symbol);
}