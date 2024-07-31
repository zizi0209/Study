function updateClock(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    //
    document.getElementById('hours').textContent=String(hour).padStart(2,'0');
    document.getElementById('minutes').textContent=String(minute).padStart(2,'0');
    document.getElementById('seconds').textContent=String(second).padStart(2,'0');
    document.getElementById('ampm').textContent=ampm;
    //
    const secondDeg = (second / 60) * 360;
    const minuteDeg = (minute / 60) * 360 + (second / 60) * 6;
    const hourDeg = (hour / 12) * 360 + (minute / 60) * 30;

    document.querySelector('.second').style.transform=`rotate(${secondDeg}deg)`;
    document.querySelector('.minute').style.transform=`rotate(${minuteDeg}deg)`;
    document.querySelector('.hour').style.transform=`rotate(${hourDeg}deg)`;
}
updateClock();
setInterval(updateClock,1000);