
let number;
let guess;
document.getElementById("submitButton").addEventListener("click",submit);
document.getElementById("newNumber").addEventListener("click",generateNumber);
function generateNumber() {
    number = Math.floor(Math.random()*50) + 1;
    return number;
}
generateNumber();
console.log(number);

function checkGuess() {
    if (guess == number) {
        alert("You guessed correctly");
    } else if (guess > number) {
       alert("you guessed too high");
    } else {
        alert("you guessed too low");
    }
}

function submit() {
    guess = document.getElementById("userGuess").value;
    console.log(guess);
    checkGuess();
}