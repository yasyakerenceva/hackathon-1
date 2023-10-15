export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function generateRandomString() {
  const randomLength = random(10, 20);

  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < randomLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function getRandomColor() {
  /* Получение рандомного цвета, где
    - 16777216 = 3 (RGB) * 256 (max значение для каждого цвета);
    - (Math.random() * 16777216) - получаем случайное число в диапозоне от 0 до 16777215.99;
    - .toString(16) - преобразования числа в его шестнадцатеричное
  */
  const randomColor = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
  return randomColor;
}

export function getPositionMenuToWindow(event, menu) {
  const { clientX, clientY } = event;
  const { innerWidth, innerHeight } = window;
  const { offsetWidth, offsetHeight } = menu;

  if (innerWidth - clientX < offsetWidth) {
    menu.style.left = `${innerWidth - offsetWidth}px`;
  } else {
    menu.style.left = `${clientX}px`;
  }

  if (innerHeight - clientY < offsetHeight) {
    menu.style.top = `${innerHeight - offsetHeight}px`;
  } else {
    menu.style.top = `${clientY}px`;
  }
}
