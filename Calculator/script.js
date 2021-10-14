let number = document.querySelector(".number");
let func = document.querySelector(".function");
let input = document.querySelector(".userInput");
let result = document.querySelector(".answer");
let historyInput = document.querySelector(".historyBox");
let calcArray = [];


function num(theNumber) {
    input.value +=theNumber;
    input.innerHTML += theNumber;
    console.log(input.value);
}



function calculateBOI() {
    let foo = input.value;
    let calculate = eval(foo);
    input.value = calculate;
   console.log(calculate);
   console.log(typeof(input.value));


   let string1 = foo;
    calcArray.push(string1);
    calcArray.push("=");
    let string2 = calculate;
    calcArray.push(string2);

   let displayHistory = document.createElement("div");

   let history = document.createElement("div");
   let br = document.createElement("br"); 
   displayHistory.appendChild(history);
   displayHistory.appendChild(br);
   historyInput.innerHTML = history.textContent = `${calcArray.join(" ")}`;
   console.log(calcArray);
   
}

function clearHist() {
    let clear = document.getElementById("foo");
    foo.innerHTML = "";
}

/* don't know why he refuses to work
function clear() {
    //let newString = "";
    input.value = "";
    console.log(input.value);
}
*/






