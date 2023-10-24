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
let win=0
let loss = 0;



function playRound(){
    string1 = getPlayerChoice().toLowerCase();
    
    string2 = getComputerChoice().toLowerCase();    
    
                
    if (string1==="rock"&&string2==="paper" ||string1==="paper"&&string2==="scissors" || string1==="scissors"&&string2==="rock" ){
            loss++;
            return `You lost the round ${string1} loses to ${string2}.`;
        }
    else if(string1==="rock"&& string2==="scissors" ||string1==="paper"&&string2==="rock" || string1==="scissors"&&string2==="paper"){
            win++;
            return `You won the round ${string1} wins over ${string2}.`;
        }
    else {            
            return `It's a tie you chose ${string1} and opponent chose ${string2} too.`;
        } 
    
}


function game(x){    
    for ( let i=0; i<x; i++){

         console.log (playRound());
                     
    }   
    
}
game(5);
let result;
if (win>loss)
{
     result=`Congratulations! You won the game by ${win} - ${loss}`
}
else if (win <loss)
{
    result=`Oh noes! You lost the game by ${win} - ${loss}`
}
else{
    result=`LOL you tied the game by ${win} - ${loss}`
}
console.log(result);

