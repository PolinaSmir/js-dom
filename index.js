const root = document.querySelector("#root");

function createUserCard(user) {
  // 1. Create wrapper
  const imgWrapper = createImageWrapper(user);

  // 2. Створення h2
  const h2 = createElement("h2", { classNames: ["username"] }, user.name);

  // 3. Створення p
  const p = createElement(
    "p",
    { classNames: ["description"] },
    user.description
  );

  // 4. Створюємо і повертаємо article, в який вкладені створені img, h2, p
  return createElement(
    "article",
    { classNames: ["card-wrapper"] },
    imgWrapper,
    h2,
    p
  );
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

function imageLoadHandler({ target }) {
  console.log("image successfully loaded");
  const parentWrapper = document.getElementById(`wrapper${target.dataset.id}`);
  parentWrapper.append(target);
}

function imageErrorHandler({ target }) {
  target.remove();
  console.log("image loading error");
}

function createUserImage(user) {
  const img = document.createElement("img");
  img.setAttribute("src", user.profilePicture);
  img.setAttribute("alt", user.name);
  img.dataset.id = user.id;
  img.classList.add("card-image");

  img.addEventListener("load", imageLoadHandler);
  img.addEventListener("error", imageErrorHandler);

  return img;
}

function createImageWrapper(user) {
  // Create zahluska
  const imgWrapper = createElement("div", { classNames: ["image-wrapper"] });
  imgWrapper.setAttribute("id", `wrapper${user.id}`);

  const img = createUserImage(user);

  return imgWrapper;
}
