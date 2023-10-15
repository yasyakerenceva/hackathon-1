import { Module } from "../core/module";

export class ClickCounterModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const windowClick = document.createElement("div");
    windowClick.className = "click-counter";
    document.body.append(windowClick);

    let clickCount = 0;
    const clickHandler = () => {
      clickCount++;
    };

    window.addEventListener("click", clickHandler);

    setTimeout(() => {
      window.removeEventListener("click", clickHandler);
      windowClick.classList.add("js-click-counter");
      windowClick.innerText = `Сделано: ${clickCount} кликов`;
      setTimeout(() => {
        windowClick.remove();
      }, 2000);
    }, 3000);
  }
}
