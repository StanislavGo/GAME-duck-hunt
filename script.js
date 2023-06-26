/**
1)Створюємо  візуал:
-Привітальне вікно і кнопка «Start» - готово
-Фон
-Персонажів які є, потім їх по ходу будемо ховати
-Табло скільки качом ми вбили
-Табло рахунок
-Табло Який раунд
-Табло пострілів
*/

btnStartGame.onclick = function() {
    let startGameBlock = document.querySelector('.start-game');
    startGameBlock.style.display = 'none';
    duckHuntIntroSound();
}

let a = 1;