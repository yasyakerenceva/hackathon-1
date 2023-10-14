import { Module } from "../core/module";
import { generateRandomString } from "../utils";

const messageDivWrapper = document.createElement("div");
messageDivWrapper.className = "custom-message__wrapper";
document.body.appendChild(messageDivWrapper);

export class CustomMessageModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  addElement() {
    const getMessageDivWrapper = document.getElementsByClassName(
      "custom-message__wrapper"
    );
    const messageDiv = document.createElement("div");
    messageDiv.className = "custom-message";
    messageDiv.textContent = generateRandomString();

    getMessageDivWrapper[0].appendChild(messageDiv);

    setTimeout(() => {
      messageDiv.remove();
    }, 3000);
  }

  handleClick() {
    this.addElement();
  }
}
