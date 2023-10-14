import {Module} from '../core/module'

export class BackgroundModule extends Module {
    constructor(type, text) {
        super(type, text);
    }
    /* Получение рандомного цвета, где
    - 16777216 = 3 (RGB) * 256 (max значение для каждого цвета);
    - (Math.random() * 16777216) - получаем случайное число в диапозоне от 0 до 16777215.99
    - .toString(16) - преобразования числа в его шестнадцатеричное
    */
    getRandomColor() {
        const randomColor = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
        return randomColor;
    }

    trigger() {
        document.body.style.backgroundColor = this.getRandomColor();
    }
}
        
       