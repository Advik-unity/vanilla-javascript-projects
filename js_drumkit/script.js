// USING VANILLA JAVASCRIPT.


// ADDED A KEY PRESS EVENT LISTNER.

window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const btn = document.querySelector(`.inst-btn[data-key="${e.keyCode}"]`);
    if(!audio) return;
    // PLAYS AUDIO FROM START DURING MULTIPLE KEY PRESSES.
    audio.currentTime = 0;
    audio.play();
    // ADDED "playing" CLASS FOR ANIMATED EFFECTS DURING KEYPRESS/SOUND.
    btn.classList.add('playing');
    
});


// FUNCTION TO REMOVE TRANSFORM/TRANSITION EFFECTS AFTER THE AUDIO FINISHES.

function removeTransition(e) {
    if (e.propertyName !== 'transform')
        return;
    this.classList.remove('playing');
}

// CALLING THE "removeTransition" FUNCTION ON ALL INSTRUMENT BUTTONS TO REMOVE TRANSFORM/TRANSITION EFFECTS AFTER THE AUDIO FINISHES.

const instbtns = document.querySelectorAll('.inst-btn');
instbtns.forEach(instbtns => instbtns.addEventListener('transitionend', removeTransition));

