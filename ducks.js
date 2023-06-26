
function createDuck() {
    if(isGameOver) {
        return;
    }
    let left = random(150, document.querySelector('body').offsetWidth - 150);
    let skin = 'skin-' + random(1, 3);
    let duck = document.createElement('div');
    duck.className = "duck " + skin;

    duck.style.left = left + "px";
    
    app.appendChild(duck);
}