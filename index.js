document.addEventListener('DOMContentLoaded',function(){
    const min=1;
    const max=100;
    const answer=Math.floor(Math.random()*(max-min+1))+min;
    const guess=document.getElementById('guess');
    const mess=document.getElementById('message');
    //
    let turn=0;
    //
    document.getElementById('submit').onclick=function(even){
        even.preventDefault();
        let userGuess=Number(guess.value);
        if(isNaN(userGuess)){
            alert('Pls enter a valid number!');
        }else if(userGuess<1||userGuess>100){
            alert('Enter a number between 1-100, pls!');
        }else{
            turn++;
            if(userGuess===answer){
                mess.textContent=`You took ${turn} times to make it right!`;
            }else if(userGuess<answer){
                mess.textContent='Your guess is too low!';
            }else{
                mess.textContent='Your guess is too high!';
            }
        }
    }
})