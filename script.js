function getComputerChoice(){
    let number = Math.floor(Math.random()*3)+1;
    if (number===1)   {return "Rock";} 
    else if (number===2)   {return "Paper";} 
    else return "Scissors";
};
let playerSelection = prompt("Type your choice!","");


let computerSelection= getComputerChoice();

function playRound(string1, string2){ 
    if(playerSelection.toLowerCase()!=="rock" || playerSelection.toLowerCase()!=="paper" ||playerSelection.toLowerCase()!=="scissors") {
        playerSelection= prompt("Invalid answer, please choose between Rock, Paper or Scissors!","");
    } 
    string1=playerSelection.toLowerCase();
    string2=computerSelection.toLowerCase();
                
    if (string1==="rock"&&string2==="paper" ||string1==="paper"&&string2==="scissors" || string1==="scissors"&&string2==="rock" ){
            return `You lost! ${playerSelection} loses to ${computerSelection}.`;
        }
    else if(string1==="rock"&& string2==="scissors" ||string1==="paper"&&string2==="rock" || string1==="scissors"&&string2==="paper"){
            return `You won!! ${playerSelection} wins over ${computerSelection}.`;
        }
    else {
            return `It's a tie! You chose ${playerSelection} and opponent chose ${computerSelection} too.`;
        } 
     
}

console.log (playRound(playerSelection,computerSelection));
