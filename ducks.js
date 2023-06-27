// -Рух качки:
// -Вилітаює одна качка з рандомного місця і рухається подіагоналі.
// -якщо качка долетіла докраю екрана, вона зникає
// -Якщо її підбили, то вона падає i коли торкаэться трави падає



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
  // duck.classList.add(hidden);
}




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
