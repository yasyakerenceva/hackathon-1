import { CustomMessageModule } from "./modules/customMessage.module";
const message = new CustomMessageModule("message", "Вызвать сообщение");
message.trigger();

// const menuLi = document.getElementsByClassName("menu-custom-message");

// document.addEventListener("click", (event) => {
//   if (event.target === menuLi[0]) {
//     message.trigger();
//   }
// });
