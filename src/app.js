import { CustomMessageModule } from "./modules/customMessage.module";
import { ClickCounterModule } from "./modules/сlickCounter.module";
const message = new CustomMessageModule("message", "Вызвать сообщение");
message.trigger();

const clickCounter = new ClickCounterModule("message", "Вызвать сообщение");
clickCounter.trigger();
