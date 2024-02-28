/* <article>
  <div>
    <img
      src="https://randomuser.me/api/portraits/men/77.jpg"
      alt="User's avatar"
    />
  </div>
  <p>
    Им'я, фамiлiя: <span id="name-surname">John</span>
  </p>
  <p>
    Email: <span id="email">a@mail.com</span>
  </p>
  <p>
    Адреса: <span id="adress">adress</span>
  </p>
  <p>
    День народження: <span id="birthday">01.01.2000</span>
  </p>
</article>; */
const URL = "https://randomuser.me/api";
const btn = document.querySelector(".btn-load-usr");
const section = document.querySelector("section");

btn.addEventListener("click", buttonClick);

function buttonClick() {
  getData(URL);
}

async function getData(url) {
  const u = fetch(url);
  const response = await u;
  const data = await response.json();

  displayCard(data);
}

function displayCard(userData) {
  const arrayData = userData.results[0];
  const {
    picture: { large },
    email,
    name: { first, last },
    location: {
      street: { number, name },
    },
    dob: { date },
  } = arrayData;

  const birthdayDate = new Date(date);
  day = birthdayDate.getDate();
  month = birthdayDate.getMonth();
  year = birthdayDate.getFullYear();

  const article = document.querySelector("#card");
  article.classList.add("card-display");

  const nameSurname = document.querySelector("#name-surname");
  nameSurname.textContent = `${first} ${last}`;

  const userEmail = document.querySelector("#email");
  userEmail.textContent = email;

  const userAdress = document.querySelector("#adress");
  userAdress.textContent = `${number} ${name}`;

  const userBirthday = document.querySelector("#birthday");
  userBirthday.textContent = `${day}/${month}/${year}`;

  const div = document.querySelector("div");
  const img = document.querySelector("img");
  img.setAttribute("src", large);
  //div.append(img);

  //const article = document.createElement("article");
  // const pName = document.createElement("p");
  // pName.append(`Им'я, фамiлiя: ${first} ${last}`);
  // const pEmail = document.createElement("p");
  // pEmail.append(`Email: ${email}`);
  // const pAdress = document.createElement("p");
  // pAdress.append(`Адреса: ${number} ${name}`);
  // const pBirthday = document.createElement("p");
  // pBirthday.append(`День народження: ${day}/${month + 1}/${year}`);
  // article.append(div, pName, pEmail, pAdress, pBirthday);
  // section.append(article);
}
