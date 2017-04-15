window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn = document.querySelector(`.inst-btn[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    btn.classList.add('playing');
    
});

function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    this.classList.remove('playing');
}

const instbtns = document.querySelectorAll('.inst-btn');
instbtns.forEach(instbtns => instbtns.addEventListener('transitionend', removeTransition));

