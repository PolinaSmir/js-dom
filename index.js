// /*
// <article class="card-wrapper">
//         <img
//           class="card-image"
//           src="https://pm1.aminoapps.com/6750/dddd7fbf857879e7a4513d20a85c1c89d5d74a41v2_hq.jpg"
//         />
//         <h2 class="username">John</h2>
//         <p class="description">Description for John</p>
// </article>
// */
// const root = document.querySelector("#root");

// function createUserCard(user) {
//   //const article = createElement("article", { classNames: ["card - wrapper"] });

//   const img = document.createElement("img");
//   img.setAttribute("src", user.profilePicture);
//   img.setAttribute("alt", user.name);
//   img.classList.add("card-image");

//   const h2 = createElement("h2", { classNames: ["username"] }, user.name);

//   const p = createElement(
//     "p",
//     { classNames: ["description"] },
//     user.description
//   );

//   return createElement(
//     "article",
//     { classNames: ["card - wrapper"] },
//     img,
//     h2,
//     p
//   );
// }

// const cardArray = data.map((user) => createUserCard(user));

// root.append(...cardArray);
// /**
//  * @param {String} type
//  * @param {String[]} classNames
//  * @param  {...Node} childNodes
//  * @returns {HTMLElement}
//  */
// function createElement(type, { classNames }, ...childNodes) {
//   const elem = document.createElement(type);
//   elem.classList.add(...classNames);
//   elem.append(...childNodes);

//   return elem;
// }

const root = document.querySelector("#root");

function createUserCard(user) {
  // 1. Створення img
  const img = document.createElement("img");
  img.setAttribute("src", user.profilePicture);
  img.setAttribute("alt", user.name);
  img.classList.add("card-image");

  // 2. Створення h2
  const h2 = createElement("h2", { classNames: ["username"] }, user.name);

  // 3. Створення p
  const p = createElement(
    "p",
    { classNames: ["description"] },
    user.description
  );

  // 4. Створюємо і повертаємо article, в який вкладені створені img, h2, p
  return createElement("article", { classNames: ["card-wrapper"] }, img, h2, p);
}

const cardArray = data.map((user) => createUserCard(user));

root.append(...cardArray);

/**
 * @param {String} type - тег елемента, який нам треба створити
 * @param {String[]} classNames - список класів, які треба додати до елемента
 * @param {...Node} childNodes - список дочірніх вузлів
 * @returns {HTMLElement}
 */
function createElement(type, { classNames }, ...childNodes) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.append(...childNodes);

  return elem;
}
