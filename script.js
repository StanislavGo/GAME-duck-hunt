let btnStartGame = document.getElementById('btnStartGame');
btnStartGame.onclick = function() {
    let startGameBlock = document.querySelector('.start-game');
    startGameBlock.style.display = 'none';
    duckHuntIntroSound();
    createDuck();
    createDog();
}
isGameOver = false;
let app = document.querySelector('#game-elements');
function random(min,max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}