export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function getPositionMenuToWindow(event, menu) {
  const { clientX, clientY } = event;
  const { innerWidth, innerHeight } = window;
  const { offsetWidth, offsetHeight } = menu;

  if (innerWidth - clientX < offsetWidth) {
    menu.style.left = `${innerWidth - offsetWidth}px`;
  } else {
    menu.style.left = `${clientX}px`;
  }

  if (innerHeight - clientY < offsetHeight) {
    menu.style.top = `${innerHeight - offsetHeight}px`;
  } else {
    menu.style.top = `${clientY}px`;
  }
}
