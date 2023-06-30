// -Рух качки:
// -Вилітаює одна качка з рандомного місця і рухається подіагоналі.
// -якщо качка долетіла докраю екрана, вона зникає
// -Якщо її підбили, то вона падає i коли торкаэться трави падає
let roundNumber = 1;
let duckCount = 0;

function createDuck() {
  if(isGameOver) {
      return;
  }
  setTimeout(() => {
    let left = random(150, document.querySelector('body').offsetWidth - 150);
    let skin = 'skin-' + random(1, 3);
    let duck = document.createElement('div');
    duck.className = "duck " + skin;
  
    duck.style.left = left + "px";
    
    app.appendChild(duck);
    moveDuck(duck);

    kill(duck);

    duckCount++;

    if (duckCount === 10) {
      showRoundNumber();
      duckCount = 0;
    }

  }, 3000);
  
}
let round = document.querySelector('.roundNumber');

function showRoundNumber() {
  roundNumber++;
  let roundBoard = document.createElement('div');
  roundBoard.className = 'bord_round';
  roundBoard.innerText = "Round " + roundNumber;
  app.appendChild(roundBoard);
  round.innerText = roundNumber
  setTimeout(function () {
    roundBoard.remove();
  }, 2000);
}

// let bulletCount = 3;


function moveDuck(duck){
   let timerID = setInterval(function() {
      duck.style.top = duck.offsetTop - 50 + "px";
      if (duck.offsetTop < -duck.offsetHeight) {
        clearInterval(timerID);
        removeBullet();
        duck.remove();
        createDog();
      }
      function changeBackgroundImage() {
        if (duck.classList.contains('skin-1')) {
          // Зміна backgroundIamge для "skin-1"
          duck.style.backgroundImage = "url(images/blueDuck1.png)";
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/blueDuck2.png)";
          }, 800);
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/blueDuck3.png)";
          }, 900);
        } else if (duck.classList.contains('skin-2')) {
          // Зміна backgroundIamge для "skin-2"
          duck.style.backgroundImage = "url(images/greenDuck1-right.png)";
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/greenDuck2-right.png)";
          }, 800);
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/greenDuck3-right.png)";
          }, 900);
        } else if (duck.classList.contains('skin-3')) {
          // Зміна backgroundIamge для "skin-3"
          duck.style.backgroundImage = "url(images/redDuck1-left.png)";
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/redDuck2-left.png)";
          }, 800);
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/redDuck3-left.png)";
          }, 900);
        }
      }

      
      // Виклик функції changeBackgroundImage() кожну секунду
      setInterval(changeBackgroundImage, 1000);
   }, 500);
}

function changeBackgroundImage(dog) {
  dog.style.backgroundImage = "url(images/nes-nintendo.gif)";
}

function createDog() {
  let dog = document.createElement('div');
  dog.className = "dog";
  dog.style.top = "500px";
  dog.style.left = "50%";
  dog.style.zIndex = "8000";
  changeBackgroundImage(dog);
  app.appendChild(dog);
  setTimeout(function () {
    dog.remove();
    createDuck();
  }, 2000);
}

function createDogWithoutDuck() {
  let dog = document.createElement('div');
  dog.className = "dog";
  dog.style.top = "500px";
  dog.style.left = "50%";
  dog.style.zIndex = "8000";
  changeBackgroundImage(dog);
  app.appendChild(dog);
  setTimeout(function () {
    dog.remove();
  }, 2000);
}

function createDogwithDuck(){
  let dog = document.createElement('div');
  dog.className = "dog";
  dog.style.top = "500px";
  dog.style.left = "50%";
  dog.style.zIndex = "8000";
  dog.style.backgroundImage = "url(images/dogWithDuck1.png)";
  app.appendChild(dog);
  setTimeout(function () {
    dog.remove();
    // createDuck();
  }, 2000);
}

let score = 0;
let bullet = document.querySelector('.bullet');

function kill(duck) {
  duck.addEventListener('click', function () {
    let skinClass = duck.className.match(/skin-\d/)[0];
    let boomClass = duck.className.includes('boom') ? 'boom' : '';

    if (skinClass === 'skin-1') {
      duck.style.backgroundImage = "url(images/blueDuckShot.png)";
    } else if (skinClass === 'skin-2') {
      duck.style.backgroundImage = "url(images/greenDuckShot.png)";
    } else if (skinClass === 'skin-3') {
      duck.style.backgroundImage = "url(images/redDuckShot.png)";
    }
    
    setTimeout(function() {
    duck.remove();
    createDogwithDuck(); 
    let changeScore = document.querySelector('.scoreNumber'); 
    score = score + 500;
    changeScore.innerText = score;
    createDuck();
  }, 500);
  });
}


  


function removeBullet() {
  if (bullet) {
    bullet.remove();
  }
}







