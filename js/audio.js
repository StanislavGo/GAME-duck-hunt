let audioPlayer = document.getElementById('audio');
let soundBtn = document.querySelector('.sound');
let muted = false;
soundBtn.onclick = function() {
    let soundOffIcon = document.querySelector('.sound .sound-off');
    let soundOnIcon = document.querySelector('.sound .sound-on');

    if(!muted) { //!muted = not muted
        soundOnIcon.classList.add('hidden');
        soundOffIcon.classList.remove('hidden');
        muted = true;
    } else {
        soundOffIcon.classList.add('hidden');
        soundOnIcon.classList.remove('hidden');
        muted = false;
    }
    audioPlayer.muted = muted;
}
function duckHuntIntroSound() {
    let audio = new Audio('sound/duck-hunt-intro.mp3');
    audioPlayer.volume = 0.1;
    audio.muted = muted;
    audioPlayer.play();
}
