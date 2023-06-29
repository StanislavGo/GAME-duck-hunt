let btnStartGame = document.getElementById('btnStartGame');
btnStartGame.onclick = function() {
    let startGameBlock = document.querySelector('.start-game');
    startGameBlock.style.display = 'none';
    let targetPngVissibility = document.querySelector("#target-png");
    targetPngVissibility.style.visibility = "visible";
    console.dir(targetPngVissibility);
    duckHuntIntroSound();
    createDuck();
    moveDog();
    jumpDog();
    // kill(duck);
    createTarget();
}
isGameOver = false;
let app = document.querySelector('#game-elements');
function random(min,max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
