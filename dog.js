// -Рух Собаки:
// -На початку як на відео і після кожного раунду, собака шукає качок, потім пригає в кущі.
// -Якщо качку долетіла до трави, через декілька секун  з'являється собака, де впала качка
// - якщо качка долетіла докраю екрана, через декілька секун з'являється собака і сміється 
// -Після закінчення 10 раунду, через декілька секун з'являється собака і сміється

// let dog = document.querySelector('.dog');


// function movedog(){
//     function startMoveDog(){
//         let dogImg = [
//             'url(images/dogWalk1.png)',
//             'url(images/dogWalk2.png)',
//             'url(images/dogWalk3.png)',
//             'url(images/dogWalk4.png)',
//             'url(images/dogWalk5.png)',
//             'url(images/dogWalk6.png)',
//             'url(images/dogJump1.png)',
//             'url(images/dogJump2.png)'
//         ];
        
//         let i = 0;
        
    
//         function changeImage() {
//             i = (i + 1) % dogImg.length;
//             dog.style.backgroundImage = dogImg[i];
        
            
            
//             if (i < dogImg.length - 1) {
//                 setTimeout(changeImage, 500);
//             }
//             if (dog.style.backgroundImage === dogImg[6]) {
//                 dog.style.top = dog.style.top + 100 + 'px';
//               } 
          
//             if (dog.style.backgroundImage === dogImg[7]) {
//                 dog.classList.add('hidden');
//             } 
//         }
      
//         setTimeout(changeImage, 500);
//     }

// }

let dog = document.querySelector('.dog');
let images = [
  'url(images/dogWalk1.png)',
  'url(images/dogWalk2.png)',
  'url(images/dogWalk3.png)',
  'url(images/dogWalk4.png)',
  'url(images/dogWalk5.png)',
  'url(images/dogWalk6.png)',
  'url(images/dogJump1.png)',
  'url(images/dogJump2.png)'
];
let currentIndex = 0;

function jumpDog() {
  dog.style.backgroundImage = images[currentIndex];
  
  if (currentIndex === images.length - 1) {
    dog.style.top = '0px'; // Пригає на 200px вгору
    dog.classList.add('hidden'); // Додає клас 'hidden'
    // setTimeout(jumpDog, 500);
  } else {
    dog.style.top = '700px'; // Повертається до початкового положення
    dog.classList.remove('hidden'); // Видаляє клас 'hidden'
    currentIndex = (currentIndex + 1) % images.length; // Змінюємо індекс картинки
    setTimeout(jumpDog, 500); // Затримка 500 мілісекунд перед зміною картинки
  }
}



  

  