function getComputerChoice(){
    let number = Math.floor(Math.random()*3)+1;
    if (number===1)   {return "Rock;"} 
    else if (number===2)   {return "Paper";} 
    else return "Scissors";
};
const computerSelection = getComputerChoice().toLowerCase();
const playerSelection = prompt("Type your choice!","").toLowerCase();

function playRound(playerSelection, computerSelection){  
            
    if (playerSelection==="rock"&&computerSelection==="paper" ||playerSelection==="paper"&&computerSelection==="scissors" || playerSelection==="scissors"&&computerSelection==="rock" ){
        return `You lost! ${playerSelection} loses to ${computerSelection}.`;
    }
    else if(playerSelection==="rock"&& computerSelection==="scissors" ||playerSelection==="paper"&&computerSelection==="rock" || playerSelection==="scissors"&&computerSelection==="paper"){
        return `You won!! ${playerSelection} wins over ${computerSelection}.`;
    }
    else{
        return `It's a tie! You chose ${playerSelection} and opponent chose ${computerSelection} too.`;
    }
    
}

console.log (playRound());
