document.addEventListener('DOMContentLoaded',function(){
    const dice=document.getElementById('dice');
    const image=document.getElementById('img');
    const roll=document.getElementById('btn');
    const mess=document.getElementById('message');
    let value=[];
    let img=[];
    //
    roll.addEventListener('click',function(event){
        event.preventDefault();
        if(Number(dice.value)<0){
            alert('Are u kidding me:)? A negative number?');
        }else if(Number(dice.value)===0){
            alert('You rolled no dice!');
        }else{
            for(let i=0;i<Number(dice.value);i++){
                let random=Math.floor(Math.random()*6)+1;
                value.push(random);
                img.push(`<image src='/asset/Dice_${random}.png'>`);
            }
            mess.textContent=`You rolled: ${value.join(', ')}`;
            image.innerHTML=img.join(' ');
        }
    });
})