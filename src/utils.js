export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

/* Получение рандомного цвета, где
    - 16777216 = 3 (RGB) * 256 (max значение для каждого цвета);
    - (Math.random() * 16777216) - получаем случайное число в диапозоне от 0 до 16777215.99;
    - .toString(16) - преобразования числа в его шестнадцатеричное
    */
export function getRandomColor() {
      const randomColor = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
      return randomColor;
}

// Создание блока таймера
// export function createTimerBlok() {
//   const timerContainer = document.createElement('div');
//   timerContainer.id = 'timer';
  
//   const timeInput = document.createElement('input');
//   timeInput.type = 'number';
//   timeInput.id = 'time';
//   timeInput.placeholder = 'Введите длительность в секундах';
//   timeInput.style.width = '250px';
  
//   const startButton = document.createElement('button');
//   startButton.id = 'start';
//   startButton.textContent = 'Начать отсчёт';
//   startButton.style.width = '150px';

//   document.body.append(timerContainer);
//   document.body.append(timeInput);
//   document.body.append(startButton);
// }