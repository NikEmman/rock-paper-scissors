function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) { return "Rock"; }
    else if (number === 2) { return "Paper"; }
    else return "Scissors";
};

const rock = document.querySelector("#rock");
rock.addEventListener("click", getRock);

const paper = document.querySelector("#paper");
paper.addEventListener("click", getPaper);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", getScissors);
let pChoice= "";

function getRock() { 
    pChoice = "Rock"
    return pChoice;};
function getPaper() { 
    pChoice = "Paper"
    return pChoice;};
function getScissors() { 
    pChoice = "Scissors"
    return pChoice; }

/*
function getPlayerChoice() { 
    let pChoice="" ;
    if(getRock()){pChoice}
    return pChoice;
}*/
let win = 0
let loss = 0;



function playRound() {
    string1 = pChoice.toLowerCase();
    string2 = getComputerChoice().toLowerCase();

    if (string1 === "rock" && string2 === "paper" || string1 === "paper" && string2 === "scissors" || string1 === "scissors" && string2 === "rock") {
        loss++;
        return `You lost the round ${string1} loses to ${string2}.`;
    }
    else if (string1 === "rock" && string2 === "scissors" || string1 === "paper" && string2 === "rock" || string1 === "scissors" && string2 === "paper") {
        win++;
        return `You won the round ${string1} wins over ${string2}.`;
    }
    else {
        return `It's a tie you chose ${string1} and opponent chose ${string2} too.`;
    }

}
console.log(playRound());
function game(x) {
    for (let i = 0; i < x; i++) {
        console.log(playRound());
    }
}

const btn = document.querySelector('button');
btn.addEventListener("click", playRound);



/* game(5);
let result;
if (win > loss) {
    result = `Congratulations! You won the game by ${win} - ${loss}`
}
else if (win < loss) {
    result = `Oh noes! You lost the game by ${win} - ${loss}`
}
else {
    result = `Lol, you tied the game by ${win} - ${loss}`
}
console.log(result); */

