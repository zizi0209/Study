document.addEventListener('DOMContentLoaded',function(){
    const submit=document.getElementById('submit');
    const total=document.getElementById('message');
    //
    submit.addEventListener('click',function(event){
        const p=parseFloat(document.getElementById('amount').value);
        const r=parseFloat(document.getElementById('rate').value);
        const n=parseFloat(document.getElementById('year').value);
        event.preventDefault();
        if(p>=0 && r>=0 && n>=0){
            let result=(p)*Math.pow(1+r,n);
            total.textContent="Total: "+result.toFixed(2);
        }else{
            alert('Please enter valid values!');
        }
    })
})