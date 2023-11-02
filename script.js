
let win = 0
let loss = 0;

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const restart = document.querySelector(".restart");
const pScore = document.querySelector(".pScore");
const cScore = document.querySelector(".cScore");
const choiceBtn = document.querySelector(".choiceBtn")
const gameBody = document.querySelector(".gameBody");
const pChoice = document.querySelector(".pChoice");
const cChoice = document.querySelector(".cChoice");
const gmResult = document.querySelector(".gmResult");

rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);
restart.addEventListener("click", restartGame);

const result = document.querySelector(".result");

pScore.textContent = `${win}`;
cScore.textContent = `${loss}`;

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        cChoice.innerHTML = ""
        cChoice.innerHTML += '<img src="./images/rock.jpg" alt="Rock"></img>';
        return "Rock";
    }
    else if (number === 2) {
        cChoice.innerHTML = ""
        cChoice.innerHTML += '<img src="./images/paper.jpg" alt="Paper"></img>';
        return "Paper";
    }
    else {
        cChoice.innerHTML = ""
        cChoice.innerHTML += '<img src="./images/scissors.jpg" alt="Scissors"></img>';
        return "Scissors";
    }
};

function playRound(string1) {
    string1 = this.id;

    string2 = getComputerChoice();
    pChoice.innerHTML = this.innerHTML;
    if (string1 === "Rock" && string2 === "Paper" || string1 === "Paper" && string2 === "Scissors" || string1 === "Scissors" && string2 === "Rock") {
        loss++;

        result.textContent = `You lost the round, ${string1} loses to ${string2}.`;
    }
    else if (string1 === "Rock" && string2 === "Scissors" || string1 === "Paper" && string2 === "Rock" || string1 === "Scissors" && string2 === "Paper") {
        win++;
        result.textContent = `You won the round, ${string1} wins over ${string2}.`;
    }
    else {
        result.textContent = `It's a tie, you chose ${string1} and opponent chose ${string2} too.`;
    }
    pScore.textContent = `${win}`;
    cScore.textContent = `${loss}`;
    endGame();
}

function restartGame() {
    choiceBtn.disabled = false;
    win = 0
    loss = 0
    result.textContent = "";
    gmResult.textContent = "";
    gmResult.style ="display:none";
    gameBody.style = "filter : none"
    pChoice.innerHTML = "";
    cChoice.innerHTML = "";
    pScore.textContent = `${win}`;
    cScore.textContent = `${loss}`;
}

function endGame() {
    if (win === 5 || loss === 5) {
        choiceBtn.disabled = true;
        gameBody.style = "filter : blur(5px)";
        gmResult.style ="display:inline";
        win > loss ? gmResult.textContent = "You Won!!!" : gmResult.textContent = "YOU LOST!"
        choiceBtn.disabled = true;
        pChoice.innerHTML = "";
        cChoice.innerHTML = "";
        restart.style="animation: wiggle 2s linear infinite;"
    }
}

