import { Module } from "./core/module";
import { ContextMenu } from "./menu";
import "./styles.css";

const options = [
  {
    type: "background",
    text: "Поменять цвет фона",
  },
  {
    type: "message",
    text: "Вызвать сообщение",
  },
  {
    type: "sound",
    text: "Воспроизвести звук",
  },
  {
    type: "week",
    text: "Показать день недели",
  },
  {
    type: "timer",
    text: "Показать таймер",
  },
  {
    type: "click",
    text: "Считать клики (за 3 секунды)",
  }
];

const contextMenu = new ContextMenu("#menu");

options.forEach((option) => {
  const module = new Module(option.type, option.text);
  contextMenu.add(module);
});
