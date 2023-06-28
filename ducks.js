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
  dog.style.backgroundImage = "url(images/dogWithDuck1)";
  app.appendChild(dog);
  setTimeout(function () {
    dog.remove();
    createDuck();
  }, 2000);
}

function kill(duck) {
  duck.addEventListener('click', function () {
    // if (duck.classList.contains('skin-1')) {
    //   duck.style.backgroundImage = "url(images/blueDuckShot.png)";
    //   setTimeout(function () {
    //     duck.style.backgroundImage = "url(images/blueDuckFall.png)";
    //     duck.style.top = duck.offsetTop + 10 + "px";
    //     if (duck.offsetTop >= 500) {
    //       duck.remove();
    //       createDogwithDuck();
    //       createDuck();
    //       clearInterval(timerID);
    //     }
    //   }, 1000);
    // } else if (duck.classList.contains('skin-2')) {
    //   duck.style.backgroundImage = "url(images/greenDuckShot.png)";
    //   setTimeout(function () {
    //     duck.style.backgroundImage = "url(images/greenDuckFall.png)";
    //     duck.style.top = duck.offsetTop + 10 + "px";
    //     if (duck.offsetTop >= 500) {
    //       duck.remove();
    //       createDogwithDuck();
    //       createDuck();
    //       clearInterval(timerID);
    //     }
    //   }, 1000);
    // } else if (duck.classList.contains('skin-3')) {
    //   duck.style.backgroundImage = "url(images/redDuckShot.png)";
    //   setTimeout(function () {
    //     duck.style.backgroundImage = "url(images/redDuckFall.png)";
    //     duck.style.top = duck.offsetTop + 10 + "px";
    //     if (duck.offsetTop >= 500) {
    //       duck.remove();
    //       createDogwithDuck();
    //       createDuck();
    //       clearInterval(timerID);
    //     }
    //   }, 1000);
    // }
    if (duck.classList.contains('skin-1')) {
      setTimeout(function(){
        duck.style.backgroundImage = "url(images/blueDuckShot.png)"
      }, 1000);
      let timerID = setInterval(function() {
        duck.style.backgroundImage = "url(images/blueDuckFall.png)";
        duck.style.top = duck.offsetTop + 10 + "px";
        if (duck.offsetTop >= 500) {
          duck.remove();
          createDogwithDuck();
          createDuck();
          clearInterval(timerID);
        }
      },1000)
      
    }
    if (duck.classList.contains('skin-2')) {
      setTimeout(function(){
        duck.style.backgroundImage = "url(images/greenDuckShot.png)"
      }, 1000);
      let timerID = setInterval(function() {
        duck.style.backgroundImage = "url(images/greenDuckFall.png)";
        duck.style.top = duck.offsetTop + 10 + "px";
        if (duck.offsetTop >= 500) {
          duck.remove();
          createDogwithDuck();
          createDuck();
          clearInterval(timerID);
        }
      },1000)
      
    }
    if (duck.classList.contains('skin-3')) {
      setTimeout(function(){
        duck.style.backgroundImage = "url(images/redDuckShot.png)"
      }, 1000);
      let timerID = setInterval(function() {
        duck.style.backgroundImage = "url(images/redDuckFall.png)";
        duck.style.top = duck.offsetTop + 10 + "px";
        if (duck.offsetTop >= 500) {
          duck.remove();
          createDogwithDuck();
          createDuck();
          clearInterval(timerID);
        }
      },1000)
      
    }
  });
}





// function removeDuck(duck){
//   if(duck.style.top > document.querySelector('body').offsetHeight ){
//     duck.remove();
//     clearInterval(timerID);
//     createDuck()
//   }
// }


// let duck = document.querySelector('.duck');

// function createDuck() {
//   if(isGameOver) {
//       return;
//   }
//   setTimeout(() => {
//     // duck.classList.remove('hidden');
//     let left = random(150, document.querySelector('body').offsetWidth - 150);
//     let skin = 'skin-' + random(1, 3);
//     duck.className = "duck " + skin;
//     duck.style.left = left + "px";
//   }, 9000);
  
// }

// function moveduck(){
//   // Перевірка, чи елемент "duck" не досяг верхньої межі сторінки
//   if (duck.style.top > 0) {
//     // Зміна позиції елемента "duck" на 10 пікселів вгору
//     duck.style.top = duck.style.top - 10 + 'px';
//   }
// }
// // moveduck();
// setInterval(moveduck(),100);



// let app = document.querySelector('#app');


// let round = 0;

// function random(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function createDuck() {
//   if (round >= 2) {
//     createDog();
//     return;
//   }
  
//   let left = random(150, document.querySelector('body').offsetWidth - 150);
//   let skin = 'skin-' + random(1, 3);
//   let duck = document.createElement('div');
//   duck.className = "duck " + skin;

//   duck.style.left = left + "px";

//   app.appendChild(duck);
  
//   let direction = random(0, 1) === 0 ? 'left' : 'right';
//   let skinImage = '';
  
//   if (skin === 'skin-1') {
//     skinImage = direction === 'left' ? 'images/blueDuck1-left.png' : 'images/blueDuck1.png';
//   } else if (skin === 'skin-2') {
//     skinImage = direction === 'left' ? 'images/greenDuck1-left.png' : 'images/greenDuck1-right.png';
//   } else if (skin === 'skin-3') {
//     skinImage = direction === 'left' ? 'images/redDuck1-left.png' : 'images/redDuck1.png';
//   }
  
//   duck.style.backgroundImage = `url(${skinImage})`;
  
//   let interval = setInterval(() => {
//     let currentPosition = parseInt(duck.style.left, 10);
//     let newPosition = direction === 'left' ? currentPosition - 10 : currentPosition + 10;
//     duck.style.left = newPosition + 'px';
    
//     if (newPosition <= 0 || newPosition >= window.innerWidth) {
//       clearInterval(interval);
//       app.removeChild(duck);
//       createDuck();
//     }
//   }, 100);
  
//   duck.addEventListener('click', function() {
//     clearInterval(interval);
//     duck.style.backgroundImage = `url(images/${skin}DuckShot.png)`;
//     setTimeout(() => {
//       duck.style.backgroundImage = `url(images/${skin}DuckFall.png)`;
//       setTimeout(() => {
//         if (duck.style.bottom === '20%') {
//           app.removeChild(duck);
//           createDog();
//         }
//       }, 1000);
//     }, 1000);
//   });
// }

// function createDog() {
//   let dog = document.createElement('div');
//   dog.className = 'dog';
//   dog.style.backgroundImage = 'url(images/dogWithDuck1.png)';
//   app.appendChild(dog);
  
//   setTimeout(() => {
//     app.removeChild(dog);
//     round++;
//     jumpDog();
//   }, 1000);
// }

// setTimeout(() => {
//   createDuck();
// }, 2000);
