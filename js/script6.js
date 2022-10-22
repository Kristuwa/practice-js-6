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

// const BASE_URL = "https://the-one-api.dev/v2";
// const containerEl = document.querySelector(".container");
// const sentinelEl = document.querySelector(".js-sentinel");
// let page = 1;
// let options = {
//   root: null,
//   rootMargin: "200px",
//   threshold: 1.0,
// };

// let observer = new IntersectionObserver(onScroll, options);

// function onScroll(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       page += 1;
//       getCharacter(page)
//         .then((data) => {
//           containerEl.insertAdjacentHTML(
//             "beforeend",
//             data.docs.map(createMarkup).join("")
//           );

//           if (data.page === data.pages) {
//             observer.unobserve(sentinelEl);
//           }
//         })
//         .catch((error) => console.log(error));
//     }
//   });
// }

// const getCharacter = async function (page = 1) {
//   const options = {
//     headers: {
//       Authorization: "Bearer pWodRJdZ0s_ESpktoiHc",
//     },
//   };
//   const response = await fetch(
//     `${BASE_URL}/character?limit=300&page=${page}`,
//     options
//   );
//   return await response.json();
// };

// getCharacter()
//   .then((data) => {
//     containerEl.insertAdjacentHTML(
//       "beforeend",
//       data.docs.map(createMarkup).join("")
//     );
//     observer.observe(sentinelEl);
//   })
//   .catch((error) => console.log(error));

// function createMarkup({ name, race, gender }) {
//   return `<li>
// 	<p>Имя ${name}</p>
// 	<p>Раса ${race}</p>
// 	<p>Пол ${gender}</p></li>`;
// }

// function noSpace(x) {
//   const newStr = x.replaceAll(" ", "");
//   return newStr;
// }

// console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
// console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
// console.log(noSpace("8aaaaa dddd r     "));

// function isIsogram(str) {
//   const arr = str.toLowerCase().split("");
//   if (arr.length === 0) {
//     return true;
//   }
//   let letter = arr[0];
//   for (let i = 1; i < arr.length; i += 1) {
//     if (letter === arr[i]) {
//       return false;
//     }
//   }

//   return true;
//   //...
// }

// console.log(isIsogram("Dermatoglyphics"));
// console.log(isIsogram("isogram"));
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse"));
// console.log(isIsogram(""));

// var uniqueInOrder = function (iterable) {
//   return iterable.replace(/(.)\1+/g, "$1").split("");
//   //your code here - remember iterable can be a string or an array
// };

// console.log(uniqueInOrder("AAAABBBCCDAABBB"));
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string) {
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
//     return string.indexOf(x) !== -1;
//   });
// }
// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//     default:
//       return "Operation must be one of + - * /";
//   }
// }

// console.log(basicOp("+", 4, 7));
// console.log(basicOp("-", 15, 18));
// console.log(basicOp("*", 2, 3));
// console.log(basicOp("/", 49, 7));

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// function findOdd(A) {
//   let obj = {};

//   for (i = 0; i < A.length; i += 1) {
//     obj[A[i]];
//     obj[A[i]] = 1;
//     for (j = i + 1; j < A.length; j += 1) {
//       if (A[i] === A[j]) {
//         obj[A[i]] += 1;
//         A.splice(j, 1);
//         j -= 1;
//       }
//     }
//   }
//   //happy coding!
//   const keys = Object.keys(obj);
//   for (let key of keys) {
//     if (obj[key] % 2 === 1) {
//       return Number(key);
//     }
//   }
// }

// //другой вариант решения в одну строку)))
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
// function countBy(x, n) {
//   let z = [];
//   let total = x;
//   for (let i = 0; i < n; i += 1) {
//     z.push(total);
//     total += x;
//   }
//   return z;
// }
// console.log(countBy(1, 10));
// console.log(countBy(2, 5));
// const arr = [20, 37, 20, 21];

// function deleteNth(arr, n) {
//   let obj = {};

//   for (i = 0; i < arr.length; i += 1) {
//     obj[arr[i]];
//     obj[arr[i]] = 1;
//     for (j = i + 1; j < arr.length; j += 1) {
//       if (arr[i] === arr[j]) {
//         obj[arr[i]] += 1;

//         if (obj[arr[i]] > n) {
//           arr.splice(j, 1);
//           j -= 1;
//         }
//       }
//     }
//   }

//   return arr;
//   // ...
// }
// // 2вариант решения
// function deleteNth(arr, x) {
//   var cache = {};
//   return arr.filter(function (n) {
//     cache[n] = (cache[n] || 0) + 1;
//     return cache[n] <= x;
//   });
// }
// // 3вариант решения
// const deleteNth = (a, x) => {
// 	let m = {};
// 	return a.filter( v => (m[v] = m[v]+1||1) <= x );
//  }

// console.log(deleteNth([20, 37, 20, 21], 1));
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));

