import { Module } from "../core/module";
import { generateRandomString } from "../utils";

export class CustomMessageModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    const messageDivWrapper = document.createElement("div");
    messageDivWrapper.className = "custom-message__wrapper";
    document.body.append(messageDivWrapper);

    const messageDiv = document.createElement("div");
    messageDiv.className = "custom-message";
    messageDiv.textContent = generateRandomString();

    messageDivWrapper.append(messageDiv);

    setTimeout(() => {
      messageDivWrapper.remove();
    }, 3000);
  }

  // handleClick() {
  //   this.trigger();
  // }
}
