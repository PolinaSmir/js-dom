const button = document.querySelectorAll("button");
const div = document.querySelector("#root");

console.dir(button);

for (let btn of button) {
  btn.addEventListener("click", clickHandler);
}

function clickHandler({
  target: {
    dataset: { color },
    parentNode,
  },
}) {
  // const {
  //   dataset: { color },
  // } = target;
  // const { parentNode } = target;

  parentNode.style.backgroundColor = color;
}

function createElement() {
  const p = document.createElement("p");
  p.classList.add("backcolor");
  p.append("Nice color");
  document.body.append(p);
}
createElement();
