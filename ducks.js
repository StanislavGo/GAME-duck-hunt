// -Рух качки:
// -Вилітаює одна качка з рандомного місця і рухається подіагоналі.
// -якщо качка долетіла докраю екрана, вона зникає
// -Якщо її підбили, то вона падає i коли торкаэться трави падає
let app1 = document.getElementById('app');
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
    duckFlappingSound();
    moveDuck(duck);

    kill(duck);

    if (duckCount == 10) {
      showRoundNumber();
      duckCount = 0;
      
      duck.remove();
      // createDuck();
    }

    if(roundNumber == 10){
      roundNumber_10(duck);
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
  nextRoundSound();
  setTimeout(function () {
    roundBoard.remove();
  }, 2000);
  setTimeout(function () {
  createDuck();
  }, 3000);
}

let bullet = document.querySelector('.bullet');

let bulletCount = 5;
let spid = 10;




function moveDuck(duck){
   let timerID = setInterval(function() {
      if(roundNumber < 5){
        spid = 10;
      }else if(roundNumber > 5){
        spid = 30;
      }
      duck.style.top = duck.offsetTop - spid + "px";
      
      if (duck.offsetTop < -duck.offsetHeight) {
        clearInterval(timerID);
        duck.remove();
        createDog();
        duckCount++;
        removeBullet(duck);
      }

      function changeBackgroundImage() {
        if (duck.classList.contains('skin-1')) {
          // Зміна backgroundIamge для "skin-1"
          duck.style.backgroundImage = "url(images/blueDuck1.png)";
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/blueDuck2.png)";
          }, 200);
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/blueDuck3.png)";
          }, 300);
        } else if (duck.classList.contains('skin-2')) {
          // Зміна backgroundIamge для "skin-2"
          duck.style.backgroundImage = "url(images/greenDuck1-right.png)";
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/greenDuck2-right.png)";
          }, 200);
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/greenDuck3-right.png)";
          }, 300);
        } else if (duck.classList.contains('skin-3')) {
          // Зміна backgroundIamge для "skin-3"
          duck.style.backgroundImage = "url(images/redDuck1-left.png)";
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/redDuck2-left.png)";
          }, 200);
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/redDuck3-left.png)";
          }, 300);
        }
      }

      setInterval(changeBackgroundImage, 100);
   }, 200);
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
  doglaughingSound();
  app.appendChild(dog);
  setTimeout(function () {
    dog.remove();
    createDuck();
  }, 2000);
}


function createDogwithDuck(){
  let dog = document.createElement('div');
  dog.className = "dog";
  dog.style.top = "500px";
  dog.style.left = "50%";
  dog.style.zIndex = "8000";
  dog.style.backgroundImage = "url(images/dogWithDuck1.png)";
  duckCaughtSound();
  app.appendChild(dog);
  setTimeout(function () {
    dog.remove();
  }, 2000);
}

let score = 0;

function kill(duck) {
  duck.addEventListener('click', function () {
    gunShotSound();
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
    duckCount++;
    if (duckCount == 10) {
      // bulletBoard.innerText = "Perfect +1000"
      score = score + 1000;
      let scoreBoard = document.createElement('div');
      scoreBoard.className = 'bord_round';
      scoreBoard.innerText = "Perfect +1000";
      highScoreSound();
      app.appendChild(scoreBoard);
      setTimeout(function () {
        scoreBoard.remove();
      }, 3000);
    }
    createDogwithDuck(); 
    let changeScore = document.querySelector('.scoreNumber'); 
    score = score + 500;
    changeScore.innerText = score;
    createDuck();
  }, 500);
  });
}


function roundNumber_10(duck){
    duck.remove();
    createDog();
}

let bulletBoard = document.querySelector('.bord_round');

function removeBullet(duck){
  // bullet.remove();
  bulletCount--;
  bullet.innerText = bulletCount;
  console.dir(bulletCount);

  if(bulletCount == 0){
    let lose = document.createElement('div');
    lose.className = 'bord_round';
    lose.innerText = "You lost Game";
    loseSound();
    app.appendChild(lose);
    setTimeout(function () {
      lose.remove();
    }, 2000);
    duck.remove();
  }
}






