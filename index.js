// const form = document.getElementById("name-form");

// form.addEventListener("submit", consoleForm);

// function consoleForm(event) {
//   event.preventDefault();

//   const form = event.target;
//   const value = form[0].value;
//   console.dir(value);
// }

const form = document.getElementById("formocka");

form.addEventListener("submit", consoleForm);

function consoleForm(event) {
  event.preventDefault();
  const form = event.target;
  const value = form[0].value;
  console.dir(`hello ${value}`);
}
