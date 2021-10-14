let number = document.querySelector(".number");
let func = document.querySelector(".function");
let input = document.querySelector(".userInput");
let result = document.querySelector(".answer");
let historyInput = document.querySelector(".historyBox");
let calcArray = [];


function num(theNumber) {
    input.value += theNumber;
    input.innerHTML += theNumber;
    console.log(input.value);
}



function calculateBOI() {
    let foo = input.value;
    let calculate = eval(foo);
    input.value = calculate;
    console.log(calculate);
    console.log(typeof (input.value));


    let string1 = foo;
    calcArray.push(string1);
    calcArray.push("=");
    let string2 = calculate;
    calcArray.push(string2);

    let displayHistory = document.getElementById("foo");

    let history = document.createElement("p");

    let text = document.createTextNode(`${calcArray.join(" ")}`);

    history.appendChild(text);
    displayHistory.appendChild(history);

    console.log(calcArray);
    console.log(typeof (calcArray));
}

function clearHist() {
    let clear = document.getElementById("foo");
    foo.innerHTML = "";
}


document.getElementById("clear").addEventListener("click",
    function clear() {
        calcArray.length = 0;
        console.log(calcArray);
    });







