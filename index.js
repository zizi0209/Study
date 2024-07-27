document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tempContainer');
    const message = document.getElementById('message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const temp = parseFloat(document.getElementById('temperature').value);
        const toC = document.getElementById('toC').checked;
        const toF = document.getElementById('toF').checked;
        let result;

        if (toC) {
            result = (temp - 32) / 1.8;
            message.textContent = `Result: ${result.toFixed(2)} 😏`;
        } else if (toF) {
            result = (temp * 1.8) + 32;
            message.textContent = `Result: ${result.toFixed(2)} 😏`;
        } else {
            message.textContent = 'Pls select 1 opt & enter the temperature!';
        }
    });
});