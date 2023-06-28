// -Рух качки:
// -Вилітаює одна качка з рандомного місця і рухається подіагоналі.
// -якщо качка долетіла докраю екрана, вона зникає
// -Якщо її підбили, то вона падає i коли торкаэться трави падає

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
  }, 9000)
  
}


function moveDuck(duck){
   let timerID = setInterval(function() {
      duck.style.top = duck.offsetTop - 50 + "px";
      if (duck.offsetTop < -duck.offsetHeight) {
        clearInterval(timerID);
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
          duck.style.backgroundImage = "url(images/redDuck1.png)";
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/redDuck2.png)";
          }, 800);
          setTimeout(function() {
            duck.style.backgroundImage = "url(images/redDuck3.png)";
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
    createDuck();
  }, 2000);
}

function kill(duck) {
  duck.addEventListener('click', function () {
    if (duck.classList.contains('skin-1')) { 
      duck.style.backgroundImage = "url(images/blueDuckShot.png)"
      duck.remove();
      createDogwithDuck();  
    }
    if (duck.classList.contains('skin-2')) {
      duck.style.backgroundImage = "url(images/greenDuckShot.png)"
      duck.remove();
      createDogwithDuck();  
    }
    if (duck.classList.contains('skin-3')) {
      duck.style.backgroundImage = "url(images/redDuckShot.png)"
      duck.remove();
      createDogwithDuck();  
    }

  });
}





