const sHand = document.querySelector('.second-hand');
const mHand = document.querySelector('.min-hand');
const hHand = document.querySelector('.hour-hand');
function getDate() {
    const now = new Date();
    const secs = now.getSeconds();
    const sDeg = ((secs/60) * 360) + 90;
    sHand.style.transform = `rotate(${sDeg}deg)`;
    const mins = now.getMinutes();
    const mDeg = ((mins/60) * 360) + 90;
    mHand.style.transform = `rotate(${mDeg}deg)`;
    const hours = now.getHours();
    const hDeg = ((hours/12) * 360) + 90;
    hHand.style.transform = `rotate(${hDeg}deg)`;
}


setInterval(getDate, 1000);