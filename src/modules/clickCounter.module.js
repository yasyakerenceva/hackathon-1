import { Module } from "../core/module";

export class ClickCounterModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  // trigger() {
  //   const divClick = document.getElementById("click");
  //   const clickCounter = divClick.addEventListener("click", e);
  //   if (clickCounter) {
  //     let clickCount = 0;
  //     const clickHandler = () => {
  //       clickCount++;
  //     };
  //     const windowClick = document.createElement("div");
  //     windowClick.className = "click-counter";
  //     document.body.append(windowClick);

  //     setTimeout(() => {
  //       window.removeEventListener("click", clickHandler);
  //       windowClick.innerText = `Сделано: ${clickCount} кликов`;
  //       window.addEventListener("click", clickHandler);
  //     }, 3000);
  //   }
  // }
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
      windowClick.innerText = `Сделано: ${clickCount} кликов`;
      setTimeout(() => {
        windowClick.remove();
      }, 1000);
    }, 3000);
  }
}
