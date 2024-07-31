const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');
let time=0;
const display=document.getElementById('display');
let intervalId=null;
//
start.addEventListener('click',function(){
    if(!intervalId){
        intervalId=setInterval(update,10);
    }
})
stop.addEventListener('click',function(){
    if(intervalId){
        clearInterval(intervalId);
        intervalId=null;
    }
})
reset.addEventListener('click',function(){
    time=0;
    updateDisplay();
})
//
function update(){
    time+=10;
    updateDisplay();
}
function updateDisplay(){
    let ms=time%1000;
    let s=Math.floor(time/(1000))%60;
    let m=Math.floor(time/(1000*60))%60;
    let h=Math.floor(time/(1000*60*60));
    
    display.textContent=`${String(h).padStart(2,'0')}:
                         ${String(m).padStart(2,'0')}:
                         ${String(s).padStart(2,'0')}:
                         ${String(ms%100).padStart(2,'0')}`;
    
};