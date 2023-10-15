import { Module } from "../core/module";
import { random } from "../utils";

class SoundModule extends Module {
  constructor(type, text) {
    super(type, text);
  };
  trigger() {
    const sound = new Audio(`./assets/sound/${random(12, 1)}.mp3`);
    sound.addEventListener("canplaythrough", (event) => {
      sound.play();
    }, { once: true })
  }
}
export default SoundModule;
