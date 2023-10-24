function getComputerChoice(){
    let number = Math.floor(Math.random()*3)+1;
    if (number===1)   {return "Rock";} 
    else if (number===2)   {return "Paper";} 
    else return "Scissors";
};

function getPlayerChoice(){
    let pChoice = prompt("Type your choice!","");
while(pChoice.toLowerCase()!=="rock" && pChoice.toLowerCase()!=="paper" && pChoice.toLowerCase()!=="scissors") {
    pChoice = prompt("Invalid answer, please choose between Rock, Paper or Scissors!","");
} 
return pChoice;
}


function playRound(){
    string1 = getPlayerChoice().toLowerCase();
    
    string2 = getComputerChoice().toLowerCase();    
    
                
    if (string1==="rock"&&string2==="paper" ||string1==="paper"&&string2==="scissors" || string1==="scissors"&&string2==="rock" ){
            return `You lost! ${string1} loses to ${string2}.`;
        }
    else if(string1==="rock"&& string2==="scissors" ||string1==="paper"&&string2==="rock" || string1==="scissors"&&string2==="paper"){
            return `You won!! ${string1} wins over ${string2}.`;
        }
    else {
            return `It's a tie! You chose ${string1} and opponent chose ${string2} too.`;
        } 
    
}

function game(x){    
    for ( let i=0; i<x; i++){
        
         console.log (playRound());              
    }   
    
}
game(5);


