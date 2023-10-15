import { Menu } from "./core/menu";
import { getPositionMenuToWindow } from "./utils";
import { BackgroundModule } from "./modules/background.module";
import { CustomMessageModule } from "./modules/customMessage.module";
import SoundModule from "./modules/sound.module";
import { DayWeekModule } from "./modules/dayWeek.module";

export class ContextMenu extends Menu {
  constructor(selector) {
    super(selector);

    window.addEventListener("resize", () => this.close());

    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      if (this.el.children.length) {
        this.open();
        getPositionMenuToWindow(e, this.el);
      }
    });

    this.el.addEventListener("click", (e) => {
      const { target } = e;
      const menuItem = target.closest("li");
      if (menuItem) {
        const type = target.dataset.type;
        const text = target.textContent;
        this.#runModule(type, text);
        this.close();
      }
    });
  }

  #runModule(type, text) {
    switch (type) {
      case "background":
        const backgroundModule = new BackgroundModule(type, text);
        backgroundModule.trigger();
        break;
      case "message":
        const customMessageModule = new CustomMessageModule(type, text);
        customMessageModule.trigger();
        break;
      case "sound":
        const soundModule = new SoundModule(type, text);
        soundModule.trigger();
        break;
      case "week":
        const dayWeekModule = new DayWeekModule(type, text);
        dayWeekModule.trigger();
    }
  }

  open() {
    this.el.classList.add("open");
  }

  close() {
    this.el.classList.remove("open");
  }

  add(module) {
    this.el.innerHTML += module.toHTML();
  }
}
