function clearDisplay() {
    document.getElementById('display').innerText = '0';
};

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    }else if(display.innerText==='Error'||display.innerText==='Infinity'||display.innerText==='undefined'){
        display.innerText=value; 
    }else {
        display.innerText += value;
    }
};

function calculateResult() {
    const display = document.getElementById('display');
    //xử lý dấu -- or ++
    let temp=display.innerText;
    while(temp.includes('--')||temp.includes('++')){
        if(temp.includes('--')){
            temp=temp.replace('--','+');
        }else{
            temp=temp.replace('++','+');
        }
    }
    display.innerText=temp;
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
};