// const files = [
//   "index.css",
//   "script.css",
//   "style.css",
//   "step-types.json",
//   "firebase.css",
// ];

// const newArr = files.map((elem) => elem.replace(".css", ".js"));

// console.log(newArr);

// const newArrAll = files.join(",").replaceAll(".css", ".js").split(",");

// console.log(newArrAll);
// Перебрати об'єкт і видалити всі імена які дублюються
// const users = {
//   John: 21,
//   Tory: 18,
//   Kate: 23,
//   Tory: 18,
//   Tory: 18,
//   Pete: 22,
//   John: 21,
// };

// // const keys = Object.keys(users);
// // console.log(keys);

// for (let key in users) {
//   console.log(key);
// }

// console.log(users);

// Потрібно мутувати масив так щоб залишились тільки (імена) елементи типу String.
// const names = ["Anna", 3, 3, "Roma", 17, "Kate", 14, "Oleg"];

// const newArr = names.filter((elem) => typeof elem === "string");

// console.log(newArr);

// for (let i = 0; i < names.length; i += 1) {
//   if (typeof names[i] !== "string") {
//     names.splice(i, 1);
//     i -= 1;
//   }
// }

// console.log(names);
// Bearer 3sru3q0Sisxo4TsZOe23

const BASE_URL = "https://the-one-api.dev/v2";
const containerEl = document.querySelector(".container");
const sentinelEl = document.querySelector(".js-sentinel");
let page = 1;
let options = {
  root: null,
  rootMargin: "200px",
  threshold: 1.0,
};

let observer = new IntersectionObserver(onScroll, options);

function onScroll(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      page += 1;
      getCharacter(page)
        .then((data) => {
          containerEl.insertAdjacentHTML(
            "beforeend",
            data.docs.map(createMarkup).join("")
          );

          if (data.page === data.pages) {
            observer.unobserve(sentinelEl);
          }
        })
        .catch((error) => console.log(error));
    }
  });
}

const getCharacter = async function (page = 1) {
  const options = {
    headers: {
      Authorization: "Bearer pWodRJdZ0s_ESpktoiHc",
    },
  };
  const response = await fetch(
    `${BASE_URL}/character?limit=300&page=${page}`,
    options
  );
  return await response.json();
};

getCharacter()
  .then((data) => {
    containerEl.insertAdjacentHTML(
      "beforeend",
      data.docs.map(createMarkup).join("")
    );
    observer.observe(sentinelEl);
  })
  .catch((error) => console.log(error));

function createMarkup({ name, race, gender }) {
  return `<li>
	<p>Имя ${name}</p>
	<p>Раса ${race}</p>
	<p>Пол ${gender}</p></li>`;
}
