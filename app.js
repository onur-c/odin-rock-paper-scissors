
const moves = ["rock","paper","scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random()*3);
    return moves[randomIndex];
    
}

var playerScore = 0;



function playRound(computerChoice,playerChoice) {
    console.log(computerChoice+" vs "+playerChoice);
    switch(computerChoice.toLowerCase()){
        case moves[0]:
            if(playerChoice===moves[0]){
                return "Its a draw! -.-";
            }
            if(playerChoice===moves[1]){
                playerScore++;
                return "You WIN! :)";
            }
            if(playerChoice===moves[2]){
                return "You LOSE! :(";
            }
            break;
        case moves[1]:
            if(playerChoice===moves[0]){
                return "You LOSE! :(";
            }
            if(playerChoice===moves[1]){
                return "Its a draw! -.-";
            }
            if(playerChoice===moves[2]){
                playerScore++;
                return "You WIN! :)";
            }
            break;
        case moves[2]:
            if(playerChoice===moves[0]){
                playerScore++;
                return "You WIN! :)";
            }
            if(playerChoice===moves[1]){
                return "You LOSE! :(";
            }
            if(playerChoice===moves[2]){
                return "Its a draw! -.-";
            }
            break;
            default:
                return "Please type a valid input.";
    }
    
    
}





function game(){
    let results = [];
    for(let i = 0 ; i<5; i++ ){
        let playerChoice = prompt("Rock,Paper,Scissors : Make your choice!").toLowerCase();        
        results.push(playRound(getComputerChoice(),playerChoice));
    }
    
    if (playerScore>2){
        
        return "You won! with a total of:" + playerScore +" wins";
    } else {
        
        return "You lost, with a total of:" + playerScore +" wins";
    }

}

console.log(game());