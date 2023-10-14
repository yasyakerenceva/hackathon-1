import { Module } from "../core/module";

class SoundModule extends Module {
  constructor(type, text) {
    super(type, text);
  };
  trigger() {
    const sound = new Audio(`./assets/sound/${Math.floor(Math.random() * (12 - 1) + 1)}.mp3`);
    sound.addEventListener("canplaythrough", (event) => {
      sound.play();
    }, { once: true })
  }
}
export default SoundModule;
