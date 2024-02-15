const field = document.querySelector("#game-field");
const box = document.querySelector("#box");

field.addEventListener("click", clickHandler /*, { capture: true }*/);

function clickHandler(event) {
  if (event.currentTarget === event.target) {
    const {
      target: {
        children: { box },
      },
      clientX,
      clientY,
    } = event;

    box.style.top = `${clientY - box.offsetHeight / 2}px`;
    box.style.left = `${clientX - box.offsetWidth / 2}px`;
  } /* if сам по себе фиксит проблему с нажатием на квадрат */
  // if (box.style.left >= "459px") {
  //   box.style.left = `458px`;
  // }
  // if (box.style.left <= "8") {
  //   box.style.left = `8px`;
  // }
}
