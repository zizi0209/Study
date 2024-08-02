const box=document.getElementById('box');

document.addEventListener('keyup',event=>{
    box.textContent='Hate u 💀';
    box.style.backgroundColor='darkblue';
});
//
const move=10;
let x=0,y=0;
document.addEventListener('keydown',event=>{
    box.textContent='Luv u🌹';
    box.style.backgroundColor='darkviolet';
    if(event.key.startsWith('Arrow')){
        switch(event.key){
            case 'ArrowUp':
                y-=move;
                break;
            case 'ArrowDown':
                y+=move;
                break;
            case 'ArrowRight':
                x+=move;
                break;
            case 'ArrowLeft':
                x-=move;
                break;
        }
        box.style.top=`${y}px`;
        box.style.left=`${x}px`;
    }
});