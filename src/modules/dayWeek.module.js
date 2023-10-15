import moment from "moment/moment";
import { Module } from "../core/module";
import { changeFirstCharString, getRandomColor } from "../utils";

export class DayWeekModule extends Module {
  #weekWrapper;
  #weekText;

  constructor(type, text) {
    super(type, text);
    this.#weekWrapper = document.createElement("div");
    this.#weekText = document.createElement("span");
  }

  #getdayOfWeek() {
    return changeFirstCharString(moment().locale("ru").format("dddd"));
  }

  trigger() {
    const weekWrapperElement = document.querySelector(".week__wrapper");

    if (weekWrapperElement?.closest(".week__wrapper")) {
      weekWrapperElement.remove();
    }

    this.#weekWrapper.className = "week__wrapper";
    this.#weekText.className = "week__text";
    this.#weekWrapper.append(this.#weekText);
    document.body.append(this.#weekWrapper);

    this.#weekText.textContent = this.#getdayOfWeek();
    this.#weekText.style.color = getRandomColor();
  }
}
