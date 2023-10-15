import {Module} from '../core/module';
import {createTimerBlok} from '../utils';

export class TimerModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
        
    trigger() {
       
      
  // Создание блока таймера
  const timerContainer = document.createElement('div');
  timerContainer.id = 'timer';
  
  const timeInput = document.createElement('input');
  timeInput.type = 'number';
  timeInput.id = 'time';
  timeInput.placeholder = 'Введите длительность в секундах';
  timeInput.style.width = '250px';
  
  const startButton = document.createElement('button');
  startButton.id = 'start';
  startButton.textContent = 'Начать отсчёт';
  startButton.style.width = '150px';

  document.body.append(timerContainer);
  document.body.append(timeInput);
  document.body.append(startButton);

// Функция для отображения оставшегося времени
    const showRemainingTime = (seconds) => {
    const display = seconds;
    timerContainer.textContent = display;
  };

// Обнуление таймера
const removeTimer = () => {
    setTimeout(() => {
        timerContainer.remove();
        document.getElementById("time").value = '' ;
    }, 3000); 
}

  // Реализация таймера
  const startTimer = (seconds) => {
    // clearInterval(intervalId); 
    const startTime = Date.now();
    const endTime = startTime + seconds * 1000;
    showRemainingTime(seconds);

    const intervalId = setInterval(() => {
      const remainingSeconds = Math.round((endTime - Date.now()) / 1000);

      if (remainingSeconds < 0) {
        timerContainer.textContent = 'Время истекло!';
        removeTimer()
      } else {
        showRemainingTime(remainingSeconds);
      }
    }, 1000);
  };

// Обрабатываем нажатие кнопки начала отсчета, получаем введенное значение, проверяем и запускаем таймер
startButton.addEventListener('click', () => {
        const time = document.getElementById("time");
        const timeValue = timeInput.value; 
        console.log(timeValue)

        if (!timeValue || timeValue <= 0) {
            alert('Введите время в секундах.');
            return;
        }
        startTimer(timeValue);
});
}
}