//Построить пирамиду из звездоччек увеличивающуюся в геометр прогрессии
// function towerBuilder(nFloors) {
//   let arr = [];
//   let str = "";
//   const number = nFloors * 2 - 1;
//   //   " ".repeat((nFloors - 1) / 2) + "*" + " ".repeat((nFloors - 1) / 2)
//   for (let i = 0; i < nFloors; i += 1) {
//     str =
//       " ".repeat((number - (i * 2 + 1)) / 2) +
//       "*".repeat(i * 2 + 1) +
//       " ".repeat((number - (i * 2 + 1)) / 2);
//     arr.push(str);
//   }
//   return arr;
//   // build here
// }

// console.log(towerBuilder(3));
// console.log(towerBuilder(5));
// function sortArray(array) {
//   let arr = [];
//   let arr1 = array.filter((elem) => elem % 2 !== 0);
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] % 2 === 0) {
//       arr.push(array[i]);
//     } else {
//       const elem = Math.min(...arr1);
//       console.log(elem);
//       arr.push(elem);
//       arr1.splice(arr1.indexOf(elem), 1);
//     }
//   }
//   return arr;
//   // Return a sorted array.
// }

// function sortArray(array) {
//   const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//   return array.map((x) => (x % 2 ? odd.shift() : x));
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]));
// console.log(sortArray([-1, 3]));
// console.log(Infinity % 2 === 0);
// console.log(Infinity % 2 === 1);

// String.prototype.toJadenCase = function () {
//   const arr = this.split(" ");
//   console.log(arr);
//   return arr
//     .map((elem) => elem.replace(elem[0], elem[0].toUpperCase()))
//     .join(" ");
//   //...
// };
// const str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());

// // Повертає true якщо рядок у першому елементі масиву містить усі літери рядка у другому елементі масиву.

// // Наприклад, для ["hello", "Hello"] має повертати true тому що всі літери у другому рядку присутні й у першому, незважаючи на їх регістр.

// // Аргументи ["hello", "hey"] мають повертати false, тому що рядок hello не містить літеру y.

// // Зрештою, для ["Alien", "line"] має повертати true, тому що всі літери словаline присутні у слові Alien.

// function mutation(arr) {
// 	const arrNew1 = arr[0].toLowerCase().split((''));
// 	const arrNew2 = arr[1].toLowerCase().split((''));
// 	let total = 0;
// 	console.log(arrNew1);
// 	 console.log(arrNew2);
// 	 for(let i=0;i<arrNew2.length; i+=1) {
// 		if(arrNew1.includes(arrNew2[i])) {
//   total+=1;
// 		}
// 	 }
// 	 if(total===arrNew2.length){
// 		return true;
// 	 }
// 	 return false;
//   }

//   console.log(mutation(["Alien", "line"]));
// // Алгоритм Chunky Monkey
// // Напишіть функцію, яка ділить масив (перший аргумент) у групи: довжина size (другий аргумент) і повертає їх у вигляді двовимірного масиву.
// function chunkArrayInGroups(arr, size) {
//   let arrNew = [];
//   const length = Math.ceil(arr.length / size);
//   console.log(length);
//   //  console.log(arr.splice(0,2));
//   //  console.log(arr.splice(0,2));
//   for (let i = 1; i <= length; i += 1) {
//     arrNew.push(arr.splice(0, size));
//   }
//   return arrNew;
// }

// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

//create method map
// // Глобальна змінна
// const s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback) {
//   const newArray = [];

// for(let elem of this) {
//     newArray.push(callback(elem))
// }
//   return newArray;
// };

// const new_s = s.myMap(function(item) {
//   return item * 2;
// });
// console.log(new_s);

// *****************

// // Напишіть ваш власний Array.prototype.myFilter(), який буде поводити себе точно так як Array.prototype.filter(). Не варто використовувати вбудований метод filter. Приклад Array може бути доступним за допомогою методу myFilter з використанням this.
// // Глобальна змінна
// const s = [23, 65, 98, 5];

// Array.prototype.myFilter = function (callback) {
//   // Змініть код лише під цим рядком
//   const newArray = [];
//   for (let elem of this) {
//     if (callback(elem)) {
//       newArray.push(elem);
//     }
//   }
//   // Змініть код лише над цим рядком
//   return newArray;
// };

// const new_s = s.myFilter(function (item) {
//   return item % 2 === 1;
// });

// console.log(new_s);

// *****************

