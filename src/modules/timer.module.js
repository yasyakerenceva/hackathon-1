import { Module } from "../core/module";

export class TimerModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    // Создание блока таймера
    const timerContainer = document.createElement("div");
    timerContainer.id = "timer";

    const timeInput = document.createElement("input");
    timeInput.type = "number";
    timeInput.id = "time";
    timeInput.placeholder = "Введите длительность в секундах";

    const startButton = document.createElement("button");
    startButton.id = "start";
    startButton.textContent = "Начать отсчёт";

    document.body.append(timerContainer);
    timerContainer.append(timeInput);
    timerContainer.append(startButton);

    // Функция для отображения оставшегося времени
    const showRemainingTime = (seconds) => {
      const display = seconds;
      timerContainer.className = "js-timer";
      timerContainer.textContent = display;
    };

    // Обнуление таймера
    const removeTimer = () => {
      setTimeout(() => {
        timerContainer.remove();
      }, 1000);
    };

    // Реализация таймера
    const startTimer = (seconds) => {
      const startTime = Date.now();
      const endTime = startTime + seconds * 1000;
      showRemainingTime(seconds);

      const intervalId = setInterval(() => {
        const remainingSeconds = Math.round((endTime - Date.now()) / 1000);

        if (remainingSeconds < 1) {
          timerContainer.textContent = "Время истекло!";
          removeTimer();
        } else {
          showRemainingTime(remainingSeconds);
        }
      }, 1000);
    };

    // Обрабатываем нажатие кнопки начала отсчета, получаем введенное значение,
    // проверяем и запускаем таймер
    startButton.addEventListener("click", () => {
      const timeValue = timeInput.value;

      if (!timeValue || timeValue <= 0) {
        alert("Введите время в секундах.");
        return;
      }
      startTimer(timeValue);
    });
  }
}
