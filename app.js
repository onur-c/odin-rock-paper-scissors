
const moves = ["rock","paper","scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random()*3);
    return moves[randomIndex];
    
}

var playerScore = 0;

var results = [];



function playRound(computerChoice,playerChoice) {
    
    switch(computerChoice.toLowerCase()){
        case moves[0]:
            if(playerChoice===moves[0]){
                results.push("DRAW");
                return "Its a draw! -.-";
            }
            if(playerChoice===moves[1]){
                playerScore++;
                results.push("WIN");
                return "You WIN! :)";
            }
            if(playerChoice===moves[2]){
                results.push("LOSE");
                return "You LOSE! :(";
            }
            break;
        case moves[1]:
            if(playerChoice===moves[0]){
                results.push("LOSE");
                return "You LOSE! :(";
            }
            if(playerChoice===moves[1]){
                results.push("DRAW");

                return "Its a draw! -.-";
            }
            if(playerChoice===moves[2]){
                playerScore++;
                results.push("WIN");

                return "You WIN! :)";
            }
            break;
        case moves[2]:
            if(playerChoice===moves[0]){
                playerScore++;
                results.push("WIN");

                return "You WIN! :)";
            }
            if(playerChoice===moves[1]){
                results.push("LOSE");

                return "You LOSE! :(";
            }
            if(playerChoice===moves[2]){
                results.push("DRAW");

                return "Its a draw! -.-";
            }
            break;
            default:
                return "Please type a valid input.";
    }
    
    
}







const resultDiv = document.createElement("div");

document.body.appendChild(resultDiv);

const scoreDiv = document.createElement("div");

document.body.appendChild(scoreDiv);



document.querySelectorAll("button").forEach((button)=> {
    button.addEventListener("click",()=> {         
        playRound(getComputerChoice(),button.className);
        
        if(playerScore > 5){
            playerScore = 0;
            results= [];
            resultDiv.innerText = "";
            alert("You reached 5 wins and you won!");
            
        }
        scoreDiv.innerText = "Your wins:"+playerScore;
        resultDiv.innerText = results;   
        
    });
})