// Змінна watchList містить масив об’єктів з інформацією щодо декількох фільмів. Використовуйте reduce, щоб знайти середній рейтинг IMDB фільмів режисера Крістофера Нолана. Пригадайте з попередніх проблем, як дані filter та map можуть витягнути те, що нам потрібно. Можливо, доведеться створити інші змінні та повернути середній рейтинг із функції getRating. Зверніть увагу, що рейтингові значення зберігаються як рядки в об’єкті і їх потрібно перетворити в числа перш ніж вони будуть використані в будь-яких математичних операціях.
// // Глобальна змінна
// const watchList = [
// 	{
// 	  "Title": "Inception",
// 	  "Year": "2010",
// 	  "Rated": "PG-13",
// 	  "Released": "16 Jul 2010",
// 	  "Runtime": "148 min",
// 	  "Genre": "Action, Adventure, Crime",
// 	  "Director": "Christopher Nolan",
// 	  "Writer": "Christopher Nolan",
// 	  "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
// 	  "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
// 	  "Language": "English, Japanese, French",
// 	  "Country": "USA, UK",
// 	  "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
// 	  "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
// 	  "Metascore": "74",
// 	  "imdbRating": "8.8",
// 	  "imdbVotes": "1,446,708",
// 	  "imdbID": "tt1375666",
// 	  "Type": "movie",
// 	  "Response": "True"
// 	},
// 	{
// 	  "Title": "Interstellar",
// 	  "Year": "2014",
// 	  "Rated": "PG-13",
// 	  "Released": "07 Nov 2014",
// 	  "Runtime": "169 min",
// 	  "Genre": "Adventure, Drama, Sci-Fi",
// 	  "Director": "Christopher Nolan",
// 	  "Writer": "Jonathan Nolan, Christopher Nolan",
// 	  "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
// 	  "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
// 	  "Language": "English",
// 	  "Country": "USA, UK",
// 	  "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
// 	  "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
// 	  "Metascore": "74",
// 	  "imdbRating": "8.6",
// 	  "imdbVotes": "910,366",
// 	  "imdbID": "tt0816692",
// 	  "Type": "movie",
// 	  "Response": "True"
// 	},
// 	{
// 	  "Title": "The Dark Knight",
// 	  "Year": "2008",
// 	  "Rated": "PG-13",
// 	  "Released": "18 Jul 2008",
// 	  "Runtime": "152 min",
// 	  "Genre": "Action, Adventure, Crime",
// 	  "Director": "Christopher Nolan",
// 	  "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
// 	  "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
// 	  "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
// 	  "Language": "English, Mandarin",
// 	  "Country": "USA, UK",
// 	  "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
// 	  "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
// 	  "Metascore": "82",
// 	  "imdbRating": "9.0",
// 	  "imdbVotes": "1,652,832",
// 	  "imdbID": "tt0468569",
// 	  "Type": "movie",
// 	  "Response": "True"
// 	},
// 	{
// 	  "Title": "Batman Begins",
// 	  "Year": "2005",
// 	  "Rated": "PG-13",
// 	  "Released": "15 Jun 2005",
// 	  "Runtime": "140 min",
// 	  "Genre": "Action, Adventure",
// 	  "Director": "Christopher Nolan",
// 	  "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
// 	  "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
// 	  "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
// 	  "Language": "English, Urdu, Mandarin",
// 	  "Country": "USA, UK",
// 	  "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
// 	  "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
// 	  "Metascore": "70",
// 	  "imdbRating": "8.3",
// 	  "imdbVotes": "972,584",
// 	  "imdbID": "tt0372784",
// 	  "Type": "movie",
// 	  "Response": "True"
// 	},
// 	{
// 	  "Title": "Avatar",
// 	  "Year": "2009",
// 	  "Rated": "PG-13",
// 	  "Released": "18 Dec 2009",
// 	  "Runtime": "162 min",
// 	  "Genre": "Action, Adventure, Fantasy",
// 	  "Director": "James Cameron",
// 	  "Writer": "James Cameron",
// 	  "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
// 	  "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
// 	  "Language": "English, Spanish",
// 	  "Country": "USA, UK",
// 	  "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
// 	  "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
// 	  "Metascore": "83",
// 	  "imdbRating": "7.9",
// 	  "imdbVotes": "876,575",
// 	  "imdbID": "tt0499549",
// 	  "Type": "movie",
// 	  "Response": "True"
// 	}
//  ];

//  function getRating(watchList) {
// 	// Змініть код лише під цим рядком
// 	 let newArr=[];
//   const averageRating = watchList.reduce((acc,user) => {

// 	 if( user["Director"]==="Christopher Nolan") {
//  acc += Number(user["imdbRating"]);

//  newArr.push(acc);

// 	 }

//  return acc;
//  }, 0)
//  console.log(newArr)
// 	// Змініть код лише над цим рядком
// 	return averageRating/newArr.length;
//  }

//  console.log(getRating(watchList));
