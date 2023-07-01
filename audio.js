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
    audioPlayer.volume = 0.7;
    audio.muted = muted;
    audioPlayer.play();
}
function duckFlappingSound() {
    let audio = new Audio('sound/duck-flapping.mp3');
    audioPlayer.volume = 0.1;
    audio.muted = muted;
    audio.play();
}
function gunShotSound() {
    let audio = new Audio('sound/gun-shot.mp3');
    audioPlayer.volume = 0.1;
    audio.muted = muted;
    audio.play();
}
function duckCaughtSound() {
    let audio = new Audio('sound/duck-caught.mp3');
    audioPlayer.volume = 0.1;
    audio.muted = muted;
    audio.play();
}
function doglaughingSound() {
    let audio = new Audio('sound/dog-laughing.mp3');
    audioPlayer.volume = 0.1;
    audio.muted = muted;
    audio.play();
}
function highScoreSound() {
    let audio = new Audio('sound/high-score.mp3');
    audioPlayer.volume = 0.1;
    audio.muted = muted;
    audio.play();
}
function nextRoundSound() {
    let audio = new Audio('sound/next-round.mp3');
    audioPlayer.volume = 0.1;
    audio.muted = muted;
    audio.play();
}
function loseSound() {
    let audio = new Audio('sound/lose.mp3');
    audioPlayer.volume = 0.1;
    audio.muted = muted;
    audio.play();
}
function failSound() {
    let audio = new Audio('sound/duck-drop.mp3');
    audioPlayer.volume = 0.1;
    audio.muted = muted;
    audio.play();
}