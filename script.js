let btnStartGame = document.getElementById('btnStartGame');
let perfectRounds = 0;
btnStartGame.onclick = function() {
    let startGameBlock = document.querySelector('.start-game');
    startGameBlock.style.display = 'none';
    let targetPngVissibility = document.querySelector("#target-png");
    targetPngVissibility.style.visibility = "visible";
    console.dir(targetPngVissibility);
    duckHuntIntroSound();
    moveDog();
    jumpDog();
    // kill(duck);
    createTarget();
    setTimeout(() => {
    createDuck();
}, 6000);
}
isGameOver = false;
let app = document.querySelector('#game-elements');
function random(min,max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
