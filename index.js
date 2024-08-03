const getPlayerChoice=document.getElementById('playerChoice');
const getComputerChoice=document.getElementById('computerChoice');
const getPlayerScore=document.getElementById('playerScore');
const getComputerScore=document.getElementById('computerScore');
const getResult=document.getElementById('result');
const computer=['rock','paper','scissors'];
let playerScore=0;
let computerScore=0;
let result;

function playGame(playerChoice){
    let computerChoice=computer[Math.floor(Math.random()*3)];
    //
    getPlayerChoice.textContent='Player: '+playerChoice;
    getComputerChoice.textContent='Computer: '+computerChoice;
    //
    if(playerChoice===computerChoice){
        getResult.textContent='It\'s a tie!';
    }else{
        switch(playerChoice){
            case 'rock':
                result=(computerChoice==='paper')?'You lose':'You win';
                break;
            case 'paper':
                result=(computerChoice==='scissors')?'You lose':'You win';
                break;
            case 'scissors':
                result=(computerChoice==='rock')?'You lose':'You win';
                break;
        }
        getResult.textContent=result;
        //
        if(result==='You win'){
            playerScore++;
            getPlayerScore.textContent='Player Score: '+playerScore;
        }else if(result==='You lose'){
            computerScore++;
            getComputerScore.textContent='Computer Score: '+computerScore;
        }
    };
};