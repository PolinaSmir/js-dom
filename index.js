const collection = document.getElementsByClassName("paragraph");

// for (let i = 0; i < collection.length; i++) {
//   collection[i].style.color = "green";
// }

for (let p of collection) {
  p.style.color = "green";
}

const btns = document.getElementsByTagName("button");
const arr = [...btns];
//console.log(arr);

arr.forEach((button) => {
  button.style.color = "red";
});

function hello(event) {
  console.log("Hello user!");

  event.target.removeEventListener("click", hello);
}

for (let btn of btns) {
  btn.addEventListener("click", hello);
}

const btn = document.querySelector("button");
// console.log(btn);

const btn2 = document.querySelector(".super-btn");
console.log(btn2);

const btn3 = document.querySelector("#btn-btn");
console.log(btn3);

const btnCollection = document.querySelectorAll("button");
console.log(btnCollection);
